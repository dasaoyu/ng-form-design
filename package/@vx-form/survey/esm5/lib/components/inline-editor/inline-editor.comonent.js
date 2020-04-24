/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var EDITOR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return InlineEditorComponent; })),
    multi: true,
};
// <div
//       [(contenteditableModel)]="value"
//       [ngClass]="active==true?'inline_editor':'inline_editor_hidden'"
//       role="textbox"
//       [attr.contenteditable]="disabled ? 'false' : 'true'"
//       [class.disabled]="disabled"
//       (blur)="handleBlur($event)"
//       (focus)="handleFocus($event)"
//       [brMode]="brMode"
//       [placeholder]="placeholder"
//       [debounce]="debounce"
//       (contenteditableModelChange)="onContenteditableModelChange($event)"
//     ></div>
var InlineEditorComponent = /** @class */ (function () {
    //@ViewChild(ContenteditableModel,{static:true}) contenteditableModel: ContenteditableModel|undefined;
    function InlineEditorComponent() {
        this._value = "";
        this._classList = {};
        this.debounce = '100';
        this.placeholder = '';
        this.className = 'inline_editor';
        this.brMode = true;
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.disabled = false;
        this.data = "";
        this.active = false;
    }
    //   focus() {
    //     this.contenteditableModel.doFocus();
    //   }
    //   focus() {
    //     this.contenteditableModel.doFocus();
    //   }
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.ngOnInit = 
    //   focus() {
    //     this.contenteditableModel.doFocus();
    //   }
    /**
     * @return {?}
     */
    function () {
        // if (this.className) {
        //   var splits = this.className.split(' ');
        //   for (var i = 0; i < splits.length; i++) {
        //     this._classList[splits[i]] = true;
        //   }
        // }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    InlineEditorComponent.prototype.handleFocus = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this.focus.emit(evt);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    InlineEditorComponent.prototype.handleBlur = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this.blur.emit(evt);
    };
    Object.defineProperty(InlineEditorComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} evt
     * @return {?}
     */
    InlineEditorComponent.prototype.onContenteditableModelChange = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        this.onTouched();
        this.onChange(evt);
    };
    /**
     * Implements ControlValueAccessor
     */
    /**
     * Implements ControlValueAccessor
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.writeValue = /**
     * Implements ControlValueAccessor
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        //if (this.contenteditableModel && this.contenteditableModel.instance) {
        //this.contenteditableModel.instance.setData(value);
        //}
    };
    /**
     * @param {?} _
     * @return {?}
     */
    InlineEditorComponent.prototype.onChange = /**
     * @param {?} _
     * @return {?}
     */
    function (_) { };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    InlineEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InlineEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    InlineEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'inline-editor',
                    providers: [EDITOR_VALUE_ACCESSOR],
                    template: "\n    <input *ngIf=\"active==true\"  nz-input [(ngModel)]=\"value\" /> \n    <div *ngIf=\"active==false\" \n      class=\"inline_editor_show\"\n      [innerHTML]=\"value | safeHtml\">\n    </div>\n  ",
                    styles: ["\n      :host ::ng-deep {\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    InlineEditorComponent.ctorParameters = function () { return []; };
    InlineEditorComponent.propDecorators = {
        debounce: [{ type: Input }],
        placeholder: [{ type: Input }],
        className: [{ type: Input }],
        brMode: [{ type: Input }],
        blur: [{ type: Output }],
        focus: [{ type: Output }],
        disabled: [{ type: Input }],
        data: [{ type: Input }],
        active: [{ type: Input }],
        value: [{ type: Input }]
    };
    return InlineEditorComponent;
}());
export { InlineEditorComponent };
if (false) {
    /** @type {?} */
    InlineEditorComponent.prototype._value;
    /** @type {?} */
    InlineEditorComponent.prototype._classList;
    /** @type {?} */
    InlineEditorComponent.prototype.debounce;
    /** @type {?} */
    InlineEditorComponent.prototype.placeholder;
    /** @type {?} */
    InlineEditorComponent.prototype.className;
    /** @type {?} */
    InlineEditorComponent.prototype.brMode;
    /** @type {?} */
    InlineEditorComponent.prototype.blur;
    /** @type {?} */
    InlineEditorComponent.prototype.focus;
    /** @type {?} */
    InlineEditorComponent.prototype.disabled;
    /** @type {?} */
    InlineEditorComponent.prototype.data;
    /** @type {?} */
    InlineEditorComponent.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWVkaXRvci5jb21vbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubGluZS1lZGl0b3IvaW5saW5lLWVkaXRvci5jb21vbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBRVosS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztJQUluRSxxQkFBcUIsR0FBUTtJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLEVBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7Ozs7Ozs7Ozs7Ozs7QUFnQkQ7SUE2QkUsc0dBQXNHO0lBRXRHO1FBYkEsV0FBTSxHQUFDLEVBQUUsQ0FBQztRQUNWLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDUCxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBVyxlQUFlLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNiLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFLLEVBQUUsQ0FBQztRQUNaLFdBQU0sR0FBUyxLQUFLLENBQUE7SUFHZCxDQUFDO0lBRWhCLGNBQWM7SUFDZCwyQ0FBMkM7SUFDM0MsTUFBTTs7Ozs7OztJQUVOLHdDQUFROzs7Ozs7O0lBQVI7UUFDRSx3QkFBd0I7UUFDeEIsNENBQTRDO1FBQzVDLDhDQUE4QztRQUM5Qyx5Q0FBeUM7UUFDekMsTUFBTTtRQUNOLElBQUk7SUFDTixDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxHQUFPO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLEdBQU87UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFJLHdDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUNVLENBQUs7WUFDYixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUM7OztPQVBBOzs7OztJQVNELDREQUE0Qjs7OztJQUE1QixVQUE2QixHQUFPO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsMENBQVU7Ozs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHdFQUF3RTtRQUN0RSxvREFBb0Q7UUFDdEQsR0FBRztJQUNMLENBQUM7Ozs7O0lBQ0Qsd0NBQVE7Ozs7SUFBUixVQUFTLENBQU0sSUFBRyxDQUFDOzs7O0lBQ25CLHlDQUFTOzs7SUFBVCxjQUFhLENBQUM7Ozs7O0lBQ2QsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkF0RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbEMsUUFBUSxFQUFFLHlNQU1UOzZCQUVDLDBDQUdDO2lCQUVKOzs7OzsyQkFJRSxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLE1BQU07d0JBQ04sTUFBTTsyQkFDTixLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkE2QkwsS0FBSzs7SUE4QlIsNEJBQUM7Q0FBQSxBQXZGRCxJQXVGQztTQXRFWSxxQkFBcUI7OztJQUNoQyx1Q0FBVTs7SUFDViwyQ0FBZ0I7O0lBQ2hCLHlDQUFrQzs7SUFDbEMsNENBQWtDOztJQUNsQywwQ0FBNkM7O0lBQzdDLHVDQUF1Qjs7SUFDdkIscUNBQW9DOztJQUNwQyxzQ0FBcUM7O0lBQ3JDLHlDQUEwQjs7SUFDMUIscUNBQXFCOztJQUNyQix1Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgZm9yd2FyZFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGVudGVkaXRhYmxlTW9kZWwgfSBmcm9tICcuL2NvbnRlbnRlZGl0YWJsZSc7IFxyXG5cclxuY29uc3QgRURJVE9SX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5saW5lRWRpdG9yQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZSxcclxufTtcclxuXHJcbi8vIDxkaXZcclxuLy8gICAgICAgWyhjb250ZW50ZWRpdGFibGVNb2RlbCldPVwidmFsdWVcIlxyXG4vLyAgICAgICBbbmdDbGFzc109XCJhY3RpdmU9PXRydWU/J2lubGluZV9lZGl0b3InOidpbmxpbmVfZWRpdG9yX2hpZGRlbidcIlxyXG4vLyAgICAgICByb2xlPVwidGV4dGJveFwiXHJcbi8vICAgICAgIFthdHRyLmNvbnRlbnRlZGl0YWJsZV09XCJkaXNhYmxlZCA/ICdmYWxzZScgOiAndHJ1ZSdcIlxyXG4vLyAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4vLyAgICAgICAoYmx1cik9XCJoYW5kbGVCbHVyKCRldmVudClcIlxyXG4vLyAgICAgICAoZm9jdXMpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiXHJcbi8vICAgICAgIFtick1vZGVdPVwiYnJNb2RlXCJcclxuLy8gICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuLy8gICAgICAgW2RlYm91bmNlXT1cImRlYm91bmNlXCJcclxuLy8gICAgICAgKGNvbnRlbnRlZGl0YWJsZU1vZGVsQ2hhbmdlKT1cIm9uQ29udGVudGVkaXRhYmxlTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbi8vICAgICA+PC9kaXY+XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lubGluZS1lZGl0b3InLFxyXG4gIHByb3ZpZGVyczogW0VESVRPUl9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dCAqbmdJZj1cImFjdGl2ZT09dHJ1ZVwiICBuei1pbnB1dCBbKG5nTW9kZWwpXT1cInZhbHVlXCIgLz4gXHJcbiAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlPT1mYWxzZVwiIFxyXG4gICAgICBjbGFzcz1cImlubGluZV9lZGl0b3Jfc2hvd1wiXHJcbiAgICAgIFtpbm5lckhUTUxdPVwidmFsdWUgfCBzYWZlSHRtbFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5saW5lRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIF92YWx1ZT1cIlwiO1xyXG4gIF9jbGFzc0xpc3QgPSB7fTtcclxuICBASW5wdXQoKSBkZWJvdW5jZTogc3RyaW5nID0gJzEwMCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nID0gJ2lubGluZV9lZGl0b3InO1xyXG4gIEBJbnB1dCgpIGJyTW9kZSA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGF0YTphbnk9XCJcIjtcclxuICBASW5wdXQoKSBhY3RpdmU6Ym9vbGVhbj1mYWxzZSBcclxuICAvL0BWaWV3Q2hpbGQoQ29udGVudGVkaXRhYmxlTW9kZWwse3N0YXRpYzp0cnVlfSkgY29udGVudGVkaXRhYmxlTW9kZWw6IENvbnRlbnRlZGl0YWJsZU1vZGVsfHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvLyAgIGZvY3VzKCkge1xyXG4gIC8vICAgICB0aGlzLmNvbnRlbnRlZGl0YWJsZU1vZGVsLmRvRm9jdXMoKTtcclxuICAvLyAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBpZiAodGhpcy5jbGFzc05hbWUpIHtcclxuICAgIC8vICAgdmFyIHNwbGl0cyA9IHRoaXMuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fY2xhc3NMaXN0W3NwbGl0c1tpXV0gPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb2N1cyhldnQ6YW55KSB7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZ0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJsdXIoZXZ0OmFueSkge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZ0KTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YWx1ZSh2OmFueSkge1xyXG4gICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcclxuICAgIH1cclxuICB9IFxyXG4gIFxyXG4gIG9uQ29udGVudGVkaXRhYmxlTW9kZWxDaGFuZ2UoZXZ0OmFueSkge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMub25DaGFuZ2UoZXZ0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAvL2lmICh0aGlzLmNvbnRlbnRlZGl0YWJsZU1vZGVsICYmIHRoaXMuY29udGVudGVkaXRhYmxlTW9kZWwuaW5zdGFuY2UpIHtcclxuICAgICAgLy90aGlzLmNvbnRlbnRlZGl0YWJsZU1vZGVsLmluc3RhbmNlLnNldERhdGEodmFsdWUpO1xyXG4gICAgLy99XHJcbiAgfVxyXG4gIG9uQ2hhbmdlKF86IGFueSkge31cclxuICBvblRvdWNoZWQoKSB7fVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=