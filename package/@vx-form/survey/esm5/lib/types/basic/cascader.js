/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { NzModalService } from "ng-zorro-antd/modal";
import { VXDialogService } from "../../service/dialog.service";
import { VXSurveyEditCascader } from "../../components/edit-cascader/index.component";
var VXSurveyCascader = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyCascader, _super);
    function VXSurveyCascader(dyService, modal, vxDialogService) {
        var _this = _super.call(this) || this;
        _this.modal = modal;
        _this.vxDialogService = vxDialogService;
        _this.guid = Guid.create()["value"];
        _this.values = null;
        _this.service = dyService;
        return _this;
    }
    //添加选项
    //添加选项
    /**
     * @return {?}
     */
    VXSurveyCascader.prototype.addOption = 
    //添加选项
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var para = {
            fieldConfig: this.field
        };
        this.vxDialogService.CreateModelDialog({
            nzTitle: "选项编辑",
            size: "large",
            nzContent: VXSurveyEditCascader
        }, para, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        function (instance, modal) {
            /** @type {?} */
            var optionlist = instance.cascaderData;
            _this.to.options = optionlist;
            modal.destroy();
        }));
    };
    VXSurveyCascader.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-cascader",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"></inline-editor>   \n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap select_cascader\">\n            <nz-cascader [nzOptions]=\"to.options\" [nzShowSearch]=\"true\" [nzDisabled]=\"true\">\n            </nz-cascader>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u7F16\u8F91\u9009\u9879</span>  \n        </div> \n    </ng-container>\n\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-cascader nzChangeOnSelect [nzOptions]=\"to.options\" nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-cascader>\n       \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyCascader.ctorParameters = function () { return [
        { type: VXFormAntService },
        { type: NzModalService },
        { type: VXDialogService }
    ]; };
    return VXSurveyCascader;
}(FieldType));
export { VXSurveyCascader };
if (false) {
    /** @type {?} */
    VXSurveyCascader.prototype.service;
    /** @type {?} */
    VXSurveyCascader.prototype.guid;
    /** @type {?} */
    VXSurveyCascader.prototype.values;
    /**
     * @type {?}
     * @private
     */
    VXSurveyCascader.prototype.modal;
    /** @type {?} */
    VXSurveyCascader.prototype.vxDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvY2FzY2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEY7SUErQnNDLDRDQUFTO0lBSTdDLDBCQUNFLFNBQTJCLEVBQ25CLEtBQXFCLEVBQ3RCLGVBQWdDO1FBSHpDLFlBSUUsaUJBQU8sU0FFUjtRQUpTLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3RCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUx6QyxVQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFlBQU0sR0FBb0IsSUFBSSxDQUFDO1FBTTdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOztJQUMzQixDQUFDO0lBR0QsTUFBTTs7Ozs7SUFDTixvQ0FBUzs7Ozs7SUFBVDtRQUFBLGlCQW1CQzs7WUFsQkssSUFBSSxHQUFHO1lBQ1QsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FDcEM7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLG9CQUFvQjtTQUNoQyxFQUNELElBQUk7Ozs7O1FBQ0osVUFBQyxRQUFhLEVBQUUsS0FBVTs7Z0JBQ3BCLFVBQVUsR0FBRyxRQUFRLENBQUMsWUFBWTtZQUN0QyxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFFN0IsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUosQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsMC9CQTJCVDtpQkFDRjs7OztnQkFwQ1EsZ0JBQWdCO2dCQUVoQixjQUFjO2dCQUNkLGVBQWU7O0lBb0V4Qix1QkFBQztDQUFBLEFBakVELENBK0JzQyxTQUFTLEdBa0M5QztTQWxDWSxnQkFBZ0I7OztJQUMzQixtQ0FBYTs7SUFDYixnQ0FBbUM7O0lBQ25DLGtDQUErQjs7Ozs7SUFHN0IsaUNBQTZCOztJQUM3QiwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL21vZGFsXCI7XHJcbmltcG9ydCB7IFZYRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RpYWxvZy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBWWFN1cnZleUVkaXRDYXNjYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VkaXQtY2FzY2FkZXIvaW5kZXguY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LWNhc2NhZGVyXCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIHNlbGVjdF9jYXNjYWRlclwiPlxyXG4gICAgICAgICAgICA8bnotY2FzY2FkZXIgW256T3B0aW9uc109XCJ0by5vcHRpb25zXCIgW256U2hvd1NlYXJjaF09XCJ0cnVlXCIgW256RGlzYWJsZWRdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8L256LWNhc2NhZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPue8lui+kemAiemhuTwvc3Bhbj4gIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotY2FzY2FkZXIgbnpDaGFuZ2VPblNlbGVjdCBbbnpPcHRpb25zXT1cInRvLm9wdGlvbnNcIiBuelBsYWNlSG9sZGVyPVwi6K+36YCJ5oupXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCI+XHJcbiAgICAgIDwvbnotY2FzY2FkZXI+XHJcbiAgICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5Q2FzY2FkZXIgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgdmFsdWVzOiBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgdnhEaWFsb2dTZXJ2aWNlOiBWWERpYWxvZ1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuIFxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCkgeyBcclxuICAgIGxldCBwYXJhID0ge1xyXG4gICAgICBmaWVsZENvbmZpZzogdGhpcy5maWVsZFxyXG4gICAgfTsgXHJcbiAgICB0aGlzLnZ4RGlhbG9nU2VydmljZS5DcmVhdGVNb2RlbERpYWxvZyhcclxuICAgICAge1xyXG4gICAgICAgIG56VGl0bGU6IFwi6YCJ6aG557yW6L6RXCIsXHJcbiAgICAgICAgc2l6ZTogXCJsYXJnZVwiLFxyXG4gICAgICAgIG56Q29udGVudDogVlhTdXJ2ZXlFZGl0Q2FzY2FkZXJcclxuICAgICAgfSxcclxuICAgICAgcGFyYSxcclxuICAgICAgKGluc3RhbmNlOiBhbnksIG1vZGFsOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9ubGlzdCA9IGluc3RhbmNlLmNhc2NhZGVyRGF0YTtcclxuICAgICAgICB0aGlzLnRvLm9wdGlvbnMgPSBvcHRpb25saXN0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgfSAgXHJcbn1cclxuIl19