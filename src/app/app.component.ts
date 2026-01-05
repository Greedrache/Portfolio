import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartSectionComponent } from './start-section/start-section.component';
import { HeaderComponent } from './header/header.component';
import { WhyMeSectionComponent } from './why-me-section/why-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { MyProjectsSectionComponent } from './my-projects-section/my-projects-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    StartSectionComponent,
    WhyMeSectionComponent,
    SkillsSectionComponent,
    MyProjectsSectionComponent,
    FooterComponent,
    ContactMeSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
