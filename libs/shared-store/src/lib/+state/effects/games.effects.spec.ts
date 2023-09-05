import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GamesActions from '../action/games.actions';
import { GamesEffects } from './games.effects';

describe('GamesEffects', () => {
  let actions: Observable<Action>;
  let effects: GamesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GamesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GamesEffects);
  });

  describe('init$', () => {
    it.skip('should work', () => {
      actions = hot('-a-|', { a: GamesActions.initGames() });

      const expected = hot('-a-|', {
        a: GamesActions.loadGamesSuccess({ games: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
