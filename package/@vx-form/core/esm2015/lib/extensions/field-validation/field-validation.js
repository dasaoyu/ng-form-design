/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validators } from "@angular/forms";
import { isObject, VXFORM_VALIDATORS, defineHiddenProp, isUndefined, isPromise, wrapProperty } from "../../utils";
export class FieldValidationExtension {
    /**
     * @param {?} vxFormConfig
     */
    constructor(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.parent || !field.key) {
            return;
        }
        this.initFieldValidation(field, "validators");
        this.initFieldValidation(field, "asyncValidators");
    }
    /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    initFieldValidation(field, type) {
        if (!isUndefined(field["_" + type])) {
            if (field.formControl) {
                /** @type {?} */
                const validator = type === "validators"
                    ? field.formControl.validator
                    : field.formControl.asyncValidator;
                if (field["_" + type] !== validator) {
                    field["_" + type] = validator;
                }
            }
            return;
        }
        /** @type {?} */
        const validators = type === "validators" ? [this.getPredefinedFieldValidation(field)] : [];
        if (field[type]) {
            for (const validatorName in field[type]) {
                if (validatorName === "validation" &&
                    !Array.isArray(field[type].validation)) {
                    field[type].validation = [field[type].validation];
                }
                validatorName === "validation"
                    ? validators.push(...field[type].validation.map((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.wrapNgValidatorFn(field, v))))
                    : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
            }
        }
        defineHiddenProp(field, "_" + type, type === "validators"
            ? Validators.compose(validators)
            : Validators.composeAsync((/** @type {?} */ (validators))));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getPredefinedFieldValidation(field) {
        /** @type {?} */
        let VALIDATORS = [];
        VXFORM_VALIDATORS.forEach((/**
         * @param {?} opt
         * @return {?}
         */
        opt => wrapProperty(field.templateOptions, opt, (/**
         * @param {?} __0
         * @return {?}
         */
        ({ currentValue, firstChange }) => {
            VALIDATORS = VALIDATORS.filter((/**
             * @param {?} o
             * @return {?}
             */
            o => o !== opt));
            if (currentValue != null && currentValue !== false) {
                VALIDATORS.push(opt);
            }
            if (!firstChange && field.formControl) {
                field.formControl.updateValueAndValidity({ emitEvent: false });
            }
        }))));
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (VALIDATORS.length === 0) {
                return null;
            }
            return Validators.compose(VALIDATORS.map((/**
             * @param {?} opt
             * @return {?}
             */
            opt => (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const value = field.templateOptions[opt];
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
            }))))(control);
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    wrapNgValidatorFn(field, validator, validatorName) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            let validatorFn = (/** @type {?} */ (validator));
            if (typeof validator === "string") {
                validatorFn = this.vxFormConfig.getValidator(validator).validation;
            }
            if (isObject(validator)) {
                validatorFn = ((/** @type {?} */ (validator))).expression;
            }
            /** @type {?} */
            const isValid = validatorFn(control, field);
            if (validatorName) {
                if (isPromise(isValid)) {
                    return isValid.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    (result) => {
                        if (field.options && field.options._markForCheck) {
                            field.options._markForCheck(field);
                        }
                        return this.handleResult(field, result, {
                            validatorName,
                            validator
                        });
                    }));
                }
                return this.handleResult(field, isValid, { validatorName, validator });
            }
            return isValid;
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} isValid
     * @param {?} __2
     * @return {?}
     */
    handleResult(field, isValid, { validatorName, validator }) {
        if (isObject(validator) && field.formControl && validator.errorPath) {
            /** @type {?} */
            const control = field.formControl.get(validator.errorPath);
            if (control) {
                /** @type {?} */
                const controlErrors = control.errors || {};
                if (!isValid) {
                    control.setErrors(Object.assign({}, controlErrors, { [validatorName]: { message: validator.message } }));
                }
                else {
                    delete controlErrors[validatorName];
                    control.setErrors(Object.keys(controlErrors).length === 0 ? null : controlErrors);
                }
            }
            return isValid
                ? null
                : { [validatorName]: { errorPath: validator.errorPath } };
        }
        return isValid ? null : { [validatorName]: true };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldValidationExtension.prototype.vxFormConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC12YWxpZGF0aW9uL2ZpZWxkLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBbUIsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUNMLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sYUFBYSxDQUFDO0FBRXJCLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7OztJQUVsRCxVQUFVLENBQUMsS0FBNkI7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7SUFFTyxtQkFBbUIsQ0FDekIsS0FBNkIsRUFDN0IsSUFBc0M7UUFFdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFOztzQkFDZixTQUFTLEdBQ2IsSUFBSSxLQUFLLFlBQVk7b0JBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVM7b0JBQzdCLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWM7Z0JBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxJ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QUFNO29CQUNMLE9BQU8sYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsU0FBUyxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQy9ELENBQUM7aUJBQ0g7YUFDRjtZQUVELE9BQU8sT0FBTztnQkFDWixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQzdEO1FBRUQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7Q0FDRjs7Ozs7O0lBakxhLGdEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgVlhGb3JtRXh0ZW5zaW9uLFxyXG4gIEZpZWxkVmFsaWRhdG9yRm4sXHJcbiAgVlhGb3JtQ29uZmlnXHJcbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWdDYWNoZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIGlzT2JqZWN0LFxyXG4gIFZYRk9STV9WQUxJREFUT1JTLFxyXG4gIGRlZmluZUhpZGRlblByb3AsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNQcm9taXNlLFxyXG4gIHdyYXBQcm9wZXJ0eVxyXG59IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkVmFsaWRhdGlvbkV4dGVuc2lvbiBpbXBsZW1lbnRzIFZYRm9ybUV4dGVuc2lvbiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2eEZvcm1Db25maWc6IFZYRm9ybUNvbmZpZykge31cclxuXHJcbiAgb25Qb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgaWYgKCFmaWVsZC5wYXJlbnQgfHwgIWZpZWxkLmtleSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0RmllbGRWYWxpZGF0aW9uKGZpZWxkLCBcInZhbGlkYXRvcnNcIik7XHJcbiAgICB0aGlzLmluaXRGaWVsZFZhbGlkYXRpb24oZmllbGQsIFwiYXN5bmNWYWxpZGF0b3JzXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmllbGRWYWxpZGF0aW9uKFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUsXHJcbiAgICB0eXBlOiBcInZhbGlkYXRvcnNcIiB8IFwiYXN5bmNWYWxpZGF0b3JzXCJcclxuICApIHtcclxuICAgIGlmICghaXNVbmRlZmluZWQoZmllbGRbXCJfXCIgKyB0eXBlXSkpIHtcclxuICAgICAgaWYgKGZpZWxkLmZvcm1Db250cm9sKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID1cclxuICAgICAgICAgIHR5cGUgPT09IFwidmFsaWRhdG9yc1wiXHJcbiAgICAgICAgICAgID8gZmllbGQuZm9ybUNvbnRyb2wudmFsaWRhdG9yXHJcbiAgICAgICAgICAgIDogZmllbGQuZm9ybUNvbnRyb2wuYXN5bmNWYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKGZpZWxkW1wiX1wiICsgdHlwZV0gIT09IHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgZmllbGRbXCJfXCIgKyB0eXBlXSA9IHZhbGlkYXRvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID1cclxuICAgICAgdHlwZSA9PT0gXCJ2YWxpZGF0b3JzXCIgPyBbdGhpcy5nZXRQcmVkZWZpbmVkRmllbGRWYWxpZGF0aW9uKGZpZWxkKV0gOiBbXTtcclxuICAgIGlmIChmaWVsZFt0eXBlXSkge1xyXG4gICAgICBmb3IgKGNvbnN0IHZhbGlkYXRvck5hbWUgaW4gZmllbGRbdHlwZV0pIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB2YWxpZGF0b3JOYW1lID09PSBcInZhbGlkYXRpb25cIiAmJlxyXG4gICAgICAgICAgIUFycmF5LmlzQXJyYXkoZmllbGRbdHlwZV0udmFsaWRhdGlvbilcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGZpZWxkW3R5cGVdLnZhbGlkYXRpb24gPSBbZmllbGRbdHlwZV0udmFsaWRhdGlvbl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWxpZGF0b3JOYW1lID09PSBcInZhbGlkYXRpb25cIlxyXG4gICAgICAgICAgPyB2YWxpZGF0b3JzLnB1c2goXHJcbiAgICAgICAgICAgICAgLi4uZmllbGRbdHlwZV0udmFsaWRhdGlvbi5tYXAodiA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy53cmFwTmdWYWxpZGF0b3JGbihmaWVsZCwgdilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogdmFsaWRhdG9ycy5wdXNoKFxyXG4gICAgICAgICAgICAgIHRoaXMud3JhcE5nVmFsaWRhdG9yRm4oXHJcbiAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgIGZpZWxkW3R5cGVdW3ZhbGlkYXRvck5hbWVdLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yTmFtZVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUhpZGRlblByb3AoXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICBcIl9cIiArIHR5cGUsXHJcbiAgICAgIHR5cGUgPT09IFwidmFsaWRhdG9yc1wiXHJcbiAgICAgICAgPyBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycylcclxuICAgICAgICA6IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKHZhbGlkYXRvcnMgYXMgYW55KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UHJlZGVmaW5lZEZpZWxkVmFsaWRhdGlvbihcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlXHJcbiAgKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgbGV0IFZBTElEQVRPUlMgPSBbXTtcclxuICAgIFZYRk9STV9WQUxJREFUT1JTLmZvckVhY2gob3B0ID0+XHJcbiAgICAgIHdyYXBQcm9wZXJ0eShcclxuICAgICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMsXHJcbiAgICAgICAgb3B0LFxyXG4gICAgICAgICh7IGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgVkFMSURBVE9SUyA9IFZBTElEQVRPUlMuZmlsdGVyKG8gPT4gbyAhPT0gb3B0KTtcclxuICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgIT0gbnVsbCAmJiBjdXJyZW50VmFsdWUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIFZBTElEQVRPUlMucHVzaChvcHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmaXJzdENoYW5nZSAmJiBmaWVsZC5mb3JtQ29udHJvbCkge1xyXG4gICAgICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcclxuICAgICAgaWYgKFZBTElEQVRPUlMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoXHJcbiAgICAgICAgVkFMSURBVE9SUy5tYXAob3B0ID0+ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZmllbGQudGVtcGxhdGVPcHRpb25zW29wdF07XHJcbiAgICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwicmVxdWlyZWRcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKTtcclxuICAgICAgICAgICAgY2FzZSBcInBhdHRlcm5cIjpcclxuICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5wYXR0ZXJuKHZhbHVlKShjb250cm9sKTtcclxuICAgICAgICAgICAgY2FzZSBcIm1pbkxlbmd0aFwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWx1ZSkoY29udHJvbCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYXhMZW5ndGhcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsdWUpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICBjYXNlIFwibWluXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvcnMubWluKHZhbHVlKShjb250cm9sKTtcclxuICAgICAgICAgICAgY2FzZSBcIm1heFwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm1heCh2YWx1ZSkoY29udHJvbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKShjb250cm9sKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdyYXBOZ1ZhbGlkYXRvckZuKFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUsXHJcbiAgICB2YWxpZGF0b3I6IHN0cmluZyB8IEZpZWxkVmFsaWRhdG9yRm4sXHJcbiAgICB2YWxpZGF0b3JOYW1lPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xyXG4gICAgICBsZXQgdmFsaWRhdG9yRm4gPSB2YWxpZGF0b3IgYXMgRmllbGRWYWxpZGF0b3JGbjtcclxuICAgICAgaWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB2YWxpZGF0b3JGbiA9IHRoaXMudnhGb3JtQ29uZmlnLmdldFZhbGlkYXRvcih2YWxpZGF0b3IpLnZhbGlkYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzT2JqZWN0KHZhbGlkYXRvcikpIHtcclxuICAgICAgICB2YWxpZGF0b3JGbiA9ICh2YWxpZGF0b3IgYXMgYW55KS5leHByZXNzaW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdG9yRm4oY29udHJvbCwgZmllbGQpO1xyXG4gICAgICBpZiAodmFsaWRhdG9yTmFtZSkge1xyXG4gICAgICAgIGlmIChpc1Byb21pc2UoaXNWYWxpZCkpIHtcclxuICAgICAgICAgIHJldHVybiBpc1ZhbGlkLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQub3B0aW9ucyAmJiBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2spIHtcclxuICAgICAgICAgICAgICBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2soZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXN1bHQoZmllbGQsIHJlc3VsdCwge1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRvck5hbWUsXHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXN1bHQoZmllbGQsIGlzVmFsaWQsIHsgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVJlc3VsdChcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gICAgaXNWYWxpZCxcclxuICAgIHsgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yIH1cclxuICApIHtcclxuICAgIGlmIChpc09iamVjdCh2YWxpZGF0b3IpICYmIGZpZWxkLmZvcm1Db250cm9sICYmIHZhbGlkYXRvci5lcnJvclBhdGgpIHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IGZpZWxkLmZvcm1Db250cm9sLmdldCh2YWxpZGF0b3IuZXJyb3JQYXRoKTtcclxuICAgICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sRXJyb3JzID0gY29udHJvbC5lcnJvcnMgfHwge307XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICBjb250cm9sLnNldEVycm9ycyh7XHJcbiAgICAgICAgICAgIC4uLmNvbnRyb2xFcnJvcnMsXHJcbiAgICAgICAgICAgIFt2YWxpZGF0b3JOYW1lXTogeyBtZXNzYWdlOiB2YWxpZGF0b3IubWVzc2FnZSB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGNvbnRyb2xFcnJvcnNbdmFsaWRhdG9yTmFtZV07XHJcbiAgICAgICAgICBjb250cm9sLnNldEVycm9ycyhcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29udHJvbEVycm9ycykubGVuZ3RoID09PSAwID8gbnVsbCA6IGNvbnRyb2xFcnJvcnNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXNWYWxpZFxyXG4gICAgICAgID8gbnVsbFxyXG4gICAgICAgIDogeyBbdmFsaWRhdG9yTmFtZV06IHsgZXJyb3JQYXRoOiB2YWxpZGF0b3IuZXJyb3JQYXRoIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiB7IFt2YWxpZGF0b3JOYW1lXTogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG4iXX0=