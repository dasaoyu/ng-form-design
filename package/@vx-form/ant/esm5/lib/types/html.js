/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldHTML = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldHTML, _super);
    function VXFormFieldHTML(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldHTML.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    VXFormFieldHTML.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-html",
                    template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n  <div class=\"fieldOperational\">\n    <div class=\"fieldcheckbox\">\n      <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n    </div>\n    <div class=\"fieldControl\">\n      <div class=\"control\">\n        {{ to.description }}\n      </div>\n      <div class=\"fieldButton\">\n        <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n          <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n        </button>\n        <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n           <i class=\"icon-KT-Close\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"formStatus === 0\">\n  <div class=\"fieldcontrol\">{{ to.description }}</div>\n</ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldHTML.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldHTML;
}(FieldType));
export { VXFormFieldHTML };
if (false) {
    /** @type {?} */
    VXFormFieldHTML.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBEO0lBNkJxQywyQ0FBUztJQUc1Qyx5QkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQzs7Ozs7SUFFRCwwQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDh4QkF5QlQ7aUJBQ0Y7Ozs7Z0JBOUJRLGdCQUFnQjs7SUEwQ3pCLHNCQUFDO0NBQUEsQUF4Q0QsQ0E2QnFDLFNBQVMsR0FXN0M7U0FYWSxlQUFlOzs7SUFDMUIsa0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtaHRtbFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmllbGRPcGVyYXRpb25hbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICB7eyB0by5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImljb24tRWRpdDAzXCI+PC9pPue8lui+kVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmllbGRjb250cm9sXCI+e3sgdG8uZGVzY3JpcHRpb24gfX08L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRIVE1MIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19