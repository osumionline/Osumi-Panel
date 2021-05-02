/*
 * Páginas
 */
import { SetPassComponent } from './pages/set-pass/set-pass.component';
import { LoginComponent }   from './pages/login/login.component';
import { MainComponent }    from './pages/main/main.component';
import { ConfigComponent }  from './pages/config/config.component';
import { CodeComponent }    from './pages/code/code.component';
import { ModelComponent }   from './pages/model/model.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { UpdatesComponent } from './pages/updates/updates.component';

export const PAGES: any[] = [
	SetPassComponent,
	LoginComponent,
	MainComponent,
	ConfigComponent,
	CodeComponent,
	ModelComponent,
	PluginsComponent,
	UpdatesComponent
];

/*
 * Componentes parciales
 */
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent }   from './components/menu/menu.component';

export const COMPONENTS: any[] = [
	HeaderComponent,
	MenuComponent
];

/*
 * Pipes
 */
export const PIPES: any[] = [

];

/*
 * Servicios
 */
import { DataShareService }   from './services/data-share.service';
import { UserService }        from './services/user.service';
import { AuthService }        from './services/auth.service';
import { ApiService }         from './services/api.service';
import { ClassMapperService } from './services/class-mapper.service';

export const SERVICES: any[] = [
	DataShareService,
	UserService,
	AuthService,
	ApiService,
	ClassMapperService
];

/*
 * Componentes Angular Material
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule }  from '@angular/material/button';
import { MatCardModule }    from '@angular/material/card';
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';

export const MATERIAL: any[] = [
	MatToolbarModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule
];
