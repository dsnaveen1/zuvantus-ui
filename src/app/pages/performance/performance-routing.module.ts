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
        path: 'allemployee',
    // loadChildren: () => import('./../user/user.module').then((m) => m.UserModule),
        component: AllEmployeeComponent,
      },
      {
        path: 'probationemployee',
        // loadChildren: () => import('./../user/user.module').then((m) => m.UserModule),
        component: ProbationEmployeeComponent,
      },
      {
        path: 'confirmedemployee',
        // loadChildren: () => import('./../user/user.module').then((m) => m.UserModule),
        component: ConfirmedEmployeeComponent,
      },
      {
        path: 'exitedemployee',
        //  loadChildren: () => import('./../user/user.module').then((m) => m.UserModule),
        component: ExitedEmployeeComponent,
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
