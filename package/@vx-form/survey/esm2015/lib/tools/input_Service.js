/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
export class VXInputService {
    constructor() { }
    /*
        直接输入
        input  姓名、手机、邮箱
    
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_input(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "input"
        };
        switch (questionType.tag) {
            case "default":
                this.createInput_default(question);
                break;
            case "name":
                this.createInput_name(question);
                break;
            case "mobile":
                this.createInput_mobile(question);
                break;
            case "email":
                this.createInput_email(question);
                break;
            case "remark":
                this.createInput_remark(question);
                break;
            default:
                this.createInput_default(question);
                break;
        }
        return question;
    }
    //默认
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createInput_default(question) {
        question.templateOptions = {
            type: "default",
            label: "请填写本项内容",
            required: false,
            setting: {
                size: "small",
                minLength: 0,
                maxLength: 200
            }
        };
        return question;
    }
    //姓名
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createInput_name(question) {
        question.templateOptions = {
            type: "default",
            label: "请填写姓名",
            required: false,
            setting: {
                size: "small",
                minLength: 0,
                maxLength: 200
            }
        };
        return question;
    }
    //邮箱
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createInput_email(question) {
        question.templateOptions = {
            type: "email",
            label: "请填写邮箱",
            required: false,
            setting: {
                size: "small",
                minLength: 0,
                maxLength: 200
            }
        };
        return question;
    }
    //手机
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createInput_mobile(question) {
        question.templateOptions = {
            type: "mobile",
            label: "请填写手机号码",
            required: false,
            setting: {
                size: "small",
                minLength: 0,
                maxLength: 200
            }
        };
        return question;
    }
    //多行文本
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createInput_remark(question) {
        question.templateOptions = {
            type: "default",
            label: "请填写本项内容",
            required: false,
            setting: {
                size: "large",
                minLength: 0,
                maxLength: 200
            }
        };
        return question;
    }
}
VXInputService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXInputService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9pbnB1dF9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQU9qQixZQUFZLENBQUMsWUFBaUI7O1lBQ3hCLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0QsUUFBUSxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ3hCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1Y7Z0JBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNO1NBQ1Q7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBR08sbUJBQW1CLENBQUMsUUFBMkI7UUFDckQsUUFBUSxDQUFDLGVBQWUsR0FBQztZQUNyQixJQUFJLEVBQUMsU0FBUztZQUNkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxHQUFHO2FBQ2Y7U0FDRixDQUFBO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUdPLGdCQUFnQixDQUFDLFFBQTJCO1FBQ2xELFFBQVEsQ0FBQyxlQUFlLEdBQUM7WUFDckIsSUFBSSxFQUFDLFNBQVM7WUFDZCxLQUFLLEVBQUUsT0FBTztZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxHQUFHO2FBQ2Y7U0FDRixDQUFBO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUdPLGlCQUFpQixDQUFDLFFBQTJCO1FBQ25ELFFBQVEsQ0FBQyxlQUFlLEdBQUM7WUFDckIsSUFBSSxFQUFDLE9BQU87WUFDWixLQUFLLEVBQUUsT0FBTztZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxHQUFHO2FBQ2Y7U0FDRixDQUFBO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUdPLGtCQUFrQixDQUFDLFFBQTJCO1FBQ3BELFFBQVEsQ0FBQyxlQUFlLEdBQUM7WUFDckIsSUFBSSxFQUFDLFFBQVE7WUFDYixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUUsR0FBRzthQUNmO1NBQ0YsQ0FBQTtRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFHUyxrQkFBa0IsQ0FBQyxRQUEyQjtRQUNwRCxRQUFRLENBQUMsZUFBZSxHQUFDO1lBQ3JCLElBQUksRUFBQyxTQUFTO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLENBQUM7Z0JBQ1osU0FBUyxFQUFFLEdBQUc7YUFDZjtTQUNGLENBQUE7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUEvR0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVGaWVsZENvbmZpZywgVlhGb3JtRmllbGRDb25maWcsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhJbnB1dFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qXHJcbiAgICDnm7TmjqXovpPlhaVcclxuICAgIGlucHV0ICDlp5PlkI3jgIHmiYvmnLrjgIHpgq7nrrFcclxuXHJcbiAgKi8gXHJcbiAgY3JlYXRlX2lucHV0KHF1ZXN0aW9uVHlwZTogYW55KSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImlucHV0XCJcclxuICAgIH1cclxuICAgIHN3aXRjaCAocXVlc3Rpb25UeXBlLnRhZykge1xyXG4gICAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXRfZGVmYXVsdChxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dF9uYW1lKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1vYmlsZVwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXRfbW9iaWxlKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dF9lbWFpbChxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJyZW1hcmtcIjpcclxuICAgICAgICAgIHRoaXMuY3JlYXRlSW5wdXRfcmVtYXJrKHF1ZXN0aW9uKTtcclxuICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnB1dF9kZWZhdWx0KHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH0gXHJcblxyXG4gIC8v6buY6K6kXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbnB1dF9kZWZhdWx0KHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zPXtcclxuICAgICAgICB0eXBlOlwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+Whq+WGmeacrOmhueWGheWuuVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBzZXR0aW5nOiB7IFxyXG4gICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLCBcclxuICAgICAgICAgIG1pbkxlbmd0aDogMCwgXHJcbiAgICAgICAgICBtYXhMZW5ndGg6IDIwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v5aeT5ZCNXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbnB1dF9uYW1lKHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zPXtcclxuICAgICAgICB0eXBlOlwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+Whq+WGmeWnk+WQjVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBzZXR0aW5nOiB7IFxyXG4gICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLCBcclxuICAgICAgICAgIG1pbkxlbmd0aDogMCwgXHJcbiAgICAgICAgICBtYXhMZW5ndGg6IDIwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v6YKu566xXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbnB1dF9lbWFpbChxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucz17XHJcbiAgICAgICAgdHlwZTpcImVtYWlsXCIsXHJcbiAgICAgICAgbGFiZWw6IFwi6K+35aGr5YaZ6YKu566xXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNldHRpbmc6IHsgXHJcbiAgICAgICAgICBzaXplOiBcInNtYWxsXCIsIFxyXG4gICAgICAgICAgbWluTGVuZ3RoOiAwLCBcclxuICAgICAgICAgIG1heExlbmd0aDogMjAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/miYvmnLpcclxuICBwcml2YXRlIGNyZWF0ZUlucHV0X21vYmlsZShxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucz17XHJcbiAgICAgICAgdHlwZTpcIm1vYmlsZVwiLFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+Whq+WGmeaJi+acuuWPt+eggVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBzZXR0aW5nOiB7IFxyXG4gICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLCBcclxuICAgICAgICAgIG1pbkxlbmd0aDogMCwgXHJcbiAgICAgICAgICBtYXhMZW5ndGg6IDIwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gICAgLy/lpJrooYzmlofmnKxcclxuICAgIHByaXZhdGUgY3JlYXRlSW5wdXRfcmVtYXJrKHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnM9e1xyXG4gICAgICAgICAgdHlwZTpcImRlZmF1bHRcIixcclxuICAgICAgICAgIGxhYmVsOiBcIuivt+Whq+WGmeacrOmhueWGheWuuVwiLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2V0dGluZzogeyBcclxuICAgICAgICAgICAgc2l6ZTogXCJsYXJnZVwiLCBcclxuICAgICAgICAgICAgbWluTGVuZ3RoOiAwLCBcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgICB9XHJcbiBcclxufVxyXG4iXX0=