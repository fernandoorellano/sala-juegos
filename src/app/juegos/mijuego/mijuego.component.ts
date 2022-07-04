import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mijuego',
  templateUrl: './mijuego.component.html',
  styleUrls: ['./mijuego.component.css']
})
export class MijuegoComponent implements OnInit {

  arrayNum: number []=[];
  state=false;
  contadorCeros: number =0;
  contador: number = 0;
  volverJuegos: boolean;
  mensajeErrores: string='';

  constructor() {
    this.arrayNum.length=25; 
    this.volverJuegos= false;
    this.rellenar(); 
  }
 
  ngOnInit(): void {}
   
  mostrarValor(i: number){ 
    this.validar(this.arrayNum, i);
  }

  desabCero(arrayNum: any[], i:number){
    //console.log("numero i: ",arrayNum[i],i);
    if(arrayNum[i]===0){
      this.contador++; 
      //console.log("Hay ",this.contador+" ceros");
      const btn = document.getElementsByClassName('btn')[i] as HTMLButtonElement | null;
      if (btn != null) {
        btn.disabled = true; 
      }
    }//console.log("Ceros: ",this.contadorCeros," cont: ",this.contador);
  }

  desabUno(arrayNum: any[], i:number){ 
    if(arrayNum[i]===1){ 
      const btn = document.getElementsByClassName('btn')[i] as HTMLButtonElement | null;
      if (btn != null) {
        btn.disabled = true; 
      }
    }
  }

  validar(arrayNum: any[], i:number){
    if( arrayNum[i]>=2){
      this.mensajeErrores="Perdiste :s";
      this.state = !this.state;
      for(var e=0;e<25;e++){this.cambiarValor(arrayNum, e);}
      this.volverJuegos = true;
    }else
      if( arrayNum[i]==1){
        this.mensajeErrores="Casi!";
        this.cambiarValor(arrayNum,i);
        this.desabUno(arrayNum, i);
      }else
        if( arrayNum[i]==0){ 
          this.mostrarGano(arrayNum, i);
          this.mensajeErrores="Muy bien! Vas por buen camino";
            if(this.contador>=this.contadorCeros){
              this.mensajeErrores="Ganaste :D";
              this.state = !this.state;
              this.volverJuegos = true;
            } 
      }
    return arrayNum[i];
  }

  cambiarValor(arrayNum: any[],e: number){ 
    if(arrayNum[e]!=2){
    var y = document.getElementsByClassName('btn')[e];
    y.setAttribute("style", "color: inherit");}
  }

  mostrarGano(arrayNum: any[], i: number){ 
    switch(i){
      case 0:
        for(var e=0;e<2;e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e)}
        for(var e=(i+5); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 1:
        for(var e=(i-1);e<3;e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+4); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 2:
        for(var e=(i-1);e<4;e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+4); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 3:
        for(var e=(i-1);e<(i+2);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+4); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 4:
        for(var e=(i-1);e<(i+1);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+4); e<(i+6);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 5:
        for(var e=(i-5);e<(i-3);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i=5);e<(i+2);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+5); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 6:
      case 7:
      case 8:
      case 11:
      case 12:
      case 13:
      case 16:
      case 17:
      case 18: 
        for(var e=(i-6);e<=(i-4);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i-1); e<(i+2);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i+4); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 10:
        for(var e=(i-5);e<(i-3);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i+5); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i=10);e<(i+2);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
      break;

      case 15:
        for(var e=(i-5);e<(i-3);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+5); e<(i+7);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i=15);e<(i+2);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
      break;
        
      case 9:
      case 14:
      case 19:
        for(var e=(i-6); e<(i-4);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i-1);e<(i+1);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
        for(var e=(i+4); e<(i+6);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
      break;

      case 20:
        for(var e=(i-5); e<(i-3);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var i=20;i<22;i++){this.cambiarValor(arrayNum,i);this.desabCero(arrayNum, i);this.desabUno(arrayNum, i);} 
      break;

      case 21:
      case 22:
      case 23:
        for(var e=(i-6); e<(i-3);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i-1);e<(i+2);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
      break;

      case 24:
        for(var e=(i-6); e<(i-4);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);}
        for(var e=(i-1);e<(i+1);e++){this.desabCero(arrayNum, e);this.cambiarValor(arrayNum, e);this.desabUno(arrayNum, e);} 
      break;

      default: console.log("Error");
    }
  }

  rellenar(){
    for(var i=0;i<25;i++){
      let aux = Math.floor(Math.random() * 3);
      if(aux==0){this.contadorCeros++}
      this.arrayNum[i] = aux;
    } 
  } 
   
  recargarJuego(){
    for(var i=0; i<25;i++){
    var y = document.getElementsByClassName('btn')[i];
    y.setAttribute("style", "color: transparent");}
    this.contadorCeros=0;
    this.mensajeErrores='';
    this.volverJuegos=false;
    this.state = !this.state;
    this.rellenar();
    this.contador=0; 
  }

}