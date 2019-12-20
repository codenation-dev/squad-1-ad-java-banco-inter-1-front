import { Injectable, NgModule } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from 'src/app/authentication';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpSentEvent
    | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    if (this.authenticationService.hasActiveUser()) {
      req = req.clone({
        headers: req.headers.set('authorization', this.authenticationService.getAuthenticationContext().authorization),
      });
    } 

    return next.handle(req);

  }

}



@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class Interceptor { }