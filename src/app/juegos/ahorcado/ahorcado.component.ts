import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  mensajeError: string='';
  mensajeErrores: string='';
  mensajeIngreso: string='ingrese una letra';
  espacios: Array<string>;
  //letra: string = '';
  palabraVector: string[];
  letrasElegidas: string = "";
  errores: number =0;
  aleatorio: number;
  palabra: string;
  auxiliar: number=0;
  volverJuegos: boolean;
  contador=0; 
  state = false;

  abece: string []=['a','b','c','d','e','f','g',
  'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  constructor() {
    this.palabraVector = [
      'centrifugado',
      'submarino',
      'neumatico',
      'auditores',
      'murcielago',
      'acuifero',
      'aguijon',
    ];
    this.aleatorio = Math.floor(Math.random() * 8);
    this.palabra = this.palabraVector[this.aleatorio];
    this.espacios = this.palabra.split('');
    
    this.volverJuegos= false;
  }
 
  ngOnInit(): void {
  //console.log("La palabra magica es:\n"+this.palabra+"("+this.palabraVector[this.aleatorio].length+" letras)");
  } 
 
  validar(i: number){ 
    if (/[a-zA-Z]$/.test(this.abece[i])) {
      this.mensajeIngreso='Letras ingresadas';
      this.contador++;  

    if(this.palabra.includes(this.abece[i])){
      this.mensajeErrores="Muy bien, la palabra incluye la letra '"+this.abece[i]+"'";
        
    }else{ 
      if((!this.palabra.includes(this.abece[i])) || (this.abece[i]==='/')){
          this.errores++;
          this.mensajeErrores="Mala suerte, La palabra NO  incluye la letra '"+this.abece[i]+"'";
          this.mensajeError="Errores: "+this.errores;
        }
      }
    if(this.contador==1)
      {this.letrasElegidas += this.abece[i];
      }else{
        if(this.contador>1){this.letrasElegidas = this.letrasElegidas+"-"+this.abece[i];}}
      //this.abece[i]='/';
      //this.palabra.replace(this.abece[i],'/');
      this.palabra = this.palabra.replace(this.abece[i],'');
  }
  this.auxiliar = this.palabra.length; 
    this.verificaFinal();
}
 
  verificaFinal(){
    if(this.errores == 5){
      this.mensajeErrores="Perdiste :s la palabra era "+this.palabraVector[this.aleatorio];
      this.state = !this.state;
      this.volverJuegos = true;
    }
    if(this.auxiliar==0){
      this.mensajeErrores="Ganaste!";
      this.state = !this.state;
      this.volverJuegos = true;
    }
    }
  
  contiene(pal:string):boolean{
    return this.letrasElegidas.toLocaleLowerCase().indexOf(pal.toLocaleLowerCase())>=0;
  }

  recargarJuego(){
    this.aleatorio = Math.floor(Math.random() * 8);
    this.palabra = this.palabraVector[this.aleatorio];
    this.espacios = this.palabra.split('');
    this.volverJuegos=false;
    this.state = !this.state;
    this.mensajeIngreso='ingrese una letra';
    this.contador=0;
    this.letrasElegidas= "";
    this.mensajeErrores ='';
    this.errores=0;
    //console.log("La palabra magica es:\n"+this.palabra+"("+this.palabraVector[this.aleatorio].length+" letras)");
  }
}