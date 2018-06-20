import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignInService } from '../../services/sign-in/sign-in.service';
import { SessionService } from '../../shared/session/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
                private _signin: SignInService,
                private _router: Router,
                private _session: SessionService
              ) { }

  ngOnInit() {
  }

  checkField(field: string) {
    if (this.signinForm.controls[field].touched && this.signinForm.controls[field].pristine ) {
      return true;
    }
  }

  signIn() {
    const data = {
      email: this.signinForm.controls.email.value,
      password: this.signinForm.controls.password.value
    };

    if (this.signinForm.valid) {
      this._signin.signIn(data)
      .subscribe(
        (res: any) => {
          console.log(res);
          const tokens = {
            token: res.token,
            refreshToken: res.refreshToken
          };
          localStorage.setItem('tokens', JSON.stringify(tokens));
          this._session.setSession(tokens.token);
          this._router.navigate(['/home']);
        },
        error => {console.log(error); }
      );
    }
  }

}
