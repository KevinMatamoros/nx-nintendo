import { Component, Input } from '@angular/core';
import { gameI } from '../../models/shared.models';
import { ModalActionService } from '../../services/modal-action.service';

@Component({
  selector: 'nintendo-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  @Input() game?: gameI;
  @Input() actionSelection: (game: gameI | undefined) => void = () => console.log('default action in game');

  showMessageDigital = false;

  constructor(private modalActionService: ModalActionService) {}

  removeGameWishList(game: gameI): void {
    this.modalActionService.open({
      title: 'Remover de Lista de deseos',
      content: `Quieres remover <b>${game.name}</b> de tu Lista de Deseos?`,
      action: () => this.actionSelection(game)
    })
  }

  getDigitalVersion(game: gameI): void {
    this.modalActionService.alert({
      content: 'Videojuego adquirido correctamente'
    });
    this.actionSelection(game);
  }
}
