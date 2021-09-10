import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatViewComponent } from './chat-view/chat-view.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatViewComponent,
  },
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChatRoutingModule {}
