import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsFrontComponent } from './projects-front/projects-front.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'component-front', component: ProjectsFrontComponent },
];
