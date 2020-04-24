/**
 * @fileoverview added by tsickle
 * Generated from: src/services/title/title.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VX_I18N_TOKEN } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../menu/menu.service";
import * as i3 from "../i18n/i18n";
import * as i4 from "@angular/common";
var TitleService = /** @class */ (function () {
    function TitleService(injector, title, menuSrv, i18nSrv, doc) {
        var _this = this;
        this.injector = injector;
        this.title = title;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this._prefix = '';
        this._suffix = '';
        this._separator = ' - ';
        this._reverse = false;
        this.DELAY_TIME = 25;
        /**
         * 设置默认标题名
         */
        this.default = "Not Page Name";
        this.i18n$ = this.i18nSrv.change.pipe(filter((/**
         * @return {?}
         */
        function () { return !!_this.i18n$; }))).subscribe((/**
         * @return {?}
         */
        function () { return _this.setTitle(); }));
    }
    Object.defineProperty(TitleService.prototype, "separator", {
        /** 设置分隔符 */
        set: /**
         * 设置分隔符
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._separator = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleService.prototype, "prefix", {
        /** 设置前缀 */
        set: /**
         * 设置前缀
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleService.prototype, "suffix", {
        /** 设置后缀 */
        set: /**
         * 设置后缀
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._suffix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleService.prototype, "reverse", {
        /** 设置是否反转 */
        set: /**
         * 设置是否反转
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._reverse = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TitleService.prototype.getByElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.doc.querySelector('.vx-default__content-title h1') || this.doc.querySelector('.page-header__title');
        if (el) {
            return el.firstChild.textContent.trim();
        }
        return '';
    };
    /**
     * @private
     * @return {?}
     */
    TitleService.prototype.getByRoute = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        /** @type {?} */
        var data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return data.title;
    };
    /**
     * @private
     * @return {?}
     */
    TitleService.prototype.getByMenu = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return '';
        /** @type {?} */
        var item = menus[menus.length - 1];
        /** @type {?} */
        var title;
        if (item.i18n && this.i18nSrv)
            title = this.i18nSrv.fanyi(item.i18n);
        return title || item.text;
    };
    /**
     * @private
     * @param {?=} title
     * @return {?}
     */
    TitleService.prototype._setTitle = /**
     * @private
     * @param {?=} title
     * @return {?}
     */
    function (title) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        /** @type {?} */
        var newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push.apply(newTitles, tslib_1.__spread(((/** @type {?} */ (title)))));
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    };
    /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-vx/ng-vx/issues/1261)
     */
    /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-vx/ng-vx/issues/1261)
     * @param {?=} title
     * @return {?}
     */
    TitleService.prototype.setTitle = /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-vx/ng-vx/issues/1261)
     * @param {?=} title
     * @return {?}
     */
    function (title) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this._setTitle(title); }), this.DELAY_TIME);
    };
    /**
     * Set i18n key of the document title
     */
    /**
     * Set i18n key of the document title
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    TitleService.prototype.setTitleByI18n = /**
     * Set i18n key of the document title
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    function (key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    };
    /**
     * @return {?}
     */
    TitleService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    TitleService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    TitleService.ctorParameters = function () { return [
        { type: Injector },
        { type: Title },
        { type: MenuService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [VX_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ TitleService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.Title), i0.ɵɵinject(i2.MenuService), i0.ɵɵinject(i3.VX_I18N_TOKEN, 8), i0.ɵɵinject(i4.DOCUMENT)); }, token: TitleService, providedIn: "root" });
    return TitleService;
}());
export { TitleService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._prefix;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._suffix;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._separator;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._reverse;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.i18n$;
    /** @type {?} */
    TitleService.prototype.DELAY_TIME;
    /**
     * 设置默认标题名
     * @type {?}
     */
    TitleService.prototype.default;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.title;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWlCLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUVuRDtJQVVFLHNCQUNVLFFBQWtCLEVBQ2xCLEtBQVksRUFDWixPQUFvQixFQUdwQixPQUFzQixFQUNKLEdBQVE7UUFQcEMsaUJBVUM7UUFUUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR3BCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDSixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBZjVCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHekIsZUFBVSxHQUFHLEVBQUUsQ0FBQzs7OztRQW1DekIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQXhCeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTs7O1FBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFaLENBQVksRUFBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUNyRyxDQUFDO0lBR0Qsc0JBQUksbUNBQVM7UUFEYixZQUFZOzs7Ozs7UUFDWixVQUFjLEtBQWE7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxnQ0FBTTtRQURWLFdBQVc7Ozs7OztRQUNYLFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGdDQUFNO1FBRFYsV0FBVzs7Ozs7O1FBQ1gsVUFBVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksaUNBQU87UUFEWCxhQUFhOzs7Ozs7UUFDYixVQUFZLEtBQWM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7O0lBS08sbUNBQVk7Ozs7SUFBcEI7O1lBQ1EsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7UUFDbkgsSUFBSSxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVPLGlDQUFVOzs7O0lBQWxCOztZQUNNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUN6QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUN4RCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxnQ0FBUzs7OztJQUFqQjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQVMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzlFLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBRXJDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBQ2hDLEtBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU8sZ0NBQVM7Ozs7O0lBQWpCLFVBQWtCLEtBQXlCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN0RjtRQUNELElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjs7WUFFRyxTQUFTLEdBQWEsRUFBRTtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxTQUFTLENBQUMsSUFBSSxPQUFkLFNBQVMsbUJBQVMsQ0FBQyxtQkFBQSxLQUFLLEVBQVksQ0FBQyxHQUFFO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILCtCQUFROzs7OztJQUFSLFVBQVMsS0FBeUI7UUFBbEMsaUJBRUM7UUFEQyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsR0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gscUNBQWM7Ozs7OztJQUFkLFVBQWUsR0FBVyxFQUFFLE1BQVc7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkE3R0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFUTCxRQUFRO2dCQUM1QixLQUFLO2dCQU1MLFdBQVc7Z0RBZ0JmLFFBQVEsWUFDUixNQUFNLFNBQUMsYUFBYTtnREFFcEIsTUFBTSxTQUFDLFFBQVE7Ozt1QkEzQnBCO0NBd0hDLEFBOUdELElBOEdDO1NBN0dZLFlBQVk7Ozs7OztJQUN2QiwrQkFBNkI7Ozs7O0lBQzdCLCtCQUE2Qjs7Ozs7SUFDN0Isa0NBQW1DOzs7OztJQUNuQyxnQ0FBa0M7Ozs7O0lBQ2xDLDZCQUE0Qjs7SUFFNUIsa0NBQXlCOzs7OztJQW1DekIsK0JBQTBCOzs7OztJQWhDeEIsZ0NBQTBCOzs7OztJQUMxQiw2QkFBb0I7Ozs7O0lBQ3BCLCtCQUE0Qjs7Ozs7SUFDNUIsK0JBRThCOzs7OztJQUM5QiwyQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBWWEkxOE5TZXJ2aWNlLCBWWF9JMThOX1RPS0VOIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9wcmVmaXg6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX3N1ZmZpeDogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yOiBzdHJpbmcgPSAnIC0gJztcclxuICBwcml2YXRlIF9yZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICByZWFkb25seSBERUxBWV9USU1FID0gMjU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHRpdGxlOiBUaXRsZSxcclxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChWWF9JMThOX1RPS0VOKVxyXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBWWEkxOE5TZXJ2aWNlLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnBpcGUoZmlsdGVyKCgpID0+ICEhdGhpcy5pMThuJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9ruWIhumalOespiAqL1xyXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VwYXJhdG9yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiog6K6+572u5YmN57yAICovXHJcbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDorr7nva7lkI7nvIAgKi9cclxuICBzZXQgc3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9ruaYr+WQpuWPjei9rCAqL1xyXG4gIHNldCByZXZlcnNlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZXZlcnNlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiog6K6+572u6buY6K6k5qCH6aKY5ZCNICovXHJcbiAgZGVmYXVsdCA9IGBOb3QgUGFnZSBOYW1lYDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRCeUVsZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnZ4LWRlZmF1bHRfX2NvbnRlbnQtdGl0bGUgaDEnKSB8fCB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX3RpdGxlJyk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCeVJvdXRlKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcclxuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XHJcbiAgICBjb25zdCBkYXRhID0gKG5leHQuc25hcHNob3QgJiYgbmV4dC5zbmFwc2hvdC5kYXRhKSB8fCB7fTtcclxuICAgIGlmIChkYXRhLnRpdGxlSTE4biAmJiB0aGlzLmkxOG5TcnYpIGRhdGEudGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoZGF0YS50aXRsZUkxOG4pO1xyXG4gICAgcmV0dXJuIGRhdGEudGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJ5TWVudSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKS51cmwpO1xyXG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPD0gMCkgcmV0dXJuICcnO1xyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBtZW51c1ttZW51cy5sZW5ndGggLSAxXTtcclxuICAgIGxldCB0aXRsZTtcclxuICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xyXG4gICAgcmV0dXJuIHRpdGxlIHx8IGl0ZW0udGV4dDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGlmICghdGl0bGUpIHtcclxuICAgICAgdGl0bGUgPSB0aGlzLmdldEJ5Um91dGUoKSB8fCB0aGlzLmdldEJ5TWVudSgpIHx8IHRoaXMuZ2V0QnlFbGVtZW50KCkgfHwgdGhpcy5kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRpdGxlICYmICFBcnJheS5pc0FycmF5KHRpdGxlKSkge1xyXG4gICAgICB0aXRsZSA9IFt0aXRsZV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1RpdGxlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcclxuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fcHJlZml4KTtcclxuICAgIH1cclxuICAgIG5ld1RpdGxlcy5wdXNoKC4uLih0aXRsZSBhcyBzdHJpbmdbXSkpO1xyXG4gICAgaWYgKHRoaXMuX3N1ZmZpeCkge1xyXG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9zdWZmaXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3JldmVyc2UpIHtcclxuICAgICAgbmV3VGl0bGVzID0gbmV3VGl0bGVzLnJldmVyc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGl0bGUuc2V0VGl0bGUobmV3VGl0bGVzLmpvaW4odGhpcy5fc2VwYXJhdG9yKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGRvY3VtZW50IHRpdGxlLCB3aWxsIGJlIGRlbGF5IGAyNW1zYCwgcGxzIHJlZmVyIHRvIFsjMTI2MV0oaHR0cHM6Ly9naXRodWIuY29tL25nLXZ4L25nLXZ4L2lzc3Vlcy8xMjYxKVxyXG4gICAqL1xyXG4gIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fc2V0VGl0bGUodGl0bGUpLCB0aGlzLkRFTEFZX1RJTUUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGkxOG4ga2V5IG9mIHRoZSBkb2N1bWVudCB0aXRsZVxyXG4gICAqL1xyXG4gIHNldFRpdGxlQnlJMThuKGtleTogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xyXG4gICAgdGhpcy5zZXRUaXRsZSh0aGlzLmkxOG5TcnYuZmFueWkoa2V5LCBwYXJhbXMpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=