/**
 * @fileoverview added by tsickle
 * Generated from: src/services/drawer/drawer.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { deepMerge } from '@vx/util';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/drawer";
/**
 * @record
 */
export function DrawerHelperOptions() { }
if (false) {
    /**
     * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
     *
     * | 类型 | 默认大小 |
     * | --- | ------ |
     * | `sm` | `300` |
     * | `md` | `600` |
     * | `lg` | `900` |
     * | `xl` | `1200` |
     *
     * > 以上值，可通过覆盖相应的LESS参数自行调整
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.size;
    /**
     * 是否包含底部工具条，默认：`true`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footer;
    /**
     * 底部工具条高度，默认：`55`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footerHeight;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.exact;
    /**
     * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.drawerOptions;
}
/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * \@example
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 */
var DrawerHelper = /** @class */ (function () {
    function DrawerHelper(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个抽屉
     */
    /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    DrawerHelper.prototype.create = /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    function (title, comp, params, options) {
        var _this = this;
        options = deepMerge({
            size: 'md',
            footer: true,
            footerHeight: 55,
            exact: true,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: '',
            },
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            var _a = (/** @type {?} */ (options)), size = _a.size, footer = _a.footer, footerHeight = _a.footerHeight, drawerOptions = _a.drawerOptions;
            /** @type {?} */
            var defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
            }
            else {
                defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + (" drawer-" + (/** @type {?} */ (options)).size)).trim();
                delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
            }
            if (footer) {
                var _b = (/** @type {?} */ (drawerOptions)), nzPlacement = _b.nzPlacement, nzHeight = _b.nzHeight;
                // Should be header * footer, because of includes header
                /** @type {?} */
                var reduceHeight = (/** @type {?} */ (footerHeight)) * 2 - 2;
                if (nzPlacement === 'left' || nzPlacement === 'right') {
                    defaultOptions.nzBodyStyle = {
                        height: "calc(100% - " + reduceHeight + "px)",
                        overflow: 'auto',
                    };
                }
                else {
                    defaultOptions.nzBodyStyle = {
                        height: +(nzHeight || 256) - reduceHeight + "px",
                        overflow: 'auto',
                    };
                }
            }
            /** @type {?} */
            var subject = _this.srv.create(tslib_1.__assign({}, defaultOptions, drawerOptions));
            /** @type {?} */
            var afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if ((/** @type {?} */ (options)).exact === true) {
                    if (res != null) {
                        observer.next(res);
                    }
                }
                else {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            }));
        }));
    };
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     */
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    DrawerHelper.prototype.static = /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    function (title, comp, params, options) {
        /** @type {?} */
        var drawerOptions = tslib_1.__assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, tslib_1.__assign({}, options, { drawerOptions: drawerOptions }));
    };
    DrawerHelper.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DrawerHelper.ctorParameters = function () { return [
        { type: NzDrawerService }
    ]; };
    /** @nocollapse */ DrawerHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.ɵɵinject(i1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
    return DrawerHelper;
}());
export { DrawerHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFFNUMseUNBMEJDOzs7Ozs7Ozs7Ozs7Ozs7SUFiQyxtQ0FBMEM7Ozs7O0lBSTFDLHFDQUFpQjs7Ozs7SUFJakIsMkNBQXNCOzs7OztJQUV0QixvQ0FBZ0I7Ozs7O0lBRWhCLDRDQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxDO0lBRUUsc0JBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUU1Qzs7T0FFRzs7Ozs7Ozs7O0lBQ0gsNkJBQU07Ozs7Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUE2QjtRQUE1RSxpQkE2REM7UUE1REMsT0FBTyxHQUFHLFNBQVMsQ0FDakI7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGVBQWUsRUFBRSxFQUFFO2FBQ3BCO1NBQ0YsRUFDRCxPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsVUFBQyxRQUF1QjtZQUN0QyxJQUFBLGlDQUE4RSxFQUE1RSxjQUFJLEVBQUUsa0JBQU0sRUFBRSw4QkFBWSxFQUFFLGdDQUFnRDs7Z0JBQzlFLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixPQUFPLEVBQUUsS0FBSzthQUNmO1lBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLGNBQWMsQ0FDWixtQkFBQSxhQUFhLEVBQUMsQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLG1CQUFBLGFBQWEsRUFBQyxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN6RyxHQUFHLG1CQUFBLE9BQU8sRUFBQyxDQUFDLElBQUksQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsbUJBQUEsYUFBYSxFQUFDLENBQUMsZUFBZSxJQUFHLGFBQVcsbUJBQUEsT0FBTyxFQUFDLENBQUMsSUFBTSxDQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEcsT0FBTyxtQkFBQSxhQUFhLEVBQUMsQ0FBQyxlQUFlLENBQUM7YUFDdkM7WUFFRCxJQUFJLE1BQU0sRUFBRTtnQkFDSixJQUFBLHVDQUE0RCxFQUExRCw0QkFBVyxFQUFFLHNCQUE2Qzs7O29CQUU1RCxZQUFZLEdBQUcsbUJBQUEsWUFBWSxFQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLElBQUksV0FBVyxLQUFLLE1BQU0sSUFBSSxXQUFXLEtBQUssT0FBTyxFQUFFO29CQUNyRCxjQUFjLENBQUMsV0FBVyxHQUFHO3dCQUMzQixNQUFNLEVBQUUsaUJBQWUsWUFBWSxRQUFLO3dCQUN4QyxRQUFRLEVBQUUsTUFBTTtxQkFDakIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxjQUFjLENBQUMsV0FBVyxHQUFHO3dCQUMzQixNQUFNLEVBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxZQUFZLE9BQUk7d0JBQ2hELFFBQVEsRUFBRSxNQUFNO3FCQUNqQixDQUFDO2lCQUNIO2FBQ0Y7O2dCQUVLLE9BQU8sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sc0JBQU0sY0FBYyxFQUFLLGFBQWEsRUFBRzs7Z0JBQ2xFLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEdBQVE7Z0JBQ3hELElBQUksbUJBQUEsT0FBTyxFQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNGO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7Ozs7SUFDSCw2QkFBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQTZCOztZQUNwRSxhQUFhLHNCQUNqQixjQUFjLEVBQUUsS0FBSyxJQUNsQixDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBTyxPQUFPLElBQUUsYUFBYSxlQUFBLElBQUcsQ0FBQztJQUN6RSxDQUFDOztnQkEvRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkE5Q1IsZUFBZTs7O3VCQUZ6QztDQWdJQyxBQWhGRCxJQWdGQztTQS9FWSxZQUFZOzs7Ozs7SUFDWCwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ0B2eC91dGlsJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zLCBOekRyYXdlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIOWkp+Wwj++8jOiLpeWAvOS4uuaVsOWAvOexu+Wei++8jOWImeagueaNriBgbnpQbGFjZW1lbnRgIOiHquWKqOi9rOWMluS4uiBgbnpIZWlnaHRgIOaIliBgbnpXaWR0aGDvvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcclxuICAgKlxyXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcclxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XHJcbiAgICogfCBgc21gIHwgYDMwMGAgfFxyXG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcclxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XHJcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcclxuICAgKlxyXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxyXG4gICAqL1xyXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxyXG4gICAqL1xyXG4gIGZvb3Rlcj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxyXG4gICAqL1xyXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcclxuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cclxuICBleGFjdD86IGJvb2xlYW47XHJcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cclxuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICog5oq95bGJ6L6F5Yqp57G7XHJcbiAqXHJcbiAqICoq5rOo5oSP77yaKiog5p6E5bu657uT5p6c6YO95Y+v6KKr6K6i6ZiF77yM5L2G5rC46L+c6YO95LiN5Lya6Kem5Y+RIGBvYnNlcnZlci5lcnJvcmBcclxuICpcclxuICogQGV4YW1wbGVcclxuICogdGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxyXG4gKiAvLyDmiJDlip9cclxuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcclxuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcclxuICogLy8g5YWz6ZetXHJcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcclxuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRHJhd2VySGVscGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpEcmF3ZXJTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYlcclxuICAgKi9cclxuICBjcmVhdGUodGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXHJcbiAgICAgIHtcclxuICAgICAgICBzaXplOiAnbWQnLFxyXG4gICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICBmb290ZXJIZWlnaHQ6IDU1LFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGRyYXdlck9wdGlvbnM6IHtcclxuICAgICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxyXG4gICAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcclxuICAgICAgY29uc3QgeyBzaXplLCBmb290ZXIsIGZvb3RlckhlaWdodCwgZHJhd2VyT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBEcmF3ZXJIZWxwZXJPcHRpb25zO1xyXG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xyXG4gICAgICAgIG56Q29udGVudDogY29tcCxcclxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcclxuICAgICAgICBuelRpdGxlOiB0aXRsZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBkZWZhdWx0T3B0aW9uc1tcclxuICAgICAgICAgIGRyYXdlck9wdGlvbnMhLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXHJcbiAgICAgICAgXSA9IG9wdGlvbnMhLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZSArIGAgZHJhd2VyLSR7b3B0aW9ucyEuc2l6ZX1gKS50cmltKCk7XHJcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZvb3Rlcikge1xyXG4gICAgICAgIGNvbnN0IHsgbnpQbGFjZW1lbnQsIG56SGVpZ2h0IH0gPSBkcmF3ZXJPcHRpb25zIGFzIE56RHJhd2VyT3B0aW9ucztcclxuICAgICAgICAvLyBTaG91bGQgYmUgaGVhZGVyICogZm9vdGVyLCBiZWNhdXNlIG9mIGluY2x1ZGVzIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IHJlZHVjZUhlaWdodCA9IGZvb3RlckhlaWdodCEgKiAyIC0gMjtcclxuICAgICAgICBpZiAobnpQbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBuelBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7cmVkdWNlSGVpZ2h0fXB4KWAsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHsrKG56SGVpZ2h0IHx8IDI1NikgLSByZWR1Y2VIZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4uZHJhd2VyT3B0aW9ucyB9KTtcclxuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYnvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cclxuICAgKi9cclxuICBzdGF0aWModGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGRyYXdlck9wdGlvbnMgPSB7XHJcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcclxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5kcmF3ZXJPcHRpb25zKSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBkcmF3ZXJPcHRpb25zIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=