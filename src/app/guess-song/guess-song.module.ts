import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessSongPageComponent } from './components/guess-song-page/guess-song-page.component';
import { TemplateGuessSongComponent } from './components/template-guess-song/template-guess-song.component';
import { SharedModule } from '../shared/shared.module';
import { PlayitPageComponent } from './components/playit-page/playit-page.component';

@NgModule({
  declarations: [
    GuessSongPageComponent,
    TemplateGuessSongComponent,
    PlayitPageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    GuessSongPageComponent,
    TemplateGuessSongComponent,
    PlayitPageComponent,
  ],
})
export class GuessSongModule {}
