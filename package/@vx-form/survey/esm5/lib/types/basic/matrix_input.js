/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyMatrixInput = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyMatrixInput, _super);
    function VXSurveyMatrixInput(dyService) {
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
    VXSurveyMatrixInput.prototype.controlModelChange = /**
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
                            optionvalue: value
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
                        if (!item.options.some((/**
                         * @param {?} op
                         * @return {?}
                         */
                        function (op) { return op.optionid == option.value; }))) {
                            item.options.push({
                                optionid: option.value,
                                optionvalue: value
                            });
                        }
                        else {
                            item.options.forEach((/**
                             * @param {?} op
                             * @return {?}
                             */
                            function (op) {
                                if (op.optionid == option.value) {
                                    op.optionvalue = value;
                                }
                            }));
                        }
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: value
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
    VXSurveyMatrixInput.prototype.getControlChecked = /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    function (subtitle, option) {
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
                if (value.groupid == subtitle.value) {
                    value.options.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        if (item.optionid == option.value) {
                            result = item.optionvalue;
                        }
                    }));
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
    VXSurveyMatrixInput.prototype.addOption = 
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
    VXSurveyMatrixInput.prototype.addSubTitle = 
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
    VXSurveyMatrixInput.prototype.addOptions = 
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
    VXSurveyMatrixInput.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    VXSurveyMatrixInput.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-matrix_input",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap matrix_input\">\n            <div class=\"option_table\">\n              <table>\n                <tr>\n                  <td></td>\n                  <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n                </tr>\n                <tr *ngFor=\"let itemTR of to.subtitle\">\n                  <td>{{itemTR.label}}</td>\n                  <td *ngFor=\"let itemTD of to.options\">\n                    <input nz-input placeholder=\"\" [disabled]=\"true\" />\n                  </td>\n                </tr>\n              </table>\n            </div>\n            <div class=\"option_vertical\">\n              <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addSubTitle()\">\u6DFB\u52A0\u5355\u77E9\u9635\u884C</span>  \n        </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <table class=\"option_wrap\">\n        <tr>\n          <td></td>\n          <td *ngFor=\"let itemTD of to.options\">{{itemTD.label}}</td>\n        </tr>\n        <tr *ngFor=\"let itemTR of to.subtitle\">\n          <td>{{itemTR.label}}</td>\n          <td *ngFor=\"let itemTD of to.options\">\n            <input nz-input [ngModel]=\"getControlChecked(itemTR,itemTD)\"  (ngModelChange)=\"controlModelChange($event,itemTR,itemTD)\"/>\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyMatrixInput.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyMatrixInput;
}(FieldType));
export { VXSurveyMatrixInput };
if (false) {
    /** @type {?} */
    VXSurveyMatrixInput.prototype.service;
    /** @type {?} */
    VXSurveyMatrixInput.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X2lucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL21hdHJpeF9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQ7SUFxRHlDLCtDQUFTO0lBR2hELDZCQUFZLFNBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FFUjtRQUpELFVBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7O0lBQzNCLENBQUM7Ozs7Ozs7SUFFRCxnREFBa0I7Ozs7OztJQUFsQixVQUFtQixLQUFTLEVBQUMsUUFBWSxFQUFDLE1BQVU7O1lBQzlDLE1BQU0sR0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBRTdDLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRTlELElBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsSUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBRSxRQUFRLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxFQUFDLEVBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1YsT0FBTyxFQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUN0QixPQUFPLEVBQUMsQ0FBQzs0QkFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ3JCLFdBQVcsRUFBQyxLQUFLO3lCQUNsQixD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SUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkF6SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSx1MkRBaURUO2lCQUNGOzs7O2dCQXZEUSxnQkFBZ0I7O0lBNkl6QiwwQkFBQztDQUFBLEFBMUlELENBcUR5QyxTQUFTLEdBcUZqRDtTQXJGWSxtQkFBbUI7OztJQUM5QixzQ0FBYTs7SUFDYixtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktbWF0cml4X2lucHV0XCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIlxyXG4gICAgICAgICAgPjwvaW5saW5lLWVkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXAgbWF0cml4X2lucHV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fdGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+e3tpdGVtVEQubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtVFIgb2YgdG8uc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7aXRlbVRSLmxhYmVsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IHBsYWNlaG9sZGVyPVwiXCIgW2Rpc2FibGVkXT1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl92ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPua3u+WKoOWNleS4qumAiemhuTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfb3BlcmF0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZFN1YlRpdGxlKClcIj7mt7vliqDljZXnn6npmLXooYw8L3NwYW4+ICBcclxuICAgICAgICA8L2Rpdj4gICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cIm9wdGlvbl93cmFwXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+e3tpdGVtVEQubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW1UUiBvZiB0by5zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgPHRkPnt7aXRlbVRSLmxhYmVsfX08L3RkPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBpdGVtVEQgb2YgdG8ub3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgW25nTW9kZWxdPVwiZ2V0Q29udHJvbENoZWNrZWQoaXRlbVRSLGl0ZW1URClcIiAgKG5nTW9kZWxDaGFuZ2UpPVwiY29udHJvbE1vZGVsQ2hhbmdlKCRldmVudCxpdGVtVFIsaXRlbVREKVwiLz5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5TWF0cml4SW5wdXQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH0gIFxyXG4gIFxyXG4gIGNvbnRyb2xNb2RlbENoYW5nZSh2YWx1ZTphbnksc3VidGl0bGU6YW55LG9wdGlvbjphbnkpeyBcclxuICAgIGxldCB2YWx1ZXM6YW55ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSB8fCBbXTtcclxuXHJcbiAgICBpZiAodmFsdWVzICE9IHVuZGVmaW5lZCAmJiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgaWYoIXZhbHVlcy5zb21lKChpdGVtOmFueSk9PntyZXR1cm4gaXRlbS5ncm91cGlkPT1zdWJ0aXRsZS52YWx1ZX0pKXtcclxuICAgICAgICB2YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICBncm91cGlkOnN1YnRpdGxlLnZhbHVlLFxyXG4gICAgICAgICAgb3B0aW9uczpbe1xyXG4gICAgICAgICAgICBvcHRpb25pZDpvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIG9wdGlvbnZhbHVlOnZhbHVlXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChpdGVtOmFueSk9PntcclxuICAgICAgICAgIGlmKGl0ZW0uZ3JvdXBpZD09c3VidGl0bGUudmFsdWUpe1xyXG4gICAgICAgICAgICBpZighaXRlbS5vcHRpb25zLnNvbWUoKG9wOmFueSk9PntyZXR1cm4gb3Aub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZX0pKXtcclxuICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25pZDpvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvcHRpb252YWx1ZTp2YWx1ZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5mb3JFYWNoKChvcDphbnkpPT57XHJcbiAgICAgICAgICAgICAgICBpZihvcC5vcHRpb25pZD09b3B0aW9uLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgb3Aub3B0aW9udmFsdWU9dmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhbHVlcy5wdXNoKHtcclxuICAgICAgICBncm91cGlkOnN1YnRpdGxlLnZhbHVlLFxyXG4gICAgICAgIG9wdGlvbnM6W3tcclxuICAgICAgICAgIG9wdGlvbmlkOm9wdGlvbi52YWx1ZSxcclxuICAgICAgICAgIG9wdGlvbnZhbHVlOnZhbHVlXHJcbiAgICAgICAgfV1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybUNvbnRyb2wucGF0Y2hWYWx1ZSh2YWx1ZXMpO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb250cm9sQ2hlY2tlZChzdWJ0aXRsZTogYW55LCBvcHRpb246IGFueSkge1xyXG4gIFxyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTsgXHJcbiAgICBpZiAodmFsdWVzICE9IHVuZGVmaW5lZCAmJiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWU6YW55KT0+e1xyXG4gICAgICAgIGlmKHZhbHVlLmdyb3VwaWQ9PXN1YnRpdGxlLnZhbHVlKXtcclxuICAgICAgICAgIHZhbHVlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0ub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgcmVzdWx0PWl0ZW0ub3B0aW9udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5re75Yqg6KGMXHJcbiAgYWRkU3ViVGl0bGUoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJzdWJ0aXRsZVwiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/mibnph4/mt7vliqBcclxuICBhZGRPcHRpb25zKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkc1wiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/liKDpmaTpgInpoblcclxuICBkZWxldGVPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLCBvcHRpb24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=