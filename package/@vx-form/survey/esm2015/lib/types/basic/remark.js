/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyRemark extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyRemark.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-remark",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_content">
        <div class="option_wrap basic_remark" > 
            <inline-editor [(ngModel)]="to.label"  [active]="active"></inline-editor> 
        </div>
      </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0"> 
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyRemark.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyRemark.prototype.service;
    /** @type {?} */
    VXSurveyRemark.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL3JlbWFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWtCdkQsTUFBTSxPQUFPLGNBQWUsU0FBUSxTQUFTOzs7O0lBRzNDLFlBQVksU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFGVixTQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2FBQ0Y7Ozs7WUFqQlEsZ0JBQWdCOzs7O0lBbUJ2QixpQ0FBYTs7SUFDYiw4QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXJlbWFya1wiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX3JlbWFya1wiID4gXHJcbiAgICAgICAgICAgIDxpbmxpbmUtZWRpdG9yIFsobmdNb2RlbCldPVwidG8ubGFiZWxcIiAgW2FjdGl2ZV09XCJhY3RpdmVcIj48L2lubGluZS1lZGl0b3I+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+IFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlSZW1hcmsgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH0gXHJcbn1cclxuIl19