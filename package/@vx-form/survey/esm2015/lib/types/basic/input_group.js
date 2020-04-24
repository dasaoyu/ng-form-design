/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyInputGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} value
     * @param {?} option
     * @return {?}
     */
    controlModelChange(value, option) {
        /** @type {?} */
        let values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { return item.optionid == option.value; }))) {
                values.push({
                    optionid: option.value,
                    optionvalue: value
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.optionid == option.value) {
                        item.optionvalue = value;
                    }
                }));
            }
        }
        else {
            values.push({
                optionid: option.value,
                optionvalue: value
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getControlChecked(option) {
        /** @type {?} */
        let result = null;
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.optionid == option.value) {
                    result = value.optionvalue;
                }
            }));
        }
        return result;
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
}
VXSurveyInputGroup.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-input_group",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_input_group"  *ngFor="let item of to.options">
            <div class="option">
              <inline-editor  [(ngModel)]="item.label" [active]="active"></inline-editor> 
              <input nz-input placeholder="" [disabled]="true" /> 
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
      <div class="inputlist"  *ngFor="let item of to.options">
        <div class="title">
          {{item.label}} 
        </div> 
        <input nz-input [ngModel]="getControlChecked(item)"  (ngModelChange)="controlModelChange($event,item)"/>
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyInputGroup.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyInputGroup.prototype.service;
    /** @type {?} */
    VXSurveyInputGroup.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRfZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvaW5wdXRfZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUF3Q3ZELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxTQUFTOzs7O0lBRy9DLFlBQVksU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFGVixTQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLEtBQVMsRUFBQyxNQUFVOztZQUNqQyxNQUFNLEdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUU3QyxJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUU5RCxJQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLElBQVEsRUFBQyxFQUFFLEdBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFDLEVBQUMsRUFBQztnQkFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDVixRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3JCLFdBQVcsRUFBQyxLQUFLO2lCQUNsQixDQUFDLENBQUE7YUFDSDtpQkFBSTtnQkFDSCxNQUFNLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLElBQVEsRUFBQyxFQUFFO29CQUN6QixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLEtBQUssRUFBQzt3QkFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBQyxLQUFLLENBQUE7cUJBQ3ZCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjthQUFJO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3JCLFdBQVcsRUFBQyxLQUFLO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQVc7O1lBQ3ZCLE1BQU0sR0FBRyxJQUFJOztZQUNiLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7UUFDbkMsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQVMsRUFBQyxFQUFFO2dCQUMxQixJQUFHLEtBQUssQ0FBQyxRQUFRLElBQUUsTUFBTSxDQUFDLEtBQUssRUFBQztvQkFDOUIsTUFBTSxHQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7YUFDRjs7OztZQXZDUSxnQkFBZ0I7Ozs7SUF5Q3ZCLHFDQUFhOztJQUNiLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1pbnB1dF9ncm91cFwiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCJcclxuICAgICAgICAgID48L2lubGluZS1lZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2lucHV0X2dyb3VwXCIgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxpbmxpbmUtZWRpdG9yICBbKG5nTW9kZWwpXT1cIml0ZW0ubGFiZWxcIiBbYWN0aXZlXT1cImFjdGl2ZVwiPjwvaW5saW5lLWVkaXRvcj4gXHJcbiAgICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IHBsYWNlaG9sZGVyPVwiXCIgW2Rpc2FibGVkXT1cInRydWVcIiAvPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcGVyYXRlXCIgIChjbGljayk9XCJkZWxldGVPcHRpb24oaXRlbSlcIiAqbmdJZj1cImFjdGl2ZT09dHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfb3BlcmF0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZE9wdGlvbigpXCI+5re75Yqg5Y2V5Liq6YCJ6aG5PC9zcGFuPiBcclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb25zKClcIj7mibnph4/mt7vliqDpgInpobk8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRsaXN0XCIgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgIHt7aXRlbS5sYWJlbH19IFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8aW5wdXQgbnotaW5wdXQgW25nTW9kZWxdPVwiZ2V0Q29udHJvbENoZWNrZWQoaXRlbSlcIiAgKG5nTW9kZWxDaGFuZ2UpPVwiY29udHJvbE1vZGVsQ2hhbmdlKCRldmVudCxpdGVtKVwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleUlucHV0R3JvdXAgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH0gXHJcbiAgIFxyXG4gIGNvbnRyb2xNb2RlbENoYW5nZSh2YWx1ZTphbnksb3B0aW9uOmFueSl7IFxyXG4gICAgbGV0IHZhbHVlczphbnkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlIHx8IFtdO1xyXG5cclxuICAgIGlmICh2YWx1ZXMgIT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBpZighdmFsdWVzLnNvbWUoKGl0ZW06YW55KT0+e3JldHVybiBpdGVtLm9wdGlvbmlkPT1vcHRpb24udmFsdWV9KSl7XHJcbiAgICAgICAgdmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgb3B0aW9uaWQ6b3B0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgb3B0aW9udmFsdWU6dmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICBpZihpdGVtLm9wdGlvbmlkPT1vcHRpb24udmFsdWUpe1xyXG4gICAgICAgICAgICBpdGVtLm9wdGlvbnZhbHVlPXZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdmFsdWVzLnB1c2goe1xyXG4gICAgICAgIG9wdGlvbmlkOm9wdGlvbi52YWx1ZSxcclxuICAgICAgICBvcHRpb252YWx1ZTp2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlcyk7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGdldENvbnRyb2xDaGVja2VkKG9wdGlvbjogYW55KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlOyBcclxuICAgIGlmICh2YWx1ZXMgIT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTphbnkpPT57XHJcbiAgICAgICAgaWYodmFsdWUub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZSl7XHJcbiAgICAgICAgICByZXN1bHQ9dmFsdWUub3B0aW9udmFsdWU7XHJcbiAgICAgICAgfSBcclxuICAgICAgfSk7XHJcbiAgICB9ICBcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvL+a3u+WKoOmAiemhuVxyXG4gIGFkZE9wdGlvbigpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZFwiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/mibnph4/mt7vliqBcclxuICBhZGRPcHRpb25zKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkc1wiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/liKDpmaTpgInpoblcclxuICBkZWxldGVPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLCBvcHRpb24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxufSJdfQ==