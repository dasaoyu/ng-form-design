/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class VXSurveyCheckBox extends FieldType {
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
VXSurveyCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-checkbox",
                template: `
    <ng-container *ngIf="formStatus !== 0"> 
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>  
      </div>
      <div class="question-wrap_content"  (cdkDropListDropped)="drop($event)" cdkDropList  [cdkDropListData]="to.options">
        <div class="option_wrap basic_checkbox" *ngFor="let item of to.options" cdkDrag>
          <div class="option">
            <label nz-checkbox nzDisabled="true"></label> 
            <inline-editor [(ngModel)]="item.label" [active]="active"></inline-editor>  
          </div>
          <div class="operate" (click)="deleteOption(item)" *ngIf="active==true">
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
            >{{ option.label }}</label>
        </ng-container>
      </nz-checkbox-wrapper> 
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyCheckBox.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyCheckBox.prototype.service;
    /** @type {?} */
    VXSurveyCheckBox.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBK0NwRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUzs7OztJQUc3QyxZQUFZLFNBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRlYsU0FBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQVU7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFnQjs7WUFDbkIsR0FBRyxHQUFRLEVBQUU7UUFDakIsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO29CQUM3RCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7d0JBQ3RDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssRUFBRTs0QkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDakI7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFXO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVNLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxNQUFXOztZQUMzQyxNQUFNLEdBQUcsS0FBSztRQUNsQixJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDcEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBNEI7UUFDL0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7WUFyR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1Q7YUFDRjs7OztZQS9DUSxnQkFBZ0I7Ozs7SUFpRHZCLG1DQUFhOztJQUNiLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktY2hlY2tib3hcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIiBjZGtEcm9wTGlzdCAgW2Nka0Ryb3BMaXN0RGF0YV09XCJ0by5vcHRpb25zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2NoZWNrYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdG8ub3B0aW9uc1wiIGNka0RyYWc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBuekRpc2FibGVkPVwidHJ1ZVwiPjwvbGFiZWw+IFxyXG4gICAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cIml0ZW0ubGFiZWxcIiBbYWN0aXZlXT1cImFjdGl2ZVwiPjwvaW5saW5lLWVkaXRvcj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3BlcmF0ZVwiIChjbGljayk9XCJkZWxldGVPcHRpb24oaXRlbSlcIiAqbmdJZj1cImFjdGl2ZT09dHJ1ZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+IFxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb25zKClcIj7mibnph4/mt7vliqDpgInpobk8L3NwYW4+XHJcbiAgICAgIDwvZGl2PiAgIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgKG56T25DaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiB0by5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgICAgW25nTW9kZWxdPVwiZ2V0Q29udHJvbENoZWNrZWQoZm9ybUNvbnRyb2wudmFsdWUsIG9wdGlvbilcIlxyXG4gICAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L256LWNoZWNrYm94LXdyYXBwZXI+IFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlDaGVja0JveCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfSBcclxuIFxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCl7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIixcIlwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aJuemHj+a3u+WKoFxyXG4gIGFkZE9wdGlvbnMoKXtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIixcIlwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmAiemhuVxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246YW55KXsgXHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIixvcHRpb24sdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIFxyXG4gIG9uQ2hhbmdlKHZhbHVlczogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXM6IGFueSA9IFtdO1xyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRvLm9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvLm9wdGlvbnMgIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudG8ub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uW1widmFsdWVcIl0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgcmVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlcyk7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGdldENoZWNrU3RhdHVzKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbnRyb2xDaGVja2VkKHZhbHVlczogYW55LCBvcHRpb246IGFueSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgaWYgKG9wdGlvbiAmJiB2YWx1ZXMpIHtcclxuICAgICAgcmVzdWx0ID0gdmFsdWVzLnNvbWUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHsgXHJcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB9IFxyXG4gIH1cclxufVxyXG4iXX0=