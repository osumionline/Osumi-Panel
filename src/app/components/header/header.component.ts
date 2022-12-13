import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() logged: boolean = false;

  constructor(private router: Router, private user: UserService) {}

  exit(): void {
    this.user.logout();
    this.router.navigate(['/']);
  }
}
