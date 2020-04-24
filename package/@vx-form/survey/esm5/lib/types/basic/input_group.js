/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyInputGroup = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyInputGroup, _super);
    function VXSurveyInputGroup(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} value
     * @param {?} option
     * @return {?}
     */
    VXSurveyInputGroup.prototype.controlModelChange = /**
     * @param {?} value
     * @param {?} option
     * @return {?}
     */
    function (value, option) {
        /** @type {?} */
        var values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.optionid == option.value; }))) {
                values.push({
                    optionid: option.value,
                    optionvalue: value
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.optionid == option.value) {
                        item.optionvalue = value;
                    }
                }));
            }
        }
        else {
            values.push({
                optionid: option.value,
                optionvalue: value
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    VXSurveyInputGroup.prototype.getControlChecked = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var result = null;
        /** @type {?} */
        var values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value.optionid == option.value) {
                    result = value.optionvalue;
                }
            }));
        }
        return result;
    };
    //添加选项
    //添加选项
    /**
     * @return {?}
     */
    VXSurveyInputGroup.prototype.addOption = 
    //添加选项
    /**
     * @return {?}
     */
    function () {
        this.service.optionOperational("add", "", this.field);
    };
    //批量添加
    //批量添加
    /**
     * @return {?}
     */
    VXSurveyInputGroup.prototype.addOptions = 
    //批量添加
    /**
     * @return {?}
     */
    function () {
        this.service.optionOperational("adds", "", this.field);
    };
    //删除选项
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    VXSurveyInputGroup.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    VXSurveyInputGroup.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-input_group",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_input_group\"  *ngFor=\"let item of to.options\">\n            <div class=\"option\">\n              <inline-editor  [(ngModel)]=\"item.label\" [active]=\"active\"></inline-editor> \n              <input nz-input placeholder=\"\" [disabled]=\"true\" /> \n            </div>\n            <div class=\"operate\"  (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n              <i class=\"icon-KT-Close\"></i>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n          <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n        </div> \n    </ng-container>\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div class=\"inputlist\"  *ngFor=\"let item of to.options\">\n        <div class=\"title\">\n          {{item.label}} \n        </div> \n        <input nz-input [ngModel]=\"getControlChecked(item)\"  (ngModelChange)=\"controlModelChange($event,item)\"/>\n      </div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyInputGroup.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyInputGroup;
}(FieldType));
export { VXSurveyInputGroup };
if (false) {
    /** @type {?} */
    VXSurveyInputGroup.prototype.service;
    /** @type {?} */
    VXSurveyInputGroup.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRfZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvaW5wdXRfZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZEO0lBcUN3Qyw4Q0FBUztJQUcvQyw0QkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFKRCxVQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztJQUMzQixDQUFDOzs7Ozs7SUFFRCwrQ0FBa0I7Ozs7O0lBQWxCLFVBQW1CLEtBQVMsRUFBQyxNQUFVOztZQUNqQyxNQUFNLEdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUU3QyxJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUU5RCxJQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLElBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxDQUFBLENBQUMsRUFBQyxFQUFDO2dCQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNWLFFBQVEsRUFBQyxNQUFNLENBQUMsS0FBSztvQkFDckIsV0FBVyxFQUFDLEtBQUs7aUJBQ2xCLENBQUMsQ0FBQTthQUNIO2lCQUFJO2dCQUNILE1BQU0sQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsSUFBUTtvQkFDdEIsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUM7d0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUMsS0FBSyxDQUFBO3FCQUN2QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBSTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsUUFBUSxFQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNyQixXQUFXLEVBQUMsS0FBSzthQUNsQixDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw4Q0FBaUI7Ozs7SUFBakIsVUFBa0IsTUFBVzs7WUFDdkIsTUFBTSxHQUFHLElBQUk7O1lBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztRQUNuQyxJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5RCxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBUztnQkFDdkIsSUFBRyxLQUFLLENBQUMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUM7b0JBQzlCLE1BQU0sR0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2lCQUMxQjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTs7Ozs7SUFDTixzQ0FBUzs7Ozs7SUFBVDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELE1BQU07Ozs7O0lBQ04sdUNBQVU7Ozs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxNQUFNOzs7Ozs7SUFDTix5Q0FBWTs7Ozs7O0lBQVosVUFBYSxNQUFXO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBaEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUscThDQWlDVDtpQkFDRjs7OztnQkF2Q1EsZ0JBQWdCOztJQW9HekIseUJBQUM7Q0FBQSxBQWpHRCxDQXFDd0MsU0FBUyxHQTREaEQ7U0E1RFksa0JBQWtCOzs7SUFDN0IscUNBQWE7O0lBQ2Isa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LWlucHV0X2dyb3VwXCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIlxyXG4gICAgICAgICAgPjwvaW5saW5lLWVkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXAgYmFzaWNfaW5wdXRfZ3JvdXBcIiAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGlubGluZS1lZGl0b3IgIFsobmdNb2RlbCldPVwiaXRlbS5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCI+PC9pbmxpbmUtZWRpdG9yPiBcclxuICAgICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wZXJhdGVcIiAgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihpdGVtKVwiICpuZ0lmPVwiYWN0aXZlPT10cnVlXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9vcGVyYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+IFxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZE9wdGlvbnMoKVwiPuaJuemHj+a3u+WKoOmAiemhuTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dGxpc3RcIiAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAge3tpdGVtLmxhYmVsfX0gXHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxpbnB1dCBuei1pbnB1dCBbbmdNb2RlbF09XCJnZXRDb250cm9sQ2hlY2tlZChpdGVtKVwiICAobmdNb2RlbENoYW5nZSk9XCJjb250cm9sTW9kZWxDaGFuZ2UoJGV2ZW50LGl0ZW0pXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5SW5wdXRHcm91cCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfSBcclxuICAgXHJcbiAgY29udHJvbE1vZGVsQ2hhbmdlKHZhbHVlOmFueSxvcHRpb246YW55KXsgXHJcbiAgICBsZXQgdmFsdWVzOmFueSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgfHwgW107XHJcblxyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgIGlmKCF2YWx1ZXMuc29tZSgoaXRlbTphbnkpPT57cmV0dXJuIGl0ZW0ub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZX0pKXtcclxuICAgICAgICB2YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICBvcHRpb25pZDpvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICBvcHRpb252YWx1ZTp2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChpdGVtOmFueSk9PntcclxuICAgICAgICAgIGlmKGl0ZW0ub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZSl7XHJcbiAgICAgICAgICAgIGl0ZW0ub3B0aW9udmFsdWU9dmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBcclxuICAgIH1lbHNle1xyXG4gICAgICB2YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgb3B0aW9uaWQ6b3B0aW9uLnZhbHVlLFxyXG4gICAgICAgIG9wdGlvbnZhbHVlOnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWVzKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJvbENoZWNrZWQob3B0aW9uOiBhbnkpIHtcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgbGV0IHZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7IFxyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOmFueSk9PntcclxuICAgICAgICBpZih2YWx1ZS5vcHRpb25pZD09b3B0aW9uLnZhbHVlKXtcclxuICAgICAgICAgIHJlc3VsdD12YWx1ZS5vcHRpb252YWx1ZTtcclxuICAgICAgICB9IFxyXG4gICAgICB9KTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aJuemHj+a3u+WKoFxyXG4gIGFkZE9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRzXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmAiemhuVxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiZGVsZXRlXCIsIG9wdGlvbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG59Il19