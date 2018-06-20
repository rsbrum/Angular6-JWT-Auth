import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _http: HttpClient) { }

  signUp(data: any) {
    return this._http.post(environment.api + '/users/signup', data);
  }

}
