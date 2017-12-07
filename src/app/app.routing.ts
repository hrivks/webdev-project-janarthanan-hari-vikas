import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';
import { TestComponent } from '../app/components/test/test.component';
import { ModuleWithProviders } from '@angular/core';
import { IconSearchComponent } from './components/editor/tiny-editor/insert-media/icon-search/icon-search.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NewProjectComponent } from './components/project/project-new/project-new.component';
import { EditProjectComponent } from './components/project/project-edit/project-edit.component';
import { ListProjectComponent } from './components/project/project-list/project-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthService } from './services/auth.service.client';

const APP_ROUTES: Routes = [
  { path: '', component: EditorComponent },
  { path: 'projects', component: ListProjectComponent, canActivate: [AuthService] },
  { path: 'project/new', component: NewProjectComponent, canActivate: [AuthService] },
  { path: 'project/:projectId', component: EditProjectComponent, canActivate: [AuthService] },
  { path: 'project/:projectId/editor/:markdownId', component: EditorComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent, data: { skipAuth: true } },
  { path: 'iconSearch', component: IconSearchComponent, data: { skipAuth: true } }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
