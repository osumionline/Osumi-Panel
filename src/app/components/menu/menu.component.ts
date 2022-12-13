import { Component, Input } from '@angular/core';
import { MenuOption } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() selected: string = '';
  options: MenuOption[] = [
    { id: 'config', url: '/config', name: 'Configuración' },
    { id: 'code', url: '/code', name: 'Código' },
    { id: 'model', url: '/model', name: 'Modelo' },
    { id: 'plugins', url: '/plugins', name: 'Plugins' },
    { id: 'updates', url: '/updates', name: 'Actualizaciones' },
  ];
}
