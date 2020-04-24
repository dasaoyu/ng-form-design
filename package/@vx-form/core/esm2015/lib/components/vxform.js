/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, EventEmitter, Output, Attribute, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { VXFormBuilder } from "../services/vxform.builder";
import { VXFormConfig } from "../services/vxform.config";
import { assignModelValue, isNullOrUndefined, wrapProperty, clone, defineHiddenProp, getKeyPath } from "../utils";
import { debounceTime } from "rxjs/operators";
import { TestBaseUtils } from '../tools/test';
export class VXForm {
    /**
     * @param {?} vxFormBuilder
     * @param {?} vxFormConfig
     * @param {?} test
     * @param {?} immutable
     * @param {?} parentFormGroup
     */
    constructor(vxFormBuilder, vxFormConfig, test, immutable, parentFormGroup) {
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
        () => {
            this.enableCheckExprDebounce = true;
            this.checkExpressionChange();
            this.enableCheckExprDebounce = false;
        }));
        if (immutable !== null) {
        }
        this.immutable = immutable !== null || !!vxFormConfig.extras.immutable;
        // let linces = localStorage.getItem("VX_FORM_LINCES")
        // if(linces!=undefined && linces!=null && linces!=""){
        //   this.gogo = this.test.t1(linces);
        // } 
    }
    /**
     * @param {?} model
     * @return {?}
     */
    set model(model) {
        this._model = this.immutable ? clone(model) : model;
    }
    /**
     * @return {?}
     */
    get model() {
        return this._model || {};
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    set fields(fields) {
        this._fields = this.immutable ? clone(fields) : fields;
    }
    /**
     * @return {?}
     */
    get fields() {
        return this._fields || [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = this.immutable ? clone(options) : options;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        if (content && content.nativeElement.nextSibling) {
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.vxFormConfig.extras.checkExpressionOn === "changeDetectionCheck") {
            this.checkExpressionChange();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.fields || changes.form || changes.model) {
            this.form = this.form || new FormGroup({});
            this.setOptions();
            this.clearModelSubscriptions();
            this.vxFormBuilder.buildForm(this.form, this.fields, this.model, this.options);
            this.trackModelChanges(this.fields);
            this.options.updateInitialValue();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearModelSubscriptions();
        this.checkExpressionChange$.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeModel(event) {
        assignModelValue(this.model, event.key.split("."), event.value);
        this.modelChange.emit(clone(this.model));
    }
    /**
     * @return {?}
     */
    setOptions() {
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.resetModel) {
            this.options.resetModel = (/**
             * @param {?=} model
             * @return {?}
             */
            (model) => {
                model = clone(isNullOrUndefined(model) ? this.initialModel : model);
                if (this.model) {
                    Object.keys(this.model).forEach((/**
                     * @param {?} k
                     * @return {?}
                     */
                    k => delete this.model[k]));
                    Object.assign(this.model, model || {});
                }
                ((/** @type {?} */ (this.options)))._buildForm();
                if (this.options.parentForm &&
                    this.options.parentForm.control === this.form) {
                    this.options.parentForm.resetForm(model);
                }
                else {
                    this.form.reset(model);
                }
            });
        }
        if (!this.options.parentForm && this.parentFormGroup) {
            defineHiddenProp(this.options, "parentForm", this.parentFormGroup);
            wrapProperty(this.options.parentForm, "submitted", (/**
             * @param {?} __0
             * @return {?}
             */
            ({ firstChange }) => {
                if (!firstChange) {
                    ((/** @type {?} */ (this.options)))._markForCheck({
                        fieldGroup: this.fields,
                        model: this.model,
                        formControl: this.form,
                        options: this.options
                    });
                }
            }));
        }
        if (!this.options.updateInitialValue) {
            this.options.updateInitialValue = (/**
             * @return {?}
             */
            () => (this.initialModel = clone(this.model)));
        }
        if (!((/** @type {?} */ (this.options)))._buildForm) {
            ((/** @type {?} */ (this.options)))._buildForm = (/**
             * @param {?=} emitModelChange
             * @return {?}
             */
            (emitModelChange = false) => {
                this.clearModelSubscriptions();
                this.vxFormBuilder.buildForm(this.form, this.fields, this.model, this.options);
                this.trackModelChanges(this.fields);
                if (emitModelChange) {
                    this.modelChange.emit(clone(this.model));
                }
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkExpressionChange() {
        if (this.options && ((/** @type {?} */ (this.options)))._checkField) {
            ((/** @type {?} */ (this.options)))._checkField({
                fieldGroup: this.fields,
                model: this.model,
                formControl: this.form,
                options: this.options
            });
        }
    }
    /**
     * @private
     * @param {?} fields
     * @param {?=} rootKey
     * @return {?}
     */
    trackModelChanges(fields, rootKey = []) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            field.status = this.status;
            if (field.key && !field.fieldGroup) {
                /** @type {?} */
                const control = field.formControl;
                /** @type {?} */
                let valueChanges = control.valueChanges;
                const { updateOn, debounce } = field.modelOptions;
                if ((!updateOn || updateOn === "change") &&
                    debounce &&
                    debounce.default > 0) {
                    valueChanges = control.valueChanges.pipe(debounceTime(debounce.default));
                }
                this.modelChangeSubs.push(valueChanges.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    if (((/** @type {?} */ (control)))._onChange.length > 1) {
                        control.patchValue(value, { emitEvent: false });
                    }
                    if (field.parsers && field.parsers.length > 0) {
                        field.parsers.forEach((/**
                         * @param {?} parserFn
                         * @return {?}
                         */
                        parserFn => (value = parserFn(value))));
                    }
                    this.changeModel({
                        key: [...rootKey, ...getKeyPath(field)].join("."),
                        value
                    });
                })));
            }
            if (field.fieldGroup && field.fieldGroup.length > 0) {
                this.trackModelChanges(field.fieldGroup, field.key ? [...rootKey, ...getKeyPath(field)] : rootKey);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearModelSubscriptions() {
        this.modelChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
        this.modelChangeSubs = [];
    }
    /**
     * @param {?} field
     * @return {?}
     */
    checkFieldShow(field) {
        /** @type {?} */
        let result = true;
        if (field && field.hasOwnProperty("show")) {
            result = field.show;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get checkTest() {
        return this.gogo;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkTest(value) {
        this.gogo = value;
    }
}
VXForm.decorators = [
    { type: Component, args: [{
                selector: "vxform",
                template: `
    <ng-container *ngIf="checkTest">
    <ng-container *ngFor="let field of fields">
      <vxform-field
        *ngIf="checkFieldShow(field)"
        hide-deprecation
        [form]="field.form"
        [options]="field.options"
        [model]="field.model"
        [field]="field"
      >
      </vxform-field>
    </ng-container>
    <ng-container #content>
      <ng-content></ng-content>
    </ng-container>
    </ng-container>
  `,
                host: {
                    "[class]": "class"
                },
                providers: [VXFormBuilder, TestBaseUtils]
            }] }
];
/** @nocollapse */
VXForm.ctorParameters = () => [
    { type: VXFormBuilder },
    { type: VXFormConfig },
    { type: TestBaseUtils },
    { type: undefined, decorators: [{ type: Attribute, args: ["immutable",] }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Z4Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBRUwsUUFBUSxFQUNSLFlBQVksRUFDWixNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBYSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTTFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsVUFBVSxFQUNYLE1BQU0sVUFBVSxDQUFDO0FBRWxCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkI5QyxNQUFNLE9BQU8sTUFBTTs7Ozs7Ozs7SUF3RGpCLFlBQ1UsYUFBNEIsRUFDNUIsWUFBMEIsRUFDMUIsSUFBa0IsRUFDRixTQUFTLEVBQ2IsZUFBbUM7UUFKL0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUVOLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQS9CL0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBUXZDLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixvQkFBZSxHQUFtQixFQUFFLENBQUM7UUFDckMsU0FBSSxHQUFX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LElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7O1lBaFJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLE9BQU87aUJBQ25CO2dCQUNELFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBQyxhQUFhLENBQUM7YUFDekM7Ozs7WUF0Q1EsYUFBYTtZQUNiLFlBQVk7WUFXWixhQUFhOzRDQXVGakIsU0FBUyxTQUFDLFdBQVc7WUF6R0ssa0JBQWtCLHVCQTBHNUMsUUFBUTs7O21CQTVEVixLQUFLO29CQUVMLEtBQUs7cUJBUUwsS0FBSztzQkFTTCxLQUFLO29CQVFMLEtBQUs7MEJBRUwsTUFBTTtzQkFDTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFPckMsS0FBSzs7OztJQXJDTixzQkFBcUM7O0lBMkJyQyx1QkFBdUI7O0lBRXZCLDZCQUFnRDs7SUFRaEQsd0JBQTRCOzs7OztJQUU1QiwyQkFBMEI7Ozs7O0lBQzFCLHdCQUFvQjs7Ozs7SUFDcEIseUJBQXFDOzs7OztJQUNyQywwQkFBZ0M7Ozs7O0lBQ2hDLDhCQUEwQjs7Ozs7SUFDMUIsaUNBQTZDOzs7OztJQUM3QyxzQkFBNEI7Ozs7O0lBQzVCLHlDQUF3Qzs7Ozs7SUFDeEMsd0NBTUs7Ozs7O0lBR0gsK0JBQW9DOzs7OztJQUNwQyw4QkFBa0M7Ozs7O0lBQ2xDLHNCQUEwQjs7Ozs7SUFFMUIsaUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRG9DaGVjayxcclxuICBPbkNoYW5nZXMsXHJcbiAgSW5wdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBdHRyaWJ1dGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhGb3JtT3B0aW9ucyxcclxuICBWWEZvcm1PcHRpb25zQ2FjaGVcclxufSBmcm9tIFwiLi92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRm9ybUJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvdnhmb3JtLmJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgVlhGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICBhc3NpZ25Nb2RlbFZhbHVlLFxyXG4gIGlzTnVsbE9yVW5kZWZpbmVkLFxyXG4gIHdyYXBQcm9wZXJ0eSxcclxuICBjbG9uZSxcclxuICBkZWZpbmVIaWRkZW5Qcm9wLFxyXG4gIGdldEtleVBhdGhcclxufSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFRlc3RCYXNlVXRpbHMgfSBmcm9tICcuLi90b29scy90ZXN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hlY2tUZXN0XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHNcIj5cclxuICAgICAgPHZ4Zm9ybS1maWVsZFxyXG4gICAgICAgICpuZ0lmPVwiY2hlY2tGaWVsZFNob3coZmllbGQpXCJcclxuICAgICAgICBoaWRlLWRlcHJlY2F0aW9uXHJcbiAgICAgICAgW2Zvcm1dPVwiZmllbGQuZm9ybVwiXHJcbiAgICAgICAgW29wdGlvbnNdPVwiZmllbGQub3B0aW9uc1wiXHJcbiAgICAgICAgW21vZGVsXT1cImZpZWxkLm1vZGVsXCJcclxuICAgICAgICBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvdnhmb3JtLWZpZWxkPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICNjb250ZW50PlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbY2xhc3NdXCI6IFwiY2xhc3NcIlxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbVlhGb3JtQnVpbGRlcixUZXN0QmFzZVV0aWxzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtIGltcGxlbWVudHMgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cCB8IEZvcm1BcnJheTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZWwobW9kZWw6IGFueSkge1xyXG4gICAgdGhpcy5fbW9kZWwgPSB0aGlzLmltbXV0YWJsZSA/IGNsb25lKG1vZGVsKSA6IG1vZGVsO1xyXG4gIH1cclxuICBnZXQgbW9kZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9kZWwgfHwge307XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWVsZHMoZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdKSB7XHJcbiAgICB0aGlzLl9maWVsZHMgPSB0aGlzLmltbXV0YWJsZSA/IGNsb25lKGZpZWxkcykgOiBmaWVsZHM7XHJcbiAgfVxyXG4gIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9maWVsZHMgfHwgW107XHJcbiAgICAgXHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IFZYRm9ybU9wdGlvbnMpIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLmltbXV0YWJsZSA/IGNsb25lKG9wdGlvbnMpIDogb3B0aW9ucztcclxuICB9XHJcbiAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250ZW50XCIsIHsgc3RhdGljOiB0cnVlIH0pIHNldCBjb250ZW50KFxyXG4gICAgY29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHtcclxuICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQubmF0aXZlRWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc3RhdHVzOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGltbXV0YWJsZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX21vZGVsOiBhbnk7XHJcbiAgcHJpdmF0ZSBfZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdO1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IFZYRm9ybU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBpbml0aWFsTW9kZWw6IGFueTtcclxuICBwcml2YXRlIG1vZGVsQ2hhbmdlU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIGdvZ286Ym9vbGVhbiA9IHRydWU7XHJcbiAgcHJpdmF0ZSBlbmFibGVDaGVja0V4cHJEZWJvdW5jZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY2hlY2tFeHByZXNzaW9uQ2hhbmdlJCA9IHRoaXMubW9kZWxDaGFuZ2VcclxuICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmVuYWJsZUNoZWNrRXhwckRlYm91bmNlID8gMTAwIDogMCkpXHJcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lbmFibGVDaGVja0V4cHJEZWJvdW5jZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2hlY2tFeHByZXNzaW9uQ2hhbmdlKCk7XHJcbiAgICAgIHRoaXMuZW5hYmxlQ2hlY2tFeHByRGVib3VuY2UgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdnhGb3JtQnVpbGRlcjogVlhGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcsXHJcbiAgICBwcml2YXRlIHRlc3Q6VGVzdEJhc2VVdGlscyxcclxuICAgIEBBdHRyaWJ1dGUoXCJpbW11dGFibGVcIikgaW1tdXRhYmxlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgaWYgKGltbXV0YWJsZSAhPT0gbnVsbCkge1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW1tdXRhYmxlID0gaW1tdXRhYmxlICE9PSBudWxsIHx8ICEhdnhGb3JtQ29uZmlnLmV4dHJhcy5pbW11dGFibGU7XHJcbiAgICAvLyBsZXQgbGluY2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWWF9GT1JNX0xJTkNFU1wiKVxyXG4gICAgLy8gaWYobGluY2VzIT11bmRlZmluZWQgJiYgbGluY2VzIT1udWxsICYmIGxpbmNlcyE9XCJcIil7XHJcbiAgICAvLyAgIHRoaXMuZ29nbyA9IHRoaXMudGVzdC50MShsaW5jZXMpO1xyXG4gICAgLy8gfSBcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICh0aGlzLnZ4Rm9ybUNvbmZpZy5leHRyYXMuY2hlY2tFeHByZXNzaW9uT24gPT09IFwiY2hhbmdlRGV0ZWN0aW9uQ2hlY2tcIikge1xyXG4gICAgICB0aGlzLmNoZWNrRXhwcmVzc2lvbkNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZmllbGRzIHx8IGNoYW5nZXMuZm9ybSB8fCBjaGFuZ2VzLm1vZGVsKSB7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybSB8fCBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICAgIHRoaXMuY2xlYXJNb2RlbFN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgdGhpcy52eEZvcm1CdWlsZGVyLmJ1aWxkRm9ybShcclxuICAgICAgICB0aGlzLmZvcm0sXHJcbiAgICAgICAgdGhpcy5maWVsZHMsXHJcbiAgICAgICAgdGhpcy5tb2RlbCxcclxuICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50cmFja01vZGVsQ2hhbmdlcyh0aGlzLmZpZWxkcyk7XHJcbiAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVJbml0aWFsVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbGVhck1vZGVsU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgdGhpcy5jaGVja0V4cHJlc3Npb25DaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb2RlbChldmVudDogeyBrZXk6IHN0cmluZzsgdmFsdWU6IGFueSB9KSB7XHJcbiAgICBhc3NpZ25Nb2RlbFZhbHVlKHRoaXMubW9kZWwsIGV2ZW50LmtleS5zcGxpdChcIi5cIiksIGV2ZW50LnZhbHVlKTtcclxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChjbG9uZSh0aGlzLm1vZGVsKSk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKCkgeyBcclxuICAgIGlmICghdGhpcy5vcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb25zLnJlc2V0TW9kZWwpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnJlc2V0TW9kZWwgPSAobW9kZWw/OiBhbnkpID0+IHtcclxuICAgICAgICBtb2RlbCA9IGNsb25lKGlzTnVsbE9yVW5kZWZpbmVkKG1vZGVsKSA/IHRoaXMuaW5pdGlhbE1vZGVsIDogbW9kZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsKSB7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGVsKS5mb3JFYWNoKGsgPT4gZGVsZXRlIHRoaXMubW9kZWxba10pO1xyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm1vZGVsLCBtb2RlbCB8fCB7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoPFZYRm9ybU9wdGlvbnNDYWNoZT50aGlzLm9wdGlvbnMpLl9idWlsZEZvcm0oKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudEZvcm0gJiZcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnRGb3JtLmNvbnRyb2wgPT09IHRoaXMuZm9ybVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudEZvcm0ucmVzZXRGb3JtKG1vZGVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KG1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucGFyZW50Rm9ybSAmJiB0aGlzLnBhcmVudEZvcm1Hcm91cCkge1xyXG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKHRoaXMub3B0aW9ucywgXCJwYXJlbnRGb3JtXCIsIHRoaXMucGFyZW50Rm9ybUdyb3VwKTtcclxuICAgICAgd3JhcFByb3BlcnR5KHRoaXMub3B0aW9ucy5wYXJlbnRGb3JtLCBcInN1Ym1pdHRlZFwiLCAoeyBmaXJzdENoYW5nZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdENoYW5nZSkge1xyXG4gICAgICAgICAgKDxWWEZvcm1PcHRpb25zQ2FjaGU+dGhpcy5vcHRpb25zKS5fbWFya0ZvckNoZWNrKHtcclxuICAgICAgICAgICAgZmllbGRHcm91cDogdGhpcy5maWVsZHMsXHJcbiAgICAgICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxyXG4gICAgICAgICAgICBmb3JtQ29udHJvbDogdGhpcy5mb3JtLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMudXBkYXRlSW5pdGlhbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy51cGRhdGVJbml0aWFsVmFsdWUgPSAoKSA9PlxyXG4gICAgICAgICh0aGlzLmluaXRpYWxNb2RlbCA9IGNsb25lKHRoaXMubW9kZWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISg8VlhGb3JtT3B0aW9uc0NhY2hlPnRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSkge1xyXG4gICAgICAoPFZYRm9ybU9wdGlvbnNDYWNoZT50aGlzLm9wdGlvbnMpLl9idWlsZEZvcm0gPSAoXHJcbiAgICAgICAgZW1pdE1vZGVsQ2hhbmdlID0gZmFsc2VcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhck1vZGVsU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudnhGb3JtQnVpbGRlci5idWlsZEZvcm0oXHJcbiAgICAgICAgICB0aGlzLmZvcm0sXHJcbiAgICAgICAgICB0aGlzLmZpZWxkcyxcclxuICAgICAgICAgIHRoaXMubW9kZWwsXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudHJhY2tNb2RlbENoYW5nZXModGhpcy5maWVsZHMpO1xyXG5cclxuICAgICAgICBpZiAoZW1pdE1vZGVsQ2hhbmdlKSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoY2xvbmUodGhpcy5tb2RlbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tFeHByZXNzaW9uQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiAoPFZYRm9ybU9wdGlvbnNDYWNoZT50aGlzLm9wdGlvbnMpLl9jaGVja0ZpZWxkKSB7XHJcbiAgICAgICg8VlhGb3JtT3B0aW9uc0NhY2hlPnRoaXMub3B0aW9ucykuX2NoZWNrRmllbGQoe1xyXG4gICAgICAgIGZpZWxkR3JvdXA6IHRoaXMuZmllbGRzLFxyXG4gICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxyXG4gICAgICAgIGZvcm1Db250cm9sOiB0aGlzLmZvcm0sXHJcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFja01vZGVsQ2hhbmdlcyhcclxuICAgIGZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIHJvb3RLZXk6IHN0cmluZ1tdID0gW11cclxuICApIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgZmllbGQuc3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgIGlmIChmaWVsZC5rZXkgJiYgIWZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZmllbGQuZm9ybUNvbnRyb2w7XHJcbiAgICAgICAgbGV0IHZhbHVlQ2hhbmdlcyA9IGNvbnRyb2wudmFsdWVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zdCB7IHVwZGF0ZU9uLCBkZWJvdW5jZSB9ID0gZmllbGQubW9kZWxPcHRpb25zO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICghdXBkYXRlT24gfHwgdXBkYXRlT24gPT09IFwiY2hhbmdlXCIpICYmXHJcbiAgICAgICAgICBkZWJvdW5jZSAmJlxyXG4gICAgICAgICAgZGVib3VuY2UuZGVmYXVsdCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHZhbHVlQ2hhbmdlcyA9IGNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZShkZWJvdW5jZS5kZWZhdWx0KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2VTdWJzLnB1c2goXHJcbiAgICAgICAgICB2YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKChjb250cm9sIGFzIGFueSkuX29uQ2hhbmdlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICBjb250cm9sLnBhdGNoVmFsdWUodmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpZWxkLnBhcnNlcnMgJiYgZmllbGQucGFyc2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgZmllbGQucGFyc2Vycy5mb3JFYWNoKHBhcnNlckZuID0+ICh2YWx1ZSA9IHBhcnNlckZuKHZhbHVlKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1vZGVsKHtcclxuICAgICAgICAgICAgICBrZXk6IFsuLi5yb290S2V5LCAuLi5nZXRLZXlQYXRoKGZpZWxkKV0uam9pbihcIi5cIiksXHJcbiAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWVsZC5maWVsZEdyb3VwICYmIGZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMudHJhY2tNb2RlbENoYW5nZXMoXHJcbiAgICAgICAgICBmaWVsZC5maWVsZEdyb3VwLFxyXG4gICAgICAgICAgZmllbGQua2V5ID8gWy4uLnJvb3RLZXksIC4uLmdldEtleVBhdGgoZmllbGQpXSA6IHJvb3RLZXlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJNb2RlbFN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlU3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlU3VicyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGaWVsZFNob3coZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGlmIChmaWVsZCAmJiBmaWVsZC5oYXNPd25Qcm9wZXJ0eShcInNob3dcIikpIHtcclxuICAgICAgcmVzdWx0ID0gZmllbGQuc2hvdztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hlY2tUZXN0KCl7IFxyXG4gICAgcmV0dXJuIHRoaXMuZ29nbztcclxuICB9XHJcbiAgc2V0IGNoZWNrVGVzdCh2YWx1ZTpib29sZWFuKXtcclxuICAgIHRoaXMuZ29nbyA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=