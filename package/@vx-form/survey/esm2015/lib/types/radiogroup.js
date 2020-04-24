/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXSurveyRadioGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropOption(event) {
    }
    //设置逻辑
    /**
     * @return {?}
     */
    logicQuestion() {
        this.service.questionOperational("logic", this.field);
    }
    //拷贝题目
    /**
     * @return {?}
     */
    copyQuestion() {
        this.service.questionOperational("copy", this.field);
    }
    //删除题目
    /**
     * @return {?}
     */
    delQuestion() {
        this.service.questionOperational("delete", this.field);
    }
    //点击题目
    /**
     * @return {?}
     */
    activeQuestion() {
        if (!this.active) {
            this.service.questionOperational("active", this.field);
        }
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyRadioGroup.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-radiogroup",
                template: `
    <ng-container *ngIf="formStatus !== 0">
        
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyRadioGroup.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyRadioGroup.prototype.service;
    /** @type {?} */
    VXSurveyRadioGroup.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9yYWRpb2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZXBELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxTQUFTOzs7O0lBRy9DLFlBQVksU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFGVixTQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQTRCO0lBRXZDLENBQUM7Ozs7O0lBR0QsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxXQUFXO1FBRVQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsY0FBYztRQUNaLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxNQUFVO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7YUFDRjs7OztZQWRRLGdCQUFnQjs7OztJQWdCdkIscUNBQWE7O0lBQ2Isa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1yYWRpb2dyb3VwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5UmFkaW9Hcm91cCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBcclxuICBkcm9wT3B0aW9uKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgICBcclxuICB9XHJcblxyXG4gIC8v6K6+572u6YC76L6RXHJcbiAgbG9naWNRdWVzdGlvbigpe1xyXG4gICAgdGhpcy5zZXJ2aWNlLnF1ZXN0aW9uT3BlcmF0aW9uYWwoXCJsb2dpY1wiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aLt+i0nemimOebrlxyXG4gIGNvcHlRdWVzdGlvbigpeyBcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiY29weVwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmimOebrlxyXG4gIGRlbFF1ZXN0aW9uKClcclxuICB7ICBcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiZGVsZXRlXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v54K55Ye76aKY55uuXHJcbiAgYWN0aXZlUXVlc3Rpb24oKXtcclxuICAgIGlmKCF0aGlzLmFjdGl2ZSl7IFxyXG4gICAgICB0aGlzLnNlcnZpY2UucXVlc3Rpb25PcGVyYXRpb25hbChcImFjdGl2ZVwiLHRoaXMuZmllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKXtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZFwiLFwiXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpe1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkc1wiLFwiXCIsdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjphbnkpeyBcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLG9wdGlvbix0aGlzLmZpZWxkKTtcclxuICB9IFxyXG59XHJcbiJdfQ==