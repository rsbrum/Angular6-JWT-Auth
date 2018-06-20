import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  tokens = JSON.parse(localStorage.getItem('tokens'));

  constructor(private _router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cloned = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokens.token} ${this.tokens.refreshToken}`
      }
    });

    return next.handle(cloned).pipe(tap(
    (evt) => {
      if (evt instanceof HttpResponse) {
        const newTokens = evt.headers.get('Authorization');
        console.log(newTokens);
      }

    }, err => {
      console.log(err);
      sessionStorage.removeItem('currentUser');
      this._router.navigate(['']);
    }
    ));
  }

}
