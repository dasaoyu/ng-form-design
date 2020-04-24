/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
import * as moment_ from "moment";
/** @type {?} */
const moment = moment_;
export class VXFormFieldDateTime extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    get format() {
        /** @type {?} */
        let result = "yyyy-MM-dd HH:mm:ss";
        if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
            result = this.to["format"];
        }
        return result;
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
    getText() {
        /** @type {?} */
        let result = "";
        if (this.to.type != undefined && this.to.type != null) {
            if (this.model != undefined &&
                this.model != null &&
                this.field != undefined &&
                this.field != null &&
                this.field.key != undefined &&
                this.field.key != null &&
                this.model[this.field.key] != undefined &&
                this.model[this.field.key] != null &&
                this.model[this.field.key] != "") {
                switch (this.to.type) {
                    case "datetime":
                        result = moment(this.model[this.field.key]).format("yyyy-MM-DD HH:mm:ss");
                        break;
                    case "date":
                        result = moment(this.model[this.field.key]).format("YYYY-MM-DD");
                        break;
                    case "year":
                        result = moment(this.model[this.field.key]).format("YYYY");
                        break;
                    case "month":
                        result = moment(this.model[this.field.key]).format("YYYY-MM");
                        break;
                    case "time":
                        result = moment(this.model[this.field.key]).format("HH:mm");
                        break;
                }
            }
        }
        return result;
    }
}
VXFormFieldDateTime.decorators = [
    { type: Component, args: [{
                selector: "vxfield-datetime",
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

    <ng-container *ngIf="formStatus === 0"
      ><ng-container *ngIf="editor === true"> 
          <nz-date-picker 
            nzShowTime
            [nzFormat]="format"
            [formControl]="formControl"
            [vxFormAttributes]="field"
            [class.is-invalid]="showError"
          ></nz-date-picker>
 
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

      <div class="fieldtext" *ngIf="editor === false">{{ getText() }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldDateTime.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldDateTime.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvZGF0ZXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7TUFDNUIsTUFBTSxHQUFHLE9BQU87QUFzRHRCLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxTQUFTOzs7O0lBVWhELFlBQVksU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7O0lBWEQsSUFBSSxNQUFNOztZQUNKLE1BQU0sR0FBQyxxQkFBcUI7UUFDaEMsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFFLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFFLEVBQUUsRUFBQztZQUNsRixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBT0QsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELE9BQU87O1lBQ0QsTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDckQsSUFDRSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLFNBQVM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUk7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSTtnQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFDaEM7Z0JBQ0EsUUFBUSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDcEIsS0FBSyxVQUFVO3dCQUNiLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUNoRCxxQkFBcUIsQ0FDdEIsQ0FBQzt3QkFDRixNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDakUsTUFBTTtvQkFDUixLQUFLLE1BQU07d0JBQ1QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNELE1BQU07b0JBQ1IsS0FBSyxPQUFPO3dCQUNWLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM5RCxNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsTUFBTTtpQkFDVDthQUNGO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUEzR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RUO2FBQ0Y7Ozs7WUF2RFEsZ0JBQWdCOzs7O0lBeUR2QixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gXCJtb21lbnRcIjtcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtZGF0ZXRpbWVcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkT3BlcmF0aW9uYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkVkaXRcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZWRpdCcpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUVkaXQwM1wiPjwvaT7nvJbovpFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5EZWxcIiAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIlxyXG4gICAgICA+PG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRvciA9PT0gdHJ1ZVwiPiBcclxuICAgICAgICAgIDxuei1kYXRlLXBpY2tlciBcclxuICAgICAgICAgICAgbnpTaG93VGltZVxyXG4gICAgICAgICAgICBbbnpGb3JtYXRdPVwiZm9ybWF0XCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgPjwvbnotZGF0ZS1waWNrZXI+XHJcbiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwidGlwc1wiXHJcbiAgICAgICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAgICAgKm5nSWY9XCJ0aXBzICE9ICcnXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPnt7IGdldFRleHQoKSB9fTwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGREYXRlVGltZSBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGdldCBmb3JtYXQoKXtcclxuICAgIGxldCByZXN1bHQ9XCJ5eXl5LU1NLWRkIEhIOm1tOnNzXCI7IFxyXG4gICAgaWYodGhpcy50b1tcImZvcm1hdFwiXSE9dW5kZWZpbmVkICYmIHRoaXMudG9bXCJmb3JtYXRcIl0hPW51bGwgJiYgdGhpcy50b1tcImZvcm1hdFwiXSE9XCJcIil7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMudG9bXCJmb3JtYXRcIl07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0KCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy50by50eXBlICE9IHVuZGVmaW5lZCAmJiB0aGlzLnRvLnR5cGUgIT0gbnVsbCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICB0aGlzLm1vZGVsICE9IG51bGwgJiZcclxuICAgICAgICB0aGlzLmZpZWxkICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHRoaXMuZmllbGQgIT0gbnVsbCAmJlxyXG4gICAgICAgIHRoaXMuZmllbGQua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHRoaXMuZmllbGQua2V5ICE9IG51bGwgJiZcclxuICAgICAgICB0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICB0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSAhPSBudWxsICYmXHJcbiAgICAgICAgdGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV0gIT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudG8udHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudCh0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSkuZm9ybWF0KFxyXG4gICAgICAgICAgICAgIFwieXl5eS1NTS1ERCBISDptbTpzc1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbW9tZW50KHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJ5ZWFyXCI6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudCh0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSkuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwibW9udGhcIjpcclxuICAgICAgICAgICAgcmVzdWx0ID0gbW9tZW50KHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldKS5mb3JtYXQoXCJZWVlZLU1NXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG1vbWVudCh0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSkuZm9ybWF0KFwiSEg6bW1cIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19