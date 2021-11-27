(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\workspace_angular\easy-transport\easy-transport\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user-config.service */ "gpqJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function HeaderComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_nav_0_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.sidebarToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Activity Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_nav_0_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.i18n[ctx_r0.header == null ? null : ctx_r0.header.title], " ");
} }
class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.userConfigSub = this.userService.userCast.subscribe((userDetails) => {
            var _a;
            if (userDetails.appName) {
                (_a = this.userConfigSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                this.i18n = userDetails.i18n[0].translations;
                this.header = userDetails.headerConfig;
            }
        });
    }
    sidebarToggle(event) {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', JSON.stringify(document.body.classList.contains('sb-sidenav-toggled')));
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userDetails');
        localStorage.removeItem('isLoggedin');
        this.router.navigateByUrl('/');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_config_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 1, consts: [["class", "sb-topnav navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], [1, "sb-topnav", "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["href", "index.html", 1, "navbar-brand", "ps-3"], ["id", "sidebarToggle", 1, "btn", "btn-link", "btn-sm", "order-1", "order-lg-0", "me-4", "me-lg-0", 3, "click"], [1, "fas", "fa-bars"], [1, "d-none", "d-md-inline-block", "form-inline", "ms-auto", "me-0", "me-md-3", "my-2", "my-md-0"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", "aria-label", "Search for...", "aria-describedby", "btnNavbarSearch", 1, "form-control"], ["id", "btnNavbarSearch", "type", "button", 1, "btn", "btn-primary"], [1, "fas", "fa-search"], [1, "navbar-nav", "ms-auto", "ms-md-0", "me-3", "me-lg-4"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-user", "fa-fw"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "#!", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#!", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_nav_0_Template, 26, 1, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.i18n);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "A/Q/":
/*!*******************************************************************!*\
  !*** ./src/app/components/dynamic-form/dynamic-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DynamicFormComponent_div_5_div_1_div_2_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", form_elem_r3.label, " is required");
} }
function DynamicFormComponent_div_5_div_1_div_2_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Min length ", form_elem_r3.minLength, " is required");
} }
function DynamicFormComponent_div_5_div_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_5_div_1_div_2_div_4_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_div_5_div_1_div_2_div_4_div_2_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getFC(form_elem_r3.name).errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getFC(form_elem_r3.name).errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function DynamicFormComponent_div_5_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_div_5_div_1_div_2_div_4_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_elem_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", form_elem_r3.type)("formControlName", form_elem_r3.name)("placeholder", form_elem_r3.placeholder)("autocomplete", "off")("minlength", form_elem_r3.minLength)("maxlength", form_elem_r3.maxLength)("required", form_elem_r3.required)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r4.submitted && ctx_r4.getFC(form_elem_r3.name).errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.getFC(form_elem_r3.name).errors);
} }
function DynamicFormComponent_div_5_div_1_div_3_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r17);
} }
function DynamicFormComponent_div_5_div_1_div_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", form_elem_r3.label, " is required");
} }
function DynamicFormComponent_div_5_div_1_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_5_div_1_div_3_div_6_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.getFC(form_elem_r3.name).errors.required);
} }
function DynamicFormComponent_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_5_div_1_div_3_option_5_Template, 2, 1, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_div_5_div_1_div_3_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_elem_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", form_elem_r3.name)("required", form_elem_r3.required)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r5.submitted && ctx_r5.getFC(form_elem_r3.name).errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", form_elem_r3.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.submitted && ctx_r5.getFC(form_elem_r3.name).errors);
} }
function DynamicFormComponent_div_5_div_1_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", form_elem_r3.label, " is required");
} }
function DynamicFormComponent_div_5_div_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_5_div_1_div_4_div_4_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.getFC(form_elem_r3.name).errors.required);
} }
function DynamicFormComponent_div_5_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_div_5_div_1_div_4_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", form_elem_r3.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r6.submitted && ctx_r6.getFC(form_elem_r3.name).errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_elem_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ctx_r6.getFC(form_elem_r3.name).errors);
} }
function DynamicFormComponent_div_5_div_1_div_5_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", form_elem_r3.label, " is required");
} }
function DynamicFormComponent_div_5_div_1_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_5_div_1_div_5_div_4_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.getFC(form_elem_r3.name).errors.required);
} }
function DynamicFormComponent_div_5_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_div_5_div_1_div_5_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", form_elem_r3.name)("value", form_elem_r3.value)("required", form_elem_r3.required)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r7.submitted && ctx_r7.getFC(form_elem_r3.name).errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_elem_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.submitted && ctx_r7.getFC(form_elem_r3.name).errors);
} }
function DynamicFormComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_div_5_div_1_div_2_Template, 5, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_5_div_1_div_3_Template, 7, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_div_5_div_1_div_4_Template, 5, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_5_div_1_div_5_Template, 5, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_elem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](form_elem_r3.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", form_elem_r3.element_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textBox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radio");
} }
function DynamicFormComponent_div_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_5_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_5_div_1_Template, 6, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_5_button_5_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.formTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.submitButtonText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showCancel);
} }
class DynamicFormComponent {
    constructor() {
        this.submitted = false;
        this.formTemplate = [];
        this.showCancel = true;
        this.submitButtonText = 'Submit';
        this.OnSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        let group = {};
        this.formTemplate.forEach((element) => {
            if (element.element_type === 'checkbox' && element.requiredTrue) {
                group[element.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue);
            }
            else {
                group[element.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](element.value || '');
            }
        });
        this.myFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    }
    // convenience getter for easy access to form fields
    getFC(fc) {
        return this.myFormGroup.controls[fc];
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.myFormGroup.invalid) {
            return;
        }
        this.OnSubmit.emit(this.myFormGroup.value);
    }
    onCancel() {
        window.history.back();
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(); };
DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { formTemplate: "formTemplate", cardHeader: "cardHeader", showCancel: "showCancel", submitButtonText: "submitButtonText" }, outputs: { OnSubmit: "OnSubmit" }, decls: 6, vars: 3, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "mb-1", 3, "class", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "pr-3"], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf"], [1, "mb-1"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["for", "form_elem.name", 1, "form-label"], ["id", "form_elem.name", "value", "", 1, "form-control", 3, "type", "formControlName", "placeholder", "autocomplete", "minlength", "maxlength", "required", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["id", "form_elem.name", "value", "", 1, "form-select", 3, "formControlName", "required", "ngClass"], ["selected", "", "disabled", "", "value", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", "id", "form_elem.name", 1, "form-check-input", 3, "formControlName", "ngClass"], ["for", "form_elem.name", 1, "form-label", "mx-2"], ["type", "radio", "id", "form_elem.value", 1, "form-check-input", 3, "formControlName", "value", "required", "ngClass"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DynamicFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_5_Template, 6, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formTemplate.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "py-4", "bg-light", "mt-auto"], [1, "container-fluid", "px-4"], [1, "d-flex", "align-items-center", "justify-content-between", "small"], [1, "text-muted"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright \u00A9 Your Website 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Qhmg":
/*!**********************************************************************************!*\
  !*** ./src/app/components/grid/btn-cell-renderer/btn-cell-renderer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BtnCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnCellRendererComponent", function() { return BtnCellRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BtnCellRendererComponent {
    constructor() {
        this.btnText = '';
        this.btnClass = '';
    }
    agInit(params) {
        this.params = params;
        this.btnText = params.btnText;
        this.btnClass = params.btnClass;
    }
    btnClickedHandler() {
        this.params.clicked(this.params.data.id);
    }
    ngOnInit() {
    }
}
BtnCellRendererComponent.ɵfac = function BtnCellRendererComponent_Factory(t) { return new (t || BtnCellRendererComponent)(); };
BtnCellRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnCellRendererComponent, selectors: [["app-btn-cell-renderer"]], decls: 2, vars: 3, consts: [[1, "btn", "btn-sm", 3, "click"]], template: function BtnCellRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BtnCellRendererComponent_Template_button_click_0_listener() { return ctx.btnClickedHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.btnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnText);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidG4tY2VsbC1yZW5kZXJlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Qv8w":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");


class SignUpComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.hide();
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 34, vars: 0, consts: [[1, "signup-form"], [1, "hint-text"], [1, "form-group"], [1, "row"], [1, "col"], ["type", "text", "name", "first_name", "placeholder", "First Name", "required", "required", 1, "form-control"], ["type", "text", "name", "last_name", "placeholder", "Last Name", "required", "required", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "Email", "required", "required", 1, "form-control"], ["type", "password", "name", "password", "placeholder", "Password", "required", "required", 1, "form-control"], ["type", "password", "name", "confirm_password", "placeholder", "Confirm Password", "required", "required", 1, "form-control"], [1, "form-check-label"], ["type", "checkbox", "required", "required"], ["href", "#"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "btn-block"], [1, "text-center"], ["href", "/"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create your account. It's free and only takes a minute.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".form-control[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%] {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before, .signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\r\n\tleft: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tright: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0dBQ2IsZUFBZTtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0FBQ1g7QUFDQTtDQUNDLE9BQU87QUFDUjtBQUNBO0NBQ0MsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDBDQUEwQztDQUMxQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0IiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Y29sb3I6ICM5NjlmYTQ7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNWNiODVjO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybSB7XHJcblx0d2lkdGg6IDQ1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDMwcHggMDtcclxuICBcdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDIge1xyXG5cdGNvbG9yOiAjNjM2MzYzO1xyXG5cdG1hcmdpbjogMCAwIDE1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YmVmb3JlLCAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSAuaGludC10ZXh0IHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWZvcm0gZm9ybSB7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0YmFja2dyb3VuZDogI2YyZjNmNztcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuYnRuIHsgICAgICAgIFxyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcdFx0XHJcblx0bWluLXdpZHRoOiAxNDBweDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5yb3cgZGl2OmZpcnN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpsYXN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn0gICAgXHRcclxuLnNpZ251cC1mb3JtIGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XHJcblx0Y29sb3I6ICM1Y2I4NWM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0gICJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid", "px-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Z3ix":
/*!***********************************!*\
  !*** ./src/app/master.service.ts ***!
  \***********************************/
/*! exports provided: MasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return MasterService; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MasterService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    get(queryConfig, columns) {
        const query = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
      query  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          data
        }
    }
    `;
        const reqConfig = queryConfig.variables;
        reqConfig.columns = columns;
        const variables = {
            queryInput: Object.assign({}, reqConfig)
        };
        this.query = this.apollo.watchQuery({
            query,
            variables
        });
        return this.query.valueChanges;
    }
    getById() {
    }
    create() {
    }
    update() {
    }
    delete(queryConfig, id) {
        var _a;
        const query = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation  deleteData($queryInput:QueryInput){
        deleteData(queryInput:$queryInput){
         data
        }
    } `;
        const reqConfig = {
            datatable: (_a = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.variables) === null || _a === void 0 ? void 0 : _a.datatable,
            id
        };
        const variables = {
            queryInput: Object.assign({}, reqConfig)
        };
        return this.apollo.mutate({ mutation: query, variables });
    }
    login(email, password) {
        const query = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
    mutation  login($queryInput:LoginInput){
      login(queryInput:$queryInput){
        token,
        name,
        id
        email
        }
    } `;
        const variables = {
            queryInput: { email, password }
        };
        return this.apollo.mutate({ mutation: query, variables });
    }
}
MasterService.ɵfac = function MasterService_Factory(t) { return new (t || MasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"])); };
MasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MasterService, factory: MasterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/auth-guard.service */ "pbGZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["APOLLO_OPTIONS"],
            useFactory: (httpLink) => {
                return {
                    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_10__["InMemoryCache"](),
                    link: httpLink.create({
                        uri: 'http://localhost:4000/graphql',
                    }),
                    defaultOptions
                };
            },
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpLink"]],
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]] }); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/master.service */ "Z3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dynamic-form/dynamic-form.component */ "A/Q/");






function LoginComponent_app_dynamic_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("OnSubmit", function LoginComponent_app_dynamic_form_1_Template_app_dynamic_form_OnSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardHeader", "Login")("showCancel", ctx_r0.showCancel)("formTemplate", ctx_r0.formsConfig)("submitButtonText", "Login");
} }
class LoginComponent {
    constructor(spinner, router, masterService) {
        this.spinner = spinner;
        this.router = router;
        this.masterService = masterService;
        this.formsConfig = [
            {
                "element_type": "textBox",
                "label": "email",
                "name": "email",
                "class": "col-lg-12",
                "placeholder": "name",
                "type": "text",
                "required": true
            },
            {
                "element_type": "textBox",
                "label": "password",
                "name": "password",
                "class": "col-lg-12",
                "placeholder": "address",
                "type": "password",
                "required": true
            }
        ];
        this.showCancel = false;
    }
    ngOnInit() {
        this.spinner.hide();
        if (localStorage.getItem('isLoggedin')) {
            this.router.navigateByUrl('/page');
        }
    }
    onSubmit({ email, password }) {
        this.spinner.show();
        this.masterService.login(email, password).subscribe((res) => {
            var _a;
            console.log(res);
            const userDetails = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.login;
            if (userDetails) {
                localStorage.setItem('token', userDetails['token']);
                localStorage.setItem('userDetails', JSON.stringify(userDetails));
                localStorage.setItem('isLoggedin', 'true');
            }
            this.router.navigateByUrl('/page');
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            console.log('there was an error sending the query', error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 1, consts: [[1, "signup-form"], [3, "cardHeader", "showCancel", "formTemplate", "submitButtonText", "OnSubmit", 4, "ngIf"], [1, "text-center"], ["href", "/register"], [3, "cardHeader", "showCancel", "formTemplate", "submitButtonText", "OnSubmit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_app_dynamic_form_1_Template, 1, 4, "app-dynamic-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsConfig);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__["DynamicFormComponent"]], styles: [".form-control[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%] {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before, .signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\r\n\tleft: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tright: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtHQUNiLGVBQWU7QUFDbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxPQUFPO0FBQ1I7QUFDQTtDQUNDLFFBQVE7QUFDVDtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiwwQ0FBMEM7Q0FDMUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRjb2xvcjogIzk2OWZhNDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICM1Y2I4NWM7XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmJ0biB7ICAgICAgICBcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIHtcclxuXHR3aWR0aDogNDUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cGFkZGluZzogMzBweCAwO1xyXG4gIFx0Zm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMiB7XHJcblx0Y29sb3I6ICM2MzYzNjM7XHJcblx0bWFyZ2luOiAwIDAgMTVweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMjpiZWZvcmUsIC5zaWdudXAtZm9ybSBoMjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR3aWR0aDogMzAlO1xyXG5cdGJhY2tncm91bmQ6ICNkNGQ0ZDQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cdFxyXG4uc2lnbnVwLWZvcm0gaDI6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMjphZnRlciB7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5oaW50LXRleHQge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5idG4geyAgICAgICAgXHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1x0XHRcclxuXHRtaW4td2lkdGg6IDE0MHB4O1xyXG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLnJvdyBkaXY6Zmlyc3QtY2hpbGQge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5yb3cgZGl2Omxhc3QtY2hpbGQge1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxufSAgICBcdFxyXG4uc2lnbnVwLWZvcm0gYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gZm9ybSBhIHtcclxuXHRjb2xvcjogIzVjYjg1YztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cdFxyXG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSAgIl19 */"] });


/***/ }),

/***/ "gpqJ":
/*!****************************************!*\
  !*** ./src/app/user-config.service.ts ***!
  \****************************************/
/*! exports provided: UserConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfigService", function() { return UserConfigService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserConfigService {
    constructor(http) {
        this.http = http;
        this.userConfig = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.userCast = this.userConfig.asObservable();
        this.userDetails = { appName: '', i18n: [], sidebar: [] };
    }
    fetchUserDetails() {
        this.http.get(`/config/userConfig.json`).subscribe((data) => {
            this.userDetails = data;
            this.userConfig.next(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.userDetails));
        });
    }
}
UserConfigService.ɵfac = function UserConfigService_Factory(t) { return new (t || UserConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserConfigService, factory: UserConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "t99X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid/grid.component */ "m4bG");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _grid_btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/btn-cell-renderer/btn-cell-renderer.component */ "Qhmg");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "A/Q/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
        _grid_btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_8__["BtnCellRendererComponent"],
        _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
        _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"]] }); })();


/***/ }),

/***/ "m4bG":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn-cell-renderer/btn-cell-renderer.component */ "Qhmg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





function GridComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridComponent_div_0_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const gridBtn_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.onGridBtnClick(gridBtn_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const gridBtn_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](gridBtn_r2.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gridBtn_r2 == null ? null : gridBtn_r2.title, " ");
} }
function GridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GridComponent_div_0_ng_container_6_Template, 3, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ag-grid-angular", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function GridComponent_div_0_Template_ag_grid_angular_gridReady_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onGridReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.i18n[ctx_r0.title], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gridButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r0.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultColDef", ctx_r0.defaultColDef)("frameworkComponents", ctx_r0.frameworkComponents)("rowData", ctx_r0.rowData)("columnDefs", ctx_r0.columnDefs);
} }
class GridComponent {
    constructor() {
        this.height = '300px';
        this.autoSizeCol = true;
        this.sizeColumnsToFit = true;
        this.gridButtons = [];
        this.columns = [];
        this.rowData = [];
        this.title = '';
        this.GridBtnClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.GridReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultColDef = {
            resizable: true
        };
        this.columnDefs = [];
        this.frameworkComponents = {
            btnCellRenderer: _btn_cell_renderer_btn_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["BtnCellRendererComponent"]
        };
    }
    ngOnInit() {
        this.columns.forEach(col => {
            var _a, _b;
            const colObj = {
                field: col.field,
                title: this.i18n[col.title] || col.title,
                width: col.width
            };
            if (col.type === 'action') {
                colObj.cellRenderer = "btnCellRenderer";
                colObj.cellRendererParams = {
                    btnText: (_a = col.buttonDetails) === null || _a === void 0 ? void 0 : _a.btnText,
                    btnClass: (_b = col.buttonDetails) === null || _b === void 0 ? void 0 : _b.btnClass,
                    clicked: (id) => {
                        var _a, _b;
                        this.onGridBtnClick({
                            action: (_a = col.buttonDetails) === null || _a === void 0 ? void 0 : _a.action, url: (_b = col.buttonDetails) === null || _b === void 0 ? void 0 : _b.url,
                            id, title: this.title
                        });
                    }
                };
            }
            this.columnDefs.push(colObj);
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        if (this.autoSizeCol)
            this.autoSizeAll(this.autoSizeCol);
        if (this.sizeColumnsToFit)
            this.gridApi.sizeColumnsToFit();
        this.GridReady.emit({ params });
    }
    autoSizeAll(skipHeader) {
        const allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
    }
    onGridBtnClick(event) {
        this.GridBtnClickEvent.emit(event);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], inputs: { height: "height", autoSizeCol: "autoSizeCol", sizeColumnsToFit: "sizeColumnsToFit", gridButtons: "gridButtons", columns: "columns", rowData: "rowData", title: "title", i18n: "i18n", defaultColDef: "defaultColDef" }, outputs: { GridBtnClickEvent: "GridBtnClickEvent", GridReady: "GridReady" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "d-inline"], [1, "d-flex", "justify-content-end"], [4, "ngFor", "ngForOf"], [1, "ag-theme-alpine", 3, "defaultColDef", "frameworkComponents", "rowData", "columnDefs", "gridReady"], [1, "btn", "ml-3", 3, "click"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridComponent_div_0_Template, 8, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.i18n);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "pbGZ":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "t99X":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "active": a0 }; };
function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r2 === ctx_r0.breadcrumbList.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class BreadcrumbComponent {
    constructor() {
        this.breadcrumbList = [];
    }
    ngOnInit() {
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { breadcrumbList: "breadcrumbList" }, decls: 2, vars: 1, consts: [[1, "breadcrumb", "mt-2"], ["class", "breadcrumb-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", 3, "ngClass"], ["href", "#"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_li_1_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth-guard.service */ "pbGZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] },
    {
        path: 'page',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule), canActivate: [_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: '**', redirectTo: 'app', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user-config.service */ "gpqJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0) { return [a0]; };
function SidebarComponent_div_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r2.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.i18n[item_r2.title] || item_r2.title, " ");
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Core");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_div_0_a_6_Template, 4, 6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manage trucks -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " @transport-management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sidebar);
} }
class SidebarComponent {
    constructor(userService) {
        this.userService = userService;
        this.sidebar = [];
    }
    ngOnInit() {
        this.userConfigSub = this.userService.userCast.subscribe((userDetails) => {
            var _a;
            if (userDetails.appName) {
                (_a = this.userConfigSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                this.i18n = userDetails.i18n[0].translations;
                this.sidebar = userDetails.sidebarConfig;
            }
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_config_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 1, vars: 1, consts: [["id", "layoutSidenav_nav", 4, "ngIf"], ["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-dark"], [1, "sb-sidenav-menu"], [1, "nav"], [1, "sb-sidenav-menu-heading"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "sb-sidenav-footer"], [1, "small"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "sb-nav-link-icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 11, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.i18n);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map