import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as GamesActions from '../action/games.actions';
import { generateMock } from '../mocks/games.mock';

@Injectable()
export class GamesEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.initGames),
      switchMap(() => of(GamesActions.loadGamesSuccess({ games: generateMock(20) }))),
      catchError((error) => {
        console.error('Error', error);
        return of(GamesActions.loadGamesFailure({ error }));
      })
    )
  );
}
