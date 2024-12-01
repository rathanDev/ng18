import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ACCESS_TOKEN_KEY, LOGIN_URL, REFRESH_TOKEN_KEY } from './constant';
import { UserCredentials } from './models/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string = '';
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(cred: UserCredentials) {
    console.log('login', cred);
    const validCred: UserCredentials = {
      email: 'john@mail.com',
      password: 'changeme',
    };
    return this.http
      .post(LOGIN_URL, validCred)
      .pipe(tap((data) => this.doLoginUser(validCred.email, data)))
      .subscribe();
  }

  logout() {
    console.log("Logout");
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  private doLoginUser(username: string, tokens: any) {
    this.loggedInUser = username;
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh_token);
  }
}
