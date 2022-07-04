import { Injectable } from '@angular/core'; 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Puntaje } from '../interface/puntaje.interface';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  private dbPath = '/tutorials';
  tutorialsRef: AngularFirestoreCollection<Puntaje>;
  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }


  public obtenerTodos(coleccion: string) {
    return this.db.collection(coleccion).snapshotChanges();
  }

  public crear(collection: string, data: any) {
    return this.db.collection(collection).add(data);
  }

  getAll(): AngularFirestoreCollection<Puntaje> {
    return this.tutorialsRef;
  }
  create(puntos: Puntaje): any {
    return this.tutorialsRef.add({ ...puntos });
  }
  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}