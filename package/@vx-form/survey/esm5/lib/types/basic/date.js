/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyDate = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyDate, _super);
    function VXSurveyDate(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    Object.defineProperty(VXSurveyDate.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = "yyyy-MM-dd";
            if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
                result = this.to["format"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    VXSurveyDate.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-date",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap date\" > \n          <nz-date-picker nzDisabled></nz-date-picker>\n        </div>\n      </div>   \n    </ng-container>\n\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-date-picker \n        nzShowTime\n        [nzFormat]=\"format\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n      ></nz-date-picker>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyDate.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyDate;
}(FieldType));
export { VXSurveyDate };
if (false) {
    /** @type {?} */
    VXSurveyDate.prototype.service;
    /** @type {?} */
    VXSurveyDate.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RDtJQTZCa0Msd0NBQVM7SUFVekMsc0JBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBWEQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVVqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQVZELHNCQUFJLGdDQUFNOzs7O1FBQVY7O2dCQUNNLE1BQU0sR0FBQyxZQUFZO1lBQ3ZCLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBRSxFQUFFLEVBQUM7Z0JBQ2xGLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxnd0JBeUJUO2lCQUNGOzs7O2dCQS9CUSxnQkFBZ0I7O0lBK0N6QixtQkFBQztDQUFBLEFBNUNELENBNkJrQyxTQUFTLEdBZTFDO1NBZlksWUFBWTs7O0lBQ3ZCLCtCQUFhOztJQUNiLDRCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZGF0ZVwiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbmxpbmUtZWRpdG9yIFsobmdNb2RlbCldPVwidG8ubGFiZWxcIj48L2lubGluZS1lZGl0b3I+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXAgZGF0ZVwiID4gXHJcbiAgICAgICAgICA8bnotZGF0ZS1waWNrZXIgbnpEaXNhYmxlZD48L256LWRhdGUtcGlja2VyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotZGF0ZS1waWNrZXIgXHJcbiAgICAgICAgbnpTaG93VGltZVxyXG4gICAgICAgIFtuekZvcm1hdF09XCJmb3JtYXRcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgID48L256LWRhdGUtcGlja2VyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlEYXRlIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ3VpZDogYW55ID0gR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdO1xyXG4gIGdldCBmb3JtYXQoKXtcclxuICAgIGxldCByZXN1bHQ9XCJ5eXl5LU1NLWRkXCI7IFxyXG4gICAgaWYodGhpcy50b1tcImZvcm1hdFwiXSE9dW5kZWZpbmVkICYmIHRoaXMudG9bXCJmb3JtYXRcIl0hPW51bGwgJiYgdGhpcy50b1tcImZvcm1hdFwiXSE9XCJcIil7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMudG9bXCJmb3JtYXRcIl07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG4gXHJcbn1cclxuIl19