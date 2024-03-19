import { Component, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { from, Observable, Subject } from 'rxjs';
// import { ModalConfig, ModalComponent } from '../../_metronic/partials';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
//   styleUrls: ['./all-employee.component.scss'],
})


export class AllEmployeeComponent {
dtOptions: DataTables.Settings = {};

dtTrigger: Subject<any> = new Subject<any>();
 @ViewChild(DataTableDirective, { static: false })
datatableElement: DataTableDirective;
ngOnInit(): void {
this.dtOptions = {
    scrollX: true,
    scrollY: '50vh',
    scrollCollapse: true,
    pagingType: 'full_numbers',
    pageLength: 10,
    lengthMenu: [10, 25, 50, 100,150, 200, 250, 300],
    serverSide: true,
    processing: true,

    language: {
      emptyTable:'<span>No data available</span>',

      paginate: {
        previous: "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        next: "<i class='fa fa-angle-right' aria-hidden='true'></i>",
        first: 'First',
        last: 'Last',
      },
    },
    dom: '<"bottom">t<"bottom paginationCustom"<"#custable"i>f<l>pr>',
  }
}
ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
  