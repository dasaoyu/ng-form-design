/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
export class VXFormDesignField {
    /**
     * @param {?} message
     */
    constructor(message) {
        this.message = message;
        this.formField = {
            key: "",
            type: "text",
            templateOptions: {
                label: "",
                description: "",
                parameterid: "",
                treeid: "",
                controlid: "",
                maxLength: 50,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: ""
            },
            origin: {
                refdatasourcetype: "",
                datatype: ""
            }
        };
        this.lang = [
            { languagetype: "chinese", resvalue: "chinesechinese" },
            { languagetype: "english", resvalue: "englishenglish" },
            { languagetype: "english2", resvalue: "english2" }
        ];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        this.formField = Object.assign({}, this.formField, value);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    checkSave() {
        /** @type {?} */
        let type = this.formField.type;
        if (type == "text" || type == "textarea") {
            if (this.formField.templateOptions.minLength >= this.formField.templateOptions.maxLength) {
                this.message.error("最大长度必须大于最小长度");
                return false;
            }
        }
        if (type == "number") {
            if (this.formField.templateOptions.min >= this.formField.templateOptions.max) {
                this.message.error("最大值必须大于最小值");
                return false;
            }
        }
        return true;
    }
}
VXFormDesignField.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-field",
                template: "<div class=\"builder-content\">\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5B57\u6BB5\u540D\u79F0\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [value]=\"formField.key\" readonly disabled />\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u663E\u793A\u540D\u79F0\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [(ngModel)]=\"formField.templateOptions.label\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5B57\u6BB5\u7C7B\u578B\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [value]=\"formField.type\" readonly disabled />\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u9ED8\u8BA4\u503C\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [(ngModel)]=\"formField.defaultValue\" />\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"formField.type==='text'|| formField.type==='textarea'\">\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5927\u957F\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['maxLength']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5C0F\u957F\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['minLength']\"></nz-input-number>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"formField.type==='number'\">\r\n\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5927\u503C\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['max']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5C0F\u503C\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['min']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngIf=\"formField.templateOptions['precision']!=0\">\r\n            <div class=\"label\">\r\n                \u7CBE\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['precision']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u662F\u5426\u5FC5\u586B\r\n        </div>\r\n        <div class=\"control\">\r\n            <nz-switch [(ngModel)]=\"formField.templateOptions['required']\" nzCheckedChildren=\"\u662F\" nzUnCheckedChildren=\"\u5426\">\r\n            </nz-switch>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5360\u4F4D\u7B26\r\n        </div>\r\n        <div class=\"control\">\r\n            \r\n            <input nz-input [(ngModel)]=\"formField.templateOptions['tipsPlaceholder']\"  readonly disabled/>\r\n            <!-- <vx-language [(ngModel)]=\"formField.templateOptions['tipsPlaceholder']\"></vx-language> -->\r\n        </div>\r\n    </div>\r\n    <!-- <ng-container [ngSwitch]=\"formField.origin.refdatasourcetype\">\r\n        <div class=\"content\" *ngSwitchCase=\"'directinput'\">\r\n            <div class=\"label\">\r\n                \u6570\u636E\u7C7B\u578B\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.origin.datatype\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'refparameters'\">\r\n            <div class=\"label\">\r\n                \u5E38\u7528\u53C2\u6570\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.parameterid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'treeparameters'\">\r\n            <div class=\"label\">\r\n                \u6811\u578B\u53C2\u6570\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.treeid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'systemcontrol'\">\r\n            <div class=\"label\">\r\n                \u7CFB\u7EDF\u63A7\u4EF6\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.controlid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n    </ng-container> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"content textarea\">\r\n        <div class=\"label\">\r\n            \u63D0\u793A\u4FE1\u606F\r\n        </div>\r\n        <div class=\"control\">\r\n            <textarea nz-input rows=\"3\" [(ngModel)]=\"formField.templateOptions['tips']\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content textarea\">\r\n        <div class=\"label\">\r\n            \u8FD9\u5219\u8868\u8FBE\u5F0F\r\n        </div>\r\n        <div class=\"control\">\r\n            <textarea nz-input rows=\"3\" [(ngModel)]=\"formField.templateOptions['pattern']\"> </textarea>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [":host ::ng-deep .builder-content{width:100%;padding:18px 0 0 12px;display:inline-block}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px;display:flex}:host ::ng-deep .builder-content .content .label{width:120px;text-align:right;padding:5px 10px 0 0}:host ::ng-deep .builder-content .content .control{flex:1;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
            }] }
];
/** @nocollapse */
VXFormDesignField.ctorParameters = () => [
    { type: NzMessageService }
];
VXFormDesignField.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXFormDesignField.prototype.formField;
    /** @type {?} */
    VXFormDesignField.prototype.lang;
    /** @type {?} */
    VXFormDesignField.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi9maWVsZC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFrQzVCLFlBQ1MsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFsQ2xDLGNBQVMsR0FBUTtZQUNmLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFDLE1BQU07WUFDWCxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7Z0JBQ1osR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLENBQUM7Z0JBQ1osV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNELE1BQU0sRUFBRTtnQkFDTixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixRQUFRLEVBQUUsRUFBRTthQUNiO1NBQ0YsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7WUFDdkQsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtZQUN2RCxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtTQUNuRCxDQUFDO0lBTW1DLENBQUM7Ozs7O0lBTHRDLElBQWEsS0FBSyxDQUFDLEtBQXdCO1FBQ3pDLElBQUksQ0FBQyxTQUFTLHFCQUFRLElBQUksQ0FBQyxTQUFTLEVBQUssS0FBSyxDQUFFLENBQUM7SUFDbkQsQ0FBQzs7OztJQUtELFFBQVEsS0FBSSxDQUFDOzs7OztJQUViLFdBQVcsQ0FBQyxPQUFzQixJQUFHLENBQUM7Ozs7SUFFdEMsU0FBUzs7WUFDSCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO1FBQzlCLElBQUcsSUFBSSxJQUFFLE1BQU0sSUFBSSxJQUFJLElBQUUsVUFBVSxFQUFDO1lBQ2xDLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBQztnQkFDcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUcsSUFBSSxJQUFFLFFBQVEsRUFBQztZQUNoQixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUM7Z0JBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNmtNQUFxQzs7YUFFdEM7Ozs7WUFOUSxnQkFBZ0I7OztvQkFxQ3RCLEtBQUs7Ozs7SUE3Qk4sc0NBdUJFOztJQUNGLGlDQUlFOztJQU1BLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFdyYXBwZXIsIFZYRm9ybUZpZWxkQ29uZmlnLCBjbG9uZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwibmctem9ycm8tYW50ZC9tZXNzYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZGVzaWduLWZpZWxkXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWVsZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9maWVsZC5jb21wb25lbnQubGVzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRGVzaWduRmllbGQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgZm9ybUZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwidGV4dFwiLFxyXG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgcGFyYW1ldGVyaWQ6IFwiXCIsXHJcbiAgICAgIHRyZWVpZDogXCJcIixcclxuICAgICAgY29udHJvbGlkOiBcIlwiLFxyXG4gICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICBtaW5MZW5ndGg6IDAsXHJcbiAgICAgIG1heDogMCxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBwcmVjaXNpb246IDAsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHRpcHM6IFwiXCIsXHJcbiAgICAgIHBhdHRlcm46IFwiXCJcclxuICAgIH0sXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiXCIsXHJcbiAgICAgIGRhdGF0eXBlOiBcIlwiXHJcbiAgICB9XHJcbiAgfTtcclxuICBsYW5nOiBhbnlbXSA9IFtcclxuICAgIHsgbGFuZ3VhZ2V0eXBlOiBcImNoaW5lc2VcIiwgcmVzdmFsdWU6IFwiY2hpbmVzZWNoaW5lc2VcIiB9LFxyXG4gICAgeyBsYW5ndWFnZXR5cGU6IFwiZW5nbGlzaFwiLCByZXN2YWx1ZTogXCJlbmdsaXNoZW5nbGlzaFwiIH0sXHJcbiAgICB7IGxhbmd1YWdldHlwZTogXCJlbmdsaXNoMlwiLCByZXN2YWx1ZTogXCJlbmdsaXNoMlwiIH1cclxuICBdO1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgXHJcbiAgICB0aGlzLmZvcm1GaWVsZCA9IHsgLi4udGhpcy5mb3JtRmllbGQsIC4uLnZhbHVlIH07IFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbWVzc2FnZTogTnpNZXNzYWdlU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG5cclxuICBjaGVja1NhdmUoKXtcclxuICAgIGxldCB0eXBlID0gdGhpcy5mb3JtRmllbGQudHlwZTtcclxuICAgIGlmKHR5cGU9PVwidGV4dFwiIHx8IHR5cGU9PVwidGV4dGFyZWFcIil7XHJcbiAgICAgIGlmKHRoaXMuZm9ybUZpZWxkLnRlbXBsYXRlT3B0aW9ucy5taW5MZW5ndGg+PXRoaXMuZm9ybUZpZWxkLnRlbXBsYXRlT3B0aW9ucy5tYXhMZW5ndGgpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5lcnJvcihcIuacgOWkp+mVv+W6puW/hemhu+Wkp+S6juacgOWwj+mVv+W6plwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHR5cGU9PVwibnVtYmVyXCIpe1xyXG4gICAgICBpZih0aGlzLmZvcm1GaWVsZC50ZW1wbGF0ZU9wdGlvbnMubWluPj10aGlzLmZvcm1GaWVsZC50ZW1wbGF0ZU9wdGlvbnMubWF4KXtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UuZXJyb3IoXCLmnIDlpKflgLzlv4XpobvlpKfkuo7mnIDlsI/lgLxcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19