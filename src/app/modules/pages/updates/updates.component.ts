import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { MenuComponent } from 'src/app/modules/shared/components/menu/menu.component';

@Component({
  standalone: true,
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss'],
  imports: [HeaderComponent, MenuComponent],
})
export default class UpdatesComponent {}
