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
        <span *ngIf="to.required">*</span>{{ to.label }}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3dyYXBwZXJzL2Zvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkI3QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsWUFBWTs7O1lBM0J2RCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRXcmFwcGVyIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtd3JhcHBlclwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMCB8fCBmaWVsZC50eXBlID09ICdsaW5lJyB8fCBmaWVsZC50eXBlID09ICdodG1sJ1wiXHJcbiAgICA+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmllbGRDb21wb25lbnQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDAgJiYgZmllbGQudHlwZSAhPSAnbGluZScgJiYgZmllbGQudHlwZSAhPSAnaHRtbCdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRsYWJlbFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2ZpZWxkQ29tcG9uZW50PjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiBbc3R5bGUuZGlzcGxheV09XCInYmxvY2snXCI+XHJcbiAgICAgICAgICA8dnhmb3JtLXZhbGlkYXRpb24tbWVzc2FnZVxyXG4gICAgICAgICAgICAqbmdJZj1cInNob3dFcnJvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6cmVkXCJcclxuICAgICAgICAgICAgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgID48L3Z4Zm9ybS12YWxpZGF0aW9uLW1lc3NhZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtV3JhcHBlckZvcm1GaWVsZCBleHRlbmRzIEZpZWxkV3JhcHBlciB7fVxyXG4iXX0=