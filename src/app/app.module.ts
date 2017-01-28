import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatsPage } from "../pages/chats/chats";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChatsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
