/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractControl, FormGroup, FormControl } from "@angular/forms";
import { getKeyPath, getFieldValue, defineHiddenProp } from "../../utils";
import { registerControl } from "./utils";
var FieldFormExtension = /** @class */ (function () {
    function FieldFormExtension() {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldFormExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.key) {
            this.addFormControl(field);
        }
        if (field.parent && field.fieldGroup && !field.key) {
            defineHiddenProp(field, "formControl", field.parent.formControl);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldFormExtension.prototype.postPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.parent) {
            return;
        }
        /** @type {?} */
        var updateValidity = this.setValidators(field);
        updateValidity &&
            ((/** @type {?} */ (field.formControl)))._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldFormExtension.prototype.addFormControl = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var controlOptions = {
            updateOn: field.modelOptions.updateOn
        };
        /** @type {?} */
        var control;
        /** @type {?} */
        var form = (/** @type {?} */ (field.parent.formControl));
        /** @type {?} */
        var value = getFieldValue(field);
        /** @type {?} */
        var paths = getKeyPath(field);
        if (field.formControl instanceof AbstractControl ||
            (form && form.get(paths))) {
            control = field.formControl || form.get(paths);
        }
        else if (field._componentFactory &&
            field._componentFactory.component &&
            field._componentFactory.component.createControl) {
            /** @type {?} */
            var component = field._componentFactory.component;
            control = component.createControl(value, field);
        }
        else if (field.fieldGroup) {
            control = new FormGroup({}, controlOptions);
        }
        else {
            control = new FormControl(value, controlOptions);
        }
        registerControl(field, control);
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldFormExtension.prototype.setValidators = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        /** @type {?} */
        var updateValidity = false;
        if (field.key) {
            var validators = field._validators, asyncValidators = field._asyncValidators, control = field.formControl, disabled = field.templateOptions.disabled;
            if (disabled && control.enabled) {
                control.disable({ emitEvent: false, onlySelf: true });
                updateValidity = true;
            }
            if (validators !== control.validator) {
                control.setValidators(validators);
                updateValidity = true;
            }
            if (asyncValidators !== control.asyncValidator) {
                control.setAsyncValidators(asyncValidators);
                updateValidity = true;
            }
        }
        (field.fieldGroup || []).forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return _this.setValidators(f) && (updateValidity = true); }));
        return updateValidity;
    };
    return FieldFormExtension;
}());
export { FieldFormExtension };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC1mb3JtL2ZpZWxkLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFdBQVcsRUFFWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFMUM7SUFBQTtJQW1GQSxDQUFDOzs7OztJQWxGQyx1Q0FBVTs7OztJQUFWLFVBQVcsS0FBNkI7UUFDdEMsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNsRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxLQUE2QjtRQUN4QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSOztZQUVLLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNoRCxjQUFjO1lBQ1osQ0FBQyxtQkFBQSxLQUFLLENBQUMsV0FBVyxFQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVPLDJDQUFjOzs7OztJQUF0QixVQUF1QixLQUE2Qjs7WUFDNUMsY0FBYyxHQUEyQjtZQUM3QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRO1NBQ3RDOztZQUNHLE9BQXdCOztZQUV0QixJQUFJLEdBQUcsbUJBQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQWE7O1lBQzVDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDOztZQUM1QixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUNFLEtBQUssQ0FBQyxXQUFXLFlBQVksZUFBZTtZQUM1QyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ3pCO1lBQ0EsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRDthQUFNLElBQ0wsS0FBSyxDQUFDLGlCQUFpQjtZQUN2QixLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUztZQUNqQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFDL0M7O2dCQUNNLFNBQVMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUztZQUVuRCxPQUFPLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakQ7YUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNsRDtRQUVELGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRU8sMENBQWE7Ozs7O0lBQXJCLFVBQXNCLEtBQTZCO1FBQW5ELGlCQThCQzs7WUE3QkssY0FBYyxHQUFHLEtBQUs7UUFDMUIsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBRVgsSUFBQSw4QkFBdUIsRUFDdkIsd0NBQWlDLEVBQ2pDLDJCQUFvQixFQUNELHlDQUFRO1lBRzdCLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxVQUFVLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUN2QjtZQUNELElBQUksZUFBZSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNGO1FBRUQsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87Ozs7UUFDOUIsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFoRCxDQUFnRCxFQUN0RCxDQUFDO1FBRUYsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZYRm9ybUV4dGVuc2lvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtQ29udHJvbCxcclxuICBBYnN0cmFjdENvbnRyb2xPcHRpb25zXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IGdldEtleVBhdGgsIGdldEZpZWxkVmFsdWUsIGRlZmluZUhpZGRlblByb3AgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJDb250cm9sIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZEZvcm1FeHRlbnNpb24gaW1wbGVtZW50cyBWWEZvcm1FeHRlbnNpb24ge1xyXG4gIG9uUG9wdWxhdGUoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIGlmIChmaWVsZC5rZXkpIHtcclxuICAgICAgdGhpcy5hZGRGb3JtQ29udHJvbChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLnBhcmVudCAmJiBmaWVsZC5maWVsZEdyb3VwICYmICFmaWVsZC5rZXkpIHtcclxuICAgICAgZGVmaW5lSGlkZGVuUHJvcChmaWVsZCwgXCJmb3JtQ29udHJvbFwiLCBmaWVsZC5wYXJlbnQuZm9ybUNvbnRyb2wpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9zdFBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBpZiAoZmllbGQucGFyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVWYWxpZGl0eSA9IHRoaXMuc2V0VmFsaWRhdG9ycyhmaWVsZCk7XHJcbiAgICB1cGRhdGVWYWxpZGl0eSAmJlxyXG4gICAgICAoZmllbGQuZm9ybUNvbnRyb2wgYXMgYW55KS5fdXBkYXRlVHJlZVZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRm9ybUNvbnRyb2woZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIGNvbnN0IGNvbnRyb2xPcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zID0ge1xyXG4gICAgICB1cGRhdGVPbjogZmllbGQubW9kZWxPcHRpb25zLnVwZGF0ZU9uXHJcbiAgICB9O1xyXG4gICAgbGV0IGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZmllbGQucGFyZW50LmZvcm1Db250cm9sIGFzIEZvcm1Hcm91cDtcclxuICAgIGNvbnN0IHZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZCk7XHJcbiAgICBjb25zdCBwYXRocyA9IGdldEtleVBhdGgoZmllbGQpO1xyXG4gICAgaWYgKFxyXG4gICAgICBmaWVsZC5mb3JtQ29udHJvbCBpbnN0YW5jZW9mIEFic3RyYWN0Q29udHJvbCB8fFxyXG4gICAgICAoZm9ybSAmJiBmb3JtLmdldChwYXRocykpXHJcbiAgICApIHtcclxuICAgICAgY29udHJvbCA9IGZpZWxkLmZvcm1Db250cm9sIHx8IGZvcm0uZ2V0KHBhdGhzKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGZpZWxkLl9jb21wb25lbnRGYWN0b3J5ICYmXHJcbiAgICAgIGZpZWxkLl9jb21wb25lbnRGYWN0b3J5LmNvbXBvbmVudCAmJlxyXG4gICAgICBmaWVsZC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnQuY3JlYXRlQ29udHJvbFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGZpZWxkLl9jb21wb25lbnRGYWN0b3J5LmNvbXBvbmVudDtcclxuXHJcbiAgICAgIGNvbnRyb2wgPSBjb21wb25lbnQuY3JlYXRlQ29udHJvbCh2YWx1ZSwgZmllbGQpO1xyXG4gICAgfSBlbHNlIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgIGNvbnRyb2wgPSBuZXcgRm9ybUdyb3VwKHt9LCBjb250cm9sT3B0aW9ucyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKHZhbHVlLCBjb250cm9sT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb250cm9sKGZpZWxkLCBjb250cm9sKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsaWRhdG9ycyhmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgbGV0IHVwZGF0ZVZhbGlkaXR5ID0gZmFsc2U7XHJcbiAgICBpZiAoZmllbGQua2V5KSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBfdmFsaWRhdG9yczogdmFsaWRhdG9ycyxcclxuICAgICAgICBfYXN5bmNWYWxpZGF0b3JzOiBhc3luY1ZhbGlkYXRvcnMsXHJcbiAgICAgICAgZm9ybUNvbnRyb2w6IGNvbnRyb2wsXHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IGRpc2FibGVkIH1cclxuICAgICAgfSA9IGZpZWxkO1xyXG5cclxuICAgICAgaWYgKGRpc2FibGVkICYmIGNvbnRyb2wuZW5hYmxlZCkge1xyXG4gICAgICAgIGNvbnRyb2wuZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgICAgIHVwZGF0ZVZhbGlkaXR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbGlkYXRvcnMgIT09IGNvbnRyb2wudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgY29udHJvbC5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xyXG4gICAgICAgIHVwZGF0ZVZhbGlkaXR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYXN5bmNWYWxpZGF0b3JzICE9PSBjb250cm9sLmFzeW5jVmFsaWRhdG9yKSB7XHJcbiAgICAgICAgY29udHJvbC5zZXRBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzKTtcclxuICAgICAgICB1cGRhdGVWYWxpZGl0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAoZmllbGQuZmllbGRHcm91cCB8fCBbXSkuZm9yRWFjaChcclxuICAgICAgZiA9PiB0aGlzLnNldFZhbGlkYXRvcnMoZikgJiYgKHVwZGF0ZVZhbGlkaXR5ID0gdHJ1ZSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZVZhbGlkaXR5O1xyXG4gIH1cclxufVxyXG4iXX0=