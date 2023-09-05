import { Component, Input } from '@angular/core';
import { gameI } from '../../models/shared.models';
import { ModalActionService } from '../../services/modal-action.service';

@Component({
  selector: 'nintendo-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game!: gameI;
  @Input() actionSelection: (game: gameI | undefined) => void = () => console.log('default action in game');

  constructor(private modalActionService: ModalActionService) {}

  addGameWishList(game: gameI): void {
    this.modalActionService.open({
      title: 'Lista de deseos',
      content: `Quieres agregar <b>${game.name}</b> a tu Lista de Deseos?`,
      action: () => this.actionSelection(this.game)
    })
  }

}
