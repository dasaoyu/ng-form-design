/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
var VXToFormFieldService = /** @class */ (function () {
    function VXToFormFieldService() {
    }
    /**
     * @param {?} tableField
     * @return {?}
     */
    VXToFormFieldService.prototype.getVXFiledFunction = /**
     * @param {?} tableField
     * @return {?}
     */
    function (tableField) {
        /** @type {?} */
        var field = {};
        /** @type {?} */
        var fun;
        switch (tableField.datatype) {
            case "text":
                field = this.text(tableField);
                break;
            case "texti18n":
                field = this.textI18N(tableField);
                break;
            case "textarea":
                field = this.textArea(tableField);
                break;
            case "number":
                field = this.number(tableField);
                break;
            case "password":
                field = this.passWord(tableField);
                break;
            case "radio":
                field = this.radio(tableField);
                break;
            case "checkbox":
                field = this.checkbox(tableField);
                break;
            case "select":
                field = this.select(tableField);
                break;
            case "datetime":
                field = this.datetime(tableField);
                break;
            case "image":
                field = this.image(tableField);
                break;
            case "upload":
                field = this.upload(tableField);
                break;
            case "lookup":
                field = this.lookup(tableField);
                break;
            case "html":
                field = this.html(tableField);
                break;
        }
        /*if (tableField.refdatasourcetype === "directinput") {
          fun = tableField.refdatasourcetype + "_" + tableField.datatype;
          switch (fun) {
            case "directinput_nvarchar":
              field = this.directinput_nvarchar(tableField);
              break;
            case "directinput_multilinetext":
              field = this.directinput_multilinetext(tableField);
              break;
            case "directinput_int":
              field = this.directinput_int(tableField);
              break;
            case "directinput_float":
              field = this.directinput_float(tableField);
              break;
            case "directinput_datetime":
              field = this.directinput_datetime(tableField);
              break;
            case "directinput_date":
              field = this.directinput_date(tableField);
              break;
            case "directinput_month":
              field = this.directinput_month(tableField);
              break;
            case "directinput_year":
              field = this.directinput_year(tableField);
              break;
            case "directinput_time":
              field = this.directinput_time(tableField);
              break;
            case "directinput_attachment":
              field = this.directinput_attachment(tableField);
              break;
            case "directinput_image":
              field = this.directinput_image(tableField);
              break;
            default:
              break;
          }
        } else {
          fun = tableField.refdatasourcetype;
          switch (fun) {
            case "refparameters":
              field = this.refparameters(tableField);
              break;
            case "treeparameters":
              field = this.treeparameters(tableField);
              break;
            case "systemcontrol":
              field = this.systemcontrol(tableField);
              break;
            default:
              break;
          }
        }
        */
        return field;
    };
    //1、字符串
    //1、字符串
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.text = 
    //1、字符串
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "text",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {
                refdatasourcetype: "directinput",
                datatype: "nvarchar"
            },
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                maxLength: field.maxlength,
                minLength: field.minlength,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //2、多语言
    //2、多语言
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.textI18N = 
    //2、多语言
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "text",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                maxLength: field.maxlength,
                minLength: field.minlength,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //3、多行文本
    //3、多行文本
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.textArea = 
    //3、多行文本
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "textarea",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                maxLength: field.maxlength,
                minLength: field.minlength,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //4、数字
    //4、数字
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.number = 
    //4、数字
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "number",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                max: field.max,
                min: field.min,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern,
                precision: field.precision
            },
            status: 1
        };
        return config;
    };
    //5、密码
    //5、密码
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.passWord = 
    //5、密码
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "password",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                maxLength: field.maxlength,
                minLength: field.minlength,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //6、单选
    //6、单选
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.radio = 
    //6、单选
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "radio",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                type: field.showtype,
                label: field.fieldname,
                required: field.allownull,
                parameterid: field.parameterid,
                options: field.parameterdata,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //7、复选
    //7、复选
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.checkbox = 
    //7、复选
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "checkbox",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                type: field.showtype,
                label: field.fieldname,
                required: field.allownull,
                parameterid: field.parameterid,
                options: field.parameterdata,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //8、下拉
    //8、下拉
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.select = 
    //8、下拉
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "select",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                type: field.showtype,
                label: field.fieldname,
                required: field.allownull,
                selecttype: field.selecttype,
                parameterid: field.parameterid,
                options: field.parameterdata,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //9、日期
    //9、日期
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.datetime = 
    //9、日期
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "datetime",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                type: "datetime",
                label: field.fieldname,
                required: field.allownull,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern,
                format: field.format
            },
            status: 1
        };
        return config;
    };
    //10、图片
    //10、图片
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.image = 
    //10、图片
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "image",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //11、附件
    //11、附件
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.upload = 
    //11、附件
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "upload",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            templateOptions: {
                label: field.fieldname,
                required: field.allownull,
                attachment: {
                    size: field.attachmentsize,
                    type: field.attachmenttype,
                    limit: field.attachmentlimit
                },
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //12、弹框
    //12、弹框
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.lookup = 
    //12、弹框
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "lookup",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultValue: field.defaultvalue,
            defaultText: field.defaulttext,
            templateOptions: {
                type: field.controlid,
                label: field.fieldname,
                required: field.allownull,
                controlid: field.controlid,
                placeholder: field.placeholder,
                isbutintin: field.isbutintin,
                tips: field.tips,
                pattern: field.pattern
            },
            status: 1
        };
        return config;
    };
    //13、html
    //13、html
    /**
     * @param {?} field
     * @return {?}
     */
    VXToFormFieldService.prototype.html = 
    //13、html
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var config = {
            type: "html",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultText: field.defaulttext,
            status: 1
        };
        return config;
    };
    VXToFormFieldService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXToFormFieldService.ctorParameters = function () { return []; };
    return VXToFormFieldService;
}());
export { VXToFormFieldService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUZpZWxkU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy9mb3JtRmllbGRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQUVFO0lBQWdCLENBQUM7Ozs7O0lBRWpCLGlEQUFrQjs7OztJQUFsQixVQUFtQixVQUE4Qjs7WUFDM0MsS0FBSyxHQUFzQixFQUFFOztZQUM3QixHQUFRO1FBQ1osUUFBUSxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLEtBQUssTUFBTTtnQkFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxLQUFLLEdBQUcsSUFBSSxDQUFD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TUFBTTtZQUNaLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDcEIsTUFBTSxFQUFFLEVBQ1A7WUFDRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQWxhRixVQUFVOzs7O0lBa3hCWCwyQkFBQztDQUFBLEFBbHhCRCxJQWt4QkM7U0FqeEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVGaWVsZENvbmZpZywgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhUb0Zvcm1GaWVsZFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdldFZYRmlsZWRGdW5jdGlvbih0YWJsZUZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAgIGxldCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSB7fTtcclxuICAgIGxldCBmdW46IGFueTtcclxuICAgIHN3aXRjaCAodGFibGVGaWVsZC5kYXRhdHlwZSkge1xyXG4gICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy50ZXh0KHRhYmxlRmllbGQpOyBcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInRleHRpMThuXCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLnRleHRJMThOKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidGV4dGFyZWFcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMudGV4dEFyZWEodGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMubnVtYmVyKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMucGFzc1dvcmQodGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJyYWRpb1wiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy5yYWRpbyh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImNoZWNrYm94XCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLmNoZWNrYm94KHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLnNlbGVjdCh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLmRhdGV0aW1lKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMuaW1hZ2UodGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ1cGxvYWRcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMudXBsb2FkKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibG9va3VwXCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLmxvb2t1cCh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMuaHRtbCh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgICAvKmlmICh0YWJsZUZpZWxkLnJlZmRhdGFzb3VyY2V0eXBlID09PSBcImRpcmVjdGlucHV0XCIpIHtcclxuICAgICAgZnVuID0gdGFibGVGaWVsZC5yZWZkYXRhc291cmNldHlwZSArIFwiX1wiICsgdGFibGVGaWVsZC5kYXRhdHlwZTtcclxuICAgICAgc3dpdGNoIChmdW4pIHtcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfbnZhcmNoYXJcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9udmFyY2hhcih0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9tdWx0aWxpbmV0ZXh0XCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZGlyZWN0aW5wdXRfbXVsdGlsaW5ldGV4dCh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9pbnRcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9pbnQodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfZmxvYXRcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9mbG9hdCh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9kYXRldGltZVwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X2RhdGV0aW1lKHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRpcmVjdGlucHV0X2RhdGVcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9kYXRlKHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRpcmVjdGlucHV0X21vbnRoXCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZGlyZWN0aW5wdXRfbW9udGgodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfeWVhclwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X3llYXIodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfdGltZVwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X3RpbWUodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfYXR0YWNobWVudFwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X2F0dGFjaG1lbnQodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfaW1hZ2VcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9pbWFnZSh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnVuID0gdGFibGVGaWVsZC5yZWZkYXRhc291cmNldHlwZTtcclxuICAgICAgc3dpdGNoIChmdW4pIHtcclxuICAgICAgICBjYXNlIFwicmVmcGFyYW1ldGVyc1wiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLnJlZnBhcmFtZXRlcnModGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidHJlZXBhcmFtZXRlcnNcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy50cmVlcGFyYW1ldGVycyh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzeXN0ZW1jb250cm9sXCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuc3lzdGVtY29udHJvbCh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKi9cclxuICAgIHJldHVybiBmaWVsZDtcclxuICB9XHJcblxyXG4gIC8vMeOAgeWtl+espuS4slxyXG4gIHRleHQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcImRpcmVjdGlucHV0XCIsXHJcbiAgICAgICAgZGF0YXR5cGU6IFwibnZhcmNoYXJcIlxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIG1heExlbmd0aDogZmllbGQubWF4bGVuZ3RoLFxyXG4gICAgICAgIG1pbkxlbmd0aDogZmllbGQubWlubGVuZ3RoLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8y44CB5aSa6K+t6KiAXHJcbiAgdGV4dEkxOE4oZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIG1heExlbmd0aDogZmllbGQubWF4bGVuZ3RoLFxyXG4gICAgICAgIG1pbkxlbmd0aDogZmllbGQubWlubGVuZ3RoLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8z44CB5aSa6KGM5paH5pysXHJcbiAgdGV4dEFyZWEoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IGZpZWxkLm1heGxlbmd0aCxcclxuICAgICAgICBtaW5MZW5ndGg6IGZpZWxkLm1pbmxlbmd0aCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vNOOAgeaVsOWtl1xyXG4gIG51bWJlcihmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBtYXg6IGZpZWxkLm1heCxcclxuICAgICAgICBtaW46IGZpZWxkLm1pbixcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm4sXHJcbiAgICAgICAgcHJlY2lzaW9uOiBmaWVsZC5wcmVjaXNpb25cclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vNeOAgeWvhueggVxyXG4gIHBhc3NXb3JkKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBmaWVsZC5tYXhsZW5ndGgsXHJcbiAgICAgICAgbWluTGVuZ3RoOiBmaWVsZC5taW5sZW5ndGgsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLzbjgIHljZXpgIlcclxuICByYWRpbyhmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJyYWRpb1wiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgdHlwZTogZmllbGQuc2hvd3R5cGUsXHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIHBhcmFtZXRlcmlkOiBmaWVsZC5wYXJhbWV0ZXJpZCxcclxuICAgICAgICBvcHRpb25zOiBmaWVsZC5wYXJhbWV0ZXJkYXRhLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8344CB5aSN6YCJXHJcbiAgY2hlY2tib3goZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIHR5cGU6IGZpZWxkLnNob3d0eXBlLFxyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBwYXJhbWV0ZXJpZDogZmllbGQucGFyYW1ldGVyaWQsXHJcbiAgICAgICAgb3B0aW9uczogZmllbGQucGFyYW1ldGVyZGF0YSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vOOOAgeS4i+aLiVxyXG4gIHNlbGVjdChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIHR5cGU6IGZpZWxkLnNob3d0eXBlLFxyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBzZWxlY3R0eXBlOiBmaWVsZC5zZWxlY3R0eXBlLFxyXG4gICAgICAgIHBhcmFtZXRlcmlkOiBmaWVsZC5wYXJhbWV0ZXJpZCxcclxuICAgICAgICBvcHRpb25zOiBmaWVsZC5wYXJhbWV0ZXJkYXRhLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8544CB5pel5pyfXHJcbiAgZGF0ZXRpbWUoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuLFxyXG4gICAgICAgIGZvcm1hdDogZmllbGQuZm9ybWF0XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLzEw44CB5Zu+54mHXHJcbiAgaW1hZ2UoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vMTHjgIHpmYTku7ZcclxuICB1cGxvYWQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwidXBsb2FkXCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgYXR0YWNobWVudDoge1xyXG4gICAgICAgICAgc2l6ZTogZmllbGQuYXR0YWNobWVudHNpemUsXHJcbiAgICAgICAgICB0eXBlOiBmaWVsZC5hdHRhY2htZW50dHlwZSxcclxuICAgICAgICAgIGxpbWl0OiBmaWVsZC5hdHRhY2htZW50bGltaXRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vMTLjgIHlvLnmoYZcclxuICBsb29rdXAoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwibG9va3VwXCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gICAgICBkZWZhdWx0VGV4dDogZmllbGQuZGVmYXVsdHRleHQsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIHR5cGU6IGZpZWxkLmNvbnRyb2xpZCxcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgY29udHJvbGlkOiBmaWVsZC5jb250cm9saWQsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLzEz44CBaHRtbFxyXG4gIGh0bWwoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VGV4dDogZmllbGQuZGVmYXVsdHRleHQsXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0x44CB5a2X56ymXHJcbiAgLy8gZGlyZWN0aW5wdXRfbnZhcmNoYXIoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcIm52YXJjaGFyXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBtYXhMZW5ndGg6IGZpZWxkLm1heGxlbmd0aCxcclxuICAvLyAgICAgICBtaW5MZW5ndGg6IGZpZWxkLm1pbmxlbmd0aCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTLjgIHlpJrooYzmlofmnKxcclxuICAvLyBkaXJlY3RpbnB1dF9tdWx0aWxpbmV0ZXh0KGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcInRleHRhcmVhXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJtdWx0aWxpbmV0ZXh0XCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBtYXhMZW5ndGg6IGZpZWxkLm1heGxlbmd0aCxcclxuICAvLyAgICAgICBtaW5MZW5ndGg6IGZpZWxkLm1pbmxlbmd0aCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0z44CB5pW05pWwXHJcbiAgLy8gZGlyZWN0aW5wdXRfaW50KGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImlucHV0bnVtYmVyXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJpbnRcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIG1heDogZmllbGQubWF4LFxyXG4gIC8vICAgICAgIG1pbjogZmllbGQubWluLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/nm7TmjqXovpPlhaUtNOOAgea1rueCuVxyXG4gIC8vIGRpcmVjdGlucHV0X2Zsb2F0KGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImlucHV0bnVtYmVyXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJmbG9hdFwiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgbWF4OiBmaWVsZC5tYXgsXHJcbiAgLy8gICAgICAgbWluOiBmaWVsZC5taW4sXHJcbiAgLy8gICAgICAgcHJlY2lzaW9uOiBmaWVsZC5wcmVjaXNpb24sXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/nm7TmjqXovpPlhaUtNeOAgeaXpeacn++8iOW5tOaciOaXpeaXtuWIhu+8iVxyXG4gIC8vIGRpcmVjdGlucHV0X2RhdGV0aW1lKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImRhdGVwaWNrZXJcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcImRhdGV0aW1lXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0244CB5pel5pyf77yI5bm05pyI5pel77yJXHJcbiAgLy8gZGlyZWN0aW5wdXRfZGF0ZShmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJkYXRlcGlja2VyXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJkYXRlXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTfjgIHml6XmnJ/vvIjlubTmnIjvvIlcclxuICAvLyBkaXJlY3RpbnB1dF9tb250aChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJkYXRlcGlja2VyXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJtb250aFwiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICB0eXBlOiBcIm1vbnRoXCIsXHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/nm7TmjqXovpPlhaUtOOOAgeaXpeacn++8iOW5tO+8iVxyXG4gIC8vIGRpcmVjdGlucHV0X3llYXIoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwiZGF0ZXBpY2tlclwiLFxyXG4gIC8vICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAvLyAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgLy8gICAgIG9yaWdpbjoge1xyXG4gIC8vICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcImRpcmVjdGlucHV0XCIsXHJcbiAgLy8gICAgICAgZGF0YXR5cGU6IFwieWVhclwiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICB0eXBlOiBcInllYXJcIixcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0544CB5pel5pyf77yI5pe25YiG56eS77yJXHJcbiAgLy8gZGlyZWN0aW5wdXRfdGltZShmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJkYXRlcGlja2VyXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJ0aW1lXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIHR5cGU6IFwidGltZVwiLFxyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0xMOOAgemZhOS7tlxyXG4gIC8vIGRpcmVjdGlucHV0X2F0dGFjaG1lbnQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwidXBsb2FkXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJhdHRhY2htZW50XCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBhdHRhY2htZW50OiB7XHJcbiAgLy8gICAgICAgICBzaXplOiBmaWVsZC5hdHRhY2htZW50c2l6ZSxcclxuICAvLyAgICAgICAgIHR5cGU6IGZpZWxkLmF0dGFjaG1lbnR0eXBlLFxyXG4gIC8vICAgICAgICAgbGltaXQ6IGZpZWxkLmF0dGFjaG1lbnRsaW1pdFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/nm7TmjqXovpPlhaUtMTHjgIHlm77niYdcclxuICAvLyBkaXJlY3RpbnB1dF9pbWFnZShmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gIC8vICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAvLyAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgLy8gICAgIG9yaWdpbjoge1xyXG4gIC8vICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcImRpcmVjdGlucHV0XCIsXHJcbiAgLy8gICAgICAgZGF0YXR5cGU6IFwiaW1hZ2VcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/luLjnlKjlj4LmlbBcclxuICAvLyByZWZwYXJhbWV0ZXJzKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gIC8vICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAvLyAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgLy8gICAgIG9yaWdpbjoge1xyXG4gIC8vICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcInJlZnBhcmFtZXRlcnNcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgdHlwZTogZmllbGQuc2hvd3R5cGUsXHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIHNlbGVjdHR5cGU6IGZpZWxkLnNlbGVjdHR5cGUsXHJcbiAgLy8gICAgICAgcGFyYW1ldGVyaWQ6IGZpZWxkLnBhcmFtZXRlcmlkLFxyXG4gIC8vICAgICAgIG9wdGlvbnM6IGZpZWxkLnBhcmFtZXRlcmRhdGEsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+agkeW9ouWPguaVsFxyXG4gIC8vIHRyZWVwYXJhbWV0ZXJzKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImxvb2t1cFwiLFxyXG4gIC8vICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAvLyAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgLy8gICAgIG9yaWdpbjoge1xyXG4gIC8vICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcInRyZWVwYXJhbWV0ZXJzXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIGRlZmF1bHRUZXh0OiBmaWVsZC5kZWZhdWx0dGV4dCxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgdHlwZTogXCJ0cmVlXCIsXHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIHNlbGVjdHR5cGU6IGZpZWxkLnNlbGVjdHR5cGUsXHJcbiAgLy8gICAgICAgdHJlZWlkOiBmaWVsZC50cmVlaWQsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ezu+e7n+aOp+S7tlxyXG4gIC8vIHN5c3RlbWNvbnRyb2woZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwibG9va3VwXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwic3lzdGVtY29udHJvbFwiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICBkZWZhdWx0VGV4dDogZmllbGQuZGVmYXVsdHRleHQsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIHR5cGU6IGZpZWxkLmNvbnRyb2xpZCxcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgY29udHJvbGlkOiBmaWVsZC5jb250cm9saWQsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==