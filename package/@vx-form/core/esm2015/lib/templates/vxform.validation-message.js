/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { VXFormConfig } from "../services/vxform.config";
import { isObject } from "../utils";
export class VXFormValidationMessage {
    /**
     * @param {?} vxFormConfig
     */
    constructor(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
    }
    /**
     * @return {?}
     */
    get errorMessage() {
        /** @type {?} */
        const fieldForm = this.field.formControl;
        for (let error in fieldForm.errors) {
            if (fieldForm.errors.hasOwnProperty(error)) {
                /** @type {?} */
                let message = this.vxFormConfig.getValidatorMessage(error);
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
    }
}
VXFormValidationMessage.decorators = [
    { type: Component, args: [{
                selector: "vxform-validation-message",
                template: `
    {{ errorMessage }}
  `
            }] }
];
/** @nocollapse */
VXFormValidationMessage.ctorParameters = () => [
    { type: VXFormConfig }
];
VXFormValidationMessage.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXFormValidationMessage.prototype.field;
    /**
     * @type {?}
     * @private
     */
    VXFormValidationMessage.prototype.vxFormConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLnZhbGlkYXRpb24tbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL3Z4Zm9ybS52YWxpZGF0aW9uLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBUXBDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7O0lBRWxELElBQUksWUFBWTs7Y0FDUixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hDLEtBQUssSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDdEMsT0FBTyxHQUFzQixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUNwRSxLQUFLLENBQ047Z0JBRUQsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNyQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFO3dCQUNyQyxPQUFPO3FCQUNSO29CQUVELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7d0JBQ25DLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztxQkFDM0M7aUJBQ0Y7Z0JBRUQsSUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVE7b0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFDckM7b0JBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakQ7Z0JBRUQsSUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUNwQztvQkFDQSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO2lCQUNoRDtnQkFFRCxJQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZTtvQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO29CQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQ3pDO29CQUNBLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQ3JEO2dCQUVELElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNqQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckQ7Z0JBRUQsT0FBTyxPQUFPLENBQUM7YUFDaEI7U0FDRjtJQUNILENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFUUSxZQUFZOzs7b0JBV2xCLEtBQUs7Ozs7SUFBTix3Q0FBa0M7Ozs7O0lBRXRCLCtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1Db25maWcgfSBmcm9tIFwiLi4vc2VydmljZXMvdnhmb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS12YWxpZGF0aW9uLW1lc3NhZ2VcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAge3sgZXJyb3JNZXNzYWdlIH19XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtVmFsaWRhdGlvbk1lc3NhZ2Uge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2eEZvcm1Db25maWc6IFZYRm9ybUNvbmZpZykge31cclxuXHJcbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZmllbGRGb3JtID0gdGhpcy5maWVsZC5mb3JtQ29udHJvbDtcclxuICAgIGZvciAobGV0IGVycm9yIGluIGZpZWxkRm9ybS5lcnJvcnMpIHtcclxuICAgICAgaWYgKGZpZWxkRm9ybS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IEZ1bmN0aW9uID0gdGhpcy52eEZvcm1Db25maWcuZ2V0VmFsaWRhdG9yTWVzc2FnZShcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdKSkge1xyXG4gICAgICAgICAgaWYgKGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLmVycm9yUGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLm1lc3NhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb24gJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbi5tZXNzYWdlcyAmJlxyXG4gICAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1lc3NhZ2VzW2Vycm9yXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZmllbGQudmFsaWRhdGlvbi5tZXNzYWdlc1tlcnJvcl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRvcnMgJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9yc1tlcnJvcl0gJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdG9yc1tlcnJvcl0ubWVzc2FnZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZmllbGQudmFsaWRhdG9yc1tlcnJvcl0ubWVzc2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzICYmXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLmFzeW5jVmFsaWRhdG9yc1tlcnJvcl0gJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzW2Vycm9yXS5tZXNzYWdlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtZXNzYWdlID0gdGhpcy5maWVsZC5hc3luY1ZhbGlkYXRvcnNbZXJyb3JdLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2UoZmllbGRGb3JtLmVycm9yc1tlcnJvcl0sIHRoaXMuZmllbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19