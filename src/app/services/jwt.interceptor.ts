import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.sevice';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(this.auth.getToken());

    if (currentUser && currentUser.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${currentUser.accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
