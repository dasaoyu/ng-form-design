/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldWrapper } from "@vx-form/core";
export class VXFormWrapperFormField extends FieldWrapper {
}
VXFormWrapperFormField.decorators = [
    { type: Component, args: [{
                selector: "vxfield-wrapper",
                template: `
    <ng-container
      *ngIf="formStatus !== 0 || field.type == 'line' || field.type == 'html'"
    >
      <ng-template #fieldComponent></ng-template>
    </ng-container>
    <ng-container
      *ngIf="formStatus === 0 && field.type != 'line' && field.type != 'html'"
    >
      <div class="fieldlabel">
        <span class="required" *ngIf="to.required">*</span>
        <span class="question_no" *ngIf="to.queno">{{to.queno}}.&nbsp;</span>
        {{ to.label }}
      </div>
      <div class="fieldcontrol" [class.has-error]="showError">
        <ng-template #fieldComponent></ng-template>
        <div class="invalid-feedback" [style.display]="'block'">
          <vxform-validation-message
            *ngIf="showError"
            style="color:red"
            [field]="field"
          ></vxform-validation-message>
        </div>
      </div>
    </ng-container>
  `
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3dyYXBwZXJzL2Zvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBK0I3QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsWUFBWTs7O1lBN0J2RCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFdyYXBwZXIgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC13cmFwcGVyXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwIHx8IGZpZWxkLnR5cGUgPT0gJ2xpbmUnIHx8IGZpZWxkLnR5cGUgPT0gJ2h0bWwnXCJcclxuICAgID5cclxuICAgICAgPG5nLXRlbXBsYXRlICNmaWVsZENvbXBvbmVudD48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMCAmJiBmaWVsZC50eXBlICE9ICdsaW5lJyAmJiBmaWVsZC50eXBlICE9ICdodG1sJ1wiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGxhYmVsXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicXVlc3Rpb25fbm9cIiAqbmdJZj1cInRvLnF1ZW5vXCI+e3t0by5xdWVub319LiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICB7eyB0by5sYWJlbCB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNmaWVsZENvbXBvbmVudD48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgW3N0eWxlLmRpc3BsYXldPVwiJ2Jsb2NrJ1wiPlxyXG4gICAgICAgICAgPHZ4Zm9ybS12YWxpZGF0aW9uLW1lc3NhZ2VcclxuICAgICAgICAgICAgKm5nSWY9XCJzaG93RXJyb3JcIlxyXG4gICAgICAgICAgICBzdHlsZT1cImNvbG9yOnJlZFwiXHJcbiAgICAgICAgICAgIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICA+PC92eGZvcm0tdmFsaWRhdGlvbi1tZXNzYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybVdyYXBwZXJGb3JtRmllbGQgZXh0ZW5kcyBGaWVsZFdyYXBwZXIge31cclxuIl19