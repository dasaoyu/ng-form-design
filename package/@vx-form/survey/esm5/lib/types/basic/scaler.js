/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyScaler = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyScaler, _super);
    function VXSurveyScaler(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.service = dyService;
        return _this;
    }
    Object.defineProperty(VXSurveyScaler.prototype, "scalerData", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = [];
            if (this.to != undefined && this.to != null && this.to.beginNumber != undefined && this.to.beginNumber != null && this.to.max != undefined && this.to.max != null) {
                /** @type {?} */
                var begin = this.to.beginNumber;
                for (var i = 0; i < this.to.max; i++) {
                    result.push({
                        value: begin,
                        label: begin
                    });
                    begin = begin + 1;
                }
            }
            console.log(result);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    VXSurveyScaler.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-scaler",
                    template: "\n    \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyScaler.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyScaler;
}(FieldType));
export { VXSurveyScaler };
if (false) {
    /** @type {?} */
    VXSurveyScaler.prototype.service;
    /** @type {?} */
    VXSurveyScaler.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL3NjYWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQ7SUFNb0MsMENBQVM7SUFHM0Msd0JBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQUVELHNCQUFJLHNDQUFVOzs7O1FBQWQ7O2dCQUNNLE1BQU0sR0FBTyxFQUFFO1lBQ25CLElBQUcsSUFBSSxDQUFDLEVBQUUsSUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFFLElBQUksSUFBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBRyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUUsSUFBSSxFQUFFOztvQkFFbkosS0FBSyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztnQkFDN0IsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLEtBQUssRUFBQyxLQUFLO3dCQUNYLEtBQUssRUFBQyxLQUFLO3FCQUNaLENBQUMsQ0FBQztvQkFDSCxLQUFLLEdBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztpQkFDZjthQUNGO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDOzs7T0FBQTs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsWUFFVDtpQkFDRjs7OztnQkFSUSxnQkFBZ0I7O0lBa0N6QixxQkFBQztDQUFBLEFBL0JELENBTW9DLFNBQVMsR0F5QjVDO1NBekJZLGNBQWM7OztJQUN6QixpQ0FBYTs7SUFDYiw4QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNjYWxlclwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICBcclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNjYWxlciBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBnZXQgc2NhbGVyRGF0YSgpe1xyXG4gICAgbGV0IHJlc3VsdDphbnlbXT1bXTtcclxuICAgIGlmKHRoaXMudG8hPXVuZGVmaW5lZCAmJiB0aGlzLnRvIT1udWxsICYmIHRoaXMudG8uYmVnaW5OdW1iZXIgIT11bmRlZmluZWQgJiYgdGhpcy50by5iZWdpbk51bWJlciE9bnVsbCAgJiYgdGhpcy50by5tYXggIT11bmRlZmluZWQgJiYgdGhpcy50by5tYXghPW51bGwgKXtcclxuICAgICBcclxuICAgICAgbGV0IGJlZ2luPXRoaXMudG8uYmVnaW5OdW1iZXI7XHJcbiAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy50by5tYXg7aSsrKXtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTpiZWdpbixcclxuICAgICAgICAgIGxhYmVsOmJlZ2luXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmVnaW49YmVnaW4rMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiBcclxufVxyXG5cclxuLy8gPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbi8vICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICAgXHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX3NjYWxlclwiPlxyXG4vLyAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvLnR5cGU9PSdudW1iZXInXCI+XHJcbi8vICAgICAgICAgICAgIDxuei1yYWRpby1ncm91cD4gXHJcbi8vICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56VmFsdWU9XCJBXCI+QTwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56VmFsdWU9XCJCXCI+QjwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56VmFsdWU9XCJDXCI+QzwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56VmFsdWU9XCJEXCI+RDwvbGFiZWw+ICBcclxuLy8gICAgICAgICAgICAgPC9uei1yYWRpby1ncm91cD5cclxuLy8gICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj4gXHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuLy8gICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+IFxyXG4vLyAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb25zKClcIj7mibnph4/mt7vliqDpgInpobk8L3NwYW4+XHJcbi8vICAgICAgIDwvZGl2PiBcclxuLy8gICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuLy8gICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbi8vICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuLy8gICAgICAgICA8bnotcmFkaW8tZ3JvdXBcclxuLy8gICAgICAgICAgIFtuek5hbWVdPVwiJ3JhZGlvZ3JvdXAtJyArIGd1aWRcIlxyXG4vLyAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuLy8gICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuLy8gICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbi8vICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCI+e3sgaXRlbS5sYWJlbCB9fTwvbGFiZWw+XHJcbi8vICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuLy8gICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbi8vICAgICAgICAgICA8aVxyXG4vLyAgICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbi8vICAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuLy8gICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuLy8gICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4vLyAgICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4vLyAgICAgICAgICAgPjwvaT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgdGV4dFNpbmdsZSB9fTwvZGl2PlxyXG4vLyAgICAgPC9uZy1jb250YWluZXI+Il19