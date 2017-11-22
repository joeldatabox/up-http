import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import "rxjs/add/operator/do";
import {Observable} from "rxjs/Observable";

export class HeaderInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      setHeaders: {
        "test": `Bearer `
      }
    })).do((event: HttpEvent<any>) => {

    });
  }
}

export const HeaderInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderInterceptor,
  multi: true
};
