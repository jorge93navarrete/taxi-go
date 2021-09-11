import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatRoutingModule } from './chat-routing.module';
import { IonicModule } from '@ionic/angular';
import { ChatInComponent } from './components/chat-in/chat-in.component';

@NgModule({
  declarations: [ChatViewComponent, ChatInComponent],
  imports: [IonicModule, CommonModule, ChatRoutingModule],
})
export class ChatModule {}
