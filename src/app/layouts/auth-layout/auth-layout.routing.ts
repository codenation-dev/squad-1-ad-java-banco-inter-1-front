import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { SwaggerUIComponent } from 'src/app/pages/swagger/swagger.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'register',       component: RegisterComponent },
    { path: 'login',          component: LoginComponent },
    { 
        path: 'swagger',   
        component: SwaggerUIComponent
     },
];
