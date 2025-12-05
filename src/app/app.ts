import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LocalStorageStore } from 'yudu-component-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly localStorageStore = inject(LocalStorageStore);  
  protected readonly title = signal('auth-web-angular');
}
