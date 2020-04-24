/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldWrapper } from "@vx-form/core";
var VXFormWrapperFormField = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormWrapperFormField, _super);
    function VXFormWrapperFormField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VXFormWrapperFormField.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-wrapper",
                    template: "\n    <ng-container\n      *ngIf=\"formStatus !== 0 || field.type == 'line' || field.type == 'html'\"\n    >\n      <ng-template #fieldComponent></ng-template>\n    </ng-container>\n    <ng-container\n      *ngIf=\"formStatus === 0 && field.type != 'line' && field.type != 'html'\"\n    >\n      <div class=\"fieldlabel\">\n        <span *ngIf=\"to.required\">*</span>{{ to.label }}\n      </div>\n      <div class=\"fieldcontrol\" [class.has-error]=\"showError\">\n        <ng-template #fieldComponent></ng-template>\n        <div class=\"invalid-feedback\" [style.display]=\"'block'\">\n          <vxform-validation-message\n            *ngIf=\"showError\"\n            style=\"color:red\"\n            [field]=\"field\"\n          ></vxform-validation-message>\n        </div>\n      </div>\n    </ng-container>\n  "
                }] }
    ];
    return VXFormWrapperFormField;
}(FieldWrapper));
export { VXFormWrapperFormField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3dyYXBwZXJzL2Zvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QztJQTJCNEMsa0RBQVk7SUEzQnhEOztJQTJCMEQsQ0FBQzs7Z0JBM0IxRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG96QkF1QlQ7aUJBQ0Y7O0lBQ3lELDZCQUFDO0NBQUEsQUEzQjNELENBMkI0QyxZQUFZLEdBQUc7U0FBOUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRXcmFwcGVyIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtd3JhcHBlclwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMCB8fCBmaWVsZC50eXBlID09ICdsaW5lJyB8fCBmaWVsZC50eXBlID09ICdodG1sJ1wiXHJcbiAgICA+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmllbGRDb21wb25lbnQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDAgJiYgZmllbGQudHlwZSAhPSAnbGluZScgJiYgZmllbGQudHlwZSAhPSAnaHRtbCdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRsYWJlbFwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjb250cm9sXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJzaG93RXJyb3JcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2ZpZWxkQ29tcG9uZW50PjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiBbc3R5bGUuZGlzcGxheV09XCInYmxvY2snXCI+XHJcbiAgICAgICAgICA8dnhmb3JtLXZhbGlkYXRpb24tbWVzc2FnZVxyXG4gICAgICAgICAgICAqbmdJZj1cInNob3dFcnJvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6cmVkXCJcclxuICAgICAgICAgICAgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgID48L3Z4Zm9ybS12YWxpZGF0aW9uLW1lc3NhZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtV3JhcHBlckZvcm1GaWVsZCBleHRlbmRzIEZpZWxkV3JhcHBlciB7fVxyXG4iXX0=