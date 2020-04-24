/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { _HttpClient } from "../net/http.client";
import * as i0 from "@angular/core";
import * as i1 from "../net/http.client";
export class DataService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    //根据Id|其他 获取相关表信息
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    getBusinessTables(url, params = {}) {
        return this._http.get(url, params);
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    getFormInfo(url, params = {}) {
        return this._http.get(url, params);
    }
    //系统控件-人员
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrEmployee(params = {}) {
        //let url = "emptable.json";
        /** @type {?} */
        let url = this.getWebAPIName("employee");
        /** @type {?} */
        let result = this._http.get(url, params);
        return result;
    }
    //系统控件-组织
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrOrgTree(params = {}) {
        //let url = "org-tree.json";
        /** @type {?} */
        let url = this.getWebAPIName("organization");
        return this._http.get(url, params);
    }
    //系统控件-职位
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrPostionTable(params = {}) {
        //let url = "postiontable.json";
        /** @type {?} */
        let url = this.getWebAPIName("postion");
        return this._http.get(url, params);
    }
    //系统控件-地区
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrArea(params = {}) {
        /** @type {?} */
        let url = "tables.json";
        return this._http.get(url, params);
    }
    //树形数据
    /**
     * @param {?=} params
     * @return {?}
     */
    getTreeData(params = {}) {
        //let url = "tree.json";
        /** @type {?} */
        let url = this.getWebAPIName("tree");
        return this._http.get(url, params);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getWebAPIName(type) {
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let res = localStorage.getItem("VXFORM:WEBAPI");
        if (res != undefined && res != null && res != "") {
            /** @type {?} */
            let webapi = JSON.parse(res);
            result = webapi[type];
        }
        if (result == undefined || result == null) {
            result = "";
        }
        return result;
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: _HttpClient }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1._HttpClient)); }, token: DataService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTs7O0FBSWhELE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBSSxDQUFDOzs7Ozs7O0lBRzNDLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxNQUFNLEdBQUcsRUFBRTtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBVyxFQUFFLE1BQU0sR0FBRyxFQUFFO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUdELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxFQUFFOzs7WUFFdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDOztZQUNwQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUN4QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsRUFBRTs7O1lBRXRCLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFHRCxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsRUFBRTs7O1lBRTNCLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUU7O1lBQ25CLEdBQUcsR0FBRyxhQUFhO1FBRXZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUdELFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRTs7O1lBRWpCLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZOztZQUNwQixNQUFNLEdBQUcsRUFBRTs7WUFDWCxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxHQUFHLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTs7Z0JBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBOURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUhRLFdBQVc7Ozs7Ozs7O0lBS04sNEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSBcIi4uL25ldC9odHRwLmNsaWVudFwiXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IF9IdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgLy/moLnmja5JZHzlhbbku5Yg6I635Y+W55u45YWz6KGo5L+h5oGvXHJcbiAgZ2V0QnVzaW5lc3NUYWJsZXModXJsOiBzdHJpbmcsIHBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtSW5mbyh1cmw6IHN0cmluZywgcGFyYW1zID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8v57O757uf5o6n5Lu2LeS6uuWRmFxyXG4gIGdldFN5c0N0ckVtcGxveWVlKHBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vbGV0IHVybCA9IFwiZW1wdGFibGUuanNvblwiO1xyXG4gICAgbGV0IHVybCA9IHRoaXMuZ2V0V2ViQVBJTmFtZShcImVtcGxveWVlXCIpO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0KHVybCwgcGFyYW1zKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvL+ezu+e7n+aOp+S7ti3nu4Tnu4dcclxuICBnZXRTeXNDdHJPcmdUcmVlKHBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vbGV0IHVybCA9IFwib3JnLXRyZWUuanNvblwiO1xyXG4gICAgbGV0IHVybCA9IHRoaXMuZ2V0V2ViQVBJTmFtZShcIm9yZ2FuaXphdGlvblwiKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwsIHBhcmFtcyk7XHJcbiAgfSBcclxuXHJcbiAgLy/ns7vnu5/mjqfku7Yt6IGM5L2NXHJcbiAgZ2V0U3lzQ3RyUG9zdGlvblRhYmxlKHBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vbGV0IHVybCA9IFwicG9zdGlvbnRhYmxlLmpzb25cIjtcclxuICAgIGxldCB1cmwgPSB0aGlzLmdldFdlYkFQSU5hbWUoXCJwb3N0aW9uXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8v57O757uf5o6n5Lu2LeWcsOWMulxyXG4gIGdldFN5c0N0ckFyZWEocGFyYW1zID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IHVybCA9IFwidGFibGVzLmpzb25cIjtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodXJsLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLy/moJHlvaLmlbDmja5cclxuICBnZXRUcmVlRGF0YShwYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvL2xldCB1cmwgPSBcInRyZWUuanNvblwiO1xyXG4gICAgbGV0IHVybCA9IHRoaXMuZ2V0V2ViQVBJTmFtZShcInRyZWVcIik7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodXJsLCBwYXJhbXMpO1xyXG4gIH0gXHJcblxyXG4gIGdldFdlYkFQSU5hbWUodHlwZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGxldCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZYRk9STTpXRUJBUElcIik7XHJcbiAgICBpZiAocmVzICE9IHVuZGVmaW5lZCAmJiByZXMgIT0gbnVsbCAmJiByZXMgIT0gXCJcIikge1xyXG4gICAgICBsZXQgd2ViYXBpID0gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgICByZXN1bHQgPSB3ZWJhcGlbdHlwZV07XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCB8fCByZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICByZXN1bHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19