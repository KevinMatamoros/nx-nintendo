import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { gameI } from '@nintendo/shared-components-models';
import { GamesSelectors, GamesActions, GamesFeature } from '@nintendo/shared-store';

@Component({
  selector: 'nintendo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  
  games$: Observable<gameI[]>;
  orderMethod$: Observable<string>;

  subscriptions$: Subscription = new Subscription();

  constructor(private store: Store<GamesFeature.GamesState>) {}

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit() {
    this.initData();
    this.initSub();
  }

  initData(): void {
    this.store.dispatch(GamesActions.initGames());
  }

  initSub(): void {
    this.games$ = this.store.pipe(select(GamesSelectors.selectGames));
    this.orderMethod$ = this.store.pipe(select(GamesSelectors.selectOrderMethod));
  }

  addGameWishList = (game: gameI) => {
    this.store.dispatch(GamesActions.addToWishList({game}));
  }

  selectOrderMethod = (order: string) => {
    this.store.dispatch(GamesActions.setOrderGames({order}));
  }
  
}
