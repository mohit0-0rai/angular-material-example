import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { ResponseData } from 'src/app/shared/ResponseData';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  redirectUrl: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  login(login: Login): Observable<ResponseData> {
    const url = `http://localhost:8080/materialdemo/login`;
    return this.http.post<ResponseData>(url, login).pipe(
      tap(data => {
        console.log(data.code);
        if (data.code === '200') {
          this.isLoggedIn = true;
        } else { this.isLoggedIn = false; }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

}
