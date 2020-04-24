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
                    template: "\n    <ng-container\n      *ngIf=\"formStatus !== 0 || field.type == 'line' || field.type == 'html'\"\n    >\n      <ng-template #fieldComponent></ng-template>\n    </ng-container>\n    <ng-container\n      *ngIf=\"formStatus === 0 && field.type != 'line' && field.type != 'html'\"\n    >\n      <div class=\"fieldlabel\">\n        <span class=\"required\" *ngIf=\"to.required\">*</span>\n        <span class=\"question_no\" *ngIf=\"to.queno\">{{to.queno}}.&nbsp;</span>\n        {{ to.label }}\n      </div>\n      <div class=\"fieldcontrol\" [class.has-error]=\"showError\">\n        <ng-template #fieldComponent></ng-template>\n        <div class=\"invalid-feedback\" [style.display]=\"'block'\">\n          <vxform-validation-message\n            *ngIf=\"showError\"\n            style=\"color:red\"\n            [field]=\"field\"\n          ></vxform-validation-message>\n        </div>\n      </div>\n    </ng-container>\n  "
                }] }
    ];
    return VXFormWrapperFormField;
}(FieldWrapper));
export { VXFormWrapperFormField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3dyYXBwZXJzL2Zvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QztJQTZCNEMsa0RBQVk7SUE3QnhEOztJQTZCMEQsQ0FBQzs7Z0JBN0IxRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG82QkF5QlQ7aUJBQ0Y7O0lBQ3lELDZCQUFDO0NBQUEsQUE3QjNELENBNkI0QyxZQUFZLEdBQUc7U0FBOUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRXcmFwcGVyIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtd3JhcHBlclwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMCB8fCBmaWVsZC50eXBlID09ICdsaW5lJyB8fCBmaWVsZC50eXBlID09ICdodG1sJ1wiXHJcbiAgICA+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmllbGRDb21wb25lbnQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAqbmdJZj1cImZvcm1TdGF0dXMgPT09IDAgJiYgZmllbGQudHlwZSAhPSAnbGluZScgJiYgZmllbGQudHlwZSAhPSAnaHRtbCdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRsYWJlbFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInF1ZXN0aW9uX25vXCIgKm5nSWY9XCJ0by5xdWVub1wiPnt7dG8ucXVlbm99fS4mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAge3sgdG8ubGFiZWwgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZmllbGRDb21wb25lbnQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiIFtzdHlsZS5kaXNwbGF5XT1cIidibG9jaydcIj5cclxuICAgICAgICAgIDx2eGZvcm0tdmFsaWRhdGlvbi1tZXNzYWdlXHJcbiAgICAgICAgICAgICpuZ0lmPVwic2hvd0Vycm9yXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjpyZWRcIlxyXG4gICAgICAgICAgICBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgPjwvdnhmb3JtLXZhbGlkYXRpb24tbWVzc2FnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1XcmFwcGVyRm9ybUZpZWxkIGV4dGVuZHMgRmllbGRXcmFwcGVyIHt9XHJcbiJdfQ==