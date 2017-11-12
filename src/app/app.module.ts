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
import { UtilService } from './services/utils.service.client';
// #endregion

// #region App Components

// directives
import { ResizableDirective } from './directives/resizable/resizable.directive';
import { AutoHeightDirective } from './directives/auto-height/auto-height.directive';

// shared components
import { AlertComponent } from './components/shared/alert/alert.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { StringFilterPipe } from './components/shared/string-filter/string-filter.pipe';

// editor components
import { EditorComponent } from './components/editor/editor.component';
import { TinyEditorComponent } from './components/editor/tiny-editor/tiny-editor.component';
import { IconSearchComponent } from './components/editor/tiny-editor/insert-media/icon-search/icon-search.component';
import { InsertCodeComponent } from './components/editor/tiny-editor/insert-code/insert-code.component';
import { InsertMediaComponent } from './components/editor/tiny-editor/insert-media/insert-media.component';
import { InsertImageComponent } from './components/editor/tiny-editor/insert-media/insert-image/insert-image.component';

import { TestComponent } from './components/test/test.component';
import { InsertYoutubeComponent } from './components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component';
import { InsertGlyphComponent } from './components/editor/tiny-editor/insert-glyph/insert-glyph.component';

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
    IconSearchComponent,
    InsertCodeComponent,
    InsertMediaComponent,
    TestComponent,
    InsertImageComponent,
    InsertYoutubeComponent,
    ResizableDirective,
    InsertGlyphComponent,
    StringFilterPipe
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
    IconSearchService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
