import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, MaterialModule],
})
export class HeaderComponent {
  @Input() logged: boolean = false;

  constructor(private router: Router, private user: UserService) {}

  exit(): void {
    this.user.logout();
    this.router.navigate(['/']);
  }
}
