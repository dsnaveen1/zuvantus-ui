import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerformanceComponent } from './performance.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';



@NgModule({
  declarations: [PerformanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerformanceComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
  ]
})
export class PerformanceModule { }
