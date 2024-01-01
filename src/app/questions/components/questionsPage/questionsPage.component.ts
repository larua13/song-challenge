import { Component } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ProgressService } from '../../../services/progress.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Questions } from '../../data/questions.data';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questionsPage.component.html',
  styleUrls: ['./questionsPage.component.scss'],
})
export class QuestionsPageComponent {
  questions = Questions;
  currentSong = Questions[0];
  currentQuestion = 0;

  constructor(
    private dialog: MatDialog,
    private progressService: ProgressService,
    private router: Router
  ) {
    const resolved = this.progressService.getProgress('preguntas');
    if (resolved) {
      this.showModal();
    }
  }

  nextQuestion() {
    const nextQuestion = this.questions[this.currentQuestion + 1];
    if (nextQuestion) {
      this.dialog.open(ModalComponent, {
        width: '300px',
        data: {
          text: '¡Booomba!',
          icon: 'local_fire_department',
        },
      });
      this.currentSong = nextQuestion;
      this.currentQuestion++;
    } else {
      this.showModal();
      this.progressService.saveProgress('preguntas');
    }
  }

  showModal(): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        title: 'PREGUNTAS RANDOM SUPERADO',
        text: 'En el mueble guardado,<br> en su rincón oculto,<br> prendas delicadas en su suave tumulto.<br> De encajes y colores,<br> un secreto en su cajón,<br> ¿Qué esconde allí en íntimo rincón?<br>',
        icon: 'celebration',
      },
    });
    this.router.navigate(['']);
  }
}
