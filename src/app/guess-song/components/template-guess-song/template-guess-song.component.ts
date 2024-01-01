import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GuessSongModel } from '../../data/guess-song.data';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'guess-song-template',
  templateUrl: 'template-guess-song.component.html',
})
export class TemplateGuessSongComponent implements OnInit {
  @Input() song: GuessSongModel;
  @Output() nextSong = new EventEmitter();
  answer = new FormControl('');
  guess = true;
  clue = false;

  constructor(private dialog: MatDialog) {
    this.song = {
      song: '',
      answer: '',
      mode: '',
    };
  }

  ngOnInit(): void {
    if (!this.song?.mode) {
      this.guess = false;
    }
  }

  openModal(): void {
    this.dialog.open(ModalComponent, {
      maxHeight: '80vh',
      maxWidth: '100vw',
      data: {
        img: this.song.song,
      },
    });
  }

  showClue(): void {
    this.clue = true;
  }

  checkForm() {
    this.answer.markAllAsTouched();
    if (
      this.answer.value?.toLowerCase().trim() !== this.song.answer.toLowerCase()
    ) {
      this.answer.setErrors({ error: true });
    } else {
      this.nextSong.emit();
      this.clue = false;
      this.answer.reset();
    }
  }
}
