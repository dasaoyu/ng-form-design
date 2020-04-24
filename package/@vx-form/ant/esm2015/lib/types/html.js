/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldHTML extends FieldType {
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
VXFormFieldHTML.decorators = [
    { type: Component, args: [{
                selector: "vxfield-html",
                template: `
  <ng-container *ngIf="formStatus !== 0">
  <div class="fieldOperational">
    <div class="fieldcheckbox">
      <label nz-checkbox [(ngModel)]="field.checked"></label>
    </div>
    <div class="fieldControl">
      <div class="control">
        {{ to.description }}
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
  <div class="fieldcontrol">{{ to.description }}</div>
</ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldHTML.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXFormFieldHTML.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUErQnBELE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7Ozs7SUFHNUMsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7Ozs7WUE5QlEsZ0JBQWdCOzs7O0lBZ0N2QixrQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC1odG1sXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWVsZC5jaGVja2VkXCI+PC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgIHt7IHRvLmRlc2NyaXB0aW9uIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRCdXR0b25cIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRWRpdFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdlZGl0JylcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWVsZGNvbnRyb2xcIj57eyB0by5kZXNjcmlwdGlvbiB9fTwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZEhUTUwgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=