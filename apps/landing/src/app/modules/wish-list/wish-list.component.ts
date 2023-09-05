import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { gameI } from '@nintendo/shared-components-models';
import { GamesActions, GamesFeature, GamesSelectors } from '@nintendo/shared-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'nintendo-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  
  games$: Observable<gameI[]>;

  constructor(private store: Store<GamesFeature.GamesState>) {}

  ngOnInit() {
    this.games$ = this.store.pipe(select(GamesSelectors.selectWishList));
  }

  removeGameWishList = (game: gameI) => {
    this.store.dispatch(GamesActions.removeToWishList({id: game.id}));
  }
  
}