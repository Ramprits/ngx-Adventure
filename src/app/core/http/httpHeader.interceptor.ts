import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Trace Url", `${req.url}`);
    const headers = req.headers.set("Content-Type", "application/json");
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}

export class LogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      })
    );
  }
}

export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem("token");
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    });
    return next.handle(authRequest);
  }
}
