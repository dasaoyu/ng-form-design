/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getFieldId, assignModelValue, isUndefined, getFieldValue, reverseDeepMerge, getKeyPath } from "../../utils";
import { Guid } from "../../guid";
var CoreExtension = /** @class */ (function () {
    function CoreExtension(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
        this.formId = 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.prePopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.getFieldComponentInstance(field).prePopulate();
        if (field.parent) {
            return;
        }
        /** @type {?} */
        var fieldTransforms = (field.options && field.options.fieldTransform) ||
            this.vxFormConfig.extras.fieldTransform;
        (Array.isArray(fieldTransforms)
            ? fieldTransforms
            : [fieldTransforms]).forEach((/**
         * @param {?} fieldTransform
         * @return {?}
         */
        function (fieldTransform) {
            if (fieldTransform) {
                /** @type {?} */
                var fieldGroup = fieldTransform(field.fieldGroup, field.model, (/** @type {?} */ (field.formControl)), field.options);
                if (!fieldGroup) {
                }
            }
        }));
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        this.initFieldOptions(field);
        this.getFieldComponentInstance(field).onPopulate();
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            function (f, index) {
                Object.defineProperty(f, "parent", {
                    get: (/**
                     * @return {?}
                     */
                    function () { return field; }),
                    configurable: true
                });
                Object.defineProperty(f, "index", {
                    get: (/**
                     * @return {?}
                     */
                    function () { return index; }),
                    configurable: true
                });
                _this.formId++;
            }));
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.postPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.getFieldComponentInstance(field).postPopulate();
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.initFieldOptions = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var root = (/** @type {?} */ (field.parent));
        if (!root) {
            return;
        }
        Object.defineProperty(field, "form", {
            get: (/**
             * @return {?}
             */
            function () { return root.formControl; }),
            configurable: true
        });
        Object.defineProperty(field, "options", {
            get: (/**
             * @return {?}
             */
            function () { return root.options; }),
            configurable: true
        });
        Object.defineProperty(field, "model", {
            get: (/**
             * @return {?}
             */
            function () {
                return field.key && field.fieldGroup ? getFieldValue(field) : root.model;
            }),
            configurable: true
        });
        reverseDeepMerge(field, {
            id: getFieldId("vxform_" + this.formId, field, field["index"]),
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
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.initFieldWrappers = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        field.wrappers = field.wrappers || [];
        /** @type {?} */
        var fieldTemplateManipulators = tslib_1.__assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
        field.wrappers = tslib_1.__spread(this.vxFormConfig.templateManipulators.preWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); })), fieldTemplateManipulators.preWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); })), field.wrappers, this.vxFormConfig.templateManipulators.postWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); })), fieldTemplateManipulators.postWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); }))).filter((/**
         * @param {?} el
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        function (el, i, a) { return el && i === a.indexOf(el); }));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.getFieldComponentInstance = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var componentRef = this.vxFormConfig.createComponent(field);
        /** @type {?} */
        var instance = componentRef
            ? ((/** @type {?} */ (componentRef.instance)))
            : {};
        return {
            prePopulate: (/**
             * @return {?}
             */
            function () { return instance.prePopulate && instance.prePopulate(field); }),
            onPopulate: (/**
             * @return {?}
             */
            function () { return instance.onPopulate && instance.onPopulate(field); }),
            postPopulate: (/**
             * @return {?}
             */
            function () { return instance.postPopulate && instance.postPopulate(field); })
        };
    };
    return CoreExtension;
}());
export { CoreExtension };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9jb3JlL2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixVQUFVLEVBQ1gsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVsQztJQUVFLHVCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUR0QyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzhCLENBQUM7Ozs7O0lBRWxELG1DQUFXOzs7O0lBQVgsVUFBWSxLQUE2QjtRQUN2QyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjs7WUFFSyxlQUFlLEdBQ25CLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1FBQ3pDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDN0IsQ0FBQyxDQUFDLGVBQWU7WUFDakIsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQ3BCLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsY0FBYztZQUN0QixJQUFJLGNBQWMsRUFBRTs7b0JBQ1osVUFBVSxHQUFHLGNBQWMsQ0FDL0IsS0FBSyxDQUFDLFVBQVUsRUFDaEIsS0FBSyxDQUFDLEtBQUssRUFDWCxtQkFBVyxLQUFLLENBQUMsV0FBVyxFQUFBLEVBQzVCLEtBQUssQ0FBQyxPQUFPLENBQ2Q7Z0JBQ0QsSUFBSSxDQUFDLFVB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TSxPQUFBLFFBQVEsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBckQsQ0FBcUQsQ0FBQTtTQUMxRSxDQUFDO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTdJRCxJQTZJQzs7Ozs7OztJQTVJQywrQkFBbUI7Ozs7O0lBQ1AscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBWWEZvcm1FeHRlbnNpb24sXHJcbiAgVlhGb3JtQ29uZmlnLFxyXG4gIFRlbXBsYXRlTWFuaXB1bGF0b3JzXHJcbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGaWVsZElkLFxyXG4gIGFzc2lnbk1vZGVsVmFsdWUsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgZ2V0RmllbGRWYWx1ZSxcclxuICByZXZlcnNlRGVlcE1lcmdlLFxyXG4gIGdldEtleVBhdGhcclxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9ndWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZUV4dGVuc2lvbiBpbXBsZW1lbnRzIFZYRm9ybUV4dGVuc2lvbiB7XHJcbiAgcHJpdmF0ZSBmb3JtSWQgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcpIHt9XHJcblxyXG4gIHByZVBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLnByZVBvcHVsYXRlKCk7XHJcbiAgICBpZiAoZmllbGQucGFyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWVsZFRyYW5zZm9ybXMgPVxyXG4gICAgICAoZmllbGQub3B0aW9ucyAmJiBmaWVsZC5vcHRpb25zLmZpZWxkVHJhbnNmb3JtKSB8fFxyXG4gICAgICB0aGlzLnZ4Rm9ybUNvbmZpZy5leHRyYXMuZmllbGRUcmFuc2Zvcm07XHJcbiAgICAoQXJyYXkuaXNBcnJheShmaWVsZFRyYW5zZm9ybXMpXHJcbiAgICAgID8gZmllbGRUcmFuc2Zvcm1zXHJcbiAgICAgIDogW2ZpZWxkVHJhbnNmb3Jtc11cclxuICAgICkuZm9yRWFjaChmaWVsZFRyYW5zZm9ybSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZFRyYW5zZm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkR3JvdXAgPSBmaWVsZFRyYW5zZm9ybShcclxuICAgICAgICAgIGZpZWxkLmZpZWxkR3JvdXAsXHJcbiAgICAgICAgICBmaWVsZC5tb2RlbCxcclxuICAgICAgICAgIDxGb3JtR3JvdXA+ZmllbGQuZm9ybUNvbnRyb2wsXHJcbiAgICAgICAgICBmaWVsZC5vcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIWZpZWxkR3JvdXApIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Qb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSkge1xyXG4gICAgdGhpcy5pbml0RmllbGRPcHRpb25zKGZpZWxkKTtcclxuICAgIHRoaXMuZ2V0RmllbGRDb21wb25lbnRJbnN0YW5jZShmaWVsZCkub25Qb3B1bGF0ZSgpO1xyXG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcInBhcmVudFwiLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IGZpZWxkLFxyXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwiaW5kZXhcIiwge1xyXG4gICAgICAgICAgZ2V0OiAoKSA9PiBpbmRleCxcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZm9ybUlkKys7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9zdFBvcHVsYXRlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLnBvc3RQb3B1bGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmllbGRPcHRpb25zKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBjb25zdCByb290ID0gPFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGU+ZmllbGQucGFyZW50O1xyXG4gICAgaWYgKCFyb290KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwiZm9ybVwiLCB7XHJcbiAgICAgIGdldDogKCkgPT4gcm9vdC5mb3JtQ29udHJvbCxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgXCJvcHRpb25zXCIsIHtcclxuICAgICAgZ2V0OiAoKSA9PiByb290Lm9wdGlvbnMsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsIFwibW9kZWxcIiwge1xyXG4gICAgICBnZXQ6ICgpID0+XHJcbiAgICAgICAgZmllbGQua2V5ICYmIGZpZWxkLmZpZWxkR3JvdXAgPyBnZXRGaWVsZFZhbHVlKGZpZWxkKSA6IHJvb3QubW9kZWwsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2ZXJzZURlZXBNZXJnZShmaWVsZCwge1xyXG4gICAgICBpZDogZ2V0RmllbGRJZChgdnhmb3JtXyR7dGhpcy5mb3JtSWR9YCwgZmllbGQsIGZpZWxkW1wiaW5kZXhcIl0pLFxyXG4gICAgICBndWlkOiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIGhvb2tzOiB7fSxcclxuICAgICAgbW9kZWxPcHRpb25zOiB7fSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOlxyXG4gICAgICAgICFmaWVsZC50eXBlIHx8ICFmaWVsZC5rZXlcclxuICAgICAgICAgID8ge31cclxuICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZpZWxkLmxpZmVjeWNsZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50ZW1wbGF0ZSAmJiBmaWVsZC50eXBlICE9PSBcInRlbXBsYXRlXCIpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUpIHtcclxuICAgICAgfVxyXG4gICAgICBmaWVsZC50eXBlID0gXCJ0ZW1wbGF0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGQudHlwZSAmJiBmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgIGZpZWxkLnR5cGUgPSBcInZ4Zm9ybS1ncm91cFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC50eXBlKSB7XHJcbiAgICAgIHRoaXMudnhGb3JtQ29uZmlnLmdldE1lcmdlZEZpZWxkKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZpZWxkLmRlZmF1bHRWYWx1ZSkgJiYgaXNVbmRlZmluZWQoZ2V0RmllbGRWYWx1ZShmaWVsZCkpKSB7XHJcbiAgICAgIGFzc2lnbk1vZGVsVmFsdWUocm9vdC5tb2RlbCwgZ2V0S2V5UGF0aChmaWVsZCksIGZpZWxkLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0RmllbGRXcmFwcGVycyhmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRGaWVsZFdyYXBwZXJzKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgZmllbGQud3JhcHBlcnMgPSBmaWVsZC53cmFwcGVycyB8fCBbXTtcclxuICAgIGNvbnN0IGZpZWxkVGVtcGxhdGVNYW5pcHVsYXRvcnM6IFRlbXBsYXRlTWFuaXB1bGF0b3JzID0ge1xyXG4gICAgICBwcmVXcmFwcGVyOiBbXSxcclxuICAgICAgcG9zdFdyYXBwZXI6IFtdLFxyXG4gICAgICAuLi4oZmllbGQudGVtcGxhdGVPcHRpb25zLnRlbXBsYXRlTWFuaXB1bGF0b3JzIHx8IHt9KVxyXG4gICAgfTtcclxuXHJcbiAgICBmaWVsZC53cmFwcGVycyA9IFtcclxuICAgICAgLi4udGhpcy52eEZvcm1Db25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXHJcbiAgICAgIC4uLmZpZWxkVGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXHJcbiAgICAgIC4uLmZpZWxkLndyYXBwZXJzLFxyXG4gICAgICAuLi50aGlzLnZ4Rm9ybUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wb3N0V3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXHJcbiAgICAgIC4uLmZpZWxkVGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIubWFwKG0gPT4gbShmaWVsZCkpXHJcbiAgICBdLmZpbHRlcigoZWwsIGksIGEpID0+IGVsICYmIGkgPT09IGEuaW5kZXhPZihlbCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZENvbXBvbmVudEluc3RhbmNlKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZ4Rm9ybUNvbmZpZy5jcmVhdGVDb21wb25lbnQoZmllbGQpO1xyXG4gICAgY29uc3QgaW5zdGFuY2U6IFZYRm9ybUV4dGVuc2lvbiA9IGNvbXBvbmVudFJlZlxyXG4gICAgICA/IChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KVxyXG4gICAgICA6IHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByZVBvcHVsYXRlOiAoKSA9PiBpbnN0YW5jZS5wcmVQb3B1bGF0ZSAmJiBpbnN0YW5jZS5wcmVQb3B1bGF0ZShmaWVsZCksXHJcbiAgICAgIG9uUG9wdWxhdGU6ICgpID0+IGluc3RhbmNlLm9uUG9wdWxhdGUgJiYgaW5zdGFuY2Uub25Qb3B1bGF0ZShmaWVsZCksXHJcbiAgICAgIHBvc3RQb3B1bGF0ZTogKCkgPT4gaW5zdGFuY2UucG9zdFBvcHVsYXRlICYmIGluc3RhbmNlLnBvc3RQb3B1bGF0ZShmaWVsZClcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==