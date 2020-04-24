/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { moveItemInArray } from '@angular/cdk/drag-drop';
var VXSurveyRadio = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyRadio, _super);
    function VXSurveyRadio(dyService) {
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
    VXSurveyRadio.prototype.addOption = 
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
    VXSurveyRadio.prototype.addOptions = 
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
    VXSurveyRadio.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXSurveyRadio.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    VXSurveyRadio.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-radio",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList  [cdkDropListData]=\"to.options\">\n          <div class=\"option_wrap basic_radio\" *ngFor=\"let item of to.options\" cdkDrag>\n            <div class=\"option\">\n              <label nz-radio nzDisabled=\"true\"></label> \n              <inline-editor  [(ngModel)]=\"item.label\" [active]=\"active\"></inline-editor>  \n            </div>\n            <div class=\"operate\"  (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n              <i class=\"icon-KT-Close\"></i>\n            </div>\n          </div>\n        </div>  \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n          <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n        </div> \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-radio-group\n        [nzName]=\"'radiogroup-' + guid\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n      >\n        <ng-container *ngFor=\"let item of to.options\">\n          <label nz-radio [nzValue]=\"item.value\">{{ item.label }}</label>\n        </ng-container>\n      </nz-radio-group>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyRadio.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyRadio;
}(FieldType));
export { VXSurveyRadio };
if (false) {
    /** @type {?} */
    VXSurveyRadio.prototype.service;
    /** @type {?} */
    VXSurveyRadio.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RTtJQTBDbUMseUNBQVM7SUFHMUMsdUJBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQUVELE1BQU07Ozs7O0lBQ04saUNBQVM7Ozs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxNQUFNOzs7OztJQUNOLGtDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7O0lBQ04sb0NBQVk7Ozs7OztJQUFaLFVBQWEsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsNEJBQUk7Ozs7SUFBSixVQUFLLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNG5EQXNDVDtpQkFDRjs7OztnQkE1Q1EsZ0JBQWdCOztJQXVFekIsb0JBQUM7Q0FBQSxBQXBFRCxDQTBDbUMsU0FBUyxHQTBCM0M7U0ExQlksYUFBYTs7O0lBQ3hCLGdDQUFhOztJQUNiLDZCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1yYWRpb1wiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCJcclxuICAgICAgICAgID48L2lubGluZS1lZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiIGNka0Ryb3BMaXN0ICBbY2RrRHJvcExpc3REYXRhXT1cInRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcCBiYXNpY19yYWRpb1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIiBjZGtEcmFnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56RGlzYWJsZWQ9XCJ0cnVlXCI+PC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgPGlubGluZS1lZGl0b3IgIFsobmdNb2RlbCldPVwiaXRlbS5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCI+PC9pbmxpbmUtZWRpdG9yPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3BlcmF0ZVwiICAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKGl0ZW0pXCIgKm5nSWY9XCJhY3RpdmU9PXRydWVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9vcGVyYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+IFxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZE9wdGlvbnMoKVwiPuaJuemHj+a3u+WKoOmAiemhuTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgICBbbnpOYW1lXT1cIidyYWRpb2dyb3VwLScgKyBndWlkXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiPnt7IGl0ZW0ubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlSYWRpbyBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfSBcclxuXHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIiwgb3B0aW9uLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikgeyBcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gXHJcbiAgfVxyXG59XHJcbiJdfQ==