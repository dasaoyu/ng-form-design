/**
 * @fileoverview added by tsickle
 * Generated from: src/services/title/title.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class TitleService {
    /**
     * @param {?} injector
     * @param {?} title
     * @param {?} menuSrv
     * @param {?} i18nSrv
     * @param {?} doc
     */
    constructor(injector, title, menuSrv, i18nSrv, doc) {
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
        this.default = `Not Page Name`;
        this.i18n$ = this.i18nSrv.change.pipe(filter((/**
         * @return {?}
         */
        () => !!this.i18n$))).subscribe((/**
         * @return {?}
         */
        () => this.setTitle()));
    }
    /**
     * 设置分隔符
     * @param {?} value
     * @return {?}
     */
    set separator(value) {
        this._separator = value;
    }
    /**
     * 设置前缀
     * @param {?} value
     * @return {?}
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * 设置后缀
     * @param {?} value
     * @return {?}
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * 设置是否反转
     * @param {?} value
     * @return {?}
     */
    set reverse(value) {
        this._reverse = value;
    }
    /**
     * @private
     * @return {?}
     */
    getByElement() {
        /** @type {?} */
        const el = this.doc.querySelector('.vx-default__content-title h1') || this.doc.querySelector('.page-header__title');
        if (el) {
            return el.firstChild.textContent.trim();
        }
        return '';
    }
    /**
     * @private
     * @return {?}
     */
    getByRoute() {
        /** @type {?} */
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        /** @type {?} */
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return data.title;
    }
    /**
     * @private
     * @return {?}
     */
    getByMenu() {
        /** @type {?} */
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return '';
        /** @type {?} */
        const item = menus[menus.length - 1];
        /** @type {?} */
        let title;
        if (item.i18n && this.i18nSrv)
            title = this.i18nSrv.fanyi(item.i18n);
        return title || item.text;
    }
    /**
     * @private
     * @param {?=} title
     * @return {?}
     */
    _setTitle(title) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        /** @type {?} */
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...((/** @type {?} */ (title))));
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
    /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-vx/ng-vx/issues/1261)
     * @param {?=} title
     * @return {?}
     */
    setTitle(title) {
        setTimeout((/**
         * @return {?}
         */
        () => this._setTitle(title)), this.DELAY_TIME);
    }
    /**
     * Set i18n key of the document title
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    setTitleByI18n(key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
TitleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
TitleService.ctorParameters = () => [
    { type: Injector },
    { type: Title },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [VX_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ TitleService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.Title), i0.ɵɵinject(i2.MenuService), i0.ɵɵinject(i3.VX_I18N_TOKEN, 8), i0.ɵɵinject(i4.DOCUMENT)); }, token: TitleService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBaUIsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBR25ELE1BQU0sT0FBTyxZQUFZOzs7Ozs7OztJQVN2QixZQUNVLFFBQWtCLEVBQ2xCLEtBQVksRUFDWixPQUFvQixFQUdwQixPQUFzQixFQUNKLEdBQVE7UUFOMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdwQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ0osUUFBRyxHQUFILEdBQUcsQ0FBSztRQWY1QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR3pCLGVBQVUsR0FBRyxFQUFFLENBQUM7Ozs7UUFtQ3pCLFlBQU8sR0FBRyxlQUFlLENBQUM7UUF4QnhCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxD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QUM3QiwrQkFBNkI7Ozs7O0lBQzdCLGtDQUFtQzs7Ozs7SUFDbkMsZ0NBQWtDOzs7OztJQUNsQyw2QkFBNEI7O0lBRTVCLGtDQUF5Qjs7Ozs7SUFtQ3pCLCtCQUEwQjs7Ozs7SUFoQ3hCLGdDQUEwQjs7Ozs7SUFDMUIsNkJBQW9COzs7OztJQUNwQiwrQkFBNEI7Ozs7O0lBQzVCLCtCQUU4Qjs7Ozs7SUFDOUIsMkJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVlhJMThOU2VydmljZSwgVlhfSTE4Tl9UT0tFTiB9IGZyb20gJy4uL2kxOG4vaTE4bic7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vbWVudS9tZW51LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfcHJlZml4OiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIF9zdWZmaXg6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX3NlcGFyYXRvcjogc3RyaW5nID0gJyAtICc7XHJcbiAgcHJpdmF0ZSBfcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcmVhZG9ubHkgREVMQVlfVElNRSA9IDI1O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXHJcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoVlhfSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogVlhJMThOU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7XHJcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5waXBlKGZpbHRlcigoKSA9PiAhIXRoaXMuaTE4biQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKiDorr7nva7liIbpmpTnrKYgKi9cclxuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9ruWJjee8gCAqL1xyXG4gIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiog6K6+572u5ZCO57yAICovXHJcbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zdWZmaXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDorr7nva7mmK/lkKblj43ovawgKi9cclxuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9rum7mOiupOagh+mimOWQjSAqL1xyXG4gIGRlZmF1bHQgPSBgTm90IFBhZ2UgTmFtZWA7XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy52eC1kZWZhdWx0X19jb250ZW50LXRpdGxlIGgxJykgfHwgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHJldHVybiBlbC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IG5leHQgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XHJcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZGF0YSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XHJcbiAgICBpZiAoZGF0YS50aXRsZUkxOG4gJiYgdGhpcy5pMThuU3J2KSBkYXRhLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGRhdGEudGl0bGVJMThuKTtcclxuICAgIHJldHVybiBkYXRhLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikudXJsKTtcclxuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoIDw9IDApIHJldHVybiAnJztcclxuXHJcbiAgICBjb25zdCBpdGVtID0gbWVudXNbbWVudXMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgdGl0bGU7XHJcbiAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcclxuICAgIHJldHVybiB0aXRsZSB8fCBpdGVtLnRleHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgIHRpdGxlID0gdGhpcy5nZXRCeVJvdXRlKCkgfHwgdGhpcy5nZXRCeU1lbnUoKSB8fCB0aGlzLmdldEJ5RWxlbWVudCgpIHx8IHRoaXMuZGVmYXVsdDtcclxuICAgIH1cclxuICAgIGlmICh0aXRsZSAmJiAhQXJyYXkuaXNBcnJheSh0aXRsZSkpIHtcclxuICAgICAgdGl0bGUgPSBbdGl0bGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdUaXRsZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XHJcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XHJcbiAgICB9XHJcbiAgICBuZXdUaXRsZXMucHVzaCguLi4odGl0bGUgYXMgc3RyaW5nW10pKTtcclxuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcclxuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fc3VmZml4KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XHJcbiAgICAgIG5ld1RpdGxlcyA9IG5ld1RpdGxlcy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBkb2N1bWVudCB0aXRsZSwgd2lsbCBiZSBkZWxheSBgMjVtc2AsIHBscyByZWZlciB0byBbIzEyNjFdKGh0dHBzOi8vZ2l0aHViLmNvbS9uZy12eC9uZy12eC9pc3N1ZXMvMTI2MSlcclxuICAgKi9cclxuICBzZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3NldFRpdGxlKHRpdGxlKSwgdGhpcy5ERUxBWV9USU1FKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBpMThuIGtleSBvZiB0aGUgZG9jdW1lbnQgdGl0bGVcclxuICAgKi9cclxuICBzZXRUaXRsZUJ5STE4bihrZXk6IHN0cmluZywgcGFyYW1zPzoge30pIHtcclxuICAgIHRoaXMuc2V0VGl0bGUodGhpcy5pMThuU3J2LmZhbnlpKGtleSwgcGFyYW1zKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19