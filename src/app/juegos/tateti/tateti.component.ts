import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  terminoJuego : boolean;
  botonesEleccion : boolean = false;
  botonesJuego : boolean = true;
  usuario: string = "";
  maquina: string = "";
  lugares: Array<string> = ["-", "-", "-",
  "-", "-", "-", "-", "-", "-"];
  resultado: string; 
  random: number;
  state = false;
  espacio = 0;

  constructor() {
    this.terminoJuego = true; 
  }

  ngOnInit() { 
  }

  eleccionSigno(signo: string) {
    this.botonesEleccion = true;
    this.botonesJuego = false;
    if (signo == "X") {
      this.usuario = "X";
      this.maquina = "O";
    }
    else {
      this.usuario = "O";
      this.maquina = "X";
    } 
  }

  modificar(id: number) { 
    if (this.lugares[id] == '-') {
      this.lugares[id] = this.usuario;
      document.images['rc' + id].src = "assets/img/" + this.usuario + ".png";
      this.maquinamov();
    }
  }

  maquinamov(){
    this.resultado = this.validar(this.usuario, "jugador"); 
    if (this.resultado == "Gano" || this.resultado == "Perdio" || this.resultado == "Empate"){ 
      this.desactivar();
      this.terminoJuego = false;}
    else
      this.jugar();
  }

  jugar(){
    this.random = Math.floor(Math.random() * 8);
    if (this.lugares[this.random] == "-") { 
      this.lugares[this.random] = this.maquina;
      document.images['rc' + this.random].src = "assets/img/" + this.maquina + ".png";
      this.resultado = this.validar(this.maquina, "maquina"); 
      if (this.resultado == "Gano" || this.resultado == "Perdio" || this.resultado == "Empate"){  
        this.terminoJuego = false;}
    }
    else {
      this.jugar();
    }
  }

  desactivar(){
    this.state = !this.state;
  }
 
  validar(signo : string, jugador: string) {
    let resultadoParcial: string; 

    if (this.lugares[0] == signo && this.lugares[1] == signo && this.lugares[2] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[3] == signo && this.lugares[4] == signo && this.lugares[5] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[6] == signo && this.lugares[7] == signo && this.lugares[8] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[0] == signo && this.lugares[3] == signo && this.lugares[6] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[1] == signo && this.lugares[4] == signo && this.lugares[7] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[2] == signo && this.lugares[5] == signo && this.lugares[8] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[0] == signo && this.lugares[4] == signo && this.lugares[8] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    else if (this.lugares[2] == signo && this.lugares[4] == signo && this.lugares[6] == signo) {
        if (jugador == "jugador") {
          resultadoParcial = "Gano";
        }else {resultadoParcial = "Perdio";}
    }
    this.espacio++; 
    if (this.espacio == 9)
    {resultadoParcial = "Empate";}

    return resultadoParcial;
}
    reiniciarJuego(){
      this.lugares = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
      this.terminoJuego= true;
      this.resultado='';
      this.state = !this.state;
      this.botonesEleccion=false;
      this.botonesJuego=true; 
      this.espacio=0;
    }
}