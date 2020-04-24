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
export class VXFormBuilder {
    /**
     * @param {?} vxFormConfig
     * @param {?} componentFactoryResolver
     * @param {?} injector
     */
    constructor(vxFormConfig, componentFactoryResolver, injector) {
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
    buildForm(formControl, fieldGroup = [], model, options) {
        if (!this.vxFormConfig.extensions.core) {
        }
        this._buildForm({
            fieldGroup,
            model,
            formControl,
            options: this._setOptions(options)
        });
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    _buildForm(field) {
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.prePopulate && extension.prePopulate(field)));
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.onPopulate && extension.onPopulate(field)));
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this._buildForm(f)));
        }
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.postPopulate && extension.postPopulate(field)));
    }
    /**
     * @private
     * @return {?}
     */
    getExtensions() {
        return Object.keys(this.vxFormConfig.extensions).map((/**
         * @param {?} name
         * @return {?}
         */
        name => this.vxFormConfig.extensions[name]));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _setOptions(options) {
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
            field => {
                if (field._componentRefs) {
                    field._componentRefs.forEach((/**
                     * @param {?} ref
                     * @return {?}
                     */
                    ref => ref.changeDetectorRef.markForCheck()));
                }
                if (field.fieldGroup) {
                    field.fieldGroup.forEach((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => options._markForCheck(f)));
                }
            });
        }
        return options;
    }
}
VXFormBuilder.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */
VXFormBuilder.ctorParameters = () => [
    { type: VXFormConfig },
    { type: ComponentFactoryResolver },
    { type: Injector }
];
/** @nocollapse */ VXFormBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormBuilder_Factory() { return new VXFormBuilder(i0.ɵɵinject(i1.VXFormConfig), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR)); }, token: VXFormBuilder, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Z4Zm9ybS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUc1QyxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBQ3hCLFlBQ1UsWUFBMEIsRUFDMUIsd0JBQWtELEVBQ2xELFFBQWtCO1FBRmxCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDOzs7Ozs7OztJQUVKLFNBQVMsQ0FDUCxXQUFrQyxFQUNsQyxhQUFrQyxFQUFFLEVBQ3BDLEtBQVUsRUFDVixPQUFzQjtRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1NBQ3ZDO1FBR0QsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNkLFVBQVU7WUFDVixLQUFLO1lBQ0wsV0FBVztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBNkI7UUFDOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU87Ozs7UUFDMUIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVB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bXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1Db25maWcgfSBmcm9tIFwiLi92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhGb3JtT3B0aW9ucyxcclxuICBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlLFxyXG4gIFZYRm9ybVZhbHVlQ2hhbmdlRXZlbnQsXHJcbiAgVlhGb3JtT3B0aW9uc0NhY2hlXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZGVmaW5lSGlkZGVuUHJvcCB9IGZyb20gXCIuLi91dGlsc1wiOyBcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogXCJyb290XCIgfSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUJ1aWxkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCAgXHJcbiAgICBwcml2YXRlIHZ4Rm9ybUNvbmZpZzogVlhGb3JtQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7fVxyXG5cclxuICBidWlsZEZvcm0oXHJcbiAgICBmb3JtQ29udHJvbDogRm9ybUdyb3VwIHwgRm9ybUFycmF5LFxyXG4gICAgZmllbGRHcm91cDogVlhGb3JtRmllbGRDb25maWdbXSA9IFtdLFxyXG4gICAgbW9kZWw6IGFueSxcclxuICAgIG9wdGlvbnM6IFZYRm9ybU9wdGlvbnNcclxuICApIHtcclxuICAgIGlmICghdGhpcy52eEZvcm1Db25maWcuZXh0ZW5zaW9ucy5jb3JlKSB7XHJcbiAgICB9XHJcbiBcclxuICAgIFxyXG4gICAgdGhpcy5fYnVpbGRGb3JtKHtcclxuICAgICAgZmllbGRHcm91cCxcclxuICAgICAgbW9kZWwsXHJcbiAgICAgIGZvcm1Db250cm9sLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLl9zZXRPcHRpb25zKG9wdGlvbnMpXHJcbiAgICB9KTsgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9idWlsZEZvcm0oZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpIHtcclxuICAgIHRoaXMuZ2V0RXh0ZW5zaW9ucygpLmZvckVhY2goXHJcbiAgICAgIGV4dGVuc2lvbiA9PiBleHRlbnNpb24ucHJlUG9wdWxhdGUgJiYgZXh0ZW5zaW9uLnByZVBvcHVsYXRlKGZpZWxkKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZ2V0RXh0ZW5zaW9ucygpLmZvckVhY2goXHJcbiAgICAgIGV4dGVuc2lvbiA9PiBleHRlbnNpb24ub25Qb3B1bGF0ZSAmJiBleHRlbnNpb24ub25Qb3B1bGF0ZShmaWVsZClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKGYgPT4gdGhpcy5fYnVpbGRGb3JtKGYpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEV4dGVuc2lvbnMoKS5mb3JFYWNoKFxyXG4gICAgICBleHRlbnNpb24gPT4gZXh0ZW5zaW9uLnBvc3RQb3B1bGF0ZSAmJiBleHRlbnNpb24ucG9zdFBvcHVsYXRlKGZpZWxkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXh0ZW5zaW9ucygpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnZ4Rm9ybUNvbmZpZy5leHRlbnNpb25zKS5tYXAoXHJcbiAgICAgIG5hbWUgPT4gdGhpcy52eEZvcm1Db25maWcuZXh0ZW5zaW9uc1tuYW1lXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldE9wdGlvbnMob3B0aW9uczogVlhGb3JtT3B0aW9uc0NhY2hlKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIG9wdGlvbnMuZm9ybVN0YXRlID0gb3B0aW9ucy5mb3JtU3RhdGUgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnNob3dFcnJvcikge1xyXG4gICAgICBvcHRpb25zLnNob3dFcnJvciA9IHRoaXMudnhGb3JtQ29uZmlnLmV4dHJhcy5zaG93RXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLmZpZWxkQ2hhbmdlcykge1xyXG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgXCJmaWVsZENoYW5nZXNcIixcclxuICAgICAgICBuZXcgU3ViamVjdDxWWEZvcm1WYWx1ZUNoYW5nZUV2ZW50PigpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgICAgZGVmaW5lSGlkZGVuUHJvcChcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIFwiX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclwiLFxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLl9pbmplY3Rvcikge1xyXG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKG9wdGlvbnMsIFwiX2luamVjdG9yXCIsIHRoaXMuaW5qZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy5faGlkZGVuRmllbGRzRm9yQ2hlY2spIHtcclxuICAgICAgb3B0aW9ucy5faGlkZGVuRmllbGRzRm9yQ2hlY2sgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wdGlvbnMuX21hcmtGb3JDaGVjaykge1xyXG4gICAgICBvcHRpb25zLl9tYXJrRm9yQ2hlY2sgPSBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkLl9jb21wb25lbnRSZWZzKSB7XHJcbiAgICAgICAgICBmaWVsZC5fY29tcG9uZW50UmVmcy5mb3JFYWNoKHJlZiA9PlxyXG4gICAgICAgICAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xyXG4gICAgICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKGYgPT4gb3B0aW9ucy5fbWFya0ZvckNoZWNrKGYpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==