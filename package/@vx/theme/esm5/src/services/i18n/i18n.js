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
export var VX_I18N_TOKEN = new InjectionToken('vxTranslatorToken', {
    providedIn: 'root',
    factory: VX_I18N_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
export function VX_I18N_TOKEN_FACTORY() {
    return new VXI18NServiceFake();
}
var VXI18NServiceFake = /** @class */ (function () {
    function VXI18NServiceFake() {
        this.change$ = new BehaviorSubject(null);
    }
    Object.defineProperty(VXI18NServiceFake.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.change$.asObservable().pipe(filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w != null; })))));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    VXI18NServiceFake.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.change$.next(lang);
    };
    /**
     * @return {?}
     */
    VXI18NServiceFake.prototype.getLangs = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    VXI18NServiceFake.prototype.fanyi = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key;
    };
    VXI18NServiceFake.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ VXI18NServiceFake.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXI18NServiceFake_Factory() { return new VXI18NServiceFake(); }, token: VXI18NServiceFake, providedIn: "root" });
    return VXI18NServiceFake;
}());
export { VXI18NServiceFake };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXI18NServiceFake.prototype.change$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFeEMsbUNBMEJDOzs7Ozs7SUFwQkMsK0JBQW9DOzs7Ozs7OztJQU9wQyx3REFBd0M7Ozs7O0lBS3hDLG1EQUFrQjs7Ozs7Ozs7OztJQU9sQixtRUFBMEQ7OztBQUc1RCxNQUFNLEtBQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFnQixtQkFBbUIsRUFBRTtJQUNsRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUscUJBQXFCO0lBQ25DLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFFRDtJQUFBO1FBRVUsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFnQixJQUFJLENBQUMsQ0FBQztLQWlCNUQ7SUFmQyxzQkFBSSxxQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsRUFBQyxDQUFDLEVBQXNCLENBQUM7UUFDeEYsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsK0JBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVELGlDQUFLOzs7O0lBQUwsVUFBTSxHQUFXO1FBQ2YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzRCQXpDbEM7Q0E0REMsQUFuQkQsSUFtQkM7U0FsQlksaUJBQWlCOzs7Ozs7SUFDNUIsb0NBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVlhJMThOU2VydmljZSB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiDosIPnlKggYHVzZWAg6Kem5Y+R5Y+Y5pu06YCa55+lXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgY2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIOWPmOabtOivreiogFxyXG4gICAqIEBwYXJhbSBsYW5nIOivreiogOS7o+eggVxyXG4gICAqIEBwYXJhbSBlbWl0IOaYr+WQpuinpuWPkSBgY2hhbmdlYO+8jOm7mOiupO+8mnRydWVcclxuICAgKi9cclxuICB1c2UobGFuZzogc3RyaW5nLCBlbWl0PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIOi/lOWbnuW9k+WJjeivreiogOWIl+ihqFxyXG4gICAqL1xyXG4gIGdldExhbmdzKCk6IGFueVtdO1xyXG5cclxuICAvKipcclxuICAgKiDnv7vor5FcclxuICAgKiAtIGBwYXJhbXNgIOaooeadv+aJgOmcgOimgeeahOWPguaVsOWvueixoVxyXG4gICAqIC0gYGlzU2FmZWAg5piv5ZCm6L+U5Zue5a6J5YWo5a2X56ym77yM6Ieq5Yqo6LCD55SoIGBieXBhc3NTZWN1cml0eVRydXN0SHRtbGBcclxuICAgKi9cclxuICBmYW55aShrZXk6IHN0cmluZywgcGFyYW1zPzoge30sIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWWF9JMThOX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFZYSTE4TlNlcnZpY2U+KCd2eFRyYW5zbGF0b3JUb2tlbicsIHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgZmFjdG9yeTogVlhfSTE4Tl9UT0tFTl9GQUNUT1JZLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWWF9JMThOX1RPS0VOX0ZBQ1RPUlkoKSB7XHJcbiAgcmV0dXJuIG5ldyBWWEkxOE5TZXJ2aWNlRmFrZSgpO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVlhJMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBWWEkxOE5TZXJ2aWNlIHtcclxuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSkgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gIH1cclxuXHJcbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5ncygpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBmYW55aShrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGtleTtcclxuICB9XHJcbn1cclxuIl19