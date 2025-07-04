import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Project {
  title: string;
  image: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-projects-mobile',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './projects-mobile.component.html',
  styleUrl: './projects-mobile.component.scss'
})
export class ProjectsMobileComponent {
    
  projects: Project[] = [

   {
      title: 'Projeto Ampliado',
      image: 'assets/projeto-ampliado.png',
      summary: 'Outro projeto incrível feito com Angular e design moderno',
      link: 'https://github.com/seuusuario/seurepositorio2'
    },
     {
      title: 'Projeto Ampliado',
      image: 'assets/projeto-ampliado.png',
      summary: 'Outro projeto incrível feito com Angular e design moderno',
      link: 'https://github.com/seuusuario/seurepositorio2'
    },
     {
      title: 'Projeto Ampliado',
      image: 'assets/projeto-ampliado.png',
      summary: 'Outro projeto incrível feito com Angular e design moderno',
      link: 'https://github.com/seuusuario/seurepositorio2'
    },
     {
      title: 'Projeto Ampliado',
      image: 'assets/projeto-ampliado.png',
      summary: 'Outro projeto incrível feito com Angular e design moderno',
      link: 'https://github.com/seuusuario/seurepositorio2'
    },
     {
      title: 'Projeto Ampliado',
      image: 'assets/projeto-ampliado.png',
      summary: 'Outro projeto incrível feito com Angular e design moderno',
      link: 'https://github.com/seuusuario/seurepositorio2'
    },
     {
      title: 'Projeto Ampliado',
      image: 'assets/projeto-ampliado.png',
      summary: 'Outro projeto incrível feito com Angular e design moderno',
      link: 'https://github.com/seuusuario/seurepositorio2'
    }
  ];

  expandedCard: number | null = null;

  toggleExpand(index: number): void {
    this.expandedCard = this.expandedCard === index ? null : index;
  }

  closeCard(event: Event): void {
    event.stopPropagation();
    this.expandedCard = null;
  }

  nextCard(): void {
    if (this.expandedCard !== null) {
      this.expandedCard = (this.expandedCard + 1) % this.projects.length;
    }
  }

  previousCard(): void {
    if (this.expandedCard !== null) {
      this.expandedCard = (this.expandedCard - 1 + this.projects.length) % this.projects.length;
    }
  }

}
