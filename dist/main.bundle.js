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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_auto_height_auto_height_directive__ = __webpack_require__("../../../../../src/app/directives/auto-height/auto-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shared_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shared_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_editor_tiny_editor_tiny_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_editor_icon_search_icon_search_component__ = __webpack_require__("../../../../../src/app/components/editor/icon-search/icon-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_editor_tiny_editor_insert_code_insert_code_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.ts");
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



// editor components




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
                __WEBPACK_IMPORTED_MODULE_13__components_shared_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_shared_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_shared_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_auto_height_auto_height_directive__["a" /* AutoHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_16__components_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_editor_tiny_editor_tiny_editor_component__["a" /* TinyEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_editor_icon_search_icon_search_component__["a" /* IconSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_editor_tiny_editor_insert_code_insert_code_component__["a" /* InsertCodeComponent */]
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
                __WEBPACK_IMPORTED_MODULE_11__services_iconsearch_service_client__["a" /* IconSearchService */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_icon_search_icon_search_component__ = __webpack_require__("../../../../../src/app/components/editor/icon-search/icon-search.component.ts");



var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__["a" /* EditorComponent */], data: { skipAuth: true } },
    { path: 'iconSearch', component: __WEBPACK_IMPORTED_MODULE_2__components_editor_icon_search_icon_search_component__["a" /* IconSearchComponent */], data: { skipAuth: true } }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-markdown-element-editor {\r\n    position: relative;\r\n}\r\n\r\n.hvj-markdown-element-editor .hvj-markdown-element-title {\r\n    margin-bottom: -1px;\r\n    z-index: 0;\r\n    position: relative;\r\n}\r\n\r\n.hvj-markdown-element-editor .hvj-markdown-element-main {\r\n    z-index: 1;\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\r\n  <div class=\"col pr-md-2 editor-wrapper\">\r\n    <app-tiny-editor [(markdownHtml)]=\"markdownHtml\"></app-tiny-editor>\r\n  </div>\r\n  <div class=\"col pl-md-2 preview-wrapper\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-header bg-editor-gray\">\r\n\r\n        <ul class=\"nav nav-tabs card-header-tabs\"\r\n            role=\"tablist\">\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\"\r\n               [ngClass]=\"{'active': activeTab === 'preview' }\"\r\n               (click)=\"activeTab='preview'\"\r\n               role=\"tab\">Preview</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\"\r\n               [ngClass]=\"{'active': activeTab === 'markdown' }\"\r\n               (click)=\"activeTab='markdown'\"\r\n               role=\"tab\">Markdown</a>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"card-body\"\r\n           #previewTabBody>\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content p-2\">\r\n\r\n          <div class=\"tab-pane active show fade text-left\"\r\n               [ngClass]=\"{'show': activeTab === 'preview' }\"\r\n               role=\"tabpanel\">\r\n            <div *ngIf=\"activeTab === 'preview'\"\r\n                 class=\"tab-pane-inner\"\r\n                 [style.height.px]=\"compHeight\">\r\n              <div [innerHtml]=\"markdownHtml\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-pane active fade\"\r\n               [ngClass]=\"{'show': activeTab === 'markdown' }\"\r\n               role=\"tabpanel\">\r\n            <div *ngIf=\"activeTab === 'markdown'\"\r\n                 [style.height.px]=\"compHeight\"\r\n                 class=\"tab-pane-inner\">\r\n              <textarea class=\"w-100 h-100 border-0 markdown-preview\"\r\n                        [ngModel]=\"getMarkdown()\"\r\n                        readonly></textarea>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
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

var EditorComponent = (function () {
    function EditorComponent(zone) {
        this.zone = zone;
        this.compHeight = window.innerHeight - 131;
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.activeTab = 'preview';
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
    };
    EditorComponent.prototype.onEditorChange = function () {
        var _this = this;
        var html = this.editor.getContent();
        this.zone.run(function () {
            _this.markdownHtml = html;
        });
    };
    EditorComponent.prototype.getMarkdown = function () {
        if (this.markdownHtml) {
            return toMarkdown(this.markdownHtml, {
                gfm: true,
                converters: [
                    {
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
                        filter: 'table',
                        replacement: function (content, node) {
                            var firstRow = content.substring(0, content.indexOf('\n', 1));
                            var colCount = firstRow.split('|').length - 2;
                            var headerRow = '\n';
                            // check for alignment
                            for (var i = 0; i < colCount; i++) {
                                var cellMarkdown = '|--';
                                if (node.rows[0].cells[i].align === 'right') {
                                    cellMarkdown = '|--:';
                                }
                                else if (node.rows[0].cells[i].align === 'center') {
                                    cellMarkdown = '|:--:';
                                }
                                headerRow += cellMarkdown;
                            }
                            headerRow += '|';
                            content = content.replace(firstRow, firstRow + headerRow);
                            return content;
                        }
                    },
                    {
                        filter: 'pre',
                        replacement: function (content, node) {
                            if (node.getAttribute('class') && node.getAttribute('class').indexOf('language-') > -1) {
                                var lang = node.getAttribute('class').replace('language-', '');
                                return '```' + lang + '\n' + content.replace('<code>', '').replace('</code>', '') + '\n```';
                            }
                            else {
                                return content;
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
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/icon-search/icon-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-result-wrap .img-wrap {\r\n    width: 100px;\r\n    height: 100px;\r\n    transition: 0.1s ease-in-out;\r\n}\r\n\r\n.search-result-wrap .img-wrap:hover {\r\n   background: #EEE;\r\n   cursor: pointer;\r\n   -webkit-transform: scale(1.2);\r\n           transform: scale(1.2);\r\n}\r\n\r\n.search-result-wrap .img-wrap .img-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.preview-img-outer {\r\n    height: 512px;\r\n    position: relative;\r\n}\r\n\r\n.preview-img-outer > img {\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translateY(-50%) translateX(-50%);\r\n        transform: translateY(-50%) translateX(-50%);\r\n}\r\n\r\n.preview-img-outer .ui-wrapper {\r\n    border: dashed thin;\r\n    padding: 15px;\r\n}\r\n\r\n.preview-img-outer .aspect-ratio-toggle{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/icon-search/icon-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col text-center\">\r\n        <!-- Search box -->\r\n        <form (ngSubmit)=\"search()\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">\r\n                        Search Icons\r\n                    </span>\r\n                    <input type=\"text\"\r\n                           name=\"keyword\"\r\n                           class=\"form-control\"\r\n                           [(ngModel)]=\"keyword\"\r\n                           placeholder=\"keyword...\">\r\n                    <button type=\"submit\"\r\n                            class=\"btn btn-primary btn-sm\"\r\n                            [disabled]=\"!keyword\">Search</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <!-- Search results -->\r\n        <div class=\"search-result-wrap mt-3\">\r\n            <div *ngFor=\"let i of searchResultIcons\"\r\n                 class=\"m-1 p-2 d-inline-block img-wrap border\">\r\n                <div class=\"img-container\"\r\n                     (click)=\"selectImg(i)\"\r\n                     [style.background-image]=\"'url(' + i.url + ')'\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n        <!-- Selected Img preview -->\r\n        <div class=\"preview-wrap m-3\"\r\n             *ngIf=\"selectedImg\">\r\n            <div class=\"border p-2 w-100 preview-img-outer\">\r\n                <img id=\"preview-img\"\r\n                     [src]=\"selectedImg.selectedUrl\" />\r\n                <div *ngIf=\"selectedImg.selectedSize === 'custom'\"\r\n                     class=\"float-right text-secondary font-italic aspect-ratio-toggle\">\r\n                    <input type=\"checkbox\"\r\n                           id=\"aspecRatioToggle\"\r\n                           name=\"aspecRatioToggle\"\r\n                           [checked]=\"aspectRatioLocked\"\r\n                           (click)=\"toggleAspectRatioLock()\" />\r\n                    <label for=\"aspecRatioToggle\"> lock aspect ratio</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"dropdown mt-2\">\r\n                    <button class=\"btn btn-info form-control\"\r\n                            type=\"button\"\r\n                            data-toggle=\"dropdown\">\r\n                        Size: {{selectedImg?.selectedSize}}\r\n                        <span class=\"fa fa-caret-down pull-right mr-3\"></span>\r\n                    </button>\r\n                    <div class=\"dropdown-menu bg-faded\">\r\n                        <a class=\"dropdown-item\"\r\n                           *ngFor=\"let i of selectedImg?.sizes\"\r\n                           (click)=\"selectSize(i)\">{{i.size}}</a>\r\n                        <a class=\"dropdown-item\"\r\n                           (click)=\"selectSize('custom')\">Custom</a>\r\n                    </div>\r\n                </div>\r\n                <input type=\"text\"\r\n                       [(ngModel)]=\"selectedImg.title\"\r\n                       class=\"form-control mt-2\"\r\n                       placeholder=\"title\">\r\n                <button class=\"btn btn-success mt-2 form-control\"\r\n                        (click)=\"submit()\">\r\n                    <i class=\"fa fa-check\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <!-- Img preview placeholder -->\r\n        <div class=\"preview-placeholder\"\r\n             *ngIf=\"!selectedImg\">\r\n            <div class=\"preview-img-outer border p-2 w-100\">\r\n                <img class=\"w-50\"\r\n                     src=\"../../../assets/img-preview-placeholder.png\">\r\n            </div>\r\n            <div class=\"p-4 text-center text-secondary font-italic\">\r\n                Select an image to customize size\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/icon-search/icon-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_iconsearch_service_client__ = __webpack_require__("../../../../../src/app/services/iconsearch.service.client.ts");
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
    function IconSearchComponent(iconSearchService) {
        this.iconSearchService = iconSearchService;
        this.searchResultIcons = [];
        this.searchCount = 0;
        this.aspectRatioLocked = true;
    }
    IconSearchComponent.prototype.ngOnInit = function () {
    };
    /**
     * Search for images
     */
    IconSearchComponent.prototype.search = function () {
        var _this = this;
        if (!this.keyword) {
            return;
        }
        this.iconSearchService.search(this.keyword)
            .subscribe(function (result) {
            _this.searchResultIcons = result.icons;
            _this.searchCount = result.count;
            console.log(result);
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
        this.removeResizable();
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
            this.makeResizable();
            this.selectedImg.selectedUrl = this.selectedImg.sizes[this.selectedImg.sizes.length - 1].url;
            this.selectedImg.selectedSize = 'custom';
        }
        else {
            this.selectedImg.selectedUrl = size.url;
            this.selectedImg.selectedSize = size.size;
            this.removeResizable();
        }
    };
    IconSearchComponent.prototype.removeResizable = function () {
        if ($('#preview-img').parent().draggable('instance')) {
            $('#preview-img').parent().draggable('destroy');
        }
        if ($('#preview-img').resizable('instance')) {
            $('#preview-img').resizable('destroy');
        }
        $('#preview-img').parent().removeAttr('style');
        $('#preview-img').removeAttr('style');
    };
    IconSearchComponent.prototype.makeResizable = function () {
        this.removeResizable();
        $('#preview-img').height('50%');
        $('#preview-img').resizable({
            containment: 'parent',
            aspectRatio: this.aspectRatioLocked,
            handles: ' n, e, s, w, ne, se, sw, nw',
            maxHeight: 500,
            create: function () {
                $('#preview-img').parent().draggable({
                    containment: 'parent',
                    create: function () {
                        $('#preview-img').parent().css('top', '0');
                        $('#preview-img').parent().css('left', '0');
                    }
                });
            }
        });
    };
    IconSearchComponent.prototype.toggleAspectRatioLock = function () {
        this.aspectRatioLocked = !this.aspectRatioLocked;
        this.makeResizable();
    };
    /**
     * submit the selected image
     */
    IconSearchComponent.prototype.submit = function () {
        if (this.selectedImg.selectedSize === 'custom') {
            var url = 'https://rsz.io/' + this.selectedImg.selectedUrl.replace('https://', '').replace('http://', '');
            var width = $('#preview-img').width();
            var height = $('#preview-img').height();
            url += '?w=' + width + '&h=' + height + '&format=png';
            console.log(url);
        }
    };
    IconSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-icon-search',
            template: __webpack_require__("../../../../../src/app/components/editor/icon-search/icon-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/icon-search/icon-search.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_iconsearch_service_client__["a" /* IconSearchService */]])
    ], IconSearchComponent);
    return IconSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"form-group\">\n\n            <!-- Lang select -->\n            <div class=\"btn-group\"\n                 role=\"group\"\n                 aria-label=\"Button group with nested dropdown\">\n                <input type=\"text\"\n                       [(ngModel)]=\"data.lang\" />\n                <div class=\"btn-group\"\n                     role=\"group\">\n                    <button type=\"button\"\n                            class=\"btn btn-primary dropdown-toggle btn-sm\"\n                            data-toggle=\"dropdown\"></button>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\"\n                           href=\"#\"\n                           (click)=\"data.lang='JavaScript'\">JavaScript</a>\n                        <a class=\"dropdown-item\"\n                           href=\"#\"\n                           (click)=\"data.lang='C-sharp'\">C#</a>\n                        <a class=\"dropdown-item\"\n                           href=\"#\"\n                           (click)=\"data.lang='Java'\">Java</a>\n\n                    </div>\n                </div>\n            </div>\n\n            <!-- Code editor -->\n            <textarea appAutoHeight\n                      [(ngModel)]=\"data.code\"></textarea>\n\n        </div>\n    </div>\n</div>"

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
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    InsertCodeComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = { code: '', lang: '' };
        }
    };
    /** Emit code to parent component */
    InsertCodeComponent.prototype.submit = function () {
        this.onSubmit.emit(this.getData());
    };
    /** Get code generated by user
     * @returns formatted code tag html
     */
    InsertCodeComponent.prototype.getData = function () {
        var code = '';
        if (this.data.lang) {
            code = '<pre class="language-' + this.data.lang + '">' + (this.data.code || '') + '</pre>';
        }
        else {
            code = '<pre>' + (this.data.code || '') + '</pre>';
        }
        return code;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InsertCodeComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('onSubmit'),
        __metadata("design:type", Object)
    ], InsertCodeComponent.prototype, "onSubmit", void 0);
    InsertCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor-insert-code',
            template: __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], InsertCodeComponent);
    return InsertCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tiny-editor .mce-toolbar-grp {\r\n    padding: 8px 0px;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-btn button {\r\n    padding: 4px 6px;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-listbox button {\r\n    padding-right: 15px;\r\n}\r\n\r\n.tiny-editor .mce-toolbar-grp .mce-listbox .mce-listbox .mce-caret {\r\n    right: 3px;\r\n}\r\n\r\n.tiny-editor #editor-modal .modal-dialog.modal-xl {\r\n    max-width: 85%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tiny-editor\">\r\n  <div #tinyEditor></div>\r\n\r\n  <div class=\"models-wrap\">\r\n    <div id=\"editor-modal\"\r\n         class=\"modal fade p-0\">\r\n      <div class=\"modal-dialog\"\r\n           [ngClass]=\"openModal?.size\"\r\n           role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">{{openModal?.title}}</h5>\r\n            <button type=\"button\"\r\n                    class=\"close\"\r\n                    data-dismiss=\"modal\"\r\n                    aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <!-- Insert code modal -->\r\n            <div [hidden]=\"openModal?.key !== 'code'\">\r\n              <app-editor-insert-code [data]=\"openModal?.data\"\r\n                                      (onSubmit)=\"addToEditor($event)\"></app-editor-insert-code>\r\n              {{openModal?.data.code}}\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\"\r\n                    class=\"btn btn-sm btn-primary\"\r\n                    data-dismiss=\"modal\"\r\n                    (click)=\"submitModel()\">\r\n              <i class=\"fa fa-check\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/tiny-editor/tiny-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__insert_code_insert_code_component__ = __webpack_require__("../../../../../src/app/components/editor/tiny-editor/insert-code/insert-code.component.ts");
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
        this.markdownHtmlChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TinyEditorComponent.prototype.ngOnInit = function () {
        this.modals = {
            'img': { title: 'Select Image', size: 'modal-xl', key: 'img' },
            'code': {
                title: 'Insert Code', size: 'modal-lg', key: 'code',
                comp: this.insertCodeComp,
                data: {
                    code: '',
                    lang: '',
                    node: null
                }
            }
        };
        this.initEditor();
    };
    TinyEditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.toolbarButtons = {};
        // initialize TinyMCE editor
        tinymce.init({
            target: this.el.nativeElement,
            theme: 'modern',
            content_css: '../../../../assets/tiny-editor-custom-styles.css',
            plugins: 'table link lists hr image codesample',
            autoresize_bottom_margin: 10,
            height: window.innerHeight - 115,
            menubar: false,
            toolbar: 'btnTxt btnH btnInlineCode | btnBold btnItalic btnStrikethrough '
                + '| numlist bullist | link image | table | btnColAlignLeft btnColAlignCenter btnColAlignRight | hr test',
            branding: false,
            statusbar: false,
            link_title: false,
            target_list: false,
            table_toolbar: 'tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow'
                + ' | tableinsertcolbefore tableinsertcolafter tabledeletecol',
            table_appearance_options: false,
            table_advtab: false,
            table_cell_advtab: false,
            table_row_advtab: false,
            setup: function (ed) {
                _this.editor = ed;
                _this.createCustomToolbarButtons(ed);
                // remove table exta buttons
                ed.on('init', function () {
                    ed.buttons.table.menu.splice(1, 1); // remove table properties button
                    ed.buttons.table.menu.splice(2, 4); // remove cell, row and column buttons
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
                    _this.onEditorChange(editor);
                });
                editor.on('ExecCommand', function (e) {
                    _this.onEditorChange(editor);
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
        editor.addButton('test', {
            tooltip: 'test',
            text: 'test',
            onclick: function () {
                $('.modal').modal('show');
                console.log(vm.insertCodeComp);
                vm.modals['code'].comp = vm.insertCodeComp;
                vm.openModel('code');
            },
            onPostRender: function () {
            }
        });
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
    };
    /**
     * Perform tasks on node change in editor
     */
    TinyEditorComponent.prototype.onEditorNodeChange = function (editor, e) {
        console.log(e);
        window.ee = e;
        // code tag rules
        if (e.parents.find(function (p) { return (p.localName === 'code' || p.localName === 'pre'); })) {
            this.toolbarButtons.bold.disabled(true);
            this.toolbarButtons.italic.disabled(true);
            this.toolbarButtons.strikethrough.disabled(true);
            this.modals['code'].data.node = e.element;
            this.modals['code'].data.code = $(e.element).text();
            var lang = e.element.attributes.class ? e.element.attributes.class.value : '';
            if (lang && lang.indexOf('language') > -1) {
                lang = lang.replace('language-', '');
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
        // table tag rules
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
    };
    /**
     * Emit editor changes to subscriber
     */
    TinyEditorComponent.prototype.onEditorChange = function (editor) {
        var _this = this;
        var html = editor.getContent();
        this.zone.run(function () {
            _this.markdownHtmlChange.emit(html);
        });
    };
    TinyEditorComponent.prototype.openModel = function (key) {
        var _this = this;
        var thisModel = this.modals[key];
        if (thisModel) {
            this.zone.run(function () {
                _this.openModal = thisModel;
            });
            $('#editor-modal').modal('show');
        }
    };
    TinyEditorComponent.prototype.submitModel = function () {
        if (this.openModal.key === 'code') {
            if (this.openModal.data.node) {
                $(this.openModal.data.node).text((this.openModal.data.code || ''));
                $(this.openModal.data.node).removeAttr('class');
                $(this.openModal.data.node).addClass('language-' + (this.openModal.data.lang || ''));
            }
            else {
                var code = '<pre class="language-' + (this.openModal.data.lang || '') + '">'
                    + (this.openModal.data.code || '') + '</pre>';
                this.addToEditor(code);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('markdownHtmlChange'),
        __metadata("design:type", Object)
    ], TinyEditorComponent.prototype, "markdownHtmlChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('tinyEditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TinyEditorComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__insert_code_insert_code_component__["a" /* InsertCodeComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__insert_code_insert_code_component__["a" /* InsertCodeComponent */])
    ], TinyEditorComponent.prototype, "insertCodeComp", void 0);
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

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top py-0\">\n  <button class=\"navbar-toggler navbar-toggler-right btn-sm mt-2\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbar-content\"\n          aria-controls=\"navbarColor01\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n    <span class=\"fa fa-bars\"></span>\n  </button>\n  <a class=\"navbar-brand\"\n     href=\"#\">WriteMe.md</a>\n\n  <div class=\"collapse navbar-collapse pb-3 pb-lg-0\"\n       id=\"navbar-content\">\n    <ul class=\"navbar-nav ml-4\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n           href=\"#\">Editor</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-4\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             href=\"#\">Projects</a>\n        </li>\n      </ul>\n      \n    <ul class=\"navbar-nav ml-4\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             href=\"#\">Profile</a>\n        </li>\n      </ul>\n    <form class=\"form-inline float-right ml-auto\">\n      <input class=\"form-control mr-sm-2 form-control-sm\"\n             type=\"text\"\n             placeholder=\"Username\">\n      <input class=\"form-control mr-sm-2 form-control-sm\"\n             type=\"password\"\n             placeholder=\"Password\">\n      <button class=\"btn btn-secondary my-2 my-sm-0 btn-sm\"\n              type=\"submit\">Login</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
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

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/shared/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
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
    }
    AutoHeightDirective.prototype.keyEvent = function (e) {
        this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + 'px';
    };
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

/***/ "../../../../../src/app/services/auth.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function AuthService(router, userService) {
        this.router = router;
        this.userService = userService;
        this.api = {
            'getLoggedInUser': this.getLoggedInUser,
            'login': this.login,
            'logout': this.logout
        };
    }
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
            this.router.navigate(['/login']);
        }
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
            _this.userService.findUserByCredentials(username, password)
                .subscribe(function (data) {
                _this.loggedInUser = data;
                localStorage.setItem('loggedInUser', JSON.stringify(_this.loggedInUser));
                observer.next(Object.assign({}, _this.loggedInUser));
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return obs;
    };
    /**
     * Logout user
     */
    AuthService.prototype.logout = function () {
        this.loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]])
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
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
        this.endpoint = {
            'createUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user',
            'findUserByUsername': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}',
            'findUserByCredentials': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}&password={password}',
            'findUserById': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'updateUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'deleteUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}'
        };
    }
    /**
     * Create a new user
     * @param user user object to be added to the user list
     * @returns Observable that resolves to created user object
     */
    UserService.prototype.createUser = function (user) {
        var url = this.endpoint.createUser;
        return this.http.post(url, user);
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