/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldPassWord = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldPassWord, _super);
    function VXFormFieldPassWord(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldPassWord.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    VXFormFieldPassWord.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-password",
                    template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n  <div class=\"fieldOperational\">\n    <div class=\"fieldcheckbox\">\n      <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n    </div>\n    <div class=\"fieldControl\">\n      <div class=\"label\">\n        <span *ngIf=\"to.required\">*</span>{{ to.label }}\n      </div>\n      <div class=\"control\">\n        <input nz-input disabled />\n      </div>\n      <div class=\"fieldButton\">\n        <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n          <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n        </button>\n        <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n          <i class=\"icon-KT-Close\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"formStatus === 0\">\n  <ng-container *ngIf=\"editor === true\">\n    <input\n      nz-input\n      [formControl]=\"formControl\"\n      [vxFormAttributes]=\"field\"\n      [class.is-invalid]=\"showError\"\n      [type]=\"'password'\"\n    />\n    <div class=\"tips\">\n      <i\n        class=\"icon-bangzhu\"\n        [nzTooltipTitle]=\"tips\"\n        nzTooltipPlacement=\"top\"\n        nz-tooltip\n        *ngIf=\"tips != ''\"\n      ></i>\n    </div>\n  </ng-container>\n\n  <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n</ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldPassWord.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldPassWord;
}(FieldType));
export { VXFormFieldPassWord };
if (false) {
    /** @type {?} */
    VXFormFieldPassWord.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvcGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQ7SUFtRHlDLCtDQUFTO0lBR2hELDZCQUFZLFNBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztJQUMzQixDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxrMkNBK0NUO2lCQUNGOzs7O2dCQXBEUSxnQkFBZ0I7O0lBZ0V6QiwwQkFBQztDQUFBLEFBOURELENBbUR5QyxTQUFTLEdBV2pEO1NBWFksbUJBQW1COzs7SUFDOUIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtcGFzc3dvcmRcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgPGRpdiBjbGFzcz1cImZpZWxkT3BlcmF0aW9uYWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNoZWNrYm94XCI+XHJcbiAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRDb250cm9sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgIDxpbnB1dCBuei1pbnB1dCBkaXNhYmxlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImljb24tRWRpdDAzXCI+PC9pPue8lui+kVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBuei1pbnB1dFxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgIFt0eXBlXT1cIidwYXNzd29yZCdcIlxyXG4gICAgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICA+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJmaWVsZHRleHRcIiAqbmdJZj1cImVkaXRvciA9PT0gZmFsc2VcIj57eyB0ZXh0IH19PC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkUGFzc1dvcmQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=