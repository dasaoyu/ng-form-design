/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldCheckboxGroup extends FieldType {
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
    /**
     * @param {?} values
     * @return {?}
     */
    onChange(values) {
        /** @type {?} */
        let res = [];
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                if (this.to.options !== undefined && this.to.options !== null) {
                    this.to.options.forEach((/**
                     * @param {?} option
                     * @return {?}
                     */
                    (option) => {
                        if (option["value"] === value) {
                            res.push(value);
                        }
                    }));
                }
            }));
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getCheckStatus(option) {
        this.formControl.value;
    }
    /**
     * @param {?} values
     * @param {?} option
     * @return {?}
     */
    getControlChecked(values, option) {
        /** @type {?} */
        let result = false;
        if (option && values) {
            result = values.some((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                return value == option.value;
            }));
        }
        return result;
    }
}
VXFormFieldCheckboxGroup.decorators = [
    { type: Component, args: [{
                selector: "vxfield-checkboxgroup",
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
            <nz-checkbox-wrapper
              style="width: 100%;"
              (nzOnChange)="onChange($event)"
              [class.is-invalid]="showError"
            >
              <ng-container *ngFor="let option of to.options; let i = index">
                <label
                  nz-checkbox
                  [nzValue]="option.value"
                  [ngModel]="getControlChecked(formControl.value, option)"
                  [vxFormAttributes]="field"
                  disabled
                  >{{ option.label }}</label
                >
              </ng-container>
            </nz-checkbox-wrapper>
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
        <nz-checkbox-wrapper
          style="width: 100%;"
          (nzOnChange)="onChange($event)"
          [class.is-invalid]="showError"
        >
          <ng-container *ngFor="let option of to.options; let i = index">
            <label
              nz-checkbox
              [nzValue]="option.value"
              [ngModel]="getControlChecked(formControl.value, option)"
              [vxFormAttributes]="field"
              >{{ option.label }}</label
            >
          </ng-container>
        </nz-checkbox-wrapper>
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
      <div class="fieldtext" *ngIf="editor === false">{{ textMultiple }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldCheckboxGroup.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldCheckboxGroup.prototype.service;
    /** @type {?} */
    VXFormFieldCheckboxGroup.prototype.guid;
}
/**
 * @record
 */
export function ICheckValues() { }
if (false) {
    /** @type {?} */
    ICheckValues.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9jaGVja2JveGdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBMkVwRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsU0FBUzs7OztJQUdyRCxZQUFZLFNBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRlYsU0FBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWdCOztZQUNuQixHQUFHLEdBQVEsRUFBRTtRQUNqQixJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5RCxNQUFNLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7b0JBQzdELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7b0JBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTt3QkFDdEMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFOzRCQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNqQjtvQkFDSCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQVc7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRU0saUJBQWlCLENBQUMsTUFBVyxFQUFFLE1BQVc7O1lBQzNDLE1BQU0sR0FBRyxLQUFLO1FBQ2xCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQy9CLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUFsSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUVUO2FBQ0Y7Ozs7WUExRVEsZ0JBQWdCOzs7O0lBNEV2QiwyQ0FBYTs7SUFDYix3Q0FBbUM7Ozs7O0FBMENyQyxrQ0FFQzs7O0lBREMsNkJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtY2hlY2tib3hncm91cFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRPcGVyYXRpb25hbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNoZWNrYm94XCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWVsZC5jaGVja2VkXCI+PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRDb250cm9sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+e3sgdG8ubGFiZWwgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXJcclxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgICAgICAgKG56T25DaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZ2V0Q29udHJvbENoZWNrZWQoZm9ybUNvbnRyb2wudmFsdWUsIG9wdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L2xhYmVsXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbnotY2hlY2tib3gtd3JhcHBlcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5FZGl0XCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2VkaXQnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2RlbGV0ZScpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuICAgICAgICA8bnotY2hlY2tib3gtd3JhcHBlclxyXG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIlxyXG4gICAgICAgICAgKG56T25DaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIG56LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgICAgICBbbmdNb2RlbF09XCJnZXRDb250cm9sQ2hlY2tlZChmb3JtQ29udHJvbC52YWx1ZSwgb3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L2xhYmVsXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbnotY2hlY2tib3gtd3JhcHBlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwidGlwc1wiXHJcbiAgICAgICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAgICAgKm5nSWY9XCJ0aXBzICE9ICcnXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgdGV4dE11bHRpcGxlIH19PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZENoZWNrYm94R3JvdXAgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UodmFsdWVzOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IHJlczogYW55ID0gW107XHJcbiAgICBpZiAodmFsdWVzICE9IHVuZGVmaW5lZCAmJiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudG8ub3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG8ub3B0aW9ucyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy50by5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25bXCJ2YWx1ZVwiXSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWVzKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hlY2tTdGF0dXMob3B0aW9uOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29udHJvbENoZWNrZWQodmFsdWVzOiBhbnksIG9wdGlvbjogYW55KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBpZiAob3B0aW9uICYmIHZhbHVlcykge1xyXG4gICAgICByZXN1bHQgPSB2YWx1ZXMuc29tZSgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBvcHRpb24udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrVmFsdWVzIHtcclxuICB2YWx1ZTogYW55O1xyXG59XHJcbiJdfQ==