/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
export class VXFormFieldGroup extends FieldType {
}
VXFormFieldGroup.decorators = [
    { type: Component, args: [{
                selector: "group",
                template: `
    <vxform-field *ngFor="let f of field.fieldGroup" [field]="f"></vxform-field>
    <ng-content></ng-content>
  `,
                host: {
                    "[class]": 'field.className || ""',
                    cdkDrag: ""
                }
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQjFDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTOzs7WUFYOUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsdUJBQXVCO29CQUNsQyxPQUFPLEVBQUUsRUFBRTtpQkFDWjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDZGtEcmFnRHJvcCxcclxuICBtb3ZlSXRlbUluQXJyYXksXHJcbiAgdHJhbnNmZXJBcnJheUl0ZW1cclxufSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyb3VwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx2eGZvcm0tZmllbGQgKm5nRm9yPVwibGV0IGYgb2YgZmllbGQuZmllbGRHcm91cFwiIFtmaWVsZF09XCJmXCI+PC92eGZvcm0tZmllbGQ+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBcIltjbGFzc11cIjogJ2ZpZWxkLmNsYXNzTmFtZSB8fCBcIlwiJyxcclxuICAgIGNka0RyYWc6IFwiXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZEdyb3VwIGV4dGVuZHMgRmllbGRUeXBlIHt9XHJcbiJdfQ==