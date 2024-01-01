import { Component } from '@angular/core';
import { DoremixAnswers } from '../data/doremix-answers.data';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProgressService } from '../../services/progress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'doremix-page',
  templateUrl: './doremix.component.html',
})
export class DoremixComponent {
  answers = DoremixAnswers;
  currentSong = DoremixAnswers[0];
  currentQuestion = 0;

  constructor(
    private dialog: MatDialog,
    private progressService: ProgressService,
    private router: Router
  ) {
    const resolved = this.progressService.getProgress('doremix');
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
          text: '¡Sigue así!',
        },
      });
      this.currentSong = nextQuestion;
      this.currentQuestion++;
    } else {
      this.showModal();
      this.progressService.saveProgress('doremix');
    }
  }
  showModal(): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        title: 'DOREMIX SUPERADO',
        text: 'En la esquina del parpadeo eléctrico,<br>Mi reino cobra vida, un reino sintético.<br>Botones y palancas, mi lengua en acción,<br>En el reino de píxeles, soy la creación.<br>¿Quién soy en este rincón donde la destreza es la única tradición?',
        icon: 'check',
      },
    });
    this.router.navigate(['']);
  }
}
