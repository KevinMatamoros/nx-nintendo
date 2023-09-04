import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as GamesActions from '../action/games.actions';
import * as GamesFeature from '../reducers/games.reducer';
import { gamesMock } from '../mocks/games.mock';

@Injectable()
export class GamesEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.initGames),
      switchMap(() => of(GamesActions.loadGamesSuccess({ games: gamesMock }))),
      catchError((error) => {
        console.error('Error', error);
        return of(GamesActions.loadGamesFailure({ error }));
      })
    )
  );
}
