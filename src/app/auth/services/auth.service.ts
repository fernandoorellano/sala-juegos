import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from "rxjs/operators"; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario: any={};
  public nombreEmail: Mensaje[] = [];
  public silverAux:boolean;
  public premiumAux:boolean;
  
  
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user =>{
      //console.log("estado del usuario: ", user);

      if(!user){
        return;
      }

      this.usuario.nombre = user.email;
      this.usuario.uid = user.uid;
      this.nombreEmail = this.usuario.nombre;
    });
  }
  

  cargarMensaje(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc')
    .limit(5));
    
    return this.itemsCollection.valueChanges()
    .pipe(map((mensajes: Mensaje[]) => {
          //console.log(mensajes);
          this.chats = [];

          for (let mensaje of mensajes){
            this.chats.unshift(mensaje);
          }
          return this.chats;
        }))
  }

  agregarMensaje(texto: string){
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }
    return this.itemsCollection.add(mensaje);
  }

  async register(email: string, password: string){
    try{
      return  await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch(error){
      console.log("error en login: ", error);
      return null;
    }
  }

  async login(email: string, password: string){
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


  getUserLogged() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.signOut();
  }

  validarLogin(){
    if(this.nombreEmail.length>=10){
     //console.log("estoy logeado", this.nombreEmail);
   return true;}
   else
   //console.log("NO estoy logeado", this.nombreEmail.length);
   return false;
 }

  preguntarCuenta(){
    console.log("Cambiate de plan");
  }
 

}
