import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { NotAuthenticatedGuard } from '@core/guards/not-authenticated.guard';

export const routes: Routes = [
    {
        path:'auth',
        title:'Authentication',
        loadChildren:()=> import('./auth/auth.routes'),
        canMatch: [
            NotAuthenticatedGuard,
        ]
    },
    {
        path:'dashboard',
        title:'Dashboard',
        loadChildren:()=> import('./dashboard/dashboard.routes')
    },
    { 
        path:'**', 
        pathMatch:'full', 
        redirectTo:'auth'
    }
];
