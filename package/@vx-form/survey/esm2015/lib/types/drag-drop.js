/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
//cdkDrag
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class VXSurveyDragDrop extends FieldType {
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
    get insertQuestionIndex() {
        /** @type {?} */
        let result = -1;
        if (this.to.index) {
            result = this.to.index;
        }
        return result;
    }
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            this.service.dragDropOperational(event.previousContainer.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    //设置逻辑
    /**
     * @param {?} field
     * @return {?}
     */
    logicQuestion(field) {
        this.service.questionOperational("logic", field);
    }
    //拷贝题目
    /**
     * @param {?} field
     * @return {?}
     */
    copyQuestion(field) {
        this.service.questionOperational("copy", field);
    }
    //删除题目
    /**
     * @param {?} field
     * @return {?}
     */
    delQuestion(field) {
        this.service.questionOperational("delete", field);
    }
    //点击题目
    /**
     * @param {?} field
     * @return {?}
     */
    activeQuestion(field) {
        if (!this.field.active) {
            this.service.questionOperational("active", field);
        }
    }
}
VXSurveyDragDrop.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-drag-drop",
                template: `
  <div class="formly-drag-drop"  (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListData]="field.fieldGroup">
  <div class="formly-drag-drop">
    <ng-container *ngFor="let field of field.fieldGroup;let index=index;" > 
      <div  (click)="activeQuestion(field)" *ngIf="field.active==true" class="formly-drag-drop_wrap active"> 
        <div class="field-operate" >  
          <span (click)="logicQuestion(field)" nzTooltipTitle="逻辑设置" nzTooltipPlacement="top" nz-tooltip>设置</span>
          <span (click)="copyQuestion(field)" nzTooltipTitle="复制题目" nzTooltipPlacement="top" nz-tooltip>复制</span>
          <span (click)="delQuestion(field)"  nzTooltipTitle="删除题目" nzTooltipPlacement="top" nz-tooltip>删除</span>
        </div>
        <div class="field-content">
        <vxform-field [field]="field" [rownumber]="index+1"></vxform-field>
        </div>
      </div>
      
      <div  (click)="activeQuestion(field)" *ngIf="field.active!=true " class="formly-drag-drop_wrap" cdkDrag> 
         
        <div class="field-content">
        <vxform-field [field]="field" [rownumber]="index+1"></vxform-field>
        </div>
      </div>
    </ng-container> 
  </div>
  
  <ng-container *ngIf="field.fieldGroup==null || field.fieldGroup.length==0" >
  <div class="formly_empty">
    <div class="formly-drag-drop"  (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListData]="field.fieldGroup">
      请把题型拖入此区域
    </div>
  </div>
</ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyDragDrop.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyDragDrop.prototype.service;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2RyYWctZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVwRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFvQ3RFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTOzs7O0lBVTdDLFlBQVksU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7O0lBVkQsSUFBSSxtQkFBbUI7O1lBQ2pCLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDO1lBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7Ozs7O0lBT0YsSUFBSSxDQUFDLEtBQTRCO1FBRS9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUM5QixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUM1QixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUNELGdCQUFnQixDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUlELGFBQWEsQ0FBQyxLQUFTO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxLQUFTO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFTO1FBRW5CLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxLQUFTO1FBQ3RCLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7OztZQXJGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUO2FBQ0Y7Ozs7WUFyQ1EsZ0JBQWdCOzs7O0lBdUN2QixtQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG4vL2Nka0RyYWdcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1kcmFnLWRyb3BcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtbHktZHJhZy1kcm9wXCIgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCIgY2RrRHJvcExpc3QgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5maWVsZEdyb3VwXCI+XHJcbiAgPGRpdiBjbGFzcz1cImZvcm1seS1kcmFnLWRyb3BcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkLmZpZWxkR3JvdXA7bGV0IGluZGV4PWluZGV4O1wiID4gXHJcbiAgICAgIDxkaXYgIChjbGljayk9XCJhY3RpdmVRdWVzdGlvbihmaWVsZClcIiAqbmdJZj1cImZpZWxkLmFjdGl2ZT09dHJ1ZVwiIGNsYXNzPVwiZm9ybWx5LWRyYWctZHJvcF93cmFwIGFjdGl2ZVwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtb3BlcmF0ZVwiID4gIFxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImxvZ2ljUXVlc3Rpb24oZmllbGQpXCIgbnpUb29sdGlwVGl0bGU9XCLpgLvovpHorr7nva5cIiBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIiBuei10b29sdGlwPuiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJjb3B5UXVlc3Rpb24oZmllbGQpXCIgbnpUb29sdGlwVGl0bGU9XCLlpI3liLbpopjnm65cIiBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIiBuei10b29sdGlwPuWkjeWItjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJkZWxRdWVzdGlvbihmaWVsZClcIiAgbnpUb29sdGlwVGl0bGU9XCLliKDpmaTpopjnm65cIiBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIiBuei10b29sdGlwPuWIoOmZpDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgIDx2eGZvcm0tZmllbGQgW2ZpZWxkXT1cImZpZWxkXCIgW3Jvd251bWJlcl09XCJpbmRleCsxXCI+PC92eGZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiAgKGNsaWNrKT1cImFjdGl2ZVF1ZXN0aW9uKGZpZWxkKVwiICpuZ0lmPVwiZmllbGQuYWN0aXZlIT10cnVlIFwiIGNsYXNzPVwiZm9ybWx5LWRyYWctZHJvcF93cmFwXCIgY2RrRHJhZz4gXHJcbiAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCI+XHJcbiAgICAgICAgPHZ4Zm9ybS1maWVsZCBbZmllbGRdPVwiZmllbGRcIiBbcm93bnVtYmVyXT1cImluZGV4KzFcIj48L3Z4Zm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj4gXHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmZpZWxkR3JvdXA9PW51bGwgfHwgZmllbGQuZmllbGRHcm91cC5sZW5ndGg9PTBcIiA+XHJcbiAgPGRpdiBjbGFzcz1cImZvcm1seV9lbXB0eVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm1seS1kcmFnLWRyb3BcIiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiBjZGtEcm9wTGlzdCBbY2RrRHJvcExpc3REYXRhXT1cImZpZWxkLmZpZWxkR3JvdXBcIj5cclxuICAgICAg6K+35oqK6aKY5Z6L5ouW5YWl5q2k5Yy65Z+fXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlEcmFnRHJvcCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG5cclxuICBnZXQgaW5zZXJ0UXVlc3Rpb25JbmRleCgpe1xyXG4gICAgbGV0IHJlc3VsdCA9IC0xO1xyXG4gICAgaWYodGhpcy50by5pbmRleCl7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMudG8uaW5kZXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICBcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5kcmFnRHJvcE9wZXJhdGlvbmFsKFxyXG4gICAgICAgIGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXHJcbiAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcclxuICAgICAgICBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBcclxuICAvL+iuvue9rumAu+i+kVxyXG4gIGxvZ2ljUXVlc3Rpb24oZmllbGQ6YW55KXtcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwibG9naWNcIixmaWVsZCk7XHJcbiAgfVxyXG4gIC8v5ou36LSd6aKY55uuXHJcbiAgY29weVF1ZXN0aW9uKGZpZWxkOmFueSl7IFxyXG4gICAgdGhpcy5zZXJ2aWNlLnF1ZXN0aW9uT3BlcmF0aW9uYWwoXCJjb3B5XCIsZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmimOebrlxyXG4gIGRlbFF1ZXN0aW9uKGZpZWxkOmFueSlcclxuICB7ICBcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiZGVsZXRlXCIsZmllbGQpO1xyXG4gIH1cclxuICAvL+eCueWHu+mimOebrlxyXG4gIGFjdGl2ZVF1ZXN0aW9uKGZpZWxkOmFueSl7XHJcbiAgICBpZighdGhpcy5maWVsZC5hY3RpdmUpeyBcclxuICAgICAgdGhpcy5zZXJ2aWNlLnF1ZXN0aW9uT3BlcmF0aW9uYWwoXCJhY3RpdmVcIixmaWVsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=