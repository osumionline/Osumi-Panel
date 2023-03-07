import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/modules/pages/login/login.component';

import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'set-pass',
    loadComponent: () =>
      import('src/app/modules/pages/set-pass/set-pass.component'),
  },
  {
    path: 'main',
    loadComponent: () => import('src/app/modules/pages/main/main.component'),
    canActivate: [AuthGuard],
  },
  {
    path: 'config',
    loadComponent: () =>
      import('src/app/modules/pages/config/config.component'),
    canActivate: [AuthGuard],
  },
  {
    path: 'code',
    loadComponent: () => import('src/app/modules/pages/code/code.component'),
    canActivate: [AuthGuard],
  },
  {
    path: 'model',
    loadComponent: () => import('src/app/modules/pages/model/model.component'),
    canActivate: [AuthGuard],
  },
  {
    path: 'plugins',
    loadComponent: () =>
      import('src/app/modules/pages/plugins/plugins.component'),
    canActivate: [AuthGuard],
  },
  {
    path: 'updates',
    loadComponent: () =>
      import('src/app/modules/pages/updates/updates.component'),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
