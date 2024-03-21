import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { DataTablesResponse, IUserModel, UserService } from 'src/app/_fake/services/user-service';
import { SweetAlertOptions } from 'sweetalert2';
import moment from 'moment';
import { IRoleModel, RoleService } from 'src/app/_fake/services/role.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  // styleUrls: ['./user-listing.component.scss']
})
export class AllEmployeeComponent implements OnInit, AfterViewInit, OnDestroy {

  isCollapsed1 = false;
  isCollapsed2 = true;

  isLoading = false;

  users: DataTablesResponse;

  datatableConfig: DataTables.Settings = {};

  // Reload emitter inside datatable
  reloadEvent: EventEmitter<boolean> = new EventEmitter();

  // Single model
  aUser: Observable<IUserModel>;
  userModel: IUserModel = { id: 0, name: '', email: '', role: '' };

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  roles$: Observable<DataTablesResponse>;

  constructor(private apiService: UserService, private roleService: RoleService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

    const columns = [
      {
          "title": "EMPLOYEE CODE",
          "data": "EMPLOYEE CODE"
      },
      {
          "title": "Employee Name",
          "data": "Employee Name"
      },
      {
          "title": "Designation",
          "data": "Designation"
      },
      {
          "title": "City",
          "data": "City"
      },
      {
          "title": "State",
          "data": "State"
      },
      {
          "title": "Department",
          "data": "Department"
      },
      {
          "title": "Employment Status",
          "data": "Employment Status"
      },
      {
          "title": "Performance (Primary) % YTD",
          "data": "Performance (Primary) % YTD"
      },
      {
          "title": "YTD PDVT",
          "data": "YTD PDVT"
      },
      {
          "title": "YTD GRWTH",
          "data": "YTD GRWTH"
      },
      {
          "title": "Position Code",
          "data": "Position Code"
      },
      {
          "title": "ffcode_list",
          "data": "ffcode_list"
      },
      {
          "title": "Grade",
          "data": "Grade"
      },
      {
          "title": "Date of Joining",
          "data": "Date of Joining"
      },
      {
          "title": "Doctor Call Average % YTD",
          "data": "Doctor Call Average % YTD"
      },
      {
          "title": "MCL Coverage % YTD",
          "data": "MCL Coverage % YTD"
      },
      {
          "title": "Attrition % YTD",
          "data": "Attrition % YTD"
      },
      {
          "title": "Saleable Return",
          "data": "Saleable Return"
      },
      {
          "title": "Spread of Performance % YTD",
          "data": "Spread of Performance % YTD"
      },
      {
          "title": "Growth in Market Share %",
          "data": "Growth in Market Share %"
      }
  ];
  
  

    this.datatableConfig = {
      serverSide: true,
      stripeClasses: ['odd-row', 'even-row'],
      scrollY: 'calc(100vh - 200px)', // Adjust height as needed
      scrollX: true, // Enable horizontal scrolling
      ajax: (dataTablesParameters: any, callback) => {
        this.apiService.getRecords(dataTablesParameters).subscribe(resp => {
          callback(resp);
        });
      },
      // columns: [
      //   {
      //     title: 'Name', data: 'name', render: function (data, type, full) {
      //       const colorClasses = ['success', 'info', 'warning', 'danger'];
      //       const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

      //       const initials = data[0].toUpperCase();
      //       const symbolLabel = `
      //         <div class="symbol-label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
      //           ${initials}
      //         </div>
      //       `;

      //       const nameAndEmail = `
      //         <div class="d-flex flex-column" data-action="view" data-id="${full.id}">
      //           <a href="javascript:;" class="text-gray-800 text-hover-primary mb-1">${data}</a>
      //           <span>${full.email}</span>
      //         </div>
      //       `;

      //       return `
      //         <div class="symbol symbol-circle symbol-50px overflow-hidden me-3" data-action="view" data-id="${full.id}">
      //           <a href="javascript:;">
      //             ${symbolLabel}
      //           </a>
      //         </div>
      //         ${nameAndEmail}
      //       `;
      //     }
      //   },
      //   {
      //     title: 'Role', data: 'role', render: function (data, type, row) {
      //       const roleName = row.roles[0]?.name;
      //       return roleName || '';
      //     },
      //     orderData: [1],
      //     orderSequence: ['asc', 'desc'],
      //     type: 'string',
      //   },
      //   {
      //     title: 'Last Login', data: 'last_login_at', render: (data, type, full) => {
      //       const date = data || full.created_at;
      //       const dateString = moment(date).fromNow();
      //       return `<div class="badge badge-light fw-bold">${dateString}</div>`;
      //     }
      //   },
      //   {
      //     title: 'Joined Date', data: 'created_at', render: function (data) {
      //       return moment(data).format('DD MMM YYYY, hh:mm a');;
      //     }
      //   }
      // ],
      // columns: [
      //   {
      //     title: 'EMPLOYEE CODE', data: 'EMPLOYEE CODE', render: function (data, type, full) {
      //       const colorClasses = ['success', 'info', 'warning', 'danger'];
      //       const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

      //       const initials = data //data[0].toUpperCase();
      //       const symbolLabel = `
      //         <div class="symbol-label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
      //           ${initials}
      //         </div>
      //       `;

      //       const nameAndEmail = `
      //         <div class="d-flex flex-column" data-action="view" data-id="${full.id}">
      //           <a href="javascript:;" class="text-gray-800 text-hover-primary mb-1">${data}</a>
      //           <span>${full.email}</span>
      //         </div>
      //       `;

      //       return `
      //         <div class="symbol symbol-circle symbol-50px overflow-hidden me-3" data-action="view" data-id="${full.id}">
      //           <a href="javascript:;">
      //             ${symbolLabel}
      //           </a>
      //         </div>
      //         ${nameAndEmail}
      //       `;
      //     }
      //   },
      //   {
      //     title: 'Employee Name', data: 'Employee Name', render: function (data, type, row) {
      //       const roleName = data //row.roles[0]?.name;
      //       return roleName || '';
      //     },
      //     orderData: [1],
      //     orderSequence: ['asc', 'desc'],
      //     type: 'string',
      //   },
      //   {
      //     title: 'Designation', data: 'Designation', render: (data, type, full) => {
      //       const date = data || full.created_at;
      //       const dateString = data //moment(date).fromNow();
      //       return `<div class="badge badge-light fw-bold">${dateString}</div>`;
      //     }
      //   },
      //   {
      //     title: 'City', data: 'City', render: function (data) {
      //       return data//moment(data).format('DD MMM YYYY, hh:mm a');;
      //     }
      //   }
      // ],
      // columns: 
      columns,
      createdRow: function (row, data, dataIndex) {
        $('td:eq(0)', row).addClass('d-flex align-items-center');
      },
    };

    // this.roles$ = this.roleService.getRoles();
  }

  delete(id: number) {
    this.apiService.deleteUser(id).subscribe(() => {
      this.reloadEvent.emit(true);
    });
  }

  edit(id: number) {
    this.aUser = this.apiService.getUser(id);
    this.aUser.subscribe((user: IUserModel) => {
      this.userModel = user;
    });
  }

  create() {
    this.userModel = { id: 0, name: '', email: '', };
  }

  onSubmit(event: Event, myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    this.isLoading = true;

    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: this.userModel.id > 0 ? 'User updated successfully!' : 'User created successfully!',
    };
    const errorAlert: SweetAlertOptions = {
      icon: 'error',
      title: 'Error!',
      text: '',
    };

    const completeFn = () => {
      this.isLoading = false;
    };

    const updateFn = () => {
      this.apiService.updateUser(this.userModel.id, this.userModel).subscribe({
        next: () => {
          this.showAlert(successAlert);
          this.reloadEvent.emit(true);
        },
        error: (error) => {
          errorAlert.text = this.extractText(error.error);
          this.showAlert(errorAlert);
          this.isLoading = false;
        },
        complete: completeFn,
      });
    };

    const createFn = () => {
      this.userModel.password = 'test123';
      this.apiService.createUser(this.userModel).subscribe({
        next: () => {
          this.showAlert(successAlert);
          this.reloadEvent.emit(true);
        },
        error: (error) => {
          errorAlert.text = this.extractText(error.error);
          this.showAlert(errorAlert);
          this.isLoading = false;
        },
        complete: completeFn,
      });
    };

    if (this.userModel.id > 0) {
      updateFn();
    } else {
      createFn();
    }
  }

  extractText(obj: any): string {
    var textArray: string[] = [];

    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        // If the value is a string, add it to the 'textArray'
        textArray.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        // If the value is an object, recursively call the function and concatenate the results
        textArray = textArray.concat(this.extractText(obj[key]));
      }
    }

    // Use a Set to remove duplicates and convert back to an array
    var uniqueTextArray = Array.from(new Set(textArray));

    // Convert the uniqueTextArray to a single string with line breaks
    var text = uniqueTextArray.join('\n');

    return text;
  }

  showAlert(swalOptions: SweetAlertOptions) {
    let style = swalOptions.icon?.toString() || 'success';
    if (swalOptions.icon === 'error') {
      style = 'danger';
    }
    this.swalOptions = Object.assign({
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      customClass: {
        confirmButton: "btn btn-" + style
      }
    }, swalOptions);
    this.cdr.detectChanges();
    this.noticeSwal.fire();
  }

  ngOnDestroy(): void {
    this.reloadEvent.unsubscribe();
  }
}