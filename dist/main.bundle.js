webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());

AppConstants.EVENTS = {
    showAlert: 'showAlert',
    showLoader: 'showLoader'
};
AppConstants.ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].endpoint;
//# sourceMappingURL=app.constant.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_error_handler_service_client__ = __webpack_require__("../../../../../src/app/services/error-handler.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_auto_height_auto_height_directive__ = __webpack_require__("../../../../../src/app/directives/auto-height/auto-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_shared_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shared_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_editor_markdown_elements_heading_heading_component__ = __webpack_require__("../../../../../src/app/components/editor/markdown-elements/heading/heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_editor_markdown_elements_text_text_component__ = __webpack_require__("../../../../../src/app/components/editor/markdown-elements/text/text.component.ts");
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
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_shared_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_shared_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_shared_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_editor_markdown_elements_heading_heading_component__["a" /* HeadingEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__directives_auto_height_auto_height_directive__["a" /* AutoHeightDirective */],
            __WEBPACK_IMPORTED_MODULE_17__components_editor_markdown_elements_text_text_component__["a" /* TextEditComponent */]
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
            __WEBPACK_IMPORTED_MODULE_7__services_interactions_service_client__["a" /* InteractionsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");


var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_editor_editor_component__["a" /* EditorComponent */], data: { skipAuth: true } }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

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

module.exports = "<div class=\"row\">\r\n  <div class=\"col editor-wrapper\">\r\n\r\n    <div *ngFor=\"let elem of elements; let i = index\">\r\n\r\n      <div [ngSwitch]=\"MarkdownElementType[elem.type]\">\r\n\r\n        <!-- Markdown element : Heading -->\r\n        <div class=\"my-2\"\r\n             *ngSwitchCase=\"MarkdownElementType[MarkdownElementType.heading]\">\r\n          <app-markdown-heading-edit [markdown]=\"elem\"></app-markdown-heading-edit>\r\n        </div>\r\n\r\n        <!-- Markdown element : Text -->\r\n        <div class=\"my-2\"\r\n             *ngSwitchCase=\"MarkdownElementType[MarkdownElementType.text]\">\r\n          <app-markdown-text-edit [markdown]=\"elem\"></app-markdown-text-edit>\r\n        </div>\r\n\r\n\r\n        <!-- Insert toolbar -->\r\n        <div class=\"hvj-insert-toolbar small\"\r\n             (mouseenter)=\"toggleInsertToolbar(true, $event)\"\r\n             (mouseleave)=\"toggleInsertToolbar(false, $event)\">\r\n          <span>\r\n            <i class=\"fa fa-plus\"\r\n               aria-hidden=\"true\"></i>\r\n            <span class=\"font-italics text-dark\">insert</span>\r\n          </span>\r\n          <span class=\"toolbar-items fade\">\r\n            <span class=\"btn btn-sm btn-xs btn-secondary\"\r\n                  (click)=\"addElement(MarkdownElementType.heading, i)\">Heading</span>\r\n            <span class=\"btn btn-sm btn-xs btn-secondary\"\r\n                  (click)=\"addElement(MarkdownElementType.text, i)\">Text</span>\r\n            <span class=\"btn btn-sm btn-xs btn-secondary\"\r\n                  (click)=\"addElement(MarkdownElementType.image, i)\">Image</span>\r\n            <span class=\"btn btn-sm btn-xs btn-secondary\"\r\n                  (click)=\"addElement(MarkdownElementType.table, i)\">Table</span>\r\n            <span class=\"btn btn-sm btn-xs btn-secondary\"\r\n                  (click)=\"addElement(MarkdownElementType.html, i)\">Html</span>\r\n          </span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col preview-wrapper\">\r\n\r\n    <div *ngFor=\"let elem of elements\">\r\n      <div class=\"hvj-markdown-element-preview\"\r\n           [innerHtml]=\"elem.toHtml()\">\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n    <div *ngFor=\"let elem of elements\">\r\n        <div class=\"hvj-markdown-element-preview\"\r\n             [innerHtml]=\"previewMarkdown(elem)\">\r\n        </div>\r\n      </div>\r\n  \r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
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
    function EditorComponent() {
        this.MarkdownElementType = __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* MarkdownElementType */];
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.elements = [];
        var e = __WEBPACK_IMPORTED_MODULE_1__model_model__["a" /* MarkdownElementFactory */].create(__WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* MarkdownElementType */].heading);
        e._id = 'aa';
        e.content = 'test';
        e.size = 4;
        this.elements.push(e);
    };
    /**
     * Add new markdown element
     * @param type element type
     * @param index index at which the element must be inserted
     */
    EditorComponent.prototype.addElement = function (type, index) {
        var newElem = __WEBPACK_IMPORTED_MODULE_1__model_model__["a" /* MarkdownElementFactory */].create(type);
        if (!index && index >= this.elements.length) {
            this.elements.push(newElem);
        }
        else {
            this.elements.splice(index + 1, 0, newElem);
        }
    };
    /**
     * Toggle show / hide insert toolbar buttons
     * @param show true, to show; false to hide
     * @param e Mouse event
     */
    EditorComponent.prototype.toggleInsertToolbar = function (show, e) {
        $(e.srcElement).find('.fade').toggleClass('show', show);
    };
    /**
     * Get preview markdown
     * @param elem Markdown element
     */
    EditorComponent.prototype.previewMarkdown = function (elem) {
        return elem.toMarkdown().replace(/\n/g, '<br>');
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/markdown-elements/heading/heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-markdown-element-heading textarea{\r\n    resize: none;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/markdown-elements/heading/heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-markdown-element-editor hvj-markdown-element-heading\">\r\n  <div class=\"hvj-markdown-element-title small bg-inverse\">\r\n    <span class=\"px-2\">Heading</span>\r\n    <div class=\"btn-group btn-group-sm\"\r\n         role=\"group\">\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded py-1 px-2\"\r\n              [ngClass]=\"{'active': markdown.size === 1}\"\r\n              (click)=\"markdown.size=1\">1</button>\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded py-0 px-2\"\r\n              [ngClass]=\"{'active': markdown.size === 2}\"\r\n              (click)=\"markdown.size=2\">2</button>\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded py-0 px-2\"\r\n              [ngClass]=\"{'active': markdown.size === 3}\"\r\n              (click)=\"markdown.size=3\">3</button>\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded py-0 px-2\"\r\n              [ngClass]=\"{'active': markdown.size === 4}\"\r\n              (click)=\"markdown.size=4\">4</button>\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded py-0 px-2\"\r\n              [ngClass]=\"{'active': markdown.size === 5}\"\r\n              (click)=\"markdown.size=5\">5</button>\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded py-0 px-2\"\r\n              [ngClass]=\"{'active': markdown.size === 6}\"\r\n              (click)=\"markdown.size=6\">6</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"hvj-markdown-element-main\">\r\n    <textarea class=\"w-100 p-2 mb-0 h{{markdown.size || 1}}\"\r\n              [(ngModel)]=\"markdown.content\"\r\n              rows=\"1\"\r\n              appAutoHeight></textarea>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/markdown-elements/heading/heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadingEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadingEditComponent = (function () {
    function HeadingEditComponent() {
        this.markdownChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HeadingEditComponent.prototype.ngOnInit = function () {
    };
    HeadingEditComponent.prototype.onChange = function () {
        this.markdownChange.emit(this.markdown);
    };
    return HeadingEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["b" /* MarkdownElementHeading */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["b" /* MarkdownElementHeading */]) === "function" && _a || Object)
], HeadingEditComponent.prototype, "markdown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], HeadingEditComponent.prototype, "markdownChange", void 0);
HeadingEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-markdown-heading-edit',
        template: __webpack_require__("../../../../../src/app/components/editor/markdown-elements/heading/heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/markdown-elements/heading/heading.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeadingEditComponent);

var _a, _b;
//# sourceMappingURL=heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/markdown-elements/text/text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-markdown-element-text textarea{\r\n    resize: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.hvj-markdown-element-text .txtInput {\r\n    color: black;\r\n    border-color:darkgray;\r\n}\r\n\r\n\r\n.hvj-markdown-element-text .ql-toolbar button {\r\n    background: #EEE;\r\n}\r\n\r\n.hvj-markdown-element-text .ql-toolbar button.ql-active {\r\n    background: #CCC;\r\n    color:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/markdown-elements/text/text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-markdown-element-editor hvj-markdown-element-text\">\r\n  <div class=\"hvj-markdown-element-title small bg-inverse\">\r\n    <span class=\"px-2\">Text</span>\r\n    <div class=\"btn-group btn-group-sm quill-toolbar p-0 m-0 border-0\"\r\n         #txtToolbar\r\n         role=\"group\">\r\n      <!-- Bold -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded ql-bold\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Bold\"></button>\r\n      <!-- Italics -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded ql-italic\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Italics\"></button>\r\n      <!-- Strike -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded ql-strike\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Strike\"></button>\r\n      <!-- Link -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded ql-link ml-3\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Link\"></button>\r\n      <!-- Numbered list -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded ql-list ml-3\"\r\n              value=\"ordered\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Numbered List\"></button>\r\n      <!-- Bulleted List -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded ql-list\"\r\n              value=\"bullet\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Bulleted List\"></button>\r\n      <!-- Task List -->\r\n      <button type=\"button\"\r\n              class=\"btn btn-faded\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"bottom\"\r\n              title=\"Task List\"\r\n              (click)=\"insertTaskList()\">\r\n        <i class=\"fa fa-check\"\r\n           aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <span class=\"ml-2\">\r\n      <em class=\"text-secondary note\">enter key twice creates newline</em>\r\n    </span>\r\n  </div>\r\n  <div class=\"hvj-markdown-element-main\">\r\n    <div #txtInput\r\n         class=\"txtInput\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/markdown-elements/text/text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextEditComponent = (function () {
    function TextEditComponent() {
        this.markdownChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TextEditComponent.prototype.ngOnInit = function () {
    };
    TextEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.quillEditor = new Quill(this.txtInput.nativeElement, {
            theme: 'snow',
            modules: {
                toolbar: { container: this.txtToolbar.nativeElement }
            }
        });
        this.quillEditor.on('text-change', function () {
            var html = $(_this.txtInput.nativeElement).find('.ql-editor').html();
            _this.diff = html;
            // sanitize html
            html = html.replace(/<p><br><\/p><p><br><\/p>/g, '\n\n');
            html = html.replace(/<p>/g, '');
            html = html.replace(/<\/p>/g, '');
            html = html.replace(/-\[x\]/g, '<br><i class="fa fa-check-square-o"></i>');
            html = html.replace(/-\[ \]/g, '<br><i class="fa fa-square-o"></i>');
            _this.markdown.content = html;
        });
        window.q = this.quillEditor;
        $('[data-toggle="tooltip"]').tooltip();
    };
    TextEditComponent.prototype.onChange = function () {
        this.markdownChange.emit(this.markdown);
    };
    TextEditComponent.prototype.insertTaskList = function () {
        var _this = this;
        var taskHtml = '\n-[x] ';
        var insertIndex = this.quillEditor.getLength() - 1;
        if (insertIndex === 0) {
            taskHtml = '-[x] ';
        }
        this.quillEditor.insertText(this.quillEditor.getLength() - 1, taskHtml);
        $(this.txtToolbar.nativeElement).parent().find('.note').text('remove "x" to create a unchecked task item');
        setTimeout(function () {
            $(_this.txtToolbar.nativeElement).parent().find('.note').text('enter key twice creates newline');
        }, 3000);
    };
    return TextEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* MarkdownElementText */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* MarkdownElementText */]) === "function" && _a || Object)
], TextEditComponent.prototype, "markdown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], TextEditComponent.prototype, "markdownChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('txtInput'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], TextEditComponent.prototype, "txtInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('txtToolbar'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
], TextEditComponent.prototype, "txtToolbar", void 0);
TextEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-markdown-text-edit',
        template: __webpack_require__("../../../../../src/app/components/editor/markdown-elements/text/text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/markdown-elements/text/text.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TextEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=text.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/alert/alert.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _b || Object])
], AlertComponent);

var _a, _b;
//# sourceMappingURL=alert.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _a || Object])
], LoaderComponent);

var _a;
//# sourceMappingURL=loader.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/shared/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/auto-height/auto-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return AutoHeightDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutoHeightDirective.prototype, "keyEvent", null);
AutoHeightDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appAutoHeight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], AutoHeightDirective);

var _a;
//# sourceMappingURL=auto-height.directive.js.map

/***/ }),

/***/ "../../../../../src/app/model/MarkdownElementFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownElementFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markdownElementType__ = __webpack_require__("../../../../../src/app/model/markdownElementType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markdownElementHeading__ = __webpack_require__("../../../../../src/app/model/markdownElementHeading.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markdownElementText__ = __webpack_require__("../../../../../src/app/model/markdownElementText.ts");



/** Factory for creating markdown elements based on type */
var MarkdownElementFactory = (function () {
    function MarkdownElementFactory() {
    }
    MarkdownElementFactory.create = function (type) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_0__markdownElementType__["a" /* MarkdownElementType */].heading:
                return new __WEBPACK_IMPORTED_MODULE_1__markdownElementHeading__["a" /* MarkdownElementHeading */]();
            case __WEBPACK_IMPORTED_MODULE_0__markdownElementType__["a" /* MarkdownElementType */].text:
                return new __WEBPACK_IMPORTED_MODULE_2__markdownElementText__["a" /* MarkdownElementText */]();
        }
    };
    return MarkdownElementFactory;
}());

//# sourceMappingURL=MarkdownElementFactory.js.map

/***/ }),

/***/ "../../../../../src/app/model/markdownElement.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=markdownElement.js.map

/***/ }),

/***/ "../../../../../src/app/model/markdownElementHeading.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownElementHeading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markdownElementType__ = __webpack_require__("../../../../../src/app/model/markdownElementType.ts");

/** Models a markdown Heading element */
var MarkdownElementHeading = (function () {
    function MarkdownElementHeading() {
        this.type = __WEBPACK_IMPORTED_MODULE_0__markdownElementType__["a" /* MarkdownElementType */].heading;
        this.size = 1;
        this.content = '';
    }
    MarkdownElementHeading.prototype.toHtml = function () {
        var html = '';
        if (this.content) {
            html = '<h' + (this.size || 1) + '>' + this.content + '</h' + (this.size || 1) + '>';
        }
        return html;
    };
    MarkdownElementHeading.prototype.toMarkdown = function () {
        var markdown = '';
        var size = this.size || 1;
        markdown += '#'.repeat(size);
        markdown += this.content;
        return markdown;
    };
    return MarkdownElementHeading;
}());

//# sourceMappingURL=markdownElementHeading.js.map

/***/ }),

/***/ "../../../../../src/app/model/markdownElementText.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownElementText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markdownElementType__ = __webpack_require__("../../../../../src/app/model/markdownElementType.ts");

var MarkdownElementText = (function () {
    function MarkdownElementText() {
        this.type = __WEBPACK_IMPORTED_MODULE_0__markdownElementType__["a" /* MarkdownElementType */].text;
        this._content = '';
        this._contentChanged = false;
        this._markdown = '';
    }
    Object.defineProperty(MarkdownElementText.prototype, "content", {
        /** Get content */
        get: function () {
            return this._content;
        },
        /** Set content */
        set: function (_c) {
            if (_c !== this._content) {
                this._content = _c;
                this._contentChanged = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MarkdownElementText.prototype.toHtml = function () {
        return this._content;
    };
    MarkdownElementText.prototype.toMarkdown = function () {
        if (!this._contentChanged) {
            return this._markdown;
        }
        var markdown = '';
        if (this._content) {
            markdown = this._content;
            // handle bold
            markdown = markdown.replace(/<strong>/g, '**');
            markdown = markdown.replace(/<\/strong>/g, '**');
            // handle italics
            markdown = markdown.replace(/<em>/g, '*');
            markdown = markdown.replace(/<\/em>/g, '*');
            // handle strike
            markdown = markdown.replace(/<s>/g, '~~');
            markdown = markdown.replace(/<\/s>/g, '~~');
            // handle links
            var links = markdown.match(/<a .*?a>/g);
            if (links) {
                links.forEach(function (m) {
                    var url = m.match(/href=".*?"/g)[0];
                    if (url) {
                        url = url.replace('href="', '').replace('"', '');
                    }
                    else {
                        url = '';
                    }
                    var text = m.match(/>.*?</g)[0];
                    if (text) {
                        text = text.replace('>', '').replace('<', '');
                    }
                    else {
                        text = '';
                    }
                    var linkMarkdown = '[' + text + '](' + url + ')';
                    markdown = markdown.replace(m, linkMarkdown);
                });
            }
            // handle task list
            markdown = markdown.replace(/<br><i class="fa fa-check-square-o"><\/i>/g, '\n-[X]');
            markdown = markdown.replace(/<br><i class="fa fa-square-o"><\/i>/g, '\n-[ ]');
            // handle bulleted list
            var uls = markdown.match(/<ul.*?ul>/g);
            if (uls) {
                uls.forEach(function (m) {
                    var liMarkup = '';
                    var lis = m.match(/<li>.*?<\/li>/g);
                    if (lis) {
                        lis.forEach(function (l) {
                            liMarkup += '* ' + l.replace('<li>', '').replace('</li>', '\n');
                        });
                    }
                    markdown = markdown.replace(m, liMarkup);
                });
            }
            // handle numbered list
            var ols = markdown.match(/<ol.*?ol>/g);
            if (ols) {
                ols.forEach(function (m) {
                    var liMarkup = '';
                    var lis = m.match(/<li>.*?<\/li>/g);
                    if (lis) {
                        var itemCount_1 = 1;
                        lis.forEach(function (l) {
                            liMarkup += itemCount_1++ + '. ' + l.replace('<li>', '').replace('</li>', '\n');
                        });
                    }
                    markdown = markdown.replace(m, liMarkup);
                });
            }
        }
        this._markdown = markdown;
        return markdown;
    };
    return MarkdownElementText;
}());

//# sourceMappingURL=markdownElementText.js.map

/***/ }),

/***/ "../../../../../src/app/model/markdownElementType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownElementType; });
/** Types of markdown elements supported */
/** Types of markdown elements supported */ var MarkdownElementType;
(function (MarkdownElementType) {
    MarkdownElementType[MarkdownElementType["heading"] = 0] = "heading";
    MarkdownElementType[MarkdownElementType["text"] = 1] = "text";
    MarkdownElementType[MarkdownElementType["line"] = 2] = "line";
    MarkdownElementType[MarkdownElementType["list"] = 3] = "list";
    MarkdownElementType[MarkdownElementType["image"] = 4] = "image";
    MarkdownElementType[MarkdownElementType["code"] = 5] = "code";
    MarkdownElementType[MarkdownElementType["blockquote"] = 6] = "blockquote";
    MarkdownElementType[MarkdownElementType["table"] = 7] = "table";
    MarkdownElementType[MarkdownElementType["html"] = 8] = "html"; // plain html
})(MarkdownElementType || (MarkdownElementType = {}));
//# sourceMappingURL=markdownElementType.js.map

/***/ }),

/***/ "../../../../../src/app/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markdownElement__ = __webpack_require__("../../../../../src/app/model/markdownElement.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__markdownElement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__markdownElement__);
/* unused harmony reexport MarkdownElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markdownElementType__ = __webpack_require__("../../../../../src/app/model/markdownElementType.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__markdownElementType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markdownElementText__ = __webpack_require__("../../../../../src/app/model/markdownElementText.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__markdownElementText__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markdownElementHeading__ = __webpack_require__("../../../../../src/app/model/markdownElementHeading.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__markdownElementHeading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MarkdownElementFactory__ = __webpack_require__("../../../../../src/app/model/MarkdownElementFactory.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__MarkdownElementFactory__["a"]; });
/** Models a User object */
var User = (function () {
    function User() {
    }
    return User;
}());

// Re-exports





//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/error-handler.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return ErrorHandlerService;
}());
ErrorHandlerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interactions_service_client__["a" /* InteractionsService */]) === "function" && _a || Object])
], ErrorHandlerService);

var _a;
//# sourceMappingURL=error-handler.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/interactions.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return InteractionsService;
}());
InteractionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], InteractionsService);

//# sourceMappingURL=interactions.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map