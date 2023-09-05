import { Component, Input } from '@angular/core';

@Component({
  selector: 'nintendo-dropwdown-order',
  templateUrl: './dropwdown-order.component.html',
  styleUrls: ['./dropwdown-order.component.scss'],
})
export class DropwdownOrderComponent {
  @Input() selectedValue!: string;
  @Input() triggerAction!: (orderMethod: string) => void;


  selectOrderMethod(orderMethod: string): void {
    this.triggerAction(orderMethod);
  }
}
