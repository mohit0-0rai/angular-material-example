import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url = state.url;
    return this.checkLogin(url);

  }

  checkLogin(url: string): boolean|UrlTree {
    if (this.authservice.isLoggedIn) { return true; }

    this.authservice.redirectUrl = url;

    return this.router.parseUrl('/login');
  }

}
