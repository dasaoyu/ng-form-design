/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { VXToFormFieldService } from "./formFieldService";
export class VXAntCommonService {
    /**
     * @param {?} toFormField
     */
    constructor(toFormField) {
        this.toFormField = toFormField;
        this.findFieldConfig = {};
    }
    //根据Guid获取Field
    /**
     * @param {?} formFieldConfig
     * @param {?} guid
     * @return {?}
     */
    getFormFieldByGuid(formFieldConfig, guid) {
        if (formFieldConfig.length) {
            formFieldConfig.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
                if (item.guid === guid) {
                    this.findFieldConfig = item;
                }
                if (item.type === "repeat") {
                    if (item.fieldArray &&
                        item.fieldArray &&
                        item.fieldArray.fieldGroup &&
                        item.fieldArray.fieldGroup.length > 0) {
                        this.getFormFieldByGuid(item.fieldArray.fieldGroup, guid);
                    }
                }
            }));
        }
        return this.findFieldConfig;
    }
}
VXAntCommonService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXAntCommonService.ctorParameters = () => [
    { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jb21tb25TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFHN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJMUQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUVVLFdBQWlDO1FBQWpDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUduQyxvQkFBZSxHQUFRLEVBQUUsQ0FBQztJQUYvQixDQUFDOzs7Ozs7O0lBSUosa0JBQWtCLENBQUMsZUFBb0MsRUFBRSxJQUFZO1FBQ25FLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUMxQixlQUFlLENBQUMsT0FBTzs7Ozs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDMUIsSUFDRSxJQUFJLENBQUMsVUFBVTt3QkFDZixJQUFJLENBQUMsVUFBVTt3QkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7d0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JDO3dCQUNBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDM0Q7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7OztZQTVCRixVQUFVOzs7O1lBSEYsb0JBQW9CLHVCQU14QixNQUFNLFNBQUMsb0JBQW9COzs7Ozs7O0lBSTlCLDZDQUFrQzs7Ozs7SUFKaEMseUNBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWFRhYmxlRmllbGRDb25maWcsIFZYRm9ybUZpZWxkQ29uZmlnLCBjbG9uZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVCdXNpbmVzcyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgVlhUb0Zvcm1GaWVsZFNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtRmllbGRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1pbiB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhBbnRDb21tb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoVlhUb0Zvcm1GaWVsZFNlcnZpY2UpXHJcbiAgICBwcml2YXRlIHRvRm9ybUZpZWxkOiBWWFRvRm9ybUZpZWxkU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBmaW5kRmllbGRDb25maWc6IGFueSA9IHt9O1xyXG4gIC8v5qC55o2uR3VpZOiOt+WPlkZpZWxkXHJcbiAgZ2V0Rm9ybUZpZWxkQnlHdWlkKGZvcm1GaWVsZENvbmZpZzogVlhGb3JtRmllbGRDb25maWdbXSwgZ3VpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoZm9ybUZpZWxkQ29uZmlnLmxlbmd0aCkge1xyXG4gICAgICBmb3JtRmllbGRDb25maWcuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmd1aWQgPT09IGd1aWQpIHtcclxuICAgICAgICAgIHRoaXMuZmluZEZpZWxkQ29uZmlnID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJyZXBlYXRcIikge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpdGVtLmZpZWxkQXJyYXkgJiZcclxuICAgICAgICAgICAgaXRlbS5maWVsZEFycmF5ICYmXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheS5maWVsZEdyb3VwICYmXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheS5maWVsZEdyb3VwLmxlbmd0aCA+IDBcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmdldEZvcm1GaWVsZEJ5R3VpZChpdGVtLmZpZWxkQXJyYXkuZmllbGRHcm91cCwgZ3VpZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmZpbmRGaWVsZENvbmZpZztcclxuICB9XHJcbn1cclxuIl19