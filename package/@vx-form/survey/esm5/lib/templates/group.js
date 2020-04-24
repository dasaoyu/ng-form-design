/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
var VXFormFieldGroup = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldGroup, _super);
    function VXFormFieldGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VXFormFieldGroup.decorators = [
        { type: Component, args: [{
                    selector: "group",
                    template: "\n    <vxform-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></vxform-field>\n    <ng-content></ng-content>\n  ",
                    host: {
                        "[class]": 'field.className || ""',
                        cdkDrag: ""
                    }
                }] }
    ];
    return VXFormFieldGroup;
}(FieldType));
export { VXFormFieldGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFDO0lBV3NDLDRDQUFTO0lBWC9DOztJQVdpRCxDQUFDOztnQkFYakQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsMkhBR1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSx1QkFBdUI7d0JBQ2xDLE9BQU8sRUFBRSxFQUFFO3FCQUNaO2lCQUNGOztJQUNnRCx1QkFBQztDQUFBLEFBWGxELENBV3NDLFNBQVMsR0FBRztTQUFyQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIENka0RyYWdEcm9wLFxyXG4gIG1vdmVJdGVtSW5BcnJheSxcclxuICB0cmFuc2ZlckFycmF5SXRlbVxyXG59IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3JvdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHZ4Zm9ybS1maWVsZCAqbmdGb3I9XCJsZXQgZiBvZiBmaWVsZC5maWVsZEdyb3VwXCIgW2ZpZWxkXT1cImZcIj48L3Z4Zm9ybS1maWVsZD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW2NsYXNzXVwiOiAnZmllbGQuY2xhc3NOYW1lIHx8IFwiXCInLFxyXG4gICAgY2RrRHJhZzogXCJcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkR3JvdXAgZXh0ZW5kcyBGaWVsZFR5cGUge31cclxuIl19