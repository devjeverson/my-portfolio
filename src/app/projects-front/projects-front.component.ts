
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  image: string;
  summary: string;
  link: string;
  iframeUrl?: string;
  safeIframeUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-projects-front',
  imports: [CommonModule],
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
      link: 'https://github.com/seuusuario/seurepositorio1',
      iframeUrl: 'https://devjeverson.github.io/my-flip-clock/'
    },
    {
      title: 'Games Room',
      image: 'assets/projects-front/game-rom.png',
      summary: 'Aplicação web desenvolvida com Angular 18 (standalone), que consome a API pública da FreeToGame para listar e filtrar jogos gratuitos por plataforma e gênero. Utiliza SCSS customizado com tema gamer neon/cyberpunk, arquitetura modular com componentes reutilizáveis e integração via HttpClient. O layout é responsivo, com navegação intuitiva em SPA e animações suaves, oferecendo uma experiência imersiva para fãs de jogos online.',
      link: 'https://github.com/devjeverson/games-room.git',
      iframeUrl: 'https://devjeverson.github.io/my-portfolio/'
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

  constructor(private sanitizer: DomSanitizer) {
    this.projects.forEach(project => {
      if (project.iframeUrl) {
        project.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.iframeUrl);
      }
    });
  }

  openCard(index: number) {
    this.expandedCard = index;
  }

  closeCard(event: Event) {
    event.stopPropagation();
    this.expandedCard = null;
  }
}

