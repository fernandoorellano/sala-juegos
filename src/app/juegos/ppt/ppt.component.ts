import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  
    puntuacion: number = 0;
    puntajePc: number = 0;
    mensaje: string = 'Selecciona una opcion para comenzar'; 
    max: number = 3;
    min: number = 1;  
    seleccionPc: string = ''; //para empezar como de vacío
   
  
    constructor() {} 
  
    juego(seleccion: string) {
    
      this.mensaje = '';
        
  
      this.mensaje = this.mensaje+'Elegiste '+seleccion+'. La computadora selecciona...';
  
      setTimeout(() => {
        var random = Math.floor(Math.random() * (0 - 3) * -1); 
        switch (random) {
          case 0:
            this.seleccionPc = 'piedra';
            break;
          case 1:
            this.seleccionPc = 'papel';
            break;
          case 2:
            this.seleccionPc = 'tijera';
            break;
        }
        
        if (this.seleccionPc == seleccion) {
          this.mensaje = this.mensaje+this.seleccionPc+'. Empataste';
        } 
        else if (
            (this.seleccionPc == 'piedra' && seleccion == 'tijera') ||
            (this.seleccionPc == 'papel' && seleccion == 'piedra') ||
            (this.seleccionPc == 'tijera' && seleccion == 'papel')
          ) {
            this.mensaje = this.mensaje+this.seleccionPc+'. Perdiste';
            this.puntajePc++;
          } else if (
              (this.seleccionPc == 'tijera' && seleccion == 'piedra') ||
              (this.seleccionPc == 'piedra' && seleccion == 'papel') ||
              (this.seleccionPc == 'papel' && seleccion == 'tijera')
            ) {
              this.puntuacion++;
              this.mensaje = this.mensaje+this.seleccionPc+'. Ganaste';
            } 
   
      }, 1000); 
    }
    ngOnInit(): void {}
  } 
