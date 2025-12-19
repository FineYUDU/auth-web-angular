import { Component, inject } from '@angular/core';

import { Auth } from '@core/http/auth';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export default class Main {

  public auth = inject( Auth );
  
}
