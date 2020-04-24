/**
 * @fileoverview added by tsickle
 * Generated from: src/services/i18n/i18n.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function VXI18NService() { }
if (false) {
    /**
     * 调用 `use` 触发变更通知
     * @type {?}
     */
    VXI18NService.prototype.change;
    /* Skipping unhandled member: [key: string]: any;*/
    /**
     * 变更语言
     * @param {?} lang 语言代码
     * @param {?=} emit 是否触发 `change`，默认：true
     * @return {?}
     */
    VXI18NService.prototype.use = function (lang, emit) { };
    /**
     * 返回当前语言列表
     * @return {?}
     */
    VXI18NService.prototype.getLangs = function () { };
    /**
     * 翻译
     * - `params` 模板所需要的参数对象
     * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
     * @param {?} key
     * @param {?=} params
     * @param {?=} isSafe
     * @return {?}
     */
    VXI18NService.prototype.fanyi = function (key, params, isSafe) { };
}
/** @type {?} */
export const VX_I18N_TOKEN = new InjectionToken('vxTranslatorToken', {
    providedIn: 'root',
    factory: VX_I18N_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
export function VX_I18N_TOKEN_FACTORY() {
    return new VXI18NServiceFake();
}
export class VXI18NServiceFake {
    constructor() {
        this.change$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get change() {
        return (/** @type {?} */ (this.change$.asObservable().pipe(filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w != null)))));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        this.change$.next(lang);
    }
    /**
     * @return {?}
     */
    getLangs() {
        return [];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    fanyi(key) {
        return key;
    }
}
VXI18NServiceFake.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ VXI18NServiceFake.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXI18NServiceFake_Factory() { return new VXI18NServiceFake(); }, token: VXI18NServiceFake, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXI18NServiceFake.prototype.change$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFeEMsbUNBMEJDOzs7Ozs7SUFwQkMsK0JBQW9DOzs7Ozs7OztJQU9wQyx3REFBd0M7Ozs7O0lBS3hDLG1EQUFrQjs7Ozs7Ozs7OztJQU9sQixtRUFBMEQ7OztBQUc1RCxNQUFNLE9BQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFnQixtQkFBbUIsRUFBRTtJQUNsRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUscUJBQXFCO0lBQ25DLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFHRCxNQUFNLE9BQU8saUJBQWlCO0lBRDlCO1FBRVUsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFnQixJQUFJLENBQUMsQ0FBQztLQWlCNUQ7Ozs7SUFmQyxJQUFJLE1BQU07UUFDUixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUMsQ0FBQyxFQUFzQixDQUFDO0lBQ3hGLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBVztRQUNmLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBRWhDLG9DQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZYSTE4TlNlcnZpY2Uge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICog6LCD55SoIGB1c2VgIOinpuWPkeWPmOabtOmAmuefpVxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiDlj5jmm7Tor63oqIBcclxuICAgKiBAcGFyYW0gbGFuZyDor63oqIDku6PnoIFcclxuICAgKiBAcGFyYW0gZW1pdCDmmK/lkKbop6blj5EgYGNoYW5nZWDvvIzpu5jorqTvvJp0cnVlXHJcbiAgICovXHJcbiAgdXNlKGxhbmc6IHN0cmluZywgZW1pdD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiDov5Tlm57lvZPliY3or63oqIDliJfooahcclxuICAgKi9cclxuICBnZXRMYW5ncygpOiBhbnlbXTtcclxuXHJcbiAgLyoqXHJcbiAgICog57+76K+RXHJcbiAgICogLSBgcGFyYW1zYCDmqKHmnb/miYDpnIDopoHnmoTlj4LmlbDlr7nosaFcclxuICAgKiAtIGBpc1NhZmVgIOaYr+WQpui/lOWbnuWuieWFqOWtl+espu+8jOiHquWKqOiwg+eUqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgXHJcbiAgICovXHJcbiAgZmFueWkoa2V5OiBzdHJpbmcsIHBhcmFtcz86IHt9LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVlhfSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxWWEkxOE5TZXJ2aWNlPigndnhUcmFuc2xhdG9yVG9rZW4nLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6IFZYX0kxOE5fVE9LRU5fRkFDVE9SWSxcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlhfSTE4Tl9UT0tFTl9GQUNUT1JZKCkge1xyXG4gIHJldHVybiBuZXcgVlhJMThOU2VydmljZUZha2UoKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFZYSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgVlhJMThOU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpIGFzIE9ic2VydmFibGU8c3RyaW5nPjtcclxuICB9XHJcblxyXG4gIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxhbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFuZ3MoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBrZXk7XHJcbiAgfVxyXG59XHJcbiJdfQ==