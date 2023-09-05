import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbActiveModal,
  NgbModalModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';

import { sharedComponents } from './components';
import { ModalActionService } from './services/modal-action.service';
import { ContainerContentLayoutComponent } from './container-content-layout/container-content-layout.component';

@NgModule({
  imports: [CommonModule, NgbModalModule, NgbToastModule],
  declarations: [...sharedComponents, ContainerContentLayoutComponent],
  exports: [...sharedComponents],
  providers: [NgbActiveModal, ModalActionService],
})
export class SharedComponentsModule {}
