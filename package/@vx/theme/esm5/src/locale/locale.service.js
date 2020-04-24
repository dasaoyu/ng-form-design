/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/locale.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import zhCN from './languages/zh-CN';
import { DELON_LOCALE } from './locale.tokens';
var VXLocaleService = /** @class */ (function () {
    function VXLocaleService(locale) {
        this.change$ = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    Object.defineProperty(VXLocaleService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this.change$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} locale
     * @return {?}
     */
    VXLocaleService.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.abbr === locale.abbr) {
            return;
        }
        this._locale = locale;
        this.change$.next(locale);
    };
    Object.defineProperty(VXLocaleService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    VXLocaleService.prototype.getData = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this._locale[path] || {};
    };
    VXLocaleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXLocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
    ]; };
    return VXLocaleService;
}());
export { VXLocaleService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXLocaleService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    VXLocaleService.prototype.change$;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
export function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new VXLocaleService(locale);
}
/** @type {?} */
export var DELON_LOCALE_SERVICE_PROVIDER = {
    provide: VXLocaleService,
    useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), VXLocaleService], DELON_LOCALE],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sSUFBSSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQztJQUtFLHlCQUFrQyxNQUE2QjtRQUZ2RCxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdsRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsTUFBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDckQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkEzQkYsVUFBVTs7OztnREFLSSxNQUFNLFNBQUMsWUFBWTs7SUF1QmxDLHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksZUFBZTs7Ozs7O0lBQzFCLGtDQUFnQzs7Ozs7SUFDaEMsa0NBQW9FOzs7Ozs7O0FBMkJ0RSxNQUFNLFVBQVUscUNBQXFDLENBQ25ELEtBQXNCLEVBQ3RCLE1BQXNCO0lBRXRCLE9BQU8sS0FBSyxJQUFJLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7O0FBRUQsTUFBTSxLQUFPLDZCQUE2QixHQUFhO0lBQ3JELE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFVBQVUsRUFBRSxxQ0FBcUM7SUFDakQsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZUFBZSxDQUFDLEVBQUUsWUFBWSxDQUFDO0NBQ3hFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xyXG5pbXBvcnQgeyBERUxPTl9MT0NBTEUgfSBmcm9tICcuL2xvY2FsZS50b2tlbnMnO1xyXG5pbXBvcnQgeyBGdWxsTG9jYWxlRGF0YSwgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLnR5cGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZYTG9jYWxlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbG9jYWxlOiBGdWxsTG9jYWxlRGF0YTtcclxuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZ1bGxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFTE9OX0xPQ0FMRSkgbG9jYWxlOiBGdWxsTG9jYWxlRGF0YSB8IG51bGwpIHtcclxuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aENOKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxGdWxsTG9jYWxlRGF0YT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZShsb2NhbGU6IEZ1bGxMb2NhbGVEYXRhKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5hYmJyID09PSBsb2NhbGUuYWJicikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICB0aGlzLmNoYW5nZSQubmV4dChsb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvY2FsZSgpOiBGdWxsTG9jYWxlRGF0YSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShwYXRoOiBzdHJpbmcpOiBMb2NhbGVEYXRhIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGVbcGF0aF0gfHwge307XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShcclxuICBleGlzdDogVlhMb2NhbGVTZXJ2aWNlLFxyXG4gIGxvY2FsZTogRnVsbExvY2FsZURhdGEsXHJcbik6IFZYTG9jYWxlU2VydmljZSB7XHJcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBWWExvY2FsZVNlcnZpY2UobG9jYWxlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBWWExvY2FsZVNlcnZpY2UsXHJcbiAgdXNlRmFjdG9yeTogREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcclxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVlhMb2NhbGVTZXJ2aWNlXSwgREVMT05fTE9DQUxFXSxcclxufTtcclxuIl19