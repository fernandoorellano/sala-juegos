import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PuntajeService } from 'src/app/auth/services/puntaje.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;
  itemEditar:any={name:''};
  datos;
  opcionSeleccionado: string  = 'normal';
  verSeleccion: string = '';
  nombre: string= 'asa';

  constructor(private con:PuntajeService, public authSvc: AuthService, private router: Router) {
    this.con.retornaItems().subscribe(items=>{
      this.items=items;
      this.datos = ["normal", "silver", "gold"];
    }); 
  }

  ngOnInit(): void {
  } 

  mostrarr(){
    console.log("Valor: ",this.nombre);
  }

  capturar() { 
    this.verSeleccion = this.opcionSeleccionado;
  }

  editar(perdio){
    this.itemEditar=perdio;
  }
  editarForm(item){ //-----------CAMBIA TIPO DE USUARIO ---------------------//
    if(item.tipoUser=="silver"){
      console.log("usuario silver");
      this.authSvc.silverAux=true;
      this.authSvc.premiumAux=false;
      this.router.navigate(['/home']);
    }else
    if(item.tipoUser=="gold"){
      console.log("usuario gold");
      this.authSvc.premiumAux=true;
      this.authSvc.silverAux=true;
      this.router.navigate(['/home']);
    }
    console.log("editar")
    this.con.editar(item);
  }
  eliminar(id){
    this.con.eliminar(id);
  }
}
