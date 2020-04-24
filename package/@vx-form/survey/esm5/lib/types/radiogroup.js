/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXSurveyRadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyRadioGroup, _super);
    function VXSurveyRadioGroup(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    VXSurveyRadioGroup.prototype.dropOption = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    //设置逻辑
    //设置逻辑
    /**
     * @return {?}
     */
    VXSurveyRadioGroup.prototype.logicQuestion = 
    //设置逻辑
    /**
     * @return {?}
     */
    function () {
        this.service.questionOperational("logic", this.field);
    };
    //拷贝题目
    //拷贝题目
    /**
     * @return {?}
     */
    VXSurveyRadioGroup.prototype.copyQuestion = 
    //拷贝题目
    /**
     * @return {?}
     */
    function () {
        this.service.questionOperational("copy", this.field);
    };
    //删除题目
    //删除题目
    /**
     * @return {?}
     */
    VXSurveyRadioGroup.prototype.delQuestion = 
    //删除题目
    /**
     * @return {?}
     */
    function () {
        this.service.questionOperational("delete", this.field);
    };
    //点击题目
    //点击题目
    /**
     * @return {?}
     */
    VXSurveyRadioGroup.prototype.activeQuestion = 
    //点击题目
    /**
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.service.questionOperational("active", this.field);
        }
    };
    //添加选项
    //添加选项
    /**
     * @return {?}
     */
    VXSurveyRadioGroup.prototype.addOption = 
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
    VXSurveyRadioGroup.prototype.addOptions = 
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
    VXSurveyRadioGroup.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    VXSurveyRadioGroup.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-radiogroup",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n        \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyRadioGroup.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyRadioGroup;
}(FieldType));
export { VXSurveyRadioGroup };
if (false) {
    /** @type {?} */
    VXSurveyRadioGroup.prototype.service;
    /** @type {?} */
    VXSurveyRadioGroup.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9yYWRpb2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdwRDtJQVl3Qyw4Q0FBUztJQUcvQyw0QkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFKRCxVQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztJQUMzQixDQUFDOzs7OztJQUdELHVDQUFVOzs7O0lBQVYsVUFBVyxLQUE0QjtJQUV2QyxDQUFDO0lBRUQsTUFBTTs7Ozs7SUFDTiwwQ0FBYTs7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7SUFDTix5Q0FBWTs7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7SUFDTix3Q0FBVzs7Ozs7SUFBWDtRQUVFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7SUFDTiwyQ0FBYzs7Ozs7SUFBZDtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVELE1BQU07Ozs7O0lBQ04sc0NBQVM7Ozs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxNQUFNOzs7OztJQUNOLHVDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7O0lBQ04seUNBQVk7Ozs7OztJQUFaLFVBQWEsTUFBVTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLGtLQVFUO2lCQUNGOzs7O2dCQWRRLGdCQUFnQjs7SUE0RHpCLHlCQUFDO0NBQUEsQUF6REQsQ0FZd0MsU0FBUyxHQTZDaEQ7U0E3Q1ksa0JBQWtCOzs7SUFDN0IscUNBQWE7O0lBQ2Isa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1yYWRpb2dyb3VwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5UmFkaW9Hcm91cCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBcclxuICBkcm9wT3B0aW9uKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgICBcclxuICB9XHJcblxyXG4gIC8v6K6+572u6YC76L6RXHJcbiAgbG9naWNRdWVzdGlvbigpe1xyXG4gICAgdGhpcy5zZXJ2aWNlLnF1ZXN0aW9uT3BlcmF0aW9uYWwoXCJsb2dpY1wiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aLt+i0nemimOebrlxyXG4gIGNvcHlRdWVzdGlvbigpeyBcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiY29weVwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmimOebrlxyXG4gIGRlbFF1ZXN0aW9uKClcclxuICB7ICBcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiZGVsZXRlXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v54K55Ye76aKY55uuXHJcbiAgYWN0aXZlUXVlc3Rpb24oKXtcclxuICAgIGlmKCF0aGlzLmFjdGl2ZSl7IFxyXG4gICAgICB0aGlzLnNlcnZpY2UucXVlc3Rpb25PcGVyYXRpb25hbChcImFjdGl2ZVwiLHRoaXMuZmllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKXtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZFwiLFwiXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpe1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkc1wiLFwiXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjphbnkpeyBcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLG9wdGlvbix0aGlzLmZpZWxkKTtcclxuICB9IFxyXG59XHJcbiJdfQ==