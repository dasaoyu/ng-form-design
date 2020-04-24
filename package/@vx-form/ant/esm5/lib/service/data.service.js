/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { _HttpClient } from "../net/http.client";
import * as i0 from "@angular/core";
import * as i1 from "../net/http.client";
var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    //根据Id|其他 获取相关表信息
    //根据Id|其他 获取相关表信息
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getBusinessTables = 
    //根据Id|其他 获取相关表信息
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    function (url, params) {
        if (params === void 0) { params = {}; }
        return this._http.get(url, params);
    };
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getFormInfo = /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    function (url, params) {
        if (params === void 0) { params = {}; }
        return this._http.get(url, params);
    };
    //系统控件-人员
    //系统控件-人员
    /**
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getSysCtrEmployee = 
    //系统控件-人员
    /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = {}; }
        //let url = "emptable.json";
        /** @type {?} */
        var url = this.getWebAPIName("employee");
        /** @type {?} */
        var result = this._http.get(url, params);
        return result;
    };
    //系统控件-组织
    //系统控件-组织
    /**
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getSysCtrOrgTree = 
    //系统控件-组织
    /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = {}; }
        //let url = "org-tree.json";
        /** @type {?} */
        var url = this.getWebAPIName("organization");
        return this._http.get(url, params);
    };
    //系统控件-职位
    //系统控件-职位
    /**
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getSysCtrPostionTable = 
    //系统控件-职位
    /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = {}; }
        //let url = "postiontable.json";
        /** @type {?} */
        var url = this.getWebAPIName("postion");
        return this._http.get(url, params);
    };
    //系统控件-地区
    //系统控件-地区
    /**
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getSysCtrArea = 
    //系统控件-地区
    /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = {}; }
        /** @type {?} */
        var url = "tables.json";
        return this._http.get(url, params);
    };
    //树形数据
    //树形数据
    /**
     * @param {?=} params
     * @return {?}
     */
    DataService.prototype.getTreeData = 
    //树形数据
    /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = {}; }
        //let url = "tree.json";
        /** @type {?} */
        var url = this.getWebAPIName("tree");
        return this._http.get(url, params);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    DataService.prototype.getWebAPIName = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var res = localStorage.getItem("VXFORM:WEBAPI");
        if (res != undefined && res != null && res != "") {
            /** @type {?} */
            var webapi = JSON.parse(res);
            result = webapi[type];
        }
        if (result == undefined || result == null) {
            result = "";
        }
        return result;
    };
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: _HttpClient }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1._HttpClient)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTs7O0FBQ2hEO0lBSUUscUJBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBSSxDQUFDO0lBRTNDLGlCQUFpQjs7Ozs7OztJQUNqQix1Q0FBaUI7Ozs7Ozs7SUFBakIsVUFBa0IsR0FBVyxFQUFFLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7UUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsaUNBQVc7Ozs7O0lBQVgsVUFBWSxHQUFXLEVBQUUsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUzs7Ozs7O0lBQ1QsdUNBQWlCOzs7Ozs7SUFBakIsVUFBa0IsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVzs7O1lBRXZCLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzs7WUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDeEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFNBQVM7Ozs7OztJQUNULHNDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7OztZQUV0QixHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7Ozs7OztJQUNULDJDQUFxQjs7Ozs7O0lBQXJCLFVBQXNCLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7OztZQUUzQixHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7Ozs7OztJQUNULG1DQUFhOzs7Ozs7SUFBYixVQUFjLE1BQVc7UUFBWCx1QkFBQSxFQUFBLFdBQVc7O1lBQ25CLEdBQUcsR0FBRyxhQUFhO1FBRXZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNOzs7Ozs7SUFDTixpQ0FBVzs7Ozs7O0lBQVgsVUFBWSxNQUFXO1FBQVgsdUJBQUEsRUFBQSxXQUFXOzs7WUFFakIsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsbUNBQWE7Ozs7SUFBYixVQUFjLElBQVk7O1lBQ3BCLE1BQU0sR0FBRyxFQUFFOztZQUNYLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLEdBQUcsSUFBSSxTQUFTLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFOztnQkFDNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUN6QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkE5REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFIUSxXQUFXOzs7c0JBSHBCO0NBbUVDLEFBL0RELElBK0RDO1NBNURZLFdBQVc7Ozs7OztJQUNWLDRCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gXCIuLi9uZXQvaHR0cC5jbGllbnRcIlxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBfSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIC8v5qC55o2uSWR85YW25LuWIOiOt+WPluebuOWFs+ihqOS/oeaBr1xyXG4gIGdldEJ1c2luZXNzVGFibGVzKHVybDogc3RyaW5nLCBwYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodXJsLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybUluZm8odXJsOiBzdHJpbmcsIHBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvL+ezu+e7n+aOp+S7ti3kurrlkZhcclxuICBnZXRTeXNDdHJFbXBsb3llZShwYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvL2xldCB1cmwgPSBcImVtcHRhYmxlLmpzb25cIjtcclxuICAgIGxldCB1cmwgPSB0aGlzLmdldFdlYkFQSU5hbWUoXCJlbXBsb3llZVwiKTtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLl9odHRwLmdldCh1cmwsIHBhcmFtcyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy/ns7vnu5/mjqfku7Yt57uE57uHXHJcbiAgZ2V0U3lzQ3RyT3JnVHJlZShwYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvL2xldCB1cmwgPSBcIm9yZy10cmVlLmpzb25cIjtcclxuICAgIGxldCB1cmwgPSB0aGlzLmdldFdlYkFQSU5hbWUoXCJvcmdhbml6YXRpb25cIik7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodXJsLCBwYXJhbXMpO1xyXG4gIH0gXHJcblxyXG4gIC8v57O757uf5o6n5Lu2LeiBjOS9jVxyXG4gIGdldFN5c0N0clBvc3Rpb25UYWJsZShwYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvL2xldCB1cmwgPSBcInBvc3Rpb250YWJsZS5qc29uXCI7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5nZXRXZWJBUElOYW1lKFwicG9zdGlvblwiKTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvL+ezu+e7n+aOp+S7ti3lnLDljLpcclxuICBnZXRTeXNDdHJBcmVhKHBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCB1cmwgPSBcInRhYmxlcy5qc29uXCI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8v5qCR5b2i5pWw5o2uXHJcbiAgZ2V0VHJlZURhdGEocGFyYW1zID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy9sZXQgdXJsID0gXCJ0cmVlLmpzb25cIjtcclxuICAgIGxldCB1cmwgPSB0aGlzLmdldFdlYkFQSU5hbWUoXCJ0cmVlXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwgcGFyYW1zKTtcclxuICB9IFxyXG5cclxuICBnZXRXZWJBUElOYW1lKHR5cGU6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWWEZPUk06V0VCQVBJXCIpO1xyXG4gICAgaWYgKHJlcyAhPSB1bmRlZmluZWQgJiYgcmVzICE9IG51bGwgJiYgcmVzICE9IFwiXCIpIHtcclxuICAgICAgbGV0IHdlYmFwaSA9IEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgcmVzdWx0ID0gd2ViYXBpW3R5cGVdO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdCA9PSB1bmRlZmluZWQgfHwgcmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgcmVzdWx0ID0gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==