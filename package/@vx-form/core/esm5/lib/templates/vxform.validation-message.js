/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { VXFormConfig } from "../services/vxform.config";
import { isObject } from "../utils";
var VXFormValidationMessage = /** @class */ (function () {
    function VXFormValidationMessage(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
    }
    Object.defineProperty(VXFormValidationMessage.prototype, "errorMessage", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fieldForm = this.field.formControl;
            for (var error in fieldForm.errors) {
                if (fieldForm.errors.hasOwnProperty(error)) {
                    /** @type {?} */
                    var message = this.vxFormConfig.getValidatorMessage(error);
                    if (isObject(fieldForm.errors[error])) {
                        if (fieldForm.errors[error].errorPath) {
                            return;
                        }
                        if (fieldForm.errors[error].message) {
                            message = fieldForm.errors[error].message;
                        }
                    }
                    if (this.field.validation &&
                        this.field.validation.messages &&
                        this.field.validation.messages[error]) {
                        message = this.field.validation.messages[error];
                    }
                    if (this.field.validators &&
                        this.field.validators[error] &&
                        this.field.validators[error].message) {
                        message = this.field.validators[error].message;
                    }
                    if (this.field.asyncValidators &&
                        this.field.asyncValidators[error] &&
                        this.field.asyncValidators[error].message) {
                        message = this.field.asyncValidators[error].message;
                    }
                    if (typeof message === "function") {
                        return message(fieldForm.errors[error], this.field);
                    }
                    return message;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    VXFormValidationMessage.decorators = [
        { type: Component, args: [{
                    selector: "vxform-validation-message",
                    template: "\n    {{ errorMessage }}\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormValidationMessage.ctorParameters = function () { return [
        { type: VXFormConfig }
    ]; };
    VXFormValidationMessage.propDecorators = {
        field: [{ type: Input }]
    };
    return VXFormValidationMessage;
}());
export { VXFormValidationMessage };
if (false) {
    /** @type {?} */
    VXFormValidationMessage.prototype.field;
    /**
     * @type {?}
     * @private
     */
    VXFormValidationMessage.prototype.vxFormConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLnZhbGlkYXRpb24tbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL3Z4Zm9ybS52YWxpZGF0aW9uLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDO0lBU0UsaUNBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCxzQkFBSSxpREFBWTs7OztRQUFoQjs7Z0JBQ1EsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QyxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7O3dCQUN0QyxPQUFPLEdBQXNCLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQ3BFLEtBQUssQ0FDTjtvQkFFRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ3JDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUU7NEJBQ3JDLE9BQU87eUJBQ1I7d0JBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTs0QkFDbkMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO3lCQUMzQztxQkFDRjtvQkFFRCxJQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTt3QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTt3QkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUNyQzt3QkFDQSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNqRDtvQkFFRCxJQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTt3QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQ3BDO3dCQUNBLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7cUJBQ2hEO29CQUVELElBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO3dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFDekM7d0JBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztxQkFDckQ7b0JBRUQsSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7d0JBQ2pDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNyRDtvQkFFRCxPQUFPLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtRQUNILENBQUM7OztPQUFBOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSw4QkFFVDtpQkFDRjs7OztnQkFUUSxZQUFZOzs7d0JBV2xCLEtBQUs7O0lBc0RSLDhCQUFDO0NBQUEsQUE3REQsSUE2REM7U0F2RFksdUJBQXVCOzs7SUFDbEMsd0NBQWtDOzs7OztJQUV0QiwrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQ29uZmlnIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Z4Zm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tdmFsaWRhdGlvbi1tZXNzYWdlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIHt7IGVycm9yTWVzc2FnZSB9fVxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybVZhbGlkYXRpb25NZXNzYWdlIHtcclxuICBASW5wdXQoKSBmaWVsZDogVlhGb3JtRmllbGRDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdnhGb3JtQ29uZmlnOiBWWEZvcm1Db25maWcpIHt9XHJcblxyXG4gIGdldCBlcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZpZWxkRm9ybSA9IHRoaXMuZmllbGQuZm9ybUNvbnRyb2w7XHJcbiAgICBmb3IgKGxldCBlcnJvciBpbiBmaWVsZEZvcm0uZXJyb3JzKSB7XHJcbiAgICAgIGlmIChmaWVsZEZvcm0uZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xyXG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCBGdW5jdGlvbiA9IHRoaXMudnhGb3JtQ29uZmlnLmdldFZhbGlkYXRvck1lc3NhZ2UoXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChpc09iamVjdChmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXSkpIHtcclxuICAgICAgICAgIGlmIChmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXS5lcnJvclBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXS5tZXNzYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uICYmXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWVzc2FnZXMgJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbi5tZXNzYWdlc1tlcnJvcl1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWVzc2FnZXNbZXJyb3JdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0b3JzICYmXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnNbZXJyb3JdICYmXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnNbZXJyb3JdLm1lc3NhZ2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmZpZWxkLnZhbGlkYXRvcnNbZXJyb3JdLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLmFzeW5jVmFsaWRhdG9ycyAmJlxyXG4gICAgICAgICAgdGhpcy5maWVsZC5hc3luY1ZhbGlkYXRvcnNbZXJyb3JdICYmXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLmFzeW5jVmFsaWRhdG9yc1tlcnJvcl0ubWVzc2FnZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzW2Vycm9yXS5tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlKGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLCB0aGlzLmZpZWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==