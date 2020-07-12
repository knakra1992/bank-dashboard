import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthrorizationService {

  private isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(sessionStorage.getItem('token') != null);

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  login(userName: string, password: string) {
    this._httpClient.post(`${environment.baseUrl}/login`, { userName: userName, password: password }, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .subscribe(x => {
        sessionStorage.setItem('token', x["auth_token"]);
        this.isAuthorized.next(true);

        this._router.navigateByUrl('/dashboard');
      });
  }

  public get isUserAuthorized(): boolean {
    return this.isAuthorized.value;
  }

  public get getAuthToken(): string{
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.clear();
    this.isAuthorized.next(false);

    this._router.navigateByUrl('/login');
  }
}
