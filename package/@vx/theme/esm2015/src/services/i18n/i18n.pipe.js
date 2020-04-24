/**
 * @fileoverview added by tsickle
 * Generated from: src/services/i18n/i18n.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Pipe } from '@angular/core';
import { VX_I18N_TOKEN } from './i18n';
export class I18nPipe {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    transform(key, interpolateParams, isSafe) {
        return this.i18n.fanyi(key, interpolateParams, isSafe);
    }
}
I18nPipe.decorators = [
    { type: Pipe, args: [{ name: 'i18n' },] }
];
/** @nocollapse */
I18nPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [VX_I18N_TOKEN,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nPipe.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4L3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBaUIsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3RELE1BQU0sT0FBTyxRQUFROzs7O0lBQ25CLFlBQTJDLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7SUFBRyxDQUFDOzs7Ozs7O0lBRWxFLFNBQVMsQ0FBQyxHQUFXLEVBQUUsaUJBQXNCLEVBQUUsTUFBZ0I7UUFDN0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBTkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FFUCxNQUFNLFNBQUMsYUFBYTs7Ozs7OztJQUFyQix3QkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVlhJMThOU2VydmljZSwgVlhfSTE4Tl9UT0tFTiB9IGZyb20gJy4vaTE4bic7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpMThuJyB9KVxyXG5leHBvcnQgY2xhc3MgSTE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFZYX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogVlhJMThOU2VydmljZSkge31cclxuXHJcbiAgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBpbnRlcnBvbGF0ZVBhcmFtcz86IHt9LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmkxOG4uZmFueWkoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgaXNTYWZlKTtcclxuICB9XHJcbn1cclxuIl19