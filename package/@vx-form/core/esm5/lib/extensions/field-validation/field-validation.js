/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Validators } from "@angular/forms";
import { isObject, VXFORM_VALIDATORS, defineHiddenProp, isUndefined, isPromise, wrapProperty } from "../../utils";
var FieldValidationExtension = /** @class */ (function () {
    function FieldValidationExtension(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldValidationExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!field.parent || !field.key) {
            return;
        }
        this.initFieldValidation(field, "validators");
        this.initFieldValidation(field, "asyncValidators");
    };
    /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    FieldValidationExtension.prototype.initFieldValidation = /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        var _this = this;
        if (!isUndefined(field["_" + type])) {
            if (field.formControl) {
                /** @type {?} */
                var validator = type === "validators"
                    ? field.formControl.validator
                    : field.formControl.asyncValidator;
                if (field["_" + type] !== validator) {
                    field["_" + type] = validator;
                }
            }
            return;
        }
        /** @type {?} */
        var validators = type === "validators" ? [this.getPredefinedFieldValidation(field)] : [];
        if (field[type]) {
            for (var validatorName in field[type]) {
                if (validatorName === "validation" &&
                    !Array.isArray(field[type].validation)) {
                    field[type].validation = [field[type].validation];
                }
                validatorName === "validation"
                    ? validators.push.apply(validators, tslib_1.__spread(field[type].validation.map((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) {
                        return _this.wrapNgValidatorFn(field, v);
                    })))) : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
            }
        }
        defineHiddenProp(field, "_" + type, type === "validators"
            ? Validators.compose(validators)
            : Validators.composeAsync((/** @type {?} */ (validators))));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldValidationExtension.prototype.getPredefinedFieldValidation = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var VALIDATORS = [];
        VXFORM_VALIDATORS.forEach((/**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            return wrapProperty(field.templateOptions, opt, (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var currentValue = _a.currentValue, firstChange = _a.firstChange;
                VALIDATORS = VALIDATORS.filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return o !== opt; }));
                if (currentValue != null && currentValue !== false) {
                    VALIDATORS.push(opt);
                }
                if (!firstChange && field.formControl) {
                    field.formControl.updateValueAndValidity({ emitEvent: false });
                }
            }));
        }));
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            if (VALIDATORS.length === 0) {
                return null;
            }
            return Validators.compose(VALIDATORS.map((/**
             * @param {?} opt
             * @return {?}
             */
            function (opt) { return (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var value = field.templateOptions[opt];
                switch (opt) {
                    case "required":
                        return Validators.required(control);
                    case "pattern":
                        return Validators.pattern(value)(control);
                    case "minLength":
                        return Validators.minLength(value)(control);
                    case "maxLength":
                        return Validators.maxLength(value)(control);
                    case "min":
                        return Validators.min(value)(control);
                    case "max":
                        return Validators.max(value)(control);
                }
            }); })))(control);
        });
    };
    /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    FieldValidationExtension.prototype.wrapNgValidatorFn = /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    function (field, validator, validatorName) {
        var _this = this;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var validatorFn = (/** @type {?} */ (validator));
            if (typeof validator === "string") {
                validatorFn = _this.vxFormConfig.getValidator(validator).validation;
            }
            if (isObject(validator)) {
                validatorFn = ((/** @type {?} */ (validator))).expression;
            }
            /** @type {?} */
            var isValid = validatorFn(control, field);
            if (validatorName) {
                if (isPromise(isValid)) {
                    return isValid.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        if (field.options && field.options._markForCheck) {
                            field.options._markForCheck(field);
                        }
                        return _this.handleResult(field, result, {
                            validatorName: validatorName,
                            validator: validator
                        });
                    }));
                }
                return _this.handleResult(field, isValid, { validatorName: validatorName, validator: validator });
            }
            return isValid;
        });
    };
    /**
     * @private
     * @param {?} field
     * @param {?} isValid
     * @param {?} __2
     * @return {?}
     */
    FieldValidationExtension.prototype.handleResult = /**
     * @private
     * @param {?} field
     * @param {?} isValid
     * @param {?} __2
     * @return {?}
     */
    function (field, isValid, _a) {
        var _b, _c, _d;
        var validatorName = _a.validatorName, validator = _a.validator;
        if (isObject(validator) && field.formControl && validator.errorPath) {
            /** @type {?} */
            var control = field.formControl.get(validator.errorPath);
            if (control) {
                /** @type {?} */
                var controlErrors = control.errors || {};
                if (!isValid) {
                    control.setErrors(tslib_1.__assign({}, controlErrors, (_b = {}, _b[validatorName] = { message: validator.message }, _b)));
                }
                else {
                    delete controlErrors[validatorName];
                    control.setErrors(Object.keys(controlErrors).length === 0 ? null : controlErrors);
                }
            }
            return isValid
                ? null
                : (_c = {}, _c[validatorName] = { errorPath: validator.errorPath }, _c);
        }
        return isValid ? null : (_d = {}, _d[validatorName] = true, _d);
    };
    return FieldValidationExtension;
}());
export { FieldValidationExtension };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldValidationExtension.prototype.vxFormConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC12YWxpZGF0aW9uL2ZpZWxkLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQW1CLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDYixNQUFNLGFBQWEsQ0FBQztBQUVyQjtJQUNFLGtDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7Ozs7O0lBRWxELDZDQUFVOzs7O0lBQVYsVUFBVyxLQUE2QjtRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7OztJQUVPLHNEQUFtQjs7Ozs7O0lBQTNCLFVBQ0UsS0FBNkIsRUFDN0IsSUFBc0M7UUFGeEMsaUJBb0RDO1FBaERDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ25DLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTs7b0JBQ2YsU0FBUyxHQUNiLElBQUksS0FBSyxZQUFZO29CQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTO29CQUM3QixDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjO2dCQUN0QyxJQUFJLEtBQUssQ0FB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YSxJQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FDL0MsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxPQUFPLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FDZixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUMvRCxDQUFDO2lCQUNIO2FBQ0Y7WUFFRCxPQUFPLE9BQU87Z0JBQ1osQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxXQUFHLEdBQUMsYUFBYSxJQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBRSxDQUFDO1NBQzdEO1FBRUQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQUcsR0FBQyxhQUFhLElBQUcsSUFBSSxLQUFFLENBQUM7SUFDcEQsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQWxMRCxJQWtMQzs7Ozs7OztJQWpMYSxnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFZYRm9ybUV4dGVuc2lvbixcclxuICBGaWVsZFZhbGlkYXRvckZuLFxyXG4gIFZYRm9ybUNvbmZpZ1xyXG59IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBpc09iamVjdCxcclxuICBWWEZPUk1fVkFMSURBVE9SUyxcclxuICBkZWZpbmVIaWRkZW5Qcm9wLFxyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzUHJvbWlzZSxcclxuICB3cmFwUHJvcGVydHlcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFZhbGlkYXRpb25FeHRlbnNpb24gaW1wbGVtZW50cyBWWEZvcm1FeHRlbnNpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcpIHt9XHJcblxyXG4gIG9uUG9wdWxhdGUoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIGlmICghZmllbGQucGFyZW50IHx8ICFmaWVsZC5rZXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEZpZWxkVmFsaWRhdGlvbihmaWVsZCwgXCJ2YWxpZGF0b3JzXCIpO1xyXG4gICAgdGhpcy5pbml0RmllbGRWYWxpZGF0aW9uKGZpZWxkLCBcImFzeW5jVmFsaWRhdG9yc1wiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEZpZWxkVmFsaWRhdGlvbihcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gICAgdHlwZTogXCJ2YWxpZGF0b3JzXCIgfCBcImFzeW5jVmFsaWRhdG9yc1wiXHJcbiAgKSB7XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZpZWxkW1wiX1wiICsgdHlwZV0pKSB7XHJcbiAgICAgIGlmIChmaWVsZC5mb3JtQ29udHJvbCkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9XHJcbiAgICAgICAgICB0eXBlID09PSBcInZhbGlkYXRvcnNcIlxyXG4gICAgICAgICAgICA/IGZpZWxkLmZvcm1Db250cm9sLnZhbGlkYXRvclxyXG4gICAgICAgICAgICA6IGZpZWxkLmZvcm1Db250cm9sLmFzeW5jVmFsaWRhdG9yO1xyXG4gICAgICAgIGlmIChmaWVsZFtcIl9cIiArIHR5cGVdICE9PSB2YWxpZGF0b3IpIHtcclxuICAgICAgICAgIGZpZWxkW1wiX1wiICsgdHlwZV0gPSB2YWxpZGF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9XHJcbiAgICAgIHR5cGUgPT09IFwidmFsaWRhdG9yc1wiID8gW3RoaXMuZ2V0UHJlZGVmaW5lZEZpZWxkVmFsaWRhdGlvbihmaWVsZCldIDogW107XHJcbiAgICBpZiAoZmllbGRbdHlwZV0pIHtcclxuICAgICAgZm9yIChjb25zdCB2YWxpZGF0b3JOYW1lIGluIGZpZWxkW3R5cGVdKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdmFsaWRhdG9yTmFtZSA9PT0gXCJ2YWxpZGF0aW9uXCIgJiZcclxuICAgICAgICAgICFBcnJheS5pc0FycmF5KGZpZWxkW3R5cGVdLnZhbGlkYXRpb24pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBmaWVsZFt0eXBlXS52YWxpZGF0aW9uID0gW2ZpZWxkW3R5cGVdLnZhbGlkYXRpb25dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsaWRhdG9yTmFtZSA9PT0gXCJ2YWxpZGF0aW9uXCJcclxuICAgICAgICAgID8gdmFsaWRhdG9ycy5wdXNoKFxyXG4gICAgICAgICAgICAgIC4uLmZpZWxkW3R5cGVdLnZhbGlkYXRpb24ubWFwKHYgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMud3JhcE5nVmFsaWRhdG9yRm4oZmllbGQsIHYpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICA6IHZhbGlkYXRvcnMucHVzaChcclxuICAgICAgICAgICAgICB0aGlzLndyYXBOZ1ZhbGlkYXRvckZuKFxyXG4gICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICBmaWVsZFt0eXBlXVt2YWxpZGF0b3JOYW1lXSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvck5hbWVcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVIaWRkZW5Qcm9wKFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgXCJfXCIgKyB0eXBlLFxyXG4gICAgICB0eXBlID09PSBcInZhbGlkYXRvcnNcIlxyXG4gICAgICAgID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMpXHJcbiAgICAgICAgOiBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyh2YWxpZGF0b3JzIGFzIGFueSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFByZWRlZmluZWRGaWVsZFZhbGlkYXRpb24oXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZVxyXG4gICk6IFZhbGlkYXRvckZuIHtcclxuICAgIGxldCBWQUxJREFUT1JTID0gW107XHJcbiAgICBWWEZPUk1fVkFMSURBVE9SUy5mb3JFYWNoKG9wdCA9PlxyXG4gICAgICB3cmFwUHJvcGVydHkoXHJcbiAgICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLFxyXG4gICAgICAgIG9wdCxcclxuICAgICAgICAoeyBjdXJyZW50VmFsdWUsIGZpcnN0Q2hhbmdlIH0pID0+IHtcclxuICAgICAgICAgIFZBTElEQVRPUlMgPSBWQUxJREFUT1JTLmZpbHRlcihvID0+IG8gIT09IG9wdCk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9IG51bGwgJiYgY3VycmVudFZhbHVlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBWQUxJREFUT1JTLnB1c2gob3B0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghZmlyc3RDaGFuZ2UgJiYgZmllbGQuZm9ybUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XHJcbiAgICAgIGlmIChWQUxJREFUT1JTLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKFxyXG4gICAgICAgIFZBTElEQVRPUlMubWFwKG9wdCA9PiAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLnRlbXBsYXRlT3B0aW9uc1tvcHRdO1xyXG4gICAgICAgICAgc3dpdGNoIChvcHQpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlcXVpcmVkXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXR0ZXJuXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMucGF0dGVybih2YWx1ZSkoY29udHJvbCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtaW5MZW5ndGhcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsdWUpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICBjYXNlIFwibWF4TGVuZ3RoXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbHVlKShjb250cm9sKTtcclxuICAgICAgICAgICAgY2FzZSBcIm1pblwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbih2YWx1ZSkoY29udHJvbCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYXhcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXgodmFsdWUpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICkoY29udHJvbCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3cmFwTmdWYWxpZGF0b3JGbihcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gICAgdmFsaWRhdG9yOiBzdHJpbmcgfCBGaWVsZFZhbGlkYXRvckZuLFxyXG4gICAgdmFsaWRhdG9yTmFtZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcclxuICAgICAgbGV0IHZhbGlkYXRvckZuID0gdmFsaWRhdG9yIGFzIEZpZWxkVmFsaWRhdG9yRm47XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgdmFsaWRhdG9yRm4gPSB0aGlzLnZ4Rm9ybUNvbmZpZy5nZXRWYWxpZGF0b3IodmFsaWRhdG9yKS52YWxpZGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc09iamVjdCh2YWxpZGF0b3IpKSB7XHJcbiAgICAgICAgdmFsaWRhdG9yRm4gPSAodmFsaWRhdG9yIGFzIGFueSkuZXhwcmVzc2lvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRvckZuKGNvbnRyb2wsIGZpZWxkKTtcclxuICAgICAgaWYgKHZhbGlkYXRvck5hbWUpIHtcclxuICAgICAgICBpZiAoaXNQcm9taXNlKGlzVmFsaWQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXNWYWxpZC50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLm9wdGlvbnMgJiYgZmllbGQub3B0aW9ucy5fbWFya0ZvckNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgZmllbGQub3B0aW9ucy5fbWFya0ZvckNoZWNrKGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzdWx0KGZpZWxkLCByZXN1bHQsIHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3JOYW1lLFxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzdWx0KGZpZWxkLCBpc1ZhbGlkLCB7IHZhbGlkYXRvck5hbWUsIHZhbGlkYXRvciB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVSZXN1bHQoXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSxcclxuICAgIGlzVmFsaWQsXHJcbiAgICB7IHZhbGlkYXRvck5hbWUsIHZhbGlkYXRvciB9XHJcbiAgKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsaWRhdG9yKSAmJiBmaWVsZC5mb3JtQ29udHJvbCAmJiB2YWxpZGF0b3IuZXJyb3JQYXRoKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBmaWVsZC5mb3JtQ29udHJvbC5nZXQodmFsaWRhdG9yLmVycm9yUGF0aCk7XHJcbiAgICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbEVycm9ycyA9IGNvbnRyb2wuZXJyb3JzIHx8IHt9O1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoe1xyXG4gICAgICAgICAgICAuLi5jb250cm9sRXJyb3JzLFxyXG4gICAgICAgICAgICBbdmFsaWRhdG9yTmFtZV06IHsgbWVzc2FnZTogdmFsaWRhdG9yLm1lc3NhZ2UgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBjb250cm9sRXJyb3JzW3ZhbGlkYXRvck5hbWVdO1xyXG4gICAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xFcnJvcnMpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBjb250cm9sRXJyb3JzXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGlzVmFsaWRcclxuICAgICAgICA/IG51bGxcclxuICAgICAgICA6IHsgW3ZhbGlkYXRvck5hbWVdOiB7IGVycm9yUGF0aDogdmFsaWRhdG9yLmVycm9yUGF0aCB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogeyBbdmFsaWRhdG9yTmFtZV06IHRydWUgfTtcclxuICB9XHJcbn1cclxuIl19