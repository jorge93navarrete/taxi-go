import { Component, OnInit } from '@angular/core';
import { ChatService } from '@core/services/chat.service';
import { IChat } from '../models/interfaces/chat.interfaces';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit {
  public message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
  public chats: IChat[];
  constructor(private _chats: ChatService) {}

  ngOnInit() {
    this._chats.getChats().subscribe(
      (res) => {
        this.chats = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  send(e) {
    console.log(e);
  }
}
