import { Component, Input, OnInit } from '@angular/core';
import { IChat } from '../../models/interfaces/chat.interfaces';

@Component({
  selector: 'app-chat-in',
  templateUrl: './chat-in.component.html',
  styleUrls: ['./chat-in.component.scss'],
})
export class ChatInComponent implements OnInit {
  @Input() public chat: IChat;

  constructor() {}

  ngOnInit() {}
}
