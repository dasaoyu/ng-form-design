/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyInput = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyInput, _super);
    function VXSurveyInput(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    VXSurveyInput.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-input",
                    template: "  \n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"question-wrap_title\">\n        <div class=\"required\">\n          <span *ngIf=\"to.required\">*</span>\n        </div>\n        <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>   \n      </div>\n      <div class=\"question-wrap_content\">\n        <div class=\"option_wrap basic_input\" >\n          <ng-container *ngIf=\"to.setting.size=='small'\">\n            <input nz-input placeholder=\"\" [disabled]=\"true\" />\n          </ng-container>\n          <ng-container *ngIf=\"to.setting.size=='default'\">\n            <textarea rows=\"2\" nz-input [disabled]=\"true\" ></textarea>\n          </ng-container>\n          <ng-container *ngIf=\"to.setting.size=='large'\">\n            <textarea rows=\"4\" nz-input [disabled]=\"true\" ></textarea>\n          </ng-container>\n        </div>\n      </div>   \n  </ng-container>\n\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"to.setting.size=='small'\">\n        <input nz-input  \n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\" />\n      </ng-container>\n      <ng-container *ngIf=\"to.setting.size=='default'\">\n        <textarea rows=\"2\" nz-input  \n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"  ></textarea>\n      </ng-container>\n      <ng-container *ngIf=\"to.setting.size=='large'\">\n        <textarea rows=\"4\" nz-input  \n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"></textarea>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyInput.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyInput;
}(FieldType));
export { VXSurveyInput };
if (false) {
    /** @type {?} */
    VXSurveyInput.prototype.service;
    /** @type {?} */
    VXSurveyInput.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZEO0lBZ0RtQyx5Q0FBUztJQUcxQyx1QkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFKRCxVQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztJQUMzQixDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxndURBNENUO2lCQUNGOzs7O2dCQWxEUSxnQkFBZ0I7O0lBMkR6QixvQkFBQztDQUFBLEFBeERELENBZ0RtQyxTQUFTLEdBUTNDO1NBUlksYUFBYTs7O0lBQ3hCLGdDQUFhOztJQUNiLDZCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1pbnB1dFwiLFxyXG4gIHRlbXBsYXRlOiBgICBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2lucHV0XCIgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvLnNldHRpbmcuc2l6ZT09J3NtYWxsJ1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0by5zZXR0aW5nLnNpemU9PSdkZWZhdWx0J1wiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjJcIiBuei1pbnB1dCBbZGlzYWJsZWRdPVwidHJ1ZVwiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8uc2V0dGluZy5zaXplPT0nbGFyZ2UnXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIG56LWlucHV0IFtkaXNhYmxlZF09XCJ0cnVlXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICAgXHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0by5zZXR0aW5nLnNpemU9PSdzbWFsbCdcIj5cclxuICAgICAgICA8aW5wdXQgbnotaW5wdXQgIFxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiIC8+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8uc2V0dGluZy5zaXplPT0nZGVmYXVsdCdcIj5cclxuICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjJcIiBuei1pbnB1dCAgXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCIgID48L3RleHRhcmVhPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvLnNldHRpbmcuc2l6ZT09J2xhcmdlJ1wiPlxyXG4gICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIG56LWlucHV0ICBcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIj48L3RleHRhcmVhPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5SW5wdXQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuIFxyXG59XHJcbiJdfQ==