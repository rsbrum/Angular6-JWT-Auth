import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtHelperService {

  constructor( private _http: HttpClient) { }

  checkToken() {
    return this._http.get(environment.api + '/users/verify');
  }

}
