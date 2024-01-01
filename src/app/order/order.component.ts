import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProgressService } from '../services/progress.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  correctAnswer = 'cantante';
  codigo = new FormControl('');

  constructor(
    private progressService: ProgressService,
    private router: Router,
    private dialog: MatDialog
  ) {
    const resolved = this.progressService.getProgress('ordena');
    if (resolved) {
      this.showModal();
    }
  }

  checkForm(): void {
    if (this.codigo.value?.trim().toLowerCase() === this.correctAnswer) {
      this.progressService.saveProgress('ordena');
      this.showModal();
    } else {
      this.codigo.setErrors({ incorrect: true });
    }
  }

  showModal(): void {
    this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        title: 'ORDENA LA CANCIÓN SUPERADO',
        text: 'En la caja mágica<br> mi nombre resuena,<br> pregúntame lo que quieras,<br> mi sabiduría no se frena.<br> Controlo tu hogar con palabras que revelan,<br> ¿Qué soy yo, en tu sala que destella?',
        icon: 'auto_awesome',
      },
    });
    this.router.navigate(['']);
  }
}
