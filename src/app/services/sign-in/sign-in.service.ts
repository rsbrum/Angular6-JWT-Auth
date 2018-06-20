import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _http: HttpClient) { }

  signIn(data) {
    return this._http.post(environment.api + '/users/signin', data);
  }

}
