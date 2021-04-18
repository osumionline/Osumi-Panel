import { Component, OnInit } from '@angular/core';
import  { ApiService }       from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	pass: string = '';

	constructor(private api: ApiService) {}
	ngOnInit(): void {}

	login() {
		this.api.login(this.pass).subscribe(result => {
			console.log(result);
		});
	}
}
