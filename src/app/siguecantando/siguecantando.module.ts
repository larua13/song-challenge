import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiguecantandoComponent } from './siguecantando/siguecantando.component';
import { SharedModule } from '../shared/shared.module';
import { TemplateSCComponent } from './siguecantando/components/templatesc/templatesc.component';

@NgModule({
  declarations: [
    SiguecantandoComponent, TemplateSCComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SiguecantandoModule { }
