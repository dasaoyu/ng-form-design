/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
export class VXToFormFieldService {
    constructor() { }
    /**
     * @param {?} tableField
     * @return {?}
     */
    getVXFiledFunction(tableField) {
        /** @type {?} */
        let field = {};
        /** @type {?} */
        let fun;
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
    }
    //1、字符串
    /**
     * @param {?} field
     * @return {?}
     */
    text(field) {
        /** @type {?} */
        let config = {
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
    }
    //2、多语言
    /**
     * @param {?} field
     * @return {?}
     */
    textI18N(field) {
        /** @type {?} */
        let config = {
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
    }
    //3、多行文本
    /**
     * @param {?} field
     * @return {?}
     */
    textArea(field) {
        /** @type {?} */
        let config = {
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
    }
    //4、数字
    /**
     * @param {?} field
     * @return {?}
     */
    number(field) {
        /** @type {?} */
        let config = {
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
    }
    //5、密码
    /**
     * @param {?} field
     * @return {?}
     */
    passWord(field) {
        /** @type {?} */
        let config = {
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
    }
    //6、单选
    /**
     * @param {?} field
     * @return {?}
     */
    radio(field) {
        /** @type {?} */
        let config = {
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
    }
    //7、复选
    /**
     * @param {?} field
     * @return {?}
     */
    checkbox(field) {
        /** @type {?} */
        let config = {
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
    }
    //8、下拉
    /**
     * @param {?} field
     * @return {?}
     */
    select(field) {
        /** @type {?} */
        let config = {
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
    }
    //9、日期
    /**
     * @param {?} field
     * @return {?}
     */
    datetime(field) {
        /** @type {?} */
        let config = {
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
    }
    //10、图片
    /**
     * @param {?} field
     * @return {?}
     */
    image(field) {
        /** @type {?} */
        let config = {
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
    }
    //11、附件
    /**
     * @param {?} field
     * @return {?}
     */
    upload(field) {
        /** @type {?} */
        let config = {
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
    }
    //12、弹框
    /**
     * @param {?} field
     * @return {?}
     */
    lookup(field) {
        /** @type {?} */
        let config = {
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
    }
    //13、html
    /**
     * @param {?} field
     * @return {?}
     */
    html(field) {
        /** @type {?} */
        let config = {
            type: "html",
            tablecode: field.tablecode,
            key: field.fieldcode,
            origin: {},
            defaultText: field.defaulttext,
            status: 1
        };
        return config;
    }
}
VXToFormFieldService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXToFormFieldService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUZpZWxkU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy9mb3JtRmllbGRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUl6RCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLGdCQUFnQixDQUFDOzs7OztJQUVqQixrQkFBa0IsQ0FBQyxVQUE4Qjs7WUFDM0MsS0FBSyxHQUFzQixFQUFFOztZQUM3QixHQUFRO1FBQ1osUUFBUSxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLEtBQUssTUFBTTtnQkFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxLQUFLLEdBQUcs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QUNWO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLEtBQXlCOztZQUMxQixNQUFNLEdBQXNCO1lBQzlCLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUztZQUNwQixNQUFNLEVBQUUsRUFDUDtZQUNELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFO2dCQUNmLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDckIsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVM7Z0JBQ3pCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3ZCO1lBQ0QsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUdELElBQUksQ0FBQyxLQUF5Qjs7WUFDeEIsTUFBTSxHQUFzQjtZQUM5QixJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDcEIsTUFBTSxFQUFFLEVBQ1A7WUFDRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQWxhRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhUYWJsZUZpZWxkQ29uZmlnLCBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWFRvRm9ybUZpZWxkU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2V0VlhGaWxlZEZ1bmN0aW9uKHRhYmxlRmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gICAgbGV0IGZ1bjogYW55O1xyXG4gICAgc3dpdGNoICh0YWJsZUZpZWxkLmRhdGF0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLnRleHQodGFibGVGaWVsZCk7IFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidGV4dGkxOG5cIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMudGV4dEkxOE4odGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ0ZXh0YXJlYVwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy50ZXh0QXJlYSh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy5udW1iZXIodGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy5wYXNzV29yZCh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInJhZGlvXCI6XHJcbiAgICAgICAgZmllbGQgPSB0aGlzLnJhZGlvKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMuY2hlY2tib3godGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMuc2VsZWN0KHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMuZGF0ZXRpbWUodGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy5pbWFnZSh0YWJsZUZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInVwbG9hZFwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy51cGxvYWQodGFibGVGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsb29rdXBcIjpcclxuICAgICAgICBmaWVsZCA9IHRoaXMubG9va3VwKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgIGZpZWxkID0gdGhpcy5odG1sKHRhYmxlRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxuICAgIC8qaWYgKHRhYmxlRmllbGQucmVmZGF0YXNvdXJjZXR5cGUgPT09IFwiZGlyZWN0aW5wdXRcIikge1xyXG4gICAgICBmdW4gPSB0YWJsZUZpZWxkLnJlZmRhdGFzb3VyY2V0eXBlICsgXCJfXCIgKyB0YWJsZUZpZWxkLmRhdGF0eXBlO1xyXG4gICAgICBzd2l0Y2ggKGZ1bikge1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9udmFyY2hhclwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X252YXJjaGFyKHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRpcmVjdGlucHV0X211bHRpbGluZXRleHRcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9tdWx0aWxpbmV0ZXh0KHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRpcmVjdGlucHV0X2ludFwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X2ludCh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9mbG9hdFwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X2Zsb2F0KHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRpcmVjdGlucHV0X2RhdGV0aW1lXCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZGlyZWN0aW5wdXRfZGF0ZXRpbWUodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfZGF0ZVwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X2RhdGUodGFibGVGaWVsZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlyZWN0aW5wdXRfbW9udGhcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5kaXJlY3RpbnB1dF9tb250aCh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF95ZWFyXCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZGlyZWN0aW5wdXRfeWVhcih0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF90aW1lXCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZGlyZWN0aW5wdXRfdGltZSh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9hdHRhY2htZW50XCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMuZGlyZWN0aW5wdXRfYXR0YWNobWVudCh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpbnB1dF9pbWFnZVwiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLmRpcmVjdGlucHV0X2ltYWdlKHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmdW4gPSB0YWJsZUZpZWxkLnJlZmRhdGFzb3VyY2V0eXBlO1xyXG4gICAgICBzd2l0Y2ggKGZ1bikge1xyXG4gICAgICAgIGNhc2UgXCJyZWZwYXJhbWV0ZXJzXCI6XHJcbiAgICAgICAgICBmaWVsZCA9IHRoaXMucmVmcGFyYW1ldGVycyh0YWJsZUZpZWxkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0cmVlcGFyYW1ldGVyc1wiOlxyXG4gICAgICAgICAgZmllbGQgPSB0aGlzLnRyZWVwYXJhbWV0ZXJzKHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN5c3RlbWNvbnRyb2xcIjpcclxuICAgICAgICAgIGZpZWxkID0gdGhpcy5zeXN0ZW1jb250cm9sKHRhYmxlRmllbGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgLy8x44CB5a2X56ym5LiyXHJcbiAgdGV4dChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAgICAgICBkYXRhdHlwZTogXCJudmFyY2hhclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBmaWVsZC5tYXhsZW5ndGgsXHJcbiAgICAgICAgbWluTGVuZ3RoOiBmaWVsZC5taW5sZW5ndGgsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLzLjgIHlpJror63oqIBcclxuICB0ZXh0STE4TihmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBmaWVsZC5tYXhsZW5ndGgsXHJcbiAgICAgICAgbWluTGVuZ3RoOiBmaWVsZC5taW5sZW5ndGgsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLzPjgIHlpJrooYzmlofmnKxcclxuICB0ZXh0QXJlYShmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJ0ZXh0YXJlYVwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIG1heExlbmd0aDogZmllbGQubWF4bGVuZ3RoLFxyXG4gICAgICAgIG1pbkxlbmd0aDogZmllbGQubWlubGVuZ3RoLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8044CB5pWw5a2XXHJcbiAgbnVtYmVyKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIG1heDogZmllbGQubWF4LFxyXG4gICAgICAgIG1pbjogZmllbGQubWluLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVybixcclxuICAgICAgICBwcmVjaXNpb246IGZpZWxkLnByZWNpc2lvblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8144CB5a+G56CBXHJcbiAgcGFzc1dvcmQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IGZpZWxkLm1heGxlbmd0aCxcclxuICAgICAgICBtaW5MZW5ndGg6IGZpZWxkLm1pbmxlbmd0aCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vNuOAgeWNlemAiVxyXG4gIHJhZGlvKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiBcInJhZGlvXCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICB0eXBlOiBmaWVsZC5zaG93dHlwZSxcclxuICAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgICAgICAgcGFyYW1ldGVyaWQ6IGZpZWxkLnBhcmFtZXRlcmlkLFxyXG4gICAgICAgIG9wdGlvbnM6IGZpZWxkLnBhcmFtZXRlcmRhdGEsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLzfjgIHlpI3pgIlcclxuICBjaGVja2JveChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgdHlwZTogZmllbGQuc2hvd3R5cGUsXHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIHBhcmFtZXRlcmlkOiBmaWVsZC5wYXJhbWV0ZXJpZCxcclxuICAgICAgICBvcHRpb25zOiBmaWVsZC5wYXJhbWV0ZXJkYXRhLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8444CB5LiL5ouJXHJcbiAgc2VsZWN0KGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgdHlwZTogZmllbGQuc2hvd3R5cGUsXHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIHNlbGVjdHR5cGU6IGZpZWxkLnNlbGVjdHR5cGUsXHJcbiAgICAgICAgcGFyYW1ldGVyaWQ6IGZpZWxkLnBhcmFtZXRlcmlkLFxyXG4gICAgICAgIG9wdGlvbnM6IGZpZWxkLnBhcmFtZXRlcmRhdGEsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLznjgIHml6XmnJ9cclxuICBkYXRldGltZShmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm4sXHJcbiAgICAgICAgZm9ybWF0OiBmaWVsZC5mb3JtYXRcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vMTDjgIHlm77niYdcclxuICBpbWFnZShmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8xMeOAgemZhOS7tlxyXG4gIHVwbG9hZChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJ1cGxvYWRcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBhdHRhY2htZW50OiB7XHJcbiAgICAgICAgICBzaXplOiBmaWVsZC5hdHRhY2htZW50c2l6ZSxcclxuICAgICAgICAgIHR5cGU6IGZpZWxkLmF0dGFjaG1lbnR0eXBlLFxyXG4gICAgICAgICAgbGltaXQ6IGZpZWxkLmF0dGFjaG1lbnRsaW1pdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8xMuOAgeW8ueahhlxyXG4gIGxvb2t1cChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJsb29rdXBcIixcclxuICAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgICAgIGRlZmF1bHRUZXh0OiBmaWVsZC5kZWZhdWx0dGV4dCxcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgdHlwZTogZmllbGQuY29udHJvbGlkLFxyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAgICAgICBjb250cm9saWQ6IGZpZWxkLmNvbnRyb2xpZCxcclxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vMTPjgIFodG1sXHJcbiAgaHRtbChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRUZXh0OiBmaWVsZC5kZWZhdWx0dGV4dCxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTHjgIHlrZfnrKZcclxuICAvLyBkaXJlY3RpbnB1dF9udmFyY2hhcihmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gIC8vICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAvLyAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgLy8gICAgIG9yaWdpbjoge1xyXG4gIC8vICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcImRpcmVjdGlucHV0XCIsXHJcbiAgLy8gICAgICAgZGF0YXR5cGU6IFwibnZhcmNoYXJcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIG1heExlbmd0aDogZmllbGQubWF4bGVuZ3RoLFxyXG4gIC8vICAgICAgIG1pbkxlbmd0aDogZmllbGQubWlubGVuZ3RoLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/nm7TmjqXovpPlhaUtMuOAgeWkmuihjOaWh+acrFxyXG4gIC8vIGRpcmVjdGlucHV0X211bHRpbGluZXRleHQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwidGV4dGFyZWFcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcIm11bHRpbGluZXRleHRcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIG1heExlbmd0aDogZmllbGQubWF4bGVuZ3RoLFxyXG4gIC8vICAgICAgIG1pbkxlbmd0aDogZmllbGQubWlubGVuZ3RoLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTPjgIHmlbTmlbBcclxuICAvLyBkaXJlY3RpbnB1dF9pbnQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwiaW5wdXRudW1iZXJcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcImludFwiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgbWF4OiBmaWVsZC5tYXgsXHJcbiAgLy8gICAgICAgbWluOiBmaWVsZC5taW4sXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0044CB5rWu54K5XHJcbiAgLy8gZGlyZWN0aW5wdXRfZmxvYXQoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwiaW5wdXRudW1iZXJcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcImZsb2F0XCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBtYXg6IGZpZWxkLm1heCxcclxuICAvLyAgICAgICBtaW46IGZpZWxkLm1pbixcclxuICAvLyAgICAgICBwcmVjaXNpb246IGZpZWxkLnByZWNpc2lvbixcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0144CB5pel5pyf77yI5bm05pyI5pel5pe25YiG77yJXHJcbiAgLy8gZGlyZWN0aW5wdXRfZGF0ZXRpbWUoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwiZGF0ZXBpY2tlclwiLFxyXG4gIC8vICAgICB0YWJsZWNvZGU6IGZpZWxkLnRhYmxlY29kZSxcclxuICAvLyAgICAga2V5OiBmaWVsZC5maWVsZGNvZGUsXHJcbiAgLy8gICAgIG9yaWdpbjoge1xyXG4gIC8vICAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcImRpcmVjdGlucHV0XCIsXHJcbiAgLy8gICAgICAgZGF0YXR5cGU6IFwiZGF0ZXRpbWVcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTbjgIHml6XmnJ/vvIjlubTmnIjml6XvvIlcclxuICAvLyBkaXJlY3RpbnB1dF9kYXRlKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImRhdGVwaWNrZXJcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcImRhdGVcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcbiAgLy8gICByZXR1cm4gY29uZmlnO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLy/nm7TmjqXovpPlhaUtN+OAgeaXpeacn++8iOW5tOaciO+8iVxyXG4gIC8vIGRpcmVjdGlucHV0X21vbnRoKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImRhdGVwaWNrZXJcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcIm1vbnRoXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIHR5cGU6IFwibW9udGhcIixcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0444CB5pel5pyf77yI5bm077yJXHJcbiAgLy8gZGlyZWN0aW5wdXRfeWVhcihmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJkYXRlcGlja2VyXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJ5ZWFyXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gIC8vICAgICAgIHR5cGU6IFwieWVhclwiLFxyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTnjgIHml6XmnJ/vvIjml7bliIbnp5LvvIlcclxuICAvLyBkaXJlY3RpbnB1dF90aW1lKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImRhdGVwaWNrZXJcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcInRpbWVcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgdHlwZTogXCJ0aW1lXCIsXHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5wbGFjZWhvbGRlcixcclxuICAvLyAgICAgICBpc2J1dGludGluOiBmaWVsZC5pc2J1dGludGluLFxyXG4gIC8vICAgICAgIHRpcHM6IGZpZWxkLnRpcHMsXHJcbiAgLy8gICAgICAgcGF0dGVybjogZmllbGQucGF0dGVyblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBzdGF0dXM6IDFcclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v55u05o6l6L6T5YWlLTEw44CB6ZmE5Lu2XHJcbiAgLy8gZGlyZWN0aW5wdXRfYXR0YWNobWVudChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJ1cGxvYWRcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJkaXJlY3RpbnB1dFwiLFxyXG4gIC8vICAgICAgIGRhdGF0eXBlOiBcImF0dGFjaG1lbnRcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgbGFiZWw6IGZpZWxkLmZpZWxkbmFtZSxcclxuICAvLyAgICAgICByZXF1aXJlZDogZmllbGQuYWxsb3dudWxsLFxyXG4gIC8vICAgICAgIGF0dGFjaG1lbnQ6IHtcclxuICAvLyAgICAgICAgIHNpemU6IGZpZWxkLmF0dGFjaG1lbnRzaXplLFxyXG4gIC8vICAgICAgICAgdHlwZTogZmllbGQuYXR0YWNobWVudHR5cGUsXHJcbiAgLy8gICAgICAgICBsaW1pdDogZmllbGQuYXR0YWNobWVudGxpbWl0XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+ebtOaOpei+k+WFpS0xMeOAgeWbvueJh1xyXG4gIC8vIGRpcmVjdGlucHV0X2ltYWdlKGZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcpIHtcclxuICAvLyAgIGxldCBjb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gIC8vICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiZGlyZWN0aW5wdXRcIixcclxuICAvLyAgICAgICBkYXRhdHlwZTogXCJpbWFnZVwiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLnBsYWNlaG9sZGVyLFxyXG4gIC8vICAgICAgIGlzYnV0aW50aW46IGZpZWxkLmlzYnV0aW50aW4sXHJcbiAgLy8gICAgICAgdGlwczogZmllbGQudGlwcyxcclxuICAvLyAgICAgICBwYXR0ZXJuOiBmaWVsZC5wYXR0ZXJuXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHN0YXR1czogMVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHJldHVybiBjb25maWc7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAvL+W4uOeUqOWPguaVsFxyXG4gIC8vIHJlZnBhcmFtZXRlcnMoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwicmVmcGFyYW1ldGVyc1wiXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdHZhbHVlLFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICB0eXBlOiBmaWVsZC5zaG93dHlwZSxcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgc2VsZWN0dHlwZTogZmllbGQuc2VsZWN0dHlwZSxcclxuICAvLyAgICAgICBwYXJhbWV0ZXJpZDogZmllbGQucGFyYW1ldGVyaWQsXHJcbiAgLy8gICAgICAgb3B0aW9uczogZmllbGQucGFyYW1ldGVyZGF0YSxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v5qCR5b2i5Y+C5pWwXHJcbiAgLy8gdHJlZXBhcmFtZXRlcnMoZmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZykge1xyXG4gIC8vICAgbGV0IGNvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgLy8gICAgIHR5cGU6IFwibG9va3VwXCIsXHJcbiAgLy8gICAgIHRhYmxlY29kZTogZmllbGQudGFibGVjb2RlLFxyXG4gIC8vICAgICBrZXk6IGZpZWxkLmZpZWxkY29kZSxcclxuICAvLyAgICAgb3JpZ2luOiB7XHJcbiAgLy8gICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwidHJlZXBhcmFtZXRlcnNcIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHR2YWx1ZSxcclxuICAvLyAgICAgZGVmYXVsdFRleHQ6IGZpZWxkLmRlZmF1bHR0ZXh0LFxyXG4gIC8vICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAvLyAgICAgICB0eXBlOiBcInRyZWVcIixcclxuICAvLyAgICAgICBsYWJlbDogZmllbGQuZmllbGRuYW1lLFxyXG4gIC8vICAgICAgIHJlcXVpcmVkOiBmaWVsZC5hbGxvd251bGwsXHJcbiAgLy8gICAgICAgc2VsZWN0dHlwZTogZmllbGQuc2VsZWN0dHlwZSxcclxuICAvLyAgICAgICB0cmVlaWQ6IGZpZWxkLnRyZWVpZCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcblxyXG4gIC8vIC8v57O757uf5o6n5Lu2XHJcbiAgLy8gc3lzdGVtY29udHJvbChmaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnKSB7XHJcbiAgLy8gICBsZXQgY29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAvLyAgICAgdHlwZTogXCJsb29rdXBcIixcclxuICAvLyAgICAgdGFibGVjb2RlOiBmaWVsZC50YWJsZWNvZGUsXHJcbiAgLy8gICAgIGtleTogZmllbGQuZmllbGRjb2RlLFxyXG4gIC8vICAgICBvcmlnaW46IHtcclxuICAvLyAgICAgICByZWZkYXRhc291cmNldHlwZTogXCJzeXN0ZW1jb250cm9sXCJcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0dmFsdWUsXHJcbiAgLy8gICAgIGRlZmF1bHRUZXh0OiBmaWVsZC5kZWZhdWx0dGV4dCxcclxuICAvLyAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgLy8gICAgICAgdHlwZTogZmllbGQuY29udHJvbGlkLFxyXG4gIC8vICAgICAgIGxhYmVsOiBmaWVsZC5maWVsZG5hbWUsXHJcbiAgLy8gICAgICAgcmVxdWlyZWQ6IGZpZWxkLmFsbG93bnVsbCxcclxuICAvLyAgICAgICBjb250cm9saWQ6IGZpZWxkLmNvbnRyb2xpZCxcclxuICAvLyAgICAgICBwbGFjZWhvbGRlcjogZmllbGQucGxhY2Vob2xkZXIsXHJcbiAgLy8gICAgICAgaXNidXRpbnRpbjogZmllbGQuaXNidXRpbnRpbixcclxuICAvLyAgICAgICB0aXBzOiBmaWVsZC50aXBzLFxyXG4gIC8vICAgICAgIHBhdHRlcm46IGZpZWxkLnBhdHRlcm5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgc3RhdHVzOiAxXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgcmV0dXJuIGNvbmZpZztcclxuICAvLyB9XHJcbn1cclxuIl19