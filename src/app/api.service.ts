import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_PRODUCTS_URL } from './constant';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  callApi() {
    return this.http.get(GET_PRODUCTS_URL);
  }
}
