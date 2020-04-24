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
export class _HttpClient {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this._loading = false;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParams(params) {
        /*const newParams = {};
        Object.keys(params).forEach(key => {
          let _data = params[key];
    
          newParams[key] = _data;
        });*/
        if (params === undefined || params === null) {
            params = {};
        }
        return new HttpParams({ fromObject: params });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    formEncode(obj) {
        /** @type {?} */
        var encodedString = "";
        for (var key in obj) {
            if (encodedString.length !== 0) {
                encodedString += "&";
            }
            encodedString += key + "=" + encodeURIComponent(obj[key]);
        }
        return encodedString;
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    appliedUrl(url, params) {
        if (!params)
            return url;
        url += ~url.indexOf("?") ? "" : "?";
        /** @type {?} */
        const arr = [];
        for (const key in params) {
            arr.push(`${key}=${params[key]}`);
        }
        return url + arr.join("&");
    }
    /**
     * @return {?}
     */
    begin() {
        setTimeout((/**
         * @return {?}
         */
        () => (this._loading = true)));
    }
    /**
     * @return {?}
     */
    end() {
        setTimeout((/**
         * @return {?}
         */
        () => (this._loading = false)));
    }
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    get(url, params, options) {
        return this.request("GET", url, Object.assign({
            params
        }, options));
    }
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    post(url, body, params, options) {
        return this.request("POST", url, Object.assign({
            body,
            params
        }, options));
    }
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    delete(url, params, options) {
        return this.request("DELETE", url, Object.assign({
            params
        }, options));
    }
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    jsonp(url, params, callbackParam = "JSONP_CALLBACK") {
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.end();
        })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.end();
            return throwError(res);
        })));
    }
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    patch(url, body, params, options) {
        return this.request("PATCH", url, Object.assign({
            body,
            params
        }, options));
    }
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    put(url, body, params, options) {
        return this.request("PUT", url, Object.assign({
            body,
            params
        }, options));
    }
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    request(method, url, options) {
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
        () => {
            this.end();
        })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.end();
            return throwError(res);
        })));
    }
}
_HttpClient.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */
_HttpClient.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ _HttpClient.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1.HttpClient)); }, token: _HttpClient, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jbGllbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvbmV0L2h0dHAuY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBRVYsVUFBVSxFQUVYLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHakQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUU1QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRmMsQ0FBQzs7OztJQUl4QyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBVztRQUNyQjs7Ozs7YUFLSztRQUNMLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzNDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFROztZQUNiLGFBQWEsR0FBRyxFQUFFO1FBQ3RCLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ25CLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLGFBQWEsSUFBSSxHQUFHLENBQUM7YUFDdEI7WUFDRCxhQUFhLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFD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Q0FDakIsS0FBSyxFQUNMLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUNYO1lBQ0UsSUFBSTtZQUNKLE1BQU07U0FDUCxFQUNELE9BQU8sQ0FDUixDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUF1Q0QsT0FBTyxDQUNMLE1BQWMsRUFDZCxHQUFXLEVBQ1gsT0FnQkM7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxDQUFDLE1BQU07Z0JBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLCtDQUErQzthQUNoRDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1gsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQTdsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVJoQyxVQUFVOzs7Ozs7OztJQVlWLCtCQUF5Qjs7Ozs7SUFGYiwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBIZWFkZXJzLFxyXG4gIEh0dHBQYXJhbXMsXHJcbiAgSHR0cFJlc3BvbnNlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogXCJyb290XCIgfSlcclxuZXhwb3J0IGNsYXNzIF9IdHRwQ2xpZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcclxuICB9XHJcblxyXG4gIHBhcnNlUGFyYW1zKHBhcmFtczogYW55KTogSHR0cFBhcmFtcyB7XHJcbiAgICAvKmNvbnN0IG5ld1BhcmFtcyA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xyXG5cclxuICAgICAgbmV3UGFyYW1zW2tleV0gPSBfZGF0YTtcclxuICAgIH0pOyovXHJcbiAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQgfHwgcGFyYW1zID09PSBudWxsKSB7XHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogcGFyYW1zIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9ybUVuY29kZShvYmo6IGFueSkge1xyXG4gICAgdmFyIGVuY29kZWRTdHJpbmcgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICBpZiAoZW5jb2RlZFN0cmluZy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBlbmNvZGVkU3RyaW5nICs9IFwiJlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVuY29kZWRTdHJpbmcgKz0ga2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVuY29kZWRTdHJpbmc7XHJcbiAgfVxyXG5cclxuICBhcHBsaWVkVXJsKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpIHtcclxuICAgIGlmICghcGFyYW1zKSByZXR1cm4gdXJsO1xyXG4gICAgdXJsICs9IH51cmwuaW5kZXhPZihcIj9cIikgPyBcIlwiIDogXCI/XCI7XHJcbiAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgYXJyLnB1c2goYCR7a2V5fT0ke3BhcmFtc1trZXldfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybCArIGFyci5qb2luKFwiJlwiKTtcclxuICB9XHJcblxyXG4gIGJlZ2luKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IHRydWUpKTtcclxuICB9XHJcblxyXG4gIGVuZCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR0VU77ya6L+U5Zue5LiA5LiqIGBUYCDnsbvlnotcclxuICAgKi9cclxuICAvKiAgIGdldDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPFQ+OyAqL1xyXG5cclxuICAvKipcclxuICAgKiBHRVTvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJqc29uXCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgLyogICBnZXQ8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcbiAqL1xyXG4gIC8qKlxyXG4gICAqIEdFVO+8mui/lOWbnuS4gOS4qiBgYW55YCDnsbvlnotcclxuICAgKi9cclxuICBnZXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVQg6K+35rGCXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgXCJHRVRcIixcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBwb3N0XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYHN0cmluZ2Ag57G75Z6LXHJcbiAgICovXHJcbiAgcG9zdChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVO+8mui/lOWbnuS4gOS4qiBgSlNPTmAg57G75Z6LXHJcbiAgICovXHJcbiAgLyogcG9zdDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwianNvblwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8VD47XHJcbiAqL1xyXG4gIC8qKlxyXG4gICAqIFBPU1TvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgcG9zdChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NUIOivt+axglxyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICBcIlBPU1RcIixcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURe+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRF77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImpzb25cIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRF77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURSDor7fmsYJcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICBcIkRFTEVURVwiLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFyYW1zXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBganNvbnBgIOivt+axglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCBVUkzlnLDlnYBcclxuICAgKiBAcGFyYW0gcGFyYW1zIOivt+axguWPguaVsFxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIENBTExCQUNL5YC877yM6buY6K6k77yaSlNPTlBfQ0FMTEJBQ0tcclxuICAgKi9cclxuICBqc29ucChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgY2FsbGJhY2tQYXJhbTogc3RyaW5nID0gXCJKU09OUF9DQUxMQkFDS1wiXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5hcHBsaWVkVXJsKHVybCwgcGFyYW1zKSwgY2FsbGJhY2tQYXJhbSkucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIHBhdGNoXHJcblxyXG4gIC8qKlxyXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBzdHJpbmdgIOexu+Wei1xyXG4gICAqL1xyXG4gIHBhdGNoKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xyXG4gICAqL1xyXG4gIHBhdGNoKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJqc29uXCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBBVENI77ya6L+U5Zue5LiA5LiqIGBKU09OYCDnsbvlnotcclxuICAgKi9cclxuICAvKiAgIHBhdGNoPFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJqc29uXCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuICovXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jvvJrov5Tlm57kuIDkuKogYGFueWAg57G75Z6LXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0gg6K+35rGCXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICBcIlBBVENIXCIsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgcGFyYW1zXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gcHV0XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVO+8mui/lOWbnuS4gOS4qiBgc3RyaW5nYCDnsbvlnotcclxuICAgKi9cclxuICBwdXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwianNvblwiO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfVxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVTvvJrov5Tlm57kuIDkuKogYEpTT05gIOexu+Wei1xyXG4gICAqL1xyXG4gIC8qICAgcHV0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJqc29uXCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxUPjsgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUFVU77ya6L+U5Zue5LiA5LiqIGBhbnlgIOexu+Wei1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86IFwiYm9keVwiIHwgXCJldmVudHNcIiB8IFwicmVzcG9uc2VcIjtcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVQg6K+35rGCXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86IFwiYXJyYXlidWZmZXJcIiB8IFwiYmxvYlwiIHwgXCJqc29uXCIgfCBcInRleHRcIjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgXCJQVVRcIixcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLyoqXHJcbiAgICogYHJlcXVlc3RgIOivt+axglxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1ldGhvZCDor7fmsYLmlrnms5XnsbvlnotcclxuICAgKiBAcGFyYW0gdXJsIFVSTOWcsOWdgFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIOWPguaVsFxyXG4gICAqL1xyXG4gIHJlcXVlc3Q8Uj4oXHJcbiAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgYm9keT86IGFueTtcclxuICAgICAgaGVhZGVycz86XHJcbiAgICAgICAgfCBIdHRwSGVhZGVyc1xyXG4gICAgICAgIHwge1xyXG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIG9ic2VydmU/OiBcImJvZHlcIiB8IFwiZXZlbnRzXCIgfCBcInJlc3BvbnNlXCI7XHJcbiAgICAgIHBhcmFtcz86XHJcbiAgICAgICAgfCBIdHRwUGFyYW1zXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgICB9O1xyXG4gICAgICByZXNwb25zZVR5cGU/OiBcImFycmF5YnVmZmVyXCIgfCBcImJsb2JcIiB8IFwianNvblwiIHwgXCJ0ZXh0XCI7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH1cclxuICApOiBPYnNlcnZhYmxlPFI+O1xyXG4gIC8qKlxyXG4gICAqIGByZXF1ZXN0YCDor7fmsYJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXRob2Qg6K+35rGC5pa55rOV57G75Z6LXHJcbiAgICogQHBhcmFtIHVybCBVUkzlnLDlnYBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDlj4LmlbBcclxuICAgKi9cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OlxyXG4gICAgICAgIHwgSHR0cEhlYWRlcnNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgICB9O1xyXG4gICAgICBvYnNlcnZlPzogXCJib2R5XCIgfCBcImV2ZW50c1wiIHwgXCJyZXNwb25zZVwiO1xyXG4gICAgICBwYXJhbXM/OlxyXG4gICAgICAgIHwgSHR0cFBhcmFtc1xyXG4gICAgICAgIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMuYmVnaW4oKTtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykgb3B0aW9ucy5wYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKG9wdGlvbnMucGFyYW1zKTtcclxuICAgICAgaWYgKG9wdGlvbnMuYm9keSkge1xyXG4gICAgICAgIC8vIG9wdGlvbnMuYm9keSA9IHRoaXMuZm9ybUVuY29kZShvcHRpb25zLmJvZHkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==