import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredentials } from './models/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  callPost(cred: UserCredentials) {
    console.log(cred);
    const validCred: UserCredentials = {
      "email": "john@mail.com",
      "password": "changeme"
    };
    this.http
      .post('https://api.escuelajs.co/api/v1/auth/login', validCred)
      .subscribe((data) => console.log(data));
  }

  callApi() {
    this.http
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => console.log(data));
  }
}
