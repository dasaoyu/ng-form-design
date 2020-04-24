/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class VXSurveyRadio extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
VXSurveyRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-radio",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content"  (cdkDropListDropped)="drop($event)" cdkDropList  [cdkDropListData]="to.options">
          <div class="option_wrap basic_radio" *ngFor="let item of to.options" cdkDrag>
            <div class="option">
              <label nz-radio nzDisabled="true"></label> 
              <inline-editor  [(ngModel)]="item.label" [active]="active"></inline-editor>  
            </div>
            <div class="operate"  (click)="deleteOption(item)" *ngIf="active==true">
              <i class="icon-KT-Close"></i>
            </div>
          </div>
        </div>  
        <div class="question-wrap_operate">
          <span (click)="addOption()">添加单个选项</span> 
          <span (click)="addOptions()">批量添加选项</span>
        </div> 
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
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
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyRadio.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyRadio.prototype.service;
    /** @type {?} */
    VXSurveyRadio.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBNEN0RSxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQVM7Ozs7SUFHMUMsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUZWLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxNQUFXO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBNEI7UUFDL0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7YUFDRjs7OztZQTVDUSxnQkFBZ0I7Ozs7SUE4Q3ZCLGdDQUFhOztJQUNiLDZCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1yYWRpb1wiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCJcclxuICAgICAgICAgID48L2lubGluZS1lZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiIGNka0Ryb3BMaXN0ICBbY2RrRHJvcExpc3REYXRhXT1cInRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcCBiYXNpY19yYWRpb1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIiBjZGtEcmFnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIG56RGlzYWJsZWQ9XCJ0cnVlXCI+PC9sYWJlbD4gXHJcbiAgICAgICAgICAgICAgPGlubGluZS1lZGl0b3IgIFsobmdNb2RlbCldPVwiaXRlbS5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCI+PC9pbmxpbmUtZWRpdG9yPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3BlcmF0ZVwiICAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKGl0ZW0pXCIgKm5nSWY9XCJhY3RpdmU9PXRydWVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9vcGVyYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+IFxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZE9wdGlvbnMoKVwiPuaJuemHj+a3u+WKoOmAiemhuTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgICBbbnpOYW1lXT1cIidyYWRpb2dyb3VwLScgKyBndWlkXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotcmFkaW8gW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiPnt7IGl0ZW0ubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlSYWRpbyBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfSBcclxuXHJcbiAgLy/mt7vliqDpgInpoblcclxuICBhZGRPcHRpb24oKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIiwgb3B0aW9uLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikgeyBcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH0gXHJcbiAgfVxyXG59XHJcbiJdfQ==