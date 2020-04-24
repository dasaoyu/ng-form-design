/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class VXFormFieldLookUp extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} modal
     * @param {?} vxDialogService
     */
    constructor(dyService, modal, vxDialogService) {
        super();
        this.modal = modal;
        this.vxDialogService = vxDialogService;
        this.service = dyService;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    /**
     * @return {?}
     */
    lookup() {
        /** @type {?} */
        let template;
        /** @type {?} */
        let type = _.get(this.field, "templateOptions.type");
        /** @type {?} */
        let para = {
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
            (instance, modal) => {
                /** @type {?} */
                let res = instance.selectedNode;
                if (this.model != undefined &&
                    this.model != null &&
                    this.key != undefined &&
                    this.key != null) {
                    if (res != null && res.length > 0) {
                        this.model[this.key] = res;
                        this.formControl.markAsTouched();
                    }
                    else {
                        this.model[this.key] = [];
                        this.formControl.markAsTouched();
                    }
                }
                else {
                    this.model[this.key] = res;
                    this.formControl.markAsTouched();
                }
                modal.destroy();
            }));
        }
    }
    /**
     * @return {?}
     */
    removeValue() {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model[this.key] != undefined &&
            this.model[this.key] != null) {
            this.model[this.key] = [];
            this.formControl.markAsTouched();
        }
    }
}
VXFormFieldLookUp.decorators = [
    { type: Component, args: [{
                selector: "vxfield-lookup",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <input nz-input disabled />
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <nz-input-group [nzSuffix]="suffixTemplate">
          <input
            nz-input
            [class.is-invalid]="showError"
            [placeholder]="placeHolder"
            [value]="textLookUp"
            readonly="true"
          />
        </nz-input-group>
        <div class="tips">
          <i
            class="icon-bangzhu"
            [nzTooltipTitle]="tips"
            nzTooltipPlacement="top"
            nz-tooltip
            *ngIf="tips != ''"
          ></i>
        </div>

        <nz-input-group [nzSuffix]="suffixTemplate" style="display:none;">
          <input
            nz-input
            [formControl]="formControl"
            [vxFormAttributes]="field"
            [class.is-invalid]="showError"
            readonly="true"
        /></nz-input-group>
      </ng-container>

      <div class="fieldtext" *ngIf="editor === false">{{ textLookUp }}</div>
    </ng-container>
    <ng-template #suffixTemplate>
      <i (click)="lookup()" class="icon-tianjin"></i>
      <!--<i
        nz-icon
        nzType="close"
        nzTheme="outline"
        (click)="removeValue()"
        *ngIf="textLookUp != null && textLookUp != ''"
      ></i>-->
    </ng-template>
  `
            }] }
];
/** @nocollapse */
VXFormFieldLookUp.ctorParameters = () => [
    { type: VXFormAntService },
    { type: NzModalService },
    { type: VXDialogService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2xvb2t1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQTBFaEUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQVM7Ozs7OztJQUc5QyxZQUNFLFNBQTJCLEVBQ25CLEtBQXFCLEVBQ3RCLGVBQWdDO1FBRXZDLEtBQUssRUFBRSxDQUFDO1FBSEEsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBR3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELE1BQU07O1lBQ0EsUUFBYTs7WUFDYixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHNCQUFzQixDQUFDOztZQUNoRCxJQUFJLEdBQUc7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdkIsR0FBRyxFQUFFLEtBQUs7U0FDWDtRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxNQUFNO2dCQUNULFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNO2dCQUNOLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDMUIsTUFBTTtZQUNSLEtBQUssZ0JBQWdCO2dCQUNuQixRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixRQUFRLEdBQUcsYUFBYSxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ3RCLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQ3BDO2dCQUNFLE9BQU8sRUFBRSxPQUFPLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxRQUFRO2FBQ3BCLEVBQ0QsSUFBSTs7Ozs7WUFDSixDQUFDLFFBQWEsRUFBRSxLQUFVLEVBQUUsRUFBRTs7b0JBQ3hCLEdBQUcsR0FBUSxRQUFRLENBQUMsWUFBWTtnQkFDcEMsSUFDRSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVM7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTO29CQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFDaEI7b0JBQ0EsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO3dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBRTNCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7cUJBQ2xDO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFFMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDbEM7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUUzQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUNsQztnQkFDRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxFQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFDRSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVM7WUFDdkIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUztZQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUk7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQzVCO1lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRTFCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUF0S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRVQ7YUFDRjs7OztZQWxGUSxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGVBQWU7Ozs7SUFrRnRCLG9DQUFhOzs7OztJQUlYLGtDQUE2Qjs7SUFDN0IsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL21vZGFsXCI7XHJcbmltcG9ydCB7IFZYRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL2RpYWxvZy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgVlhGb3JtVHJlZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RyZWUvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybUVtcGxveWVlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZW1wbG95ZWUvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybU9yZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL29yZy9pbmRleC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtUG9zdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3Rpb24vaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybUFyZWEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hcmVhL2luZGV4LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1sb29rdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkT3BlcmF0aW9uYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUVkaXQwM1wiPjwvaT7nvJbovpFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgICAgIDxuei1pbnB1dC1ncm91cCBbbnpTdWZmaXhdPVwic3VmZml4VGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBuei1pbnB1dFxyXG4gICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwidGV4dExvb2tVcFwiXHJcbiAgICAgICAgICAgIHJlYWRvbmx5PVwidHJ1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1iYW5nemh1XCJcclxuICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRpcHNcIlxyXG4gICAgICAgICAgICBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICBuei10b29sdGlwXHJcbiAgICAgICAgICAgICpuZ0lmPVwidGlwcyAhPSAnJ1wiXHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8bnotaW5wdXQtZ3JvdXAgW256U3VmZml4XT1cInN1ZmZpeFRlbXBsYXRlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgbnotaW5wdXRcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgICByZWFkb25seT1cInRydWVcIlxyXG4gICAgICAgIC8+PC9uei1pbnB1dC1ncm91cD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgdGV4dExvb2tVcCB9fTwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3N1ZmZpeFRlbXBsYXRlPlxyXG4gICAgICA8aSAoY2xpY2spPVwibG9va3VwKClcIiBjbGFzcz1cImljb24tdGlhbmppblwiPjwvaT5cclxuICAgICAgPCEtLTxpXHJcbiAgICAgICAgbnotaWNvblxyXG4gICAgICAgIG56VHlwZT1cImNsb3NlXCJcclxuICAgICAgICBuelRoZW1lPVwib3V0bGluZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cInJlbW92ZVZhbHVlKClcIlxyXG4gICAgICAgICpuZ0lmPVwidGV4dExvb2tVcCAhPSBudWxsICYmIHRleHRMb29rVXAgIT0gJydcIlxyXG4gICAgICA+PC9pPi0tPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZExvb2tVcCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE56TW9kYWxTZXJ2aWNlLFxyXG4gICAgcHVibGljIHZ4RGlhbG9nU2VydmljZTogVlhEaWFsb2dTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgbG9va3VwKCkge1xyXG4gICAgbGV0IHRlbXBsYXRlOiBhbnk7XHJcbiAgICBsZXQgdHlwZSA9IF8uZ2V0KHRoaXMuZmllbGQsIFwidGVtcGxhdGVPcHRpb25zLnR5cGVcIik7XHJcbiAgICBsZXQgcGFyYSA9IHtcclxuICAgICAgZmllbGRDb25maWc6IHRoaXMuZmllbGQsXHJcbiAgICAgIHRhZzogZmFsc2VcclxuICAgIH07XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInRyZWVcIjpcclxuICAgICAgICB0ZW1wbGF0ZSA9IFZYRm9ybVRyZWU7XHJcbiAgICAgICAgcGFyYS50YWcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW1wbG95ZWVcIjpcclxuICAgICAgICB0ZW1wbGF0ZSA9IFZYRm9ybUVtcGxveWVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwib3JnYW5pemF0aW9uYWxcIjpcclxuICAgICAgICB0ZW1wbGF0ZSA9IFZYRm9ybU9yZztcclxuICAgICAgICBwYXJhLnRhZyA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwb3NpdGlvblwiOlxyXG4gICAgICAgIHRlbXBsYXRlID0gVlhGb3JtUG9zdGlvbjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImFyZWFcIjogXHJcbiAgICAgICAgdGVtcGxhdGUgPSBWWEZvcm1BcmVhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudnhEaWFsb2dTZXJ2aWNlLkNyZWF0ZU1vZGVsRGlhbG9nKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG56VGl0bGU6IFwi6YCJ5oupIC0gXCIrdGhpcy50b1tcImxhYmVsXCJdLFxyXG4gICAgICAgICAgc2l6ZTogXCJsYXJnZVwiLFxyXG4gICAgICAgICAgbnpDb250ZW50OiB0ZW1wbGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyYSxcclxuICAgICAgICAoaW5zdGFuY2U6IGFueSwgbW9kYWw6IGFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHJlczogYW55ID0gaW5zdGFuY2Uuc2VsZWN0ZWROb2RlO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsICE9IG51bGwgJiZcclxuICAgICAgICAgICAgdGhpcy5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHRoaXMua2V5ICE9IG51bGxcclxuICAgICAgICAgICkgeyBcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSBudWxsICYmIHJlcy5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubW9kZWxbdGhpcy5rZXldID0gcmVzO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLm1vZGVsW3RoaXMua2V5XSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFt0aGlzLmtleV0gPSByZXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVWYWx1ZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmtleSAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMubW9kZWxbdGhpcy5rZXldICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLm1vZGVsW3RoaXMua2V5XSAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5tb2RlbFt0aGlzLmtleV0gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=