/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { moveItemInArray } from '@angular/cdk/drag-drop';
var VXSurveyDropdown = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyDropdown, _super);
    function VXSurveyDropdown(dyService) {
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
    VXSurveyDropdown.prototype.addOption = 
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
    VXSurveyDropdown.prototype.addOptions = 
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
    VXSurveyDropdown.prototype.deleteOption = 
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
    VXSurveyDropdown.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    VXSurveyDropdown.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-dropdown",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList  [cdkDropListData]=\"to.options\">\n        <div class=\"option_wrap basic_dropdown\" *ngFor=\"let item of to.options\" cdkDrag>\n          <div class=\"option\">\n          <span class=\"handle\"></span>\n            <inline-editor [(ngModel)]=\"item.label\"></inline-editor>  \n          </div>\n          <div class=\"operate\"  (click)=\"deleteOption(item)\">\n            <i class=\"icon-KT-Close\"></i>\n          </div>\n        </div>\n      </div> \n      <div class=\"question-wrap_operate\">\n        <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n        <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n      </div> \n    </ng-container> \n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-select \n        nzAllowClear \n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n        nzPlaceHolder=\"\u8BF7\u9009\u62E9\" \n      >\n        <ng-container *ngFor=\"let item of to.options\">\n          <nz-option\n            [nzLabel]=\"item.label\"\n            [nzValue]=\"item.value\"\n          ></nz-option>\n        </ng-container>\n      </nz-select>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyDropdown.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyDropdown;
}(FieldType));
export { VXSurveyDropdown };
if (false) {
    /** @type {?} */
    VXSurveyDropdown.prototype.service;
    /** @type {?} */
    VXSurveyDropdown.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQTZDc0MsNENBQVM7SUFHN0MsMEJBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQUdELE1BQU07Ozs7O0lBQ04sb0NBQVM7Ozs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxNQUFNOzs7OztJQUNOLHFDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7O0lBQ04sdUNBQVk7Ozs7OztJQUFaLFVBQWEsTUFBVTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsOGtEQXlDVDtpQkFDRjs7OztnQkEvQ1EsZ0JBQWdCOztJQTJFekIsdUJBQUM7Q0FBQSxBQXhFRCxDQTZDc0MsU0FBUyxHQTJCOUM7U0EzQlksZ0JBQWdCOzs7SUFDM0IsbUNBQWE7O0lBQ2IsZ0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1kcm9wZG93blwiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiBjZGtEcm9wTGlzdCAgW2Nka0Ryb3BMaXN0RGF0YV09XCJ0by5vcHRpb25zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2Ryb3Bkb3duXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiIGNka0RyYWc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhhbmRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJpdGVtLmxhYmVsXCI+PC9pbmxpbmUtZWRpdG9yPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcGVyYXRlXCIgIChjbGljayk9XCJkZWxldGVPcHRpb24oaXRlbSlcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfb3BlcmF0ZVwiPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPua3u+WKoOWNleS4qumAiemhuTwvc3Bhbj4gXHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZE9wdGlvbnMoKVwiPuaJuemHj+a3u+WKoOmAiemhuTwvc3Bhbj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgPC9uZy1jb250YWluZXI+IFxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuei1zZWxlY3QgXHJcbiAgICAgICAgbnpBbGxvd0NsZWFyIFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgbnpQbGFjZUhvbGRlcj1cIuivt+mAieaLqVwiIFxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICA8bnotb3B0aW9uXHJcbiAgICAgICAgICAgIFtuekxhYmVsXT1cIml0ZW0ubGFiZWxcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCJcclxuICAgICAgICAgID48L256LW9wdGlvbj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uei1zZWxlY3Q+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleURyb3Bkb3duIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ3VpZDogYW55ID0gR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcbiBcclxuXHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKXtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZFwiLFwiXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpe1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkc1wiLFwiXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjphbnkpeyBcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLG9wdGlvbix0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikgeyBcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gXHJcbiAgfSBcclxufVxyXG4iXX0=