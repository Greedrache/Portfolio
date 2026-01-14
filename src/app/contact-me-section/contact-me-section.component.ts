import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
      showErrorToast = false;
      errorToastMessage = '';
    errorStates = {
      name: false,
      email: false,
      message: false,
      privacy: false
    };
      touchedStates = {
        name: false,
        email: false,
        message: false
      };
        onInputChange(field: string, input: any): void {
          switch (field) {
            case 'name':
              this.touchedStates.name = true;
              this.errorStates.name = !(input.value && input.value.trim() !== '' && input.value.length >= 3);
              break;
            case 'email':
              this.touchedStates.email = true;
              this.errorStates.email = !(input.value && input.value.trim() !== '' && this.isValidEmail(input.value));
              break;
            case 'message':
              this.touchedStates.message = true;
              this.errorStates.message = !(input.value && input.value.trim() !== '' && input.value.length >= 10);
              break;
            case 'privacy':
              // privacy checkbox should not validate live per requirements
              this.errorStates.privacy = !input.checked;
              break;
          }
        }
  showErrors = false;
  showSuccessMessage = false;
  lastSubmitMessage = '';

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

    console.log('onSubmit called', { name: nameInput?.value, email: emailInput?.value, message: messageInput?.value, privacy: privacyCheckbox?.checked });
    this.lastSubmitMessage = '';
    this.errorStates.name = !(nameInput.value && nameInput.value.trim() !== '' && nameInput.value.length >= 3);
    this.errorStates.email = !(emailInput.value && emailInput.value.trim() !== '' && this.isValidEmail(emailInput.value));
    this.errorStates.message = !(messageInput.value && messageInput.value.trim() !== '' && messageInput.value.length >= 10);
    this.errorStates.privacy = !privacyCheckbox.checked;
    this.showErrors = this.errorStates.name || this.errorStates.email || this.errorStates.message || this.errorStates.privacy;

    if (!this.showErrors) {

      this.lastSubmitMessage = this.t('contact.sending') || 'Sending...';
      console.log('validation passed, sending fetch');
      const data = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      };

      fetch('https://tim-thiele.de/assets/php/send-mail.php', {
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
            this.touchedStates = { name: false, email: false, message: false };

          // Reset form
          form.reset();
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
          privacyCheckbox.checked = false;

          // Hide success message after 3 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
            this.lastSubmitMessage = '';
          }, 3000);
        } else {
          this.errorToastMessage = this.t('contact.errorSend') + (result.error ? ': ' + result.error : '');
          this.showErrorToast = true;
          setTimeout(() => { this.showErrorToast = false; }, 3500);
        }
      })
      .catch(() => {
        this.errorToastMessage = this.t('contact.errorSendAgain');
        this.showErrorToast = true;
        this.lastSubmitMessage = '';
        setTimeout(() => { this.showErrorToast = false; }, 3500);
      });
    } else {
      this.lastSubmitMessage = (this.t('contact.validationFailed') || 'Validation failed');
      setTimeout(() => { this.lastSubmitMessage = ''; }, 3000);
    }
  }
}
