import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nintendo-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.scss'],
})
export class ModalActionComponent {
  @Input() title? = '';
  @Input() content = '';
  @Input() actionTrigger?: () => void;

  constructor(public activeModal: NgbActiveModal) {}

  triggerAction(): void {
    if(this.actionTrigger) this.actionTrigger();
    this.activeModal.close();
  }
}
