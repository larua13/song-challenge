import { Component, OnInit } from '@angular/core';
import { SigueCantandoData } from './data/SigueCantando.data';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProgressService } from '../../services/progress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siguecantando',
  templateUrl: './siguecantando.component.html',
  styleUrls: ['./siguecantando.component.scss'],
})
export class SiguecantandoComponent {
  answers = SigueCantandoData;
  currentSong = SigueCantandoData[0];
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
          text: '¡De loooocos!',
          icon: 'mic',
        },
      });
      this.currentSong = nextQuestion;
      this.currentQuestion++;
    } else {
      this.dialog.open(ModalComponent, {
        width: '500px',
        data: {
          title: 'SIGUE CANTANDO SUPERADO',
          text: '<p>En su prisión de cristal,<br> el silencio es su canción,<br> un mundo encapsulado,<br> misterioso rincón,<br> líquido hogar donde la vida se enreda, <br> ¿Qué objeto es este que en vidrio se hereda?</p>',
          icon: 'auto_awesome',
        },
      });
      this.progressService.saveProgress('sigueCantando');
      this.router.navigate(['']);
    }
  }
}
