(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-page-module"],{

/***/ "QtzY":
/*!***************************************************!*\
  !*** ./src/app/pages/page/page-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.component */ "aUng");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"] }];
class PageRoutingModule {
}
PageRoutingModule.ɵfac = function PageRoutingModule_Factory(t) { return new (t || PageRoutingModule)(); };
PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PageRoutingModule });
PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "aUng":
/*!**********************************************!*\
  !*** ./src/app/pages/page/page.component.ts ***!
  \**********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user-config.service */ "gpqJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var src_app_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/master.service */ "Z3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/breadcrumb/breadcrumb.component */ "t99X");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/grid/grid.component */ "m4bG");










function PageComponent_ng_container_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbList", element_r2.breadcrumbList);
} }
function PageComponent_ng_container_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-grid", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("GridReady", function PageComponent_ng_container_0_div_1_div_3_Template_app_grid_GridReady_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const element_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.fetchData($event, element_r2.queryConfig, element_r2.columns, element_r2 == null ? null : element_r2.title); })("GridBtnClickEvent", function PageComponent_ng_container_0_div_1_div_3_Template_app_grid_GridBtnClickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.onGridBtnClickEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", element_r2.height)("i18n", ctx_r4.i18n)("title", element_r2 == null ? null : element_r2.title)("gridButtons", element_r2.gridButtons)("autoSizeCol", element_r2.autoSizeCol)("sizeColumnsToFit", element_r2.sizeColumnsToFit)("columns", element_r2.columns)("rowData", ctx_r4.rowData[element_r2 == null ? null : element_r2.title]);
} }
function PageComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageComponent_ng_container_0_div_1_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageComponent_ng_container_0_div_1_div_3_Template, 2, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", element_r2.elementType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "grid");
} }
function PageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageComponent_ng_container_0_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pageConfig);
} }
class PageComponent {
    constructor(userService, router, http, route, spinner, apollo, masterService) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.spinner = spinner;
        this.apollo = apollo;
        this.masterService = masterService;
        this.breadcrumbList = [];
        this.gridButtons = [];
        this.columns = [];
        this.rowData = {};
        this.pageName = '';
        this.queryConfig = {};
        this.gridApi = {};
        this.gridOptions = {};
    }
    ngOnInit() {
        this.spinner.show();
        this.route.paramMap.subscribe((params) => {
            this.i18n = null;
            this.pageName = String(params.get('name'));
            if (!this.pageName)
                return;
            this.userConfigSub$ = this.userService.userCast.subscribe((userDetails) => {
                if (userDetails.appName) {
                    setTimeout(() => {
                        if (this.userConfigSub$)
                            this.userConfigSub$.unsubscribe();
                        this.i18n = userDetails.i18n[0].translations;
                        this.pageConfig = userDetails[this.pageName];
                        this.spinner.hide();
                    }, 0);
                }
            });
        });
    }
    fetchData(event, queryConfig, columns = [], title) {
        this.gridApi[title] = event.params.api;
        this.gridOptions[title] = event.params.api;
        this.queryConfig[title] = queryConfig;
        const requireColumns = [];
        columns.forEach((item) => {
            if (item.type !== 'action') {
                requireColumns.push(item.field);
            }
        });
        this.masterService.get(queryConfig, requireColumns).subscribe(result => {
            if (result.data && result.data[queryConfig.queryName]) {
                this.rowData[title] = JSON.parse(result.data[queryConfig.queryName].data);
            }
        });
    }
    onGridBtnClickEvent(event) {
        if (event.action === "navigate") {
            this.router.navigateByUrl(`/${event.url}/${this.pageName}/${event.id ? event.id : null}`);
        }
        else if (event.action === "delete") {
            this.removeItemFromList(event);
        }
    }
    removeItemFromList(event) {
        this.spinner.show();
        const queryConfig = this.queryConfig[event.title];
        this.masterService.delete(queryConfig, event.id).subscribe(({ data }) => {
            const rowIndex = this.rowData[event.title].findIndex((item) => item.id === event.id);
            this.rowData[event.title].splice(rowIndex, 1);
            this.gridApi[event.title].setRowData(this.rowData[event.title]);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            console.log('there was an error sending the query', error);
        });
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_config_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_master_service__WEBPACK_IMPORTED_MODULE_6__["MasterService"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "breadcrumbList"], [3, "height", "i18n", "title", "gridButtons", "autoSizeCol", "sizeColumnsToFit", "columns", "rowData", "GridReady", "GridBtnClickEvent"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.i18n);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "oGhl":
/*!*******************************************!*\
  !*** ./src/app/pages/page/page.module.ts ***!
  \*******************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-routing.module */ "QtzY");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.component */ "aUng");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PageModule {
}
PageModule.ɵfac = function PageModule_Factory(t) { return new (t || PageModule)(); };
PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PageModule });
PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _page_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PageModule, { declarations: [_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _page_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageRoutingModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=page-page-module.js.map