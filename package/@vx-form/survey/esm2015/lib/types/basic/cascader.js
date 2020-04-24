/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { NzModalService } from "ng-zorro-antd/modal";
import { VXDialogService } from "../../service/dialog.service";
import { VXSurveyEditCascader } from "../../components/edit-cascader/index.component";
export class VXSurveyCascader extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} modal
     * @param {?} vxDialogService
     */
    constructor(dyService, modal, vxDialogService) {
        super();
        this.modal = modal;
        this.vxDialogService = vxDialogService;
        this.guid = Guid.create()["value"];
        this.values = null;
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        /** @type {?} */
        let para = {
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
        (instance, modal) => {
            /** @type {?} */
            let optionlist = instance.cascaderData;
            this.to.options = optionlist;
            modal.destroy();
        }));
    }
}
VXSurveyCascader.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-cascader",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>   
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap select_cascader">
            <nz-cascader [nzOptions]="to.options" [nzShowSearch]="true" [nzDisabled]="true">
            </nz-cascader>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addOption()">编辑选项</span>  
        </div> 
    </ng-container>


    <ng-container *ngIf="formStatus === 0">
      <nz-cascader nzChangeOnSelect [nzOptions]="to.options" nzPlaceHolder="请选择"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-cascader>
       
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyCascader.ctorParameters = () => [
    { type: VXFormAntService },
    { type: NzModalService },
    { type: VXDialogService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvY2FzY2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQWdDdEYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7Ozs7OztJQUk3QyxZQUNFLFNBQTJCLEVBQ25CLEtBQXFCLEVBQ3RCLGVBQWdDO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBRkEsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTHpDLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsV0FBTSxHQUFvQixJQUFJLENBQUM7UUFNN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFJRCxTQUFTOztZQUNILElBQUksR0FBRztZQUNULFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztTQUN4QjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQ3BDO1lBQ0UsT0FBTyxFQUFFLE1BQU07WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxvQkFBb0I7U0FDaEMsRUFDRCxJQUFJOzs7OztRQUNKLENBQUMsUUFBYSxFQUFFLEtBQVUsRUFBRSxFQUFFOztnQkFDeEIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxZQUFZO1lBQ3RDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUU3QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUNGLENBQUM7SUFFSixDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2FBQ0Y7Ozs7WUFwQ1EsZ0JBQWdCO1lBRWhCLGNBQWM7WUFDZCxlQUFlOzs7O0lBbUN0QixtQ0FBYTs7SUFDYixnQ0FBbUM7O0lBQ25DLGtDQUErQjs7Ozs7SUFHN0IsaUNBQTZCOztJQUM3QiwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL21vZGFsXCI7XHJcbmltcG9ydCB7IFZYRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RpYWxvZy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBWWFN1cnZleUVkaXRDYXNjYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VkaXQtY2FzY2FkZXIvaW5kZXguY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LWNhc2NhZGVyXCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIHNlbGVjdF9jYXNjYWRlclwiPlxyXG4gICAgICAgICAgICA8bnotY2FzY2FkZXIgW256T3B0aW9uc109XCJ0by5vcHRpb25zXCIgW256U2hvd1NlYXJjaF09XCJ0cnVlXCIgW256RGlzYWJsZWRdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8L256LWNhc2NhZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPue8lui+kemAiemhuTwvc3Bhbj4gIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotY2FzY2FkZXIgbnpDaGFuZ2VPblNlbGVjdCBbbnpPcHRpb25zXT1cInRvLm9wdGlvbnNcIiBuelBsYWNlSG9sZGVyPVwi6K+36YCJ5oupXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCI+XHJcbiAgICAgIDwvbnotY2FzY2FkZXI+XHJcbiAgICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5Q2FzY2FkZXIgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgdmFsdWVzOiBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgdnhEaWFsb2dTZXJ2aWNlOiBWWERpYWxvZ1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuIFxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCkgeyBcclxuICAgIGxldCBwYXJhID0ge1xyXG4gICAgICBmaWVsZENvbmZpZzogdGhpcy5maWVsZFxyXG4gICAgfTsgXHJcbiAgICB0aGlzLnZ4RGlhbG9nU2VydmljZS5DcmVhdGVNb2RlbERpYWxvZyhcclxuICAgICAge1xyXG4gICAgICAgIG56VGl0bGU6IFwi6YCJ6aG557yW6L6RXCIsXHJcbiAgICAgICAgc2l6ZTogXCJsYXJnZVwiLFxyXG4gICAgICAgIG56Q29udGVudDogVlhTdXJ2ZXlFZGl0Q2FzY2FkZXJcclxuICAgICAgfSxcclxuICAgICAgcGFyYSxcclxuICAgICAgKGluc3RhbmNlOiBhbnksIG1vZGFsOiBhbnkpID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9ubGlzdCA9IGluc3RhbmNlLmNhc2NhZGVyRGF0YTtcclxuICAgICAgICB0aGlzLnRvLm9wdGlvbnMgPSBvcHRpb25saXN0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgfSAgXHJcbn1cclxuIl19