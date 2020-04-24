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
    const form = (/** @type {?} */ (field.formControl.parent));
    if (form instanceof FormArray) {
        /** @type {?} */
        const key = form.controls.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c === field.formControl));
        if (key !== -1) {
            form.removeAt(key);
            field.formControl.setParent(null);
        }
    }
    else if (form instanceof FormGroup) {
        /** @type {?} */
        const paths = getKeyPath(field);
        /** @type {?} */
        const key = paths[paths.length - 1];
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
        ({ firstChange, currentValue }) => {
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
            (value) => (field.templateOptions["___$disabled"] = value)));
        }
    }
    /** @type {?} */
    let parent = (/** @type {?} */ (field.parent.formControl));
    if (!parent) {
        return;
    }
    /** @type {?} */
    const paths = getKeyPath(field);
    for (let i = 0; i < paths.length - 1; i++) {
        /** @type {?} */
        const path = paths[i];
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
    const value = getFieldValue(field);
    if (!(isNullOrUndefined(control.value) && isNullOrUndefined(value)) &&
        control.value !== value &&
        control instanceof FormControl) {
        control.patchValue(value);
    }
    /** @type {?} */
    const key = paths[paths.length - 1];
    if (parent.get([key]) !== control) {
        parent.setControl(key, control);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2V4dGVuc2lvbnMvZmllbGQtZm9ybS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUNMLFVBQVUsRUFDVixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixZQUFZLEVBQ2IsTUFBTSxhQUFhLENBQUM7Ozs7O0FBRXJCLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUF3Qjs7VUFDbEQsSUFBSSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUF5QjtJQUM5RCxJQUFJLElBQUksWUFBWSxTQUFTLEVBQUU7O2NBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFDO1FBQ2pFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztLQUNGO1NBQU0sSUFBSSxJQUFJLFlBQVksU0FBUyxFQUFFOztjQUM5QixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Y0FDekIsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUF3QixFQUFFLE9BQWE7SUFDckUsT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLE9BQU8sRUFBRTtRQUNqQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWhELEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxZQUFZLENBQ1YsS0FBSyxDQUFDLGVBQWUsRUFDckIsVUFBVTs7OztRQUNWLENBQUMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixZQUFZO29CQUNWLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDaEM7UUFDSCxDQUFDLEVBQ0YsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLHdCQUF3QixFQUFFO1lBQ3BDLE9BQU8sQ0FBQyx3QkFBd0I7Ozs7WUFDOUIsQ0FBQyxLQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUMsRUFDcEUsQ0FBQztTQUNIO0tBQ0Y7O1FBRUcsTUFBTSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFhO0lBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPO0tBQ1I7O1VBRUssS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNuQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDdkIsZUFBZSxDQUFDO2dCQUNkLEdBQUcsRUFBRSxJQUFJO2dCQUNULFdBQVcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7YUFDaEMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLEdBQUcsbUJBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsQ0FBQztLQUN4Qzs7VUFFSyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUNFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO1FBQ3ZCLE9BQU8sWUFBWSxXQUFXLEVBQzlCO1FBQ0EsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7VUFDSyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0S2V5UGF0aCxcclxuICBnZXRGaWVsZFZhbHVlLFxyXG4gIGlzTnVsbE9yVW5kZWZpbmVkLFxyXG4gIGRlZmluZUhpZGRlblByb3AsXHJcbiAgd3JhcFByb3BlcnR5XHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckNvbnRyb2woZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgY29uc3QgZm9ybSA9IGZpZWxkLmZvcm1Db250cm9sLnBhcmVudCBhcyBGb3JtQXJyYXkgfCBGb3JtR3JvdXA7XHJcbiAgaWYgKGZvcm0gaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgIGNvbnN0IGtleSA9IGZvcm0uY29udHJvbHMuZmluZEluZGV4KGMgPT4gYyA9PT0gZmllbGQuZm9ybUNvbnRyb2wpO1xyXG4gICAgaWYgKGtleSAhPT0gLTEpIHtcclxuICAgICAgZm9ybS5yZW1vdmVBdChrZXkpO1xyXG4gICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRQYXJlbnQobnVsbCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChmb3JtIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGdldEtleVBhdGgoZmllbGQpO1xyXG4gICAgY29uc3Qga2V5ID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV07XHJcbiAgICBpZiAoZm9ybS5nZXQoW2tleV0pID09PSBmaWVsZC5mb3JtQ29udHJvbCkge1xyXG4gICAgICBmb3JtLnJlbW92ZUNvbnRyb2woa2V5KTtcclxuICAgIH1cclxuICAgIGZpZWxkLmZvcm1Db250cm9sLnNldFBhcmVudChudWxsKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbnRyb2woZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnLCBjb250cm9sPzogYW55KSB7XHJcbiAgY29udHJvbCA9IGNvbnRyb2wgfHwgZmllbGQuZm9ybUNvbnRyb2w7XHJcbiAgaWYgKCFmaWVsZC5mb3JtQ29udHJvbCAmJiBjb250cm9sKSB7XHJcbiAgICBkZWZpbmVIaWRkZW5Qcm9wKGZpZWxkLCBcImZvcm1Db250cm9sXCIsIGNvbnRyb2wpO1xyXG5cclxuICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZCA9ICEhZmllbGQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkO1xyXG4gICAgd3JhcFByb3BlcnR5KFxyXG4gICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMsXHJcbiAgICAgIFwiZGlzYWJsZWRcIixcclxuICAgICAgKHsgZmlyc3RDaGFuZ2UsIGN1cnJlbnRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdENoYW5nZSkge1xyXG4gICAgICAgICAgY3VycmVudFZhbHVlXHJcbiAgICAgICAgICAgID8gZmllbGQuZm9ybUNvbnRyb2wuZGlzYWJsZSgpXHJcbiAgICAgICAgICAgIDogZmllbGQuZm9ybUNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKGNvbnRyb2wucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKSB7XHJcbiAgICAgIGNvbnRyb2wucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKFxyXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKGZpZWxkLnRlbXBsYXRlT3B0aW9uc1tcIl9fXyRkaXNhYmxlZFwiXSA9IHZhbHVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHBhcmVudCA9IGZpZWxkLnBhcmVudC5mb3JtQ29udHJvbCBhcyBGb3JtR3JvdXA7XHJcbiAgaWYgKCFwYXJlbnQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZ2V0S2V5UGF0aChmaWVsZCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIGNvbnN0IHBhdGggPSBwYXRoc1tpXTtcclxuICAgIGlmICghcGFyZW50LmdldChbcGF0aF0pKSB7XHJcbiAgICAgIHJlZ2lzdGVyQ29udHJvbCh7XHJcbiAgICAgICAga2V5OiBwYXRoLFxyXG4gICAgICAgIGZvcm1Db250cm9sOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuICAgICAgICBwYXJlbnQ6IHsgZm9ybUNvbnRyb2w6IHBhcmVudCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudCA9IDxGb3JtR3JvdXA+cGFyZW50LmdldChbcGF0aF0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSBnZXRGaWVsZFZhbHVlKGZpZWxkKTtcclxuICBpZiAoXHJcbiAgICAhKGlzTnVsbE9yVW5kZWZpbmVkKGNvbnRyb2wudmFsdWUpICYmIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkgJiZcclxuICAgIGNvbnRyb2wudmFsdWUgIT09IHZhbHVlICYmXHJcbiAgICBjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xcclxuICApIHtcclxuICAgIGNvbnRyb2wucGF0Y2hWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGtleSA9IHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdO1xyXG4gIGlmIChwYXJlbnQuZ2V0KFtrZXldKSAhPT0gY29udHJvbCkge1xyXG4gICAgcGFyZW50LnNldENvbnRyb2woa2V5LCBjb250cm9sKTtcclxuICB9XHJcbn1cclxuIl19