/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldImage extends FieldType {
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
VXFormFieldImage.decorators = [
    { type: Component, args: [{
                selector: "vxfield-image",
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
      <nz-avatar
        nzIcon="user"
        nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      ></nz-avatar>
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
  `
            }] }
];
/** @nocollapse */
VXFormFieldImage.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldImage.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQTZDcEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7Ozs7SUFHN0MsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q1Q7YUFDRjs7OztZQTVDUSxnQkFBZ0I7Ozs7SUE4Q3ZCLG1DQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZpZWxkLWltYWdlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5FZGl0XCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2VkaXQnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2RlbGV0ZScpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG56LWF2YXRhclxyXG4gICAgICAgIG56SWNvbj1cInVzZXJcIlxyXG4gICAgICAgIG56U3JjPVwiLy96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiXHJcbiAgICAgID48L256LWF2YXRhcj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRpcHNcIlxyXG4gICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAgICpuZ0lmPVwidGlwcyAhPSAnJ1wiXHJcbiAgICAgICAgPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZEltYWdlIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19