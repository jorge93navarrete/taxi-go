import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatRoutingModule } from './chat-routing.module';
import { IonicModule } from '@ionic/angular';
import { ChatInComponent } from './components/chat-in/chat-in.component';
import { ChatService } from '@core/services/chat.service';
import { ChatOutComponent } from './components/chat-out/chat-out.component';
import { SendChatComponent } from './components/send-chat/send-chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatViewComponent,
    ChatInComponent,
    ChatOutComponent,
    SendChatComponent,
  ],
  imports: [IonicModule, CommonModule, FormsModule, ChatRoutingModule],
  providers: [ChatService],
})
export class ChatModule {}
