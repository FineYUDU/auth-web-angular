import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { asyncScheduler } from 'rxjs';

import { YdButton } from "yudu-component-kit";
import { YdInput } from "yudu-component-kit";

import { Auth } from '@core/http/auth';
import { Translation } from '@core/services/translation';

import { TranslatePipe } from '@core/pipes/translate.pipe';


import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    TranslatePipe,
    YdButton,
    YdInput,
  ],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export default class CreateAccount {
  private fb = inject( FormBuilder );
  public translation = inject( Translation );
  public auth = inject( Auth );
  public router = inject( Router );

  public hasError = signal<boolean>(false);
  public errorMessage = signal<string | undefined>(undefined);
  public isSubmited = signal<boolean>(false);

  public createAccountForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    firstName:['', [Validators.required, Validators.minLength(3)]],
    lastName:['', [Validators.required, Validators.minLength(3)]],
  });

  public onSubmit():void {
    this.isSubmited.set(true);
    this.hasError.set(false);
    
    const submit = () => {
      this.isSubmited.set(false);

      if(this.createAccountForm.invalid) return;

      const { email, password, firstName, lastName } = this.createAccountForm.value;

      this.auth.createAccount(email!, password!, firstName!, lastName!)
      .subscribe(console.log)


    }
    asyncScheduler.schedule(submit, 2500);
  }


}
