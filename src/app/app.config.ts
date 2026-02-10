import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { authInterceptor } from '@core/interceptors/auth.interceprot';

import { routes } from './app.routes';
import { provideYuduI18n } from 'yudu-component-kit/i18n';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    ),
    provideYuduI18n({
      assetPath:'/assets/lang',
      storageKey:'lang',
      defaultLang:'en',
      supportedLangs:['en','es'],
    })
  ]
};
