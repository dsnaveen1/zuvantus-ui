import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataComponent } from './data.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';



@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
  ]
})
export class DataModule { }
