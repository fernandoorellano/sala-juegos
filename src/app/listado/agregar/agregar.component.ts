import { Component, OnInit } from '@angular/core';
import { ActualizaPuntajeService } from 'src/app/auth/services/actualiza-puntaje.service';
import { PuntajeService } from 'src/app/auth/services/puntaje.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
 
  datos;
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  estado:boolean;

  items:any;
  itemEditar:any={name:''};

  constructor(private con:PuntajeService, public actpunSrv: ActualizaPuntajeService) {
    this.datos = ["normal", "silver", "gold"];
    this.estado=false;
  }

  ngOnInit(): void {}  

  agregar(){ 
    console.log("agrega");
    this.con.addItem(this.itemEditar);
  } 
}

 
