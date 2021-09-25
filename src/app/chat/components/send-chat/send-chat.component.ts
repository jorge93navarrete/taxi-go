import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.scss'],
})
export class SendChatComponent implements OnInit {
  public message: string = '';
  @Output() public onSend = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  send() {
    this.onSend.emit(this.message);
  }
}
