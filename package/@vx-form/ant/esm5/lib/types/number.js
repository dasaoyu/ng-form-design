/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldNumber = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldNumber, _super);
    function VXFormFieldNumber(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    Object.defineProperty(VXFormFieldNumber.prototype, "precision", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = 0;
            if (this.to != undefined && this.to != null && this.to["precision"] != undefined && this.to["precision"] != null) {
                result = this.to["precision"];
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldNumber.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    VXFormFieldNumber.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-number",
                    template: "\n  <ng-container *ngIf=\"formStatus !== 0\">\n    <div class=\"fieldOperational\">\n      <div class=\"fieldcheckbox\">\n        <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n      </div>\n      <div class=\"fieldControl\">\n        <div class=\"label\">\n          <span *ngIf=\"to.required\">*</span>{{ to.label }}\n        </div>\n        <div class=\"control\">\n          <input nz-input disabled />\n        </div>\n        <div class=\"fieldButton\">\n          <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n            <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n          </button>\n          <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n            <i class=\"icon-KT-Close\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"formStatus === 0\">\n    <ng-container *ngIf=\"editor === true\">\n      <nz-input-number\n        [formControl]=\"formControl\"\n        class=\"form-control\"\n        [vxFormAttributes]=\"field\"\n        [class.is-invalid]=\"showError\"\n        [nzPlaceHolder]=\"placeHolder\"\n        [nzPrecision]=\"precision\"\n      ></nz-input-number>\n      <div class=\"tips\">\n        <i\n          class=\"icon-bangzhu\"\n          [nzTooltipTitle]=\"tips\"\n          nzTooltipPlacement=\"top\"\n          nz-tooltip\n          *ngIf=\"tips != ''\"\n        ></i>\n      </div>\n    </ng-container>\n\n    <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ text }}</div>\n  </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldNumber.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldNumber;
}(FieldType));
export { VXFormFieldNumber };
if (false) {
    /** @type {?} */
    VXFormFieldNumber.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL251bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRDtJQW9EdUMsNkNBQVM7SUFVOUMsMkJBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7O0lBQzNCLENBQUM7SUFWRCxzQkFBSSx3Q0FBUzs7OztRQUFiOztnQkFDTSxNQUFNLEdBQUMsQ0FBQztZQUNaLElBQUcsSUFBSSxDQUFDLEVBQUUsSUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBRSxJQUFJLEVBQUM7Z0JBQ3RHLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7Ozs7O0lBTUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdoREFnRFQ7aUJBQ0Y7Ozs7Z0JBckRRLGdCQUFnQjs7SUF3RXpCLHdCQUFDO0NBQUEsQUF0RUQsQ0FvRHVDLFNBQVMsR0FrQi9DO1NBbEJZLGlCQUFpQjs7O0lBQzVCLG9DQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZpZWxkLW51bWJlclwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNoZWNrYm94XCI+XHJcbiAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRDb250cm9sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgZGlzYWJsZWQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5FZGl0XCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2VkaXQnKVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb24tRWRpdDAzXCI+PC9pPue8lui+kVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2RlbGV0ZScpXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgICA8bnotaW5wdXQtbnVtYmVyXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgW256UGxhY2VIb2xkZXJdPVwicGxhY2VIb2xkZXJcIlxyXG4gICAgICAgIFtuelByZWNpc2lvbl09XCJwcmVjaXNpb25cIlxyXG4gICAgICA+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIGNsYXNzPVwiaWNvbi1iYW5nemh1XCJcclxuICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICBuei10b29sdGlwXHJcbiAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgID48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPnt7IHRleHQgfX08L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZE51bWJlciBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIFxyXG4gIGdldCBwcmVjaXNpb24oKXtcclxuICAgIGxldCByZXN1bHQ9MDtcclxuICAgIGlmKHRoaXMudG8hPXVuZGVmaW5lZCAmJiB0aGlzLnRvIT1udWxsICYmIHRoaXMudG9bXCJwcmVjaXNpb25cIl0hPXVuZGVmaW5lZCAmJiB0aGlzLnRvW1wicHJlY2lzaW9uXCJdIT1udWxsKXtcclxuICAgICAgcmVzdWx0ID0gdGhpcy50b1tcInByZWNpc2lvblwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19