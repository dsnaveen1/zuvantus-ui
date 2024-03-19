import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
    WidgetsModule,
    DataTablesModule,
    ModalsModule,
  ]
})
export class UsersModule { }
