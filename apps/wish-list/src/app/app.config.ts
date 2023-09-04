import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { GamesFeature, GamesEffects } from '@nintendo/shared-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStoreDevtools(),
    provideEffects([GamesEffects.GamesEffects]),
    provideStore({games: GamesFeature.gamesReducer}),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};

