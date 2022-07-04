import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PuntajeService } from './puntaje.service';

@Injectable({
  providedIn: 'root'
})
export class AgregarListadoService {

  public usuario: any={};
  public nombreEmail: any[] = [];
  aux: number = 0;
  constructor(private ser: PuntajeService, public afAuth: AngularFireAuth) {
     this.afAuth.authState.subscribe( user =>{
      //console.log("estado del usuario: ", user);
      if(!user){
        return;
      }
      this.usuario.nombre = user.email;
      this.nombreEmail = this.usuario.nombre;
      this.usuario.perdio = 0;
      this.usuario.uid = user.uid;
    });
  }

  ngOnInit() {
  }

  agregar(){    
     
    if(this.aux<=0){
    let item:any={
      nombre: this.usuario.nombre,
      uid: this.aux,
      perdio:0,
      gano:0,
      empato:0,
      aux:false,
      tipoUser: "normal"
      };
      this.usuario.perdio++;  
    this.ser.addItem(item); 
    }
    this.aux++;
  }





  agregar2(perdio, gano, empato){    
     
    if(this.aux<=0){
    let item:any={
      nombre: this.usuario.nombre,
      uid: this.aux,
      perdio:gano,
      gano:perdio,
      empato:empato,
      };
      this.usuario.perdio++;  
    this.ser.addItem(item); 
    }
    this.aux++;
  }
}
