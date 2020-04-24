/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldLine = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldLine, _super);
    function VXFormFieldLine(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldLine.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    VXFormFieldLine.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-line",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"control\">\n            <hr />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n               <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div class=\"fieldContent\">\n        <div class=\"fieldcontrol\">\n          <hr />\n        </div>\n      </div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldLine.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldLine;
}(FieldType));
export { VXFormFieldLine };
if (false) {
    /** @type {?} */
    VXFormFieldLine.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRDtJQThCcUMsMkNBQVM7SUFHNUMseUJBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7O0lBQzNCLENBQUM7Ozs7O0lBRUQsMENBQWdCOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSx5d0JBMEJUO2lCQUNGOzs7O2dCQS9CUSxnQkFBZ0I7O0lBMkN6QixzQkFBQztDQUFBLEFBekNELENBOEJxQyxTQUFTLEdBVzdDO1NBWFksZUFBZTs7O0lBQzFCLGtDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZEFycmF5VHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1saW5lXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNvbnRyb2xcIj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkTGluZSBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==