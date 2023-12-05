import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LoginResult } from 'src/app/interfaces/interfaces';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Utils } from 'src/app/shared/utils.class';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    HeaderComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class LoginComponent {
  pass: string = '';
  loading: boolean = false;

  constructor(
    private api: ApiService,
    private user: UserService,
    private router: Router
  ) {}

  login(): void {
    if (this.pass === '') {
      alert('¡No puedes dejar la contraseña en blanco!');
      return;
    }

    this.loading = true;
    this.api.login(this.pass).subscribe((result: LoginResult): void => {
      if (result.status === 'ok') {
        this.user.logged = true;
        this.user.token = Utils.urldecode(result.token);
        this.user.saveLogin();

        this.router.navigate(['/main']);
      } else {
        this.loading = false;
        alert('La contraseña es incorrecta.');
      }
    });
  }
}
