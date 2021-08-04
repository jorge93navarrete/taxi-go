import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  public get(collection: string) {
    return this.angularFirestore.collection(collection).snapshotChanges();
  }

  public delete(collection: string, documentId: string) {
    return from(
      this.angularFirestore.collection(collection).doc(documentId).delete()
    );
  }

  public add(collection: string, data: any) {
    return from(this.angularFirestore.collection(collection).add(data));
  }

  public update(collection: string, documentId: string, datos: any) {
    return from(
      this.angularFirestore.collection(collection).doc(documentId).set(datos)
    );
  }
}
