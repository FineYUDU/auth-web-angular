import { Routes } from "@angular/router";
import Main from "./views/main/main";

export const dashboardRoutes:Routes = [
    {
        path:'',
        component:Main,
        children: [
            {
                path:'overview',
                title:'Overview',
                loadComponent: ()=> import('./views/main/main')
            },
            {
                path:'**',
                redirectTo:'login'
            }
        ]
    }
];

export default dashboardRoutes;