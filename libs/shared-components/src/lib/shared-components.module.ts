import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbActiveModal,
  NgbDropdownModule,
  NgbModalModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';

import { sharedComponents } from './components';
import { ModalActionService } from './services/modal-action.service';

@NgModule({
  imports: [CommonModule, NgbModalModule, NgbToastModule, NgbDropdownModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  providers: [NgbActiveModal, ModalActionService],
})
export class SharedComponentsModule {}
