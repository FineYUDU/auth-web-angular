import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

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

}
