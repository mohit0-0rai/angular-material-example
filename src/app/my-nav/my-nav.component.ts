import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService } from '../user/login/auth.service';
import { ThemeService } from './../shared/theme.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {

  public isMenuOpen = true;
  @ViewChild('drawer') drawer: MatSidenav;
  public navContents = [
    'Home',
    'Dashboard'
  ];

  constructor(@Inject(DOCUMENT) document, public authService: AuthService, public themeService: ThemeService) {}

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onToggleChange(): void {
    this.themeService.isDarkTheme = !this.themeService.isDarkTheme;
  }

}
