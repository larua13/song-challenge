import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoremixAnswersModel } from '../../data/doremix-answers.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'doremix-template',
  templateUrl: 'template.component.html',
})
export class TemplateComponent {
  @Input() song: DoremixAnswersModel;
  @Output() nextSong = new EventEmitter();
  base = new FormControl('');
  voice = new FormControl('');
  clue = '';
  clues = [''];

  constructor() {
    this.song = {
      music: '',
      base: '',
      voice: '',
      clues: [''],
    };
  }

  checkForm() {
    this.checkErrors(this.base, this.song.base);
    this.checkErrors(this.voice, this.song.voice);
    if (this.base.valid && this.voice.valid) {
      this.nextSong.emit();
      this.base.reset();
      this.voice.reset();
      this.clues = [];
    }
  }

  checkErrors(formControl: FormControl, correctAnswer: string) {
    formControl.markAllAsTouched();
    if (
      formControl.value?.toLowerCase().trim() !== correctAnswer.toLowerCase()
    ) {
      formControl.setErrors({ error: true });
    }
  }

  showClue() {
    const clue = this.song.clues.pop();
    if (clue) {
      this.clues.push(clue);
    }
  }
}
