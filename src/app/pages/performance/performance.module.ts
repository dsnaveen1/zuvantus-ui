import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerformanceComponent } from './performance.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { DataTablesModule } from 'angular-datatables';
import { AllEmployeeComponent } from './all-employees/all-employee.component';
import { PerformanceRoutingModule } from './performance-routing.module';
import { ProbationEmployeeComponent } from './probation-employees/probation-employee.component';
import { ConfirmedEmployeeComponent } from './confirmed-employees/confirmed-employee.component';
import { ExitedEmployeeComponent } from './exited-employees/exited-employee.component';
import { ExtrasModule } from "../../_metronic/partials/layout/extras/extras.module";



@NgModule({
    declarations: [PerformanceComponent, AllEmployeeComponent, ProbationEmployeeComponent, ConfirmedEmployeeComponent, ExitedEmployeeComponent],
    imports: [
        CommonModule,
        DataTablesModule,
        PerformanceRoutingModule,
        WidgetsModule,
        ModalsModule,
        ExtrasModule
    ]
})
export class PerformanceModule { }
