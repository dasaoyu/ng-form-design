/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldPassWord extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.service = dyService;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
}
VXFormFieldPassWord.decorators = [
    { type: Component, args: [{
                selector: "vxfield-password",
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
    <input
      nz-input
      [formControl]="formControl"
      [vxFormAttributes]="field"
      [class.is-invalid]="showError"
      [type]="'password'"
    />
    <div class="tips">
      <i
        class="icon-bangzhu"
        [nzTooltipTitle]="tips"
        nzTooltipPlacement="top"
        nz-tooltip
        *ngIf="tips != ''"
      ></i>
    </div>
  </ng-container>

  <div class="fieldtext" *ngIf="editor === false">{{ text }}</div>
</ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldPassWord.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldPassWord.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvcGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXFEcEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7Ozs7SUFHaEQsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUO2FBQ0Y7Ozs7WUFwRFEsZ0JBQWdCOzs7O0lBc0R2QixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1wYXNzd29yZFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmllbGRPcGVyYXRpb25hbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+e3sgdG8ubGFiZWwgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgPGlucHV0IG56LWlucHV0IGRpc2FibGVkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRWRpdFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdlZGl0JylcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIG56LWlucHV0XHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgW3R5cGVdPVwiJ3Bhc3N3b3JkJ1wiXHJcbiAgICAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInRpcHNcIj5cclxuICAgICAgPGlcclxuICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRpcHNcIlxyXG4gICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICpuZ0lmPVwidGlwcyAhPSAnJ1wiXHJcbiAgICAgID48L2k+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPnt7IHRleHQgfX08L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRQYXNzV29yZCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==