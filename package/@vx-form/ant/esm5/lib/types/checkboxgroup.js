/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldCheckboxGroup = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldCheckboxGroup, _super);
    function VXFormFieldCheckboxGroup(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldCheckboxGroup.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    /**
     * @param {?} values
     * @return {?}
     */
    VXFormFieldCheckboxGroup.prototype.onChange = /**
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
    VXFormFieldCheckboxGroup.prototype.getCheckStatus = /**
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
    VXFormFieldCheckboxGroup.prototype.getControlChecked = /**
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
    VXFormFieldCheckboxGroup.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-checkboxgroup",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <nz-checkbox-wrapper\n              style=\"width: 100%;\"\n              (nzOnChange)=\"onChange($event)\"\n              [class.is-invalid]=\"showError\"\n            >\n              <ng-container *ngFor=\"let option of to.options; let i = index\">\n                <label\n                  nz-checkbox\n                  [nzValue]=\"option.value\"\n                  [ngModel]=\"getControlChecked(formControl.value, option)\"\n                  [vxFormAttributes]=\"field\"\n                  disabled\n                  >{{ option.label }}</label\n                >\n              </ng-container>\n            </nz-checkbox-wrapper>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-checkbox-wrapper\n          style=\"width: 100%;\"\n          (nzOnChange)=\"onChange($event)\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let option of to.options; let i = index\">\n            <label\n              nz-checkbox\n              [nzValue]=\"option.value\"\n              [ngModel]=\"getControlChecked(formControl.value, option)\"\n              [vxFormAttributes]=\"field\"\n              >{{ option.label }}</label\n            >\n          </ng-container>\n        </nz-checkbox-wrapper>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textMultiple }}</div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldCheckboxGroup.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldCheckboxGroup;
}(FieldType));
export { VXFormFieldCheckboxGroup };
if (false) {
    /** @type {?} */
    VXFormFieldCheckboxGroup.prototype.service;
    /** @type {?} */
    VXFormFieldCheckboxGroup.prototype.guid;
}
/**
 * @record
 */
export function ICheckValues() { }
if (false) {
    /** @type {?} */
    ICheckValues.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9jaGVja2JveGdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRDtJQXlFOEMsb0RBQVM7SUFHckQsa0NBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCwyQ0FBUTs7OztJQUFSLFVBQVMsTUFBZ0I7UUFBekIsaUJBZUM7O1lBZEssR0FBRyxHQUFRLEVBQUU7UUFDakIsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2xCLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtvQkFDN0QsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLE1BQVc7d0JBQ2xDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssRUFBRTs0QkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDakI7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxNQUFXO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVNLG9EQUFpQjs7Ozs7SUFBeEIsVUFBeUIsTUFBVyxFQUFFLE1BQVc7O1lBQzNDLE1BQU0sR0FBRyxLQUFLO1FBQ2xCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEtBQVU7Z0JBQzlCLE9BQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWxIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLCs5RUFxRVQ7aUJBQ0Y7Ozs7Z0JBMUVRLGdCQUFnQjs7SUFxSHpCLCtCQUFDO0NBQUEsQUFuSEQsQ0F5RThDLFNBQVMsR0EwQ3REO1NBMUNZLHdCQUF3Qjs7O0lBQ25DLDJDQUFhOztJQUNiLHdDQUFtQzs7Ozs7QUEwQ3JDLGtDQUVDOzs7SUFEQyw2QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1jaGVja2JveGdyb3VwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bnotY2hlY2tib3gtd3JhcHBlclxyXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7XCJcclxuICAgICAgICAgICAgICAobnpPbkNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHRvLm9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBuei1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJnZXRDb250cm9sQ2hlY2tlZChmb3JtQ29udHJvbC52YWx1ZSwgb3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgPnt7IG9wdGlvbi5sYWJlbCB9fTwvbGFiZWxcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUVkaXQwM1wiPjwvaT7nvJbovpFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgICAgIDxuei1jaGVja2JveC13cmFwcGVyXHJcbiAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgICAobnpPbkNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHRvLm9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgICBbbnpWYWx1ZV09XCJvcHRpb24udmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtuZ01vZGVsXT1cImdldENvbnRyb2xDaGVja2VkKGZvcm1Db250cm9sLnZhbHVlLCBvcHRpb24pXCJcclxuICAgICAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgPnt7IG9wdGlvbi5sYWJlbCB9fTwvbGFiZWxcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHRleHRcIiAqbmdJZj1cImVkaXRvciA9PT0gZmFsc2VcIj57eyB0ZXh0TXVsdGlwbGUgfX08L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkQ2hlY2tib3hHcm91cCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSh2YWx1ZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgcmVzOiBhbnkgPSBbXTtcclxuICAgIGlmICh2YWx1ZXMgIT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodGhpcy50by5vcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdGhpcy50by5vcHRpb25zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnRvLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbltcInZhbHVlXCJdID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHJlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybUNvbnRyb2wucGF0Y2hWYWx1ZSh2YWx1ZXMpO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDaGVja1N0YXR1cyhvcHRpb246IGFueSkge1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb250cm9sQ2hlY2tlZCh2YWx1ZXM6IGFueSwgb3B0aW9uOiBhbnkpIHtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIGlmIChvcHRpb24gJiYgdmFsdWVzKSB7XHJcbiAgICAgIHJlc3VsdCA9IHZhbHVlcy5zb21lKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09IG9wdGlvbi52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tWYWx1ZXMge1xyXG4gIHZhbHVlOiBhbnk7XHJcbn1cclxuIl19