/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
var ReplaceLinePipe = /** @class */ (function () {
    function ReplaceLinePipe(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ReplaceLinePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\n/g, "<br/>");
    };
    ReplaceLinePipe.decorators = [
        { type: Pipe, args: [{ name: "replaceLine" },] }
    ];
    /** @nocollapse */
    ReplaceLinePipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return ReplaceLinePipe;
}());
export { ReplaceLinePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReplaceLinePipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZUxpbmVQaXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3Rvb2xzL3JlcGxhY2VMaW5lUGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBRUUseUJBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDOzs7OztJQUMvQyxtQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7Ozs7Z0JBRnBCLFlBQVk7O0lBUXJCLHNCQUFDO0NBQUEsQUFORCxJQU1DO1NBTFksZUFBZTs7Ozs7O0lBQ2Qsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwicmVwbGFjZUxpbmVcIiB9KVxyXG5leHBvcnQgY2xhc3MgUmVwbGFjZUxpbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZWQ6IERvbVNhbml0aXplcikge31cclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxuL2csIFwiPGJyLz5cIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==