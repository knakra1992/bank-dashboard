import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { AuthrorizationService } from '../auth/authrorization.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _authSvc: AuthrorizationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.endsWith('login')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authSvc.getAuthToken}`
        }
      });
    }

    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        this._authSvc.logout();
      }
      return throwError(err.message);
    }));;
  }
}