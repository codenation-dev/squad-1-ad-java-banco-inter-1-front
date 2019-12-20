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

  private redirectUrl = '/login';

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
    } else {
      // this.router.navigateByUrl(this.redirectUrl)
      //   .catch(e => {
      //     this.router.navigate(['']);
      //   });
      // console.log()
    }
    // console.log(req);

    return next.handle(req);

    // return next.handle(req).pipe(
    //   tap(evt => {}),
    //   catchError((error: HttpErrorResponse) => {
    //     // if(event instanceof HttpErrorResponse) {
    //     //   console.log(event)
    //     // }
    //     // if (error.status !== 401) {
    //       // 401 handled in auth.interceptor
    //       console.log(error)  
    //     // }
    //     return error
    //     // return throwError(error);
    //   })
    // );

    // catchError((error: HttpErrorResponse) => {
    //   if (error.status !== 401) {
    //     // 401 handled in auth.interceptor
    //     this.toastr.error(error.message);      
    //   }
    //   return throwError(error);
    // })

    // return next.handle(req).pipe(
    //   // There may be other events besides the response.
    //   filter(event => event instanceof HttpResponse),
    //   tap((event: HttpResponse<any>) => {
    //     console.log(event)
    //     // cache.set(req.urlWithParams, {
    //     //   key: req.urlWithParams,
    //     //   body: event.body,
    //     //   dateAdded: Date.now(),
    //     // });
    //   })
    // );
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