import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: Language = 'en';
  constructor(public translationService: TranslationService, private router: Router) {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
  isOnLegalNoticePage(): boolean {
    return this.router.url.startsWith('/legal-notice');
  }

  setLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
