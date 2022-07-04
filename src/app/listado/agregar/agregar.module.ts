import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { AgregarComponent } from './agregar.component';  
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    AgregarComponent,
  ],
  imports: [
    CommonModule,   
    FormsModule
  ],
  exports: [AgregarComponent],
})
export class AgregarModule { }