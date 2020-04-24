/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, Injector } from "@angular/core";
import { VXFormConfig } from "./vxform.config";
import { Subject } from "rxjs";
import { defineHiddenProp } from "../utils";
import * as i0 from "@angular/core";
import * as i1 from "./vxform.config";
var VXFormBuilder = /** @class */ (function () {
    function VXFormBuilder(vxFormConfig, componentFactoryResolver, injector) {
        this.vxFormConfig = vxFormConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * @param {?} formControl
     * @param {?=} fieldGroup
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    VXFormBuilder.prototype.buildForm = /**
     * @param {?} formControl
     * @param {?=} fieldGroup
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    function (formControl, fieldGroup, model, options) {
        if (fieldGroup === void 0) { fieldGroup = []; }
        if (!this.vxFormConfig.extensions.core) {
        }
        this._buildForm({
            fieldGroup: fieldGroup,
            model: model,
            formControl: formControl,
            options: this._setOptions(options)
        });
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    VXFormBuilder.prototype._buildForm = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return extension.prePopulate && extension.prePopulate(field); }));
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return extension.onPopulate && extension.onPopulate(field); }));
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return _this._buildForm(f); }));
        }
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return extension.postPopulate && extension.postPopulate(field); }));
    };
    /**
     * @private
     * @return {?}
     */
    VXFormBuilder.prototype.getExtensions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return Object.keys(this.vxFormConfig.extensions).map((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return _this.vxFormConfig.extensions[name]; }));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    VXFormBuilder.prototype._setOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        options = options || {};
        options.formState = options.formState || {};
        if (!options.showError) {
            options.showError = this.vxFormConfig.extras.showError;
        }
        if (!options.fieldChanges) {
            defineHiddenProp(options, "fieldChanges", new Subject());
        }
        if (!options._componentFactoryResolver) {
            defineHiddenProp(options, "_componentFactoryResolver", this.componentFactoryResolver);
        }
        if (!options._injector) {
            defineHiddenProp(options, "_injector", this.injector);
        }
        if (!options._hiddenFieldsForCheck) {
            options._hiddenFieldsForCheck = [];
        }
        if (!options._markForCheck) {
            options._markForCheck = (/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (field._componentRefs) {
                    field._componentRefs.forEach((/**
                     * @param {?} ref
                     * @return {?}
                     */
                    function (ref) {
                        return ref.changeDetectorRef.markForCheck();
                    }));
                }
                if (field.fieldGroup) {
                    field.fieldGroup.forEach((/**
                     * @param {?} f
                     * @return {?}
                     */
                    function (f) { return options._markForCheck(f); }));
                }
            });
        }
        return options;
    };
    VXFormBuilder.decorators = [
        { type: Injectable, args: [{ providedIn: "root" },] }
    ];
    /** @nocollapse */
    VXFormBuilder.ctorParameters = function () { return [
        { type: VXFormConfig },
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    /** @nocollapse */ VXFormBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormBuilder_Factory() { return new VXFormBuilder(i0.ɵɵinject(i1.VXFormConfig), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR)); }, token: VXFormBuilder, providedIn: "root" });
    return VXFormBuilder;
}());
export { VXFormBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXFormBuilder.prototype.vxFormConfig;
    /**
     * @type {?}
     * @private
     */
    VXFormBuilder.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    VXFormBuilder.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Z4Zm9ybS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUU1QztJQUVFLHVCQUNVLFlBQTBCLEVBQzFCLHdCQUFrRCxFQUNsRCxRQUFrQjtRQUZsQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFFSixpQ0FBUzs7Ozs7OztJQUFULFVBQ0UsV0FBa0MsRUFDbEMsVUFBb0MsRUFDcEMsS0FBVSxFQUNWLE9BQXNCO1FBRnRCLDJCQUFBLEVBQUEsZUFBb0M7UUFJcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtTQUN2QztRQUdELElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZCxVQUFVLFlBQUE7WUFDVixLQUFLLE9BQUE7WUFDTCxXQUFXLGFBQUE7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sa0NBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQTZCO1FBQWhELGlCQWVDO1FBZEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU87Ozs7UUFDMUIsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFT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QyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBWHpCLFlBQVk7Z0JBRkEsd0JBQXdCO2dCQUFFLFFBQVE7Ozt3QkFBdkQ7Q0E4R0MsQUFqR0QsSUFpR0M7U0FoR1ksYUFBYTs7Ozs7O0lBRXRCLHFDQUFrQzs7Ozs7SUFDbEMsaURBQTBEOzs7OztJQUMxRCxpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVlhGb3JtQ29uZmlnIH0gZnJvbSBcIi4vdnhmb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYRm9ybU9wdGlvbnMsXHJcbiAgVlhGb3JtRmllbGRDb25maWdDYWNoZSxcclxuICBWWEZvcm1WYWx1ZUNoYW5nZUV2ZW50LFxyXG4gIFZYRm9ybU9wdGlvbnNDYWNoZVxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGRlZmluZUhpZGRlblByb3AgfSBmcm9tIFwiLi4vdXRpbHNcIjsgXHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IFwicm9vdFwiIH0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1CdWlsZGVyIHtcclxuICBjb25zdHJ1Y3RvciggIFxyXG4gICAgcHJpdmF0ZSB2eEZvcm1Db25maWc6IFZYRm9ybUNvbmZpZyxcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG4gICkge31cclxuXHJcbiAgYnVpbGRGb3JtKFxyXG4gICAgZm9ybUNvbnRyb2w6IEZvcm1Hcm91cCB8IEZvcm1BcnJheSxcclxuICAgIGZpZWxkR3JvdXA6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBbXSxcclxuICAgIG1vZGVsOiBhbnksXHJcbiAgICBvcHRpb25zOiBWWEZvcm1PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMudnhGb3JtQ29uZmlnLmV4dGVuc2lvbnMuY29yZSkge1xyXG4gICAgfVxyXG4gXHJcbiAgICBcclxuICAgIHRoaXMuX2J1aWxkRm9ybSh7XHJcbiAgICAgIGZpZWxkR3JvdXAsXHJcbiAgICAgIG1vZGVsLFxyXG4gICAgICBmb3JtQ29udHJvbCxcclxuICAgICAgb3B0aW9uczogdGhpcy5fc2V0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgfSk7IFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYnVpbGRGb3JtKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKSB7XHJcbiAgICB0aGlzLmdldEV4dGVuc2lvbnMoKS5mb3JFYWNoKFxyXG4gICAgICBleHRlbnNpb24gPT4gZXh0ZW5zaW9uLnByZVBvcHVsYXRlICYmIGV4dGVuc2lvbi5wcmVQb3B1bGF0ZShmaWVsZClcclxuICAgICk7XHJcbiAgICB0aGlzLmdldEV4dGVuc2lvbnMoKS5mb3JFYWNoKFxyXG4gICAgICBleHRlbnNpb24gPT4gZXh0ZW5zaW9uLm9uUG9wdWxhdGUgJiYgZXh0ZW5zaW9uLm9uUG9wdWxhdGUoZmllbGQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgIGZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaChmID0+IHRoaXMuX2J1aWxkRm9ybShmKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRFeHRlbnNpb25zKCkuZm9yRWFjaChcclxuICAgICAgZXh0ZW5zaW9uID0+IGV4dGVuc2lvbi5wb3N0UG9wdWxhdGUgJiYgZXh0ZW5zaW9uLnBvc3RQb3B1bGF0ZShmaWVsZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV4dGVuc2lvbnMoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy52eEZvcm1Db25maWcuZXh0ZW5zaW9ucykubWFwKFxyXG4gICAgICBuYW1lID0+IHRoaXMudnhGb3JtQ29uZmlnLmV4dGVuc2lvbnNbbmFtZV1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRPcHRpb25zKG9wdGlvbnM6IFZYRm9ybU9wdGlvbnNDYWNoZSkge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmZvcm1TdGF0ZSA9IG9wdGlvbnMuZm9ybVN0YXRlIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5zaG93RXJyb3IpIHtcclxuICAgICAgb3B0aW9ucy5zaG93RXJyb3IgPSB0aGlzLnZ4Rm9ybUNvbmZpZy5leHRyYXMuc2hvd0Vycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy5maWVsZENoYW5nZXMpIHtcclxuICAgICAgZGVmaW5lSGlkZGVuUHJvcChcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIFwiZmllbGRDaGFuZ2VzXCIsXHJcbiAgICAgICAgbmV3IFN1YmplY3Q8VlhGb3JtVmFsdWVDaGFuZ2VFdmVudD4oKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XHJcbiAgICAgIGRlZmluZUhpZGRlblByb3AoXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICBcIl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcIixcclxuICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy5faW5qZWN0b3IpIHtcclxuICAgICAgZGVmaW5lSGlkZGVuUHJvcChvcHRpb25zLCBcIl9pbmplY3RvclwiLCB0aGlzLmluamVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wdGlvbnMuX2hpZGRlbkZpZWxkc0ZvckNoZWNrKSB7XHJcbiAgICAgIG9wdGlvbnMuX2hpZGRlbkZpZWxkc0ZvckNoZWNrID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLl9tYXJrRm9yQ2hlY2spIHtcclxuICAgICAgb3B0aW9ucy5fbWFya0ZvckNoZWNrID0gZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZC5fY29tcG9uZW50UmVmcykge1xyXG4gICAgICAgICAgZmllbGQuX2NvbXBvbmVudFJlZnMuZm9yRWFjaChyZWYgPT5cclxuICAgICAgICAgICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgICAgIGZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaChmID0+IG9wdGlvbnMuX21hcmtGb3JDaGVjayhmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxufVxyXG4iXX0=