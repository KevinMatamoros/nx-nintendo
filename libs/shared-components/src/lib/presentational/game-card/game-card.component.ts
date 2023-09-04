import { Component, Input } from '@angular/core';
import { gameI } from '../../models/shared.models';

@Component({
  selector: 'nintendo-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game?: gameI;

}
