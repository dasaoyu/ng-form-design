/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.client.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { VXThemeConfig } from '../../theme.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../theme.config";
/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
var _HttpClient = /** @class */ (function () {
    function _HttpClient(http, cog) {
        this.http = http;
        this._loading = false;
        this.cog = tslib_1.__assign({ nullValueHandling: 'include', dateValueHandling: 'timestamp' }, (/** @type {?} */ (cog)).http);
    }
    Object.defineProperty(_HttpClient.prototype, "loading", {
        /** 是否正在加载中 */
        get: /**
         * 是否正在加载中
         * @return {?}
         */
        function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} params
     * @return {?}
     */
    _HttpClient.prototype.parseParams = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        /** @type {?} */
        var newParams = {};
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var _data = params[key];
            // 忽略空值
            if (_this.cog.nullValueHandling === 'ignore' && _data == null)
                return;
            // 将时间转化为：时间戳 (秒)
            if (_this.cog.dateValueHandling === 'timestamp' && _data instanceof Date) {
                _data = _data.valueOf();
            }
            newParams[key] = _data;
        }));
        return new HttpParams({ fromObject: newParams });
    };
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    _HttpClient.prototype.appliedUrl = /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    function (url, params) {
        if (!params)
            return url;
        url += ~url.indexOf('?') ? '' : '?';
        /** @type {?} */
        var arr = [];
        // tslint:disable-next-line: forin
        for (var key in params) {
            arr.push(key + "=" + params[key]);
        }
        return url + arr.join('&');
    };
    /**
     * @return {?}
     */
    _HttpClient.prototype.begin = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return (_this._loading = true); }), 10);
    };
    /**
     * @return {?}
     */
    _HttpClient.prototype.end = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return (_this._loading = false); }), 10);
    };
    /**
     * GET 请求
     */
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.get = /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, tslib_1.__assign({ params: params }, options));
    };
    /**
     * POST 请求
     */
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.post = /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, tslib_1.__assign({ body: body,
            params: params }, options));
    };
    /**
     * DELETE 请求
     */
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.delete = /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, tslib_1.__assign({ params: params }, options));
    };
    // #endregion
    // #region jsonp
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    // #endregion
    // #region jsonp
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    _HttpClient.prototype.jsonp = 
    // #endregion
    // #region jsonp
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    function (url, params, callbackParam) {
        var _this = this;
        if (callbackParam === void 0) { callbackParam = 'JSONP_CALLBACK'; }
        this.begin();
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        function () { return _this.end(); })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.end();
            return throwError(res);
        })));
    };
    /**
     * PATCH 请求
     */
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.patch = /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, tslib_1.__assign({ body: body,
            params: params }, options));
    };
    /**
     * PUT 请求
     */
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.put = /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    function (url, body, params, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, tslib_1.__assign({ body: body,
            params: params }, options));
    };
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    _HttpClient.prototype.request = /**
     * @param {?} method
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (method, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.begin();
        if (options.params)
            options.params = this.parseParams(options.params);
        return this.http.request(method, url, options).pipe(tap((/**
         * @return {?}
         */
        function () { return _this.end(); })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.end();
            return throwError(res);
        })));
    };
    _HttpClient.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    _HttpClient.ctorParameters = function () { return [
        { type: HttpClient },
        { type: VXThemeConfig }
    ]; };
    /** @nocollapse */ _HttpClient.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.VXThemeConfig)); }, token: _HttpClient, providedIn: "root" });
    return _HttpClient;
}());
export { _HttpClient };
if (false) {
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype._loading;
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUEwQixVQUFVLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDcEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0FBWW5EO0lBSUUscUJBQW9CLElBQWdCLEVBQUUsR0FBa0I7UUFBcEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVE1QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUHZCLElBQUksQ0FBQyxHQUFHLHNCQUNOLGlCQUFpQixFQUFFLFNBQVMsRUFDNUIsaUJBQWlCLEVBQUUsV0FBVyxJQUMzQixtQkFBQSxHQUFHLEVBQUMsQ0FBQyxJQUFJLENBQ2IsQ0FBQztJQUNKLENBQUM7SUFLRCxzQkFBSSxnQ0FBTztRQURYLGNBQWM7Ozs7O1FBQ2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE1BQVU7UUFBdEIsaUJBYUM7O1lBWk8sU0FBUyxHQUFHLEVBQUU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHOztnQkFDekIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDdkIsT0FBTztZQUNQLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxRQUFR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RSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsRUFBRSxFQUFWLENBQVUsRUFBQyxFQUNyQixVQUFVOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1gsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTF5QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFoQnpCLFVBQVU7Z0JBSVYsYUFBYTs7O3NCQUp0QjtDQTZ6QkMsQUE3eUJELElBNnlCQztTQTN5QlksV0FBVzs7Ozs7O0lBQ3RCLDBCQUE4Qjs7Ozs7SUFTOUIsK0JBQXlCOzs7OztJQVJiLDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVlhUaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL2h0dHAuY29uZmlnJztcclxuXHJcbmV4cG9ydCB0eXBlIF9IdHRwSGVhZGVycyA9IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG5leHBvcnQgdHlwZSBIdHRwT2JzZXJ2ZSA9ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuXHJcbi8qKlxyXG4gKiDlsIHoo4VIdHRwQ2xpZW5077yM5Li76KaB6Kej5Yaz77yaXHJcbiAqICsg5LyY5YyWSHR0cENsaWVudOWcqOWPguaVsOS4iuS+v+WIqeaAp1xyXG4gKiArIOe7n+S4gOWunueOsCBsb2FkaW5nXHJcbiAqICsg57uf5LiA5aSE55CG5pe26Ze05qC85byP6Zeu6aKYXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxyXG5leHBvcnQgY2xhc3MgX0h0dHBDbGllbnQge1xyXG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgY29nOiBWWFRoZW1lQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvZyA9IHtcclxuICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcclxuICAgICAgZGF0ZVZhbHVlSGFuZGxpbmc6ICd0aW1lc3RhbXAnLFxyXG4gICAgICAuLi5jb2chLmh0dHAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAvKiog5piv5ZCm5q2j5Zyo5Yqg6L295LitICovXHJcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIHBhcnNlUGFyYW1zKHBhcmFtczoge30pOiBIdHRwUGFyYW1zIHtcclxuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xyXG4gICAgICAvLyDlv73nlaXnqbrlgLxcclxuICAgICAgaWYgKHRoaXMuY29nLm51bGxWYWx1ZUhhbmRsaW5nID09PSAnaWdub3JlJyAmJiBfZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIC8vIOWwhuaXtumXtOi9rOWMluS4uu+8muaXtumXtOaIsyAo56eSKVxyXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIF9kYXRhID0gX2RhdGEudmFsdWVPZigpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IG5ld1BhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XHJcbiAgICBpZiAoIXBhcmFtcykgcmV0dXJuIHVybDtcclxuICAgIHVybCArPSB+dXJsLmluZGV4T2YoJz8nKSA/ICcnIDogJz8nO1xyXG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgIGFyci5wdXNoKGAke2tleX09JHtwYXJhbXNba2V5XX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmwgKyBhcnIuam9pbignJicpO1xyXG4gIH1cclxuXHJcbiAgYmVnaW4oKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gdHJ1ZSksIDEwKTtcclxuICB9XHJcblxyXG4gIGVuZCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSksIDEwKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gZ2V0XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBnZXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgSHR0cEV2ZW50PFQ+YCDnsbvlnotcclxuICAgKi9cclxuICBnZXQ8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxUPj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgSHR0cFJlc3BvbnNlPGFueT5gIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8VD5gIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5Liq5rOb57G75Z6LXHJcbiAgICovXHJcbiAgZ2V0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlOiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVQg6K+35rGCXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSA9IHt9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwsIHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gcG9zdFxyXG5cclxuICAvKipcclxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEh0dHBFdmVudDxUPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcG9zdDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU6ICdldmVudHMnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PFQ+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgSHR0cFJlc3BvbnNlPEpTT04+YCDnsbvlnotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgcG9zdDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NUIOivt+axglxyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9ID0ge30sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIHtcclxuICAgICAgYm9keSxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gZGVsZXRlXHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPHt9Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKrms5vnsbvlnotcclxuICAgKi9cclxuICBkZWxldGU8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRFIOivt+axglxyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0gPSB7fSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnREVMRVRFJywgdXJsLCB7XHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIGpzb25wXHJcblxyXG4gIC8qKlxyXG4gICAqIGBqc29ucGAg6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxyXG4gICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vlgLzvvIzpu5jorqTvvJpKU09OUF9DQUxMQkFDS1xyXG4gICAqL1xyXG4gIGpzb25wKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnksIGNhbGxiYWNrUGFyYW06IHN0cmluZyA9ICdKU09OUF9DQUxMQkFDSycpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5iZWdpbigpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLmFwcGxpZWRVcmwodXJsLCBwYXJhbXMpLCBjYWxsYmFja1BhcmFtKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5lbmQoKSksXHJcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwYXRjaFxyXG5cclxuICAvKipcclxuICAgKiBQQVRDSO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8e30+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIHBhdGNoPFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8VD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBBVENIIOivt+axglxyXG4gICAqL1xyXG4gIHBhdGNoKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSA9IHt9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQQVRDSCcsIHVybCwge1xyXG4gICAgICBib2R5LFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwdXRcclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTx7fT4+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgcHV0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8VD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVCDor7fmsYJcclxuICAgKi9cclxuICBwdXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9ID0ge30sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwge1xyXG4gICAgICBib2R5LFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiByZXF1ZXN0XHJcblxyXG4gIC8qKiDov5Tlm57kuIDkuKogYGFycmF5YnVmZmVyYCDnsbvlnosgKi9cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxBcnJheUJ1ZmZlcj47XHJcblxyXG4gIHJlcXVlc3QoXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBwYXJhbXM/OiBhbnk7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8QmxvYj47XHJcblxyXG4gIHJlcXVlc3QoXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBwYXJhbXM/OiBhbnk7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgcmVxdWVzdChcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIHBhcmFtcz86IGFueTtcclxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxBcnJheUJ1ZmZlcj4+O1xyXG5cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QmxvYj4+O1xyXG5cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8c3RyaW5nPj47XHJcblxyXG4gIHJlcXVlc3QoXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBwYXJhbXM/OiBhbnk7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcblxyXG4gIHJlcXVlc3Q8Uj4oXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBwYXJhbXM/OiBhbnk7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cyc7XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Uj4+O1xyXG5cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QXJyYXlCdWZmZXI+PjtcclxuXHJcbiAgcmVxdWVzdChcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIHBhcmFtcz86IGFueTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QmxvYj4+O1xyXG5cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxzdHJpbmc+PjtcclxuXHJcbiAgcmVxdWVzdChcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIHBhcmFtcz86IGFueTtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgcmVxdWVzdDxSPihcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIHBhcmFtcz86IGFueTtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFI+PjtcclxuXHJcbiAgcmVxdWVzdChcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzogX0h0dHBIZWFkZXJzO1xyXG4gICAgICBwYXJhbXM/OiBhbnk7XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXHJcbiAgKTogT2JzZXJ2YWJsZTxPYmplY3Q+O1xyXG5cclxuICByZXF1ZXN0PFI+KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OiBfSHR0cEhlYWRlcnM7XHJcbiAgICAgIHBhcmFtcz86IGFueTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8Uj47XHJcblxyXG4gIHJlcXVlc3QoXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlPzogSHR0cE9ic2VydmU7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86IF9IdHRwSGVhZGVycztcclxuICAgICAgcGFyYW1zPzogYW55O1xyXG4gICAgICBvYnNlcnZlPzogSHR0cE9ic2VydmU7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0gPSB7fSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5iZWdpbigpO1xyXG4gICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5lbmQoKSksXHJcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=