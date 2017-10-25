import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent , data: { skipAuth: true } }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
