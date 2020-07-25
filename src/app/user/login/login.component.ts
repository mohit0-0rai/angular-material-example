import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private login: Login;
  errorMessage: string;
  hover: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.login = new Login();
    this.errorMessage = null;
    console.log(this.loginForm);
  }

  onSubmit(): void {

    this.login.email = this.loginForm.get('email').value;
    this.login.password = this.loginForm.get('password').value;

    if (this.loginForm.valid) {
      this.authService.login(this.login).subscribe((data) => {
        if (this.authService.isLoggedIn) {
          if (this.authService.redirectUrl === '') {
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate([this.authService.redirectUrl]);
          }
        } else {
          this.errorMessage = 'Invalid Credentials';
        }
      });
    }
  }
}
