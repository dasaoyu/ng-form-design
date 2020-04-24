/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractControl, FormGroup, FormControl } from "@angular/forms";
import { getKeyPath, getFieldValue, defineHiddenProp } from "../../utils";
import { registerControl } from "./utils";
export class FieldFormExtension {
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (field.key) {
            this.addFormControl(field);
        }
        if (field.parent && field.fieldGroup && !field.key) {
            defineHiddenProp(field, "formControl", field.parent.formControl);
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
        /** @type {?} */
        const updateValidity = this.setValidators(field);
        updateValidity &&
            ((/** @type {?} */ (field.formControl)))._updateTreeValidity({ emitEvent: false });
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    addFormControl(field) {
        /** @type {?} */
        const controlOptions = {
            updateOn: field.modelOptions.updateOn
        };
        /** @type {?} */
        let control;
        /** @type {?} */
        const form = (/** @type {?} */ (field.parent.formControl));
        /** @type {?} */
        const value = getFieldValue(field);
        /** @type {?} */
        const paths = getKeyPath(field);
        if (field.formControl instanceof AbstractControl ||
            (form && form.get(paths))) {
            control = field.formControl || form.get(paths);
        }
        else if (field._componentFactory &&
            field._componentFactory.component &&
            field._componentFactory.component.createControl) {
            /** @type {?} */
            const component = field._componentFactory.component;
            control = component.createControl(value, field);
        }
        else if (field.fieldGroup) {
            control = new FormGroup({}, controlOptions);
        }
        else {
            control = new FormControl(value, controlOptions);
        }
        registerControl(field, control);
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    setValidators(field) {
        /** @type {?} */
        let updateValidity = false;
        if (field.key) {
            const { _validators: validators, _asyncValidators: asyncValidators, formControl: control, templateOptions: { disabled } } = field;
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
        f => this.setValidators(f) && (updateValidity = true)));
        return updateValidity;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC1mb3JtL2ZpZWxkLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFdBQVcsRUFFWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsVUFBVSxDQUFDLEtBQTZCO1FBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDbEQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBNkI7UUFDeEMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjs7Y0FFSyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDaEQsY0FBYztZQUNaLENBQUMsbUJBQUEsS0FBSyxDQUFDLFdBQVcsRUFBTyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsS0FBNkI7O2NBQzVDLGNBQWMsR0FBMkI7WUFDN0MsUUFBUSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN0Qzs7WUFDRyxPQUF3Qjs7Y0FFdEIsSUFBSSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFhOztjQUM1QyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Y0FDNUIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFDRSxLQUFLLENBQUMsV0FBVyxZQUFZLGVBQWU7WUFDNUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN6QjtZQUNBLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEQ7YUFBTSxJQUNMLEtBQUssQ0FBQyxpQkFBaUI7WUFDdkIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVM7WUFDakMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQy9DOztrQkFDTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVM7WUFFbkQsT0FBTyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxLQUE2Qjs7WUFDN0MsY0FBYyxHQUFHLEtBQUs7UUFDMUIsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO2tCQUNQLEVBQ0osV0FBVyxFQUFFLFVBQVUsRUFDdkIsZ0JBQWdCLEVBQUUsZUFBZSxFQUNqQyxXQUFXLEVBQUUsT0FBTyxFQUNwQixlQUFlLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFDOUIsR0FBRyxLQUFLO1lBRVQsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3RELGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDdkI7WUFFRCxJQUFJLFVBQVUsS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxlQUFlLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDOUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1QyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTzs7OztRQUM5QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQ3RELENBQUM7UUFFRixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWWEZvcm1FeHRlbnNpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdnhmb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgQWJzdHJhY3RDb250cm9sT3B0aW9uc1xyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBnZXRLZXlQYXRoLCBnZXRGaWVsZFZhbHVlLCBkZWZpbmVIaWRkZW5Qcm9wIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyQ29udHJvbCB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRGb3JtRXh0ZW5zaW9uIGltcGxlbWVudHMgVlhGb3JtRXh0ZW5zaW9uIHtcclxuICBvblBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBpZiAoZmllbGQua2V5KSB7XHJcbiAgICAgIHRoaXMuYWRkRm9ybUNvbnRyb2woZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5wYXJlbnQgJiYgZmllbGQuZmllbGRHcm91cCAmJiAhZmllbGQua2V5KSB7XHJcbiAgICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsIFwiZm9ybUNvbnRyb2xcIiwgZmllbGQucGFyZW50LmZvcm1Db250cm9sKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvc3RQb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgaWYgKGZpZWxkLnBhcmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlVmFsaWRpdHkgPSB0aGlzLnNldFZhbGlkYXRvcnMoZmllbGQpO1xyXG4gICAgdXBkYXRlVmFsaWRpdHkgJiZcclxuICAgICAgKGZpZWxkLmZvcm1Db250cm9sIGFzIGFueSkuX3VwZGF0ZVRyZWVWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEZvcm1Db250cm9sKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBjb25zdCBjb250cm9sT3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyA9IHtcclxuICAgICAgdXBkYXRlT246IGZpZWxkLm1vZGVsT3B0aW9ucy51cGRhdGVPblxyXG4gICAgfTtcclxuICAgIGxldCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGZpZWxkLnBhcmVudC5mb3JtQ29udHJvbCBhcyBGb3JtR3JvdXA7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBnZXRLZXlQYXRoKGZpZWxkKTtcclxuICAgIGlmIChcclxuICAgICAgZmllbGQuZm9ybUNvbnRyb2wgaW5zdGFuY2VvZiBBYnN0cmFjdENvbnRyb2wgfHxcclxuICAgICAgKGZvcm0gJiYgZm9ybS5nZXQocGF0aHMpKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnRyb2wgPSBmaWVsZC5mb3JtQ29udHJvbCB8fCBmb3JtLmdldChwYXRocyk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBmaWVsZC5fY29tcG9uZW50RmFjdG9yeSAmJlxyXG4gICAgICBmaWVsZC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnQgJiZcclxuICAgICAgZmllbGQuX2NvbXBvbmVudEZhY3RvcnkuY29tcG9uZW50LmNyZWF0ZUNvbnRyb2xcclxuICAgICkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSBmaWVsZC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnQ7XHJcblxyXG4gICAgICBjb250cm9sID0gY29tcG9uZW50LmNyZWF0ZUNvbnRyb2wodmFsdWUsIGZpZWxkKTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGQuZmllbGRHcm91cCkge1xyXG4gICAgICBjb250cm9sID0gbmV3IEZvcm1Hcm91cCh7fSwgY29udHJvbE9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29udHJvbChmaWVsZCwgY29udHJvbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFZhbGlkYXRvcnMoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIGxldCB1cGRhdGVWYWxpZGl0eSA9IGZhbHNlO1xyXG4gICAgaWYgKGZpZWxkLmtleSkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgX3ZhbGlkYXRvcnM6IHZhbGlkYXRvcnMsXHJcbiAgICAgICAgX2FzeW5jVmFsaWRhdG9yczogYXN5bmNWYWxpZGF0b3JzLFxyXG4gICAgICAgIGZvcm1Db250cm9sOiBjb250cm9sLFxyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogeyBkaXNhYmxlZCB9XHJcbiAgICAgIH0gPSBmaWVsZDtcclxuXHJcbiAgICAgIGlmIChkaXNhYmxlZCAmJiBjb250cm9sLmVuYWJsZWQpIHtcclxuICAgICAgICBjb250cm9sLmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlLCBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICAgICAgICB1cGRhdGVWYWxpZGl0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWxpZGF0b3JzICE9PSBjb250cm9sLnZhbGlkYXRvcikge1xyXG4gICAgICAgIGNvbnRyb2wuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcclxuICAgICAgICB1cGRhdGVWYWxpZGl0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFzeW5jVmFsaWRhdG9ycyAhPT0gY29udHJvbC5hc3luY1ZhbGlkYXRvcikge1xyXG4gICAgICAgIGNvbnRyb2wuc2V0QXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycyk7XHJcbiAgICAgICAgdXBkYXRlVmFsaWRpdHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgKGZpZWxkLmZpZWxkR3JvdXAgfHwgW10pLmZvckVhY2goXHJcbiAgICAgIGYgPT4gdGhpcy5zZXRWYWxpZGF0b3JzKGYpICYmICh1cGRhdGVWYWxpZGl0eSA9IHRydWUpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB1cGRhdGVWYWxpZGl0eTtcclxuICB9XHJcbn1cclxuIl19