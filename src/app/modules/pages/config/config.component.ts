import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { MenuComponent } from 'src/app/modules/shared/components/menu/menu.component';

@Component({
  standalone: true,
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  imports: [HeaderComponent, MenuComponent],
})
export default class ConfigComponent {}
