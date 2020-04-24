/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { ACLService } from '@vx/acl';
import { VX_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "../i18n/i18n";
import * as i2 from "@vx/acl";
/**
 * 菜单服务，
 */
var MenuService = /** @class */ (function () {
    function MenuService(i18nSrv, aclService) {
        var _this = this;
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        this.i18n$ = this.i18nSrv.change.subscribe((/**
         * @return {?}
         */
        function () { return _this.resume(); }));
    }
    Object.defineProperty(MenuService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change$.pipe(share());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    MenuService.prototype.visit = /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    function (data, callback) {
        /** @type {?} */
        var inFn = (/**
         * @param {?} list
         * @param {?} parentMenu
         * @param {?} depth
         * @return {?}
         */
        function (list, parentMenu, depth) {
            var e_1, _a;
            try {
                for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var item = list_1_1.value;
                    callback(item, parentMenu, depth);
                    if (item.children && item.children.length > 0) {
                        inFn(item.children, item, depth + 1);
                    }
                    else {
                        item.children = [];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        inFn(data, null, 0);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    MenuService.prototype.add = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.data = items;
        this.resume();
    };
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    MenuService.prototype.resume = /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        /** @type {?} */
        var i = 1;
        /** @type {?} */
        var shortcuts = [];
        this.visit(this.data, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} depth
         * @return {?}
         */
        function (item, parent, depth) {
            item.__id = i++;
            item.__parent = parent;
            item._depth = depth;
            if (!item.link)
                item.link = '';
            if (!item.externalLink)
                item.externalLink = '';
            // badge
            if (item.badge) {
                if (item.badgeDot !== true) {
                    item.badgeDot = false;
                }
                if (!item.badgeStatus) {
                    item.badgeStatus = 'error';
                }
            }
            item._type = item.externalLink ? 2 : 1;
            if (item.children && item.children.length > 0) {
                item._type = 3;
            }
            // icon
            if (typeof item.icon === 'string') {
                /** @type {?} */
                var type = 'class';
                /** @type {?} */
                var value = item.icon;
                // compatible `anticon anticon-user`
                if (~item.icon.indexOf("anticon-")) {
                    type = 'icon';
                    value = value
                        .split('-')
                        .slice(1)
                        .join('-');
                }
                else if (/^https?:\/\//.test(item.icon)) {
                    type = 'img';
                }
                item.icon = (/** @type {?} */ ({ type: type, value: value }));
            }
            if (item.icon != null) {
                item.icon = tslib_1.__assign({ theme: 'outline', spin: false }, ((/** @type {?} */ (item.icon))));
            }
            item.text = item.i18n && _this.i18nSrv ? _this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = item.group !== false;
            // hidden
            item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
            // disabled
            item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
            // acl
            item._aclResult = item.acl && _this.aclService ? _this.aclService.can(item.acl) : true;
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                shortcuts.push(item);
            }
            if (callback)
                callback(item, parent, depth);
        }));
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    };
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @private
     * @param {?} shortcuts
     * @return {?}
     */
    MenuService.prototype.loadShortcut = /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @private
     * @param {?} shortcuts
     * @return {?}
     */
    function (shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        var ls = (/** @type {?} */ (this.data[0].children));
        /** @type {?} */
        var pos = ls.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.shortcutRoot === true; }));
        if (pos === -1) {
            pos = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return (/** @type {?} */ (w.link)).includes('dashboard'); }));
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            var shortcutMenu = (/** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            }));
            (/** @type {?} */ (this.data[0].children)).splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        var _data = (/** @type {?} */ (this.data[0].children))[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        // tslint:disable-next-line:prefer-object-spread
        _data = Object.assign(_data, {
            shortcutRoot: true,
            __id: -1,
            __parent: null,
            _type: 3,
            _depth: 1,
        });
        _data.children = shortcuts.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i._depth = 2;
            i.__parent = _data;
            return i;
        }));
    };
    Object.defineProperty(MenuService.prototype, "menus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 清空菜单
     */
    /**
     * 清空菜单
     * @return {?}
     */
    MenuService.prototype.clear = /**
     * 清空菜单
     * @return {?}
     */
    function () {
        this.data = [];
        this._change$.next(this.data);
    };
    /**
     * @param {?} data
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    MenuService.prototype.getHit = /**
     * @param {?} data
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    function (data, url, recursive, cb) {
        if (recursive === void 0) { recursive = false; }
        if (cb === void 0) { cb = null; }
        /** @type {?} */
        var item = null;
        while (!item && url) {
            this.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            }));
            if (!recursive)
                break;
            url = url
                .split('/')
                .slice(0, -1)
                .join('/');
        }
        return item;
    };
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    MenuService.prototype.openedByUrl = /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    function (url, recursive) {
        if (recursive === void 0) { recursive = false; }
        if (!url)
            return;
        /** @type {?} */
        var findItem = this.getHit(this.data, url, recursive, (/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i._selected = false;
            i._open = false;
        }));
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            findItem._open = true;
            findItem = findItem.__parent;
        } while (findItem);
    };
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    MenuService.prototype.getPathByUrl = /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    function (url, recursive) {
        if (recursive === void 0) { recursive = false; }
        /** @type {?} */
        var ret = [];
        /** @type {?} */
        var item = this.getHit(this.data, url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item.__parent;
        } while (item);
        return ret;
    };
    /**
     * Get menu based on `key`
     */
    /**
     * Get menu based on `key`
     * @param {?} key
     * @return {?}
     */
    MenuService.prototype.getItem = /**
     * Get menu based on `key`
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var res = null;
        this.visit(this.data, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (res == null && item.key === key) {
                res = item;
            }
        }));
        return res;
    };
    /**
     * Set menu based on `key`
     */
    /**
     * Set menu based on `key`
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    MenuService.prototype.setItem = /**
     * Set menu based on `key`
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        /** @type {?} */
        var item = this.getItem(key);
        if (item == null)
            return;
        Object.keys(value).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            item[k] = value[k];
        }));
        this._change$.next(this.data);
    };
    /**
     * @return {?}
     */
    MenuService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._change$.unsubscribe();
        this.i18n$.unsubscribe();
    };
    MenuService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [VX_I18N_TOKEN,] }] },
        { type: ACLService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ MenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.ɵɵinject(i1.VX_I18N_TOKEN, 8), i0.ɵɵinject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
    return MenuService;
}());
export { MenuService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype._change$;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.i18n$;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.aclService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4L3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQWlCLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQU01RDtJQU9FLHFCQUdVLE9BQXNCLEVBQ1YsVUFBc0I7UUFKNUMsaUJBT0M7UUFKUyxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRwQyxhQUFRLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBR3BFLFNBQUksR0FBVyxFQUFFLENBQUM7UUFReEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsRUFBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxzQkFBSSwrQkFBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBOzs7Ozs7SUFFRCwyQkFBSzs7Ozs7SUFBTCxVQUFNLElBQVksRUFBRSxRQUF3RTs7WUFDcEYsSUFBSTs7Ozs7O1FBQUcsVUFBQyxJQUFZLEVBQUUsVUFBdUIsRUFBRSxLQUFhOzs7Z0JBQ2hFLEtBQW1CLElBQUEs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R0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsNkJBQU87Ozs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQVc7O1lBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7WUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXZRRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dEQVE3QixRQUFRLFlBQ1IsTUFBTSxTQUFDLGFBQWE7Z0JBakJoQixVQUFVLHVCQW1CZCxRQUFROzs7c0JBdkJiO0NBb1JDLEFBeFFELElBd1FDO1NBdlFZLFdBQVc7Ozs7OztJQUN0QiwrQkFBNEU7Ozs7O0lBQzVFLDRCQUE0Qjs7Ozs7SUFFNUIsMkJBQTBCOzs7OztJQUd4Qiw4QkFFOEI7Ozs7O0lBQzlCLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAdngvYWNsJztcclxuXHJcbmltcG9ydCB7IFZYSTE4TlNlcnZpY2UsIFZYX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xyXG5pbXBvcnQgeyBNZW51LCBNZW51SWNvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiDoj5zljZXmnI3liqHvvIwgXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZGF0YTogTWVudVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoVlhfSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogVlhJMThOU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdChkYXRhOiBNZW51W10sIGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUgfCBudWxsLCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUgfCBudWxsLCBkZXB0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XHJcbiAgICAgICAgY2FsbGJhY2soaXRlbSwgcGFyZW50TWVudSwgZGVwdGgpO1xyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluRm4oZGF0YSwgbnVsbCwgMCk7XHJcbiAgfVxyXG5cclxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xyXG4gICAgdGhpcy5kYXRhID0gaXRlbXM7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6YeN572u6I+c5Y2V77yM5Y+v6IO9STE4TuOAgeeUqOaIt+adg+mZkOWPmOWKqOaXtumcgOimgeiwg+eUqOWIt+aWsFxyXG4gICAqL1xyXG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSB8IG51bGwsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpdCh0aGlzLmRhdGEsIChpdGVtLCBwYXJlbnQsIGRlcHRoKSA9PiB7XHJcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcclxuICAgICAgaXRlbS5fX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgaXRlbS5fZGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcclxuICAgICAgaWYgKCFpdGVtLmV4dGVybmFsTGluaykgaXRlbS5leHRlcm5hbExpbmsgPSAnJztcclxuXHJcbiAgICAgIC8vIGJhZGdlXHJcbiAgICAgIGlmIChpdGVtLmJhZGdlKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcclxuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XHJcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGl0ZW0uX3R5cGUgPSBpdGVtLmV4dGVybmFsTGluayA/IDIgOiAxO1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpdGVtLl90eXBlID0gMztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWNvblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBsZXQgdHlwZSA9ICdjbGFzcyc7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xyXG4gICAgICAgIC8vIGNvbXBhdGlibGUgYGFudGljb24gYW50aWNvbi11c2VyYFxyXG4gICAgICAgIGlmICh+aXRlbS5pY29uLmluZGV4T2YoYGFudGljb24tYCkpIHtcclxuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgICAgIC5zcGxpdCgnLScpXHJcbiAgICAgICAgICAgIC5zbGljZSgxKVxyXG4gICAgICAgICAgICAuam9pbignLScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaWNvbikpIHtcclxuICAgICAgICAgIHR5cGUgPSAnaW1nJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS5pY29uID0geyB0eXBlLCB2YWx1ZSB9IGFzIGFueTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5pY29uICE9IG51bGwpIHtcclxuICAgICAgICBpdGVtLmljb24gPSB7IHRoZW1lOiAnb3V0bGluZScsIHNwaW46IGZhbHNlLCAuLi4oaXRlbS5pY29uIGFzIE1lbnVJY29uKSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtLnRleHQgPSBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XHJcblxyXG4gICAgICAvLyBncm91cFxyXG4gICAgICBpdGVtLmdyb3VwID0gaXRlbS5ncm91cCAhPT0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBoaWRkZW5cclxuICAgICAgaXRlbS5faGlkZGVuID0gdHlwZW9mIGl0ZW0uaGlkZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uaGlkZTtcclxuXHJcbiAgICAgIC8vIGRpc2FibGVkXHJcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSB0eXBlb2YgaXRlbS5kaXNhYmxlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uZGlzYWJsZWQ7XHJcblxyXG4gICAgICAvLyBhY2xcclxuICAgICAgaXRlbS5fYWNsUmVzdWx0ID0gaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlID8gdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCkgOiB0cnVlO1xyXG5cclxuICAgICAgLy8gc2hvcnRjdXRcclxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpIHtcclxuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XHJcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWKoOi9veW/q+aNt+iPnOWNle+8jOWKoOi9veS9jee9ruinhOWImeWmguS4i++8mlxyXG4gICAqIDHjgIHnu5/kuIDlnKjkuIvmoIcw55qE6IqC54K55LiL77yI5Y2z44CQ5Li75a+86Iiq44CR6IqC54K55LiL5pa577yJXHJcbiAgICogICAgICAx44CB6IulIGNoaWxkcmVuIOWtmOWcqCDjgJBzaG9ydGN1dFJvb3Q6IHRydWXjgJHliJnmnIDkvJjlhYjjgJDmjqjojZDjgJHov5nnp43mlrnlvI9cclxuICAgKiAgICAgIDLjgIHlkKbliJnmn6Xmib7luKbmnInjgJBkYXNoYm9hcmTjgJHlrZfmoLfpk77mjqXvvIzoi6XlrZjlnKjliJnlnKjmraToj5zljZXnmoTkuIvmlrnliJvlu7rlv6vmjbflhaXlj6NcclxuICAgKiAgICAgIDPjgIHlkKbliJnmlL7lnKgw6IqC54K55L2N572uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51W10pIHtcclxuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIGFzIE1lbnVbXTtcclxuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XHJcbiAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmshLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XHJcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcclxuICAgICAgY29uc3Qgc2hvcnRjdXRNZW51ID0ge1xyXG4gICAgICAgIHRleHQ6ICflv6vmjbfoj5zljZUnLFxyXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXHJcbiAgICAgICAgaWNvbjogJ2ljb24tcm9ja2V0JyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgIH0gYXMgTWVudTtcclxuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuIS5zcGxpY2UocG9zLCAwLCBzaG9ydGN1dE1lbnUpO1xyXG4gICAgfVxyXG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuIVtwb3NdO1xyXG4gICAgaWYgKF9kYXRhLmkxOG4gJiYgdGhpcy5pMThuU3J2KSBfZGF0YS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKF9kYXRhLmkxOG4pO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1vYmplY3Qtc3ByZWFkXHJcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcclxuICAgICAgc2hvcnRjdXRSb290OiB0cnVlLFxyXG4gICAgICBfX2lkOiAtMSxcclxuICAgICAgX19wYXJlbnQ6IG51bGwsXHJcbiAgICAgIF90eXBlOiAzLFxyXG4gICAgICBfZGVwdGg6IDEsXHJcbiAgICB9KTtcclxuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcclxuICAgICAgaS5fZGVwdGggPSAyO1xyXG4gICAgICBpLl9fcGFyZW50ID0gX2RhdGE7XHJcbiAgICAgIHJldHVybiBpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWVudXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5riF56m66I+c5Y2VXHJcbiAgICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGl0KGRhdGE6IE1lbnVbXSwgdXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZSA9IGZhbHNlLCBjYjogKChpOiBNZW51KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsKTogTWVudSB8IG51bGwge1xyXG4gICAgbGV0IGl0ZW06IE1lbnUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XHJcbiAgICAgIHRoaXMudmlzaXQoZGF0YSwgaSA9PiB7XHJcbiAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICBjYihpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkubGluayAhPSBudWxsICYmIGkubGluayA9PT0gdXJsKSB7XHJcbiAgICAgICAgICBpdGVtID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZWN1cnNpdmUpIGJyZWFrO1xyXG5cclxuICAgICAgdXJsID0gdXJsXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgLmpvaW4oJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOagueaNrlVSTOiuvue9ruiPnOWNlSBgX29wZW5gIOWxnuaAp1xyXG4gICAqIC0g6IulIGByZWN1cnNpdmU6IHRydWVgIOWImeS8muiHquWKqOWQkeS4iumAkuW9kuafpeaJvlxyXG4gICAqICAtIOiPnOWNleaVsOaNrua6kOWMheWQqyBgL3dhcmVg77yM5YiZIGAvd2FyZS8xYCDkuZ/op4bkuLogYC93YXJlYCDpoblcclxuICAgKi9cclxuICBvcGVuZWRCeVVybCh1cmw6IHN0cmluZyB8IG51bGwsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBmaW5kSXRlbSA9IHRoaXMuZ2V0SGl0KHRoaXMuZGF0YSwgdXJsLCByZWN1cnNpdmUsIGkgPT4ge1xyXG4gICAgICBpLl9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBpLl9vcGVuID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGlmIChmaW5kSXRlbSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICBmaW5kSXRlbS5fc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XHJcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XHJcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja51cmzojrflj5boj5zljZXliJfooahcclxuICAgKiAtIOiLpSBgcmVjdXJzaXZlOiB0cnVlYCDliJnkvJroh6rliqjlkJHkuIrpgJLlvZLmn6Xmib5cclxuICAgKiAgLSDoj5zljZXmlbDmja7mupDljIXlkKsgYC93YXJlYO+8jOWImSBgL3dhcmUvMWAg5Lmf6KeG5Li6IGAvd2FyZWAg6aG5XHJcbiAgICovXHJcbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nLCByZWN1cnNpdmUgPSBmYWxzZSk6IE1lbnVbXSB7XHJcbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xyXG4gICAgbGV0IGl0ZW0gPSB0aGlzLmdldEhpdCh0aGlzLmRhdGEsIHVybCwgcmVjdXJzaXZlKTtcclxuXHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xyXG4gICAgICBpdGVtID0gaXRlbS5fX3BhcmVudDtcclxuICAgIH0gd2hpbGUgKGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbWVudSBiYXNlZCBvbiBga2V5YFxyXG4gICAqL1xyXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBNZW51IHwgbnVsbCB7XHJcbiAgICBsZXQgcmVzOiBNZW51IHwgbnVsbCA9IG51bGw7XHJcbiAgICB0aGlzLnZpc2l0KHRoaXMuZGF0YSwgKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHJlcyA9PSBudWxsICYmIGl0ZW0ua2V5ID09PSBrZXkpIHtcclxuICAgICAgICByZXMgPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgbWVudSBiYXNlZCBvbiBga2V5YFxyXG4gICAqL1xyXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBNZW51KTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGtleSk7XHJcbiAgICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goayA9PiB7XHJcbiAgICAgIGl0ZW1ba10gPSB2YWx1ZVtrXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==