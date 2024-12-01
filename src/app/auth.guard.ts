import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { ACCESS_TOKEN_KEY } from './constant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedirectService } from './redirect.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private redirector: RedirectService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // canActivate(): boolean {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!accessToken) {
      this.redirector.toLogin();
      return false;
    }

    return true;
  }
}
