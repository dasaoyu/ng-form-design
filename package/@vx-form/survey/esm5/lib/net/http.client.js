/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var _HttpClient = /** @class */ (function () {
    function _HttpClient(http) {
        this.http = http;
        this._loading = false;
    }
    Object.defineProperty(_HttpClient.prototype, "loading", {
        get: /**
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
        /*const newParams = {};
        Object.keys(params).forEach(key => {
          let _data = params[key];
    
          newParams[key] = _data;
        });*/
        if (params === undefined || params === null) {
            params = {};
        }
        return new HttpParams({ fromObject: params });
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    _HttpClient.prototype.formEncode = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var encodedString = "";
        for (var key in obj) {
            if (encodedString.length !== 0) {
                encodedString += "&";
            }
            encodedString += key + "=" + encodeURIComponent(obj[key]);
        }
        return encodedString;
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
        url += ~url.indexOf("?") ? "" : "?";
        /** @type {?} */
        var arr = [];
        for (var key in params) {
            arr.push(key + "=" + params[key]);
        }
        return url + arr.join("&");
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
        function () { return (_this._loading = true); }));
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
        function () { return (_this._loading = false); }));
    };
    /**
     * GET 请求
     */
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.get = /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, params, options) {
        return this.request("GET", url, Object.assign({
            params: params
        }, options));
    };
    /**
     * POST 请求
     */
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.post = /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, body, params, options) {
        return this.request("POST", url, Object.assign({
            body: body,
            params: params
        }, options));
    };
    /**
     * DELETE 请求
     */
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.delete = /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, params, options) {
        return this.request("DELETE", url, Object.assign({
            params: params
        }, options));
    };
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    _HttpClient.prototype.jsonp = /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    function (url, params, callbackParam) {
        var _this = this;
        if (callbackParam === void 0) { callbackParam = "JSONP_CALLBACK"; }
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.end();
        })), catchError((/**
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
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.patch = /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, body, params, options) {
        return this.request("PATCH", url, Object.assign({
            body: body,
            params: params
        }, options));
    };
    /**
     * PUT 请求
     */
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    _HttpClient.prototype.put = /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    function (url, body, params, options) {
        return this.request("PUT", url, Object.assign({
            body: body,
            params: params
        }, options));
    };
    /**
     * `request` 请求
     *
     * @param method 请求方法类型
     * @param url URL地址
     * @param options 参数
     */
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    _HttpClient.prototype.request = /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    function (method, url, options) {
        var _this = this;
        this.begin();
        if (options) {
            if (options.params)
                options.params = this.parseParams(options.params);
            if (options.body) {
                // options.body = this.formEncode(options.body)
            }
        }
        return this.http.request(method, url, options).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.end();
        })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.end();
            return throwError(res);
        })));
    };
    _HttpClient.decorators = [
        { type: Injectable, args: [{ providedIn: "root" },] }
    ];
    /** @nocollapse */
    _HttpClient.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ _HttpClient.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1.HttpClient)); }, token: _HttpClient, providedIn: "root" });
    return _HttpClient;
}());
export { _HttpClient };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvbmV0L2h0dHAuY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBRVYsVUFBVSxFQUVYLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFakQ7SUFFRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUU1QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRmMsQ0FBQztJQUl4QyxzQkFBSSxnQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxNQUFXO1FBQ3JCOzs7OzthQUtLO1FBQ0wsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLEdBQVE7O1lBQ2IsYUFBYSxHQUFHLEVBQUU7UUFDdEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDbkIsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsYUFBYSxJQUFJLEdBQUcsQ0FBQzthQUN0QjtZQUNELGFBQWEsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLEdB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QUM7UUFDekIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTdsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFSaEMsVUFBVTs7O3NCQUZaO0NBd21CQyxBQTlsQkQsSUE4bEJDO1NBN2xCWSxXQUFXOzs7Ozs7SUFHdEIsK0JBQXlCOzs7OztJQUZiLDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cFBhcmFtcyxcclxuICBIdHRwUmVzcG9uc2VcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBcInJvb3RcIiB9KVxyXG5leHBvcnQgY2xhc3MgX0h0dHBDbGllbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBIdHRwUGFyYW1zIHtcclxuICAgIC8qY29uc3QgbmV3UGFyYW1zID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgbGV0IF9kYXRhID0gcGFyYW1zW2tleV07XHJcblxyXG4gICAgICBuZXdQYXJhbXNba2V5XSA9IF9kYXRhO1xyXG4gICAgfSk7Ki9cclxuICAgIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCB8fCBwYXJhbXMgPT09IG51bGwpIHtcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBwYXJhbXMgfSk7XHJcbiAgfVxyXG5cclxuICBmb3JtRW5jb2RlKG9iajogYW55KSB7XHJcbiAgICB2YXIgZW5jb2RlZFN0cmluZyA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgIGlmIChlbmNvZGVkU3RyaW5nLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGVuY29kZWRTdHJpbmcgKz0gXCImXCI7XHJcbiAgICAgIH1cclxuICAgICAgZW5jb2RlZFN0cmluZyArPSBrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW5jb2RlZFN0cmluZztcclxuICB9XHJcblxyXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xyXG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XHJcbiAgICB1cmwgKz0gfnVybC5pbmRleE9mKFwiP1wiKSA/IFwiXCIgOiBcIj9cIjtcclxuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xyXG4gICAgICBhcnIucHVzaChgJHtrZXl9PSR7cGFyYW1zW2tleV19YCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsICsgYXJyLmpvaW4oXCImXCIpO1xyXG4gIH1cclxuXHJcbiAgYmVnaW4oKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgZW5kKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYFRgIOexu+Wei1xyXG4gICAqL1xyXG4gIC8qICAgZ2V0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwianNvblwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8VD47ICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBnZXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcclxuICAgKi9cclxuICBnZXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcclxuICAgKi9cclxuICAvKiAgIGdldDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwianNvblwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuICovXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVCDor7fmsYJcclxuICAgKi9cclxuICBnZXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICBcIkdFVFwiLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFyYW1zXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIHBvc3RcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcG9zdChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwianNvblwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcclxuICAgKi9cclxuICAvKiBwb3N0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJqc29uXCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuICovXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1Qg6K+35rGCXHJcbiAgICovXHJcbiAgcG9zdChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgIFwiUE9TVFwiLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRF77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwianNvblwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRFIOivt+axglxyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgIFwiREVMRVRFXCIsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXJhbXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGBqc29ucGAg6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxyXG4gICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5Y+C5pWwXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vlgLzvvIzpu5jorqTvvJpKU09OUF9DQUxMQkFDS1xyXG4gICAqL1xyXG4gIGpzb25wKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSBcIkpTT05QX0NBTExCQUNLXCJcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLmFwcGxpZWRVcmwodXJsLCBwYXJhbXMpLCBjYWxsYmFja1BhcmFtKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gcGF0Y2hcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIC8qICAgcGF0Y2g8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG4gKi9cclxuICAvKipcclxuICAgKiBQQVRDSO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBQQVRDSCDor7fmsYJcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgIFwiUEFUQ0hcIixcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwdXRcclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEh0dHBSZXNwb25zZTxKU09OPmAg57G75Z6LXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJqc29uXCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgLyogICBwdXQ8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPFQ+OyAqL1xyXG5cclxuICAvKipcclxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVCDor7fmsYJcclxuICAgKi9cclxuICBwdXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICBcIlBVVFwiLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvKipcclxuICAgKiBgcmVxdWVzdGAg6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWV0aG9kIOivt+axguaWueazleexu+Wei1xyXG4gICAqIEBwYXJhbSB1cmwgVVJM5Zyw5Z2AXHJcbiAgICogQHBhcmFtIG9wdGlvbnMg5Y+C5pWwXHJcbiAgICovXHJcbiAgcmVxdWVzdDxSPihcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzpcclxuICAgICAgICB8IEh0dHBIZWFkZXJzXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcGFyYW1zPzpcclxuICAgICAgICB8IEh0dHBQYXJhbXNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8Uj47XHJcbiAgLyoqXHJcbiAgICogYHJlcXVlc3RgIOivt+axglxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1ldGhvZCDor7fmsYLmlrnms5XnsbvlnotcclxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIOWPguaVsFxyXG4gICAqL1xyXG4gIHJlcXVlc3QoXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86XHJcbiAgICAgICAgfCBIdHRwSGVhZGVyc1xyXG4gICAgICAgIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHBhcmFtcz86XHJcbiAgICAgICAgfCBIdHRwUGFyYW1zXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgICB9O1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5iZWdpbigpO1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xyXG4gICAgICBpZiAob3B0aW9ucy5ib2R5KSB7XHJcbiAgICAgICAgLy8gb3B0aW9ucy5ib2R5ID0gdGhpcy5mb3JtRW5jb2RlKG9wdGlvbnMuYm9keSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19