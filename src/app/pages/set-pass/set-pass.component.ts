import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ApiService }        from '../../services/api.service';

@Component({
	selector: 'app-set-pass',
	templateUrl: './set-pass.component.html',
	styleUrls: ['./set-pass.component.scss']
})
export class SetPassComponent implements OnInit {
	pass: string = '';
	conf: string = '';
	loading: boolean = false;

	constructor(private as: ApiService, private router: Router) {}

	ngOnInit(): void {}

	create(): void {
		if (this.pass==='') {
			alert('¡No puedes dejar la contraseña en blanco!');
			return;
		}
		if (this.conf==='') {
			alert('¡No puedes dejar en blanco la confirmación!');
			return;
		}
		if (this.pass!==this.conf) {
			alert('¡Las contraseñas no coinciden!');
			return;
		}

		this.loading = true;
		this.as.setPass(this.pass).subscribe(result => {
			if (result.status==='ok') {
				this.router.navigate(['/']);
			}
			else {
				this.loading = false;
				alert('¡Ocurrió un error al guardar la contraseña!');
			}
		});
	}
}
