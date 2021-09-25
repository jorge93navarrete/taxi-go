import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreService } from './fire-store.service';
import { map } from 'rxjs/operators';
import { IChat } from '../chat/models/interfaces/chat.interfaces';
@Injectable({
  providedIn: 'root',
})
export class ChatService extends FireStoreService {
  protected readonly collectionName = 'chats';
  constructor(angularFirestore: AngularFirestore) {
    super(angularFirestore);
  }

  getChats() {
    return this.get().pipe(
      map((data) =>
        data.reduce((acc: IChat[], cur) => {
          return [
            ...acc,
            { id: cur.payload.doc.id, ...cur.payload.doc.data() },
          ];
        }, [])
      )
    );
  }
}
