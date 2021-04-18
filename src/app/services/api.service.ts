import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { environment } from '../../environments/environment';

import { LoginResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	apiUrl = environment.apiUrl;

	constructor(private http : HttpClient){}

	login(pass: string): Observable<LoginResult> {
		return this.http.post<LoginResult>(this.apiUrl + 'login', {pass});
	}
}
