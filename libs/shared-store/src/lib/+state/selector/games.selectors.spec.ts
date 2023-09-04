import {
  GamesPartialState,
} from '../reducers/games.reducer';
import * as GamesSelectors from './games.selectors';

describe('Games Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let state: GamesPartialState;

  describe('Games Selectors', () => {

    it('selectGamesLoaded() should return the current "loaded" status', () => {
      const result = GamesSelectors.selectGamesLoaded(state);

      expect(result).toBe(true);
    });

    it('selectGamesError() should return the current "error" state', () => {
      const result = GamesSelectors.selectGamesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
