/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, NgZone, Output, ElementRef, Directive, EventEmitter, } from '@angular/core';
export class ContenteditableModel {
    // changeBySelf = false;
    // instance: any;
    // cursor: any;
    // splitIndex;
    // debounceTimeout: any;
    // lastRange: any;
    // editableEle: any;
    // priousV: string;
    // languagetype = 1;
    // private lastViewModel: any;
    /**
     * @param {?} elRef
     * @param {?} zone
     */
    constructor(elRef, zone) {
        this.elRef = elRef;
        this.zone = zone;
        this.model = {};
        this.hasI18n = false;
        this.change = new EventEmitter();
        // @Output() limetValue: EventEmitter<any> = new EventEmitter<any>();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.debounce = "";
        this.placeholder = '';
        this.brMode = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //this.initEditor();
    }
    // initEditor() {
    //   let config = {
    //     startupFocus: false,
    //     toolbar: 'Basic',
    //     allowedContent: true,
    //     placeholder: this.placeholder,
    //     extraPlugins: '',
    //     toolbar_Basic: [
    //       [
    //         'Font',
    //         'FontSize',
    //         'Bold',
    //         'Underline',
    //         'Italic',
    //         '-',
    //         'JustifyLeft',
    //         'JustifyCenter',
    //         'JustifyRight',
    //         'TextColor',
    //         'BGColor',
    //       ],
    //     ]
    //   };
    //   if (this.hasI18n) {
    //     const pluginName = (config.extraPlugins ? ',' : '') + 'i18n';
    //     config.extraPlugins = config.extraPlugins + pluginName;
    //     config.toolbar_Basic[0].unshift('Chinese', '-', 'English');
    //   }
    //   // console.log('config==', config);
    //   if (this.brMode) {
    //     config['enterMode'] = CKEDITOR.ENTER_BR;
    //     config['shiftEnterMode'] = CKEDITOR.ENTER_BR;
    //   }
    //   this.instance = CKEDITOR.inline(this.elRef.nativeElement, config);
    //   // console.log('this.instance==', this.instance);
    //   // 设置国际化语言及侦听
    //   // this.languagetype = this.instance.element.getAttribute('data-i18n') || this.languagetype;
    //   // this.instance.on('i18n', (evt: any) => {
    //   //   // console.log('i18n change= ', evt);
    //   //   if (evt.data != this.languagetype) {
    //   //     this.languagetype = evt.data;
    //   //     this.updateEditorValue();
    //   //   }
    //   // });
    //   // 更新表单值
    //   this.updateEditorValue();
    //   // CKEditor blur event
    //   this.instance.on('blur', (evt: any) => {
    //     this.blur.emit(evt);
    //   });
    //   // CKEditor focus event
    //   this.instance.on('focus', (evt: any) => {
    //     this.focus.emit(evt);
    //   });
    //   this.instance.on('change', (evt: any) => {
    //     // console.log('onchange == ', evt);
    //     let value = this.instance.getData();
    //     if (this.model !== value) {
    //       // Debounce update
    //       if (this.debounce) {
    //         if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
    //         this.debounceTimeout = setTimeout(() => {
    //           this.updateValue(this.instance.getData());
    //           this.debounceTimeout = null;
    //         }, parseInt(this.debounce, 10));
    //       } else {
    //         this.updateValue(value);
    //       }
    //     }
    //   });
    // }
    // doFocus() {
    //   setTimeout(() => {
    //     this.instance.focus();
    //   }, 0);
    // }
    // insertAfter(newElement, targetElement) {
    //   var parent = targetElement.parentNode;
    //   if (parent.lastChild == targetElement) {
    //     parent.appendChild(newElement);
    //   } else {
    //     parent.insertBefore(newElement, targetElement.nextSibling);
    //   }
    // }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // this.lastViewModel = this.model;
        // this.updateEditorValue();
    }
    // onKeyup() {
    //   var value = this.elRef.nativeElement.innerHTML;
    //   this.lastViewModel = value;
    //   this.change.emit(value);
    // }
    // updateValue(value: any) {
    //   // this.zone.run(() => {
    //   //   this.lastViewModel = value;
    //   //   this.changeBySelf = true;
    //   //   if (_.isArray(this.model)) {
    //   //     const found = this.model.find(item => {
    //   //       return item.languagetype == this.languagetype; //zhcn
    //   //     });
    //   //     if (found) {
    //   //       found.name = value;
    //   //     }
    //   //     this.change.emit(this.model);
    //   //   } else {
    //   //     this.change.emit(value);
    //   //   }
    //   // });
    // }
    // refreshView() {
    //   if (this.instance) this.instance.setData(this.lastViewModel);
    //   // this.elRef.nativeElement.innerHTML = this.lastViewModel
    // }
    // updateEditorValue() {
    //   // if (this.instance) {
    //   //   let model = this.model;
    //   //   // console.log('this.model==', this.model);
    //   //   if (_.isArray(this.model)) {
    //   //     let foundItem = this.model.find(item => {
    //   //       return item.languagetype == this.languagetype; //zhcn
    //   //     });
    //   //     if (!foundItem) {
    //   //       foundItem = { languagetype: this.languagetype, id: 0, name: '' };
    //   //       this.model.push(foundItem);
    //   //     }
    //   //     model = foundItem.name;
    //   //   }
    //   //   this.instance.setData(model);
    //   // }
    // }
    // empty() {
    //   this.model = '';
    //   this.lastViewModel = '';
    //   this.instance.setData('');
    // }
    /**
     * On component destroy
     * @return {?}
     */
    ngOnDestroy() {
        // if (this.debounceTimeout) {
        //   clearTimeout(this.debounceTimeout);
        //   this.debounceTimeout = null;
        // }
        // if (this.instance) {
        //   setTimeout(() => {
        //     this.instance.removeAllListeners();
        //     let dom = document.querySelector('#cke_' + this.instance.name);
        //     if (dom) {
        //       dom.parentNode.removeChild(dom);
        //     }
        //     CKEDITOR.instances[this.instance.name].destroy(true);
        //     this.instance.destroy(true);
        //     this.instance = null;
        //   });
        // }
    }
}
ContenteditableModel.decorators = [
    { type: Directive, args: [{
                selector: '[contenteditableModel]',
            },] }
];
/** @nocollapse */
ContenteditableModel.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
ContenteditableModel.propDecorators = {
    model: [{ type: Input, args: ['contenteditableModel',] }],
    hasI18n: [{ type: Input }],
    change: [{ type: Output, args: ['contenteditableModelChange',] }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    debounce: [{ type: Input }],
    placeholder: [{ type: Input }],
    brMode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContenteditableModel.prototype.model;
    /** @type {?} */
    ContenteditableModel.prototype.hasI18n;
    /** @type {?} */
    ContenteditableModel.prototype.change;
    /** @type {?} */
    ContenteditableModel.prototype.blur;
    /** @type {?} */
    ContenteditableModel.prototype.focus;
    /** @type {?} */
    ContenteditableModel.prototype.debounce;
    /** @type {?} */
    ContenteditableModel.prototype.placeholder;
    /** @type {?} */
    ContenteditableModel.prototype.brMode;
    /**
     * @type {?}
     * @private
     */
    ContenteditableModel.prototype.elRef;
    /** @type {?} */
    ContenteditableModel.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGVkaXRhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5saW5lLWVkaXRvci9jb250ZW50ZWRpdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFHTixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7SUFxQi9CLFlBQW9CLEtBQWlCLEVBQVMsSUFBWTtRQUF0QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQXBCM0IsVUFBSyxHQUFNLEVBQUUsQ0FBQztRQUNwQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2EsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRXhELFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBUyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQVlxQyxDQUFDOzs7O0lBRTlELGVBQWU7UUFDYixvQkFBb0I7SUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4RkQsV0FBVyxDQUFDLE9BQVc7UUFDckIsbUNBQW1DO1FBQ25DLDRCQUE0QjtJQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBERCxXQUFXO1FBQ1QsOEJBQThCO1FBQzlCLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFDakMsSUFBSTtRQUNKLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLHNFQUFzRTtRQUN0RSxpQkFBaUI7UUFDakIseUNBQXlDO1FBQ3pDLFFBQVE7UUFDUiw0REFBNEQ7UUFDNUQsbUNBQW1DO1FBQ25DLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1IsSUFBSTtJQUNOLENBQUM7OztZQXhNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7OztZQWJDLFVBQVU7WUFKVixNQUFNOzs7b0JBbUJMLEtBQUssU0FBQyxzQkFBc0I7c0JBQzVCLEtBQUs7cUJBQ0wsTUFBTSxTQUFDLDRCQUE0QjttQkFFbkMsTUFBTTtvQkFDTixNQUFNO3VCQUNOLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBUk4scUNBQTZDOztJQUM3Qyx1Q0FBeUI7O0lBQ3pCLHNDQUFrRTs7SUFFbEUsb0NBQW9DOztJQUNwQyxxQ0FBcUM7O0lBQ3JDLHdDQUE2Qjs7SUFDN0IsMkNBQTBCOztJQUMxQixzQ0FBd0I7Ozs7O0lBWVoscUNBQXlCOztJQUFFLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE91dHB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXQsXHJcbiAgVHlwZSxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7IFxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjb250ZW50ZWRpdGFibGVNb2RlbF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudGVkaXRhYmxlTW9kZWwgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgnY29udGVudGVkaXRhYmxlTW9kZWwnKSBtb2RlbDogYW55PXt9O1xyXG4gIEBJbnB1dCgpIGhhc0kxOG4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCdjb250ZW50ZWRpdGFibGVNb2RlbENoYW5nZScpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyBAT3V0cHV0KCkgbGltZXRWYWx1ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgZGVib3VuY2U6IHN0cmluZz1cIlwiO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgYnJNb2RlID0gZmFsc2U7XHJcblxyXG4gIC8vIGNoYW5nZUJ5U2VsZiA9IGZhbHNlO1xyXG4gIC8vIGluc3RhbmNlOiBhbnk7XHJcbiAgLy8gY3Vyc29yOiBhbnk7XHJcbiAgLy8gc3BsaXRJbmRleDtcclxuICAvLyBkZWJvdW5jZVRpbWVvdXQ6IGFueTtcclxuICAvLyBsYXN0UmFuZ2U6IGFueTtcclxuICAvLyBlZGl0YWJsZUVsZTogYW55O1xyXG4gIC8vIHByaW91c1Y6IHN0cmluZztcclxuICAvLyBsYW5ndWFnZXR5cGUgPSAxO1xyXG4gIC8vIHByaXZhdGUgbGFzdFZpZXdNb2RlbDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vdGhpcy5pbml0RWRpdG9yKCk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0RWRpdG9yKCkge1xyXG4gIC8vICAgbGV0IGNvbmZpZyA9IHtcclxuICAvLyAgICAgc3RhcnR1cEZvY3VzOiBmYWxzZSxcclxuICAvLyAgICAgdG9vbGJhcjogJ0Jhc2ljJyxcclxuICAvLyAgICAgYWxsb3dlZENvbnRlbnQ6IHRydWUsXHJcbiAgLy8gICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICBleHRyYVBsdWdpbnM6ICcnLFxyXG4gIC8vICAgICB0b29sYmFyX0Jhc2ljOiBbXHJcbiAgLy8gICAgICAgW1xyXG4gIC8vICAgICAgICAgJ0ZvbnQnLFxyXG4gIC8vICAgICAgICAgJ0ZvbnRTaXplJyxcclxuICAvLyAgICAgICAgICdCb2xkJyxcclxuICAvLyAgICAgICAgICdVbmRlcmxpbmUnLFxyXG4gIC8vICAgICAgICAgJ0l0YWxpYycsXHJcbiAgLy8gICAgICAgICAnLScsXHJcbiAgLy8gICAgICAgICAnSnVzdGlmeUxlZnQnLFxyXG4gIC8vICAgICAgICAgJ0p1c3RpZnlDZW50ZXInLFxyXG4gIC8vICAgICAgICAgJ0p1c3RpZnlSaWdodCcsXHJcbiAgLy8gICAgICAgICAnVGV4dENvbG9yJyxcclxuICAvLyAgICAgICAgICdCR0NvbG9yJyxcclxuICAvLyAgICAgICBdLFxyXG4gIC8vICAgICBdXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgaWYgKHRoaXMuaGFzSTE4bikge1xyXG4gIC8vICAgICBjb25zdCBwbHVnaW5OYW1lID0gKGNvbmZpZy5leHRyYVBsdWdpbnMgPyAnLCcgOiAnJykgKyAnaTE4bic7XHJcbiAgLy8gICAgIGNvbmZpZy5leHRyYVBsdWdpbnMgPSBjb25maWcuZXh0cmFQbHVnaW5zICsgcGx1Z2luTmFtZTtcclxuICAvLyAgICAgY29uZmlnLnRvb2xiYXJfQmFzaWNbMF0udW5zaGlmdCgnQ2hpbmVzZScsICctJywgJ0VuZ2xpc2gnKTtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKCdjb25maWc9PScsIGNvbmZpZyk7XHJcbiAgLy8gICBpZiAodGhpcy5ick1vZGUpIHtcclxuICAvLyAgICAgY29uZmlnWydlbnRlck1vZGUnXSA9IENLRURJVE9SLkVOVEVSX0JSO1xyXG4gIC8vICAgICBjb25maWdbJ3NoaWZ0RW50ZXJNb2RlJ10gPSBDS0VESVRPUi5FTlRFUl9CUjtcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuaW5zdGFuY2UgPSBDS0VESVRPUi5pbmxpbmUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coJ3RoaXMuaW5zdGFuY2U9PScsIHRoaXMuaW5zdGFuY2UpO1xyXG5cclxuICAvLyAgIC8vIOiuvue9ruWbvemZheWMluivreiogOWPiuS+puWQrFxyXG4gIC8vICAgLy8gdGhpcy5sYW5ndWFnZXR5cGUgPSB0aGlzLmluc3RhbmNlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWkxOG4nKSB8fCB0aGlzLmxhbmd1YWdldHlwZTtcclxuICAvLyAgIC8vIHRoaXMuaW5zdGFuY2Uub24oJ2kxOG4nLCAoZXZ0OiBhbnkpID0+IHtcclxuICAvLyAgIC8vICAgLy8gY29uc29sZS5sb2coJ2kxOG4gY2hhbmdlPSAnLCBldnQpO1xyXG4gIC8vICAgLy8gICBpZiAoZXZ0LmRhdGEgIT0gdGhpcy5sYW5ndWFnZXR5cGUpIHtcclxuICAvLyAgIC8vICAgICB0aGlzLmxhbmd1YWdldHlwZSA9IGV2dC5kYXRhO1xyXG4gIC8vICAgLy8gICAgIHRoaXMudXBkYXRlRWRpdG9yVmFsdWUoKTtcclxuICAvLyAgIC8vICAgfVxyXG4gIC8vICAgLy8gfSk7XHJcblxyXG4gIC8vICAgLy8g5pu05paw6KGo5Y2V5YC8XHJcbiAgLy8gICB0aGlzLnVwZGF0ZUVkaXRvclZhbHVlKCk7XHJcblxyXG4gIC8vICAgLy8gQ0tFZGl0b3IgYmx1ciBldmVudFxyXG4gIC8vICAgdGhpcy5pbnN0YW5jZS5vbignYmx1cicsIChldnQ6IGFueSkgPT4ge1xyXG4gIC8vICAgICB0aGlzLmJsdXIuZW1pdChldnQpO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgLy8gQ0tFZGl0b3IgZm9jdXMgZXZlbnRcclxuICAvLyAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2dDogYW55KSA9PiB7XHJcbiAgLy8gICAgIHRoaXMuZm9jdXMuZW1pdChldnQpO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2dDogYW55KSA9PiB7XHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdvbmNoYW5nZSA9PSAnLCBldnQpO1xyXG4gIC8vICAgICBsZXQgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldERhdGEoKTtcclxuICAvLyAgICAgaWYgKHRoaXMubW9kZWwgIT09IHZhbHVlKSB7XHJcbiAgLy8gICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXHJcbiAgLy8gICAgICAgaWYgKHRoaXMuZGVib3VuY2UpIHtcclxuICAvLyAgICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcclxuICAvLyAgICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5pbnN0YW5jZS5nZXREYXRhKCkpO1xyXG4gIC8vICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XHJcbiAgLy8gICAgICAgICB9LCBwYXJzZUludCh0aGlzLmRlYm91bmNlLCAxMCkpO1xyXG4gIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZG9Gb2N1cygpIHtcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICB0aGlzLmluc3RhbmNlLmZvY3VzKCk7XHJcbiAgLy8gICB9LCAwKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGluc2VydEFmdGVyKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQpIHtcclxuICAvLyAgIHZhciBwYXJlbnQgPSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgLy8gICBpZiAocGFyZW50Lmxhc3RDaGlsZCA9PSB0YXJnZXRFbGVtZW50KSB7XHJcbiAgLy8gICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgdGFyZ2V0RWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSkge1xyXG4gICAgLy8gdGhpcy5sYXN0Vmlld01vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgIC8vIHRoaXMudXBkYXRlRWRpdG9yVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIC8vIG9uS2V5dXAoKSB7XHJcbiAgLy8gICB2YXIgdmFsdWUgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gIC8vICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdmFsdWU7XHJcbiAgLy8gICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHVwZGF0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAvLyAgIC8vIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gIC8vICAgLy8gICB0aGlzLmxhc3RWaWV3TW9kZWwgPSB2YWx1ZTtcclxuICAvLyAgIC8vICAgdGhpcy5jaGFuZ2VCeVNlbGYgPSB0cnVlO1xyXG4gIC8vICAgLy8gICBpZiAoXy5pc0FycmF5KHRoaXMubW9kZWwpKSB7XHJcbiAgLy8gICAvLyAgICAgY29uc3QgZm91bmQgPSB0aGlzLm1vZGVsLmZpbmQoaXRlbSA9PiB7XHJcbiAgLy8gICAvLyAgICAgICByZXR1cm4gaXRlbS5sYW5ndWFnZXR5cGUgPT0gdGhpcy5sYW5ndWFnZXR5cGU7IC8vemhjblxyXG4gIC8vICAgLy8gICAgIH0pO1xyXG4gIC8vICAgLy8gICAgIGlmIChmb3VuZCkge1xyXG4gIC8vICAgLy8gICAgICAgZm91bmQubmFtZSA9IHZhbHVlO1xyXG4gIC8vICAgLy8gICAgIH1cclxuICAvLyAgIC8vICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubW9kZWwpO1xyXG4gIC8vICAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgLy8gICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIC8vICAgLy8gICB9XHJcbiAgLy8gICAvLyB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHJlZnJlc2hWaWV3KCkge1xyXG4gIC8vICAgaWYgKHRoaXMuaW5zdGFuY2UpIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLmxhc3RWaWV3TW9kZWwpO1xyXG4gIC8vICAgLy8gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubGFzdFZpZXdNb2RlbFxyXG4gIC8vIH1cclxuXHJcbiAgLy8gdXBkYXRlRWRpdG9yVmFsdWUoKSB7XHJcbiAgLy8gICAvLyBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gIC8vICAgLy8gICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gIC8vICAgLy8gICAvLyBjb25zb2xlLmxvZygndGhpcy5tb2RlbD09JywgdGhpcy5tb2RlbCk7XHJcbiAgLy8gICAvLyAgIGlmIChfLmlzQXJyYXkodGhpcy5tb2RlbCkpIHtcclxuICAvLyAgIC8vICAgICBsZXQgZm91bmRJdGVtID0gdGhpcy5tb2RlbC5maW5kKGl0ZW0gPT4ge1xyXG4gIC8vICAgLy8gICAgICAgcmV0dXJuIGl0ZW0ubGFuZ3VhZ2V0eXBlID09IHRoaXMubGFuZ3VhZ2V0eXBlOyAvL3poY25cclxuICAvLyAgIC8vICAgICB9KTtcclxuICAvLyAgIC8vICAgICBpZiAoIWZvdW5kSXRlbSkge1xyXG4gIC8vICAgLy8gICAgICAgZm91bmRJdGVtID0geyBsYW5ndWFnZXR5cGU6IHRoaXMubGFuZ3VhZ2V0eXBlLCBpZDogMCwgbmFtZTogJycgfTtcclxuICAvLyAgIC8vICAgICAgIHRoaXMubW9kZWwucHVzaChmb3VuZEl0ZW0pO1xyXG4gIC8vICAgLy8gICAgIH1cclxuICAvLyAgIC8vICAgICBtb2RlbCA9IGZvdW5kSXRlbS5uYW1lO1xyXG4gIC8vICAgLy8gICB9XHJcbiAgLy8gICAvLyAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YShtb2RlbCk7XHJcbiAgLy8gICAvLyB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBlbXB0eSgpIHtcclxuICAvLyAgIHRoaXMubW9kZWwgPSAnJztcclxuICAvLyAgIHRoaXMubGFzdFZpZXdNb2RlbCA9ICcnO1xyXG4gIC8vICAgdGhpcy5pbnN0YW5jZS5zZXREYXRhKCcnKTtcclxuICAvLyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cm95XHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcclxuICAgIC8vICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcclxuICAgIC8vICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5pbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgIC8vICAgICBsZXQgZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NrZV8nICsgdGhpcy5pbnN0YW5jZS5uYW1lKTtcclxuICAgIC8vICAgICBpZiAoZG9tKSB7XHJcbiAgICAvLyAgICAgICBkb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5uYW1lXS5kZXN0cm95KHRydWUpO1xyXG4gICAgLy8gICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSh0cnVlKTtcclxuICAgIC8vICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvLyByZXBlYXRTdHIoc3RyLCBjb3VudCkge1xyXG4gIC8vICAgdmFyIHJldCA9ICcnO1xyXG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgLy8gICAgIHJldCArPSBzdHI7XHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gcmV0O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY2hlY2tBbGxJc1VuZGxpbmUoaW5wdXQpIHtcclxuICAvLyAgIGxldCByZXQgPSB0cnVlO1xyXG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICBpZiAoaW5wdXRbaV0gIT0gJ18nKSB7XHJcbiAgLy8gICAgICAgcmV0ID0gZmFsc2U7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiByZXQ7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZXRUZXh0Tm9kZShwYXJlbnQpIHtcclxuICAvLyAgIHZhciBjaGlsZE5vZGVzID0gcGFyZW50LmNoaWxkTm9kZXM7XHJcbiAgLy8gICB2YXIgY2hpbGRMZW4gPSBjaGlsZE5vZGVzLmxlbmd0aDtcclxuICAvLyAgIGlmIChjaGlsZExlbiA+IDApIHtcclxuICAvLyAgICAgdmFyIGNoaWxkID0gY2hpbGROb2Rlc1swXTtcclxuICAvLyAgICAgaWYgKGNoaWxkLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gIC8vICAgICAgIHJldHVybiBjaGlsZC5jaGlsZE5vZGVzWzBdO1xyXG4gIC8vICAgICB9IGVsc2UgcmV0dXJuIGNoaWxkO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIHBhcmVudDtcclxuICAvLyB9XHJcblxyXG4gIC8vIHByZXBhcmVSZXBsYWNlKCkge1xyXG4gIC8vICAgLy8g6K6+572u5pyA5ZCO5YWJ5qCH5a+56LGhXHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKGxhc3RSYW5nZSlcclxuICAvLyAgIHZhciBzdGFydE9mZnNldCA9IHRoaXMubGFzdFJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG4gIC8vICAgdmFyIHN0YXJ0VGV4dCA9IHRoaXMubGFzdFJhbmdlLnN0YXJ0Q29udGFpbmVyLmRhdGE7XHJcbiAgLy8gICB2YXIgcGFyZW50VGFnTmFtZSA9IHRoaXMubGFzdFJhbmdlLnN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGUubm9kZU5hbWU7XHJcbiAgLy8gICB2YXIgaXNCbGFuayA9IHRoaXMubGFzdFJhbmdlLnN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ21vZF9maWxsYmxhbmsnKSA+PSAwO1xyXG4gIC8vICAgLy9jb25zb2xlLmxvZyhcInN0YXJ0VGV4dDpcIitzdGFydFRleHQpXHJcbiAgLy8gICBpZiAocGFyZW50VGFnTmFtZSA9PSAnUCcgfHwgKGlzQmxhbmsgJiYgcGFyZW50VGFnTmFtZSA9PSAnU1BBTicpKSB7XHJcbiAgLy8gICAgIGlmICh0aGlzLmNoZWNrQWxsSXNVbmRsaW5lKHN0YXJ0VGV4dCkpIHtcclxuICAvLyAgICAgICB0aGlzLmN1cnNvciA9IHN0YXJ0T2Zmc2V0O1xyXG4gIC8vICAgICB9IGVsc2UgaWYgKHN0YXJ0VGV4dC5zdWJzdHIoLTEsIDEpID09ICdfJykge1xyXG4gIC8vICAgICAgIC8v5pyA5ZCO5LiA5Liq5pivX1xyXG4gIC8vICAgICAgIHZhciBmbGFnQ291bnQgPSAwO1xyXG4gIC8vICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhcnRPZmZzZXQ7IGkrKykge1xyXG4gIC8vICAgICAgICAgaWYgKHN0YXJ0VGV4dFtpXSA9PSAnXycpIGZsYWdDb3VudCsrO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICB0aGlzLmN1cnNvciA9IGZsYWdDb3VudDtcclxuICAvLyAgICAgfSBlbHNlIGlmIChzdGFydFRleHQuaW5kZXhPZignXycpID49IDApIHtcclxuICAvLyAgICAgICAvL2NoZWNrIGZpcnN0IGlzIF9cclxuICAvLyAgICAgICBpZiAoc3RhcnRUZXh0WzBdID09ICdfJykge1xyXG4gIC8vICAgICAgICAgdmFyIGZsYWdDb3VudCA9IDA7XHJcbiAgLy8gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0T2Zmc2V0OyBpKyspIHtcclxuICAvLyAgICAgICAgICAgaWYgKHN0YXJ0VGV4dFtpXSA9PSAnXycpIGZsYWdDb3VudCsrO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgdGhpcy5jdXJzb3IgPSBzdGFydE9mZnNldCAtIGZsYWdDb3VudDtcclxuICAvLyAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgdmFyIGZsYWdDb3VudCA9IDA7XHJcbiAgLy8gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0T2Zmc2V0OyBpKyspIHtcclxuICAvLyAgICAgICAgICAgaWYgKHN0YXJ0VGV4dFtpXSAhPSAnXycpIGZsYWdDb3VudCsrO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgdGhpcy5jdXJzb3IgPSBzdGFydE9mZnNldCAtIGZsYWdDb3VudDtcclxuICAvLyAgICAgICB9XHJcblxyXG4gIC8vICAgICAgIC8v5Yik5pat5bem6L655piv6Z2e5a2X5q+N55qE5oOF5Ya1XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgdGhpcy5jdXJzb3IgPSBzdGFydE9mZnNldDtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgdGhpcy5jdXJzb3IgPSBzdGFydE9mZnNldDtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnbGFzdCBjdXJzb3I6JyArIHRoaXMuY3Vyc29yKTtcclxuICAvLyAgIC8v5oCO5LmI5YiG5q61XHJcbiAgLy8gICB2YXIgY2hpbGROb2RlcyA9IHRoaXMuZWRpdGFibGVFbGUuY2hpbGROb2RlcztcclxuICAvLyAgIHZhciBjaGlsZE5vZGVMZW4gPSBjaGlsZE5vZGVzLmxlbmd0aDtcclxuICAvLyAgIC8vY29uc29sZS5sb2coY2hpbGROb2RlcylcclxuICAvLyAgIHZhciBmaW5kSW5kZXg7XHJcbiAgLy8gICB2YXIgdGV4dE5vZGU7XHJcbiAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZUxlbjsgaSsrKSB7XHJcbiAgLy8gICAgIHRleHROb2RlID0gdGhpcy5nZXRUZXh0Tm9kZShjaGlsZE5vZGVzW2ldKTtcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2codGV4dE5vZGUpXHJcbiAgLy8gICAgIGlmICh0ZXh0Tm9kZSA9PSB0aGlzLmxhc3RSYW5nZS5zdGFydENvbnRhaW5lcikge1xyXG4gIC8vICAgICAgIC8vY29uc29sZS5sb2coXCJtYXRjaFwiKVxyXG4gIC8vICAgICAgIGZpbmRJbmRleCA9IGk7XHJcbiAgLy8gICAgICAgdmFyIHBhcmVudFRhZ05hbWUgPSB0ZXh0Tm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lO1xyXG4gIC8vICAgICAgIHZhciBpc0JsYW5rID0gdGV4dE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignbW9kX2ZpbGxibGFuaycpID49IDA7XHJcbiAgLy8gICAgICAgaWYgKFxyXG4gIC8vICAgICAgICAgIXRoaXMuY2hlY2tBbGxJc1VuZGxpbmUodGV4dE5vZGUuZGF0YSkgJiZcclxuICAvLyAgICAgICAgICgocGFyZW50VGFnTmFtZSA9PSAnU1BBTicgJiYgaXNCbGFuaykgfHwgcGFyZW50VGFnTmFtZSA9PSAnUCcpXHJcbiAgLy8gICAgICAgKSB7XHJcbiAgLy8gICAgICAgICBpZiAodGV4dE5vZGUuZGF0YS5pbmRleE9mKCdfJykgPj0gMCkge1xyXG4gIC8vICAgICAgICAgICBmaW5kSW5kZXggPSBpICsgMTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuc3BsaXRJbmRleCA9IGZpbmRJbmRleDtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKCdpbmRleDonICsgZmluZEluZGV4KTtcclxuICAvLyAgIC8vdGhpcy5kb1JlcGxhY2UoKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gZG9SZXBsYWNlKCkge1xyXG4gIC8vICAgdmFyIGlubmVySFRNTCA9IHRoaXMuZWRpdGFibGVFbGUuaW5uZXJIVE1MO1xyXG4gIC8vICAgLy9jb25zb2xlLmxvZyhcImlubmVySFRNTDpcIitpbm5lckhUTUwpXHJcbiAgLy8gICB2YXIgcmVwbGFjZVN0ciA9IHRoaXMuZ2V0UmVwbGFjZVN0cihpbm5lckhUTUwpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocmVwbGFjZVN0cik7XHJcbiAgLy8gICAvLyBlZGl0YWJsZUVsZS5pbm5lckhUTUwgPSByZXBsYWNlU3RyXHJcbiAgLy8gICAvL3RoaXMuaW5zdGFuY2Uuc2V0RGF0YShyZXBsYWNlU3RyKTtcclxuICAvLyAgIHZhciBjaGlsZE5vZGVzID0gdGhpcy5lZGl0YWJsZUVsZS5jaGlsZE5vZGVzO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coY2hpbGROb2Rlcyk7XHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKHNlbGVjdGlvbilcclxuICAvLyAgIC8vIOWIpOaWreaYr+WQpuacieacgOWQjuWFieagh+WvueixoeWtmOWcqFxyXG4gIC8vICAgaWYgKHRoaXMuY3Vyc29yKSB7XHJcbiAgLy8gICAgIC8vY29uc29sZS5sb2coXCJleGlzdCByYW5nZVwiKVxyXG4gIC8vICAgICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZXMpXHJcbiAgLy8gICAgIHZhciBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oKTtcclxuICAvLyAgICAgdmFyIHRleHROb2RlO1xyXG4gIC8vICAgICAvL3ZhciByYW5nZU5ldyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgLy8gICAgIHZhciByYW5nZSA9IG5ldyBDS0VESVRPUi5kb20ucmFuZ2UodGhpcy5pbnN0YW5jZS5kb2N1bWVudCk7XHJcbiAgLy8gICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmluc3RhbmNlLmRvY3VtZW50LmdldEJvZHkoKSk7XHJcbiAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICAgIGlmIChpID09IHRoaXMuc3BsaXRJbmRleCkge1xyXG4gIC8vICAgICAgICAgdGV4dE5vZGUgPSB0aGlzLmdldFRleHROb2RlKGNoaWxkTm9kZXNbaV0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZygndGV4dE5vZGU6JyArIHRleHROb2RlKTtcclxuICAvLyAgICAgaWYgKHRleHROb2RlKSB7XHJcbiAgLy8gICAgICAgLy9yYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZSwgdGhpcy5jdXJzb3IpXHJcbiAgLy8gICAgICAgLy8g5L2/5YWJ5qCH5byA5aeL5ZKM5YWJ5qCH57uT5p2f6YeN5Y+gXHJcbiAgLy8gICAgICAgLy9yYW5nZS5jb2xsYXBzZSh0cnVlKVxyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICAvLyDmuIXpmaTpgInlrprlr7nosaHnmoTmiYDmnInlhYnmoIflr7nosaFcclxuICAvLyAgICAgLy9zZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcclxuICAvLyAgICAgLy8g5o+S5YWl5paw55qE5YWJ5qCH5a+56LGhXHJcbiAgLy8gICAgIC8vc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJhbmdlKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0UmVwbGFjZVN0cihzdHIpIHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwib3JpZ2luXCIpXHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKHN0cilcclxuICAvLyAgIHZhciByZWdleDEgPSAvPHNwYW4gZGF0YS1pZD1cImZpbGxibGFuay1bXFx3XStcIiBjbGFzcz1cIm1vZF9maWxsYmxhbmtcIj4oW1xcd3xcXHU0ZTAwLVxcdTlmYTVhXSspPFxcL3NwYW4+L2c7XHJcbiAgLy8gICAvLyDlrprkuYnmnIDlkI7lhYnmoIflr7nosaFcclxuICAvLyAgIHZhciBsYXN0RWRpdFJhbmdlO1xyXG5cclxuICAvLyAgIHN0ciA9IHN0ci5yZXBsYWNlKHJlZ2V4MSwgZnVuY3Rpb24obWF0Y2gsICQxKSB7XHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoKVxyXG4gIC8vICAgICAvL2NvbnNvbGUubG9nKCQxKVxyXG4gIC8vICAgICAvLyB2YXIgZm9ybWF0U3RyID0gJDEucmVwbGFjZSgvW19dKy9nLGZ1bmN0aW9uKG1hdGNoKXtcclxuICAvLyAgICAgLy8gXHQvLy9jb25zb2xlLmxvZyhtYXRjaClcclxuICAvLyAgICAgLy8gXHRyZXR1cm4gJzxzcGFuIGRhdGEtaWQ9XCJmaWxsYmxhbmstdzcxRVwiIGNsYXNzPVwibW9kX2ZpbGxibGFua1wiPicrbWF0Y2grJzwvc3Bhbj4nXHJcbiAgLy8gICAgIC8vIH0pXHJcbiAgLy8gICAgIC8vY29uc29sZS5sb2coc3RyKVxyXG4gIC8vICAgICByZXR1cm4gJDE7XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIC8vY29uc29sZS5sb2coXCJzdGVwMTpcIilcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHN0cilcclxuICAvLyAgIHN0ciA9IHN0ci5yZXBsYWNlKC88KFtePl0rPikoXFx3KltfXStcXHcqKSg8W14+XSs+KS9nLCBmdW5jdGlvbihtYXRjaCwgJDEsICQyKSB7XHJcbiAgLy8gICAgIC8vY29uc29sZS5sb2cobWF0Y2gsJDEsJDIpXHJcbiAgLy8gICAgIHZhciBmb3JtYXRTdHIgPSBtYXRjaC5yZXBsYWNlKC9bX10rL2csIGZ1bmN0aW9uKG1hdGNoKSB7XHJcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2gpXHJcbiAgLy8gICAgICAgcmV0dXJuIHRoaXMucmVwZWF0U3RyKCdcXG4nLCBtYXRjaC5sZW5ndGgpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgcmV0dXJuIGZvcm1hdFN0cjtcclxuICAvLyAgIH0pOyAvL+WOu+aOieaJgOacieeahGh0bWzmoIforrBcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHN0cilcclxuICAvLyAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bX10rL2csIGZ1bmN0aW9uKG1hdGNoKSB7XHJcbiAgLy8gICAgIC8vY29uc29sZS5sb2cobWF0Y2gpXHJcbiAgLy8gICAgIHJldHVybiAnPHNwYW4gZGF0YS1pZD1cImZpbGxibGFuay13NzFFXCIgY2xhc3M9XCJtb2RfZmlsbGJsYW5rXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICBzdHIgPSBzdHIucmVwbGFjZSgvXFxuKy9nLCBmdW5jdGlvbihtYXRjaCkge1xyXG4gIC8vICAgICByZXR1cm4gdGhpcy5yZXBlYXRTdHIoJ18nLCBtYXRjaC5sZW5ndGgpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKHN0cilcclxuICAvLyAgIHJldHVybiBzdHI7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpbnNlcnRUZXh0KHRleHQpIHtcclxuICAvLyAgIHRoaXMuaW5zdGFuY2UuaW5zZXJ0VGV4dCh0ZXh0KTtcclxuICAvLyB9XHJcbn1cclxuIl19