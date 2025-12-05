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
                path:'create-accout',
                loadComponent:()=> import('./views/create-accout/create-accout')
            },
            { 
                path:'**', 
                redirectTo:'login'
            }
        ]
    }
];

export default authRoutes;