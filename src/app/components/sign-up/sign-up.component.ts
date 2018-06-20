import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignUpService } from '../../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  });

  constructor( private _signup: SignUpService) { }

  checkPwdFailure() {
    if (this.signupForm.controls.password.value !== this.signupForm.controls.password2.value &&
        this.signupForm.controls.password.touched &&  this.signupForm.controls.password2.touched) {
         return true;
    }
  }

  checkPwdSuccess() {
    if (this.signupForm.controls.password.value === this.signupForm.controls.password2.value &&
      this.signupForm.controls.password.touched &&  this.signupForm.controls.password2.touched) {
       return true;
    }
  }

  ngOnInit() {
  }

  signUp() {
    if (this.checkPwdSuccess() && this.signupForm.valid) {
      const data = {
        email: this.signupForm.controls.email.value,
        name: this.signupForm.controls.name.value,
        password: this.signupForm.controls.password.value
      };
      this._signup.signUp(data).subscribe(
        (res: any) => {
          console.log('registered');
        },
        err => {
          console.log(err);
        });
    }

  }

}
