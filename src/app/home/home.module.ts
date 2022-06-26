import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component'; 
import { RegisterModule } from '../auth/register/register.module';  
import { CarouselModule } from '../carousel/carousel.module';
 

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    RegisterModule, 
    CarouselModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
