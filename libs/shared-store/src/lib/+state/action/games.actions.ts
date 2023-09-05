import { createAction, props } from '@ngrx/store';
import { gameI } from '@nintendo/shared-components-models';

export const initGames = createAction('[Games Page] Init');

export const loadGamesSuccess = createAction(
  '[Games/API] Load Games Success',
  props<{ games: gameI[] }>()
);

export const loadGamesFailure = createAction(
  '[Games/API] Load Games Failure',
  props<{ error: any }>()
);

export const addToWishList = createAction(
  '[Games] Add Game Wish list Success',
  props<{ game: gameI }>()
);

export const removeToWishList = createAction(
  '[Games] Remove Game Wish list Success',
  props<{ id: string }>()
);