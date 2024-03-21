import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';



@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SalesComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
  ]
})
export class SalesModule { }
