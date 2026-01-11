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
    errorStates = {
      name: false,
      email: false,
      message: false,
      privacy: false
    };
   
    onInputChange(field: string, input: any): void {
      if (!this.showErrors) return;
      switch (field) {
        case 'name':
          this.errorStates.name = !(input.value && input.value.trim() !== '' && input.value.length >= 3);
          break;
        case 'email':
          this.errorStates.email = !(input.value && input.value.trim() !== '' && this.isValidEmail(input.value));
          break;
        case 'message':
          this.errorStates.message = !(input.value && input.value.trim() !== '' && input.value.length >= 10);
          break;
        case 'privacy':
          this.errorStates.privacy = !input.checked;
          break;
      }
    }
  showErrors = false;
  showSuccessMessage = false;

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

    this.errorStates.name = !(nameInput.value && nameInput.value.trim() !== '' && nameInput.value.length >= 3);
    this.errorStates.email = !(emailInput.value && emailInput.value.trim() !== '' && this.isValidEmail(emailInput.value));
    this.errorStates.message = !(messageInput.value && messageInput.value.trim() !== '' && messageInput.value.length >= 10);
    this.errorStates.privacy = !privacyCheckbox.checked;
    this.showErrors = this.errorStates.name || this.errorStates.email || this.errorStates.message || this.errorStates.privacy;

    if (!this.showErrors) {

      const data = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      };

      fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          // Success - show toast
          this.showSuccessMessage = true;
          this.showErrors = false;
          this.errorStates = { name: false, email: false, message: false, privacy: false };

          // Reset form
          form.reset();
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
          privacyCheckbox.checked = false;

          // Hide success message after 3 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        } else {
          alert('Es gab einen Fehler beim Versenden: ' + (result.error || 'Unbekannter Fehler'));
        }
      })
      .catch(() => {
        alert('Es gab einen Fehler beim Versenden. Versuche es später erneut.');
      });
    }
  }
}
