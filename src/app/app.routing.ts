import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';
import { TestComponent } from '../app/components/test/test.component';
import { ModuleWithProviders } from '@angular/core';
import { IconSearchComponent } from './components/editor/tiny-editor/insert-media/icon-search/icon-search.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NewProjectComponent } from './components/project/new/new.component';
import { EditProjectComponent } from './components/project/edit/edit.component';
import { ListProjectComponent } from './components/project/list/list.component';

const APP_ROUTES: Routes = [
  { path: '', component: EditorComponent },
  { path: 'project', component: ListProjectComponent },
  { path: 'project/new', component: NewProjectComponent },
  { path: 'project/:projectId', component: EditProjectComponent },
  { path: 'markdown/:markdownId', component: EditorComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: TestComponent, data: { skipAuth: true } },
  { path: 'iconSearch', component: IconSearchComponent, data: { skipAuth: true } }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
