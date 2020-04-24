/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, Inject } from "@angular/core";
import { wrapProperty, defineHiddenProp, VXFORM_VALIDATORS } from "../utils";
import { DOCUMENT } from "@angular/common";
export class VXFormAttributes {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _document
     */
    constructor(renderer, elementRef, _document) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.uiAttributesCache = {};
        this.uiAttributes = [
            ...VXFORM_VALIDATORS,
            "tabindex",
            "placeholder",
            "readonly",
            "disabled",
            "step"
        ];
        this.document = _document;
    }
    /**
     * @return {?}
     */
    get to() {
        return this.field.templateOptions || {};
    }
    /**
     * @private
     * @return {?}
     */
    get fieldAttrElements() {
        return (this.field && this.field["_attrElements"]) || [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.field) {
            ["id", "name"].forEach((/**
             * @param {?} attr
             * @return {?}
             */
            attr => {
                this.field[attr] && this.setAttribute(attr, this.field[attr]);
            }));
            if (this.to && this.to.attributes) {
                wrapProperty(this.to, "attributes", (/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ currentValue, previousValue }) => {
                    if (previousValue) {
                        Object.keys(previousValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        attr => this.removeAttribute(attr)));
                    }
                    if (currentValue) {
                        Object.keys(currentValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        attr => this.setAttribute(attr, currentValue[attr])));
                    }
                }));
            }
            this.attachAttrElement();
            if (this.fieldAttrElements.length === 1) {
                wrapProperty(this.field, "focus", (/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ currentValue }) => {
                    /** @type {?} */
                    const element = this.fieldAttrElements
                        ? this.fieldAttrElements[0]
                        : null;
                    if (!element) {
                        return;
                    }
                    this.focusElement(element, currentValue);
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.uiAttributes.forEach((/**
         * @param {?} attr
         * @return {?}
         */
        attr => {
            /** @type {?} */
            const value = this.to[attr];
            if (this.uiAttributesCache[attr] !== value) {
                this.uiAttributesCache[attr] = value;
                if (value || value === 0) {
                    this.setAttribute(attr, value === true ? attr : `${value}`);
                }
                else {
                    this.removeAttribute(attr);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detachAttrElement();
    }
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    focusElement(element, value) {
        if (!element.focus) {
            return;
        }
        /** @type {?} */
        const isFocused = !!this.document.activeElement &&
            this.fieldAttrElements.some((/**
             * @param {?} element
             * @return {?}
             */
            element => this.document.activeElement === element ||
                element.contains(this.document.activeElement)));
        if (value && !isFocused) {
            element.focus();
        }
        else if (!value && isFocused) {
            element.blur();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        this.field["___$focus"] = true;
        if (this.to.focus) {
            this.to.focus(this.field, $event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        this.field["___$focus"] = false;
        if (this.to.blur) {
            this.to.blur(this.field, $event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onChange($event) {
        if (this.to.change) {
            this.to.change(this.field, $event);
        }
        if (this.field.formControl) {
            this.field.formControl.markAsDirty();
        }
    }
    /**
     * @private
     * @return {?}
     */
    attachAttrElement() {
        if (this.field["_attrElements"]) {
            this.field["_attrElements"].push(this.elementRef.nativeElement);
        }
        else {
            defineHiddenProp(this.field, "_attrElements", [
                this.elementRef.nativeElement
            ]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    detachAttrElement() {
        /** @type {?} */
        const index = this.fieldAttrElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        element => element !== this.elementRef.nativeElement));
        if (index !== -1) {
            this.field["_attrElements"].splice(index, 1);
        }
    }
    /**
     * @private
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    setAttribute(attr, value) {
        this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
    }
    /**
     * @private
     * @param {?} attr
     * @return {?}
     */
    removeAttribute(attr) {
        this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
    }
}
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
VXFormAttributes.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
VXFormAttributes.propDecorators = {
    field: [{ type: Input, args: ["vxFormAttributes",] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdnhmb3JtLmF0dHJpYnV0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBYzNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQXNCM0IsWUFDVSxRQUFtQixFQUNuQixVQUFzQixFQUNaLFNBQWM7UUFGeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEJ4QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBRztZQUNyQixHQUFHLGlCQUFpQjtZQUNwQixVQUFVO1lBQ1YsYUFBYTtZQUNiLFVBQVU7WUFDVixVQUFVO1lBQ1YsTUFBTTtTQUNQLENBQUM7UUFlQSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7O0lBZEQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxJQUFZLGlCQUFpQjtRQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBVUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixDQUFDLElB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QUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUscUNBQXFDO29CQUNoRCxXQUFXLEVBQUUseUNBQXlDO29CQUN0RCxTQUFTLEVBQUUscUNBQXFDO29CQUNoRCxVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsMkNBQTJDO2lCQUMxRDthQUNGOzs7O1lBdkJDLFNBQVM7WUFKVCxVQUFVOzRDQXFEUCxNQUFNLFNBQUMsUUFBUTs7O29CQXhCakIsS0FBSyxTQUFDLGtCQUFrQjs7OztJQUF6QixpQ0FBb0Q7Ozs7O0lBRXBELG9DQUEyQjs7Ozs7SUFDM0IsNkNBQW9DOzs7OztJQUNwQyx3Q0FPRTs7Ozs7SUFXQSxvQ0FBMkI7Ozs7O0lBQzNCLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIERvQ2hlY2ssXHJcbiAgSW5qZWN0LFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhGb3JtVGVtcGxhdGVPcHRpb25zXHJcbn0gZnJvbSBcIi4vdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyB3cmFwUHJvcGVydHksIGRlZmluZUhpZGRlblByb3AsIFZYRk9STV9WQUxJREFUT1JTIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Z4Rm9ybUF0dHJpYnV0ZXNdXCIsXHJcbiAgaG9zdDoge1xyXG4gICAgXCIoZm9jdXMpXCI6IFwib25Gb2N1cygkZXZlbnQpXCIsXHJcbiAgICBcIihibHVyKVwiOiBcIm9uQmx1cigkZXZlbnQpXCIsXHJcbiAgICBcIihrZXl1cClcIjogXCJ0by5rZXl1cCAmJiB0by5rZXl1cChmaWVsZCwgJGV2ZW50KVwiLFxyXG4gICAgXCIoa2V5ZG93bilcIjogXCJ0by5rZXlkb3duICYmIHRvLmtleWRvd24oZmllbGQsICRldmVudClcIixcclxuICAgIFwiKGNsaWNrKVwiOiBcInRvLmNsaWNrICYmIHRvLmNsaWNrKGZpZWxkLCAkZXZlbnQpXCIsXHJcbiAgICBcIihjaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxyXG4gICAgXCIoa2V5cHJlc3MpXCI6IFwidG8ua2V5cHJlc3MgJiYgdG8ua2V5cHJlc3MoZmllbGQsICRldmVudClcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUF0dHJpYnV0ZXMgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KFwidnhGb3JtQXR0cmlidXRlc1wiKSBmaWVsZDogVlhGb3JtRmllbGRDb25maWc7XHJcblxyXG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xyXG4gIHByaXZhdGUgdWlBdHRyaWJ1dGVzQ2FjaGU6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgdWlBdHRyaWJ1dGVzID0gW1xyXG4gICAgLi4uVlhGT1JNX1ZBTElEQVRPUlMsXHJcbiAgICBcInRhYmluZGV4XCIsXHJcbiAgICBcInBsYWNlaG9sZGVyXCIsXHJcbiAgICBcInJlYWRvbmx5XCIsXHJcbiAgICBcImRpc2FibGVkXCIsXHJcbiAgICBcInN0ZXBcIlxyXG4gIF07XHJcblxyXG4gIGdldCB0bygpOiBWWEZvcm1UZW1wbGF0ZU9wdGlvbnMge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgZmllbGRBdHRyRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZFtcIl9hdHRyRWxlbWVudHNcIl0pIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5kb2N1bWVudCA9IF9kb2N1bWVudDtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmZpZWxkKSB7XHJcbiAgICAgIFtcImlkXCIsIFwibmFtZVwiXS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgIHRoaXMuZmllbGRbYXR0cl0gJiYgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgdGhpcy5maWVsZFthdHRyXSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMudG8gJiYgdGhpcy50by5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgd3JhcFByb3BlcnR5KFxyXG4gICAgICAgICAgdGhpcy50byxcclxuICAgICAgICAgIFwiYXR0cmlidXRlc1wiLFxyXG4gICAgICAgICAgKHsgY3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2aW91c1ZhbHVlKS5mb3JFYWNoKGF0dHIgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRWYWx1ZSkuZm9yRWFjaChhdHRyID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBjdXJyZW50VmFsdWVbYXR0cl0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXR0YWNoQXR0ckVsZW1lbnQoKTtcclxuICAgICAgaWYgKHRoaXMuZmllbGRBdHRyRWxlbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgd3JhcFByb3BlcnR5KHRoaXMuZmllbGQsIFwiZm9jdXNcIiwgKHsgY3VycmVudFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpZWxkQXR0ckVsZW1lbnRzXHJcbiAgICAgICAgICAgID8gdGhpcy5maWVsZEF0dHJFbGVtZW50c1swXVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuZm9jdXNFbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy51aUF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnRvW2F0dHJdO1xyXG4gICAgICBpZiAodGhpcy51aUF0dHJpYnV0ZXNDYWNoZVthdHRyXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVpQXR0cmlidXRlc0NhY2hlW2F0dHJdID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSA9PT0gdHJ1ZSA/IGF0dHIgOiBgJHt2YWx1ZX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXRhY2hBdHRyRWxlbWVudCgpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNFbGVtZW50KGVsZW1lbnQsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQuZm9jdXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzRm9jdXNlZCA9XHJcbiAgICAgICEhdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmXHJcbiAgICAgIHRoaXMuZmllbGRBdHRyRWxlbWVudHMuc29tZShcclxuICAgICAgICBlbGVtZW50ID0+XHJcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQgfHxcclxuICAgICAgICAgIGVsZW1lbnQuY29udGFpbnModGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50KVxyXG4gICAgICApO1xyXG5cclxuICAgIGlmICh2YWx1ZSAmJiAhaXNGb2N1c2VkKSB7XHJcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSBpZiAoIXZhbHVlICYmIGlzRm9jdXNlZCkge1xyXG4gICAgICBlbGVtZW50LmJsdXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXMoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGRbXCJfX18kZm9jdXNcIl0gPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMudG8uZm9jdXMpIHtcclxuICAgICAgdGhpcy50by5mb2N1cyh0aGlzLmZpZWxkLCAkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkW1wiX19fJGZvY3VzXCJdID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy50by5ibHVyKSB7XHJcbiAgICAgIHRoaXMudG8uYmx1cih0aGlzLmZpZWxkLCAkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoJGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnRvLmNoYW5nZSkge1xyXG4gICAgICB0aGlzLnRvLmNoYW5nZSh0aGlzLmZpZWxkLCAkZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLmZvcm1Db250cm9sKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoQXR0ckVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZFtcIl9hdHRyRWxlbWVudHNcIl0pIHtcclxuICAgICAgdGhpcy5maWVsZFtcIl9hdHRyRWxlbWVudHNcIl0ucHVzaCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKHRoaXMuZmllbGQsIFwiX2F0dHJFbGVtZW50c1wiLCBbXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRldGFjaEF0dHJFbGVtZW50KCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpZWxkQXR0ckVsZW1lbnRzLmZpbmRJbmRleChcclxuICAgICAgZWxlbWVudCA9PiBlbGVtZW50ICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5maWVsZFtcIl9hdHRyRWxlbWVudHNcIl0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmlidXRlKGF0dHI6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlQXR0cmlidXRlKGF0dHI6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIpO1xyXG4gIH1cclxufVxyXG4iXX0=