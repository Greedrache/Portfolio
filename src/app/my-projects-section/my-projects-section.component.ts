import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule],  // ← hier hinzufügen
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {

  activeProjectIndex = 0;

  projects = [
    {
      title: '1. Join',
      duration: '2 Months',
      tech: [
        { name: 'HTML', img: 'assets/img/html.png' },
        { name: 'CSS', img: 'assets/img/css.png' },
        { name: 'JavaScript', img: 'assets/img/javascript.png' },
        { name: 'Firebase', img: 'assets/img/firebase.png' },
        { name: 'Git', img: 'assets/img/git.png' }
      ],
      description: 'Join is a web app that lets you sign up and create tasks. You can manage your tasks by "To Do," "In Progress," and "Done," set priorities, and enter deadlines. You can also add contacts to stay organized together.',
      learned: 'In this team project, I gained experience working collaboratively with others. I learned how to structure tasks, communicate effectively within a team, and use Git in a shared workflow.',
      how_clean_code: 'I kept the code clean by structuring the project into reusable components, using clear naming conventions, and adding comments where necessary to support teamwork.',
      githubLink: 'https://github.com/Greedrache/Join',
      img: 'assets/img/join.jpg'
    },
    {
      title: '2. El Pollo Loco',
      duration: '2 Weeks',
      tech: [
        { name: 'HTML', img: 'assets/img/html.png' },
        { name: 'CSS', img: 'assets/img/css.png' },
        { name: 'JavaScript', img: 'assets/img/javascript.png' },
        { name: 'Git', img: 'assets/img/git.png' }
      ],
      description: 'El Pollo Loco is a fun jump-and-run game where you jump on chickens and overcome obstacles. At the end of each round, a giant boss chicken awaits that you must defeat. Speed, timing, and a little strategy are the keys to victory.',
      learned: 'Through this project, I learned how JavaScript classes and modules work together to build structured applications. I also gained a better understanding of game logic and clean code organization.',
      how_clean_code: 'I organized the project using JavaScript classes and modules, with clear file and variable naming to keep the code maintainable.',
      githubLink: 'https://github.com/Greedrache/EL-POLLO-LOCO',
      img: 'assets/img/elpolloloco.jpg'
    },
    {
      title: '3. Pokedex',
      duration: '2 Weeks',
      tech: [
        { name: 'HTML', img: 'assets/img/html.png' },
        { name: 'CSS', img: 'assets/img/css.png' },
        { name: 'JavaScript', img: 'assets/img/javascript.png' },
        { name: 'Git', img: 'assets/img/git.png' },
        { name: 'Firebase', img: 'assets/img/firebase.png' }
      ],
      description: 'Pokedex is an interactive website that introduces all Pokémon and loads their information via an API. Here you can discover the characteristics, types, and abilities of each Pokémon. Perfect for expanding your Pokémon knowledge and learning new things about the world of pocket monsters.',
      learned: 'In this project, I learned how to work with APIs and handle asynchronous data. It also helped me understand how to use frameworks and structure applications more efficiently.',
      how_clean_code: 'The project is structured into reusable components with clear naming and readable code to ensure easy maintenance and scalability. ',
      githubLink: 'https://github.com/Greedrache/Pokedex',
      img: 'assets/img/pokedex.jpg'
    }
  ];
}
