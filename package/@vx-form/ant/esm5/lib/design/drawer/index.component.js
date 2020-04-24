/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var VXFormDrawerComponent = /** @class */ (function () {
    function VXFormDrawerComponent() {
        this.visible = false;
        this.tableData = [];
    }
    /**
     * @return {?}
     */
    VXFormDrawerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //this.initTableData();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormDrawerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    VXFormDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VXFormDrawerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.visible = false;
    };
    /**
     * @return {?}
     */
    VXFormDrawerComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.visible = !this.visible;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    VXFormDrawerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value != undefined && value != null) {
            this.tableData = value;
        }
    };
    /**
     * @param {?} _
     * @return {?}
     */
    VXFormDrawerComponent.prototype.onChange = /**
     * @param {?} _
     * @return {?}
     */
    function (_) { };
    /**
     * @return {?}
     */
    VXFormDrawerComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    VXFormDrawerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    VXFormDrawerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    VXFormDrawerComponent.decorators = [
        { type: Component, args: [{
                    selector: "vxform-drawer",
                    template: "<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" (nzOnClose)=\"close()\" [nzWidth]=\"300\"\r\n  nzWrapClassName=\"vxformDesign-drawer\">\r\n\r\n  <nz-collapse [nzBordered]=\"false\">\r\n    <ng-container *ngFor=\"let table of tableData;let i=index;\">\r\n      <nz-collapse-panel [nzHeader]=\"table.tablelabel+'-'+table.tablename\" [nzActive]=\"i==0\">\r\n        <ul>\r\n          <li *ngFor=\"let field of table.tablefields\">\r\n            <span><i *ngIf=\"field?.fieldquote\" class=\"icon-KT-Time\"></i></span>\r\n            <span>{{field.fieldname}}</span>\r\n            <span *ngIf=\"field.allownull===false\">*</span>\r\n          </li>\r\n        </ul>\r\n      </nz-collapse-panel>\r\n    </ng-container>\r\n  </nz-collapse>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': visible }\" (click)=\"toggle()\">\r\n\r\n</div>",
                    host: {
                        "[class.setting-drawer]": "true"
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return VXFormDrawerComponent; })),
                            // replace name as appropriate
                            multi: true
                        }
                    ],
                    styles: [":host ::ng-deep .setting-drawer__handle{position:fixed;bottom:150px;right:0;z-index:999;display:flex;align-items:center;justify-content:center;font-size:16px;text-align:center;border-radius:4px 0 0 4px;cursor:pointer;transition:right .1s cubic-bezier(.8,0,.5,.4);pointer-events:auto;width:28px;height:48px;background-color:rgba(0,0,0,.5)}:host ::ng-deep .setting-drawer__handle-opened{right:300px;z-index:1001}"]
                }] }
    ];
    /** @nocollapse */
    VXFormDrawerComponent.ctorParameters = function () { return []; };
    return VXFormDrawerComponent;
}());
export { VXFormDrawerComponent };
if (false) {
    /** @type {?} */
    VXFormDrawerComponent.prototype.visible;
    /** @type {?} */
    VXFormDrawerComponent.prototype.tableData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi9kcmF3ZXIvaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQVFULFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNekU7SUFvQkU7UUFKQSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFFQSxDQUFDOzs7O0lBRWhCLHdDQUFROzs7SUFBUjtRQUNFLHVCQUF1QjtJQUN6QixDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQixJQUFHLENBQUM7Ozs7SUFFdEMsMkNBQVc7OztJQUFYLGNBQWUsQ0FBQzs7OztJQUVoQixxQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLENBQU0sSUFBRyxDQUFDOzs7O0lBQ25CLHlDQUFTOzs7SUFBVCxjQUFhLENBQUM7Ozs7O0lBQ2QsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw2NEJBQXFDO29CQUVyQyxJQUFJLEVBQUU7d0JBQ0osd0JBQXdCLEVBQUUsTUFBTTtxQkFDakM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDOzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7O0lBc0NELDRCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FyQ1kscUJBQXFCOzs7SUFDaEMsd0NBQWdCOztJQUVoQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBmb3J3YXJkUmVmXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IGNsb25lLCBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IElCdXNpbmVzc1RhYmxlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3V0aWxcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZHJhd2VyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXSxcclxuICBob3N0OiB7XHJcbiAgICBcIltjbGFzcy5zZXR0aW5nLWRyYXdlcl1cIjogXCJ0cnVlXCJcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVlhGb3JtRHJhd2VyQ29tcG9uZW50KSwgLy8gcmVwbGFjZSBuYW1lIGFzIGFwcHJvcHJpYXRlXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICB0YWJsZURhdGEgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vdGhpcy5pbml0VGFibGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkICYmIHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKF86IGFueSkge31cclxuICBvblRvdWNoZWQoKSB7fVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=