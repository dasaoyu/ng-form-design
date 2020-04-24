/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} expression
 * @param {?} argNames
 * @return {?}
 */
export function evalStringExpression(expression, argNames) {
    try {
        if (expression.indexOf("this.field") !== -1) {
        }
        return (/** @type {?} */ (Function.apply(void 0, tslib_1.__spread(argNames, ["return " + expression + ";"]))));
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
        return (/** @type {?} */ (Function.apply(void 0, tslib_1.__spread(argNames, [expression + " = expressionValue;"]))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2V4dGVuc2lvbnMvZmllbGQtZXhwcmVzc2lvbi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFVBQWtCLEVBQUUsUUFBa0I7SUFDekUsSUFBSTtRQUNGLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtTQUM1QztRQUVELE9BQU8sbUJBQUEsUUFBUSxnQ0FBSSxRQUFRLEdBQUUsWUFBVSxVQUFVLE1BQUcsS0FBUSxDQUFDO0tBQzlEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHlCQUF5QixDQUN2QyxVQUFrQixFQUNsQixRQUFrQjtJQUVsQixJQUFJO1FBQ0YsT0FBTyxtQkFBQSxRQUFRLGdDQUFJLFFBQVEsR0FBSyxVQUFVLHdCQUFxQixLQUV0RCxDQUFDO0tBQ1g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7QUFDSCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsVUFBdUMsRUFDdkMsT0FBWSxFQUNaLE1BQWE7SUFFYixJQUFJLFVBQVUsWUFBWSxRQUFRLEVBQUU7UUFDbEMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMxQztTQUFNO1FBQ0wsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBldmFsU3RyaW5nRXhwcmVzc2lvbihleHByZXNzaW9uOiBzdHJpbmcsIGFyZ05hbWVzOiBzdHJpbmdbXSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKFwidGhpcy5maWVsZFwiKSAhPT0gLTEpIHtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oLi4uYXJnTmFtZXMsIGByZXR1cm4gJHtleHByZXNzaW9ufTtgKSBhcyBhbnk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxFeHByZXNzaW9uVmFsdWVTZXR0ZXIoXHJcbiAgZXhwcmVzc2lvbjogc3RyaW5nLFxyXG4gIGFyZ05hbWVzOiBzdHJpbmdbXVxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uKC4uLmFyZ05hbWVzLCBgJHtleHByZXNzaW9ufSA9IGV4cHJlc3Npb25WYWx1ZTtgKSBhcyAoXHJcbiAgICAgIHZhbHVlOiBhbnlcclxuICAgICkgPT4gdm9pZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZhbEV4cHJlc3Npb24oXHJcbiAgZXhwcmVzc2lvbjogc3RyaW5nIHwgRnVuY3Rpb24gfCBib29sZWFuLFxyXG4gIHRoaXNBcmc6IGFueSxcclxuICBhcmdWYWw6IGFueVtdXHJcbik6IGFueSB7XHJcbiAgaWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIGV4cHJlc3Npb24uYXBwbHkodGhpc0FyZywgYXJnVmFsKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGV4cHJlc3Npb24gPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==