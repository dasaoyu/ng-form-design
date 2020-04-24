/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class VXFormCommonService {
    constructor() { }
    /**
     * @param {?} fields
     * @return {?}
     */
    initFormFieldProperty(fields) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            this.deleteFieldProperty(field);
        }));
    }
    //初始化表单JSON对象
    /**
     * @param {?} fields
     * @param {?} fieldPropertys
     * @return {?}
     */
    initFormFieldConfig(fields, fieldPropertys) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            this.setFieldProperty(field, fieldPropertys);
        }));
    }
    /**
     * @param {?} fields
     * @param {?} model
     * @return {?}
     */
    initFormFieldModel(fields, model) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            if (field.hasOwnProperty("editor")) {
                field.typeold = field.type;
                field.type = "text";
                if (this.checkFieldDefaultValue(field)) {
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
                    fieldGroup => {
                        if (fieldGroup.hasOwnProperty("editor")) {
                            fieldGroup.typeold = field.type;
                            fieldGroup.type = "text";
                        }
                    }));
                }
            }
            if (field.hasOwnProperty("fieldGroup")) {
                //初始化值
                if (!this.checkFieldDefaultValue(field)) {
                    model[field.key] = {};
                }
                field.fieldGroup.forEach((/**
                 * @param {?} fieldGroup
                 * @return {?}
                 */
                fieldGroup => {
                    if (fieldGroup.hasOwnProperty("editor")) {
                        fieldGroup.typeold = fieldGroup.type;
                        fieldGroup.type = "text";
                        if (this.checkFieldDefaultValue(model[field.key][fieldGroup.key])) {
                            model[field.key][fieldGroup.key] = fieldGroup.defaultValue;
                        }
                    }
                }));
            }
        }));
    }
    //初始化表单序号
    /**
     * @param {?} surveyInfo
     * @return {?}
     */
    initSurveyFormFieldConfig(surveyInfo) {
        surveyInfo.queTotal = 0;
        if (surveyInfo.pages) {
            surveyInfo.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.setFieldNumber(surveyInfo, page.questions);
            }));
        }
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    checkFieldDefaultValue(field) {
        /** @type {?} */
        let result = false;
        if (field != undefined &&
            field != null &&
            field.defaultValue != undefined &&
            field.defaultValue != null) {
            return true;
        }
        return result;
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    deleteFieldProperty(field) {
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
    }
    /**
     * @private
     * @param {?} field
     * @param {?} fieldPropertys
     * @return {?}
     */
    setFieldProperty(field, fieldPropertys) {
        /** @type {?} */
        let items = fieldPropertys.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.key === field.key;
        }));
        if (items != undefined && items != null && items.length > 0) {
            /** @type {?} */
            let item = items[0];
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
    }
    /**
     * @private
     * @param {?} surveyInfo
     * @param {?} fields
     * @return {?}
     */
    setFieldNumber(surveyInfo, fields) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            if (field.type != "line" && field.type != "remark") {
                surveyInfo.queTotal = surveyInfo.queTotal + 1;
                field.templateOptions.queno = "Q" + surveyInfo.queTotal;
            }
        }));
    }
}
VXFormCommonService.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */
VXFormCommonService.ctorParameters = () => [];
/** @nocollapse */ VXFormCommonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormCommonService_Factory() { return new VXFormCommonService(); }, token: VXFormCommonService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vY29yZS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBT25ELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsZ0JBQWdCLENBQUM7Ozs7O0lBRWpCLHFCQUFxQixDQUFDLE1BQTJCO1FBQy9DLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUdELG1CQUFtQixDQUNqQixNQUEyQixFQUMzQixjQUFxQztRQUVyQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUEyQixFQUFFLEtBQVU7UUFDeEQsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDM0IsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN0QyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7aUJBQ3ZDO2FBQ0Y7WUFDRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ2pELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDeEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztvQkFBQyxVQUFVLENBQUMsRUFBRTt3QkFDL0MsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUN2QyxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ2hDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO3lCQUMxQjtvQkFDSCxDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1lBQ0QsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN0QyxNQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN2QjtnQkFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3BDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUNyQyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQzt3QkFDekIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs0QkFDakUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQzt5QkFDNUQ7cUJBQ0Y7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBR0QseUJBQXlCLENBQUMsVUFBZTtRQUN2QyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDcEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxLQUF3Qjs7WUFDakQsTUFBTSxHQUFHLEtBQUs7UUFDbEIsSUFDRSxLQUFLLElBQUksU0FBUztZQUNsQixLQUFLLElBQUksSUFBSTtZQUNiLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUztZQUMvQixLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksRUFDMUI7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsS0FBVTtRQUNwQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztTQUNuQjtRQUNELElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUMzQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqRCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEQsT0FBTyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQzthQUN2QztZQUNELElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7YUFDdkM7U0FDRjtRQUVELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUMvQixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQztpQkFDekI7Z0JBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekQ7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGdCQUFnQixDQUN0QixLQUF3QixFQUN4QixjQUFxQzs7WUFFakMsS0FBSyxHQUEwQixjQUFjLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUNGLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDdkQsSUFBSSxHQUF3QixLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXhDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDL0IsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDNUI7WUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ3RCLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQzFDO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ3REO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3hCLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzlDO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUU7b0JBQ3hDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3hDO2FBQ0Y7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdkU7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsVUFBYyxFQUFDLE1BQTJCO1FBQy9ELE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDMUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDbEQsVUFBVSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQTtnQkFDM0MsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDekQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJNRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWEZvcm1GaWVsZFByb3BlcnR5XHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBcInJvb3RcIiB9KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtQ29tbW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgaW5pdEZvcm1GaWVsZFByb3BlcnR5KGZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICB0aGlzLmRlbGV0ZUZpZWxkUHJvcGVydHkoZmllbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL+WIneWni+WMluihqOWNlUpTT07lr7nosaFcclxuICBpbml0Rm9ybUZpZWxkQ29uZmlnKFxyXG4gICAgZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgZmllbGRQcm9wZXJ0eXM6IFZYRm9ybUZpZWxkUHJvcGVydHlbXVxyXG4gICkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICB0aGlzLnNldEZpZWxkUHJvcGVydHkoZmllbGQsIGZpZWxkUHJvcGVydHlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEZvcm1GaWVsZE1vZGVsKGZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSwgbW9kZWw6IGFueSkge1xyXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJlZGl0b3JcIikpIHtcclxuICAgICAgICBmaWVsZC50eXBlb2xkID0gZmllbGQudHlwZTtcclxuICAgICAgICBmaWVsZC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGaWVsZERlZmF1bHRWYWx1ZShmaWVsZCkpIHtcclxuICAgICAgICAgIG1vZGVsW2ZpZWxkLmtleV0gPSBmaWVsZC5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcImZpZWxkQXJyYXlcIikpIHtcclxuICAgICAgICBpZiAoZmllbGQuZmllbGRBcnJheS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkR3JvdXBcIikpIHtcclxuICAgICAgICAgIG1vZGVsW2ZpZWxkLmtleV0gPSBbe31dO1xyXG4gICAgICAgICAgZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwLmZvckVhY2goZmllbGRHcm91cCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEdyb3VwLmhhc093blByb3BlcnR5KFwiZWRpdG9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgZmllbGRHcm91cC50eXBlb2xkID0gZmllbGQudHlwZTtcclxuICAgICAgICAgICAgICBmaWVsZEdyb3VwLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcImZpZWxkR3JvdXBcIikpIHtcclxuICAgICAgICAvL+WIneWni+WMluWAvFxyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZpZWxkRGVmYXVsdFZhbHVlKGZpZWxkKSkge1xyXG4gICAgICAgICAgbW9kZWxbZmllbGQua2V5XSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKGZpZWxkR3JvdXAgPT4ge1xyXG4gICAgICAgICAgaWYgKGZpZWxkR3JvdXAuaGFzT3duUHJvcGVydHkoXCJlZGl0b3JcIikpIHtcclxuICAgICAgICAgICAgZmllbGRHcm91cC50eXBlb2xkID0gZmllbGRHcm91cC50eXBlO1xyXG4gICAgICAgICAgICBmaWVsZEdyb3VwLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tGaWVsZERlZmF1bHRWYWx1ZShtb2RlbFtmaWVsZC5rZXldW2ZpZWxkR3JvdXAua2V5XSkpIHtcclxuICAgICAgICAgICAgICBtb2RlbFtmaWVsZC5rZXldW2ZpZWxkR3JvdXAua2V5XSA9IGZpZWxkR3JvdXAuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/liJ3lp4vljJbooajljZXluo/lj7dcclxuICBpbml0U3VydmV5Rm9ybUZpZWxkQ29uZmlnKHN1cnZleUluZm86IGFueSkgeyBcclxuICAgIHN1cnZleUluZm8ucXVlVG90YWwgPSAwO1xyXG4gICAgaWYgKHN1cnZleUluZm8ucGFnZXMpIHsgXHJcbiAgICAgIHN1cnZleUluZm8ucGFnZXMuZm9yRWFjaCgocGFnZTogYW55KSA9PiB7IFxyXG4gICAgICAgIHRoaXMuc2V0RmllbGROdW1iZXIoc3VydmV5SW5mbyxwYWdlLnF1ZXN0aW9ucyk7XHJcbiAgICAgIH0pOyAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrRmllbGREZWZhdWx0VmFsdWUoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBpZiAoXHJcbiAgICAgIGZpZWxkICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBmaWVsZCAhPSBudWxsICYmXHJcbiAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlICE9IG51bGxcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGV0ZUZpZWxkUHJvcGVydHkoZmllbGQ6IGFueSkge1xyXG4gICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwic3RhdHVzXCIpKSB7XHJcbiAgICAgIGRlbGV0ZSBmaWVsZC5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLmhhc093blByb3BlcnR5KFwiZ3VpZFwiKSkge1xyXG4gICAgICBkZWxldGUgZmllbGQuZ3VpZDtcclxuICAgIH1cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcImlkXCIpKSB7XHJcbiAgICAgIGRlbGV0ZSBmaWVsZC5pZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJ3cmFwcGVyc1wiKSkge1xyXG4gICAgICBkZWxldGUgZmllbGRbXCJ3cmFwcGVyc1wiXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJfa2V5UGF0aFwiKSkge1xyXG4gICAgICBkZWxldGUgZmllbGRbXCJfa2V5UGF0aFwiXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJtb2RlbE9wdGlvbnNcIikpIHtcclxuICAgICAgZGVsZXRlIGZpZWxkW1wibW9kZWxPcHRpb25zXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcImNoZWNrZWRcIikpIHtcclxuICAgICAgZGVsZXRlIGZpZWxkW1wiY2hlY2tlZFwiXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuaGFzT3duUHJvcGVydHkoXCJyb3dudW1iZXJcIikpIHtcclxuICAgICAgZGVsZXRlIGZpZWxkW1wicm93bnVtYmVyXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eShcInRlbXBsYXRlT3B0aW9uc1wiKSkge1xyXG4gICAgICBpZiAoZmllbGQudGVtcGxhdGVPcHRpb25zLmhhc093blByb3BlcnR5KFwiZm9jdXNcIikpIHtcclxuICAgICAgICBkZWxldGUgZmllbGQudGVtcGxhdGVPcHRpb25zLmZvY3VzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgIGRlbGV0ZSBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcInJlYWRvbmx5XCIpKSB7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5yZWFkb25seTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5maWVsZEFycmF5KSB7XHJcbiAgICAgIGlmIChmaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXApIHtcclxuICAgICAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xyXG4gICAgICAgICAgZGVsZXRlIGZpZWxkLmZpZWxkR3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdEZvcm1GaWVsZFByb3BlcnR5KGZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XHJcbiAgICAgIHRoaXMuaW5pdEZvcm1GaWVsZFByb3BlcnR5KGZpZWxkLmZpZWxkR3JvdXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGaWVsZFByb3BlcnR5KFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gICAgZmllbGRQcm9wZXJ0eXM6IFZYRm9ybUZpZWxkUHJvcGVydHlbXVxyXG4gICkge1xyXG4gICAgbGV0IGl0ZW1zOiBWWEZvcm1GaWVsZFByb3BlcnR5W10gPSBmaWVsZFByb3BlcnR5cy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtLmtleSA9PT0gZmllbGQua2V5O1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaXRlbXMgIT0gdW5kZWZpbmVkICYmIGl0ZW1zICE9IG51bGwgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgaXRlbTogVlhGb3JtRmllbGRQcm9wZXJ0eSA9IGl0ZW1zWzBdO1xyXG5cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgZmllbGQuc2hvdyA9IGl0ZW0uc2hvdztcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImVkaXRvclwiKSkge1xyXG4gICAgICAgIGZpZWxkLmVkaXRvciA9IGl0ZW0uZWRpdG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImxhYmVsXCIpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ubGFiZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLmxhYmVsID0gaXRlbS5sYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwicGxhY2Vob2xkZXJcIikpIHtcclxuICAgICAgICBpZiAoaXRlbS5wbGFjZWhvbGRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMucGxhY2Vob2xkZXIgPSBpdGVtLnBsYWNlaG9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyA9IGl0ZW0ub3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwidGlwc1wiKSkge1xyXG4gICAgICAgIGlmIChpdGVtLnRpcHMgIT0gbnVsbCAmJiBpdGVtLnRpcHMgIT0gXCJcIikge1xyXG4gICAgICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLnRpcHMgPSBpdGVtLnRpcHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmllbGQuZmllbGRBcnJheSkge1xyXG4gICAgICBpZiAoZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybUZpZWxkQ29uZmlnKGZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCwgZmllbGRQcm9wZXJ0eXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xyXG4gICAgICB0aGlzLmluaXRGb3JtRmllbGRDb25maWcoZmllbGQuZmllbGRHcm91cCwgZmllbGRQcm9wZXJ0eXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRGaWVsZE51bWJlcihzdXJ2ZXlJbmZvOmFueSxmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10pIHtcclxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZDogVlhGb3JtRmllbGRDb25maWcpID0+IHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgIT0gXCJsaW5lXCIgJiYgZmllbGQudHlwZSAhPSBcInJlbWFya1wiKSB7XHJcbiAgICAgICAgc3VydmV5SW5mby5xdWVUb3RhbCA9IHN1cnZleUluZm8ucXVlVG90YWwrMVxyXG4gICAgICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5xdWVubyA9IFwiUVwiICsgc3VydmV5SW5mby5xdWVUb3RhbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==