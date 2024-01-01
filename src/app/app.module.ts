import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoremixModule } from './doremix/doremix.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { SiguecantandoModule } from './siguecantando/siguecantando.module';
import { OrderComponent } from './order/order.component';
import { QuestionsModule } from './questions/questions.module';
import { GuessSongModule } from './guess-song/guess-song.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    QuestionsModule,
    DoremixModule,
    SiguecantandoModule,
    GuessSongModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
