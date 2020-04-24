/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const EDITOR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => InlineEditorComponent)),
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
export class InlineEditorComponent {
    //@ViewChild(ContenteditableModel,{static:true}) contenteditableModel: ContenteditableModel|undefined;
    constructor() {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        // if (this.className) {
        //   var splits = this.className.split(' ');
        //   for (var i = 0; i < splits.length; i++) {
        //     this._classList[splits[i]] = true;
        //   }
        // }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    handleFocus(evt) {
        this.focus.emit(evt);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    handleBlur(evt) {
        this.blur.emit(evt);
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onContenteditableModelChange(evt) {
        this.onTouched();
        this.onChange(evt);
    }
    /**
     * Implements ControlValueAccessor
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        //if (this.contenteditableModel && this.contenteditableModel.instance) {
        //this.contenteditableModel.instance.setData(value);
        //}
    }
    /**
     * @param {?} _
     * @return {?}
     */
    onChange(_) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
InlineEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'inline-editor',
                providers: [EDITOR_VALUE_ACCESSOR],
                template: `
    <input *ngIf="active==true"  nz-input [(ngModel)]="value" /> 
    <div *ngIf="active==false" 
      class="inline_editor_show"
      [innerHTML]="value | safeHtml">
    </div>
  `,
                styles: [`
      :host ::ng-deep {
      }
    `]
            }] }
];
/** @nocollapse */
InlineEditorComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWVkaXRvci5jb21vbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2lubGluZS1lZGl0b3IvaW5saW5lLWVkaXRvci5jb21vbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBRVosS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztNQUluRSxxQkFBcUIsR0FBUTtJQUNqQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7Ozs7Ozs7Ozs7OztBQWlDRCxNQUFNLE9BQU8scUJBQXFCOztJQWNoQztRQWJBLFdBQU0sR0FBQyxFQUFFLENBQUM7UUFDVixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ1AsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVcsZUFBZSxDQUFDO1FBQ3BDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDYixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBSyxFQUFFLENBQUM7UUFDWixXQUFNLEdBQVMsS0FBSyxDQUFBO0lBR2QsQ0FBQzs7Ozs7OztJQU1oQixRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLDRDQUE0QztRQUM1Qyw4Q0FBOEM7UUFDOUMseUNBQXlDO1FBQ3pDLE1BQU07UUFDTixJQUFJO0lBQ04sQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBTztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFPO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxJQUNJLEtBQUssQ0FBQyxDQUFLO1FBQ2IsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0QkFBNEIsQ0FBQyxHQUFPO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUtELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHdFQUF3RTtRQUN0RSxvREFBb0Q7UUFDdEQsR0FBRztJQUNMLENBQUM7Ozs7O0lBQ0QsUUFBUSxDQUFDLENBQU0sSUFBRyxDQUFDOzs7O0lBQ25CLFNBQVMsS0FBSSxDQUFDOzs7OztJQUNkLGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQXRGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxRQUFRLEVBQUU7Ozs7OztHQU1UO3lCQUVDOzs7S0FHQzthQUVKOzs7Ozt1QkFJRSxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLE1BQU07b0JBQ04sTUFBTTt1QkFDTixLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkE2QkwsS0FBSzs7OztJQXZDTix1Q0FBVTs7SUFDViwyQ0FBZ0I7O0lBQ2hCLHlDQUFrQzs7SUFDbEMsNENBQWtDOztJQUNsQywwQ0FBNkM7O0lBQzdDLHVDQUF1Qjs7SUFDdkIscUNBQW9DOztJQUNwQyxzQ0FBcUM7O0lBQ3JDLHlDQUEwQjs7SUFDMUIscUNBQXFCOztJQUNyQix1Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgZm9yd2FyZFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQ29udGVudGVkaXRhYmxlTW9kZWwgfSBmcm9tICcuL2NvbnRlbnRlZGl0YWJsZSc7IFxyXG5cclxuY29uc3QgRURJVE9SX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5saW5lRWRpdG9yQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZSxcclxufTtcclxuXHJcbi8vIDxkaXZcclxuLy8gICAgICAgWyhjb250ZW50ZWRpdGFibGVNb2RlbCldPVwidmFsdWVcIlxyXG4vLyAgICAgICBbbmdDbGFzc109XCJhY3RpdmU9PXRydWU/J2lubGluZV9lZGl0b3InOidpbmxpbmVfZWRpdG9yX2hpZGRlbidcIlxyXG4vLyAgICAgICByb2xlPVwidGV4dGJveFwiXHJcbi8vICAgICAgIFthdHRyLmNvbnRlbnRlZGl0YWJsZV09XCJkaXNhYmxlZCA/ICdmYWxzZScgOiAndHJ1ZSdcIlxyXG4vLyAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4vLyAgICAgICAoYmx1cik9XCJoYW5kbGVCbHVyKCRldmVudClcIlxyXG4vLyAgICAgICAoZm9jdXMpPVwiaGFuZGxlRm9jdXMoJGV2ZW50KVwiXHJcbi8vICAgICAgIFtick1vZGVdPVwiYnJNb2RlXCJcclxuLy8gICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuLy8gICAgICAgW2RlYm91bmNlXT1cImRlYm91bmNlXCJcclxuLy8gICAgICAgKGNvbnRlbnRlZGl0YWJsZU1vZGVsQ2hhbmdlKT1cIm9uQ29udGVudGVkaXRhYmxlTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbi8vICAgICA+PC9kaXY+XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lubGluZS1lZGl0b3InLFxyXG4gIHByb3ZpZGVyczogW0VESVRPUl9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dCAqbmdJZj1cImFjdGl2ZT09dHJ1ZVwiICBuei1pbnB1dCBbKG5nTW9kZWwpXT1cInZhbHVlXCIgLz4gXHJcbiAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlPT1mYWxzZVwiIFxyXG4gICAgICBjbGFzcz1cImlubGluZV9lZGl0b3Jfc2hvd1wiXHJcbiAgICAgIFtpbm5lckhUTUxdPVwidmFsdWUgfCBzYWZlSHRtbFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5saW5lRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIF92YWx1ZT1cIlwiO1xyXG4gIF9jbGFzc0xpc3QgPSB7fTtcclxuICBASW5wdXQoKSBkZWJvdW5jZTogc3RyaW5nID0gJzEwMCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nID0gJ2lubGluZV9lZGl0b3InO1xyXG4gIEBJbnB1dCgpIGJyTW9kZSA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGF0YTphbnk9XCJcIjtcclxuICBASW5wdXQoKSBhY3RpdmU6Ym9vbGVhbj1mYWxzZSBcclxuICAvL0BWaWV3Q2hpbGQoQ29udGVudGVkaXRhYmxlTW9kZWwse3N0YXRpYzp0cnVlfSkgY29udGVudGVkaXRhYmxlTW9kZWw6IENvbnRlbnRlZGl0YWJsZU1vZGVsfHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvLyAgIGZvY3VzKCkge1xyXG4gIC8vICAgICB0aGlzLmNvbnRlbnRlZGl0YWJsZU1vZGVsLmRvRm9jdXMoKTtcclxuICAvLyAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBpZiAodGhpcy5jbGFzc05hbWUpIHtcclxuICAgIC8vICAgdmFyIHNwbGl0cyA9IHRoaXMuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fY2xhc3NMaXN0W3NwbGl0c1tpXV0gPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb2N1cyhldnQ6YW55KSB7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZ0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJsdXIoZXZ0OmFueSkge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoZXZ0KTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YWx1ZSh2OmFueSkge1xyXG4gICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcclxuICAgIH1cclxuICB9IFxyXG4gIFxyXG4gIG9uQ29udGVudGVkaXRhYmxlTW9kZWxDaGFuZ2UoZXZ0OmFueSkge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMub25DaGFuZ2UoZXZ0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAvL2lmICh0aGlzLmNvbnRlbnRlZGl0YWJsZU1vZGVsICYmIHRoaXMuY29udGVudGVkaXRhYmxlTW9kZWwuaW5zdGFuY2UpIHtcclxuICAgICAgLy90aGlzLmNvbnRlbnRlZGl0YWJsZU1vZGVsLmluc3RhbmNlLnNldERhdGEodmFsdWUpO1xyXG4gICAgLy99XHJcbiAgfVxyXG4gIG9uQ2hhbmdlKF86IGFueSkge31cclxuICBvblRvdWNoZWQoKSB7fVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=