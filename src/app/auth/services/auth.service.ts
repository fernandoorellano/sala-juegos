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

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user =>{
      //console.log("estado del usuario: ", user);

      if(!user){
        return;
      }

      this.usuario.nombre = user.email;
      this.usuario.uid = user.uid;
    })
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

  async login(email: string, password: string){
    let result;
    try{
       result = await this.afAuth.signInWithEmailAndPassword(email, password);
          //return result;

    }
    catch(error){
      console.log(error);
    }
    finally{
      return result;
     }

    
  }
  async register(email: string, password: string){
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
    await this.afAuth.signOut();
    }catch(error){
      console.log(error);
    }
  }

  devolveer(){
    return this.afAuth.authState;
  }
}
