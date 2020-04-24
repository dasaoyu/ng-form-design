/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyMatrixRadio = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyMatrixRadio, _super);
    function VXSurveyMatrixRadio(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} value
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    VXSurveyMatrixRadio.prototype.controlModelChange = /**
     * @param {?} value
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    function (value, subtitle, option) {
        /** @type {?} */
        var values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.groupid == subtitle.value; }))) {
                values.push({
                    groupid: subtitle.value,
                    options: [{
                            optionid: option.value,
                            optionvalue: true
                        }]
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.groupid == subtitle.value) {
                        item.options = [{
                                optionid: option.value,
                                optionvalue: true
                            }];
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: true
                    }]
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    };
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    VXSurveyMatrixRadio.prototype.getControlChecked = /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    function (subtitle, option) {
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value.groupid == subtitle.value) {
                    result = value.options[0].optionid;
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
    VXSurveyMatrixRadio.prototype.addOption = 
    //添加选项
    /**
     * @return {?}
     */
    function () {
        this.service.optionOperational("add", "", this.field);
    };
    //添加行
    //添加行
    /**
     * @return {?}
     */
    VXSurveyMatrixRadio.prototype.addSubTitle = 
    //添加行
    /**
     * @return {?}
     */
    function () {
        this.service.optionOperational("subtitle", "", this.field);
    };
    //批量添加
    //批量添加
    /**
     * @return {?}
     */
    VXSurveyMatrixRadio.prototype.addOptions = 
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
    VXSurveyMatrixRadio.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    VXSurveyMatrixRadio.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-matrix_radio",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap matrix_radio\">\n            <div class=\"option_table\">\n              <table>\n                <tr>\n                  <td></td>\n                  <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n                </tr>\n                <tr *ngFor=\"let itemTR of to.subtitle\">\n                  <td>{{itemTR.label}}</td>\n                  <td *ngFor=\"let itemTD of to.options\">\n                  <label nz-radio nzDisabled=\"true\"></label> \n                  </td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"option_vertical\">\n              <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addSubTitle()\">\u6DFB\u52A0\u5355\u77E9\u9635\u884C</span>  \n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <table class=\"option_wrap\">\n        <tr>\n          <td></td>\n          <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n        </tr>\n        <tr *ngFor=\"let itemTR of to.subtitle\">\n          <td>{{itemTR.label}}</td>\n          <td *ngFor=\"let itemTD of to.options\"> \n            <input [id]=\"itemTR.value+'-'+itemTD.value\" type=\"radio\" [value]=\"itemTD.value\" [name]=\"itemTR.value\" [ngModel]=\"getControlChecked(itemTR,itemTD)\"  (ngModelChange)=\"controlModelChange($event,itemTR,itemTD)\">\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyMatrixRadio.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyMatrixRadio;
}(FieldType));
export { VXSurveyMatrixRadio };
if (false) {
    /** @type {?} */
    VXSurveyMatrixRadio.prototype.service;
    /** @type {?} */
    VXSurveyMatrixRadio.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X3JhZGlvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL21hdHJpeF9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQ7SUFxRHlDLCtDQUFTO0lBR2hELDZCQUFZLFNBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FFUjtRQUpELFVBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7O0lBQzNCLENBQUM7Ozs7Ozs7SUFJRCxnREFBa0I7Ozs7OztJQUFsQixVQUFtQixLQUFTLEVBQUMsUUFBWSxFQUFDLE1BQVU7O1lBQzlDLE1BQU0sR0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBRTdDLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRTlELElBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsSUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBRSxRQUFRLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxFQUFDLEVBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1YsT0FBTyxFQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUN0QixPQUFPLEVBQUMsQ0FBQzs0QkFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ3JCLFdBQVcsRUFBQyxJQUFJO3lCQUNqQixDQUFDO2lCQUNILENBQUMsQ0FBQTthQUNIO2lCQUFJO2dCQUNILE1BQU0sQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsSUFBUTtvQkFDdEIsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUM7d0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQztnQ0FDWixRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7Z0NBQ3JCLFdBQVcsRUFBQyxJQUFJOzZCQUNqQixDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO2FBQUk7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLE9BQU8sRUFBQyxRQUFRLENBQUMsS0FBSztnQkFDdEIsT0FBTyxFQUFDLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE1BQU0sQ0FBQyxLQUFLO3dCQUNyQixXQUFXLEVBQUMsSUFBSTtxQkFDakIsQ0FBQzthQUNILENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7O0lBQWpCLFVBQWtCLFFBQWEsRUFBRSxNQUFXOztZQUV0QyxNQUFNLEdBQUcsRUFBRTs7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1FBQ25DLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlELE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFTO2dCQUN2QixJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUUsUUFBUSxDQUFDLEtBQUssRUFBQztvQkFDL0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFO2lCQUNyQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTs7Ozs7SUFDTix1Q0FBUzs7Ozs7SUFBVDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELEtBQUs7Ozs7O0lBQ0wseUNBQVc7Ozs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxNQUFNOzs7OztJQUNOLHdDQUFVOzs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7O0lBQ04sMENBQVk7Ozs7OztJQUFaLFVBQWEsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQWhJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHk3REFpRFQ7aUJBQ0Y7Ozs7Z0JBdkRRLGdCQUFnQjs7SUFvSXpCLDBCQUFDO0NBQUEsQUFqSUQsQ0FxRHlDLFNBQVMsR0E0RWpEO1NBNUVZLG1CQUFtQjs7O0lBQzlCLHNDQUFhOztJQUNiLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1tYXRyaXhfcmFkaW9cIixcclxuICB0ZW1wbGF0ZTogYCBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbmxpbmUtZWRpdG9yIFsobmdNb2RlbCldPVwidG8ubGFiZWxcIiBbYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICA+PC9pbmxpbmUtZWRpdG9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcCBtYXRyaXhfcmFkaW9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl90YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbVREIG9mIHRvLm9wdGlvbnNcIj57e2l0ZW1URC5sYWJlbH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW1UUiBvZiB0by5zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtVFIubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbVREIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56RGlzYWJsZWQ9XCJ0cnVlXCI+PC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3ZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZE9wdGlvbigpXCI+5re75Yqg5Y2V5Liq6YCJ6aG5PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9vcGVyYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkU3ViVGl0bGUoKVwiPua3u+WKoOWNleefqemYteihjDwvc3Bhbj4gIFxyXG4gICAgICAgIDwvZGl2PiAgIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwib3B0aW9uX3dyYXBcIj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbVREIG9mIHRvLm9wdGlvbnNcIj57e2l0ZW1URC5sYWJlbH19PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbVRSIG9mIHRvLnN1YnRpdGxlXCI+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtVFIubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+IFxyXG4gICAgICAgICAgICA8aW5wdXQgW2lkXT1cIml0ZW1UUi52YWx1ZSsnLScraXRlbVRELnZhbHVlXCIgdHlwZT1cInJhZGlvXCIgW3ZhbHVlXT1cIml0ZW1URC52YWx1ZVwiIFtuYW1lXT1cIml0ZW1UUi52YWx1ZVwiIFtuZ01vZGVsXT1cImdldENvbnRyb2xDaGVja2VkKGl0ZW1UUixpdGVtVEQpXCIgIChuZ01vZGVsQ2hhbmdlKT1cImNvbnRyb2xNb2RlbENoYW5nZSgkZXZlbnQsaXRlbVRSLGl0ZW1URClcIj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5TWF0cml4UmFkaW8gZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH0gXHJcblxyXG4gIFxyXG4gIFxyXG4gIGNvbnRyb2xNb2RlbENoYW5nZSh2YWx1ZTphbnksc3VidGl0bGU6YW55LG9wdGlvbjphbnkpeyBcclxuICAgIGxldCB2YWx1ZXM6YW55ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSB8fCBbXTtcclxuXHJcbiAgICBpZiAodmFsdWVzICE9IHVuZGVmaW5lZCAmJiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgaWYoIXZhbHVlcy5zb21lKChpdGVtOmFueSk9PntyZXR1cm4gaXRlbS5ncm91cGlkPT1zdWJ0aXRsZS52YWx1ZX0pKXtcclxuICAgICAgICB2YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICBncm91cGlkOnN1YnRpdGxlLnZhbHVlLFxyXG4gICAgICAgICAgb3B0aW9uczpbe1xyXG4gICAgICAgICAgICBvcHRpb25pZDpvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIG9wdGlvbnZhbHVlOnRydWVcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKGl0ZW06YW55KT0+e1xyXG4gICAgICAgICAgaWYoaXRlbS5ncm91cGlkPT1zdWJ0aXRsZS52YWx1ZSl7XHJcbiAgICAgICAgICAgIGl0ZW0ub3B0aW9ucz1be1xyXG4gICAgICAgICAgICAgIG9wdGlvbmlkOm9wdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgICBvcHRpb252YWx1ZTp0cnVlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdmFsdWVzLnB1c2goe1xyXG4gICAgICAgIGdyb3VwaWQ6c3VidGl0bGUudmFsdWUsXHJcbiAgICAgICAgb3B0aW9uczpbe1xyXG4gICAgICAgICAgb3B0aW9uaWQ6b3B0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgb3B0aW9udmFsdWU6dHJ1ZVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWVzKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJvbENoZWNrZWQoc3VidGl0bGU6IGFueSwgb3B0aW9uOiBhbnkpIHtcclxuICBcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgbGV0IHZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7IFxyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOmFueSk9PntcclxuICAgICAgICBpZih2YWx1ZS5ncm91cGlkPT1zdWJ0aXRsZS52YWx1ZSl7XHJcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZS5vcHRpb25zWzBdLm9wdGlvbmlkIDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSAgXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gXHJcblxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+a3u+WKoOihjFxyXG4gIGFkZFN1YlRpdGxlKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwic3VidGl0bGVcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIiwgb3B0aW9uLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19