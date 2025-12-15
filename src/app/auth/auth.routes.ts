import { Routes } from "@angular/router";
import { Auth } from "./auth";


export const authRoutes:Routes = [
    {
        path:'',
        component:Auth,
        children:[
            {
                path:'login',
                title:'Login',
                loadComponent:()=> import('./views/login/login')
            },
            {
                path:'create-account',
                title:'Create Account',
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