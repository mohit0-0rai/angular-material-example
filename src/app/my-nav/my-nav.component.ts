import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../user/login/auth.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {

  public isMenuOpen = true;
  @ViewChild('drawer') drawer: MatSidenav;
  @ViewChild('themeTag') themeTag: ElementRef;
  public navContents = [
    'Home',
    'Dashboard'
  ];
  public isDarkTheme: boolean;

  constructor(private breakpointObserver: BreakpointObserver, @Inject(DOCUMENT) document, public authService: AuthService) {}

  ngOnInit(): void {
    this.isDarkTheme = false;
  }

  toggleMenu(): void {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onToggleChange(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.getElementById('themeTag').classList.remove('light-theme');
      document.getElementById('themeTag').classList.add('dark-theme');
    } else {
      document.getElementById('themeTag').classList.remove('dark-theme');
      document.getElementById('themeTag').classList.add('theme-theme');
    }
  }

}
