/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldCheckbox extends FieldType {
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
VXFormFieldCheckbox.decorators = [
    { type: Component, args: [{
                selector: "vxfield-checkbox",
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
            <label nz-checkbox nzDisabled="true"></label>
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
        <label
          nz-checkbox
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        ></label>
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
VXFormFieldCheckbox.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldCheckbox.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQW9EcEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7Ozs7SUFHaEQsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7YUFDRjs7OztZQW5EUSxnQkFBZ0I7Ozs7SUFxRHZCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZpZWxkLWNoZWNrYm94XCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggbnpEaXNhYmxlZD1cInRydWVcIj48L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUVkaXQwM1wiPjwvaT7nvJbovpFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgbnotY2hlY2tib3hcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgID48L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgdGV4dCB9fTwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==