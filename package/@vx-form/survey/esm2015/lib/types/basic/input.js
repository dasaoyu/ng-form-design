/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyInput extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-input",
                template: `  
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>   
      </div>
      <div class="question-wrap_content">
        <div class="option_wrap basic_input" >
          <ng-container *ngIf="to.setting.size=='small'">
            <input nz-input placeholder="" [disabled]="true" />
          </ng-container>
          <ng-container *ngIf="to.setting.size=='default'">
            <textarea rows="2" nz-input [disabled]="true" ></textarea>
          </ng-container>
          <ng-container *ngIf="to.setting.size=='large'">
            <textarea rows="4" nz-input [disabled]="true" ></textarea>
          </ng-container>
        </div>
      </div>   
  </ng-container>


    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="to.setting.size=='small'">
        <input nz-input  
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError" />
      </ng-container>
      <ng-container *ngIf="to.setting.size=='default'">
        <textarea rows="2" nz-input  
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"  ></textarea>
      </ng-container>
      <ng-container *ngIf="to.setting.size=='large'">
        <textarea rows="4" nz-input  
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"></textarea>
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyInput.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyInput.prototype.service;
    /** @type {?} */
    VXSurveyInput.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtRHZELE1BQU0sT0FBTyxhQUFjLFNBQVEsU0FBUzs7OztJQUcxQyxZQUFZLFNBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRlYsU0FBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q1Q7YUFDRjs7OztZQWxEUSxnQkFBZ0I7Ozs7SUFvRHZCLGdDQUFhOztJQUNiLDZCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1pbnB1dFwiLFxyXG4gIHRlbXBsYXRlOiBgICBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+ICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2lucHV0XCIgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvLnNldHRpbmcuc2l6ZT09J3NtYWxsJ1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0by5zZXR0aW5nLnNpemU9PSdkZWZhdWx0J1wiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjJcIiBuei1pbnB1dCBbZGlzYWJsZWRdPVwidHJ1ZVwiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8uc2V0dGluZy5zaXplPT0nbGFyZ2UnXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIG56LWlucHV0IFtkaXNhYmxlZF09XCJ0cnVlXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICAgXHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0by5zZXR0aW5nLnNpemU9PSdzbWFsbCdcIj5cclxuICAgICAgICA8aW5wdXQgbnotaW5wdXQgIFxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiIC8+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG8uc2V0dGluZy5zaXplPT0nZGVmYXVsdCdcIj5cclxuICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjJcIiBuei1pbnB1dCAgXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxyXG4gICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCIgID48L3RleHRhcmVhPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvLnNldHRpbmcuc2l6ZT09J2xhcmdlJ1wiPlxyXG4gICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIG56LWlucHV0ICBcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIj48L3RleHRhcmVhPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5SW5wdXQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuIFxyXG59XHJcbiJdfQ==