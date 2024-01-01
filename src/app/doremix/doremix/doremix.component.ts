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
  ) {}

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
      this.dialog.open(ModalComponent, {
        width: '500px',
        data: {
          title: 'DOREMIX SUPERADO',
          text: 'Cuelgo en la entrada,<br> soy de tela o de metal,<br> me deslizo suavemente,<br> en tu hogar siempre igual.<br> Cuando el sol deslumbra,<br> me despliego con soltura,<br> ¿Qué soy en tu casa que a veces tapo y a veces aseguro?',
          icon: 'check',
        },
      });
      this.progressService.saveProgress('doremix');
      this.router.navigate(['']);
    }
  }
}
