/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { VXToFormFieldService } from "./formFieldService";
var VXAntCommonService = /** @class */ (function () {
    function VXAntCommonService(toFormField) {
        this.toFormField = toFormField;
        this.findFieldConfig = {};
    }
    //根据Guid获取Field
    //根据Guid获取Field
    /**
     * @param {?} formFieldConfig
     * @param {?} guid
     * @return {?}
     */
    VXAntCommonService.prototype.getFormFieldByGuid = 
    //根据Guid获取Field
    /**
     * @param {?} formFieldConfig
     * @param {?} guid
     * @return {?}
     */
    function (formFieldConfig, guid) {
        var _this = this;
        if (formFieldConfig.length) {
            formFieldConfig.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            function (item, index, object) {
                if (item.guid === guid) {
                    _this.findFieldConfig = item;
                }
                if (item.type === "repeat") {
                    if (item.fieldArray &&
                        item.fieldArray &&
                        item.fieldArray.fieldGroup &&
                        item.fieldArray.fieldGroup.length > 0) {
                        _this.getFormFieldByGuid(item.fieldArray.fieldGroup, guid);
                    }
                }
            }));
        }
        return this.findFieldConfig;
    };
    VXAntCommonService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXAntCommonService.ctorParameters = function () { return [
        { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
    ]; };
    return VXAntCommonService;
}());
export { VXAntCommonService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXAntCommonService.prototype.findFieldConfig;
    /**
     * @type {?}
     * @private
     */
    VXAntCommonService.prototype.toFormField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jb21tb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFHN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHMUQ7SUFFRSw0QkFFVSxXQUFpQztRQUFqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFHbkMsb0JBQWUsR0FBUSxFQUFFLENBQUM7SUFGL0IsQ0FBQztJQUdKLGVBQWU7Ozs7Ozs7SUFDZiwrQ0FBa0I7Ozs7Ozs7SUFBbEIsVUFBbUIsZUFBb0MsRUFBRSxJQUFZO1FBQXJFLGlCQW1CQztRQWxCQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsZUFBZSxDQUFDLE9BQU87Ozs7OztZQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNO2dCQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN0QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDMUIsSUFDRSxJQUFJLENBQUMsVUFBVTt3QkFDZixJQUFJLENBQUMsVUFBVTt3QkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7d0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDO3dCQUNBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDM0Q7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7O2dCQTVCRixVQUFVOzs7O2dCQUhGLG9CQUFvQix1QkFNeEIsTUFBTSxTQUFDLG9CQUFvQjs7SUEwQmhDLHlCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1Qlksa0JBQWtCOzs7Ozs7SUFNN0IsNkNBQWtDOzs7OztJQUpoQyx5Q0FDeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVGaWVsZENvbmZpZywgVlhGb3JtRmllbGRDb25maWcsIGNsb25lIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhUYWJsZUJ1c2luZXNzIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBWWFRvRm9ybUZpZWxkU2VydmljZSB9IGZyb20gXCIuL2Zvcm1GaWVsZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWluIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWEFudENvbW1vblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChWWFRvRm9ybUZpZWxkU2VydmljZSlcclxuICAgIHByaXZhdGUgdG9Gb3JtRmllbGQ6IFZYVG9Gb3JtRmllbGRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGZpbmRGaWVsZENvbmZpZzogYW55ID0ge307XHJcbiAgLy/moLnmja5HdWlk6I635Y+WRmllbGRcclxuICBnZXRGb3JtRmllbGRCeUd1aWQoZm9ybUZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZ1tdLCBndWlkOiBzdHJpbmcpIHtcclxuICAgIGlmIChmb3JtRmllbGRDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgIGZvcm1GaWVsZENvbmZpZy5mb3JFYWNoKChpdGVtLCBpbmRleCwgb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZ3VpZCA9PT0gZ3VpZCkge1xyXG4gICAgICAgICAgdGhpcy5maW5kRmllbGRDb25maWcgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcInJlcGVhdFwiKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheSAmJlxyXG4gICAgICAgICAgICBpdGVtLmZpZWxkQXJyYXkgJiZcclxuICAgICAgICAgICAgaXRlbS5maWVsZEFycmF5LmZpZWxkR3JvdXAgJiZcclxuICAgICAgICAgICAgaXRlbS5maWVsZEFycmF5LmZpZWxkR3JvdXAubGVuZ3RoID4gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybUZpZWxkQnlHdWlkKGl0ZW0uZmllbGRBcnJheS5maWVsZEdyb3VwLCBndWlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluZEZpZWxkQ29uZmlnO1xyXG4gIH1cclxufVxyXG4iXX0=