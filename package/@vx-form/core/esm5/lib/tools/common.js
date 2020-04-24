/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var VXFormCommonService = /** @class */ (function () {
    function VXFormCommonService() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    VXFormCommonService.prototype.initFormFieldProperty = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.deleteFieldProperty(field);
        }));
    };
    //初始化表单JSON对象
    //初始化表单JSON对象
    /**
     * @param {?} fields
     * @param {?} fieldPropertys
     * @return {?}
     */
    VXFormCommonService.prototype.initFormFieldConfig = 
    //初始化表单JSON对象
    /**
     * @param {?} fields
     * @param {?} fieldPropertys
     * @return {?}
     */
    function (fields, fieldPropertys) {
        var _this = this;
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.setFieldProperty(field, fieldPropertys);
        }));
    };
    /**
     * @param {?} fields
     * @param {?} model
     * @return {?}
     */
    VXFormCommonService.prototype.initFormFieldModel = /**
     * @param {?} fields
     * @param {?} model
     * @return {?}
     */
    function (fields, model) {
        var _this = this;
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (field.hasOwnProperty("editor")) {
                field.typeold = field.type;
                field.type = "text";
                if (_this.checkFieldDefaultValue(field)) {
                    model[field.key] = field.defaultValue;
                }
            }
            if (field.hasOwnProperty("fieldArray")) {
                if (field.fieldArray.hasOwnProperty("fieldGroup")) {
                    model[field.key] = [{}];
                    field.fieldArray.fieldGroup.forEach((/**
                     * @param {?} fieldGroup
                     * @return {?}
                     */
                    function (fieldGroup) {
                        if (fieldGroup.hasOwnProperty("editor")) {
                            fieldGroup.typeold = field.type;
                            fieldGroup.type = "text";
                        }
                    }));
                }
            }
            if (field.hasOwnProperty("fieldGroup")) {
                //初始化值
                if (!_this.checkFieldDefaultValue(field)) {
                    model[field.key] = {};
                }
                field.fieldGroup.forEach((/**
                 * @param {?} fieldGroup
                 * @return {?}
                 */
                function (fieldGroup) {
                    if (fieldGroup.hasOwnProperty("editor")) {
                        fieldGroup.typeold = fieldGroup.type;
                        fieldGroup.type = "text";
                        if (_this.checkFieldDefaultValue(model[field.key][fieldGroup.key])) {
                            model[field.key][fieldGroup.key] = fieldGroup.defaultValue;
                        }
                    }
                }));
            }
        }));
    };
    //初始化表单序号
    //初始化表单序号
    /**
     * @param {?} surveyInfo
     * @return {?}
     */
    VXFormCommonService.prototype.initSurveyFormFieldConfig = 
    //初始化表单序号
    /**
     * @param {?} surveyInfo
     * @return {?}
     */
    function (surveyInfo) {
        var _this = this;
        surveyInfo.queTotal = 0;
        if (surveyInfo.pages) {
            surveyInfo.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.setFieldNumber(surveyInfo, page.questions);
            }));
        }
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    VXFormCommonService.prototype.checkFieldDefaultValue = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var result = false;
        if (field != undefined &&
            field != null &&
            field.defaultValue != undefined &&
            field.defaultValue != null) {
            return true;
        }
        return result;
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    VXFormCommonService.prototype.deleteFieldProperty = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.hasOwnProperty("status")) {
            delete field.status;
        }
        if (field.hasOwnProperty("guid")) {
            delete field.guid;
        }
        if (field.hasOwnProperty("id")) {
            delete field.id;
        }
        if (field.hasOwnProperty("wrappers")) {
            delete field["wrappers"];
        }
        if (field.hasOwnProperty("_keyPath")) {
            delete field["_keyPath"];
        }
        if (field.hasOwnProperty("modelOptions")) {
            delete field["modelOptions"];
        }
        if (field.hasOwnProperty("checked")) {
            delete field["checked"];
        }
        if (field.hasOwnProperty("rownumber")) {
            delete field["rownumber"];
        }
        if (field.hasOwnProperty("templateOptions")) {
            if (field.templateOptions.hasOwnProperty("focus")) {
                delete field.templateOptions.focus;
            }
            if (field.templateOptions.hasOwnProperty("disabled")) {
                delete field.templateOptions.disabled;
            }
            if (field.templateOptions.hasOwnProperty("readonly")) {
                delete field.templateOptions.readonly;
            }
        }
        if (field.fieldArray) {
            if (field.fieldArray.fieldGroup) {
                if (field.fieldGroup) {
                    delete field.fieldGroup;
                }
                this.initFormFieldProperty(field.fieldArray.fieldGroup);
            }
        }
        if (field.fieldGroup) {
            this.initFormFieldProperty(field.fieldGroup);
        }
    };
    /**
     * @private
     * @param {?} field
     * @param {?} fieldPropertys
     * @return {?}
     */
    VXFormCommonService.prototype.setFieldProperty = /**
     * @private
     * @param {?} field
     * @param {?} fieldPropertys
     * @return {?}
     */
    function (field, fieldPropertys) {
        /** @type {?} */
        var items = fieldPropertys.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.key === field.key;
        }));
        if (items != undefined && items != null && items.length > 0) {
            /** @type {?} */
            var item = items[0];
            if (item.hasOwnProperty("show")) {
                field.show = item.show;
            }
            if (item.hasOwnProperty("editor")) {
                field.editor = item.editor;
            }
            if (item.hasOwnProperty("label")) {
                if (item.label != null) {
                    field.templateOptions.label = item.label;
                }
            }
            if (item.hasOwnProperty("placeholder")) {
                if (item.placeholder != null) {
                    field.templateOptions.placeholder = item.placeholder;
                }
            }
            if (item.hasOwnProperty("options")) {
                if (item.options != null) {
                    field.templateOptions.options = item.options;
                }
            }
            if (item.hasOwnProperty("tips")) {
                if (item.tips != null && item.tips != "") {
                    field.templateOptions.tips = item.tips;
                }
            }
        }
        if (field.fieldArray) {
            if (field.fieldArray.fieldGroup) {
                this.initFormFieldConfig(field.fieldArray.fieldGroup, fieldPropertys);
            }
        }
        if (field.fieldGroup) {
            this.initFormFieldConfig(field.fieldGroup, fieldPropertys);
        }
    };
    /**
     * @private
     * @param {?} surveyInfo
     * @param {?} fields
     * @return {?}
     */
    VXFormCommonService.prototype.setFieldNumber = /**
     * @private
     * @param {?} surveyInfo
     * @param {?} fields
     * @return {?}
     */
    function (surveyInfo, fields) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (field.type != "line" && field.type != "remark") {
                surveyInfo.queTotal = surveyInfo.queTotal + 1;
                field.templateOptions.queno = "Q" + surveyInfo.queTotal;
            }
        }));
    };
    VXFormCommonService.decorators = [
        { type: Injectable, args: [{ providedIn: "root" },] }
    ];
    /** @nocollapse */
    VXFormCommonService.ctorParameters = function () { return []; };
    /** @nocollapse */ VXFormCommonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormCommonService_Factory() { return new VXFormCommonService(); }, token: VXFormCommonService, providedIn: "root" });
    return VXFormCommonService;
}());
export { VXFormCommonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBTW5EO0lBRUU7SUFBZ0IsQ0FBQzs7Ozs7SUFFakIsbURBQXFCOzs7O0lBQXJCLFVBQXNCLE1BQTJCO1FBQWpELGlCQUlDO1FBSEMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDbEIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWE7Ozs7Ozs7SUFDYixpREFBbUI7Ozs7Ozs7SUFBbkIsVUFDRSxNQUEyQixFQUMzQixjQUFxQztRQUZ2QyxpQkFPQztRQUhDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2xCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxnREFBa0I7Ozs7O0lBQWxCLFVBQW1CLE1BQTJCLEVBQUUsS0FBVTtRQUExRCxpQkFxQ0M7UUFwQ0MsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDbEIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNwQixJQUFJLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO2lCQUN2Qzth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QUFHLFVBQVUsQ0FBQyxRQUFRLEdBQUMsQ0FBQyxDQUFBO2dCQUMzQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzthQUN6RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBck1GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7OzhCQU5sQztDQTRNQyxBQXRNRCxJQXNNQztTQXJNWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYRm9ybUZpZWxkUHJvcGVydHlcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IFwicm9vdFwiIH0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1Db21tb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBpbml0Rm9ybUZpZWxkUHJvcGVydHkoZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdKSB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIHRoaXMuZGVsZXRlRmllbGRQcm9wZXJ0eShmaWVsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8v5Yid5aeL5YyW6KGo5Y2VSlNPTuWvueixoVxyXG4gIGluaXRGb3JtRmllbGRDb25maWcoXHJcbiAgICBmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBmaWVsZFByb3BlcnR5czogVlhGb3JtRmllbGRQcm9wZXJ0eVtdXHJcbiAgKSB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RmllbGRQcm9wZXJ0eShmaWVsZCwgZmllbGRQcm9wZXJ0eXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0Rm9ybUZpZWxkTW9kZWwoZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLCBtb2RlbDogYW55KSB7XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcImVkaXRvclwiKSkge1xyXG4gICAgICAgIGZpZWxkLnR5cGVvbGQgPSBmaWVsZC50eXBlO1xyXG4gICAgICAgIGZpZWxkLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0ZpZWxkRGVmYXVsdFZhbHVlKGZpZWxkKSkge1xyXG4gICAgICAgICAgbW9kZWxbZmllbGQua2V5XSA9IGZpZWxkLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwiZmllbGRBcnJheVwiKSkge1xyXG4gICAgICAgIGlmIChmaWVsZC5maWVsZEFycmF5Lmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgICAgbW9kZWxbZmllbGQua2V5XSA9IFt7fV07XHJcbiAgICAgICAgICBmaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAuZm9yRWFjaChmaWVsZEdyb3VwID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkR3JvdXAuaGFzT3duUHJvcGVydHkoXCJlZGl0b3JcIikpIHtcclxuICAgICAgICAgICAgICBmaWVsZEdyb3VwLnR5cGVvbGQgPSBmaWVsZC50eXBlO1xyXG4gICAgICAgICAgICAgIGZpZWxkR3JvdXAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5YC8XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRmllbGREZWZhdWx0VmFsdWUoZmllbGQpKSB7XHJcbiAgICAgICAgICBtb2RlbFtmaWVsZC5rZXldID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWVsZC5maWVsZEdyb3VwLmZvckVhY2goZmllbGRHcm91cCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmllbGRHcm91cC5oYXNPd25Qcm9wZXJ0eShcImVkaXRvclwiKSkge1xyXG4gICAgICAgICAgICBmaWVsZEdyb3VwLnR5cGVvbGQgPSBmaWVsZEdyb3VwLnR5cGU7XHJcbiAgICAgICAgICAgIGZpZWxkR3JvdXAudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0ZpZWxkRGVmYXVsdFZhbHVlKG1vZGVsW2ZpZWxkLmtleV1bZmllbGRHcm91cC5rZXldKSkge1xyXG4gICAgICAgICAgICAgIG1vZGVsW2ZpZWxkLmtleV1bZmllbGRHcm91cC5rZXldID0gZmllbGRHcm91cC5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL+WIneWni+WMluihqOWNleW6j+WPt1xyXG4gIGluaXRTdXJ2ZXlGb3JtRmllbGRDb25maWcoc3VydmV5SW5mbzogYW55KSB7IFxyXG4gICAgc3VydmV5SW5mby5xdWVUb3RhbCA9IDA7XHJcbiAgICBpZiAoc3VydmV5SW5mby5wYWdlcykgeyBcclxuICAgICAgc3VydmV5SW5mby5wYWdlcy5mb3JFYWNoKChwYWdlOiBhbnkpID0+IHsgXHJcbiAgICAgICAgdGhpcy5zZXRGaWVsZE51bWJlcihzdXJ2ZXlJbmZvLHBhZ2UucXVlc3Rpb25zKTtcclxuICAgICAgfSk7ICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tGaWVsZERlZmF1bHRWYWx1ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgZmllbGQgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGZpZWxkICE9IG51bGwgJiZcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlRmllbGRQcm9wZXJ0eShmaWVsZDogYW55KSB7XHJcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJzdGF0dXNcIikpIHtcclxuICAgICAgZGVsZXRlIGZpZWxkLnN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJndWlkXCIpKSB7XHJcbiAgICAgIGRlbGV0ZSBmaWVsZC5ndWlkO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwiaWRcIikpIHtcclxuICAgICAgZGVsZXRlIGZpZWxkLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcIndyYXBwZXJzXCIpKSB7XHJcbiAgICAgIGRlbGV0ZSBmaWVsZFtcIndyYXBwZXJzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcIl9rZXlQYXRoXCIpKSB7XHJcbiAgICAgIGRlbGV0ZSBmaWVsZFtcIl9rZXlQYXRoXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcIm1vZGVsT3B0aW9uc1wiKSkge1xyXG4gICAgICBkZWxldGUgZmllbGRbXCJtb2RlbE9wdGlvbnNcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwiY2hlY2tlZFwiKSkge1xyXG4gICAgICBkZWxldGUgZmllbGRbXCJjaGVja2VkXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcInJvd251bWJlclwiKSkge1xyXG4gICAgICBkZWxldGUgZmllbGRbXCJyb3dudW1iZXJcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwidGVtcGxhdGVPcHRpb25zXCIpKSB7XHJcbiAgICAgIGlmIChmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJmb2N1c1wiKSkge1xyXG4gICAgICAgIGRlbGV0ZSBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuZm9jdXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZmllbGQudGVtcGxhdGVPcHRpb25zLmhhc093blByb3BlcnR5KFwicmVhZG9ubHlcIikpIHtcclxuICAgICAgICBkZWxldGUgZmllbGQudGVtcGxhdGVPcHRpb25zLnJlYWRvbmx5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLmZpZWxkQXJyYXkpIHtcclxuICAgICAgaWYgKGZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCkge1xyXG4gICAgICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgICAgICBkZWxldGUgZmllbGQuZmllbGRHcm91cDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybUZpZWxkUHJvcGVydHkoZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcclxuICAgICAgdGhpcy5pbml0Rm9ybUZpZWxkUHJvcGVydHkoZmllbGQuZmllbGRHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZpZWxkUHJvcGVydHkoXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWcsXHJcbiAgICBmaWVsZFByb3BlcnR5czogVlhGb3JtRmllbGRQcm9wZXJ0eVtdXHJcbiAgKSB7XHJcbiAgICBsZXQgaXRlbXM6IFZYRm9ybUZpZWxkUHJvcGVydHlbXSA9IGZpZWxkUHJvcGVydHlzLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0ua2V5ID09PSBmaWVsZC5rZXk7XHJcbiAgICB9KTtcclxuICAgIGlmIChpdGVtcyAhPSB1bmRlZmluZWQgJiYgaXRlbXMgIT0gbnVsbCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBpdGVtOiBWWEZvcm1GaWVsZFByb3BlcnR5ID0gaXRlbXNbMF07XHJcblxyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcInNob3dcIikpIHtcclxuICAgICAgICBmaWVsZC5zaG93ID0gaXRlbS5zaG93O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiZWRpdG9yXCIpKSB7XHJcbiAgICAgICAgZmllbGQuZWRpdG9yID0gaXRlbS5lZGl0b3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwibGFiZWxcIikpIHtcclxuICAgICAgICBpZiAoaXRlbS5sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMubGFiZWwgPSBpdGVtLmxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJwbGFjZWhvbGRlclwiKSkge1xyXG4gICAgICAgIGlmIChpdGVtLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcclxuICAgICAgICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5wbGFjZWhvbGRlciA9IGl0ZW0ucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpIHtcclxuICAgICAgICBpZiAoaXRlbS5vcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5vcHRpb25zID0gaXRlbS5vcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJ0aXBzXCIpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udGlwcyAhPSBudWxsICYmIGl0ZW0udGlwcyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMudGlwcyA9IGl0ZW0udGlwcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmaWVsZC5maWVsZEFycmF5KSB7XHJcbiAgICAgIGlmIChmaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXApIHtcclxuICAgICAgICB0aGlzLmluaXRGb3JtRmllbGRDb25maWcoZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwLCBmaWVsZFByb3BlcnR5cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgIHRoaXMuaW5pdEZvcm1GaWVsZENvbmZpZyhmaWVsZC5maWVsZEdyb3VwLCBmaWVsZFByb3BlcnR5cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZpZWxkTnVtYmVyKHN1cnZleUluZm86YW55LGZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSkge1xyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykgPT4ge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSAhPSBcImxpbmVcIiAmJiBmaWVsZC50eXBlICE9IFwicmVtYXJrXCIpIHtcclxuICAgICAgICBzdXJ2ZXlJbmZvLnF1ZVRvdGFsID0gc3VydmV5SW5mby5xdWVUb3RhbCsxXHJcbiAgICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLnF1ZW5vID0gXCJRXCIgKyBzdXJ2ZXlJbmZvLnF1ZVRvdGFsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19