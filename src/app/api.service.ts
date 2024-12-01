import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  callApi() {
    this.http
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => console.log(data));
  }
}
