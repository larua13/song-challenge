import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SigueCantandoModel } from '../../data/SigueCantando.model';

@Component({
  selector: 'siguecantando-template',
  templateUrl: 'templatesc.component.html',
  styleUrls: ['./templatesc.component.scss'],
})
export class TemplateSCComponent {
  @Input() song: SigueCantandoModel;
  @Output() nextSong = new EventEmitter();
  letter = new FormControl('');

  constructor() {
    this.song = {
      song: '',
      letter: '',
      number: '',
      img: ''
    };
  }

  checkForm() {
    this.letter.markAllAsTouched();
    if (
      this.letter.value?.toLowerCase().trim() !== this.song.letter.toLowerCase()
    ) {
      this.letter.setErrors({ error: true });
    } else {
      this.nextSong.emit();
      this.letter.reset();
    }
  }
}
