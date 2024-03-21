import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEmployeeComponent } from './all-employees/all-employee.component';
import { PerformanceComponent } from './performance.component';
import { ProbationEmployeeComponent } from './probation-employees/probation-employee.component';
import { ConfirmedEmployeeComponent } from './confirmed-employees/confirmed-employee.component';
import { ExitedEmployeeComponent } from './exited-employees/exited-employee.component';
const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
    children: [
      {
        path: 'employee/:type', // allemployee
        component: AllEmployeeComponent,
      },
      
      { path: '', redirectTo: 'allemployee', pathMatch: 'full' },
      { path: '**', redirectTo: 'allemployee', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceRoutingModule {}
