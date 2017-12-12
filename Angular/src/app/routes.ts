import { Routes } from '@angular/router';
import { RegComponent } from './components/-reg/-reg.component';
import { LoginComponent } from './components/-login/-login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './service/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChangeinfoComponent } from './changeinfo/changeinfo.component';
import { IreviewedComponent } from './ireviewed/ireviewed.component';
import { ChooseComponent } from './components/choose/choose.component';
import { AddComponent } from './components/add/add.component';


export const appRoutes: Routes = [

  // routes go here
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: ChooseComponent
          },
          {
            path:'add/:id',
            component: AddComponent
          }

        ]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'register', component: RegComponent
  },
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'pass',
            component: ChangepassComponent
          },
          {
            path: 'details',
            component: ChangeinfoComponent
          },
          {
            path: 'ireviewed',
            component: IreviewedComponent
          }
        ]
      }
    ]
  },

];
