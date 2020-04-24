/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyNPS = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyNPS, _super);
    function VXSurveyNPS(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    //添加选项
    //添加选项
    /**
     * @return {?}
     */
    VXSurveyNPS.prototype.addOption = 
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
    VXSurveyNPS.prototype.addOptions = 
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
    VXSurveyNPS.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    VXSurveyNPS.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-nps",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_nps\">\n            <div class=\"option\" *ngFor=\"let item of to.options\"> \n               {{item.label}} \n            </div> \n          </div>\n          \n          <div class=\"option_wrap_text\">\n            <span class=\"fl\">\u4E0D\u53EF\u80FD</span>\n            <span class=\"fr\">\u6781\u6709\u53EF\u80FD</span>\n          </div>\n        </div>  \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div class=\"option_wrap\">\n        <nz-radio-group\n          [nzName]=\"'radiogroup-' + guid\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let item of to.options\"> \n            <label nz-radio-button [nzValue]=\"item.value\">{{ item.label }}</label>\n          </ng-container>\n        </nz-radio-group> \n      </div> \n      <div class=\"option_wrap_text\">\n        <span>\u4E0D\u53EF\u80FD</span>\n        <span>\u6781\u6709\u53EF\u80FD</span>\n      </div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyNPS.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyNPS;
}(FieldType));
export { VXSurveyNPS };
if (false) {
    /** @type {?} */
    VXSurveyNPS.prototype.service;
    /** @type {?} */
    VXSurveyNPS.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL25wcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQ7SUE2Q2lDLHVDQUFTO0lBR3hDLHFCQUFZLFNBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FFUjtRQUpELFVBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7O0lBQzNCLENBQUM7SUFFRCxNQUFNOzs7OztJQUNOLCtCQUFTOzs7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7SUFDTixnQ0FBVTs7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELE1BQU07Ozs7OztJQUNOLGtDQUFZOzs7Ozs7SUFBWixVQUFhLE1BQVc7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsdTdDQXlDVDtpQkFDRjs7OztnQkEvQ1EsZ0JBQWdCOztJQW9FekIsa0JBQUM7Q0FBQSxBQWpFRCxDQTZDaUMsU0FBUyxHQW9CekM7U0FwQlksV0FBVzs7O0lBQ3RCLDhCQUFhOztJQUNiLDJCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1ucHNcIixcclxuICB0ZW1wbGF0ZTogYCBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbmxpbmUtZWRpdG9yIFsobmdNb2RlbCldPVwidG8ubGFiZWxcIiBbYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICA+PC9pbmxpbmUtZWRpdG9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcCBiYXNpY19ucHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIj4gXHJcbiAgICAgICAgICAgICAgIHt7aXRlbS5sYWJlbH19IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwX3RleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbFwiPuS4jeWPr+iDvTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmclwiPuaegeacieWPr+iDvTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXBcIj5cclxuICAgICAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgICAgIFtuek5hbWVdPVwiJ3JhZGlvZ3JvdXAtJyArIGd1aWRcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+IFxyXG4gICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIFtuelZhbHVlXT1cIml0ZW0udmFsdWVcIj57eyBpdGVtLmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+IFxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcF90ZXh0XCI+XHJcbiAgICAgICAgPHNwYW4+5LiN5Y+v6IO9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPuaegeacieWPr+iDvTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleU5QUyBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfSBcclxuXHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIiwgb3B0aW9uLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19