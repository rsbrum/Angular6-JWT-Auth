import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(data: any) {
    data = data.split('.')[1];
    data = JSON.stringify(JSON.parse(atob(data)));
    sessionStorage.setItem('currentUser', data);
  }

  getSession() {
    return sessionStorage.getItem('currentUser');
  }

}
