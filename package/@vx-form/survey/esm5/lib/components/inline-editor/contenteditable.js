/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, NgZone, Output, ElementRef, Directive, EventEmitter, } from '@angular/core';
var ContenteditableModel = /** @class */ (function () {
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
    function ContenteditableModel(elRef, zone) {
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
    ContenteditableModel.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        //this.initEditor();
    };
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
    ContenteditableModel.prototype.ngOnChanges = 
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
    function (changes) {
        // this.lastViewModel = this.model;
        // this.updateEditorValue();
    };
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
     */
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
    ContenteditableModel.prototype.ngOnDestroy = 
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
    function () {
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
    };
    ContenteditableModel.decorators = [
        { type: Directive, args: [{
                    selector: '[contenteditableModel]',
                },] }
    ];
    /** @nocollapse */
    ContenteditableModel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
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
    return ContenteditableModel;
}());
export { ContenteditableModel };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGVkaXRhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5saW5lLWVkaXRvci9jb250ZW50ZWRpdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFHTixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUt2QjtJQWNFLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5Qiw4QkFBb0IsS0FBaUIsRUFBUyxJQUFZO1FBQXRDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBcEIzQixVQUFLLEdBQU0sRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDYSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFeEQsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFTLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBWXFDLENBQUM7Ozs7SUFFOUQsOENBQWU7OztJQUFmO1FBQ0Usb0JBQW9CO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0JBQXNC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFYO1FBQ0UsOEJBQThCO1FBQzlCLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFDakMsSUFBSTtRQUNKLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLHNFQUFzRTtRQUN0RSxpQkFBaUI7UUFDakIseUNBQXlDO1FBQ3pDLFFBQVE7UUFDUiw0REFBNEQ7UUFDNUQsbUNBQW1DO1FBQ25DLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1IsSUFBSTtJQUNOLENBQUM7O2dCQXhNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBYkMsVUFBVTtnQkFKVixNQUFNOzs7d0JBbUJMLEtBQUssU0FBQyxzQkFBc0I7MEJBQzVCLEtBQUs7eUJBQ0wsTUFBTSxTQUFDLDRCQUE0Qjt1QkFFbkMsTUFBTTt3QkFDTixNQUFNOzJCQUNOLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQXNYUiwyQkFBQztDQUFBLEFBbFlELElBa1lDO1NBL1hZLG9CQUFvQjs7O0lBQy9CLHFDQUE2Qzs7SUFDN0MsdUNBQXlCOztJQUN6QixzQ0FBa0U7O0lBRWxFLG9DQUFvQzs7SUFDcEMscUNBQXFDOztJQUNyQyx3Q0FBNkI7O0lBQzdCLDJDQUEwQjs7SUFDMUIsc0NBQXdCOzs7OztJQVlaLHFDQUF5Qjs7SUFBRSxvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPdXRwdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBFbGVtZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55OyBcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY29udGVudGVkaXRhYmxlTW9kZWxdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlbnRlZGl0YWJsZU1vZGVsIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ2NvbnRlbnRlZGl0YWJsZU1vZGVsJykgbW9kZWw6IGFueT17fTtcclxuICBASW5wdXQoKSBoYXNJMThuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgnY29udGVudGVkaXRhYmxlTW9kZWxDaGFuZ2UnKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gQE91dHB1dCgpIGxpbWV0VmFsdWU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBzdHJpbmc9XCJcIjtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGJyTW9kZSA9IGZhbHNlO1xyXG5cclxuICAvLyBjaGFuZ2VCeVNlbGYgPSBmYWxzZTtcclxuICAvLyBpbnN0YW5jZTogYW55O1xyXG4gIC8vIGN1cnNvcjogYW55O1xyXG4gIC8vIHNwbGl0SW5kZXg7XHJcbiAgLy8gZGVib3VuY2VUaW1lb3V0OiBhbnk7XHJcbiAgLy8gbGFzdFJhbmdlOiBhbnk7XHJcbiAgLy8gZWRpdGFibGVFbGU6IGFueTtcclxuICAvLyBwcmlvdXNWOiBzdHJpbmc7XHJcbiAgLy8gbGFuZ3VhZ2V0eXBlID0gMTtcclxuICAvLyBwcml2YXRlIGxhc3RWaWV3TW9kZWw6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvL3RoaXMuaW5pdEVkaXRvcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdEVkaXRvcigpIHtcclxuICAvLyAgIGxldCBjb25maWcgPSB7XHJcbiAgLy8gICAgIHN0YXJ0dXBGb2N1czogZmFsc2UsXHJcbiAgLy8gICAgIHRvb2xiYXI6ICdCYXNpYycsXHJcbiAgLy8gICAgIGFsbG93ZWRDb250ZW50OiB0cnVlLFxyXG4gIC8vICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgZXh0cmFQbHVnaW5zOiAnJyxcclxuICAvLyAgICAgdG9vbGJhcl9CYXNpYzogW1xyXG4gIC8vICAgICAgIFtcclxuICAvLyAgICAgICAgICdGb250JyxcclxuICAvLyAgICAgICAgICdGb250U2l6ZScsXHJcbiAgLy8gICAgICAgICAnQm9sZCcsXHJcbiAgLy8gICAgICAgICAnVW5kZXJsaW5lJyxcclxuICAvLyAgICAgICAgICdJdGFsaWMnLFxyXG4gIC8vICAgICAgICAgJy0nLFxyXG4gIC8vICAgICAgICAgJ0p1c3RpZnlMZWZ0JyxcclxuICAvLyAgICAgICAgICdKdXN0aWZ5Q2VudGVyJyxcclxuICAvLyAgICAgICAgICdKdXN0aWZ5UmlnaHQnLFxyXG4gIC8vICAgICAgICAgJ1RleHRDb2xvcicsXHJcbiAgLy8gICAgICAgICAnQkdDb2xvcicsXHJcbiAgLy8gICAgICAgXSxcclxuICAvLyAgICAgXVxyXG4gIC8vICAgfTtcclxuICAvLyAgIGlmICh0aGlzLmhhc0kxOG4pIHtcclxuICAvLyAgICAgY29uc3QgcGx1Z2luTmFtZSA9IChjb25maWcuZXh0cmFQbHVnaW5zID8gJywnIDogJycpICsgJ2kxOG4nO1xyXG4gIC8vICAgICBjb25maWcuZXh0cmFQbHVnaW5zID0gY29uZmlnLmV4dHJhUGx1Z2lucyArIHBsdWdpbk5hbWU7XHJcbiAgLy8gICAgIGNvbmZpZy50b29sYmFyX0Jhc2ljWzBdLnVuc2hpZnQoJ0NoaW5lc2UnLCAnLScsICdFbmdsaXNoJyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnY29uZmlnPT0nLCBjb25maWcpO1xyXG4gIC8vICAgaWYgKHRoaXMuYnJNb2RlKSB7XHJcbiAgLy8gICAgIGNvbmZpZ1snZW50ZXJNb2RlJ10gPSBDS0VESVRPUi5FTlRFUl9CUjtcclxuICAvLyAgICAgY29uZmlnWydzaGlmdEVudGVyTW9kZSddID0gQ0tFRElUT1IuRU5URVJfQlI7XHJcbiAgLy8gICB9XHJcbiAgLy8gICB0aGlzLmluc3RhbmNlID0gQ0tFRElUT1IuaW5saW5lKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmluc3RhbmNlPT0nLCB0aGlzLmluc3RhbmNlKTtcclxuXHJcbiAgLy8gICAvLyDorr7nva7lm73pmYXljJbor63oqIDlj4rkvqblkKxcclxuICAvLyAgIC8vIHRoaXMubGFuZ3VhZ2V0eXBlID0gdGhpcy5pbnN0YW5jZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pMThuJykgfHwgdGhpcy5sYW5ndWFnZXR5cGU7XHJcbiAgLy8gICAvLyB0aGlzLmluc3RhbmNlLm9uKCdpMThuJywgKGV2dDogYW55KSA9PiB7XHJcbiAgLy8gICAvLyAgIC8vIGNvbnNvbGUubG9nKCdpMThuIGNoYW5nZT0gJywgZXZ0KTtcclxuICAvLyAgIC8vICAgaWYgKGV2dC5kYXRhICE9IHRoaXMubGFuZ3VhZ2V0eXBlKSB7XHJcbiAgLy8gICAvLyAgICAgdGhpcy5sYW5ndWFnZXR5cGUgPSBldnQuZGF0YTtcclxuICAvLyAgIC8vICAgICB0aGlzLnVwZGF0ZUVkaXRvclZhbHVlKCk7XHJcbiAgLy8gICAvLyAgIH1cclxuICAvLyAgIC8vIH0pO1xyXG5cclxuICAvLyAgIC8vIOabtOaWsOihqOWNleWAvFxyXG4gIC8vICAgdGhpcy51cGRhdGVFZGl0b3JWYWx1ZSgpO1xyXG5cclxuICAvLyAgIC8vIENLRWRpdG9yIGJsdXIgZXZlbnRcclxuICAvLyAgIHRoaXMuaW5zdGFuY2Uub24oJ2JsdXInLCAoZXZ0OiBhbnkpID0+IHtcclxuICAvLyAgICAgdGhpcy5ibHVyLmVtaXQoZXZ0KTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIC8vIENLRWRpdG9yIGZvY3VzIGV2ZW50XHJcbiAgLy8gICB0aGlzLmluc3RhbmNlLm9uKCdmb2N1cycsIChldnQ6IGFueSkgPT4ge1xyXG4gIC8vICAgICB0aGlzLmZvY3VzLmVtaXQoZXZ0KTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldnQ6IGFueSkgPT4ge1xyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZygnb25jaGFuZ2UgPT0gJywgZXZ0KTtcclxuICAvLyAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXREYXRhKCk7XHJcbiAgLy8gICAgIGlmICh0aGlzLm1vZGVsICE9PSB2YWx1ZSkge1xyXG4gIC8vICAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxyXG4gIC8vICAgICAgIGlmICh0aGlzLmRlYm91bmNlKSB7XHJcbiAgLy8gICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XHJcbiAgLy8gICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuaW5zdGFuY2UuZ2V0RGF0YSgpKTtcclxuICAvLyAgICAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xyXG4gIC8vICAgICAgICAgfSwgcGFyc2VJbnQodGhpcy5kZWJvdW5jZSwgMTApKTtcclxuICAvLyAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGRvRm9jdXMoKSB7XHJcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgdGhpcy5pbnN0YW5jZS5mb2N1cygpO1xyXG4gIC8vICAgfSwgMCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpbnNlcnRBZnRlcihuZXdFbGVtZW50LCB0YXJnZXRFbGVtZW50KSB7XHJcbiAgLy8gICB2YXIgcGFyZW50ID0gdGFyZ2V0RWxlbWVudC5wYXJlbnROb2RlO1xyXG4gIC8vICAgaWYgKHBhcmVudC5sYXN0Q2hpbGQgPT0gdGFyZ2V0RWxlbWVudCkge1xyXG4gIC8vICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpIHtcclxuICAgIC8vIHRoaXMubGFzdFZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAvLyB0aGlzLnVwZGF0ZUVkaXRvclZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBvbktleXVwKCkge1xyXG4gIC8vICAgdmFyIHZhbHVlID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcclxuICAvLyAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHZhbHVlO1xyXG4gIC8vICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyB1cGRhdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgLy8gICAvLyB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAvLyAgIC8vICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdmFsdWU7XHJcbiAgLy8gICAvLyAgIHRoaXMuY2hhbmdlQnlTZWxmID0gdHJ1ZTtcclxuICAvLyAgIC8vICAgaWYgKF8uaXNBcnJheSh0aGlzLm1vZGVsKSkge1xyXG4gIC8vICAgLy8gICAgIGNvbnN0IGZvdW5kID0gdGhpcy5tb2RlbC5maW5kKGl0ZW0gPT4ge1xyXG4gIC8vICAgLy8gICAgICAgcmV0dXJuIGl0ZW0ubGFuZ3VhZ2V0eXBlID09IHRoaXMubGFuZ3VhZ2V0eXBlOyAvL3poY25cclxuICAvLyAgIC8vICAgICB9KTtcclxuICAvLyAgIC8vICAgICBpZiAoZm91bmQpIHtcclxuICAvLyAgIC8vICAgICAgIGZvdW5kLm5hbWUgPSB2YWx1ZTtcclxuICAvLyAgIC8vICAgICB9XHJcbiAgLy8gICAvLyAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcclxuICAvLyAgIC8vICAgfSBlbHNlIHtcclxuICAvLyAgIC8vICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAvLyAgIC8vICAgfVxyXG4gIC8vICAgLy8gfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyByZWZyZXNoVmlldygpIHtcclxuICAvLyAgIGlmICh0aGlzLmluc3RhbmNlKSB0aGlzLmluc3RhbmNlLnNldERhdGEodGhpcy5sYXN0Vmlld01vZGVsKTtcclxuICAvLyAgIC8vIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmxhc3RWaWV3TW9kZWxcclxuICAvLyB9XHJcblxyXG4gIC8vIHVwZGF0ZUVkaXRvclZhbHVlKCkge1xyXG4gIC8vICAgLy8gaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAvLyAgIC8vICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAvLyAgIC8vICAgLy8gY29uc29sZS5sb2coJ3RoaXMubW9kZWw9PScsIHRoaXMubW9kZWwpO1xyXG4gIC8vICAgLy8gICBpZiAoXy5pc0FycmF5KHRoaXMubW9kZWwpKSB7XHJcbiAgLy8gICAvLyAgICAgbGV0IGZvdW5kSXRlbSA9IHRoaXMubW9kZWwuZmluZChpdGVtID0+IHtcclxuICAvLyAgIC8vICAgICAgIHJldHVybiBpdGVtLmxhbmd1YWdldHlwZSA9PSB0aGlzLmxhbmd1YWdldHlwZTsgLy96aGNuXHJcbiAgLy8gICAvLyAgICAgfSk7XHJcbiAgLy8gICAvLyAgICAgaWYgKCFmb3VuZEl0ZW0pIHtcclxuICAvLyAgIC8vICAgICAgIGZvdW5kSXRlbSA9IHsgbGFuZ3VhZ2V0eXBlOiB0aGlzLmxhbmd1YWdldHlwZSwgaWQ6IDAsIG5hbWU6ICcnIH07XHJcbiAgLy8gICAvLyAgICAgICB0aGlzLm1vZGVsLnB1c2goZm91bmRJdGVtKTtcclxuICAvLyAgIC8vICAgICB9XHJcbiAgLy8gICAvLyAgICAgbW9kZWwgPSBmb3VuZEl0ZW0ubmFtZTtcclxuICAvLyAgIC8vICAgfVxyXG4gIC8vICAgLy8gICB0aGlzLmluc3RhbmNlLnNldERhdGEobW9kZWwpO1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gZW1wdHkoKSB7XHJcbiAgLy8gICB0aGlzLm1vZGVsID0gJyc7XHJcbiAgLy8gICB0aGlzLmxhc3RWaWV3TW9kZWwgPSAnJztcclxuICAvLyAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSgnJyk7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJveVxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XHJcbiAgICAvLyAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XHJcbiAgICAvLyAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuaW5zdGFuY2UucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgICAvLyAgICAgbGV0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNja2VfJyArIHRoaXMuaW5zdGFuY2UubmFtZSk7XHJcbiAgICAvLyAgICAgaWYgKGRvbSkge1xyXG4gICAgLy8gICAgICAgZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubmFtZV0uZGVzdHJveSh0cnVlKTtcclxuICAgIC8vICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAvLyAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLy8gcmVwZWF0U3RyKHN0ciwgY291bnQpIHtcclxuICAvLyAgIHZhciByZXQgPSAnJztcclxuICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gIC8vICAgICByZXQgKz0gc3RyO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIHJldDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNoZWNrQWxsSXNVbmRsaW5lKGlucHV0KSB7XHJcbiAgLy8gICBsZXQgcmV0ID0gdHJ1ZTtcclxuICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgaWYgKGlucHV0W2ldICE9ICdfJykge1xyXG4gIC8vICAgICAgIHJldCA9IGZhbHNlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gcmV0O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0VGV4dE5vZGUocGFyZW50KSB7XHJcbiAgLy8gICB2YXIgY2hpbGROb2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzO1xyXG4gIC8vICAgdmFyIGNoaWxkTGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgLy8gICBpZiAoY2hpbGRMZW4gPiAwKSB7XHJcbiAgLy8gICAgIHZhciBjaGlsZCA9IGNoaWxkTm9kZXNbMF07XHJcbiAgLy8gICAgIGlmIChjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAvLyAgICAgICByZXR1cm4gY2hpbGQuY2hpbGROb2Rlc1swXTtcclxuICAvLyAgICAgfSBlbHNlIHJldHVybiBjaGlsZDtcclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiBwYXJlbnQ7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBwcmVwYXJlUmVwbGFjZSgpIHtcclxuICAvLyAgIC8vIOiuvue9ruacgOWQjuWFieagh+WvueixoVxyXG4gIC8vICAgLy9jb25zb2xlLmxvZyhsYXN0UmFuZ2UpXHJcbiAgLy8gICB2YXIgc3RhcnRPZmZzZXQgPSB0aGlzLmxhc3RSYW5nZS5zdGFydE9mZnNldDtcclxuICAvLyAgIHZhciBzdGFydFRleHQgPSB0aGlzLmxhc3RSYW5nZS5zdGFydENvbnRhaW5lci5kYXRhO1xyXG4gIC8vICAgdmFyIHBhcmVudFRhZ05hbWUgPSB0aGlzLmxhc3RSYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnROb2RlLm5vZGVOYW1lO1xyXG4gIC8vICAgdmFyIGlzQmxhbmsgPSB0aGlzLmxhc3RSYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdtb2RfZmlsbGJsYW5rJykgPj0gMDtcclxuICAvLyAgIC8vY29uc29sZS5sb2coXCJzdGFydFRleHQ6XCIrc3RhcnRUZXh0KVxyXG4gIC8vICAgaWYgKHBhcmVudFRhZ05hbWUgPT0gJ1AnIHx8IChpc0JsYW5rICYmIHBhcmVudFRhZ05hbWUgPT0gJ1NQQU4nKSkge1xyXG4gIC8vICAgICBpZiAodGhpcy5jaGVja0FsbElzVW5kbGluZShzdGFydFRleHQpKSB7XHJcbiAgLy8gICAgICAgdGhpcy5jdXJzb3IgPSBzdGFydE9mZnNldDtcclxuICAvLyAgICAgfSBlbHNlIGlmIChzdGFydFRleHQuc3Vic3RyKC0xLCAxKSA9PSAnXycpIHtcclxuICAvLyAgICAgICAvL+acgOWQjuS4gOS4quaYr19cclxuICAvLyAgICAgICB2YXIgZmxhZ0NvdW50ID0gMDtcclxuICAvLyAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0T2Zmc2V0OyBpKyspIHtcclxuICAvLyAgICAgICAgIGlmIChzdGFydFRleHRbaV0gPT0gJ18nKSBmbGFnQ291bnQrKztcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgdGhpcy5jdXJzb3IgPSBmbGFnQ291bnQ7XHJcbiAgLy8gICAgIH0gZWxzZSBpZiAoc3RhcnRUZXh0LmluZGV4T2YoJ18nKSA+PSAwKSB7XHJcbiAgLy8gICAgICAgLy9jaGVjayBmaXJzdCBpcyBfXHJcbiAgLy8gICAgICAgaWYgKHN0YXJ0VGV4dFswXSA9PSAnXycpIHtcclxuICAvLyAgICAgICAgIHZhciBmbGFnQ291bnQgPSAwO1xyXG4gIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFydE9mZnNldDsgaSsrKSB7XHJcbiAgLy8gICAgICAgICAgIGlmIChzdGFydFRleHRbaV0gPT0gJ18nKSBmbGFnQ291bnQrKztcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIHRoaXMuY3Vyc29yID0gc3RhcnRPZmZzZXQgLSBmbGFnQ291bnQ7XHJcbiAgLy8gICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgIHZhciBmbGFnQ291bnQgPSAwO1xyXG4gIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFydE9mZnNldDsgaSsrKSB7XHJcbiAgLy8gICAgICAgICAgIGlmIChzdGFydFRleHRbaV0gIT0gJ18nKSBmbGFnQ291bnQrKztcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIHRoaXMuY3Vyc29yID0gc3RhcnRPZmZzZXQgLSBmbGFnQ291bnQ7XHJcbiAgLy8gICAgICAgfVxyXG5cclxuICAvLyAgICAgICAvL+WIpOaWreW3pui+ueaYr+mdnuWtl+avjeeahOaDheWGtVxyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIHRoaXMuY3Vyc29yID0gc3RhcnRPZmZzZXQ7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHRoaXMuY3Vyc29yID0gc3RhcnRPZmZzZXQ7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgLy8gY29uc29sZS5sb2coJ2xhc3QgY3Vyc29yOicgKyB0aGlzLmN1cnNvcik7XHJcbiAgLy8gICAvL+aAjuS5iOWIhuautVxyXG4gIC8vICAgdmFyIGNoaWxkTm9kZXMgPSB0aGlzLmVkaXRhYmxlRWxlLmNoaWxkTm9kZXM7XHJcbiAgLy8gICB2YXIgY2hpbGROb2RlTGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKGNoaWxkTm9kZXMpXHJcbiAgLy8gICB2YXIgZmluZEluZGV4O1xyXG4gIC8vICAgdmFyIHRleHROb2RlO1xyXG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVMZW47IGkrKykge1xyXG4gIC8vICAgICB0ZXh0Tm9kZSA9IHRoaXMuZ2V0VGV4dE5vZGUoY2hpbGROb2Rlc1tpXSk7XHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRleHROb2RlKVxyXG4gIC8vICAgICBpZiAodGV4dE5vZGUgPT0gdGhpcy5sYXN0UmFuZ2Uuc3RhcnRDb250YWluZXIpIHtcclxuICAvLyAgICAgICAvL2NvbnNvbGUubG9nKFwibWF0Y2hcIilcclxuICAvLyAgICAgICBmaW5kSW5kZXggPSBpO1xyXG4gIC8vICAgICAgIHZhciBwYXJlbnRUYWdOYW1lID0gdGV4dE5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZTtcclxuICAvLyAgICAgICB2YXIgaXNCbGFuayA9IHRleHROb2RlLnBhcmVudE5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ21vZF9maWxsYmxhbmsnKSA+PSAwO1xyXG4gIC8vICAgICAgIGlmIChcclxuICAvLyAgICAgICAgICF0aGlzLmNoZWNrQWxsSXNVbmRsaW5lKHRleHROb2RlLmRhdGEpICYmXHJcbiAgLy8gICAgICAgICAoKHBhcmVudFRhZ05hbWUgPT0gJ1NQQU4nICYmIGlzQmxhbmspIHx8IHBhcmVudFRhZ05hbWUgPT0gJ1AnKVxyXG4gIC8vICAgICAgICkge1xyXG4gIC8vICAgICAgICAgaWYgKHRleHROb2RlLmRhdGEuaW5kZXhPZignXycpID49IDApIHtcclxuICAvLyAgICAgICAgICAgZmluZEluZGV4ID0gaSArIDE7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gICB0aGlzLnNwbGl0SW5kZXggPSBmaW5kSW5kZXg7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnaW5kZXg6JyArIGZpbmRJbmRleCk7XHJcbiAgLy8gICAvL3RoaXMuZG9SZXBsYWNlKClcclxuICAvLyB9XHJcblxyXG4gIC8vIGRvUmVwbGFjZSgpIHtcclxuICAvLyAgIHZhciBpbm5lckhUTUwgPSB0aGlzLmVkaXRhYmxlRWxlLmlubmVySFRNTDtcclxuICAvLyAgIC8vY29uc29sZS5sb2coXCJpbm5lckhUTUw6XCIraW5uZXJIVE1MKVxyXG4gIC8vICAgdmFyIHJlcGxhY2VTdHIgPSB0aGlzLmdldFJlcGxhY2VTdHIoaW5uZXJIVE1MKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHJlcGxhY2VTdHIpO1xyXG4gIC8vICAgLy8gZWRpdGFibGVFbGUuaW5uZXJIVE1MID0gcmVwbGFjZVN0clxyXG4gIC8vICAgLy90aGlzLmluc3RhbmNlLnNldERhdGEocmVwbGFjZVN0cik7XHJcbiAgLy8gICB2YXIgY2hpbGROb2RlcyA9IHRoaXMuZWRpdGFibGVFbGUuY2hpbGROb2RlcztcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGNoaWxkTm9kZXMpO1xyXG4gIC8vICAgLy9jb25zb2xlLmxvZyhzZWxlY3Rpb24pXHJcbiAgLy8gICAvLyDliKTmlq3mmK/lkKbmnInmnIDlkI7lhYnmoIflr7nosaHlrZjlnKhcclxuICAvLyAgIGlmICh0aGlzLmN1cnNvcikge1xyXG4gIC8vICAgICAvL2NvbnNvbGUubG9nKFwiZXhpc3QgcmFuZ2VcIilcclxuICAvLyAgICAgLy9jb25zb2xlLmxvZyhjaGlsZE5vZGVzKVxyXG4gIC8vICAgICB2YXIgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKCk7XHJcbiAgLy8gICAgIHZhciB0ZXh0Tm9kZTtcclxuICAvLyAgICAgLy92YXIgcmFuZ2VOZXcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIC8vICAgICB2YXIgcmFuZ2UgPSBuZXcgQ0tFRElUT1IuZG9tLnJhbmdlKHRoaXMuaW5zdGFuY2UuZG9jdW1lbnQpO1xyXG4gIC8vICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5pbnN0YW5jZS5kb2N1bWVudC5nZXRCb2R5KCkpO1xyXG4gIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgICBpZiAoaSA9PSB0aGlzLnNwbGl0SW5kZXgpIHtcclxuICAvLyAgICAgICAgIHRleHROb2RlID0gdGhpcy5nZXRUZXh0Tm9kZShjaGlsZE5vZGVzW2ldKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgLy8gY29uc29sZS5sb2coJ3RleHROb2RlOicgKyB0ZXh0Tm9kZSk7XHJcbiAgLy8gICAgIGlmICh0ZXh0Tm9kZSkge1xyXG4gIC8vICAgICAgIC8vcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGUsIHRoaXMuY3Vyc29yKVxyXG4gIC8vICAgICAgIC8vIOS9v+WFieagh+W8gOWni+WSjOWFieagh+e7k+adn+mHjeWPoFxyXG4gIC8vICAgICAgIC8vcmFuZ2UuY29sbGFwc2UodHJ1ZSlcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLy8g5riF6Zmk6YCJ5a6a5a+56LGh55qE5omA5pyJ5YWJ5qCH5a+56LGhXHJcbiAgLy8gICAgIC8vc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXHJcbiAgLy8gICAgIC8vIOaPkuWFpeaWsOeahOWFieagh+WvueixoVxyXG4gIC8vICAgICAvL3NlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhyYW5nZSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGdldFJlcGxhY2VTdHIoc3RyKSB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcIm9yaWdpblwiKVxyXG4gIC8vICAgLy9jb25zb2xlLmxvZyhzdHIpXHJcbiAgLy8gICB2YXIgcmVnZXgxID0gLzxzcGFuIGRhdGEtaWQ9XCJmaWxsYmxhbmstW1xcd10rXCIgY2xhc3M9XCJtb2RfZmlsbGJsYW5rXCI+KFtcXHd8XFx1NGUwMC1cXHU5ZmE1YV0rKTxcXC9zcGFuPi9nO1xyXG4gIC8vICAgLy8g5a6a5LmJ5pyA5ZCO5YWJ5qCH5a+56LGhXHJcbiAgLy8gICB2YXIgbGFzdEVkaXRSYW5nZTtcclxuXHJcbiAgLy8gICBzdHIgPSBzdHIucmVwbGFjZShyZWdleDEsIGZ1bmN0aW9uKG1hdGNoLCAkMSkge1xyXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaClcclxuICAvLyAgICAgLy9jb25zb2xlLmxvZygkMSlcclxuICAvLyAgICAgLy8gdmFyIGZvcm1hdFN0ciA9ICQxLnJlcGxhY2UoL1tfXSsvZyxmdW5jdGlvbihtYXRjaCl7XHJcbiAgLy8gICAgIC8vIFx0Ly8vY29uc29sZS5sb2cobWF0Y2gpXHJcbiAgLy8gICAgIC8vIFx0cmV0dXJuICc8c3BhbiBkYXRhLWlkPVwiZmlsbGJsYW5rLXc3MUVcIiBjbGFzcz1cIm1vZF9maWxsYmxhbmtcIj4nK21hdGNoKyc8L3NwYW4+J1xyXG4gIC8vICAgICAvLyB9KVxyXG4gIC8vICAgICAvL2NvbnNvbGUubG9nKHN0cilcclxuICAvLyAgICAgcmV0dXJuICQxO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKFwic3RlcDE6XCIpXHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhzdHIpXHJcbiAgLy8gICBzdHIgPSBzdHIucmVwbGFjZSgvPChbXj5dKz4pKFxcdypbX10rXFx3KikoPFtePl0rPikvZywgZnVuY3Rpb24obWF0Y2gsICQxLCAkMikge1xyXG4gIC8vICAgICAvL2NvbnNvbGUubG9nKG1hdGNoLCQxLCQyKVxyXG4gIC8vICAgICB2YXIgZm9ybWF0U3RyID0gbWF0Y2gucmVwbGFjZSgvW19dKy9nLCBmdW5jdGlvbihtYXRjaCkge1xyXG4gIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoKVxyXG4gIC8vICAgICAgIHJldHVybiB0aGlzLnJlcGVhdFN0cignXFxuJywgbWF0Y2gubGVuZ3RoKTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIHJldHVybiBmb3JtYXRTdHI7XHJcbiAgLy8gICB9KTsgLy/ljrvmjonmiYDmnInnmoRodG1s5qCH6K6wXHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhzdHIpXHJcbiAgLy8gICBzdHIgPSBzdHIucmVwbGFjZSgvW19dKy9nLCBmdW5jdGlvbihtYXRjaCkge1xyXG4gIC8vICAgICAvL2NvbnNvbGUubG9nKG1hdGNoKVxyXG4gIC8vICAgICByZXR1cm4gJzxzcGFuIGRhdGEtaWQ9XCJmaWxsYmxhbmstdzcxRVwiIGNsYXNzPVwibW9kX2ZpbGxibGFua1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcbisvZywgZnVuY3Rpb24obWF0Y2gpIHtcclxuICAvLyAgICAgcmV0dXJuIHRoaXMucmVwZWF0U3RyKCdfJywgbWF0Y2gubGVuZ3RoKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgLy9jb25zb2xlLmxvZyhzdHIpXHJcbiAgLy8gICByZXR1cm4gc3RyO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW5zZXJ0VGV4dCh0ZXh0KSB7XHJcbiAgLy8gICB0aGlzLmluc3RhbmNlLmluc2VydFRleHQodGV4dCk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==