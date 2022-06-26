import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  public user$: Observable<any> = this._cs.afAuth.user;
  mensaje: string='';
  elemento: any;

  constructor(public _cs: AuthService) { 
    this._cs.cargarMensaje().subscribe();
  }

  ngOnInit(): void {}
  

  enviar_mensaje(){
    if(this.mensaje.length === 0){
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
    .then( ()=>this.mensaje="" )
    .catch( (err)=>console.log("error al enviar",err) )
  }

}
