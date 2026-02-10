import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard";

export const dashboardRoutes:Routes = [
    {
        path:'',
        component:Dashboard,
        children: [
            {
                path:'overview',
                title:'Overview',
                loadComponent: ()=> import('./views/overview/overview')
            },
            {
                path:'settings',
                title:'Settings',
                loadComponent: ()=> import('./views/settings/settings')
            },
            {
                path:'profile',
                title:'Profile',
                loadComponent: ()=> import('./views/profile/profile')
            },
            {
                path:'**',
                redirectTo:'overview'
            }
        ]
    }
];

export default dashboardRoutes;