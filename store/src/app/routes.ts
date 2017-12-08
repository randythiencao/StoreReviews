import { Routes } from '@angular/router';
import { RegComponent } from './components/-reg/-reg.component';
import { LoginComponent } from './components/-login/-login.component';
import { MainComponent } from './components/main/main.component';

export const appRoutes: Routes = [

  // routes go here
  {
    path: 'register',
    component: RegComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  }

];
