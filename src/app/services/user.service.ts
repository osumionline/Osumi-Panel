import { Injectable } from '@angular/core';
import { LoginResult } from 'src/app/interfaces/interfaces';
import { DataShareService } from 'src/app/services/data-share.service';

@Injectable()
export class UserService {
  logged: boolean = false;
  token: string = '';

  constructor(private dss: DataShareService) {}

  loadLogin(): void {
    const loginObj: LoginResult = this.dss.getGlobal('login');
    if (loginObj === null) {
      this.logout();
    } else {
      this.logged = true;
      this.token = loginObj.token;
    }
  }

  saveLogin(): void {
    const loginObj: LoginResult = {
      status: 'ok',
      token: this.token,
    };
    this.dss.setGlobal('login', loginObj);
  }

  logout(): void {
    this.logged = false;
    this.token = '';
    this.dss.removeGlobal('login');
  }
}
