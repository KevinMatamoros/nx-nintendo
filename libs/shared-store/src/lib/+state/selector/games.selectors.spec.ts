import * as GamesSelectors from './games.selectors';

describe('Games Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  describe('Games Selectors', () => {

    it.skip('selectGamesLoaded() should return the current "loaded" status', () => {
      console.log(GamesSelectors);
      const result = GamesSelectors.selectGamesLoaded({
        games: [],
        orderMethod: 'Ascendente',
        wishList: [],
        loaded: false,
      });

      expect(result).toBe(false);
    });

    it.skip('selectGamesError() should return the current "error" state', () => {
      const result = GamesSelectors.selectGamesError({
        games: [],
        orderMethod: 'Ascendente',
        error: 'No Error Available',
        wishList: [],
        loaded: false,
      });

      expect(result).toBe(ERROR_MSG);
    });
  });
});
