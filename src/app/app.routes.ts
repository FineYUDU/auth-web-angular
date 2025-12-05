import { Routes } from '@angular/router';
import { Auth } from './auth/auth';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:()=> import('./auth/auth.routes')
        // TODO:Guards
    },
    { 
        path:'**', 
        pathMatch:'full', 
        redirectTo:'auth'
    }
];
