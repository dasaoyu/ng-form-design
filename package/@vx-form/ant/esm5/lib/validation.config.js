/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from "lodash";
/**
 * @param {?} field
 * @param {?} key
 * @return {?}
 */
export function getFieldPro(field, key) {
    return _.get(field, "templateOptions." + key + "");
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function requiredValidationMessage(err, field) {
    return getFieldPro(field, "label") + "\u4E0D\u80FD\u4E3A\u7A7A";
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function minlengthValidationMessage(err, field) {
    return getFieldPro(field, "label") + "\u6700\u5C0F\u957F\u5EA6\u4E3A" + getFieldPro(field, "minLength");
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function maxlengthValidationMessage(err, field) {
    return getFieldPro(field, "label") + "\u6700\u5927\u957F\u5EA6\u4E3A" + getFieldPro(field, "maxLength");
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function minValidationMessage(err, field) {
    return getFieldPro(field, "label") + "\u6700\u5C0F\u503C\u4E3A" + getFieldPro(field, "min");
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function maxValidationMessage(err, field) {
    return getFieldPro(field, "label") + "\u6700\u5927\u503C\u4E3A" + getFieldPro(field, "max");
}
/** @type {?} */
export var validationConfig = {
    validationMessages: [
        { name: "required", message: requiredValidationMessage },
        { name: "null", message: "不能为NULL" },
        { name: "minlength", message: minlengthValidationMessage },
        { name: "maxlength", message: maxlengthValidationMessage },
        { name: "min", message: minValidationMessage },
        { name: "max", message: maxValidationMessage },
        { name: "multipleOf", message: "ssss" },
        { name: "exclusiveMinimum", message: "ssss" },
        { name: "exclusiveMaximum", message: "ssss" },
        { name: "minItems", message: "ssss" },
        { name: "maxItems", message: "ssss" },
        { name: "uniqueItems", message: "should NOT have duplicate items" },
        { name: "const", message: "ssss" },
        { name: "pattern", message: "不满足这则表达式" }
    ],
    types: [
        // { name: "string", extends: "input" },
        // {
        //   name: "number",
        //   extends: "input",
        //   defaultOptions: {
        //     templateOptions: {
        //       type: "number"
        //     }
        //   }
        // },
        // {
        //   name: "integer",
        //   extends: "input",
        //   defaultOptions: {
        //     templateOptions: {
        //       type: "number"
        //     }
        //   }
        // },
        // { name: "boolean", extends: "checkbox" },
        // { name: "enum", extends: "select" },
        { name: "array", extends: "array" },
        { name: "object", extends: "object" }
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFDNUIsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUF3QixFQUFFLEdBQVc7SUFDL0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQzs7Ozs7O0FBQ0QsTUFBTSxVQUFVLHlCQUF5QixDQUFDLEdBQVEsRUFBRSxLQUF3QjtJQUMxRSxPQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLDZCQUFNLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBQ0QsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEdBQVEsRUFBRSxLQUF3QjtJQUMzRSxPQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLHNDQUFRLFdBQVcsQ0FDdEQsS0FBSyxFQUNMLFdBQVcsQ0FDVixDQUFDO0FBQ04sQ0FBQzs7Ozs7O0FBQ0QsTUFBTSxVQUFVLDBCQUEwQixDQUFDLEdBQVEsRUFBRSxLQUF3QjtJQUMzRSxPQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLHNDQUFRLFdBQVcsQ0FDdEQsS0FBSyxFQUNMLFdBQVcsQ0FDVixDQUFDO0FBQ04sQ0FBQzs7Ozs7O0FBQ0QsTUFBTSxVQUFVLG9CQUFvQixDQUFDLEdBQVEsRUFBRSxLQUF3QjtJQUNyRSxPQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGdDQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFHLENBQUM7QUFDMUUsQ0FBQzs7Ozs7O0FBQ0QsTUFBTSxVQUFVLG9CQUFvQixDQUFDLEdBQVEsRUFBRSxLQUF3QjtJQUNyRSxPQUFVLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGdDQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFHLENBQUM7QUFDMUUsQ0FBQzs7QUFFRCxNQUFNLEtBQUssZ0JBQWdCLEdBQUc7SUFDNUIsa0JBQWtCLEVBQUU7UUFDbEIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRTtRQUN4RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtRQUNwQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFO1FBQzFELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUU7UUFDMUQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRTtRQUM5QyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFO1FBQzlDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1FBQ3ZDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtRQUM3QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtRQUNyQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtRQUNyQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFO1FBQ25FLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1FBQ2xDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO0tBQ3pDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsd0NBQXdDO1FBQ3hDLElBQUk7UUFDSixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLFFBQVE7UUFDUixNQUFNO1FBQ04sS0FBSztRQUNMLDRDQUE0QztRQUM1Qyx1Q0FBdUM7UUFDdEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDbkMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7S0FDdkM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWVsZFBybyhmaWVsZDogVlhGb3JtRmllbGRDb25maWcsIGtleTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIF8uZ2V0KGZpZWxkLCBcInRlbXBsYXRlT3B0aW9ucy5cIiArIGtleSArIFwiXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlKGVycjogYW55LCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICByZXR1cm4gYCR7Z2V0RmllbGRQcm8oZmllbGQsIFwibGFiZWxcIil95LiN6IO95Li656m6YDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWlubGVuZ3RoVmFsaWRhdGlvbk1lc3NhZ2UoZXJyOiBhbnksIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gIHJldHVybiBgJHtnZXRGaWVsZFBybyhmaWVsZCwgXCJsYWJlbFwiKX3mnIDlsI/plb/luqbkuLoke2dldEZpZWxkUHJvKFxyXG4gICAgZmllbGQsXHJcbiAgICBcIm1pbkxlbmd0aFwiXHJcbiAgKX1gO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXhsZW5ndGhWYWxpZGF0aW9uTWVzc2FnZShlcnI6IGFueSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgcmV0dXJuIGAke2dldEZpZWxkUHJvKGZpZWxkLCBcImxhYmVsXCIpfeacgOWkp+mVv+W6puS4uiR7Z2V0RmllbGRQcm8oXHJcbiAgICBmaWVsZCxcclxuICAgIFwibWF4TGVuZ3RoXCJcclxuICApfWA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1pblZhbGlkYXRpb25NZXNzYWdlKGVycjogYW55LCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICByZXR1cm4gYCR7Z2V0RmllbGRQcm8oZmllbGQsIFwibGFiZWxcIil95pyA5bCP5YC85Li6JHtnZXRGaWVsZFBybyhmaWVsZCwgXCJtaW5cIil9YDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWF4VmFsaWRhdGlvbk1lc3NhZ2UoZXJyOiBhbnksIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gIHJldHVybiBgJHtnZXRGaWVsZFBybyhmaWVsZCwgXCJsYWJlbFwiKX3mnIDlpKflgLzkuLoke2dldEZpZWxkUHJvKGZpZWxkLCBcIm1heFwiKX1gO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IHZhbGlkYXRpb25Db25maWcgPSB7XHJcbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBbXHJcbiAgICB7IG5hbWU6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSB9LFxyXG4gICAgeyBuYW1lOiBcIm51bGxcIiwgbWVzc2FnZTogXCLkuI3og73kuLpOVUxMXCIgfSxcclxuICAgIHsgbmFtZTogXCJtaW5sZW5ndGhcIiwgbWVzc2FnZTogbWlubGVuZ3RoVmFsaWRhdGlvbk1lc3NhZ2UgfSxcclxuICAgIHsgbmFtZTogXCJtYXhsZW5ndGhcIiwgbWVzc2FnZTogbWF4bGVuZ3RoVmFsaWRhdGlvbk1lc3NhZ2UgfSxcclxuICAgIHsgbmFtZTogXCJtaW5cIiwgbWVzc2FnZTogbWluVmFsaWRhdGlvbk1lc3NhZ2UgfSxcclxuICAgIHsgbmFtZTogXCJtYXhcIiwgbWVzc2FnZTogbWF4VmFsaWRhdGlvbk1lc3NhZ2UgfSxcclxuICAgIHsgbmFtZTogXCJtdWx0aXBsZU9mXCIsIG1lc3NhZ2U6IFwic3Nzc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiZXhjbHVzaXZlTWluaW11bVwiLCBtZXNzYWdlOiBcInNzc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcImV4Y2x1c2l2ZU1heGltdW1cIiwgbWVzc2FnZTogXCJzc3NzXCIgfSxcclxuICAgIHsgbmFtZTogXCJtaW5JdGVtc1wiLCBtZXNzYWdlOiBcInNzc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIm1heEl0ZW1zXCIsIG1lc3NhZ2U6IFwic3Nzc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwidW5pcXVlSXRlbXNcIiwgbWVzc2FnZTogXCJzaG91bGQgTk9UIGhhdmUgZHVwbGljYXRlIGl0ZW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJjb25zdFwiLCBtZXNzYWdlOiBcInNzc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcInBhdHRlcm5cIiwgbWVzc2FnZTogXCLkuI3mu6HotrPov5nliJnooajovr7lvI9cIiB9XHJcbiAgXSxcclxuICB0eXBlczogW1xyXG4gICAgLy8geyBuYW1lOiBcInN0cmluZ1wiLCBleHRlbmRzOiBcImlucHV0XCIgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgbmFtZTogXCJudW1iZXJcIixcclxuICAgIC8vICAgZXh0ZW5kczogXCJpbnB1dFwiLFxyXG4gICAgLy8gICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJudW1iZXJcIlxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgbmFtZTogXCJpbnRlZ2VyXCIsXHJcbiAgICAvLyAgIGV4dGVuZHM6IFwiaW5wdXRcIixcclxuICAgIC8vICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgIC8vICAgICAgIHR5cGU6IFwibnVtYmVyXCJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgICAvLyB7IG5hbWU6IFwiYm9vbGVhblwiLCBleHRlbmRzOiBcImNoZWNrYm94XCIgfSxcclxuICAgIC8vIHsgbmFtZTogXCJlbnVtXCIsIGV4dGVuZHM6IFwic2VsZWN0XCIgfSxcclxuICAgICB7IG5hbWU6IFwiYXJyYXlcIiwgZXh0ZW5kczogXCJhcnJheVwiIH0sXHJcbiAgICAgeyBuYW1lOiBcIm9iamVjdFwiLCBleHRlbmRzOiBcIm9iamVjdFwiIH1cclxuICBdXHJcbn07XHJcbiJdfQ==