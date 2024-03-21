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
import { CrudModule } from 'src/app/modules/crud/crud.module';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
    declarations: [PerformanceComponent, AllEmployeeComponent, ProbationEmployeeComponent, ConfirmedEmployeeComponent, ExitedEmployeeComponent],
    imports: [
        CommonModule,
        CrudModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        DataTablesModule,
        PerformanceRoutingModule,
        WidgetsModule,
        ModalsModule,
        ExtrasModule,NgbNavModule,
        NgbDropdownModule,
        NgbCollapseModule,
        NgbTooltipModule,
        SweetAlert2Module.forChild(),
    ]
})
export class PerformanceModule { }
