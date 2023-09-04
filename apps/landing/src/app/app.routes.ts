import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./modules/index').then((m) => m.HomeModule)
  },
];
