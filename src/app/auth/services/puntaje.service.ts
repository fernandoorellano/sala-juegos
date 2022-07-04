import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Puntaje } from '../interface/puntaje.interface'; 
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  itemsCollection: AngularFirestoreCollection<Puntaje>;
  itemDoc:AngularFirestoreDocument<Puntaje>;
  items: Observable<Puntaje[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Puntaje>('users');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => actions.map(a => { 
        const data = a.payload.doc.data() as Puntaje;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  retornaItems(){
    return this.items;
  }
  addItem(item: Puntaje) {
    this.itemsCollection.add(item);
  }
  eliminar(id){
    this.itemDoc=this.afs.doc<Puntaje>("users/"+id);
    this.itemDoc.delete();
  }
  editar(item){
    this.itemDoc=this.afs.doc<Puntaje>("users/"+item.id);
    this.itemDoc.update(item);
  }

  mostrar(nombre){
    console.log(nombre);
    return nombre;
  }

  mostrarValor(){
    let nombre: string;
    this.mostrar(nombre);
  }
}
