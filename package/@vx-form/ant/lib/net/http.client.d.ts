import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class _HttpClient {
    private http;
    constructor(http: HttpClient);
    private _loading;
    readonly loading: boolean;
    parseParams(params: any): HttpParams;
    formEncode(obj: any): string;
    appliedUrl(url: string, params?: any): string;
    begin(): void;
    end(): void;
    /**
     * GET：返回一个 `T` 类型
     */
    /**
     * GET：返回一个 `string` 类型
     */
    get(url: string, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body";
        reportProgress?: boolean;
        responseType: "text";
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * GET：返回一个 `JSON` 类型
     */
    get(url: string, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: "response";
        reportProgress?: boolean;
        responseType?: "json";
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * GET：返回一个 `JSON` 类型
     */
    /**
     * GET：返回一个 `any` 类型
     */
    get(url: string, params?: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body" | "events" | "response";
        reportProgress?: boolean;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * POST：返回一个 `string` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body";
        reportProgress?: boolean;
        responseType: "text";
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * POST：返回一个 `HttpResponse<JSON>` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: "response";
        reportProgress?: boolean;
        responseType?: "json";
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * POST：返回一个 `JSON` 类型
     */
    /**
     * POST：返回一个 `any` 类型
     */
    post(url: string, body?: any, params?: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body" | "events" | "response";
        reportProgress?: boolean;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * DELETE：返回一个 `string` 类型
     */
    delete(url: string, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body";
        reportProgress?: boolean;
        responseType: "text";
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * DELETE：返回一个 `JSON` 类型
     */
    delete(url: string, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: "response";
        reportProgress?: boolean;
        responseType?: "json";
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * DELETE：返回一个 `any` 类型
     */
    delete(url: string, params?: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body" | "events" | "response";
        reportProgress?: boolean;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * `jsonp` 请求
     *
     * @param url URL地址
     * @param params 请求参数
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    jsonp(url: string, params?: any, callbackParam?: string): Observable<any>;
    /**
     * PATCH：返回一个 `string` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body";
        reportProgress?: boolean;
        responseType: "text";
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * PATCH：返回一个 `HttpResponse<JSON>` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: "response";
        reportProgress?: boolean;
        responseType?: "json";
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * PATCH：返回一个 `JSON` 类型
     */
    /**
     * PATCH：返回一个 `any` 类型
     */
    patch(url: string, body?: any, params?: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body" | "events" | "response";
        reportProgress?: boolean;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * PUT：返回一个 `string` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body";
        reportProgress?: boolean;
        responseType: "text";
        withCredentials?: boolean;
    }): Observable<string>;
    /**
     * PUT：返回一个 `HttpResponse<JSON>` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: "response";
        reportProgress?: boolean;
        responseType?: "json";
        withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;
    /**
     * PUT：返回一个 `JSON` 类型
     */
    /**
     * PUT：返回一个 `any` 类型
     */
    put(url: string, body?: any, params?: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body" | "events" | "response";
        reportProgress?: boolean;
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * `request` 请求
     *
     * @param method 请求方法类型
     * @param url URL地址
     * @param options 参数
     */
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: "body" | "events" | "response";
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: "arraybuffer" | "blob" | "json" | "text";
        reportProgress?: boolean;
        withCredentials?: boolean;
    }): Observable<R>;
}
