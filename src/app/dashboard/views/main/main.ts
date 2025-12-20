import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";

import { YdButton } from 'yudu-component-kit';

import { AuthApi } from '@core/http/auth-api';

import { LogoLoader } from "@shared/components/logo-loader/logo-loader";
@Component({
  selector: 'app-main',
  imports: [
    YdButton,
    RouterLink,
    LogoLoader
],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export default class Main {

  public auth = inject( AuthApi );
  
}
