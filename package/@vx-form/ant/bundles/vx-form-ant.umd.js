(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/http'), require('@angular/cdk/drag-drop'), require('@angular/common/http'), require('@ngx-translate/core'), require('@angular/cdk/overlay'), require('ng-zorro-antd'), require('@ant-design/icons-angular/icons'), require('@angular/common/locales/zh'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/message'), require('@vx-form/core'), require('@angular/forms'), require('lodash'), require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@vx-form/ant', ['exports', 'moment', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/http', '@angular/cdk/drag-drop', '@angular/common/http', '@ngx-translate/core', '@angular/cdk/overlay', 'ng-zorro-antd', '@ant-design/icons-angular/icons', '@angular/common/locales/zh', 'ng-zorro-antd/modal', 'ng-zorro-antd/message', '@vx-form/core', '@angular/forms', 'lodash', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['vx-form'] = global['vx-form'] || {}, global['vx-form'].ant = {}),global.moment_,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.http,global.ng.cdk['drag-drop'],global.ng.common.http,global.core,global.ng.cdk.overlay,global.ngZorroAntd,global.icons,global.ng.common.locales.zh,global.i1$1,global.message,global.core$1,global.ng.forms,global._,global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,moment_,rxjs,operators,common,http,dragDrop,i1,core,overlay,ngZorroAntd,icons,zh,i1$1,message,core$1,forms,_,i0,platformBrowser) { 'use strict';

    zh = zh && zh.hasOwnProperty('default') ? zh['default'] : zh;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormAntService = /** @class */ (function () {
        function VXFormAntService() {
            this.btnEvent = new i0.EventEmitter();
            this.fieldEvent = new i0.EventEmitter();
            this.workList = [];
        }
        /**
         * @param {?} sign
         * @param {?} field
         * @return {?}
         */
        VXFormAntService.prototype.fieldOperational = /**
         * @param {?} sign
         * @param {?} field
         * @return {?}
         */
            function (sign, field) {
                this.fieldEvent.emit({
                    sign: sign,
                    field: field
                });
            };
        /**
         * @param {?} type
         * @param {?} field
         * @return {?}
         */
        VXFormAntService.prototype.groupOperational = /**
         * @param {?} type
         * @param {?} field
         * @return {?}
         */
            function (type, field) {
                this.btnEvent.emit({
                    type: type,
                    field: field
                });
            };
        VXFormAntService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXFormAntService.ctorParameters = function () { return []; };
        return VXFormAntService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldText = /** @class */ (function (_super) {
        __extends(VXFormFieldText, _super);
        function VXFormFieldText(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldText.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldText.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-text",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <input\n          nz-input\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        />\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldText.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldText;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldTextI18n = /** @class */ (function (_super) {
        __extends(VXFormFieldTextI18n, _super);
        function VXFormFieldTextI18n() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.triggerWidth = "260px";
            _this.languageList = [
                { languagetype: "chinese", resvalue: "" },
                { languagetype: "english", resvalue: "" },
                { languagetype: "english2", resvalue: "" }
            ];
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormFieldTextI18n.prototype.resize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.visibleChange(event);
            };
        Object.defineProperty(VXFormFieldTextI18n.prototype, "language", {
            get: /**
             * @return {?}
             */ function () {
                if (this.model != undefined &&
                    this.model != null &&
                    this.key != undefined &&
                    this.key != null &&
                    this.model.hasOwnProperty(this.key)) {
                    if (this.formControl.value != undefined &&
                        this.formControl.value != null &&
                        this.formControl.value != [] &&
                        this.formControl.value.length > 0) {
                        if (this.formControl.value != this.languageList) {
                            this.languageList = this.formControl.value;
                        }
                    }
                }
                return this.languageList;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        VXFormFieldTextI18n.prototype.onChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.to.required) {
                    /** @type {?} */
                    var empty = this.languageList.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return (item.resvalue === null ||
                            item.resvalue === "" ||
                            item.resvalue === " ");
                    }));
                    if (empty) {
                        this.formControl.setValue([]);
                    }
                    else {
                        this.formControl.setValue(this.languageList);
                    }
                }
                else {
                    this.formControl.setValue(this.languageList);
                }
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormFieldTextI18n.prototype.visibleChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event) {
                    if (this.cdkOverlayOrigin !== undefined) {
                        this.triggerWidth =
                            this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect()
                                .width -
                                24 +
                                "px";
                    }
                }
            };
        Object.defineProperty(VXFormFieldTextI18n.prototype, "langText", {
            get: /**
             * @return {?}
             */ function () {
                if (this.model != undefined &&
                    this.model != null &&
                    this.key != undefined &&
                    this.key != null &&
                    this.model[this.key] != undefined) {
                    /** @type {?} */
                    var lang = this.model[this.key];
                    if (lang != undefined &&
                        lang != null &&
                        lang != "" &&
                        lang instanceof Array &&
                        lang.length > 0) {
                        return lang[0]["resvalue"];
                    }
                    return "";
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        VXFormFieldTextI18n.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-field-inputi18n",
                        template: "\n    <ng-container *ngIf=\"editor === true\">\n      <div class=\"inputi18n\" cdkOverlayOrigin>\n        <input\n          nz-input\n          [(ngModel)]=\"language[0].resvalue\"\n          [vxFormAttributes]=\"field\"\n          (ngModelChange)=\"onChange(language[0].resvalue)\"\n          nz-popover\n          nzPopoverTrigger=\"click\"\n          [nzPopoverContent]=\"contentTemplate\"\n          nzOverlayClassName=\"inputi18n-template\"\n          nzPopoverPlacement=\"bottom\"\n          [nzOverlayStyle]=\"{ width: triggerWidth }\"\n          (nzVisibleChange)=\"visibleChange($event)\"\n        />\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </div>\n      <ng-template #contentTemplate>\n        <ul>\n          <ng-container *ngFor=\"let item of language; let i = index\">\n            <li *ngIf=\"i > 0\">\n              <label>{{ item.languagetype }}</label>\n              <input\n                nz-input\n                [(ngModel)]=\"item.resvalue\"\n                [vxFormAttributes]=\"field\"\n                (ngModelChange)=\"onChange(item.resvalue)\"\n              />\n            </li>\n          </ng-container>\n        </ul>\n      </ng-template>\n    </ng-container>\n    <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ langText }}</div>\n  "
                    }] }
        ];
        VXFormFieldTextI18n.propDecorators = {
            cdkOverlayOrigin: [{ type: i0.ViewChild, args: [overlay.CdkOverlayOrigin, { static: false },] }],
            resize: [{ type: i0.HostListener, args: ["window:resize", ["$event"],] }]
        };
        return VXFormFieldTextI18n;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldTextArea = /** @class */ (function (_super) {
        __extends(VXFormFieldTextArea, _super);
        function VXFormFieldTextArea(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldTextArea.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldTextArea.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-textarea",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <textarea nz-input disabled rows=\"4\"> </textarea>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <textarea\n          nz-input\n          [formControl]=\"formControl\"\n          class=\"form-control\"\n          [class.is-invalid]=\"showError\"\n          [vxFormAttributes]=\"field\"\n          rows=\"4\"\n        >\n        </textarea>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div\n        class=\"fieldtext\"\n        *ngIf=\"editor === false\"\n        [innerHTML]=\"text | replaceLine\"\n      ></div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldTextArea.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldTextArea;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldNumber = /** @class */ (function (_super) {
        __extends(VXFormFieldNumber, _super);
        function VXFormFieldNumber(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        Object.defineProperty(VXFormFieldNumber.prototype, "precision", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var result = 0;
                if (this.to != undefined && this.to != null && this.to["precision"] != undefined && this.to["precision"] != null) {
                    result = this.to["precision"];
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldNumber.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldNumber.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-number",
                        template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n    <div class=\"fieldOperational\">\n      <div class=\"fieldcheckbox\">\n        <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n      </div>\n      <div class=\"fieldControl\">\n        <div class=\"label\">\n          <span *ngIf=\"to.required\">*</span>{{ to.label }}\n        </div>\n        <div class=\"control\">\n          <input nz-input disabled />\n        </div>\n        <div class=\"fieldButton\">\n          <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n            <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n          </button>\n          <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n            <i class=\"icon-KT-Close\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"formStatus === 0\">\n    <ng-container *ngIf=\"editor === true\">\n      <nz-input-number\n        [formControl]=\"formControl\"\n        class=\"form-control\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n        [nzPlaceHolder]=\"placeHolder\"\n        [nzPrecision]=\"precision\"\n      ></nz-input-number>\n      <div class=\"tips\">\n        <i\n          class=\"icon-bangzhu\"\n          [nzTooltipTitle]=\"tips\"\n          nzTooltipPlacement=\"top\"\n          nz-tooltip\n          *ngIf=\"tips != ''\"\n        ></i>\n      </div>\n    </ng-container>\n\n    <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n  </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldNumber.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldNumber;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldPassWord = /** @class */ (function (_super) {
        __extends(VXFormFieldPassWord, _super);
        function VXFormFieldPassWord(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldPassWord.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldPassWord.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-password",
                        template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n  <div class=\"fieldOperational\">\n    <div class=\"fieldcheckbox\">\n      <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n    </div>\n    <div class=\"fieldControl\">\n      <div class=\"label\">\n        <span *ngIf=\"to.required\">*</span>{{ to.label }}\n      </div>\n      <div class=\"control\">\n        <input nz-input disabled />\n      </div>\n      <div class=\"fieldButton\">\n        <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n          <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n        </button>\n        <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n          <i class=\"icon-KT-Close\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"formStatus === 0\">\n  <ng-container *ngIf=\"editor === true\">\n    <input\n      nz-input\n      [formControl]=\"formControl\"\n      [vxFormAttributes]=\"field\"\n      [class.is-invalid]=\"showError\"\n      [type]=\"'password'\"\n    />\n    <div class=\"tips\">\n      <i\n        class=\"icon-bangzhu\"\n        [nzTooltipTitle]=\"tips\"\n        nzTooltipPlacement=\"top\"\n        nz-tooltip\n        *ngIf=\"tips != ''\"\n      ></i>\n    </div>\n  </ng-container>\n\n  <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n</ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldPassWord.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldPassWord;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldRadio = /** @class */ (function (_super) {
        __extends(VXFormFieldRadio, _super);
        function VXFormFieldRadio(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldRadio.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-radio",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <label nz-radio nzDisabled=\"true\"></label>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <label\n          nz-radio\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        ></label>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldRadio.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldRadio;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldRadioGroup = /** @class */ (function (_super) {
        __extends(VXFormFieldRadioGroup, _super);
        function VXFormFieldRadioGroup(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldRadioGroup.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldRadioGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-radiogroup",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <nz-radio-group\n              [nzName]=\"'radiogroup-' + guid\"\n              [formControl]=\"formControl\"\n              [vxFormAttributes]=\"field\"\n              [class.is-invalid]=\"showError\"\n            >\n              <ng-container *ngFor=\"let item of to.options\">\n                <label nz-radio [nzValue]=\"item.value\" nzDisabled=\"true\">{{\n                  item.label\n                }}</label>\n              </ng-container>\n            </nz-radio-group>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-radio-group\n          [nzName]=\"'radiogroup-' + guid\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let item of to.options\">\n            <label nz-radio [nzValue]=\"item.value\">{{ item.label }}</label>\n          </ng-container>\n        </nz-radio-group>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textSingle }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldRadioGroup.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldRadioGroup;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldCheckbox = /** @class */ (function (_super) {
        __extends(VXFormFieldCheckbox, _super);
        function VXFormFieldCheckbox(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldCheckbox.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldCheckbox.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-checkbox",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <label nz-checkbox nzDisabled=\"true\"></label>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <label\n          nz-checkbox\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        ></label>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldCheckbox.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldCheckbox;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldCheckboxGroup = /** @class */ (function (_super) {
        __extends(VXFormFieldCheckboxGroup, _super);
        function VXFormFieldCheckboxGroup(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldCheckboxGroup.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        /**
         * @param {?} values
         * @return {?}
         */
        VXFormFieldCheckboxGroup.prototype.onChange = /**
         * @param {?} values
         * @return {?}
         */
            function (values) {
                var _this = this;
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (_this.to.options !== undefined && _this.to.options !== null) {
                            _this.to.options.forEach(( /**
                             * @param {?} option
                             * @return {?}
                             */function (option) {
                                if (option["value"] === value) ;
                            }));
                        }
                    }));
                }
                this.formControl.patchValue(values);
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} option
         * @return {?}
         */
        VXFormFieldCheckboxGroup.prototype.getCheckStatus = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                this.formControl.value;
            };
        /**
         * @param {?} values
         * @param {?} option
         * @return {?}
         */
        VXFormFieldCheckboxGroup.prototype.getControlChecked = /**
         * @param {?} values
         * @param {?} option
         * @return {?}
         */
            function (values, option) {
                /** @type {?} */
                var result = false;
                if (option && values) {
                    result = values.some(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        return value == option.value;
                    }));
                }
                return result;
            };
        VXFormFieldCheckboxGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-checkboxgroup",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <nz-checkbox-wrapper\n              style=\"width: 100%;\"\n              (nzOnChange)=\"onChange($event)\"\n              [class.is-invalid]=\"showError\"\n            >\n              <ng-container *ngFor=\"let option of to.options; let i = index\">\n                <label\n                  nz-checkbox\n                  [nzValue]=\"option.value\"\n                  [ngModel]=\"getControlChecked(formControl.value, option)\"\n                  [vxFormAttributes]=\"field\"\n                  disabled\n                  >{{ option.label }}</label\n                >\n              </ng-container>\n            </nz-checkbox-wrapper>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-checkbox-wrapper\n          style=\"width: 100%;\"\n          (nzOnChange)=\"onChange($event)\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let option of to.options; let i = index\">\n            <label\n              nz-checkbox\n              [nzValue]=\"option.value\"\n              [ngModel]=\"getControlChecked(formControl.value, option)\"\n              [vxFormAttributes]=\"field\"\n              >{{ option.label }}</label\n            >\n          </ng-container>\n        </nz-checkbox-wrapper>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textMultiple }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldCheckboxGroup.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldCheckboxGroup;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldSelect = /** @class */ (function (_super) {
        __extends(VXFormFieldSelect, _super);
        function VXFormFieldSelect(dyService) {
            var _this = _super.call(this) || this;
            _this.defaultValue = "";
            _this.defaultValues = [];
            _this.selecttype = "default";
            _this.service = dyService;
            return _this;
        }
        /**
         * @return {?}
         */
        VXFormFieldSelect.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.to.selecttype === "multiple") {
                    this.selecttype = "multiple";
                    if (this.field.defaultValue && this.field.defaultValue != null) {
                        this.defaultValues = this.field.defaultValue.split(",");
                    }
                }
                else {
                    this.defaultValue = this.field.defaultValue;
                }
            };
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldSelect.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        /**
         * @return {?}
         */
        VXFormFieldSelect.prototype.getSelectText = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result = "";
                if (this.to && this.to.selecttype) {
                    if (this.to.selecttype === "single") {
                        result = this.textSingle;
                    }
                    else if (this.to.selecttype === "multiple") {
                        result = this.textMultiple;
                    }
                }
                return result;
            };
        VXFormFieldSelect.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-select",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-select\n          nzShowSearch\n          nzAllowClear\n          [nzMode]=\"to.selecttype === 'multiple' ? 'multiple' : 'default'\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n          [nzPlaceHolder]=\"placeHolder\"\n        >\n          <ng-container *ngFor=\"let item of to.options\">\n            <nz-option\n              [nzLabel]=\"item.label\"\n              [nzValue]=\"item.value\"\n            ></nz-option>\n          </ng-container>\n        </nz-select>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">\n        {{ getSelectText() }}\n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldSelect.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldSelect;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;
    var VXFormFieldDateTime = /** @class */ (function (_super) {
        __extends(VXFormFieldDateTime, _super);
        function VXFormFieldDateTime(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        Object.defineProperty(VXFormFieldDateTime.prototype, "format", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var result = "yyyy-MM-dd HH:mm:ss";
                if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
                    result = this.to["format"];
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldDateTime.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        /**
         * @return {?}
         */
        VXFormFieldDateTime.prototype.getText = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result = "";
                if (this.to.type != undefined && this.to.type != null) {
                    if (this.model != undefined &&
                        this.model != null &&
                        this.field != undefined &&
                        this.field != null &&
                        this.field.key != undefined &&
                        this.field.key != null &&
                        this.model[this.field.key] != undefined &&
                        this.model[this.field.key] != null &&
                        this.model[this.field.key] != "") {
                        switch (this.to.type) {
                            case "datetime":
                                result = moment(this.model[this.field.key]).format("yyyy-MM-DD HH:mm:ss");
                                break;
                            case "date":
                                result = moment(this.model[this.field.key]).format("YYYY-MM-DD");
                                break;
                            case "year":
                                result = moment(this.model[this.field.key]).format("YYYY");
                                break;
                            case "month":
                                result = moment(this.model[this.field.key]).format("YYYY-MM");
                                break;
                            case "time":
                                result = moment(this.model[this.field.key]).format("HH:mm");
                                break;
                        }
                    }
                }
                return result;
            };
        VXFormFieldDateTime.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-datetime",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\"\n      ><ng-container *ngIf=\"editor === true\"> \n          <nz-date-picker \n            nzShowTime\n            [nzFormat]=\"format\"\n            [formControl]=\"formControl\"\n            [vxFormAttributes]=\"field\"\n            [class.is-invalid]=\"showError\"\n          ></nz-date-picker>\n \n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ getText() }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldDateTime.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldDateTime;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldImage = /** @class */ (function (_super) {
        __extends(VXFormFieldImage, _super);
        function VXFormFieldImage(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldImage.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldImage.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-image",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-avatar\n        nzIcon=\"user\"\n        nzSrc=\"//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\"\n      ></nz-avatar>\n      <div class=\"tips\">\n        <i\n          class=\"icon-bangzhu\"\n          [nzTooltipTitle]=\"tips\"\n          nzTooltipPlacement=\"top\"\n          nz-tooltip\n          *ngIf=\"tips != ''\"\n        ></i>\n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldImage.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldImage;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldUpload = /** @class */ (function (_super) {
        __extends(VXFormFieldUpload, _super);
        function VXFormFieldUpload(dyService, msg) {
            var _this = _super.call(this) || this;
            _this.msg = msg;
            _this.defaultFileList = [];
            _this.handleRemove = ( /**
             * @param {?} file
             * @return {?}
             */function (file) {
                return new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    observer.next(true);
                    observer.complete();
                }));
            });
            _this.beforeUpload = ( /**
             * @param {?} file
             * @return {?}
             */function (file) {
                return new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    /** @type {?} */
                    var isJPG = file.type === "image/jpeg";
                    console.log(file);
                    if (!_this.checkFileType(file)) {
                        _this.msg.error("您上传的文件类型不符合要求！");
                        observer.complete();
                        return;
                    }
                    if (!_this.checkFileSize(file)) {
                        _this.msg.error("您上传的文件大小已经超出最大设置");
                        observer.complete();
                        return;
                    }
                    observer.next(true);
                    observer.complete();
                }));
            });
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldUpload.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        VXFormFieldUpload.prototype.handleChange = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var file = _a.file, fileList = _a.fileList;
                debugger;
                /** @type {?} */
                var status = file.status;
                if (status === "done") {
                    /** @type {?} */
                    var values = fileList.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return {
                            uid: item.uid,
                            name: item.name,
                            url: item.url
                        };
                    }));
                    /* this.model[this.field.key] = values;
                    this.formControl.markAsTouched(); */
                    this.formControl.patchValue(values);
                    this.formControl.markAsTouched();
                    this.msg.success("\u6587\u4EF6" + file.name + " \u4E0A\u4F20\u6210\u529F\uFF01");
                }
                else if (status === "error") {
                    this.msg.error("\u6587\u4EF6" + file.name + " \u4E0A\u4F20\u5931\u8D25\uFF01");
                }
                if (status === "removed") {
                    /** @type {?} */
                    var values = this.formControl.value;
                    values.forEach(( /**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */function (item, index, object) {
                        if (item.uid === file.uid) {
                            object.splice(index, 1);
                        }
                    }));
                    //this.formControl.patchValue(values);
                    //this.formControl.markAsTouched();
                    this.msg.success("\u6587\u4EF6" + file.name + " \u5220\u9664\u6210\u529F\uFF01");
                }
            };
        /**
         * @param {?} file
         * @return {?}
         */
        VXFormFieldUpload.prototype.checkFileType = /**
         * @param {?} file
         * @return {?}
         */
            function (file) {
                /** @type {?} */
                var result = true;
                if (this.field &&
                    this.field.templateOptions &&
                    this.field.templateOptions.attachment &&
                    this.field.templateOptions.attachment.type) {
                    /** @type {?} */
                    var types = this.field.templateOptions.attachment.type;
                    if (types != undefined && types != null && types != "") {
                        result = types.split(",").some(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            return file.type === item;
                        }));
                    }
                }
                return result;
            };
        /**
         * @param {?} file
         * @return {?}
         */
        VXFormFieldUpload.prototype.checkFileSize = /**
         * @param {?} file
         * @return {?}
         */
            function (file) {
                /** @type {?} */
                var result = true;
                if (this.field &&
                    this.field.templateOptions &&
                    this.field.templateOptions.attachment &&
                    this.field.templateOptions.attachment.size) {
                    /** @type {?} */
                    var size = this.field.templateOptions.attachment.size;
                    if (size != undefined && size != null) {
                        result = file.size / 1024 / 1024 <= size;
                    }
                }
                return result;
            };
        VXFormFieldUpload.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-upload",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <nz-upload nzType=\"drag\" [nzDisabled]=\"true\">\n              <p class=\"ant-upload-drag-icon\"></p>\n              <p class=\"ant-upload-text\">\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20</p>\n              <p class=\"ant-upload-hint\">\n                \u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\u4E0A\u4F20\u3002\u4E25\u7981\u4E0A\u4F20\u4E0D\u6CD5\u6587\u4EF6\uFF0C\u8C22\u8C22!\n              </p>\n            </nz-upload>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-upload\n        nzType=\"drag\"\n        nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\n        [nzFileList]=\"defaultFileList\"\n        [nzMultiple]=\"true\"\n        (nzChange)=\"handleChange($event)\"\n        [class.is-invalid]=\"showError\"\n      >\n        <p class=\"ant-upload-drag-icon\"></p>\n        <p class=\"ant-upload-text\">\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20</p>\n        <p class=\"ant-upload-hint\">\n          \u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\u4E0A\u4F20\u3002\u4E25\u7981\u4E0A\u4F20\u4E0D\u6CD5\u6587\u4EF6\uFF0C\u8C22\u8C22!\n        </p>\n      </nz-upload>\n      <div class=\"tips\"></div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldUpload.ctorParameters = function () {
            return [
                { type: VXFormAntService },
                { type: message.NzMessageService }
            ];
        };
        return VXFormFieldUpload;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXDialogService = /** @class */ (function () {
        function VXDialogService(modalService) {
            this.modalService = modalService;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        VXDialogService.prototype.switchSize = /**
         * @param {?} size
         * @return {?}
         */
            function (size) {
                /** @type {?} */
                var obj = {
                    width: 700,
                    height: 500
                };
                switch (size) {
                    case "small":
                        obj.width = 530;
                        obj.height = 400;
                        break;
                    case "medium":
                        obj.width = 700;
                        obj.height = 500;
                        break;
                    case "large":
                        obj.width = 950;
                        obj.height = 600;
                        break;
                    default:
                        obj.width = 700;
                        obj.height = 500;
                        break;
                }
                return obj;
            };
        /**
         * @param {?} modalOptions
         * @param {?} params
         * @param {?} callback
         * @return {?}
         */
        VXDialogService.prototype.CreateModelDialog = /**
         * @param {?} modalOptions
         * @param {?} params
         * @param {?} callback
         * @return {?}
         */
            function (modalOptions, params, callback) {
                /** @type {?} */
                var width = this.switchSize(modalOptions.size).width;
                /** @type {?} */
                var height = this.switchSize(modalOptions.size).height;
                /** @type {?} */
                var modal = this.modalService.create({
                    nzTitle: modalOptions.nzTitle ? modalOptions.nzTitle : "提示",
                    nzWidth: width + "px",
                    nzClosable: true,
                    nzMaskClosable: false,
                    nzWrapClassName: modalOptions["vertical"] ? "vertical-center-modal" : "",
                    nzBodyStyle: {
                        padding: "0",
                        height: !modalOptions["hideBtn"]
                            ? height - 107 + "px"
                            : height - 54 + "px"
                    },
                    nzContent: modalOptions.nzContent,
                    nzFooter: !modalOptions["hideBtn"]
                        ? [
                            {
                                show: true,
                                label: "取消",
                                type: "default",
                                onClick: ( /**
                                 * @param {?} componentInstance
                                 * @return {?}
                                 */function (componentInstance) {
                                    modal.destroy();
                                })
                            },
                            {
                                show: modalOptions["showResetBtn"],
                                label: "重置",
                                type: "default",
                                onClick: ( /**
                                 * @param {?} componentInstance
                                 * @return {?}
                                 */function (componentInstance) { return callback(componentInstance, modal); })
                            },
                            {
                                show: true,
                                label: modalOptions["primaryLabel"]
                                    ? modalOptions["primaryLabel"]
                                    : "确定",
                                type: "primary",
                                onClick: ( /**
                                 * @param {?} componentInstance
                                 * @return {?}
                                 */function (componentInstance) { return callback(componentInstance, modal); })
                            }
                        ]
                        : null,
                    nzOnOk: ( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) { }),
                    nzOnCancel: ( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) { }),
                    nzComponentParams: params
                });
                modal.afterClose.subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result) {
                        callback(result);
                    }
                }));
            };
        VXDialogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        VXDialogService.ctorParameters = function () {
            return [
                { type: ngZorroAntd.NzModalService }
            ];
        };
        /** @nocollapse */ VXDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXDialogService_Factory() { return new VXDialogService(i0.ɵɵinject(i1$1.NzModalService)); }, token: VXDialogService, providedIn: "root" });
        return VXDialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var _HttpClient = /** @class */ (function () {
        function _HttpClient(http$$1) {
            this.http = http$$1;
            this._loading = false;
        }
        Object.defineProperty(_HttpClient.prototype, "loading", {
            get: /**
             * @return {?}
             */ function () {
                return this._loading;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} params
         * @return {?}
         */
        _HttpClient.prototype.parseParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                /*const newParams = {};
                Object.keys(params).forEach(key => {
                  let _data = params[key];
            
                  newParams[key] = _data;
                });*/
                if (params === undefined || params === null) {
                    params = {};
                }
                return new i1.HttpParams({ fromObject: params });
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        _HttpClient.prototype.formEncode = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                /** @type {?} */
                var encodedString = "";
                for (var key in obj) {
                    if (encodedString.length !== 0) {
                        encodedString += "&";
                    }
                    encodedString += key + "=" + encodeURIComponent(obj[key]);
                }
                return encodedString;
            };
        /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
        _HttpClient.prototype.appliedUrl = /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
            function (url, params) {
                if (!params)
                    return url;
                url += ~url.indexOf("?") ? "" : "?";
                /** @type {?} */
                var arr = [];
                for (var key in params) {
                    arr.push(key + "=" + params[key]);
                }
                return url + arr.join("&");
            };
        /**
         * @return {?}
         */
        _HttpClient.prototype.begin = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () { return (_this._loading = true); }));
            };
        /**
         * @return {?}
         */
        _HttpClient.prototype.end = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () { return (_this._loading = false); }));
            };
        /**
         * GET 请求
         */
        /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.get = /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, params, options) {
                return this.request("GET", url, Object.assign({
                    params: params
                }, options));
            };
        /**
         * POST 请求
         */
        /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.post = /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, body, params, options) {
                return this.request("POST", url, Object.assign({
                    body: body,
                    params: params
                }, options));
            };
        /**
         * DELETE 请求
         */
        /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.delete = /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, params, options) {
                return this.request("DELETE", url, Object.assign({
                    params: params
                }, options));
            };
        /**
         * `jsonp` 请求
         *
         * @param url URL地址
         * @param params 请求参数
         * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
         */
        /**
         * `jsonp` 请求
         *
         * @param {?} url URL地址
         * @param {?=} params 请求参数
         * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
         * @return {?}
         */
        _HttpClient.prototype.jsonp = /**
         * `jsonp` 请求
         *
         * @param {?} url URL地址
         * @param {?=} params 请求参数
         * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
         * @return {?}
         */
            function (url, params, callbackParam) {
                var _this = this;
                if (callbackParam === void 0) {
                    callbackParam = "JSONP_CALLBACK";
                }
                return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(operators.tap(( /**
                 * @return {?}
                 */function () {
                    _this.end();
                })), operators.catchError(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.end();
                    return rxjs.throwError(res);
                })));
            };
        /**
         * PATCH 请求
         */
        /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.patch = /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, body, params, options) {
                return this.request("PATCH", url, Object.assign({
                    body: body,
                    params: params
                }, options));
            };
        /**
         * PUT 请求
         */
        /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.put = /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, body, params, options) {
                return this.request("PUT", url, Object.assign({
                    body: body,
                    params: params
                }, options));
            };
        /**
         * `request` 请求
         *
         * @param method 请求方法类型
         * @param url URL地址
         * @param options 参数
         */
        /**
         * `request` 请求
         *
         * @param {?} method 请求方法类型
         * @param {?} url URL地址
         * @param {?=} options 参数
         * @return {?}
         */
        _HttpClient.prototype.request = /**
         * `request` 请求
         *
         * @param {?} method 请求方法类型
         * @param {?} url URL地址
         * @param {?=} options 参数
         * @return {?}
         */
            function (method, url, options) {
                var _this = this;
                this.begin();
                if (options) {
                    if (options.params)
                        options.params = this.parseParams(options.params);
                    if (options.body) ;
                }
                return this.http.request(method, url, options).pipe(operators.tap(( /**
                 * @return {?}
                 */function () {
                    _this.end();
                })), operators.catchError(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.end();
                    return rxjs.throwError(res);
                })));
            };
        _HttpClient.decorators = [
            { type: i0.Injectable, args: [{ providedIn: "root" },] }
        ];
        /** @nocollapse */
        _HttpClient.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ _HttpClient.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1.HttpClient)); }, token: _HttpClient, providedIn: "root" });
        return _HttpClient;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataService = /** @class */ (function () {
        function DataService(_http) {
            this._http = _http;
        }
        //根据Id|其他 获取相关表信息
        //根据Id|其他 获取相关表信息
        /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getBusinessTables =
            //根据Id|其他 获取相关表信息
            /**
             * @param {?} url
             * @param {?=} params
             * @return {?}
             */
            function (url, params) {
                if (params === void 0) {
                    params = {};
                }
                return this._http.get(url, params);
            };
        /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getFormInfo = /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
            function (url, params) {
                if (params === void 0) {
                    params = {};
                }
                return this._http.get(url, params);
            };
        //系统控件-人员
        //系统控件-人员
        /**
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getSysCtrEmployee =
            //系统控件-人员
            /**
             * @param {?=} params
             * @return {?}
             */
            function (params) {
                if (params === void 0) {
                    params = {};
                }
                //let url = "emptable.json";
                /** @type {?} */
                var url = this.getWebAPIName("employee");
                /** @type {?} */
                var result = this._http.get(url, params);
                return result;
            };
        //系统控件-组织
        //系统控件-组织
        /**
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getSysCtrOrgTree =
            //系统控件-组织
            /**
             * @param {?=} params
             * @return {?}
             */
            function (params) {
                if (params === void 0) {
                    params = {};
                }
                //let url = "org-tree.json";
                /** @type {?} */
                var url = this.getWebAPIName("organization");
                return this._http.get(url, params);
            };
        //系统控件-职位
        //系统控件-职位
        /**
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getSysCtrPostionTable =
            //系统控件-职位
            /**
             * @param {?=} params
             * @return {?}
             */
            function (params) {
                if (params === void 0) {
                    params = {};
                }
                //let url = "postiontable.json";
                /** @type {?} */
                var url = this.getWebAPIName("postion");
                return this._http.get(url, params);
            };
        //系统控件-地区
        //系统控件-地区
        /**
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getSysCtrArea =
            //系统控件-地区
            /**
             * @param {?=} params
             * @return {?}
             */
            function (params) {
                if (params === void 0) {
                    params = {};
                }
                /** @type {?} */
                var url = "tables.json";
                return this._http.get(url, params);
            };
        //树形数据
        //树形数据
        /**
         * @param {?=} params
         * @return {?}
         */
        DataService.prototype.getTreeData =
            //树形数据
            /**
             * @param {?=} params
             * @return {?}
             */
            function (params) {
                if (params === void 0) {
                    params = {};
                }
                //let url = "tree.json";
                /** @type {?} */
                var url = this.getWebAPIName("tree");
                return this._http.get(url, params);
            };
        /**
         * @param {?} type
         * @return {?}
         */
        DataService.prototype.getWebAPIName = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                /** @type {?} */
                var result = "";
                /** @type {?} */
                var res = localStorage.getItem("VXFORM:WEBAPI");
                if (res != undefined && res != null && res != "") {
                    /** @type {?} */
                    var webapi = JSON.parse(res);
                    result = webapi[type];
                }
                if (result == undefined || result == null) {
                    result = "";
                }
                return result;
            };
        DataService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        DataService.ctorParameters = function () {
            return [
                { type: _HttpClient }
            ];
        };
        /** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(_HttpClient)); }, token: DataService, providedIn: "root" });
        return DataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormTree = /** @class */ (function () {
        function VXFormTree(dataService) {
            this.dataService = dataService;
            this.fieldConfig = {};
            this.tag = false;
            this.treeChangeEvent = new i0.EventEmitter();
            this.treeData = [];
            this.controlid = "";
            this.selectData = [];
        }
        Object.defineProperty(VXFormTree.prototype, "selectedNode", {
            //选择节点
            get: 
            //选择节点
            /**
             * @return {?}
             */
            function () {
                return _.cloneDeep(this.selectData);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormTree.prototype, "selectType", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var res = "";
                if (this.fieldConfig != undefined &&
                    this.fieldConfig != null &&
                    this.fieldConfig.templateOptions != undefined &&
                    this.fieldConfig.templateOptions != null &&
                    this.fieldConfig.templateOptions.selectType != undefined) {
                    res = this.fieldConfig.templateOptions.selectType;
                }
                return res;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormTree.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var id = _.get(this.fieldConfig, "templateOptions.treeid");
                if (id != undefined && id != null && id != "") {
                    this.controlid = _.get(this.fieldConfig, "templateOptions.treeid");
                }
                this.getTreeData();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormTree.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.defaultNode) ;
            };
        //获取Tree数据集
        //获取Tree数据集
        /**
         * @return {?}
         */
        VXFormTree.prototype.getTreeData =
            //获取Tree数据集
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.dataService.getTreeData({ id: this.controlid }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.treeData = res;
                    _this.getSelectData();
                }));
            };
        /**
         * @return {?}
         */
        VXFormTree.prototype.getSelectData = /**
         * @return {?}
         */
            function () {
                if (this.fieldConfig != null &&
                    this.fieldConfig.model != undefined &&
                    this.fieldConfig.model != null &&
                    this.fieldConfig.key != undefined &&
                    this.fieldConfig.key != null &&
                    this.fieldConfig.model[this.fieldConfig.key] != undefined &&
                    this.fieldConfig.model[this.fieldConfig.key] != null) {
                    this.selectData = _.cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
                }
            };
        VXFormTree.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-tree",
                        template: "<vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\"></vxform-private-tree>",
                        providers: [DataService],
                        styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormTree.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXFormTree.propDecorators = {
            fieldConfig: [{ type: i0.Input }],
            tag: [{ type: i0.Input }],
            treeChangeEvent: [{ type: i0.Output }]
        };
        return VXFormTree;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormEmployee = /** @class */ (function () {
        function VXFormEmployee(dataService) {
            this.dataService = dataService;
            this.fieldConfig = {};
            this.selectData = [];
            this.tag = true;
            //是否要多选
            this.check = false;
            //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
            this.action = 0;
            //table 头部信息
            this.header = [
                { "key": "id", "name": "id", "hiden": true },
                { "key": "code", "name": "工号", "width": 150 },
                { "key": "name", "name": "姓名", "width": 150 },
                { "key": "organization", "name": "部门" }
            ];
            //table 行数据
            this.body = [];
            this.buttonlist = [];
            this.checkid = [];
            this.query = {
                total: 0,
                pageIndex: 1,
                pageSize: 15,
                sortName: "",
                sortValue: "",
                keyWord: ""
            };
        }
        Object.defineProperty(VXFormEmployee.prototype, "selectedNode", {
            get: /**
             * @return {?}
             */ function () {
                return _.cloneDeep(this.selectData);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormEmployee.prototype, "selectType", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var res = "";
                if (this.fieldConfig != undefined &&
                    this.fieldConfig != null &&
                    this.fieldConfig.templateOptions != undefined &&
                    this.fieldConfig.templateOptions != null &&
                    this.fieldConfig.templateOptions.selectType != undefined) {
                    res = this.fieldConfig.templateOptions.selectType;
                }
                return res;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormEmployee.prototype.getSelectData = /**
         * @return {?}
         */
            function () {
                if (this.fieldConfig != null &&
                    this.fieldConfig.model != undefined &&
                    this.fieldConfig.model != null &&
                    this.fieldConfig.key != undefined &&
                    this.fieldConfig.key != null &&
                    this.fieldConfig.model[this.fieldConfig.key] != undefined &&
                    this.fieldConfig.model[this.fieldConfig.key] != null) {
                    this.selectData = _.cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
                }
                console.log('[]', this.selectData);
                if (this.selectData != null && this.selectData.length > 0) {
                    this.checkid = this.selectData.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return {
                            "id": item.value,
                            "name": item.label
                        };
                    }));
                }
                else {
                    this.checkid = [];
                }
            };
        /**
         * @return {?}
         */
        VXFormEmployee.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.selectType == "multiple") {
                    this.check = true;
                    this.action = 0;
                }
                if (this.selectType == "single") {
                    this.check = false;
                    this.action = 2;
                    this.header.push({ "key": "action", "name": "操作", "hiden": true, "action": true });
                }
                this.getEmployeeData();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormEmployee.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        VXFormEmployee.prototype.getEmployeeData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dataService.getSysCtrEmployee({
                    keyWord: this.query.keyWord,
                    pageIndex: this.query.pageIndex,
                    pageSize: this.query.pageSize
                }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.query.pageIndex = res.index;
                    _this.query.total = res.total;
                    _this.body = res.data;
                }));
                this.getSelectData();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormEmployee.prototype.pageIndexChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                this.dataService.getSysCtrEmployee({
                    keyWord: this.query.keyWord,
                    pageIndex: this.query.pageIndex,
                    pageSize: this.query.pageSize
                }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.query.pageIndex = event.pageIndex;
                    _this.query.total = res.total;
                    _this.body = res.data;
                }));
            };
        /**
         * @param {?} list
         * @return {?}
         */
        VXFormEmployee.prototype.checkChange = /**
         * @param {?} list
         * @return {?}
         */
            function (list) {
                if (list != null && list.length > 0) {
                    this.selectData = list.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return {
                            "label": item.name, "value": item.id
                        };
                    }));
                }
                else {
                    this.selectData = [];
                }
            };
        VXFormEmployee.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-employee",
                        template: "<vxform-private-table\r\n [tableIndex]=\"query.pageIndex\"\r\n [tableSize]=\"query.pageSize\"\r\n [tableTotal]=\"query.total\"\r\n [header]=\"header\"\r\n [body]=\"body\"\r\n [check]=\"check\"\r\n [action]=\"action\"\r\n [checkid]=\"checkid\" \r\n (checkChangeEvent)=\"checkChange($event)\"\r\n (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n</vxform-private-table>",
                        providers: [DataService],
                        styles: [":host ::ng-deep{display:flex;width:100%;height:100%}:host ::ng-deep .content-left{display:flex;flex-direction:column;width:300px;padding:0 10px}:host ::ng-deep .content-left nz-select{width:100%}:host ::ng-deep .content-left .tree{flex:1;overflow-y:auto;display:in}:host ::ng-deep .content-right{flex:1}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormEmployee.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXFormEmployee.propDecorators = {
            fieldConfig: [{ type: i0.Input }]
        };
        return VXFormEmployee;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormOrg = /** @class */ (function () {
        function VXFormOrg(dataService, cd) {
            this.dataService = dataService;
            this.cd = cd;
            this.fieldConfig = {};
            this.tag = true;
            this.treeChangeEvent = new i0.EventEmitter();
            //组织数据
            this.data = [];
            this.dimension = true;
            this.selectData = [];
            this.curOrgId = "";
            this.orgData = [];
            this.treeData = [];
            this.controlid = "";
            this.treeid = "";
            this.selectedKey = [];
            this.skeletonStatus = 0;
        }
        Object.defineProperty(VXFormOrg.prototype, "selectedNode", {
            //选择节点
            get: 
            //选择节点
            /**
             * @return {?}
             */
            function () {
                return _.cloneDeep(this.selectData);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormOrg.prototype, "selectType", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var res = "";
                if (this.fieldConfig != undefined &&
                    this.fieldConfig != null &&
                    this.fieldConfig.templateOptions != undefined &&
                    this.fieldConfig.templateOptions != null &&
                    this.fieldConfig.templateOptions.selectType != undefined) {
                    res = this.fieldConfig.templateOptions.selectType;
                }
                return res;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormOrg.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var orgControl = _.get(this.fieldConfig, "templateOptions.controlid");
                if (orgControl != undefined && orgControl != null && orgControl != "") {
                    this.controlid = _.get(this.fieldConfig, "templateOptions.controlid");
                }
                this.getOrgData();
            };
        /**
         * @return {?}
         */
        VXFormOrg.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.cd.detectChanges();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormOrg.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        //获取组织数据集
        //获取组织数据集
        /**
         * @return {?}
         */
        VXFormOrg.prototype.getOrgData =
            //获取组织数据集
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.dataService.getSysCtrOrgTree().subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.data = res;
                    if (_this.data != null && _this.data.length > 0) {
                        if (_this.data[0].children != undefined) {
                            _this.curOrgId = _this.data[0].key;
                            _this.treeData = _this.data[0].children;
                        }
                    }
                    _this.getTreeSelectData();
                }));
            };
        /**
         * @return {?}
         */
        VXFormOrg.prototype.getTreeSelectData = /**
         * @return {?}
         */
            function () {
                if (this.fieldConfig != null &&
                    this.fieldConfig.model != undefined &&
                    this.fieldConfig.model != null &&
                    this.fieldConfig.key != undefined &&
                    this.fieldConfig.key != null &&
                    this.fieldConfig.model[this.fieldConfig.key] != undefined &&
                    this.fieldConfig.model[this.fieldConfig.key] != null) {
                    this.selectData = _.cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormOrg.prototype.orgChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                this.data.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (item.key === event) {
                        _this.treeData = item.children;
                    }
                }));
                this.selectData.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    _this.setTreeChecked(_this.data, item.value);
                }));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormOrg.prototype.treeChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                if (this.dimension) {
                    this.data.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        _this.setTreeUnChecked(item.children, event.delete);
                    }));
                }
                this.treeChangeEvent.emit(this.selectData);
            };
        /**
         * @param {?} tree
         * @param {?} key
         * @return {?}
         */
        VXFormOrg.prototype.setTreeUnChecked = /**
         * @param {?} tree
         * @param {?} key
         * @return {?}
         */
            function (tree, key) {
                var _this = this;
                if (tree && tree.length > 0) {
                    tree.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        if (item.key === key) {
                            item.checked = false;
                        }
                        else {
                            if (item.children && item.children.length > 0) {
                                _this.setTreeUnChecked(item.children, key);
                            }
                        }
                    }));
                }
                return;
            };
        /**
         * @param {?} tree
         * @param {?} key
         * @return {?}
         */
        VXFormOrg.prototype.setTreeChecked = /**
         * @param {?} tree
         * @param {?} key
         * @return {?}
         */
            function (tree, key) {
                var _this = this;
                if (tree && tree.length > 0) {
                    tree.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        if (item.key === key) {
                            item.checked = true;
                        }
                        else {
                            if (item.children && item.children.length > 0) {
                                _this.setTreeChecked(item.children, key);
                            }
                        }
                    }));
                }
                return;
            };
        VXFormOrg.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-org",
                        template: "<div class=\"org-select\" *ngIf=\"dimension==true\">\r\n    <span>\u7EF4\u5EA6\uFF1A</span>\r\n    <nz-select [(ngModel)]=\"curOrgId\" (ngModelChange)=\"orgChange($event)\">\r\n        <ng-container *ngFor=\"let item of data;\">\r\n            <nz-option [nzValue]=\"item.key\" [nzLabel]=\"item.title\"></nz-option>\r\n        </ng-container>\r\n    </nz-select>\r\n</div>\r\n<div class=\"org-tree\"> \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\" (treeChangeEvent)=\"treeChange($event)\"></vxform-private-tree>\r\n</div>",
                        providers: [DataService],
                        styles: [":host ::ng-deep .org-select{min-width:500px;padding:15px 0 0 15px;font-size:12px}:host ::ng-deep .org-select nz-select{min-width:250px}:host ::ng-deep .org-select .ant-select{font-size:12px}:host ::ng-deep .org-select .ant-select-dropdown{font-size:12px}:host ::ng-deep .org-tree{height:calc(100% - 47px);padding:0 0 0 10px}:host ::ng-deep .org-tree .tree-item{padding-left:0!important}:host ::ng-deep .org-tree .tree-tag{margin-top:-47px}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormOrg.ctorParameters = function () {
            return [
                { type: DataService },
                { type: i0.ChangeDetectorRef }
            ];
        };
        VXFormOrg.propDecorators = {
            fieldConfig: [{ type: i0.Input }],
            tag: [{ type: i0.Input }],
            treeChangeEvent: [{ type: i0.Output }],
            nzTreeComponent: [{ type: i0.ViewChild, args: ["nzTreeComponent", { static: false },] }]
        };
        return VXFormOrg;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormPostion = /** @class */ (function () {
        function VXFormPostion(dataService) {
            this.dataService = dataService;
            this.fieldConfig = {};
            this.tag = false;
            this.treeChangeEvent = new i0.EventEmitter();
            this.treeData = [];
            this.controlid = "";
            this.orgid = "";
            this.selectData = [];
            ////
            //是否要多选
            this.check = false;
            //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
            this.action = 0;
            //table 头部信息
            this.header = [
                { "key": "id", "name": "id", "hiden": true },
                { "key": "code", "name": "职位编码", "width": 100 },
                { "key": "name", "name": "职位名称", "width": 150 },
                { "key": "number", "name": "在职人数", "width": 80 },
                { "key": "parent", "name": "上级职位" }
            ];
            //table 行数据
            this.body = [];
            this.buttonlist = [];
            this.checkid = [];
            this.query = {
                total: 0,
                pageIndex: 1,
                pageSize: 15,
                sortName: "",
                sortValue: "",
                keyWord: ""
            };
        }
        Object.defineProperty(VXFormPostion.prototype, "selectedNode", {
            //选择节点
            get: 
            //选择节点
            /**
             * @return {?}
             */
            function () {
                return _.cloneDeep(this.selectData);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormPostion.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.getOrgData();
                this.action = 2;
                if (this.selectType == "multiple") {
                    this.check = true;
                    this.action = 0;
                }
                if (this.selectType == "single") {
                    this.check = false;
                    this.action = 2;
                    this.header.push({ "key": "action", "name": "操作", "hiden": true, "action": true });
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormPostion.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.defaultNode) ;
            };
        //获取Org数据集
        //获取Org数据集
        /**
         * @return {?}
         */
        VXFormPostion.prototype.getOrgData =
            //获取Org数据集
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.dataService.getTreeData({ id: this.controlid }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.treeData = res;
                    _this.getSelectData();
                }));
            };
        Object.defineProperty(VXFormPostion.prototype, "selectType", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var res = "";
                if (this.fieldConfig != undefined &&
                    this.fieldConfig != null &&
                    this.fieldConfig.templateOptions != undefined &&
                    this.fieldConfig.templateOptions != null &&
                    this.fieldConfig.templateOptions.selectType != undefined) {
                    res = this.fieldConfig.templateOptions.selectType;
                }
                return res;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormPostion.prototype.getSelectData = /**
         * @return {?}
         */
            function () {
                if (this.fieldConfig != null &&
                    this.fieldConfig.model != undefined &&
                    this.fieldConfig.model != null &&
                    this.fieldConfig.key != undefined &&
                    this.fieldConfig.key != null &&
                    this.fieldConfig.model[this.fieldConfig.key] != undefined &&
                    this.fieldConfig.model[this.fieldConfig.key] != null) {
                    this.selectData = _.cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
                }
                if (this.selectData != null && this.selectData.length > 0) {
                    this.checkid = this.selectData.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return {
                            "id": item.value,
                            "name": item.label
                        };
                    }));
                }
                else {
                    this.checkid = [];
                }
            };
        /**
         * @return {?}
         */
        VXFormPostion.prototype.getPostionData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dataService.getSysCtrPostionTable({
                    keyWord: this.query.keyWord,
                    pageIndex: this.query.pageIndex,
                    pageSize: this.query.pageSize
                }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.query.pageIndex = res.index;
                    _this.query.total = res.total;
                    _this.body = res.data;
                }));
                this.getSelectData();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormPostion.prototype.pageIndexChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                this.dataService.getSysCtrPostionTable({
                    keyWord: this.query.keyWord,
                    pageIndex: this.query.pageIndex,
                    pageSize: this.query.pageSize
                }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.query.pageIndex = event.pageIndex;
                    _this.query.total = res.total;
                    _this.body = res.data;
                }));
            };
        /**
         * @param {?} list
         * @return {?}
         */
        VXFormPostion.prototype.checkChange = /**
         * @param {?} list
         * @return {?}
         */
            function (list) {
                if (list != null && list.length > 0) {
                    this.selectData = list.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return {
                            "label": item.name, "value": item.id
                        };
                    }));
                }
                else {
                    this.selectData = [];
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormPostion.prototype.orgChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event != null && event != undefined && event.checkData != undefined && event.checkData.length > 0) {
                    this.orgid = event.checkData[0].value;
                    this.getPostionData();
                }
            };
        VXFormPostion.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-postion",
                        template: "\r\n<div class=\"postion-org\">\r\n    <!-- <vx-org [data]=\"orgData\" [dimension]=\"true\" [tag]=\"false\" (treeChangeEvent)=\"orgChange($event)\">\r\n    </vx-org> -->\r\n    \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"'single'\" [tag]=\"false\" [expandAll]=\"false\"  (treeChangeEvent)=\"orgChange($event)\"></vxform-private-tree>\r\n</div>\r\n<div class=\"postion-list\"> \r\n    <vxform-private-table\r\n        [tableIndex]=\"query.pageIndex\"\r\n        [tableSize]=\"query.pageSize\"\r\n        [tableTotal]=\"query.total\"\r\n        [header]=\"header\"\r\n        [body]=\"body\"\r\n        [check]=\"check\"\r\n        [action]=\"action\"\r\n        [checkid]=\"checkid\" \r\n        (checkChangeEvent)=\"checkChange($event)\"\r\n        (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n    </vxform-private-table>\r\n</div>\r\n",
                        providers: [DataService],
                        styles: [":host ::ng-deep{display:flex;flex-direction:row;width:100%;height:100%}:host ::ng-deep .postion-org{width:240px;border-right:1px solid #e8e8e8}:host ::ng-deep .postion-org .component-tree .tree-item{padding:8px 5px 5px 8px!important}:host ::ng-deep .postion-org .ant-tree li ul{padding:0 0 0 15px}:host ::ng-deep .postion-list{flex:1}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormPostion.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXFormPostion.propDecorators = {
            fieldConfig: [{ type: i0.Input }],
            tag: [{ type: i0.Input }],
            treeChangeEvent: [{ type: i0.Output }]
        };
        return VXFormPostion;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormArea = /** @class */ (function () {
        function VXFormArea(dataService) {
            this.dataService = dataService;
            this.fieldConfig = {};
            this.nodes = [];
        }
        /**
         * @return {?}
         */
        VXFormArea.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dataService.getTreeData().subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.nodes = res;
                }));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormArea.prototype.nzEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @return {?}
         */
        VXFormArea.prototype.submitForm = /**
         * @return {?}
         */
            function () { };
        VXFormArea.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-area",
                        template: "\u53C2\u6570\uFF1A{{fieldConfig|json}}",
                        providers: [DataService],
                        styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormArea.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXFormArea.propDecorators = {
            fieldConfig: [{ type: i0.Output }],
            nzTreeComponent: [{ type: i0.ViewChild, args: ["nzTreeComponent", { static: false },] }]
        };
        return VXFormArea;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldLookUp = /** @class */ (function (_super) {
        __extends(VXFormFieldLookUp, _super);
        function VXFormFieldLookUp(dyService, modal, vxDialogService) {
            var _this = _super.call(this) || this;
            _this.modal = modal;
            _this.vxDialogService = vxDialogService;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldLookUp.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        /**
         * @return {?}
         */
        VXFormFieldLookUp.prototype.lookup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var template;
                /** @type {?} */
                var type = _.get(this.field, "templateOptions.type");
                /** @type {?} */
                var para = {
                    fieldConfig: this.field,
                    tag: false
                };
                switch (type) {
                    case "tree":
                        template = VXFormTree;
                        para.tag = true;
                        break;
                        break;
                    case "employee":
                        template = VXFormEmployee;
                        break;
                    case "organizational":
                        template = VXFormOrg;
                        para.tag = true;
                        break;
                    case "position":
                        template = VXFormPostion;
                        break;
                    case "area":
                        template = VXFormArea;
                        break;
                    default:
                        break;
                }
                if (template) {
                    this.vxDialogService.CreateModelDialog({
                        nzTitle: "选择 - " + this.to["label"],
                        size: "large",
                        nzContent: template
                    }, para, ( /**
                     * @param {?} instance
                     * @param {?} modal
                     * @return {?}
                     */function (instance, modal) {
                        /** @type {?} */
                        var res = instance.selectedNode;
                        if (_this.model != undefined &&
                            _this.model != null &&
                            _this.key != undefined &&
                            _this.key != null) {
                            if (res != null && res.length > 0) {
                                _this.model[_this.key] = res;
                                _this.formControl.markAsTouched();
                            }
                            else {
                                _this.model[_this.key] = [];
                                _this.formControl.markAsTouched();
                            }
                        }
                        else {
                            _this.model[_this.key] = res;
                            _this.formControl.markAsTouched();
                        }
                        modal.destroy();
                    }));
                }
            };
        /**
         * @return {?}
         */
        VXFormFieldLookUp.prototype.removeValue = /**
         * @return {?}
         */
            function () {
                if (this.model != undefined &&
                    this.model != null &&
                    this.key != undefined &&
                    this.key != null &&
                    this.model[this.key] != undefined &&
                    this.model[this.key] != null) {
                    this.model[this.key] = [];
                    this.formControl.markAsTouched();
                }
            };
        VXFormFieldLookUp.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-lookup",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            nz-input\n            [class.is-invalid]=\"showError\"\n            [placeholder]=\"placeHolder\"\n            [value]=\"textLookUp\"\n            readonly=\"true\"\n          />\n        </nz-input-group>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n\n        <nz-input-group [nzSuffix]=\"suffixTemplate\" style=\"display:none;\">\n          <input\n            nz-input\n            [formControl]=\"formControl\"\n            [vxFormAttributes]=\"field\"\n            [class.is-invalid]=\"showError\"\n            readonly=\"true\"\n        /></nz-input-group>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textLookUp }}</div>\n    </ng-container>\n    <ng-template #suffixTemplate>\n      <i (click)=\"lookup()\" class=\"icon-tianjin\"></i>\n      <!--<i\n        nz-icon\n        nzType=\"close\"\n        nzTheme=\"outline\"\n        (click)=\"removeValue()\"\n        *ngIf=\"textLookUp != null && textLookUp != ''\"\n      ></i>-->\n    </ng-template>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldLookUp.ctorParameters = function () {
            return [
                { type: VXFormAntService },
                { type: i1$1.NzModalService },
                { type: VXDialogService }
            ];
        };
        return VXFormFieldLookUp;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldHTML = /** @class */ (function (_super) {
        __extends(VXFormFieldHTML, _super);
        function VXFormFieldHTML(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldHTML.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldHTML.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-html",
                        template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n  <div class=\"fieldOperational\">\n    <div class=\"fieldcheckbox\">\n      <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n    </div>\n    <div class=\"fieldControl\">\n      <div class=\"control\">\n        {{ to.description }}\n      </div>\n      <div class=\"fieldButton\">\n        <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n          <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n        </button>\n        <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n           <i class=\"icon-KT-Close\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"formStatus === 0\">\n  <div class=\"fieldcontrol\">{{ to.description }}</div>\n</ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldHTML.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldHTML;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldLine = /** @class */ (function (_super) {
        __extends(VXFormFieldLine, _super);
        function VXFormFieldLine(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldLine.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        VXFormFieldLine.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-line",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"control\">\n            <hr />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n               <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div class=\"fieldContent\">\n        <div class=\"fieldcontrol\">\n          <hr />\n        </div>\n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldLine.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldLine;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormWrapperFormField = /** @class */ (function (_super) {
        __extends(VXFormWrapperFormField, _super);
        function VXFormWrapperFormField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VXFormWrapperFormField.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxfield-wrapper",
                        template: "\n    <ng-container\n      *ngIf=\"formStatus !== 0 || field.type == 'line' || field.type == 'html'\"\n    >\n      <ng-template #fieldComponent></ng-template>\n    </ng-container>\n    <ng-container\n      *ngIf=\"formStatus === 0 && field.type != 'line' && field.type != 'html'\"\n    >\n      <div class=\"fieldlabel\">\n        <span *ngIf=\"to.required\">*</span>{{ to.label }}\n      </div>\n      <div class=\"fieldcontrol\" [class.has-error]=\"showError\">\n        <ng-template #fieldComponent></ng-template>\n        <div class=\"invalid-feedback\" [style.display]=\"'block'\">\n          <vxform-validation-message\n            *ngIf=\"showError\"\n            style=\"color:red\"\n            [field]=\"field\"\n          ></vxform-validation-message>\n        </div>\n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        return VXFormWrapperFormField;
    }(core$1.FieldWrapper));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldGroup = /** @class */ (function (_super) {
        __extends(VXFormFieldGroup, _super);
        function VXFormFieldGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VXFormFieldGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "group",
                        template: "\n    <vxform-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></vxform-field>\n    <ng-content></ng-content>\n  ",
                        host: {
                            "[class]": 'field.className || ""',
                            cdkDrag: ""
                        }
                    }] }
        ];
        return VXFormFieldGroup;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormFieldRepeat = /** @class */ (function (_super) {
        __extends(VXFormFieldRepeat, _super);
        function VXFormFieldRepeat(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} sign
         * @return {?}
         */
        VXFormFieldRepeat.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        /**
         * @param {?} type
         * @return {?}
         */
        VXFormFieldRepeat.prototype.groupOperational = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                this.service.groupOperational(type, this.field);
            };
        /**
         * @param {?} i
         * @return {?}
         */
        VXFormFieldRepeat.prototype.delete = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                if (this.field.fieldGroup && this.field.fieldGroup.length > 1) {
                    this.remove(i);
                }
            };
        VXFormFieldRepeat.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-repeat",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <!--\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        -->\n        <div class=\"reportControl\">\n          <div class=\"report-header\">\n            <div class=\"left\">\n              <ul>\n                <li><label nz-checkbox [(ngModel)]=\"field.checked\"></label></li>\n                <li (click)=\"groupOperational('item')\">\n                  <i class=\"icon-TianJiaZiDuan\"></i>\u6DFB\u52A0\u5B57\u6BB5\n                </li>\n                <li (click)=\"groupOperational('remark')\">\n                  <i class=\"icon-other-WenBen\"></i>\u6DFB\u52A0\u6587\u672C\n                </li>\n                <li (click)=\"groupOperational('line')\">\n                  <i class=\"icon-FenGeXian\"></i>\u6DFB\u52A0\u5206\u5272\u7EBF\n                </li>\n              </ul>\n            </div>\n            <div class=\"right\">\n              <ul>\n                <li (click)=\"groupOperational('delete')\">\n                  <i class=\"icon-N_delete2\"></i>\u5220\u9664\n                </li>\n                <li (click)=\"groupOperational('up')\">\n                  <i class=\"icon-ShangYi\"></i>\u4E0A\u79FB\n                </li>\n                <li (click)=\"groupOperational('down')\">\n                  <i class=\"icon-XiaYi\"></i>\u4E0B\u79FB\n                </li>\n                <li (click)=\"fieldOperational('delete')\">\n                  <button class=\"btnDel\">\n                    <i class=\"icon-KT-Close\"></i>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"report-body\">\n            <ng-container *ngFor=\"let field of field.fieldGroup; let i = index\">\n              <vxform-field class=\"col\" [field]=\"field\"></vxform-field>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div *ngFor=\"let field of field.fieldGroup; let i = index\" class=\"row\">\n        <vxform-field class=\"col\" [field]=\"field\"></vxform-field>\n\n        <span (click)=\"delete(i)\" class=\"del\">\u5220\u9664</span>\n\n        <div class=\"tips\"></div>\n      </div>\n      <div class=\"add\">\n        <span (click)=\"add()\">\u65B0\u589E</span>\n      </div>\n    </ng-container>\n  ",
                        host: {
                            "[class]": 'field.className || ""',
                            cdkDrag: ""
                        }
                    }] }
        ];
        /** @nocollapse */
        VXFormFieldRepeat.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXFormFieldRepeat;
    }(core$1.FieldArrayType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FIELD_TYPE_COMPONENTS = [
        // types
        VXFormFieldText,
        VXFormFieldTextI18n,
        VXFormFieldTextArea,
        VXFormFieldNumber,
        VXFormFieldPassWord,
        VXFormFieldRadio,
        VXFormFieldRadioGroup,
        VXFormFieldCheckbox,
        VXFormFieldCheckboxGroup,
        VXFormFieldSelect,
        VXFormFieldDateTime,
        VXFormFieldImage,
        VXFormFieldUpload,
        VXFormFieldLookUp,
        VXFormFieldHTML,
        VXFormFieldLine,
        //templates
        VXFormFieldGroup,
        VXFormFieldRepeat,
        // wrappers
        VXFormWrapperFormField
    ];
    /** @type {?} */
    var BOOTSTRAP_VXFORM_CONFIG = {
        types: [
            {
                name: "text",
                component: VXFormFieldText,
                wrappers: ["form-field"]
            },
            {
                name: "texti18n",
                component: VXFormFieldTextI18n,
                wrappers: ["form-field"]
            },
            {
                name: "textarea",
                component: VXFormFieldTextArea,
                wrappers: ["form-field"]
            },
            {
                name: "number",
                component: VXFormFieldNumber,
                wrappers: ["form-field"]
            },
            {
                name: "password",
                component: VXFormFieldPassWord,
                wrappers: ["form-field"]
            },
            {
                name: "radio",
                component: VXFormFieldRadio,
                wrappers: ["form-field"]
            },
            {
                name: "radiogroup",
                component: VXFormFieldRadioGroup,
                wrappers: ["form-field"]
            },
            {
                name: "checkbox",
                component: VXFormFieldCheckbox,
                wrappers: ["form-field"]
            },
            {
                name: "checkboxgroup",
                component: VXFormFieldCheckboxGroup,
                wrappers: ["form-field"]
            },
            {
                name: "select",
                component: VXFormFieldSelect,
                wrappers: ["form-field"]
            },
            {
                name: "datetime",
                component: VXFormFieldDateTime,
                wrappers: ["form-field"]
            },
            {
                name: "image",
                component: VXFormFieldImage,
                wrappers: ["form-field"]
            },
            {
                name: "upload",
                component: VXFormFieldUpload,
                wrappers: ["form-field"]
            },
            {
                name: "lookup",
                component: VXFormFieldLookUp,
                wrappers: ["form-field"]
            },
            {
                name: "html",
                component: VXFormFieldHTML,
                wrappers: ["form-field"]
            },
            {
                name: "line",
                component: VXFormFieldLine,
                wrappers: ["form-field"]
            },
            { name: "group", component: VXFormFieldGroup },
            { name: "repeat", component: VXFormFieldRepeat }
        ],
        wrappers: [{ name: "form-field", component: VXFormWrapperFormField }]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} field
     * @param {?} key
     * @return {?}
     */
    function getFieldPro(field, key) {
        return _.get(field, "templateOptions." + key + "");
    }
    /**
     * @param {?} err
     * @param {?} field
     * @return {?}
     */
    function requiredValidationMessage(err, field) {
        return getFieldPro(field, "label") + "\u4E0D\u80FD\u4E3A\u7A7A";
    }
    /**
     * @param {?} err
     * @param {?} field
     * @return {?}
     */
    function minlengthValidationMessage(err, field) {
        return getFieldPro(field, "label") + "\u6700\u5C0F\u957F\u5EA6\u4E3A" + getFieldPro(field, "minLength");
    }
    /**
     * @param {?} err
     * @param {?} field
     * @return {?}
     */
    function maxlengthValidationMessage(err, field) {
        return getFieldPro(field, "label") + "\u6700\u5927\u957F\u5EA6\u4E3A" + getFieldPro(field, "maxLength");
    }
    /**
     * @param {?} err
     * @param {?} field
     * @return {?}
     */
    function minValidationMessage(err, field) {
        return getFieldPro(field, "label") + "\u6700\u5C0F\u503C\u4E3A" + getFieldPro(field, "min");
    }
    /**
     * @param {?} err
     * @param {?} field
     * @return {?}
     */
    function maxValidationMessage(err, field) {
        return getFieldPro(field, "label") + "\u6700\u5927\u503C\u4E3A" + getFieldPro(field, "max");
    }
    /** @type {?} */
    var validationConfig = {
        validationMessages: [
            { name: "required", message: requiredValidationMessage },
            { name: "null", message: "不能为NULL" },
            { name: "minlength", message: minlengthValidationMessage },
            { name: "maxlength", message: maxlengthValidationMessage },
            { name: "min", message: minValidationMessage },
            { name: "max", message: maxValidationMessage },
            { name: "multipleOf", message: "ssss" },
            { name: "exclusiveMinimum", message: "ssss" },
            { name: "exclusiveMaximum", message: "ssss" },
            { name: "minItems", message: "ssss" },
            { name: "maxItems", message: "ssss" },
            { name: "uniqueItems", message: "should NOT have duplicate items" },
            { name: "const", message: "ssss" },
            { name: "pattern", message: "不满足这则表达式" }
        ],
        types: [
            // { name: "string", extends: "input" },
            // {
            //   name: "number",
            //   extends: "input",
            //   defaultOptions: {
            //     templateOptions: {
            //       type: "number"
            //     }
            //   }
            // },
            // {
            //   name: "integer",
            //   extends: "input",
            //   defaultOptions: {
            //     templateOptions: {
            //       type: "number"
            //     }
            //   }
            // },
            // { name: "boolean", extends: "checkbox" },
            // { name: "enum", extends: "select" },
            { name: "array", extends: "array" },
            { name: "object", extends: "object" }
        ]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXToFormFieldService = /** @class */ (function () {
        function VXToFormFieldService() {
        }
        /**
         * @param {?} tableField
         * @return {?}
         */
        VXToFormFieldService.prototype.getVXFiledFunction = /**
         * @param {?} tableField
         * @return {?}
         */
            function (tableField) {
                /** @type {?} */
                var field = {};
                switch (tableField.datatype) {
                    case "text":
                        field = this.text(tableField);
                        break;
                    case "texti18n":
                        field = this.textI18N(tableField);
                        break;
                    case "textarea":
                        field = this.textArea(tableField);
                        break;
                    case "number":
                        field = this.number(tableField);
                        break;
                    case "password":
                        field = this.passWord(tableField);
                        break;
                    case "radio":
                        field = this.radio(tableField);
                        break;
                    case "checkbox":
                        field = this.checkbox(tableField);
                        break;
                    case "select":
                        field = this.select(tableField);
                        break;
                    case "datetime":
                        field = this.datetime(tableField);
                        break;
                    case "image":
                        field = this.image(tableField);
                        break;
                    case "upload":
                        field = this.upload(tableField);
                        break;
                    case "lookup":
                        field = this.lookup(tableField);
                        break;
                    case "html":
                        field = this.html(tableField);
                        break;
                }
                /*if (tableField.refdatasourcetype === "directinput") {
                  fun = tableField.refdatasourcetype + "_" + tableField.datatype;
                  switch (fun) {
                    case "directinput_nvarchar":
                      field = this.directinput_nvarchar(tableField);
                      break;
                    case "directinput_multilinetext":
                      field = this.directinput_multilinetext(tableField);
                      break;
                    case "directinput_int":
                      field = this.directinput_int(tableField);
                      break;
                    case "directinput_float":
                      field = this.directinput_float(tableField);
                      break;
                    case "directinput_datetime":
                      field = this.directinput_datetime(tableField);
                      break;
                    case "directinput_date":
                      field = this.directinput_date(tableField);
                      break;
                    case "directinput_month":
                      field = this.directinput_month(tableField);
                      break;
                    case "directinput_year":
                      field = this.directinput_year(tableField);
                      break;
                    case "directinput_time":
                      field = this.directinput_time(tableField);
                      break;
                    case "directinput_attachment":
                      field = this.directinput_attachment(tableField);
                      break;
                    case "directinput_image":
                      field = this.directinput_image(tableField);
                      break;
                    default:
                      break;
                  }
                } else {
                  fun = tableField.refdatasourcetype;
                  switch (fun) {
                    case "refparameters":
                      field = this.refparameters(tableField);
                      break;
                    case "treeparameters":
                      field = this.treeparameters(tableField);
                      break;
                    case "systemcontrol":
                      field = this.systemcontrol(tableField);
                      break;
                    default:
                      break;
                  }
                }
                */
                return field;
            };
        //1、字符串
        //1、字符串
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.text =
            //1、字符串
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "text",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {
                        refdatasourcetype: "directinput",
                        datatype: "nvarchar"
                    },
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        maxLength: field.maxlength,
                        minLength: field.minlength,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //2、多语言
        //2、多语言
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.textI18N =
            //2、多语言
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "text",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        maxLength: field.maxlength,
                        minLength: field.minlength,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //3、多行文本
        //3、多行文本
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.textArea =
            //3、多行文本
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "textarea",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        maxLength: field.maxlength,
                        minLength: field.minlength,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //4、数字
        //4、数字
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.number =
            //4、数字
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "number",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        max: field.max,
                        min: field.min,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern,
                        precision: field.precision
                    },
                    status: 1
                };
                return config;
            };
        //5、密码
        //5、密码
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.passWord =
            //5、密码
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "password",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        maxLength: field.maxlength,
                        minLength: field.minlength,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //6、单选
        //6、单选
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.radio =
            //6、单选
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "radio",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        type: field.showtype,
                        label: field.fieldname,
                        required: field.allownull,
                        parameterid: field.parameterid,
                        options: field.parameterdata,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //7、复选
        //7、复选
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.checkbox =
            //7、复选
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "checkbox",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        type: field.showtype,
                        label: field.fieldname,
                        required: field.allownull,
                        parameterid: field.parameterid,
                        options: field.parameterdata,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //8、下拉
        //8、下拉
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.select =
            //8、下拉
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "select",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        type: field.showtype,
                        label: field.fieldname,
                        required: field.allownull,
                        selecttype: field.selecttype,
                        parameterid: field.parameterid,
                        options: field.parameterdata,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //9、日期
        //9、日期
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.datetime =
            //9、日期
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "datetime",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        type: "datetime",
                        label: field.fieldname,
                        required: field.allownull,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern,
                        format: field.format
                    },
                    status: 1
                };
                return config;
            };
        //10、图片
        //10、图片
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.image =
            //10、图片
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "image",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //11、附件
        //11、附件
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.upload =
            //11、附件
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "upload",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    templateOptions: {
                        label: field.fieldname,
                        required: field.allownull,
                        attachment: {
                            size: field.attachmentsize,
                            type: field.attachmenttype,
                            limit: field.attachmentlimit
                        },
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //12、弹框
        //12、弹框
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.lookup =
            //12、弹框
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "lookup",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultValue: field.defaultvalue,
                    defaultText: field.defaulttext,
                    templateOptions: {
                        type: field.controlid,
                        label: field.fieldname,
                        required: field.allownull,
                        controlid: field.controlid,
                        placeholder: field.placeholder,
                        isbutintin: field.isbutintin,
                        tips: field.tips,
                        pattern: field.pattern
                    },
                    status: 1
                };
                return config;
            };
        //13、html
        //13、html
        /**
         * @param {?} field
         * @return {?}
         */
        VXToFormFieldService.prototype.html =
            //13、html
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var config = {
                    type: "html",
                    tablecode: field.tablecode,
                    key: field.fieldcode,
                    origin: {},
                    defaultText: field.defaulttext,
                    status: 1
                };
                return config;
            };
        VXToFormFieldService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXToFormFieldService.ctorParameters = function () { return []; };
        return VXToFormFieldService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXAntCommonService = /** @class */ (function () {
        function VXAntCommonService(toFormField) {
            this.toFormField = toFormField;
            this.findFieldConfig = {};
        }
        //根据Guid获取Field
        //根据Guid获取Field
        /**
         * @param {?} formFieldConfig
         * @param {?} guid
         * @return {?}
         */
        VXAntCommonService.prototype.getFormFieldByGuid =
            //根据Guid获取Field
            /**
             * @param {?} formFieldConfig
             * @param {?} guid
             * @return {?}
             */
            function (formFieldConfig, guid) {
                var _this = this;
                if (formFieldConfig.length) {
                    formFieldConfig.forEach(( /**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */function (item, index, object) {
                        if (item.guid === guid) {
                            _this.findFieldConfig = item;
                        }
                        if (item.type === "repeat") {
                            if (item.fieldArray &&
                                item.fieldArray &&
                                item.fieldArray.fieldGroup &&
                                item.fieldArray.fieldGroup.length > 0) {
                                _this.getFormFieldByGuid(item.fieldArray.fieldGroup, guid);
                            }
                        }
                    }));
                }
                return this.findFieldConfig;
            };
        VXAntCommonService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXAntCommonService.ctorParameters = function () {
            return [
                { type: VXToFormFieldService, decorators: [{ type: i0.Inject, args: [VXToFormFieldService,] }] }
            ];
        };
        return VXAntCommonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXTransferService = /** @class */ (function () {
        function VXTransferService(toFormField) {
            this.toFormField = toFormField;
        }
        /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @return {?}
         */
        VXTransferService.prototype.transferLineToForm = /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @return {?}
         */
            function (form_fields, checkedFields) {
                /** @type {?} */
                var obj = this.getFieldLineInfo();
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    form_fields.splice(checkedField.index + 1, 0, obj);
                }
                else {
                    form_fields.push(obj);
                }
            };
        /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @return {?}
         */
        VXTransferService.prototype.transferLabelToForm = /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @return {?}
         */
            function (form_fields, checkedFields) {
                /** @type {?} */
                var obj = this.getFieldRemarkInfo();
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    form_fields.splice(checkedField.index + 1, 0, obj);
                }
                else {
                    form_fields.push(obj);
                }
            };
        /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @param {?} tableCode
         * @return {?}
         */
        VXTransferService.prototype.transferGroupToForm = /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @param {?} tableCode
         * @return {?}
         */
            function (form_fields, checkedFields, tableCode) {
                /** @type {?} */
                var obj = this.getFieldGroupInfo();
                obj.tablecode = tableCode;
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    form_fields.splice(checkedField.index + 1, 0, obj);
                }
                else {
                    form_fields.push(obj);
                }
            };
        /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @param {?} businessTable
         * @param {?} obj
         * @return {?}
         */
        VXTransferService.prototype.transferSelectFieldToForm = /**
         * @param {?} form_fields
         * @param {?} checkedFields
         * @param {?} businessTable
         * @param {?} obj
         * @return {?}
         */
            function (form_fields, checkedFields, businessTable, obj) {
                var _this = this;
                /** @type {?} */
                var selectFields = [];
                /** @type {?} */
                var tableFields = [];
                /** @type {?} */
                var addFields = [];
                /** @type {?} */
                var beginIndex = 0;
                Object.getOwnPropertyNames(obj).forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (obj[item]) {
                        selectFields.push(item);
                    }
                }));
                if (!selectFields || selectFields.length < 1)
                    return;
                tableFields = this.getTableFiledList(businessTable);
                if (!tableFields || tableFields.length < 1)
                    return;
                if (form_fields && form_fields.length > 0) {
                    beginIndex = form_fields.length;
                }
                selectFields.forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    /** @type {?} */
                    var tableField = _this.getTableFiledInfo(key, tableFields);
                    if (tableField != null) {
                        /** @type {?} */
                        var formField = _this.toFormField.getVXFiledFunction(tableField);
                        if (formField && formField != null) {
                            addFields.push(formField);
                        }
                    }
                }));
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    beginIndex = checkedField.index + 1;
                }
                addFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    form_fields.splice(beginIndex + index, 0, item);
                }));
            };
        /**
         * @param {?} form_fields
         * @param {?} field
         * @param {?} type
         * @return {?}
         */
        VXTransferService.prototype.groupFieldMoveUpOrDown = /**
         * @param {?} form_fields
         * @param {?} field
         * @param {?} type
         * @return {?}
         */
            function (form_fields, field, type) {
                this.clearGroupChecked(field);
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var cloneField = core$1.clone(field);
                /** @type {?} */
                var checkedFields = this.getGroupCheckFields(cloneField);
                if (checkedFields) {
                    if (type === "up") {
                        checkedFields.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.index > 0) {
                                _.get(cloneField, "fieldArray.fieldGroup").splice(item.index, 1);
                                _.get(cloneField, "fieldArray.fieldGroup").splice(item.index - 1, 0, item.field);
                            }
                        }));
                    }
                    else if (type === "down") {
                        checkedFields.reverse().forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.index <
                                _.get(cloneField, "fieldArray.fieldGroup").length - 1) {
                                _.get(cloneField, "fieldArray.fieldGroup").splice(item.index, 1);
                                _.get(cloneField, "fieldArray.fieldGroup").splice(item.index + 1, 0, item.field);
                            }
                        }));
                    }
                }
                cloneFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    if (item.guid === cloneField.guid) {
                        item.fieldArray = cloneField.fieldArray;
                    }
                    if (item.hasOwnProperty("fieldGroup")) {
                        delete item.fieldGroup;
                    }
                }));
                return cloneFields;
            };
        /**
         * @param {?} form_fields
         * @param {?} field
         * @return {?}
         */
        VXTransferService.prototype.groupTransferLineToForm = /**
         * @param {?} form_fields
         * @param {?} field
         * @return {?}
         */
            function (form_fields, field) {
                this.clearGroupChecked(field);
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var cloneField = core$1.clone(field);
                /** @type {?} */
                var obj = this.getFieldLineInfo();
                /** @type {?} */
                var checkedFields = this.getGroupCheckFields(cloneField);
                if (!cloneField)
                    return null;
                if (!cloneField.fieldArray ||
                    !cloneField.fieldArray.fieldGroup ||
                    cloneField.fieldArray.fieldGroup.length < 1) {
                    _.get(cloneField, "fieldArray.fieldGroup", []);
                }
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    _.get(checkedField, "checked", true);
                    _.get(cloneField, "fieldArray.fieldGroup").splice(checkedField.index + 1, 0, obj);
                }
                else {
                    _.get(cloneField, "fieldArray.fieldGroup").push(obj);
                }
                cloneFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    if (item.guid === cloneField.guid) {
                        item.fieldArray = cloneField.fieldArray;
                    }
                    if (item.hasOwnProperty("fieldGroup")) {
                        delete item.fieldGroup;
                    }
                }));
                return cloneFields;
            };
        /**
         * @param {?} form_fields
         * @param {?} field
         * @return {?}
         */
        VXTransferService.prototype.groupTransferRemarkToForm = /**
         * @param {?} form_fields
         * @param {?} field
         * @return {?}
         */
            function (form_fields, field) {
                this.clearGroupChecked(field);
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var cloneField = core$1.clone(field);
                /** @type {?} */
                var obj = this.getFieldRemarkInfo();
                /** @type {?} */
                var checkedFields = this.getGroupCheckFields(cloneField);
                if (!cloneField)
                    return null;
                if (!cloneField.fieldArray ||
                    !cloneField.fieldArray.fieldGroup ||
                    cloneField.fieldArray.fieldGroup.length < 1) {
                    _.get(cloneField, "fieldArray.fieldGroup", []);
                }
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    _.get(checkedField, "checked", true);
                    _.get(cloneField, "fieldArray.fieldGroup").splice(checkedField.index + 1, 0, obj);
                }
                else {
                    _.get(cloneField, "fieldArray.fieldGroup").push(obj);
                }
                cloneFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    if (item.guid === cloneField.guid) {
                        item.fieldArray = cloneField.fieldArray;
                    }
                    if (item.hasOwnProperty("fieldGroup")) {
                        delete item.fieldGroup;
                    }
                }));
                return cloneFields;
            };
        /**
         * @param {?} form_fields
         * @param {?} groupField
         * @param {?} checkedFields
         * @param {?} businessTable
         * @param {?} obj
         * @return {?}
         */
        VXTransferService.prototype.groupTransferSelectFieldToForm = /**
         * @param {?} form_fields
         * @param {?} groupField
         * @param {?} checkedFields
         * @param {?} businessTable
         * @param {?} obj
         * @return {?}
         */
            function (form_fields, groupField, checkedFields, businessTable, obj) {
                var _this = this;
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var cloneGroupField = core$1.clone(groupField);
                /** @type {?} */
                var selectFields = [];
                /** @type {?} */
                var tableFields = [];
                /** @type {?} */
                var addFields = [];
                /** @type {?} */
                var beginIndex = 0;
                Object.getOwnPropertyNames(obj).forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (obj[item]) {
                        selectFields.push(item);
                    }
                }));
                if (!selectFields || selectFields.length < 1)
                    return;
                tableFields = this.getTableFiledList(businessTable);
                if (!tableFields || tableFields.length < 1)
                    return;
                if (cloneFields && cloneFields.length > 0) {
                    beginIndex = cloneFields.length - 1;
                }
                if (!cloneGroupField.fieldArray ||
                    !cloneGroupField.fieldArray.fieldGroup ||
                    cloneGroupField.fieldArray.fieldGroup.length < 1) {
                    _.get(cloneGroupField, "fieldArray.fieldGroup", []);
                }
                selectFields.forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    /** @type {?} */
                    var tableField = _this.getTableFiledInfo(key, tableFields);
                    if (tableField != null) {
                        /** @type {?} */
                        var formField = _this.toFormField.getVXFiledFunction(tableField);
                        if (formField && formField != null) {
                            addFields.push(formField);
                        }
                    }
                }));
                if (checkedFields && checkedFields.length > 0) {
                    /** @type {?} */
                    var checkedField = checkedFields[checkedFields.length - 1];
                    beginIndex = checkedField.index + 1;
                }
                addFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    _.get(cloneGroupField, "fieldArray.fieldGroup").splice(beginIndex + index, 0, item);
                }));
                cloneFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    if (item.guid === cloneGroupField.guid) {
                        item.fieldArray = cloneGroupField.fieldArray;
                    }
                    if (item.hasOwnProperty("fieldGroup")) {
                        delete item.fieldGroup;
                    }
                }));
                return cloneFields;
            };
        /**
         * @param {?} form_fields
         * @param {?} groupField
         * @return {?}
         */
        VXTransferService.prototype.groupTransferDeleteForm = /**
         * @param {?} form_fields
         * @param {?} groupField
         * @return {?}
         */
            function (form_fields, groupField) {
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var cloneGroupField = core$1.clone(groupField);
                /** @type {?} */
                var checkedFields = this.getGroupCheckFields(cloneGroupField);
                if (!checkedFields || checkedFields == null || checkedFields.length < 1) {
                    return;
                }
                if (!cloneGroupField.fieldArray ||
                    !cloneGroupField.fieldArray.fieldGroup ||
                    cloneGroupField.fieldArray.fieldGroup.length < 1) {
                    return;
                }
                checkedFields.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    _.get(cloneGroupField, "fieldArray.fieldGroup").forEach(( /**
                     * @param {?} field
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */function (field, index, object) {
                        if (field.key === item.field.key &&
                            field.templateOptions.isbutintin != true) {
                            object.splice(index, 1);
                        }
                    }));
                }));
                cloneFields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    if (item.guid === cloneGroupField.guid) {
                        item.fieldArray = cloneGroupField.fieldArray;
                    }
                    if (item.hasOwnProperty("fieldGroup")) {
                        delete item.fieldGroup;
                    }
                }));
                return cloneFields;
            };
        /**
         * @param {?} form_fields
         * @param {?} new_field
         * @return {?}
         */
        VXTransferService.prototype.editFormFieldInfo = /**
         * @param {?} form_fields
         * @param {?} new_field
         * @return {?}
         */
            function (form_fields, new_field) {
                if (!form_fields)
                    return;
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var groupKey = "";
                cloneFields.forEach(( /**
                 * @param {?} field
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (field, index, object) {
                    if (field.type === "repeat") {
                        if (field.fieldArray &&
                            field.fieldArray.fieldGroup &&
                            field.fieldArray.fieldGroup.length > 0) {
                            _.get(field, "fieldArray.fieldGroup").forEach(( /**
                             * @param {?} groupField
                             * @param {?} groupIndex
                             * @param {?} groupObject
                             * @return {?}
                             */function (groupField, groupIndex, groupObject) {
                                if (groupField.key === new_field.key) {
                                    groupKey = field.key;
                                    groupObject.splice(groupIndex, 1);
                                    groupObject.splice(groupIndex, 0, new_field);
                                }
                            }));
                        }
                    }
                    else {
                        if (field.key === new_field.key) {
                            object.splice(index, 1);
                            object.splice(index, 0, new_field);
                        }
                    }
                }));
                if (groupKey != null && groupKey != "") {
                    cloneFields.forEach(( /**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */function (item, index, object) {
                        if (item.hasOwnProperty("fieldGroup")) {
                            delete item.fieldGroup;
                        }
                    }));
                }
                return {
                    groupKey: groupKey,
                    formFileds: cloneFields
                };
            };
        /**
         * @param {?} form_fields
         * @param {?} field
         * @return {?}
         */
        VXTransferService.prototype.deleteFormFieldInfo = /**
         * @param {?} form_fields
         * @param {?} field
         * @return {?}
         */
            function (form_fields, field) {
                var _this = this;
                /** @type {?} */
                var cloneFields = core$1.clone(form_fields);
                /** @type {?} */
                var cloneField = core$1.clone(field);
                /** @type {?} */
                var groupKey;
                if (cloneFields != undefined &&
                    cloneFields != null &&
                    cloneField != undefined &&
                    cloneField != null &&
                    cloneFields.length > 0) {
                    if (cloneField.key != undefined && cloneField.key != null) {
                        cloneFields.forEach(( /**
                         * @param {?} item
                         * @param {?} index
                         * @param {?} object
                         * @return {?}
                         */function (item, index, object) {
                            if (item.key === cloneField.key) {
                                object.splice(index, 1);
                            }
                            if (item.fieldArray != undefined &&
                                item.fieldArray != null &&
                                item.fieldArray.fieldGroup != undefined &&
                                item.fieldArray.fieldGroup != null) {
                                /** @type {?} */
                                var res = _this.deleteGroupFormFieldInfo(item, field);
                                if (res != null && res != "") {
                                    groupKey = res;
                                    if (item.hasOwnProperty("fieldGroup")) {
                                        delete item.fieldGroup;
                                    }
                                }
                            }
                        }));
                    }
                }
                return {
                    groupKey: groupKey,
                    formFileds: cloneFields
                };
            };
        /**
         * @private
         * @param {?} fields
         * @param {?} field
         * @return {?}
         */
        VXTransferService.prototype.deleteGroupFormFieldInfo = /**
         * @private
         * @param {?} fields
         * @param {?} field
         * @return {?}
         */
            function (fields, field) {
                /** @type {?} */
                var form_fields = [];
                /** @type {?} */
                var groupKey = "";
                if (fields.fieldArray != undefined &&
                    fields.fieldArray != null &&
                    fields.fieldArray.fieldGroup != undefined &&
                    fields.fieldArray.fieldGroup != null) {
                    form_fields = fields.fieldArray.fieldGroup;
                    if (form_fields != undefined &&
                        form_fields != null &&
                        field != undefined &&
                        field != null &&
                        form_fields.length > 0) {
                        if (field.key != undefined && field.key != null) {
                            form_fields.forEach(( /**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} object
                             * @return {?}
                             */function (item, index, object) {
                                if (item.key === field.key) {
                                    if (fields.key != undefined && fields.key != null) {
                                        groupKey = fields.key;
                                        object.splice(index, 1);
                                    }
                                }
                            }));
                        }
                    }
                }
                return groupKey;
            };
        /**
         * @private
         * @return {?}
         */
        VXTransferService.prototype.getFieldLineInfo = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var obj = {
                    key: core$1.Guid.create()["value"],
                    guid: core$1.Guid.create()["value"],
                    type: "line",
                    status: 1
                };
                return obj;
            };
        /**
         * @private
         * @return {?}
         */
        VXTransferService.prototype.getFieldRemarkInfo = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var obj = {
                    key: core$1.Guid.create()["value"],
                    guid: core$1.Guid.create()["value"],
                    type: "html",
                    templateOptions: {
                        description: "片段文本描述"
                    },
                    status: 1
                };
                return obj;
            };
        /**
         * @private
         * @return {?}
         */
        VXTransferService.prototype.getFieldGroupInfo = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var obj = {
                    key: core$1.Guid.create()["value"],
                    guid: core$1.Guid.create()["value"],
                    type: "repeat",
                    fieldArray: {
                        fieldGroup: []
                    },
                    tablecode: "",
                    status: 1
                };
                return obj;
            };
        //清空选中
        //清空选中
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        VXTransferService.prototype.clearGroupChecked =
            //清空选中
            /**
             * @private
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (!field ||
                    !field.fieldArray ||
                    !field.fieldArray.fieldGroup ||
                    !field.fieldGroup)
                    return;
                field.fieldArray.fieldGroup.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */function (item, index) {
                    item.checked = false;
                }));
            };
        //获取选中
        //获取选中
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        VXTransferService.prototype.getGroupCheckFields =
            //获取选中
            /**
             * @private
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var checkedField = [];
                if (!field ||
                    !field.fieldArray ||
                    !field.fieldArray.fieldGroup ||
                    !field.fieldGroup ||
                    field.fieldGroup.length < 1) {
                    return checkedField;
                }
                _.get(field, "fieldGroup[0].fieldGroup").forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */function (item, index) {
                    if (item.checked) {
                        checkedField.push({ index: index, field: item });
                        _.get(field, "fieldArray.fieldGroup")[index].checked = true;
                    }
                }));
                return checkedField;
            };
        /**
         * @private
         * @param {?} businessTable
         * @return {?}
         */
        VXTransferService.prototype.getTableFiledList = /**
         * @private
         * @param {?} businessTable
         * @return {?}
         */
            function (businessTable) {
                /** @type {?} */
                var tableFields = [];
                if (businessTable) {
                    if (businessTable.primary &&
                        businessTable.primary != null &&
                        businessTable.primary.tablefields &&
                        businessTable.primary.tablefields != null &&
                        businessTable.primary.tablefields.length > 0) {
                        if (businessTable.primary.tablefields) {
                            tableFields = tableFields.concat(businessTable.primary.tablefields);
                        }
                    }
                    if (businessTable.child && businessTable.child != null) {
                        if (businessTable.child.single &&
                            businessTable.child.single != null &&
                            businessTable.child.single.length > 0) {
                            businessTable.child.single.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.tablefields) {
                                    tableFields = tableFields.concat(item.tablefields);
                                }
                            }));
                        }
                        if (businessTable.child.multiple &&
                            businessTable.child.multiple != null &&
                            businessTable.child.multiple.length > 0) {
                            businessTable.child.multiple.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.tablefields) {
                                    tableFields = tableFields.concat(item.tablefields);
                                }
                            }));
                        }
                    }
                }
                return tableFields;
            };
        /**
         * @private
         * @param {?} key
         * @param {?} tableFields
         * @return {?}
         */
        VXTransferService.prototype.getTableFiledInfo = /**
         * @private
         * @param {?} key
         * @param {?} tableFields
         * @return {?}
         */
            function (key, tableFields) {
                /** @type {?} */
                var resValue = {};
                if (key && tableFields && tableFields.length > 0) {
                    /** @type {?} */
                    var filterFiled = tableFields.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return item["fieldcode"] === key;
                    }));
                    if (filterFiled && filterFiled.length > 0) {
                        return filterFiled[0];
                    }
                    return resValue;
                }
                return resValue;
            };
        VXTransferService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXTransferService.ctorParameters = function () {
            return [
                { type: VXToFormFieldService, decorators: [{ type: i0.Inject, args: [VXToFormFieldService,] }] }
            ];
        };
        return VXTransferService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXDesginToFormService = /** @class */ (function () {
        function VXDesginToFormService(toFormField) {
            this.toFormField = toFormField;
        }
        /**
         * @param {?} tables
         * @param {?} fields
         * @return {?}
         */
        VXDesginToFormService.prototype.initTableStatus = /**
         * @param {?} tables
         * @param {?} fields
         * @return {?}
         */
            function (tables, fields) {
                var _this = this;
                this.initTableFields(tables);
                if (fields && fields != null && fields.length > 0) {
                    fields.forEach(( /**
                     * @param {?} field
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */function (field, index, object) {
                        _this.setTableStatus(tables, field);
                    }));
                }
            };
        /**
         * @param {?} tables
         * @param {?} fields
         * @return {?}
         */
        VXDesginToFormService.prototype.initFormFieldByTables = /**
         * @param {?} tables
         * @param {?} fields
         * @return {?}
         */
            function (tables, fields) {
                var _this = this;
                if (tables != undefined &&
                    tables != null &&
                    tables.primary != undefined &&
                    tables.primary != null &&
                    tables.primary.tablefields != undefined &&
                    tables.primary.tablefields != null) {
                    /** @type {?} */
                    var tableFileds = tables.primary.tablefields.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return item.isbutintin === true;
                    }));
                    if (tableFileds != null) {
                        tableFileds.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (!_this.checkVXFormFieldConfig(item.fieldcode, fields)) {
                                _this.addVXFormFieldConfig(item, fields);
                            }
                        }));
                    }
                }
            };
        /**
         * @private
         * @param {?} tables
         * @return {?}
         */
        VXDesginToFormService.prototype.initTableFields = /**
         * @private
         * @param {?} tables
         * @return {?}
         */
            function (tables) {
                if (!tables) {
                    return;
                }
                if (tables.primary) {
                    tables.primary.tablequote = false;
                    if (tables.primary.tablefields) {
                        tables.primary.tablefields.forEach(( /**
                         * @param {?} field
                         * @return {?}
                         */function (field) {
                            field.fieldquote = false;
                        }));
                    }
                }
                if (tables.child) {
                    if (tables.child.single) {
                        tables.child.single.forEach(( /**
                         * @param {?} table
                         * @return {?}
                         */function (table) {
                            table.tablequote = false;
                            if (table.tablefields) {
                                table.tablefields.forEach(( /**
                                 * @param {?} field
                                 * @return {?}
                                 */function (field) {
                                    field.fieldquote = false;
                                }));
                            }
                        }));
                    }
                    if (tables.child.multiple) {
                        tables.child.multiple.forEach(( /**
                         * @param {?} table
                         * @return {?}
                         */function (table) {
                            table.tablequote = false;
                            if (table.tablefields) {
                                table.tablefields.forEach(( /**
                                 * @param {?} field
                                 * @return {?}
                                 */function (field) {
                                    field.fieldquote = false;
                                }));
                            }
                        }));
                    }
                }
            };
        /**
         * @private
         * @param {?} tables
         * @param {?} field
         * @return {?}
         */
        VXDesginToFormService.prototype.setTableStatus = /**
         * @private
         * @param {?} tables
         * @param {?} field
         * @return {?}
         */
            function (tables, field) {
                if (tables) {
                    if (tables.primary) {
                        this.setTablePrimary(tables.primary, field);
                    }
                    if (tables.child) {
                        if (tables.child.single) {
                            this.setTableSingle(tables.child.single, field);
                        }
                        if (tables.child.multiple) {
                            this.setTableMultiple(tables.child.multiple, field);
                        }
                    }
                }
            };
        /**
         * @private
         * @param {?} table
         * @param {?} field
         * @return {?}
         */
        VXDesginToFormService.prototype.setTablePrimary = /**
         * @private
         * @param {?} table
         * @param {?} field
         * @return {?}
         */
            function (table, field) {
                if (field.tablecode === table.tablecode) {
                    table.tablequote = true;
                    if (table.tablefields) {
                        table.tablefields.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.fieldcode === field.key) {
                                item.fieldquote = true;
                            }
                        }));
                    }
                }
            };
        /**
         * @private
         * @param {?} tables
         * @param {?} field
         * @return {?}
         */
        VXDesginToFormService.prototype.setTableSingle = /**
         * @private
         * @param {?} tables
         * @param {?} field
         * @return {?}
         */
            function (tables, field) {
                if (tables && tables != null && tables.length > 0) {
                    tables.forEach(( /**
                     * @param {?} table
                     * @return {?}
                     */function (table) {
                        if (table.tablecode === field.tablecode) {
                            table.tablequote = true;
                            if (table.tablefields) {
                                table.tablefields.forEach(( /**
                                 * @param {?} item
                                 * @return {?}
                                 */function (item) {
                                    if (item.fieldcode === field.key) {
                                        item.fieldquote = true;
                                    }
                                }));
                            }
                        }
                    }));
                }
            };
        /**
         * @private
         * @param {?} tables
         * @param {?} groupField
         * @return {?}
         */
        VXDesginToFormService.prototype.setTableMultiple = /**
         * @private
         * @param {?} tables
         * @param {?} groupField
         * @return {?}
         */
            function (tables, groupField) {
                if (tables && tables != null && tables.length > 0) {
                    tables.forEach(( /**
                     * @param {?} table
                     * @return {?}
                     */function (table) {
                        if (table.tablecode === groupField.tablecode) {
                            table.tablequote = true;
                            if (groupField.fieldArray &&
                                groupField.fieldArray.fieldGroup &&
                                groupField.fieldArray.fieldGroup.length > 0) {
                                if (table.tablefields) {
                                    table.tablefields.forEach(( /**
                                     * @param {?} item
                                     * @return {?}
                                     */function (item) {
                                        _.get(groupField, "fieldArray.fieldGroup").forEach(( /**
                                         * @param {?} field
                                         * @return {?}
                                         */function (field) {
                                            if (item.fieldcode === field.key) {
                                                item.fieldquote = true;
                                            }
                                        }));
                                    }));
                                }
                            }
                        }
                    }));
                }
            };
        /**
         * @private
         * @param {?} code
         * @param {?} fields
         * @return {?}
         */
        VXDesginToFormService.prototype.checkVXFormFieldConfig = /**
         * @private
         * @param {?} code
         * @param {?} fields
         * @return {?}
         */
            function (code, fields) {
                /** @type {?} */
                var result = false;
                if (fields != undefined && fields != null && fields != []) {
                    result = fields.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return item.key === code;
                    }));
                }
                return result;
            };
        /**
         * @private
         * @param {?} tableField
         * @param {?} fields
         * @return {?}
         */
        VXDesginToFormService.prototype.addVXFormFieldConfig = /**
         * @private
         * @param {?} tableField
         * @param {?} fields
         * @return {?}
         */
            function (tableField, fields) {
                /** @type {?} */
                var field = this.toFormField.getVXFiledFunction(tableField);
                if (fields == undefined || fields == null) {
                    fields = [];
                }
                fields.push(field);
            };
        VXDesginToFormService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXDesginToFormService.ctorParameters = function () {
            return [
                { type: VXToFormFieldService, decorators: [{ type: i0.Inject, args: [VXToFormFieldService,] }] }
            ];
        };
        return VXDesginToFormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormDesignField = /** @class */ (function () {
        function VXFormDesignField(message$$1) {
            this.message = message$$1;
            this.formField = {
                key: "",
                type: "text",
                templateOptions: {
                    label: "",
                    description: "",
                    parameterid: "",
                    treeid: "",
                    controlid: "",
                    maxLength: 50,
                    minLength: 0,
                    max: 0,
                    min: 0,
                    precision: 0,
                    placeholder: "",
                    required: false,
                    tips: "",
                    pattern: ""
                },
                origin: {
                    refdatasourcetype: "",
                    datatype: ""
                }
            };
            this.lang = [
                { languagetype: "chinese", resvalue: "chinesechinese" },
                { languagetype: "english", resvalue: "englishenglish" },
                { languagetype: "english2", resvalue: "english2" }
            ];
        }
        Object.defineProperty(VXFormDesignField.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.formField = __assign({}, this.formField, value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormDesignField.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormDesignField.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        VXFormDesignField.prototype.checkSave = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var type = this.formField.type;
                if (type == "text" || type == "textarea") {
                    if (this.formField.templateOptions.minLength >= this.formField.templateOptions.maxLength) {
                        this.message.error("最大长度必须大于最小长度");
                        return false;
                    }
                }
                if (type == "number") {
                    if (this.formField.templateOptions.min >= this.formField.templateOptions.max) {
                        this.message.error("最大值必须大于最小值");
                        return false;
                    }
                }
                return true;
            };
        VXFormDesignField.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-design-field",
                        template: "<div class=\"builder-content\">\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5B57\u6BB5\u540D\u79F0\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [value]=\"formField.key\" readonly disabled />\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u663E\u793A\u540D\u79F0\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [(ngModel)]=\"formField.templateOptions.label\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5B57\u6BB5\u7C7B\u578B\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [value]=\"formField.type\" readonly disabled />\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u9ED8\u8BA4\u503C\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [(ngModel)]=\"formField.defaultValue\" />\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"formField.type==='text'|| formField.type==='textarea'\">\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5927\u957F\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['maxLength']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5C0F\u957F\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['minLength']\"></nz-input-number>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"formField.type==='number'\">\r\n\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5927\u503C\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['max']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5C0F\u503C\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['min']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngIf=\"formField.templateOptions['precision']!=0\">\r\n            <div class=\"label\">\r\n                \u7CBE\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['precision']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u662F\u5426\u5FC5\u586B\r\n        </div>\r\n        <div class=\"control\">\r\n            <nz-switch [(ngModel)]=\"formField.templateOptions['required']\" nzCheckedChildren=\"\u662F\" nzUnCheckedChildren=\"\u5426\">\r\n            </nz-switch>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5360\u4F4D\u7B26\r\n        </div>\r\n        <div class=\"control\">\r\n            \r\n            <input nz-input [(ngModel)]=\"formField.templateOptions['tipsPlaceholder']\"  readonly disabled/>\r\n            <!-- <vx-language [(ngModel)]=\"formField.templateOptions['tipsPlaceholder']\"></vx-language> -->\r\n        </div>\r\n    </div>\r\n    <!-- <ng-container [ngSwitch]=\"formField.origin.refdatasourcetype\">\r\n        <div class=\"content\" *ngSwitchCase=\"'directinput'\">\r\n            <div class=\"label\">\r\n                \u6570\u636E\u7C7B\u578B\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.origin.datatype\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'refparameters'\">\r\n            <div class=\"label\">\r\n                \u5E38\u7528\u53C2\u6570\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.parameterid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'treeparameters'\">\r\n            <div class=\"label\">\r\n                \u6811\u578B\u53C2\u6570\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.treeid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'systemcontrol'\">\r\n            <div class=\"label\">\r\n                \u7CFB\u7EDF\u63A7\u4EF6\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.controlid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n    </ng-container> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"content textarea\">\r\n        <div class=\"label\">\r\n            \u63D0\u793A\u4FE1\u606F\r\n        </div>\r\n        <div class=\"control\">\r\n            <textarea nz-input rows=\"3\" [(ngModel)]=\"formField.templateOptions['tips']\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content textarea\">\r\n        <div class=\"label\">\r\n            \u8FD9\u5219\u8868\u8FBE\u5F0F\r\n        </div>\r\n        <div class=\"control\">\r\n            <textarea nz-input rows=\"3\" [(ngModel)]=\"formField.templateOptions['pattern']\"> </textarea>\r\n        </div>\r\n    </div>\r\n</div>",
                        styles: [":host ::ng-deep .builder-content{width:100%;padding:18px 0 0 12px;display:inline-block}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px;display:flex}:host ::ng-deep .builder-content .content .label{width:120px;text-align:right;padding:5px 10px 0 0}:host ::ng-deep .builder-content .content .control{flex:1;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormDesignField.ctorParameters = function () {
            return [
                { type: message.NzMessageService }
            ];
        };
        VXFormDesignField.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXFormDesignField;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormDesignFieldLabel = /** @class */ (function () {
        function VXFormDesignFieldLabel() {
            this.formField = {
                key: "",
                type: "html",
                templateOptions: {
                    label: "",
                    description: "",
                    parameterid: "",
                    treeid: "",
                    controlid: "",
                    maxLength: 50,
                    minLength: 0,
                    max: 0,
                    min: 0,
                    precision: 0,
                    placeholder: "",
                    required: false,
                    tips: "",
                    pattern: ""
                },
                origin: {
                    refdatasourcetype: "",
                    datatype: ""
                }
            };
        }
        Object.defineProperty(VXFormDesignFieldLabel.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.formField = __assign({}, this.formField, value);
                console.log(this.formField);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormDesignFieldLabel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VXFormDesignFieldLabel.prototype.submitForm = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VXFormDesignFieldLabel.prototype.checkSave = /**
         * @return {?}
         */
            function () {
                return true;
            };
        VXFormDesignFieldLabel.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-design-fieldlabel",
                        template: "<textarea nz-input [nzAutosize]=\"{ minRows: 20, maxRows: 6 }\"\r\n    [(ngModel)]=\"formField.templateOptions['description']\"></textarea>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        VXFormDesignFieldLabel.ctorParameters = function () { return []; };
        VXFormDesignFieldLabel.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXFormDesignFieldLabel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormDesignTable = /** @class */ (function () {
        function VXFormDesignTable() {
            this.tableType = "";
            this.businessTable = {
                primary: {},
                child: {
                    single: [],
                    multiple: []
                }
            };
            this.fieldConfig = {};
            this.tableData = [];
            this.mapOfCheckedId = {};
        }
        /**
         * @return {?}
         */
        VXFormDesignTable.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initTableData();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormDesignTable.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        VXFormDesignTable.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VXFormDesignTable.prototype.initTableData = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.tableData = [];
                this.mapOfCheckedId = {};
                /** @type {?} */
                var business = core$1.clone(this.businessTable);
                /** @type {?} */
                var tables = [];
                if (!business)
                    return;
                if (this.tableType === "single") {
                    if (business.primary && business.primary != null) {
                        tables = __spread(tables, [business.primary]);
                    }
                    if (business.child &&
                        business.child != null &&
                        business.child.single &&
                        business.child.single != null &&
                        business.child.single.length > 0) {
                        tables = tables.concat(business.child.single);
                    }
                }
                else if (this.tableType === "multiple") {
                    if (business.child &&
                        business.child != null &&
                        business.child.multiple &&
                        business.child.multiple != null &&
                        business.child.multiple.length > 0) {
                        business.child.multiple.forEach(( /**
                         * @param {?} table
                         * @return {?}
                         */function (table) {
                            if (table.tablecode === _this.fieldConfig.tablecode) {
                                tables = [table];
                            }
                        }));
                    }
                }
                this.tableData = tables;
            };
        VXFormDesignTable.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-design-table",
                        template: "<nz-tabset>\r\n    <ng-container *ngFor=\"let table of tableData;let index=index;\">\r\n        <nz-tab [nzTitle]=\"table.tablename\">\r\n\r\n            <nz-table>\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>\u5B57\u6BB5Code</th>\r\n                        <th>\u5B57\u6BB5\u540D\u79F0</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of table.tablefields\">\r\n                        <ng-container *ngIf=\"data?.isbutintin==true || data?.fieldquote==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [nzChecked]=\"true\"></td>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"data?.isbutintin!==true && data?.fieldquote!==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [(nzChecked)]=\"mapOfCheckedId[data.fieldcode]\"></td>\r\n                        </ng-container>\r\n                        <td>{{ data.fieldcode }}</td>\r\n                        <td>{{ data.fieldname }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-tab>\r\n    </ng-container>\r\n</nz-tabset>",
                        providers: [DataService],
                        styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormDesignTable.ctorParameters = function () { return []; };
        VXFormDesignTable.propDecorators = {
            tableType: [{ type: i0.Input }],
            businessTable: [{ type: i0.Input }],
            fieldConfig: [{ type: i0.Input }]
        };
        return VXFormDesignTable;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormDesignTables = /** @class */ (function () {
        function VXFormDesignTables() {
            this.businessTable = {
                primary: {},
                child: {
                    single: [],
                    multiple: []
                }
            };
            this.radioValue = "";
            this.tableData = [];
        }
        /**
         * @return {?}
         */
        VXFormDesignTables.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initTableData();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormDesignTables.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        VXFormDesignTables.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VXFormDesignTables.prototype.initTableData = /**
         * @return {?}
         */
            function () {
                this.tableData = [];
                /** @type {?} */
                var business = core$1.clone(this.businessTable);
                if (!business)
                    return;
                if (business.child &&
                    business.child != null &&
                    business.child.multiple &&
                    business.child.multiple != null &&
                    business.child.multiple.length > 0) {
                    this.tableData = business.child.multiple;
                }
                console.log(this.tableData);
            };
        /**
         * @param {?} table
         * @return {?}
         */
        VXFormDesignTables.prototype.selectOK = /**
         * @param {?} table
         * @return {?}
         */
            function (table) { };
        VXFormDesignTables.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-design-tables",
                        template: "<nz-radio-group [(ngModel)]=\"radioValue\" nzName=\"radiogroup\">\r\n    <nz-table>\r\n        <thead>\r\n            <tr>\r\n                <th></th>\r\n                <th>\u8868Code</th>\r\n                <th>\u8868\u540D\u79F0</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableData\">\r\n                <td> <label nz-radio [nzValue]=\"data.tablecode\" [nzDisabled]=\"data.tablequote\"></label>\r\n                </td>\r\n                <td>{{ data.tablecode }}</td>\r\n                <td>{{ data.tablename }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-radio-group>",
                        providers: [DataService],
                        styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}:host ::ng-deep .ant-radio-group{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormDesignTables.ctorParameters = function () { return []; };
        VXFormDesignTables.propDecorators = {
            businessTable: [{ type: i0.Input }]
        };
        return VXFormDesignTables;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormDesignDetail = /** @class */ (function () {
        function VXFormDesignDetail(message$$1, modalService, vxFormAntService, vxDialogService, dataService, vxAntCommonService, vxTransferService, vxDesginToFormService, vxFormCommonService) {
            this.message = message$$1;
            this.modalService = modalService;
            this.vxFormAntService = vxFormAntService;
            this.vxDialogService = vxDialogService;
            this.dataService = dataService;
            this.vxAntCommonService = vxAntCommonService;
            this.vxTransferService = vxTransferService;
            this.vxDesginToFormService = vxDesginToFormService;
            this.vxFormCommonService = vxFormCommonService;
            this.formCode = "";
            this.api = {
                tables: { url: "assets/mockData/business.json" },
                form: { url: "assets/mockData/formInfo.json" }
            };
            this.saveEvent = new i0.EventEmitter();
            this.cancelEvent = new i0.EventEmitter();
            this.previewEvent = new i0.EventEmitter();
            this.pageStatus = 1;
            this.form_model = {};
            this.form_group = new forms.FormGroup({});
            this.form_fields = [];
            this.vxFormInfo = {};
            this.business_tables = {
                primary: {},
                child: { single: [], multiple: [] }
            };
            this.layout_column = "layout-column-3";
            this.layout_row = "layout-row-1";
            this.table_Data = [];
        }
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.vxFormAntService.btnEvent.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    switch (res["type"]) {
                        case "delete":
                            _this.modalService.confirm({
                                nzTitle: "提示",
                                nzContent: "您确定要删除选中的字段？",
                                nzOnOk: ( /**
                                 * @return {?}
                                 */function () {
                                    _this.groupBtnDeleteFields(res["field"]);
                                })
                            });
                            break;
                        case "up":
                        case "down":
                            _this.groupBtnMoveUpOrDown(res["field"], res["type"]);
                            break;
                        case "item":
                            _this.groupBtnTableFields(res["field"]);
                            break;
                        case "remark":
                        case "line":
                            _this.groupBtnAddLineRemark(res["field"], res["type"]);
                            break;
                        default:
                            break;
                    }
                }));
                this.vxFormAntService.fieldEvent.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var sign = res["sign"];
                    if (sign == "edit") {
                        _this.editFormFieldConfig(res["field"]);
                    }
                    else if (sign == "delete") {
                        _this.modalService.confirm({
                            nzTitle: "提示",
                            nzContent: "您确定要删除该字段？",
                            nzOnOk: ( /**
                             * @return {?}
                             */function () {
                                _this.deleteFormFieldConfig(res["field"]);
                            })
                        });
                    }
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormDesignDetail.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.formCode) {
                    this.initTablesInfo();
                }
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { };
        /*按钮区域---begin*/
        /*按钮区域---begin*/
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnSave = /*按钮区域---begin*/
            /**
             * @return {?}
             */
            function () {
                this.vxFormInfo.fields = core$1.clone(this.form_fields);
                if (this.vxFormInfo.fields !== null &&
                    this.vxFormInfo.fields !== undefined) {
                    this.vxFormCommonService.initFormFieldProperty(this.vxFormInfo.fields);
                }
                console.log(JSON.stringify(this.vxFormInfo));
                this.saveEvent.emit(JSON.stringify(this.vxFormInfo));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnCancel = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnPreview = /**
         * @return {?}
         */
            function () {
                this.vxFormInfo.fields = core$1.clone(this.form_fields);
                if (this.vxFormInfo.fields !== null &&
                    this.vxFormInfo.fields !== undefined) {
                    this.vxFormCommonService.initFormFieldProperty(this.vxFormInfo.fields);
                }
                this.previewEvent.emit(JSON.stringify(this.vxFormInfo));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnDelete = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.modalService.confirm({
                    nzTitle: "提示",
                    nzContent: "您确定要删除选中的字段？",
                    nzOnOk: ( /**
                     * @return {?}
                     */function () {
                        _this.getCheckFields().forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            _this.form_fields.forEach(( /**
                             * @param {?} field
                             * @param {?} index
                             * @param {?} object
                             * @return {?}
                             */function (field, index, object) {
                                if (field.key === item.field.key &&
                                    _.get(field, "templateOptions.isbutintin") != true) {
                                    object.splice(index, 1);
                                }
                            }));
                        }));
                        _this.initTableFieldStatus();
                    })
                });
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnMoveUp = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.getCheckFields().forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    if (item.index > 0) {
                        _this.form_fields.splice(item.index, 1);
                        _this.form_fields.splice(item.index - 1, 0, item.field);
                    }
                }));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnMoveDown = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.getCheckFields()
                    .reverse()
                    .forEach(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                    if (item.index < _this.form_fields.length - 1) {
                        _this.form_fields.splice(item.index, 1);
                        _this.form_fields.splice(item.index + 1, 0, item.field);
                    }
                }));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnAddFields = /**
         * @return {?}
         */
            function () {
                this.selectTableFields();
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnAddRemark = /**
         * @return {?}
         */
            function () {
                this.vxTransferService.transferLabelToForm(this.form_fields, this.getCheckFields());
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnAddLine = /**
         * @return {?}
         */
            function () {
                this.vxTransferService.transferLineToForm(this.form_fields, this.getCheckFields());
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnAddGroup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var tablecode = this.getTableMultipleCode();
                if (tablecode == null || tablecode == "") {
                    this.message.warning("当前业务表没有相关联的多表单记录，故不能添加多记录区域！");
                    return;
                }
                if (this.business_tables &&
                    this.business_tables.child &&
                    this.business_tables.child.multiple &&
                    this.business_tables.child.multiple.length > 0) {
                    if (this.business_tables.child.multiple.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return item.tablequote !== true;
                    }))) {
                        this.vxDialogService.CreateModelDialog({
                            nzTitle: "编辑",
                            size: "large",
                            nzContent: VXFormDesignTables
                        }, { businessTable: this.business_tables, tableType: "single" }, ( /**
                         * @param {?} instance
                         * @param {?} modal
                         * @return {?}
                         */function (instance, modal) {
                            modal.destroy();
                            _this.vxTransferService.transferGroupToForm(_this.form_fields, _this.getCheckFields(), instance.radioValue);
                            _this.initTableFieldStatus();
                        }));
                    }
                }
            };
        /**
         * @param {?} type
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnColumn = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                this.vxFormInfo.column = "layout-column-" + type;
                this.layout_column = this.vxFormInfo.column;
            };
        /**
         * @param {?} type
         * @return {?}
         */
        VXFormDesignDetail.prototype.btnRow = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                this.vxFormInfo.row = "layout-row-" + type;
                this.layout_row = this.vxFormInfo.row;
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.getCheckFields = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var checkedField = [];
                this.form_fields.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */function (item, index) {
                    if (item.checked) {
                        checkedField.push({ index: index, field: item });
                    }
                }));
                return checkedField;
            };
        /*按钮区域---end*/
        /*按钮区域---end*/
        /**
         * @param {?} groupField
         * @param {?} type
         * @return {?}
         */
        VXFormDesignDetail.prototype.groupBtnMoveUpOrDown = /*按钮区域---end*/
            /**
             * @param {?} groupField
             * @param {?} type
             * @return {?}
             */
            function (groupField, type) {
                if (!_.get(groupField, "fieldArray.fieldGroup") ||
                    _.get(groupField, "fieldArray.fieldGroup").length < 1) {
                    groupField.fieldArray = {
                        fieldGroup: []
                    };
                }
                /** @type {?} */
                var res = this.vxTransferService.groupFieldMoveUpOrDown(this.form_fields, groupField, type);
                if (res != null) {
                    this.form_fields = res;
                    if (groupField.key !== null && groupField.key !== undefined) {
                        this.form_model[groupField.key] = [{}];
                    }
                }
            };
        /**
         * @param {?} groupField
         * @param {?} type
         * @return {?}
         */
        VXFormDesignDetail.prototype.groupBtnAddLineRemark = /**
         * @param {?} groupField
         * @param {?} type
         * @return {?}
         */
            function (groupField, type) {
                if (!_.get(groupField, "fieldArray.fieldGroup") ||
                    _.get(groupField, "fieldArray.fieldGroup").length < 1) {
                    groupField.fieldArray = {
                        fieldGroup: []
                    };
                }
                /** @type {?} */
                var res = null;
                if (type === "line") {
                    res = this.vxTransferService.groupTransferLineToForm(this.form_fields, groupField);
                }
                else if (type === "remark") {
                    res = this.vxTransferService.groupTransferRemarkToForm(this.form_fields, groupField);
                }
                if (res != null) {
                    this.form_fields = res;
                    if (groupField.key !== null && groupField.key !== undefined) {
                        this.form_model[groupField.key] = [{}];
                    }
                }
            };
        /**
         * @param {?} groupField
         * @return {?}
         */
        VXFormDesignDetail.prototype.groupBtnTableFields = /**
         * @param {?} groupField
         * @return {?}
         */
            function (groupField) {
                var _this = this;
                this.vxDialogService.CreateModelDialog({
                    nzTitle: "编辑",
                    size: "large",
                    nzContent: VXFormDesignTable
                }, {
                    businessTable: this.business_tables,
                    tableType: "multiple",
                    fieldConfig: groupField
                }, ( /**
                 * @param {?} instance
                 * @param {?} modal
                 * @return {?}
                 */function (instance, modal) {
                    modal.destroy();
                    /** @type {?} */
                    var res = _this.vxTransferService.groupTransferSelectFieldToForm(_this.form_fields, groupField, _this.getCheckFields(), _this.business_tables, instance.mapOfCheckedId);
                    if (res != null) {
                        _this.form_fields = res;
                        if (groupField.key !== null && groupField.key !== undefined) {
                            _this.form_model[groupField.key] = [{}];
                        }
                    }
                    _this.initTableFieldStatus();
                }));
            };
        /**
         * @param {?} groupField
         * @return {?}
         */
        VXFormDesignDetail.prototype.groupBtnDeleteFields = /**
         * @param {?} groupField
         * @return {?}
         */
            function (groupField) {
                if (!_.get(groupField, "fieldArray.fieldGroup") ||
                    _.get(groupField, "fieldArray.fieldGroup").length < 1) {
                    return;
                }
                /** @type {?} */
                var res = this.vxTransferService.groupTransferDeleteForm(this.form_fields, groupField);
                if (res != null) {
                    this.form_fields = res;
                    if (groupField.key !== null && groupField.key !== undefined) {
                        this.form_model[groupField.key] = [{}];
                    }
                }
                this.initTableFieldStatus();
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.initTablesInfo = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.business_tables;
                this.dataService
                    .getBusinessTables(this.api.tables.url, { formcode: this.formCode })
                    .subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                    if (res != null) {
                        _this.business_tables = res;
                        _this.initFormInfo();
                    }
                }));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.initFormInfo = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dataService.getFormInfo(this.api.form.url, { formcode: this.formCode }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.vxFormInfo = {
                        code: res.code,
                        name: res.name,
                        type: res.type,
                        fields: res.fields
                    };
                    if (_this.vxFormInfo.fields !== null &&
                        _this.vxFormInfo.fields !== undefined) {
                        _this.vxFormCommonService.initFormFieldModel(_this.vxFormInfo.fields, _this.form_model);
                        _this.form_fields = _this.vxFormInfo.fields;
                    }
                    if (res.column != undefined && res.column != null && res.column != "") {
                        _this.vxFormInfo.column = res.column;
                    }
                    else {
                        _this.vxFormInfo.column = "layout-column-3";
                    }
                    if (res.row != undefined && res.row != null && res.row != "") {
                        _this.vxFormInfo.row = res.row;
                    }
                    else {
                        _this.vxFormInfo.row = "layout-row-1";
                    }
                    if (_this.vxFormInfo.column != undefined &&
                        _this.vxFormInfo.column != null &&
                        _this.vxFormInfo.row != undefined &&
                        _this.vxFormInfo.row != null) {
                        _this.layout_column = _this.vxFormInfo.column;
                        _this.layout_row = _this.vxFormInfo.row;
                        //debugger
                        _this.vxDesginToFormService.initFormFieldByTables(_this.business_tables, _this.form_fields);
                        _this.initTableFieldStatus();
                    }
                }));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.initTableFieldStatus = /**
         * @return {?}
         */
            function () {
                this.vxDesginToFormService.initTableStatus(this.business_tables, this.form_fields);
                this.initTablesData();
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.initTablesData = /**
         * @return {?}
         */
            function () {
                this.table_Data = [];
                /** @type {?} */
                var business = core$1.clone(this.business_tables);
                /** @type {?} */
                var tables = [];
                if (!business)
                    return;
                if (business.primary && business.primary != null) {
                    tables = [
                        {
                            tabletype: "primary",
                            tablelabel: "主表",
                            tablecode: business.primary["tablecode"],
                            tablename: business.primary["tablename"],
                            tablefields: business.primary["tablefields"]
                        }
                    ];
                }
                if (business.child &&
                    business.child != null &&
                    business.child.single &&
                    business.child.single != null &&
                    business.child.single.length > 0) {
                    if (Array.isArray(business.child.single)) {
                        business.child.single.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            tables.push({
                                tabletype: "single",
                                tablelabel: "单记录子表",
                                tablecode: item["tablecode"],
                                tablename: item["tablename"],
                                tablefields: item["tablefields"]
                            });
                        }));
                    }
                }
                if (business.child &&
                    business.child != null &&
                    business.child.multiple &&
                    business.child.multiple != null &&
                    business.child.multiple.length > 0) {
                    if (Array.isArray(business.child.multiple)) {
                        business.child.multiple.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            tables.push({
                                tabletype: "multiple",
                                tablelabel: "多记录子表",
                                tablecode: item["tablecode"],
                                tablename: item["tablename"],
                                tablefields: item["tablefields"]
                            });
                        }));
                    }
                }
                this.table_Data = tables;
            };
        //表单选择
        //表单选择
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.selectTableFields =
            //表单选择
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.vxDialogService.CreateModelDialog({
                    nzTitle: "编辑",
                    size: "large",
                    nzContent: VXFormDesignTable
                }, { businessTable: this.business_tables, tableType: "single" }, ( /**
                 * @param {?} instance
                 * @param {?} modal
                 * @return {?}
                 */function (instance, modal) {
                    modal.destroy();
                    _this.vxTransferService.transferSelectFieldToForm(_this.form_fields, _this.getCheckFields(), _this.business_tables, instance.mapOfCheckedId);
                    console.log(JSON.stringify(_this.form_fields));
                    _this.initTableFieldStatus();
                }));
            };
        /**
         * @return {?}
         */
        VXFormDesignDetail.prototype.getTableMultipleCode = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var resTableCode = "";
                if (this.business_tables &&
                    this.business_tables.child &&
                    this.business_tables.child.multiple &&
                    this.business_tables.child.multiple.length > 0) {
                    this.business_tables.child.multiple.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        if (item.tablequote !== true && resTableCode == "") {
                            resTableCode = item.tablecode;
                        }
                    }));
                }
                return resTableCode;
            };
        //修改Field
        //修改Field
        /**
         * @param {?} field
         * @return {?}
         */
        VXFormDesignDetail.prototype.editFormFieldConfig =
            //修改Field
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                var _this = this;
                /** @type {?} */
                var content;
                /** @type {?} */
                var title = "";
                if (field.type === "html") {
                    title = "编辑片段文本描述";
                    content = VXFormDesignFieldLabel;
                }
                else {
                    title = "编辑字段 - " + _.get(field, "templateOptions.label");
                    content = VXFormDesignField;
                }
                this.vxDialogService.CreateModelDialog({
                    nzTitle: title,
                    size: "large",
                    nzContent: content
                }, { field: core$1.clone(field) }, ( /**
                 * @param {?} instance
                 * @param {?} modal
                 * @return {?}
                 */function (instance, modal) {
                    if (instance.checkSave()) {
                        /** @type {?} */
                        var result = _this.vxTransferService.editFormFieldInfo(_this.form_fields, instance.formField);
                        if (result != null) {
                            _this.form_fields = result.formFileds;
                            if (result.groupKey != null && result.groupKey != "") {
                                _this.form_model[result.groupKey] = [{}];
                            }
                        }
                        modal.destroy();
                    }
                }));
            };
        //删除Field
        //删除Field
        /**
         * @param {?} field
         * @return {?}
         */
        VXFormDesignDetail.prototype.deleteFormFieldConfig =
            //删除Field
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var result = this.vxTransferService.deleteFormFieldInfo(this.form_fields, field);
                if (result != null) {
                    this.form_fields = result.formFileds;
                    if (result.groupKey != null && result.groupKey != "") {
                        this.form_model[result.groupKey] = [{}];
                    }
                    this.initTableFieldStatus();
                }
            };
        VXFormDesignDetail.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-design-detail",
                        template: "<div class=\"design\">\r\n    <div class=\"layout\">\r\n        <div class=\"layout-column\">\r\n            <div class=\"title\">\r\n                \u9009\u62E9\u5E03\u5C40\u6837\u5F0F\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnColumn(3)\">\r\n                    <div [class]=\"layout_column==='layout-column-3'?'select':''\"><i class=\" icon-threeL\">\r\n                        </i></div>\r\n                    <span>\u4E09\u5217</span>\r\n                </li>\r\n                <li (click)=\"btnColumn(2)\">\r\n                    <div [class]=\"layout_column==='layout-column-2'?'select':''\"><i class=\" icon-towL\"></i>\r\n                    </div>\r\n                    <span>\u4FE9\u5217</span>\r\n                </li>\r\n                <li (click)=\"btnColumn(1)\">\r\n                    <div [class]=\"layout_column==='layout-column-1'?'select':''\">\r\n                        <i class=\"icon-oneL\"></i></div>\r\n                    <span>\u4E00\u5217</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"layout-row\">\r\n            <div class=\"title\">\r\n                \u9009\u62E9\u8868\u5355\u6837\u5F0F\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnRow(1)\">\r\n                    <div [class]=\"layout_row==='layout-row-1'?'select':''\"></div>\r\n                    <span>\u6C34\u5E73</span>\r\n                </li>\r\n                <li (click)=\"btnRow(2)\">\r\n                    <div [class]=\"layout_row==='layout-row-2'?'select':''\"></div>\r\n                    <span>\u5782\u76F4</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"layout-el\">\r\n            <div class=\"title\">\r\n                \u8868\u5355\u7F16\u8F91\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnAddFields()\"><i class=\"icon-TianJiaZiDuan\"></i>\u6DFB\u52A0\u5B57\u6BB5</li>\r\n                <li (click)=\"btnAddRemark()\"><i class=\"icon-other-WenBen\"></i>\u6DFB\u52A0\u6587\u672C</li>\r\n                <li (click)=\"btnAddLine()\"><i class=\"icon-FenGeXian\"></i>\u6DFB\u52A0\u5206\u5272\u7EBF</li>\r\n                <li (click)=\"btnAddGroup()\"><i class=\"icon-DuoJiLuQu\"></i>\u6DFB\u52A0\u591A\u8BB0\u5F55\u533A</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"panel\">\r\n        <div class=\"vxbutton\">\r\n            <div> \r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"btnSave()\">\u4FDD\u5B58</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"btnPreview()\"><i\r\n                    class=\"icon-fwb-yulan\"></i>\u9884\u89C8</button>\r\n            </div>\r\n            <div>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnDelete()\"><i\r\n                        class=\"icon-N_delete2\"></i>\u5220\u9664</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnMoveUp()\"><i\r\n                        class=\"icon-ShangYi\"></i>\u4E0A\u79FB</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnMoveDown()\"><i\r\n                        class=\"icon-XiaYi\"></i>\u4E0B\u79FB</button>\r\n                </div>\r\n        </div>\r\n        <div class=\"vxform scrollbar\">\r\n            <form [formGroup]=\"form_group\" [class]=\"vxFormInfo?.column +' '+ vxFormInfo?.row\" nz-form>\r\n                <vxform [fields]=\"form_fields\" [status]=\"1\" [form]=\"form_group\" [model]=\"form_model\">\r\n                </vxform>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <vxform-drawer [(ngModel)]=\"table_Data\"></vxform-drawer> -->",
                        providers: [DataService, VXAntCommonService, VXTransferService],
                        styles: [":host ::ng-deep{width:100%;display:flex;height:100%;background-color:#f3f3f3}:host ::ng-deep .ant-input[disabled]{color:rgba(0,0,0,.25);background-color:#f3f3f3;cursor:not-allowed;opacity:1;border:0}:host ::ng-deep .design{display:flex;flex:1}:host ::ng-deep .design .layout{float:left;width:240px;background-color:#fff;padding:15px 20px 0}:host ::ng-deep .design .layout .title{font-size:14px;color:#9b9b9b;margin-bottom:10px}:host ::ng-deep .design .layout ul{list-style:none;margin:0;padding:0}:host ::ng-deep .design .layout ul li{margin:0;padding:0;cursor:pointer}:host ::ng-deep .design .layout-column ul{display:inline-block;width:100%}:host ::ng-deep .design .layout-column ul li{float:left;text-align:center}:host ::ng-deep .design .layout-column ul li div{width:56px;height:56px;line-height:63px;border-radius:4px;background-color:#ececec;margin-bottom:5px}:host ::ng-deep .design .layout-column ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .design .layout-column ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .design .layout-column ul li:nth-child(1),:host ::ng-deep .design .layout-column ul li:nth-child(2){margin:0 15px 0 0}:host ::ng-deep .design .layout-row ul{display:inline-block;width:100%}:host ::ng-deep .design .layout-row ul li{float:left;text-align:center}:host ::ng-deep .design .layout-row ul li div{width:90px;height:32px;line-height:32px;border-radius:4px;background-color:#ececec;margin-bottom:5px;cursor:pointer}:host ::ng-deep .design .layout-row ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .design .layout-row ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .design .layout-row ul li:nth-child(1){margin:0 15px 0 0}:host ::ng-deep .design .layout-el li{width:200px;height:33px;line-height:33px;border-radius:4px;border:1px solid #dcdce0;background-color:#fff;margin:0 0 10px!important;font-size:13px;color:#323232}:host ::ng-deep .design .layout-el li i{margin:0 8px;font-size:14px;color:#bfbfbf}:host ::ng-deep .design .layout-el li:hover{background-color:#71a9ff;cursor:pointer;color:#fff}:host ::ng-deep .design .layout-el li:hover i{color:#fff}:host ::ng-deep .design .panel{flex:1;float:left;margin:0 0 0 20px;padding:0;display:flex;flex-direction:column;border-radius:4px;border:1px solid #dcdce0;background-color:#fff}:host ::ng-deep .design .panel .vxbutton{padding:10px;width:100%;text-align:right;border-bottom:1px solid #d9d9d9;font-size:13px;display:flex}:host ::ng-deep .design .panel .vxbutton button{margin:0 6px 0 0;font-size:12px}:host ::ng-deep .design .panel .vxbutton button i{margin:0 5px 0 0;font-size:14px}:host ::ng-deep .design .panel .vxbutton div{flex:1;float:left}:host ::ng-deep .design .panel .vxbutton div:nth-child(1){text-align:left}:host ::ng-deep .design .panel .vxbutton div:nth-child(2){text-align:right}:host ::ng-deep .design .panel .vxform{width:100%;height:100%;display:inline-block;margin:0;padding:20px;overflow-y:auto}:host ::ng-deep .design .panel .vxform vxfield-checkbox,:host ::ng-deep .design .panel .vxform vxfield-datetime,:host ::ng-deep .design .panel .vxform vxfield-html,:host ::ng-deep .design .panel .vxform vxfield-image,:host ::ng-deep .design .panel .vxform vxfield-line,:host ::ng-deep .design .panel .vxform vxfield-lookup,:host ::ng-deep .design .panel .vxform vxfield-number,:host ::ng-deep .design .panel .vxform vxfield-password,:host ::ng-deep .design .panel .vxform vxfield-radio,:host ::ng-deep .design .panel .vxform vxfield-select,:host ::ng-deep .design .panel .vxform vxfield-text,:host ::ng-deep .design .panel .vxform vxfield-textarea,:host ::ng-deep .design .panel .vxform vxfield-texti18n,:host ::ng-deep .design .panel .vxform vxfield-upload,:host ::ng-deep .design .panel .vxform vxfield-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat{display:flex;width:100%}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational{display:flex;width:560px;margin:0 0 10px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldcheckbox{width:50px;font-size:13px;line-height:17px;color:#323232;text-align:right;vertical-align:middle;float:left;box-sizing:border-box;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-grid-row-align:center;align-self:center;margin:0 10px 0 0}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl{flex:1;display:flex;align-self:center;position:relative}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label{width:120px;font-size:13px;line-height:17px;color:#323232;text-align:right;vertical-align:middle;float:left;box-sizing:border-box;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-grid-row-align:center;align-self:center}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label span{color:red;margin-right:3px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label::after{content:\"\uFF1A\"}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control{flex:1;padding:10px 10px 10px 0}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-radio-wrapper{height:32px;line-height:32px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton{display:none;border-radius:2px;border:1px solid #ffca5e;background-color:rgba(255,202,94,.2);background-size:cover;width:100%;position:absolute;height:100%;text-align:right}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton button:active{border:0!important;--antd-wave-shadow-color:none!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit{background-color:#ffb15e!important;font-size:13px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;margin-right:-12px;height:26px;line-height:26px;padding:1px 15px;position:relative;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit i{font-size:14px;margin-right:5px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnDel{background-color:#fc8e8c!important;font-size:13px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;height:26px;line-height:25px;width:26px;margin-right:-2px;position:relative;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnDel:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl:hover .fieldButton{display:block}:host ::ng-deep .design .panel .vxform vxfield-html .fieldControl .control{padding:15px 10px!important}:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform vxform-repeat{display:flex;flex:1;flex-direction:column;margin:0 0 20px}:host ::ng-deep .design .panel .vxform vxform-repeat>.fieldOperational{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat vxfield{display:flex;width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-checkbox,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-datetime,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-html,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-image,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-lookup,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-number,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-password,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-radio,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-select,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-text,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-textarea,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-texti18n,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-upload,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-wrapper{display:flex;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .fieldcheckbox{width:30px!important}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl{border-radius:2px;border:1px solid #ffca5e;background-color:#fff;flex-direction:column;width:100%;margin-left:20px}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header{border-bottom:1px solid #ffca5e;display:flex}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul{list-style:none;margin:0;padding:0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul li{float:left;margin:0 15px 0 0;font-size:12px;color:#323232;cursor:pointer;display:inline-block;line-height:36px;height:38px}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul li i{color:#ffca5e;margin:0 5px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left{float:left;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left ul{float:left}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left ul li:nth-child(1){width:30px;text-align:right}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right{float:left;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul{float:right}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1){margin:0;width:35px;padding:1px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1) .btnDel{display:none;background-color:#fc8e8c!important;font-size:13px;height:26px;line-height:25px;width:26px;margin-right:-10px;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1) .btnDel:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body{min-height:50px;padding:20px 20px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body .panel-vxform-group{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body vxform-group{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body vxform-group .fieldOperational{width:560px}:host ::ng-deep .design .panel .vxform vxform-repeat:hover .report-header .btnDel{display:block!important;margin-top:5px}:host ::ng-deep .design .panel .vxform hr{border:0;border-top:1px solid #d9d9d9;margin:16px}:host ::ng-deep .design .panel .vxform .panel-html,:host ::ng-deep .design .panel .vxform .panel-line,:host ::ng-deep .design .panel .vxform .panel-repeat,:host ::ng-deep .design .panel .vxform .panel-textarea,:host ::ng-deep .design .panel .vxform .panel-upload{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-1 .fieldOperational{width:560px!important}:host ::ng-deep .design .panel .vxform .layout-column-1 vxform-repeat>.fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-label .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-template .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-upload .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-2 vxform-field{float:left;width:50%}:host ::ng-deep .design .panel .vxform .layout-column-2 vxform-repeat vxform-field{float:left;width:50%}:host ::ng-deep .design .panel .vxform .layout-column-2 .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-3 vxform-field{float:left;width:33.33333%}:host ::ng-deep .design .panel .vxform .layout-column-3 vxform-repeat vxform-field{float:left;width:33.33333%}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl{flex-direction:column!important;-ms-grid-row-align:none!important;align-self:none!important}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .label{float:left!important;text-align:left!important;flex:1!important;width:100%!important;padding:10px 10px 0}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .control{padding:15px 10px!important}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .control hr{margin:20px 0 15px!important}:host ::ng-deep .design .panel .vxform .layout-row-2 vxfield-label .control{padding:15px 10px!important}:host ::ng-deep .design .scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .design .scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .design .scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .design .scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormDesignDetail.ctorParameters = function () {
            return [
                { type: message.NzMessageService },
                { type: i1$1.NzModalService },
                { type: VXFormAntService },
                { type: VXDialogService },
                { type: DataService },
                { type: VXAntCommonService },
                { type: VXTransferService },
                { type: VXDesginToFormService },
                { type: core$1.VXFormCommonService }
            ];
        };
        VXFormDesignDetail.propDecorators = {
            formCode: [{ type: i0.Input }],
            api: [{ type: i0.Input }],
            saveEvent: [{ type: i0.Output }],
            cancelEvent: [{ type: i0.Output }],
            previewEvent: [{ type: i0.Output }]
        };
        return VXFormDesignDetail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormDrawerComponent = /** @class */ (function () {
        function VXFormDrawerComponent() {
            this.visible = false;
            this.tableData = [];
        }
        /**
         * @return {?}
         */
        VXFormDrawerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                //this.initTableData();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormDrawerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        VXFormDrawerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        VXFormDrawerComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this.visible = false;
            };
        /**
         * @return {?}
         */
        VXFormDrawerComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.visible = !this.visible;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        VXFormDrawerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value != undefined && value != null) {
                    this.tableData = value;
                }
            };
        /**
         * @param {?} _
         * @return {?}
         */
        VXFormDrawerComponent.prototype.onChange = /**
         * @param {?} _
         * @return {?}
         */
            function (_$$1) { };
        /**
         * @return {?}
         */
        VXFormDrawerComponent.prototype.onTouched = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} fn
         * @return {?}
         */
        VXFormDrawerComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        VXFormDrawerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        VXFormDrawerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-drawer",
                        template: "<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" (nzOnClose)=\"close()\" [nzWidth]=\"300\"\r\n  nzWrapClassName=\"vxformDesign-drawer\">\r\n\r\n  <nz-collapse [nzBordered]=\"false\">\r\n    <ng-container *ngFor=\"let table of tableData;let i=index;\">\r\n      <nz-collapse-panel [nzHeader]=\"table.tablelabel+'-'+table.tablename\" [nzActive]=\"i==0\">\r\n        <ul>\r\n          <li *ngFor=\"let field of table.tablefields\">\r\n            <span><i *ngIf=\"field?.fieldquote\" class=\"icon-KT-Time\"></i></span>\r\n            <span>{{field.fieldname}}</span>\r\n            <span *ngIf=\"field.allownull===false\">*</span>\r\n          </li>\r\n        </ul>\r\n      </nz-collapse-panel>\r\n    </ng-container>\r\n  </nz-collapse>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': visible }\" (click)=\"toggle()\">\r\n\r\n</div>",
                        host: {
                            "[class.setting-drawer]": "true"
                        },
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return VXFormDrawerComponent; })),
                                // replace name as appropriate
                                multi: true
                            }
                        ],
                        styles: [":host ::ng-deep .setting-drawer__handle{position:fixed;bottom:150px;right:0;z-index:999;display:flex;align-items:center;justify-content:center;font-size:16px;text-align:center;border-radius:4px 0 0 4px;cursor:pointer;transition:right .1s cubic-bezier(.8,0,.5,.4);pointer-events:auto;width:28px;height:48px;background-color:rgba(0,0,0,.5)}:host ::ng-deep .setting-drawer__handle-opened{right:300px;z-index:1001}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormDrawerComponent.ctorParameters = function () { return []; };
        return VXFormDrawerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormPrivateTree = /** @class */ (function () {
        function VXFormPrivateTree() {
            //是否显示Tag
            this.tag = true;
            //单选？多选
            this.selectType = "single";
            this.expandAll = true;
            //选中节点
            this.selectData = [];
            //树数据
            this.data = [];
            this.treeChangeEvent = new i0.EventEmitter();
            this.selectedKey = [];
            //选择节点
            this.selectedNode = [];
            this.skeletonStatus = 0;
        }
        /**
         * @return {?}
         */
        VXFormPrivateTree.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormPrivateTree.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.selectData) {
                    this.treeChecked(this.selectData);
                }
                if (changes.data) {
                    //setTimeout(() => {
                    this.skeletonStatus = 1;
                    //}, 100);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormPrivateTree.prototype.nzClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.selectType != "multiple") {
                    this.selectData.forEach(( /**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */function (item, index, object) {
                        if (item != undefined &&
                            item != null &&
                            item.value != undefined &&
                            item.value != null &&
                            event != undefined &&
                            event != null &&
                            event.node != undefined &&
                            event.node != null &&
                            event.node.key != undefined &&
                            event.node.key != null &&
                            event.node.title != undefined &&
                            event.node.title != null &&
                            item.value !== event.node.key) {
                            object.splice(index, 1);
                        }
                    }));
                    if (this.selectData.length < 1) {
                        if (event != undefined &&
                            event != null &&
                            event.node != undefined &&
                            event.node != null &&
                            event.node.key != undefined &&
                            event.node.key != null &&
                            event.node.title != undefined &&
                            event.node.title != null) {
                            this.selectData.push({
                                label: event.node.title,
                                value: event.node.key
                            });
                        }
                    }
                    this.treeChangeEvent.emit({ checkData: this.selectData });
                }
            };
        //点击复选框触发
        //点击复选框触发
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormPrivateTree.prototype.nzCheck =
            //点击复选框触发
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event != undefined &&
                    event != null &&
                    event.keys != undefined &&
                    event.keys != null &&
                    event.node != undefined &&
                    event.node != null &&
                    event.node.key != undefined &&
                    event.node.key != null &&
                    event.node.title != undefined &&
                    event.node.title != null) {
                    /** @type {?} */
                    var isAdd = event.keys.some(( /**
                     * @param {?} key
                     * @return {?}
                     */function (key) {
                        return key === _.get(event, "node.key");
                    }));
                    if (isAdd == true) {
                        this.selectData.push({
                            label: event.node.title,
                            value: event.node.key
                        });
                    }
                    else {
                        this.selectData.forEach(( /**
                         * @param {?} item
                         * @param {?} index
                         * @param {?} object
                         * @return {?}
                         */function (item, index, object) {
                            if (item.value === _.get(event, "node.key")) {
                                object.splice(index, 1);
                            }
                        }));
                    }
                }
                this.treeChecked(this.selectData);
                this.treeChangeEvent.emit({ checkData: this.selectData });
            };
        //重置选中节点
        //重置选中节点
        /**
         * @param {?} items
         * @return {?}
         */
        VXFormPrivateTree.prototype.treeChecked =
            //重置选中节点
            /**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                if (items != null && items.length > 0) {
                    this.selectedKey = items.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return item.value;
                    }));
                }
                else {
                    this.selectedKey = [];
                }
            };
        //删除选中节点
        //删除选中节点
        /**
         * @param {?} node
         * @return {?}
         */
        VXFormPrivateTree.prototype.selectClearById =
            //删除选中节点
            /**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                this.selectData.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    if (item.value === node) {
                        object.splice(index, 1);
                    }
                }));
                this.treeChecked(this.selectData);
                this.treeChangeEvent.emit({ checkData: this.selectData, delete: node });
            };
        /**
         * @return {?}
         */
        VXFormPrivateTree.prototype.selectAllClear = /**
         * @return {?}
         */
            function () {
                //this.selectData =[];
            };
        VXFormPrivateTree.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-private-tree",
                        template: " \r\n    <ul class=\"component-tree\">\r\n        <li class=\"tree-item vxform-scrollbar \">\r\n \r\n            <nz-tree #nzTreeComponent [nzData]=\"data\" (nzClick)=\"nzClick($event)\" (nzCheckBoxChange)=\"nzCheck($event)\" [nzCheckable]=\"selectType==='multiple'\" [nzSelectedKeys]=\"selectedKey\" [nzCheckedKeys]=\"selectedKey\" [nzExpandAll]=\"expandAll\" [nzCheckStrictly]=\"true\">\r\n            </nz-tree>\r\n        </li>\r\n        <li class=\"tree-tag vxform-scrollbar \" *ngIf=\"tag\">\r\n            <div class=\"tag-header\">\r\n                <label>\u5DF2\u9009<span>{{selectData.length}}</span>\u4EBA</label>\r\n                <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n            </div>\r\n            <div class=\"tag-content\">\r\n                <ng-container *ngFor=\"let item of selectData\">\r\n                    <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.value)\">{{item.label}}</nz-tag>\r\n                </ng-container>\r\n            </div>\r\n        </li>\r\n    </ul> ",
                        styles: [":host ::ng-deep .vxform-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep vx-skeleton{height:100%}:host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}:host ::ng-deep .component-tree{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;height:100%}:host ::ng-deep .component-tree .ant-tree-node-content-wrapper{font-size:12px!important;display:inline-block!important;padding:0 5px 0 0!important;min-width:200px!important}:host ::ng-deep .component-tree .ant-tree-node-selected{background-color:#f6f7fb!important}:host ::ng-deep .component-tree .tree-item{flex:1;border:0 solid #f6f7fb;padding:8px 5px 5px 10px;overflow-y:auto}:host ::ng-deep .component-tree .tree-tag{overflow-y:auto;width:330px;background-color:#f6f7fb;padding:15px}:host ::ng-deep .component-tree .tree-tag .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .component-tree .tree-tag .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .component-tree .tree-tag .tag-header label:nth-last-child(1){float:right;font-weight:400;color:#6375da;cursor:pointer}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag i{color:#6375da;font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormPrivateTree.ctorParameters = function () { return []; };
        VXFormPrivateTree.propDecorators = {
            tag: [{ type: i0.Input }],
            selectType: [{ type: i0.Input }],
            expandAll: [{ type: i0.Input }],
            selectData: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            treeChangeEvent: [{ type: i0.Output }],
            nzTreeComponent: [{ type: i0.ViewChild, args: ["nzTreeComponent", { static: false },] }]
        };
        return VXFormPrivateTree;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormPrivateTable = /** @class */ (function () {
        function VXFormPrivateTable() {
            //tableId
            this.id = "";
            //是否要多选
            this.check = false;
            //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
            this.action = 0;
            //按钮列表
            this.buttonlist = [];
            //选中事件
            this.checkChangeEvent = new i0.EventEmitter();
            //翻页事件
            this.pageIndexEvent = new i0.EventEmitter();
            //排序事件
            this.orderChangeEvent = new i0.EventEmitter();
            //过滤事件
            this.filterChangeEvent = new i0.EventEmitter();
            //操作事件
            this.buttonAction = new i0.EventEmitter();
            this.checkIds = [];
            this._headerData = [];
            this.isAllChecked = false;
            this.isIndeterminate = false;
            this.listData = [];
            this.listDataCheckedId = {};
            this.listDataSelectedList = [];
            this.query = {
                total: 0,
                pageIndex: 1,
                pageSize: 15,
                sortName: "",
                sortValue: "",
                keyWord: ""
            };
            this.tableScroll = {
                y: '332px'
            };
        }
        Object.defineProperty(VXFormPrivateTable.prototype, "tableIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this.query.pageIndex;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.query.pageIndex = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormPrivateTable.prototype, "tableSize", {
            get: /**
             * @return {?}
             */ function () {
                return this.query.pageSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.query.pageSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormPrivateTable.prototype, "tableTotal", {
            get: /**
             * @return {?}
             */ function () {
                return this.query.total;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.query.total = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormPrivateTable.prototype, "header", {
            get: /**
             * @return {?}
             */ function () {
                return this._headerData;
            },
            //table 头部信息
            set: 
            //table 头部信息
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                if (value != null && value.length > 0) {
                    value.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        item.prop = item.key;
                        if (item.checkboxable) {
                            item.name = "";
                            item.width = 50;
                            item.canAutoResize = false;
                            item.resizeable = false;
                            item.frozenLeft = true;
                            item.checkboxable = true;
                            item.headerCheckboxable = true;
                        }
                        if (item.action) {
                            item.frozenRight = true;
                            item.canAutoResize = false;
                            item.resizeable = false;
                        }
                        _this._headerData.push(item);
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormPrivateTable.prototype, "body", {
            //table 行数据
            set: 
            //table 行数据
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.listData = value;
                if (this.listData == null || this.listData.length == 0) {
                    this.tableScroll.y = "0px";
                }
                else {
                    this.tableScroll.y = "332px";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormPrivateTable.prototype, "checkid", {
            //默认选中Id
            set: 
            //默认选中Id
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this.listDataSelectedList = [];
                if (value != null && value.length > 0) {
                    value.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        _this.listDataCheckedId[item.id] = true;
                        _this.listDataSelectedList.push(item);
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormPrivateTable.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        VXFormPrivateTable.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        VXFormPrivateTable.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
            };
        //全选|全不选
        //全选|全不选
        /**
         * @param {?} value
         * @return {?}
         */
        VXFormPrivateTable.prototype.setCheckAll =
            //全选|全不选
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this.listData.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return (_this.listDataCheckedId[item.id] = value); }));
                this.setCheckStatus();
            };
        //设置某个选择|取消选中
        //设置某个选择|取消选中
        /**
         * @return {?}
         */
        VXFormPrivateTable.prototype.setCheckStatus =
            //设置某个选择|取消选中
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                this.isAllChecked = this.listData.every(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return _this.listDataCheckedId[item.id]; }));
                this.isIndeterminate = this.listData.some(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return _this.listDataCheckedId[item.id]; })) && !this.isAllChecked;
                this.saveSelected();
            };
        //点击查询
        //点击查询
        /**
         * @return {?}
         */
        VXFormPrivateTable.prototype.queryChange =
            //点击查询
            /**
             * @return {?}
             */
            function () {
                this.pageIndexEvent.emit(this.query);
            };
        //点击翻页
        //点击翻页
        /**
         * @param {?} e
         * @return {?}
         */
        VXFormPrivateTable.prototype.pageIndexChange =
            //点击翻页
            /**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                this.query.pageIndex = e;
                this.pageIndexEvent.emit(this.query);
            };
        //点击排序
        //点击排序
        /**
         * @param {?} sort
         * @return {?}
         */
        VXFormPrivateTable.prototype.tableSort =
            //点击排序
            /**
             * @param {?} sort
             * @return {?}
             */
            function (sort) {
                this.query.sortName = sort.key;
                this.query.sortValue = sort.value;
                this.orderChangeEvent.emit(this.query);
            };
        //单击选中
        //单击选中
        /**
         * @param {?} event
         * @return {?}
         */
        VXFormPrivateTable.prototype.itemSelectChange =
            //单击选中
            /**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                this.listDataSelectedList.shift();
                this.listDataSelectedList.push({
                    "id": event.id,
                    "name": event.name
                });
                this.checkChangeEvent.emit(this.listDataSelectedList);
            };
        //保存选中
        //保存选中
        /**
         * @return {?}
         */
        VXFormPrivateTable.prototype.saveSelected =
            //保存选中
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                Object.keys(this.listDataCheckedId).forEach(( /**
                 * @param {?} id
                 * @return {?}
                 */function (id) {
                    /** @type {?} */
                    var value = _this.listDataCheckedId[id];
                    if (value) {
                        if (!_this.listDataSelectedList.some(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return item.id == id; }))) {
                            _this.listData.forEach(( /**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} object
                             * @return {?}
                             */function (item, index, object) {
                                if (item.id == id) {
                                    _this.listDataSelectedList.push({
                                        id: item.id,
                                        name: item.name
                                    });
                                }
                            }));
                        }
                    }
                    else {
                        _this.listDataSelectedList.forEach(( /**
                         * @param {?} item
                         * @param {?} index
                         * @param {?} object
                         * @return {?}
                         */function (item, index, object) {
                            if (item.id == id) {
                                object.splice(index, 1);
                            }
                        }));
                    }
                }));
                this.checkChangeEvent.emit(this.listDataSelectedList);
            };
        /**
         * @return {?}
         */
        VXFormPrivateTable.prototype.selectAllClear = /**
         * @return {?}
         */
            function () {
                this.isAllChecked = false;
                this.isIndeterminate = false;
                this.listDataCheckedId = {};
                this.listDataSelectedList = [];
            };
        /**
         * @param {?} id
         * @return {?}
         */
        VXFormPrivateTable.prototype.selectClearById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.listDataCheckedId[id] = false;
                this.setCheckStatus();
            };
        VXFormPrivateTable.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-private-table",
                        template: "<div class=\"vx-form-table\">\r\n    <div class=\"vx-form-table-header\">\r\n        <div class=\"header-button\">\r\n            <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                <input type=\"text\" nz-input placeholder=\"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\" maxlength=\"50\" [(ngModel)]=\"query.keyWord\" />\r\n            </nz-input-group>\r\n            <ng-template #suffixIconButton>\r\n                <button nz-button nzType=\"primary\" nzSearch (click)=\"queryChange()\"><i nz-icon nzType=\"search\"></i></button>\r\n            </ng-template>\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"header-pagination\">\r\n            <nz-pagination [nzTotal]=\"query.total\" [nzPageIndex]=\"query.pageIndex\" [nzPageSize]=\"query.pageSize\" [nzSize]=\"'small'\" (nzPageIndexChange)=\"pageIndexChange($event)\"></nz-pagination>\r\n        </div>\r\n    </div>\r\n    <div class=\"vx-form-table-content\">\r\n        <nz-table [nzFrontPagination]=\"false\" nzShowPagination nzShowSizeChanger #rowSelectionTable [nzData]=\"listData\" [nzScroll]=\"tableScroll\">\r\n            <thead>\r\n                <tr>\r\n                    <ng-container *ngIf=\"check\">\r\n                        <th nzWidth=\"50px\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"isAllChecked\" [nzIndeterminate]=\"isIndeterminate\" (nzCheckedChange)=\"setCheckAll($event)\"></th>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <th [nzWidth]=\"item.width+'px'\">{{item.name}}</th>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action!=0\">\r\n                        <th nzRight=\"0px\" [nzWidth]=\"'100px'\">\u64CD\u4F5C</th>\r\n                    </ng-container>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n                    <ng-container *ngIf=\"check\">\r\n                        <td nzShowCheckbox [(nzChecked)]=\"listDataCheckedId[data.id]\" (nzCheckedChange)=\"setCheckStatus()\"></td>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <td>{{data[item.key]}}</td>\r\n                        </ng-container> \r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action==2\">\r\n                        <td><span class=\"itemSelect\" (click)=\"itemSelectChange(data)\">\u9009\u62E9</span></td>\r\n                    </ng-container>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n    <div class=\"vx-form-table-footer\">\r\n        <div class=\"tag-header\">\r\n            <label>\u5DF2\u9009<span>{{listDataSelectedList.length}}</span></label>\r\n            <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n        </div>\r\n        <div class=\"tag-content vxform-scrollbar \"> \r\n            <ng-container *ngFor=\"let item of listDataSelectedList\">\r\n                <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.id)\">{{item.name}}</nz-tag>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>",
                        styles: [":host ::ng-deep{width:100%}:host ::ng-deep .vx-form-table{background:#fff;display:flex;flex:1;flex-direction:column}:host ::ng-deep .vx-form-table-header{display:flex;flex-direction:row;padding:10px}:host ::ng-deep .vx-form-table-header .header-button{flex:1}:host ::ng-deep .vx-form-table-header .header-button nz-input-group{width:260px;margin-right:10px}:host ::ng-deep .vx-form-table-header .header-button .ant-input{font-size:12px}:host ::ng-deep .vx-form-table-header .hader-pagination{width:300px}:host ::ng-deep .vx-form-table-content{display:flex;flex-direction:row;flex:1;padding:0 10px}:host ::ng-deep .vx-form-table-content nz-table{flex:1}:host ::ng-deep .vx-form-table-content .ant-table{font-size:12px}:host ::ng-deep .vx-form-table-content .ant-table .ant-table-placeholder{border-bottom:0}:host ::ng-deep .vx-form-table-content .ant-table .ant-empty-normal{margin:115px 0}:host ::ng-deep .vx-form-table-content .ant-table-body{height:332px}:host ::ng-deep .vx-form-table-content .itemSelect{cursor:pointer}:host ::ng-deep .vx-form-table-footer{height:78px;margin:0 10px;padding:10px;background-color:#f6f7fb;display:flex;flex-direction:row}:host ::ng-deep .vx-form-table-footer .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .vx-form-table-footer .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(1){display:inline-block;width:100%}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(2){display:inline-block;width:100%;font-weight:400;color:#6375da;cursor:pointer;margin-top:5px}:host ::ng-deep .vx-form-table-footer .tag-content{flex:1}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag i{color:#6375da;font-weight:700}:host ::ng-deep .vx-form-table .ant-table-wrapper{border:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th{padding:6px 10px;background-color:#fff;border-right:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th:nth-last-child(1){border-right:0!important}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background:#fff}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr td{border:0;padding:6px 10px}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr:nth-child(odd){background-color:#f6f8fd}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:transparent!important;overflow-y:overlay!important}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#999;border-radius:6px;outline:#333 solid 1px}:host ::ng-deep .vx-form-table .ant-table-header{background:#fff;margin-bottom:0!important;overflow:hidden!important}:host ::ng-deep .vx-form-table .table-action{background:red;padding:3px 8px;border-radius:12px;color:#fff;font-size:12px;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        VXFormPrivateTable.ctorParameters = function () { return []; };
        VXFormPrivateTable.propDecorators = {
            tableIndex: [{ type: i0.Input }],
            tableSize: [{ type: i0.Input }],
            tableTotal: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            check: [{ type: i0.Input }],
            action: [{ type: i0.Input }],
            header: [{ type: i0.Input }],
            body: [{ type: i0.Input }],
            buttonlist: [{ type: i0.Input }],
            checkid: [{ type: i0.Input }],
            checkChangeEvent: [{ type: i0.Output }],
            pageIndexEvent: [{ type: i0.Output }],
            orderChangeEvent: [{ type: i0.Output }],
            filterChangeEvent: [{ type: i0.Output }],
            buttonAction: [{ type: i0.Output }]
        };
        return VXFormPrivateTable;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReplaceLinePipe = /** @class */ (function () {
        function ReplaceLinePipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ReplaceLinePipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value.replace(/\n/g, "<br/>");
            };
        ReplaceLinePipe.decorators = [
            { type: i0.Pipe, args: [{ name: "replaceLine" },] }
        ];
        /** @nocollapse */
        ReplaceLinePipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return ReplaceLinePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var icons$1 = [
        icons.MenuFoldOutline,
        icons.MenuUnfoldOutline,
        icons.FormOutline,
        icons.DashboardOutline,
        icons.MinusSquareFill,
        icons.MinusSquareOutline,
        icons.MinusSquareTwoTone,
        icons.MinusOutline,
        icons.InboxOutline
    ];
    common.registerLocaleData(zh);
    //私有的
    /** @type {?} */
    var entryComponent = [
        VXFormDesignField,
        VXFormDesignFieldLabel,
        VXFormDesignTable,
        VXFormDesignTables,
        VXFormDrawerComponent,
        VXFormPrivateTree,
        VXFormPrivateTable,
        VXFormTree,
        VXFormEmployee,
        VXFormEmployee,
        VXFormOrg,
        VXFormPostion,
        VXFormArea
    ];
    //公开的
    /** @type {?} */
    var publicComponent = [
        VXFormDesignDetail,
    ];
    var ɵ0 = ngZorroAntd.zh_CN, ɵ1 = icons$1;
    var VXFormAntModule = /** @class */ (function () {
        function VXFormAntModule() {
        }
        VXFormAntModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            FIELD_TYPE_COMPONENTS,
                            entryComponent,
                            publicComponent,
                            ReplaceLinePipe
                        ],
                        imports: [
                            http.HttpModule,
                            i1.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            dragDrop.DragDropModule,
                            overlay.OverlayModule,
                            ngZorroAntd.NgZorroAntdModule,
                            core$1.VXFormModule.forChild(BOOTSTRAP_VXFORM_CONFIG),
                            core$1.VXFormModule.forRoot(validationConfig)
                        ],
                        entryComponents: [entryComponent],
                        exports: [core.TranslateModule, publicComponent],
                        providers: [
                            { provide: ngZorroAntd.NZ_I18N, useValue: ɵ0 },
                            { provide: ngZorroAntd.NZ_ICONS, useValue: ɵ1 },
                            _HttpClient,
                            VXFormAntService,
                            VXDialogService,
                            VXToFormFieldService,
                            VXDesginToFormService
                        ]
                    },] }
        ];
        return VXFormAntModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VXFormAntModule = VXFormAntModule;
    exports.VXFormFieldText = VXFormFieldText;
    exports.VXFormFieldTextI18n = VXFormFieldTextI18n;
    exports.VXFormFieldTextArea = VXFormFieldTextArea;
    exports.VXFormFieldNumber = VXFormFieldNumber;
    exports.VXFormFieldPassWord = VXFormFieldPassWord;
    exports.VXFormFieldRadio = VXFormFieldRadio;
    exports.VXFormFieldRadioGroup = VXFormFieldRadioGroup;
    exports.VXFormFieldCheckbox = VXFormFieldCheckbox;
    exports.VXFormFieldCheckboxGroup = VXFormFieldCheckboxGroup;
    exports.VXFormFieldSelect = VXFormFieldSelect;
    exports.VXFormFieldDateTime = VXFormFieldDateTime;
    exports.VXFormFieldImage = VXFormFieldImage;
    exports.VXFormFieldUpload = VXFormFieldUpload;
    exports.VXFormFieldLookUp = VXFormFieldLookUp;
    exports.VXFormFieldHTML = VXFormFieldHTML;
    exports.VXFormFieldLine = VXFormFieldLine;
    exports.VXFormWrapperFormField = VXFormWrapperFormField;
    exports.ɵd = BOOTSTRAP_VXFORM_CONFIG;
    exports.ɵc = FIELD_TYPE_COMPONENTS;
    exports.ɵt = VXFormArea;
    exports.ɵq = VXFormEmployee;
    exports.ɵr = VXFormOrg;
    exports.ɵs = VXFormPostion;
    exports.ɵo = VXFormPrivateTable;
    exports.ɵn = VXFormPrivateTree;
    exports.ɵp = VXFormTree;
    exports.ɵu = VXFormDesignDetail;
    exports.ɵm = VXFormDrawerComponent;
    exports.ɵh = VXFormDesignFieldLabel;
    exports.ɵg = VXFormDesignField;
    exports.ɵi = VXFormDesignTable;
    exports.ɵl = VXFormDesignTables;
    exports.ɵk = _HttpClient;
    exports.ɵj = DataService;
    exports.ɵb = VXDialogService;
    exports.ɵe = VXFormFieldGroup;
    exports.ɵf = VXFormFieldRepeat;
    exports.ɵv = VXAntCommonService;
    exports.ɵw = VXToFormFieldService;
    exports.ɵz = ReplaceLinePipe;
    exports.ɵa = VXFormAntService;
    exports.ɵy = VXDesginToFormService;
    exports.ɵx = VXTransferService;
    exports.ɵba = getFieldPro;
    exports.ɵbf = maxValidationMessage;
    exports.ɵbd = maxlengthValidationMessage;
    exports.ɵbe = minValidationMessage;
    exports.ɵbc = minlengthValidationMessage;
    exports.ɵbb = requiredValidationMessage;
    exports.ɵbg = validationConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=vx-form-ant.umd.js.map