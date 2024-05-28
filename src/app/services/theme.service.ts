// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem(this.themeKey);
    if (storedTheme === 'dark') {
      this.setDarkMode(true);
    } else {
      this.setDarkMode(false);
    }
  }

  private setDarkMode(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(this.themeKey, 'light');
    }
  }

  toggleTheme(): void {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
  }

  isDarkModeEnabled(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
