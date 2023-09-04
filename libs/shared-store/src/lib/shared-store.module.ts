import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGames from './+state/reducers/games.reducer';
import { GamesEffects } from './+state/effects/games.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGames.GAMES_FEATURE_KEY, fromGames.gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [StoreModule]
})
export class SharedStoreModule {}
