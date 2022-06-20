import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component'; 
import { RegisterModule } from '../auth/register/register.module'; 
 

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    RegisterModule, 
  ]
})
export class HomeModule { }
