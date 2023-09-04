import { Action } from '@ngrx/store';

import * as GamesActions from '../action/games.actions';
import { GamesState, initialGamesState, gamesReducer } from './games.reducer';
import { gameI } from '@nintendo/shared-components-models';
import { randomUUID } from 'crypto';
import { gameMock } from '../mocks/games.mock';

describe('Games Reducer', () => {
  const createGamesEntity = (game: gameI): gameI => ({
    ...game,
    name: `${game.name}-${randomUUID()}`,
  });

  describe('valid Games actions', () => {
    it('loadGamesSuccess should return the list of known Games', () => {
      const games = [
        createGamesEntity(gameMock),
        createGamesEntity(gameMock),
      ];
      const action = GamesActions.loadGamesSuccess({ games });

      const result: GamesState = gamesReducer(initialGamesState, action);

      expect(result.loaded).toBe(true);
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
