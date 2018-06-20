import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private _router: Router, private _session: SessionService) { }

  user = this._session.getSession();

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.user) {
      return true;
    } else {
      this._router.navigate(['']);
      return false;
    }
  }

}
