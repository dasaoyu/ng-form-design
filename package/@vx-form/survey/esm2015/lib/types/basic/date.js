/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyDate extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    get format() {
        /** @type {?} */
        let result = "yyyy-MM-dd";
        if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
            result = this.to["format"];
        }
        return result;
    }
}
VXSurveyDate.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-date",
                template: ` 
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label"></inline-editor>  
      </div>
      <div class="question-wrap_content">
        <div class="option_wrap date" > 
          <nz-date-picker nzDisabled></nz-date-picker>
        </div>
      </div>   
    </ng-container>


    <ng-container *ngIf="formStatus === 0">
      <nz-date-picker 
        nzShowTime
        [nzFormat]="format"
        [formControl]="formControl"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError"
      ></nz-date-picker>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyDate.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyDate.prototype.service;
    /** @type {?} */
    VXSurveyDate.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0N2RCxNQUFNLE9BQU8sWUFBYSxTQUFRLFNBQVM7Ozs7SUFVekMsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQVRWLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFVakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7OztJQVZELElBQUksTUFBTTs7WUFDSixNQUFNLEdBQUMsWUFBWTtRQUN2QixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUUsRUFBRSxFQUFDO1lBQ2xGLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7Ozs7WUEvQlEsZ0JBQWdCOzs7O0lBaUN2QiwrQkFBYTs7SUFDYiw0QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LWRhdGVcIixcclxuICB0ZW1wbGF0ZTogYCBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCI+PC9pbmxpbmUtZWRpdG9yPiAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGRhdGVcIiA+IFxyXG4gICAgICAgICAgPG56LWRhdGUtcGlja2VyIG56RGlzYWJsZWQ+PC9uei1kYXRlLXBpY2tlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDBcIj5cclxuICAgICAgPG56LWRhdGUtcGlja2VyIFxyXG4gICAgICAgIG56U2hvd1RpbWVcclxuICAgICAgICBbbnpGb3JtYXRdPVwiZm9ybWF0XCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICA+PC9uei1kYXRlLXBpY2tlcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5RGF0ZSBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBnZXQgZm9ybWF0KCl7XHJcbiAgICBsZXQgcmVzdWx0PVwieXl5eS1NTS1kZFwiOyBcclxuICAgIGlmKHRoaXMudG9bXCJmb3JtYXRcIl0hPXVuZGVmaW5lZCAmJiB0aGlzLnRvW1wiZm9ybWF0XCJdIT1udWxsICYmIHRoaXMudG9bXCJmb3JtYXRcIl0hPVwiXCIpe1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnRvW1wiZm9ybWF0XCJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuIFxyXG59XHJcbiJdfQ==