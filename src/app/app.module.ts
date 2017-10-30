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
import { HeadingEditComponent } from './components/editor/markdown-elements/heading/heading.component';
import { TextEditComponent } from './components/editor/markdown-elements/text/text.component';
import { LineEditComponent } from './components/editor/markdown-elements/line/line.component';
import { TableEditComponent } from './components/editor/markdown-elements/table/table.component';
import { TableTextEditComponent } from './components/editor/markdown-elements/table/table-text/table-text.component';

// #endregion

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoaderComponent,
    EditorComponent,
    NavComponent,
    HeadingEditComponent,
    AutoHeightDirective,
    TextEditComponent,
    LineEditComponent,
    TableEditComponent,
    TableTextEditComponent
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
    InteractionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
