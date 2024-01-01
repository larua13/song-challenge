import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsPageComponent } from './components/questionsPage/questionsPage.component';
import { TemplatequestionsComponent } from './components/templatequestions/templatequestions.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [QuestionsPageComponent, TemplatequestionsComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class QuestionsModule { }
