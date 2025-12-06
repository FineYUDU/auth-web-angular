import { Routes } from "@angular/router";
import { Auth } from "./auth";


export const authRoutes:Routes = [
    {
        path:'',
        component:Auth,
        children:[
            {
                path:'login',
                loadComponent:()=> import('./views/login/login')
            },
            {
                path:'create-account',
                loadComponent:()=> import('./views/create-account/create-account')
            },
            { 
                path:'**', 
                redirectTo:'login'
            }
        ]
    }
];

export default authRoutes;