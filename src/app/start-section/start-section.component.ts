import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-section.component.html',
  styleUrl: './start-section.component.scss'
})
export class StartSectionComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
