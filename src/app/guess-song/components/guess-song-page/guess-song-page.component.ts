import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProgressService } from '../../../services/progress.service';
import { Router } from '@angular/router';
import { GuessSongData } from '../../data/guess-song.data';

@Component({
  selector: 'guess-song-page',
  templateUrl: './guess-song-page.component.html',
})
export class GuessSongPageComponent {
  answers = GuessSongData;
  currentSong = GuessSongData[0];
  currentQuestion = 0;

  constructor(
    private dialog: MatDialog,
    private progressService: ProgressService,
    private router: Router
  ) {
    const resolved = this.progressService.getProgress('adivina');
    if (resolved) {
      this.showModal();
    }
  }

  nextQuestion() {
    const nextQuestion = this.answers[this.currentQuestion + 1];
    if (nextQuestion) {
      this.dialog.open(ModalComponent, {
        width: '300px',
        data: {
          text: '¡Buena esa!',
        },
      });
      this.currentSong = nextQuestion;
      this.currentQuestion++;
    } else {
      this.progressService.saveProgress('adivina');
      this.showModal();
    }
  }

  showModal(): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        title: 'ADIVINA LA CANCIÓN SUPERADO',
        text: 'En la cocina descansa,<br> sin inmersión en grasas,<br> un aparato moderno,<br> donde el calor abraza.<br> Viento caliente danza,<br> en su ballet de sabor,<br> ¿Qué es este artefacto en la cocina con ardor?',
        icon: 'check',
      },
    });
    this.router.navigate(['']);
  }
}
