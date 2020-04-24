/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "./field.type";
export class VXFormGroup extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {}
        };
    }
}
VXFormGroup.decorators = [
    { type: Component, args: [{
                selector: "vxform-group",
                template: `
    <vxform-field *ngFor="let f of field.fieldGroup" [field]="f"></vxform-field>
    <ng-content></ng-content>
  `,
                host: {
                    "[class]": 'field.fieldGroupClassName || ""'
                }
            }] }
];
if (false) {
    /** @type {?} */
    VXFormGroup.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZXMvdnhmb3JtLmdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFZekMsTUFBTSxPQUFPLFdBQVksU0FBUSxTQUFTO0lBVjFDOztRQVdFLG1CQUFjLEdBQUc7WUFDZixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDO0lBQ0osQ0FBQzs7O1lBZEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsaUNBQWlDO2lCQUM3QzthQUNGOzs7O0lBRUMscUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi9maWVsZC50eXBlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZ3JvdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHZ4Zm9ybS1maWVsZCAqbmdGb3I9XCJsZXQgZiBvZiBmaWVsZC5maWVsZEdyb3VwXCIgW2ZpZWxkXT1cImZcIj48L3Z4Zm9ybS1maWVsZD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW2NsYXNzXVwiOiAnZmllbGQuZmllbGRHcm91cENsYXNzTmFtZSB8fCBcIlwiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUdyb3VwIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGRlZmF1bHRWYWx1ZToge31cclxuICB9O1xyXG59XHJcbiJdfQ==