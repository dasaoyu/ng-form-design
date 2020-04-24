/**
 * @fileoverview added by tsickle
 * Generated from: src/services/modal/modal.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deepMerge } from '@vx/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
/**
 * @record
 */
export function ModalHelperOptions() { }
if (false) {
    /**
     * 大小；例如：lg、600，默认：`lg`
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.size;
    /**
     * 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.modalOptions;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.exact;
    /**
     * 是否包裹标签页，修复模态包含标签间距问题
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.includeTabs;
}
/**
 * 对话框辅助类
 */
export class ModalHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个对话框
     *
     * \@example
     * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} options 额外参数
     *
     * @return {?}
     */
    create(comp, params, options) {
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false,
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            const { size, includeTabs, modalOptions } = (/** @type {?} */ (options));
            /** @type {?} */
            let cls = '';
            /** @type {?} */
            let width = '';
            if (size) {
                if (typeof size === 'number') {
                    width = `${size}px`;
                }
                else {
                    cls = `modal-${size}`;
                }
            }
            if (includeTabs) {
                cls += ' modal-include-tabs';
            }
            if (modalOptions && modalOptions.nzWrapClassName) {
                cls += ` ${modalOptions.nzWrapClassName}`;
                delete modalOptions.nzWrapClassName;
            }
            /** @type {?} */
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
            };
            /** @type {?} */
            const subject = this.srv.create(Object.assign({}, defaultOptions, modalOptions));
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
     * 构建静态框，点击蒙层不允许关闭
     *
     * \@example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} options 额外参数
     *
     * @return {?}
     */
    createStatic(comp, params, options) {
        /** @type {?} */
        const modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
        return this.create(comp, params, Object.assign({}, options, { modalOptions }));
    }
    /**
     * 打开对话框
     * \@example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} size 大小；例如：lg、600，默认：lg
     * @param {?=} options 对话框 `ModalOptionsForService` 参数
     *
     * @return {?}
     */
    open(comp, params, size = 'lg', options) {
        return this.create(comp, params, {
            size,
            modalOptions: options,
            exact: false,
        });
    }
    /**
     * 静态框，点击蒙层不允许关闭
     * \@example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} size 大小；例如：lg、600，默认：lg
     * @param {?=} options 对话框 `ModalOptionsForService` 参数
     *
     * @return {?}
     */
    static(comp, params, size = 'lg', options) {
        return this.open(comp, params, size, Object.assign({ nzMaskClosable: false }, options));
    }
}
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ ModalHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.ɵɵinject(i1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4L3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQTBCLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU1Qyx3Q0FTQzs7Ozs7O0lBUEMsa0NBQStDOzs7OztJQUUvQywwQ0FBc0M7Ozs7O0lBRXRDLG1DQUFnQjs7Ozs7SUFFaEIseUNBQXNCOzs7OztBQU94QixNQUFNLE9BQU8sV0FBVzs7OztJQUN0QixZQUFvQixHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCM0MsTUFBTSxDQUFDLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNEI7UUFDMUQsT0FBTyxHQUFHLFNBQVMsQ0FDakI7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEtBQUs7U0FDbkIsRUFDRCxPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7a0JBQzFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxtQkFBQSxPQUFPLEVBQXNCOztnQkFDckUsR0FBRyxHQUFHLEVBQUU7O2dCQUNSLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQzVCLEtBQUssR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxHQUFHLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELElBQUksV0FBVyxFQUFFO2dCQUNmLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQzthQUM5QjtZQUNELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2hELEdBQUcsSUFBSSxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDMUMsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDO2FBQ3JDOztrQkFDSyxjQUFjLEdBQTJCO2dCQUM3QyxlQUFlLEVBQUUsR0FBRztnQkFDcEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUNsQyxRQUFRLEVBQUUsSUFBSTtnQkFDZCxpQkFBaUIsRUFBRSxNQUFNO2FBQzFCOztrQkFDSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLG1CQUFNLGNBQWMsRUFBSyxZQUFZLEVBQUc7O2tCQUNqRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkQsWUFBWSxDQUFDLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNEI7O2NBQzFELFlBQVksbUJBQ2hCLGNBQWMsRUFBRSxLQUFLLElBQ2xCLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sb0JBQU8sT0FBTyxJQUFFLFlBQVksSUFBRyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCRCxJQUFJLENBQUMsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUFnRCxJQUFJLEVBQUUsT0FBZ0M7UUFDbEgsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDL0IsSUFBSTtZQUNKLFlBQVksRUFBRSxPQUFPO1lBQ3JCLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JELE1BQU0sQ0FBQyxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQWdELElBQUksRUFBRSxPQUFhO1FBQ2pHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksa0JBQ2pDLGNBQWMsRUFBRSxLQUFLLElBQ2xCLE9BQU8sRUFDVixDQUFDO0lBQ0wsQ0FBQzs7O1lBMUlGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFqQkQsY0FBYzs7Ozs7Ozs7SUFtQmpDLDBCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQHZ4L3V0aWwnO1xyXG5pbXBvcnQgeyBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlbHBlck9wdGlvbnMge1xyXG4gIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cclxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xyXG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc0ZvclNlcnZpY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbnotbW9kYWwudHlwZS50cykg5Y+C5pWwICovXHJcbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcclxuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cclxuICBleGFjdD86IGJvb2xlYW47XHJcbiAgLyoqIOaYr+WQpuWMheijueagh+etvumhte+8jOS/ruWkjeaooeaAgeWMheWQq+agh+etvumXtOi3nemXrumimCAqL1xyXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWvueivneahhui+heWKqeexu1xyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsSGVscGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaehOW7uuS4gOS4quWvueivneahhlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogdGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXHJcbiAgICogLy8g5oiQ5YqfXHJcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xyXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xyXG4gICAqIC8vIOWFs+mXrVxyXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XHJcbiAgICovXHJcbiAgY3JlYXRlKGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXHJcbiAgICAgIHtcclxuICAgICAgICBzaXplOiAnbGcnLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBNb2RhbEhlbHBlck9wdGlvbnM7XHJcbiAgICAgIGxldCBjbHMgPSAnJztcclxuICAgICAgbGV0IHdpZHRoID0gJyc7XHJcbiAgICAgIGlmIChzaXplKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgd2lkdGggPSBgJHtzaXplfXB4YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7c2l6ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5jbHVkZVRhYnMpIHtcclxuICAgICAgICBjbHMgKz0gJyBtb2RhbC1pbmNsdWRlLXRhYnMnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtb2RhbE9wdGlvbnMgJiYgbW9kYWxPcHRpb25zLm56V3JhcENsYXNzTmFtZSkge1xyXG4gICAgICAgIGNscyArPSBgICR7bW9kYWxPcHRpb25zLm56V3JhcENsYXNzTmFtZX1gO1xyXG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge1xyXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogY2xzLFxyXG4gICAgICAgIG56Q29udGVudDogY29tcCxcclxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxyXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ubW9kYWxPcHRpb25zIH0pO1xyXG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMhLmV4YWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxyXG4gICAqIC8vIOaIkOWKn1xyXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcclxuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcclxuICAgKiAvLyDlhbPpl61cclxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xyXG4gICAqL1xyXG4gIGNyZWF0ZVN0YXRpYyhjb21wOiBhbnksIHBhcmFtcz86IGFueSwgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSB7XHJcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcclxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMpLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgbW9kYWxPcHRpb25zIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5omT5byA5a+56K+d5qGGXHJcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcclxuICAgKiBAcGFyYW0gc2l6ZSDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmxnXHJcbiAgICogQHBhcmFtIG9wdGlvbnMg5a+56K+d5qGGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDlj4LmlbBcclxuICAgKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxyXG4gICAqIC8vIOaIkOWKn1xyXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcclxuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcclxuICAgKiAvLyDlhbPpl61cclxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xyXG4gICAqL1xyXG4gIG9wZW4oY29tcDogYW55LCBwYXJhbXM/OiBhbnksIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcclxuICAgICAgc2l6ZSxcclxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICBleGFjdDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxyXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxyXG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXHJcbiAgICogQHBhcmFtIHNpemUg5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpsZ1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIOWvueivneahhiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAg5Y+C5pWwXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xyXG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cclxuICAgKiAvLyDmiJDlip9cclxuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XHJcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XHJcbiAgICogLy8g5YWz6ZetXHJcbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcclxuICAgKi9cclxuICBzdGF0aWMoY29tcDogYW55LCBwYXJhbXM/OiBhbnksIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsIG9wdGlvbnM/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3Blbihjb21wLCBwYXJhbXMsIHNpemUsIHtcclxuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==