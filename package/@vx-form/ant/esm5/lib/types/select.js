/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldSelect = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldSelect, _super);
    function VXFormFieldSelect(dyService) {
        var _this = _super.call(this) || this;
        _this.defaultValue = "";
        _this.defaultValues = [];
        _this.selecttype = "default";
        _this.service = dyService;
        return _this;
    }
    /**
     * @return {?}
     */
    VXFormFieldSelect.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.to.selecttype === "multiple") {
            this.selecttype = "multiple";
            if (this.field.defaultValue && this.field.defaultValue != null) {
                this.defaultValues = this.field.defaultValue.split(",");
            }
        }
        else {
            this.defaultValue = this.field.defaultValue;
        }
    };
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldSelect.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    /**
     * @return {?}
     */
    VXFormFieldSelect.prototype.getSelectText = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = "";
        if (this.to && this.to.selecttype) {
            if (this.to.selecttype === "single") {
                result = this.textSingle;
            }
            else if (this.to.selecttype === "multiple") {
                result = this.textMultiple;
            }
        }
        return result;
    };
    VXFormFieldSelect.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-select",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-select\n          nzShowSearch\n          nzAllowClear\n          [nzMode]=\"to.selecttype === 'multiple' ? 'multiple' : 'default'\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n          [nzPlaceHolder]=\"placeHolder\"\n        >\n          <ng-container *ngFor=\"let item of to.options\">\n            <nz-option\n              [nzLabel]=\"item.label\"\n              [nzValue]=\"item.value\"\n            ></nz-option>\n          </ng-container>\n        </nz-select>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">\n        {{ getSelectText() }}\n      </div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldSelect.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldSelect;
}(FieldType));
export { VXFormFieldSelect };
if (false) {
    /** @type {?} */
    VXFormFieldSelect.prototype.service;
    /** @type {?} */
    VXFormFieldSelect.prototype.defaultValue;
    /** @type {?} */
    VXFormFieldSelect.prototype.defaultValues;
    /** @type {?} */
    VXFormFieldSelect.prototype.selecttype;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL3NlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHcEQ7SUE4RHVDLDZDQUFTO0lBSzlDLDJCQUFZLFNBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FFUjtRQU5ELGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLG1CQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGdCQUFVLEdBQUcsU0FBUyxDQUFDO1FBR3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztJQUMzQixDQUFDOzs7O0lBQ0QsOENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCx5Q0FBYTs7O0lBQWI7O1lBQ00sTUFBTSxHQUFXLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMxQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWhHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG81REEwRFQ7aUJBQ0Y7Ozs7Z0JBaEVRLGdCQUFnQjs7SUFvR3pCLHdCQUFDO0NBQUEsQUFqR0QsQ0E4RHVDLFNBQVMsR0FtQy9DO1NBbkNZLGlCQUFpQjs7O0lBQzVCLG9DQUFhOztJQUNiLHlDQUEwQjs7SUFDMUIsMENBQTZCOztJQUM3Qix1Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29kZVNhbmRib3hPdXRsaW5lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMvcHVibGljX2FwaVwiO1xyXG5pbXBvcnQgeyBlbGVtZW50QXQgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1zZWxlY3RcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkT3BlcmF0aW9uYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUVkaXQwM1wiPjwvaT7nvJbovpFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgICAgIDxuei1zZWxlY3RcclxuICAgICAgICAgIG56U2hvd1NlYXJjaFxyXG4gICAgICAgICAgbnpBbGxvd0NsZWFyXHJcbiAgICAgICAgICBbbnpNb2RlXT1cInRvLnNlbGVjdHR5cGUgPT09ICdtdWx0aXBsZScgPyAnbXVsdGlwbGUnIDogJ2RlZmF1bHQnXCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwicGxhY2VIb2xkZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8bnotb3B0aW9uXHJcbiAgICAgICAgICAgICAgW256TGFiZWxdPVwiaXRlbS5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgICAgID48L256LW9wdGlvbj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbnotc2VsZWN0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+XHJcbiAgICAgICAge3sgZ2V0U2VsZWN0VGV4dCgpIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRTZWxlY3QgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xyXG4gIGRlZmF1bHRWYWx1ZXM6IHN0cmluZ1tdID0gW107XHJcbiAgc2VsZWN0dHlwZSA9IFwiZGVmYXVsdFwiO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgaWYgKHRoaXMudG8uc2VsZWN0dHlwZSA9PT0gXCJtdWx0aXBsZVwiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0dHlwZSA9IFwibXVsdGlwbGVcIjtcclxuICAgICAgaWYgKHRoaXMuZmllbGQuZGVmYXVsdFZhbHVlICYmIHRoaXMuZmllbGQuZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZXMgPSB0aGlzLmZpZWxkLmRlZmF1bHRWYWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5maWVsZC5kZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RUZXh0KCkge1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnRvICYmIHRoaXMudG8uc2VsZWN0dHlwZSkge1xyXG4gICAgICBpZiAodGhpcy50by5zZWxlY3R0eXBlID09PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy50ZXh0U2luZ2xlO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudG8uc2VsZWN0dHlwZSA9PT0gXCJtdWx0aXBsZVwiKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy50ZXh0TXVsdGlwbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==