import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GamesActions from '../action/games.actions';

import { gameI } from '@nintendo/shared-components-models';

export const GAMES_FEATURE_KEY = 'games';

export interface GamesState {
  games?: gameI[]; // which Games record has been selected
  loaded: boolean; // has the Games list been loaded
  error?: string | null; // last known error (if any)
}

export interface GamesPartialState {
  readonly [GAMES_FEATURE_KEY]: GamesState;
}

export const gamesAdapter: EntityAdapter<gameI> =
  createEntityAdapter<gameI>();

export const initialGamesState: GamesState = {
  games: [],
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
  on(GamesActions.loadGamesFailure, (state, { error }) => ({ ...state, error }))
);

export function gamesReducer(state: GamesState | undefined, action: Action) {
  return reducer(state, action);
}
