import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { catchError, Observable, tap, map, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { User, AuthResponse } from '@core/interfaces';

import { environment } from '@environments/environment.development';

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  public _http = inject( HttpClient );

  public readonly baseUrl:string = (environment.apiUrl);

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));
  private _errorMessage = signal<string | undefined>(undefined);

  checkStatusResource = rxResource({
    stream: () => this.checkStatus(),
  });

  public authStatus = computed<AuthStatus>(()=> {
    if(this._authStatus() === 'checking') return 'checking';

    if(this._user()) {
      return 'authenticated';
    }
    return 'not-authenticated';
  });

  public user = computed<User | null>(()=> this._user());
  public token = computed<string | null>(()=> this._token());
  public errorMessage = computed<string | undefined>(()=> this._errorMessage());

  public login( email:string, password:string ):Observable<boolean> {
    
    return this._http.post<AuthResponse>(`${this.baseUrl}login`,{
      email: email,
      password: password,
    }).pipe(
      map(resp => this.handleAuthSuccess(resp)),
      catchError((error:any)=> this.handleAuthError(error))
    )
  };

  public createAccount( 
    email:string,
    password:string,
    firstName:string,
    lastName:string 
  ):Observable<boolean> {
    return of(true);
  }

  public checkStatus():Observable<boolean> {
    const token = localStorage.getItem('token');
    if( !token ) {
      this.logout();
      return of(false);
    } 

    return this._http.get<AuthResponse>(`${this.baseUrl}check-status`, {
    }).pipe(
      map(resp => this.handleAuthSuccess(resp)),
      catchError((error:any)=> this.handleAuthError(error))
    )
  };

  public logout():void {
    this._user.set(null);
    this._token.set(null);
    this._authStatus.set('not-authenticated');

    localStorage.removeItem('token');
  };

  private handleAuthSuccess({token, user}:AuthResponse):boolean {
    this._user.set(user);
    this._authStatus.set('authenticated');
    this._token.set(token);

    localStorage.setItem('token', token);
    return true;
  };

  private handleAuthError(error:any):Observable<boolean> {
    if(error.name === 'HttpErrorResponse') {

      if(error.statusText === "Unknown Error") this._errorMessage.set('error.unknown');
      else this._errorMessage.set('input.login-error');
      
    }
    this.logout();
    return of(false);
  };
  
}