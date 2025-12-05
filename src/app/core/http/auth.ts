import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

import { LoginUser } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  public _http = inject( HttpClient );
  public _baseUrl = signal<string>(environment.apiUrl);

  public login( user:LoginUser ) {

  }
  
}