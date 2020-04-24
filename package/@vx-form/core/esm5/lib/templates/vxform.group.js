/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "./field.type";
var VXFormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormGroup, _super);
    function VXFormGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            defaultValue: {}
        };
        return _this;
    }
    VXFormGroup.decorators = [
        { type: Component, args: [{
                    selector: "vxform-group",
                    template: "\n    <vxform-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></vxform-field>\n    <ng-content></ng-content>\n  ",
                    host: {
                        "[class]": 'field.fieldGroupClassName || ""'
                    }
                }] }
    ];
    return VXFormGroup;
}(FieldType));
export { VXFormGroup };
if (false) {
    /** @type {?} */
    VXFormGroup.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZXMvdnhmb3JtLmdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDO0lBVWlDLHVDQUFTO0lBVjFDO1FBQUEscUVBY0M7UUFIQyxvQkFBYyxHQUFHO1lBQ2YsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7SUFDSixDQUFDOztnQkFkQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwySEFHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLGlDQUFpQztxQkFDN0M7aUJBQ0Y7O0lBS0Qsa0JBQUM7Q0FBQSxBQWRELENBVWlDLFNBQVMsR0FJekM7U0FKWSxXQUFXOzs7SUFDdEIscUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi9maWVsZC50eXBlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZ3JvdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHZ4Zm9ybS1maWVsZCAqbmdGb3I9XCJsZXQgZiBvZiBmaWVsZC5maWVsZEdyb3VwXCIgW2ZpZWxkXT1cImZcIj48L3Z4Zm9ybS1maWVsZD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW2NsYXNzXVwiOiAnZmllbGQuZmllbGRHcm91cENsYXNzTmFtZSB8fCBcIlwiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUdyb3VwIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGRlZmF1bHRWYWx1ZToge31cclxuICB9O1xyXG59XHJcbiJdfQ==