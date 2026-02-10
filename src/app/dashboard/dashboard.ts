import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

import { AuthApi } from '@core/http/auth-api';

import { I18nService } from 'yudu-component-kit/i18n';

import { NavMenu, DropdownMenu, Notifications, YdNavbar, Theme, NotificationsFilter } from 'yudu-component-kit';

import { LogoLoader } from '@shared/components/logo-loader/logo-loader';
@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    YdNavbar,
    LogoLoader,
    TitleCasePipe,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
  public translation = inject( I18nService );
  public auth = inject( AuthApi );
  public theme = inject( Theme );

  public profileImg = computed<string | undefined >(()=> this.auth.user()?.profileImageUrl );

  public companyLogo = signal<string>('../../../../assets/img/logo.svg')
  
  public headerMenu = computed<NavMenu[]>(() => [
    {
      label:this.translation.translate('route.overview'),
      value:'overview',
      route:'overview',
      icon:'home',
    },
    {
      label:this.translation.translate('route.employees'),
      value:'employees',
      route:'employees',
      icon:'users',
    },
  ]);

  public userMenu = computed<DropdownMenu[]>( ()=> [
    {
      label:this.translation.translate('route.profile'),
      value:'profile',
      route:'profile',
      icon:'user',
    },
    {
      label:this.translation.translate('route.settings'),
      value:'settings',
      route:'settings',
      icon:'cog',
    },
  ]);

  public notifications = signal<Notifications[]>([
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
  ]);

  public langMenu = computed<DropdownMenu[]>(()=>[
    {
      label:this.translation.translate('lang.lang'),
      value:'translate',
      icon:'language',
      subMenu:[
        {
          label:this.translation.translate('lang.es'),
          value:'es',
          function:()=> {
            this.translation.setLang('es')
          }
        },
        {
          label:this.translation.translate('lang.en'),
          value:'en',
          function:()=> {
            this.translation.setLang('en')
          }
        },
      ]
    }
  ]);

  public themeMenu = computed<DropdownMenu[]>(()=>[
    {
      icon:'palette',
      label:this.translation.translate('theme.theme'),
      value:'theme',
      subMenu:[
        {
          label:this.translation.translate('theme.dark'),
          value:'dark',
          function:()=> {
            this.theme.changeTheme('dark'); 
          }
        },
        {
          label:this.translation.translate('theme.light'),
          value:'light',
          function:()=> {
            this.theme.changeTheme('light'); 
          }
        },
      ]
    }
  ]);
  
  public filtersOptions = computed<NotificationsFilter[]>( () => [
    {
      label:this.translation.translate('notifications.filter.all'),
      value:'all',
    },
    {
      label:this.translation.translate('notifications.filter.week'),
      value:'week',
    },
    {
      label:this.translation.translate('notifications.filter.earlier'),
      value:'earlier',
    },
  ]);

}
