import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { asyncScheduler } from 'rxjs';
import { YdButton } from "yudu-component-kit";

import { Translation } from '@core/services/translation';

import { TranslatePipe } from '@core/pipes/translate.pipe';
import { RouterLink } from '@angular/router';
import { Auth } from '@core/http/auth';
import { LoginUser } from '@core/interfaces';
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
  private fr = inject( FormBuilder );
  public translation = inject( Translation );
  public auth = inject(Auth);

  public hasError = signal<boolean>(false);
  public isSubmited = signal<boolean>(false);

  loginForm = this.fr.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });

  public onSubmit():void {
    // if(this.loginForm.invalid) {
    //   console.log( 'Invalid form');
    //   return;
    // } 
    const submit = ()=> {
      this.isSubmited.set(true);
      const user:LoginUser = {
        email:'fine_567@hotmail.com',
        password:'Qwerty123*'
      }

      console.log(user);
      this.auth.login(user).subscribe({
        next:resp => console.log(resp),
        error:err => console.log(err),
      })
    }
    asyncScheduler.schedule(submit, 1500);
    
    const { email, password } = this.loginForm.value;
    console.log( email, password );

  }

}
