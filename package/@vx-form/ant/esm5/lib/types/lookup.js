/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import * as _ from "lodash";
import { VXFormAntService } from "../tools/service";
import { NzModalService } from "ng-zorro-antd/modal";
import { VXDialogService } from "../service/dialog.service";
import { VXFormTree } from "../components/tree/index.component";
import { VXFormEmployee } from "../components/employee/index.component";
import { VXFormOrg } from "../components/org/index.component";
import { VXFormPostion } from "../components/postion/index.component";
import { VXFormArea } from "../components/area/index.component";
var VXFormFieldLookUp = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldLookUp, _super);
    function VXFormFieldLookUp(dyService, modal, vxDialogService) {
        var _this = _super.call(this) || this;
        _this.modal = modal;
        _this.vxDialogService = vxDialogService;
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldLookUp.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    /**
     * @return {?}
     */
    VXFormFieldLookUp.prototype.lookup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var template;
        /** @type {?} */
        var type = _.get(this.field, "templateOptions.type");
        /** @type {?} */
        var para = {
            fieldConfig: this.field,
            tag: false
        };
        switch (type) {
            case "tree":
                template = VXFormTree;
                para.tag = true;
                break;
                break;
            case "employee":
                template = VXFormEmployee;
                break;
            case "organizational":
                template = VXFormOrg;
                para.tag = true;
                break;
            case "position":
                template = VXFormPostion;
                break;
            case "area":
                template = VXFormArea;
                break;
            default:
                break;
        }
        if (template) {
            this.vxDialogService.CreateModelDialog({
                nzTitle: "选择 - " + this.to["label"],
                size: "large",
                nzContent: template
            }, para, (/**
             * @param {?} instance
             * @param {?} modal
             * @return {?}
             */
            function (instance, modal) {
                /** @type {?} */
                var res = instance.selectedNode;
                if (_this.model != undefined &&
                    _this.model != null &&
                    _this.key != undefined &&
                    _this.key != null) {
                    if (res != null && res.length > 0) {
                        _this.model[_this.key] = res;
                        _this.formControl.markAsTouched();
                    }
                    else {
                        _this.model[_this.key] = [];
                        _this.formControl.markAsTouched();
                    }
                }
                else {
                    _this.model[_this.key] = res;
                    _this.formControl.markAsTouched();
                }
                modal.destroy();
            }));
        }
    };
    /**
     * @return {?}
     */
    VXFormFieldLookUp.prototype.removeValue = /**
     * @return {?}
     */
    function () {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model[this.key] != undefined &&
            this.model[this.key] != null) {
            this.model[this.key] = [];
            this.formControl.markAsTouched();
        }
    };
    VXFormFieldLookUp.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-lookup",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <input nz-input disabled />\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-input-group [nzSuffix]=\"suffixTemplate\">\n          <input\n            nz-input\n            [class.is-invalid]=\"showError\"\n            [placeholder]=\"placeHolder\"\n            [value]=\"textLookUp\"\n            readonly=\"true\"\n          />\n        </nz-input-group>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n\n        <nz-input-group [nzSuffix]=\"suffixTemplate\" style=\"display:none;\">\n          <input\n            nz-input\n            [formControl]=\"formControl\"\n            [vxFormAttributes]=\"field\"\n            [class.is-invalid]=\"showError\"\n            readonly=\"true\"\n        /></nz-input-group>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textLookUp }}</div>\n    </ng-container>\n    <ng-template #suffixTemplate>\n      <i (click)=\"lookup()\" class=\"icon-tianjin\"></i>\n      <!--<i\n        nz-icon\n        nzType=\"close\"\n        nzTheme=\"outline\"\n        (click)=\"removeValue()\"\n        *ngIf=\"textLookUp != null && textLookUp != ''\"\n      ></i>-->\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldLookUp.ctorParameters = function () { return [
        { type: VXFormAntService },
        { type: NzModalService },
        { type: VXDialogService }
    ]; };
    return VXFormFieldLookUp;
}(FieldType));
export { VXFormFieldLookUp };
if (false) {
    /** @type {?} */
    VXFormFieldLookUp.prototype.service;
    /**
     * @type {?}
     * @private
     */
    VXFormFieldLookUp.prototype.modal;
    /** @type {?} */
    VXFormFieldLookUp.prototype.vxDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2xvb2t1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFaEU7SUF3RXVDLDZDQUFTO0lBRzlDLDJCQUNFLFNBQTJCLEVBQ25CLEtBQXFCLEVBQ3RCLGVBQWdDO1FBSHpDLFlBS0UsaUJBQU8sU0FFUjtRQUxTLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3RCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUd2QyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELGtDQUFNOzs7SUFBTjtRQUFBLGlCQStEQzs7WUE5REssUUFBYTs7WUFDYixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHNCQUFzQixDQUFDOztZQUNoRCxJQUFJLEdBQUc7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdkIsR0FBRyxFQUFFLEtBQUs7U0FDWDtRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxNQUFNO2dCQUNULFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNO2dCQUNOLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDMUIsTUFBTTtZQUNSLEtBQUssZ0JBQWdCO2dCQUNuQixRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixRQUFRLEdBQUcsYUFBYSxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ3RCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQ3BDO2dCQUNFLE9BQU8sRUFBRSxPQUFPLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxRQUFRO2FBQ3BCLEVBQ0QsSUFBSTs7Ozs7WUFDSixVQUFDLFFBQWEsRUFBRSxLQUFVOztvQkFDcEIsR0FBRyxHQUFRLFFBQVEsQ0FBQyxZQUFZO2dCQUNwQyxJQUNFLEtBQUksQ0FBQyxLQUFLLElBQUksU0FBUztvQkFDdkIsS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFJO29CQUNsQixLQUFJLENBQUMsR0FBRyxJQUFJLFNBQVM7b0JBQ3JCLEtBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUNoQjtvQkFDQSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUU7d0JBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFFM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUUxQixLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUNsQztpQkFDRjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBRTNCLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ2xDO2dCQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQ0UsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVM7WUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUM1QjtZQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBdEtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsMnRFQW9FVDtpQkFDRjs7OztnQkFsRlEsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLGVBQWU7O0lBZ0x4Qix3QkFBQztDQUFBLEFBdktELENBd0V1QyxTQUFTLEdBK0YvQztTQS9GWSxpQkFBaUI7OztJQUM1QixvQ0FBYTs7Ozs7SUFJWCxrQ0FBNkI7O0lBQzdCLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tIFwibmctem9ycm8tYW50ZC9tb2RhbFwiO1xyXG5pbXBvcnQgeyBWWERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9kaWFsb2cuc2VydmljZVwiO1xyXG5cclxuXHJcbmltcG9ydCB7IFZYRm9ybVRyZWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90cmVlL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1FbXBsb3llZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2VtcGxveWVlL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1PcmcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9vcmcvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybVBvc3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0aW9uL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BcmVhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJlYS9pbmRleC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtbG9va3VwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5FZGl0XCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2VkaXQnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2RlbGV0ZScpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuICAgICAgICA8bnotaW5wdXQtZ3JvdXAgW256U3VmZml4XT1cInN1ZmZpeFRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgbnotaW5wdXRcclxuICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgICAgICAgW3ZhbHVlXT1cInRleHRMb29rVXBcIlxyXG4gICAgICAgICAgICByZWFkb25seT1cInRydWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPG56LWlucHV0LWdyb3VwIFtuelN1ZmZpeF09XCJzdWZmaXhUZW1wbGF0ZVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG56LWlucHV0XHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgICAgICAgcmVhZG9ubHk9XCJ0cnVlXCJcclxuICAgICAgICAvPjwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPnt7IHRleHRMb29rVXAgfX08L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNzdWZmaXhUZW1wbGF0ZT5cclxuICAgICAgPGkgKGNsaWNrKT1cImxvb2t1cCgpXCIgY2xhc3M9XCJpY29uLXRpYW5qaW5cIj48L2k+XHJcbiAgICAgIDwhLS08aVxyXG4gICAgICAgIG56LWljb25cclxuICAgICAgICBuelR5cGU9XCJjbG9zZVwiXHJcbiAgICAgICAgbnpUaGVtZT1cIm91dGxpbmVcIlxyXG4gICAgICAgIChjbGljayk9XCJyZW1vdmVWYWx1ZSgpXCJcclxuICAgICAgICAqbmdJZj1cInRleHRMb29rVXAgIT0gbnVsbCAmJiB0ZXh0TG9va1VwICE9ICcnXCJcclxuICAgICAgPjwvaT4tLT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRMb29rVXAgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsOiBOek1vZGFsU2VydmljZSxcclxuICAgIHB1YmxpYyB2eERpYWxvZ1NlcnZpY2U6IFZYRGlhbG9nU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGxvb2t1cCgpIHtcclxuICAgIGxldCB0ZW1wbGF0ZTogYW55O1xyXG4gICAgbGV0IHR5cGUgPSBfLmdldCh0aGlzLmZpZWxkLCBcInRlbXBsYXRlT3B0aW9ucy50eXBlXCIpO1xyXG4gICAgbGV0IHBhcmEgPSB7XHJcbiAgICAgIGZpZWxkQ29uZmlnOiB0aGlzLmZpZWxkLFxyXG4gICAgICB0YWc6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJ0cmVlXCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBWWEZvcm1UcmVlO1xyXG4gICAgICAgIHBhcmEudGFnID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVtcGxveWVlXCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBWWEZvcm1FbXBsb3llZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm9yZ2FuaXphdGlvbmFsXCI6XHJcbiAgICAgICAgdGVtcGxhdGUgPSBWWEZvcm1Pcmc7XHJcbiAgICAgICAgcGFyYS50YWcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicG9zaXRpb25cIjpcclxuICAgICAgICB0ZW1wbGF0ZSA9IFZYRm9ybVBvc3Rpb247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJhcmVhXCI6IFxyXG4gICAgICAgIHRlbXBsYXRlID0gVlhGb3JtQXJlYTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnZ4RGlhbG9nU2VydmljZS5DcmVhdGVNb2RlbERpYWxvZyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuelRpdGxlOiBcIumAieaLqSAtIFwiK3RoaXMudG9bXCJsYWJlbFwiXSxcclxuICAgICAgICAgIHNpemU6IFwibGFyZ2VcIixcclxuICAgICAgICAgIG56Q29udGVudDogdGVtcGxhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmEsXHJcbiAgICAgICAgKGluc3RhbmNlOiBhbnksIG1vZGFsOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCByZXM6IGFueSA9IGluc3RhbmNlLnNlbGVjdGVkTm9kZTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIHRoaXMua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICB0aGlzLmtleSAhPSBudWxsXHJcbiAgICAgICAgICApIHsgXHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCAmJiByZXMubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICB0aGlzLm1vZGVsW3RoaXMua2V5XSA9IHJlcztcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb2RlbFt0aGlzLmtleV0gPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxbdGhpcy5rZXldID0gcmVzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtb2RhbC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVmFsdWUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMubW9kZWwgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMubW9kZWwgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmtleSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLm1vZGVsW3RoaXMua2V5XSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5tb2RlbFt0aGlzLmtleV0gIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubW9kZWxbdGhpcy5rZXldID0gW107XHJcblxyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19