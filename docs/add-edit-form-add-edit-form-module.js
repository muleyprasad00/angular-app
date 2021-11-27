(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-edit-form-add-edit-form-module"],{

/***/ "GH/K":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-edit-form/add-edit-form-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddEditFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditFormRoutingModule", function() { return AddEditFormRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_edit_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-form.component */ "OOCC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _add_edit_form_component__WEBPACK_IMPORTED_MODULE_1__["AddEditFormComponent"] }];
class AddEditFormRoutingModule {
}
AddEditFormRoutingModule.ɵfac = function AddEditFormRoutingModule_Factory(t) { return new (t || AddEditFormRoutingModule)(); };
AddEditFormRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddEditFormRoutingModule });
AddEditFormRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddEditFormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "OOCC":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-edit-form/add-edit-form.component.ts ***!
  \****************************************************************/
/*! exports provided: AddEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditFormComponent", function() { return AddEditFormComponent; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user-config.service */ "gpqJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/breadcrumb/breadcrumb.component */ "t99X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dynamic-form/dynamic-form.component */ "A/Q/");











function AddEditFormComponent_app_dynamic_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-dynamic-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("OnSubmit", function AddEditFormComponent_app_dynamic_form_1_Template_app_dynamic_form_OnSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cardHeader", "Add/Edit Form")("formTemplate", ctx_r0.formsConfig);
} }
class AddEditFormComponent {
    constructor(userService, route, http, spinner, apollo) {
        this.userService = userService;
        this.route = route;
        this.http = http;
        this.spinner = spinner;
        this.apollo = apollo;
        this.breadcrumbList = ['Home', '', 'Update'];
        this.pageName = '';
        this.id = '';
        this.show = false;
    }
    ngOnInit() {
        this.spinner.show();
        this.route.paramMap.subscribe((params) => {
            this.pageName = String(params.get('name'));
            this.id = String(params.get('id'));
            if (!this.pageName)
                return;
            this.userConfigSub$ = this.userService.userCast.subscribe((userDetails) => {
                if (userDetails.appName) {
                    if (this.userConfigSub$)
                        this.userConfigSub$.unsubscribe();
                    this.i18n = userDetails.i18n[0].translations;
                    this.breadcrumbList[1] = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(this.pageName);
                    this.fetchData();
                }
            });
        });
    }
    fetchData() {
        this.http.get(`/config/formsConfig.json`).subscribe((res) => {
            this.formsConfig = res[this.pageName].formsConfig;
            this.queryConfig = res[this.pageName].queryConfig;
            this.spinner.hide();
            if (this.id !== 'null') {
                this.fetchDataByID(res[this.pageName].queryConfig);
            }
            else {
                this.show = true;
            }
        });
    }
    fetchDataByID(queryConfig) {
        const requireColumns = this.formsConfig.map((item) => item.name);
        const query = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
      query  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
         data
        }
    }
    `;
        const reqConfig = queryConfig.variables;
        reqConfig.columns = requireColumns;
        reqConfig.id = this.id;
        const variables = {
            queryInput: Object.assign({}, reqConfig)
        };
        this.query = this.apollo.watchQuery({
            query,
            variables
        });
        this.query.valueChanges.subscribe(result => {
            var _a;
            if (result.data && result.data[queryConfig.queryName]) {
                const rowData = JSON.parse(result.data[queryConfig.queryName].data);
                for (let item in rowData[0]) {
                    (_a = this.formsConfig) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
                        if (item === element.name) {
                            element.value = rowData[0][item];
                        }
                    });
                }
                this.show = true;
                this.spinner.hide();
            }
        });
    }
    onSubmit(event) {
        this.spinner.show();
        const queryConfig = {
            queryName: this.id !== 'null' ? 'updateData' : 'createData'
        };
        this.mutate(event, queryConfig);
    }
    insert(event) {
        var _a, _b;
        const queryConfig = {
            queryName: 'createData'
        };
        const query = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          data
        }
    }
    `;
        const reqConfig = {
            datatable: (_b = (_a = this.queryConfig) === null || _a === void 0 ? void 0 : _a.variables) === null || _b === void 0 ? void 0 : _b.datatable,
            data: JSON.stringify(event)
        };
        const variables = {
            queryInput: Object.assign({}, reqConfig)
        };
        this.apollo.mutate({
            mutation: query,
            variables
        }).subscribe(({ data }) => {
            this.spinner.hide();
            window.history.back();
        }, (error) => {
            this.spinner.hide();
            console.log('there was an error sending the query', error);
        });
    }
    update(event) {
    }
    mutate(event, queryConfig) {
        var _a, _b;
        const query = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          data
        }
    }
    `;
        const reqConfig = {
            datatable: (_b = (_a = this.queryConfig) === null || _a === void 0 ? void 0 : _a.variables) === null || _b === void 0 ? void 0 : _b.datatable,
            data: JSON.stringify(event),
            id: this.id
        };
        if (this.id === 'null') {
            delete reqConfig.id;
        }
        const variables = {
            queryInput: Object.assign({}, reqConfig)
        };
        this.apollo.mutate({
            mutation: query,
            variables
        }).subscribe(({ data }) => {
            this.spinner.hide();
            window.history.back();
        }, (error) => {
            this.spinner.hide();
            console.log('there was an error sending the query', error);
        });
    }
}
AddEditFormComponent.ɵfac = function AddEditFormComponent_Factory(t) { return new (t || AddEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_user_config_service__WEBPACK_IMPORTED_MODULE_3__["UserConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
AddEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddEditFormComponent, selectors: [["app-add-edit-form"]], decls: 2, vars: 2, consts: [[3, "breadcrumbList"], [3, "cardHeader", "formTemplate", "OnSubmit", 4, "ngIf"], [3, "cardHeader", "formTemplate", "OnSubmit"]], template: function AddEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEditFormComponent_app_dynamic_form_1_Template, 1, 2, "app-dynamic-form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbList", ctx.breadcrumbList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formsConfig && ctx.show);
    } }, directives: [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "sr3X":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-edit-form/add-edit-form.module.ts ***!
  \*************************************************************/
/*! exports provided: AddEditFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditFormModule", function() { return AddEditFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_edit_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-form-routing.module */ "GH/K");
/* harmony import */ var _add_edit_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-form.component */ "OOCC");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AddEditFormModule {
}
AddEditFormModule.ɵfac = function AddEditFormModule_Factory(t) { return new (t || AddEditFormModule)(); };
AddEditFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AddEditFormModule });
AddEditFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _add_edit_form_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddEditFormRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AddEditFormModule, { declarations: [_add_edit_form_component__WEBPACK_IMPORTED_MODULE_2__["AddEditFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _add_edit_form_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddEditFormRoutingModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=add-edit-form-add-edit-form-module.js.map