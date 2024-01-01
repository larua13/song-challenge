import { Component } from '@angular/core';
import { PlayitData } from '../../data/guess-song.data';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProgressService } from '../../../services/progress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playit-page',
  templateUrl: './playit-page.component.html',
})
export class PlayitPageComponent {
  answers = PlayitData;
  currentSong = PlayitData[0];
  currentQuestion = 0;

  constructor(
    private dialog: MatDialog,
    private progressService: ProgressService,
    private router: Router
  ) {

  }

  nextQuestion() {
    const nextQuestion = this.answers[this.currentQuestion + 1];
    if (nextQuestion) {
      this.dialog.open(ModalComponent, {
        width: '300px',
        data: {
          text: '¡Eso sonó perfecto!',
          icon: 'piano',
        },
      });
      this.currentSong = nextQuestion;
      this.currentQuestion++;
    } else {
      this.dialog.open(ModalComponent, {
        width: '500px',
        data: {
          title: 'TÓCALA, TÓCALA SUPERADO',
          text: 'En el reino del descanso,<br> mi esencia acoge sueños,<br> un refugio de quietud,<br> donde reposan los dueños.<br> Entre sombras y suspiros,<br> en la cama soy reina,<br> ¿Qué objeto soy que en el reposo se desvela?',
          icon: 'waving_hand',
        },
      });
      this.progressService.saveProgress('tocala');
      this.router.navigate(['']);
    }
  }
}
