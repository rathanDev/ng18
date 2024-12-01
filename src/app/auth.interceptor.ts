import {
    HttpInterceptorFn
} from '@angular/common/http';
import { ACCESS_TOKEN_KEY } from './constant';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = getAccessToken();
  console.log("AccessToken", accessToken);

  if (!accessToken) {
    return next(req);
  }

  const reqWithHeader = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return next(reqWithHeader);
};

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}
