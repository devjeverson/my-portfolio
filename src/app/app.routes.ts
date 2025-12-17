import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsFrontComponent } from './projects-front/projects-front.component';
import { ProjectsBackComponent } from './projects-back/projects-back.component';
import { ProjectsOpenComponent } from './projects-open/projects-open.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'component-front', component: ProjectsFrontComponent },
  { path: 'component-back', component: ProjectsBackComponent },
  { path: 'component-open', component: ProjectsOpenComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contato', loadComponent: () => import('./contacts/contacts.component').then(m => ContactsComponent),},
  
];
