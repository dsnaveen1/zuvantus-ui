import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FfcodesComponent } from './ffcodes.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [FfcodesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FfcodesComponent,
      },
    ]),
    WidgetsModule,
    DataTablesModule,
    ModalsModule,
  ]
})
export class FFCodesModule { }
