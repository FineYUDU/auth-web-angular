import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthApi } from "@core/http/auth-api";

import { Observable } from "rxjs";

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {

  const token = inject( AuthApi ).token();
  // console.log({ token });
  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`,)
  });

  return next(newReq);
  
}