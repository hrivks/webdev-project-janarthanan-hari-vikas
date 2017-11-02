import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// #region App services
import { InteractionsService } from './services/interactions.service.client';
import { AuthService } from './services/auth.service.client';
import { ErrorHandlerService } from './services/error-handler.service.client';
import { UserService } from './services/user.service.client';
import { IconSearchService } from './services/iconsearch.service.client';
// #endregion

// #region App Components

// directives
import { AutoHeightDirective } from './directives/auto-height/auto-height.directive';

// shared components
import { AlertComponent } from './components/shared/alert/alert.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { NavComponent } from './components/shared/nav/nav.component';

// editor components
import { EditorComponent } from './components/editor/editor.component';
import { TinyEditorComponent } from './components/editor/tiny-editor/tiny-editor.component';
import { IconSearchComponent } from './components/editor/icon-search/icon-search/icon-search.component';

// #endregion

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoaderComponent,
    NavComponent,
    AutoHeightDirective,
    EditorComponent,
    TinyEditorComponent,
    IconSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing
  ],
  providers: [
    UserService,
    AuthService,
    ErrorHandlerService,
    InteractionsService,
    IconSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
