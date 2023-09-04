import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { gameI } from '@nintendo/shared-components-models';
import { GamesSelectors, GamesActions, GamesFeature } from '@nintendo/shared-store';

@Component({
  selector: 'nintendo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  games$: Observable<gameI[]>;

  constructor(private store: Store<GamesFeature.GamesState>) {}

  ngOnInit() {
    this.store.dispatch(GamesActions.initGames());
    this.games$ = this.store.pipe(select(GamesSelectors.selectGames));
  }
  
}
