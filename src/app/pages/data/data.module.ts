import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataComponent } from './data.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { SalesDataComponent } from './sales-data/sales-data.component';
import { DataTablesModule } from 'angular-datatables';
import { DataRoutingModule } from './data-routing.module';
import { DoctorsCallAvgComponent } from './doctors-call-avg/doctors-call-avg.component';
import { MCLCoverageComponent } from './mcl-coverage/mcl-coverage.componet';



@NgModule({
  declarations: [DataComponent,SalesDataComponent,DoctorsCallAvgComponent,MCLCoverageComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    WidgetsModule,
    ModalsModule,
    DataRoutingModule
  ]
})
export class DataModule { }
