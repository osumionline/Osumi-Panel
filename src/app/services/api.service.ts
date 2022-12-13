import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginResult,
  ModulesResult,
  StatusResult,
} from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  checkPass(): Observable<StatusResult> {
    return this.http.post<StatusResult>(this.apiUrl + 'checkPass', {});
  }

  setPass(pass: string): Observable<StatusResult> {
    return this.http.post<StatusResult>(this.apiUrl + 'setPass', { pass });
  }

  login(pass: string): Observable<LoginResult> {
    return this.http.post<LoginResult>(this.apiUrl + 'login', { pass });
  }

  getModules(): Observable<ModulesResult> {
    return this.http.post<ModulesResult>(this.apiUrl + 'getModules', {});
  }
}
