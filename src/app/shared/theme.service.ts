import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkTheme: boolean;

  constructor() {
    this.isDarkTheme = false;
   }


}
