import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetPassComponent } from './pages/set-pass/set-pass.component';
import { LoginComponent }   from './pages/login/login.component';
import { MainComponent }    from './pages/main/main.component';
import { ConfigComponent }  from './pages/config/config.component';
import { CodeComponent }    from './pages/code/code.component';
import { ModelComponent }   from './pages/model/model.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { UpdatesComponent } from './pages/updates/updates.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{ path: '',         component: LoginComponent },
	{ path: 'set-pass', component: SetPassComponent },
	{ path: 'main',     component: MainComponent,    canActivate: [AuthGuard] },
	{ path: 'config',   component: ConfigComponent,  canActivate: [AuthGuard] },
	{ path: 'code',     component: CodeComponent,    canActivate: [AuthGuard] },
	{ path: 'model',    component: ModelComponent,   canActivate: [AuthGuard] },
	{ path: 'plugins',  component: PluginsComponent, canActivate: [AuthGuard] },
	{ path: 'updates',  component: UpdatesComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
