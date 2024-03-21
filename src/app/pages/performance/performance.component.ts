// import { PerformanceModule } from './performance.module';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { PerformanceApiService } from './performance.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent implements OnInit {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel',
  };
  @ViewChild('modal') private modalComponent: ModalComponent;

  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';

  count: any = null;

  constructor(
    private performanceService: PerformanceApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.performanceService.getAllEmployeePerformanceCount().then((data) => {
      this.count = data;
      this.cdr.detectChanges();
    });
  }

  async openModal() {
    return await this.modalComponent.open();
  }
}
