/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewContainerRef, ViewChild, Attribute, ComponentFactoryResolver, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { VXFormConfig } from "../services/vxform.config";
import { defineHiddenProp, wrapProperty } from "../utils";
var VXFormField = /** @class */ (function () {
    function VXFormField(vxFormConfig, componentFactoryResolver, injector, hideDeprecation) {
        this.vxFormConfig = vxFormConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.className = "";
        this.warnDeprecation = false;
        this.modelChange = new EventEmitter();
        this.warnDeprecation = hideDeprecation === null;
    }
    Object.defineProperty(VXFormField.prototype, "model", {
        set: /**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            this.warnDeprecation && console.warn(":" + this.constructor.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormField.prototype, "form", {
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.warnDeprecation && console.warn(":" + this.constructor.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormField.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.warnDeprecation && console.warn(":" + this.constructor.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormField.prototype, "rownumber", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != undefined && value != null && value > -1) {
                this.field.rownumber = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXFormField.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.triggerHook("afterContentInit");
    };
    /**
     * @return {?}
     */
    VXFormField.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.triggerHook("afterContentChecked");
    };
    /**
     * @return {?}
     */
    VXFormField.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.triggerHook("afterViewInit");
    };
    /**
     * @return {?}
     */
    VXFormField.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.triggerHook("afterViewChecked");
    };
    /**
     * @return {?}
     */
    VXFormField.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.triggerHook("doCheck");
    };
    /**
     * @return {?}
     */
    VXFormField.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.triggerHook("onInit");
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormField.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.triggerHook("onChanges", changes);
    };
    /**
     * @return {?}
     */
    VXFormField.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.field && defineHiddenProp(this.field, "_componentRefs", []);
        this.triggerHook("onDestroy");
    };
    /**
     * @private
     * @param {?} containerRef
     * @param {?} f
     * @param {?} wrappers
     * @return {?}
     */
    VXFormField.prototype.renderField = /**
     * @private
     * @param {?} containerRef
     * @param {?} f
     * @param {?} wrappers
     * @return {?}
     */
    function (containerRef, f, wrappers) {
        var _this = this;
        if (this.containerRef === containerRef) {
            defineHiddenProp(this.field, "_componentRefs", []);
            this.containerRef.clear();
        }
        if (wrappers && wrappers.length > 0) {
            var _a = tslib_1.__read(wrappers), wrapper = _a[0], wps_1 = _a.slice(1);
            var component = this.vxFormConfig.getWrapper(wrapper).component;
            /** @type {?} */
            var cfr = f.options && f.options._componentFactoryResolver
                ? f.options._componentFactoryResolver
                : this.componentFactoryResolver;
            /** @type {?} */
            var ref_1 = containerRef.createComponent(cfr.resolveComponentFactory(component));
            this.attachComponentRef(ref_1, f);
            wrapProperty(ref_1.instance, "fieldComponent", (/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var currentValue = _a.currentValue, firstChange = _a.firstChange;
                if (currentValue) {
                    _this.renderField((/** @type {?} */ (currentValue)), f, wps_1);
                    !firstChange && ref_1.changeDetectorRef.detectChanges();
                }
            }));
        }
        else {
            /** @type {?} */
            var ref = this.vxFormConfig.createComponent(f, this.componentFactoryResolver, this.injector);
            if (ref) {
                this.attachComponentRef(ref, f);
                containerRef.insert(ref.hostView);
            }
        }
    };
    /**
     * @private
     * @param {?} name
     * @param {?=} changes
     * @return {?}
     */
    VXFormField.prototype.triggerHook = /**
     * @private
     * @param {?} name
     * @param {?=} changes
     * @return {?}
     */
    function (name, changes) {
        if (this.field.hooks && this.field.hooks[name]) {
            if (!changes || changes.field) {
                this.field.hooks[name](this.field);
            }
        }
        if (this.field.lifecycle && this.field.lifecycle[name]) {
            this.field.lifecycle[name](this.field.form, this.field, this.field.model, this.field.options);
        }
        if (name === "onChanges" && changes.field) {
            this.renderField(this.containerRef, this.field, this.field.wrappers);
        }
    };
    /**
     * @private
     * @template T
     * @param {?} ref
     * @param {?} field
     * @return {?}
     */
    VXFormField.prototype.attachComponentRef = /**
     * @private
     * @template T
     * @param {?} ref
     * @param {?} field
     * @return {?}
     */
    function (ref, field) {
        field._componentRefs.push(ref);
        Object.assign(ref.instance, { field: field });
    };
    VXFormField.decorators = [
        { type: Component, args: [{
                    selector: "vxform-field",
                    template: "\n    <ng-template #container></ng-template>\n  ",
                    host: {
                        "[style.display]": 'field.hide ? "none":""',
                        //"[class]": "field.className? field.className : className"
                        "[class]": "field.type=='text'?'panel-'+field.type+' panel-'+field.typeold: 'panel-'+field.type"
                    }
                }] }
    ];
    /** @nocollapse */
    VXFormField.ctorParameters = function () { return [
        { type: VXFormConfig },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: undefined, decorators: [{ type: Attribute, args: ["hide-deprecation",] }] }
    ]; };
    VXFormField.propDecorators = {
        field: [{ type: Input }],
        className: [{ type: Input, args: ["class",] }],
        model: [{ type: Input }],
        form: [{ type: Input }],
        options: [{ type: Input }],
        rownumber: [{ type: Input }],
        modelChange: [{ type: Output }],
        containerRef: [{ type: ViewChild, args: ["container", (/** @type {?} */ ({ read: ViewContainerRef, static: true })),] }]
    };
    return VXFormField;
}());
export { VXFormField };
if (false) {
    /** @type {?} */
    VXFormField.prototype.field;
    /** @type {?} */
    VXFormField.prototype.className;
    /** @type {?} */
    VXFormField.prototype.warnDeprecation;
    /** @type {?} */
    VXFormField.prototype.modelChange;
    /** @type {?} */
    VXFormField.prototype.containerRef;
    /**
     * @type {?}
     * @private
     */
    VXFormField.prototype.vxFormConfig;
    /**
     * @type {?}
     * @private
     */
    VXFormField.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    VXFormField.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLFNBQVMsRUFHVCxTQUFTLEVBQ1Qsd0JBQXdCLEVBU3hCLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJMUQ7SUFrREUscUJBQ1UsWUFBMEIsRUFDMUIsd0JBQWtELEVBQ2xELFFBQWtCLEVBQ0ssZUFBZTtRQUh0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVU7UUE5QlosY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQW9CZCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBVzVELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxLQUFLLElBQUksQ0FBQztJQUNsRCxDQUFDO0lBOUJELHNCQUFhLDhCQUFLOzs7OztRQUFsQixVQUFtQixDQUFNO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSw2QkFBSTs7Ozs7UUFBakIsVUFBa0IsSUFBZTtZQUMvQixJQUFJLENBQUMs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d0I7O0lBb0J4QixrQ0FBOEQ7O0lBRTlELG1DQUMrQjs7Ozs7SUFHN0IsbUNBQWtDOzs7OztJQUNsQywrQ0FBMEQ7Ozs7O0lBQzFELCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQXR0cmlidXRlLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBPbkluaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBEb0NoZWNrLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgSW5qZWN0b3JcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVlhGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWEZvcm1PcHRpb25zLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGVcclxufSBmcm9tIFwiLi92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IGRlZmluZUhpZGRlblByb3AsIHdyYXBQcm9wZXJ0eSB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBGaWVsZFdyYXBwZXIgfSBmcm9tIFwiLi4vdGVtcGxhdGVzL2ZpZWxkLndyYXBwZXJcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9maWVsZC50eXBlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZmllbGRcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlICNjb250YWluZXI+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW3N0eWxlLmRpc3BsYXldXCI6ICdmaWVsZC5oaWRlID8gXCJub25lXCI6XCJcIicsXHJcbiAgICAvL1wiW2NsYXNzXVwiOiBcImZpZWxkLmNsYXNzTmFtZT8gZmllbGQuY2xhc3NOYW1lIDogY2xhc3NOYW1lXCJcclxuICAgIFwiW2NsYXNzXVwiOlxyXG4gICAgICBcImZpZWxkLnR5cGU9PSd0ZXh0Jz8ncGFuZWwtJytmaWVsZC50eXBlKycgcGFuZWwtJytmaWVsZC50eXBlb2xkOiAncGFuZWwtJytmaWVsZC50eXBlXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZFxyXG4gIGltcGxlbWVudHNcclxuICAgIE9uSW5pdCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIERvQ2hlY2ssXHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBBZnRlclZpZXdDaGVja2VkLFxyXG4gICAgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBmaWVsZDogVlhGb3JtRmllbGRDb25maWc7XHJcbiAgQElucHV0KFwiY2xhc3NcIikgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICB3YXJuRGVwcmVjYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2V0IG1vZGVsKG06IGFueSkge1xyXG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb24gJiYgY29uc29sZS53YXJuKGA6JHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgZm9ybShmb3JtOiBGb3JtR3JvdXApIHtcclxuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uICYmIGNvbnNvbGUud2FybihgOiR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczogVlhGb3JtT3B0aW9ucykge1xyXG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb24gJiYgY29uc29sZS53YXJuKGA6JHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgcm93bnVtYmVyKHZhbHVlOm51bWJlcil7XHJcbiAgICBpZih2YWx1ZSE9dW5kZWZpbmVkICYmIHZhbHVlIT1udWxsICYmIHZhbHVlPi0xKXtcclxuICAgICAgdGhpcy5maWVsZC5yb3dudW1iZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgPGFueT57IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxyXG4gIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHZ4Rm9ybUNvbmZpZzogVlhGb3JtQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgQEF0dHJpYnV0ZShcImhpZGUtZGVwcmVjYXRpb25cIikgaGlkZURlcHJlY2F0aW9uXHJcbiAgKSB7XHJcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbiA9IGhpZGVEZXByZWNhdGlvbiA9PT0gbnVsbDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMudHJpZ2dlckhvb2soXCJhZnRlckNvbnRlbnRJbml0XCIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgdGhpcy50cmlnZ2VySG9vayhcImFmdGVyQ29udGVudENoZWNrZWRcIik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnRyaWdnZXJIb29rKFwiYWZ0ZXJWaWV3SW5pdFwiKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMudHJpZ2dlckhvb2soXCJhZnRlclZpZXdDaGVja2VkXCIpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy50cmlnZ2VySG9vayhcImRvQ2hlY2tcIik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudHJpZ2dlckhvb2soXCJvbkluaXRcIik7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICB0aGlzLnRyaWdnZXJIb29rKFwib25DaGFuZ2VzXCIsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmZpZWxkICYmIGRlZmluZUhpZGRlblByb3AodGhpcy5maWVsZCwgXCJfY29tcG9uZW50UmVmc1wiLCBbXSk7XHJcbiAgICB0aGlzLnRyaWdnZXJIb29rKFwib25EZXN0cm95XCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJGaWVsZChcclxuICAgIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIGY6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUsXHJcbiAgICB3cmFwcGVyczogc3RyaW5nW11cclxuICApIHtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lclJlZiA9PT0gY29udGFpbmVyUmVmKSB7XHJcbiAgICAgIGRlZmluZUhpZGRlblByb3AodGhpcy5maWVsZCwgXCJfY29tcG9uZW50UmVmc1wiLCBbXSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdyYXBwZXJzICYmIHdyYXBwZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgW3dyYXBwZXIsIC4uLndwc10gPSB3cmFwcGVycztcclxuICAgICAgY29uc3QgeyBjb21wb25lbnQgfSA9IHRoaXMudnhGb3JtQ29uZmlnLmdldFdyYXBwZXIod3JhcHBlcik7XHJcbiAgICAgIGNvbnN0IGNmciA9XHJcbiAgICAgICAgZi5vcHRpb25zICYmIGYub3B0aW9ucy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgICAgICA/IGYub3B0aW9ucy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgICAgICA6IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG5cclxuICAgICAgY29uc3QgcmVmID0gY29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudDxGaWVsZFdyYXBwZXI+KFxyXG4gICAgICAgIGNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYXR0YWNoQ29tcG9uZW50UmVmKHJlZiwgZik7XHJcbiAgICAgIHdyYXBQcm9wZXJ0eShcclxuICAgICAgICByZWYuaW5zdGFuY2UsXHJcbiAgICAgICAgXCJmaWVsZENvbXBvbmVudFwiLFxyXG4gICAgICAgICh7IGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckZpZWxkKGN1cnJlbnRWYWx1ZSBhcyBWaWV3Q29udGFpbmVyUmVmLCBmLCB3cHMpO1xyXG4gICAgICAgICAgICAhZmlyc3RDaGFuZ2UgJiYgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZWYgPSB0aGlzLnZ4Rm9ybUNvbmZpZy5jcmVhdGVDb21wb25lbnQoXHJcbiAgICAgICAgZixcclxuICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICB0aGlzLmluamVjdG9yXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaENvbXBvbmVudFJlZihyZWYsIGYpO1xyXG4gICAgICAgIGNvbnRhaW5lclJlZi5pbnNlcnQocmVmLmhvc3RWaWV3KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmlnZ2VySG9vayhuYW1lOiBzdHJpbmcsIGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5ob29rcyAmJiB0aGlzLmZpZWxkLmhvb2tzW25hbWVdKSB7XHJcbiAgICAgIGlmICghY2hhbmdlcyB8fCBjaGFuZ2VzLmZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5ob29rc1tuYW1lXSh0aGlzLmZpZWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLmxpZmVjeWNsZSAmJiB0aGlzLmZpZWxkLmxpZmVjeWNsZVtuYW1lXSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmxpZmVjeWNsZVtuYW1lXShcclxuICAgICAgICB0aGlzLmZpZWxkLmZvcm0sXHJcbiAgICAgICAgdGhpcy5maWVsZCxcclxuICAgICAgICB0aGlzLmZpZWxkLm1vZGVsLFxyXG4gICAgICAgIHRoaXMuZmllbGQub3B0aW9uc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm9uQ2hhbmdlc1wiICYmIGNoYW5nZXMuZmllbGQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJGaWVsZCh0aGlzLmNvbnRhaW5lclJlZiwgdGhpcy5maWVsZCwgdGhpcy5maWVsZC53cmFwcGVycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaENvbXBvbmVudFJlZjxUIGV4dGVuZHMgRmllbGRUeXBlPihcclxuICAgIHJlZjogQ29tcG9uZW50UmVmPFQ+LFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGVcclxuICApIHtcclxuICAgIGZpZWxkLl9jb21wb25lbnRSZWZzLnB1c2gocmVmKTtcclxuICAgIE9iamVjdC5hc3NpZ24ocmVmLmluc3RhbmNlLCB7IGZpZWxkIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=