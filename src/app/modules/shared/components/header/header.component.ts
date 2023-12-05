import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbarModule, MatButtonModule],
})
export class HeaderComponent {
  @Input() logged: boolean = false;

  constructor(private router: Router, private user: UserService) {}

  exit(): void {
    this.user.logout();
    this.router.navigate(['/']);
  }
}
