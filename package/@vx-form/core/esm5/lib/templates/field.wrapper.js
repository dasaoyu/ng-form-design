/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ViewContainerRef, ViewChild } from "@angular/core";
import { FieldType } from "./field.type";
/**
 * @abstract
 * @template F
 */
var FieldWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(FieldWrapper, _super);
    function FieldWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldWrapper.propDecorators = {
        fieldComponent: [{ type: ViewChild, args: ["fieldComponent", (/** @type {?} */ ({ read: ViewContainerRef, static: false })),] }]
    };
    return FieldWrapper;
}(FieldType));
export { FieldWrapper };
if (false) {
    /** @type {?} */
    FieldWrapper.prototype.fieldComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2ZpZWxkLndyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBR3pDO0lBRVUsd0NBQVk7SUFGdEI7O0lBS0EsQ0FBQzs7aUNBRkUsU0FBUyxTQUFDLGdCQUFnQixFQUFFLG1CQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBQTs7SUFFN0UsbUJBQUM7Q0FBQSxBQUxELENBRVUsU0FBUyxHQUdsQjtTQUxxQixZQUFZOzs7SUFHaEMsc0NBQ2lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4vZmllbGQudHlwZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZFdyYXBwZXI8XHJcbiAgRiBleHRlbmRzIFZYRm9ybUZpZWxkQ29uZmlnID0gVlhGb3JtRmllbGRDb25maWdcclxuPiBleHRlbmRzIEZpZWxkVHlwZTxGPiB7XHJcbiAgQFZpZXdDaGlsZChcImZpZWxkQ29tcG9uZW50XCIsIDxhbnk+eyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgZmllbGRDb21wb25lbnQ6IFZpZXdDb250YWluZXJSZWY7XHJcbn1cclxuIl19