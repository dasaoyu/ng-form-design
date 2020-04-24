/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
import * as moment_ from "moment";
/** @type {?} */
var moment = moment_;
var VXFormFieldDateTime = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldDateTime, _super);
    function VXFormFieldDateTime(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    Object.defineProperty(VXFormFieldDateTime.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = "yyyy-MM-dd HH:mm:ss";
            if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
                result = this.to["format"];
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
    VXFormFieldDateTime.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    /**
     * @return {?}
     */
    VXFormFieldDateTime.prototype.getText = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = "";
        if (this.to.type != undefined && this.to.type != null) {
            if (this.model != undefined &&
                this.model != null &&
                this.field != undefined &&
                this.field != null &&
                this.field.key != undefined &&
                this.field.key != null &&
                this.model[this.field.key] != undefined &&
                this.model[this.field.key] != null &&
                this.model[this.field.key] != "") {
                switch (this.to.type) {
                    case "datetime":
                        result = moment(this.model[this.field.key]).format("yyyy-MM-DD HH:mm:ss");
                        break;
                    case "date":
                        result = moment(this.model[this.field.key]).format("YYYY-MM-DD");
                        break;
                    case "year":
                        result = moment(this.model[this.field.key]).format("YYYY");
                        break;
                    case "month":
                        result = moment(this.model[this.field.key]).format("YYYY-MM");
                        break;
                    case "time":
                        result = moment(this.model[this.field.key]).format("HH:mm");
                        break;
                }
            }
        }
        return result;
    };
    VXFormFieldDateTime.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-datetime",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\"\n      ><ng-container *ngIf=\"editor === true\"> \n          <nz-date-picker \n            nzShowTime\n            [nzFormat]=\"format\"\n            [formControl]=\"formControl\"\n            [vxFormAttributes]=\"field\"\n            [class.is-invalid]=\"showError\"\n          ></nz-date-picker>\n \n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ getText() }}</div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldDateTime.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldDateTime;
}(FieldType));
export { VXFormFieldDateTime };
if (false) {
    /** @type {?} */
    VXFormFieldDateTime.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvZGF0ZXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBQzVCLE1BQU0sR0FBRyxPQUFPO0FBRXRCO0lBb0R5QywrQ0FBUztJQVVoRCw2QkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQVhELHNCQUFJLHVDQUFNOzs7O1FBQVY7O2dCQUNNLE1BQU0sR0FBQyxxQkFBcUI7WUFDaEMsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFFLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFFLEVBQUUsRUFBQztnQkFDbEYsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUI7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDOzs7T0FBQTs7Ozs7SUFPRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELHFDQUFPOzs7SUFBUDs7WUFDTSxNQUFNLEdBQUcsRUFBRTtRQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNyRCxJQUNFLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUztnQkFDdkIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksU0FBUztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVM7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUNoQztnQkFDQSxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO29CQUNwQixLQUFLLFVBQVU7d0JBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQ2hELHFCQUFxQixDQUN0QixDQUFDO3dCQUNGLE1BQU07b0JBQ1IsS0FBSyxNQUFNO3dCQUNULE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNqRSxNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDM0QsTUFBTTtvQkFDUixLQUFLLE9BQU87d0JBQ1YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzlELE1BQU07b0JBQ1IsS0FBSyxNQUFNO3dCQUNULE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1RCxNQUFNO2lCQUNUO2FBQ0Y7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQTNHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG1rREFnRFQ7aUJBQ0Y7Ozs7Z0JBdkRRLGdCQUFnQjs7SUFnSHpCLDBCQUFDO0NBQUEsQUE1R0QsQ0FvRHlDLFNBQVMsR0F3RGpEO1NBeERZLG1CQUFtQjs7O0lBQzlCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSBcIm1vbWVudFwiO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1kYXRldGltZVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRPcGVyYXRpb25hbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNoZWNrYm94XCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWVsZC5jaGVja2VkXCI+PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRDb250cm9sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+e3sgdG8ubGFiZWwgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZEJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRWRpdFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdlZGl0JylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tRWRpdDAzXCI+PC9pPue8lui+kVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiXHJcbiAgICAgID48bmctY29udGFpbmVyICpuZ0lmPVwiZWRpdG9yID09PSB0cnVlXCI+IFxyXG4gICAgICAgICAgPG56LWRhdGUtcGlja2VyIFxyXG4gICAgICAgICAgICBuelNob3dUaW1lXHJcbiAgICAgICAgICAgIFtuekZvcm1hdF09XCJmb3JtYXRcIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgICA+PC9uei1kYXRlLXBpY2tlcj5cclxuIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgZ2V0VGV4dCgpIH19PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZERhdGVUaW1lIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ2V0IGZvcm1hdCgpe1xyXG4gICAgbGV0IHJlc3VsdD1cInl5eXktTU0tZGQgSEg6bW06c3NcIjsgXHJcbiAgICBpZih0aGlzLnRvW1wiZm9ybWF0XCJdIT11bmRlZmluZWQgJiYgdGhpcy50b1tcImZvcm1hdFwiXSE9bnVsbCAmJiB0aGlzLnRvW1wiZm9ybWF0XCJdIT1cIlwiKXtcclxuICAgICAgcmVzdWx0ID0gdGhpcy50b1tcImZvcm1hdFwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGdldFRleHQoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnRvLnR5cGUgIT0gdW5kZWZpbmVkICYmIHRoaXMudG8udHlwZSAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLm1vZGVsICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHRoaXMubW9kZWwgIT0gbnVsbCAmJlxyXG4gICAgICAgIHRoaXMuZmllbGQgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgdGhpcy5maWVsZCAhPSBudWxsICYmXHJcbiAgICAgICAgdGhpcy5maWVsZC5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgdGhpcy5maWVsZC5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICAgIHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldICE9IG51bGwgJiZcclxuICAgICAgICB0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSAhPSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50by50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbW9tZW50KHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldKS5mb3JtYXQoXHJcbiAgICAgICAgICAgICAgXCJ5eXl5LU1NLUREIEhIOm1tOnNzXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBtb21lbnQodGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV0pLmZvcm1hdChcIllZWVktTU0tRERcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInllYXJcIjpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbW9tZW50KHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldKS5mb3JtYXQoXCJZWVlZXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJtb250aFwiOlxyXG4gICAgICAgICAgICByZXN1bHQgPSBtb21lbnQodGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV0pLmZvcm1hdChcIllZWVktTU1cIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbW9tZW50KHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldKS5mb3JtYXQoXCJISDptbVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=