/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2, Inject } from "@angular/core";
import { wrapProperty, defineHiddenProp, VXFORM_VALIDATORS } from "../utils";
import { DOCUMENT } from "@angular/common";
var VXFormAttributes = /** @class */ (function () {
    function VXFormAttributes(renderer, elementRef, _document) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.uiAttributesCache = {};
        this.uiAttributes = tslib_1.__spread(VXFORM_VALIDATORS, [
            "tabindex",
            "placeholder",
            "readonly",
            "disabled",
            "step"
        ]);
        this.document = _document;
    }
    Object.defineProperty(VXFormAttributes.prototype, "to", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.templateOptions || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormAttributes.prototype, "fieldAttrElements", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (this.field && this.field["_attrElements"]) || [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormAttributes.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.field) {
            ["id", "name"].forEach((/**
             * @param {?} attr
             * @return {?}
             */
            function (attr) {
                _this.field[attr] && _this.setAttribute(attr, _this.field[attr]);
            }));
            if (this.to && this.to.attributes) {
                wrapProperty(this.to, "attributes", (/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var currentValue = _a.currentValue, previousValue = _a.previousValue;
                    if (previousValue) {
                        Object.keys(previousValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        function (attr) {
                            return _this.removeAttribute(attr);
                        }));
                    }
                    if (currentValue) {
                        Object.keys(currentValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        function (attr) {
                            return _this.setAttribute(attr, currentValue[attr]);
                        }));
                    }
                }));
            }
            this.attachAttrElement();
            if (this.fieldAttrElements.length === 1) {
                wrapProperty(this.field, "focus", (/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var currentValue = _a.currentValue;
                    /** @type {?} */
                    var element = _this.fieldAttrElements
                        ? _this.fieldAttrElements[0]
                        : null;
                    if (!element) {
                        return;
                    }
                    _this.focusElement(element, currentValue);
                }));
            }
        }
    };
    /**
     * @return {?}
     */
    VXFormAttributes.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uiAttributes.forEach((/**
         * @param {?} attr
         * @return {?}
         */
        function (attr) {
            /** @type {?} */
            var value = _this.to[attr];
            if (_this.uiAttributesCache[attr] !== value) {
                _this.uiAttributesCache[attr] = value;
                if (value || value === 0) {
                    _this.setAttribute(attr, value === true ? attr : "" + value);
                }
                else {
                    _this.removeAttribute(attr);
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    VXFormAttributes.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detachAttrElement();
    };
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    VXFormAttributes.prototype.focusElement = /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    function (element, value) {
        var _this = this;
        if (!element.focus) {
            return;
        }
        /** @type {?} */
        var isFocused = !!this.document.activeElement &&
            this.fieldAttrElements.some((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                return _this.document.activeElement === element ||
                    element.contains(_this.document.activeElement);
            }));
        if (value && !isFocused) {
            element.focus();
        }
        else if (!value && isFocused) {
            element.blur();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    VXFormAttributes.prototype.onFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.field["___$focus"] = true;
        if (this.to.focus) {
            this.to.focus(this.field, $event);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    VXFormAttributes.prototype.onBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.field["___$focus"] = false;
        if (this.to.blur) {
            this.to.blur(this.field, $event);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    VXFormAttributes.prototype.onChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.to.change) {
            this.to.change(this.field, $event);
        }
        if (this.field.formControl) {
            this.field.formControl.markAsDirty();
        }
    };
    /**
     * @private
     * @return {?}
     */
    VXFormAttributes.prototype.attachAttrElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.field["_attrElements"]) {
            this.field["_attrElements"].push(this.elementRef.nativeElement);
        }
        else {
            defineHiddenProp(this.field, "_attrElements", [
                this.elementRef.nativeElement
            ]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    VXFormAttributes.prototype.detachAttrElement = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var index = this.fieldAttrElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element !== _this.elementRef.nativeElement; }));
        if (index !== -1) {
            this.field["_attrElements"].splice(index, 1);
        }
    };
    /**
     * @private
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    VXFormAttributes.prototype.setAttribute = /**
     * @private
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    function (attr, value) {
        this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
    };
    /**
     * @private
     * @param {?} attr
     * @return {?}
     */
    VXFormAttributes.prototype.removeAttribute = /**
     * @private
     * @param {?} attr
     * @return {?}
     */
    function (attr) {
        this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
    };
    VXFormAttributes.decorators = [
        { type: Directive, args: [{
                    selector: "[vxFormAttributes]",
                    host: {
                        "(focus)": "onFocus($event)",
                        "(blur)": "onBlur($event)",
                        "(keyup)": "to.keyup && to.keyup(field, $event)",
                        "(keydown)": "to.keydown && to.keydown(field, $event)",
                        "(click)": "to.click && to.click(field, $event)",
                        "(change)": "onChange($event)",
                        "(keypress)": "to.keypress && to.keypress(field, $event)"
                    }
                },] }
    ];
    /** @nocollapse */
    VXFormAttributes.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    VXFormAttributes.propDecorators = {
        field: [{ type: Input, args: ["vxFormAttributes",] }]
    };
    return VXFormAttributes;
}());
export { VXFormAttributes };
if (false) {
    /** @type {?} */
    VXFormAttributes.prototype.field;
    /**
     * @type {?}
     * @private
     */
    VXFormAttributes.prototype.document;
    /**
     * @type {?}
     * @private
     */
    VXFormAttributes.prototype.uiAttributesCache;
    /**
     * @type {?}
     * @private
     */
    VXFormAttributes.prototype.uiAttributes;
    /**
     * @type {?}
     * @private
     */
    VXFormAttributes.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    VXFormAttributes.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdnhmb3JtLmF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUVULE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQWtDRSwwQkFDVSxRQUFtQixFQUNuQixVQUFzQixFQUNaLFNBQWM7UUFGeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEJ4QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsaUJBQVksb0JBQ2YsaUJBQWlCO1lBQ3BCLFVBQVU7WUFDVixhQUFhO1lBQ2IsVUFBVTtZQUNWLFVBQVU7WUFDVixNQUFNO1dBQ047UUFlQSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBZEQsc0JBQUksZ0NBQUU7Ozs7UUFBTjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0NBQWlCOzs7OztRQUE3QjtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7Ozs7O0lBVUQsc0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQXdDQztRQXZDQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7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USxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkExS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsaUJBQWlCO3dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixTQUFTLEVBQUUscUNBQXFDO3dCQUNoRCxXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUscUNBQXFDO3dCQUNoRCxVQUFVLEVBQUUsa0JBQWtCO3dCQUM5QixZQUFZLEVBQUUsMkNBQTJDO3FCQUMxRDtpQkFDRjs7OztnQkF2QkMsU0FBUztnQkFKVCxVQUFVO2dEQXFEUCxNQUFNLFNBQUMsUUFBUTs7O3dCQXhCakIsS0FBSyxTQUFDLGtCQUFrQjs7SUE4SjNCLHVCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0EvSlksZ0JBQWdCOzs7SUFDM0IsaUNBQW9EOzs7OztJQUVwRCxvQ0FBMkI7Ozs7O0lBQzNCLDZDQUFvQzs7Ozs7SUFDcEMsd0NBT0U7Ozs7O0lBV0Esb0NBQTJCOzs7OztJQUMzQixzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFJlbmRlcmVyMixcclxuICBEb0NoZWNrLFxyXG4gIEluamVjdCxcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYRm9ybVRlbXBsYXRlT3B0aW9uc1xyXG59IGZyb20gXCIuL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuaW1wb3J0IHsgd3JhcFByb3BlcnR5LCBkZWZpbmVIaWRkZW5Qcm9wLCBWWEZPUk1fVkFMSURBVE9SUyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt2eEZvcm1BdHRyaWJ1dGVzXVwiLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiKGZvY3VzKVwiOiBcIm9uRm9jdXMoJGV2ZW50KVwiLFxyXG4gICAgXCIoYmx1cilcIjogXCJvbkJsdXIoJGV2ZW50KVwiLFxyXG4gICAgXCIoa2V5dXApXCI6IFwidG8ua2V5dXAgJiYgdG8ua2V5dXAoZmllbGQsICRldmVudClcIixcclxuICAgIFwiKGtleWRvd24pXCI6IFwidG8ua2V5ZG93biAmJiB0by5rZXlkb3duKGZpZWxkLCAkZXZlbnQpXCIsXHJcbiAgICBcIihjbGljaylcIjogXCJ0by5jbGljayAmJiB0by5jbGljayhmaWVsZCwgJGV2ZW50KVwiLFxyXG4gICAgXCIoY2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcclxuICAgIFwiKGtleXByZXNzKVwiOiBcInRvLmtleXByZXNzICYmIHRvLmtleXByZXNzKGZpZWxkLCAkZXZlbnQpXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1BdHRyaWJ1dGVzIGltcGxlbWVudHMgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dChcInZ4Rm9ybUF0dHJpYnV0ZXNcIikgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnO1xyXG5cclxuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcclxuICBwcml2YXRlIHVpQXR0cmlidXRlc0NhY2hlOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIHVpQXR0cmlidXRlcyA9IFtcclxuICAgIC4uLlZYRk9STV9WQUxJREFUT1JTLFxyXG4gICAgXCJ0YWJpbmRleFwiLFxyXG4gICAgXCJwbGFjZWhvbGRlclwiLFxyXG4gICAgXCJyZWFkb25seVwiLFxyXG4gICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgXCJzdGVwXCJcclxuICBdO1xyXG5cclxuICBnZXQgdG8oKTogVlhGb3JtVGVtcGxhdGVPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucyB8fCB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGZpZWxkQXR0ckVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGRbXCJfYXR0ckVsZW1lbnRzXCJdKSB8fCBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnlcclxuICApIHtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5maWVsZCkge1xyXG4gICAgICBbXCJpZFwiLCBcIm5hbWVcIl0uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICB0aGlzLmZpZWxkW2F0dHJdICYmIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIHRoaXMuZmllbGRbYXR0cl0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRvICYmIHRoaXMudG8uYXR0cmlidXRlcykge1xyXG4gICAgICAgIHdyYXBQcm9wZXJ0eShcclxuICAgICAgICAgIHRoaXMudG8sXHJcbiAgICAgICAgICBcImF0dHJpYnV0ZXNcIixcclxuICAgICAgICAgICh7IGN1cnJlbnRWYWx1ZSwgcHJldmlvdXNWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJldmlvdXNWYWx1ZSkuZm9yRWFjaChhdHRyID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50VmFsdWUpLmZvckVhY2goYXR0ciA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgY3VycmVudFZhbHVlW2F0dHJdKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmF0dGFjaEF0dHJFbGVtZW50KCk7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkQXR0ckVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHdyYXBQcm9wZXJ0eSh0aGlzLmZpZWxkLCBcImZvY3VzXCIsICh7IGN1cnJlbnRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5maWVsZEF0dHJFbGVtZW50c1xyXG4gICAgICAgICAgICA/IHRoaXMuZmllbGRBdHRyRWxlbWVudHNbMF1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmZvY3VzRWxlbWVudChlbGVtZW50LCBjdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMudWlBdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy50b1thdHRyXTtcclxuICAgICAgaWYgKHRoaXMudWlBdHRyaWJ1dGVzQ2FjaGVbYXR0cl0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51aUF0dHJpYnV0ZXNDYWNoZVthdHRyXSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUgPT09IHRydWUgPyBhdHRyIDogYCR7dmFsdWV9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGV0YWNoQXR0ckVsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzRWxlbWVudChlbGVtZW50LCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCFlbGVtZW50LmZvY3VzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0ZvY3VzZWQgPVxyXG4gICAgICAhIXRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQXR0ckVsZW1lbnRzLnNvbWUoXHJcbiAgICAgICAgZWxlbWVudCA9PlxyXG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50IHx8XHJcbiAgICAgICAgICBlbGVtZW50LmNvbnRhaW5zKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcclxuICAgICAgKTtcclxuXHJcbiAgICBpZiAodmFsdWUgJiYgIWlzRm9jdXNlZCkge1xyXG4gICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSAmJiBpc0ZvY3VzZWQpIHtcclxuICAgICAgZWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkW1wiX19fJGZvY3VzXCJdID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnRvLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMudG8uZm9jdXModGhpcy5maWVsZCwgJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZFtcIl9fXyRmb2N1c1wiXSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudG8uYmx1cikge1xyXG4gICAgICB0aGlzLnRvLmJsdXIodGhpcy5maWVsZCwgJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKCRldmVudDogYW55KSB7XHJcbiAgICBpZiAodGhpcy50by5jaGFuZ2UpIHtcclxuICAgICAgdGhpcy50by5jaGFuZ2UodGhpcy5maWVsZCwgJGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC5mb3JtQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF0dGFjaEF0dHJFbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGRbXCJfYXR0ckVsZW1lbnRzXCJdKSB7XHJcbiAgICAgIHRoaXMuZmllbGRbXCJfYXR0ckVsZW1lbnRzXCJdLnB1c2godGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVmaW5lSGlkZGVuUHJvcCh0aGlzLmZpZWxkLCBcIl9hdHRyRWxlbWVudHNcIiwgW1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgIF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRhY2hBdHRyRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWVsZEF0dHJFbGVtZW50cy5maW5kSW5kZXgoXHJcbiAgICAgIGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZmllbGRbXCJfYXR0ckVsZW1lbnRzXCJdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEF0dHJpYnV0ZShhdHRyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUF0dHJpYnV0ZShhdHRyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyKTtcclxuICB9XHJcbn1cclxuIl19