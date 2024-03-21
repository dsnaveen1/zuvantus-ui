import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FfcodesComponent } from './ffcodes.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { DataTablesModule } from 'angular-datatables';
import { ExtrasModule } from "../../_metronic/partials/layout/extras/extras.module";
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [FfcodesComponent],
  imports: [
    CommonModule,
    CrudModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ExtrasModule,NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
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
