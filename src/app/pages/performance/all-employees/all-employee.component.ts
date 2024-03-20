import { Component, ViewChild,OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { from, Observable, Subject } from 'rxjs';
import { PerformanceApiService } from '../performance.service';
import { ChangeDetectorRef } from '@angular/core';
// import { ModalConfig, ModalComponent } from '../../_metronic/partials';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
//   styleUrls: ['./all-employee.component.scss'],
})


export class AllEmployeeComponent {
  constructor(private performance:PerformanceApiService,private cd:ChangeDetectorRef){

  }

dtOptions: DataTables.Settings = {};
data:any;
dtTrigger: Subject<any> = new Subject<any>();
 @ViewChild(DataTableDirective, { static: false })
datatableElement: DataTableDirective;
async loadData(): Promise<void> {
  try {
    this.data = await this.performance.getPerformanceData();
    this.cd.detectChanges();
    
    // this.rerender();
    
  } catch (error) {
    console.error('Error loading mock data:', error);
    this.data = [];
  }
}
getColumnKeys(): string[] {
  if (this.data.length > 0) {
      return Object.keys(this.data[0]);
  } else {
      return []; // Return an empty array if data is empty
  }
}
async ngOnInit(): Promise<void> {
  await this.loadData();
  console.log(30,this.data)
  $("#kt_datatable_both_scrolls").DataTable({
    "scrollY": 300,
    "scrollX": true,
    "pageLength":10
});
  
this.dtOptions = {
    scrollX: true,
    scrollY: '50vh',
    scrollCollapse: true,
    pagingType: 'full_numbers',
    pageLength: 10,
    lengthMenu: [10, 25, 50, 100,150, 200, 250, 300],
    serverSide: false,
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
// this.dtOptions = {
//   paging: true,
//   lengthMenu: [10, 25, 50, 100,150, 200, 250, 300],
//   pageLength: 10 // Number of items per page
// };
 let currentPage = 1; // Current page number
 let itemsPerPage = 10; // Number of items per page

  // Method to get the keys for table columns
  
}
rerender(): void {
  this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the DataTable instance
    dtInstance.destroy();
    // Call the dtTrigger to rerender again
    this.dtTrigger.next(null);
  });
}


ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
  