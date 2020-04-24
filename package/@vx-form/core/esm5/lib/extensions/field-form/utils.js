/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormArray, FormGroup, FormControl } from "@angular/forms";
import { getKeyPath, getFieldValue, isNullOrUndefined, defineHiddenProp, wrapProperty } from "../../utils";
/**
 * @param {?} field
 * @return {?}
 */
export function unregisterControl(field) {
    /** @type {?} */
    var form = (/** @type {?} */ (field.formControl.parent));
    if (form instanceof FormArray) {
        /** @type {?} */
        var key = form.controls.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c === field.formControl; }));
        if (key !== -1) {
            form.removeAt(key);
            field.formControl.setParent(null);
        }
    }
    else if (form instanceof FormGroup) {
        /** @type {?} */
        var paths = getKeyPath(field);
        /** @type {?} */
        var key = paths[paths.length - 1];
        if (form.get([key]) === field.formControl) {
            form.removeControl(key);
        }
        field.formControl.setParent(null);
    }
}
/**
 * @param {?} field
 * @param {?=} control
 * @return {?}
 */
export function registerControl(field, control) {
    control = control || field.formControl;
    if (!field.formControl && control) {
        defineHiddenProp(field, "formControl", control);
        field.templateOptions.disabled = !!field.templateOptions.disabled;
        wrapProperty(field.templateOptions, "disabled", (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var firstChange = _a.firstChange, currentValue = _a.currentValue;
            if (!firstChange) {
                currentValue
                    ? field.formControl.disable()
                    : field.formControl.enable();
            }
        }));
        if (control.registerOnDisabledChange) {
            control.registerOnDisabledChange((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return (field.templateOptions["___$disabled"] = value); }));
        }
    }
    /** @type {?} */
    var parent = (/** @type {?} */ (field.parent.formControl));
    if (!parent) {
        return;
    }
    /** @type {?} */
    var paths = getKeyPath(field);
    for (var i = 0; i < paths.length - 1; i++) {
        /** @type {?} */
        var path = paths[i];
        if (!parent.get([path])) {
            registerControl({
                key: path,
                formControl: new FormGroup({}),
                parent: { formControl: parent }
            });
        }
        parent = (/** @type {?} */ (parent.get([path])));
    }
    /** @type {?} */
    var value = getFieldValue(field);
    if (!(isNullOrUndefined(control.value) && isNullOrUndefined(value)) &&
        control.value !== value &&
        control instanceof FormControl) {
        control.patchValue(value);
    }
    /** @type {?} */
    var key = paths[paths.length - 1];
    if (parent.get([key]) !== control) {
        parent.setControl(key, control);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2V4dGVuc2lvbnMvZmllbGQtZm9ybS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUNMLFVBQVUsRUFDVixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixZQUFZLEVBQ2IsTUFBTSxhQUFhLENBQUM7Ozs7O0FBRXJCLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUF3Qjs7UUFDbEQsSUFBSSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUF5QjtJQUM5RCxJQUFJLElBQUksWUFBWSxTQUFTLEVBQUU7O1lBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUF2QixDQUF1QixFQUFDO1FBQ2pFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztLQUNGO1NBQU0sSUFBSSxJQUFJLFlBQVksU0FBUyxFQUFFOztZQUM5QixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7WUFDekIsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUF3QixFQUFFLE9BQWE7SUFDckUsT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLE9BQU8sRUFBRTtRQUNqQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWhELEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxZQUFZLENBQ1YsS0FBSyxDQUFDLGVBQWUsRUFDckIsVUFBVTs7OztRQUNWLFVBQUMsRUFBNkI7Z0JBQTNCLDRCQUFXLEVBQUUsOEJBQVk7WUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsWUFBWTtvQkFDVixDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRTtZQUNwQyxPQUFPLENBQUMsd0JBQXdCOzs7O1lBQzlCLFVBQUMsS0FBYyxJQUFLLE9BQUEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUEvQyxDQUErQyxFQUNwRSxDQUFDO1NBQ0g7S0FDRjs7UUFFRyxNQUFNLEdBQUcsbUJBQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQWE7SUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE9BQU87S0FDUjs7UUFFSyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ25DLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN2QixlQUFlLENBQUM7Z0JBQ2QsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsV0FBVyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTthQUNoQyxDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sR0FBRyxtQkFBVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQSxDQUFDO0tBQ3hDOztRQUVLLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2xDLElBQ0UsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUs7UUFDdkIsT0FBTyxZQUFZLFdBQVcsRUFDOUI7UUFDQSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOztRQUNLLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUU7UUFDakMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDakM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBnZXRLZXlQYXRoLFxyXG4gIGdldEZpZWxkVmFsdWUsXHJcbiAgaXNOdWxsT3JVbmRlZmluZWQsXHJcbiAgZGVmaW5lSGlkZGVuUHJvcCxcclxuICB3cmFwUHJvcGVydHlcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQ29udHJvbChmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICBjb25zdCBmb3JtID0gZmllbGQuZm9ybUNvbnRyb2wucGFyZW50IGFzIEZvcm1BcnJheSB8IEZvcm1Hcm91cDtcclxuICBpZiAoZm9ybSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgY29uc3Qga2V5ID0gZm9ybS5jb250cm9scy5maW5kSW5kZXgoYyA9PiBjID09PSBmaWVsZC5mb3JtQ29udHJvbCk7XHJcbiAgICBpZiAoa2V5ICE9PSAtMSkge1xyXG4gICAgICBmb3JtLnJlbW92ZUF0KGtleSk7XHJcbiAgICAgIGZpZWxkLmZvcm1Db250cm9sLnNldFBhcmVudChudWxsKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGZvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcclxuICAgIGNvbnN0IHBhdGhzID0gZ2V0S2V5UGF0aChmaWVsZCk7XHJcbiAgICBjb25zdCBrZXkgPSBwYXRoc1twYXRocy5sZW5ndGggLSAxXTtcclxuICAgIGlmIChmb3JtLmdldChba2V5XSkgPT09IGZpZWxkLmZvcm1Db250cm9sKSB7XHJcbiAgICAgIGZvcm0ucmVtb3ZlQ29udHJvbChrZXkpO1xyXG4gICAgfVxyXG4gICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0UGFyZW50KG51bGwpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29udHJvbChmaWVsZDogVlhGb3JtRmllbGRDb25maWcsIGNvbnRyb2w/OiBhbnkpIHtcclxuICBjb250cm9sID0gY29udHJvbCB8fCBmaWVsZC5mb3JtQ29udHJvbDtcclxuICBpZiAoIWZpZWxkLmZvcm1Db250cm9sICYmIGNvbnRyb2wpIHtcclxuICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsIFwiZm9ybUNvbnRyb2xcIiwgY29udHJvbCk7XHJcblxyXG4gICAgZmllbGQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkID0gISFmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWQ7XHJcbiAgICB3cmFwUHJvcGVydHkoXHJcbiAgICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucyxcclxuICAgICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgICAoeyBmaXJzdENoYW5nZSwgY3VycmVudFZhbHVlIH0pID0+IHtcclxuICAgICAgICBpZiAoIWZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgPyBmaWVsZC5mb3JtQ29udHJvbC5kaXNhYmxlKClcclxuICAgICAgICAgICAgOiBmaWVsZC5mb3JtQ29udHJvbC5lbmFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAoY29udHJvbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UpIHtcclxuICAgICAgY29udHJvbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoXHJcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiAoZmllbGQudGVtcGxhdGVPcHRpb25zW1wiX19fJGRpc2FibGVkXCJdID0gdmFsdWUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgcGFyZW50ID0gZmllbGQucGFyZW50LmZvcm1Db250cm9sIGFzIEZvcm1Hcm91cDtcclxuICBpZiAoIXBhcmVudCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGF0aHMgPSBnZXRLZXlQYXRoKGZpZWxkKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgaWYgKCFwYXJlbnQuZ2V0KFtwYXRoXSkpIHtcclxuICAgICAgcmVnaXN0ZXJDb250cm9sKHtcclxuICAgICAgICBrZXk6IHBhdGgsXHJcbiAgICAgICAgZm9ybUNvbnRyb2w6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG4gICAgICAgIHBhcmVudDogeyBmb3JtQ29udHJvbDogcGFyZW50IH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyZW50ID0gPEZvcm1Hcm91cD5wYXJlbnQuZ2V0KFtwYXRoXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGQpO1xyXG4gIGlmIChcclxuICAgICEoaXNOdWxsT3JVbmRlZmluZWQoY29udHJvbC52YWx1ZSkgJiYgaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSAmJlxyXG4gICAgY29udHJvbC52YWx1ZSAhPT0gdmFsdWUgJiZcclxuICAgIGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbFxyXG4gICkge1xyXG4gICAgY29udHJvbC5wYXRjaFZhbHVlKHZhbHVlKTtcclxuICB9XHJcbiAgY29uc3Qga2V5ID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV07XHJcbiAgaWYgKHBhcmVudC5nZXQoW2tleV0pICE9PSBjb250cm9sKSB7XHJcbiAgICBwYXJlbnQuc2V0Q29udHJvbChrZXksIGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iXX0=