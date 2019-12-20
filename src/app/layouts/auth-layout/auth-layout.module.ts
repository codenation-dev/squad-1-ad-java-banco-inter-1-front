import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { SwaggerUIComponent } from 'src/app/pages/swagger/swagger.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SwaggerUIComponent,
  ]
})
export class AuthLayoutModule { }
