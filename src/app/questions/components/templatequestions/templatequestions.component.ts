import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionsModel } from './../../data/questions.model';
@Component({
  selector: 'questions-templatequestions',
  templateUrl: './templatequestions.component.html',
  styleUrls: ['./templatequestions.component.scss'],
})
export class TemplatequestionsComponent implements OnInit {
  @Input() question: QuestionsModel;
  @Output() nextSong = new EventEmitter();

  radio = new FormControl('');

  ngOnInit(): void {
    this.radio.valueChanges.subscribe(() => {
      this.checkForm();
    });
  }

  selectOption(i: number) {
    this.radio.setValue(i.toString());
  }

  checkForm() {
    console.log(this.radio.value);
    this.radio.markAllAsTouched();
    if (Number(this.radio.value) !== this.question.answer) {
      this.radio.setErrors({ error: true });
    } else {
      this.nextSong.emit();
    }
  }
}
