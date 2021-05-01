import { Injectable }       from '@angular/core';
import { LoginResult }      from '../interfaces/interfaces';
import { DataShareService } from './data-share.service';

@Injectable()
export class UserService {
	logged: boolean = false;
	token: string = '';

	constructor(private dss: DataShareService) {}

	loadLogin() {
		const loginObj = this.dss.getGlobal('login');
		if (loginObj === null){
			this.logout();
		}
		else{
			this.logged = true;
			this.token = loginObj.token;
		}
	}

	saveLogin() {
		const loginObj: LoginResult = {
			status: 'ok',
			token: this.token
		};
		this.dss.setGlobal('login', loginObj);
	}

	logout() {
		this.logged = false;
		this.token = '';
		this.dss.removeGlobal('login');
	}
}
