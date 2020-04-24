/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldArrayType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldRepeat extends FieldArrayType {
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
    /**
     * @param {?} type
     * @return {?}
     */
    groupOperational(type) {
        this.service.groupOperational(type, this.field);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    delete(i) {
        if (this.field.fieldGroup && this.field.fieldGroup.length > 1) {
            this.remove(i);
        }
        else {
        }
    }
}
VXFormFieldRepeat.decorators = [
    { type: Component, args: [{
                selector: "vxform-repeat",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <!--
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        -->
        <div class="reportControl">
          <div class="report-header">
            <div class="left">
              <ul>
                <li><label nz-checkbox [(ngModel)]="field.checked"></label></li>
                <li (click)="groupOperational('item')">
                  <i class="icon-TianJiaZiDuan"></i>添加字段
                </li>
                <li (click)="groupOperational('remark')">
                  <i class="icon-other-WenBen"></i>添加文本
                </li>
                <li (click)="groupOperational('line')">
                  <i class="icon-FenGeXian"></i>添加分割线
                </li>
              </ul>
            </div>
            <div class="right">
              <ul>
                <li (click)="groupOperational('delete')">
                  <i class="icon-N_delete2"></i>删除
                </li>
                <li (click)="groupOperational('up')">
                  <i class="icon-ShangYi"></i>上移
                </li>
                <li (click)="groupOperational('down')">
                  <i class="icon-XiaYi"></i>下移
                </li>
                <li (click)="fieldOperational('delete')">
                  <button class="btnDel">
                    <i class="icon-KT-Close"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="report-body">
            <ng-container *ngFor="let field of field.fieldGroup; let i = index">
              <vxform-field class="col" [field]="field"></vxform-field>
            </ng-container>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <div *ngFor="let field of field.fieldGroup; let i = index" class="row">
        <vxform-field class="col" [field]="field"></vxform-field>

        <span (click)="delete(i)" class="del">删除</span>

        <div class="tips"></div>
      </div>
      <div class="add">
        <span (click)="add()">新增</span>
      </div>
    </ng-container>
  `,
                host: {
                    "[class]": 'field.className || ""',
                    cdkDrag: ""
                }
            }] }
];
/** @nocollapse */
VXFormFieldRepeat.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldRepeat.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3RlbXBsYXRlcy9yZXBlYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUEwRXBELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxjQUFjOzs7O0lBR25ELFlBQVksU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO2FBQU07U0FDTjtJQUNILENBQUM7OztZQTdGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdFVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLHVCQUF1QjtvQkFDbEMsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7YUFDRjs7OztZQXpFUSxnQkFBZ0I7Ozs7SUEyRXZCLG9DQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRBcnJheVR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIENka0RyYWdEcm9wLFxyXG4gIG1vdmVJdGVtSW5BcnJheSxcclxuICB0cmFuc2ZlckFycmF5SXRlbVxyXG59IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLXJlcGVhdFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRPcGVyYXRpb25hbFwiPlxyXG4gICAgICAgIDwhLS1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcG9ydENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBvcnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cImdyb3VwT3BlcmF0aW9uYWwoJ2l0ZW0nKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tVGlhbkppYVppRHVhblwiPjwvaT7mt7vliqDlrZfmrrVcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cImdyb3VwT3BlcmF0aW9uYWwoJ3JlbWFyaycpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1vdGhlci1XZW5CZW5cIj48L2k+5re75Yqg5paH5pysXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJncm91cE9wZXJhdGlvbmFsKCdsaW5lJylcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUZlbkdlWGlhblwiPjwvaT7mt7vliqDliIblibLnur9cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiZ3JvdXBPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLU5fZGVsZXRlMlwiPjwvaT7liKDpmaRcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cImdyb3VwT3BlcmF0aW9uYWwoJ3VwJylcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLVNoYW5nWWlcIj48L2k+5LiK56e7XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJncm91cE9wZXJhdGlvbmFsKCdkb3duJylcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLVhpYVlpXCI+PC9pPuS4i+enu1xyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiZmllbGRPcGVyYXRpb25hbCgnZGVsZXRlJylcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0LWJvZHlcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGQuZmllbGRHcm91cDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx2eGZvcm0tZmllbGQgY2xhc3M9XCJjb2xcIiBbZmllbGRdPVwiZmllbGRcIj48L3Z4Zm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZC5maWVsZEdyb3VwOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8dnhmb3JtLWZpZWxkIGNsYXNzPVwiY29sXCIgW2ZpZWxkXT1cImZpZWxkXCI+PC92eGZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJkZWxldGUoaSlcIiBjbGFzcz1cImRlbFwiPuWIoOmZpDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhZGRcIj5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkKClcIj7mlrDlop48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBcIltjbGFzc11cIjogJ2ZpZWxkLmNsYXNzTmFtZSB8fCBcIlwiJyxcclxuICAgIGNka0RyYWc6IFwiXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZFJlcGVhdCBleHRlbmRzIEZpZWxkQXJyYXlUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGdyb3VwT3BlcmF0aW9uYWwodHlwZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZ3JvdXBPcGVyYXRpb25hbCh0eXBlLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShpOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmZpZWxkR3JvdXAgJiYgdGhpcy5maWVsZC5maWVsZEdyb3VwLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoaSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=