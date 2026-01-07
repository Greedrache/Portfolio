import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-start-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-section.component.html',
  styleUrl: './start-section.component.scss'
})
export class StartSectionComponent {
  menuOpen = false;
  currentLang: Language = 'en';

  constructor(public translationService: TranslationService) {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    this.menuOpen = false;
  }

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
