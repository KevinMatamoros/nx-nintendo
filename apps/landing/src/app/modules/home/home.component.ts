import { Component } from '@angular/core';
import { gamesMock } from '../../mocks/games.mock';

@Component({
  selector: 'nintendo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get mockGames() {
    return gamesMock();
  }
}
