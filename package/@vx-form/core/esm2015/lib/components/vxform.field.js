/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewContainerRef, ViewChild, Attribute, ComponentFactoryResolver, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { VXFormConfig } from "../services/vxform.config";
import { defineHiddenProp, wrapProperty } from "../utils";
export class VXFormField {
    /**
     * @param {?} vxFormConfig
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} hideDeprecation
     */
    constructor(vxFormConfig, componentFactoryResolver, injector, hideDeprecation) {
        this.vxFormConfig = vxFormConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.className = "";
        this.warnDeprecation = false;
        this.modelChange = new EventEmitter();
        this.warnDeprecation = hideDeprecation === null;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    set model(m) {
        this.warnDeprecation && console.warn(`:${this.constructor.name}`);
    }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this.warnDeprecation && console.warn(`:${this.constructor.name}`);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this.warnDeprecation && console.warn(`:${this.constructor.name}`);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rownumber(value) {
        if (value != undefined && value != null && value > -1) {
            this.field.rownumber = value;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.triggerHook("afterContentInit");
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.triggerHook("afterContentChecked");
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.triggerHook("afterViewInit");
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.triggerHook("afterViewChecked");
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.triggerHook("doCheck");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.triggerHook("onInit");
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.triggerHook("onChanges", changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.field && defineHiddenProp(this.field, "_componentRefs", []);
        this.triggerHook("onDestroy");
    }
    /**
     * @private
     * @param {?} containerRef
     * @param {?} f
     * @param {?} wrappers
     * @return {?}
     */
    renderField(containerRef, f, wrappers) {
        if (this.containerRef === containerRef) {
            defineHiddenProp(this.field, "_componentRefs", []);
            this.containerRef.clear();
        }
        if (wrappers && wrappers.length > 0) {
            const [wrapper, ...wps] = wrappers;
            const { component } = this.vxFormConfig.getWrapper(wrapper);
            /** @type {?} */
            const cfr = f.options && f.options._componentFactoryResolver
                ? f.options._componentFactoryResolver
                : this.componentFactoryResolver;
            /** @type {?} */
            const ref = containerRef.createComponent(cfr.resolveComponentFactory(component));
            this.attachComponentRef(ref, f);
            wrapProperty(ref.instance, "fieldComponent", (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, firstChange }) => {
                if (currentValue) {
                    this.renderField((/** @type {?} */ (currentValue)), f, wps);
                    !firstChange && ref.changeDetectorRef.detectChanges();
                }
            }));
        }
        else {
            /** @type {?} */
            const ref = this.vxFormConfig.createComponent(f, this.componentFactoryResolver, this.injector);
            if (ref) {
                this.attachComponentRef(ref, f);
                containerRef.insert(ref.hostView);
            }
        }
    }
    /**
     * @private
     * @param {?} name
     * @param {?=} changes
     * @return {?}
     */
    triggerHook(name, changes) {
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
    }
    /**
     * @private
     * @template T
     * @param {?} ref
     * @param {?} field
     * @return {?}
     */
    attachComponentRef(ref, field) {
        field._componentRefs.push(ref);
        Object.assign(ref.instance, { field });
    }
}
VXFormField.decorators = [
    { type: Component, args: [{
                selector: "vxform-field",
                template: `
    <ng-template #container></ng-template>
  `,
                host: {
                    "[style.display]": 'field.hide ? "none":""',
                    //"[class]": "field.className? field.className : className"
                    "[class]": "field.type=='text'?'panel-'+field.type+' panel-'+field.typeold: 'panel-'+field.type"
                }
            }] }
];
/** @nocollapse */
VXFormField.ctorParameters = () => [
    { type: VXFormConfig },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: undefined, decorators: [{ type: Attribute, args: ["hide-deprecation",] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsU0FBUyxFQUdULFNBQVMsRUFDVCx3QkFBd0IsRUFTeEIsUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQWdCMUQsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFzQ3RCLFlBQ1UsWUFBMEIsRUFDMUIsd0JBQWtELEVBQ2xELFFBQWtCLEVBQ0ssZUFBZTtRQUh0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVU7UUE5QlosY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQW9CZCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBVzVELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxLQUFLLElBQUksQ0FBQztJQUNsRCxDQUFDOzs7OztJQTlCRCxJQUFhLEtBQUssQ0FBQyxDQUFNO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELElBQWEsSUFBSSxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFD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XHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBBdHRyaWJ1dGUsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIERvQ2hlY2ssXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBJbmplY3RvclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1Db25maWcgfSBmcm9tIFwiLi4vc2VydmljZXMvdnhmb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQge1xyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYRm9ybU9wdGlvbnMsXHJcbiAgVlhGb3JtRmllbGRDb25maWdDYWNoZVxyXG59IGZyb20gXCIuL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuaW1wb3J0IHsgZGVmaW5lSGlkZGVuUHJvcCwgd3JhcFByb3BlcnR5IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEZpZWxkV3JhcHBlciB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvZmllbGQud3JhcHBlclwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vdGVtcGxhdGVzL2ZpZWxkLnR5cGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1maWVsZFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGUgI2NvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbc3R5bGUuZGlzcGxheV1cIjogJ2ZpZWxkLmhpZGUgPyBcIm5vbmVcIjpcIlwiJyxcclxuICAgIC8vXCJbY2xhc3NdXCI6IFwiZmllbGQuY2xhc3NOYW1lPyBmaWVsZC5jbGFzc05hbWUgOiBjbGFzc05hbWVcIlxyXG4gICAgXCJbY2xhc3NdXCI6XHJcbiAgICAgIFwiZmllbGQudHlwZT09J3RleHQnPydwYW5lbC0nK2ZpZWxkLnR5cGUrJyBwYW5lbC0nK2ZpZWxkLnR5cGVvbGQ6ICdwYW5lbC0nK2ZpZWxkLnR5cGVcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkXHJcbiAgaW1wbGVtZW50c1xyXG4gICAgT25Jbml0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgRG9DaGVjayxcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgICBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZztcclxuICBASW5wdXQoXCJjbGFzc1wiKSBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHdhcm5EZXByZWNhdGlvbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbW9kZWwobTogYW55KSB7XHJcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbiAmJiBjb25zb2xlLndhcm4oYDoke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBmb3JtKGZvcm06IEZvcm1Hcm91cCkge1xyXG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb24gJiYgY29uc29sZS53YXJuKGA6JHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRpb25zOiBWWEZvcm1PcHRpb25zKSB7XHJcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbiAmJiBjb25zb2xlLndhcm4oYDoke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCByb3dudW1iZXIodmFsdWU6bnVtYmVyKXtcclxuICAgIGlmKHZhbHVlIT11bmRlZmluZWQgJiYgdmFsdWUhPW51bGwgJiYgdmFsdWU+LTEpe1xyXG4gICAgICB0aGlzLmZpZWxkLnJvd251bWJlciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCA8YW55PnsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXHJcbiAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcsXHJcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBAQXR0cmlidXRlKFwiaGlkZS1kZXByZWNhdGlvblwiKSBoaWRlRGVwcmVjYXRpb25cclxuICApIHtcclxuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uID0gaGlkZURlcHJlY2F0aW9uID09PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy50cmlnZ2VySG9vayhcImFmdGVyQ29udGVudEluaXRcIik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICB0aGlzLnRyaWdnZXJIb29rKFwiYWZ0ZXJDb250ZW50Q2hlY2tlZFwiKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudHJpZ2dlckhvb2soXCJhZnRlclZpZXdJbml0XCIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgdGhpcy50cmlnZ2VySG9vayhcImFmdGVyVmlld0NoZWNrZWRcIik7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICB0aGlzLnRyaWdnZXJIb29rKFwiZG9DaGVja1wiKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50cmlnZ2VySG9vayhcIm9uSW5pdFwiKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJpZ2dlckhvb2soXCJvbkNoYW5nZXNcIiwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZmllbGQgJiYgZGVmaW5lSGlkZGVuUHJvcCh0aGlzLmZpZWxkLCBcIl9jb21wb25lbnRSZWZzXCIsIFtdKTtcclxuICAgIHRoaXMudHJpZ2dlckhvb2soXCJvbkRlc3Ryb3lcIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckZpZWxkKFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgZjogVlhGb3JtRmllbGRDb25maWdDYWNoZSxcclxuICAgIHdyYXBwZXJzOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyUmVmID09PSBjb250YWluZXJSZWYpIHtcclxuICAgICAgZGVmaW5lSGlkZGVuUHJvcCh0aGlzLmZpZWxkLCBcIl9jb21wb25lbnRSZWZzXCIsIFtdKTtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod3JhcHBlcnMgJiYgd3JhcHBlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBbd3JhcHBlciwgLi4ud3BzXSA9IHdyYXBwZXJzO1xyXG4gICAgICBjb25zdCB7IGNvbXBvbmVudCB9ID0gdGhpcy52eEZvcm1Db25maWcuZ2V0V3JhcHBlcih3cmFwcGVyKTtcclxuICAgICAgY29uc3QgY2ZyID1cclxuICAgICAgICBmLm9wdGlvbnMgJiYgZi5vcHRpb25zLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgICAgID8gZi5vcHRpb25zLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgICAgIDogdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XHJcblxyXG4gICAgICBjb25zdCByZWYgPSBjb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PEZpZWxkV3JhcHBlcj4oXHJcbiAgICAgICAgY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hdHRhY2hDb21wb25lbnRSZWYocmVmLCBmKTtcclxuICAgICAgd3JhcFByb3BlcnR5KFxyXG4gICAgICAgIHJlZi5pbnN0YW5jZSxcclxuICAgICAgICBcImZpZWxkQ29tcG9uZW50XCIsXHJcbiAgICAgICAgKHsgY3VycmVudFZhbHVlLCBmaXJzdENoYW5nZSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRmllbGQoY3VycmVudFZhbHVlIGFzIFZpZXdDb250YWluZXJSZWYsIGYsIHdwcyk7XHJcbiAgICAgICAgICAgICFmaXJzdENoYW5nZSAmJiByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMudnhGb3JtQ29uZmlnLmNyZWF0ZUNvbXBvbmVudChcclxuICAgICAgICBmLFxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgIHRoaXMuaW5qZWN0b3JcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoQ29tcG9uZW50UmVmKHJlZiwgZik7XHJcbiAgICAgICAgY29udGFpbmVyUmVmLmluc2VydChyZWYuaG9zdFZpZXcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyaWdnZXJIb29rKG5hbWU6IHN0cmluZywgY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmhvb2tzICYmIHRoaXMuZmllbGQuaG9va3NbbmFtZV0pIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzIHx8IGNoYW5nZXMuZmllbGQpIHtcclxuICAgICAgICB0aGlzLmZpZWxkLmhvb2tzW25hbWVdKHRoaXMuZmllbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmllbGQubGlmZWN5Y2xlICYmIHRoaXMuZmllbGQubGlmZWN5Y2xlW25hbWVdKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubGlmZWN5Y2xlW25hbWVdKFxyXG4gICAgICAgIHRoaXMuZmllbGQuZm9ybSxcclxuICAgICAgICB0aGlzLmZpZWxkLFxyXG4gICAgICAgIHRoaXMuZmllbGQubW9kZWwsXHJcbiAgICAgICAgdGhpcy5maWVsZC5vcHRpb25zXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwib25DaGFuZ2VzXCIgJiYgY2hhbmdlcy5maWVsZCkge1xyXG4gICAgICB0aGlzLnJlbmRlckZpZWxkKHRoaXMuY29udGFpbmVyUmVmLCB0aGlzLmZpZWxkLCB0aGlzLmZpZWxkLndyYXBwZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoQ29tcG9uZW50UmVmPFQgZXh0ZW5kcyBGaWVsZFR5cGU+KFxyXG4gICAgcmVmOiBDb21wb25lbnRSZWY8VD4sXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZVxyXG4gICkge1xyXG4gICAgZmllbGQuX2NvbXBvbmVudFJlZnMucHVzaChyZWYpO1xyXG4gICAgT2JqZWN0LmFzc2lnbihyZWYuaW5zdGFuY2UsIHsgZmllbGQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==