import { Injectable } from '@angular/core';
import { AgregarListadoService } from './agregar-listado.service';
import { PuntajeService } from './puntaje.service';

@Injectable({
  providedIn: 'root'
})
export class ActualizaPuntajeService {
 
  items:any;
  itemEditar:any={name:''};

  constructor(private con:PuntajeService, public aglSrv: AgregarListadoService) {
    this.con.retornaItems().subscribe(items=>{
      this.items=items;
      //console.log(this.items);
    });
  }
  ngOnInit(): void {
  }
 
  editar(perdio){
    this.itemEditar=perdio;
  }
  editarForm(perdio){
    this.con.editar(perdio);
  }

  validar(){

    if(this.items===undefined){
      console.log("El usuario no existe");
      this.aglSrv.agregar();
    }
     

  //  this.items.find(object =>{
  //     if(object.email){
  //       console.log("El usuario ya existe");
  //     }
  //     if(!object.email){
  //       console.log("El usuario NOOO existe");
  //       this.aglSrv.agregar();
  //     }
  //   }); 
  }
}
