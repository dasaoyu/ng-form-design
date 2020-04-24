/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyTime extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyTime.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-time",
                template: `
    
    
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label"></inline-editor>  
      </div>
      <div class="question-wrap_content">
        <div class="option_wrap time" > 
          <nz-time-picker nzFormat="HH:mm" [nzDisabled]="true"></nz-time-picker>
        </div>
      </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0"> 
      <nz-time-picker nzFormat="HH:mm"
        [formControl]="formControl"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError">
      </nz-time-picker> 
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyTime.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyTime.prototype.service;
    /** @type {?} */
    VXSurveyTime.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBK0J2RCxNQUFNLE9BQU8sWUFBYSxTQUFRLFNBQVM7Ozs7SUFHekMsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUZWLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7YUFDRjs7OztZQTlCUSxnQkFBZ0I7Ozs7SUFnQ3ZCLCtCQUFhOztJQUNiLDRCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktdGltZVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICBcclxuICAgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbmxpbmUtZWRpdG9yIFsobmdNb2RlbCldPVwidG8ubGFiZWxcIj48L2lubGluZS1lZGl0b3I+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXAgdGltZVwiID4gXHJcbiAgICAgICAgICA8bnotdGltZS1waWNrZXIgbnpGb3JtYXQ9XCJISDptbVwiIFtuekRpc2FibGVkXT1cInRydWVcIj48L256LXRpbWUtcGlja2VyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+IFxyXG4gICAgICA8bnotdGltZS1waWNrZXIgbnpGb3JtYXQ9XCJISDptbVwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCI+XHJcbiAgICAgIDwvbnotdGltZS1waWNrZXI+IFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlUaW1lIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ3VpZDogYW55ID0gR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gICBcclxufVxyXG4iXX0=