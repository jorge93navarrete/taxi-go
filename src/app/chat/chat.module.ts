import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [ChatViewComponent],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}
