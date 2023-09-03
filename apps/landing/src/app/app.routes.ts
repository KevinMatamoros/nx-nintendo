import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent
    /* loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule), */
  },
];
