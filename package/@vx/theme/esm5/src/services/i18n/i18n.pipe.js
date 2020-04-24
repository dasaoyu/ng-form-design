/**
 * @fileoverview added by tsickle
 * Generated from: src/services/i18n/i18n.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Pipe } from '@angular/core';
import { VX_I18N_TOKEN } from './i18n';
var I18nPipe = /** @class */ (function () {
    function I18nPipe(i18n) {
        this.i18n = i18n;
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    I18nPipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    function (key, interpolateParams, isSafe) {
        return this.i18n.fanyi(key, interpolateParams, isSafe);
    };
    I18nPipe.decorators = [
        { type: Pipe, args: [{ name: 'i18n' },] }
    ];
    /** @nocollapse */
    I18nPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [VX_I18N_TOKEN,] }] }
    ]; };
    return I18nPipe;
}());
export { I18nPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nPipe.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4L3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBaUIsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXREO0lBRUUsa0JBQTJDLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7SUFBRyxDQUFDOzs7Ozs7O0lBRWxFLDRCQUFTOzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxpQkFBc0IsRUFBRSxNQUFnQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7O2dEQUVQLE1BQU0sU0FBQyxhQUFhOztJQUtuQyxlQUFDO0NBQUEsQUFQRCxJQU9DO1NBTlksUUFBUTs7Ozs7O0lBQ1Asd0JBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZYSTE4TlNlcnZpY2UsIFZYX0kxOE5fVE9LRU4gfSBmcm9tICcuL2kxOG4nO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnaTE4bicgfSlcclxuZXhwb3J0IGNsYXNzIEkxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChWWF9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG46IFZYSTE4TlNlcnZpY2UpIHt9XHJcblxyXG4gIHRyYW5zZm9ybShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiB7fSwgaXNTYWZlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pMThuLmZhbnlpKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMsIGlzU2FmZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==