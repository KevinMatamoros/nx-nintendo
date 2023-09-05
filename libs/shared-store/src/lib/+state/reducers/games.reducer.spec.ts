import { Action } from '@ngrx/store';

import * as GamesActions from '../action/games.actions';
import { GamesState, initialGamesState, gamesReducer } from './games.reducer';
import { generateMock } from '../mocks/games.mock';

describe('Games Reducer', () => {

  describe('valid Games actions', () => {
    it('loadGamesSuccess should return the list of known Games', () => {
      const games = generateMock(20);
      const action = GamesActions.loadGamesSuccess({ games });

      const result: GamesState = gamesReducer(initialGamesState, action);

      expect(result.loaded).toBe(false);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = gamesReducer(initialGamesState, action);

      expect(result).toBe(initialGamesState);
    });
  });
});
