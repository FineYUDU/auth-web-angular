import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { I18nService } from 'yudu-component-kit/i18n';

import { asyncScheduler } from 'rxjs';

import { YdButton, YdIcon } from "yudu-component-kit";
import { YdInput } from "yudu-component-kit";

import { AuthApi } from '@core/http/auth-api';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    YdButton,
    YdInput,
    YdIcon
],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  private fb = inject( FormBuilder );
  public auth = inject( AuthApi );
  public router = inject( Router );
  public translation = inject( I18nService );

  public hasError = signal<boolean>(false);
  public errorMessage = signal<string | undefined>(undefined);
  public isSubmited = signal<boolean>(false);

  public loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });

  public onSubmit():void {
    this.isSubmited.set(true);
    this.hasError.set(false);
    
    const submit = ()=> {

      const { email, password } = this.loginForm.value;
      
      this.auth.login( email!, password!)
      .subscribe({
        next:(isAuthenticated)=> {
          if(isAuthenticated) {
            this.isSubmited.set(false);
            this.router.navigateByUrl('/dashboard');
            return;
          }
          this.isSubmited.set(false);
          this.errorMessage.set(this.auth.errorMessage())
          this.hasError.set(true);
        },
      })
    }
    asyncScheduler.schedule(submit, 2500);    
  }
}
