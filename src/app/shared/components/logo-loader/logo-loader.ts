import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Theme } from 'yudu-component-kit';

@Component({
  selector: 'logo-loader',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './logo-loader.html',
  styleUrl: './logo-loader.css',
  host: {
    'class':'logo__loader'
  }
})
export class LogoLoader {

  public theme = inject( Theme );

}
