import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { IChat } from '../chat/models/interfaces/chat.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  protected collectionName: string;

  constructor(private angularFirestore: AngularFirestore) {}

  protected get() {
    return this.angularFirestore
      .collection<IChat>(this.collectionName)
      .snapshotChanges();
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
