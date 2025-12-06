import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Translation {

  lang:string;  

  constructor() { 
    this.lang =  localStorage.getItem('lang') || 'es';    
    const lang = this.lang;

    if (!localStorage.getItem('lang')) localStorage.setItem('lang', lang);
      
    if(!lang) localStorage.setItem('lang','es');
        
  }

  get GetLang(): string { return localStorage.getItem('lang') === 'es' ? 'es' : 'en' }

  public changeLang():void {
    const currentLang = localStorage.getItem('lang');
    let lang = currentLang === 'es' ? 'en' : 'es';
    
    localStorage.setItem('lang', lang);
    this.lang = lang;
  }
}