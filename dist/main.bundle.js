webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<app-loader></app-loader>\r\n\r\n<app-alert></app-alert>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, activatedRoute, title, authService, interactionsService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.authService = authService;
        this.interactionsService = interactionsService;
        // set title on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                // check user logged in
                var requireLogin = !_this.activatedRoute.snapshot.firstChild.data.skipAuth;
                if (requireLogin) {
                    // get logged in user
                    var loggedInUser = _this.authService.getLoggedInUser();
                    _this.loggedInUserId = loggedInUser ? loggedInUser._id : null;
                }
                else {
                    _this.loggedInUserId = null;
                }
                // set page title
                title.setTitle(_this.activatedRoute.snapshot.firstChild.data.title || 'WriteMe.md');
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var AppConstants = (function () {
    function AppConstants() {
    }
    AppConstants.EVENTS = {
        showAlert: 'showAlert',
        showLoader: 'showLoader'
    };
    AppConstants.ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].endpoint;
    AppConstants.APP_ROOT_URL = 'http://writeme-md.herokuapp.com';
    AppConstants.ICONS_FOLDER_PATH = '/resources/glyphicons';
    AppConstants.FA_ICONS_FOLDER_PATH = '/resources/glyphicons/fa';
    return AppConstants;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_error_handler_service_client__ = __webpack_require__("../../../../../src/app/services/error-handler.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_iconsearch_service_client__ = __webpack_require__("../../../../../src/app/services/iconsearch.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_utils_service_client__ = __webpack_require__("../../../../../src/app/services/utils.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_resizable_resizable_directive__ = __webpack_require__("../../../../../src/app/directives/resizable/resizable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_auto_height_auto_height_directive__ = __webpack_require__("../../../../../src/app/directives/auto-height/auto-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shared_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_string_filter_string_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/string-filter/string-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_editor_tiny_editor_tiny_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_editor_tiny_editor_insert_media_icon_search_icon_search_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_editor_tiny_editor_insert_code_insert_code_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_editor_tiny_editor_insert_media_insert_media_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_editor_tiny_editor_insert_media_insert_image_insert_image_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-image/insert-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_editor_tiny_editor_insert_media_insert_youtube_insert_youtube_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_editor_tiny_editor_insert_glyph_insert_glyph_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-glyph/insert-glyph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_markdown_convertor_markdown_convertor_pipe__ = __webpack_require__("../../../../../src/app/pipes/markdown-convertor/markdown-convertor.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// #region App services






// #endregion
// #region App Components
// directives


// shared components



// pipes

// editor components









// user components


// #endregion
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            // Declare components here
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_shared_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shared_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_shared_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__directives_auto_height_auto_height_directive__["a" /* AutoHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_19__components_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_editor_tiny_editor_tiny_editor_component__["a" /* TinyEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_editor_tiny_editor_insert_media_icon_search_icon_search_component__["a" /* IconSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_editor_tiny_editor_insert_code_insert_code_component__["a" /* InsertCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_editor_tiny_editor_insert_media_insert_media_component__["a" /* InsertMediaComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_editor_tiny_editor_insert_media_insert_image_insert_image_component__["a" /* InsertImageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_editor_tiny_editor_insert_media_insert_youtube_insert_youtube_component__["a" /* InsertYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_resizable_resizable_directive__["a" /* ResizableDirective */],
                __WEBPACK_IMPORTED_MODULE_27__components_editor_tiny_editor_insert_glyph_insert_glyph_component__["a" /* InsertGlyphComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_string_filter_string_filter_pipe__["a" /* StringFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_28__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_markdown_convertor_markdown_convertor_pipe__["a" /* MarkdownConvertorPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* Routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service_client__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__services_error_handler_service_client__["a" /* ErrorHandlerService */],
                __WEBPACK_IMPORTED_MODULE_7__services_interactions_service_client__["a" /* InteractionsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_iconsearch_service_client__["a" /* IconSearchService */],
                __WEBPACK_IMPORTED_MODULE_12__services_utils_service_client__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_markdown_convertor_markdown_convertor_pipe__["a" /* MarkdownConvertorPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_string_filter_string_filter_pipe__["a" /* StringFilterPipe */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_editor_tiny_editor_insert_media_icon_search_icon_search_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");





var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__["a" /* EditorComponent */], data: { skipAuth: true } },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__app_components_test_test_component__["a" /* TestComponent */], data: { skipAuth: true } },
    { path: 'iconSearch', component: __WEBPACK_IMPORTED_MODULE_3__components_editor_tiny_editor_insert_media_icon_search_icon_search_component__["a" /* IconSearchComponent */], data: { skipAuth: true } }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview-wrapper .card{\r\n    border: solid thin #c5c5c5;\r\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.preview-wrapper .card .card-body {\r\n    overflow-y: auto;\r\n}\r\n\r\ntextarea.markdown-preview {\r\n    font-family: monospace;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters editor pb-5\"\r\n     [hidden]=\"!loadComplete\">\r\n\r\n    <!-- Editor -->\r\n    <div class=\"col pr-md-2 editor-wrapper\">\r\n        <app-tiny-editor [(markdownHtml)]=\"markdownHtml\"\r\n                         [height]=\"compHeight + 18\"\r\n                         (loadComplete)=\"onEditorLoad($event)\"></app-tiny-editor>\r\n    </div>\r\n\r\n    <!-- Preview -->\r\n    <div class=\"col pl-md-2 preview-wrapper\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header bg-editor-gray pt-2\">\r\n\r\n                <ul class=\"nav nav-tabs card-header-tabs\"\r\n                    role=\"tablist\">\r\n\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\"\r\n                           href=\"#\"\r\n                           [ngClass]=\"{'active': activeTab === 'preview' }\"\r\n                           (click)=\"activeTab='preview'\"\r\n                           role=\"tab\">Preview</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\"\r\n                           href=\"#\"\r\n                           [ngClass]=\"{'active': activeTab === 'markdown' }\"\r\n                           (click)=\"activeTab='markdown'\"\r\n                           role=\"tab\">Markdown</a>\r\n                    </li>\r\n\r\n                </ul>\r\n\r\n            </div>\r\n            <div class=\"card-body\"\r\n                 #previewTabBody>\r\n                <!-- Tab panes -->\r\n                <div class=\"tab-content p-2\">\r\n\r\n                    <!-- Preview tab -->\r\n                    <div class=\"tab-pane active show fade text-left\"\r\n                         [ngClass]=\"{'show': activeTab === 'preview' }\"\r\n                         role=\"tabpanel\">\r\n                        <div *ngIf=\"activeTab === 'preview'\"\r\n                             class=\"tab-pane-inner\"\r\n                             [style.height.px]=\"compHeight\">\r\n                            <div class=\"markdown-body\"\r\n                                 [innerHtml]=\"markdownHtml\"></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- markdown tab -->\r\n                    <div class=\"tab-pane active fade\"\r\n                         [ngClass]=\"{'show': activeTab === 'markdown' }\"\r\n                         role=\"tabpanel\">\r\n                        <div *ngIf=\"activeTab === 'markdown'\"\r\n                             [style.height.px]=\"compHeight\"\r\n                             class=\"tab-pane-inner\">\r\n                            <textarea class=\"w-100 h-100 border-0 markdown-preview\"\r\n                                      [ngModel]=\"markdownHtml | markdownConvertor\"\r\n                                      readonly></textarea>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- tab content -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- preview wrapper -->\r\n</div>\r\n<nav class=\"navbar navbar-expand bg-faded border-faded fixed-bottom hvj-footer p-1 px-3\">\r\n    <div class=\"ml-auto form-inline\">\r\n        <button class=\"btn btn-primary btn-sm ml-2\">\r\n                <span>Save</span>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-sm ml-2\">\r\n                <span>Commit to Git</span> <i class=\"fa fa-github fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-sm ml-2\" (click)=\"download()\">\r\n                <span>Download</span> <i class=\"fa fa-download fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_markdown_convertor_markdown_convertor_pipe__ = __webpack_require__("../../../../../src/app/pipes/markdown-convertor/markdown-convertor.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorComponent = (function () {
    function EditorComponent(markdownConvertor) {
        this.markdownConvertor = markdownConvertor;
        this.compHeight = window.innerHeight - 181;
        this.loadComplete = false;
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.activeTab = 'preview';
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
    };
    EditorComponent.prototype.onEditorLoad = function () {
        this.loadComplete = true;
    };
    /** Download markdown file */
    EditorComponent.prototype.download = function () {
        var markdown = this.markdownConvertor.transform(this.markdownHtml);
        var textFileAsBlob = new Blob([markdown], { type: 'text/plain' });
        var fileName = 'README.md';
        var downloadLink = document.createElement('a');
        downloadLink.download = fileName;
        downloadLink.innerHTML = 'Download README.md';
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = function (e) { document.body.removeChild(e.target); };
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputArea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditorComponent.prototype, "inputArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('previewTabBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EditorComponent.prototype, "previewTabBody", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css"), __webpack_require__("../../../../../src/assets/github-markdown.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pipes_markdown_convertor_markdown_convertor_pipe__["a" /* MarkdownConvertorPipe */]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".insert-code textarea {\r\n    font-family: monospace;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row insert-code\">\r\n    <div class=\"col\">\r\n        <div class=\"form-group\">\r\n\r\n            <!-- Lang select -->\r\n            <label class=\"font-weight-bold text-muted\">Language </label>\r\n            <div class=\"btn-group\"\r\n                 role=\"group\"\r\n                 aria-label=\"Button group with nested dropdown\">\r\n                <input type=\"text\"\r\n                       class=\"form-control form-control-sm\"\r\n                       placeholder=\"Eg: Java\"\r\n                       [(ngModel)]=\"data.lang\" />\r\n                <div class=\"btn-group\"\r\n                     role=\"group\">\r\n                    <button type=\"button\"\r\n                            class=\"btn btn-primary dropdown-toggle btn-sm\"\r\n                            data-toggle=\"dropdown\"></button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\"\r\n                           href=\"#\"\r\n                           (click)=\"data.lang='javascript'\">JavaScript</a>\r\n                        <a class=\"dropdown-item\"\r\n                           href=\"#\"\r\n                           (click)=\"data.lang='csharp'\">C#</a>\r\n                        <a class=\"dropdown-item\"\r\n                           href=\"#\"\r\n                           (click)=\"data.lang='java'\">Java</a>\r\n                        <a class=\"dropdown-item\"\r\n                           href=\"#\"\r\n                           (click)=\"data.lang='python'\">Python</a>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Code editor -->\r\n            <div class=\"mt-3\"\r\n                 [style.height.px]=\"compHeight\">\r\n                <textarea class=\"form-control h-100\"\r\n                          [(ngModel)]=\"data.code\"></textarea>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsertCodeComponent = (function () {
    function InsertCodeComponent() {
        this.compHeight = this.compHeight || 200;
    }
    InsertCodeComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = { code: '', lang: '' };
        }
    };
    /** Watch for input changes and reassign modal control callbacks */
    InsertCodeComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
    };
    /** Return component data */
    InsertCodeComponent.prototype.submit = function () {
        return this.data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertCodeComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertCodeComponent.prototype, "compControl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertCodeComponent.prototype, "compHeight", void 0);
    InsertCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor-insert-code',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsertCodeComponent);
    return InsertCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-glyph/insert-glyph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.fa-sm {\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 22px;\r\n}\r\n\r\nspan.fa-lg {\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 25px;\r\n}\r\n\r\nspan.fa-2x {\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 37px;\r\n}\r\n\r\nspan.fa-3x {\r\n    width: 55px;\r\n    height: 55px;\r\n    line-height: 50px;\r\n}\r\n\r\nspan.fa-4x {\r\n    width: 70px;\r\n    height: 70px;\r\n    line-height: 61px;\r\n}\r\n\r\nspan.fa-5x {\r\n    width: 80px;\r\n    height: 80px;\r\n    line-height: 70px;\r\n}\r\n\r\nspan.fa:hover {\r\n    background: #EEE;\r\n    color: black;\r\n}\r\n\r\nspan.emoji {\r\n    width: 55px;\r\n    height: 55px;\r\n}\r\n\r\nimg.emoji {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\nimg.emoji:hover {\r\n    background-color: #EEE;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-glyph/insert-glyph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"insert-glyph\">\r\n\r\n    <nav class=\"nav nav-tabs\"\r\n         role=\"tablist\">\r\n        <a class=\"nav-item nav-link active\"\r\n           data-toggle=\"tab\"\r\n           href=\"#icons-fa\"\r\n           role=\"tab\"\r\n           (click)=\"selectedType='fa'\">Icons</a>\r\n        <a class=\"nav-item nav-link\"\r\n           data-toggle=\"tab\"\r\n           href=\"#icons-emoji\"\r\n           role=\"tab\"\r\n           (click)=\"selectedType='emoji'\">Emoji</a>\r\n    </nav>\r\n    <div class=\"tab-content\"\r\n         id=\"nav-tabContent\">\r\n\r\n        <!-- Icons tab -->\r\n        <div class=\"tab-pane fade show active\"\r\n             id=\"icons-fa\"\r\n             role=\"tabpanel\">\r\n            <!-- Search and size -->\r\n            <div class=\"form-group form-inline m-1\">\r\n                <input type=\"text\"\r\n                       class=\"form-control form-control-sm w-50\"\r\n                       placeholder=\"Search...\"\r\n                       [(ngModel)]=\"glyphFilter\">\r\n                <!-- Size dropdown -->\r\n                <div class=\"dropdown ml-auto\">\r\n                    <button class=\"btn dropdown-toggle btn-sm\"\r\n                            type=\"button\"\r\n                            data-toggle=\"dropdown\">\r\n                        Size: {{selectedSize}}\r\n                    </button>\r\n                    <div class=\"dropdown-menu mt-0\">\r\n                        <button class=\"dropdown-item\"\r\n                                href=\"#\"\r\n                                (click)=\"selectedSize='sm'\">sm</button>\r\n                        <button class=\"dropdown-item\"\r\n                                href=\"#\"\r\n                                (click)=\"selectedSize='lg'\">lg</button>\r\n                        <button class=\"dropdown-item\"\r\n                                href=\"#\"\r\n                                (click)=\"selectedSize='2x'\">2x</button>\r\n                        <button class=\"dropdown-item\"\r\n                                href=\"#\"\r\n                                (click)=\"selectedSize='3x'\">3x</button>\r\n                        <button class=\"dropdown-item\"\r\n                                href=\"#\"\r\n                                (click)=\"selectedSize='4x'\">4x</button>\r\n\r\n                        <button class=\"dropdown-item\"\r\n                                href=\"#\"\r\n                                (click)=\"selectedSize='5x'\">5x</button>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Icons List -->\r\n            <div class=\"text-center\"\r\n                 *ngIf=\"selectedType==='fa'\">\r\n                <span *ngFor=\"let ico of faIconsList | stringFilter: glyphFilter\"\r\n                      class=\"text-center fa fa-{{ico}} fa-{{selectedSize}} p-1 m-1 border border-faded\"\r\n                      title={{ico}}\r\n                      (click)=\"selectIcon(ico)\"></span>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- /Icons tab -->\r\n\r\n        <!-- Emoji tab -->\r\n        <div class=\"tab-pane fade\"\r\n             id=\"icons-emoji\"\r\n             role=\"tabpanel\">\r\n            <div class=\"form-group m-1\">\r\n                <input type=\"text\"\r\n                       class=\"form-control form-control-sm\"\r\n                       placeholder=\"Search...\"\r\n                       [(ngModel)]=\"emojiFilter\">\r\n            </div>\r\n            <div class=\"text-center\"\r\n                 *ngIf=\"selectedType==='emoji'\">\r\n                <img *ngFor=\"let ico of emojisList | stringFilter:emojiFilter:'name'\"\r\n                     class=\"emoji p-1 m-1 border border-faded\"\r\n                     title={{ico.name}}\r\n                     [src]=\"ico.url\"\r\n                     (click)=\"selectIcon(ico)\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-glyph/insert-glyph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertGlyphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_fontawesome_icons_list__ = __webpack_require__("../../../../../src/app/model/fontawesome-icons-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_emojis_list__ = __webpack_require__("../../../../../src/app/model/emojis-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsertGlyphComponent = (function () {
    function InsertGlyphComponent() {
        this.onIconSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.faIconsList = __WEBPACK_IMPORTED_MODULE_1__model_fontawesome_icons_list__["a" /* default */];
        this.selectedSize = 'sm';
        this.iconUrl = __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* AppConstants */].APP_ROOT_URL + __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* AppConstants */].FA_ICONS_FOLDER_PATH + '/{size}/{icon}.png';
        this.selectedType = 'fa';
        this.emojisList = __WEBPACK_IMPORTED_MODULE_2__model_emojis_list__["a" /* default */];
    }
    InsertGlyphComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
    };
    InsertGlyphComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
    };
    InsertGlyphComponent.prototype.selectIcon = function (ico) {
        this.selectedGlyph = ico;
        this.submit();
    };
    InsertGlyphComponent.prototype.submit = function () {
        if (this.selectedType === 'fa') {
            var sizeFolderName = '';
            switch (this.selectedSize) {
                case 'sm':
                    sizeFolderName = '24';
                    break;
                case 'lg':
                    sizeFolderName = '32';
                    break;
                case '2x':
                    sizeFolderName = '48';
                    break;
                case '3x':
                    sizeFolderName = '64';
                    break;
                case '4x':
                    sizeFolderName = '128';
                    break;
                case '5x':
                    sizeFolderName = '256';
                    break;
            }
            var iconPath = this.iconUrl.replace('{size}', sizeFolderName).replace('{icon}', this.selectedGlyph);
            console.log(iconPath);
            this.onIconSelect.emit({ type: this.selectedType, icon: iconPath });
        }
        else {
            this.onIconSelect.emit({ type: this.selectedType, icon: this.selectedGlyph });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertGlyphComponent.prototype, "compControl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], InsertGlyphComponent.prototype, "onIconSelect", void 0);
    InsertGlyphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-insert-glyph',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-glyph/insert-glyph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-glyph/insert-glyph.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsertGlyphComponent);
    return InsertGlyphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-result-wrap .img-wrap {\r\n    width: 100px;\r\n    height: 100px;\r\n    transition: 0.1s ease-in-out;\r\n}\r\n\r\n.search-result-wrap .img-wrap:hover {\r\n   background: #EEE;\r\n   cursor: pointer;\r\n   -webkit-transform: scale(1.2);\r\n           transform: scale(1.2);\r\n}\r\n\r\n.search-result-wrap .img-wrap .img-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.preview-img-outer {\r\n    height: 512px;\r\n    position: relative;\r\n}\r\n\r\n.preview-img-outer > img {\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translateY(-50%) translateX(-50%);\r\n        transform: translateY(-50%) translateX(-50%);\r\n}\r\n\r\n.preview-img-outer .ui-wrapper {\r\n    border: dashed thin;\r\n    padding: 15px;\r\n}\r\n\r\n.preview-img-outer .aspect-ratio-toggle{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col text-center\">\r\n        <!-- Search box -->\r\n        <form (ngSubmit)=\"search()\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        Search Icons\r\n                    </span>\r\n                    <input type=\"text\"\r\n                           name=\"keyword\"\r\n                           class=\"form-control\"\r\n                           [(ngModel)]=\"keyword\"\r\n                           placeholder=\"keyword...\">\r\n                    <button type=\"submit\"\r\n                            class=\"btn btn-primary btn-sm\"\r\n                            [disabled]=\"!keyword\">Search</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <!-- Search results -->\r\n        <div class=\"search-result-wrap mt-3\">\r\n            <div *ngFor=\"let i of searchResultIcons\"\r\n                 class=\"m-1 p-2 d-inline-block img-wrap border\">\r\n                <div class=\"img-container\"\r\n                     (click)=\"selectImg(i)\"\r\n                     [style.background-image]=\"'url(' + i.url + ')'\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n        <!-- Selected Img preview -->\r\n        <div class=\"preview-wrap m-3\"\r\n             *ngIf=\"selectedImg\">\r\n            <div class=\"border border-faded p-2 w-100 preview-img-outer\">\r\n                <img id=\"preview-img\"\r\n                     appResizable\r\n                     [resizeEnabled]=\"selectedImg.selectedSize === 'custom'\"\r\n                     [aspectRatioLocked]=\"aspectRatioLocked\"\r\n                     [compControl]=\"imgResizeControl\"\r\n                     [src]=\"selectedImg.selectedUrl\" />\r\n\r\n                <!-- Aspect Ratio toggle -->\r\n                <div *ngIf=\"selectedImg.selectedSize === 'custom'\"\r\n                     class=\"float-right text-secondary font-italic aspect-ratio-toggle\"\r\n                     (click)=\"aspectRatioLocked = !aspectRatioLocked\">\r\n                    <span class=\"fa fa-lg\"\r\n                          [ngClass]=\"aspectRatioLocked ? 'fa-toggle-on text-success' : 'fa-toggle-off'\"></span>\r\n                    <label for=\"aspecRatioToggle\"> lock aspect ratio</label>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n\r\n                <!-- Size dropdown -->\r\n                <div class=\"dropdown mt-2\">\r\n                    <button class=\"btn btn-info form-control\"\r\n                            type=\"button\"\r\n                            data-toggle=\"dropdown\">\r\n                        Size: {{selectedImg?.selectedSize}}\r\n                        <span class=\"fa fa-caret-down pull-right mr-3\"></span>\r\n                    </button>\r\n                    <div class=\"dropdown-menu bg-faded\">\r\n                        <a class=\"dropdown-item\"\r\n                           *ngFor=\"let i of selectedImg?.sizes\"\r\n                           (click)=\"selectSize(i)\">{{i.size}}</a>\r\n                        <a class=\"dropdown-item\"\r\n                           (click)=\"selectSize('custom')\">Custom</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <input type=\"text\"\r\n                       [(ngModel)]=\"selectedImg.title\"\r\n                       class=\"form-control mt-2\"\r\n                       placeholder=\"title\">\r\n            </div>\r\n        </div>\r\n        <!-- Img preview placeholder -->\r\n        <div class=\"preview-placeholder\"\r\n             *ngIf=\"!selectedImg\">\r\n            <div class=\"preview-img-outer border p-2 w-100\">\r\n                <img class=\"w-50\"\r\n                     src=\"../../../assets/img-preview-placeholder.png\">\r\n            </div>\r\n            <div class=\"p-4 text-center text-secondary font-italic\">\r\n                Select an image to customize size\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_iconsearch_service_client__ = __webpack_require__("../../../../../src/app/services/iconsearch.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service_client__ = __webpack_require__("../../../../../src/app/services/utils.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconSearchComponent = (function () {
    function IconSearchComponent(iconSearchService, utilService) {
        this.iconSearchService = iconSearchService;
        this.utilService = utilService;
        this.searchResultIcons = [];
        this.searchCount = 0;
        this.aspectRatioLocked = true;
        this.imgResizeControl = {};
    }
    IconSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
    };
    IconSearchComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
    };
    /** Search for images */
    IconSearchComponent.prototype.search = function () {
        var _this = this;
        if (!this.keyword) {
            return;
        }
        this.iconSearchService.search(this.keyword)
            .subscribe(function (result) {
            _this.searchResultIcons = result.icons;
            _this.searchCount = result.count;
        }, function (e) {
            _this.err = 'Oops! Icon search is acting up again!';
            console.error('Error searching for icons.', e);
        });
    };
    /**
     * Select an image
     * @param img selected image object
     */
    IconSearchComponent.prototype.selectImg = function (img) {
        this.selectedImg = img;
        this.selectedImg.selectedUrl = img.sizes[Math.floor(img.sizes.length * 0.75)].url;
        this.selectedImg.selectedSize = img.sizes[Math.floor(img.sizes.length * 0.75)].size;
    };
    /**
     * change size of selected image
     * @param size selected size object
     */
    IconSearchComponent.prototype.selectSize = function (size) {
        if (size === 'custom') {
            this.selectedImg.selectedUrl = this.selectedImg.sizes[this.selectedImg.sizes.length - 1].url;
            this.selectedImg.selectedSize = 'custom';
        }
        else {
            this.selectedImg.selectedUrl = size.url;
            this.selectedImg.selectedSize = size.size;
        }
    };
    /** submit the selected image */
    IconSearchComponent.prototype.submit = function () {
        if (this.selectedImg.selectedSize === 'custom') {
            var imgSize = this.imgResizeControl.submit();
            var url = this.utilService.getResizedImgUrl(this.selectedImg.url, imgSize.width, imgSize.height);
            return { url: url, title: this.selectedImg.title };
        }
        else {
            return { url: this.selectedImg.url, title: this.selectedImg.title };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IconSearchComponent.prototype, "compControl", void 0);
    IconSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-icon-search',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/icon-search/icon-search.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_iconsearch_service_client__["a" /* IconSearchService */], __WEBPACK_IMPORTED_MODULE_2__services_utils_service_client__["a" /* UtilService */]])
    ], IconSearchComponent);
    return IconSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-image/insert-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview-img-outer img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-image/insert-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col\">\r\n        <!-- Input box -->\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">\r\n                    Image Url\r\n                </span>\r\n                <input type=\"text\"\r\n                       name=\"img.url\"\r\n                       class=\"form-control\"\r\n                       [(ngModel)]=\"img.url\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n                <!-- Selected Img preview -->\r\n                <div class=\"preview-wrap m-3\"\r\n                     *ngIf=\"img.url\">\r\n                    <div class=\"border border-faded p-2 w-100 preview-img-outer\">\r\n                        <img id=\"preview-img\"\r\n                             appResizable\r\n                             [resizeEnabled]=\"img.customSize\"\r\n                             [aspectRatioLocked]=\"aspectRatioLocked\"\r\n                             [compControl]=\"imgResizeControl\"\r\n                             [src]=\"img.url\" />\r\n\r\n                        <!-- Aspect Ratio toggle -->\r\n                        <div *ngIf=\"img.customSize\"\r\n                             class=\"float-right text-secondary font-italic aspect-ratio-toggle\"\r\n                             (click)=\"aspectRatioLocked = !aspectRatioLocked\">\r\n                            <span class=\"fa fa-lg\"\r\n                                  [ngClass]=\"aspectRatioLocked ? 'fa-toggle-on text-success' : 'fa-toggle-off'\"></span>\r\n                            <label for=\"aspecRatioToggle\"> lock aspect ratio</label>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Img preview placeholder -->\r\n                <div class=\"preview-placeholder\"\r\n                     *ngIf=\"!img.url\">\r\n                    <div class=\"preview-img-outer border border-faded p-2 w-100\">\r\n                        <img src=\"../../../assets/img-preview-placeholder.png\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <div *ngIf=\"img.url\">\r\n                    <div class=\"form-group\">\r\n                        <span class=\"fa fa-2x align-middle\"\r\n                              [ngClass]=\"img.customSize ? 'fa-toggle-on text-success' : 'fa-toggle-off'\"\r\n                              (click)=\"img.customSize = !img.customSize\"></span>\r\n                        <span>Custom Size</span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"text-muted font-weight-bold\">Title</label>\r\n                        <input type=\"text\"\r\n                               class=\"form-control\"\r\n                               [(ngModel)]=\"img.title\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!img.url\"\r\n                     class=\"text-center text-muted font-italic mt-5\">Enter an Image URL to preview\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-image/insert-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils_service_client__ = __webpack_require__("../../../../../src/app/services/utils.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsertImageComponent = (function () {
    function InsertImageComponent(utilService) {
        this.utilService = utilService;
        this.aspectRatioLocked = true;
        this.img = {};
        this.imgResizeControl = {};
    }
    InsertImageComponent.prototype.ngOnInit = function () { };
    InsertImageComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
            this.compControl.reset = function () { return _this.reset(); };
        }
    };
    /** Return data */
    InsertImageComponent.prototype.submit = function () {
        var url = this.img.url;
        if (this.img.customSize) {
            var imgSize = this.imgResizeControl.submit();
            url = this.utilService.getResizedImgUrl(url, imgSize.width, imgSize.height);
        }
        return { url: url, title: this.img.title || '' };
    };
    /** Reset form */
    InsertImageComponent.prototype.reset = function () {
        this.img = {};
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertImageComponent.prototype, "compControl", void 0);
    InsertImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-insert-image',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-image/insert-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-image/insert-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_utils_service_client__["a" /* UtilService */]])
    ], InsertImageComponent);
    return InsertImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-media.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row insert-media \">\r\n    <div class=\"col bg-light\">\r\n\r\n        <!-- Tab Nav -->\r\n        <ul class=\"nav nav-tabs\"\r\n            role=\"tablist\">\r\n            <li class=\"nav-item\"\r\n                (click)=\"openComponent = 'image'\">\r\n                <a class=\"nav-link active\"\r\n                   data-toggle=\"tab\"\r\n                   href=\"#media-insert-image\"\r\n                   role=\"tab\">Image</a>\r\n            </li>\r\n            <li class=\"nav-item\"\r\n                (click)=\"openComponent = 'icon'\">\r\n                <a class=\"nav-link\"\r\n                   data-toggle=\"tab\"\r\n                   href=\"#media-insert-icon\"\r\n                   role=\"tab\">Icon</a>\r\n            </li>\r\n            <li class=\"nav-item\"\r\n                (click)=\"openComponent = 'youtube'\">\r\n                <a class=\"nav-link\"\r\n                   data-toggle=\"tab\"\r\n                   href=\"#media-insert-youtube\"\r\n                   role=\"tab\">YouTube</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <!-- Tab Content -->\r\n        <div class=\"tab-content mt-3\">\r\n\r\n            <!-- Insert Image -->\r\n            <div class=\"tab-pane active\"\r\n                 id=\"media-insert-image\"\r\n                 role=\"tabpanel\">\r\n                <app-insert-image [compControl]=\"subComponents.image\"></app-insert-image>\r\n            </div>\r\n\r\n            <!-- Insert Icon -->\r\n            <div class=\"tab-pane\"\r\n                 id=\"media-insert-icon\"\r\n                 role=\"tabpanel\">\r\n                <app-icon-search [compControl]=\"subComponents.icon\"></app-icon-search>\r\n            </div>\r\n\r\n            <!-- Insert Youtube -->\r\n            <div class=\"tab-pane\"\r\n                 id=\"media-insert-youtube\"\r\n                 role=\"tabpanel\">\r\n                <app-insert-youtube [compControl]=\"subComponents.youtube\"></app-insert-youtube>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsertMediaComponent = (function () {
    function InsertMediaComponent() {
        this.subComponents = {
            'image': {},
            'icon': {},
            'youtube': {}
        };
    }
    InsertMediaComponent.prototype.ngOnInit = function () {
        this.openComponent = 'image';
    };
    InsertMediaComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
            this.compControl.reset = function () { return _this.reset(); };
        }
    };
    /** Return component data */
    InsertMediaComponent.prototype.submit = function () {
        if (this.subComponents[this.openComponent].submit) {
            return this.subComponents[this.openComponent].submit();
        }
        else {
            return '';
        }
    };
    /** Reset all components */
    InsertMediaComponent.prototype.reset = function () {
        if (this.subComponents.image.reset) {
            this.subComponents.image.reset();
        }
        if (this.subComponents.icon.reset) {
            this.subComponents.icon.reset();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertMediaComponent.prototype, "compControl", void 0);
    InsertMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-insert-media',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-media.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-media.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InsertMediaComponent);
    return InsertMediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n\n        <!-- Input box -->\n        <div class=\"form-group\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  Video Url\n              </span>\n                <input type=\"text\"\n                       name=\"img.videoUrl\"\n                       class=\"form-control\"\n                       [(ngModel)]=\"img.videoUrl\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col text-center\">\n                <!-- Selected Img preview -->\n                <div class=\"preview-wrap m-3\"\n                     *ngIf=\"getImgUrl()\">\n                    <div class=\"border border-faded p-2 w-100 preview-img-outer\">\n                        <img id=\"preview-img\"\n                             appResizable\n                             [resizeEnabled]=\"img.customSize\"\n                             [aspectRatioLocked]=\"aspectRatioLocked\"\n                             [compControl]=\"imgResizeControl\"\n                             [src]=\"getImgUrl()\" />\n\n                        <!-- Aspect Ratio toggle -->\n                        <div *ngIf=\"img.customSize\"\n                             class=\"float-right text-secondary font-italic aspect-ratio-toggle\"\n                             (click)=\"aspectRatioLocked = !aspectRatioLocked\">\n                            <span class=\"fa fa-lg\"\n                                  [ngClass]=\"aspectRatioLocked ? 'fa-toggle-on text-success' : 'fa-toggle-off'\"></span>\n                            <label for=\"aspecRatioToggle\"> lock aspect ratio</label>\n                        </div>\n\n                    </div>\n\n                </div>\n                <!-- Img preview placeholder -->\n                <div class=\"preview-placeholder\"\n                     *ngIf=\"!getImgUrl()\">\n                    <div class=\"preview-img-outer border border-faded p-2 w-100\">\n                        <img src=\"../../../assets/img-preview-placeholder.png\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-3\">\n                <div *ngIf=\"getImgUrl()\">\n                    <div class=\"form-group\">\n                        <span class=\"fa fa-2x align-middle\"\n                              [ngClass]=\"img.customSize ? 'fa-toggle-on text-success' : 'fa-toggle-off'\"\n                              (click)=\"img.customSize = !img.customSize\"></span>\n                        <span>Custom Size</span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"text-muted font-weight-bold\">Title</label>\n                        <input type=\"text\"\n                               class=\"form-control\"\n                               [(ngModel)]=\"img.title\">\n                    </div>\n                </div>\n                <div *ngIf=\"!getImgUrl()\"\n                     class=\"text-center text-muted font-italic mt-5\">Enter an Image URL to preview</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils_service_client__ = __webpack_require__("../../../../../src/app/services/utils.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsertYoutubeComponent = (function () {
    function InsertYoutubeComponent(utilService) {
        this.utilService = utilService;
        this.aspectRatioLocked = true;
        this.img = {};
        this.imgResizeControl = {};
    }
    InsertYoutubeComponent.prototype.ngOnInit = function () {
    };
    InsertYoutubeComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
            this.compControl.reset = function () { return _this.reset(); };
        }
    };
    /** Get Img url of the video */
    InsertYoutubeComponent.prototype.getImgUrl = function () {
        if (this.img.videoUrl && this.img.videoUrl.indexOf('v=') > -1) {
            var videoId = this.img.videoUrl.split('v=')[1];
            if (videoId) {
                return 'http://img.youtube.com/vi/{videoId}/0.jpg'.replace('{videoId}', videoId);
            }
        }
        else {
            return '';
        }
    };
    /** Return data */
    InsertYoutubeComponent.prototype.submit = function () {
        var url = this.getImgUrl();
        if (this.img.customSize) {
            var imgSize = this.imgResizeControl.submit();
            url = this.utilService.getResizedImgUrl(url, imgSize.width, imgSize.height);
        }
        return { url: url, videoUrl: this.img.videoUrl, title: this.img.title || '' };
    };
    /** Reset form */
    InsertYoutubeComponent.prototype.reset = function () {
        this.img = {};
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertYoutubeComponent.prototype, "compControl", void 0);
    InsertYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-insert-youtube',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-media/insert-youtube/insert-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_utils_service_client__["a" /* UtilService */]])
    ], InsertYoutubeComponent);
    return InsertYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tiny-editor .mce-toolbar-grp {\r\n    padding: 0.25rem;\r\n    background: #f0f0f0;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-btn {\r\n    background: #f0f0f0;\r\n    border-color: #CCC;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-btn:hover {\r\n    background: #CCC;\r\n}\r\n.tiny-editor .mce-toolbar-grp .mce-btn.mce-active {\r\n    background: #555c66;\r\n    color: #fff;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-btn button {\r\n    padding: 4px 6px;    \r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-listbox button {\r\n    padding-right: 15px;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-listbox .mce-listbox .mce-caret {\r\n    right: 3px;\r\n}\r\n\r\n.tiny-editor #editor-modal .modal-dialog.modal-xl {\r\n    max-width: 85%;\r\n}\r\n\r\n.tiny-editor #editor-modal .modal-body {\r\n    overflow-y: auto;\r\n}\r\n\r\n.tiny-editor .mce-edit-area {\r\n    border-top:none;\r\n}\r\n\r\n.tiny-editor .popover {\r\n    max-width: 280px !important;\r\n    width: 280px;\r\n}\r\n\r\n.tiny-editor .popover-content {\r\n    overflow-y: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tiny-editor h-100\">\r\n  <div class=\"h-100\"\r\n       #tinyEditor></div>\r\n\r\n  <!-- Editor Modals -->\r\n  <div class=\"models-wrap\">\r\n    <div id=\"editor-modal\"\r\n         class=\"modal fade p-0\">\r\n      <div class=\"modal-dialog\"\r\n           [ngClass]=\"modals[openModalKey]?.size\"\r\n           role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">{{modals[openModalKey]?.title}}</h5>\r\n            <button type=\"button\"\r\n                    class=\"close\"\r\n                    data-dismiss=\"modal\"\r\n                    aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body pb-2\"\r\n               [style.height.px]=\"modalHeight\">\r\n\r\n            <!-- Insert code modal -->\r\n            <div [hidden]=\"openModalKey !== 'code'\"\r\n                 class=\"h-100\">\r\n              <app-editor-insert-code [data]=\"modals['code']?.data\"\r\n                                      [compControl]=\"modals['code']?.control\"\r\n                                      [compHeight]=\"modalHeight - 80\"></app-editor-insert-code>\r\n            </div>\r\n\r\n            <!-- Insert media modal -->\r\n            <div [hidden]=\"openModalKey !== 'media'\"\r\n                 class=\"h-100\">\r\n              <app-insert-media [compControl]=\"modals['media']?.control\">\r\n              </app-insert-media>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\"\r\n                    class=\"btn btn-sm btn-primary\"\r\n                    data-dismiss=\"modal\"\r\n                    (click)=\"submitModel()\">\r\n              <i class=\"fa fa-check\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- / Editor Modals -->\r\n\r\n  <!-- Editor popovers -->\r\n  <div class=\"editor-popovers\"\r\n       *ngIf=\"openPopoverKey\">\r\n\r\n    <div class=\"popover fade popover-bottom show\"\r\n         id=\"editor-popover\"\r\n         role=\"tooltip\">\r\n      <div class=\"arrow\"></div>\r\n      <h3 class=\"popover-title\">{{popovers[openPopoverKey]?.title}}</h3>\r\n      <div class=\"popover-content\"\r\n           [style.height.px]=\"modalHeight - 100\">\r\n        <app-insert-glyph [compControl]=\"compControl\"\r\n                          (onIconSelect)=\"submitPopover($event)\"></app-insert-glyph>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyEditorComponent = (function () {
    function TinyEditorComponent(zone) {
        this.zone = zone;
        this.loadComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.markdownHtmlChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.modalHeight = window.innerHeight - 180;
    }
    TinyEditorComponent.prototype.ngOnInit = function () {
        // available editor modals
        this.modals = {
            'media': { title: 'Insert Media', size: 'modal-xl', key: 'media', control: {} },
            'code': {
                title: 'Insert Code Block', size: 'modal-lg', key: 'code', control: {},
                data: {
                    code: '',
                    lang: '',
                    node: null // code HTML dom node to update; null if new node is to be created
                }
            }
        };
        // available editor popovers
        this.popovers = {
            'glyphs': { title: 'Insert Glyphs', key: 'glyphs', control: {} }
        };
        this.initEditor();
    };
    /** Initialize TinyMCE editor */
    TinyEditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.toolbarButtons = {};
        // initialize TinyMCE editor
        tinymce.init({
            target: this.el.nativeElement,
            theme: 'modern',
            content_css: '../../../../assets/tiny-editor-custom-styles.css',
            plugins: 'table link lists hr codesample emoticons',
            height: this.height,
            menubar: false,
            toolbar: 'btnTxt btnH btnCode btnInlineCode | btnBold btnItalic btnStrikethrough '
                + '| numlist bullist | link btnMedia btnGlyph | table | btnColAlignLeft btnColAlignCenter btnColAlignRight | hr',
            branding: false,
            statusbar: false,
            link_title: false,
            target_list: false,
            object_resizing: false,
            table_toolbar: 'tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow'
                + ' | tableinsertcolbefore tableinsertcolafter tabledeletecol',
            table_appearance_options: false,
            table_advtab: false,
            table_cell_advtab: false,
            table_row_advtab: false,
            setup: function (editor) {
                _this.editor = editor;
                _this.createCustomToolbarButtons(editor);
                // remove table exta buttons
                editor.on('init', function () {
                    editor.buttons.table.menu.splice(1, 1); // remove table properties button
                    editor.buttons.table.menu.splice(2, 4); // remove cell, row and column buttons
                });
            },
            init_instance_callback: function (editor) {
                window.ed = editor; // todo: remove
                if (_this.markdownHtml) {
                    editor.setContent(_this.markdownHtml);
                }
                $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();
                editor.on('NodeChange', function (e) {
                    _this.onEditorNodeChange(editor, e);
                });
                editor.on('KeyUp', function () {
                    _this.onEditorChange();
                });
                editor.on('ExecCommand', function (e) {
                    _this.onEditorChange();
                });
                _this.zone.run(function () {
                    _this.loadComplete.emit(true);
                });
            }
        });
    };
    /**
     * Create custom toolbar buttons
     * @param editor tinyMCE editor object
     */
    TinyEditorComponent.prototype.createCustomToolbarButtons = function (editor) {
        var _this = this;
        var toolbarButtons = this.toolbarButtons;
        var vm = this;
        // region btngroup 1
        // default text button
        editor.addButton('btnTxt', {
            tooltip: 'Text',
            text: 'txt',
            onclick: function () {
                editor.execCommand('mceToggleFormat', false, 'p');
            },
            onPostRender: function () {
                var self = this; // btn reference
                var setup = function () {
                    editor.formatter.formatChanged('p', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });
        // heading drop down button
        editor.addButton('btnH', {
            type: 'listbox',
            text: 'H1',
            icon: false,
            onselect: function (e) {
                editor.execCommand('mceToggleFormat', false, this.value());
            },
            values: [
                { text: 'H1', value: 'h1' },
                { text: 'H2', value: 'h2' },
                { text: 'H3', value: 'h3' },
                { text: 'H4', value: 'h4' },
                { text: 'H5', value: 'h5' },
                { text: 'H6', value: 'h6' }
            ],
            onPostRender: function () {
                this.value('h1'); // set default value
            }
        });
        // code button
        editor.addButton('btnCode', {
            tooltip: 'Insert Code Block',
            icon: 'codesample',
            onclick: function () {
                $('.modal').modal('show');
                vm.openModel('code');
            }
        });
        // inline code button
        editor.addButton('btnInlineCode', {
            tooltip: 'Inline Code',
            text: '</>',
            onclick: function () {
                editor.execCommand('mceToggleFormat', false, 'code');
            },
            onPostRender: function () {
                var self = this; // btn reference
                var setup = function () {
                    editor.formatter.formatChanged('code', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });
        // bold button
        editor.addButton('btnBold', {
            tooltip: 'Bold',
            icon: 'bold',
            onclick: function () {
                editor.execCommand('mceToggleFormat', false, 'bold');
            },
            onPostRender: function () {
                var self = this; // btn reference
                toolbarButtons.bold = this;
                var setup = function () {
                    editor.formatter.formatChanged('bold', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });
        // italic button
        editor.addButton('btnItalic', {
            tooltip: 'Italic',
            icon: 'italic',
            onclick: function () {
                editor.execCommand('mceToggleFormat', false, 'italic');
            },
            onPostRender: function () {
                var self = this; // btn reference
                toolbarButtons.italic = this;
                var setup = function () {
                    editor.formatter.formatChanged('italic', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });
        // strikethrough button
        editor.addButton('btnStrikethrough', {
            tooltip: 'Strikethrough',
            icon: 'strikethrough',
            onclick: function () {
                editor.execCommand('mceToggleFormat', false, 'strikethrough');
            },
            onPostRender: function () {
                var self = this; // btn reference
                toolbarButtons.strikethrough = this;
                var setup = function () {
                    editor.formatter.formatChanged('strikethrough', function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        });
        // endregion
        // #region : button group 4
        // media button
        editor.addButton('btnMedia', {
            tooltip: 'Insert Image / Video',
            icon: 'image',
            onclick: function () {
                $('.modal').modal('show');
                vm.openModel('media');
            }
        });
        // glyph button
        editor.addButton('btnGlyph', {
            icon: 'emoticons',
            tooltip: 'Insert Emoticons / Glyphicons',
            onclick: function (e) {
                _this.openPopoverKey = 'glyph';
                _this.openPopover('glyph', $(e.target).offset());
            }
        });
        // #endregion
        // region column alignemnt buttons
        // Right align button
        editor.addButton('btnColAlignRight', {
            icon: 'alignright',
            tooltip: 'Right Align column',
            onclick: function () {
                var activeNode = editor.selection.getNode();
                if (activeNode.localName === 'td') {
                    var colIndex = activeNode.cellIndex;
                    var tbl = activeNode.parentElement.parentElement;
                    // set all td in all rows at colIndex to same alignment
                    for (var i = 0; i < tbl.rows.length; i++) {
                        tbl.rows[i].cells[colIndex].align = 'right';
                    }
                    editor.execCommand('mceToggleFormat', false, 'alignright');
                }
            },
            onPostRender: function () {
                toolbarButtons.colAlignRight = _this;
            }
        });
        // Left align button
        editor.addButton('btnColAlignLeft', {
            icon: 'alignleft',
            tooltip: 'Left Align column',
            onclick: function () {
                var activeNode = editor.selection.getNode();
                if (activeNode.localName === 'td') {
                    var colIndex = activeNode.cellIndex;
                    var tbl = activeNode.parentElement.parentElement;
                    // set all td in all rows at colIndex to same alignment
                    for (var i = 0; i < tbl.rows.length; i++) {
                        tbl.rows[i].cells[colIndex].align = 'left';
                    }
                    editor.execCommand('mceToggleFormat', false, 'alignleft');
                }
            },
            onPostRender: function () {
                toolbarButtons.colAlignLeft = _this;
            }
        });
        // Center align button
        editor.addButton('btnColAlignCenter', {
            icon: 'aligncenter',
            tooltip: 'Center Align column',
            onclick: function () {
                var activeNode = editor.selection.getNode();
                if (activeNode.localName === 'td') {
                    var colIndex = activeNode.cellIndex;
                    var tbl = activeNode.parentElement.parentElement;
                    // set all td in all rows at colIndex to same alignment
                    for (var i = 0; i < tbl.rows.length; i++) {
                        tbl.rows[i].cells[colIndex].align = 'center';
                    }
                    editor.execCommand('mceToggleFormat', false, 'aligncenter');
                }
            },
            onPostRender: function () {
                toolbarButtons.colAlignCenter = _this;
            }
        });
        // endregion
        // #region: test
        editor.addButton('btnTest', {
            icon: 'image',
            tooltip: 'test',
            onclick: function (e) {
                _this.openPopoverKey = 'glyph';
                _this.openPopover('glyph', $(e.target).offset());
            }
        });
        // #endregion
    };
    /** Perform tasks on node change in editor */
    TinyEditorComponent.prototype.onEditorNodeChange = function (editor, e) {
        var _this = this;
        // close popovers
        this.zone.run(function () {
            _this.openPopoverKey = '';
        });
        // #region: code tag rules
        if (e.parents.find(function (p) { return (p.localName === 'code' || p.localName === 'pre'); })) {
            this.toolbarButtons.bold.disabled(true);
            this.toolbarButtons.italic.disabled(true);
            this.toolbarButtons.strikethrough.disabled(true);
            this.modals['code'].data.node = e.element;
            this.modals['code'].data.code = $(e.element).text();
            var lang = e.element.attributes.class ? e.element.attributes.class.value : '';
            if (lang && lang.indexOf('language') > -1) {
                lang = lang.replace('language-', '');
                lang = lang === 'NA' ? '' : lang;
            }
            else {
                lang = '';
            }
            this.modals['code'].data.lang = lang;
        }
        else {
            this.toolbarButtons.bold.disabled(false);
            this.toolbarButtons.italic.disabled(false);
            this.toolbarButtons.strikethrough.disabled(false);
            this.modals['code'].data = {};
        }
        // #endregion
        // #region: table tag rules
        if (e.parents.find(function (p) { return p.localName === 'table'; })) {
            // inside table --> hide bullet btns; show column alignment btns
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').hide(); // numlist, bullist
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(4)').hide(); // table
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(6)').hide(); // hr
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').show(); // col alignment
        }
        else {
            // outside table --> show bullet btns; hide column alignment btns
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(2)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(4)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(6)').show();
            $(editor.editorContainer).find('.mce-toolbar .mce-btn-group:eq(5)').hide();
        }
        // #endregion
    };
    /** Emit editor changes to subscriber */
    TinyEditorComponent.prototype.onEditorChange = function () {
        var _this = this;
        var html = this.editor.getContent();
        this.zone.run(function () {
            _this.markdownHtmlChange.emit(html);
        });
    };
    /** Open modal corresponding to specified key */
    TinyEditorComponent.prototype.openModel = function (key) {
        var _this = this;
        var thisModel = this.modals[key];
        if (thisModel) {
            this.zone.run(function () {
                _this.openModalKey = key;
                if (thisModel.control.reset) {
                    thisModel.control.reset();
                }
            });
            $('#editor-modal').modal('show');
        }
    };
    /** Get data from open modal */
    TinyEditorComponent.prototype.submitModel = function () {
        var key = this.openModalKey;
        var data;
        if (this.modals[key].control.submit) {
            data = this.modals[key].control.submit();
        }
        // #region: code modal
        if (key === 'code') {
            if (this.modals[key].data.node) {
                $(this.modals[key].data.node).text((data.code || ''));
                $(this.modals[key].data.node).removeAttr('class');
                $(this.modals[key].data.node).addClass('language-' + (data.lang || ''));
            }
            else {
                var code = '<pre class="language-' + (data.lang || 'NA') + '">'
                    + (data.code || '') + '</pre> <br/>';
                this.addToEditor(code);
            }
            this.onEditorChange();
        }
        // #endregion: code modal
        // #region: media modal
        if (key === 'media') {
            var img = '';
            if (data.url) {
                if (data.videoUrl) {
                    img = '<a href="' + data.videoUrl + '"><img class="youtube" src="' + data.url +
                        '" alt="' + (data.title || '') + '" /></a>';
                }
                else {
                    img = '<img src="' + data.url + '" alt="' + (data.title || '') + '" />';
                }
                this.addToEditor(img);
                this.onEditorChange();
            }
        }
        // #endregion: media modal
    };
    /** Open popover corresponding to specified key */
    TinyEditorComponent.prototype.openPopover = function (key, pos) {
        var _this = this;
        var left = pos.left - 142;
        var top = pos.top - 30;
        this.zone.run(function () {
            _this.openPopoverKey = key;
        });
        $('#editor-popover').css('left', left + 'px').css('top', top + 'px');
    };
    /** Retrieve data from popover */
    TinyEditorComponent.prototype.submitPopover = function (data) {
        if (data) {
            if (this.openPopoverKey === 'glyph') {
                var iconImg = '';
                if (data.type === 'fa') {
                    iconImg = '<img src="' + data.icon + '" />';
                }
                else if (data.type === 'emoji') {
                    iconImg = '<img class="emoji" data-emoji="' + data.icon.name +
                        '" height="20" width="20" src="' + data.icon.url + '" />';
                }
                this.addToEditor(iconImg);
            }
        }
    };
    /**
     * Add content to the editor
     * @param content string to add to the editor
     */
    TinyEditorComponent.prototype.addToEditor = function (content) {
        this.editor.insertContent(content);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TinyEditorComponent.prototype, "markdownHtml", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TinyEditorComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('loadComplete'),
        __metadata("design:type", Object)
    ], TinyEditorComponent.prototype, "loadComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('markdownHtmlChange'),
        __metadata("design:type", Object)
    ], TinyEditorComponent.prototype, "markdownHtmlChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('tinyEditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TinyEditorComponent.prototype, "el", void 0);
    TinyEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tiny-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], TinyEditorComponent);
    return TinyEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>\r\n    WriteMe.md\r\n  </h1>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-app-alert {\r\n    position: fixed;\r\n    z-index: 200;\r\n    left:20%;\r\n    right:20%;    \r\n}\r\n\r\n.hvj-app-alert .alert {\r\n    box-shadow: 0 0 24px -7px black;\r\n}\r\n\r\n.hvj-app-alert .alert .close {\r\n    margin-top:-3px;\r\n}\r\n\r\n.hvj-app-alert .alert-text span {\r\n    font-size: 80%;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-app-alert\">\r\n\r\n  <div class=\"alert fade show\"\r\n       [hidden]=\"!alertVisible\"\r\n       [ngClass]=\"'alert-' + (alertType ? alertType : 'danger')\"\r\n       role=\"alert\">\r\n    <button type=\"button\"\r\n            class=\"close\"\r\n            (click)=\"alertVisible = false\">\r\n      <small>\r\n        <i class=\"fa fa-times\"\r\n           aria-hidden=\"true\"></i>\r\n      </small>\r\n    </button>\r\n\r\n    <div class=\"d-inline-block align-middle mr-3\">\r\n      <i class=\"fa fa-2x\"\r\n         [ngClass]=\"{ 'fa-times-circle' : alertType === 'danger', 'fa-exclamation-cirlce' : alertType === 'warning', 'fa-check-circle' : alertType==='success' }\"    \r\n         aria-hidden=\"true\"></i>\r\n    </div>\r\n    <div [innerHtml]=\"alertText\"\r\n         class=\"alert-text d-inline-block align-middle\"></div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertComponent = (function () {
    function AlertComponent(sce, interactionsService) {
        this.sce = sce;
        this.interactionsService = interactionsService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertVisible = false;
        this.interactionsService.registerCallback(__WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* AppConstants */].EVENTS.showAlert, function (d) { _this.showAlert(d); });
    };
    /**
     * show alert on page
     * @param data alert data
     */
    AlertComponent.prototype.showAlert = function (data) {
        var _this = this;
        if (data.text) {
            this.alertText = this.sce.bypassSecurityTrustHtml(data.text);
            this.alertType = data.type;
            this.alertVisible = true;
            if (data.autoClose) {
                setTimeout(function () {
                    _this.alertVisible = false;
                }, 3000);
            }
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/alert/alert.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__["a" /* InteractionsService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-loader{\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n}\r\n\r\n.hvj-loader .loader-mask {\r\n    background: white;\r\n    opacity: 0.6;\r\n    position: fixed;\r\n    top:0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.hvj-loader .loader-img{\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-loader text-center\" *ngIf=\"showLoader\">\r\n  <div class=\"loader-mask\"></div>\r\n  <img class=\"loader-img\" src=\"../../../../assets/loader.gif\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderComponent = (function () {
    function LoaderComponent(interactionService) {
        this.interactionService = interactionService;
        // properties
        this.showLoader = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interactionService.registerCallback(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].EVENTS.showLoader, function (d) { _this.toggleLoader(d); }, true);
    };
    /**
     * Show / hide loader
     * @param val true to show, false to hide
     */
    LoaderComponent.prototype.toggleLoader = function (val) {
        this.showLoader = val;
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar .navbar-brand {\r\n    text-transform: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top py-0\">\r\n    <button class=\"navbar-toggler navbar-toggler-right btn-sm mt-2\"\r\n            type=\"button\"\r\n            data-toggle=\"collapse\"\r\n            data-target=\"#navbar-content\"\r\n            aria-controls=\"navbarColor01\"\r\n            aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n    <span class=\"fa fa-bars\"></span>\r\n  </button>\r\n    <a class=\"navbar-brand\"\r\n       href=\"#\">WriteMe.md</a>\r\n\r\n    <div class=\"collapse navbar-collapse pb-3 pb-lg-0\"\r\n         id=\"navbar-content\">\r\n        <ul class=\"navbar-nav ml-4\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"\r\n                   href=\"#\">Editor</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-4\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"\r\n                   href=\"#\">Projects</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav ml-4\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\"\r\n                   href=\"#\">Profile</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <!-- Login form -->\r\n        <form class=\"form-inline float-right ml-auto\"\r\n              (submit)=\"login()\"\r\n              *ngIf=\"!loggedIn\">\r\n            <input class=\"form-control mr-sm-2 form-control-sm\"\r\n                   type=\"text\"\r\n                   placeholder=\"Username\"\r\n                   name=\"username\"\r\n                   [(ngModel)]=\"username\">\r\n            <input class=\"form-control mr-sm-2 form-control-sm\"\r\n                   type=\"password\"\r\n                   placeholder=\"Password\"\r\n                   name=\"password\"\r\n                   [(ngModel)]=\"password\">\r\n            <button class=\"btn btn-secondary my-2 my-sm-0 btn-sm\"\r\n                    type=\"submit\">Login</button>\r\n            <a class=\"btn btn-secondary my-2 my-sm-0 btn-sm\"\r\n               href=\"http://localhost:3100/api/auth/github\"\r\n               target=\"_self\">\r\n                <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <a class=\"btn border text-muted ml-2 my-2 my-sm-0 btn-sm\"\r\n               [routerLink]=\"['/register']\">Register</a>\r\n        </form>\r\n        <!-- / Login form -->\r\n\r\n        <!-- Logout form -->\r\n        <ul class=\"float-right ml-auto navbar-nav form-inline\"\r\n            *ngIf=\"loggedIn\">\r\n            <li class=\"nav-item\">\r\n                <span>Hello, {{loggedIn.name}}</span>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <button class=\"btn btn-secondary btn-sm\"\r\n                        (click)=\"logout()\">Logout</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.authService.checkLoggedIn(true)
            .subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.loggedIn = _this.authService.getLoggedInUser();
            }
        }, function (err) {
            console.error('Error checking user login status', err);
            _this.loggedIn = false;
        });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        this.authService.login(this.username, this.password);
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/shared/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_client__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light p-3\">\r\n    <div style=\"width:250px\"\r\n         class=\"m-auto order\">\r\n        <app-insert-glyph [compControl]=\"compControl\" (onIconSelect)=\"submit($event)\"></app-insert-glyph>\r\n    </div>\r\n\r\n    <button class=\"btn btn-success btn-sm\"\r\n            (click)=\"submit()\">Ok</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
        this.compControl = {};
    };
    TestComponent.prototype.submit = function (ico) {
        console.log(ico);
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"user-registration mt-3\">\n        <div class=\"display-4\">Register</div>\n        <hr>\n        <br>\n        <!--form-->\n        <form class=\"form\"\n              (ngSubmit)=\"register()\"\n              #registerForm=\"ngForm\">\n            <!-- User Name -->\n            <div class=\"form-group\">\n                <input placeholder=\"User Name\"\n                       type=\"text\"\n                       class=\"form-control\"\n                       name=\"usernameField\"\n                       [(ngModel)]=\"username\"\n                       #usernameField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': registrationErrors.username || (!usernameField.valid && usernameField.touched)}\"\n                       required />\n                <span *ngIf=\"usernameField.invalid && usernameField.touched\"\n                      class=\"text-danger ml-2\">Username is required</span>\n                <span *ngIf=\"registrationErrors.username\"\n                      class=\"text-danger ml-2\">{{registrationErrors.username}}</span>\n            </div>\n\n            <!-- Password -->\n            <div class=\"form-group\">\n                <input placeholder=\"Password\"\n                       type=\"password\"\n                       class=\"form-control\"\n                       name=\"passwordField\"\n                       [(ngModel)]=\"password\"\n                       #passwordField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': (!passwordField.valid && passwordField.touched)}\"\n                       required />\n                <span *ngIf=\"passwordField.invalid && passwordField.touched\"\n                      class=\"text-danger ml-2\">Password is required</span>\n            </div>\n\n            <!-- Verify Password -->\n            <div class=\"form-group\">\n                <input placeholder=\"Verify Password\"\n                       type=\"password\"\n                       class=\"form-control\"\n                       name=\"verifyPasswordField\"\n                       [(ngModel)]=\"verifyPassword\"\n                       #verifyPasswordField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': verifyPassword !== password && verifyPasswordField.touched}\"\n                       required />\n                <span *ngIf=\"verifyPasswordField.invalid && verifyPasswordField.touched\"\n                      class=\"text-danger ml-2\">Verify Password is required</span>\n                <span *ngIf=\"verifyPassword && verifyPassword !== password && verifyPasswordField.touched\"\n                      class=\"text-danger ml-2\">Passwords do not match</span>\n            </div>\n\n            <!-- form actions -->\n            <div>\n                <button type=\"submit\"\n                        class=\"btn btn-royal btn-block\"\n                        [disabled]=\"registerForm.invalid || verifyPassword !== password\">Register</button>\n                <!-- <a class=\"btn btn-danger btn-block\"\n                   [routerLink]=\"['/login']\">Cancel</a> -->\n            </div>\n            <!-- /form actions -->\n        </form>\n        <!--/form-->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_error_handler_service_client__ = __webpack_require__("../../../../../src/app/services/error-handler.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(userService, router, authService, interactionsService, errorHanderService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.interactionsService = interactionsService;
        this.errorHanderService = errorHanderService;
        this.registrationErrors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var newUser = new __WEBPACK_IMPORTED_MODULE_2__model_model__["a" /* User */]();
        newUser.username = this.username;
        newUser.password = this.password;
        // create new user
        this.interactionsService.showLoader(true);
        this.userService.register(this.username, this.password)
            .subscribe(function (registeredUser) {
            if (registeredUser) {
                console.log(registeredUser);
                _this.authService.setLoggedInUser(registeredUser);
                _this.interactionsService.showLoader(false);
                _this.router.navigate(['/profile']);
            }
            else {
                _this.interactionsService.showAlert('Registration unsuccessful! <br/> Server returned empty user object');
            }
        }, function (err) {
            _this.errorHanderService.handleError('Error registering user', err);
            _this.interactionsService.showLoader(false);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_error_handler_service_client__["a" /* ErrorHandlerService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/auto-height/auto-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoHeightDirective = (function () {
    function AutoHeightDirective(el) {
        this.el = el;
        this.minHeight = this.minHeight || 0;
        if (this.minHeight > 0) {
            this.el.nativeElement.style.height = this.minHeight + 'px';
        }
    }
    AutoHeightDirective.prototype.keyEvent = function (e) {
        var height = Math.max(this.el.nativeElement.scrollHeight, this.minHeight);
        this.el.nativeElement.style.height = height + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AutoHeightDirective.prototype, "minHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AutoHeightDirective.prototype, "keyEvent", null);
    AutoHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appAutoHeight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutoHeightDirective);
    return AutoHeightDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/resizable/resizable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResizableDirective = (function () {
    function ResizableDirective(el) {
        this.el = el;
    }
    ResizableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
        if (this.resizeEnabled) {
            this.makeResizable();
        }
    };
    ResizableDirective.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.compControl) {
            this.compControl.submit = function () { return _this.submit(); };
        }
        if (this.resizeEnabled) {
            this.makeResizable();
        }
        else {
            this.removeResizable();
        }
    };
    /** Remove resizable option from selected image */
    ResizableDirective.prototype.removeResizable = function () {
        if ($(this.el.nativeElement).parent().draggable('instance')) {
            $(this.el.nativeElement).parent().draggable('destroy');
        }
        if ($(this.el.nativeElement).resizable('instance')) {
            $(this.el.nativeElement).resizable('destroy');
        }
        $(this.el.nativeElement).parent().removeAttr('style');
        $(this.el.nativeElement).removeAttr('style');
    };
    /** Make selected image resizable */
    ResizableDirective.prototype.makeResizable = function () {
        var _this = this;
        this.removeResizable();
        $(this.el.nativeElement).height('50%');
        $(this.el.nativeElement).resizable({
            containment: 'parent',
            aspectRatio: this.aspectRatioLocked,
            handles: ' n, e, s, w, ne, se, sw, nw',
            maxHeight: 500,
            create: function () {
                $(_this.el.nativeElement).parent().draggable({
                    containment: 'parent',
                    create: function () {
                        $(_this.el.nativeElement).parent().css('top', '0');
                        $(_this.el.nativeElement).parent().css('left', '0');
                    }
                });
            }
        });
    };
    /** Return the width and height of the resized component */
    ResizableDirective.prototype.submit = function () {
        return {
            height: $(this.el.nativeElement).height(),
            width: $(this.el.nativeElement).width()
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ResizableDirective.prototype, "resizeEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ResizableDirective.prototype, "compControl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ResizableDirective.prototype, "aspectRatioLocked", void 0);
    ResizableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appResizable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ResizableDirective);
    return ResizableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/model/emojis-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var emojisList = [
    { 'name': '100', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png' },
    { 'name': '1234', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png' },
    { 'name': '+1', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png' },
    { 'name': '-1', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png' },
    { 'name': '1st_place_medal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png' },
    { 'name': '2nd_place_medal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f948.png' },
    { 'name': '3rd_place_medal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f949.png' },
    { 'name': '8ball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b1.png' },
    { 'name': 'a', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f170.png' },
    { 'name': 'ab', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f18e.png' },
    { 'name': 'abc', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f524.png' },
    { 'name': 'abcd', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f521.png' },
    { 'name': 'accept', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f251.png' },
    { 'name': 'aerial_tramway', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a1.png' },
    { 'name': 'afghanistan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1eb.png' },
    { 'name': 'airplane', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2708.png' },
    { 'name': 'aland_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fd.png' },
    { 'name': 'alarm_clock', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f0.png' },
    { 'name': 'albania', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f1.png' },
    { 'name': 'alembic', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2697.png' },
    { 'name': 'algeria', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ff.png' },
    { 'name': 'alien', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47d.png' },
    { 'name': 'ambulance', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f691.png' },
    { 'name': 'american_samoa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f8.png' },
    { 'name': 'amphora', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3fa.png' },
    { 'name': 'anchor', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2693.png' },
    { 'name': 'andorra', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1e9.png' },
    { 'name': 'angel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47c.png' },
    { 'name': 'anger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a2.png' },
    { 'name': 'angola', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f4.png' },
    { 'name': 'angry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f620.png' },
    { 'name': 'anguilla', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ee.png' },
    { 'name': 'anguished', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f627.png' },
    { 'name': 'ant', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41c.png' },
    { 'name': 'antarctica', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f6.png' },
    { 'name': 'antigua_barbuda', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ec.png' },
    { 'name': 'apple', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34e.png' },
    { 'name': 'aquarius', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2652.png' },
    { 'name': 'argentina', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f7.png' },
    { 'name': 'aries', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2648.png' },
    { 'name': 'armenia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f2.png' },
    { 'name': 'arrow_backward', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25c0.png' },
    { 'name': 'arrow_double_down', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ec.png' },
    { 'name': 'arrow_double_up', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23eb.png' },
    { 'name': 'arrow_down', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b07.png' },
    { 'name': 'arrow_down_small', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53d.png' },
    { 'name': 'arrow_forward', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25b6.png' },
    { 'name': 'arrow_heading_down', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2935.png' },
    { 'name': 'arrow_heading_up', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2934.png' },
    { 'name': 'arrow_left', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b05.png' },
    { 'name': 'arrow_lower_left', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2199.png' },
    { 'name': 'arrow_lower_right', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2198.png' },
    { 'name': 'arrow_right', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/27a1.png' },
    { 'name': 'arrow_right_hook', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/21aa.png' },
    { 'name': 'arrow_up', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b06.png' },
    { 'name': 'arrow_up_down', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2195.png' },
    { 'name': 'arrow_up_small', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53c.png' },
    { 'name': 'arrow_upper_left', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2196.png' },
    { 'name': 'arrow_upper_right', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2197.png' },
    { 'name': 'arrows_clockwise', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f503.png' },
    { 'name': 'arrows_counterclockwise', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f504.png' },
    { 'name': 'art', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a8.png' },
    { 'name': 'articulated_lorry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69b.png' },
    { 'name': 'artificial_satellite', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f0.png' },
    { 'name': 'aruba', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fc.png' },
    { 'name': 'asterisk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/002a-20e3.png' },
    { 'name': 'astonished', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f632.png' },
    { 'name': 'athletic_shoe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45f.png' },
    { 'name': 'atm', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e7.png' },
    { 'name': 'atom', 'url': 'https://assets-cdn.github.com/images/icons/emoji/atom.png' },
    { 'name': 'atom_symbol', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/269b.png' },
    { 'name': 'australia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fa.png' },
    { 'name': 'austria', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f9.png' },
    { 'name': 'avocado', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f951.png' },
    { 'name': 'azerbaijan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ff.png' },
    { 'name': 'b', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f171.png' },
    { 'name': 'baby', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f476.png' },
    { 'name': 'baby_bottle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37c.png' },
    { 'name': 'baby_chick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f424.png' },
    { 'name': 'baby_symbol', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bc.png' },
    { 'name': 'back', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f519.png' },
    { 'name': 'bacon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f953.png' },
    { 'name': 'badminton', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f8.png' },
    { 'name': 'baggage_claim', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c4.png' },
    { 'name': 'baguette_bread', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f956.png' },
    { 'name': 'bahamas', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f8.png' },
    { 'name': 'bahrain', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ed.png' },
    { 'name': 'balance_scale', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2696.png' },
    { 'name': 'balloon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f388.png' },
    { 'name': 'ballot_box', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5f3.png' },
    { 'name': 'ballot_box_with_check', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2611.png' },
    { 'name': 'bamboo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38d.png' },
    { 'name': 'banana', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34c.png' },
    { 'name': 'bangbang', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/203c.png' },
    { 'name': 'bangladesh', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1e9.png' },
    { 'name': 'bank', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e6.png' },
    { 'name': 'bar_chart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ca.png' },
    { 'name': 'barbados', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1e7.png' },
    { 'name': 'barber', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f488.png' },
    { 'name': 'baseball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26be.png' },
    { 'name': 'basecamp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/basecamp.png' },
    { 'name': 'basecampy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/basecampy.png' },
    { 'name': 'basketball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c0.png' },
    { 'name': 'basketball_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f9.png' },
    { 'name': 'basketball_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f9-2640.png' },
    { 'name': 'bat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f987.png' },
    { 'name': 'bath', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c0.png' },
    { 'name': 'bathtub', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c1.png' },
    { 'name': 'battery', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50b.png' },
    { 'name': 'beach_umbrella', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d6.png' },
    { 'name': 'bear', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43b.png' },
    { 'name': 'bed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cf.png' },
    { 'name': 'bee', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41d.png' },
    { 'name': 'beer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37a.png' },
    { 'name': 'beers', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37b.png' },
    { 'name': 'beetle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41e.png' },
    { 'name': 'beginner', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f530.png' },
    { 'name': 'belarus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1fe.png' },
    { 'name': 'belgium', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ea.png' },
    { 'name': 'belize', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ff.png' },
    { 'name': 'bell', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f514.png' },
    { 'name': 'bellhop_bell', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ce.png' },
    { 'name': 'benin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ef.png' },
    { 'name': 'bento', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f371.png' },
    { 'name': 'bermuda', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f2.png' },
    { 'name': 'bhutan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f9.png' },
    { 'name': 'bicyclist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b4.png' },
    { 'name': 'bike', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b2.png' },
    { 'name': 'biking_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b4.png' },
    { 'name': 'biking_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b4-2640.png' },
    { 'name': 'bikini', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f459.png' },
    { 'name': 'biohazard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2623.png' },
    { 'name': 'bird', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f426.png' },
    { 'name': 'birthday', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f382.png' },
    { 'name': 'black_circle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26ab.png' },
    { 'name': 'black_flag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f4.png' },
    { 'name': 'black_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5a4.png' },
    { 'name': 'black_joker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f0cf.png' },
    { 'name': 'black_large_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b1b.png' },
    { 'name': 'black_medium_small_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fe.png' },
    { 'name': 'black_medium_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fc.png' },
    { 'name': 'black_nib', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2712.png' },
    { 'name': 'black_small_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25aa.png' },
    { 'name': 'black_square_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f532.png' },
    { 'name': 'blonde_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png' },
    { 'name': 'blonde_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471-2640.png' },
    { 'name': 'blossom', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33c.png' },
    { 'name': 'blowfish', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f421.png' },
    { 'name': 'blue_book', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d8.png' },
    { 'name': 'blue_car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f699.png' },
    { 'name': 'blue_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f499.png' },
    { 'name': 'blush', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60a.png' },
    { 'name': 'boar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f417.png' },
    { 'name': 'boat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f5.png' },
    { 'name': 'bolivia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f4.png' },
    { 'name': 'bomb', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a3.png' },
    { 'name': 'book', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png' },
    { 'name': 'bookmark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f516.png' },
    { 'name': 'bookmark_tabs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d1.png' },
    { 'name': 'books', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4da.png' },
    { 'name': 'boom', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a5.png' },
    { 'name': 'boot', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f462.png' },
    { 'name': 'bosnia_herzegovina', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1e6.png' },
    { 'name': 'botswana', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1fc.png' },
    { 'name': 'bouquet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f490.png' },
    { 'name': 'bow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f647.png' },
    { 'name': 'bow_and_arrow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f9.png' },
    { 'name': 'bowing_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f647.png' },
    { 'name': 'bowing_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f647-2640.png' },
    { 'name': 'bowling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b3.png' },
    { 'name': 'bowtie', 'url': 'https://assets-cdn.github.com/images/icons/emoji/bowtie.png' },
    { 'name': 'boxing_glove', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f94a.png' },
    { 'name': 'boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f466.png' },
    { 'name': 'brazil', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f7.png' },
    { 'name': 'bread', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35e.png' },
    { 'name': 'bride_with_veil', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f470.png' },
    { 'name': 'bridge_at_night', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f309.png' },
    { 'name': 'briefcase', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bc.png' },
    { 'name': 'british_indian_ocean_territory', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f4.png' },
    { 'name': 'british_virgin_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1ec.png' },
    { 'name': 'broken_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f494.png' },
    { 'name': 'brunei', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f3.png' },
    { 'name': 'bug', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41b.png' },
    { 'name': 'building_construction', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d7.png' },
    { 'name': 'bulb', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a1.png' },
    { 'name': 'bulgaria', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ec.png' },
    { 'name': 'bullettrain_front', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f685.png' },
    { 'name': 'bullettrain_side', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f684.png' },
    { 'name': 'burkina_faso', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1eb.png' },
    { 'name': 'burrito', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32f.png' },
    { 'name': 'burundi', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ee.png' },
    { 'name': 'bus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68c.png' },
    { 'name': 'business_suit_levitating', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f574.png' },
    { 'name': 'busstop', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68f.png' },
    { 'name': 'bust_in_silhouette', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f464.png' },
    { 'name': 'busts_in_silhouette', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f465.png' },
    { 'name': 'butterfly', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98b.png' },
    { 'name': 'cactus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f335.png' },
    { 'name': 'cake', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f370.png' },
    { 'name': 'calendar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c6.png' },
    { 'name': 'call_me_hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f919.png' },
    { 'name': 'calling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f2.png' },
    { 'name': 'cambodia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ed.png' },
    { 'name': 'camel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42b.png' },
    { 'name': 'camera', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f7.png' },
    { 'name': 'camera_flash', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f8.png' },
    { 'name': 'cameroon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f2.png' },
    { 'name': 'camping', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d5.png' },
    { 'name': 'canada', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1e6.png' },
    { 'name': 'canary_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1e8.png' },
    { 'name': 'cancer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264b.png' },
    { 'name': 'candle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f56f.png' },
    { 'name': 'candy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36c.png' },
    { 'name': 'canoe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f6.png' },
    { 'name': 'cape_verde', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fb.png' },
    { 'name': 'capital_abcd', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f520.png' },
    { 'name': 'capricorn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2651.png' },
    { 'name': 'car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f697.png' },
    { 'name': 'card_file_box', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5c3.png' },
    { 'name': 'card_index', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c7.png' },
    { 'name': 'card_index_dividers', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5c2.png' },
    { 'name': 'caribbean_netherlands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f6.png' },
    { 'name': 'carousel_horse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a0.png' },
    { 'name': 'carrot', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f955.png' },
    { 'name': 'cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f431.png' },
    { 'name': 'cat2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f408.png' },
    { 'name': 'cayman_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1fe.png' },
    { 'name': 'cd', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bf.png' },
    { 'name': 'central_african_republic', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1eb.png' },
    { 'name': 'chad', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1e9.png' },
    { 'name': 'chains', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26d3.png' },
    { 'name': 'champagne', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37e.png' },
    { 'name': 'chart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b9.png' },
    { 'name': 'chart_with_downwards_trend', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c9.png' },
    { 'name': 'chart_with_upwards_trend', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c8.png' },
    { 'name': 'checkered_flag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c1.png' },
    { 'name': 'cheese', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f9c0.png' },
    { 'name': 'cherries', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f352.png' },
    { 'name': 'cherry_blossom', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f338.png' },
    { 'name': 'chestnut', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f330.png' },
    { 'name': 'chicken', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f414.png' },
    { 'name': 'children_crossing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b8.png' },
    { 'name': 'chile', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f1.png' },
    { 'name': 'chipmunk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43f.png' },
    { 'name': 'chocolate_bar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36b.png' },
    { 'name': 'christmas_island', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fd.png' },
    { 'name': 'christmas_tree', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f384.png' },
    { 'name': 'church', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26ea.png' },
    { 'name': 'cinema', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a6.png' },
    { 'name': 'circus_tent', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3aa.png' },
    { 'name': 'city_sunrise', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f307.png' },
    { 'name': 'city_sunset', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f306.png' },
    { 'name': 'cityscape', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d9.png' },
    { 'name': 'cl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f191.png' },
    { 'name': 'clamp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5dc.png' },
    { 'name': 'clap', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44f.png' },
    { 'name': 'clapper', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ac.png' },
    { 'name': 'classical_building', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3db.png' },
    { 'name': 'clinking_glasses', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f942.png' },
    { 'name': 'clipboard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cb.png' },
    { 'name': 'clock1', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f550.png' },
    { 'name': 'clock10', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f559.png' },
    { 'name': 'clock1030', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f565.png' },
    { 'name': 'clock11', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55a.png' },
    { 'name': 'clock1130', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f566.png' },
    { 'name': 'clock12', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55b.png' },
    { 'name': 'clock1230', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f567.png' },
    { 'name': 'clock130', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55c.png' },
    { 'name': 'clock2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f551.png' },
    { 'name': 'clock230', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55d.png' },
    { 'name': 'clock3', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f552.png' },
    { 'name': 'clock330', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55e.png' },
    { 'name': 'clock4', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f553.png' },
    { 'name': 'clock430', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55f.png' },
    { 'name': 'clock5', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f554.png' },
    { 'name': 'clock530', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f560.png' },
    { 'name': 'clock6', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f555.png' },
    { 'name': 'clock630', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f561.png' },
    { 'name': 'clock7', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f556.png' },
    { 'name': 'clock730', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f562.png' },
    { 'name': 'clock8', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f557.png' },
    { 'name': 'clock830', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f563.png' },
    { 'name': 'clock9', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f558.png' },
    { 'name': 'clock930', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f564.png' },
    { 'name': 'closed_book', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d5.png' },
    { 'name': 'closed_lock_with_key', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f510.png' },
    { 'name': 'closed_umbrella', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f302.png' },
    { 'name': 'cloud', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2601.png' },
    { 'name': 'cloud_with_lightning', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f329.png' },
    { 'name': 'cloud_with_lightning_and_rain', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26c8.png' },
    { 'name': 'cloud_with_rain', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f327.png' },
    { 'name': 'cloud_with_snow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f328.png' },
    { 'name': 'clown_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f921.png' },
    { 'name': 'clubs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2663.png' },
    { 'name': 'cn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f3.png' },
    { 'name': 'cocktail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f378.png' },
    { 'name': 'cocos_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1e8.png' },
    { 'name': 'coffee', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2615.png' },
    { 'name': 'coffin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26b0.png' },
    { 'name': 'cold_sweat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f630.png' },
    { 'name': 'collision', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a5.png' },
    { 'name': 'colombia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f4.png' },
    { 'name': 'comet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2604.png' },
    { 'name': 'comoros', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f2.png' },
    { 'name': 'computer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bb.png' },
    { 'name': 'computer_mouse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5b1.png' },
    { 'name': 'confetti_ball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38a.png' },
    { 'name': 'confounded', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f616.png' },
    { 'name': 'confused', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png' },
    { 'name': 'congo_brazzaville', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ec.png' },
    { 'name': 'congo_kinshasa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1e9.png' },
    { 'name': 'congratulations', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/3297.png' },
    { 'name': 'construction', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a7.png' },
    { 'name': 'construction_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f477.png' },
    { 'name': 'construction_worker_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f477.png' },
    { 'name': 'construction_worker_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f477-2640.png' },
    { 'name': 'control_knobs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39b.png' },
    { 'name': 'convenience_store', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ea.png' },
    { 'name': 'cook_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f0.png' },
    { 'name': 'cookie', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36a.png' },
    { 'name': 'cool', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f192.png' },
    { 'name': 'cop', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46e.png' },
    { 'name': 'copyright', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/00a9.png' },
    { 'name': 'corn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33d.png' },
    { 'name': 'costa_rica', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f7.png' },
    { 'name': 'cote_divoire', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ee.png' },
    { 'name': 'couch_and_lamp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cb.png' },
    { 'name': 'couple', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46b.png' },
    { 'name': 'couple_with_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f491.png' },
    { 'name': 'couple_with_heart_man_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2764-1f468.png' },
    { 'name': 'couple_with_heart_woman_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f491.png' },
    { 'name': 'couple_with_heart_woman_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2764-1f469.png' },
    { 'name': 'couplekiss_man_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2764-1f48b-1f468.png' },
    { 'name': 'couplekiss_man_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48f.png' },
    { 'name': 'couplekiss_woman_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2764-1f48b-1f469.png' },
    { 'name': 'cow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42e.png' },
    { 'name': 'cow2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f404.png' },
    { 'name': 'cowboy_hat_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f920.png' },
    { 'name': 'crab', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f980.png' },
    { 'name': 'crayon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58d.png' },
    { 'name': 'credit_card', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b3.png' },
    { 'name': 'crescent_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f319.png' },
    { 'name': 'cricket', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cf.png' },
    { 'name': 'croatia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f7.png' },
    { 'name': 'crocodile', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40a.png' },
    { 'name': 'croissant', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f950.png' },
    { 'name': 'crossed_fingers', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91e.png' },
    { 'name': 'crossed_flags', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38c.png' },
    { 'name': 'crossed_swords', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2694.png' },
    { 'name': 'crown', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f451.png' },
    { 'name': 'cry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f622.png' },
    { 'name': 'crying_cat_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63f.png' },
    { 'name': 'crystal_ball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52e.png' },
    { 'name': 'cuba', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fa.png' },
    { 'name': 'cucumber', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f952.png' },
    { 'name': 'cupid', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f498.png' },
    { 'name': 'curacao', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fc.png' },
    { 'name': 'curly_loop', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/27b0.png' },
    { 'name': 'currency_exchange', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b1.png' },
    { 'name': 'curry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35b.png' },
    { 'name': 'custard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36e.png' },
    { 'name': 'customs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c3.png' },
    { 'name': 'cyclone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f300.png' },
    { 'name': 'cyprus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fe.png' },
    { 'name': 'czech_republic', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ff.png' },
    { 'name': 'dagger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5e1.png' },
    { 'name': 'dancer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f483.png' },
    { 'name': 'dancers', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46f.png' },
    { 'name': 'dancing_men', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46f-2642.png' },
    { 'name': 'dancing_women', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46f.png' },
    { 'name': 'dango', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f361.png' },
    { 'name': 'dark_sunglasses', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f576.png' },
    { 'name': 'dart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3af.png' },
    { 'name': 'dash', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a8.png' },
    { 'name': 'date', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c5.png' },
    { 'name': 'de', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ea.png' },
    { 'name': 'deciduous_tree', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f333.png' },
    { 'name': 'deer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98c.png' },
    { 'name': 'denmark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1f0.png' },
    { 'name': 'department_store', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ec.png' },
    { 'name': 'derelict_house', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3da.png' },
    { 'name': 'desert', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3dc.png' },
    { 'name': 'desert_island', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3dd.png' },
    { 'name': 'desktop_computer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5a5.png' },
    { 'name': 'detective', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f575.png' },
    { 'name': 'diamond_shape_with_a_dot_inside', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a0.png' },
    { 'name': 'diamonds', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2666.png' },
    { 'name': 'disappointed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61e.png' },
    { 'name': 'disappointed_relieved', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f625.png' },
    { 'name': 'dizzy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ab.png' },
    { 'name': 'dizzy_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f635.png' },
    { 'name': 'djibouti', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ef.png' },
    { 'name': 'do_not_litter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6af.png' },
    { 'name': 'dog', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f436.png' },
    { 'name': 'dog2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f415.png' },
    { 'name': 'dollar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b5.png' },
    { 'name': 'dolls', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38e.png' },
    { 'name': 'dolphin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42c.png' },
    { 'name': 'dominica', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1f2.png' },
    { 'name': 'dominican_republic', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1f4.png' },
    { 'name': 'door', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6aa.png' },
    { 'name': 'doughnut', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f369.png' },
    { 'name': 'dove', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54a.png' },
    { 'name': 'dragon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f409.png' },
    { 'name': 'dragon_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f432.png' },
    { 'name': 'dress', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f457.png' },
    { 'name': 'dromedary_camel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42a.png' },
    { 'name': 'drooling_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f924.png' },
    { 'name': 'droplet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a7.png' },
    { 'name': 'drum', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f941.png' },
    { 'name': 'duck', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f986.png' },
    { 'name': 'dvd', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c0.png' },
    { 'name': 'e-mail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e7.png' },
    { 'name': 'eagle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f985.png' },
    { 'name': 'ear', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f442.png' },
    { 'name': 'ear_of_rice', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33e.png' },
    { 'name': 'earth_africa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30d.png' },
    { 'name': 'earth_americas', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30e.png' },
    { 'name': 'earth_asia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30f.png' },
    { 'name': 'ecuador', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1e8.png' },
    { 'name': 'egg', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95a.png' },
    { 'name': 'eggplant', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f346.png' },
    { 'name': 'egypt', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1ec.png' },
    { 'name': 'eight', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0038-20e3.png' },
    { 'name': 'eight_pointed_black_star', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2734.png' },
    { 'name': 'eight_spoked_asterisk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2733.png' },
    { 'name': 'el_salvador', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1fb.png' },
    { 'name': 'electric_plug', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50c.png' },
    { 'name': 'electron', 'url': 'https://assets-cdn.github.com/images/icons/emoji/electron.png' },
    { 'name': 'elephant', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f418.png' },
    { 'name': 'email', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2709.png' },
    { 'name': 'end', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51a.png' },
    { 'name': 'envelope', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2709.png' },
    { 'name': 'envelope_with_arrow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e9.png' },
    { 'name': 'equatorial_guinea', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f6.png' },
    { 'name': 'eritrea', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1f7.png' },
    { 'name': 'es', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1f8.png' },
    { 'name': 'estonia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1ea.png' },
    { 'name': 'ethiopia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1f9.png' },
    { 'name': 'eu', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1fa.png' },
    { 'name': 'euro', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b6.png' },
    { 'name': 'european_castle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f0.png' },
    { 'name': 'european_post_office', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e4.png' },
    { 'name': 'european_union', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1fa.png' },
    { 'name': 'evergreen_tree', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f332.png' },
    { 'name': 'exclamation', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png' },
    { 'name': 'expressionless', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f611.png' },
    { 'name': 'eye', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f441.png' },
    { 'name': 'eye_speech_bubble', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f441-1f5e8.png' },
    { 'name': 'eyeglasses', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f453.png' },
    { 'name': 'eyes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f440.png' },
    { 'name': 'face_with_head_bandage', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f915.png' },
    { 'name': 'face_with_thermometer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f912.png' },
    { 'name': 'facepunch', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44a.png' },
    { 'name': 'factory', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ed.png' },
    { 'name': 'falkland_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f0.png' },
    { 'name': 'fallen_leaf', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f342.png' },
    { 'name': 'family', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46a.png' },
    { 'name': 'family_man_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f466.png' },
    { 'name': 'family_man_boy_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f466-1f466.png' },
    { 'name': 'family_man_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f467.png' },
    { 'name': 'family_man_girl_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f467-1f466.png' },
    { 'name': 'family_man_girl_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f467-1f467.png' },
    { 'name': 'family_man_man_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f466.png' },
    { 'name': 'family_man_man_boy_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f466-1f466.png' },
    { 'name': 'family_man_man_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f467.png' },
    { 'name': 'family_man_man_girl_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f466.png' },
    {
        'name': 'family_man_man_girl_girl',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f467.png'
    },
    { 'name': 'family_man_woman_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46a.png' },
    {
        'name': 'family_man_woman_boy_boy',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f466-1f466.png'
    },
    { 'name': 'family_man_woman_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f467.png' },
    {
        'name': 'family_man_woman_girl_boy',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f466.png'
    },
    {
        'name': 'family_man_woman_girl_girl',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f467.png'
    },
    { 'name': 'family_woman_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f466.png' },
    { 'name': 'family_woman_boy_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f466-1f466.png' },
    { 'name': 'family_woman_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f467.png' },
    { 'name': 'family_woman_girl_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f467-1f466.png' },
    { 'name': 'family_woman_girl_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f467-1f467.png' },
    { 'name': 'family_woman_woman_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f466.png' },
    { 'name': 'family_woman_woman_boy_boy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f466-1f466.png' },
    { 'name': 'family_woman_woman_girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f467.png' },
    {
        'name': 'family_woman_woman_girl_boy',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f466.png'
    },
    {
        'name': 'family_woman_woman_girl_girl',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f467.png'
    },
    { 'name': 'faroe_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f4.png' },
    { 'name': 'fast_forward', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23e9.png' },
    { 'name': 'fax', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e0.png' },
    { 'name': 'fearful', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f628.png' },
    { 'name': 'feelsgood', 'url': 'https://assets-cdn.github.com/images/icons/emoji/feelsgood.png' },
    { 'name': 'feet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43e.png' },
    { 'name': 'female_detective', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f575-2640.png' },
    { 'name': 'ferris_wheel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a1.png' },
    { 'name': 'ferry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f4.png' },
    { 'name': 'field_hockey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d1.png' },
    { 'name': 'fiji', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1ef.png' },
    { 'name': 'file_cabinet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5c4.png' },
    { 'name': 'file_folder', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c1.png' },
    { 'name': 'film_projector', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fd.png' },
    { 'name': 'film_strip', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39e.png' },
    { 'name': 'finland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1ee.png' },
    { 'name': 'finnadie', 'url': 'https://assets-cdn.github.com/images/icons/emoji/finnadie.png' },
    { 'name': 'fire', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f525.png' },
    { 'name': 'fire_engine', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f692.png' },
    { 'name': 'fireworks', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f386.png' },
    { 'name': 'first_quarter_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f313.png' },
    { 'name': 'first_quarter_moon_with_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31b.png' },
    { 'name': 'fish', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41f.png' },
    { 'name': 'fish_cake', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f365.png' },
    { 'name': 'fishing_pole_and_fish', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a3.png' },
    { 'name': 'fist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270a.png' },
    { 'name': 'fist_left', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91b.png' },
    { 'name': 'fist_oncoming', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44a.png' },
    { 'name': 'fist_raised', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270a.png' },
    { 'name': 'fist_right', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91c.png' },
    { 'name': 'five', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0035-20e3.png' },
    { 'name': 'flags', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38f.png' },
    { 'name': 'flashlight', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f526.png' },
    { 'name': 'fleur_de_lis', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/269c.png' },
    { 'name': 'flight_arrival', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ec.png' },
    { 'name': 'flight_departure', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6eb.png' },
    { 'name': 'flipper', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42c.png' },
    { 'name': 'floppy_disk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4be.png' },
    { 'name': 'flower_playing_cards', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b4.png' },
    { 'name': 'flushed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f633.png' },
    { 'name': 'fog', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32b.png' },
    { 'name': 'foggy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f301.png' },
    { 'name': 'football', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c8.png' },
    { 'name': 'footprints', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f463.png' },
    { 'name': 'fork_and_knife', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f374.png' },
    { 'name': 'fountain', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f2.png' },
    { 'name': 'fountain_pen', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58b.png' },
    { 'name': 'four', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0034-20e3.png' },
    { 'name': 'four_leaf_clover', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f340.png' },
    { 'name': 'fox_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98a.png' },
    { 'name': 'fr', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f7.png' },
    { 'name': 'framed_picture', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5bc.png' },
    { 'name': 'free', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f193.png' },
    { 'name': 'french_guiana', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1eb.png' },
    { 'name': 'french_polynesia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1eb.png' },
    { 'name': 'french_southern_territories', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1eb.png' },
    { 'name': 'fried_egg', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f373.png' },
    { 'name': 'fried_shrimp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f364.png' },
    { 'name': 'fries', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35f.png' },
    { 'name': 'frog', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f438.png' },
    { 'name': 'frowning', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f626.png' },
    { 'name': 'frowning_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2639.png' },
    { 'name': 'frowning_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64d-2642.png' },
    { 'name': 'frowning_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64d.png' },
    { 'name': 'fu', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f595.png' },
    { 'name': 'fuelpump', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26fd.png' },
    { 'name': 'full_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f315.png' },
    { 'name': 'full_moon_with_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31d.png' },
    { 'name': 'funeral_urn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26b1.png' },
    { 'name': 'gabon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e6.png' },
    { 'name': 'gambia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f2.png' },
    { 'name': 'game_die', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b2.png' },
    { 'name': 'gb', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e7.png' },
    { 'name': 'gear', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2699.png' },
    { 'name': 'gem', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48e.png' },
    { 'name': 'gemini', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264a.png' },
    { 'name': 'georgia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ea.png' },
    { 'name': 'ghana', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ed.png' },
    { 'name': 'ghost', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47b.png' },
    { 'name': 'gibraltar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ee.png' },
    { 'name': 'gift', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f381.png' },
    { 'name': 'gift_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49d.png' },
    { 'name': 'girl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f467.png' },
    { 'name': 'globe_with_meridians', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f310.png' },
    { 'name': 'goal_net', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f945.png' },
    { 'name': 'goat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f410.png' },
    { 'name': 'goberserk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/goberserk.png' },
    { 'name': 'godmode', 'url': 'https://assets-cdn.github.com/images/icons/emoji/godmode.png' },
    { 'name': 'golf', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f3.png' },
    { 'name': 'golfing_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cc.png' },
    { 'name': 'golfing_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cc-2640.png' },
    { 'name': 'gorilla', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98d.png' },
    { 'name': 'grapes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f347.png' },
    { 'name': 'greece', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f7.png' },
    { 'name': 'green_apple', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34f.png' },
    { 'name': 'green_book', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d7.png' },
    { 'name': 'green_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49a.png' },
    { 'name': 'green_salad', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f957.png' },
    { 'name': 'greenland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f1.png' },
    { 'name': 'grenada', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e9.png' },
    { 'name': 'grey_exclamation', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2755.png' },
    { 'name': 'grey_question', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2754.png' },
    { 'name': 'grimacing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62c.png' },
    { 'name': 'grin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f601.png' },
    { 'name': 'grinning', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f600.png' },
    { 'name': 'guadeloupe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f5.png' },
    { 'name': 'guam', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1fa.png' },
    { 'name': 'guardsman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f482.png' },
    { 'name': 'guardswoman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f482-2640.png' },
    { 'name': 'guatemala', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f9.png' },
    { 'name': 'guernsey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ec.png' },
    { 'name': 'guinea', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f3.png' },
    { 'name': 'guinea_bissau', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1fc.png' },
    { 'name': 'guitar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b8.png' },
    { 'name': 'gun', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52b.png' },
    { 'name': 'guyana', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1fe.png' },
    { 'name': 'haircut', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f487.png' },
    { 'name': 'haircut_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f487-2642.png' },
    { 'name': 'haircut_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f487.png' },
    { 'name': 'haiti', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f9.png' },
    { 'name': 'hamburger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f354.png' },
    { 'name': 'hammer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f528.png' },
    { 'name': 'hammer_and_pick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2692.png' },
    { 'name': 'hammer_and_wrench', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e0.png' },
    { 'name': 'hamster', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f439.png' },
    { 'name': 'hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270b.png' },
    { 'name': 'handbag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45c.png' },
    { 'name': 'handshake', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91d.png' },
    { 'name': 'hankey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png' },
    { 'name': 'hash', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0023-20e3.png' },
    { 'name': 'hatched_chick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f425.png' },
    { 'name': 'hatching_chick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f423.png' },
    { 'name': 'headphones', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a7.png' },
    { 'name': 'hear_no_evil', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f649.png' },
    { 'name': 'heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png' },
    { 'name': 'heart_decoration', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49f.png' },
    { 'name': 'heart_eyes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png' },
    { 'name': 'heart_eyes_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63b.png' },
    { 'name': 'heartbeat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f493.png' },
    { 'name': 'heartpulse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f497.png' },
    { 'name': 'hearts', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2665.png' },
    { 'name': 'heavy_check_mark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2714.png' },
    { 'name': 'heavy_division_sign', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2797.png' },
    { 'name': 'heavy_dollar_sign', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b2.png' },
    { 'name': 'heavy_exclamation_mark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png' },
    { 'name': 'heavy_heart_exclamation', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2763.png' },
    { 'name': 'heavy_minus_sign', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2796.png' },
    { 'name': 'heavy_multiplication_x', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2716.png' },
    { 'name': 'heavy_plus_sign', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2795.png' },
    { 'name': 'helicopter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f681.png' },
    { 'name': 'herb', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33f.png' },
    { 'name': 'hibiscus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33a.png' },
    { 'name': 'high_brightness', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f506.png' },
    { 'name': 'high_heel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f460.png' },
    { 'name': 'hocho', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52a.png' },
    { 'name': 'hole', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f573.png' },
    { 'name': 'honduras', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f3.png' },
    { 'name': 'honey_pot', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36f.png' },
    { 'name': 'honeybee', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41d.png' },
    { 'name': 'hong_kong', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f0.png' },
    { 'name': 'horse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f434.png' },
    { 'name': 'horse_racing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c7.png' },
    { 'name': 'hospital', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e5.png' },
    { 'name': 'hot_pepper', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f336.png' },
    { 'name': 'hotdog', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32d.png' },
    { 'name': 'hotel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e8.png' },
    { 'name': 'hotsprings', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2668.png' },
    { 'name': 'hourglass', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/231b.png' },
    { 'name': 'hourglass_flowing_sand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f3.png' },
    { 'name': 'house', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e0.png' },
    { 'name': 'house_with_garden', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e1.png' },
    { 'name': 'houses', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d8.png' },
    { 'name': 'hugs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f917.png' },
    { 'name': 'hungary', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1fa.png' },
    { 'name': 'hurtrealbad', 'url': 'https://assets-cdn.github.com/images/icons/emoji/hurtrealbad.png' },
    { 'name': 'hushed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62f.png' },
    { 'name': 'ice_cream', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f368.png' },
    { 'name': 'ice_hockey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d2.png' },
    { 'name': 'ice_skate', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f8.png' },
    { 'name': 'icecream', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f366.png' },
    { 'name': 'iceland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f8.png' },
    { 'name': 'id', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f194.png' },
    { 'name': 'ideograph_advantage', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f250.png' },
    { 'name': 'imp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47f.png' },
    { 'name': 'inbox_tray', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e5.png' },
    { 'name': 'incoming_envelope', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e8.png' },
    { 'name': 'india', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f3.png' },
    { 'name': 'indonesia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1e9.png' },
    { 'name': 'information_desk_person', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f481.png' },
    { 'name': 'information_source', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2139.png' },
    { 'name': 'innocent', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f607.png' },
    { 'name': 'interrobang', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2049.png' },
    { 'name': 'iphone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f1.png' },
    { 'name': 'iran', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f7.png' },
    { 'name': 'iraq', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f6.png' },
    { 'name': 'ireland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1ea.png' },
    { 'name': 'isle_of_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f2.png' },
    { 'name': 'israel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f1.png' },
    { 'name': 'it', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f9.png' },
    { 'name': 'izakaya_lantern', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ee.png' },
    { 'name': 'jack_o_lantern', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f383.png' },
    { 'name': 'jamaica', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1f2.png' },
    { 'name': 'japan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fe.png' },
    { 'name': 'japanese_castle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ef.png' },
    { 'name': 'japanese_goblin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47a.png' },
    { 'name': 'japanese_ogre', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f479.png' },
    { 'name': 'jeans', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f456.png' },
    { 'name': 'jersey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1ea.png' },
    { 'name': 'jordan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1f4.png' },
    { 'name': 'joy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f602.png' },
    { 'name': 'joy_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f639.png' },
    { 'name': 'joystick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f579.png' },
    { 'name': 'jp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1f5.png' },
    { 'name': 'kaaba', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54b.png' },
    { 'name': 'kazakhstan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ff.png' },
    { 'name': 'kenya', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ea.png' },
    { 'name': 'key', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f511.png' },
    { 'name': 'keyboard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2328.png' },
    { 'name': 'keycap_ten', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51f.png' },
    { 'name': 'kick_scooter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f4.png' },
    { 'name': 'kimono', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f458.png' },
    { 'name': 'kiribati', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ee.png' },
    { 'name': 'kiss', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48b.png' },
    { 'name': 'kissing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f617.png' },
    { 'name': 'kissing_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63d.png' },
    { 'name': 'kissing_closed_eyes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61a.png' },
    { 'name': 'kissing_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f618.png' },
    { 'name': 'kissing_smiling_eyes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f619.png' },
    { 'name': 'kiwi_fruit', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95d.png' },
    { 'name': 'knife', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52a.png' },
    { 'name': 'koala', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f428.png' },
    { 'name': 'koko', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f201.png' },
    { 'name': 'kosovo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fd-1f1f0.png' },
    { 'name': 'kr', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f7.png' },
    { 'name': 'kuwait', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1fc.png' },
    { 'name': 'kyrgyzstan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ec.png' },
    { 'name': 'label', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f7.png' },
    { 'name': 'lantern', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ee.png' },
    { 'name': 'laos', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1e6.png' },
    { 'name': 'large_blue_circle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f535.png' },
    { 'name': 'large_blue_diamond', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f537.png' },
    { 'name': 'large_orange_diamond', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f536.png' },
    { 'name': 'last_quarter_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f317.png' },
    { 'name': 'last_quarter_moon_with_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31c.png' },
    { 'name': 'latin_cross', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/271d.png' },
    { 'name': 'latvia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1fb.png' },
    { 'name': 'laughing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f606.png' },
    { 'name': 'leaves', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f343.png' },
    { 'name': 'lebanon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1e7.png' },
    { 'name': 'ledger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d2.png' },
    { 'name': 'left_luggage', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c5.png' },
    { 'name': 'left_right_arrow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2194.png' },
    { 'name': 'leftwards_arrow_with_hook', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/21a9.png' },
    { 'name': 'lemon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34b.png' },
    { 'name': 'leo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264c.png' },
    { 'name': 'leopard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f406.png' },
    { 'name': 'lesotho', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f8.png' },
    { 'name': 'level_slider', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39a.png' },
    { 'name': 'liberia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f7.png' },
    { 'name': 'libra', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264e.png' },
    { 'name': 'libya', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1fe.png' },
    { 'name': 'liechtenstein', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1ee.png' },
    { 'name': 'light_rail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f688.png' },
    { 'name': 'link', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f517.png' },
    { 'name': 'lion', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f981.png' },
    { 'name': 'lips', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f444.png' },
    { 'name': 'lipstick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f484.png' },
    { 'name': 'lithuania', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f9.png' },
    { 'name': 'lizard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98e.png' },
    { 'name': 'lock', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f512.png' },
    { 'name': 'lock_with_ink_pen', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50f.png' },
    { 'name': 'lollipop', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36d.png' },
    { 'name': 'loop', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/27bf.png' },
    { 'name': 'loud_sound', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50a.png' },
    { 'name': 'loudspeaker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e2.png' },
    { 'name': 'love_hotel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e9.png' },
    { 'name': 'love_letter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48c.png' },
    { 'name': 'low_brightness', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f505.png' },
    { 'name': 'luxembourg', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1fa.png' },
    { 'name': 'lying_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f925.png' },
    { 'name': 'm', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/24c2.png' },
    { 'name': 'macau', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f4.png' },
    { 'name': 'macedonia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f0.png' },
    { 'name': 'madagascar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ec.png' },
    { 'name': 'mag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50d.png' },
    { 'name': 'mag_right', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50e.png' },
    { 'name': 'mahjong', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f004.png' },
    { 'name': 'mailbox', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4eb.png' },
    { 'name': 'mailbox_closed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ea.png' },
    { 'name': 'mailbox_with_mail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ec.png' },
    { 'name': 'mailbox_with_no_mail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ed.png' },
    { 'name': 'malawi', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fc.png' },
    { 'name': 'malaysia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fe.png' },
    { 'name': 'maldives', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fb.png' },
    { 'name': 'male_detective', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f575.png' },
    { 'name': 'mali', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f1.png' },
    { 'name': 'malta', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f9.png' },
    { 'name': 'man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468.png' },
    { 'name': 'man_artist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3a8.png' },
    { 'name': 'man_astronaut', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f680.png' },
    { 'name': 'man_cartwheeling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f938-2642.png' },
    { 'name': 'man_cook', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f373.png' },
    { 'name': 'man_dancing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f57a.png' },
    { 'name': 'man_facepalming', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f926-2642.png' },
    { 'name': 'man_factory_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3ed.png' },
    { 'name': 'man_farmer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f33e.png' },
    { 'name': 'man_firefighter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f692.png' },
    { 'name': 'man_health_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2695.png' },
    { 'name': 'man_in_tuxedo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f935.png' },
    { 'name': 'man_judge', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2696.png' },
    { 'name': 'man_juggling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f939-2642.png' },
    { 'name': 'man_mechanic', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f527.png' },
    { 'name': 'man_office_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f4bc.png' },
    { 'name': 'man_pilot', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2708.png' },
    { 'name': 'man_playing_handball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93e-2642.png' },
    { 'name': 'man_playing_water_polo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93d-2642.png' },
    { 'name': 'man_scientist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f52c.png' },
    { 'name': 'man_shrugging', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f937-2642.png' },
    { 'name': 'man_singer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3a4.png' },
    { 'name': 'man_student', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f393.png' },
    { 'name': 'man_teacher', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3eb.png' },
    { 'name': 'man_technologist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f4bb.png' },
    { 'name': 'man_with_gua_pi_mao', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f472.png' },
    { 'name': 'man_with_turban', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f473.png' },
    { 'name': 'mandarin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34a.png' },
    { 'name': 'mans_shoe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45e.png' },
    { 'name': 'mantelpiece_clock', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f570.png' },
    { 'name': 'maple_leaf', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f341.png' },
    { 'name': 'marshall_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ed.png' },
    { 'name': 'martial_arts_uniform', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f94b.png' },
    { 'name': 'martinique', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f6.png' },
    { 'name': 'mask', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f637.png' },
    { 'name': 'massage', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f486.png' },
    { 'name': 'massage_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f486-2642.png' },
    { 'name': 'massage_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f486.png' },
    { 'name': 'mauritania', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f7.png' },
    { 'name': 'mauritius', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fa.png' },
    { 'name': 'mayotte', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fe-1f1f9.png' },
    { 'name': 'meat_on_bone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f356.png' },
    { 'name': 'medal_military', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f396.png' },
    { 'name': 'medal_sports', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c5.png' },
    { 'name': 'mega', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e3.png' },
    { 'name': 'melon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f348.png' },
    { 'name': 'memo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png' },
    { 'name': 'men_wrestling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93c-2642.png' },
    { 'name': 'menorah', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54e.png' },
    { 'name': 'mens', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b9.png' },
    { 'name': 'metal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f918.png' },
    { 'name': 'metro', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f687.png' },
    { 'name': 'mexico', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fd.png' },
    { 'name': 'micronesia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f2.png' },
    { 'name': 'microphone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a4.png' },
    { 'name': 'microscope', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52c.png' },
    { 'name': 'middle_finger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f595.png' },
    { 'name': 'milk_glass', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95b.png' },
    { 'name': 'milky_way', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30c.png' },
    { 'name': 'minibus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f690.png' },
    { 'name': 'minidisc', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bd.png' },
    { 'name': 'mobile_phone_off', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f4.png' },
    { 'name': 'moldova', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1e9.png' },
    { 'name': 'monaco', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1e8.png' },
    { 'name': 'money_mouth_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f911.png' },
    { 'name': 'money_with_wings', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b8.png' },
    { 'name': 'moneybag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b0.png' },
    { 'name': 'mongolia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f3.png' },
    { 'name': 'monkey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f412.png' },
    { 'name': 'monkey_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f435.png' },
    { 'name': 'monorail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69d.png' },
    { 'name': 'montenegro', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ea.png' },
    { 'name': 'montserrat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f8.png' },
    { 'name': 'moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f314.png' },
    { 'name': 'morocco', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1e6.png' },
    { 'name': 'mortar_board', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f393.png' },
    { 'name': 'mosque', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54c.png' },
    { 'name': 'motor_boat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e5.png' },
    { 'name': 'motor_scooter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f5.png' },
    { 'name': 'motorcycle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cd.png' },
    { 'name': 'motorway', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e3.png' },
    { 'name': 'mount_fuji', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fb.png' },
    { 'name': 'mountain', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f0.png' },
    { 'name': 'mountain_bicyclist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b5.png' },
    { 'name': 'mountain_biking_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b5.png' },
    { 'name': 'mountain_biking_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b5-2640.png' },
    { 'name': 'mountain_cableway', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a0.png' },
    { 'name': 'mountain_railway', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69e.png' },
    { 'name': 'mountain_snow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d4.png' },
    { 'name': 'mouse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42d.png' },
    { 'name': 'mouse2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f401.png' },
    { 'name': 'movie_camera', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a5.png' },
    { 'name': 'moyai', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5ff.png' },
    { 'name': 'mozambique', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ff.png' },
    { 'name': 'mrs_claus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f936.png' },
    { 'name': 'muscle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4aa.png' },
    { 'name': 'mushroom', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f344.png' },
    { 'name': 'musical_keyboard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b9.png' },
    { 'name': 'musical_note', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b5.png' },
    { 'name': 'musical_score', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bc.png' },
    { 'name': 'mute', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f507.png' },
    { 'name': 'myanmar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f2.png' },
    { 'name': 'nail_care', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f485.png' },
    { 'name': 'name_badge', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4db.png' },
    { 'name': 'namibia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1e6.png' },
    { 'name': 'national_park', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3de.png' },
    { 'name': 'nauru', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f7.png' },
    { 'name': 'nauseated_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f922.png' },
    { 'name': 'neckbeard', 'url': 'https://assets-cdn.github.com/images/icons/emoji/neckbeard.png' },
    { 'name': 'necktie', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f454.png' },
    { 'name': 'negative_squared_cross_mark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/274e.png' },
    { 'name': 'nepal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f5.png' },
    { 'name': 'nerd_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f913.png' },
    { 'name': 'netherlands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f1.png' },
    { 'name': 'neutral_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f610.png' },
    { 'name': 'new', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f195.png' },
    { 'name': 'new_caledonia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1e8.png' },
    { 'name': 'new_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f311.png' },
    { 'name': 'new_moon_with_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31a.png' },
    { 'name': 'new_zealand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ff.png' },
    { 'name': 'newspaper', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f0.png' },
    { 'name': 'newspaper_roll', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5de.png' },
    { 'name': 'next_track_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ed.png' },
    { 'name': 'ng', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f196.png' },
    { 'name': 'ng_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645-2642.png' },
    { 'name': 'ng_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645.png' },
    { 'name': 'nicaragua', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ee.png' },
    { 'name': 'niger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ea.png' },
    { 'name': 'nigeria', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ec.png' },
    { 'name': 'night_with_stars', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f303.png' },
    { 'name': 'nine', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0039-20e3.png' },
    { 'name': 'niue', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1fa.png' },
    { 'name': 'no_bell', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f515.png' },
    { 'name': 'no_bicycles', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b3.png' },
    { 'name': 'no_entry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26d4.png' },
    { 'name': 'no_entry_sign', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ab.png' },
    { 'name': 'no_good', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645.png' },
    { 'name': 'no_good_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645-2642.png' },
    { 'name': 'no_good_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645.png' },
    { 'name': 'no_mobile_phones', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f5.png' },
    { 'name': 'no_mouth', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f636.png' },
    { 'name': 'no_pedestrians', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b7.png' },
    { 'name': 'no_smoking', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ad.png' },
    { 'name': 'non-potable_water', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b1.png' },
    { 'name': 'norfolk_island', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1eb.png' },
    { 'name': 'north_korea', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f5.png' },
    { 'name': 'northern_mariana_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f5.png' },
    { 'name': 'norway', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f4.png' },
    { 'name': 'nose', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f443.png' },
    { 'name': 'notebook', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d3.png' },
    { 'name': 'notebook_with_decorative_cover', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d4.png' },
    { 'name': 'notes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b6.png' },
    { 'name': 'nut_and_bolt', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f529.png' },
    { 'name': 'o', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b55.png' },
    { 'name': 'o2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f17e.png' },
    { 'name': 'ocean', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30a.png' },
    { 'name': 'octocat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/octocat.png' },
    { 'name': 'octopus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f419.png' },
    { 'name': 'oden', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f362.png' },
    { 'name': 'office', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e2.png' },
    { 'name': 'oil_drum', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e2.png' },
    { 'name': 'ok', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f197.png' },
    { 'name': 'ok_hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44c.png' },
    { 'name': 'ok_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f646-2642.png' },
    { 'name': 'ok_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f646.png' },
    { 'name': 'old_key', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5dd.png' },
    { 'name': 'older_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f474.png' },
    { 'name': 'older_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f475.png' },
    { 'name': 'om', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f549.png' },
    { 'name': 'oman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f4-1f1f2.png' },
    { 'name': 'on', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51b.png' },
    { 'name': 'oncoming_automobile', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f698.png' },
    { 'name': 'oncoming_bus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68d.png' },
    { 'name': 'oncoming_police_car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f694.png' },
    { 'name': 'oncoming_taxi', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f696.png' },
    { 'name': 'one', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0031-20e3.png' },
    { 'name': 'open_book', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png' },
    { 'name': 'open_file_folder', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c2.png' },
    { 'name': 'open_hands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f450.png' },
    { 'name': 'open_mouth', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62e.png' },
    { 'name': 'open_umbrella', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2602.png' },
    { 'name': 'ophiuchus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26ce.png' },
    { 'name': 'orange', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34a.png' },
    { 'name': 'orange_book', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d9.png' },
    { 'name': 'orthodox_cross', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2626.png' },
    { 'name': 'outbox_tray', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e4.png' },
    { 'name': 'owl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f989.png' },
    { 'name': 'ox', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f402.png' },
    { 'name': 'package', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e6.png' },
    { 'name': 'page_facing_up', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c4.png' },
    { 'name': 'page_with_curl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c3.png' },
    { 'name': 'pager', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4df.png' },
    { 'name': 'paintbrush', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58c.png' },
    { 'name': 'pakistan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f0.png' },
    { 'name': 'palau', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1fc.png' },
    { 'name': 'palestinian_territories', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f8.png' },
    { 'name': 'palm_tree', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f334.png' },
    { 'name': 'panama', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1e6.png' },
    { 'name': 'pancakes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95e.png' },
    { 'name': 'panda_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43c.png' },
    { 'name': 'paperclip', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ce.png' },
    { 'name': 'paperclips', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f587.png' },
    { 'name': 'papua_new_guinea', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1ec.png' },
    { 'name': 'paraguay', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1fe.png' },
    { 'name': 'parasol_on_ground', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f1.png' },
    { 'name': 'parking', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f17f.png' },
    { 'name': 'part_alternation_mark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/303d.png' },
    { 'name': 'partly_sunny', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26c5.png' },
    { 'name': 'passenger_ship', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f3.png' },
    { 'name': 'passport_control', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c2.png' },
    { 'name': 'pause_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f8.png' },
    { 'name': 'paw_prints', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43e.png' },
    { 'name': 'peace_symbol', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/262e.png' },
    { 'name': 'peach', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f351.png' },
    { 'name': 'peanuts', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95c.png' },
    { 'name': 'pear', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f350.png' },
    { 'name': 'pen', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58a.png' },
    { 'name': 'pencil', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png' },
    { 'name': 'pencil2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png' },
    { 'name': 'penguin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f427.png' },
    { 'name': 'pensive', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f614.png' },
    { 'name': 'performing_arts', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ad.png' },
    { 'name': 'persevere', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f623.png' },
    { 'name': 'person_fencing', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93a.png' },
    { 'name': 'person_frowning', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64d.png' },
    { 'name': 'person_with_blond_hair', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png' },
    { 'name': 'person_with_pouting_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64e.png' },
    { 'name': 'peru', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1ea.png' },
    { 'name': 'philippines', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1ed.png' },
    { 'name': 'phone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/260e.png' },
    { 'name': 'pick', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26cf.png' },
    { 'name': 'pig', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f437.png' },
    { 'name': 'pig2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f416.png' },
    { 'name': 'pig_nose', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43d.png' },
    { 'name': 'pill', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48a.png' },
    { 'name': 'pineapple', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34d.png' },
    { 'name': 'ping_pong', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d3.png' },
    { 'name': 'pisces', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2653.png' },
    { 'name': 'pitcairn_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f3.png' },
    { 'name': 'pizza', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f355.png' },
    { 'name': 'place_of_worship', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6d0.png' },
    { 'name': 'plate_with_cutlery', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37d.png' },
    { 'name': 'play_or_pause_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ef.png' },
    { 'name': 'point_down', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f447.png' },
    { 'name': 'point_left', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f448.png' },
    { 'name': 'point_right', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f449.png' },
    { 'name': 'point_up', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/261d.png' },
    { 'name': 'point_up_2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f446.png' },
    { 'name': 'poland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f1.png' },
    { 'name': 'police_car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f693.png' },
    { 'name': 'policeman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46e.png' },
    { 'name': 'policewoman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46e-2640.png' },
    { 'name': 'poodle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f429.png' },
    { 'name': 'poop', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png' },
    { 'name': 'popcorn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37f.png' },
    { 'name': 'portugal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f9.png' },
    { 'name': 'post_office', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e3.png' },
    { 'name': 'postal_horn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ef.png' },
    { 'name': 'postbox', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ee.png' },
    { 'name': 'potable_water', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b0.png' },
    { 'name': 'potato', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f954.png' },
    { 'name': 'pouch', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45d.png' },
    { 'name': 'poultry_leg', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f357.png' },
    { 'name': 'pound', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b7.png' },
    { 'name': 'pout', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f621.png' },
    { 'name': 'pouting_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63e.png' },
    { 'name': 'pouting_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64e-2642.png' },
    { 'name': 'pouting_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64e.png' },
    { 'name': 'pray', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64f.png' },
    { 'name': 'prayer_beads', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ff.png' },
    { 'name': 'pregnant_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f930.png' },
    { 'name': 'previous_track_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ee.png' },
    { 'name': 'prince', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f934.png' },
    { 'name': 'princess', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f478.png' },
    { 'name': 'printer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5a8.png' },
    { 'name': 'puerto_rico', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f7.png' },
    { 'name': 'punch', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44a.png' },
    { 'name': 'purple_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49c.png' },
    { 'name': 'purse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45b.png' },
    { 'name': 'pushpin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cc.png' },
    { 'name': 'put_litter_in_its_place', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ae.png' },
    { 'name': 'qatar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f6-1f1e6.png' },
    { 'name': 'question', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2753.png' },
    { 'name': 'rabbit', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f430.png' },
    { 'name': 'rabbit2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f407.png' },
    { 'name': 'racehorse', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40e.png' },
    { 'name': 'racing_car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ce.png' },
    { 'name': 'radio', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fb.png' },
    { 'name': 'radio_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f518.png' },
    { 'name': 'radioactive', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2622.png' },
    { 'name': 'rage', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f621.png' },
    { 'name': 'rage1', 'url': 'https://assets-cdn.github.com/images/icons/emoji/rage1.png' },
    { 'name': 'rage2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/rage2.png' },
    { 'name': 'rage3', 'url': 'https://assets-cdn.github.com/images/icons/emoji/rage3.png' },
    { 'name': 'rage4', 'url': 'https://assets-cdn.github.com/images/icons/emoji/rage4.png' },
    { 'name': 'railway_car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f683.png' },
    { 'name': 'railway_track', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e4.png' },
    { 'name': 'rainbow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f308.png' },
    { 'name': 'rainbow_flag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f3-1f308.png' },
    { 'name': 'raised_back_of_hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91a.png' },
    { 'name': 'raised_hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270b.png' },
    { 'name': 'raised_hand_with_fingers_splayed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f590.png' },
    { 'name': 'raised_hands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64c.png' },
    { 'name': 'raising_hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64b.png' },
    { 'name': 'raising_hand_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64b-2642.png' },
    { 'name': 'raising_hand_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64b.png' },
    { 'name': 'ram', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40f.png' },
    { 'name': 'ramen', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35c.png' },
    { 'name': 'rat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f400.png' },
    { 'name': 'record_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23fa.png' },
    { 'name': 'recycle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/267b.png' },
    { 'name': 'red_car', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f697.png' },
    { 'name': 'red_circle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f534.png' },
    { 'name': 'registered', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/00ae.png' },
    { 'name': 'relaxed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/263a.png' },
    { 'name': 'relieved', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60c.png' },
    { 'name': 'reminder_ribbon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f397.png' },
    { 'name': 'repeat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f501.png' },
    { 'name': 'repeat_one', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f502.png' },
    { 'name': 'rescue_worker_helmet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26d1.png' },
    { 'name': 'restroom', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bb.png' },
    { 'name': 'reunion', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1ea.png' },
    { 'name': 'revolving_hearts', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49e.png' },
    { 'name': 'rewind', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ea.png' },
    { 'name': 'rhinoceros', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98f.png' },
    { 'name': 'ribbon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f380.png' },
    { 'name': 'rice', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35a.png' },
    { 'name': 'rice_ball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f359.png' },
    { 'name': 'rice_cracker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f358.png' },
    { 'name': 'rice_scene', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f391.png' },
    { 'name': 'right_anger_bubble', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5ef.png' },
    { 'name': 'ring', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48d.png' },
    { 'name': 'robot', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f916.png' },
    { 'name': 'rocket', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f680.png' },
    { 'name': 'rofl', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f923.png' },
    { 'name': 'roll_eyes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f644.png' },
    { 'name': 'roller_coaster', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a2.png' },
    { 'name': 'romania', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1f4.png' },
    { 'name': 'rooster', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f413.png' },
    { 'name': 'rose', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f339.png' },
    { 'name': 'rosette', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f5.png' },
    { 'name': 'rotating_light', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a8.png' },
    { 'name': 'round_pushpin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cd.png' },
    { 'name': 'rowboat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a3.png' },
    { 'name': 'rowing_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a3.png' },
    { 'name': 'rowing_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a3-2640.png' },
    { 'name': 'ru', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1fa.png' },
    { 'name': 'rugby_football', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c9.png' },
    { 'name': 'runner', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3.png' },
    { 'name': 'running', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3.png' },
    { 'name': 'running_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3.png' },
    { 'name': 'running_shirt_with_sash', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bd.png' },
    { 'name': 'running_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3-2640.png' },
    { 'name': 'rwanda', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1fc.png' },
    { 'name': 'sa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f202.png' },
    { 'name': 'sagittarius', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2650.png' },
    { 'name': 'sailboat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f5.png' },
    { 'name': 'sake', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f376.png' },
    { 'name': 'samoa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fc-1f1f8.png' },
    { 'name': 'san_marino', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f2.png' },
    { 'name': 'sandal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f461.png' },
    { 'name': 'santa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f385.png' },
    { 'name': 'sao_tome_principe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f9.png' },
    { 'name': 'satellite', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e1.png' },
    { 'name': 'satisfied', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f606.png' },
    { 'name': 'saudi_arabia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e6.png' },
    { 'name': 'saxophone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b7.png' },
    { 'name': 'school', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3eb.png' },
    { 'name': 'school_satchel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f392.png' },
    { 'name': 'scissors', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2702.png' },
    { 'name': 'scorpion', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f982.png' },
    { 'name': 'scorpius', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264f.png' },
    { 'name': 'scream', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f631.png' },
    { 'name': 'scream_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f640.png' },
    { 'name': 'scroll', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dc.png' },
    { 'name': 'seat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ba.png' },
    { 'name': 'secret', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/3299.png' },
    { 'name': 'see_no_evil', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f648.png' },
    { 'name': 'seedling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f331.png' },
    { 'name': 'selfie', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f933.png' },
    { 'name': 'senegal', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f3.png' },
    { 'name': 'serbia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1f8.png' },
    { 'name': 'seven', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0037-20e3.png' },
    { 'name': 'seychelles', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e8.png' },
    { 'name': 'shallow_pan_of_food', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f958.png' },
    { 'name': 'shamrock', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2618.png' },
    { 'name': 'shark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f988.png' },
    { 'name': 'shaved_ice', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f367.png' },
    { 'name': 'sheep', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f411.png' },
    { 'name': 'shell', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41a.png' },
    { 'name': 'shield', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e1.png' },
    { 'name': 'shinto_shrine', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26e9.png' },
    { 'name': 'ship', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a2.png' },
    { 'name': 'shipit', 'url': 'https://assets-cdn.github.com/images/icons/emoji/shipit.png' },
    { 'name': 'shirt', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f455.png' },
    { 'name': 'shit', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png' },
    { 'name': 'shoe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45e.png' },
    { 'name': 'shopping', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cd.png' },
    { 'name': 'shopping_cart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6d2.png' },
    { 'name': 'shower', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bf.png' },
    { 'name': 'shrimp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f990.png' },
    { 'name': 'sierra_leone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f1.png' },
    { 'name': 'signal_strength', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f6.png' },
    { 'name': 'singapore', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ec.png' },
    { 'name': 'sint_maarten', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1fd.png' },
    { 'name': 'six', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0036-20e3.png' },
    { 'name': 'six_pointed_star', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52f.png' },
    { 'name': 'ski', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bf.png' },
    { 'name': 'skier', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f7.png' },
    { 'name': 'skull', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f480.png' },
    { 'name': 'skull_and_crossbones', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2620.png' },
    { 'name': 'sleeping', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f634.png' },
    { 'name': 'sleeping_bed', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cc.png' },
    { 'name': 'sleepy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62a.png' },
    { 'name': 'slightly_frowning_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f641.png' },
    { 'name': 'slightly_smiling_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f642.png' },
    { 'name': 'slot_machine', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b0.png' },
    { 'name': 'slovakia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f0.png' },
    { 'name': 'slovenia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ee.png' },
    { 'name': 'small_airplane', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e9.png' },
    { 'name': 'small_blue_diamond', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f539.png' },
    { 'name': 'small_orange_diamond', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f538.png' },
    { 'name': 'small_red_triangle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53a.png' },
    { 'name': 'small_red_triangle_down', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53b.png' },
    { 'name': 'smile', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png' },
    { 'name': 'smile_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f638.png' },
    { 'name': 'smiley', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png' },
    { 'name': 'smiley_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63a.png' },
    { 'name': 'smiling_imp', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f608.png' },
    { 'name': 'smirk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60f.png' },
    { 'name': 'smirk_cat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63c.png' },
    { 'name': 'smoking', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ac.png' },
    { 'name': 'snail', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40c.png' },
    { 'name': 'snake', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40d.png' },
    { 'name': 'sneezing_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f927.png' },
    { 'name': 'snowboarder', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c2.png' },
    { 'name': 'snowflake', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2744.png' },
    { 'name': 'snowman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26c4.png' },
    { 'name': 'snowman_with_snow', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2603.png' },
    { 'name': 'sob', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62d.png' },
    { 'name': 'soccer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26bd.png' },
    { 'name': 'solomon_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e7.png' },
    { 'name': 'somalia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f4.png' },
    { 'name': 'soon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51c.png' },
    { 'name': 'sos', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f198.png' },
    { 'name': 'sound', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f509.png' },
    { 'name': 'south_africa', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ff-1f1e6.png' },
    {
        'name': 'south_georgia_south_sandwich_islands',
        'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f8.png'
    },
    { 'name': 'south_sudan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f8.png' },
    { 'name': 'space_invader', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47e.png' },
    { 'name': 'spades', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2660.png' },
    { 'name': 'spaghetti', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35d.png' },
    { 'name': 'sparkle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2747.png' },
    { 'name': 'sparkler', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f387.png' },
    { 'name': 'sparkles', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2728.png' },
    { 'name': 'sparkling_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f496.png' },
    { 'name': 'speak_no_evil', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64a.png' },
    { 'name': 'speaker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f508.png' },
    { 'name': 'speaking_head', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5e3.png' },
    { 'name': 'speech_balloon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ac.png' },
    { 'name': 'speedboat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a4.png' },
    { 'name': 'spider', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f577.png' },
    { 'name': 'spider_web', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f578.png' },
    { 'name': 'spiral_calendar', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5d3.png' },
    { 'name': 'spiral_notepad', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5d2.png' },
    { 'name': 'spoon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f944.png' },
    { 'name': 'squid', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f991.png' },
    { 'name': 'squirrel', 'url': 'https://assets-cdn.github.com/images/icons/emoji/shipit.png' },
    { 'name': 'sri_lanka', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f0.png' },
    { 'name': 'st_barthelemy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f1.png' },
    { 'name': 'st_helena', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ed.png' },
    { 'name': 'st_kitts_nevis', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f3.png' },
    { 'name': 'st_lucia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1e8.png' },
    { 'name': 'st_pierre_miquelon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f2.png' },
    { 'name': 'st_vincent_grenadines', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1e8.png' },
    { 'name': 'stadium', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3df.png' },
    { 'name': 'star', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b50.png' },
    { 'name': 'star2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31f.png' },
    { 'name': 'star_and_crescent', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/262a.png' },
    { 'name': 'star_of_david', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2721.png' },
    { 'name': 'stars', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f320.png' },
    { 'name': 'station', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f689.png' },
    { 'name': 'statue_of_liberty', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fd.png' },
    { 'name': 'steam_locomotive', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f682.png' },
    { 'name': 'stew', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f372.png' },
    { 'name': 'stop_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f9.png' },
    { 'name': 'stop_sign', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6d1.png' },
    { 'name': 'stopwatch', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f1.png' },
    { 'name': 'straight_ruler', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cf.png' },
    { 'name': 'strawberry', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f353.png' },
    { 'name': 'stuck_out_tongue', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61b.png' },
    { 'name': 'stuck_out_tongue_closed_eyes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61d.png' },
    { 'name': 'stuck_out_tongue_winking_eye', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61c.png' },
    { 'name': 'studio_microphone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f399.png' },
    { 'name': 'stuffed_flatbread', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f959.png' },
    { 'name': 'sudan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e9.png' },
    { 'name': 'sun_behind_large_cloud', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f325.png' },
    { 'name': 'sun_behind_rain_cloud', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f326.png' },
    { 'name': 'sun_behind_small_cloud', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f324.png' },
    { 'name': 'sun_with_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31e.png' },
    { 'name': 'sunflower', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33b.png' },
    { 'name': 'sunglasses', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60e.png' },
    { 'name': 'sunny', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2600.png' },
    { 'name': 'sunrise', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f305.png' },
    { 'name': 'sunrise_over_mountains', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f304.png' },
    { 'name': 'surfer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c4.png' },
    { 'name': 'surfing_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c4.png' },
    { 'name': 'surfing_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c4-2640.png' },
    { 'name': 'suriname', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f7.png' },
    { 'name': 'sushi', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f363.png' },
    { 'name': 'suspect', 'url': 'https://assets-cdn.github.com/images/icons/emoji/suspect.png' },
    { 'name': 'suspension_railway', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69f.png' },
    { 'name': 'swaziland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ff.png' },
    { 'name': 'sweat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f613.png' },
    { 'name': 'sweat_drops', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a6.png' },
    { 'name': 'sweat_smile', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f605.png' },
    { 'name': 'sweden', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ea.png' },
    { 'name': 'sweet_potato', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f360.png' },
    { 'name': 'swimmer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ca.png' },
    { 'name': 'swimming_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ca.png' },
    { 'name': 'swimming_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ca-2640.png' },
    { 'name': 'switzerland', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ed.png' },
    { 'name': 'symbols', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f523.png' },
    { 'name': 'synagogue', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54d.png' },
    { 'name': 'syria', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1fe.png' },
    { 'name': 'syringe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f489.png' },
    { 'name': 'taco', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32e.png' },
    { 'name': 'tada', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png' },
    { 'name': 'taiwan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1fc.png' },
    { 'name': 'tajikistan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ef.png' },
    { 'name': 'tanabata_tree', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38b.png' },
    { 'name': 'tangerine', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34a.png' },
    { 'name': 'tanzania', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ff.png' },
    { 'name': 'taurus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2649.png' },
    { 'name': 'taxi', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f695.png' },
    { 'name': 'tea', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f375.png' },
    { 'name': 'telephone', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/260e.png' },
    { 'name': 'telephone_receiver', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4de.png' },
    { 'name': 'telescope', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52d.png' },
    { 'name': 'tennis', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3be.png' },
    { 'name': 'tent', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26fa.png' },
    { 'name': 'thailand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ed.png' },
    { 'name': 'thermometer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f321.png' },
    { 'name': 'thinking', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f914.png' },
    { 'name': 'thought_balloon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ad.png' },
    { 'name': 'three', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0033-20e3.png' },
    { 'name': 'thumbsdown', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png' },
    { 'name': 'thumbsup', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png' },
    { 'name': 'ticket', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ab.png' },
    { 'name': 'tickets', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39f.png' },
    { 'name': 'tiger', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42f.png' },
    { 'name': 'tiger2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f405.png' },
    { 'name': 'timer_clock', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f2.png' },
    { 'name': 'timor_leste', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f1.png' },
    { 'name': 'tipping_hand_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f481-2642.png' },
    { 'name': 'tipping_hand_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f481.png' },
    { 'name': 'tired_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62b.png' },
    { 'name': 'tm', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2122.png' },
    { 'name': 'togo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ec.png' },
    { 'name': 'toilet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bd.png' },
    { 'name': 'tokelau', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f0.png' },
    { 'name': 'tokyo_tower', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fc.png' },
    { 'name': 'tomato', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f345.png' },
    { 'name': 'tonga', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f4.png' },
    { 'name': 'tongue', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f445.png' },
    { 'name': 'top', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51d.png' },
    { 'name': 'tophat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a9.png' },
    { 'name': 'tornado', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32a.png' },
    { 'name': 'tr', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f7.png' },
    { 'name': 'trackball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5b2.png' },
    { 'name': 'tractor', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69c.png' },
    { 'name': 'traffic_light', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a5.png' },
    { 'name': 'train', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68b.png' },
    { 'name': 'train2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f686.png' },
    { 'name': 'tram', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68a.png' },
    { 'name': 'triangular_flag_on_post', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a9.png' },
    { 'name': 'triangular_ruler', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d0.png' },
    { 'name': 'trident', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f531.png' },
    { 'name': 'trinidad_tobago', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f9.png' },
    { 'name': 'triumph', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f624.png' },
    { 'name': 'trolleybus', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68e.png' },
    { 'name': 'trollface', 'url': 'https://assets-cdn.github.com/images/icons/emoji/trollface.png' },
    { 'name': 'trophy', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c6.png' },
    { 'name': 'tropical_drink', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f379.png' },
    { 'name': 'tropical_fish', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f420.png' },
    { 'name': 'truck', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69a.png' },
    { 'name': 'trumpet', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ba.png' },
    { 'name': 'tshirt', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f455.png' },
    { 'name': 'tulip', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f337.png' },
    { 'name': 'tumbler_glass', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f943.png' },
    { 'name': 'tunisia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f3.png' },
    { 'name': 'turkey', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f983.png' },
    { 'name': 'turkmenistan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f2.png' },
    { 'name': 'turks_caicos_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1e8.png' },
    { 'name': 'turtle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f422.png' },
    { 'name': 'tuvalu', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1fb.png' },
    { 'name': 'tv', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fa.png' },
    { 'name': 'twisted_rightwards_arrows', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f500.png' },
    { 'name': 'two', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0032-20e3.png' },
    { 'name': 'two_hearts', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f495.png' },
    { 'name': 'two_men_holding_hands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46c.png' },
    { 'name': 'two_women_holding_hands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46d.png' },
    { 'name': 'u5272', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f239.png' },
    { 'name': 'u5408', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f234.png' },
    { 'name': 'u55b6', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f23a.png' },
    { 'name': 'u6307', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f22f.png' },
    { 'name': 'u6708', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f237.png' },
    { 'name': 'u6709', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f236.png' },
    { 'name': 'u6e80', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f235.png' },
    { 'name': 'u7121', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f21a.png' },
    { 'name': 'u7533', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f238.png' },
    { 'name': 'u7981', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f232.png' },
    { 'name': 'u7a7a', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f233.png' },
    { 'name': 'uganda', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1ec.png' },
    { 'name': 'uk', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e7.png' },
    { 'name': 'ukraine', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1e6.png' },
    { 'name': 'umbrella', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2614.png' },
    { 'name': 'unamused', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f612.png' },
    { 'name': 'underage', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51e.png' },
    { 'name': 'unicorn', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f984.png' },
    { 'name': 'united_arab_emirates', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ea.png' },
    { 'name': 'unlock', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f513.png' },
    { 'name': 'up', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f199.png' },
    { 'name': 'upside_down_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f643.png' },
    { 'name': 'uruguay', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1fe.png' },
    { 'name': 'us', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1f8.png' },
    { 'name': 'us_virgin_islands', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1ee.png' },
    { 'name': 'uzbekistan', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1ff.png' },
    { 'name': 'v', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270c.png' },
    { 'name': 'vanuatu', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1fa.png' },
    { 'name': 'vatican_city', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1e6.png' },
    { 'name': 'venezuela', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1ea.png' },
    { 'name': 'vertical_traffic_light', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a6.png' },
    { 'name': 'vhs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fc.png' },
    { 'name': 'vibration_mode', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f3.png' },
    { 'name': 'video_camera', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f9.png' },
    { 'name': 'video_game', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ae.png' },
    { 'name': 'vietnam', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1f3.png' },
    { 'name': 'violin', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bb.png' },
    { 'name': 'virgo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264d.png' },
    { 'name': 'volcano', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30b.png' },
    { 'name': 'volleyball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d0.png' },
    { 'name': 'vs', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f19a.png' },
    { 'name': 'vulcan_salute', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f596.png' },
    { 'name': 'walking', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b6.png' },
    { 'name': 'walking_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b6.png' },
    { 'name': 'walking_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b6-2640.png' },
    { 'name': 'wallis_futuna', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fc-1f1eb.png' },
    { 'name': 'waning_crescent_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f318.png' },
    { 'name': 'waning_gibbous_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f316.png' },
    { 'name': 'warning', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26a0.png' },
    { 'name': 'wastebasket', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5d1.png' },
    { 'name': 'watch', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/231a.png' },
    { 'name': 'water_buffalo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f403.png' },
    { 'name': 'watermelon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f349.png' },
    { 'name': 'wave', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44b.png' },
    { 'name': 'wavy_dash', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/3030.png' },
    { 'name': 'waxing_crescent_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f312.png' },
    { 'name': 'waxing_gibbous_moon', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f314.png' },
    { 'name': 'wc', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6be.png' },
    { 'name': 'weary', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f629.png' },
    { 'name': 'wedding', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f492.png' },
    { 'name': 'weight_lifting_man', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cb.png' },
    { 'name': 'weight_lifting_woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cb-2640.png' },
    { 'name': 'western_sahara', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1ed.png' },
    { 'name': 'whale', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f433.png' },
    { 'name': 'whale2', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40b.png' },
    { 'name': 'wheel_of_dharma', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2638.png' },
    { 'name': 'wheelchair', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/267f.png' },
    { 'name': 'white_check_mark', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2705.png' },
    { 'name': 'white_circle', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26aa.png' },
    { 'name': 'white_flag', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f3.png' },
    { 'name': 'white_flower', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ae.png' },
    { 'name': 'white_large_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b1c.png' },
    { 'name': 'white_medium_small_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fd.png' },
    { 'name': 'white_medium_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fb.png' },
    { 'name': 'white_small_square', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25ab.png' },
    { 'name': 'white_square_button', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f533.png' },
    { 'name': 'wilted_flower', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f940.png' },
    { 'name': 'wind_chime', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f390.png' },
    { 'name': 'wind_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32c.png' },
    { 'name': 'wine_glass', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f377.png' },
    { 'name': 'wink', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f609.png' },
    { 'name': 'wolf', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43a.png' },
    { 'name': 'woman', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469.png' },
    { 'name': 'woman_artist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3a8.png' },
    { 'name': 'woman_astronaut', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f680.png' },
    { 'name': 'woman_cartwheeling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f938-2640.png' },
    { 'name': 'woman_cook', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f373.png' },
    { 'name': 'woman_facepalming', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f926-2640.png' },
    { 'name': 'woman_factory_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3ed.png' },
    { 'name': 'woman_farmer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f33e.png' },
    { 'name': 'woman_firefighter', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f692.png' },
    { 'name': 'woman_health_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2695.png' },
    { 'name': 'woman_judge', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2696.png' },
    { 'name': 'woman_juggling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f939-2640.png' },
    { 'name': 'woman_mechanic', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f527.png' },
    { 'name': 'woman_office_worker', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f4bc.png' },
    { 'name': 'woman_pilot', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2708.png' },
    { 'name': 'woman_playing_handball', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93e-2640.png' },
    { 'name': 'woman_playing_water_polo', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93d-2640.png' },
    { 'name': 'woman_scientist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f52c.png' },
    { 'name': 'woman_shrugging', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f937-2640.png' },
    { 'name': 'woman_singer', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3a4.png' },
    { 'name': 'woman_student', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f393.png' },
    { 'name': 'woman_teacher', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3eb.png' },
    { 'name': 'woman_technologist', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f4bb.png' },
    { 'name': 'woman_with_turban', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f473-2640.png' },
    { 'name': 'womans_clothes', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45a.png' },
    { 'name': 'womans_hat', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f452.png' },
    { 'name': 'women_wrestling', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93c-2640.png' },
    { 'name': 'womens', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ba.png' },
    { 'name': 'world_map', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fa.png' },
    { 'name': 'worried', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61f.png' },
    { 'name': 'wrench', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f527.png' },
    { 'name': 'writing_hand', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270d.png' },
    { 'name': 'x', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/274c.png' },
    { 'name': 'yellow_heart', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49b.png' },
    { 'name': 'yemen', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fe-1f1ea.png' },
    { 'name': 'yen', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b4.png' },
    { 'name': 'yin_yang', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/262f.png' },
    { 'name': 'yum', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60b.png' },
    { 'name': 'zambia', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ff-1f1f2.png' },
    { 'name': 'zap', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26a1.png' },
    { 'name': 'zero', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0030-20e3.png' },
    { 'name': 'zimbabwe', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ff-1f1fc.png' },
    { 'name': 'zipper_mouth_face', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f910.png' },
    { 'name': 'zzz', 'url': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a4.png' }
];
/* harmony default export */ __webpack_exports__["a"] = (emojisList);


/***/ }),

/***/ "../../../../../src/app/model/fontawesome-icons-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var faIconsList = ['500px', 'adjust', 'adn', 'align-center', 'align-justify', 'align-left', 'align-right', 'amazon', 'ambulance',
    'anchor', 'android', 'angellist', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down',
    'angle-left', 'angle-right', 'angle-up', 'apple', 'archive', 'area-chart', 'arrow-circle-down', 'arrow-circle-left',
    'arrow-circle-o-down', 'arrow-circle-o-left', 'arrow-circle-o-right', 'arrow-circle-o-up', 'arrow-circle-right', 'arrow-circle-up',
    'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows', 'arrows-alt', 'arrows-h', 'arrows-v', 'asterisk', 'at', 'automobile',
    'backward', 'balance-scale', 'ban', 'bank', 'bar-chart', 'bar-chart-o', 'barcode', 'bars', 'battery-0', 'battery-1', 'battery-2',
    'battery-3', 'battery-4', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter', 'battery-three-quarters', 'bed',
    'beer', 'behance', 'behance-square', 'bell', 'bell-o', 'bell-slash', 'bell-slash-o', 'bicycle', 'binoculars', 'birthday-cake',
    'bitbucket', 'bitbucket-square', 'bitcoin', 'black-tie', 'bluetooth', 'bluetooth-b', 'bold', 'bolt', 'bomb', 'book', 'bookmark',
    'bookmark-o', 'briefcase', 'btc', 'bug', 'building', 'building-o', 'bullhorn', 'bullseye', 'bus', 'buysellads', 'cab',
    'calculator', 'calendar', 'calendar-check-o', 'calendar-minus-o', 'calendar-o', 'calendar-plus-o', 'calendar-times-o',
    'camera', 'camera-retro', 'car', 'caret-down', 'caret-left', 'caret-right', 'caret-square-o-down', 'caret-square-o-left',
    'caret-square-o-right', 'caret-square-o-up', 'caret-up', 'cart-arrow-down', 'cart-plus', 'cc', 'cc-amex', 'cc-diners-club',
    'cc-discover', 'cc-jcb', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'certificate', 'chain', 'chain-broken',
    'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'chevron-circle-down', 'chevron-circle-left',
    'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child',
    'chrome', 'circle', 'circle-o', 'circle-o-notch', 'circle-thin', 'clipboard', 'clock-o', 'clone', 'close', 'cloud',
    'cloud-download', 'cloud-upload', 'cny', 'code', 'code-fork', 'codepen', 'codiepie', 'coffee', 'cog', 'cogs', 'columns',
    'comment', 'comment-o', 'commenting', 'commenting-o', 'comments', 'comments-o', 'compass', 'compress', 'connectdevelop',
    'contao', 'copy', 'copyright', 'creative-commons', 'credit-card', 'credit-card-alt', 'crop', 'crosshairs', 'css3', 'cube',
    'cubes', 'cut', 'cutlery', 'dashboard', 'dashcube', 'database', 'dedent', 'delicious', 'desktop', 'deviantart', 'diamond', 'digg',
    'dollar', 'dot-circle-o', 'download', 'dribbble', 'dropbox', 'drupal', 'edge', 'edit', 'eject', 'ellipsis-h', 'ellipsis-v', 'empire',
    'envelope', 'envelope-o', 'envelope-square', 'eraser', 'eur', 'euro', 'exchange', 'exclamation', 'exclamation-circle',
    'exclamation-triangle', 'expand', 'expeditedssl', 'external-link', 'external-link-square', 'eye', 'eye-slash', 'eyedropper', 'facebook',
    'facebook-f', 'facebook-official', 'facebook-square', 'fast-backward', 'fast-forward', 'fax', 'feed', 'female', 'fighter-jet', 'file',
    'file-archive-o', 'file-audio-o', 'file-code-o', 'file-excel-o', 'file-image-o', 'file-movie-o', 'file-o', 'file-pdf-o', 'file-photo-o',
    'file-picture-o', 'file-powerpoint-o', 'file-sound-o', 'file-text', 'file-text-o', 'file-video-o', 'file-word-o', 'file-zip-o',
    'files-o', 'film', 'filter', 'fire', 'fire-extinguisher', 'firefox', 'flag', 'flag-checkered', 'flag-o', 'flash', 'flask', 'flickr',
    'floppy-o', 'folder', 'folder-o', 'folder-open', 'folder-open-o', 'font', 'fonticons', 'fort-awesome', 'forumbee', 'forward',
    'foursquare', 'frown-o', 'futbol-o', 'gamepad', 'gavel', 'gbp', 'ge', 'gear', 'gears', 'genderless', 'get-pocket', 'gg', 'gg-circle',
    'gift', 'git', 'git-square', 'github', 'github-alt', 'github-square', 'gittip', 'glass', 'globe', 'google', 'google-plus',
    'google-plus-square', 'google-wallet', 'graduation-cap', 'gratipay', 'group', 'h-square', 'hacker-news', 'hand-grab-o',
    'hand-lizard-o', 'hand-o-down', 'hand-o-left', 'hand-o-right', 'hand-o-up', 'hand-paper-o', 'hand-peace-o', 'hand-pointer-o',
    'hand-rock-o', 'hand-scissors-o', 'hand-spock-o', 'hand-stop-o', 'hashtag', 'hdd-o', 'header', 'headphones', 'heart', 'heart-o',
    'heartbeat', 'history', 'home', 'hospital-o', 'hotel', 'hourglass', 'hourglass-1', 'hourglass-2', 'hourglass-3', 'hourglass-end',
    'hourglass-half', 'hourglass-o', 'hourglass-start', 'houzz', 'html5', 'i-cursor', 'ils', 'image', 'inbox', 'indent', 'industry',
    'info', 'info-circle', 'inr', 'instagram', 'institution', 'internet-explorer', 'intersex', 'ioxhost', 'italic', 'joomla', 'jpy',
    'jsfiddle', 'key', 'keyboard-o', 'krw', 'language', 'laptop', 'lastfm', 'lastfm-square', 'leaf', 'leanpub', 'legal', 'lemon-o',
    'level-down', 'level-up', 'life-bouy', 'life-buoy', 'life-ring', 'life-saver', 'lightbulb-o', 'line-chart', 'link', 'linkedin',
    'linkedin-square', 'linux', 'list', 'list-alt', 'list-ol', 'list-ul', 'location-arrow', 'lock', 'long-arrow-down', 'long-arrow-left',
    'long-arrow-right', 'long-arrow-up', 'magic', 'magnet', 'mail-forward', 'mail-reply', 'mail-reply-all', 'male', 'map', 'map-marker',
    'map-o', 'map-pin', 'map-signs', 'mars', 'mars-double', 'mars-stroke', 'mars-stroke-h', 'mars-stroke-v', 'maxcdn', 'meanpath', 'medium',
    'medkit', 'meh-o', 'mercury', 'microphone', 'microphone-slash', 'minus', 'minus-circle', 'minus-square', 'minus-square-o', 'mixcloud',
    'mobile', 'mobile-phone', 'modx', 'money', 'moon-o', 'mortar-board', 'motorcycle', 'mouse-pointer', 'music', 'navicon', 'neuter',
    'newspaper-o', 'object-group', 'object-ungroup', 'odnoklassniki', 'odnoklassniki-square', 'opencart', 'openid', 'opera',
    'optin-monster', 'outdent', 'pagelines', 'paint-brush', 'paper-plane', 'paper-plane-o', 'paperclip', 'paragraph', 'paste',
    'pause', 'pause-circle', 'pause-circle-o', 'paw', 'paypal', 'pencil', 'pencil-square', 'pencil-square-o', 'percent', 'phone',
    'phone-square', 'photo', 'picture-o', 'pie-chart', 'pied-piper', 'pied-piper-alt', 'pinterest', 'pinterest-p', 'pinterest-square',
    'plane', 'play', 'play-circle', 'play-circle-o', 'plug', 'plus', 'plus-circle', 'plus-square', 'plus-square-o', 'power-off',
    'print', 'product-hunt', 'puzzle-piece', 'qq', 'qrcode', 'question', 'question-circle', 'quote-left', 'quote-right', 'ra',
    'random', 'rebel', 'recycle', 'reddit', 'reddit-alien', 'reddit-square', 'refresh', 'registered', 'remove', 'renren', 'reorder',
    'repeat', 'reply', 'reply-all', 'retweet', 'rmb', 'road', 'rocket', 'rotate-left', 'rotate-right', 'rouble', 'rss', 'rss-square',
    'rub', 'ruble', 'rupee', 'safari', 'save', 'scissors', 'scribd', 'search', 'search-minus', 'search-plus', 'sellsy', 'send', 'send-o',
    'server', 'share', 'share-alt', 'share-alt-square', 'share-square', 'share-square-o', 'shekel', 'sheqel', 'shield', 'ship',
    'shirtsinbulk', 'shopping-bag', 'shopping-basket', 'shopping-cart', 'sign-in', 'sign-out', 'signal', 'simplybuilt', 'sitemap',
    'skyatlas', 'skype', 'slack', 'sliders', 'slideshare', 'smile-o', 'soccer-ball-o', 'sort', 'sort-alpha-asc', 'sort-alpha-desc',
    'sort-amount-asc', 'sort-amount-desc', 'sort-asc', 'sort-desc', 'sort-down', 'sort-numeric-asc', 'sort-numeric-desc', 'sort-up',
    'soundcloud', 'space-shuttle', 'spinner', 'spoon', 'spotify', 'square', 'square-o', 'stack-exchange', 'stack-overflow', 'star',
    'star-half', 'star-half-empty', 'star-half-full', 'star-half-o', 'star-o', 'steam', 'steam-square', 'step-backward', 'step-forward',
    'stethoscope', 'sticky-note', 'sticky-note-o', 'stop', 'stop-circle', 'stop-circle-o', 'street-view', 'strikethrough', 'stumbleupon',
    'stumbleupon-circle', 'subscript', 'subway', 'suitcase', 'sun-o', 'superscript', 'support', 'table', 'tablet', 'tachometer', 'tag',
    'tags', 'tasks', 'taxi', 'television', 'tencent-weibo', 'terminal', 'text-height', 'text-width', 'th', 'th-large', 'th-list',
    'thumb-tack', 'thumbs-down', 'thumbs-o-down', 'thumbs-o-up', 'thumbs-up', 'ticket', 'times', 'times-circle', 'times-circle-o',
    'tint', 'toggle-down', 'toggle-left', 'toggle-off', 'toggle-on', 'toggle-right', 'toggle-up', 'trademark', 'train', 'transgender',
    'transgender-alt', 'trash', 'trash-o', 'tree', 'trello', 'tripadvisor', 'trophy', 'truck', 'try', 'tty', 'tumblr', 'tumblr-square',
    'turkish-lira', 'tv', 'twitch', 'twitter', 'twitter-square', 'umbrella', 'underline', 'undo', 'university', 'unlink', 'unlock',
    'unlock-alt', 'unsorted', 'upload', 'usb', 'usd', 'user', 'user-md', 'user-plus', 'user-secret', 'user-times', 'users', 'venus',
    'venus-double', 'venus-mars', 'viacoin', 'video-camera', 'vimeo', 'vimeo-square', 'vine', 'vk', 'volume-down', 'volume-off',
    'volume-up', 'warning', 'wechat', 'weibo', 'weixin', 'whatsapp', 'wheelchair', 'wifi', 'wikipedia-w', 'windows', 'won',
    'wordpress', 'wrench', 'xing', 'xing-square', 'y-combinator', 'y-combinator-square', 'yahoo', 'yc', 'yc-square', 'yelp',
    'yen', 'youtube', 'youtube-play', 'youtube-square'];
/* harmony default export */ __webpack_exports__["a"] = (faIconsList);


/***/ }),

/***/ "../../../../../src/app/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/** Models a User object */
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/markdown-convertor/markdown-convertor.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownConvertorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MarkdownConvertorPipe = (function () {
    function MarkdownConvertorPipe() {
    }
    MarkdownConvertorPipe.prototype.transform = function (value) {
        if (value) {
            return toMarkdown(value, {
                gfm: true,
                converters: [
                    // list of convertors: HTML tags to Markdown elements
                    {
                        // strike-through element conversion
                        filter: 'span',
                        replacement: function (content, node) {
                            if (node.getAttribute('style') === 'text-decoration: line-through;') {
                                return '~~' + content + '~~';
                            }
                            else {
                                return content;
                            }
                        }
                    },
                    {
                        // table element conversion
                        filter: 'table',
                        replacement: function (content, node) {
                            // padding for cells
                            var cells = content.split('|');
                            var largestCell = cells.reduce(function (r, i) { return i.length > r ? i.length : r; }, 0);
                            cells = cells.map(function (i) {
                                if (i.length === 0 || i === '\n') {
                                    return i;
                                }
                                else {
                                    return i + ' '.repeat(largestCell - i.length);
                                }
                            });
                            content = cells.join('|');
                            var firstRow = content.substring(0, content.indexOf('\n', 1));
                            var colCount = firstRow.split('|').length - 2;
                            var headerRow = '\n';
                            var headerCellContent = '-'.repeat(largestCell);
                            // check for alignment
                            for (var i = 0; i < colCount; i++) {
                                var cellMarkdown = '|' + headerCellContent;
                                if (node.rows[0].cells[i].align === 'right') {
                                    cellMarkdown = '|' + headerCellContent.substring(0, largestCell - 1) + ':';
                                }
                                else if (node.rows[0].cells[i].align === 'center') {
                                    cellMarkdown = '|:' + headerCellContent.substring(0, largestCell - 2) + ':';
                                }
                                headerRow += cellMarkdown;
                            }
                            headerRow += '|';
                            content = content.replace(firstRow, firstRow + headerRow);
                            return content;
                        }
                    },
                    {
                        // code element conversion
                        filter: 'pre',
                        replacement: function (content, node) {
                            if (node.getAttribute('class') && node.getAttribute('class').indexOf('language-') > -1) {
                                var lang = node.getAttribute('class').replace('language-', '');
                                lang = lang === 'NA' ? '' : lang;
                                return '```' + (lang || '') + '\n' + content.replace('<code>', '').replace('</code>', '') + '\n```';
                            }
                            else {
                                return content;
                            }
                        }
                    },
                    {
                        // img element conversion
                        filter: 'img',
                        replacement: function (content, node) {
                            var src = $(node).attr('src');
                            var alt = $(node).attr('alt');
                            var emoji = $(node).attr('data-emoji');
                            if (emoji) {
                                return ':' + emoji + ':';
                            }
                            else {
                                return '![' + (alt || '') + '](' + (src || '') + ')';
                            }
                        }
                    }
                ]
            });
        }
        else {
            return '';
        }
    };
    MarkdownConvertorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'markdownConvertor'
        })
    ], MarkdownConvertorPipe);
    return MarkdownConvertorPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/string-filter/string-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringFilterPipe = (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (items, filter, key) {
        if (!items || !filter) {
            return items;
        }
        else {
            filter = filter.toLowerCase();
            var filteredItems = [];
            if (key) {
                filteredItems = items.filter(function (i) { return i[key].toLowerCase().indexOf(filter) > -1; });
            }
            else {
                filteredItems = items.filter(function (i) { return i.toLowerCase().indexOf(filter) > -1; });
            }
            return filteredItems;
        }
    };
    StringFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_service_client__ = __webpack_require__("../../../../../src/app/services/error-handler.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, userService, errorHandlerService) {
        this.router = router;
        this.userService = userService;
        this.errorHandlerService = errorHandlerService;
        this.api = {
            'getLoggedInUser': this.getLoggedInUser,
            'setLoggedInUser': this.setLoggedInUser,
            'login': this.login,
            'logout': this.logout
        };
    }
    AuthService.prototype.canActivate = function () {
        return this.checkLoggedIn();
    };
    /**
     * Check if user is logged in
     * @returns logged in user object; null, if user is not logged in
     */
    AuthService.prototype.getLoggedInUser = function () {
        this.loggedInUser = this.loggedInUser || JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.loggedInUser) {
            return Object.assign({}, this.loggedInUser);
        }
        else {
            return null;
        }
    };
    /** Set user as logged in user */
    AuthService.prototype.setLoggedInUser = function (user) {
        this.loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    };
    /**
     * Login user
     * @param username username
     * @param password password
     * @returns logged in user; null if login fails
     */
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.userService.login(username, password)
                .subscribe(function (loggedInUser) {
                console.log(loggedInUser);
                _this.setLoggedInUser(loggedInUser);
                observer.next(Object.assign({}, loggedInUser));
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return obs;
    };
    /**
     *  Check if user is logged in
     * @returns subscription that resolves to true if the user is logged in, false otherwise
     */
    AuthService.prototype.checkLoggedIn = function (disableRedirect) {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.userService.loggedIn()
                .subscribe(function (res) {
                if (res) {
                    _this.setLoggedInUser(res);
                    observer.next(true);
                    observer.complete();
                }
                else {
                    _this.loggedInUser = null;
                    localStorage.removeItem('loggedInUser');
                    if (!disableRedirect) {
                        _this.router.navigate(['/login']);
                    }
                    observer.next(false);
                    observer.complete();
                }
            }, function (err) {
                console.log(err);
                observer.next(false);
                observer.complete();
            });
        });
        return obs;
    };
    /**
     * Logout user
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (res) {
            _this.loggedInUser = null;
            localStorage.removeItem('loggedInUser');
            _this.router.navigate(['/editor']);
        }, function (err) {
            _this.errorHandlerService.handleError('Oops! Strange! Can\'t log you out!', err);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__error_handler_service_client__["a" /* ErrorHandlerService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/error-handler.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandlerService = (function () {
    function ErrorHandlerService(interactionsService) {
        this.interactionsService = interactionsService;
    }
    /**
     * Get friendly error messag from error
     * @param err Error object
     */
    ErrorHandlerService.prototype.getErrorMessage = function (err) {
        if (err instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            return err.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            var errText = '';
            try {
                errText = JSON.parse(err.error);
            }
            catch (ex) {
                errText = "code: " + err.status + " | error: " + err.message;
            }
            return errText;
        }
    };
    /**
     * Handle error
     * @param contextMessage Message regardin the context where the error occured
     * @param err Error object
     * @param autoHide true, to autohide alert error popup
     */
    ErrorHandlerService.prototype.handleError = function (contextMessage, err, autoHide) {
        console.error(contextMessage, err);
        var errMessage = this.getErrorMessage(err);
        var alertText = contextMessage + " </br> <span> " + errMessage + " </span>";
        this.interactionsService.showAlert(alertText, 'danger', autoHide);
    };
    ErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__interactions_service_client__["a" /* InteractionsService */]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/iconsearch.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IconSearchService = (function () {
    function IconSearchService(http) {
        this.http = http;
        // properties
        this.api = {
            'getIconFinderApiKey': this.getIconFinderApiKey,
            'search': this.search
        };
        this.endpoint = {
            'getApiKey': __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/iconsearch/iconfinder/ApiKey',
            'search': 'https://api.iconfinder.com/v3/icons/search?query={query}&size_minimum=128&premium=0&count=30&vector=0' +
                '&grant_type=jwt_bearer&client_id={client_id}&client_secret={client_secret}'
        };
        this.iconFinderApiKey = {
            clientId: '',
            clientSecret: ''
        };
    }
    IconSearchService.prototype.getIconFinderApiKey = function () {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            // check if api key is already available
            if (_this.iconFinderApiKey.clientId && _this.iconFinderApiKey.clientSecret) {
                observer.next(_this.iconFinderApiKey);
                observer.complete();
            }
            else {
                // api key is not locally available. get from server
                _this.http.get(_this.endpoint.getApiKey)
                    .subscribe(function (data) {
                    if (data.clientId && data.clientSecret) {
                        _this.iconFinderApiKey = data;
                        observer.next(_this.iconFinderApiKey);
                        observer.complete();
                    }
                    else {
                        var err = Error('Unable to retrieve icon search API key. Contact Adminstrator if problem persists');
                        // this.errorHanderService.handleError('Flickr Api key is required', err);
                        observer.error(err);
                    }
                }, function (err) {
                    // this.errorHanderService.handleError('Oops! Error getting Flickr API key from server', err);
                    observer.error(err);
                });
            }
        });
        return obs;
    };
    IconSearchService.prototype.search = function (keyword) {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            if (keyword) {
                _this.getIconFinderApiKey().subscribe(function (apiKey) {
                    var url = _this.endpoint.search
                        .replace('{query}', keyword)
                        .replace('{client_id}', apiKey.clientId)
                        .replace('{client_secret}', apiKey.clientSecret);
                    _this.http.get(url).subscribe(function (data) {
                        var result = {
                            count: 0,
                            icons: []
                        };
                        result.count = data.total_count;
                        if (data.icons) {
                            data.icons.forEach(function (i) {
                                var latestSizeIcon = i.raster_sizes[i.raster_sizes.length - 1];
                                if (latestSizeIcon && latestSizeIcon.formats[0].preview_url) {
                                    var availableSizes = i.raster_sizes.map(function (s) { return ({ size: s.size, url: s.formats[0].preview_url }); });
                                    result.icons.push({ url: latestSizeIcon.formats[0].preview_url, sizes: availableSizes });
                                }
                            });
                        }
                        observer.next(result);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                    });
                }, function (err) {
                    observer.error(err);
                });
            }
            else {
                observer.error('Keyword cannot be empty.');
            }
        });
        return obs;
    };
    IconSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IconSearchService);
    return IconSearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/interactions.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteractionsService = (function () {
    function InteractionsService() {
        // properties
        // event callback mapping; key: event name, value: array of registered callbacks
        this.callbacks = new Map();
        // queued fire callback requests; key: event, value: array of data objects sent
        this.queue = new Map();
        this.api = {
            'registerCallback': this.registerCallback,
            'invoke': this.invoke
        };
    }
    /**
     * Register callback for a specific event
     * @param name name of the event to subscribe to
     * @param callback callback function to be invoked with the event occurs
     * @param clear clear all existing callbacks for the given name
     */
    InteractionsService.prototype.registerCallback = function (name, callback, clear) {
        var _this = this;
        // create callback array if it doest not already exist
        if (!this.callbacks[name] || clear) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
        // fire any requests already received
        if (this.queue[name]) {
            this.queue[name].forEach(function (q) {
                _this.invoke(name, q);
            });
            this.queue[name] = [];
        }
    };
    /**
     * Invoke all registered callback for the specified event
     * @param name name of the event
     */
    InteractionsService.prototype.invoke = function (name, data) {
        // invoke callbacks if exist
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(function (c) {
                try {
                    c(data);
                }
                catch (ex) {
                    console.log('Error invoking callback function for event ' + name);
                }
            });
        }
        else {
            // enqueue request
            if (!this.queue[name]) {
                this.queue[name] = [];
            }
            this.queue[name].push(data);
        }
    };
    /**
     * Show alert
     * @param text alert text
     * @param type alert type. bootstrap context classes are supported
     * @param autoClose auto close after a delay
     */
    InteractionsService.prototype.showAlert = function (text, type, autoClose) {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* AppConstants */].EVENTS.showAlert, { text: text, type: type, autoClose: autoClose });
    };
    /**
     * Show / hide loading screen
     * @param show true, to show; false, to hide
     */
    InteractionsService.prototype.showLoader = function (show) {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* AppConstants */].EVENTS.showLoader, show);
    };
    InteractionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InteractionsService);
    return InteractionsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.api = {
            'login': this.login,
            'logout': this.logout,
            'loggedIn': this.loggedIn,
            'register': this.register,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
        this.endpoint = {
            'login': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/login',
            'logout': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/logout',
            'loggedIn': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/loggedIn',
            'register': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/register',
            'findUserByUsername': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}',
            'findUserByCredentials': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}&password={password}',
            'findUserById': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'updateUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'deleteUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}'
        };
    }
    // #region: Authentication
    /**
     * Login user
     * @param username username
     * @param password password
     */
    UserService.prototype.login = function (username, password) {
        var url = this.endpoint.login;
        var creds = {
            username: username,
            password: password
        };
        return this.http.post(url, creds, { withCredentials: true });
    };
    /** Logout user */
    UserService.prototype.logout = function () {
        var url = this.endpoint.logout;
        return this.http.post(url, '', { withCredentials: true });
    };
    /** Check if current user is logged in */
    UserService.prototype.loggedIn = function () {
        var url = this.endpoint.loggedIn;
        return this.http.post(url, '', { withCredentials: true });
    };
    //#endregion: Authentication
    /**
       * Register new user
       * @param username username
       * @param password password
       */
    UserService.prototype.register = function (username, password) {
        var url = this.endpoint.register;
        var creds = {
            username: username,
            password: password
        };
        return this.http.post(url, creds, { withCredentials: true });
    };
    /**
     * Find user by user id
     * @param userId id of the user
     * @returns Observable that resolves to user with the specifed id; null if id doesn't exist
     */
    UserService.prototype.findUserById = function (userId) {
        var url = this.endpoint.findUserById.replace('{userId}', userId);
        return this.http.get(url);
    };
    /**
     * Find user by user name
     * @param username username of the user
     * @returns Observable that resolves to user with the specifed username; null if id doesn't exist
     */
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.endpoint.findUserByUsername.replace('{username}', username);
        return this.http.get(url);
    };
    /**
     * Find user by credentials
     * @param username username of the user
     * @param password password of the user
     * @returns Observable that resolves to user with the specifed username; null if id doesn't exist
     */
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.endpoint.findUserByCredentials
            .replace('{username}', username)
            .replace('{password}', password);
        return this.http.get(url);
    };
    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param user updated user object
     * @returns Observable that resolves to updated user object
     */
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.endpoint.updateUser.replace('{userId}', userId);
        return this.http.put(url, user);
    };
    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns Observable that resolves to deleted user object
     */
    UserService.prototype.deleteUser = function (userId) {
        var url = this.endpoint.deleteUser.replace('{userId}', userId);
        return this.http.delete(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/utils.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilService = (function () {
    function UtilService() {
        // properties
        this.resizeEndpoint = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url={url}&container=focus&resize_w={w}&resize_h={h}';
    }
    /**
     * Get resizable URL of image
     * @param url url of image
     * @param width width of the image
     * @param height height of the image
     */
    UtilService.prototype.getResizedImgUrl = function (url, width, height) {
        if (!width && !height) {
            return url;
        }
        else {
            return this.resizeEndpoint
                .replace('{url}', url)
                .replace('{w}', Math.round(width).toString())
                .replace('{h}', Math.round(height).toString());
        }
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "../../../../../src/assets/github-markdown.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Primer-product\r\n * http://primercss.io\r\n *\r\n * Released under MIT license. Copyright 2015 GitHub, Inc.\r\n */\r\n markdown-body {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n    word-wrap: break-word\r\n}\r\n\r\n.markdown-body::before {\r\n    display: table;\r\n    content: \"\"\r\n}\r\n\r\n.markdown-body::after {\r\n    display: table;\r\n    clear: both;\r\n    content: \"\"\r\n}\r\n\r\n.markdown-body>*:first-child {\r\n    margin-top: 0 !important\r\n}\r\n\r\n.markdown-body>*:last-child {\r\n    margin-bottom: 0 !important\r\n}\r\n\r\n.markdown-body a:not([href]) {\r\n    color: inherit;\r\n    text-decoration: none\r\n}\r\n\r\n.markdown-body .absent {\r\n    color: #cb2431\r\n}\r\n\r\n.markdown-body .anchor {\r\n    float: left;\r\n    padding-right: 4px;\r\n    margin-left: -20px;\r\n    line-height: 1\r\n}\r\n\r\n.markdown-body .anchor:focus {\r\n    outline: none\r\n}\r\n\r\n.markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre {\r\n    margin-top: 0;\r\n    margin-bottom: 16px\r\n}\r\n\r\n.markdown-body hr {\r\n    height: 0.25em;\r\n    padding: 0;\r\n    margin: 24px 0;\r\n    background-color: #e1e4e8;\r\n    border: 0\r\n}\r\n\r\n.markdown-body blockquote {\r\n    padding: 0 1em;\r\n    color: #6a737d;\r\n    border-left: 0.25em solid #dfe2e5\r\n}\r\n\r\n.markdown-body blockquote>:first-child {\r\n    margin-top: 0\r\n}\r\n\r\n.markdown-body blockquote>:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.markdown-body kbd {\r\n    display: inline-block;\r\n    padding: 3px 5px;\r\n    font-size: 11px;\r\n    line-height: 10px;\r\n    color: #444d56;\r\n    vertical-align: middle;\r\n    background-color: #fafbfc;\r\n    border: solid 1px #c6cbd1;\r\n    border-bottom-color: #959da5;\r\n    border-radius: 3px;\r\n    box-shadow: inset 0 -1px 0 #959da5\r\n}\r\n\r\n.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6 {\r\n    margin-top: 24px;\r\n    margin-bottom: 16px;\r\n    font-weight: 600;\r\n    line-height: 1.25\r\n}\r\n\r\n.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link {\r\n    color: #1b1f23;\r\n    vertical-align: middle;\r\n    visibility: hidden\r\n}\r\n\r\n.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor {\r\n    text-decoration: none\r\n}\r\n\r\n.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link {\r\n    visibility: visible\r\n}\r\n\r\n.markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code {\r\n    font-size: inherit\r\n}\r\n\r\n.markdown-body h1 {\r\n    padding-bottom: 0.3em;\r\n    font-size: 2em;\r\n    border-bottom: 1px solid #eaecef\r\n}\r\n\r\n.markdown-body h2 {\r\n    padding-bottom: 0.3em;\r\n    font-size: 1.5em;\r\n    border-bottom: 1px solid #eaecef\r\n}\r\n\r\n.markdown-body h3 {\r\n    font-size: 1.25em\r\n}\r\n\r\n.markdown-body h4 {\r\n    font-size: 1em\r\n}\r\n\r\n.markdown-body h5 {\r\n    font-size: 0.875em\r\n}\r\n\r\n.markdown-body h6 {\r\n    font-size: 0.85em;\r\n    color: #6a737d\r\n}\r\n\r\n.markdown-body ul,.markdown-body ol {\r\n    padding-left: 2em\r\n}\r\n\r\n.markdown-body ul.no-list,.markdown-body ol.no-list {\r\n    padding: 0;\r\n    list-style-type: none\r\n}\r\n\r\n.markdown-body ul ul,.markdown-body ul ol,.markdown-body ol ol,.markdown-body ol ul {\r\n    margin-top: 0;\r\n    margin-bottom: 0\r\n}\r\n\r\n.markdown-body li>p {\r\n    margin-top: 16px\r\n}\r\n\r\n.markdown-body li+li {\r\n    margin-top: 0.25em\r\n}\r\n\r\n.markdown-body dl {\r\n    padding: 0\r\n}\r\n\r\n.markdown-body dl dt {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    font-size: 1em;\r\n    font-style: italic;\r\n    font-weight: 600\r\n}\r\n\r\n.markdown-body dl dd {\r\n    padding: 0 16px;\r\n    margin-bottom: 16px\r\n}\r\n\r\n.markdown-body table {\r\n    display: block;\r\n    width: 100%;\r\n    overflow: auto\r\n}\r\n\r\n.markdown-body table th {\r\n    font-weight: 600\r\n}\r\n\r\n.markdown-body table th,.markdown-body table td {\r\n    padding: 6px 13px;\r\n    border: 1px solid #dfe2e5\r\n}\r\n\r\n.markdown-body table tr {\r\n    background-color: #fff;\r\n    border-top: 1px solid #c6cbd1\r\n}\r\n\r\n.markdown-body table tr:nth-child(2n) {\r\n    background-color: #f6f8fa\r\n}\r\n\r\n.markdown-body table img {\r\n    background-color: transparent\r\n}\r\n\r\n.markdown-body img {\r\n    max-width: 100%;\r\n    box-sizing: content-box;\r\n    background-color: #fff\r\n}\r\n\r\n.markdown-body img[align=right] {\r\n    padding-left: 20px\r\n}\r\n\r\n.markdown-body img[align=left] {\r\n    padding-right: 20px\r\n}\r\n\r\n.markdown-body .emoji {\r\n    max-width: none;\r\n    vertical-align: text-top;\r\n    background-color: transparent\r\n}\r\n\r\n.markdown-body span.frame {\r\n    display: block;\r\n    overflow: hidden\r\n}\r\n\r\n.markdown-body span.frame>span {\r\n    display: block;\r\n    float: left;\r\n    width: auto;\r\n    padding: 7px;\r\n    margin: 13px 0 0;\r\n    overflow: hidden;\r\n    border: 1px solid #dfe2e5\r\n}\r\n\r\n.markdown-body span.frame span img {\r\n    display: block;\r\n    float: left\r\n}\r\n\r\n.markdown-body span.frame span span {\r\n    display: block;\r\n    padding: 5px 0 0;\r\n    clear: both;\r\n    color: #24292e\r\n}\r\n\r\n.markdown-body span.align-center {\r\n    display: block;\r\n    overflow: hidden;\r\n    clear: both\r\n}\r\n\r\n.markdown-body span.align-center>span {\r\n    display: block;\r\n    margin: 13px auto 0;\r\n    overflow: hidden;\r\n    text-align: center\r\n}\r\n\r\n.markdown-body span.align-center span img {\r\n    margin: 0 auto;\r\n    text-align: center\r\n}\r\n\r\n.markdown-body span.align-right {\r\n    display: block;\r\n    overflow: hidden;\r\n    clear: both\r\n}\r\n\r\n.markdown-body span.align-right>span {\r\n    display: block;\r\n    margin: 13px 0 0;\r\n    overflow: hidden;\r\n    text-align: right\r\n}\r\n\r\n.markdown-body span.align-right span img {\r\n    margin: 0;\r\n    text-align: right\r\n}\r\n\r\n.markdown-body span.float-left {\r\n    display: block;\r\n    float: left;\r\n    margin-right: 13px;\r\n    overflow: hidden\r\n}\r\n\r\n.markdown-body span.float-left span {\r\n    margin: 13px 0 0\r\n}\r\n\r\n.markdown-body span.float-right {\r\n    display: block;\r\n    float: right;\r\n    margin-left: 13px;\r\n    overflow: hidden\r\n}\r\n\r\n.markdown-body span.float-right>span {\r\n    display: block;\r\n    margin: 13px auto 0;\r\n    overflow: hidden;\r\n    text-align: right\r\n}\r\n\r\n.markdown-body code,.markdown-body tt {\r\n    padding: 0;\r\n    padding-top: 0.2em;\r\n    padding-bottom: 0.2em;\r\n    margin: 0;\r\n    font-size: 85%;\r\n    background-color: rgba(27,31,35,0.05);\r\n    border-radius: 3px\r\n}\r\n\r\n.markdown-body code::before,.markdown-body code::after,.markdown-body tt::before,.markdown-body tt::after {\r\n    letter-spacing: -0.2em;\r\n    content: \"\\A0\"\r\n}\r\n\r\n.markdown-body code br,.markdown-body tt br {\r\n    display: none\r\n}\r\n\r\n.markdown-body del code {\r\n    text-decoration: inherit\r\n}\r\n\r\n.markdown-body pre {\r\n    word-wrap: normal\r\n}\r\n\r\n.markdown-body pre>code {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-size: 100%;\r\n    word-break: normal;\r\n    white-space: pre;\r\n    background: transparent;\r\n    border: 0\r\n}\r\n\r\n.markdown-body .highlight {\r\n    margin-bottom: 16px\r\n}\r\n\r\n.markdown-body .highlight pre {\r\n    margin-bottom: 0;\r\n    word-break: normal\r\n}\r\n\r\n.markdown-body .highlight pre,.markdown-body pre {\r\n    padding: 16px;\r\n    overflow: auto;\r\n    font-size: 85%;\r\n    line-height: 1.45;\r\n    background-color: #f6f8fa;\r\n    border-radius: 3px\r\n}\r\n\r\n.markdown-body pre code,.markdown-body pre tt {\r\n    display: inline;\r\n    max-width: auto;\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow: visible;\r\n    line-height: inherit;\r\n    word-wrap: normal;\r\n    background-color: transparent;\r\n    border: 0\r\n}\r\n\r\n.markdown-body pre code::before,.markdown-body pre code::after,.markdown-body pre tt::before,.markdown-body pre tt::after {\r\n    content: normal\r\n}\r\n\r\n.markdown-body .csv-data td,.markdown-body .csv-data th {\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    text-align: left;\r\n    white-space: nowrap\r\n}\r\n\r\n.markdown-body .csv-data .blob-num {\r\n    padding: 10px 8px 9px;\r\n    text-align: right;\r\n    background: #fff;\r\n    border: 0\r\n}\r\n\r\n.markdown-body .csv-data tr {\r\n    border-top: 0\r\n}\r\n\r\n.markdown-body .csv-data th {\r\n    font-weight: 600;\r\n    background: #f6f8fa;\r\n    border-top: 0\r\n}\r\n\r\n.markdown-body table {\r\n    border:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: '',
    endpoint: {
        root: '/',
        baseUrl: '/api'
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map