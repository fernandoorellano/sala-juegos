import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {
  terminoJuego : boolean = true;
  mensajeInicio: string = 'Selecciona inicio para comenzar';
  mensajeValidar: string ='';
  numeroIngresado: number;
  numeroRandom: number;
  estado: string;
  numeroIntento: number;
  confirmacion: boolean=false;

  constructor() {   
    this.estado = "";
    this.numeroIntento = 4;
  }

  generarRandom(){
    this.mensajeInicio="Se genero un numero aleatorio, intenta adivinarlo en menos de 4 intentos";
    this.mensajeValidar='';
    this.confirmacion=true;
    this.numeroRandom = Math.floor(Math.random() * 10);
    console.log("El numero random es: "+this.numeroRandom+" numero intentos: "+this.numeroIntento);
  }

  verificar(){
   

    if( this.numeroIngresado < this.numeroRandom){
      this.numeroIntento--;
      this.mensajeValidar = "El numero debe ser mayor. Te quedan "+this.numeroIntento+"intentos";
    }else{
      if( this.numeroIngresado > this.numeroRandom){
        this.numeroIntento--;
        this.mensajeValidar = "El numero debe ser menor. Te quedan "+this.numeroIntento+"intentos";
    }else{
      if( this.numeroIngresado == this.numeroRandom){
        this.terminoJuego = false;
        this.mensajeInicio="Ganaste! :D";
        this.mensajeValidar='';
        this.confirmacion=false;
        
        this.mensajeValidar='Deseas jugar de nuevo? Clickea en iniciar juego';
        this.numeroIngresado=0;
        }
        }
       
    }
      console.log("Intentos: "+this.numeroIntento);
      if(this.numeroIntento==0){  
        this.numeroIntento=4;
        this.terminoJuego = false; 
        this.mensajeInicio="Te quedaste sin intentos :s";
        this.confirmacion=false;
        this.mensajeValidar='';
        this.mensajeValidar='Deseas jugar de nuevo? Clickea en iniciar juego';
        this.numeroIngresado=0;
      }
    }


  ngOnInit(): void {
  }

}
