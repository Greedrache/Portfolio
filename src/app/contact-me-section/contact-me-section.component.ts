import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
  showErrors = false;

  constructor(public translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  isFormValid(nameInput: any, emailInput: any, messageInput: any, privacyCheckbox: any): boolean {
    if (!nameInput || !emailInput || !messageInput || !privacyCheckbox) return false;
    return nameInput.value?.trim() !== '' && nameInput.value?.length >= 3 && 
           emailInput.value?.trim() !== '' && this.isValidEmail(emailInput.value) && 
           messageInput.value?.trim() !== '' && messageInput.value?.length >= 10 && 
           privacyCheckbox.checked;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit(form: any, nameInput: any, emailInput: any, messageInput: any, privacyCheckbox: any): void {
    this.showErrors = true;
    if (this.isFormValid(nameInput, emailInput, messageInput, privacyCheckbox)) {
      form.submit();
    }
  }
}
