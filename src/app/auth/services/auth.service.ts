import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { first } from 'rxjs/operators';
//import { auth } from 'firebase/app';
//import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(public afAuth: AngularFireAuth) { }

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
