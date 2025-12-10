import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { LoginUser, LoginResp } from '@core/interfaces';

import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  public _http = inject( HttpClient );
  public _baseUrl = signal<string>(environment.apiUrl);

  public login( user:LoginUser ):Observable<LoginResp> {
    return this._http.post<LoginResp>(`${this._baseUrl()}login`,user);
  };
  
}