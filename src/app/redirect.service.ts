import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  toLogin() {
    console.log("toLogin");
    this.router.navigate(['/']);
  }

  toDashboard() {
    console.log("toDashboard");
    this.router.navigate(['/dashboard']);
  }

}
