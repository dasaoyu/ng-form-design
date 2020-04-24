/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} expression
 * @param {?} argNames
 * @return {?}
 */
export function evalStringExpression(expression, argNames) {
    try {
        if (expression.indexOf("this.field") !== -1) {
        }
        return (/** @type {?} */ (Function(...argNames, `return ${expression};`)));
    }
    catch (error) {
        console.error(error);
    }
}
/**
 * @param {?} expression
 * @param {?} argNames
 * @return {?}
 */
export function evalExpressionValueSetter(expression, argNames) {
    try {
        return (/** @type {?} */ (Function(...argNames, `${expression} = expressionValue;`)));
    }
    catch (error) {
        console.error(error);
    }
}
/**
 * @param {?} expression
 * @param {?} thisArg
 * @param {?} argVal
 * @return {?}
 */
export function evalExpression(expression, thisArg, argVal) {
    if (expression instanceof Function) {
        return expression.apply(thisArg, argVal);
    }
    else {
        return expression ? true : false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2V4dGVuc2lvbnMvZmllbGQtZXhwcmVzc2lvbi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsVUFBa0IsRUFBRSxRQUFrQjtJQUN6RSxJQUFJO1FBQ0YsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1NBQzVDO1FBRUQsT0FBTyxtQkFBQSxRQUFRLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxVQUFVLEdBQUcsQ0FBQyxFQUFPLENBQUM7S0FDOUQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQ3ZDLFVBQWtCLEVBQ2xCLFFBQWtCO0lBRWxCLElBQUk7UUFDRixPQUFPLG1CQUFBLFFBQVEsQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLFVBQVUscUJBQXFCLENBQUMsRUFFdkQsQ0FBQztLQUNYO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLFVBQXVDLEVBQ3ZDLE9BQVksRUFDWixNQUFhO0lBRWIsSUFBSSxVQUFVLFlBQVksUUFBUSxFQUFFO1FBQ2xDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDMUM7U0FBTTtRQUNMLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUNsQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXZhbFN0cmluZ0V4cHJlc3Npb24oZXhwcmVzc2lvbjogc3RyaW5nLCBhcmdOYW1lczogc3RyaW5nW10pIHtcclxuICB0cnkge1xyXG4gICAgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcInRoaXMuZmllbGRcIikgIT09IC0xKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEZ1bmN0aW9uKC4uLmFyZ05hbWVzLCBgcmV0dXJuICR7ZXhwcmVzc2lvbn07YCkgYXMgYW55O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmFsRXhwcmVzc2lvblZhbHVlU2V0dGVyKFxyXG4gIGV4cHJlc3Npb246IHN0cmluZyxcclxuICBhcmdOYW1lczogc3RyaW5nW11cclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBGdW5jdGlvbiguLi5hcmdOYW1lcywgYCR7ZXhwcmVzc2lvbn0gPSBleHByZXNzaW9uVmFsdWU7YCkgYXMgKFxyXG4gICAgICB2YWx1ZTogYW55XHJcbiAgICApID0+IHZvaWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxFeHByZXNzaW9uKFxyXG4gIGV4cHJlc3Npb246IHN0cmluZyB8IEZ1bmN0aW9uIHwgYm9vbGVhbixcclxuICB0aGlzQXJnOiBhbnksXHJcbiAgYXJnVmFsOiBhbnlbXVxyXG4pOiBhbnkge1xyXG4gIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgIHJldHVybiBleHByZXNzaW9uLmFwcGx5KHRoaXNBcmcsIGFyZ1ZhbCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBleHByZXNzaW9uID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=