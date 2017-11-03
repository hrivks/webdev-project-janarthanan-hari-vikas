import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';
import { IconSearchComponent } from './components/editor/icon-search/icon-search.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: '', component: EditorComponent , data: { skipAuth: true } },
  { path: 'iconSearch', component: IconSearchComponent , data: { skipAuth: true } }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
