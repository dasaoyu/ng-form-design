/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldSelect extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.defaultValue = "";
        this.defaultValues = [];
        this.selecttype = "default";
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.to.selecttype === "multiple") {
            this.selecttype = "multiple";
            if (this.field.defaultValue && this.field.defaultValue != null) {
                this.defaultValues = this.field.defaultValue.split(",");
            }
        }
        else {
            this.defaultValue = this.field.defaultValue;
        }
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
    getSelectText() {
        /** @type {?} */
        let result = "";
        if (this.to && this.to.selecttype) {
            if (this.to.selecttype === "single") {
                result = this.textSingle;
            }
            else if (this.to.selecttype === "multiple") {
                result = this.textMultiple;
            }
        }
        return result;
    }
}
VXFormFieldSelect.decorators = [
    { type: Component, args: [{
                selector: "vxfield-select",
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
        <nz-select
          nzShowSearch
          nzAllowClear
          [nzMode]="to.selecttype === 'multiple' ? 'multiple' : 'default'"
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
          [nzPlaceHolder]="placeHolder"
        >
          <ng-container *ngFor="let item of to.options">
            <nz-option
              [nzLabel]="item.label"
              [nzValue]="item.value"
            ></nz-option>
          </ng-container>
        </nz-select>
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

      <div class="fieldtext" *ngIf="editor === false">
        {{ getSelectText() }}
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldSelect.ctorParameters = () => [
    { type: VXFormAntService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL3NlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWlFcEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQVM7Ozs7SUFLOUMsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUpWLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELGFBQWE7O1lBQ1AsTUFBTSxHQUFXLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMxQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtnQkFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMERUO2FBQ0Y7Ozs7WUFoRVEsZ0JBQWdCOzs7O0lBa0V2QixvQ0FBYTs7SUFDYix5Q0FBMEI7O0lBQzFCLDBDQUE2Qjs7SUFDN0IsdUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvZGVTYW5kYm94T3V0bGluZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zL3B1YmxpY19hcGlcIjtcclxuaW1wb3J0IHsgZWxlbWVudEF0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtc2VsZWN0XCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5FZGl0XCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2VkaXQnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2RlbGV0ZScpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuICAgICAgICA8bnotc2VsZWN0XHJcbiAgICAgICAgICBuelNob3dTZWFyY2hcclxuICAgICAgICAgIG56QWxsb3dDbGVhclxyXG4gICAgICAgICAgW256TW9kZV09XCJ0by5zZWxlY3R0eXBlID09PSAnbXVsdGlwbGUnID8gJ211bHRpcGxlJyA6ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPG56LW9wdGlvblxyXG4gICAgICAgICAgICAgIFtuekxhYmVsXT1cIml0ZW0ubGFiZWxcIlxyXG4gICAgICAgICAgICAgIFtuelZhbHVlXT1cIml0ZW0udmFsdWVcIlxyXG4gICAgICAgICAgICA+PC9uei1vcHRpb24+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L256LXNlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwidGlwc1wiXHJcbiAgICAgICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAgICAgKm5nSWY9XCJ0aXBzICE9ICcnXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPlxyXG4gICAgICAgIHt7IGdldFNlbGVjdFRleHQoKSB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGRlZmF1bHRWYWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICBkZWZhdWx0VmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHNlbGVjdHR5cGUgPSBcImRlZmF1bHRcIjtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIGlmICh0aGlzLnRvLnNlbGVjdHR5cGUgPT09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICB0aGlzLnNlbGVjdHR5cGUgPSBcIm11bHRpcGxlXCI7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmRlZmF1bHRWYWx1ZSAmJiB0aGlzLmZpZWxkLmRlZmF1bHRWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWVzID0gdGhpcy5maWVsZC5kZWZhdWx0VmFsdWUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuZmllbGQuZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0VGV4dCgpIHtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy50byAmJiB0aGlzLnRvLnNlbGVjdHR5cGUpIHtcclxuICAgICAgaWYgKHRoaXMudG8uc2VsZWN0dHlwZSA9PT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMudGV4dFNpbmdsZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRvLnNlbGVjdHR5cGUgPT09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMudGV4dE11bHRpcGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=