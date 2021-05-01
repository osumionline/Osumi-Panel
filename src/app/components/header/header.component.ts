import { Component, OnInit, Input } from '@angular/core';
import { Router }                   from '@angular/router';
import { UserService }              from '../../services/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() logged: boolean = false;

	constructor(private router: Router, private user: UserService) {}

	ngOnInit(): void {}

	exit(): void {
		this.user.logout();
		this.router.navigate(['/']);
	}
}
