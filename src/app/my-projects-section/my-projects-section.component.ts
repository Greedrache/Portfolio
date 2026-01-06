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
      githubLink: '',
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
      githubLink: 'https://github.com/Greedrache/Pokedex',
      img: 'assets/img/pokedex.jpg'
    }
  ];
}
