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
    state = false;
    volverJuegos: boolean;
  
    constructor() {
      this.volverJuegos= false;
    } 
  
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
            this.puntajePc++;
            this.mensaje = this.mensaje+this.seleccionPc+'. Perdiste';
            
          } else if (
              (this.seleccionPc == 'tijera' && seleccion == 'piedra') ||
              (this.seleccionPc == 'piedra' && seleccion == 'papel') ||
              (this.seleccionPc == 'papel' && seleccion == 'tijera')
            ) {
              this.puntuacion++;
              this.mensaje = this.mensaje+this.seleccionPc+'. Ganaste';
            } 
      this.verificaFinal();
      }, 500); 
    }

    verificaFinal(){
      if(this.puntajePc >= 3){
        this.mensaje="Perdiste :s";
        this.seleccionPc ="";
        this.state = !this.state;
        this.volverJuegos = true;
        this.listarPuntaje();
      }
      if(this.puntuacion>=3){
        this.mensaje="Ganaste!"; 
        this.seleccionPc ="";
        this.state = !this.state;
        this.volverJuegos = true;
        this.listarPuntaje();
      }
      }

      recargarJuego(){ 
        this.volverJuegos=false;
        this.state = !this.state;
        this.mensaje='Selecciona una opcion para comenzar';
        this.puntajePc=0;
        this.puntuacion=0;   
       }

       listarPuntaje(){}


    ngOnInit(): void {}
  } 
