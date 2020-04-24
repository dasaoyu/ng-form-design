/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isObject, isNullOrUndefined, isFunction, defineHiddenProp, wrapProperty } from "../../utils";
import { evalExpression, evalStringExpression, evalExpressionValueSetter } from "./utils";
import { Observable } from "rxjs";
import { unregisterControl, registerControl } from "../field-form/utils";
export class FieldExpressionExtension {
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        if (field.parent || field.options._checkField) {
            return;
        }
        field.options._checkField = (/**
         * @param {?} f
         * @param {?} ignoreCache
         * @return {?}
         */
        (f, ignoreCache) => this._checkField(f, ignoreCache));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.parent || field._expressionProperties) {
            return;
        }
        defineHiddenProp(field, "_expressionProperties", {});
        if (field.expressionProperties) {
            for (const key in field.expressionProperties) {
                /** @type {?} */
                const expressionProperty = field.expressionProperties[key];
                /** @type {?} */
                const expressionValueSetter = evalExpressionValueSetter(`field.${key}`, [
                    "expressionValue",
                    "model",
                    "field"
                ]);
                if (typeof expressionProperty === "string" ||
                    isFunction(expressionProperty)) {
                    field._expressionProperties[key] = {
                        expression: this._evalExpression(expressionProperty, field.parent.expressionProperties &&
                            field.parent.expressionProperties.hasOwnProperty("templateOptions.disabled")
                            ? (/**
                             * @return {?}
                             */
                            () => field.parent.templateOptions.disabled)
                            : undefined),
                        expressionValueSetter
                    };
                    if (key === "templateOptions.disabled") {
                        Object.defineProperty(field._expressionProperties[key], "expressionValue", {
                            get: (/**
                             * @return {?}
                             */
                            () => field.templateOptions.disabled),
                            set: (/**
                             * @return {?}
                             */
                            () => { }),
                            enumerable: true,
                            configurable: true
                        });
                    }
                }
                else if (expressionProperty instanceof Observable) {
                    /** @type {?} */
                    const subscription = ((/** @type {?} */ (expressionProperty))).subscribe((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => evalExpression(expressionValueSetter, { field }, [
                        v,
                        field.model,
                        field
                    ])));
                    /** @type {?} */
                    const onDestroy = field.hooks.onDestroy;
                    field.hooks.onDestroy = (/**
                     * @param {?} field
                     * @return {?}
                     */
                    field => {
                        onDestroy && onDestroy(field);
                        subscription.unsubscribe();
                    });
                }
            }
        }
        if (field.hideExpression) {
            delete field.hide;
            /** @type {?} */
            let parent = field.parent;
            while (parent && !parent.hideExpression) {
                parent = parent.parent;
            }
            field.hideExpression = this._evalExpression(field.hideExpression, parent && parent.hideExpression ? (/**
             * @return {?}
             */
            () => parent.hide) : undefined);
        }
        else {
            wrapProperty(field, "hide", (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, firstChange }) => {
                if (!firstChange || (firstChange && currentValue === true)) {
                    field.options._hiddenFieldsForCheck.push(field);
                }
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        if (field.parent) {
            return;
        }
        field.options._checkField(field, true);
    }
    /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    _evalExpression(expression, parentExpression) {
        expression = expression || ((/**
         * @return {?}
         */
        () => false));
        if (typeof expression === "string") {
            expression = evalStringExpression(expression, [
                "model",
                "formState",
                "field"
            ]);
        }
        return parentExpression
            ? (/**
             * @param {?} model
             * @param {?} formState
             * @param {?} field
             * @return {?}
             */
            (model, formState, field) => parentExpression() || expression(model, formState, field))
            : expression;
    }
    /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    _checkField(field, ignoreCache = false) {
        /** @type {?} */
        const options = (/** @type {?} */ (field.options));
        /** @type {?} */
        let markForCheck = false;
        field.fieldGroup.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            this.checkFieldExpressionChange(f, ignoreCache) && (markForCheck = true);
            if (this.checkFieldVisibilityChange(f, ignoreCache)) {
                options._hiddenFieldsForCheck.push(f);
                markForCheck = true;
            }
            if (f.fieldGroup && f.fieldGroup.length > 0) {
                this._checkField(f, ignoreCache);
            }
        }));
        if (markForCheck && field.options && field.options._markForCheck) {
            field.options._markForCheck(field);
        }
        if (!field.parent) {
            options._hiddenFieldsForCheck
                .sort((/**
             * @param {?} f
             * @return {?}
             */
            f => (f.hide ? -1 : 1)))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.toggleFormControl(f, f.hide)));
            options._hiddenFieldsForCheck = [];
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldExpressionChange(field, ignoreCache) {
        if (!field || !field._expressionProperties) {
            return false;
        }
        /** @type {?} */
        let markForCheck = false;
        /** @type {?} */
        const expressionProperties = field._expressionProperties;
        for (const key in expressionProperties) {
            /** @type {?} */
            let expressionValue = evalExpression(expressionProperties[key].expression, { field }, [field.model, field.options.formState, field]);
            if (key === "templateOptions.disabled") {
                expressionValue = !!expressionValue;
            }
            if (ignoreCache ||
                (expressionProperties[key].expressionValue !== expressionValue &&
                    (!isObject(expressionValue) ||
                        JSON.stringify(expressionValue) !==
                            JSON.stringify(expressionProperties[key].expressionValue)))) {
                markForCheck = true;
                expressionProperties[key].expressionValue = expressionValue;
                evalExpression(expressionProperties[key].expressionValueSetter, { field }, [expressionValue, field.model, field]);
                if (key === "templateOptions.disabled" && field.key) {
                    this.setDisabledState(field, expressionValue);
                }
                if (key.indexOf("model.") === 0) {
                    /** @type {?} */
                    const path = key.replace(/^model\./, "");
                    /** @type {?} */
                    const control = field.key && key === path
                        ? field.formControl
                        : field.parent.formControl.get(path);
                    if (control &&
                        !(isNullOrUndefined(control.value) &&
                            isNullOrUndefined(expressionValue)) &&
                        control.value !== expressionValue) {
                        control.patchValue(expressionValue);
                    }
                }
            }
        }
        return markForCheck;
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldVisibilityChange(field, ignoreCache) {
        if (!field || isNullOrUndefined(field.hideExpression)) {
            return false;
        }
        /** @type {?} */
        const hideExpressionResult = !!evalExpression(field.hideExpression, { field }, [field.model, field.options.formState, field]);
        /** @type {?} */
        let markForCheck = false;
        if (hideExpressionResult !== field.hide || ignoreCache) {
            markForCheck = true;
            field.hide = hideExpressionResult;
            field.templateOptions.hidden = hideExpressionResult;
        }
        return markForCheck;
    }
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    setDisabledState(field, value) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.expressionProperties ||
                !f.expressionProperties.hasOwnProperty("templateOptions.disabled")))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.setDisabledState(f, value)));
        }
        if (field.key && field.templateOptions.disabled !== value) {
            field.templateOptions.disabled = value;
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    toggleFormControl(field, hide) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.hideExpression))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.toggleFormControl(f, hide)));
        }
        if (field.formControl && field.key) {
            hide === true ? unregisterControl(field) : registerControl(field);
        }
        if (field.options.fieldChanges) {
            field.options.fieldChanges.next((/** @type {?} */ ({
                field: field,
                type: "hidden",
                value: hide
            })));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC1leHByZXNzaW9uL2ZpZWxkLWV4cHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFDTCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNiLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLHlCQUF5QixFQUMxQixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV6RSxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUNuQyxXQUFXLENBQUMsS0FBNkI7UUFDdkMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQzdDLE9BQU87U0FDUjtRQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVzs7Ozs7UUFBRyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQTZCO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFFRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckQsSUFBSSxLQUFLLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLENB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QUMsWUFBWSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBd0I7Z0JBQ3RELEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxJQUFJO2FBQ1osRUFBQSxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhGb3JtVmFsdWVDaGFuZ2VFdmVudCxcclxuICBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIGlzT2JqZWN0LFxyXG4gIGlzTnVsbE9yVW5kZWZpbmVkLFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgZGVmaW5lSGlkZGVuUHJvcCxcclxuICB3cmFwUHJvcGVydHlcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBldmFsRXhwcmVzc2lvbixcclxuICBldmFsU3RyaW5nRXhwcmVzc2lvbixcclxuICBldmFsRXhwcmVzc2lvblZhbHVlU2V0dGVyXHJcbn0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFZYRm9ybUV4dGVuc2lvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IHVucmVnaXN0ZXJDb250cm9sLCByZWdpc3RlckNvbnRyb2wgfSBmcm9tIFwiLi4vZmllbGQtZm9ybS91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkRXhwcmVzc2lvbkV4dGVuc2lvbiBpbXBsZW1lbnRzIFZYRm9ybUV4dGVuc2lvbiB7XHJcbiAgcHJlUG9wdWxhdGUoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIGlmIChmaWVsZC5wYXJlbnQgfHwgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZCA9IChmLCBpZ25vcmVDYWNoZSkgPT5cclxuICAgICAgdGhpcy5fY2hlY2tGaWVsZChmLCBpZ25vcmVDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBvblBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBpZiAoIWZpZWxkLnBhcmVudCB8fCBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsIFwiX2V4cHJlc3Npb25Qcm9wZXJ0aWVzXCIsIHt9KTtcclxuXHJcbiAgICBpZiAoZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uUHJvcGVydHkgPSBmaWVsZC5leHByZXNzaW9uUHJvcGVydGllc1trZXldLFxyXG4gICAgICAgICAgZXhwcmVzc2lvblZhbHVlU2V0dGVyID0gZXZhbEV4cHJlc3Npb25WYWx1ZVNldHRlcihgZmllbGQuJHtrZXl9YCwgW1xyXG4gICAgICAgICAgICBcImV4cHJlc3Npb25WYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm1vZGVsXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGRcIlxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHR5cGVvZiBleHByZXNzaW9uUHJvcGVydHkgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgIGlzRnVuY3Rpb24oZXhwcmVzc2lvblByb3BlcnR5KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZmllbGQuX2V4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHRoaXMuX2V2YWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgIGV4cHJlc3Npb25Qcm9wZXJ0eSxcclxuICAgICAgICAgICAgICBmaWVsZC5wYXJlbnQuZXhwcmVzc2lvblByb3BlcnRpZXMgJiZcclxuICAgICAgICAgICAgICAgIGZpZWxkLnBhcmVudC5leHByZXNzaW9uUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBmaWVsZC5wYXJlbnQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBleHByZXNzaW9uVmFsdWVTZXR0ZXJcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoa2V5ID09PSBcInRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XSxcclxuICAgICAgICAgICAgICBcImV4cHJlc3Npb25WYWx1ZVwiLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdldDogKCkgPT4gZmllbGQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgc2V0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uUHJvcGVydHkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSAoZXhwcmVzc2lvblByb3BlcnR5IGFzIE9ic2VydmFibGU8XHJcbiAgICAgICAgICAgIGFueVxyXG4gICAgICAgICAgPikuc3Vic2NyaWJlKHYgPT5cclxuICAgICAgICAgICAgZXZhbEV4cHJlc3Npb24oZXhwcmVzc2lvblZhbHVlU2V0dGVyLCB7IGZpZWxkIH0sIFtcclxuICAgICAgICAgICAgICB2LFxyXG4gICAgICAgICAgICAgIGZpZWxkLm1vZGVsLFxyXG4gICAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9uRGVzdHJveSA9IGZpZWxkLmhvb2tzLm9uRGVzdHJveTtcclxuICAgICAgICAgIGZpZWxkLmhvb2tzLm9uRGVzdHJveSA9IGZpZWxkID0+IHtcclxuICAgICAgICAgICAgb25EZXN0cm95ICYmIG9uRGVzdHJveShmaWVsZCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGlkZUV4cHJlc3Npb24pIHtcclxuICAgICAgZGVsZXRlIGZpZWxkLmhpZGU7XHJcblxyXG4gICAgICBsZXQgcGFyZW50ID0gZmllbGQucGFyZW50O1xyXG4gICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuaGlkZUV4cHJlc3Npb24pIHtcclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWVsZC5oaWRlRXhwcmVzc2lvbiA9IHRoaXMuX2V2YWxFeHByZXNzaW9uKFxyXG4gICAgICAgIGZpZWxkLmhpZGVFeHByZXNzaW9uLFxyXG4gICAgICAgIHBhcmVudCAmJiBwYXJlbnQuaGlkZUV4cHJlc3Npb24gPyAoKSA9PiBwYXJlbnQuaGlkZSA6IHVuZGVmaW5lZFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcFByb3BlcnR5KGZpZWxkLCBcImhpZGVcIiwgKHsgY3VycmVudFZhbHVlLCBmaXJzdENoYW5nZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdENoYW5nZSB8fCAoZmlyc3RDaGFuZ2UgJiYgY3VycmVudFZhbHVlID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgZmllbGQub3B0aW9ucy5faGlkZGVuRmllbGRzRm9yQ2hlY2sucHVzaChmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvc3RQb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgaWYgKGZpZWxkLnBhcmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZChmaWVsZCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ldmFsRXhwcmVzc2lvbihleHByZXNzaW9uLCBwYXJlbnRFeHByZXNzaW9uPykge1xyXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gfHwgKCgpID0+IGZhbHNlKTtcclxuICAgIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBleHByZXNzaW9uID0gZXZhbFN0cmluZ0V4cHJlc3Npb24oZXhwcmVzc2lvbiwgW1xyXG4gICAgICAgIFwibW9kZWxcIixcclxuICAgICAgICBcImZvcm1TdGF0ZVwiLFxyXG4gICAgICAgIFwiZmllbGRcIlxyXG4gICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50RXhwcmVzc2lvblxyXG4gICAgICA/IChtb2RlbDogYW55LCBmb3JtU3RhdGU6IGFueSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSA9PlxyXG4gICAgICAgICAgcGFyZW50RXhwcmVzc2lvbigpIHx8IGV4cHJlc3Npb24obW9kZWwsIGZvcm1TdGF0ZSwgZmllbGQpXHJcbiAgICAgIDogZXhwcmVzc2lvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrRmllbGQoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUsIGlnbm9yZUNhY2hlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zIGFzIHtcclxuICAgICAgX2hpZGRlbkZpZWxkc0ZvckNoZWNrOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlW107XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBtYXJrRm9yQ2hlY2sgPSBmYWxzZTtcclxuICAgIGZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaChmID0+IHtcclxuICAgICAgdGhpcy5jaGVja0ZpZWxkRXhwcmVzc2lvbkNoYW5nZShmLCBpZ25vcmVDYWNoZSkgJiYgKG1hcmtGb3JDaGVjayA9IHRydWUpO1xyXG4gICAgICBpZiAodGhpcy5jaGVja0ZpZWxkVmlzaWJpbGl0eUNoYW5nZShmLCBpZ25vcmVDYWNoZSkpIHtcclxuICAgICAgICBvcHRpb25zLl9oaWRkZW5GaWVsZHNGb3JDaGVjay5wdXNoKGYpO1xyXG4gICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmLmZpZWxkR3JvdXAgJiYgZi5maWVsZEdyb3VwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLl9jaGVja0ZpZWxkKGYsIGlnbm9yZUNhY2hlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG1hcmtGb3JDaGVjayAmJiBmaWVsZC5vcHRpb25zICYmIGZpZWxkLm9wdGlvbnMuX21hcmtGb3JDaGVjaykge1xyXG4gICAgICBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2soZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGQucGFyZW50KSB7XHJcbiAgICAgIG9wdGlvbnMuX2hpZGRlbkZpZWxkc0ZvckNoZWNrXHJcbiAgICAgICAgLnNvcnQoZiA9PiAoZi5oaWRlID8gLTEgOiAxKSlcclxuICAgICAgICAuZm9yRWFjaChmID0+IHRoaXMudG9nZ2xlRm9ybUNvbnRyb2woZiwgZi5oaWRlKSk7XHJcblxyXG4gICAgICBvcHRpb25zLl9oaWRkZW5GaWVsZHNGb3JDaGVjayA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0ZpZWxkRXhwcmVzc2lvbkNoYW5nZShcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gICAgaWdub3JlQ2FjaGVcclxuICApOiBib29sZWFuIHtcclxuICAgIGlmICghZmllbGQgfHwgIWZpZWxkLl9leHByZXNzaW9uUHJvcGVydGllcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1hcmtGb3JDaGVjayA9IGZhbHNlO1xyXG4gICAgY29uc3QgZXhwcmVzc2lvblByb3BlcnRpZXMgPSBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXM7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgbGV0IGV4cHJlc3Npb25WYWx1ZSA9IGV2YWxFeHByZXNzaW9uKFxyXG4gICAgICAgIGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvbixcclxuICAgICAgICB7IGZpZWxkIH0sXHJcbiAgICAgICAgW2ZpZWxkLm1vZGVsLCBmaWVsZC5vcHRpb25zLmZvcm1TdGF0ZSwgZmllbGRdXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChrZXkgPT09IFwidGVtcGxhdGVPcHRpb25zLmRpc2FibGVkXCIpIHtcclxuICAgICAgICBleHByZXNzaW9uVmFsdWUgPSAhIWV4cHJlc3Npb25WYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlnbm9yZUNhY2hlIHx8XHJcbiAgICAgICAgKGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvblZhbHVlICE9PSBleHByZXNzaW9uVmFsdWUgJiZcclxuICAgICAgICAgICghaXNPYmplY3QoZXhwcmVzc2lvblZhbHVlKSB8fFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShleHByZXNzaW9uVmFsdWUpICE9PVxyXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvblZhbHVlKSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XHJcbiAgICAgICAgZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XS5leHByZXNzaW9uVmFsdWUgPSBleHByZXNzaW9uVmFsdWU7XHJcbiAgICAgICAgZXZhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICBleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb25WYWx1ZVNldHRlcixcclxuICAgICAgICAgIHsgZmllbGQgfSxcclxuICAgICAgICAgIFtleHByZXNzaW9uVmFsdWUsIGZpZWxkLm1vZGVsLCBmaWVsZF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSBcInRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZFwiICYmIGZpZWxkLmtleSkge1xyXG4gICAgICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGZpZWxkLCBleHByZXNzaW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKFwibW9kZWwuXCIpID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXRoID0ga2V5LnJlcGxhY2UoL15tb2RlbFxcLi8sIFwiXCIpLFxyXG4gICAgICAgICAgICBjb250cm9sID1cclxuICAgICAgICAgICAgICBmaWVsZC5rZXkgJiYga2V5ID09PSBwYXRoXHJcbiAgICAgICAgICAgICAgICA/IGZpZWxkLmZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLnBhcmVudC5mb3JtQ29udHJvbC5nZXQocGF0aCk7XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjb250cm9sICYmXHJcbiAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgaXNOdWxsT3JVbmRlZmluZWQoY29udHJvbC52YWx1ZSkgJiZcclxuICAgICAgICAgICAgICBpc051bGxPclVuZGVmaW5lZChleHByZXNzaW9uVmFsdWUpXHJcbiAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgY29udHJvbC52YWx1ZSAhPT0gZXhwcmVzc2lvblZhbHVlXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29udHJvbC5wYXRjaFZhbHVlKGV4cHJlc3Npb25WYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hcmtGb3JDaGVjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tGaWVsZFZpc2liaWxpdHlDaGFuZ2UoXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSxcclxuICAgIGlnbm9yZUNhY2hlXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWZpZWxkIHx8IGlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkLmhpZGVFeHByZXNzaW9uKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZUV4cHJlc3Npb25SZXN1bHQ6IGJvb2xlYW4gPSAhIWV2YWxFeHByZXNzaW9uKFxyXG4gICAgICBmaWVsZC5oaWRlRXhwcmVzc2lvbixcclxuICAgICAgeyBmaWVsZCB9LFxyXG4gICAgICBbZmllbGQubW9kZWwsIGZpZWxkLm9wdGlvbnMuZm9ybVN0YXRlLCBmaWVsZF1cclxuICAgICk7XHJcbiAgICBsZXQgbWFya0ZvckNoZWNrID0gZmFsc2U7XHJcbiAgICBpZiAoaGlkZUV4cHJlc3Npb25SZXN1bHQgIT09IGZpZWxkLmhpZGUgfHwgaWdub3JlQ2FjaGUpIHtcclxuICAgICAgbWFya0ZvckNoZWNrID0gdHJ1ZTtcclxuICAgICAgZmllbGQuaGlkZSA9IGhpZGVFeHByZXNzaW9uUmVzdWx0O1xyXG4gICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuaGlkZGVuID0gaGlkZUV4cHJlc3Npb25SZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hcmtGb3JDaGVjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGlzYWJsZWRTdGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWcsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xyXG4gICAgICBmaWVsZC5maWVsZEdyb3VwXHJcbiAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgIGYgPT5cclxuICAgICAgICAgICAgIWYuZXhwcmVzc2lvblByb3BlcnRpZXMgfHxcclxuICAgICAgICAgICAgIWYuZXhwcmVzc2lvblByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWRcIilcclxuICAgICAgICApXHJcbiAgICAgICAgLmZvckVhY2goZiA9PiB0aGlzLnNldERpc2FibGVkU3RhdGUoZiwgdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQua2V5ICYmIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZCAhPT0gdmFsdWUpIHtcclxuICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUZvcm1Db250cm9sKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZywgaGlkZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgZmllbGQuZmllbGRHcm91cFxyXG4gICAgICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRlRXhwcmVzc2lvbilcclxuICAgICAgICAuZm9yRWFjaChmID0+IHRoaXMudG9nZ2xlRm9ybUNvbnRyb2woZiwgaGlkZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5mb3JtQ29udHJvbCAmJiBmaWVsZC5rZXkpIHtcclxuICAgICAgaGlkZSA9PT0gdHJ1ZSA/IHVucmVnaXN0ZXJDb250cm9sKGZpZWxkKSA6IHJlZ2lzdGVyQ29udHJvbChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm9wdGlvbnMuZmllbGRDaGFuZ2VzKSB7XHJcbiAgICAgIGZpZWxkLm9wdGlvbnMuZmllbGRDaGFuZ2VzLm5leHQoPFZYRm9ybVZhbHVlQ2hhbmdlRXZlbnQ+e1xyXG4gICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxyXG4gICAgICAgIHZhbHVlOiBoaWRlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=