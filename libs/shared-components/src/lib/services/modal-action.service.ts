import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalActionComponent } from '../components/modal-action/modal-action.component';
import { modalActionServiceObjectI } from '../models/modal-action.service.model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalActionService {

  modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal, public config: NgbModalConfig) {
    /* Default configuration */
    
  }

  open(modalServiceObject: modalActionServiceObjectI) {
    this.config.animation = true;
    this.config.backdrop = 'static';
		this.config.keyboard = false;
    this.config.centered = true;
    this.config.windowClass = '';

		this.modalRef = this.modalService.open(ModalActionComponent, this.config);
		this.modalRef.componentInstance.title = modalServiceObject.title;
		this.modalRef.componentInstance.content = modalServiceObject.content;
		this.modalRef.componentInstance.actionTrigger = modalServiceObject.action;
    this.modalRef.closed.pipe(take(1)).subscribe(this.modalRef = undefined);
	}

  alert(modalServiceObject: modalActionServiceObjectI): void {
    this.config.centered = false;
    this.config.backdropClass = 'bg-transparent';
    this.config.backdrop = false;
    this.config.windowClass = 'alert-modal-class';

    this.modalRef = this.modalService.open(ModalActionComponent, this.config);
		this.modalRef.componentInstance.content = modalServiceObject.content;

    setTimeout(() => this.modalRef?.close(), 1000);
  }


}
