/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldRadioGroup = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldRadioGroup, _super);
    function VXFormFieldRadioGroup(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldRadioGroup.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    VXFormFieldRadioGroup.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-radiogroup",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <nz-radio-group\n              [nzName]=\"'radiogroup-' + guid\"\n              [formControl]=\"formControl\"\n              [vxFormAttributes]=\"field\"\n              [class.is-invalid]=\"showError\"\n            >\n              <ng-container *ngFor=\"let item of to.options\">\n                <label nz-radio [nzValue]=\"item.value\" nzDisabled=\"true\">{{\n                  item.label\n                }}</label>\n              </ng-container>\n            </nz-radio-group>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-radio-group\n          [nzName]=\"'radiogroup-' + guid\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let item of to.options\">\n            <label nz-radio [nzValue]=\"item.value\">{{ item.label }}</label>\n          </ng-container>\n        </nz-radio-group>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textSingle }}</div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldRadioGroup.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldRadioGroup;
}(FieldType));
export { VXFormFieldRadioGroup };
if (false) {
    /** @type {?} */
    VXFormFieldRadioGroup.prototype.service;
    /** @type {?} */
    VXFormFieldRadioGroup.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9yYWRpb2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRDtJQWlFMkMsaURBQVM7SUFHbEQsK0JBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBM0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsNnBFQTZEVDtpQkFDRjs7OztnQkFqRVEsZ0JBQWdCOztJQTZFekIsNEJBQUM7Q0FBQSxBQTVFRCxDQWlFMkMsU0FBUyxHQVduRDtTQVhZLHFCQUFxQjs7O0lBQ2hDLHdDQUFhOztJQUNiLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZpZWxkLXJhZGlvZ3JvdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkT3BlcmF0aW9uYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxuei1yYWRpby1ncm91cFxyXG4gICAgICAgICAgICAgIFtuek5hbWVdPVwiJ3JhZGlvZ3JvdXAtJyArIGd1aWRcIlxyXG4gICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCIgbnpEaXNhYmxlZD1cInRydWVcIj57e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLmxhYmVsXHJcbiAgICAgICAgICAgICAgICB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZEJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRWRpdFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdlZGl0JylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tRWRpdDAzXCI+PC9pPue8lui+kVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWRpdG9yID09PSB0cnVlXCI+XHJcbiAgICAgICAgPG56LXJhZGlvLWdyb3VwXHJcbiAgICAgICAgICBbbnpOYW1lXT1cIidyYWRpb2dyb3VwLScgKyBndWlkXCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiPnt7IGl0ZW0ubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uei1yYWRpby1ncm91cD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwidGlwc1wiXHJcbiAgICAgICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAgICAgKm5nSWY9XCJ0aXBzICE9ICcnXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPnt7IHRleHRTaW5nbGUgfX08L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkUmFkaW9Hcm91cCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==