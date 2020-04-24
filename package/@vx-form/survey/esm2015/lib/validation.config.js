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
    return `${getFieldPro(field, "label")}不能为空`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function minlengthValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最小长度为${getFieldPro(field, "minLength")}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function maxlengthValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最大长度为${getFieldPro(field, "maxLength")}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function minValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最小值为${getFieldPro(field, "min")}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
export function maxValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最大值为${getFieldPro(field, "max")}`;
}
/** @type {?} */
export let validationConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFDNUIsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUF3QixFQUFFLEdBQVc7SUFDL0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQzs7Ozs7O0FBQ0QsTUFBTSxVQUFVLHlCQUF5QixDQUFDLEdBQVEsRUFBRSxLQUF3QjtJQUMxRSxPQUFPLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzlDLENBQUM7Ozs7OztBQUNELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxHQUFRLEVBQUUsS0FBd0I7SUFDM0UsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsV0FBVyxDQUN0RCxLQUFLLEVBQ0wsV0FBVyxDQUNaLEVBQUUsQ0FBQztBQUNOLENBQUM7Ozs7OztBQUNELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxHQUFRLEVBQUUsS0FBd0I7SUFDM0UsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsV0FBVyxDQUN0RCxLQUFLLEVBQ0wsV0FBVyxDQUNaLEVBQUUsQ0FBQztBQUNOLENBQUM7Ozs7OztBQUNELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxHQUFRLEVBQUUsS0FBd0I7SUFDckUsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFFLENBQUM7Ozs7OztBQUNELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxHQUFRLEVBQUUsS0FBd0I7SUFDckUsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFFLENBQUM7O0FBRUQsTUFBTSxLQUFLLGdCQUFnQixHQUFHO0lBQzVCLGtCQUFrQixFQUFFO1FBQ2xCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUU7UUFDeEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7UUFDcEMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRTtRQUMxRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFO1FBQzFELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUU7UUFDOUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRTtRQUM5QyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtRQUN2QyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1FBQzdDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7UUFDckMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7UUFDckMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRTtRQUNuRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtRQUNsQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtLQUN6QztJQUNELEtBQUssRUFBRTtRQUNMLHdDQUF3QztRQUN4QyxJQUFJO1FBQ0osb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0oscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCw0Q0FBNEM7UUFDNUMsdUNBQXVDO1FBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO1FBQ25DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFO0tBQ3ZDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRQcm8oZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnLCBrZXk6IHN0cmluZykge1xyXG4gIHJldHVybiBfLmdldChmaWVsZCwgXCJ0ZW1wbGF0ZU9wdGlvbnMuXCIgKyBrZXkgKyBcIlwiKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZShlcnI6IGFueSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgcmV0dXJuIGAke2dldEZpZWxkUHJvKGZpZWxkLCBcImxhYmVsXCIpfeS4jeiDveS4uuepumA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbmxlbmd0aFZhbGlkYXRpb25NZXNzYWdlKGVycjogYW55LCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICByZXR1cm4gYCR7Z2V0RmllbGRQcm8oZmllbGQsIFwibGFiZWxcIil95pyA5bCP6ZW/5bqm5Li6JHtnZXRGaWVsZFBybyhcclxuICAgIGZpZWxkLFxyXG4gICAgXCJtaW5MZW5ndGhcIlxyXG4gICl9YDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWF4bGVuZ3RoVmFsaWRhdGlvbk1lc3NhZ2UoZXJyOiBhbnksIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gIHJldHVybiBgJHtnZXRGaWVsZFBybyhmaWVsZCwgXCJsYWJlbFwiKX3mnIDlpKfplb/luqbkuLoke2dldEZpZWxkUHJvKFxyXG4gICAgZmllbGQsXHJcbiAgICBcIm1heExlbmd0aFwiXHJcbiAgKX1gO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtaW5WYWxpZGF0aW9uTWVzc2FnZShlcnI6IGFueSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgcmV0dXJuIGAke2dldEZpZWxkUHJvKGZpZWxkLCBcImxhYmVsXCIpfeacgOWwj+WAvOS4uiR7Z2V0RmllbGRQcm8oZmllbGQsIFwibWluXCIpfWA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1heFZhbGlkYXRpb25NZXNzYWdlKGVycjogYW55LCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICByZXR1cm4gYCR7Z2V0RmllbGRQcm8oZmllbGQsIFwibGFiZWxcIil95pyA5aSn5YC85Li6JHtnZXRGaWVsZFBybyhmaWVsZCwgXCJtYXhcIil9YDtcclxufVxyXG5cclxuZXhwb3J0IGxldCB2YWxpZGF0aW9uQ29uZmlnID0ge1xyXG4gIHZhbGlkYXRpb25NZXNzYWdlczogW1xyXG4gICAgeyBuYW1lOiBcInJlcXVpcmVkXCIsIG1lc3NhZ2U6IHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UgfSxcclxuICAgIHsgbmFtZTogXCJudWxsXCIsIG1lc3NhZ2U6IFwi5LiN6IO95Li6TlVMTFwiIH0sXHJcbiAgICB7IG5hbWU6IFwibWlubGVuZ3RoXCIsIG1lc3NhZ2U6IG1pbmxlbmd0aFZhbGlkYXRpb25NZXNzYWdlIH0sXHJcbiAgICB7IG5hbWU6IFwibWF4bGVuZ3RoXCIsIG1lc3NhZ2U6IG1heGxlbmd0aFZhbGlkYXRpb25NZXNzYWdlIH0sXHJcbiAgICB7IG5hbWU6IFwibWluXCIsIG1lc3NhZ2U6IG1pblZhbGlkYXRpb25NZXNzYWdlIH0sXHJcbiAgICB7IG5hbWU6IFwibWF4XCIsIG1lc3NhZ2U6IG1heFZhbGlkYXRpb25NZXNzYWdlIH0sXHJcbiAgICB7IG5hbWU6IFwibXVsdGlwbGVPZlwiLCBtZXNzYWdlOiBcInNzc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcImV4Y2x1c2l2ZU1pbmltdW1cIiwgbWVzc2FnZTogXCJzc3NzXCIgfSxcclxuICAgIHsgbmFtZTogXCJleGNsdXNpdmVNYXhpbXVtXCIsIG1lc3NhZ2U6IFwic3Nzc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwibWluSXRlbXNcIiwgbWVzc2FnZTogXCJzc3NzXCIgfSxcclxuICAgIHsgbmFtZTogXCJtYXhJdGVtc1wiLCBtZXNzYWdlOiBcInNzc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcInVuaXF1ZUl0ZW1zXCIsIG1lc3NhZ2U6IFwic2hvdWxkIE5PVCBoYXZlIGR1cGxpY2F0ZSBpdGVtc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiY29uc3RcIiwgbWVzc2FnZTogXCJzc3NzXCIgfSxcclxuICAgIHsgbmFtZTogXCJwYXR0ZXJuXCIsIG1lc3NhZ2U6IFwi5LiN5ruh6Laz6L+Z5YiZ6KGo6L6+5byPXCIgfVxyXG4gIF0sXHJcbiAgdHlwZXM6IFtcclxuICAgIC8vIHsgbmFtZTogXCJzdHJpbmdcIiwgZXh0ZW5kczogXCJpbnB1dFwiIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIG5hbWU6IFwibnVtYmVyXCIsXHJcbiAgICAvLyAgIGV4dGVuZHM6IFwiaW5wdXRcIixcclxuICAgIC8vICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgIC8vICAgICAgIHR5cGU6IFwibnVtYmVyXCJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIG5hbWU6IFwiaW50ZWdlclwiLFxyXG4gICAgLy8gICBleHRlbmRzOiBcImlucHV0XCIsXHJcbiAgICAvLyAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcIm51bWJlclwiXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9LFxyXG4gICAgLy8geyBuYW1lOiBcImJvb2xlYW5cIiwgZXh0ZW5kczogXCJjaGVja2JveFwiIH0sXHJcbiAgICAvLyB7IG5hbWU6IFwiZW51bVwiLCBleHRlbmRzOiBcInNlbGVjdFwiIH0sXHJcbiAgICAgeyBuYW1lOiBcImFycmF5XCIsIGV4dGVuZHM6IFwiYXJyYXlcIiB9LFxyXG4gICAgIHsgbmFtZTogXCJvYmplY3RcIiwgZXh0ZW5kczogXCJvYmplY3RcIiB9XHJcbiAgXVxyXG59O1xyXG4iXX0=