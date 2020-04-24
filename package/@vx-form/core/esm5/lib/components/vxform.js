/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional, EventEmitter, Output, Attribute, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { VXFormBuilder } from "../services/vxform.builder";
import { VXFormConfig } from "../services/vxform.config";
import { assignModelValue, isNullOrUndefined, wrapProperty, clone, defineHiddenProp, getKeyPath } from "../utils";
import { debounceTime } from "rxjs/operators";
import { TestBaseUtils } from '../tools/test';
var VXForm = /** @class */ (function () {
    function VXForm(vxFormBuilder, vxFormConfig, test, immutable, parentFormGroup) {
        var _this = this;
        this.vxFormBuilder = vxFormBuilder;
        this.vxFormConfig = vxFormConfig;
        this.test = test;
        this.parentFormGroup = parentFormGroup;
        this.modelChange = new EventEmitter();
        this.status = 0;
        this.immutable = false;
        this.modelChangeSubs = [];
        this.gogo = true;
        this.enableCheckExprDebounce = false;
        this.checkExpressionChange$ = this.modelChange
            .pipe(debounceTime(this.enableCheckExprDebounce ? 100 : 0))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.enableCheckExprDebounce = true;
            _this.checkExpressionChange();
            _this.enableCheckExprDebounce = false;
        }));
        if (immutable !== null) {
        }
        this.immutable = immutable !== null || !!vxFormConfig.extras.immutable;
        // let linces = localStorage.getItem("VX_FORM_LINCES")
        // if(linces!=undefined && linces!=null && linces!=""){
        //   this.gogo = this.test.t1(linces);
        // } 
    }
    Object.defineProperty(VXForm.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model || {};
        },
        set: /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            this._model = this.immutable ? clone(model) : model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXForm.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fields || [];
        },
        set: /**
         * @param {?} fields
         * @return {?}
         */
        function (fields) {
            this._fields = this.immutable ? clone(fields) : fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXForm.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._options = this.immutable ? clone(options) : options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXForm.prototype, "content", {
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            if (content && content.nativeElement.nextSibling) {
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXForm.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.vxFormConfig.extras.checkExpressionOn === "changeDetectionCheck") {
            this.checkExpressionChange();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXForm.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.fields || changes.form || changes.model) {
            this.form = this.form || new FormGroup({});
            this.setOptions();
            this.clearModelSubscriptions();
            this.vxFormBuilder.buildForm(this.form, this.fields, this.model, this.options);
            this.trackModelChanges(this.fields);
            this.options.updateInitialValue();
        }
    };
    /**
     * @return {?}
     */
    VXForm.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearModelSubscriptions();
        this.checkExpressionChange$.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXForm.prototype.changeModel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        assignModelValue(this.model, event.key.split("."), event.value);
        this.modelChange.emit(clone(this.model));
    };
    /**
     * @return {?}
     */
    VXForm.prototype.setOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.resetModel) {
            this.options.resetModel = (/**
             * @param {?=} model
             * @return {?}
             */
            function (model) {
                model = clone(isNullOrUndefined(model) ? _this.initialModel : model);
                if (_this.model) {
                    Object.keys(_this.model).forEach((/**
                     * @param {?} k
                     * @return {?}
                     */
                    function (k) { return delete _this.model[k]; }));
                    Object.assign(_this.model, model || {});
                }
                ((/** @type {?} */ (_this.options)))._buildForm();
                if (_this.options.parentForm &&
                    _this.options.parentForm.control === _this.form) {
                    _this.options.parentForm.resetForm(model);
                }
                else {
                    _this.form.reset(model);
                }
            });
        }
        if (!this.options.parentForm && this.parentFormGroup) {
            defineHiddenProp(this.options, "parentForm", this.parentFormGroup);
            wrapProperty(this.options.parentForm, "submitted", (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var firstChange = _a.firstChange;
                if (!firstChange) {
                    ((/** @type {?} */ (_this.options)))._markForCheck({
                        fieldGroup: _this.fields,
                        model: _this.model,
                        formControl: _this.form,
                        options: _this.options
                    });
                }
            }));
        }
        if (!this.options.updateInitialValue) {
            this.options.updateInitialValue = (/**
             * @return {?}
             */
            function () {
                return (_this.initialModel = clone(_this.model));
            });
        }
        if (!((/** @type {?} */ (this.options)))._buildForm) {
            ((/** @type {?} */ (this.options)))._buildForm = (/**
             * @param {?=} emitModelChange
             * @return {?}
             */
            function (emitModelChange) {
                if (emitModelChange === void 0) { emitModelChange = false; }
                _this.clearModelSubscriptions();
                _this.vxFormBuilder.buildForm(_this.form, _this.fields, _this.model, _this.options);
                _this.trackModelChanges(_this.fields);
                if (emitModelChange) {
                    _this.modelChange.emit(clone(_this.model));
                }
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    VXForm.prototype.checkExpressionChange = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.options && ((/** @type {?} */ (this.options)))._checkField) {
            ((/** @type {?} */ (this.options)))._checkField({
                fieldGroup: this.fields,
                model: this.model,
                formControl: this.form,
                options: this.options
            });
        }
    };
    /**
     * @private
     * @param {?} fields
     * @param {?=} rootKey
     * @return {?}
     */
    VXForm.prototype.trackModelChanges = /**
     * @private
     * @param {?} fields
     * @param {?=} rootKey
     * @return {?}
     */
    function (fields, rootKey) {
        var _this = this;
        if (rootKey === void 0) { rootKey = []; }
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            field.status = _this.status;
            if (field.key && !field.fieldGroup) {
                /** @type {?} */
                var control_1 = field.formControl;
                /** @type {?} */
                var valueChanges = control_1.valueChanges;
                var _a = field.modelOptions, updateOn = _a.updateOn, debounce = _a.debounce;
                if ((!updateOn || updateOn === "change") &&
                    debounce &&
                    debounce.default > 0) {
                    valueChanges = control_1.valueChanges.pipe(debounceTime(debounce.default));
                }
                _this.modelChangeSubs.push(valueChanges.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (((/** @type {?} */ (control_1)))._onChange.length > 1) {
                        control_1.patchValue(value, { emitEvent: false });
                    }
                    if (field.parsers && field.parsers.length > 0) {
                        field.parsers.forEach((/**
                         * @param {?} parserFn
                         * @return {?}
                         */
                        function (parserFn) { return (value = parserFn(value)); }));
                    }
                    _this.changeModel({
                        key: tslib_1.__spread(rootKey, getKeyPath(field)).join("."),
                        value: value
                    });
                })));
            }
            if (field.fieldGroup && field.fieldGroup.length > 0) {
                _this.trackModelChanges(field.fieldGroup, field.key ? tslib_1.__spread(rootKey, getKeyPath(field)) : rootKey);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    VXForm.prototype.clearModelSubscriptions = /**
     * @private
     * @return {?}
     */
    function () {
        this.modelChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) { return sub.unsubscribe(); }));
        this.modelChangeSubs = [];
    };
    /**
     * @param {?} field
     * @return {?}
     */
    VXForm.prototype.checkFieldShow = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var result = true;
        if (field && field.hasOwnProperty("show")) {
            result = field.show;
        }
        return result;
    };
    Object.defineProperty(VXForm.prototype, "checkTest", {
        get: /**
         * @return {?}
         */
        function () {
            return this.gogo;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.gogo = value;
        },
        enumerable: true,
        configurable: true
    });
    VXForm.decorators = [
        { type: Component, args: [{
                    selector: "vxform",
                    template: "\n    <ng-container *ngIf=\"checkTest\">\n    <ng-container *ngFor=\"let field of fields\">\n      <vxform-field\n        *ngIf=\"checkFieldShow(field)\"\n        hide-deprecation\n        [form]=\"field.form\"\n        [options]=\"field.options\"\n        [model]=\"field.model\"\n        [field]=\"field\"\n      >\n      </vxform-field>\n    </ng-container>\n    <ng-container #content>\n      <ng-content></ng-content>\n    </ng-container>\n    </ng-container>\n  ",
                    host: {
                        "[class]": "class"
                    },
                    providers: [VXFormBuilder, TestBaseUtils]
                }] }
    ];
    /** @nocollapse */
    VXForm.ctorParameters = function () { return [
        { type: VXFormBuilder },
        { type: VXFormConfig },
        { type: TestBaseUtils },
        { type: undefined, decorators: [{ type: Attribute, args: ["immutable",] }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
    VXForm.propDecorators = {
        form: [{ type: Input }],
        model: [{ type: Input }],
        fields: [{ type: Input }],
        options: [{ type: Input }],
        class: [{ type: Input }],
        modelChange: [{ type: Output }],
        content: [{ type: ViewChild, args: ["content", { static: true },] }],
        status: [{ type: Input }]
    };
    return VXForm;
}());
export { VXForm };
if (false) {
    /** @type {?} */
    VXForm.prototype.form;
    /** @type {?} */
    VXForm.prototype.class;
    /** @type {?} */
    VXForm.prototype.modelChange;
    /** @type {?} */
    VXForm.prototype.status;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.immutable;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype._model;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype._fields;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype._options;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.initialModel;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.modelChangeSubs;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.gogo;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.enableCheckExprDebounce;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.checkExpressionChange$;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.vxFormBuilder;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.vxFormConfig;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.test;
    /**
     * @type {?}
     * @private
     */
    VXForm.prototype.parentFormGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Z4Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUVMLFFBQVEsRUFDUixZQUFZLEVBQ1osTUFBTSxFQUVOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU0xRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDWCxNQUFNLFVBQVUsQ0FBQztBQUVsQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QztJQWlGRSxnQkFDVSxhQUE0QixFQUM1QixZQUEwQixFQUMxQixJQUFrQixFQUNGLFNBQVMsRUFDYixlQUFtQztRQUx6RCxpQkFlQztRQWRTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFNBQUksR0FBSixJQUFJLENBQWM7UUFFTixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUEvQi9DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVF2QyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFLbEIsb0JBQWUsR0FBbUIsRUFBRSxDQUFDO1FBQ3JDLFNBQUksR0FBVyxJQUFJLENBQUM7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ICBPbkNoYW5nZXMsXHJcbiAgSW5wdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBdHRyaWJ1dGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhGb3JtT3B0aW9ucyxcclxuICBWWEZvcm1PcHRpb25zQ2FjaGVcclxufSBmcm9tIFwiLi92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRm9ybUJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvdnhmb3JtLmJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgVlhGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICBhc3NpZ25Nb2RlbFZhbHVlLFxyXG4gIGlzTnVsbE9yVW5kZWZpbmVkLFxyXG4gIHdyYXBQcm9wZXJ0eSxcclxuICBjbG9uZSxcclxuICBkZWZpbmVIaWRkZW5Qcm9wLFxyXG4gIGdldEtleVBhdGhcclxufSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFRlc3RCYXNlVXRpbHMgfSBmcm9tICcuLi90b29scy90ZXN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hlY2tUZXN0XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIj5cclxuICAgICAgPHZ4Zm9ybS1maWVsZFxyXG4gICAgICAgICpuZ0lmPVwiY2hlY2tGaWVsZFNob3coZmllbGQpXCJcclxuICAgICAgICBoaWRlLWRlcHJlY2F0aW9uXHJcbiAgICAgICAgW2Zvcm1dPVwiZmllbGQuZm9ybVwiXHJcbiAgICAgICAgW29wdGlvbnNdPVwiZmllbGQub3B0aW9uc1wiXHJcbiAgICAgICAgW21vZGVsXT1cImZpZWxkLm1vZGVsXCJcclxuICAgICAgICBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvdnhmb3JtLWZpZWxkPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICNjb250ZW50PlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbY2xhc3NdXCI6IFwiY2xhc3NcIlxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbVlhGb3JtQnVpbGRlcixUZXN0QmFzZVV0aWxzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtIGltcGxlbWVudHMgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cCB8IEZvcm1BcnJheTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZWwobW9kZWw6IGFueSkge1xyXG4gICAgdGhpcy5fbW9kZWwgPSB0aGlzLmltbXV0YWJsZSA/IGNsb25lKG1vZGVsKSA6IG1vZGVsO1xyXG4gIH1cclxuICBnZXQgbW9kZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9kZWwgfHwge307XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWVsZHMoZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdKSB7XHJcbiAgICB0aGlzLl9maWVsZHMgPSB0aGlzLmltbXV0YWJsZSA/IGNsb25lKGZpZWxkcykgOiBmaWVsZHM7XHJcbiAgfVxyXG4gIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9maWVsZHMgfHwgW107XHJcbiAgICAgXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IFZYRm9ybU9wdGlvbnMpIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLmltbXV0YWJsZSA/IGNsb25lKG9wdGlvbnMpIDogb3B0aW9ucztcclxuICB9XHJcbiAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50XCIsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KFxyXG4gICAgY29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHtcclxuICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQubmF0aXZlRWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc3RhdHVzOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGltbXV0YWJsZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX21vZGVsOiBhbnk7XHJcbiAgcHJpdmF0ZSBfZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdO1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IFZYRm9ybU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBpbml0aWFsTW9kZWw6IGFueTtcclxuICBwcml2YXRlIG1vZGVsQ2hhbmdlU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGdvZ286Ym9vbGVhbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBlbmFibGVDaGVja0V4cHJEZWJvdW5jZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY2hlY2tFeHByZXNzaW9uQ2hhbmdlJCA9IHRoaXMubW9kZWxDaGFuZ2VcclxuICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmVuYWJsZUNoZWNrRXhwckRlYm91bmNlID8gMTAwIDogMCkpXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lbmFibGVDaGVja0V4cHJEZWJvdW5jZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tFeHByZXNzaW9uQ2hhbmdlKCk7XHJcbiAgICAgIHRoaXMuZW5hYmxlQ2hlY2tFeHByRGVib3VuY2UgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdnhGb3JtQnVpbGRlcjogVlhGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcsXHJcbiAgICBwcml2YXRlIHRlc3Q6VGVzdEJhc2VVdGlscyxcclxuICAgIEBBdHRyaWJ1dGUoXCJpbW11dGFibGVcIikgaW1tdXRhYmxlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgaWYgKGltbXV0YWJsZSAhPT0gbnVsbCkge1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW1tdXRhYmxlID0gaW1tdXRhYmxlICE9PSBudWxsIHx8ICEhdnhGb3JtQ29uZmlnLmV4dHJhcy5pbW11dGFibGU7XHJcbiAgICAvLyBsZXQgbGluY2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWWF9GT1JNX0xJTkNFU1wiKVxyXG4gICAgLy8gaWYobGluY2VzIT11bmRlZmluZWQgJiYgbGluY2VzIT1udWxsICYmIGxpbmNlcyE9XCJcIil7XHJcbiAgICAvLyAgIHRoaXMuZ29nbyA9IHRoaXMudGVzdC50MShsaW5jZXMpO1xyXG4gICAgLy8gfSBcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICh0aGlzLnZ4Rm9ybUNvbmZpZy5leHRyYXMuY2hlY2tFeHByZXNzaW9uT24gPT09IFwiY2hhbmdlRGV0ZWN0aW9uQ2hlY2tcIikge1xyXG4gICAgICB0aGlzLmNoZWNrRXhwcmVzc2lvbkNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZmllbGRzIHx8IGNoYW5nZXMuZm9ybSB8fCBjaGFuZ2VzLm1vZGVsKSB7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybSB8fCBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICAgIHRoaXMuY2xlYXJNb2RlbFN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgdGhpcy52eEZvcm1CdWlsZGVyLmJ1aWxkRm9ybShcclxuICAgICAgICB0aGlzLmZvcm0sXHJcbiAgICAgICAgdGhpcy5maWVsZHMsXHJcbiAgICAgICAgdGhpcy5tb2RlbCxcclxuICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50cmFja01vZGVsQ2hhbmdlcyh0aGlzLmZpZWxkcyk7XHJcbiAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVJbml0aWFsVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbGVhck1vZGVsU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgdGhpcy5jaGVja0V4cHJlc3Npb25DaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb2RlbChldmVudDogeyBrZXk6IHN0cmluZzsgdmFsdWU6IGFueSB9KSB7XHJcbiAgICBhc3NpZ25Nb2RlbFZhbHVlKHRoaXMubW9kZWwsIGV2ZW50LmtleS5zcGxpdChcIi5cIiksIGV2ZW50LnZhbHVlKTtcclxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChjbG9uZSh0aGlzLm1vZGVsKSk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKCkgeyBcclxuICAgIGlmICghdGhpcy5vcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb25zLnJlc2V0TW9kZWwpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnJlc2V0TW9kZWwgPSAobW9kZWw/OiBhbnkpID0+IHtcclxuICAgICAgICBtb2RlbCA9IGNsb25lKGlzTnVsbE9yVW5kZWZpbmVkKG1vZGVsKSA/IHRoaXMuaW5pdGlhbE1vZGVsIDogbW9kZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGVsKS5mb3JFYWNoKGsgPT4gZGVsZXRlIHRoaXMubW9kZWxba10pO1xyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm1vZGVsLCBtb2RlbCB8fCB7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoPFZYRm9ybU9wdGlvbnNDYWNoZT50aGlzLm9wdGlvbnMpLl9idWlsZEZvcm0oKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudEZvcm0gJiZcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnRGb3JtLmNvbnRyb2wgPT09IHRoaXMuZm9ybVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudEZvcm0ucmVzZXRGb3JtKG1vZGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KG1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucGFyZW50Rm9ybSAmJiB0aGlzLnBhcmVudEZvcm1Hcm91cCkge1xyXG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKHRoaXMub3B0aW9ucywgXCJwYXJlbnRGb3JtXCIsIHRoaXMucGFyZW50Rm9ybUdyb3VwKTtcclxuICAgICAgd3JhcFByb3BlcnR5KHRoaXMub3B0aW9ucy5wYXJlbnRGb3JtLCBcInN1Ym1pdHRlZFwiLCAoeyBmaXJzdENoYW5nZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdENoYW5nZSkge1xyXG4gICAgICAgICAgKDxWWEZvcm1PcHRpb25zQ2FjaGU+dGhpcy5vcHRpb25zKS5fbWFya0ZvckNoZWNrKHtcclxuICAgICAgICAgICAgZmllbGRHcm91cDogdGhpcy5maWVsZHMsXHJcbiAgICAgICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxyXG4gICAgICAgICAgICBmb3JtQ29udHJvbDogdGhpcy5mb3JtLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMudXBkYXRlSW5pdGlhbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVJbml0aWFsVmFsdWUgPSAoKSA9PlxyXG4gICAgICAgICh0aGlzLmluaXRpYWxNb2RlbCA9IGNsb25lKHRoaXMubW9kZWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISg8VlhGb3JtT3B0aW9uc0NhY2hlPnRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSkge1xyXG4gICAgICAoPFZYRm9ybU9wdGlvbnNDYWNoZT50aGlzLm9wdGlvbnMpLl9idWlsZEZvcm0gPSAoXHJcbiAgICAgICAgZW1pdE1vZGVsQ2hhbmdlID0gZmFsc2VcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhck1vZGVsU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudnhGb3JtQnVpbGRlci5idWlsZEZvcm0oXHJcbiAgICAgICAgICB0aGlzLmZvcm0sXHJcbiAgICAgICAgICB0aGlzLmZpZWxkcyxcclxuICAgICAgICAgIHRoaXMubW9kZWwsXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudHJhY2tNb2RlbENoYW5nZXModGhpcy5maWVsZHMpO1xyXG5cclxuICAgICAgICBpZiAoZW1pdE1vZGVsQ2hhbmdlKSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoY2xvbmUodGhpcy5tb2RlbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tFeHByZXNzaW9uQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiAoPFZYRm9ybU9wdGlvbnNDYWNoZT50aGlzLm9wdGlvbnMpLl9jaGVja0ZpZWxkKSB7XHJcbiAgICAgICg8VlhGb3JtT3B0aW9uc0NhY2hlPnRoaXMub3B0aW9ucykuX2NoZWNrRmllbGQoe1xyXG4gICAgICAgIGZpZWxkR3JvdXA6IHRoaXMuZmllbGRzLFxyXG4gICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxyXG4gICAgICAgIGZvcm1Db250cm9sOiB0aGlzLmZvcm0sXHJcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFja01vZGVsQ2hhbmdlcyhcclxuICAgIGZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIHJvb3RLZXk6IHN0cmluZ1tdID0gW11cclxuICApIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgZmllbGQuc3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgIGlmIChmaWVsZC5rZXkgJiYgIWZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZmllbGQuZm9ybUNvbnRyb2w7XHJcbiAgICAgICAgbGV0IHZhbHVlQ2hhbmdlcyA9IGNvbnRyb2wudmFsdWVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zdCB7IHVwZGF0ZU9uLCBkZWJvdW5jZSB9ID0gZmllbGQubW9kZWxPcHRpb25zO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICghdXBkYXRlT24gfHwgdXBkYXRlT24gPT09IFwiY2hhbmdlXCIpICYmXHJcbiAgICAgICAgICBkZWJvdW5jZSAmJlxyXG4gICAgICAgICAgZGVib3VuY2UuZGVmYXVsdCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHZhbHVlQ2hhbmdlcyA9IGNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZShkZWJvdW5jZS5kZWZhdWx0KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2VTdWJzLnB1c2goXHJcbiAgICAgICAgICB2YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKChjb250cm9sIGFzIGFueSkuX29uQ2hhbmdlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICBjb250cm9sLnBhdGNoVmFsdWUodmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpZWxkLnBhcnNlcnMgJiYgZmllbGQucGFyc2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgZmllbGQucGFyc2Vycy5mb3JFYWNoKHBhcnNlckZuID0+ICh2YWx1ZSA9IHBhcnNlckZuKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1vZGVsKHtcclxuICAgICAgICAgICAgICBrZXk6IFsuLi5yb290S2V5LCAuLi5nZXRLZXlQYXRoKGZpZWxkKV0uam9pbihcIi5cIiksXHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWVsZC5maWVsZEdyb3VwICYmIGZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMudHJhY2tNb2RlbENoYW5nZXMoXHJcbiAgICAgICAgICBmaWVsZC5maWVsZEdyb3VwLFxyXG4gICAgICAgICAgZmllbGQua2V5ID8gWy4uLnJvb3RLZXksIC4uLmdldEtleVBhdGgoZmllbGQpXSA6IHJvb3RLZXlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJNb2RlbFN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlU3VicyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGaWVsZFNob3coZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGlmIChmaWVsZCAmJiBmaWVsZC5oYXNPd25Qcm9wZXJ0eShcInNob3dcIikpIHtcclxuICAgICAgcmVzdWx0ID0gZmllbGQuc2hvdztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hlY2tUZXN0KCl7IFxyXG4gICAgcmV0dXJuIHRoaXMuZ29nbztcclxuICB9XHJcbiAgc2V0IGNoZWNrVGVzdCh2YWx1ZTpib29sZWFuKXtcclxuICAgIHRoaXMuZ29nbyA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=