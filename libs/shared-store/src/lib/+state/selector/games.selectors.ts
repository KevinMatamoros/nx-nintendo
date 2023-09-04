import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAMES_FEATURE_KEY, GamesState, gamesAdapter } from '../reducers/games.reducer';

// Lookup the 'Games' feature state managed by NgRx
export const selectGamesState =
  createFeatureSelector<GamesState>(GAMES_FEATURE_KEY);

export const selectGamesLoaded = createSelector(
  selectGamesState,
  (state: GamesState) => state.loaded
);

export const selectGamesError = createSelector(
  selectGamesState,
  (state: GamesState) => state.error
);

export const selectGames = createSelector(
  selectGamesState,
  (state: GamesState) => state.games
);