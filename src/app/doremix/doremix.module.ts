import { NgModule } from '@angular/core';
import { DoremixComponent } from './doremix/doremix.component';
import { TemplateComponent } from './components/template/template.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DoremixComponent, TemplateComponent],
  imports: [
   SharedModule,
   RouterModule
  ],
  exports: [DoremixComponent, TemplateComponent],
})
export class DoremixModule {}
