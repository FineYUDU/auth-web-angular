import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from '@core/guards/not-authenticated.guard';
import { AuthenticatedGuard } from '@core/guards/authenticated.guard';

export const routes: Routes = [
    {
        path:'auth',
        title:'Authentication',
        loadChildren:()=> import('./auth/auth.routes'),
        canMatch:[
            NotAuthenticatedGuard,
        ]
    },
    {
        path:'dashboard',
        title:'Dashboard',
        loadChildren:()=> import('./dashboard/dashboard.routes'),
        canMatch:[
            AuthenticatedGuard,
        ]
    },
    { 
        path:'**', 
        pathMatch:'full', 
        redirectTo:'auth'
    }
];
