import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoremixComponent } from './doremix/doremix/doremix.component';
import { MenuComponent } from './menu/menu.component';
import { SiguecantandoComponent } from './siguecantando/siguecantando/siguecantando.component';
import { OrderComponent } from './order/order.component';
import { QuestionsPageComponent } from './questions/components/questionsPage/questionsPage.component';
import { GuessSongPageComponent } from './guess-song/components/guess-song-page/guess-song-page.component';
import { PlayitPageComponent } from './guess-song/components/playit-page/playit-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'doremix',
    component: DoremixComponent,
  },
  {
    path: 'sigueCantando',
    component: SiguecantandoComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'preguntas',
    component: QuestionsPageComponent,
  },
  {
    path: 'adivina',
    component: GuessSongPageComponent,
  },
  {
    path: 'tocala',
    component: PlayitPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
