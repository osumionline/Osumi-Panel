import { Routes } from '@angular/router';
import { isLoggedGuardFn } from 'src/app/guard/auth.guard.fn';
import { LoginComponent } from 'src/app/modules/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'set-pass',
    loadComponent: () =>
      import('src/app/modules/pages/set-pass/set-pass.component'),
  },
  {
    path: 'main',
    loadComponent: () => import('src/app/modules/pages/main/main.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'config',
    loadComponent: () =>
      import('src/app/modules/pages/config/config.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'code',
    loadComponent: () => import('src/app/modules/pages/code/code.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'model',
    loadComponent: () => import('src/app/modules/pages/model/model.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'plugins',
    loadComponent: () =>
      import('src/app/modules/pages/plugins/plugins.component'),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'updates',
    loadComponent: () =>
      import('src/app/modules/pages/updates/updates.component'),
    canActivate: [isLoggedGuardFn],
  },
];
