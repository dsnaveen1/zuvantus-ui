import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from "./data.component";
import { SalesDataComponent } from './sales-data/sales-data.component';
import { DoctorsCallAvgComponent } from './doctors-call-avg/doctors-call-avg.component';
import { MCLCoverageComponent } from './mcl-coverage/mcl-coverage.componet';

const routes: Routes = [
    {
      path: '',
      component: DataComponent,
      children: [
        {
          path: 'salesdata',
          component: SalesDataComponent,
        },
        {
            path:'doctorscallavg',
            component:DoctorsCallAvgComponent
        },
        {
            path:'mclcoverage',
            component:MCLCoverageComponent
        },
        { path: '', redirectTo: 'salesdata', pathMatch: 'full' },
        { path: '**', redirectTo: 'salesdata', pathMatch: 'full' },
      ],
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DataRoutingModule {}
  