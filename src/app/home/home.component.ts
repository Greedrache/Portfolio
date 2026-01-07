import { Component } from '@angular/core';
import { StartSectionComponent } from '../start-section/start-section.component';
import { HeaderComponent } from '../header/header.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { MyProjectsSectionComponent } from '../my-projects-section/my-projects-section.component';
import { ContactMeSectionComponent } from '../contact-me-section/contact-me-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StartSectionComponent,
    HeaderComponent,
    WhyMeSectionComponent,
    SkillsSectionComponent,
    MyProjectsSectionComponent,
    ContactMeSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
