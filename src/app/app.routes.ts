import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'router',
    //canActivate: [AuthGuard],
    loadComponent: () => import('./route/route.page').then((m) => m.RoutePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'recover',
    loadComponent: () => import('./login/recover/recover.page').then( m => m.RecoverPage)
  },
  {
    path: 'change-pass',
    loadComponent: () => import('./login/change-pass/change-pass.page').then( m => m.ChangePassPage)
  }
];
