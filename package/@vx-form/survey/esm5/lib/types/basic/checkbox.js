/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { moveItemInArray } from '@angular/cdk/drag-drop';
var VXSurveyCheckBox = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyCheckBox, _super);
    function VXSurveyCheckBox(dyService) {
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
    VXSurveyCheckBox.prototype.addOption = 
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
    VXSurveyCheckBox.prototype.addOptions = 
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
    VXSurveyCheckBox.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    /**
     * @param {?} values
     * @return {?}
     */
    VXSurveyCheckBox.prototype.onChange = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        var _this = this;
        /** @type {?} */
        var res = [];
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (_this.to.options !== undefined && _this.to.options !== null) {
                    _this.to.options.forEach((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) {
                        if (option["value"] === value) {
                            res.push(value);
                        }
                    }));
                }
            }));
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    VXSurveyCheckBox.prototype.getCheckStatus = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.formControl.value;
    };
    /**
     * @param {?} values
     * @param {?} option
     * @return {?}
     */
    VXSurveyCheckBox.prototype.getControlChecked = /**
     * @param {?} values
     * @param {?} option
     * @return {?}
     */
    function (values, option) {
        /** @type {?} */
        var result = false;
        if (option && values) {
            result = values.some((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return value == option.value;
            }));
        }
        return result;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXSurveyCheckBox.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    VXSurveyCheckBox.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-checkbox",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\"> \n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList  [cdkDropListData]=\"to.options\">\n        <div class=\"option_wrap basic_checkbox\" *ngFor=\"let item of to.options\" cdkDrag>\n          <div class=\"option\">\n            <label nz-checkbox nzDisabled=\"true\"></label> \n            <inline-editor [(ngModel)]=\"item.label\" [active]=\"active\"></inline-editor>  \n          </div>\n          <div class=\"operate\" (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n            <i class=\"icon-KT-Close\"></i>\n          </div>  \n        </div>\n      </div> \n      <div class=\"question-wrap_operate\">\n        <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n        <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n      </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-checkbox-wrapper\n        style=\"width: 100%;\"\n        (nzOnChange)=\"onChange($event)\"\n        [class.is-invalid]=\"showError\"\n      >\n        <ng-container *ngFor=\"let option of to.options; let i = index\">\n          <label\n            nz-checkbox\n            [nzValue]=\"option.value\"\n            [ngModel]=\"getControlChecked(formControl.value, option)\"\n            [vxFormAttributes]=\"field\"\n            >{{ option.label }}</label>\n        </ng-container>\n      </nz-checkbox-wrapper> \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyCheckBox.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyCheckBox;
}(FieldType));
export { VXSurveyCheckBox };
if (false) {
    /** @type {?} */
    VXSurveyCheckBox.prototype.service;
    /** @type {?} */
    VXSurveyCheckBox.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQTZDc0MsNENBQVM7SUFHN0MsMEJBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQUVELE1BQU07Ozs7O0lBQ04sb0NBQVM7Ozs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxNQUFNOzs7OztJQUNOLHFDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7O0lBQ04sdUNBQVk7Ozs7OztJQUFaLFVBQWEsTUFBVTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsbUNBQVE7Ozs7SUFBUixVQUFTLE1BQWdCO1FBQXpCLGlCQWVDOztZQWRLLEdBQUcsR0FBUSxFQUFFO1FBQ2pCLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlELE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNsQixJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7b0JBQzdELEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxNQUFXO3dCQUNsQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUU7NEJBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2pCO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCx5Q0FBYzs7OztJQUFkLFVBQWUsTUFBVztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFTSw0Q0FBaUI7Ozs7O0lBQXhCLFVBQXlCLE1BQVcsRUFBRSxNQUFXOztZQUMzQyxNQUFNLEdBQUcsS0FBSztRQUNsQixJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDcEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxLQUFVO2dCQUM5QixPQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQy9CLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELCtCQUFJOzs7O0lBQUosVUFBSyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUM7O2dCQXJHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDh0REF5Q1Q7aUJBQ0Y7Ozs7Z0JBL0NRLGdCQUFnQjs7SUF5R3pCLHVCQUFDO0NBQUEsQUF0R0QsQ0E2Q3NDLFNBQVMsR0F5RDlDO1NBekRZLGdCQUFnQjs7O0lBQzNCLG1DQUFhOztJQUNiLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktY2hlY2tib3hcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiBjZGtEcm9wTGlzdCAgW2Nka0Ryb3BMaXN0RGF0YV09XCJ0by5vcHRpb25zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2NoZWNrYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiIGNka0RyYWc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBuekRpc2FibGVkPVwidHJ1ZVwiPjwvbGFiZWw+IFxyXG4gICAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cIml0ZW0ubGFiZWxcIiBbYWN0aXZlXT1cImFjdGl2ZVwiPjwvaW5saW5lLWVkaXRvcj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3BlcmF0ZVwiIChjbGljayk9XCJkZWxldGVPcHRpb24oaXRlbSlcIiAqbmdJZj1cImFjdGl2ZT09dHJ1ZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+IFxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb25zKClcIj7mibnph4/mt7vliqDpgInpobk8L3NwYW4+XHJcbiAgICAgIDwvZGl2PiAgIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgKG56T25DaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgICAgW25nTW9kZWxdPVwiZ2V0Q29udHJvbENoZWNrZWQoZm9ybUNvbnRyb2wudmFsdWUsIG9wdGlvbilcIlxyXG4gICAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L256LWNoZWNrYm94LXdyYXBwZXI+IFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlDaGVja0JveCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfSBcclxuIFxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCl7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIixcIlwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aJuemHj+a3u+WKoFxyXG4gIGFkZE9wdGlvbnMoKXtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIixcIlwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmAiemhuVxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246YW55KXsgXHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIixvcHRpb24sdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uQ2hhbmdlKHZhbHVlczogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXM6IGFueSA9IFtdO1xyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRvLm9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvLm9wdGlvbnMgIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudG8ub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uW1widmFsdWVcIl0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlcyk7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGdldENoZWNrU3RhdHVzKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbnRyb2xDaGVja2VkKHZhbHVlczogYW55LCBvcHRpb246IGFueSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgaWYgKG9wdGlvbiAmJiB2YWx1ZXMpIHtcclxuICAgICAgcmVzdWx0ID0gdmFsdWVzLnNvbWUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHsgXHJcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB9IFxyXG4gIH1cclxufVxyXG4iXX0=