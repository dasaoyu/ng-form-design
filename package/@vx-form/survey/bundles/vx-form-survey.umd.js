(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/http'), require('@ngx-translate/core'), require('@angular/cdk/overlay'), require('ng-zorro-antd'), require('@ant-design/icons-angular/icons'), require('@angular/common/locales/zh'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/message'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@vx-form/core'), require('lodash'), require('@angular/cdk/drag-drop'), require('@angular/forms'), require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@vx-form/survey', ['exports', '@angular/common', '@angular/http', '@ngx-translate/core', '@angular/cdk/overlay', 'ng-zorro-antd', '@ant-design/icons-angular/icons', '@angular/common/locales/zh', 'ng-zorro-antd/modal', 'ng-zorro-antd/message', '@angular/common/http', 'rxjs', 'rxjs/operators', '@vx-form/core', 'lodash', '@angular/cdk/drag-drop', '@angular/forms', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['vx-form'] = global['vx-form'] || {}, global['vx-form'].survey = {}),global.ng.common,global.ng.http,global.core,global.ng.cdk.overlay,global.ngZorroAntd,global.icons,global.ng.common.locales.zh,global.i1,global.message,global.ng.common.http,global.rxjs,global.rxjs.operators,global.core$1,global._,global.ng.cdk['drag-drop'],global.ng.forms,global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,common,http,core,overlay,ngZorroAntd,icons,zh,i1,message,i1$1,rxjs,operators,core$1,_,dragDrop,forms,i0,platformBrowser) { 'use strict';

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
            this.questionEvent = new i0.EventEmitter();
            this.optionEvent = new i0.EventEmitter();
            this.dragDropEvent = new i0.EventEmitter();
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
        /**
         * @param {?} sign
         * @param {?} field
         * @return {?}
         */
        VXFormAntService.prototype.questionOperational = /**
         * @param {?} sign
         * @param {?} field
         * @return {?}
         */
            function (sign, field) {
                this.questionEvent.emit({
                    sign: sign,
                    field: field
                });
            };
        /**
         * @param {?} sign
         * @param {?} option
         * @param {?} field
         * @return {?}
         */
        VXFormAntService.prototype.optionOperational = /**
         * @param {?} sign
         * @param {?} option
         * @param {?} field
         * @return {?}
         */
            function (sign, option, field) {
                this.optionEvent.emit({
                    sign: sign,
                    option: option,
                    field: field
                });
            };
        /**
         * @param {?} previousData
         * @param {?} previousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        VXFormAntService.prototype.dragDropOperational = /**
         * @param {?} previousData
         * @param {?} previousIndex
         * @param {?} currentIndex
         * @return {?}
         */
            function (previousData, previousIndex, currentIndex) {
                this.dragDropEvent.emit({
                    previousData: previousData,
                    previousIndex: previousIndex,
                    currentIndex: currentIndex
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
    var VXSurveyRadioGroup = /** @class */ (function (_super) {
        __extends(VXSurveyRadioGroup, _super);
        function VXSurveyRadioGroup(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.dropOption = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
            };
        //设置逻辑
        //设置逻辑
        /**
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.logicQuestion =
            //设置逻辑
            /**
             * @return {?}
             */
            function () {
                this.service.questionOperational("logic", this.field);
            };
        //拷贝题目
        //拷贝题目
        /**
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.copyQuestion =
            //拷贝题目
            /**
             * @return {?}
             */
            function () {
                this.service.questionOperational("copy", this.field);
            };
        //删除题目
        //删除题目
        /**
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.delQuestion =
            //删除题目
            /**
             * @return {?}
             */
            function () {
                this.service.questionOperational("delete", this.field);
            };
        //点击题目
        //点击题目
        /**
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.activeQuestion =
            //点击题目
            /**
             * @return {?}
             */
            function () {
                if (!this.active) {
                    this.service.questionOperational("active", this.field);
                }
            };
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyRadioGroup.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyRadioGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-radiogroup",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n        \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      \n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyRadioGroup.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyRadioGroup;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyDragDrop = /** @class */ (function (_super) {
        __extends(VXSurveyDragDrop, _super);
        function VXSurveyDragDrop(dyService) {
            var _this = _super.call(this) || this;
            _this.service = dyService;
            return _this;
        }
        Object.defineProperty(VXSurveyDragDrop.prototype, "insertQuestionIndex", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var result = -1;
                if (this.to.index) {
                    result = this.to.index;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        VXSurveyDragDrop.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.previousContainer === event.container) {
                    dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
                }
                else {
                    this.service.dragDropOperational(event.previousContainer.data, event.previousIndex, event.currentIndex);
                }
            };
        /**
         * @param {?} sign
         * @return {?}
         */
        VXSurveyDragDrop.prototype.fieldOperational = /**
         * @param {?} sign
         * @return {?}
         */
            function (sign) {
                this.service.fieldOperational(sign, this.field);
            };
        //设置逻辑
        //设置逻辑
        /**
         * @param {?} field
         * @return {?}
         */
        VXSurveyDragDrop.prototype.logicQuestion =
            //设置逻辑
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this.service.questionOperational("logic", field);
            };
        //拷贝题目
        //拷贝题目
        /**
         * @param {?} field
         * @return {?}
         */
        VXSurveyDragDrop.prototype.copyQuestion =
            //拷贝题目
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this.service.questionOperational("copy", field);
            };
        //删除题目
        //删除题目
        /**
         * @param {?} field
         * @return {?}
         */
        VXSurveyDragDrop.prototype.delQuestion =
            //删除题目
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                this.service.questionOperational("delete", field);
            };
        //点击题目
        //点击题目
        /**
         * @param {?} field
         * @return {?}
         */
        VXSurveyDragDrop.prototype.activeQuestion =
            //点击题目
            /**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (!this.field.active) {
                    this.service.questionOperational("active", field);
                }
            };
        VXSurveyDragDrop.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-drag-drop",
                        template: "\n  <div class=\"formly-drag-drop\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList [cdkDropListData]=\"field.fieldGroup\">\n  <div class=\"formly-drag-drop\">\n    <ng-container *ngFor=\"let field of field.fieldGroup;let index=index;\" > \n      <div  (click)=\"activeQuestion(field)\" *ngIf=\"field.active==true\" class=\"formly-drag-drop_wrap active\"> \n        <div class=\"field-operate\" >  \n          <span (click)=\"logicQuestion(field)\" nzTooltipTitle=\"\u903B\u8F91\u8BBE\u7F6E\" nzTooltipPlacement=\"top\" nz-tooltip>\u8BBE\u7F6E</span>\n          <span (click)=\"copyQuestion(field)\" nzTooltipTitle=\"\u590D\u5236\u9898\u76EE\" nzTooltipPlacement=\"top\" nz-tooltip>\u590D\u5236</span>\n          <span (click)=\"delQuestion(field)\"  nzTooltipTitle=\"\u5220\u9664\u9898\u76EE\" nzTooltipPlacement=\"top\" nz-tooltip>\u5220\u9664</span>\n        </div>\n        <div class=\"field-content\">\n        <vxform-field [field]=\"field\" [rownumber]=\"index+1\"></vxform-field>\n        </div>\n      </div>\n      \n      <div  (click)=\"activeQuestion(field)\" *ngIf=\"field.active!=true \" class=\"formly-drag-drop_wrap\" cdkDrag> \n         \n        <div class=\"field-content\">\n        <vxform-field [field]=\"field\" [rownumber]=\"index+1\"></vxform-field>\n        </div>\n      </div>\n    </ng-container> \n  </div>\n  \n  <ng-container *ngIf=\"field.fieldGroup==null || field.fieldGroup.length==0\" >\n  <div class=\"formly_empty\">\n    <div class=\"formly-drag-drop\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList [cdkDropListData]=\"field.fieldGroup\">\n      \u8BF7\u628A\u9898\u578B\u62D6\u5165\u6B64\u533A\u57DF\n    </div>\n  </div>\n</ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyDragDrop.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyDragDrop;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyRadio = /** @class */ (function (_super) {
        __extends(VXSurveyRadio, _super);
        function VXSurveyRadio(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyRadio.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyRadio.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyRadio.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXSurveyRadio.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.previousContainer === event.container) {
                    dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
                }
            };
        VXSurveyRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-radio",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList  [cdkDropListData]=\"to.options\">\n          <div class=\"option_wrap basic_radio\" *ngFor=\"let item of to.options\" cdkDrag>\n            <div class=\"option\">\n              <label nz-radio nzDisabled=\"true\"></label> \n              <inline-editor  [(ngModel)]=\"item.label\" [active]=\"active\"></inline-editor>  \n            </div>\n            <div class=\"operate\"  (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n              <i class=\"icon-KT-Close\"></i>\n            </div>\n          </div>\n        </div>  \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n          <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n        </div> \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-radio-group\n        [nzName]=\"'radiogroup-' + guid\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n      >\n        <ng-container *ngFor=\"let item of to.options\">\n          <label nz-radio [nzValue]=\"item.value\">{{ item.label }}</label>\n        </ng-container>\n      </nz-radio-group>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyRadio.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyRadio;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyCheckBox = /** @class */ (function (_super) {
        __extends(VXSurveyCheckBox, _super);
        function VXSurveyCheckBox(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyCheckBox.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyCheckBox.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyCheckBox.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        /**
         * @param {?} values
         * @return {?}
         */
        VXSurveyCheckBox.prototype.onChange = /**
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
        VXSurveyCheckBox.prototype.getCheckStatus = /**
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
        VXSurveyCheckBox.prototype.getControlChecked = /**
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
        /**
         * @param {?} event
         * @return {?}
         */
        VXSurveyCheckBox.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.previousContainer === event.container) {
                    dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
                }
            };
        VXSurveyCheckBox.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-checkbox",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\"> \n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList  [cdkDropListData]=\"to.options\">\n        <div class=\"option_wrap basic_checkbox\" *ngFor=\"let item of to.options\" cdkDrag>\n          <div class=\"option\">\n            <label nz-checkbox nzDisabled=\"true\"></label> \n            <inline-editor [(ngModel)]=\"item.label\" [active]=\"active\"></inline-editor>  \n          </div>\n          <div class=\"operate\" (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n            <i class=\"icon-KT-Close\"></i>\n          </div>  \n        </div>\n      </div> \n      <div class=\"question-wrap_operate\">\n        <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n        <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n      </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-checkbox-wrapper\n        style=\"width: 100%;\"\n        (nzOnChange)=\"onChange($event)\"\n        [class.is-invalid]=\"showError\"\n      >\n        <ng-container *ngFor=\"let option of to.options; let i = index\">\n          <label\n            nz-checkbox\n            [nzValue]=\"option.value\"\n            [ngModel]=\"getControlChecked(formControl.value, option)\"\n            [vxFormAttributes]=\"field\"\n            >{{ option.label }}</label>\n        </ng-container>\n      </nz-checkbox-wrapper> \n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyCheckBox.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyCheckBox;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyDropdown = /** @class */ (function (_super) {
        __extends(VXSurveyDropdown, _super);
        function VXSurveyDropdown(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyDropdown.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyDropdown.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyDropdown.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXSurveyDropdown.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.previousContainer === event.container) {
                    dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
                }
            };
        VXSurveyDropdown.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-dropdown",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList  [cdkDropListData]=\"to.options\">\n        <div class=\"option_wrap basic_dropdown\" *ngFor=\"let item of to.options\" cdkDrag>\n          <div class=\"option\">\n          <span class=\"handle\"></span>\n            <inline-editor [(ngModel)]=\"item.label\"></inline-editor>  \n          </div>\n          <div class=\"operate\"  (click)=\"deleteOption(item)\">\n            <i class=\"icon-KT-Close\"></i>\n          </div>\n        </div>\n      </div> \n      <div class=\"question-wrap_operate\">\n        <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n        <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n      </div> \n    </ng-container> \n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-select \n        nzAllowClear \n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n        nzPlaceHolder=\"\u8BF7\u9009\u62E9\" \n      >\n        <ng-container *ngFor=\"let item of to.options\">\n          <nz-option\n            [nzLabel]=\"item.label\"\n            [nzValue]=\"item.value\"\n          ></nz-option>\n        </ng-container>\n      </nz-select>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyDropdown.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyDropdown;
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
        /** @nocollapse */ VXDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXDialogService_Factory() { return new VXDialogService(i0.ɵɵinject(i1.NzModalService)); }, token: VXDialogService, providedIn: "root" });
        return VXDialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyEditCascader = /** @class */ (function () {
        function VXSurveyEditCascader() {
            this.cascaderData = [];
            this.row1 = {
                cascader: 1,
                current: "",
                showadd: true,
                data: []
            };
            this.row2 = {
                cascader: 2,
                current: "",
                showadd: false,
                data: []
            };
            this.row3 = {
                cascader: 3,
                current: "",
                showadd: false,
                data: []
            };
            this.row4 = {
                cascader: 4,
                current: "",
                showadd: false,
                data: []
            };
        }
        Object.defineProperty(VXSurveyEditCascader.prototype, "fieldConfig", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != undefined && value != null && value.templateOptions != undefined && value.templateOptions != null && value.templateOptions.options != undefined && value.templateOptions.options != null) {
                    if (Array.isArray(value.templateOptions.options)) {
                        this.cascaderData = _.cloneDeep(value.templateOptions.options);
                    }
                    else {
                        this.cascaderData = [];
                    }
                }
                this.row1.data = this.cascaderData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXSurveyEditCascader.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this.cascaderData;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveyEditCascader.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveyEditCascader.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @param {?} item
         * @param {?} type
         * @return {?}
         */
        VXSurveyEditCascader.prototype.cascaderItem = /**
         * @param {?} item
         * @param {?} type
         * @return {?}
         */
            function (item, type) {
                /** @type {?} */
                var showadd = true;
                switch (type) {
                    case 1:
                        this.row1.current = item.value;
                        this.row2.cascader = 2;
                        this.row2.showadd = showadd;
                        this.row2.data = item.children ? item.children : [];
                        this.row3.current = "";
                        this.row3.showadd = false;
                        this.row3.data = [];
                        this.row4.current = "";
                        this.row4.showadd = false;
                        this.row4.data = [];
                        break;
                    case 2:
                        this.row2.current = item.value;
                        this.row3.cascader = 3;
                        this.row3.showadd = showadd;
                        this.row3.data = item.children ? item.children : [];
                        this.row4.current = "";
                        this.row4.showadd = false;
                        this.row4.data = [];
                        break;
                    case 3:
                        this.row3.current = item.value;
                        this.row4.cascader = 4;
                        this.row4.showadd = showadd;
                        this.row4.data = item.children ? item.children : [];
                        break;
                    case 4:
                        this.row4.current = item.value;
                        break;
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        VXSurveyEditCascader.prototype.addOption = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
            };
        /**
         * @param {?} e
         * @param {?} type
         * @return {?}
         */
        VXSurveyEditCascader.prototype.delOption = /**
         * @param {?} e
         * @param {?} type
         * @return {?}
         */
            function (e, type) {
                if (e) {
                    switch (type) {
                        case 1:
                            this.row1.data.forEach(( /**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} obj
                             * @return {?}
                             */function (item, index, obj) {
                                if (e.value == item.value) {
                                    obj.splice(index, 1);
                                }
                            }));
                            this.row2 = [];
                            this.row3 = [];
                            this.row4 = [];
                            break;
                        case 2:
                            this.row2.data.forEach(( /**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} obj
                             * @return {?}
                             */function (item, index, obj) {
                                if (e.value == item.value) {
                                    obj.splice(index, 1);
                                }
                            }));
                            this.row3 = [];
                            this.row4 = [];
                            break;
                        case 3:
                            this.row3.data.forEach(( /**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} obj
                             * @return {?}
                             */function (item, index, obj) {
                                if (e.value == item.value) {
                                    obj.splice(index, 1);
                                }
                            }));
                            this.row4 = [];
                            break;
                        case 4:
                            this.row4.data.forEach(( /**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} obj
                             * @return {?}
                             */function (item, index, obj) {
                                if (e.value == item.value) {
                                    obj.splice(index, 1);
                                }
                            }));
                            break;
                    }
                }
            };
        VXSurveyEditCascader.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-editcascader",
                        template: "<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E00\u7EA7\u9009\u9879\" [(row)]=\"row1\" (itemEvent)=\"cascaderItem($event,1)\" (addOptionEvent)=\"addOption(1)\" (delOptionEvent)=\"delOption($event,1)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E8C\u7EA7\u9009\u9879\" [(row)]=\"row2\" (itemEvent)=\"cascaderItem($event,2)\" (addOptionEvent)=\"addOption(2)\" (delOptionEvent)=\"delOption($event,2)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E09\u7EA7\u9009\u9879\" [(row)]=\"row3\" (itemEvent)=\"cascaderItem($event,3)\" (addOptionEvent)=\"addOption(3)\" (delOptionEvent)=\"delOption($event,3)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u56DB\u7EA7\u9009\u9879\" [(row)]=\"row4\" (itemEvent)=\"cascaderItem($event,4)\" (addOptionEvent)=\"addOption(4)\" (delOptionEvent)=\"delOption($event,4)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>",
                        styles: [":host ::ng-deep{width:100%;height:100%;display:flex;background-color:#fff;padding:20px 0 0 10px}:host ::ng-deep .cascader_col{flex:1;padding:0 0 0 20px;border-right:1px solid #dde5ed}:host ::ng-deep .cascader_col:nth-last-child(1){flex:1;border-right:0}:host ::ng-deep vxsurvey-editcascader-item .wrap_active{border-color:#2672ff;background:#e7efff;box-shadow:0 2px 4px 0 rgba(38,114,255,.2)}:host ::ng-deep vxsurvey-editcascader-item .wrap_active .cascader_col_wrap_delete{display:block}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_title{padding:0 0 12px;font-size:14px;line-height:1;color:#707070;text-align:left}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_item{padding:0 20px 0 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap{display:flex;border:1px solid #dde5ed;position:relative;margin:0 0 10px;cursor:pointer;padding:0 0 0 10px}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_order{float:left;height:34px;line-height:34px;font-size:12px;color:#aaa;text-align:center}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_input{flex:1;float:left;padding:5px;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_input input{border:0;height:24px;line-height:24px;width:100%;font-size:12px;color:#aaa;outline:0;border:none;background:0 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_limit{float:left;top:0;right:0;height:34px;padding:0 6px 0 0;line-height:34px;font-size:12px;color:#2672ff;text-align:left}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete{position:absolute;right:-5px;top:-10px;display:none}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete span{background:red;border-radius:50%;display:inline-block;height:14px;width:14px;cursor:pointer}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete span i{color:#fff;font-size:2px;height:2px;width:6px;position:absolute;margin:3px 2px 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_add{font-size:12px;cursor:pointer}:host ::ng-deep .vxsurvey-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}"]
                    }] }
        ];
        /** @nocollapse */
        VXSurveyEditCascader.ctorParameters = function () { return []; };
        VXSurveyEditCascader.propDecorators = {
            fieldConfig: [{ type: i0.Input }],
            data: [{ type: i0.Input }]
        };
        return VXSurveyEditCascader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyCascader = /** @class */ (function (_super) {
        __extends(VXSurveyCascader, _super);
        function VXSurveyCascader(dyService, modal, vxDialogService) {
            var _this = _super.call(this) || this;
            _this.modal = modal;
            _this.vxDialogService = vxDialogService;
            _this.guid = core$1.Guid.create()["value"];
            _this.values = null;
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyCascader.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var para = {
                    fieldConfig: this.field
                };
                this.vxDialogService.CreateModelDialog({
                    nzTitle: "选项编辑",
                    size: "large",
                    nzContent: VXSurveyEditCascader
                }, para, ( /**
                 * @param {?} instance
                 * @param {?} modal
                 * @return {?}
                 */function (instance, modal) {
                    /** @type {?} */
                    var optionlist = instance.cascaderData;
                    _this.to.options = optionlist;
                    modal.destroy();
                }));
            };
        VXSurveyCascader.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-cascader",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>   \n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap select_cascader\">\n            <nz-cascader [nzOptions]=\"to.options\" [nzShowSearch]=\"true\" [nzDisabled]=\"true\">\n            </nz-cascader>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u7F16\u8F91\u9009\u9879</span>  \n        </div> \n    </ng-container>\n\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-cascader nzChangeOnSelect [nzOptions]=\"to.options\" nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-cascader>\n       \n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyCascader.ctorParameters = function () {
            return [
                { type: VXFormAntService },
                { type: i1.NzModalService },
                { type: VXDialogService }
            ];
        };
        return VXSurveyCascader;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyScaler = /** @class */ (function (_super) {
        __extends(VXSurveyScaler, _super);
        function VXSurveyScaler(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        Object.defineProperty(VXSurveyScaler.prototype, "scalerData", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var result = [];
                if (this.to != undefined && this.to != null && this.to.beginNumber != undefined && this.to.beginNumber != null && this.to.max != undefined && this.to.max != null) {
                    /** @type {?} */
                    var begin = this.to.beginNumber;
                    for (var i = 0; i < this.to.max; i++) {
                        result.push({
                            value: begin,
                            label: begin
                        });
                        begin = begin + 1;
                    }
                }
                console.log(result);
                return result;
            },
            enumerable: true,
            configurable: true
        });
        VXSurveyScaler.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-scaler",
                        template: "\n    \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyScaler.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyScaler;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyScore = /** @class */ (function (_super) {
        __extends(VXSurveyScore, _super);
        function VXSurveyScore(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyScore.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyScore.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        VXSurveyScore.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-score",
                        template: "\n    \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>  \n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_score\">\n            \n            <nz-rate *ngIf=\"to.type=='start'\" nzAllowHalf [nzCount]=\"to.setting.max\"></nz-rate>\n            <nz-rate *ngIf=\"to.type=='heart'\" nzAllowHalf [nzCharacter]=\"characterIconHeart\" [nzCount]=\"to.setting.max\"></nz-rate>\n            <nz-rate *ngIf=\"to.type=='good'\" nzAllowHalf [nzCharacter]=\"characterIconGood\" [nzCount]=\"to.setting.max\"></nz-rate>\n            <nz-rate *ngIf=\"to.type=='other'\" nzAllowHalf [nzCharacter]=\"characterIconOther\" [nzCount]=\"to.setting.max\"></nz-rate> \n            <ng-template #characterIconHeart> \n              \u5FC3 \n            </ng-template>\n            <ng-template #characterIconGood>\n              \u8D5E  \n            </ng-template>\n            <ng-template #characterIconOther>\n              {{to.setting.label}}  \n            </ng-template>  \n          </div>\n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-rate *ngIf=\"to.type=='start'\" nzAllowHalf [nzCount]=\"to.setting.max\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-rate>\n      <nz-rate *ngIf=\"to.type=='heart'\" nzAllowHalf [nzCharacter]=\"characterIconHeart\" [nzCount]=\"to.setting.max\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-rate>\n      <nz-rate *ngIf=\"to.type=='good'\" nzAllowHalf [nzCharacter]=\"characterIconGood\" [nzCount]=\"to.setting.max\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-rate>\n      <nz-rate *ngIf=\"to.type=='other'\" nzAllowHalf [nzCharacter]=\"characterIconOther\" [nzCount]=\"to.setting.max\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-rate> \n      <ng-template #characterIconHeart> \n        \u5FC3 \n      </ng-template>\n      <ng-template #characterIconGood>\n        \u8D5E  \n      </ng-template>\n      <ng-template #characterIconOther>\n        {{to.setting.label}}  \n      </ng-template>  \n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyScore.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyScore;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyLine = /** @class */ (function (_super) {
        __extends(VXSurveyLine, _super);
        function VXSurveyLine(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        VXSurveyLine.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-line",
                        template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n    <div class=\"question-wrap_content\">\n      <div class=\"option_wrap basic_line\" >\n        <div class=\"line\"></div>\n      </div>\n    </div>   \n  </ng-container>\n\n  <ng-container *ngIf=\"formStatus === 0\">\n    <div class=\"line\"></div>\n  </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyLine.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyLine;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyRemark = /** @class */ (function (_super) {
        __extends(VXSurveyRemark, _super);
        function VXSurveyRemark(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        VXSurveyRemark.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-remark",
                        template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap basic_remark\" > \n            <inline-editor [(ngModel)]=\"to.label\"  [active]=\"active\"></inline-editor> \n        </div>\n      </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\"> \n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyRemark.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyRemark;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyInput = /** @class */ (function (_super) {
        __extends(VXSurveyInput, _super);
        function VXSurveyInput(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        VXSurveyInput.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-input",
                        template: "  \n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>   \n      </div>\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap basic_input\" >\n          <ng-container *ngIf=\"to.setting.size=='small'\">\n            <input nz-input placeholder=\"\" [disabled]=\"true\" />\n          </ng-container>\n          <ng-container *ngIf=\"to.setting.size=='default'\">\n            <textarea rows=\"2\" nz-input [disabled]=\"true\" ></textarea>\n          </ng-container>\n          <ng-container *ngIf=\"to.setting.size=='large'\">\n            <textarea rows=\"4\" nz-input [disabled]=\"true\" ></textarea>\n          </ng-container>\n        </div>\n      </div>   \n  </ng-container>\n\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"to.setting.size=='small'\">\n        <input nz-input  \n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\" />\n      </ng-container>\n      <ng-container *ngIf=\"to.setting.size=='default'\">\n        <textarea rows=\"2\" nz-input  \n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"  ></textarea>\n      </ng-container>\n      <ng-container *ngIf=\"to.setting.size=='large'\">\n        <textarea rows=\"4\" nz-input  \n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"></textarea>\n      </ng-container>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyInput.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyInput;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyDate = /** @class */ (function (_super) {
        __extends(VXSurveyDate, _super);
        function VXSurveyDate(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        Object.defineProperty(VXSurveyDate.prototype, "format", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var result = "yyyy-MM-dd";
                if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
                    result = this.to["format"];
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        VXSurveyDate.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-date",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap date\" > \n          <nz-date-picker nzDisabled></nz-date-picker>\n        </div>\n      </div>   \n    </ng-container>\n\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-date-picker \n        nzShowTime\n        [nzFormat]=\"format\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n      ></nz-date-picker>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyDate.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyDate;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyTime = /** @class */ (function (_super) {
        __extends(VXSurveyTime, _super);
        function VXSurveyTime(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        VXSurveyTime.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-time",
                        template: "\n    \n    \n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap time\" > \n          <nz-time-picker nzFormat=\"HH:mm\" [nzDisabled]=\"true\"></nz-time-picker>\n        </div>\n      </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\"> \n      <nz-time-picker nzFormat=\"HH:mm\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\">\n      </nz-time-picker> \n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyTime.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyTime;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyNPS = /** @class */ (function (_super) {
        __extends(VXSurveyNPS, _super);
        function VXSurveyNPS(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyNPS.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyNPS.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyNPS.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyNPS.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-nps",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_nps\">\n            <div class=\"option\" *ngFor=\"let item of to.options\"> \n               {{item.label}} \n            </div> \n          </div>\n          \n          <div class=\"option_wrap_text\">\n            <span class=\"fl\">\u4E0D\u53EF\u80FD</span>\n            <span class=\"fr\">\u6781\u6709\u53EF\u80FD</span>\n          </div>\n        </div>  \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div class=\"option_wrap\">\n        <nz-radio-group\n          [nzName]=\"'radiogroup-' + guid\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let item of to.options\"> \n            <label nz-radio-button [nzValue]=\"item.value\">{{ item.label }}</label>\n          </ng-container>\n        </nz-radio-group> \n      </div> \n      <div class=\"option_wrap_text\">\n        <span>\u4E0D\u53EF\u80FD</span>\n        <span>\u6781\u6709\u53EF\u80FD</span>\n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyNPS.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyNPS;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyProportion = /** @class */ (function (_super) {
        __extends(VXSurveyProportion, _super);
        function VXSurveyProportion(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.marks = {
                0: '0',
                20: '20',
                40: '40',
                60: '60',
                80: '80',
                100: '100'
            };
            _this.service = dyService;
            return _this;
        }
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyProportion.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyProportion.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyProportion.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyProportion.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-proportion",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_radio\"  *ngFor=\"let item of to.options\">\n            <div class=\"option\">\n            \n            </div>\n            <div class=\"operate\"  (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n              <i class=\"icon-KT-Close\"></i>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n          <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n        </div> \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-radio-group\n          [nzName]=\"'radiogroup-' + guid\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let item of to.options\">\n            <label nz-radio [nzValue]=\"item.value\">{{ item.label }}</label>\n          </ng-container>\n        </nz-radio-group>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textSingle }}</div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyProportion.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyProportion;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyEditEvaluation = /** @class */ (function () {
        function VXSurveyEditEvaluation() {
            this.start = 1;
            this.optionSelectedIndex = 0;
            this.currentSelected = {};
            this.editevaluationData = [];
        }
        Object.defineProperty(VXSurveyEditEvaluation.prototype, "fieldConfig", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.log(JSON.stringify(value));
                if (value != undefined && value != null && value.templateOptions != undefined && value.templateOptions != null && value.templateOptions.options != undefined && value.templateOptions.options != null) {
                    if (Array.isArray(value.templateOptions.options)) {
                        this.editevaluationData = _.cloneDeep(value.templateOptions.options);
                        this.currentSelected = this.editevaluationData[0];
                    }
                    else {
                        this.editevaluationData = [];
                    }
                }
                else {
                    this.editevaluationData = [];
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveyEditEvaluation.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveyEditEvaluation.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXSurveyEditEvaluation.prototype.optionClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.start = event + 1;
                this.currentSelected = this.editevaluationData[event];
            };
        /**
         * @return {?}
         */
        VXSurveyEditEvaluation.prototype.getOptionTag = /**
         * @return {?}
         */
            function () {
                return this.currentSelected.tag.split(/[\s\n]/);
            };
        VXSurveyEditEvaluation.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-editevaluation",
                        template: "<div class=\"edit_evaluation\">\r\n    <nz-rate [(ngModel)]=\"start\" [nzCount]=\"5\"></nz-rate>\r\n    <div class=\"label\">\"{{currentSelected.label}}\"</div>\r\n    <div class=\"tag\">\r\n        <ng-container *ngFor=\"let item of getOptionTag()\">\r\n            <span *ngIf=\"item!=''\">{{item}}</span>\r\n        </ng-container>\r\n    </div>\r\n    <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"optionSelectedIndex\" (nzSelectedIndexChange)=\"optionClick($event)\">\r\n\r\n        <ng-container *ngFor=\"let option of editevaluationData;let index=index;\">\r\n            <nz-tab [nzTitle]=\"titleTemplate\">\r\n                <ng-template #titleTemplate>\r\n                    <div>\r\n                        {{ option.value }}\u5206\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"option-label\">\r\n                        \u5206\u503C\u8BF4\u660E\uFF08\u6700\u591A\u53EF\u8F93\u516510\u4E2A\u5B57\uFF09\r\n                    </div>\r\n                    <div>\r\n                        <input nz-input [(ngModel)]=\"option.label\" />\r\n                    </div>\r\n                    <div class=\"option-tag\">\r\n                        \u6807\u7B7E\u8BBE\u7F6E\uFF08\u6BCF\u884C\u5BF9\u5E941\u4E2A\u6807\u7B7E\uFF0C\u6700\u591A10\u4E2A\u6807\u7B7E\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u6700\u591A10\u4E2A\u5B57\uFF0C\u53EF\u590D\u5236\u5176\u4ED6\u9009\u9879\u6807\u7B7E\uFF09\r\n                    </div>\r\n                    <div>\r\n                        <textarea rows=\"8\" nz-input [(ngModel)]=\"option.tag\"></textarea>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab>\r\n        </ng-container>\r\n    </nz-tabset>\r\n\r\n</div>",
                        styles: [":host ::ng-deep{width:100%;height:100%;display:flex;background-color:#fff;padding:20px 0 0 10px}:host ::ng-deep .edit_evaluation{text-align:center;padding:0 20px;width:100%}:host ::ng-deep .edit_evaluation .ant-rate-star{font-size:30px}:host ::ng-deep .edit_evaluation .label{margin:20px 0 0;text-align:center;color:#fadb14;font-size:12px}:host ::ng-deep .edit_evaluation .tag{margin:20px 0;text-align:center}:host ::ng-deep .edit_evaluation .tag span{display:inline-block;font-size:12px;color:#aaa;padding:3px 10px;background:#fff;border:1px solid #eaeaea;border-radius:2px;margin-right:5px}:host ::ng-deep .edit_evaluation nz-tabset{text-align:left}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-bar{margin:0}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-top-content{border-left:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #eee;padding:20px;font-size:12px}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-nav-container{height:30px!important}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-tab{height:30px!important;line-height:30px!important;padding:0 20px!important;font-size:13px}:host ::ng-deep .edit_evaluation nz-tabset .ant-input{font-size:12px}:host ::ng-deep .edit_evaluation nz-tabset .option-label{margin:0 0 5px}:host ::ng-deep .edit_evaluation nz-tabset .option-tag{margin:15px 0 5px}"]
                    }] }
        ];
        /** @nocollapse */
        VXSurveyEditEvaluation.ctorParameters = function () { return []; };
        VXSurveyEditEvaluation.propDecorators = {
            fieldConfig: [{ type: i0.Input }]
        };
        return VXSurveyEditEvaluation;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyEvaluation = /** @class */ (function (_super) {
        __extends(VXSurveyEvaluation, _super);
        function VXSurveyEvaluation(dyService, vxDialogService) {
            var _this = _super.call(this) || this;
            _this.vxDialogService = vxDialogService;
            _this.guid = core$1.Guid.create()["value"];
            _this.start = 0;
            _this._startContent = {
                label: "",
                tags: []
            };
            _this.service = dyService;
            _this.start = 1;
            return _this;
        }
        Object.defineProperty(VXSurveyEvaluation.prototype, "startContent", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                if (this._startContent.label == "" && this.to.options != undefined) {
                    this.to.options.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        if (item.value == _this.start) {
                            _this._startContent.label = item.label;
                            _this._startContent.tags = item.tag.split(/[\s\n]/);
                        }
                    }));
                }
                return this._startContent;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveyEvaluation.prototype.numberChange = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.to.options != undefined) {
                    this.to.options.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        if (item.value == _this.start) {
                            _this._startContent.label = item.label;
                            _this._startContent.tags = item.tag.split(/[\s\n]/);
                        }
                    }));
                }
            };
        /**
         * @return {?}
         */
        VXSurveyEvaluation.prototype.editStart = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var para = {
                    fieldConfig: this.field
                };
                this.vxDialogService.CreateModelDialog({
                    nzTitle: "选项编辑",
                    size: "large",
                    nzContent: VXSurveyEditEvaluation
                }, para, ( /**
                 * @param {?} instance
                 * @param {?} modal
                 * @return {?}
                 */function (instance, modal) {
                    _this.to.options = instance.editevaluationData;
                    _this.numberChange();
                    modal.destroy();
                }));
            };
        VXSurveyEvaluation.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-evaluation",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_evaluation\">\n            <nz-rate [(ngModel)]=\"start\" [nzCount]=\"5\"\t(ngModelChange)=\"numberChange()\"></nz-rate>\n            <div class=\"label\">\"{{startContent.label}}\"</div>\n            <div class=\"tag\">\n              <ng-container *ngFor=\"let item of startContent.tags\">\n                <span>{{item}}</span>\n              </ng-container>\n              <label (click)=\"editStart()\">\n                \u7F16\u8F91\n              </label>\n            </div>\n          </div>\n        </div> \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-rate [nzCount]=\"5\" [(ngModel)]=\"start\" \t(ngModelChange)=\"numberChange()\" \n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-rate>\n      <div class=\"label\">\"{{startContent.label}}\"</div>\n      <div class=\"tag\">\n        <ng-container *ngFor=\"let item of startContent.tags\">\n          <span>{{item}}</span>\n        </ng-container> \n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyEvaluation.ctorParameters = function () {
            return [
                { type: VXFormAntService },
                { type: VXDialogService }
            ];
        };
        return VXSurveyEvaluation;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyMatrixRadio = /** @class */ (function (_super) {
        __extends(VXSurveyMatrixRadio, _super);
        function VXSurveyMatrixRadio(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} value
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixRadio.prototype.controlModelChange = /**
         * @param {?} value
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (value, subtitle, option) {
                /** @type {?} */
                var values = this.formControl.value || [];
                if (values != undefined && values != null && values.length > 0) {
                    if (!values.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.groupid == subtitle.value; }))) {
                        values.push({
                            groupid: subtitle.value,
                            options: [{
                                    optionid: option.value,
                                    optionvalue: true
                                }]
                        });
                    }
                    else {
                        values.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.groupid == subtitle.value) {
                                item.options = [{
                                        optionid: option.value,
                                        optionvalue: true
                                    }];
                            }
                        }));
                    }
                }
                else {
                    values.push({
                        groupid: subtitle.value,
                        options: [{
                                optionid: option.value,
                                optionvalue: true
                            }]
                    });
                }
                this.formControl.patchValue(values);
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixRadio.prototype.getControlChecked = /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (subtitle, option) {
                /** @type {?} */
                var result = "";
                /** @type {?} */
                var values = this.formControl.value;
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (value.groupid == subtitle.value) {
                            result = value.options[0].optionid;
                        }
                    }));
                }
                return result;
            };
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyMatrixRadio.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //添加行
        //添加行
        /**
         * @return {?}
         */
        VXSurveyMatrixRadio.prototype.addSubTitle =
            //添加行
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("subtitle", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyMatrixRadio.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixRadio.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyMatrixRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-matrix_radio",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap matrix_radio\">\n            <div class=\"option_table\">\n              <table>\n                <tr>\n                  <td></td>\n                  <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n                </tr>\n                <tr *ngFor=\"let itemTR of to.subtitle\">\n                  <td>{{itemTR.label}}</td>\n                  <td *ngFor=\"let itemTD of to.options\">\n                  <label nz-radio nzDisabled=\"true\"></label> \n                  </td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"option_vertical\">\n              <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addSubTitle()\">\u6DFB\u52A0\u5355\u77E9\u9635\u884C</span>  \n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <table class=\"option_wrap\">\n        <tr>\n          <td></td>\n          <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n        </tr>\n        <tr *ngFor=\"let itemTR of to.subtitle\">\n          <td>{{itemTR.label}}</td>\n          <td *ngFor=\"let itemTD of to.options\"> \n            <input [id]=\"itemTR.value+'-'+itemTD.value\" type=\"radio\" [value]=\"itemTD.value\" [name]=\"itemTR.value\" [ngModel]=\"getControlChecked(itemTR,itemTD)\"  (ngModelChange)=\"controlModelChange($event,itemTR,itemTD)\">\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyMatrixRadio.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyMatrixRadio;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyMatrixCheckBox = /** @class */ (function (_super) {
        __extends(VXSurveyMatrixCheckBox, _super);
        function VXSurveyMatrixCheckBox(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.getMatrixOption = /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (subtitle, option) {
                return {
                    groupid: subtitle.value,
                    optionid: option.value
                };
            };
        /**
         * @param {?} values
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.onChange = /**
         * @param {?} values
         * @return {?}
         */
            function (values) {
                /** @type {?} */
                var res = [];
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (!res.some(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return item.groupid == value.groupid; }))) {
                            res.push({
                                groupid: value.groupid,
                                options: [{
                                        optionid: value.optionid,
                                        optionvalue: true
                                    }]
                            });
                        }
                        else {
                            res.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.groupid == value.groupid) {
                                    item.options.push({
                                        optionid: value.optionid,
                                        optionvalue: true
                                    });
                                }
                            }));
                        }
                    }));
                }
                this.formControl.patchValue(res);
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.getControlChecked = /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (subtitle, option) {
                /** @type {?} */
                var result = false;
                /** @type {?} */
                var values = this.formControl.value;
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (value.groupid == subtitle.value) {
                            value.options.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.optionid == option.value) {
                                    result = item.optionvalue;
                                }
                            }));
                        }
                    }));
                }
                return result;
            };
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //添加行
        //添加行
        /**
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.addSubTitle =
            //添加行
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("subtitle", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixCheckBox.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyMatrixCheckBox.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-matrix_checkbox",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap matrix_checkbox\">\n            <div class=\"option_table\">\n              <table>\n                <tr>\n                  <td></td>\n                  <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n                </tr>\n                <tr *ngFor=\"let itemTR of to.subtitle\">\n                  <td>{{itemTR.label}}</td>\n                  <td *ngFor=\"let itemTD of to.options\">\n                  <label nz-checkbox nzDisabled=\"true\"></label> \n                  </td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"option_vertical\">\n              <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addSubTitle()\">\u6DFB\u52A0\u5355\u77E9\u9635\u884C</span>  \n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n    <nz-checkbox-wrapper\n      style=\"width: 100%;\"\n      (nzOnChange)=\"onChange($event)\"\n      [class.is-invalid]=\"showError\">\n      <table class=\"option_wrap\">\n        <tr>\n          <td></td>\n          <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n        </tr>\n        <tr *ngFor=\"let itemTR of to.subtitle\">\n          <td>{{itemTR.label}}</td>\n          <td *ngFor=\"let itemTD of to.options\">\n          <label nz-checkbox\n            [nzValue]=\"getMatrixOption(itemTR,itemTD)\"\n            [ngModel]=\"getControlChecked(itemTR,itemTD)\">\n          </label> \n          </td>\n        </tr> \n      </table>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyMatrixCheckBox.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyMatrixCheckBox;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyMatrixScore = /** @class */ (function (_super) {
        __extends(VXSurveyMatrixScore, _super);
        function VXSurveyMatrixScore(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} value
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixScore.prototype.controlModelChange = /**
         * @param {?} value
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (value, subtitle, option) {
                /** @type {?} */
                var values = this.formControl.value || [];
                if (values != undefined && values != null && values.length > 0) {
                    if (!values.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.groupid == subtitle.value; }))) {
                        values.push({
                            groupid: subtitle.value,
                            options: [{
                                    optionid: option.value,
                                    optionvalue: value
                                }]
                        });
                    }
                    else {
                        values.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.groupid == subtitle.value) {
                                if (!item.options.some(( /**
                                 * @param {?} op
                                 * @return {?}
                                 */function (op) { return op.optionid == option.value; }))) {
                                    item.options.push({
                                        optionid: option.value,
                                        optionvalue: value
                                    });
                                }
                                else {
                                    item.options.forEach(( /**
                                     * @param {?} op
                                     * @return {?}
                                     */function (op) {
                                        if (op.optionid == option.value) {
                                            op.optionvalue = value;
                                        }
                                    }));
                                }
                            }
                        }));
                    }
                }
                else {
                    values.push({
                        groupid: subtitle.value,
                        options: [{
                                optionid: option.value,
                                optionvalue: value
                            }]
                    });
                }
                this.formControl.patchValue(values);
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixScore.prototype.getControlChecked = /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (subtitle, option) {
                /** @type {?} */
                var result = 0;
                /** @type {?} */
                var values = this.formControl.value;
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (value.groupid == subtitle.value) {
                            value.options.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.optionid == option.value) {
                                    result = item.optionvalue;
                                }
                            }));
                        }
                    }));
                }
                return result;
            };
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyMatrixScore.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //添加行
        //添加行
        /**
         * @return {?}
         */
        VXSurveyMatrixScore.prototype.addSubTitle =
            //添加行
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("subtitle", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyMatrixScore.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixScore.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyMatrixScore.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-matrix_score",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap matrix_score\">\n            <div class=\"option_table\">\n              <table>\n                <tr>\n                  <td></td>\n                  <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n                </tr>\n                <tr *ngFor=\"let itemTR of to.subtitle\">\n                  <td>{{itemTR.label}}</td>\n                  <td *ngFor=\"let itemTD of to.options\">\n                    <nz-rate [nzCount]=\"5\"></nz-rate>\n                  </td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"option_vertical\">\n              <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addSubTitle()\">\u6DFB\u52A0\u5355\u77E9\u9635\u884C</span>  \n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <table class=\"option_wrap\">\n        <tr>\n          <td></td>\n          <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n        </tr>\n        <tr *ngFor=\"let itemTR of to.subtitle\">\n          <td>{{itemTR.label}}</td>\n          <td *ngFor=\"let itemTD of to.options\">\n            <nz-rate [nzCount]=\"5\" [ngModel]=\"getControlChecked(itemTR,itemTD)\" (ngModelChange)=\"controlModelChange($event,itemTR,itemTD)\"></nz-rate>\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyMatrixScore.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyMatrixScore;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyMatrixInput = /** @class */ (function (_super) {
        __extends(VXSurveyMatrixInput, _super);
        function VXSurveyMatrixInput(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} value
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixInput.prototype.controlModelChange = /**
         * @param {?} value
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (value, subtitle, option) {
                /** @type {?} */
                var values = this.formControl.value || [];
                if (values != undefined && values != null && values.length > 0) {
                    if (!values.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.groupid == subtitle.value; }))) {
                        values.push({
                            groupid: subtitle.value,
                            options: [{
                                    optionid: option.value,
                                    optionvalue: value
                                }]
                        });
                    }
                    else {
                        values.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.groupid == subtitle.value) {
                                if (!item.options.some(( /**
                                 * @param {?} op
                                 * @return {?}
                                 */function (op) { return op.optionid == option.value; }))) {
                                    item.options.push({
                                        optionid: option.value,
                                        optionvalue: value
                                    });
                                }
                                else {
                                    item.options.forEach(( /**
                                     * @param {?} op
                                     * @return {?}
                                     */function (op) {
                                        if (op.optionid == option.value) {
                                            op.optionvalue = value;
                                        }
                                    }));
                                }
                            }
                        }));
                    }
                }
                else {
                    values.push({
                        groupid: subtitle.value,
                        options: [{
                                optionid: option.value,
                                optionvalue: value
                            }]
                    });
                }
                this.formControl.patchValue(values);
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixInput.prototype.getControlChecked = /**
         * @param {?} subtitle
         * @param {?} option
         * @return {?}
         */
            function (subtitle, option) {
                /** @type {?} */
                var result = null;
                /** @type {?} */
                var values = this.formControl.value;
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (value.groupid == subtitle.value) {
                            value.options.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
                                if (item.optionid == option.value) {
                                    result = item.optionvalue;
                                }
                            }));
                        }
                    }));
                }
                return result;
            };
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyMatrixInput.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //添加行
        //添加行
        /**
         * @return {?}
         */
        VXSurveyMatrixInput.prototype.addSubTitle =
            //添加行
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("subtitle", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyMatrixInput.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyMatrixInput.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyMatrixInput.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-matrix_input",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap matrix_input\">\n            <div class=\"option_table\">\n              <table>\n                <tr>\n                  <td></td>\n                  <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n                </tr>\n                <tr *ngFor=\"let itemTR of to.subtitle\">\n                  <td>{{itemTR.label}}</td>\n                  <td *ngFor=\"let itemTD of to.options\">\n                    <input nz-input placeholder=\"\" [disabled]=\"true\" />\n                  </td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"option_vertical\">\n              <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addSubTitle()\">\u6DFB\u52A0\u5355\u77E9\u9635\u884C</span>  \n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <table class=\"option_wrap\">\n        <tr>\n          <td></td>\n          <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n        </tr>\n        <tr *ngFor=\"let itemTR of to.subtitle\">\n          <td>{{itemTR.label}}</td>\n          <td *ngFor=\"let itemTD of to.options\">\n            <input nz-input [ngModel]=\"getControlChecked(itemTR,itemTD)\"  (ngModelChange)=\"controlModelChange($event,itemTR,itemTD)\"/>\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyMatrixInput.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyMatrixInput;
    }(core$1.FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyInputGroup = /** @class */ (function (_super) {
        __extends(VXSurveyInputGroup, _super);
        function VXSurveyInputGroup(dyService) {
            var _this = _super.call(this) || this;
            _this.guid = core$1.Guid.create()["value"];
            _this.service = dyService;
            return _this;
        }
        /**
         * @param {?} value
         * @param {?} option
         * @return {?}
         */
        VXSurveyInputGroup.prototype.controlModelChange = /**
         * @param {?} value
         * @param {?} option
         * @return {?}
         */
            function (value, option) {
                /** @type {?} */
                var values = this.formControl.value || [];
                if (values != undefined && values != null && values.length > 0) {
                    if (!values.some(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.optionid == option.value; }))) {
                        values.push({
                            optionid: option.value,
                            optionvalue: value
                        });
                    }
                    else {
                        values.forEach(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
                            if (item.optionid == option.value) {
                                item.optionvalue = value;
                            }
                        }));
                    }
                }
                else {
                    values.push({
                        optionid: option.value,
                        optionvalue: value
                    });
                }
                this.formControl.patchValue(values);
                this.formControl.markAsTouched();
            };
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyInputGroup.prototype.getControlChecked = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                /** @type {?} */
                var result = null;
                /** @type {?} */
                var values = this.formControl.value;
                if (values != undefined && values != null && values.length > 0) {
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        if (value.optionid == option.value) {
                            result = value.optionvalue;
                        }
                    }));
                }
                return result;
            };
        //添加选项
        //添加选项
        /**
         * @return {?}
         */
        VXSurveyInputGroup.prototype.addOption =
            //添加选项
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("add", "", this.field);
            };
        //批量添加
        //批量添加
        /**
         * @return {?}
         */
        VXSurveyInputGroup.prototype.addOptions =
            //批量添加
            /**
             * @return {?}
             */
            function () {
                this.service.optionOperational("adds", "", this.field);
            };
        //删除选项
        //删除选项
        /**
         * @param {?} option
         * @return {?}
         */
        VXSurveyInputGroup.prototype.deleteOption =
            //删除选项
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                this.service.optionOperational("delete", option, this.field);
            };
        VXSurveyInputGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-input_group",
                        template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_input_group\"  *ngFor=\"let item of to.options\">\n            <div class=\"option\">\n              <inline-editor  [(ngModel)]=\"item.label\" [active]=\"active\"></inline-editor> \n              <input nz-input placeholder=\"\" [disabled]=\"true\" /> \n            </div>\n            <div class=\"operate\"  (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n              <i class=\"icon-KT-Close\"></i>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n          <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n        </div> \n    </ng-container>\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div class=\"inputlist\"  *ngFor=\"let item of to.options\">\n        <div class=\"title\">\n          {{item.label}} \n        </div> \n        <input nz-input [ngModel]=\"getControlChecked(item)\"  (ngModelChange)=\"controlModelChange($event,item)\"/>\n      </div>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyInputGroup.ctorParameters = function () {
            return [
                { type: VXFormAntService }
            ];
        };
        return VXSurveyInputGroup;
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
                        template: "\n    <ng-container\n      *ngIf=\"formStatus !== 0 || field.type == 'line' || field.type == 'html'\"\n    >\n      <ng-template #fieldComponent></ng-template>\n    </ng-container>\n    <ng-container\n      *ngIf=\"formStatus === 0 && field.type != 'line' && field.type != 'html'\"\n    >\n      <div class=\"fieldlabel\">\n        <span class=\"required\" *ngIf=\"to.required\">*</span>\n        <span class=\"question_no\" *ngIf=\"to.queno\">{{to.queno}}.&nbsp;</span>\n        {{ to.label }}\n      </div>\n      <div class=\"fieldcontrol\" [class.has-error]=\"showError\">\n        <ng-template #fieldComponent></ng-template>\n        <div class=\"invalid-feedback\" [style.display]=\"'block'\">\n          <vxform-validation-message\n            *ngIf=\"showError\"\n            style=\"color:red\"\n            [field]=\"field\"\n          ></vxform-validation-message>\n        </div>\n      </div>\n    </ng-container>\n  "
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
        VXSurveyRadio,
        VXSurveyCheckBox,
        VXSurveyDropdown,
        VXSurveyCascader,
        VXSurveyScaler,
        VXSurveyScore,
        VXSurveyLine,
        VXSurveyRemark,
        VXSurveyInput,
        VXSurveyDate,
        VXSurveyTime,
        VXSurveyNPS,
        VXSurveyProportion,
        VXSurveyEvaluation,
        VXSurveyMatrixRadio,
        VXSurveyMatrixCheckBox,
        VXSurveyMatrixScore,
        VXSurveyMatrixInput,
        VXSurveyInputGroup,
        // types 
        VXSurveyRadioGroup,
        //templates
        VXSurveyDragDrop,
        VXFormFieldGroup,
        VXFormFieldRepeat,
        // wrappers
        VXFormWrapperFormField
    ];
    /** @type {?} */
    var BOOTSTRAP_VXFORM_CONFIG = {
        types: [
            {
                name: "radio", component: VXSurveyRadio, wrappers: ["form-field"]
            },
            {
                name: "checkbox", component: VXSurveyCheckBox, wrappers: ["form-field"]
            },
            {
                name: "dropdown", component: VXSurveyDropdown, wrappers: ["form-field"]
            },
            {
                name: "cascader", component: VXSurveyCascader, wrappers: ["form-field"]
            },
            {
                name: "scaler", component: VXSurveyScaler, wrappers: ["form-field"]
            },
            {
                name: "score", component: VXSurveyScore, wrappers: ["form-field"]
            },
            {
                name: "line", component: VXSurveyLine, wrappers: ["form-field"]
            },
            {
                name: "remark", component: VXSurveyRemark, wrappers: ["form-field"]
            },
            {
                name: "input", component: VXSurveyInput, wrappers: ["form-field"]
            },
            {
                name: "date", component: VXSurveyDate, wrappers: ["form-field"]
            },
            {
                name: "time", component: VXSurveyTime, wrappers: ["form-field"]
            },
            {
                name: "nps", component: VXSurveyNPS, wrappers: ["form-field"]
            },
            {
                name: "proportion", component: VXSurveyProportion, wrappers: ["form-field"]
            },
            {
                name: "evaluation", component: VXSurveyEvaluation, wrappers: ["form-field"]
            },
            {
                name: "matrix_radio", component: VXSurveyMatrixRadio, wrappers: ["form-field"]
            },
            {
                name: "matrix_checkbox", component: VXSurveyMatrixCheckBox, wrappers: ["form-field"]
            },
            {
                name: "matrix_score", component: VXSurveyMatrixScore, wrappers: ["form-field"]
            },
            {
                name: "matrix_input", component: VXSurveyMatrixInput, wrappers: ["form-field"]
            },
            {
                name: "input_group", component: VXSurveyInputGroup, wrappers: ["form-field"]
            },
            {
                name: "drag-drop", component: VXSurveyDragDrop
            },
            { name: "group", component: VXFormFieldGroup },
            { name: "repeat", component: VXFormFieldRepeat },
            {
                name: "radiogroup",
                component: VXSurveyRadioGroup,
                wrappers: ["form-field"]
            }
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
                return new i1$1.HttpParams({ fromObject: params });
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
                { type: i1$1.HttpClient }
            ];
        };
        /** @nocollapse */ _HttpClient.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1$1.HttpClient)); }, token: _HttpClient, providedIn: "root" });
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
    var VXRadioService = /** @class */ (function () {
        function VXRadioService() {
        }
        /*
          单选题
          radio  单选题、性别、年龄、学历、职业
      
        */
        /*
            单选题
            radio  单选题、性别、年龄、学历、职业
        
          */
        /**
         * @param {?} questionType
         * @return {?}
         */
        VXRadioService.prototype.create_radio = /*
            单选题
            radio  单选题、性别、年龄、学历、职业
        
          */
            /**
             * @param {?} questionType
             * @return {?}
             */
            function (questionType) {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "radio"
                };
                switch (questionType.tag) {
                    case "default":
                        this.createRadio_default(question);
                        break;
                    case "gender":
                        this.createRadio_gender(question);
                        break;
                    case "age":
                        this.createRadio_age(question);
                        break;
                    case "education":
                        this.createRadio_education(question);
                        break;
                    case "occupation":
                        this.createRadio_occupation(question);
                        break;
                    case "votefont":
                        this.createRadio_votefont(question);
                        break;
                    default:
                        this.createRadio_default(question);
                        break;
                }
                return question;
            };
        //单选题
        //单选题
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXRadioService.prototype.createRadio_default =
            //单选题
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请选择一个选项",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: [{
                            label: "选项1",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "选项2",
                            value: "2",
                            score: 0
                        }]
                };
            };
        //性别
        //性别
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXRadioService.prototype.createRadio_gender =
            //性别
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "性别",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: [{
                            label: "男",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "女",
                            value: "2",
                            score: 0
                        }]
                };
            };
        //年龄
        //年龄
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXRadioService.prototype.createRadio_age =
            //年龄
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "您的年龄是？",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: [{
                            label: "18~24岁",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "25~30岁",
                            value: "2",
                            score: 0
                        },
                        {
                            label: "31~40岁",
                            value: "3",
                            score: 0
                        },
                        {
                            label: "41~50岁",
                            value: "4",
                            score: 0
                        },
                        {
                            label: "51~60岁",
                            value: "5",
                            score: 0
                        },
                        {
                            label: "61岁及以上",
                            value: "6",
                            score: 0
                        }]
                };
            };
        //学历
        //学历
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXRadioService.prototype.createRadio_education =
            //学历
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "学历",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: [{
                            label: "小学级以下",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "初中",
                            value: "2",
                            score: 0
                        },
                        {
                            label: "高中/中专/技校",
                            value: "3",
                            score: 0
                        },
                        {
                            label: "大学专科",
                            value: "4",
                            score: 0
                        },
                        {
                            label: "大学本科",
                            value: "5",
                            score: 0
                        },
                        {
                            label: "硕士研究生及以上",
                            value: "6",
                            score: 0
                        }]
                };
            };
        //职业 
        //职业 
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXRadioService.prototype.createRadio_occupation =
            //职业 
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "您目前所处行业是？",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: [
                        {
                            label: "在校学生",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "政府/机关干部/公务员",
                            value: "2",
                            score: 0
                        },
                        {
                            label: "企业管理者（包括基层及中高层管理者）",
                            value: "3",
                            score: 0
                        },
                        {
                            label: "普通职员（办公室/写字楼工作人员）",
                            value: "4",
                            score: 0
                        },
                        {
                            label: "专业人员（如医生/律师/文体/记者/老师等）",
                            value: "5",
                            score: 0
                        },
                        {
                            label: "普通工人（如工厂工人/体力劳动者等）",
                            value: "6",
                            score: 0
                        },
                        {
                            label: "商业服务业职工（如销售人员/商店职员/服务员等）",
                            value: "7",
                            score: 0
                        },
                        {
                            label: "个体经营者/承包商",
                            value: "8",
                            score: 0
                        },
                        {
                            label: "自由职业者",
                            value: "9",
                            score: 0
                        },
                        {
                            label: "农林牧渔劳动者",
                            value: "10",
                            score: 0
                        },
                        {
                            label: "退休",
                            value: "11",
                            score: 0
                        },
                        {
                            label: "暂无职业",
                            value: "12",
                            score: 0
                        },
                        {
                            label: "其他职业人员（请注明）",
                            value: "13",
                            score: 0
                        }
                    ]
                };
            };
        //文字投票
        //文字投票
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXRadioService.prototype.createRadio_votefont =
            //文字投票
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请给以下选项投票",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: [{
                            label: "选项1",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "选项2",
                            value: "2",
                            score: 0
                        }]
                };
            };
        VXRadioService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXRadioService.ctorParameters = function () { return []; };
        return VXRadioService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXCheckboxService = /** @class */ (function () {
        function VXCheckboxService() {
        }
        /**
         * @param {?} questionType
         * @return {?}
         */
        VXCheckboxService.prototype.create_checkbox = /**
         * @param {?} questionType
         * @return {?}
         */
            function (questionType) {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "checkbox"
                };
                switch (questionType.tag) {
                    case "default":
                        this.createCheckbox_default(question);
                        break;
                    default:
                        this.createCheckbox_default(question);
                        break;
                }
                return question;
            };
        //多选题
        //多选题
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXCheckboxService.prototype.createCheckbox_default =
            //多选题
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请选择以下选项 (多选)",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1",
                        max: 2,
                        min: 0
                    },
                    options: [{
                            label: "选项1",
                            value: "1",
                            score: 0
                        },
                        {
                            label: "选项2",
                            value: "2",
                            score: 0
                        }]
                };
            };
        VXCheckboxService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXCheckboxService.ctorParameters = function () { return []; };
        return VXCheckboxService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXInputService = /** @class */ (function () {
        function VXInputService() {
        }
        /*
          直接输入
          input  姓名、手机、邮箱
      
        */
        /*
            直接输入
            input  姓名、手机、邮箱
        
          */
        /**
         * @param {?} questionType
         * @return {?}
         */
        VXInputService.prototype.create_input = /*
            直接输入
            input  姓名、手机、邮箱
        
          */
            /**
             * @param {?} questionType
             * @return {?}
             */
            function (questionType) {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "input"
                };
                switch (questionType.tag) {
                    case "default":
                        this.createInput_default(question);
                        break;
                    case "name":
                        this.createInput_name(question);
                        break;
                    case "mobile":
                        this.createInput_mobile(question);
                        break;
                    case "email":
                        this.createInput_email(question);
                        break;
                    case "remark":
                        this.createInput_remark(question);
                        break;
                    default:
                        this.createInput_default(question);
                        break;
                }
                return question;
            };
        //默认
        //默认
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXInputService.prototype.createInput_default =
            //默认
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    type: "default",
                    label: "请填写本项内容",
                    required: false,
                    setting: {
                        size: "small",
                        minLength: 0,
                        maxLength: 200
                    }
                };
                return question;
            };
        //姓名
        //姓名
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXInputService.prototype.createInput_name =
            //姓名
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    type: "default",
                    label: "请填写姓名",
                    required: false,
                    setting: {
                        size: "small",
                        minLength: 0,
                        maxLength: 200
                    }
                };
                return question;
            };
        //邮箱
        //邮箱
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXInputService.prototype.createInput_email =
            //邮箱
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    type: "email",
                    label: "请填写邮箱",
                    required: false,
                    setting: {
                        size: "small",
                        minLength: 0,
                        maxLength: 200
                    }
                };
                return question;
            };
        //手机
        //手机
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXInputService.prototype.createInput_mobile =
            //手机
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    type: "mobile",
                    label: "请填写手机号码",
                    required: false,
                    setting: {
                        size: "small",
                        minLength: 0,
                        maxLength: 200
                    }
                };
                return question;
            };
        //多行文本
        //多行文本
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXInputService.prototype.createInput_remark =
            //多行文本
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    type: "default",
                    label: "请填写本项内容",
                    required: false,
                    setting: {
                        size: "large",
                        minLength: 0,
                        maxLength: 200
                    }
                };
                return question;
            };
        VXInputService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXInputService.ctorParameters = function () { return []; };
        return VXInputService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXCascaderService = /** @class */ (function () {
        function VXCascaderService() {
        }
        /*
          级联选择
          cascader  级联 、专业、院校、行业
      
        */
        /*
            级联选择
            cascader  级联 、专业、院校、行业
        
          */
        /**
         * @param {?} questionType
         * @return {?}
         */
        VXCascaderService.prototype.create_cascader = /*
            级联选择
            cascader  级联 、专业、院校、行业
        
          */
            /**
             * @param {?} questionType
             * @return {?}
             */
            function (questionType) {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "cascader"
                };
                switch (questionType.tag) {
                    case "default":
                        this.createCascader_default(question);
                        break;
                    case "major":
                        this.createCascader_major(question);
                        break;
                    case "industry":
                        this.createCascader_industry(question);
                        break;
                    case "university":
                        this.createCascader_university(question);
                        break;
                    default:
                        this.createCascader_default(question);
                        break;
                }
                return question;
            };
        //级联
        //级联
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXCascaderService.prototype.createCascader_default =
            //级联
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请选择以下选项",
                    options: [
                        {
                            label: "请选择",
                            value: "-1"
                        },
                        {
                            label: "选项1",
                            value: "1",
                            children: [
                                {
                                    label: "选项1-1",
                                    value: "1-1"
                                }
                            ]
                        },
                        {
                            label: "选项2",
                            value: "2",
                            children: [
                                {
                                    label: "选项2-1",
                                    value: "2-1"
                                }
                            ]
                        }
                    ]
                };
            };
        //专业
        //专业
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXCascaderService.prototype.createCascader_major =
            //专业
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "您大学所学专业是？",
                    options: [
                        {
                            label: "选项1",
                            value: "1",
                            children: [
                                {
                                    label: "选项1-1",
                                    value: "1-1"
                                }
                            ]
                        },
                        {
                            label: "选项2",
                            value: "2",
                            children: [
                                {
                                    label: "选项2-1",
                                    value: "2-1"
                                }
                            ]
                        }
                    ]
                };
                return question;
            };
        //行业
        //行业
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXCascaderService.prototype.createCascader_industry =
            //行业
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "您目前所处行业是？",
                    options: [
                        {
                            label: "选项1",
                            value: "1",
                            children: [
                                {
                                    label: "选项1-1",
                                    value: "1-1"
                                }
                            ]
                        },
                        {
                            label: "选项2",
                            value: "2",
                            children: [
                                {
                                    label: "选项2-1",
                                    value: "2-1"
                                }
                            ]
                        }
                    ]
                };
                return question;
            };
        //院校
        //院校
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXCascaderService.prototype.createCascader_university =
            //院校
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "您所就读的学校是？",
                    options: [
                        {
                            label: "选项1",
                            value: "1",
                            children: [
                                {
                                    label: "选项1-1",
                                    value: "1-1"
                                }
                            ]
                        },
                        {
                            label: "选项2",
                            value: "2",
                            children: [
                                {
                                    label: "选项2-1",
                                    value: "2-1"
                                }
                            ]
                        }
                    ]
                };
                return question;
            };
        VXCascaderService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXCascaderService.ctorParameters = function () { return []; };
        return VXCascaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXOtherService = /** @class */ (function () {
        function VXOtherService() {
        }
        //分割线
        //分割线
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_line =
            //分割线
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "line",
                    templateOptions: {
                        label: "分割线"
                    }
                };
                return question;
            };
        //备注说明
        //备注说明
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_remark =
            //备注说明
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "remark",
                    templateOptions: {
                        label: "请阅读本项说明，然后回答问题"
                    }
                };
                return question;
            };
        //日期
        //日期
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_date =
            //日期
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "date",
                    templateOptions: {
                        label: "日期",
                        required: false
                    }
                };
                return question;
            };
        //时间
        //时间
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_time =
            //时间
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "time",
                    templateOptions: {
                        label: "时间",
                        required: false
                    }
                };
                return question;
            };
        //打分题
        //打分题
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_score =
            //打分题
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "score",
                    templateOptions: {
                        type: "start",
                        label: "请给本项打分",
                        setting: {
                            label: "",
                            score: 0,
                            min: 0,
                            max: 5
                        }
                    }
                };
                return question;
            };
        //下拉题
        //下拉题
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_dropdown =
            //下拉题
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "dropdown",
                    templateOptions: {
                        label: "请选择一个选",
                        setting: {
                            score: 0
                        },
                        options: [{
                                label: "选项1",
                                value: "1",
                                score: 0
                            },
                            {
                                label: "选项2",
                                value: "2",
                                score: 0
                            }]
                    }
                };
                return question;
            };
        //NPS题
        //NPS题
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_nps =
            //NPS题
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "nps",
                    templateOptions: {
                        label: "您向朋友或同事推荐我们的可能性有多大？",
                        required: false,
                        options: [{
                                label: "0",
                                value: "0"
                            },
                            {
                                label: "1",
                                value: "1"
                            },
                            {
                                label: "2",
                                value: "2"
                            },
                            {
                                label: "3",
                                value: "3"
                            },
                            {
                                label: "4",
                                value: "4"
                            },
                            {
                                label: "5",
                                value: "5"
                            },
                            {
                                label: "6",
                                value: "6"
                            },
                            {
                                label: "7",
                                value: "7"
                            },
                            {
                                label: "8",
                                value: "8"
                            },
                            {
                                label: "9",
                                value: "9"
                            },
                            {
                                label: "10",
                                value: "10"
                            }]
                    }
                };
                return question;
            };
        //比重题
        //比重题
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_proportion =
            //比重题
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "proportion",
                    templateOptions: {
                        label: "请选择一个选",
                        layout: "row1",
                        order: false,
                        score: 0,
                        required: false,
                        options: [{
                                label: "选项1",
                                value: "1",
                                score: 0,
                                input: false
                            },
                            {
                                label: "选项2",
                                value: "2",
                                score: 0,
                                input: false
                            }]
                    }
                };
                return question;
            };
        //评价题
        //评价题
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_evaluation =
            //评价题
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "evaluation",
                    templateOptions: {
                        label: "请选择一个选",
                        required: false,
                        setting: {
                            score: 0
                        },
                        options: [{
                                label: "非常不满意",
                                value: "1",
                                tag: "态度冷淡\n推销多\n技术差"
                            },
                            {
                                label: "比较不满意",
                                value: "2",
                                tag: "速度慢\n仪表乱\n不专业"
                            },
                            {
                                label: "一般",
                                value: "3",
                                tag: "无互动\n不积极\n业务不精"
                            },
                            {
                                label: "比较满意",
                                value: "4",
                                tag: "文明礼貌\n速度快\n较专业"
                            },
                            {
                                label: "非常满意",
                                value: "5",
                                tag: "热情好客\n敬业精神\n技能专业"
                            },]
                    }
                };
                return question;
            };
        //多项填空
        //多项填空
        /**
         * @return {?}
         */
        VXOtherService.prototype.create_inputGroup =
            //多项填空
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: "input_group",
                    templateOptions: {
                        label: "请填写以下内容",
                        required: false,
                        options: [{
                                label: "填空1",
                                value: "1"
                            },
                            {
                                label: "填空2",
                                value: "2"
                            }]
                    }
                };
                return question;
            };
        VXOtherService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXOtherService.ctorParameters = function () { return []; };
        return VXOtherService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXMatrixService = /** @class */ (function () {
        function VXMatrixService() {
        }
        /*
           矩阵
        */
        /*
             矩阵
          */
        /**
         * @param {?} questionType
         * @return {?}
         */
        VXMatrixService.prototype.create_matrix = /*
             矩阵
          */
            /**
             * @param {?} questionType
             * @return {?}
             */
            function (questionType) {
                /** @type {?} */
                var question = {
                    status: 1,
                    key: core$1.Guid.create()["value"],
                    type: questionType.type
                };
                switch (questionType.type) {
                    case "matrix_radio":
                        this.createMatrix_radio(question);
                        break;
                    case "matrix_checkbox":
                        this.createMatrix_radio(question);
                        break;
                    case "matrix_score":
                        this.createMatrix_score(question);
                        break;
                    case "matrix_input":
                        this.createMatrix_input(question);
                        break;
                    default:
                        question.type = "matrix_radio";
                        this.createMatrix_radio(question);
                        break;
                }
                return question;
            };
        //矩阵单选
        //矩阵单选
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXMatrixService.prototype.createMatrix_radio =
            //矩阵单选
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请选择以下选项",
                    required: false,
                    subtitle: [{
                            label: "矩阵行1",
                            value: "1"
                        },
                        {
                            label: "矩阵行2",
                            value: "2",
                        }],
                    options: [{
                            label: "选项1",
                            value: "1"
                        },
                        {
                            label: "选项2",
                            value: "2"
                        }]
                };
                return question;
            };
        //矩阵打分
        //矩阵打分
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXMatrixService.prototype.createMatrix_score =
            //矩阵打分
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请给以下各项打分",
                    required: false,
                    subtitle: [{
                            label: "矩阵行1",
                            value: "1"
                        },
                        {
                            label: "矩阵行2",
                            value: "2",
                        }],
                    options: [{
                            label: "打分1",
                            value: "1"
                        },
                        {
                            label: "打分1",
                            value: "2"
                        }]
                };
                return question;
            };
        //矩阵填空
        //矩阵填空
        /**
         * @private
         * @param {?} question
         * @return {?}
         */
        VXMatrixService.prototype.createMatrix_input =
            //矩阵填空
            /**
             * @private
             * @param {?} question
             * @return {?}
             */
            function (question) {
                question.templateOptions = {
                    label: "请填写以下内容",
                    required: false,
                    subtitle: [{
                            label: "矩阵行1",
                            value: "1"
                        },
                        {
                            label: "矩阵行2",
                            value: "2",
                        }],
                    options: [{
                            label: "填空1",
                            value: "1"
                        },
                        {
                            label: "填空1",
                            value: "2"
                        }]
                };
                return question;
            };
        VXMatrixService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXMatrixService.ctorParameters = function () { return []; };
        return VXMatrixService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXTransferService = /** @class */ (function () {
        function VXTransferService(vxRadioService, vxCheckboxService, vxInputService, vxCascaderService, vxOtherService, vxMatrixService) {
            this.vxRadioService = vxRadioService;
            this.vxCheckboxService = vxCheckboxService;
            this.vxInputService = vxInputService;
            this.vxCascaderService = vxCascaderService;
            this.vxOtherService = vxOtherService;
            this.vxMatrixService = vxMatrixService;
        }
        /**
         * @param {?} questionType
         * @param {?} form_fields
         * @param {?} currentIndex
         * @return {?}
         */
        VXTransferService.prototype.transferQuestionByType = /**
         * @param {?} questionType
         * @param {?} form_fields
         * @param {?} currentIndex
         * @return {?}
         */
            function (questionType, form_fields, currentIndex) {
                if (questionType != undefined && questionType != null && questionType.type != undefined && questionType.type != null) {
                    /** @type {?} */
                    var obj = this.initQuestion(questionType);
                    if (currentIndex > -1) {
                        form_fields.splice(currentIndex, 0, obj);
                    }
                    else {
                        form_fields.push(obj);
                    }
                }
            };
        /**
         * @private
         * @param {?} questionType
         * @return {?}
         */
        VXTransferService.prototype.initQuestion = /**
         * @private
         * @param {?} questionType
         * @return {?}
         */
            function (questionType) {
                /** @type {?} */
                var question = {};
                switch (questionType.type) {
                    case "radio":
                        question = this.vxRadioService.create_radio(questionType);
                        break;
                    case "checkbox":
                        question = this.vxCheckboxService.create_checkbox(questionType);
                        break;
                    case "cascader":
                        question = this.vxCascaderService.create_cascader(questionType);
                        break;
                    case "input":
                        question = this.vxInputService.create_input(questionType);
                        break;
                    case "line":
                        question = this.vxOtherService.create_line();
                        break;
                    case "remark":
                        question = this.vxOtherService.create_remark();
                        break;
                    case "date":
                        question = this.vxOtherService.create_date();
                        break;
                    case "time":
                        question = this.vxOtherService.create_time();
                        break;
                    case "dropdown":
                        question = this.vxOtherService.create_dropdown();
                        break;
                    case "score":
                        question = this.vxOtherService.create_score();
                        break;
                    case "nps":
                        question = this.vxOtherService.create_nps();
                        break;
                    case "proportion":
                        question = this.vxOtherService.create_proportion();
                        break;
                    case "evaluation":
                        question = this.vxOtherService.create_evaluation();
                        break;
                    case "matrix_radio":
                    case "matrix_checkbox":
                    case "matrix_score":
                    case "matrix_input":
                        question = this.vxMatrixService.create_matrix(questionType);
                        break;
                    case "input_group":
                        question = this.vxOtherService.create_inputGroup();
                        break;
                }
                return question;
            };
        VXTransferService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        VXTransferService.ctorParameters = function () {
            return [
                { type: VXRadioService },
                { type: VXCheckboxService },
                { type: VXInputService },
                { type: VXCascaderService },
                { type: VXOtherService },
                { type: VXMatrixService }
            ];
        };
        return VXTransferService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyDesignDetail = /** @class */ (function () {
        function VXSurveyDesignDetail(message$$1, modalService, vxFormAntService, vxDialogService, dataService, vxTransferService, vxFormCommonService) {
            this.message = message$$1;
            this.modalService = modalService;
            this.vxFormAntService = vxFormAntService;
            this.vxDialogService = vxDialogService;
            this.dataService = dataService;
            this.vxTransferService = vxTransferService;
            this.vxFormCommonService = vxFormCommonService;
            this.formCode = "";
            this.api = {
                form: { url: "assets/mockData/survey.json" }
            };
            this.saveEvent = new i0.EventEmitter();
            this.cancelEvent = new i0.EventEmitter();
            this.previewEvent = new i0.EventEmitter();
            this.pageStatus = 1;
            this.form_model = {};
            this.form_group = new forms.FormGroup({});
            this.form_fields = [];
            this.vxSurveyInfo = {
                code: "",
                name: "",
                first: {
                    title: "",
                    text: ""
                },
                last: {
                    title: "",
                    text: ""
                },
                pages: [
                    {
                        code: "page1",
                        name: "第1页",
                        questions: []
                    }
                ]
            };
            this.show_setting = false;
            this.questionField = {};
            this.pageSelectedIndex = 0;
        }
        /**
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.vxFormAntService.questionEvent.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.questionOperational(res);
                }));
                this.vxFormAntService.optionEvent.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.optionOperational(res);
                }));
                this.vxFormAntService.dragDropEvent.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.addQuestionDragDrop(res);
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.formCode) {
                    this.initFormInfo();
                }
            };
        /**
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { };
        /*按钮区域---begin*/
        /*按钮区域---begin*/
        /**
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.saveSurvey = /*按钮区域---begin*/
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var objSurvey = core$1.clone(this.vxSurveyInfo);
                objSurvey.pages.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    _this.vxFormCommonService.initFormFieldProperty(item.questions);
                }));
                this.saveEvent.emit(JSON.stringify(objSurvey));
            };
        /**
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.initFormInfo = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.dataService.getFormInfo(this.api.form.url, { formcode: this.formCode }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.vxSurveyInfo = {
                        code: res.code,
                        name: res.name,
                        type: res.type,
                        first: res.first,
                        last: res.last,
                        pages: res.pages
                    };
                    if (_this.vxSurveyInfo.pages != undefined && (_this.vxSurveyInfo.pages == null || _this.vxSurveyInfo.pages.length == 0)) {
                        _this.vxSurveyInfo.pages.push({
                            "code": "pageCode1",
                            "name": "第1页",
                            "questions": []
                        });
                    }
                    _this.getQuestionListByPageIndex(0);
                }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.pageClick = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                // if (this.vxSurveyInfo.pages != undefined) {
                //   if (e == 0 || this.vxSurveyInfo.pages.length == e - 1) {
                //     this.show_setting = false;
                //   }
                //   else {
                //     if (e > 0) {
                //       this.getQuestionListByPageIndex(e - 1);
                //     }
                //   }
                // }
                this.getQuestionListByPageIndex(e);
            };
        /**
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.addPage = /**
         * @return {?}
         */
            function () {
                if (this.vxSurveyInfo.pages != undefined) {
                    /** @type {?} */
                    var newPage = {
                        code: "pagecode_" + (this.vxSurveyInfo.pages.length + 1),
                        name: "\u7B2C" + (this.vxSurveyInfo.pages.length + 1) + "\u9875",
                        questions: []
                    };
                    this.vxSurveyInfo.pages.push(newPage);
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.deletePage = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this.vxSurveyInfo.pages != undefined) {
                    this.vxSurveyInfo.pages.splice(index, 1);
                }
            };
        /**
         * @param {?} pageIndex
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.getQuestionListByPageIndex = /**
         * @param {?} pageIndex
         * @return {?}
         */
            function (pageIndex) {
                if (this.vxSurveyInfo.pages != undefined && this.vxSurveyInfo.pages.length > 0 && this.vxSurveyInfo.pages[pageIndex].questions != undefined) {
                    this.form_fields = [{
                            "type": "drag-drop",
                            "key": "drag-droplist",
                            "fieldGroup": this.vxSurveyInfo.pages[pageIndex].questions
                        }];
                }
            };
        //题目
        //题目
        /**
         * @param {?} res
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.questionOperational =
            //题目
            /**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var resType = res["sign"];
                /** @type {?} */
                var resField = res["field"];
                /** @type {?} */
                var rQuestion;
                /** @type {?} */
                var rIndex;
                this.formFieldGroup.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    item.active = false;
                    if (item.key == resField.key) {
                        item.active = true;
                        rQuestion = item;
                        rIndex = index;
                    }
                }));
                switch (resType) {
                    case "active":
                        this.questionField = rQuestion;
                        this.show_setting = true;
                        break;
                    case "logic":
                        this.message.success("逻辑设置");
                        break;
                    case "copy":
                        /** @type {?} */
                        var copyQuestion = _.cloneDeep(rQuestion);
                        copyQuestion.key = core$1.Guid.create()["value"];
                        copyQuestion.active = false;
                        this.formFieldGroup.splice(rIndex + 1, 0, copyQuestion);
                        this.message.success("拷贝题目");
                        break;
                    case "delete":
                        this.formFieldGroup.splice(rIndex, 1);
                        this.message.success("删除题目");
                        this.questionField = {};
                        this.show_setting = false;
                        break;
                }
            };
        //题目选项
        //题目选项
        /**
         * @param {?} res
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.optionOperational =
            //题目选项
            /**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var resType = res["sign"];
                /** @type {?} */
                var resOption = res["option"];
                /** @type {?} */
                var resField = res["field"];
                this.formFieldGroup.forEach(( /**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */function (item, index, object) {
                    item.active = false;
                    if (item.key == resField.key) {
                        item.active = true;
                    }
                }));
                switch (resType) {
                    case "add":
                        resField.templateOptions.options.push({
                            "label": "选项",
                            "value": core$1.Guid.create()["value"],
                            "score": 0,
                            "input": false
                        });
                        this.message.success("添加选项");
                        break;
                    case "adds":
                        this.message.success("批量添加");
                        break;
                    case "delete":
                        resField.templateOptions.options.forEach(( /**
                         * @param {?} item
                         * @param {?} index
                         * @param {?} object
                         * @return {?}
                         */function (item, index, object) {
                            if (item.value == resOption.value) {
                                object.splice(index, 1);
                            }
                        }));
                        this.message.success("删除选项");
                        break;
                    case "subtitle":
                        resField.templateOptions.subtitle.push({
                            "label": "矩阵行",
                            "value": core$1.Guid.create()["value"]
                        });
                        this.message.success("添加矩阵行");
                        break;
                }
            };
        //添加题目
        //添加题目
        /**
         * @param {?} data
         * @param {?=} index
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.addQuestionType =
            //添加题目
            /**
             * @param {?} data
             * @param {?=} index
             * @return {?}
             */
            function (data, index) {
                if (index === void 0) {
                    index = -1;
                }
                this.vxTransferService.transferQuestionByType(data, this.formFieldGroup, index);
            };
        //拖拽添加题目
        //拖拽添加题目
        /**
         * @param {?} res
         * @return {?}
         */
        VXSurveyDesignDetail.prototype.addQuestionDragDrop =
            //拖拽添加题目
            /**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var data = res["previousData"][res["previousIndex"]];
                this.vxTransferService.transferQuestionByType(data, this.formFieldGroup, res["currentIndex"]);
            };
        Object.defineProperty(VXSurveyDesignDetail.prototype, "formFieldGroup", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var result = [];
                if (this.form_fields != null && this.form_fields.length > 0 && this.form_fields[0].fieldGroup != undefined) {
                    result = this.form_fields[0].fieldGroup;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        VXSurveyDesignDetail.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-design-detail",
                        template: "<div class=\"survey-design\" cdkDropListGroup>\r\n    <div class=\"layout\">\r\n        <nz-tabset>\r\n            <nz-tab nzTitle=\"\u9898\u76EE\u7C7B\u578B\">\r\n                <div class=\"question-list vxsurvey-scrollbar\">\r\n                    <vx-question-type (questionTypeEvent)=\"addQuestionType($event)\" (addPageEvent)=\"addPage()\" (saveSurveyEvent)=\"saveSurvey()\">\r\n                    </vx-question-type>\r\n                </div>\r\n            </nz-tab>\r\n            <nz-tab nzTitle=\"\u9898\u76EE\u5927\u7EB2\">\r\n                <div class=\"question-list vxsurvey-scrollbar\">\r\n                    <vx-question-list *ngIf=\"vxSurveyInfo\" [vxSurveyInfo]=\"vxSurveyInfo\"></vx-question-list>\r\n                </div>\r\n            </nz-tab>\r\n        </nz-tabset>\r\n    </div>\r\n    <div class=\"panel\">\r\n        <div class=\"buttonlist\"> \r\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"saveSurvey()\">\u4FDD\u5B58\u6570\u636E</button>\r\n        </div>\r\n        <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"pageSelectedIndex\" (nzSelectedIndexChange)=\"pageClick($event)\">\r\n            <!-- <nz-tab [nzTitle]=\"firstPageTemplate\">\r\n                <ng-template #firstPageTemplate>\r\n                    <div>\u5F00\u59CB\u9875</div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"vxsurvey-firstform vxsurvey-scrollbar\">\r\n                        <vxsurvey-first-page></vxsurvey-first-page>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab> -->\r\n            <ng-container *ngIf=\"vxSurveyInfo!=null && vxSurveyInfo.pages\">\r\n                <ng-container *ngFor=\"let page of vxSurveyInfo.pages;let index=index;\">\r\n                    <nz-tab [nzTitle]=\"titleTemplate\">\r\n                        <ng-template #titleTemplate>\r\n                            <div>\r\n                                \u7B2C{{ index+1 }}\u9875\r\n                                <i *ngIf=\"index>0\" nz-icon nzType=\"close\" (click)=\"deletePage(index)\" class=\"ant-tabs-close-x\"></i>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template nz-tab>\r\n                            <div class=\"vxsurvey-form vxsurvey-scrollbar\">\r\n                                <form [formGroup]=\"form_group\" class=\"layout-column-1\" nz-form>\r\n                                    <vxform [fields]=\"form_fields\" [status]=\"1\" [form]=\"form_group\" [model]=\"form_model\">\r\n                                    </vxform>\r\n                                </form>\r\n                            </div>\r\n                        </ng-template>\r\n                    </nz-tab>\r\n                </ng-container>\r\n            </ng-container>\r\n            <!-- <nz-tab [nzTitle]=\"lastPageTemplate\">\r\n                <ng-template #lastPageTemplate>\r\n                    <div>\u7ED3\u675F\u9875</div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"vxsurvey-lastform vxsurvey-scrollbar\">\r\n                        <vxsurvey-last-page></vxsurvey-last-page>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab> -->\r\n        </nz-tabset>\r\n    </div>\r\n    <div class=\"setting\">\r\n        <div class=\"setting_wrap\" *ngIf=\"show_setting\">\r\n            <setting-template [field]=\"questionField\"></setting-template>\r\n        </div>\r\n    </div>\r\n</div>",
                        providers: [DataService, VXTransferService],
                        styles: ["::ng-deep .formly-drag-drop_wrap.cdk-drag-preview{border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;cursor:move}:host ::ng-deep{display:flex;width:100%;height:100%;background-color:#f3f3f3}:host ::ng-deep .survey-design{position:relative;width:100%;height:100%;overflow:hidden;padding:0 260px 0 250px}:host ::ng-deep .survey-design :focus{outline:0;box-shadow:none}:host ::ng-deep .survey-design .cke_focus{background-color:#f4f4f4;border:0}:host ::ng-deep .survey-design .inline_editor_hidden{display:none}:host ::ng-deep .survey-design .inline_editor_show{padding:8px 10px}:host ::ng-deep .survey-design nz-tabset{height:100%;position:inherit}:host ::ng-deep .survey-design .layout{float:left;width:250px;background-color:#fff;padding:15px 5px 0 25px;position:absolute;left:0;height:100%;top:0}:host ::ng-deep .survey-design .layout button{font-size:12px}:host ::ng-deep .survey-design .layout .question-list{height:calc(100% - 80px);overflow-y:auto;position:absolute;width:100%;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .survey-design .layout .title{font-size:14px;color:#9b9b9b;margin-bottom:10px}:host ::ng-deep .survey-design .layout-column ul{display:inline-block;width:100%}:host ::ng-deep .survey-design .layout-column ul li{float:left;text-align:center}:host ::ng-deep .survey-design .layout-column ul li div{width:56px;height:56px;line-height:63px;border-radius:4px;background-color:#ececec;margin-bottom:5px}:host ::ng-deep .survey-design .layout-column ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .survey-design .layout-column ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .survey-design .layout-column ul li:nth-child(1),:host ::ng-deep .survey-design .layout-column ul li:nth-child(2){margin:0 15px 0 0}:host ::ng-deep .survey-design .layout-row ul{display:inline-block;width:100%}:host ::ng-deep .survey-design .layout-row ul li{float:left;text-align:center}:host ::ng-deep .survey-design .layout-row ul li div{width:90px;height:32px;line-height:32px;border-radius:4px;background-color:#ececec;margin-bottom:5px;cursor:pointer}:host ::ng-deep .survey-design .layout-row ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .survey-design .layout-row ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .survey-design .layout-row ul li:nth-child(1){margin:0 15px 0 0}:host ::ng-deep .survey-design .layout-el li{width:200px;height:33px;line-height:33px;border-radius:4px;border:1px solid #dcdce0;background-color:#fff;margin:0 0 10px!important;font-size:13px;color:#323232}:host ::ng-deep .survey-design .layout-el li i{margin:0 8px;font-size:14px;color:#bfbfbf}:host ::ng-deep .survey-design .layout-el li:hover{background-color:#71a9ff;cursor:pointer;color:#fff}:host ::ng-deep .survey-design .layout-el li:hover i{color:#fff}:host ::ng-deep .survey-design .panel{position:relative;height:100%;width:100%;padding:0 15px}:host ::ng-deep .survey-design .panel .buttonlist{padding:10px 20px;margin:0 0 10px;background-color:#fff}:host ::ng-deep .survey-design .panel .required{display:inline-block;padding:8px 0;color:red;width:5px}:host ::ng-deep .survey-design .panel inline-editor{flex:1;width:100%}:host ::ng-deep .survey-design .panel inline-editor .cke_editable_inline{border-radius:2px;padding:8px 10px;font-size:14px;border:0 solid #f4f4f4}:host ::ng-deep .survey-design .panel .ant-tabs-bar{border:0;margin:0}:host ::ng-deep .survey-design .panel .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{border:0!important}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap{position:relative;width:100%;font-size:12px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-operate{display:none;position:absolute;right:20px;top:12px;width:100%;text-align:right}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-operate span{cursor:pointer;margin:0 0 0 10px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content{background-color:#fff;border-radius:4px;margin:0 0 20px;padding:15px 20px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_title{padding:0 180px 5px 0;display:flex;flex-direction:row;font-size:14px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_content{padding:0 180px 0 15px;width:100%;font-size:13px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_operate{color:#2672ff;display:none;padding:15px 0 0}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_operate span{margin:0 20px 0 0;cursor:pointer;font-size:13px}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .field-content{box-shadow:0 10px 15px 0 rgba(0,0,0,.1);border:2px solid #2672ff;border-radius:4px}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .field-operate{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .option_vertical{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .question-wrap_operate{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .option_wrap:hover .operate i{display:block}:host ::ng-deep .survey-design .panel .formly_empty{background-color:#fff}:host ::ng-deep .survey-design .panel .formly_empty .formly-drag-drop{padding:50px}:host ::ng-deep .survey-design .setting{float:left;width:260px;margin:0 0 0 8px;padding:0 0 10px;position:absolute;height:100%;right:0;top:0}:host ::ng-deep .survey-design .setting_wrap{scrollbar-color:transparent;overflow-y:overlay;padding:15px 0 0 20px;height:100%;background-color:#fff}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .survey-design .setting_wrap nz-select{width:65px;float:right;margin:3px;font-size:12px}:host ::ng-deep .survey-design .setting_wrap .title{color:#484848;font-size:16px;padding:8px 0 5px;border-bottom:1px solid #dde5ed}:host ::ng-deep .survey-design .setting_wrap .item{font-size:12px;padding:8px 10px 8px 0;line-height:30px;border-bottom:1px dotted #dde5ed}:host ::ng-deep .survey-design .setting_wrap .item nz-input-number,:host ::ng-deep .survey-design .setting_wrap .item nz-radio-group,:host ::ng-deep .survey-design .setting_wrap .item nz-switch{float:right;font-size:12px}:host ::ng-deep .survey-design .setting_wrap .item nz-input-number{width:50px;margin:3px 0 0}:host ::ng-deep .survey-design .setting_wrap .item>label{color:#2672ff;text-align:right;float:right;margin-right:5px;cursor:pointer}:host ::ng-deep .survey-design .setting_wrap_title{display:inline-block;color:#fff;font-size:12px;padding:5px 20px;border-radius:2px;background-color:#495165;margin:0 0 20px}:host ::ng-deep .survey-design .setting_wrap_model .title{margin:20px 0 0}:host ::ng-deep .survey-design .setting_wrap_option .title{margin:20px 0 0}:host ::ng-deep .survey-design .setting_wrap_option .item span:nth-child(2){float:right}:host ::ng-deep .survey-design .setting_wrap_option .item nz-input-number{float:right;margin:3px 5px 0 0}:host ::ng-deep .vxsurvey-firstform,:host ::ng-deep .vxsurvey-lastform{position:absolute;width:100%;height:calc(100% - 50px);display:inline-block;margin:0;padding:20px;overflow-y:auto;background-color:#fff;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar-track,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar-thumb,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .vxsurvey-form{position:absolute;width:100%;min-width:730px;height:calc(100% - 50px);display:inline-block;margin:0;padding:0 10px 20px 0;overflow-y:auto;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .vxsurvey-form .ant-input,:host ::ng-deep .vxsurvey-form input{border:0}:host ::ng-deep .vxsurvey-form .ant-calendar-picker,:host ::ng-deep .vxsurvey-form .ant-time-picker,:host ::ng-deep .vxsurvey-form .emp_name,:host ::ng-deep .vxsurvey-form .select_cascader{width:350px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap{width:100%;display:flex;flex-direction:row;padding:0 0 5px;cursor:pointer}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option{flex:1;display:flex;flex-direction:row}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-radio-wrapper{padding:7px 0}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-radio-wrapper span:nth-last-child(1){padding:0}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-checkbox-wrapper{padding:8px 0;margin-right:7px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option inline-editor .cke_editable_inline{font-size:13px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .operate{width:30px;line-height:35px;padding:8px 0 0;margin-left:8px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .operate i{display:none;width:20px;height:20px;background-color:#f4f4f4;border-radius:50%;padding:4px;color:rgba(0,0,0,.65);font-size:12px;font-weight:700}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap:nth-last-child(1){padding:0}:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option{flex-direction:column!important}:host ::ng-deep .vxsurvey-form vxsurvey-nps{display:flex;flex-direction:column}:host ::ng-deep .vxsurvey-form vxsurvey-nps .question-wrap_content{padding:0 0 0 15px!important}:host ::ng-deep .vxsurvey-form vxsurvey-nps .basic_nps{padding:0 0 0 8px}:host ::ng-deep .vxsurvey-form vxsurvey-nps .basic_nps .option{width:35px;height:35px;border-radius:50%;border:1px solid #d8d8d8;line-height:35px;margin:5px 12px 10px 0;float:left;text-align:center;font-size:14px;color:#9b9b9b}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text{padding:0;width:520px;font-size:13px}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text span:nth-child(1){float:left}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text span:nth-child(2){float:right}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .question-wrap_content{display:flex}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table{float:left}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table table{width:auto;border-top:1px solid #d8d8d8;border-right:1px solid #d8d8d8}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table table tr td{height:32px;border-left:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;padding:2px 15px}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_vertical{float:left;padding:0 0 0 10px;color:#2672ff;cursor:pointer;display:none}:host ::ng-deep .vxsurvey-form inline-editor .ant-input:focus{background-color:#ececec}:host ::ng-deep .vxsurvey-form .basic_line .line{height:0;width:100%;border-top:1px dashed #aaa;margin:10px 0 8px}:host ::ng-deep .vxsurvey-form .basic_remark{font-size:14px}:host ::ng-deep .vxsurvey-form .basic_evaluation .label{color:#fadb14;font-size:12px;padding:10px 0}:host ::ng-deep .vxsurvey-form .basic_evaluation .tag span{display:inline-block;font-size:12px;color:#aaa;padding:3px 10px;background:#fff;border:1px solid #eaeaea;border-radius:2px;margin-right:5px}:host ::ng-deep .vxsurvey-form .basic_evaluation .tag label{color:#6090df;font-size:13px;margin-left:5px;cursor:pointer}:host ::ng-deep .vxsurvey-form .quesiton-sortable-placeholder{width:100%;height:6px;background:#7b8bed}:host ::ng-deep .page_question{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1}"]
                    }] }
        ];
        /** @nocollapse */
        VXSurveyDesignDetail.ctorParameters = function () {
            return [
                { type: message.NzMessageService },
                { type: i1.NzModalService },
                { type: VXFormAntService },
                { type: VXDialogService },
                { type: DataService },
                { type: VXTransferService },
                { type: core$1.VXFormCommonService }
            ];
        };
        VXSurveyDesignDetail.propDecorators = {
            formCode: [{ type: i0.Input }],
            api: [{ type: i0.Input }],
            saveEvent: [{ type: i0.Output }],
            cancelEvent: [{ type: i0.Output }],
            previewEvent: [{ type: i0.Output }]
        };
        return VXSurveyDesignDetail;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXQuestionType = /** @class */ (function () {
        function VXQuestionType(dataService) {
            this.dataService = dataService;
            this.questionTypeEvent = new i0.EventEmitter();
            this.addPageEvent = new i0.EventEmitter();
            this.saveSurveyEvent = new i0.EventEmitter();
            this.questionTypeList = [
                {
                    label: "选择题",
                    child: [
                        {
                            type: "radio",
                            label: "单 选 题",
                            tag: "default",
                            show: true
                        },
                        {
                            type: "checkbox",
                            label: "多 选 题",
                            show: true
                        },
                        // {
                        //   type:"select_image",
                        //   label:"图片选择"
                        // },
                        // {
                        //   type:"select_voteimage",
                        //   label:"图片投票"
                        // },
                        {
                            type: "radio",
                            label: "文字投票",
                            tag: "votefont",
                            show: true
                        },
                        {
                            type: "dropdown",
                            label: "下 拉 题",
                            show: true
                        },
                        {
                            type: "cascader",
                            label: "级 联 题",
                            tag: "default",
                            show: true
                        },
                        {
                            type: "scaler",
                            label: "量 表 题",
                            tag: "default"
                        },
                    ]
                },
                {
                    label: "填空题",
                    child: [
                        {
                            type: "input",
                            label: "填 空 题",
                            tag: "default",
                            show: true
                        },
                        {
                            type: "input_group",
                            label: "多项填空",
                            show: true
                        },
                        {
                            type: "input",
                            label: "多行文本",
                            tag: "remark",
                            show: true
                        },
                        {
                            type: "blank_horizontal",
                            label: "横向填空"
                        },
                        {
                            type: "blank_table",
                            label: "自动表格"
                        }
                    ]
                },
                {
                    label: "打分排序",
                    child: [
                        {
                            type: "score",
                            label: "打 分 题",
                            show: true
                        },
                        {
                            type: "evaluation",
                            label: "评 价 题",
                            show: true
                        },
                        {
                            type: "score_sort",
                            label: "排 序 题"
                        },
                        {
                            type: "nps",
                            label: "NPS 题",
                            show: true
                        },
                        {
                            type: "proportion",
                            label: "比 重 题",
                            show: false
                        }
                    ]
                },
                {
                    label: "备注说明",
                    child: [
                        {
                            type: "line",
                            label: "分 割 线",
                            show: true
                        },
                        {
                            type: "remark",
                            label: "备注说明",
                            show: true
                        },
                        {
                            type: "other_upload",
                            label: "文件上传"
                        }
                    ]
                },
                {
                    label: "个人信息",
                    child: [
                        {
                            type: "input",
                            label: "姓 名",
                            tag: "name",
                            show: true
                        },
                        {
                            type: "input",
                            label: "手 机",
                            tag: "mobile",
                            show: true
                        },
                        {
                            type: "input",
                            label: "邮 箱",
                            tag: "email",
                            show: true
                        },
                        {
                            type: "radio",
                            label: "性 别",
                            tag: "gender",
                            show: true
                        },
                        {
                            type: "date",
                            label: "日 期",
                            show: true
                        },
                        {
                            type: "time",
                            label: "时 间",
                            show: true
                        },
                        {
                            type: "radio",
                            label: "年 龄",
                            tag: "age",
                            show: true
                        },
                        {
                            type: "radio",
                            label: "学 历",
                            tag: "education",
                            show: true
                        },
                        {
                            type: "cascader",
                            label: "专 业",
                            tag: "major",
                            show: true
                        },
                        {
                            type: "cascader",
                            label: "院 校",
                            tag: "university",
                            show: true
                        },
                        {
                            type: "cascader",
                            label: "行 业",
                            tag: "industry",
                            show: true
                        },
                        {
                            type: "radio",
                            label: "职 业",
                            tag: "occupation",
                            show: true
                        },
                        {
                            type: "emp_address",
                            label: "城市地址"
                        },
                        {
                            type: "emp_geography",
                            label: "地理位置"
                        }
                    ]
                },
                {
                    label: "其他题型",
                    child: [
                        {
                            type: "matrix_radio",
                            label: "矩阵单选",
                            show: true
                        },
                        {
                            type: "matrix_checkbox",
                            label: "矩阵多选",
                            show: true
                        },
                        {
                            type: "matrix_score",
                            label: "矩阵打分",
                            show: true
                        },
                        {
                            type: "matrix_input",
                            label: "矩阵填空",
                            show: true
                        },
                        {
                            type: "matrix_scale",
                            label: "矩阵量表"
                        }
                    ]
                }
            ];
        }
        /**
         * @return {?}
         */
        VXQuestionType.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXQuestionType.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @param {?} type
         * @return {?}
         */
        VXQuestionType.prototype.addQuestionType = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                this.questionTypeEvent.emit(type);
            };
        /**
         * @return {?}
         */
        VXQuestionType.prototype.addPage = /**
         * @return {?}
         */
            function () {
                this.addPageEvent.emit();
            };
        /**
         * @return {?}
         */
        VXQuestionType.prototype.saveSurvey = /**
         * @return {?}
         */
            function () {
                this.saveSurveyEvent.emit();
            };
        VXQuestionType.decorators = [
            { type: i0.Component, args: [{
                        selector: "vx-question-type",
                        template: "<div class=\"buttonList\">\r\n    <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"addPage()\">\u6DFB\u52A0\u5206\u9875</button> \r\n</div>\r\n<div *ngFor=\"let item of questionTypeList;let index=index\">\r\n    <label class=\"title\">{{item.label}}</label>\r\n    <ul cdkDropList  [cdkDropListData]=\"item.child\"> \r\n        <ng-container *ngFor=\"let qtype of item.child\">\r\n            <li class=\"question_type\" *ngIf=\"qtype.show==true\" (click)=\"addQuestionType(qtype)\" cdkDrag >\r\n                <i class=\"icon-other-WenBen\"></i>\r\n                <label>{{qtype.label}}</label>\r\n            </li> \r\n        </ng-container>\r\n    </ul>\r\n</div>",
                        styles: ["::ng-deep .question_type.cdk-drag-preview{text-align:center;line-height:30px;width:200px;height:34px;font-size:12px;border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;color:#7b8bed;position:fixed!important;margin:0!important;z-index:9999!important;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;list-style:none}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder{height:6px;width:100%;margin:10px 0;background-color:#7b8bed}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder i,::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder label{opacity:0}:host .buttonList button:nth-last-child(1){margin:0}:host .title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host ul{padding:0;margin:0;list-style:none}:host ul li{float:left;width:96px;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;border:1px solid #d8d8d8;background-color:#fff;border-radius:2px;margin:0 8px 8px 0;cursor:move;vertical-align:middle}:host ul li i{cursor:move;margin:0 5px}:host ul li label{cursor:move}:host ul li:hover{color:#fff;opacity:.95;border-radius:1.4px;background-image:linear-gradient(to right,#6373da,#7f8ff3)}"]
                    }] }
        ];
        /** @nocollapse */
        VXQuestionType.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXQuestionType.propDecorators = {
            questionTypeEvent: [{ type: i0.Output }],
            addPageEvent: [{ type: i0.Output }],
            saveSurveyEvent: [{ type: i0.Output }]
        };
        return VXQuestionType;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXQuestionList = /** @class */ (function () {
        function VXQuestionList(dataService) {
            this.dataService = dataService;
            this.vxSurveyInfo = {};
            this.questionTypeEvent = new i0.EventEmitter();
            this.addPageEvent = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        VXQuestionList.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXQuestionList.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXQuestionList.prototype.dropQuestion = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (_.get(event, "container.data.questions")) {
                    if (event.previousContainer === event.container) {
                        dragDrop.moveItemInArray(_.get(event, "container.data.questions"), event.previousIndex, event.currentIndex);
                    }
                    else {
                        if (_.get(event, "previousContainer.data.questions")) {
                            dragDrop.transferArrayItem(_.get(event, "previousContainer.data.questions"), _.get(event, "container.data.questions"), event.previousIndex, event.currentIndex);
                        }
                    }
                }
            };
        VXQuestionList.decorators = [
            { type: i0.Component, args: [{
                        selector: "vx-question-list",
                        template: "<div cdkDropListGroup>\r\n    <ng-container *ngFor=\"let page of vxSurveyInfo.pages;let index=index\">\r\n        <div class=\"page\" cdkDropList [cdkDropListData]=\"page\" (cdkDropListDropped)=\"dropQuestion($event)\">\r\n            <label class=\"page_title\">{{page.name}}</label>\r\n            <ng-container *ngFor=\"let quetion of page.questions\">\r\n                <div class=\"page_question\" cdkDrag>\r\n                    <i class=\"icon-other-WenBen\"></i>\r\n                    <label>{{quetion.templateOptions.label}}</label>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n</div>",
                        styles: [":host .page_title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host .page_question{width:100%;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;background-color:#fff;border-radius:2px;margin:0 8px 3px 0;cursor:move;vertical-align:middle}:host .page_question i{cursor:move;margin:0 5px}:host .page_question label{cursor:move}"]
                    }] }
        ];
        /** @nocollapse */
        VXQuestionList.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXQuestionList.propDecorators = {
            vxSurveyInfo: [{ type: i0.Input }],
            questionTypeEvent: [{ type: i0.Output }],
            addPageEvent: [{ type: i0.Output }]
        };
        return VXQuestionList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingCascader = /** @class */ (function () {
        function VXSurveySettingCascader() {
            this.questionField = {
                key: "",
                type: "cascader",
                templateOptions: {
                    label: "",
                    required: false
                }
            };
            this.questionField = {
                key: "",
                type: "cascader",
                templateOptions: {
                    label: "",
                    required: false
                }
            };
        }
        Object.defineProperty(VXSurveySettingCascader.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingCascader.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingCascader.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingCascader.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-cascader",
                        template: " \n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>    \n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingCascader.ctorParameters = function () { return []; };
        VXSurveySettingCascader.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingCascader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingCheckBox = /** @class */ (function () {
        function VXSurveySettingCheckBox() {
            this.questionField = {
                key: "",
                type: "checkbox",
                templateOptions: {
                    label: "",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1",
                        min: 0,
                        //最少选N项
                        max: 0,
                    },
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingCheckBox.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingCheckBox.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingCheckBox.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingCheckBox.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-checkbox",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div  class=\"item\">\n          <span>\u5E03\u5C40</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['setting']['layout']\">\n              <label nz-radio-button nzValue=\"1\">\u5355\u5217</label>\n              <label nz-radio-button nzValue=\"2\">2\u5217</label>\n              <label nz-radio-button nzValue=\"3\">3\u5217</label>\n            </nz-radio-group>\n      </div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div  class=\"item\">\n          <span>\u968F\u673A\u6392\u5217</span> \n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['random']\"></nz-switch>\n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div> \n      <div class=\"item\">\n          <span>\u9898\u76EE\u603B\u5206\u6570</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n      </div>\n      <div  class=\"item\">\n          <span>\u6700\u5C11\u53EF\u9009</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['min']\"></nz-input-number>\n      </div>\n      <div  class=\"item\">\n          <span>\u6700\u591A\u53EF\u9009</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\"  [(ngModel)]=\"questionField.templateOptions['setting']['max']\"></nz-input-number>\n      </div>  \n    </div> \n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div> \n      </ng-container>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingCheckBox.ctorParameters = function () { return []; };
        VXSurveySettingCheckBox.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingCheckBox;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingDropdown = /** @class */ (function () {
        function VXSurveySettingDropdown() {
            this.questionField = {
                key: "",
                type: "dropdown",
                templateOptions: {
                    label: "",
                    setting: {
                        score: 0
                    },
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingDropdown.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingDropdown.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingDropdown.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingDropdown.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-dropdown",
                        template: "\n  <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>\n      <div  class=\"item\">\n          <span>\u9898\u76EE\u603B\u5206\u6570</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n      </div>  \n    </div> \n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" style=\"width: 40px;\"  [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div> \n      </ng-container>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingDropdown.ctorParameters = function () { return []; };
        VXSurveySettingDropdown.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingDropdown;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingInput = /** @class */ (function () {
        function VXSurveySettingInput() {
            this.questionField = {
                key: "",
                type: "input",
                templateOptions: {
                    label: "",
                    type: "default",
                    setting: {
                        minLength: 0,
                        maxLength: 0,
                    }
                }
            };
        }
        Object.defineProperty(VXSurveySettingInput.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingInput.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingInput.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingInput.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-input",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div>\n      <div class=\"item\">\n          <span>\u8F93\u5165\u6846\u5927\u5C0F</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['setting']['size']\">\n              <label nz-radio-button nzValue=\"large\">\u5927</label>\n              <label nz-radio-button nzValue=\"default\">\u4E2D</label>\n              <label nz-radio-button nzValue=\"small\">\u5C0F</label>\n            </nz-radio-group>\n      </div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u5185\u5BB9\u9650\u5236</span> \n          <nz-select [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['type']\">\n            <nz-option nzValue=\"default\" nzLabel=\"\u4E0D\u9650\"></nz-option>\n            <nz-option nzValue=\"number\" nzLabel=\"\u6570\u5B57\"></nz-option>\n            <nz-option nzValue=\"alphabet\" nzLabel=\"\u5B57\u6BCD\"></nz-option> \n            <nz-option nzValue=\"chinese\" nzLabel=\"\u4E2D\u6587\"></nz-option> \n            <nz-option nzValue=\"email\" nzLabel=\"\u90AE\u7BB1\"></nz-option> \n            <nz-option nzValue=\"mobile\" nzLabel=\"\u624B\u673A\"></nz-option> \n          </nz-select>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u6700\u5C11\u586B\u5199</span>\n          <span>\u5B57</span>\n          <nz-input-number [nzMin]=\"0\"  [nzMax]=\"9999999\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['minLength']\"></nz-input-number>\n      </div>  \n      <div class=\"item q_sore\">\n          <span>\u6700\u591A\u586B\u5199</span>\n          <span>\u5B57</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"9999999\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['maxLength']\"></nz-input-number>\n      </div> \n    </div>  \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingInput.ctorParameters = function () { return []; };
        VXSurveySettingInput.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingInput;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingLine = /** @class */ (function () {
        function VXSurveySettingLine() {
            this.questionField = {
                key: "",
                type: "line"
            };
        }
        Object.defineProperty(VXSurveySettingLine.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingLine.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingLine.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingLine.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-line",
                        template: "\n    <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6682\u65E0</span> \n      </div> \n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingLine.ctorParameters = function () { return []; };
        VXSurveySettingLine.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingLine;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingRadio = /** @class */ (function () {
        function VXSurveySettingRadio() {
            this.questionField = {
                key: "",
                type: "radio",
                templateOptions: {
                    label: "",
                    required: false,
                    setting: {
                        score: 0,
                        random: false,
                        layout: "1"
                    },
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingRadio.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingRadio.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingRadio.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-radio",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div  class=\"item\">\n          <span>\u5E03\u5C40</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['setting']['layout']\">\n              <label nz-radio-button nzValue=\"1\">\u5355\u5217</label>\n              <label nz-radio-button nzValue=\"2\">2\u5217</label>\n              <label nz-radio-button nzValue=\"3\">3\u5217</label>\n            </nz-radio-group>\n      </div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div  class=\"item\">\n          <span>\u968F\u673A\u6392\u5217</span> \n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['random']\"></nz-switch>\n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div> \n      <div  class=\"item\">\n          <span>\u9898\u76EE\u603B\u5206\u6570</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n      </div>  \n    </div> \n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" style=\"width: 40px;\"  [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div> \n      </ng-container> \n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingRadio.ctorParameters = function () { return []; };
        VXSurveySettingRadio.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingRadio;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingRemark = /** @class */ (function () {
        function VXSurveySettingRemark() {
            this.questionField = {
                key: "",
                type: "remark",
                templateOptions: {
                    label: ""
                }
            };
        }
        Object.defineProperty(VXSurveySettingRemark.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingRemark.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingRemark.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingRemark.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-remark",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingRemark.ctorParameters = function () { return []; };
        VXSurveySettingRemark.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingRemark;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingScaler = /** @class */ (function () {
        function VXSurveySettingScaler() {
            this.questionField = {
                key: "",
                type: "scaler",
                templateOptions: {
                    label: "",
                    description: "",
                    maxLength: 500,
                    minLength: 0,
                    max: 0,
                    min: 0,
                    precision: 0,
                    placeholder: "",
                    required: false,
                    tips: "",
                    pattern: "",
                    options: []
                },
                origin: {
                    refdatasourcetype: "",
                    datatype: ""
                }
            };
        }
        Object.defineProperty(VXSurveySettingScaler.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingScaler.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingScaler.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingScaler.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-scaler",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div>\n      <div class=\"item\">\n          <span>\u9898\u578B</span>\n          <nz-radio-group [nzSize]=\"'small'\">\n              <label nz-radio-button nzValue=\"A\">\u5355\u9009</label>\n              <label nz-radio-button nzValue=\"B\">\u591A\u9009</label>\n            </nz-radio-group>\n      </div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>  \n    </div>\n    <div class=\"setting_wrap_model\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <div  class=\"item\">\n          <span>\u5E03\u5C40</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['layout']\">\n              <label nz-radio-button nzValue=\"row1\">\u5355\u5217</label>\n              <label nz-radio-button nzValue=\"row2\">2\u5217</label>\n              <label nz-radio-button nzValue=\"row3\">3\u5217</label>\n            </nz-radio-group>\n      </div>\n      <div  class=\"item\">\n          <span>\u968F\u673A\u6392\u5217</span> \n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['order']\"></nz-switch>\n      </div>\n    </div>\n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u5217\u8868</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" style=\"width: 40px;\"  [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div>\n      <div class=\"item q_other\">\n          <span>\u6DFB\u52A0\u8F93\u5165\u6846</span>\n          <nz-switch nzSize=\"small\"  [(ngModel)]=\"item['input']\"></nz-switch>\n      </div>\n      </ng-container>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingScaler.ctorParameters = function () { return []; };
        VXSurveySettingScaler.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingScaler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingScore = /** @class */ (function () {
        function VXSurveySettingScore() {
            this.questionField = {
                key: "",
                type: "score",
                templateOptions: {
                    type: "start",
                    label: "",
                    required: false,
                    setting: {
                        label: "",
                        score: 0,
                        min: 0,
                        max: 5
                    },
                }
            };
        }
        Object.defineProperty(VXSurveySettingScore.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingScore.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingScore.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingScore.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-score",
                        template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.required\"></nz-switch> \n    </div>\n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>\n    <div  class=\"item\">\n        <span>\u9898\u76EE\u603B\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.setting.score\"></nz-input-number>\n    </div>\n    <div  class=\"item\">\n        <span>\u6700\u4F4E\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"10\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.setting.min\"></nz-input-number>\n    </div>\n    <div  class=\"item\">\n        <span>\u6700\u9AD8\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"10\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.setting.max\"></nz-input-number>\n    </div>\n    <div class=\"item\">\n      <span>\u56FE\u6807</span>\n        <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField.templateOptions.type\">\n            <label nz-radio-button nzValue=\"start\">\u661F</label>\n            <label nz-radio-button nzValue=\"heart\">\u5FC3</label>\n            <label nz-radio-button nzValue=\"good\">\u8D5E</label> \n            <label nz-radio-button nzValue=\"other\">\u5176</label>\n          </nz-radio-group>\n    </div>\n    <div class=\"item\" *ngIf=\"questionField.templateOptions.type=='other'\">\n      <span>\u81EA\u5B9A\u4E49\u6587\u5B57</span>  \n      <input nz-input [(ngModel)]=\"questionField.templateOptions.setting.label\" maxlength=\"1\" nzSize=\"small\" />\n    </div> \n  </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingScore.ctorParameters = function () { return []; };
        VXSurveySettingScore.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingScore;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingDate = /** @class */ (function () {
        function VXSurveySettingDate() {
            this.questionField = {
                key: "",
                type: "date",
                templateOptions: {
                    label: "",
                    required: false
                }
            };
        }
        Object.defineProperty(VXSurveySettingDate.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingDate.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingDate.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingDate.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-date",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div> \n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingDate.ctorParameters = function () { return []; };
        VXSurveySettingDate.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingDate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingTime = /** @class */ (function () {
        function VXSurveySettingTime() {
            this.questionField = {
                key: "",
                type: "time",
                templateOptions: {
                    label: "",
                    required: false
                }
            };
        }
        Object.defineProperty(VXSurveySettingTime.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingTime.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingTime.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingTime.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-time",
                        template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n    </div>  \n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>  \n  </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingTime.ctorParameters = function () { return []; };
        VXSurveySettingTime.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingTime;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingNPS = /** @class */ (function () {
        function VXSurveySettingNPS() {
            this.questionField = {
                key: "",
                type: "nps",
                templateOptions: {
                    label: "",
                    required: false,
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingNPS.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingNPS.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingNPS.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingNPS.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-nps",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>  \n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingNPS.ctorParameters = function () { return []; };
        VXSurveySettingNPS.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingNPS;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingProportion = /** @class */ (function () {
        function VXSurveySettingProportion() {
            this.questionField = {
                key: "",
                type: "proportion",
                templateOptions: {
                    label: "",
                    description: "",
                    maxLength: 500,
                    minLength: 0,
                    max: 0,
                    min: 0,
                    precision: 0,
                    placeholder: "",
                    required: false,
                    tips: "",
                    pattern: "",
                    score: 0,
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingProportion.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingProportion.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingProportion.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingProportion.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-proportion",
                        template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n    </div> \n    <div  class=\"item\">\n        <span>\u9898\u76EE\u603B\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['score']\"></nz-input-number>\n    </div>\n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>  \n  </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingProportion.ctorParameters = function () { return []; };
        VXSurveySettingProportion.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingProportion;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingEvaluation = /** @class */ (function () {
        function VXSurveySettingEvaluation() {
            this.questionField = {
                key: "",
                type: "evaluation",
                templateOptions: {
                    label: "",
                    required: false,
                    setting: {
                        score: 0,
                    },
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingEvaluation.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingEvaluation.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingEvaluation.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingEvaluation.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-evaluation",
                        template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n    </div> \n    <div  class=\"item\">\n        <span>\u9898\u76EE\u603B\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n    </div>\n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>  \n  </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingEvaluation.ctorParameters = function () { return []; };
        VXSurveySettingEvaluation.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingEvaluation;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingMatrixRadio = /** @class */ (function () {
        function VXSurveySettingMatrixRadio() {
            this.questionField = {
                key: "",
                type: "matrix_radio",
                templateOptions: {
                    label: "",
                    required: false,
                    options: [],
                    subtitle: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingMatrixRadio.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingMatrixRadio.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingMatrixRadio.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingMatrixRadio.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-matrix_radio",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingMatrixRadio.ctorParameters = function () { return []; };
        VXSurveySettingMatrixRadio.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingMatrixRadio;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingMatrixCheckBox = /** @class */ (function () {
        function VXSurveySettingMatrixCheckBox() {
            this.questionField = {
                key: "",
                type: "matrix_checkbox",
                templateOptions: {
                    label: "",
                    required: false,
                    options: [],
                    subtitle: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingMatrixCheckBox.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingMatrixCheckBox.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingMatrixCheckBox.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingMatrixCheckBox.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-matrix_checkbox",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingMatrixCheckBox.ctorParameters = function () { return []; };
        VXSurveySettingMatrixCheckBox.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingMatrixCheckBox;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingMatrixScore = /** @class */ (function () {
        function VXSurveySettingMatrixScore() {
            this.questionField = {
                key: "",
                type: "matrix_score",
                templateOptions: {
                    label: "",
                    required: false,
                    options: [],
                    subtitle: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingMatrixScore.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingMatrixScore.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingMatrixScore.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingMatrixScore.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-matrix_score",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingMatrixScore.ctorParameters = function () { return []; };
        VXSurveySettingMatrixScore.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingMatrixScore;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingMatrixInput = /** @class */ (function () {
        function VXSurveySettingMatrixInput() {
            this.questionField = {
                key: "",
                type: "matrix_input",
                templateOptions: {
                    label: "",
                    required: false,
                    options: [],
                    subtitle: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingMatrixInput.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingMatrixInput.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingMatrixInput.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingMatrixInput.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-matrix_input",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingMatrixInput.ctorParameters = function () { return []; };
        VXSurveySettingMatrixInput.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingMatrixInput;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingInputGroup = /** @class */ (function () {
        function VXSurveySettingInputGroup() {
            this.questionField = {
                key: "",
                type: "input_group",
                templateOptions: {
                    label: "",
                    required: false,
                    options: []
                }
            };
        }
        Object.defineProperty(VXSurveySettingInputGroup.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingInputGroup.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingInputGroup.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingInputGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-setting-input_group",
                        template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>  \n    </div> \n     \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingInputGroup.ctorParameters = function () { return []; };
        VXSurveySettingInputGroup.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingInputGroup;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveySettingTemplate = /** @class */ (function () {
        function VXSurveySettingTemplate(componentFactoryResolver, changeDetectorRef) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.changeDetectorRef = changeDetectorRef;
            this.dynamicComponents = {
                "radio": VXSurveySettingRadio,
                "checkbox": VXSurveySettingCheckBox,
                "dropdown": VXSurveySettingDropdown,
                "input": VXSurveySettingInput,
                "line": VXSurveySettingLine,
                "remark": VXSurveySettingRemark,
                "cascader": VXSurveySettingCascader,
                "scaler": VXSurveySettingScaler,
                "score": VXSurveySettingScore,
                "date": VXSurveySettingDate,
                "time": VXSurveySettingTime,
                "nps": VXSurveySettingNPS,
                "proportion": VXSurveySettingProportion,
                "evaluation": VXSurveySettingEvaluation,
                "matrix_radio": VXSurveySettingMatrixRadio,
                "matrix_checkbox": VXSurveySettingMatrixCheckBox,
                "matrix_score": VXSurveySettingMatrixScore,
                "matrix_input": VXSurveySettingMatrixInput,
                "input_group": VXSurveySettingInputGroup
                // "select_single": VXSettingSelectSingle,
                // "select_multiple": VXSettingSelectMultiple,
                // "select_image": VXSettingSelectImage,
                // "select_voteimage": VXSettingSelectVoteImage,
                // "select_votefont": VXSettingSelectVoteFont,
                // "select_dropdown": VXSettingSelectDropdown,
                // "select_cascader": VXSettingSelectCascader,
                // "select_scaler": VXSettingSelectScaler,
                // "select_classification": VXSettingSelectClassification,
                // "blank": VXSettingBlank,
                // "blank_multiple": VXSettingBlankMultiple,
                // "blank_horizontal": VXSettingBlankHorizontal,
                // "blank_table": VXSettingBlankTable,
                // //"score": VXSettingScore,
                // "score_sort": VXSettingScoreSort,
                // "score_nps": VXSettingScoreNPS,
                // "score_proportion": VXSettingScoreProportion,
                // "score_evaluation": VXSettingScoreEvaluation,
                // "other_page": VXSettingOtherPage,
                // "other_line": VXSettingOtherLine,
                // "other_upload": VXSettingOtherUpload,
                // "other_remark": VXSettingOtherRemark,
                // "emp_name": VXSettingEmpName,
                // "emp_mobile": VXSettingEmpMobile,
                // "emp_email": VXSettingEmpEmail,
                // "emp_gender": VXSettingEmpGender,
                // "emp_date": VXSettingEmpDate,
                // "emp_time": VXSettingEmpTime,
                // "emp_age": VXSettingEmpAge,
                // "emp_education": VXSettingEmpEducation,
                // "emp_major": VXSettingEmpmajor,
                // "emp_university": VXSettingEmpUniversity,
                // "emp_industry": VXSettingIndustry,
                // "emp_occupation": VXSettingEmpOccupation,
                // "emp_address": VXSettingEmpAddress,
                // "emp_geography": VXSettingEmpGeography,
                // "matrix_select": VXSettingMatrixSelect,
                // "matrix_score": VXSettingMatrixScore,
                // "matrix_blank": VXSettingMatrixBlank,
                // "matrix_scale": VXSettingMatrixScale
            };
            this.questionField = {
                key: "",
                type: "radio",
                templateOptions: {
                    label: "",
                    description: "",
                    maxLength: 500,
                    minLength: 0,
                    max: 0,
                    min: 0,
                    precision: 0,
                    placeholder: "",
                    required: false,
                    tips: "",
                    pattern: "",
                    options: []
                },
                origin: {
                    refdatasourcetype: "",
                    datatype: ""
                }
            };
        }
        Object.defineProperty(VXSurveySettingTemplate.prototype, "field", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != null && value != undefined) {
                    this.questionField = value;
                }
                if (this.componentHost) {
                    this.componentHost.clear();
                    if (this.questionField != undefined && this.questionField != null && this.questionField.type != undefined && this.questionField.type != null) {
                        /** @type {?} */
                        var compFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponents[this.questionField.type]);
                        this.component = this.componentHost.createComponent(compFactory);
                        this.component.instance.field = this.questionField;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXSurveySettingTemplate.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveySettingTemplate.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        VXSurveySettingTemplate.decorators = [
            { type: i0.Component, args: [{
                        selector: "setting-template",
                        template: "\n    \n  \n  <ng-container #componentHost></ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveySettingTemplate.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ChangeDetectorRef }
            ];
        };
        VXSurveySettingTemplate.propDecorators = {
            componentHost: [{ type: i0.ViewChild, args: ['componentHost', { read: i0.ViewContainerRef, static: true },] }],
            field: [{ type: i0.Input }]
        };
        return VXSurveySettingTemplate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyEditCascaderItem = /** @class */ (function () {
        function VXSurveyEditCascaderItem(dataService) {
            this.dataService = dataService;
            this.row = {
                cascader: 1,
                current: "",
                showadd: false,
                data: []
            };
            this.title = "";
            this.itemEvent = new i0.EventEmitter();
            this.addOptionEvent = new i0.EventEmitter();
            this.delOptionEvent = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        VXSurveyEditCascaderItem.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveyEditCascaderItem.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @param {?} e
         * @return {?}
         */
        VXSurveyEditCascaderItem.prototype.itemClick = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.row.current = e.value;
                this.itemEvent.emit(e);
            };
        /**
         * @return {?}
         */
        VXSurveyEditCascaderItem.prototype.addOption = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var index = 0;
                if (this.row != null && this.row.data != null && this.row.data.length > 0) {
                    index = this.row.data.length;
                }
                index++;
                /** @type {?} */
                var cascader = this.row.cascader;
                this.row.data.push({
                    value: cascader + "-" + index,
                    label: "\u9009\u9879" + index,
                    children: []
                });
                this.addOptionEvent.emit();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        VXSurveyEditCascaderItem.prototype.delOption = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.delOptionEvent.emit(e);
            };
        VXSurveyEditCascaderItem.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-editcascader-item",
                        template: "\n    <div class=\"cascader_col_title\">\n      {{title}}\n    </div>\n    <div class=\"cascader_col_item vxsurvey-scrollbar\">\n      <ng-container *ngFor=\"let item of row.data;let index=index;\">\n        <div class=\"cascader_col_wrap\" [ngClass]=\"{' wrap_active':item.value == row.current}\" (click)=\"itemClick(item)\">\n      \n                <div class=\"cascader_col_wrap_order\">{{index+1}}.</div>\n                <div class=\"cascader_col_wrap_input\">\n                    <input type=\"text\" [(ngModel)]=\"item.label\" maxlength=\"50\">\n                </div>\n                <div class=\"cascader_col_wrap_limit\">\n                    {{item.label.length}}/50\n                </div>\n                <div class=\"cascader_col_wrap_delete\" (click)=\"delOption(item)\">\n                    <span><i class=\"icon-KT-Close\"></i></span>\n                </div> \n        </div>\n      </ng-container>\n    </div>\n    <div class=\"cascader_col_add\" *ngIf=\"row?.showadd==true\"(click)=\"addOption()\">\n      <span></span>\u6DFB\u52A0\u9009\u9879\n    </div>  \n  "
                    }] }
        ];
        /** @nocollapse */
        VXSurveyEditCascaderItem.ctorParameters = function () {
            return [
                { type: DataService }
            ];
        };
        VXSurveyEditCascaderItem.propDecorators = {
            row: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            itemEvent: [{ type: i0.Output }],
            addOptionEvent: [{ type: i0.Output }],
            delOptionEvent: [{ type: i0.Output }]
        };
        return VXSurveyEditCascaderItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContenteditableModel = /** @class */ (function () {
        // changeBySelf = false;
        // instance: any;
        // cursor: any;
        // splitIndex;
        // debounceTimeout: any;
        // lastRange: any;
        // editableEle: any;
        // priousV: string;
        // languagetype = 1;
        // private lastViewModel: any;
        function ContenteditableModel(elRef, zone) {
            this.elRef = elRef;
            this.zone = zone;
            this.model = {};
            this.hasI18n = false;
            this.change = new i0.EventEmitter();
            // @Output() limetValue: EventEmitter<any> = new EventEmitter<any>();
            this.blur = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.debounce = "";
            this.placeholder = '';
            this.brMode = false;
        }
        /**
         * @return {?}
         */
        ContenteditableModel.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                //this.initEditor();
            };
        // initEditor() {
        //   let config = {
        //     startupFocus: false,
        //     toolbar: 'Basic',
        //     allowedContent: true,
        //     placeholder: this.placeholder,
        //     extraPlugins: '',
        //     toolbar_Basic: [
        //       [
        //         'Font',
        //         'FontSize',
        //         'Bold',
        //         'Underline',
        //         'Italic',
        //         '-',
        //         'JustifyLeft',
        //         'JustifyCenter',
        //         'JustifyRight',
        //         'TextColor',
        //         'BGColor',
        //       ],
        //     ]
        //   };
        //   if (this.hasI18n) {
        //     const pluginName = (config.extraPlugins ? ',' : '') + 'i18n';
        //     config.extraPlugins = config.extraPlugins + pluginName;
        //     config.toolbar_Basic[0].unshift('Chinese', '-', 'English');
        //   }
        //   // console.log('config==', config);
        //   if (this.brMode) {
        //     config['enterMode'] = CKEDITOR.ENTER_BR;
        //     config['shiftEnterMode'] = CKEDITOR.ENTER_BR;
        //   }
        //   this.instance = CKEDITOR.inline(this.elRef.nativeElement, config);
        //   // console.log('this.instance==', this.instance);
        //   // 设置国际化语言及侦听
        //   // this.languagetype = this.instance.element.getAttribute('data-i18n') || this.languagetype;
        //   // this.instance.on('i18n', (evt: any) => {
        //   //   // console.log('i18n change= ', evt);
        //   //   if (evt.data != this.languagetype) {
        //   //     this.languagetype = evt.data;
        //   //     this.updateEditorValue();
        //   //   }
        //   // });
        //   // 更新表单值
        //   this.updateEditorValue();
        //   // CKEditor blur event
        //   this.instance.on('blur', (evt: any) => {
        //     this.blur.emit(evt);
        //   });
        //   // CKEditor focus event
        //   this.instance.on('focus', (evt: any) => {
        //     this.focus.emit(evt);
        //   });
        //   this.instance.on('change', (evt: any) => {
        //     // console.log('onchange == ', evt);
        //     let value = this.instance.getData();
        //     if (this.model !== value) {
        //       // Debounce update
        //       if (this.debounce) {
        //         if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
        //         this.debounceTimeout = setTimeout(() => {
        //           this.updateValue(this.instance.getData());
        //           this.debounceTimeout = null;
        //         }, parseInt(this.debounce, 10));
        //       } else {
        //         this.updateValue(value);
        //       }
        //     }
        //   });
        // }
        // doFocus() {
        //   setTimeout(() => {
        //     this.instance.focus();
        //   }, 0);
        // }
        // insertAfter(newElement, targetElement) {
        //   var parent = targetElement.parentNode;
        //   if (parent.lastChild == targetElement) {
        //     parent.appendChild(newElement);
        //   } else {
        //     parent.insertBefore(newElement, targetElement.nextSibling);
        //   }
        // }
        // initEditor() {
        //   let config = {
        //     startupFocus: false,
        //     toolbar: 'Basic',
        //     allowedContent: true,
        //     placeholder: this.placeholder,
        //     extraPlugins: '',
        //     toolbar_Basic: [
        //       [
        //         'Font',
        //         'FontSize',
        //         'Bold',
        //         'Underline',
        //         'Italic',
        //         '-',
        //         'JustifyLeft',
        //         'JustifyCenter',
        //         'JustifyRight',
        //         'TextColor',
        //         'BGColor',
        //       ],
        //     ]
        //   };
        //   if (this.hasI18n) {
        //     const pluginName = (config.extraPlugins ? ',' : '') + 'i18n';
        //     config.extraPlugins = config.extraPlugins + pluginName;
        //     config.toolbar_Basic[0].unshift('Chinese', '-', 'English');
        //   }
        //   // console.log('config==', config);
        //   if (this.brMode) {
        //     config['enterMode'] = CKEDITOR.ENTER_BR;
        //     config['shiftEnterMode'] = CKEDITOR.ENTER_BR;
        //   }
        //   this.instance = CKEDITOR.inline(this.elRef.nativeElement, config);
        //   // console.log('this.instance==', this.instance);
        //   // 设置国际化语言及侦听
        //   // this.languagetype = this.instance.element.getAttribute('data-i18n') || this.languagetype;
        //   // this.instance.on('i18n', (evt: any) => {
        //   //   // console.log('i18n change= ', evt);
        //   //   if (evt.data != this.languagetype) {
        //   //     this.languagetype = evt.data;
        //   //     this.updateEditorValue();
        //   //   }
        //   // });
        //   // 更新表单值
        //   this.updateEditorValue();
        //   // CKEditor blur event
        //   this.instance.on('blur', (evt: any) => {
        //     this.blur.emit(evt);
        //   });
        //   // CKEditor focus event
        //   this.instance.on('focus', (evt: any) => {
        //     this.focus.emit(evt);
        //   });
        //   this.instance.on('change', (evt: any) => {
        //     // console.log('onchange == ', evt);
        //     let value = this.instance.getData();
        //     if (this.model !== value) {
        //       // Debounce update
        //       if (this.debounce) {
        //         if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
        //         this.debounceTimeout = setTimeout(() => {
        //           this.updateValue(this.instance.getData());
        //           this.debounceTimeout = null;
        //         }, parseInt(this.debounce, 10));
        //       } else {
        //         this.updateValue(value);
        //       }
        //     }
        //   });
        // }
        // doFocus() {
        //   setTimeout(() => {
        //     this.instance.focus();
        //   }, 0);
        // }
        // insertAfter(newElement, targetElement) {
        //   var parent = targetElement.parentNode;
        //   if (parent.lastChild == targetElement) {
        //     parent.appendChild(newElement);
        //   } else {
        //     parent.insertBefore(newElement, targetElement.nextSibling);
        //   }
        // }
        /**
         * @param {?} changes
         * @return {?}
         */
        ContenteditableModel.prototype.ngOnChanges =
            // initEditor() {
            //   let config = {
            //     startupFocus: false,
            //     toolbar: 'Basic',
            //     allowedContent: true,
            //     placeholder: this.placeholder,
            //     extraPlugins: '',
            //     toolbar_Basic: [
            //       [
            //         'Font',
            //         'FontSize',
            //         'Bold',
            //         'Underline',
            //         'Italic',
            //         '-',
            //         'JustifyLeft',
            //         'JustifyCenter',
            //         'JustifyRight',
            //         'TextColor',
            //         'BGColor',
            //       ],
            //     ]
            //   };
            //   if (this.hasI18n) {
            //     const pluginName = (config.extraPlugins ? ',' : '') + 'i18n';
            //     config.extraPlugins = config.extraPlugins + pluginName;
            //     config.toolbar_Basic[0].unshift('Chinese', '-', 'English');
            //   }
            //   // console.log('config==', config);
            //   if (this.brMode) {
            //     config['enterMode'] = CKEDITOR.ENTER_BR;
            //     config['shiftEnterMode'] = CKEDITOR.ENTER_BR;
            //   }
            //   this.instance = CKEDITOR.inline(this.elRef.nativeElement, config);
            //   // console.log('this.instance==', this.instance);
            //   // 设置国际化语言及侦听
            //   // this.languagetype = this.instance.element.getAttribute('data-i18n') || this.languagetype;
            //   // this.instance.on('i18n', (evt: any) => {
            //   //   // console.log('i18n change= ', evt);
            //   //   if (evt.data != this.languagetype) {
            //   //     this.languagetype = evt.data;
            //   //     this.updateEditorValue();
            //   //   }
            //   // });
            //   // 更新表单值
            //   this.updateEditorValue();
            //   // CKEditor blur event
            //   this.instance.on('blur', (evt: any) => {
            //     this.blur.emit(evt);
            //   });
            //   // CKEditor focus event
            //   this.instance.on('focus', (evt: any) => {
            //     this.focus.emit(evt);
            //   });
            //   this.instance.on('change', (evt: any) => {
            //     // console.log('onchange == ', evt);
            //     let value = this.instance.getData();
            //     if (this.model !== value) {
            //       // Debounce update
            //       if (this.debounce) {
            //         if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
            //         this.debounceTimeout = setTimeout(() => {
            //           this.updateValue(this.instance.getData());
            //           this.debounceTimeout = null;
            //         }, parseInt(this.debounce, 10));
            //       } else {
            //         this.updateValue(value);
            //       }
            //     }
            //   });
            // }
            // doFocus() {
            //   setTimeout(() => {
            //     this.instance.focus();
            //   }, 0);
            // }
            // insertAfter(newElement, targetElement) {
            //   var parent = targetElement.parentNode;
            //   if (parent.lastChild == targetElement) {
            //     parent.appendChild(newElement);
            //   } else {
            //     parent.insertBefore(newElement, targetElement.nextSibling);
            //   }
            // }
            /**
             * @param {?} changes
             * @return {?}
             */
            function (changes) {
                // this.lastViewModel = this.model;
                // this.updateEditorValue();
            };
        // onKeyup() {
        //   var value = this.elRef.nativeElement.innerHTML;
        //   this.lastViewModel = value;
        //   this.change.emit(value);
        // }
        // updateValue(value: any) {
        //   // this.zone.run(() => {
        //   //   this.lastViewModel = value;
        //   //   this.changeBySelf = true;
        //   //   if (_.isArray(this.model)) {
        //   //     const found = this.model.find(item => {
        //   //       return item.languagetype == this.languagetype; //zhcn
        //   //     });
        //   //     if (found) {
        //   //       found.name = value;
        //   //     }
        //   //     this.change.emit(this.model);
        //   //   } else {
        //   //     this.change.emit(value);
        //   //   }
        //   // });
        // }
        // refreshView() {
        //   if (this.instance) this.instance.setData(this.lastViewModel);
        //   // this.elRef.nativeElement.innerHTML = this.lastViewModel
        // }
        // updateEditorValue() {
        //   // if (this.instance) {
        //   //   let model = this.model;
        //   //   // console.log('this.model==', this.model);
        //   //   if (_.isArray(this.model)) {
        //   //     let foundItem = this.model.find(item => {
        //   //       return item.languagetype == this.languagetype; //zhcn
        //   //     });
        //   //     if (!foundItem) {
        //   //       foundItem = { languagetype: this.languagetype, id: 0, name: '' };
        //   //       this.model.push(foundItem);
        //   //     }
        //   //     model = foundItem.name;
        //   //   }
        //   //   this.instance.setData(model);
        //   // }
        // }
        // empty() {
        //   this.model = '';
        //   this.lastViewModel = '';
        //   this.instance.setData('');
        // }
        /**
         * On component destroy
         */
        // onKeyup() {
        //   var value = this.elRef.nativeElement.innerHTML;
        //   this.lastViewModel = value;
        //   this.change.emit(value);
        // }
        // updateValue(value: any) {
        //   // this.zone.run(() => {
        //   //   this.lastViewModel = value;
        //   //   this.changeBySelf = true;
        //   //   if (_.isArray(this.model)) {
        //   //     const found = this.model.find(item => {
        //   //       return item.languagetype == this.languagetype; //zhcn
        //   //     });
        //   //     if (found) {
        //   //       found.name = value;
        //   //     }
        //   //     this.change.emit(this.model);
        //   //   } else {
        //   //     this.change.emit(value);
        //   //   }
        //   // });
        // }
        // refreshView() {
        //   if (this.instance) this.instance.setData(this.lastViewModel);
        //   // this.elRef.nativeElement.innerHTML = this.lastViewModel
        // }
        // updateEditorValue() {
        //   // if (this.instance) {
        //   //   let model = this.model;
        //   //   // console.log('this.model==', this.model);
        //   //   if (_.isArray(this.model)) {
        //   //     let foundItem = this.model.find(item => {
        //   //       return item.languagetype == this.languagetype; //zhcn
        //   //     });
        //   //     if (!foundItem) {
        //   //       foundItem = { languagetype: this.languagetype, id: 0, name: '' };
        //   //       this.model.push(foundItem);
        //   //     }
        //   //     model = foundItem.name;
        //   //   }
        //   //   this.instance.setData(model);
        //   // }
        // }
        // empty() {
        //   this.model = '';
        //   this.lastViewModel = '';
        //   this.instance.setData('');
        // }
        /**
         * On component destroy
         * @return {?}
         */
        ContenteditableModel.prototype.ngOnDestroy =
            // onKeyup() {
            //   var value = this.elRef.nativeElement.innerHTML;
            //   this.lastViewModel = value;
            //   this.change.emit(value);
            // }
            // updateValue(value: any) {
            //   // this.zone.run(() => {
            //   //   this.lastViewModel = value;
            //   //   this.changeBySelf = true;
            //   //   if (_.isArray(this.model)) {
            //   //     const found = this.model.find(item => {
            //   //       return item.languagetype == this.languagetype; //zhcn
            //   //     });
            //   //     if (found) {
            //   //       found.name = value;
            //   //     }
            //   //     this.change.emit(this.model);
            //   //   } else {
            //   //     this.change.emit(value);
            //   //   }
            //   // });
            // }
            // refreshView() {
            //   if (this.instance) this.instance.setData(this.lastViewModel);
            //   // this.elRef.nativeElement.innerHTML = this.lastViewModel
            // }
            // updateEditorValue() {
            //   // if (this.instance) {
            //   //   let model = this.model;
            //   //   // console.log('this.model==', this.model);
            //   //   if (_.isArray(this.model)) {
            //   //     let foundItem = this.model.find(item => {
            //   //       return item.languagetype == this.languagetype; //zhcn
            //   //     });
            //   //     if (!foundItem) {
            //   //       foundItem = { languagetype: this.languagetype, id: 0, name: '' };
            //   //       this.model.push(foundItem);
            //   //     }
            //   //     model = foundItem.name;
            //   //   }
            //   //   this.instance.setData(model);
            //   // }
            // }
            // empty() {
            //   this.model = '';
            //   this.lastViewModel = '';
            //   this.instance.setData('');
            // }
            /**
             * On component destroy
             * @return {?}
             */
            function () {
                // if (this.debounceTimeout) {
                //   clearTimeout(this.debounceTimeout);
                //   this.debounceTimeout = null;
                // }
                // if (this.instance) {
                //   setTimeout(() => {
                //     this.instance.removeAllListeners();
                //     let dom = document.querySelector('#cke_' + this.instance.name);
                //     if (dom) {
                //       dom.parentNode.removeChild(dom);
                //     }
                //     CKEDITOR.instances[this.instance.name].destroy(true);
                //     this.instance.destroy(true);
                //     this.instance = null;
                //   });
                // }
            };
        ContenteditableModel.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[contenteditableModel]',
                    },] }
        ];
        /** @nocollapse */
        ContenteditableModel.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.NgZone }
            ];
        };
        ContenteditableModel.propDecorators = {
            model: [{ type: i0.Input, args: ['contenteditableModel',] }],
            hasI18n: [{ type: i0.Input }],
            change: [{ type: i0.Output, args: ['contenteditableModelChange',] }],
            blur: [{ type: i0.Output }],
            focus: [{ type: i0.Output }],
            debounce: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            brMode: [{ type: i0.Input }]
        };
        return ContenteditableModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EDITOR_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(( /**
         * @return {?}
         */function () { return InlineEditorComponent; })),
        multi: true,
    };
    // <div
    //       [(contenteditableModel)]="value"
    //       [ngClass]="active==true?'inline_editor':'inline_editor_hidden'"
    //       role="textbox"
    //       [attr.contenteditable]="disabled ? 'false' : 'true'"
    //       [class.disabled]="disabled"
    //       (blur)="handleBlur($event)"
    //       (focus)="handleFocus($event)"
    //       [brMode]="brMode"
    //       [placeholder]="placeholder"
    //       [debounce]="debounce"
    //       (contenteditableModelChange)="onContenteditableModelChange($event)"
    //     ></div>
    var InlineEditorComponent = /** @class */ (function () {
        //@ViewChild(ContenteditableModel,{static:true}) contenteditableModel: ContenteditableModel|undefined;
        function InlineEditorComponent() {
            this._value = "";
            this._classList = {};
            this.debounce = '100';
            this.placeholder = '';
            this.className = 'inline_editor';
            this.brMode = true;
            this.blur = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.disabled = false;
            this.data = "";
            this.active = false;
        }
        //   focus() {
        //     this.contenteditableModel.doFocus();
        //   }
        //   focus() {
        //     this.contenteditableModel.doFocus();
        //   }
        /**
         * @return {?}
         */
        InlineEditorComponent.prototype.ngOnInit =
            //   focus() {
            //     this.contenteditableModel.doFocus();
            //   }
            /**
             * @return {?}
             */
            function () {
                // if (this.className) {
                //   var splits = this.className.split(' ');
                //   for (var i = 0; i < splits.length; i++) {
                //     this._classList[splits[i]] = true;
                //   }
                // }
            };
        /**
         * @param {?} evt
         * @return {?}
         */
        InlineEditorComponent.prototype.handleFocus = /**
         * @param {?} evt
         * @return {?}
         */
            function (evt) {
                this.focus.emit(evt);
            };
        /**
         * @param {?} evt
         * @return {?}
         */
        InlineEditorComponent.prototype.handleBlur = /**
         * @param {?} evt
         * @return {?}
         */
            function (evt) {
                this.blur.emit(evt);
            };
        Object.defineProperty(InlineEditorComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                if (v !== this._value) {
                    this._value = v;
                    this.onChange(v);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} evt
         * @return {?}
         */
        InlineEditorComponent.prototype.onContenteditableModelChange = /**
         * @param {?} evt
         * @return {?}
         */
            function (evt) {
                this.onTouched();
                this.onChange(evt);
            };
        /**
         * Implements ControlValueAccessor
         */
        /**
         * Implements ControlValueAccessor
         * @param {?} value
         * @return {?}
         */
        InlineEditorComponent.prototype.writeValue = /**
         * Implements ControlValueAccessor
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._value = value;
                //if (this.contenteditableModel && this.contenteditableModel.instance) {
                //this.contenteditableModel.instance.setData(value);
                //}
            };
        /**
         * @param {?} _
         * @return {?}
         */
        InlineEditorComponent.prototype.onChange = /**
         * @param {?} _
         * @return {?}
         */
            function (_$$1) { };
        /**
         * @return {?}
         */
        InlineEditorComponent.prototype.onTouched = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} fn
         * @return {?}
         */
        InlineEditorComponent.prototype.registerOnChange = /**
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
        InlineEditorComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        InlineEditorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'inline-editor',
                        providers: [EDITOR_VALUE_ACCESSOR],
                        template: "\n    <input *ngIf=\"active==true\"  nz-input [(ngModel)]=\"value\" /> \n    <div *ngIf=\"active==false\" \n      class=\"inline_editor_show\"\n      [innerHTML]=\"value | safeHtml\">\n    </div>\n  ",
                        styles: ["\n      :host ::ng-deep {\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        InlineEditorComponent.ctorParameters = function () { return []; };
        InlineEditorComponent.propDecorators = {
            debounce: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            className: [{ type: i0.Input }],
            brMode: [{ type: i0.Input }],
            blur: [{ type: i0.Output }],
            focus: [{ type: i0.Output }],
            disabled: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            active: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return InlineEditorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyFirstPage = /** @class */ (function () {
        function VXSurveyFirstPage() {
            this.firstpage = {
                title: "问卷标题",
                text: "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！"
            };
        }
        /**
         * @return {?}
         */
        VXSurveyFirstPage.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveyFirstPage.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        VXSurveyFirstPage.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-first-page",
                        template: "<div class=\"first-content\">\r\n    <div class=\"title\">\r\n        <textarea rows=\"1\" nz-input [(ngModel)]=\"firstpage.title\"></textarea>\r\n    </div>\r\n    <div class=\"body\">\r\n        <textarea nz-input [(ngModel)]=\"firstpage.text\"></textarea>\r\n    </div>\r\n</div>",
                        styles: [":host{width:100%;height:100%}:host .first-content{display:inline-block;width:100%;height:100%;padding:20px 0}:host .first-content .title{margin:0 auto}:host .first-content .title textarea{text-align:center;border:0;resize:none}:host .first-content .title textarea:hover{background:#ececec}:host .first-content .body{margin:40px 0}:host .first-content .body textarea{border:0;resize:none}:host .first-content .body textarea:hover{background:#ececec}"]
                    }] }
        ];
        /** @nocollapse */
        VXSurveyFirstPage.ctorParameters = function () { return []; };
        VXSurveyFirstPage.propDecorators = {
            firstpage: [{ type: i0.Input }]
        };
        return VXSurveyFirstPage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXSurveyLastPage = /** @class */ (function () {
        function VXSurveyLastPage() {
            this.lastpage = {
                title: "",
                text: ""
            };
        }
        /**
         * @return {?}
         */
        VXSurveyLastPage.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXSurveyLastPage.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        VXSurveyLastPage.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxsurvey-last-page",
                        template: "<div class=\"last-content\">\r\n    <div class=\"image\">\r\n        <img src=\"/assets/image/survey-end.png\" />\r\n    </div>\r\n    <div class=\"body\">\r\n        \u95EE\u5377\u5230\u6B64\u7ED3\u675F\uFF0C\u611F\u8C22\u60A8\u7684\u53C2\u4E0E\uFF01\r\n    </div>\r\n</div>",
                        styles: [":host{width:100%;height:100%}:host .last-content{display:inline-block;width:100%;height:100%;padding:120px 0}:host .last-content .image{margin:0 auto;text-align:center}:host .last-content .body{margin:40px 0;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        VXSurveyLastPage.ctorParameters = function () { return []; };
        VXSurveyLastPage.propDecorators = {
            lastpage: [{ type: i0.Input }]
        };
        return VXSurveyLastPage;
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
    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitized) {
            this.sanitized = sanitized;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SafeHtmlPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this.sanitized.bypassSecurityTrustHtml(value);
            };
        SafeHtmlPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'safeHtml' },] }
        ];
        /** @nocollapse */
        SafeHtmlPipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return SafeHtmlPipe;
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
        VXQuestionType,
        VXQuestionList,
        VXSurveySettingTemplate,
        VXSurveySettingCascader,
        VXSurveySettingCheckBox,
        VXSurveySettingDropdown,
        VXSurveySettingInput,
        VXSurveySettingLine,
        VXSurveySettingRadio,
        VXSurveySettingRemark,
        VXSurveySettingScaler,
        VXSurveySettingScore,
        VXSurveySettingDate,
        VXSurveySettingTime,
        VXSurveySettingNPS,
        VXSurveySettingProportion,
        VXSurveySettingEvaluation,
        VXSurveySettingMatrixRadio,
        VXSurveySettingMatrixCheckBox,
        VXSurveySettingMatrixScore,
        VXSurveySettingMatrixInput,
        VXSurveySettingInputGroup,
        VXSurveyEditEvaluation,
        VXSurveyEditCascader,
        VXSurveyEditCascaderItem,
        VXSurveyFirstPage,
        VXSurveyLastPage
    ];
    //公开的
    /** @type {?} */
    var publicComponent = [
        VXSurveyDesignDetail,
        VXSurveyEditEvaluation
    ];
    /** @type {?} */
    var PIPES = [
        SafeHtmlPipe
    ];
    /** @type {?} */
    var PROVIDES = [
        VXRadioService,
        VXCheckboxService,
        VXInputService,
        VXOtherService,
        VXCascaderService,
        VXMatrixService
    ];
    var ɵ0 = ngZorroAntd.zh_CN, ɵ1 = icons$1;
    var VXSurveyModule = /** @class */ (function () {
        function VXSurveyModule() {
        }
        VXSurveyModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: __spread([
                            FIELD_TYPE_COMPONENTS,
                            entryComponent,
                            publicComponent,
                            ReplaceLinePipe,
                            ContenteditableModel,
                            InlineEditorComponent
                        ], PIPES),
                        imports: [
                            http.HttpModule,
                            i1$1.HttpClientModule,
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
                        exports: __spread([core.TranslateModule, publicComponent, ContenteditableModel, InlineEditorComponent], PIPES),
                        providers: __spread([
                            { provide: ngZorroAntd.NZ_I18N, useValue: ɵ0 },
                            { provide: ngZorroAntd.NZ_ICONS, useValue: ɵ1 },
                            _HttpClient,
                            VXFormAntService,
                            VXDialogService
                        ], PROVIDES)
                    },] }
        ];
        return VXSurveyModule;
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

    exports.VXSurveyModule = VXSurveyModule;
    exports.VXSurveyRadioGroup = VXSurveyRadioGroup;
    exports.VXSurveyDragDrop = VXSurveyDragDrop;
    exports.VXSurveyRadio = VXSurveyRadio;
    exports.VXSurveyCheckBox = VXSurveyCheckBox;
    exports.VXSurveyDropdown = VXSurveyDropdown;
    exports.VXSurveyCascader = VXSurveyCascader;
    exports.VXSurveyScaler = VXSurveyScaler;
    exports.VXSurveyScore = VXSurveyScore;
    exports.VXSurveyLine = VXSurveyLine;
    exports.VXSurveyRemark = VXSurveyRemark;
    exports.VXSurveyInput = VXSurveyInput;
    exports.VXSurveyDate = VXSurveyDate;
    exports.VXSurveyTime = VXSurveyTime;
    exports.VXSurveyNPS = VXSurveyNPS;
    exports.VXSurveyProportion = VXSurveyProportion;
    exports.VXSurveyEvaluation = VXSurveyEvaluation;
    exports.VXSurveyMatrixRadio = VXSurveyMatrixRadio;
    exports.VXSurveyMatrixCheckBox = VXSurveyMatrixCheckBox;
    exports.VXSurveyMatrixScore = VXSurveyMatrixScore;
    exports.VXSurveyMatrixInput = VXSurveyMatrixInput;
    exports.VXSurveyInputGroup = VXSurveyInputGroup;
    exports.VXFormWrapperFormField = VXFormWrapperFormField;
    exports.ɵd = BOOTSTRAP_VXFORM_CONFIG;
    exports.ɵc = FIELD_TYPE_COMPONENTS;
    exports.ɵl = VXSurveySettingCascader;
    exports.ɵm = VXSurveySettingCheckBox;
    exports.ɵu = VXSurveySettingDate;
    exports.ɵn = VXSurveySettingDropdown;
    exports.ɵy = VXSurveySettingEvaluation;
    exports.ɵo = VXSurveySettingInput;
    exports.ɵbd = VXSurveySettingInputGroup;
    exports.ɵp = VXSurveySettingLine;
    exports.ɵba = VXSurveySettingMatrixCheckBox;
    exports.ɵbc = VXSurveySettingMatrixInput;
    exports.ɵz = VXSurveySettingMatrixRadio;
    exports.ɵbb = VXSurveySettingMatrixScore;
    exports.ɵw = VXSurveySettingNPS;
    exports.ɵx = VXSurveySettingProportion;
    exports.ɵq = VXSurveySettingRadio;
    exports.ɵr = VXSurveySettingRemark;
    exports.ɵs = VXSurveySettingScaler;
    exports.ɵt = VXSurveySettingScore;
    exports.ɵv = VXSurveySettingTime;
    exports.ɵbg = VXSurveyEditCascaderItem;
    exports.ɵbf = VXSurveyEditCascader;
    exports.ɵbe = VXSurveyEditEvaluation;
    exports.ɵbh = VXSurveyFirstPage;
    exports.ɵbs = ContenteditableModel;
    exports.ɵbt = InlineEditorComponent;
    exports.ɵbi = VXSurveyLastPage;
    exports.ɵj = VXQuestionList;
    exports.ɵg = VXQuestionType;
    exports.ɵk = VXSurveySettingTemplate;
    exports.ɵbj = VXSurveyDesignDetail;
    exports.ɵi = _HttpClient;
    exports.ɵbu = SafeHtmlPipe;
    exports.ɵh = DataService;
    exports.ɵb = VXDialogService;
    exports.ɵe = VXFormFieldGroup;
    exports.ɵf = VXFormFieldRepeat;
    exports.ɵbo = VXCascaderService;
    exports.ɵbm = VXCheckboxService;
    exports.ɵbn = VXInputService;
    exports.ɵbq = VXMatrixService;
    exports.ɵbp = VXOtherService;
    exports.ɵbl = VXRadioService;
    exports.ɵbr = ReplaceLinePipe;
    exports.ɵa = VXFormAntService;
    exports.ɵbk = VXTransferService;
    exports.ɵbv = getFieldPro;
    exports.ɵca = maxValidationMessage;
    exports.ɵby = maxlengthValidationMessage;
    exports.ɵbz = minValidationMessage;
    exports.ɵbx = minlengthValidationMessage;
    exports.ɵbw = requiredValidationMessage;
    exports.ɵcb = validationConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=vx-form-survey.umd.js.map