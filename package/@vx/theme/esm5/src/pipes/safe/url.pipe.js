/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/safe/url.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var URLPipe = /** @class */ (function () {
    function URLPipe(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    URLPipe.prototype.transform = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
    };
    URLPipe.decorators = [
        { type: Pipe, args: [{ name: 'url' },] }
    ];
    /** @nocollapse */
    URLPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return URLPipe;
}());
export { URLPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    URLPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUVFLGlCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQzs7Ozs7SUFFekMsMkJBQVM7Ozs7SUFBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O2dCQUZaLFlBQVk7O0lBU3JCLGNBQUM7Q0FBQSxBQVBELElBT0M7U0FOWSxPQUFPOzs7Ozs7SUFDTixzQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndXJsJyB9KVxyXG5leHBvcnQgY2xhc3MgVVJMUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XHJcblxyXG4gIHRyYW5zZm9ybSh1cmw6IHN0cmluZyk6IHN0cmluZyB8IFNhZmVVcmwge1xyXG4gICAgcmV0dXJuIHVybCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKSA6ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=