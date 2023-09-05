import { createReducer, on, Action } from '@ngrx/store';

import * as GamesActions from '../action/games.actions';

import { gameI } from '@nintendo/shared-components-models';

export const GAMES_FEATURE_KEY = 'games';

export interface GamesState {
  games: gameI[]; // which Games record has been selected
  orderMethod: string;
  wishList: gameI[],
  loaded: boolean; // has the Games list been loaded
  error?: string | null; // last known error (if any)
}

export interface GamesPartialState {
  readonly [GAMES_FEATURE_KEY]: GamesState;
}

export const initialGamesState: GamesState = {
  games: [],
  orderMethod: 'Ascendente',
  wishList: [],
  loaded: false,
};

const reducer = createReducer(
  initialGamesState,
  on(GamesActions.initGames, (state) => ({
    ...state,
    loaded: true,
    error: null,
  })),
  on(GamesActions.loadGamesSuccess, (state, { games }) =>
    ({
      ...state,
      games,
      loaded: false,
      error: null,
    })
  ),
  on(GamesActions.loadGamesFailure, (state, { error }) => ({ ...state, error })),
  on(GamesActions.addToWishList, (state, { game }) => ({ ...state, wishList: [...state.wishList, game] })),
  on(GamesActions.removeToWishList, (state, { id }) => ({ ...state, wishList: [...state.wishList.filter((game: gameI) => game.id !== id)] })),
  on(GamesActions.setOrderGames, (state, { order }) => ({ ...state, orderMethod: order }))
);

export function gamesReducer(state: GamesState | undefined, action: Action) {
  return reducer(state, action);
}
