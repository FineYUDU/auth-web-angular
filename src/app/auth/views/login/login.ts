import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { asyncScheduler } from 'rxjs';
import { YdButton } from "yudu-component-kit";

import { Translation } from '@core/services/translation';

import { TranslatePipe } from '@core/pipes/translate.pipe';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@core/http/auth';
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule, 
    YdButton,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  private fb = inject( FormBuilder );
  public translation = inject( Translation );
  public auth = inject(Auth);
  public router = inject(Router);

  public hasError = signal<boolean>(false);
  public isSubmited = signal<boolean>(false);

  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });

  public onSubmit():void {
    this.isSubmited.set(true);
    
    const submit = ()=> {
      this.isSubmited.set(false);

      if(this.loginForm.invalid) {
        this.hasError.set(true);
        return;
      }
      const { email, password } = this.loginForm.value;

      this.auth.login( email!, password!)
      .subscribe((isAuthenticated)=> {
        if(isAuthenticated) {
          this.router.navigateByUrl('/');
          return;
        } 
        this.hasError.set(true);
      })
    }
    asyncScheduler.schedule(submit, 2500);    
  }
  // Check Authentication

  // Register 

  // Logout

}
