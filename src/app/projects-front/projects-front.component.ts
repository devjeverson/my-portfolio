import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Project {
  title: string;
  image: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-projects-front',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './projects-front.component.html',
  styleUrl: './projects-front.component.scss'
})
export class ProjectsFrontComponent {
 
   projects: Project[] = [
    {
      title: 'Flip Clock',
      image: 'assets/projects-front/flip-clock.png',
      summary: 'Projeto de portfólio feito em Angular 18, com layout responsivo e integração de rotas',
      link: 'https://github.com/seuusuario/seurepositorio1'
    },
    {
      title: 'Games Room',
      image: 'assets/projects-front/game-rom.png',
      summary: 'Aplicação web desenvolvida com Angular 18 (standalone), que consome a API pública da FreeToGame para listar e filtrar jogos gratuitos por plataforma e gênero. Utiliza SCSS customizado com tema gamer neon/cyberpunk, arquitetura modular com componentes reutilizáveis e integração via HttpClient. O layout é responsivo, com navegação intuitiva em SPA e animações suaves, oferecendo uma experiência imersiva para fãs de jogos online.',
      link: 'https://github.com/devjeverson/games-room.git'
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

