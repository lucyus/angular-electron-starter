import { Routes } from '@angular/router';
import { mainRoutes } from './main.routes';
import { setupRoutes } from '../../setup';

export const allRoutes: Routes = [
  ...mainRoutes,
  ...setupRoutes,
  { path: '**', redirectTo: '' }, // Wildcard route always goes last
];
