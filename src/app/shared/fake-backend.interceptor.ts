import { User } from 'src/app/shared/user';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  user: User = {
    email: 'mohit@rai',
    userName: 'mohitrai',
    firstName: 'Mohit',
    lastName: 'Rai',
    token: 'fake-jwt-token'
  };

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;


    return next.handle(request);
  }
}
