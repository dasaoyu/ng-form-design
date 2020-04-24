/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyTime = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyTime, _super);
    function VXSurveyTime(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    VXSurveyTime.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-time",
                    template: "\n    \n    \n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\"></inline-editor>  \n      </div>\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap time\" > \n          <nz-time-picker nzFormat=\"HH:mm\" [nzDisabled]=\"true\"></nz-time-picker>\n        </div>\n      </div>   \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\"> \n      <nz-time-picker nzFormat=\"HH:mm\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\">\n      </nz-time-picker> \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyTime.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyTime;
}(FieldType));
export { VXSurveyTime };
if (false) {
    /** @type {?} */
    VXSurveyTime.prototype.service;
    /** @type {?} */
    VXSurveyTime.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RDtJQTRCa0Msd0NBQVM7SUFHekMsc0JBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLHd3QkF3QlQ7aUJBQ0Y7Ozs7Z0JBOUJRLGdCQUFnQjs7SUF3Q3pCLG1CQUFDO0NBQUEsQUFyQ0QsQ0E0QmtDLFNBQVMsR0FTMUM7U0FUWSxZQUFZOzs7SUFDdkIsK0JBQWE7O0lBQ2IsNEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS10aW1lXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG4gICAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiPjwvaW5saW5lLWVkaXRvcj4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcCB0aW1lXCIgPiBcclxuICAgICAgICAgIDxuei10aW1lLXBpY2tlciBuekZvcm1hdD1cIkhIOm1tXCIgW256RGlzYWJsZWRdPVwidHJ1ZVwiPjwvbnotdGltZS1waWNrZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj4gXHJcbiAgICAgIDxuei10aW1lLXBpY2tlciBuekZvcm1hdD1cIkhIOm1tXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIj5cclxuICAgICAgPC9uei10aW1lLXBpY2tlcj4gXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVRpbWUgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgIFxyXG59XHJcbiJdfQ==