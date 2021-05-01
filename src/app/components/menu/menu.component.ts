import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '../../interfaces/interfaces';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	@Input() selected: string = '';
	options: MenuOption[] = [
		{id: 'config',  url: '/config',  name: 'Configuración'},
		{id: 'code',    url: '/code',    name: 'Código'},
		{id: 'model',   url: '/model',   name: 'Modelo'},
		{id: 'plugins', url: '/plugins', name: 'Plugins'},
		{id: 'updates', url: '/updates', name: 'Actualizaciones'}
	];

	constructor() {}
	ngOnInit(): void {}
}
