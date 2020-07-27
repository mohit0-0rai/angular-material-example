import { User } from './../../shared/user';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { tap } from 'rxjs/operators';
import { ResponseData } from 'src/app/shared/ResponseData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  currentUser: BehaviorSubject<User>;
  redirectUrl: string;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUser = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentuser')));
    this.isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
  }

  get getCurrentUser(): User {
    return this.currentUser.value;
  }

  login(login: Login): Observable<ResponseData> {
    const url = `http://localhost:8080/materialdemo/login`;
    return this.http.post<ResponseData>(url, login).pipe(
      tap(data => {
        console.log(data.code);
        if (data.code === '200') {
          this.isLoggedIn = true;
          console.log(JSON.stringify(data.data));
        } else { this.isLoggedIn = false; }
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.currentUser.next(null);
    this.router.navigate(['/home']);
  }

}
