import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule, 
    CarouselRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CarouselComponent],
})
export class CarouselModule { }
