/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isObject, isNullOrUndefined, isFunction, defineHiddenProp, wrapProperty } from "../../utils";
import { evalExpression, evalStringExpression, evalExpressionValueSetter } from "./utils";
import { Observable } from "rxjs";
import { unregisterControl, registerControl } from "../field-form/utils";
var FieldExpressionExtension = /** @class */ (function () {
    function FieldExpressionExtension() {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldExpressionExtension.prototype.prePopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (field.parent || field.options._checkField) {
            return;
        }
        field.options._checkField = (/**
         * @param {?} f
         * @param {?} ignoreCache
         * @return {?}
         */
        function (f, ignoreCache) {
            return _this._checkField(f, ignoreCache);
        });
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldExpressionExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!field.parent || field._expressionProperties) {
            return;
        }
        defineHiddenProp(field, "_expressionProperties", {});
        if (field.expressionProperties) {
            var _loop_1 = function (key) {
                /** @type {?} */
                var expressionProperty = field.expressionProperties[key];
                /** @type {?} */
                var expressionValueSetter = evalExpressionValueSetter("field." + key, [
                    "expressionValue",
                    "model",
                    "field"
                ]);
                if (typeof expressionProperty === "string" ||
                    isFunction(expressionProperty)) {
                    field._expressionProperties[key] = {
                        expression: this_1._evalExpression(expressionProperty, field.parent.expressionProperties &&
                            field.parent.expressionProperties.hasOwnProperty("templateOptions.disabled")
                            ? (/**
                             * @return {?}
                             */
                            function () { return field.parent.templateOptions.disabled; })
                            : undefined),
                        expressionValueSetter: expressionValueSetter
                    };
                    if (key === "templateOptions.disabled") {
                        Object.defineProperty(field._expressionProperties[key], "expressionValue", {
                            get: (/**
                             * @return {?}
                             */
                            function () { return field.templateOptions.disabled; }),
                            set: (/**
                             * @return {?}
                             */
                            function () { }),
                            enumerable: true,
                            configurable: true
                        });
                    }
                }
                else if (expressionProperty instanceof Observable) {
                    /** @type {?} */
                    var subscription_1 = ((/** @type {?} */ (expressionProperty))).subscribe((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) {
                        return evalExpression(expressionValueSetter, { field: field }, [
                            v,
                            field.model,
                            field
                        ]);
                    }));
                    /** @type {?} */
                    var onDestroy_1 = field.hooks.onDestroy;
                    field.hooks.onDestroy = (/**
                     * @param {?} field
                     * @return {?}
                     */
                    function (field) {
                        onDestroy_1 && onDestroy_1(field);
                        subscription_1.unsubscribe();
                    });
                }
            };
            var this_1 = this;
            for (var key in field.expressionProperties) {
                _loop_1(key);
            }
        }
        if (field.hideExpression) {
            delete field.hide;
            /** @type {?} */
            var parent_1 = field.parent;
            while (parent_1 && !parent_1.hideExpression) {
                parent_1 = parent_1.parent;
            }
            field.hideExpression = this._evalExpression(field.hideExpression, parent_1 && parent_1.hideExpression ? (/**
             * @return {?}
             */
            function () { return parent_1.hide; }) : undefined);
        }
        else {
            wrapProperty(field, "hide", (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var currentValue = _a.currentValue, firstChange = _a.firstChange;
                if (!firstChange || (firstChange && currentValue === true)) {
                    field.options._hiddenFieldsForCheck.push(field);
                }
            }));
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldExpressionExtension.prototype.postPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.parent) {
            return;
        }
        field.options._checkField(field, true);
    };
    /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    FieldExpressionExtension.prototype._evalExpression = /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    function (expression, parentExpression) {
        expression = expression || ((/**
         * @return {?}
         */
        function () { return false; }));
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
            function (model, formState, field) {
                return parentExpression() || expression(model, formState, field);
            })
            : expression;
    };
    /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    FieldExpressionExtension.prototype._checkField = /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    function (field, ignoreCache) {
        var _this = this;
        if (ignoreCache === void 0) { ignoreCache = false; }
        /** @type {?} */
        var options = (/** @type {?} */ (field.options));
        /** @type {?} */
        var markForCheck = false;
        field.fieldGroup.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            _this.checkFieldExpressionChange(f, ignoreCache) && (markForCheck = true);
            if (_this.checkFieldVisibilityChange(f, ignoreCache)) {
                options._hiddenFieldsForCheck.push(f);
                markForCheck = true;
            }
            if (f.fieldGroup && f.fieldGroup.length > 0) {
                _this._checkField(f, ignoreCache);
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
            function (f) { return (f.hide ? -1 : 1); }))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return _this.toggleFormControl(f, f.hide); }));
            options._hiddenFieldsForCheck = [];
        }
    };
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    FieldExpressionExtension.prototype.checkFieldExpressionChange = /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    function (field, ignoreCache) {
        if (!field || !field._expressionProperties) {
            return false;
        }
        /** @type {?} */
        var markForCheck = false;
        /** @type {?} */
        var expressionProperties = field._expressionProperties;
        for (var key in expressionProperties) {
            /** @type {?} */
            var expressionValue = evalExpression(expressionProperties[key].expression, { field: field }, [field.model, field.options.formState, field]);
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
                evalExpression(expressionProperties[key].expressionValueSetter, { field: field }, [expressionValue, field.model, field]);
                if (key === "templateOptions.disabled" && field.key) {
                    this.setDisabledState(field, expressionValue);
                }
                if (key.indexOf("model.") === 0) {
                    /** @type {?} */
                    var path = key.replace(/^model\./, "");
                    /** @type {?} */
                    var control = field.key && key === path
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
    };
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    FieldExpressionExtension.prototype.checkFieldVisibilityChange = /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    function (field, ignoreCache) {
        if (!field || isNullOrUndefined(field.hideExpression)) {
            return false;
        }
        /** @type {?} */
        var hideExpressionResult = !!evalExpression(field.hideExpression, { field: field }, [field.model, field.options.formState, field]);
        /** @type {?} */
        var markForCheck = false;
        if (hideExpressionResult !== field.hide || ignoreCache) {
            markForCheck = true;
            field.hide = hideExpressionResult;
            field.templateOptions.hidden = hideExpressionResult;
        }
        return markForCheck;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    FieldExpressionExtension.prototype.setDisabledState = /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        var _this = this;
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                return !f.expressionProperties ||
                    !f.expressionProperties.hasOwnProperty("templateOptions.disabled");
            }))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return _this.setDisabledState(f, value); }));
        }
        if (field.key && field.templateOptions.disabled !== value) {
            field.templateOptions.disabled = value;
        }
    };
    /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    FieldExpressionExtension.prototype.toggleFormControl = /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    function (field, hide) {
        var _this = this;
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return !f.hideExpression; }))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return _this.toggleFormControl(f, hide); }));
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
    };
    return FieldExpressionExtension;
}());
export { FieldExpressionExtension };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC1leHByZXNzaW9uL2ZpZWxkLWV4cHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFDTCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNiLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLHlCQUF5QixFQUMxQixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV6RTtJQUFBO0lBZ1JBLENBQUM7Ozs7O0lBL1FDLDhDQUFXOzs7O0lBQVgsVUFBWSxLQUE2QjtRQUF6QyxpQkFPQztRQU5DLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM3QyxPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7Ozs7O1FBQUcsVUFBQyxDQUFDLEVBQUUsV0FBVztZQUN6QyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztRQUFoQyxDQUFnQyxDQUFBLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCw2Q0FBVTs7OztJQUFWLFVBQVcsS0FBNkI7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQ2hELE9BQU87U0FDUjtRQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVyRCxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsRUFB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RUFBQztpQkFDOUIsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUF3QjtnQkFDdEQsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLElBQUk7YUFDWixFQUFBLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQWhSRCxJQWdSQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhGb3JtVmFsdWVDaGFuZ2VFdmVudCxcclxuICBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIGlzT2JqZWN0LFxyXG4gIGlzTnVsbE9yVW5kZWZpbmVkLFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgZGVmaW5lSGlkZGVuUHJvcCxcclxuICB3cmFwUHJvcGVydHlcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBldmFsRXhwcmVzc2lvbixcclxuICBldmFsU3RyaW5nRXhwcmVzc2lvbixcclxuICBldmFsRXhwcmVzc2lvblZhbHVlU2V0dGVyXHJcbn0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFZYRm9ybUV4dGVuc2lvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IHVucmVnaXN0ZXJDb250cm9sLCByZWdpc3RlckNvbnRyb2wgfSBmcm9tIFwiLi4vZmllbGQtZm9ybS91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkRXhwcmVzc2lvbkV4dGVuc2lvbiBpbXBsZW1lbnRzIFZYRm9ybUV4dGVuc2lvbiB7XHJcbiAgcHJlUG9wdWxhdGUoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIGlmIChmaWVsZC5wYXJlbnQgfHwgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZCA9IChmLCBpZ25vcmVDYWNoZSkgPT5cclxuICAgICAgdGhpcy5fY2hlY2tGaWVsZChmLCBpZ25vcmVDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBvblBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBpZiAoIWZpZWxkLnBhcmVudCB8fCBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsIFwiX2V4cHJlc3Npb25Qcm9wZXJ0aWVzXCIsIHt9KTtcclxuXHJcbiAgICBpZiAoZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uUHJvcGVydHkgPSBmaWVsZC5leHByZXNzaW9uUHJvcGVydGllc1trZXldLFxyXG4gICAgICAgICAgZXhwcmVzc2lvblZhbHVlU2V0dGVyID0gZXZhbEV4cHJlc3Npb25WYWx1ZVNldHRlcihgZmllbGQuJHtrZXl9YCwgW1xyXG4gICAgICAgICAgICBcImV4cHJlc3Npb25WYWx1ZVwiLFxyXG4gICAgICAgICAgICBcIm1vZGVsXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGRcIlxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHR5cGVvZiBleHByZXNzaW9uUHJvcGVydHkgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgIGlzRnVuY3Rpb24oZXhwcmVzc2lvblByb3BlcnR5KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZmllbGQuX2V4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHRoaXMuX2V2YWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgIGV4cHJlc3Npb25Qcm9wZXJ0eSxcclxuICAgICAgICAgICAgICBmaWVsZC5wYXJlbnQuZXhwcmVzc2lvblByb3BlcnRpZXMgJiZcclxuICAgICAgICAgICAgICAgIGZpZWxkLnBhcmVudC5leHByZXNzaW9uUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcclxuICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBmaWVsZC5wYXJlbnQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBleHByZXNzaW9uVmFsdWVTZXR0ZXJcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoa2V5ID09PSBcInRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZFwiKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgICBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XSxcclxuICAgICAgICAgICAgICBcImV4cHJlc3Npb25WYWx1ZVwiLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdldDogKCkgPT4gZmllbGQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgc2V0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uUHJvcGVydHkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSAoZXhwcmVzc2lvblByb3BlcnR5IGFzIE9ic2VydmFibGU8XHJcbiAgICAgICAgICAgIGFueVxyXG4gICAgICAgICAgPikuc3Vic2NyaWJlKHYgPT5cclxuICAgICAgICAgICAgZXZhbEV4cHJlc3Npb24oZXhwcmVzc2lvblZhbHVlU2V0dGVyLCB7IGZpZWxkIH0sIFtcclxuICAgICAgICAgICAgICB2LFxyXG4gICAgICAgICAgICAgIGZpZWxkLm1vZGVsLFxyXG4gICAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9uRGVzdHJveSA9IGZpZWxkLmhvb2tzLm9uRGVzdHJveTtcclxuICAgICAgICAgIGZpZWxkLmhvb2tzLm9uRGVzdHJveSA9IGZpZWxkID0+IHtcclxuICAgICAgICAgICAgb25EZXN0cm95ICYmIG9uRGVzdHJveShmaWVsZCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGlkZUV4cHJlc3Npb24pIHtcclxuICAgICAgZGVsZXRlIGZpZWxkLmhpZGU7XHJcblxyXG4gICAgICBsZXQgcGFyZW50ID0gZmllbGQucGFyZW50O1xyXG4gICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuaGlkZUV4cHJlc3Npb24pIHtcclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWVsZC5oaWRlRXhwcmVzc2lvbiA9IHRoaXMuX2V2YWxFeHByZXNzaW9uKFxyXG4gICAgICAgIGZpZWxkLmhpZGVFeHByZXNzaW9uLFxyXG4gICAgICAgIHBhcmVudCAmJiBwYXJlbnQuaGlkZUV4cHJlc3Npb24gPyAoKSA9PiBwYXJlbnQuaGlkZSA6IHVuZGVmaW5lZFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcFByb3BlcnR5KGZpZWxkLCBcImhpZGVcIiwgKHsgY3VycmVudFZhbHVlLCBmaXJzdENoYW5nZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdENoYW5nZSB8fCAoZmlyc3RDaGFuZ2UgJiYgY3VycmVudFZhbHVlID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgZmllbGQub3B0aW9ucy5faGlkZGVuRmllbGRzRm9yQ2hlY2sucHVzaChmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvc3RQb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgaWYgKGZpZWxkLnBhcmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZChmaWVsZCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ldmFsRXhwcmVzc2lvbihleHByZXNzaW9uLCBwYXJlbnRFeHByZXNzaW9uPykge1xyXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gfHwgKCgpID0+IGZhbHNlKTtcclxuICAgIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBleHByZXNzaW9uID0gZXZhbFN0cmluZ0V4cHJlc3Npb24oZXhwcmVzc2lvbiwgW1xyXG4gICAgICAgIFwibW9kZWxcIixcclxuICAgICAgICBcImZvcm1TdGF0ZVwiLFxyXG4gICAgICAgIFwiZmllbGRcIlxyXG4gICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyZW50RXhwcmVzc2lvblxyXG4gICAgICA/IChtb2RlbDogYW55LCBmb3JtU3RhdGU6IGFueSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSA9PlxyXG4gICAgICAgICAgcGFyZW50RXhwcmVzc2lvbigpIHx8IGV4cHJlc3Npb24obW9kZWwsIGZvcm1TdGF0ZSwgZmllbGQpXHJcbiAgICAgIDogZXhwcmVzc2lvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrRmllbGQoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUsIGlnbm9yZUNhY2hlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zIGFzIHtcclxuICAgICAgX2hpZGRlbkZpZWxkc0ZvckNoZWNrOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlW107XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBtYXJrRm9yQ2hlY2sgPSBmYWxzZTtcclxuICAgIGZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaChmID0+IHtcclxuICAgICAgdGhpcy5jaGVja0ZpZWxkRXhwcmVzc2lvbkNoYW5nZShmLCBpZ25vcmVDYWNoZSkgJiYgKG1hcmtGb3JDaGVjayA9IHRydWUpO1xyXG4gICAgICBpZiAodGhpcy5jaGVja0ZpZWxkVmlzaWJpbGl0eUNoYW5nZShmLCBpZ25vcmVDYWNoZSkpIHtcclxuICAgICAgICBvcHRpb25zLl9oaWRkZW5GaWVsZHNGb3JDaGVjay5wdXNoKGYpO1xyXG4gICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmLmZpZWxkR3JvdXAgJiYgZi5maWVsZEdyb3VwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLl9jaGVja0ZpZWxkKGYsIGlnbm9yZUNhY2hlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG1hcmtGb3JDaGVjayAmJiBmaWVsZC5vcHRpb25zICYmIGZpZWxkLm9wdGlvbnMuX21hcmtGb3JDaGVjaykge1xyXG4gICAgICBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2soZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGQucGFyZW50KSB7XHJcbiAgICAgIG9wdGlvbnMuX2hpZGRlbkZpZWxkc0ZvckNoZWNrXHJcbiAgICAgICAgLnNvcnQoZiA9PiAoZi5oaWRlID8gLTEgOiAxKSlcclxuICAgICAgICAuZm9yRWFjaChmID0+IHRoaXMudG9nZ2xlRm9ybUNvbnRyb2woZiwgZi5oaWRlKSk7XHJcblxyXG4gICAgICBvcHRpb25zLl9oaWRkZW5GaWVsZHNGb3JDaGVjayA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0ZpZWxkRXhwcmVzc2lvbkNoYW5nZShcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gICAgaWdub3JlQ2FjaGVcclxuICApOiBib29sZWFuIHtcclxuICAgIGlmICghZmllbGQgfHwgIWZpZWxkLl9leHByZXNzaW9uUHJvcGVydGllcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1hcmtGb3JDaGVjayA9IGZhbHNlO1xyXG4gICAgY29uc3QgZXhwcmVzc2lvblByb3BlcnRpZXMgPSBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXM7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcclxuICAgICAgbGV0IGV4cHJlc3Npb25WYWx1ZSA9IGV2YWxFeHByZXNzaW9uKFxyXG4gICAgICAgIGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvbixcclxuICAgICAgICB7IGZpZWxkIH0sXHJcbiAgICAgICAgW2ZpZWxkLm1vZGVsLCBmaWVsZC5vcHRpb25zLmZvcm1TdGF0ZSwgZmllbGRdXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChrZXkgPT09IFwidGVtcGxhdGVPcHRpb25zLmRpc2FibGVkXCIpIHtcclxuICAgICAgICBleHByZXNzaW9uVmFsdWUgPSAhIWV4cHJlc3Npb25WYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlnbm9yZUNhY2hlIHx8XHJcbiAgICAgICAgKGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvblZhbHVlICE9PSBleHByZXNzaW9uVmFsdWUgJiZcclxuICAgICAgICAgICghaXNPYmplY3QoZXhwcmVzc2lvblZhbHVlKSB8fFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShleHByZXNzaW9uVmFsdWUpICE9PVxyXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvblZhbHVlKSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XHJcbiAgICAgICAgZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XS5leHByZXNzaW9uVmFsdWUgPSBleHByZXNzaW9uVmFsdWU7XHJcbiAgICAgICAgZXZhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICBleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb25WYWx1ZVNldHRlcixcclxuICAgICAgICAgIHsgZmllbGQgfSxcclxuICAgICAgICAgIFtleHByZXNzaW9uVmFsdWUsIGZpZWxkLm1vZGVsLCBmaWVsZF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSBcInRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZFwiICYmIGZpZWxkLmtleSkge1xyXG4gICAgICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGZpZWxkLCBleHByZXNzaW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKFwibW9kZWwuXCIpID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXRoID0ga2V5LnJlcGxhY2UoL15tb2RlbFxcLi8sIFwiXCIpLFxyXG4gICAgICAgICAgICBjb250cm9sID1cclxuICAgICAgICAgICAgICBmaWVsZC5rZXkgJiYga2V5ID09PSBwYXRoXHJcbiAgICAgICAgICAgICAgICA/IGZpZWxkLmZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLnBhcmVudC5mb3JtQ29udHJvbC5nZXQocGF0aCk7XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjb250cm9sICYmXHJcbiAgICAgICAgICAgICEoXHJcbiAgICAgICAgICAgICAgaXNOdWxsT3JVbmRlZmluZWQoY29udHJvbC52YWx1ZSkgJiZcclxuICAgICAgICAgICAgICBpc051bGxPclVuZGVmaW5lZChleHByZXNzaW9uVmFsdWUpXHJcbiAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgY29udHJvbC52YWx1ZSAhPT0gZXhwcmVzc2lvblZhbHVlXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29udHJvbC5wYXRjaFZhbHVlKGV4cHJlc3Npb25WYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hcmtGb3JDaGVjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tGaWVsZFZpc2liaWxpdHlDaGFuZ2UoXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSxcclxuICAgIGlnbm9yZUNhY2hlXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWZpZWxkIHx8IGlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkLmhpZGVFeHByZXNzaW9uKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZUV4cHJlc3Npb25SZXN1bHQ6IGJvb2xlYW4gPSAhIWV2YWxFeHByZXNzaW9uKFxyXG4gICAgICBmaWVsZC5oaWRlRXhwcmVzc2lvbixcclxuICAgICAgeyBmaWVsZCB9LFxyXG4gICAgICBbZmllbGQubW9kZWwsIGZpZWxkLm9wdGlvbnMuZm9ybVN0YXRlLCBmaWVsZF1cclxuICAgICk7XHJcbiAgICBsZXQgbWFya0ZvckNoZWNrID0gZmFsc2U7XHJcbiAgICBpZiAoaGlkZUV4cHJlc3Npb25SZXN1bHQgIT09IGZpZWxkLmhpZGUgfHwgaWdub3JlQ2FjaGUpIHtcclxuICAgICAgbWFya0ZvckNoZWNrID0gdHJ1ZTtcclxuICAgICAgZmllbGQuaGlkZSA9IGhpZGVFeHByZXNzaW9uUmVzdWx0O1xyXG4gICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuaGlkZGVuID0gaGlkZUV4cHJlc3Npb25SZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hcmtGb3JDaGVjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGlzYWJsZWRTdGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWcsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xyXG4gICAgICBmaWVsZC5maWVsZEdyb3VwXHJcbiAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgIGYgPT5cclxuICAgICAgICAgICAgIWYuZXhwcmVzc2lvblByb3BlcnRpZXMgfHxcclxuICAgICAgICAgICAgIWYuZXhwcmVzc2lvblByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWRcIilcclxuICAgICAgICApXHJcbiAgICAgICAgLmZvckVhY2goZiA9PiB0aGlzLnNldERpc2FibGVkU3RhdGUoZiwgdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQua2V5ICYmIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZCAhPT0gdmFsdWUpIHtcclxuICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZUZvcm1Db250cm9sKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZywgaGlkZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgZmllbGQuZmllbGRHcm91cFxyXG4gICAgICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRlRXhwcmVzc2lvbilcclxuICAgICAgICAuZm9yRWFjaChmID0+IHRoaXMudG9nZ2xlRm9ybUNvbnRyb2woZiwgaGlkZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5mb3JtQ29udHJvbCAmJiBmaWVsZC5rZXkpIHtcclxuICAgICAgaGlkZSA9PT0gdHJ1ZSA/IHVucmVnaXN0ZXJDb250cm9sKGZpZWxkKSA6IHJlZ2lzdGVyQ29udHJvbChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm9wdGlvbnMuZmllbGRDaGFuZ2VzKSB7XHJcbiAgICAgIGZpZWxkLm9wdGlvbnMuZmllbGRDaGFuZ2VzLm5leHQoPFZYRm9ybVZhbHVlQ2hhbmdlRXZlbnQ+e1xyXG4gICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxyXG4gICAgICAgIHZhbHVlOiBoaWRlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=