/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injector } from '@angular/core';
import { ACLService } from '@vx/acl';
import { throwError } from 'rxjs';
import { _HttpClient } from './http.client';
/**
 * @abstract
 */
export class BaseApi {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
}
/** @nocollapse */
BaseApi.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseApi.prototype.injector;
}
/**
 * @record
 */
export function HttpOptions() { }
if (false) {
    /**
     * ACL配置，若导入 `\@vx/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值
     * @type {?|undefined}
     */
    HttpOptions.prototype.acl;
    /** @type {?|undefined} */
    HttpOptions.prototype.observe;
    /** @type {?|undefined} */
    HttpOptions.prototype.responseType;
    /** @type {?|undefined} */
    HttpOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    HttpOptions.prototype.withCredentials;
}
/**
 * @record
 */
function ParamType() { }
if (false) {
    /** @type {?} */
    ParamType.prototype.key;
    /** @type {?} */
    ParamType.prototype.index;
    /* Skipping unhandled member: [key: string]: any;*/
    /* Skipping unhandled member: [key: number]: any;*/
}
/** @type {?} */
const paramKey = `__api_params`;
/**
 * @param {?} target
 * @param {?=} key
 * @return {?}
 */
function setParam(target, key = paramKey) {
    /** @type {?} */
    let params = target[key];
    if (typeof params === 'undefined') {
        params = target[key] = {};
    }
    return params;
}
/**
 * 默认基准URL
 * - 有效范围：类
 * @param {?} url
 * @return {?}
 */
export function BaseUrl(url) {
    return (/**
     * @template TClass
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        const params = setParam(target.prototype);
        params.baseUrl = url;
        return target;
    });
}
/**
 * 默认 `headers`
 * - 有效范围：类
 * @param {?} headers
 * @return {?}
 */
export function BaseHeaders(headers) {
    return (/**
     * @template TClass
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        const params = setParam(target.prototype);
        params.baseHeaders = headers;
        return target;
    });
}
/**
 * @param {?} paramName
 * @return {?}
 */
function makeParam(paramName) {
    return (/**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        return (/**
         * @param {?} target
         * @param {?} propertyKey
         * @param {?} index
         * @return {?}
         */
        function (target, propertyKey, index) {
            /** @type {?} */
            const params = setParam(setParam(target), propertyKey);
            /** @type {?} */
            let tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push({
                key,
                index,
            });
        });
    });
}
/**
 * URL路由参数
 * - 有效范围：方法参数
 * @type {?}
 */
export const Path = makeParam('path');
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 * @type {?}
 */
export const Query = makeParam('query');
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 * @type {?}
 */
export const Body = makeParam('body')();
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 * @type {?}
 */
export const Headers = makeParam('headers');
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `\@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 * @type {?}
 */
export const Payload = makeParam('payload')();
/**
 * @param {?} data
 * @param {?} key
 * @param {?} args
 * @return {?}
 */
function getValidArgs(data, key, args) {
    if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
        return undefined;
    }
    return args[data[key][0].index];
}
/**
 * @param {?=} data
 * @param {?=} payload
 * @return {?}
 */
function genBody(data, payload) {
    if (Array.isArray(data) || Array.isArray(payload)) {
        // tslint:disable-next-line:prefer-object-spread
        return Object.assign([], data, payload);
    }
    // tslint:disable-next-line:prefer-object-spread
    return Object.assign({}, data, payload);
}
/**
 * @param {?} method
 * @return {?}
 */
function makeMethod(method) {
    return (/**
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    function (url = '', options) {
        return (/**
         * @param {?} _target
         * @param {?=} targetKey
         * @param {?=} descriptor
         * @return {?}
         */
        (_target, targetKey, descriptor) => {
            (/** @type {?} */ (descriptor)).value = (/**
             * @param {...?} args
             * @return {?}
             */
            function (...args) {
                options = options || {};
                /** @type {?} */
                const http = (/** @type {?} */ (this.injector.get(_HttpClient, null)));
                if (http == null) {
                    throw new TypeError(`Not found '_HttpClient', You can import 'VXThemeModule' && 'HttpClientModule' in your root module.`);
                }
                /** @type {?} */
                const baseData = setParam(this);
                /** @type {?} */
                const data = setParam(baseData, targetKey);
                /** @type {?} */
                let requestUrl = url || '';
                requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
                    /** @type {?} */
                    const aclSrv = this.injector.get(ACLService, null);
                    if (aclSrv && !aclSrv.can(options.acl)) {
                        return throwError({
                            url: requestUrl,
                            status: 401,
                            statusText: `From Http Decorator`,
                        });
                    }
                    delete options.acl;
                }
                requestUrl = requestUrl.replace(/::/g, '^^');
                (((/** @type {?} */ (data.path))) || [])
                    .filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => typeof args[w.index] !== 'undefined'))
                    .forEach((/**
                 * @param {?} i
                 * @return {?}
                 */
                (i) => {
                    requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
                }));
                requestUrl = requestUrl.replace(/\^\^/g, `:`);
                /** @type {?} */
                const params = (data.query || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                (p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                /** @type {?} */
                const headers = (data.headers || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                (p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                /** @type {?} */
                const payload = getValidArgs(data, 'payload', args);
                /** @type {?} */
                const supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign({}, params, payload) : params, headers: Object.assign({}, baseData.baseHeaders, headers) }, options));
            });
            return descriptor;
        });
    });
}
/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const OPTIONS = makeMethod('OPTIONS');
/**
 * `GET` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const GET = makeMethod('GET');
/**
 * `POST` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const POST = makeMethod('POST');
/**
 * `DELETE` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const DELETE = makeMethod('DELETE');
/**
 * `PUT` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const PUT = makeMethod('PUT');
/**
 * `HEAD` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const HEAD = makeMethod('HEAD');
/**
 * `PATCH` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const PATCH = makeMethod('PATCH');
/**
 * `JSONP` 请求
 * - 有效范围：方法
 * @type {?}
 */
export const JSONP = makeMethod('JSONP');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvaHR0cC9odHRwLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVDLE1BQU0sT0FBZ0IsT0FBTzs7OztJQUMzQixZQUF3QyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQzs7OztZQVBoRCxRQUFRLHVCQU9WLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBQWhCLDJCQUE4Qzs7Ozs7QUFHNUQsaUNBT0M7Ozs7OztJQUxDLDBCQUFVOztJQUNWLDhCQUF5Qzs7SUFDekMsbUNBQXdEOztJQUN4RCxxQ0FBeUI7O0lBQ3pCLHNDQUEwQjs7Ozs7QUFHNUIsd0JBS0M7OztJQUpDLHdCQUFZOztJQUNaLDBCQUFjOzs7OztNQUtWLFFBQVEsR0FBRyxjQUFjOzs7Ozs7QUFFL0IsU0FBUyxRQUFRLENBQUMsTUFBVyxFQUFFLEdBQUcsR0FBRyxRQUFROztRQUN2QyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUMzQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakM7Ozs7O0lBQU8sVUFBMEQsTUFBYzs7Y0FDdkUsTUFBTSxHQUFH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LENBQUM7Ozs7OztBQU10QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7Ozs7OztBQU14QyxNQUFNLE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXMgb25seS1hcnJvdy1mdW5jdGlvbnNcclxuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0B2eC9hY2wnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJy4vaHR0cC5jbGllbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSW5qZWN0b3IpIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBPcHRpb25zIHtcclxuICAvKiogQUNM6YWN572u77yM6Iul5a+85YWlIGBAdngvYWNsYCDml7boh6rliqjmnInmlYjvvIznrYnlkIzkuo4gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCDlj4LmlbDlgLwgKi9cclxuICBhY2w/OiBhbnk7XHJcbiAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFyYW1UeXBlIHtcclxuICBrZXk6IHN0cmluZztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuICBba2V5OiBudW1iZXJdOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IHBhcmFtS2V5ID0gYF9fYXBpX3BhcmFtc2A7XHJcblxyXG5mdW5jdGlvbiBzZXRQYXJhbSh0YXJnZXQ6IGFueSwga2V5ID0gcGFyYW1LZXkpIHtcclxuICBsZXQgcGFyYW1zID0gdGFyZ2V0W2tleV07XHJcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBwYXJhbXMgPSB0YXJnZXRba2V5XSA9IHt9O1xyXG4gIH1cclxuICByZXR1cm4gcGFyYW1zO1xyXG59XHJcblxyXG4vKipcclxuICog6buY6K6k5Z+65YeGVVJMXHJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya57G7XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQmFzZVVybCh1cmw6IHN0cmluZykge1xyXG4gIHJldHVybiBmdW5jdGlvbiA8VENsYXNzIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gQmFzZUFwaT4odGFyZ2V0OiBUQ2xhc3MpOiBUQ2xhc3Mge1xyXG4gICAgY29uc3QgcGFyYW1zID0gc2V0UGFyYW0odGFyZ2V0LnByb3RvdHlwZSk7XHJcbiAgICBwYXJhbXMuYmFzZVVybCA9IHVybDtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOm7mOiupCBgaGVhZGVyc2BcclxuICogLSDmnInmlYjojIPlm7TvvJrnsbtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBCYXNlSGVhZGVycyhcclxuICBoZWFkZXJzOlxyXG4gICAgfCBIdHRwSGVhZGVyc1xyXG4gICAgfCB7XHJcbiAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgfSxcclxuKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIDxUQ2xhc3MgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBCYXNlQXBpPih0YXJnZXQ6IFRDbGFzcyk6IFRDbGFzcyB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbSh0YXJnZXQucHJvdG90eXBlKTtcclxuICAgIHBhcmFtcy5iYXNlSGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VQYXJhbShwYXJhbU5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogQmFzZUFwaSwgcHJvcGVydHlLZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBzZXRQYXJhbShzZXRQYXJhbSh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICAgIGxldCB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV07XHJcbiAgICAgIGlmICh0eXBlb2YgdFBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0UGFyYW1zID0gcGFyYW1zW3BhcmFtTmFtZV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICB0UGFyYW1zLnB1c2goe1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBpbmRleCxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVUkzot6/nlLHlj4LmlbBcclxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBQYXRoID0gbWFrZVBhcmFtKCdwYXRoJyk7XHJcblxyXG4vKipcclxuICogVVJMIOWPguaVsCBgUXVlcnlTdHJpbmdgXHJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOV5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUXVlcnkgPSBtYWtlUGFyYW0oJ3F1ZXJ5Jyk7XHJcblxyXG4vKipcclxuICog5Y+C5pWwIGBCb2R5YFxyXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazleWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJvZHkgPSBtYWtlUGFyYW0oJ2JvZHknKSgpO1xyXG5cclxuLyoqXHJcbiAqIOWPguaVsCBgaGVhZGVyc2BcclxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5Xlj4LmlbBcclxuICogLSDlkIjlubYgYEJhc2VIZWFkZXJzYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSBtYWtlUGFyYW0oJ2hlYWRlcnMnKTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0IFBheWxvYWRcclxuICogLSBTdXBwb3J0ZWQgYm9keSAobGlrZWBQT1NUYCwgYFBVVGApIGFzIGEgYm9keSBkYXRhLCBlcXVpdmFsZW50IHRvIGBAQm9keWBcclxuICogLSBOb3Qgc3VwcG9ydGVkIGJvZHkgKGxpa2UgYEdFVGAsIGBERUxFVEVgIGV0YykgYXMgYSBgUXVlcnlTdHJpbmdgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGF5bG9hZCA9IG1ha2VQYXJhbSgncGF5bG9hZCcpKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRWYWxpZEFyZ3MoZGF0YTogYW55LCBrZXk6IHN0cmluZywgYXJnczogYW55W10pOiB7fSB8IHVuZGVmaW5lZCB7XHJcbiAgaWYgKCFkYXRhW2tleV0gfHwgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSB8fCBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHJldHVybiBhcmdzW2RhdGFba2V5XVswXS5pbmRleF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkJvZHkoZGF0YT86IGFueSwgcGF5bG9hZD86IGFueSk6IGFueSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgZGF0YSwgcGF5bG9hZCk7XHJcbiAgfVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItb2JqZWN0LXNwcmVhZFxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBwYXlsb2FkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU1ldGhvZChtZXRob2Q6IHN0cmluZykge1xyXG4gIHJldHVybiBmdW5jdGlvbiAodXJsOiBzdHJpbmcgPSAnJywgb3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gKF90YXJnZXQ6IEJhc2VBcGksIHRhcmdldEtleT86IHN0cmluZywgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gICAgICBkZXNjcmlwdG9yIS52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIGNvbnN0IGh0dHAgPSB0aGlzLmluamVjdG9yLmdldChfSHR0cENsaWVudCwgbnVsbCkgYXMgX0h0dHBDbGllbnQ7XHJcbiAgICAgICAgaWYgKGh0dHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm90IGZvdW5kICdfSHR0cENsaWVudCcsIFlvdSBjYW4gaW1wb3J0ICdWWFRoZW1lTW9kdWxlJyAmJiAnSHR0cENsaWVudE1vZHVsZScgaW4geW91ciByb290IG1vZHVsZS5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VEYXRhID0gc2V0UGFyYW0odGhpcyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHNldFBhcmFtKGJhc2VEYXRhLCB0YXJnZXRLZXkpO1xyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdFVybCA9IHVybCB8fCAnJztcclxuICAgICAgICByZXF1ZXN0VXJsID0gW2Jhc2VEYXRhLmJhc2VVcmwgfHwgJycsIHJlcXVlc3RVcmwuc3RhcnRzV2l0aCgnLycpID8gcmVxdWVzdFVybC5zdWJzdHIoMSkgOiByZXF1ZXN0VXJsXS5qb2luKCcvJyk7XHJcbiAgICAgICAgLy8gZml4IGxhc3Qgc3BsaXRcclxuICAgICAgICBpZiAocmVxdWVzdFVybC5sZW5ndGggPiAxICYmIHJlcXVlc3RVcmwuZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwuc3Vic3RyKDAsIHJlcXVlc3RVcmwubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5hY2wpIHtcclxuICAgICAgICAgIGNvbnN0IGFjbFNydjogQUNMU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFDTFNlcnZpY2UsIG51bGwpO1xyXG4gICAgICAgICAgaWYgKGFjbFNydiAmJiAhYWNsU3J2LmNhbihvcHRpb25zLmFjbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioe1xyXG4gICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcclxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBgRnJvbSBIdHRwIERlY29yYXRvcmAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuYWNsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvOjovZywgJ15eJyk7XHJcbiAgICAgICAgKChkYXRhLnBhdGggYXMgUGFyYW1UeXBlW10pIHx8IFtdKVxyXG4gICAgICAgICAgLmZpbHRlcih3ID0+IHR5cGVvZiBhcmdzW3cuaW5kZXhdICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgIC5mb3JFYWNoKChpOiBQYXJhbVR5cGUpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtpLmtleX1gLCAnZycpLCBlbmNvZGVVUklDb21wb25lbnQoYXJnc1tpLmluZGV4XSkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgcmVxdWVzdFVybCA9IHJlcXVlc3RVcmwucmVwbGFjZSgvXFxeXFxeL2csIGA6YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkYXRhLnF1ZXJ5IHx8IFtdKS5yZWR1Y2UoKHA6IHt9LCBpOiBQYXJhbVR5cGUpID0+IHtcclxuICAgICAgICAgIHBbaS5rZXldID0gYXJnc1tpLmluZGV4XTtcclxuICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IChkYXRhLmhlYWRlcnMgfHwgW10pLnJlZHVjZSgocDoge30sIGk6IFBhcmFtVHlwZSkgPT4ge1xyXG4gICAgICAgICAgcFtpLmtleV0gPSBhcmdzW2kuaW5kZXhdO1xyXG4gICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZ2V0VmFsaWRBcmdzKGRhdGEsICdwYXlsb2FkJywgYXJncyk7XHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkQm9keSA9IG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCc7XHJcblxyXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3QobWV0aG9kLCByZXF1ZXN0VXJsLCB7XHJcbiAgICAgICAgICBib2R5OiBzdXBwb3J0ZWRCb2R5ID8gZ2VuQm9keShnZXRWYWxpZEFyZ3MoZGF0YSwgJ2JvZHknLCBhcmdzKSwgcGF5bG9hZCkgOiBudWxsLFxyXG4gICAgICAgICAgcGFyYW1zOiAhc3VwcG9ydGVkQm9keSA/IHsgLi4ucGFyYW1zLCAuLi5wYXlsb2FkIH0gOiBwYXJhbXMsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IC4uLmJhc2VEYXRhLmJhc2VIZWFkZXJzLCAuLi5oZWFkZXJzIH0sXHJcbiAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBgT1BUSU9OU2Ag6K+35rGCXHJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT1BUSU9OUyA9IG1ha2VNZXRob2QoJ09QVElPTlMnKTtcclxuXHJcbi8qKlxyXG4gKiBgR0VUYCDor7fmsYJcclxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcclxuICovXHJcbmV4cG9ydCBjb25zdCBHRVQgPSBtYWtlTWV0aG9kKCdHRVQnKTtcclxuXHJcbi8qKlxyXG4gKiBgUE9TVGAg6K+35rGCXHJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUE9TVCA9IG1ha2VNZXRob2QoJ1BPU1QnKTtcclxuXHJcbi8qKlxyXG4gKiBgREVMRVRFYCDor7fmsYJcclxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUxFVEUgPSBtYWtlTWV0aG9kKCdERUxFVEUnKTtcclxuXHJcbi8qKlxyXG4gKiBgUFVUYCDor7fmsYJcclxuICogLSDmnInmlYjojIPlm7TvvJrmlrnms5VcclxuICovXHJcbmV4cG9ydCBjb25zdCBQVVQgPSBtYWtlTWV0aG9kKCdQVVQnKTtcclxuXHJcbi8qKlxyXG4gKiBgSEVBRGAg6K+35rGCXHJcbiAqIC0g5pyJ5pWI6IyD5Zu077ya5pa55rOVXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSEVBRCA9IG1ha2VNZXRob2QoJ0hFQUQnKTtcclxuXHJcbi8qKlxyXG4gKiBgUEFUQ0hgIOivt+axglxyXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBBVENIID0gbWFrZU1ldGhvZCgnUEFUQ0gnKTtcclxuXHJcbi8qKlxyXG4gKiBgSlNPTlBgIOivt+axglxyXG4gKiAtIOacieaViOiMg+WbtO+8muaWueazlVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEpTT05QID0gbWFrZU1ldGhvZCgnSlNPTlAnKTtcclxuIl19