import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterOutlet } from '@angular/router';

import { Theme} from 'yudu-component-kit';

import { environment } from '@environments/environment.development';

import { LogoLoader } from "../shared/components/logo-loader/logo-loader";

@Component({
  selector: 'app-auth',
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    LogoLoader,
],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  public theme  = inject( Theme );
  
  public readonly company  = signal<string>(environment.company);

}
