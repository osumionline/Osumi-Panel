import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Utils } from 'src/app/shared/utils.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pass: string = '';
  loading: boolean = false;

  constructor(
    private api: ApiService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (this.pass === '') {
      alert('¡No puedes dejar la contraseña en blanco!');
      return;
    }

    this.loading = true;
    this.api.login(this.pass).subscribe((result) => {
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
