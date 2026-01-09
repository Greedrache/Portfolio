import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {

  activeProjectIndex = 0;

  constructor(public translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  projects = [
    {
      title: '1. Join',
      durationKey: 'projects.duration.2months',
      tech: [
        { name: 'HTML', img: 'assets/img/html.png' },
        { name: 'CSS', img: 'assets/img/css.png' },
        { name: 'JavaScript', img: 'assets/img/javascript.png' },
        { name: 'Firebase', img: 'assets/img/firebase.png' },
        { name: 'Git', img: 'assets/img/git.png' }
      ],
      descriptionKey: 'projects.join.description',
      learnedKey: 'projects.join.learned',
      processKey: 'projects.join.process',
      githubLink: 'https://github.com/Greedrache/Join',
      liveTestLink: 'http://tim-thiele.de/Join/',
      img: 'assets/img/join.jpg'
    },
    {
      title: '2. El Pollo Loco',
      durationKey: 'projects.duration.2weeks',
      tech: [
        { name: 'HTML', img: 'assets/img/html.png' },
        { name: 'CSS', img: 'assets/img/css.png' },
        { name: 'JavaScript', img: 'assets/img/javascript.png' },
        { name: 'Git', img: 'assets/img/git.png' }
      ],
      descriptionKey: 'projects.pollo.description',
      learnedKey: 'projects.pollo.learned',
      processKey: 'projects.pollo.process',
      githubLink: 'https://github.com/Greedrache/EL-POLLO-LOCO',
      liveTestLink: 'http://tim-thiele.de/El%20Pollo%20Loco/',
      img: 'assets/img/elpolloloco.jpg'
    }
  ];
}
