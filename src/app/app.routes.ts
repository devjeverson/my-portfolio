import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsFrontComponent } from './projects-front/projects-front.component';
import { ProjectsBackComponent } from './projects-back/projects-back.component';
import { ProjectsMobileComponent } from './projects-mobile/projects-mobile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'component-front', component: ProjectsFrontComponent },
  { path: 'component-back', component: ProjectsBackComponent },
  { path: 'component-mobile', component: ProjectsMobileComponent },

];
