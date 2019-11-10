function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hr-files-hr-module"], {
  /***/
  "./src/app/hr-files/hr-files-search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/hr-files/hr-files-search.component.ts ***!
    \*******************************************************/

  /*! exports provided: HrFilesSearchComponent */

  /***/
  function srcAppHrFilesHrFilesSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrFilesSearchComponent", function () {
      return HrFilesSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_search_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/search-box.component */
    "./src/app/shared/search-box.component.ts");

    var HrFilesSearchComponent = function HrFilesSearchComponent() {
      _classCallCheck(this, HrFilesSearchComponent);
    };

    HrFilesSearchComponent.ɵfac = function HrFilesSearchComponent_Factory(t) {
      return new (t || HrFilesSearchComponent)();
    };

    HrFilesSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HrFilesSearchComponent,
      selectors: [["hr-files-search"]],
      decls: 7,
      vars: 0,
      consts: [[1, "card"], [1, "card-content"], [1, "card-title"]],
      template: function HrFilesSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HR Functionality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search for Employee HR Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "search-box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_search_box_component__WEBPACK_IMPORTED_MODULE_1__["SearchBoxComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrFilesSearchComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'hr-files-search',
        template: "\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">HR Functionality</span>\n        <div>Search for Employee HR Records</div>\n        <search-box></search-box>\n      </div>\n    </div>\n  "
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/hr-files/hr.module.ts":
  /*!***************************************!*\
    !*** ./src/app/hr-files/hr.module.ts ***!
    \***************************************/

  /*! exports provided: HrModule */

  /***/
  function srcAppHrFilesHrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrModule", function () {
      return HrModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _hr_files_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hr-files-search.component */
    "./src/app/hr-files/hr-files-search.component.ts");

    var hrRoutes = [{
      path: '',
      component: _hr_files_search_component__WEBPACK_IMPORTED_MODULE_4__["HrFilesSearchComponent"]
    }];

    var HrModule = function HrModule() {
      _classCallCheck(this, HrModule);
    };

    HrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HrModule
    });
    HrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HrModule_Factory(t) {
        return new (t || HrModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(hrRoutes)] // import MODULES
      ]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HrModule, {
      declarations: [_hr_files_search_component__WEBPACK_IMPORTED_MODULE_4__["HrFilesSearchComponent"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      exports: [_hr_files_search_component__WEBPACK_IMPORTED_MODULE_4__["HrFilesSearchComponent"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HrModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [_hr_files_search_component__WEBPACK_IMPORTED_MODULE_4__["HrFilesSearchComponent"]],
        exports: [_hr_files_search_component__WEBPACK_IMPORTED_MODULE_4__["HrFilesSearchComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(hrRoutes)] // import MODULES

      }]
    }], null, null);
    /***/

  }
}]); //# sourceMappingURL=hr-files-hr-module-es2015.js.map
//# sourceMappingURL=hr-files-hr-module-es5.js.map