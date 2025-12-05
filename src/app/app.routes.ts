import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'auth',
        children:[
            {
                path:'main',
                loadComponent:()=> import('./auth/views/main/main')
            },
            {
                path:'login',
                loadComponent:()=> import('./auth/views/login/login')
            },
            {
                path:'create-accout',
                loadComponent:()=> import('./auth/views/create-accout/create-accout')
            },
            { path:'**', pathMatch:'full', redirectTo:'main'}
        ]
    },
    { path:'**', pathMatch:'full', redirectTo:'auth'}
];
