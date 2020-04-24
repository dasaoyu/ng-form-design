/**
 * @fileoverview added by tsickle
 * Generated from: src/services/drawer/drawer.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DrawerHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    create(title, comp, params, options) {
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
        (observer) => {
            const { size, footer, footerHeight, drawerOptions } = (/** @type {?} */ (options));
            /** @type {?} */
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
            }
            else {
                defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + ` drawer-${(/** @type {?} */ (options)).size}`).trim();
                delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
            }
            if (footer) {
                const { nzPlacement, nzHeight } = (/** @type {?} */ (drawerOptions));
                // Should be header * footer, because of includes header
                /** @type {?} */
                const reduceHeight = (/** @type {?} */ (footerHeight)) * 2 - 2;
                if (nzPlacement === 'left' || nzPlacement === 'right') {
                    defaultOptions.nzBodyStyle = {
                        height: `calc(100% - ${reduceHeight}px)`,
                        overflow: 'auto',
                    };
                }
                else {
                    defaultOptions.nzBodyStyle = {
                        height: `${+(nzHeight || 256) - reduceHeight}px`,
                        overflow: 'auto',
                    };
                }
            }
            /** @type {?} */
            const subject = this.srv.create(Object.assign({}, defaultOptions, drawerOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
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
    }
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    static(title, comp, params, options) {
        /** @type {?} */
        const drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, Object.assign({}, options, { drawerOptions }));
    }
}
DrawerHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DrawerHelper.ctorParameters = () => [
    { type: NzDrawerService }
];
/** @nocollapse */ DrawerHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.ɵɵinject(i1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU1Qyx5Q0EwQkM7Ozs7Ozs7Ozs7Ozs7OztJQWJDLG1DQUEwQzs7Ozs7SUFJMUMscUNBQWlCOzs7OztJQUlqQiwyQ0FBc0I7Ozs7O0lBRXRCLG9DQUFnQjs7Ozs7SUFFaEIsNENBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CbEMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFLNUMsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQTZCO1FBQzFFLE9BQU8sR0FBRyxTQUFTLENBQ2pCO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsYUFBYSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixlQUFlLEVBQUUsRUFBRTthQUNwQjtTQUNGLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixPQUFPLElBQUksVUFBVTs7OztRQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO2tCQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLG1CQUFBLE9BQU8sRUFBdUI7O2tCQUM5RSxjQUFjLEdBQW9CO2dCQUN0QyxTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixjQUFjLENBQ1osbUJBQUEsYUFBYSxFQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssSUFBSSxtQkFBQSxhQUFhLEVBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDekcsR0FBRyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxJQUFJLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLG1CQUFBLGFBQWEsRUFBQyxDQUFDLGVBQWUsR0FBRyxXQUFXLG1CQUFBLE9BQU8sRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RHLE9BQU8sbUJBQUEsYUFBYSxFQUFDLENBQUMsZUFBZSxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxNQUFNLEVBQUU7c0JBQ0osRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsbUJBQUEsYUFBYSxFQUFtQjs7O3NCQUU1RCxZQUFZLEdBQUcsbUJBQUEsWUFBWSxFQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLElBQUksV0FBVyxLQUFLLE1BQU0sSUFBSSxXQUFXLEtBQUssT0FBTyxFQUFFO29CQUNyRCxjQUFjLENBQUMsV0FBVyxHQUFHO3dCQUMzQixNQUFNLEVBQUUsZUFBZSxZQUFZLEtBQUs7d0JBQ3hDLFFBQVEsRUFBRSxNQUFNO3FCQUNqQixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLGNBQWMsQ0FBQyxXQUFXLEdBQUc7d0JBQzNCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsWUFBWSxJQUFJO3dCQUNoRCxRQUFRLEVBQUUsTUFBTTtxQkFDakIsQ0FBQztpQkFDSDthQUNGOztrQkFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLG1CQUFNLGNBQWMsRUFBSyxhQUFhLEVBQUc7O2tCQUNsRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7SUFLRCxNQUFNLENBQUMsS0FBYSxFQUFFLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNkI7O2NBQ3BFLGFBQWEsbUJBQ2pCLGNBQWMsRUFBRSxLQUFLLElBQ2xCLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFPLE9BQU8sSUFBRSxhQUFhLElBQUcsQ0FBQztJQUN6RSxDQUFDOzs7WUEvRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQTlDUixlQUFlOzs7Ozs7OztJQWdEM0IsMkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAdngvdXRpbCc7XHJcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiDlpKflsI/vvIzoi6XlgLzkuLrmlbDlgLznsbvlnovvvIzliJnmoLnmja4gYG56UGxhY2VtZW50YCDoh6rliqjovazljJbkuLogYG56SGVpZ2h0YCDmiJYgYG56V2lkdGhg77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXHJcbiAgICpcclxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XHJcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxyXG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcclxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XHJcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxyXG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XHJcbiAgICpcclxuICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcclxuICAgKi9cclxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKi9cclxuICBmb290ZXI/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcclxuICAgKi9cclxuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XHJcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXHJcbiAgZXhhY3Q/OiBib29sZWFuO1xyXG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXHJcbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIOaKveWxiei+heWKqeexu1xyXG4gKlxyXG4gKiAqKuazqOaEj++8mioqIOaehOW7uue7k+aenOmDveWPr+iiq+iuoumYhe+8jOS9huawuOi/nOmDveS4jeS8muinpuWPkSBgb2JzZXJ2ZXIuZXJyb3JgXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIHRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbiAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cclxuICogLy8g5oiQ5YqfXHJcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XHJcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XHJcbiAqIC8vIOWFs+mXrVxyXG4gKiB0aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XHJcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICog5p6E5bu65LiA5Liq5oq95bGJXHJcbiAgICovXHJcbiAgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBvcHRpb25zID0gZGVlcE1lcmdlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2l6ZTogJ21kJyxcclxuICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgICBkcmF3ZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgICAgICAgIG56V3JhcENsYXNzTmFtZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc2l6ZSwgZm9vdGVyLCBmb290ZXJIZWlnaHQsIGRyYXdlck9wdGlvbnMgfSA9IG9wdGlvbnMgYXMgRHJhd2VySGVscGVyT3B0aW9ucztcclxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcclxuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXHJcbiAgICAgICAgbnpDb250ZW50UGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgICAgbnpUaXRsZTogdGl0bGUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNbXHJcbiAgICAgICAgICBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZHJhd2VyT3B0aW9ucyEubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ1xyXG4gICAgICAgIF0gPSBvcHRpb25zIS5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IChkcmF3ZXJPcHRpb25zIS5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMhLnNpemV9YCkudHJpbSgpO1xyXG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zIS5ueldyYXBDbGFzc05hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmb290ZXIpIHtcclxuICAgICAgICBjb25zdCB7IG56UGxhY2VtZW50LCBuekhlaWdodCB9ID0gZHJhd2VyT3B0aW9ucyBhcyBOekRyYXdlck9wdGlvbnM7XHJcbiAgICAgICAgLy8gU2hvdWxkIGJlIGhlYWRlciAqIGZvb3RlciwgYmVjYXVzZSBvZiBpbmNsdWRlcyBoZWFkZXJcclxuICAgICAgICBjb25zdCByZWR1Y2VIZWlnaHQgPSBmb290ZXJIZWlnaHQhICogMiAtIDI7XHJcbiAgICAgICAgaWYgKG56UGxhY2VtZW50ID09PSAnbGVmdCcgfHwgbnpQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke3JlZHVjZUhlaWdodH1weClgLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7KyhuekhlaWdodCB8fCAyNTYpIC0gcmVkdWNlSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLmRyYXdlck9wdGlvbnMgfSk7XHJcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5p6E5bu65LiA5Liq5oq95bGJ77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXHJcbiAgICovXHJcbiAgc3RhdGljKHRpdGxlOiBzdHJpbmcsIGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0ge1xyXG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXHJcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucyksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgZHJhd2VyT3B0aW9ucyB9KTtcclxuICB9XHJcbn1cclxuIl19