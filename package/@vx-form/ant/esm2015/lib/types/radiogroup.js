/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldRadioGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
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
VXFormFieldRadioGroup.decorators = [
    { type: Component, args: [{
                selector: "vxfield-radiogroup",
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
            <nz-radio-group
              [nzName]="'radiogroup-' + guid"
              [formControl]="formControl"
              [vxFormAttributes]="field"
              [class.is-invalid]="showError"
            >
              <ng-container *ngFor="let item of to.options">
                <label nz-radio [nzValue]="item.value" nzDisabled="true">{{
                  item.label
                }}</label>
              </ng-container>
            </nz-radio-group>
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
        <nz-radio-group
          [nzName]="'radiogroup-' + guid"
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        >
          <ng-container *ngFor="let item of to.options">
            <label nz-radio [nzValue]="item.value">{{ item.label }}</label>
          </ng-container>
        </nz-radio-group>
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

      <div class="fieldtext" *ngIf="editor === false">{{ textSingle }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldRadioGroup.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldRadioGroup.prototype.service;
    /** @type {?} */
    VXFormFieldRadioGroup.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9yYWRpb2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBa0VwRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsU0FBUzs7OztJQUdsRCxZQUFZLFNBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRlYsU0FBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkRUO2FBQ0Y7Ozs7WUFqRVEsZ0JBQWdCOzs7O0lBbUV2Qix3Q0FBYTs7SUFDYixxQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1yYWRpb2dyb3VwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgICAgICAgICBbbnpOYW1lXT1cIidyYWRpb2dyb3VwLScgKyBndWlkXCJcclxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiIG56RGlzYWJsZWQ9XCJ0cnVlXCI+e3tcclxuICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUVkaXQwM1wiPjwvaT7nvJbovpFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPlxyXG4gICAgICAgIDxuei1yYWRpby1ncm91cFxyXG4gICAgICAgICAgW256TmFtZV09XCIncmFkaW9ncm91cC0nICsgZ3VpZFwiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIFtuelZhbHVlXT1cIml0ZW0udmFsdWVcIj57eyBpdGVtLmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1iYW5nemh1XCJcclxuICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRpcHNcIlxyXG4gICAgICAgICAgICBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICBuei10b29sdGlwXHJcbiAgICAgICAgICAgICpuZ0lmPVwidGlwcyAhPSAnJ1wiXHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHRleHRcIiAqbmdJZj1cImVkaXRvciA9PT0gZmFsc2VcIj57eyB0ZXh0U2luZ2xlIH19PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZFJhZGlvR3JvdXAgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=