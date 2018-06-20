import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/session/session.service';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _session: SessionService, private _http: HttpClient, private _router: Router ) { }

  user: User;
  jwt: string[];

  ngOnInit() {
    const token = JSON.parse(localStorage.getItem('tokens'));

    this.user = JSON.parse(this._session.getSession());
    this.jwt = localStorage.getItem('token').split('.');

    this._http.get('http://localhost:5000/posts').subscribe(res => {console.log(res) } , err => {console.log(err)});
  }

  logOut() {
    sessionStorage.removeItem('currentUser');
    this._router.navigate(['']);
  }

}
