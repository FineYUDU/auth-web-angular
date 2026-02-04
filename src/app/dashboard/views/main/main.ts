import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NavMenu, Notifications, SettingsMenu, YdButton, YdNavbar } from 'yudu-component-kit';

import { AuthApi } from '@core/http/auth-api';

import { LogoLoader } from "@shared/components/logo-loader/logo-loader";
@Component({
  selector: 'app-main',
  imports: [
    YdButton,
    RouterLink,
    LogoLoader,
    YdNavbar
],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export default class Main implements OnInit {

  public auth = inject( AuthApi );

  public profileImg = computed<string | undefined >(()=> this.auth.user()?.profileImageUrl );

  public companyLogo = signal<string>('../../../../assets/img/logo.svg')
  
  public navMenu = computed<NavMenu[]>(() => [
    {
      label:'Home',
      route:'',
      icon:'home',
    },
    {
      label:'About',
      route:'',
      icon:'angle-double-up',
    },
    {
      label:'Services',
      route:'',
      icon:'server',
    },
  ]);

  public settingsMenu = computed<SettingsMenu[]>( ()=> [
    {
      icon:'user',
      label:'Profile',
      route:'',
    },
    {
      icon:'cog',
      label:'Settings',
      route:'',
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
  
  ngOnInit(): void {
    console.log({user:this.auth.user()});
  }
  
}
