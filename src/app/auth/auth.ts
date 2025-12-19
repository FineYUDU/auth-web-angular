import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { environment } from '@environments/environment.development';

import { Translation } from '@core/services/translation';

import { TranslatePipe } from '@core/pipes/translate.pipe';
import { Theme } from 'yudu-component-kit';

@Component({
  selector: 'app-auth',
  imports: [ 
    RouterOutlet, 
    NgOptimizedImage,
    TranslatePipe, 
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  public translation = inject( Translation );

  public theme  = inject( Theme );
  
  public readonly company  = signal<string>(environment.company);

}
