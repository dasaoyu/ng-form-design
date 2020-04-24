/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getFieldId, assignModelValue, isUndefined, getFieldValue, reverseDeepMerge, getKeyPath } from "../../utils";
import { Guid } from "../../guid";
export class CoreExtension {
    /**
     * @param {?} vxFormConfig
     */
    constructor(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
        this.formId = 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        this.getFieldComponentInstance(field).prePopulate();
        if (field.parent) {
            return;
        }
        /** @type {?} */
        const fieldTransforms = (field.options && field.options.fieldTransform) ||
            this.vxFormConfig.extras.fieldTransform;
        (Array.isArray(fieldTransforms)
            ? fieldTransforms
            : [fieldTransforms]).forEach((/**
         * @param {?} fieldTransform
         * @return {?}
         */
        fieldTransform => {
            if (fieldTransform) {
                /** @type {?} */
                const fieldGroup = fieldTransform(field.fieldGroup, field.model, (/** @type {?} */ (field.formControl)), field.options);
                if (!fieldGroup) {
                }
            }
        }));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        this.initFieldOptions(field);
        this.getFieldComponentInstance(field).onPopulate();
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            (f, index) => {
                Object.defineProperty(f, "parent", {
                    get: (/**
                     * @return {?}
                     */
                    () => field),
                    configurable: true
                });
                Object.defineProperty(f, "index", {
                    get: (/**
                     * @return {?}
                     */
                    () => index),
                    configurable: true
                });
                this.formId++;
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        this.getFieldComponentInstance(field).postPopulate();
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldOptions(field) {
        /** @type {?} */
        const root = (/** @type {?} */ (field.parent));
        if (!root) {
            return;
        }
        Object.defineProperty(field, "form", {
            get: (/**
             * @return {?}
             */
            () => root.formControl),
            configurable: true
        });
        Object.defineProperty(field, "options", {
            get: (/**
             * @return {?}
             */
            () => root.options),
            configurable: true
        });
        Object.defineProperty(field, "model", {
            get: (/**
             * @return {?}
             */
            () => field.key && field.fieldGroup ? getFieldValue(field) : root.model),
            configurable: true
        });
        reverseDeepMerge(field, {
            id: getFieldId(`vxform_${this.formId}`, field, field["index"]),
            guid: Guid.create()["value"],
            hooks: {},
            modelOptions: {},
            templateOptions: !field.type || !field.key
                ? {}
                : {
                    label: "",
                    placeholder: "",
                    focus: false,
                    disabled: false
                }
        });
        if (field.lifecycle) {
        }
        if (field.template && field.type !== "template") {
            if (field.type) {
            }
            field.type = "template";
        }
        if (!field.type && field.fieldGroup) {
            field.type = "vxform-group";
        }
        if (field.type) {
            this.vxFormConfig.getMergedField(field);
        }
        if (!isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
            assignModelValue(root.model, getKeyPath(field), field.defaultValue);
        }
        this.initFieldWrappers(field);
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldWrappers(field) {
        field.wrappers = field.wrappers || [];
        /** @type {?} */
        const fieldTemplateManipulators = Object.assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
        field.wrappers = [
            ...this.vxFormConfig.templateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...field.wrappers,
            ...this.vxFormConfig.templateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field)))
        ].filter((/**
         * @param {?} el
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        (el, i, a) => el && i === a.indexOf(el)));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getFieldComponentInstance(field) {
        /** @type {?} */
        const componentRef = this.vxFormConfig.createComponent(field);
        /** @type {?} */
        const instance = componentRef
            ? ((/** @type {?} */ (componentRef.instance)))
            : {};
        return {
            prePopulate: (/**
             * @return {?}
             */
            () => instance.prePopulate && instance.prePopulate(field)),
            onPopulate: (/**
             * @return {?}
             */
            () => instance.onPopulate && instance.onPopulate(field)),
            postPopulate: (/**
             * @return {?}
             */
            () => instance.postPopulate && instance.postPopulate(field))
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CoreExtension.prototype.formId;
    /**
     * @type {?}
     * @private
     */
    CoreExtension.prototype.vxFormConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9jb3JlL2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVVBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDWCxNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRWxDLE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRHRDLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFDOEIsQ0FBQzs7Ozs7SUFFbEQsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSOztjQUVLLGVBQWUsR0FDbkIsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWM7UUFDekMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUM3QixDQUFDLENBQUMsZUFBZTtZQUNqQixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FDcEIsQ0FBQyxPQUFPOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekIsSUFBSSxjQUFjLEVBQUU7O3NCQUNaLFVBQVUsR0FBRyxjQUFjLENBQy9CLEtBQUssQ0FBQyxVQUFVLEVBQ2hCLEtBQUssQ0FBQyxLQUFLLEVBQ1gsbUJBQVcsS0FBSyxDQUFDLFdBQVcsRUFBQSxFQUM1QixLQUFLLENBQUMsT0FBTyxDQUNkO2dCQUNE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OztJQTVJQywrQkFBbUI7Ozs7O0lBQ1AscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBWWEZvcm1FeHRlbnNpb24sXHJcbiAgVlhGb3JtQ29uZmlnLFxyXG4gIFRlbXBsYXRlTWFuaXB1bGF0b3JzXHJcbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGaWVsZElkLFxyXG4gIGFzc2lnbk1vZGVsVmFsdWUsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgZ2V0RmllbGRWYWx1ZSxcclxuICByZXZlcnNlRGVlcE1lcmdlLFxyXG4gIGdldEtleVBhdGhcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9ndWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZUV4dGVuc2lvbiBpbXBsZW1lbnRzIFZYRm9ybUV4dGVuc2lvbiB7XHJcbiAgcHJpdmF0ZSBmb3JtSWQgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcpIHt9XHJcblxyXG4gIHByZVBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLnByZVBvcHVsYXRlKCk7XHJcbiAgICBpZiAoZmllbGQucGFyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWVsZFRyYW5zZm9ybXMgPVxyXG4gICAgICAoZmllbGQub3B0aW9ucyAmJiBmaWVsZC5vcHRpb25zLmZpZWxkVHJhbnNmb3JtKSB8fFxyXG4gICAgICB0aGlzLnZ4Rm9ybUNvbmZpZy5leHRyYXMuZmllbGRUcmFuc2Zvcm07XHJcbiAgICAoQXJyYXkuaXNBcnJheShmaWVsZFRyYW5zZm9ybXMpXHJcbiAgICAgID8gZmllbGRUcmFuc2Zvcm1zXHJcbiAgICAgIDogW2ZpZWxkVHJhbnNmb3Jtc11cclxuICAgICkuZm9yRWFjaChmaWVsZFRyYW5zZm9ybSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZFRyYW5zZm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkR3JvdXAgPSBmaWVsZFRyYW5zZm9ybShcclxuICAgICAgICAgIGZpZWxkLmZpZWxkR3JvdXAsXHJcbiAgICAgICAgICBmaWVsZC5tb2RlbCxcclxuICAgICAgICAgIDxGb3JtR3JvdXA+ZmllbGQuZm9ybUNvbnRyb2wsXHJcbiAgICAgICAgICBmaWVsZC5vcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIWZpZWxkR3JvdXApIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Qb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgdGhpcy5pbml0RmllbGRPcHRpb25zKGZpZWxkKTtcclxuICAgIHRoaXMuZ2V0RmllbGRDb21wb25lbnRJbnN0YW5jZShmaWVsZCkub25Qb3B1bGF0ZSgpO1xyXG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcInBhcmVudFwiLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IGZpZWxkLFxyXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwiaW5kZXhcIiwge1xyXG4gICAgICAgICAgZ2V0OiAoKSA9PiBpbmRleCxcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybUlkKys7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9zdFBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLnBvc3RQb3B1bGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmllbGRPcHRpb25zKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBjb25zdCByb290ID0gPFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGU+ZmllbGQucGFyZW50O1xyXG4gICAgaWYgKCFyb290KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwiZm9ybVwiLCB7XHJcbiAgICAgIGdldDogKCkgPT4gcm9vdC5mb3JtQ29udHJvbCxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgXCJvcHRpb25zXCIsIHtcclxuICAgICAgZ2V0OiAoKSA9PiByb290Lm9wdGlvbnMsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwibW9kZWxcIiwge1xyXG4gICAgICBnZXQ6ICgpID0+XHJcbiAgICAgICAgZmllbGQua2V5ICYmIGZpZWxkLmZpZWxkR3JvdXAgPyBnZXRGaWVsZFZhbHVlKGZpZWxkKSA6IHJvb3QubW9kZWwsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2ZXJzZURlZXBNZXJnZShmaWVsZCwge1xyXG4gICAgICBpZDogZ2V0RmllbGRJZChgdnhmb3JtXyR7dGhpcy5mb3JtSWR9YCwgZmllbGQsIGZpZWxkW1wiaW5kZXhcIl0pLFxyXG4gICAgICBndWlkOiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIGhvb2tzOiB7fSxcclxuICAgICAgbW9kZWxPcHRpb25zOiB7fSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOlxyXG4gICAgICAgICFmaWVsZC50eXBlIHx8ICFmaWVsZC5rZXlcclxuICAgICAgICAgID8ge31cclxuICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZpZWxkLmxpZmVjeWNsZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50ZW1wbGF0ZSAmJiBmaWVsZC50eXBlICE9PSBcInRlbXBsYXRlXCIpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUpIHtcclxuICAgICAgfVxyXG4gICAgICBmaWVsZC50eXBlID0gXCJ0ZW1wbGF0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGQudHlwZSAmJiBmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgIGZpZWxkLnR5cGUgPSBcInZ4Zm9ybS1ncm91cFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50eXBlKSB7XHJcbiAgICAgIHRoaXMudnhGb3JtQ29uZmlnLmdldE1lcmdlZEZpZWxkKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZpZWxkLmRlZmF1bHRWYWx1ZSkgJiYgaXNVbmRlZmluZWQoZ2V0RmllbGRWYWx1ZShmaWVsZCkpKSB7XHJcbiAgICAgIGFzc2lnbk1vZGVsVmFsdWUocm9vdC5tb2RlbCwgZ2V0S2V5UGF0aChmaWVsZCksIGZpZWxkLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0RmllbGRXcmFwcGVycyhmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRGaWVsZFdyYXBwZXJzKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgZmllbGQud3JhcHBlcnMgPSBmaWVsZC53cmFwcGVycyB8fCBbXTtcclxuICAgIGNvbnN0IGZpZWxkVGVtcGxhdGVNYW5pcHVsYXRvcnM6IFRlbXBsYXRlTWFuaXB1bGF0b3JzID0ge1xyXG4gICAgICBwcmVXcmFwcGVyOiBbXSxcclxuICAgICAgcG9zdFdyYXBwZXI6IFtdLFxyXG4gICAgICAuLi4oZmllbGQudGVtcGxhdGVPcHRpb25zLnRlbXBsYXRlTWFuaXB1bGF0b3JzIHx8IHt9KVxyXG4gICAgfTtcclxuXHJcbiAgICBmaWVsZC53cmFwcGVycyA9IFtcclxuICAgICAgLi4udGhpcy52eEZvcm1Db25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXHJcbiAgICAgIC4uLmZpZWxkVGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXHJcbiAgICAgIC4uLmZpZWxkLndyYXBwZXJzLFxyXG4gICAgICAuLi50aGlzLnZ4Rm9ybUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wb3N0V3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXHJcbiAgICAgIC4uLmZpZWxkVGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIubWFwKG0gPT4gbShmaWVsZCkpXHJcbiAgICBdLmZpbHRlcigoZWwsIGksIGEpID0+IGVsICYmIGkgPT09IGEuaW5kZXhPZihlbCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZENvbXBvbmVudEluc3RhbmNlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZ4Rm9ybUNvbmZpZy5jcmVhdGVDb21wb25lbnQoZmllbGQpO1xyXG4gICAgY29uc3QgaW5zdGFuY2U6IFZYRm9ybUV4dGVuc2lvbiA9IGNvbXBvbmVudFJlZlxyXG4gICAgICA/IChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByZVBvcHVsYXRlOiAoKSA9PiBpbnN0YW5jZS5wcmVQb3B1bGF0ZSAmJiBpbnN0YW5jZS5wcmVQb3B1bGF0ZShmaWVsZCksXHJcbiAgICAgIG9uUG9wdWxhdGU6ICgpID0+IGluc3RhbmNlLm9uUG9wdWxhdGUgJiYgaW5zdGFuY2Uub25Qb3B1bGF0ZShmaWVsZCksXHJcbiAgICAgIHBvc3RQb3B1bGF0ZTogKCkgPT4gaW5zdGFuY2UucG9zdFBvcHVsYXRlICYmIGluc3RhbmNlLnBvc3RQb3B1bGF0ZShmaWVsZClcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==