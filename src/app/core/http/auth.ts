import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { User } from '@core/interfaces';

import { environment } from '../../../environments/environment.development';
import { catchError, Observable, tap, map, of } from 'rxjs';
import { AuthResponse } from '@core/interfaces/auth-response.interface';

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  public _http = inject( HttpClient );

  public _baseUrl = signal<string>(environment.apiUrl);
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);

  public authStatus = computed(()=> {
    if(this.authStatus() === 'checking') return 'checking';

    if(this._user()) return 'authenticated';

    return 'not-authenticated';
  });

  public user = computed<User | null>(()=> this._user());

  public login( email:string, password:string ):Observable<boolean> {
    return this._http.post<AuthResponse>(`${this._baseUrl()}login`,{
      email,
      password,
    }).pipe(
      tap(resp => {
        this._user.set(resp.user);
        this._authStatus.set('authenticated');
        this._token.set(resp.token);

        localStorage.setItem('token', resp.token);
      }),
      map(()=> true),
      catchError((error:any)=> {
        this._user.set(null);
        this._token.set(null);
        this._authStatus.set('not-authenticated');
        return of(false)
      })
    )
  };
  
}