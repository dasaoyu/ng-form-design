/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Guid, clone } from "@vx-form/core";
import { VXToFormFieldService } from "./formFieldService";
import * as _ from "lodash";
export class VXTransferService {
    /**
     * @param {?} toFormField
     */
    constructor(toFormField) {
        this.toFormField = toFormField;
    }
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @return {?}
     */
    transferLineToForm(form_fields, checkedFields) {
        /** @type {?} */
        let obj = this.getFieldLineInfo();
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            form_fields.splice(checkedField.index + 1, 0, obj);
        }
        else {
            form_fields.push(obj);
        }
    }
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @return {?}
     */
    transferLabelToForm(form_fields, checkedFields) {
        /** @type {?} */
        let obj = this.getFieldRemarkInfo();
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            form_fields.splice(checkedField.index + 1, 0, obj);
        }
        else {
            form_fields.push(obj);
        }
    }
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @param {?} tableCode
     * @return {?}
     */
    transferGroupToForm(form_fields, checkedFields, tableCode) {
        /** @type {?} */
        let obj = this.getFieldGroupInfo();
        obj.tablecode = tableCode;
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            form_fields.splice(checkedField.index + 1, 0, obj);
        }
        else {
            form_fields.push(obj);
        }
    }
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @param {?} businessTable
     * @param {?} obj
     * @return {?}
     */
    transferSelectFieldToForm(form_fields, checkedFields, businessTable, obj) {
        /** @type {?} */
        let selectFields = [];
        /** @type {?} */
        let tableFields = [];
        /** @type {?} */
        let addFields = [];
        /** @type {?} */
        let beginIndex = 0;
        Object.getOwnPropertyNames(obj).forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (obj[item]) {
                selectFields.push(item);
            }
        }));
        if (!selectFields || selectFields.length < 1)
            return;
        tableFields = this.getTableFiledList(businessTable);
        if (!tableFields || tableFields.length < 1)
            return;
        if (form_fields && form_fields.length > 0) {
            beginIndex = form_fields.length;
        }
        selectFields.forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            let tableField = this.getTableFiledInfo(key, tableFields);
            if (tableField != null) {
                /** @type {?} */
                let formField = this.toFormField.getVXFiledFunction(tableField);
                if (formField && formField != null) {
                    addFields.push(formField);
                }
            }
        }));
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            beginIndex = checkedField.index + 1;
        }
        addFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            form_fields.splice(beginIndex + index, 0, item);
        }));
    }
    /**
     * @param {?} form_fields
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    groupFieldMoveUpOrDown(form_fields, field, type) {
        this.clearGroupChecked(field);
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let cloneField = clone(field);
        /** @type {?} */
        let checkedFields = this.getGroupCheckFields(cloneField);
        if (checkedFields) {
            if (type === "up") {
                checkedFields.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.index > 0) {
                        _.get(cloneField, "fieldArray.fieldGroup").splice(item.index, 1);
                        _.get(cloneField, "fieldArray.fieldGroup").splice(item.index - 1, 0, item.field);
                    }
                }));
            }
            else if (type === "down") {
                checkedFields.reverse().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.index <
                        _.get(cloneField, "fieldArray.fieldGroup").length - 1) {
                        _.get(cloneField, "fieldArray.fieldGroup").splice(item.index, 1);
                        _.get(cloneField, "fieldArray.fieldGroup").splice(item.index + 1, 0, item.field);
                    }
                }));
            }
        }
        cloneFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.guid === cloneField.guid) {
                item.fieldArray = cloneField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    }
    /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    groupTransferLineToForm(form_fields, field) {
        this.clearGroupChecked(field);
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let cloneField = clone(field);
        /** @type {?} */
        let obj = this.getFieldLineInfo();
        /** @type {?} */
        let checkedFields = this.getGroupCheckFields(cloneField);
        if (!cloneField)
            return null;
        if (!cloneField.fieldArray ||
            !cloneField.fieldArray.fieldGroup ||
            cloneField.fieldArray.fieldGroup.length < 1) {
            _.get(cloneField, "fieldArray.fieldGroup", []);
        }
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            _.get(checkedField, "checked", true);
            _.get(cloneField, "fieldArray.fieldGroup").splice(checkedField.index + 1, 0, obj);
        }
        else {
            _.get(cloneField, "fieldArray.fieldGroup").push(obj);
        }
        cloneFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.guid === cloneField.guid) {
                item.fieldArray = cloneField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    }
    /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    groupTransferRemarkToForm(form_fields, field) {
        this.clearGroupChecked(field);
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let cloneField = clone(field);
        /** @type {?} */
        let obj = this.getFieldRemarkInfo();
        /** @type {?} */
        let checkedFields = this.getGroupCheckFields(cloneField);
        if (!cloneField)
            return null;
        if (!cloneField.fieldArray ||
            !cloneField.fieldArray.fieldGroup ||
            cloneField.fieldArray.fieldGroup.length < 1) {
            _.get(cloneField, "fieldArray.fieldGroup", []);
        }
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            _.get(checkedField, "checked", true);
            _.get(cloneField, "fieldArray.fieldGroup").splice(checkedField.index + 1, 0, obj);
        }
        else {
            _.get(cloneField, "fieldArray.fieldGroup").push(obj);
        }
        cloneFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.guid === cloneField.guid) {
                item.fieldArray = cloneField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    }
    /**
     * @param {?} form_fields
     * @param {?} groupField
     * @param {?} checkedFields
     * @param {?} businessTable
     * @param {?} obj
     * @return {?}
     */
    groupTransferSelectFieldToForm(form_fields, groupField, checkedFields, businessTable, obj) {
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let cloneGroupField = clone(groupField);
        /** @type {?} */
        let selectFields = [];
        /** @type {?} */
        let tableFields = [];
        /** @type {?} */
        let addFields = [];
        /** @type {?} */
        let beginIndex = 0;
        Object.getOwnPropertyNames(obj).forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (obj[item]) {
                selectFields.push(item);
            }
        }));
        if (!selectFields || selectFields.length < 1)
            return;
        tableFields = this.getTableFiledList(businessTable);
        if (!tableFields || tableFields.length < 1)
            return;
        if (cloneFields && cloneFields.length > 0) {
            beginIndex = cloneFields.length - 1;
        }
        if (!cloneGroupField.fieldArray ||
            !cloneGroupField.fieldArray.fieldGroup ||
            cloneGroupField.fieldArray.fieldGroup.length < 1) {
            _.get(cloneGroupField, "fieldArray.fieldGroup", []);
        }
        selectFields.forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            let tableField = this.getTableFiledInfo(key, tableFields);
            if (tableField != null) {
                /** @type {?} */
                let formField = this.toFormField.getVXFiledFunction(tableField);
                if (formField && formField != null) {
                    addFields.push(formField);
                }
            }
        }));
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            beginIndex = checkedField.index + 1;
        }
        addFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            _.get(cloneGroupField, "fieldArray.fieldGroup").splice(beginIndex + index, 0, item);
        }));
        cloneFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.guid === cloneGroupField.guid) {
                item.fieldArray = cloneGroupField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    }
    /**
     * @param {?} form_fields
     * @param {?} groupField
     * @return {?}
     */
    groupTransferDeleteForm(form_fields, groupField) {
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let cloneGroupField = clone(groupField);
        /** @type {?} */
        let checkedFields = this.getGroupCheckFields(cloneGroupField);
        if (!checkedFields || checkedFields == null || checkedFields.length < 1) {
            return;
        }
        if (!cloneGroupField.fieldArray ||
            !cloneGroupField.fieldArray.fieldGroup ||
            cloneGroupField.fieldArray.fieldGroup.length < 1) {
            return;
        }
        checkedFields.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            _.get(cloneGroupField, "fieldArray.fieldGroup").forEach((/**
             * @param {?} field
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (field, index, object) => {
                if (field.key === item.field.key &&
                    field.templateOptions.isbutintin != true) {
                    object.splice(index, 1);
                }
            }));
        }));
        cloneFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.guid === cloneGroupField.guid) {
                item.fieldArray = cloneGroupField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    }
    /**
     * @param {?} form_fields
     * @param {?} new_field
     * @return {?}
     */
    editFormFieldInfo(form_fields, new_field) {
        if (!form_fields)
            return;
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let groupKey = "";
        cloneFields.forEach((/**
         * @param {?} field
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (field, index, object) => {
            if (field.type === "repeat") {
                if (field.fieldArray &&
                    field.fieldArray.fieldGroup &&
                    field.fieldArray.fieldGroup.length > 0) {
                    _.get(field, "fieldArray.fieldGroup").forEach((/**
                     * @param {?} groupField
                     * @param {?} groupIndex
                     * @param {?} groupObject
                     * @return {?}
                     */
                    (groupField, groupIndex, groupObject) => {
                        if (groupField.key === new_field.key) {
                            groupKey = field.key;
                            groupObject.splice(groupIndex, 1);
                            groupObject.splice(groupIndex, 0, new_field);
                        }
                    }));
                }
            }
            else {
                if (field.key === new_field.key) {
                    object.splice(index, 1);
                    object.splice(index, 0, new_field);
                }
            }
        }));
        if (groupKey != null && groupKey != "") {
            cloneFields.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
                if (item.hasOwnProperty("fieldGroup")) {
                    delete item.fieldGroup;
                }
            }));
        }
        return {
            groupKey: groupKey,
            formFileds: cloneFields
        };
    }
    /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    deleteFormFieldInfo(form_fields, field) {
        /** @type {?} */
        let cloneFields = clone(form_fields);
        /** @type {?} */
        let cloneField = clone(field);
        /** @type {?} */
        let groupKey;
        if (cloneFields != undefined &&
            cloneFields != null &&
            cloneField != undefined &&
            cloneField != null &&
            cloneFields.length > 0) {
            if (cloneField.key != undefined && cloneField.key != null) {
                cloneFields.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                (item, index, object) => {
                    if (item.key === cloneField.key) {
                        object.splice(index, 1);
                    }
                    if (item.fieldArray != undefined &&
                        item.fieldArray != null &&
                        item.fieldArray.fieldGroup != undefined &&
                        item.fieldArray.fieldGroup != null) {
                        /** @type {?} */
                        let res = this.deleteGroupFormFieldInfo(item, field);
                        if (res != null && res != "") {
                            groupKey = res;
                            if (item.hasOwnProperty("fieldGroup")) {
                                delete item.fieldGroup;
                            }
                        }
                    }
                }));
            }
        }
        return {
            groupKey: groupKey,
            formFileds: cloneFields
        };
    }
    /**
     * @private
     * @param {?} fields
     * @param {?} field
     * @return {?}
     */
    deleteGroupFormFieldInfo(fields, field) {
        /** @type {?} */
        let form_fields = [];
        /** @type {?} */
        let groupKey = "";
        if (fields.fieldArray != undefined &&
            fields.fieldArray != null &&
            fields.fieldArray.fieldGroup != undefined &&
            fields.fieldArray.fieldGroup != null) {
            form_fields = fields.fieldArray.fieldGroup;
            if (form_fields != undefined &&
                form_fields != null &&
                field != undefined &&
                field != null &&
                form_fields.length > 0) {
                if (field.key != undefined && field.key != null) {
                    form_fields.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */
                    (item, index, object) => {
                        if (item.key === field.key) {
                            if (fields.key != undefined && fields.key != null) {
                                groupKey = fields.key;
                                object.splice(index, 1);
                            }
                        }
                    }));
                }
            }
        }
        return groupKey;
    }
    /**
     * @private
     * @return {?}
     */
    getFieldLineInfo() {
        /** @type {?} */
        let obj = {
            key: Guid.create()["value"],
            guid: Guid.create()["value"],
            type: "line",
            status: 1
        };
        return obj;
    }
    /**
     * @private
     * @return {?}
     */
    getFieldRemarkInfo() {
        /** @type {?} */
        let obj = {
            key: Guid.create()["value"],
            guid: Guid.create()["value"],
            type: "html",
            templateOptions: {
                description: "片段文本描述"
            },
            status: 1
        };
        return obj;
    }
    /**
     * @private
     * @return {?}
     */
    getFieldGroupInfo() {
        /** @type {?} */
        let obj = {
            key: Guid.create()["value"],
            guid: Guid.create()["value"],
            type: "repeat",
            fieldArray: {
                fieldGroup: []
            },
            tablecode: "",
            status: 1
        };
        return obj;
    }
    //清空选中
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    clearGroupChecked(field) {
        if (!field ||
            !field.fieldArray ||
            !field.fieldArray.fieldGroup ||
            !field.fieldGroup)
            return;
        field.fieldArray.fieldGroup.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            item.checked = false;
        }));
    }
    //获取选中
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getGroupCheckFields(field) {
        /** @type {?} */
        let checkedField = [];
        if (!field ||
            !field.fieldArray ||
            !field.fieldArray.fieldGroup ||
            !field.fieldGroup ||
            field.fieldGroup.length < 1) {
            return checkedField;
        }
        _.get(field, "fieldGroup[0].fieldGroup").forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            if (item.checked) {
                checkedField.push({ index: index, field: item });
                _.get(field, "fieldArray.fieldGroup")[index].checked = true;
            }
        }));
        return checkedField;
    }
    /**
     * @private
     * @param {?} businessTable
     * @return {?}
     */
    getTableFiledList(businessTable) {
        /** @type {?} */
        let tableFields = [];
        if (businessTable) {
            if (businessTable.primary &&
                businessTable.primary != null &&
                businessTable.primary.tablefields &&
                businessTable.primary.tablefields != null &&
                businessTable.primary.tablefields.length > 0) {
                if (businessTable.primary.tablefields) {
                    tableFields = tableFields.concat(businessTable.primary.tablefields);
                }
            }
            if (businessTable.child && businessTable.child != null) {
                if (businessTable.child.single &&
                    businessTable.child.single != null &&
                    businessTable.child.single.length > 0) {
                    businessTable.child.single.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.tablefields) {
                            tableFields = tableFields.concat(item.tablefields);
                        }
                    }));
                }
                if (businessTable.child.multiple &&
                    businessTable.child.multiple != null &&
                    businessTable.child.multiple.length > 0) {
                    businessTable.child.multiple.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.tablefields) {
                            tableFields = tableFields.concat(item.tablefields);
                        }
                    }));
                }
            }
        }
        return tableFields;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} tableFields
     * @return {?}
     */
    getTableFiledInfo(key, tableFields) {
        /** @type {?} */
        let resValue = {};
        if (key && tableFields && tableFields.length > 0) {
            /** @type {?} */
            let filterFiled = tableFields.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item["fieldcode"] === key;
            }));
            if (filterFiled && filterFiled.length > 0) {
                return filterFiled[0];
            }
            return resValue;
        }
        return resValue;
    }
}
VXTransferService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXTransferService.ctorParameters = () => [
    { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.toFormField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3Rvb2xzL3RyYW5zZmVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUdMLElBQUksRUFDSixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFHNUIsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUVVLFdBQWlDO1FBQWpDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJQUN4QyxDQUFDOzs7Ozs7SUFFSixrQkFBa0IsQ0FDaEIsV0FBZ0MsRUFDaEMsYUFBOEI7O1lBRTFCLEdBQUcsR0FBc0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQ3BELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDekMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMxRCxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUNqQixXQUFnQyxFQUNoQyxhQUE4Qjs7WUFFMUIsR0FBRyxHQUFzQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDdEQsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUN6QyxZQUFZLEdBQUcsYUFB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Q2xFLFFBQVEsR0FBdUIsRUFBRTtRQUNyQyxJQUFJLEdBQUcsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUM1QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNqRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDbkMsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUF0bEJGLFVBQVU7Ozs7WUFKRixvQkFBb0IsdUJBT3hCLE1BQU0sU0FBQyxvQkFBb0I7Ozs7Ozs7SUFBNUIsd0NBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgR3VpZCxcclxuICBjbG9uZVxyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1MYXlvdXQsIElDaGVja2VkRmllbGQsIElCdXNpbmVzc1RhYmxlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBWWFRvRm9ybUZpZWxkU2VydmljZSB9IGZyb20gXCIuL2Zvcm1GaWVsZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhUcmFuc2ZlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChWWFRvRm9ybUZpZWxkU2VydmljZSlcclxuICAgIHByaXZhdGUgdG9Gb3JtRmllbGQ6IFZYVG9Gb3JtRmllbGRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICB0cmFuc2ZlckxpbmVUb0Zvcm0oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGNoZWNrZWRGaWVsZHM6IElDaGVja2VkRmllbGRbXVxyXG4gICkge1xyXG4gICAgbGV0IG9iajogVlhGb3JtRmllbGRDb25maWcgPSB0aGlzLmdldEZpZWxkTGluZUluZm8oKTtcclxuICAgIGlmIChjaGVja2VkRmllbGRzICYmIGNoZWNrZWRGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgY2hlY2tlZEZpZWxkID0gY2hlY2tlZEZpZWxkc1tjaGVja2VkRmllbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBmb3JtX2ZpZWxkcy5zcGxpY2UoY2hlY2tlZEZpZWxkLmluZGV4ICsgMSwgMCwgb2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1fZmllbGRzLnB1c2gob2JqKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZmVyTGFiZWxUb0Zvcm0oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGNoZWNrZWRGaWVsZHM6IElDaGVja2VkRmllbGRbXVxyXG4gICkge1xyXG4gICAgbGV0IG9iajogVlhGb3JtRmllbGRDb25maWcgPSB0aGlzLmdldEZpZWxkUmVtYXJrSW5mbygpO1xyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMgJiYgY2hlY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGVja2VkRmllbGQgPSBjaGVja2VkRmllbGRzW2NoZWNrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGZvcm1fZmllbGRzLnNwbGljZShjaGVja2VkRmllbGQuaW5kZXggKyAxLCAwLCBvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybV9maWVsZHMucHVzaChvYmopO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmZXJHcm91cFRvRm9ybShcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdLFxyXG4gICAgdGFibGVDb2RlOiBzdHJpbmdcclxuICApIHtcclxuICAgIGxldCBvYmo6IFZYRm9ybUZpZWxkQ29uZmlnID0gdGhpcy5nZXRGaWVsZEdyb3VwSW5mbygpO1xyXG4gICAgb2JqLnRhYmxlY29kZSA9IHRhYmxlQ29kZTtcclxuICAgIGlmIChjaGVja2VkRmllbGRzICYmIGNoZWNrZWRGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgY2hlY2tlZEZpZWxkID0gY2hlY2tlZEZpZWxkc1tjaGVja2VkRmllbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBmb3JtX2ZpZWxkcy5zcGxpY2UoY2hlY2tlZEZpZWxkLmluZGV4ICsgMSwgMCwgb2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1fZmllbGRzLnB1c2gob2JqKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZmVyU2VsZWN0RmllbGRUb0Zvcm0oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGNoZWNrZWRGaWVsZHM6IElDaGVja2VkRmllbGRbXSxcclxuICAgIGJ1c2luZXNzVGFibGU6IElCdXNpbmVzc1RhYmxlLFxyXG4gICAgb2JqOiBhbnlcclxuICApIHtcclxuICAgIGxldCBzZWxlY3RGaWVsZHM6IGFueSA9IFtdO1xyXG4gICAgbGV0IHRhYmxlRmllbGRzOiBWWFRhYmxlRmllbGRDb25maWdbXSA9IFtdO1xyXG4gICAgbGV0IGFkZEZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IFtdO1xyXG4gICAgbGV0IGJlZ2luSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChvYmpbaXRlbV0pIHtcclxuICAgICAgICBzZWxlY3RGaWVsZHMucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXNlbGVjdEZpZWxkcyB8fCBzZWxlY3RGaWVsZHMubGVuZ3RoIDwgMSkgcmV0dXJuOyBcclxuICAgIHRhYmxlRmllbGRzID0gdGhpcy5nZXRUYWJsZUZpbGVkTGlzdChidXNpbmVzc1RhYmxlKTtcclxuXHJcbiAgICBpZiAoIXRhYmxlRmllbGRzIHx8IHRhYmxlRmllbGRzLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZm9ybV9maWVsZHMgJiYgZm9ybV9maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBiZWdpbkluZGV4ID0gZm9ybV9maWVsZHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEZpZWxkcy5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgdGFibGVGaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnID0gdGhpcy5nZXRUYWJsZUZpbGVkSW5mbyhcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgdGFibGVGaWVsZHNcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRhYmxlRmllbGQgIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBmb3JtRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gdGhpcy50b0Zvcm1GaWVsZC5nZXRWWEZpbGVkRnVuY3Rpb24oXHJcbiAgICAgICAgICB0YWJsZUZpZWxkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZm9ybUZpZWxkICYmIGZvcm1GaWVsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhZGRGaWVsZHMucHVzaChmb3JtRmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMgJiYgY2hlY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGVja2VkRmllbGQgPSBjaGVja2VkRmllbGRzW2NoZWNrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGJlZ2luSW5kZXggPSBjaGVja2VkRmllbGQuaW5kZXggKyAxO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgZm9ybV9maWVsZHMuc3BsaWNlKGJlZ2luSW5kZXggKyBpbmRleCwgMCwgaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdyb3VwRmllbGRNb3ZlVXBPckRvd24oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyxcclxuICAgIHR5cGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jbGVhckdyb3VwQ2hlY2tlZChmaWVsZCk7XHJcbiAgICBsZXQgY2xvbmVGaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBjbG9uZShmb3JtX2ZpZWxkcyk7XHJcbiAgICBsZXQgY2xvbmVGaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSBjbG9uZShmaWVsZCk7XHJcblxyXG4gICAgbGV0IGNoZWNrZWRGaWVsZHM6IElDaGVja2VkRmllbGRbXSA9IHRoaXMuZ2V0R3JvdXBDaGVja0ZpZWxkcyhjbG9uZUZpZWxkKTtcclxuICAgIGlmIChjaGVja2VkRmllbGRzKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcInVwXCIpIHtcclxuICAgICAgICBjaGVja2VkRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLnNwbGljZShpdGVtLmluZGV4LCAxKTtcclxuICAgICAgICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuc3BsaWNlKFxyXG4gICAgICAgICAgICAgIGl0ZW0uaW5kZXggLSAxLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgaXRlbS5maWVsZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgY2hlY2tlZEZpZWxkcy5yZXZlcnNlKCkuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGl0ZW0uaW5kZXggPFxyXG4gICAgICAgICAgICBfLmdldChjbG9uZUZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuc3BsaWNlKGl0ZW0uaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBfLmdldChjbG9uZUZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgaXRlbS5pbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9uZUZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmd1aWQgPT09IGNsb25lRmllbGQuZ3VpZCkge1xyXG4gICAgICAgIGl0ZW0uZmllbGRBcnJheSA9IGNsb25lRmllbGQuZmllbGRBcnJheTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkR3JvdXBcIikpIHtcclxuICAgICAgICBkZWxldGUgaXRlbS5maWVsZEdyb3VwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbG9uZUZpZWxkcztcclxuICB9XHJcblxyXG4gIGdyb3VwVHJhbnNmZXJMaW5lVG9Gb3JtKFxyXG4gICAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdcclxuICApIHtcclxuICAgIHRoaXMuY2xlYXJHcm91cENoZWNrZWQoZmllbGQpO1xyXG4gICAgbGV0IGNsb25lRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gY2xvbmUoZm9ybV9maWVsZHMpO1xyXG4gICAgbGV0IGNsb25lRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gY2xvbmUoZmllbGQpO1xyXG5cclxuICAgIGxldCBvYmogPSB0aGlzLmdldEZpZWxkTGluZUluZm8oKTtcclxuXHJcbiAgICBsZXQgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdID0gdGhpcy5nZXRHcm91cENoZWNrRmllbGRzKGNsb25lRmllbGQpO1xyXG4gICAgaWYgKCFjbG9uZUZpZWxkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChcclxuICAgICAgIWNsb25lRmllbGQuZmllbGRBcnJheSB8fFxyXG4gICAgICAhY2xvbmVGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgfHxcclxuICAgICAgY2xvbmVGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAubGVuZ3RoIDwgMVxyXG4gICAgKSB7XHJcbiAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIsIFtdKTtcclxuICAgIH1cclxuICAgIGlmIChjaGVja2VkRmllbGRzICYmIGNoZWNrZWRGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgY2hlY2tlZEZpZWxkID0gY2hlY2tlZEZpZWxkc1tjaGVja2VkRmllbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBfLmdldChjaGVja2VkRmllbGQsIFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuc3BsaWNlKFxyXG4gICAgICAgIGNoZWNrZWRGaWVsZC5pbmRleCArIDEsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBvYmpcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIGNsb25lRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZ3VpZCA9PT0gY2xvbmVGaWVsZC5ndWlkKSB7XHJcbiAgICAgICAgaXRlbS5maWVsZEFycmF5ID0gY2xvbmVGaWVsZC5maWVsZEFycmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgIGRlbGV0ZSBpdGVtLmZpZWxkR3JvdXA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBUcmFuc2ZlclJlbWFya1RvRm9ybShcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNsZWFyR3JvdXBDaGVja2VkKGZpZWxkKTtcclxuICAgIGxldCBjbG9uZUZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IGNsb25lKGZvcm1fZmllbGRzKTtcclxuICAgIGxldCBjbG9uZUZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IGNsb25lKGZpZWxkKTtcclxuXHJcbiAgICBsZXQgb2JqID0gdGhpcy5nZXRGaWVsZFJlbWFya0luZm8oKTtcclxuXHJcbiAgICBsZXQgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdID0gdGhpcy5nZXRHcm91cENoZWNrRmllbGRzKGNsb25lRmllbGQpO1xyXG4gICAgaWYgKCFjbG9uZUZpZWxkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChcclxuICAgICAgIWNsb25lRmllbGQuZmllbGRBcnJheSB8fFxyXG4gICAgICAhY2xvbmVGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgfHxcclxuICAgICAgY2xvbmVGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAubGVuZ3RoIDwgMVxyXG4gICAgKSB7XHJcbiAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIsIFtdKTtcclxuICAgIH1cclxuICAgIGlmIChjaGVja2VkRmllbGRzICYmIGNoZWNrZWRGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgY2hlY2tlZEZpZWxkID0gY2hlY2tlZEZpZWxkc1tjaGVja2VkRmllbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBfLmdldChjaGVja2VkRmllbGQsIFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuc3BsaWNlKFxyXG4gICAgICAgIGNoZWNrZWRGaWVsZC5pbmRleCArIDEsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBvYmpcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIGNsb25lRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZ3VpZCA9PT0gY2xvbmVGaWVsZC5ndWlkKSB7XHJcbiAgICAgICAgaXRlbS5maWVsZEFycmF5ID0gY2xvbmVGaWVsZC5maWVsZEFycmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgIGRlbGV0ZSBpdGVtLmZpZWxkR3JvdXA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBUcmFuc2ZlclNlbGVjdEZpZWxkVG9Gb3JtKFxyXG4gICAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBncm91cEZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyxcclxuICAgIGNoZWNrZWRGaWVsZHM6IElDaGVja2VkRmllbGRbXSxcclxuICAgIGJ1c2luZXNzVGFibGU6IElCdXNpbmVzc1RhYmxlLFxyXG4gICAgb2JqOiBhbnlcclxuICApIHtcclxuICAgIGxldCBjbG9uZUZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IGNsb25lKGZvcm1fZmllbGRzKTtcclxuICAgIGxldCBjbG9uZUdyb3VwRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gY2xvbmUoZ3JvdXBGaWVsZCk7XHJcbiAgICBsZXQgc2VsZWN0RmllbGRzOiBhbnkgPSBbXTtcclxuICAgIGxldCB0YWJsZUZpZWxkczogVlhUYWJsZUZpZWxkQ29uZmlnW10gPSBbXTtcclxuICAgIGxldCBhZGRGaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBbXTtcclxuICAgIGxldCBiZWdpbkluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKG9ialtpdGVtXSkge1xyXG4gICAgICAgIHNlbGVjdEZpZWxkcy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghc2VsZWN0RmllbGRzIHx8IHNlbGVjdEZpZWxkcy5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdGFibGVGaWVsZHMgPSB0aGlzLmdldFRhYmxlRmlsZWRMaXN0KGJ1c2luZXNzVGFibGUpO1xyXG5cclxuICAgIGlmICghdGFibGVGaWVsZHMgfHwgdGFibGVGaWVsZHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChjbG9uZUZpZWxkcyAmJiBjbG9uZUZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGJlZ2luSW5kZXggPSBjbG9uZUZpZWxkcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAhY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXkgfHxcclxuICAgICAgIWNsb25lR3JvdXBGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgfHxcclxuICAgICAgY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5sZW5ndGggPCAxXHJcbiAgICApIHtcclxuICAgICAgXy5nZXQoY2xvbmVHcm91cEZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmllbGRzLmZvckVhY2goKGtleTogYW55KSA9PiB7XHJcbiAgICAgIGxldCB0YWJsZUZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcgPSB0aGlzLmdldFRhYmxlRmlsZWRJbmZvKFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICB0YWJsZUZpZWxkc1xyXG4gICAgICApO1xyXG4gICAgICBpZiAodGFibGVGaWVsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGZvcm1GaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSB0aGlzLnRvRm9ybUZpZWxkLmdldFZYRmlsZWRGdW5jdGlvbihcclxuICAgICAgICAgIHRhYmxlRmllbGRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChmb3JtRmllbGQgJiYgZm9ybUZpZWxkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFkZEZpZWxkcy5wdXNoKGZvcm1GaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2hlY2tlZEZpZWxkcyAmJiBjaGVja2VkRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGNoZWNrZWRGaWVsZCA9IGNoZWNrZWRGaWVsZHNbY2hlY2tlZEZpZWxkcy5sZW5ndGggLSAxXTtcclxuICAgICAgYmVnaW5JbmRleCA9IGNoZWNrZWRGaWVsZC5pbmRleCArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgXy5nZXQoY2xvbmVHcm91cEZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5zcGxpY2UoXHJcbiAgICAgICAgYmVnaW5JbmRleCArIGluZGV4LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBjbG9uZUZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmd1aWQgPT09IGNsb25lR3JvdXBGaWVsZC5ndWlkKSB7XHJcbiAgICAgICAgaXRlbS5maWVsZEFycmF5ID0gY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJmaWVsZEdyb3VwXCIpKSB7XHJcbiAgICAgICAgZGVsZXRlIGl0ZW0uZmllbGRHcm91cDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVGaWVsZHM7XHJcbiAgfVxyXG5cclxuICBncm91cFRyYW5zZmVyRGVsZXRlRm9ybShcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgZ3JvdXBGaWVsZDogVlhGb3JtRmllbGRDb25maWdcclxuICApIHtcclxuICAgIGxldCBjbG9uZUZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IGNsb25lKGZvcm1fZmllbGRzKTtcclxuICAgIGxldCBjbG9uZUdyb3VwRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gY2xvbmUoZ3JvdXBGaWVsZCk7XHJcblxyXG4gICAgbGV0IGNoZWNrZWRGaWVsZHM6IElDaGVja2VkRmllbGRbXSA9IHRoaXMuZ2V0R3JvdXBDaGVja0ZpZWxkcyhcclxuICAgICAgY2xvbmVHcm91cEZpZWxkXHJcbiAgICApO1xyXG4gICAgaWYgKCFjaGVja2VkRmllbGRzIHx8IGNoZWNrZWRGaWVsZHMgPT0gbnVsbCB8fCBjaGVja2VkRmllbGRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICAhY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXkgfHxcclxuICAgICAgIWNsb25lR3JvdXBGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgfHxcclxuICAgICAgY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5sZW5ndGggPCAxXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrZWRGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgIF8uZ2V0KGNsb25lR3JvdXBGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuZm9yRWFjaChcclxuICAgICAgICAoZmllbGQ6IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZmllbGQua2V5ID09PSBpdGVtLmZpZWxkLmtleSAmJlxyXG4gICAgICAgICAgICBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuaXNidXRpbnRpbiAhPSB0cnVlXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvbmVGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5ndWlkID09PSBjbG9uZUdyb3VwRmllbGQuZ3VpZCkge1xyXG4gICAgICAgIGl0ZW0uZmllbGRBcnJheSA9IGNsb25lR3JvdXBGaWVsZC5maWVsZEFycmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgIGRlbGV0ZSBpdGVtLmZpZWxkR3JvdXA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZWRpdEZvcm1GaWVsZEluZm8oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIG5ld19maWVsZDogVlhGb3JtRmllbGRDb25maWdcclxuICApIHtcclxuICAgIGlmICghZm9ybV9maWVsZHMpIHJldHVybjtcclxuICAgIGxldCBjbG9uZUZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IGNsb25lKGZvcm1fZmllbGRzKTtcclxuICAgIGxldCBncm91cEtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIGNsb25lRmllbGRzLmZvckVhY2goKGZpZWxkOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwicmVwZWF0XCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBmaWVsZC5maWVsZEFycmF5ICYmXHJcbiAgICAgICAgICBmaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgJiZcclxuICAgICAgICAgIGZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5sZW5ndGggPiAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBfLmdldChmaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuZm9yRWFjaChcclxuICAgICAgICAgICAgKGdyb3VwRmllbGQ6IGFueSwgZ3JvdXBJbmRleDogYW55LCBncm91cE9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGdyb3VwRmllbGQua2V5ID09PSBuZXdfZmllbGQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBncm91cEtleSA9IGZpZWxkLmtleTtcclxuICAgICAgICAgICAgICAgIGdyb3VwT2JqZWN0LnNwbGljZShncm91cEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwT2JqZWN0LnNwbGljZShncm91cEluZGV4LCAwLCBuZXdfZmllbGQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLmtleSA9PT0gbmV3X2ZpZWxkLmtleSkge1xyXG4gICAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAwLCBuZXdfZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZ3JvdXBLZXkgIT0gbnVsbCAmJiBncm91cEtleSAhPSBcIlwiKSB7XHJcbiAgICAgIGNsb25lRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkR3JvdXBcIikpIHtcclxuICAgICAgICAgIGRlbGV0ZSBpdGVtLmZpZWxkR3JvdXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwS2V5OiBncm91cEtleSxcclxuICAgICAgZm9ybUZpbGVkczogY2xvbmVGaWVsZHNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkZWxldGVGb3JtRmllbGRJbmZvKFxyXG4gICAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdcclxuICApIHtcclxuICAgIGxldCBjbG9uZUZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IGNsb25lKGZvcm1fZmllbGRzKTtcclxuICAgIGxldCBjbG9uZUZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IGNsb25lKGZpZWxkKTtcclxuICAgIGxldCBncm91cEtleTogYW55O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgY2xvbmVGaWVsZHMgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGNsb25lRmllbGRzICE9IG51bGwgJiZcclxuICAgICAgY2xvbmVGaWVsZCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgY2xvbmVGaWVsZCAhPSBudWxsICYmXHJcbiAgICAgIGNsb25lRmllbGRzLmxlbmd0aCA+IDBcclxuICAgICkge1xyXG4gICAgICBpZiAoY2xvbmVGaWVsZC5rZXkgIT0gdW5kZWZpbmVkICYmIGNsb25lRmllbGQua2V5ICE9IG51bGwpIHtcclxuICAgICAgICBjbG9uZUZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5rZXkgPT09IGNsb25lRmllbGQua2V5KSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpdGVtLmZpZWxkQXJyYXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheS5maWVsZEdyb3VwICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBpdGVtLmZpZWxkQXJyYXkuZmllbGRHcm91cCAhPSBudWxsXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMuZGVsZXRlR3JvdXBGb3JtRmllbGRJbmZvKGl0ZW0sIGZpZWxkKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSBudWxsICYmIHJlcyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgZ3JvdXBLZXkgPSByZXM7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJmaWVsZEdyb3VwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5maWVsZEdyb3VwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXBLZXk6IGdyb3VwS2V5LFxyXG4gICAgICBmb3JtRmlsZWRzOiBjbG9uZUZpZWxkc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlR3JvdXBGb3JtRmllbGRJbmZvKFxyXG4gICAgZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZyxcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ1xyXG4gICkge1xyXG4gICAgbGV0IGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gW107XHJcbiAgICBsZXQgZ3JvdXBLZXk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAoXHJcbiAgICAgIGZpZWxkcy5maWVsZEFycmF5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBmaWVsZHMuZmllbGRBcnJheSAhPSBudWxsICYmXHJcbiAgICAgIGZpZWxkcy5maWVsZEFycmF5LmZpZWxkR3JvdXAgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGZpZWxkcy5maWVsZEFycmF5LmZpZWxkR3JvdXAgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIGZvcm1fZmllbGRzID0gZmllbGRzLmZpZWxkQXJyYXkuZmllbGRHcm91cDtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBmb3JtX2ZpZWxkcyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICBmb3JtX2ZpZWxkcyAhPSBudWxsICYmXHJcbiAgICAgICAgZmllbGQgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgZmllbGQgIT0gbnVsbCAmJlxyXG4gICAgICAgIGZvcm1fZmllbGRzLmxlbmd0aCA+IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLmtleSAhPSB1bmRlZmluZWQgJiYgZmllbGQua2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgIGZvcm1fZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBmaWVsZC5rZXkpIHtcclxuICAgICAgICAgICAgICBpZiAoZmllbGRzLmtleSAhPSB1bmRlZmluZWQgJiYgZmllbGRzLmtleSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBncm91cEtleSA9IGZpZWxkcy5rZXk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyb3VwS2V5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZExpbmVJbmZvKCkge1xyXG4gICAgbGV0IG9iajogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICBndWlkOiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBzdGF0dXM6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZFJlbWFya0luZm8oKSB7XHJcbiAgICBsZXQgb2JqOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIGd1aWQ6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJodG1sXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIueJh+auteaWh+acrOaPj+i/sFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkR3JvdXBJbmZvKCkge1xyXG4gICAgbGV0IG9iajogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICBndWlkOiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwicmVwZWF0XCIsXHJcbiAgICAgIGZpZWxkQXJyYXk6IHtcclxuICAgICAgICBmaWVsZEdyb3VwOiBbXVxyXG4gICAgICB9LFxyXG4gICAgICB0YWJsZWNvZGU6IFwiXCIsXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICAvL+a4heepuumAieS4rVxyXG4gIHByaXZhdGUgY2xlYXJHcm91cENoZWNrZWQoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFmaWVsZCB8fFxyXG4gICAgICAhZmllbGQuZmllbGRBcnJheSB8fFxyXG4gICAgICAhZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwIHx8XHJcbiAgICAgICFmaWVsZC5maWVsZEdyb3VwXHJcbiAgICApXHJcbiAgICAgIHJldHVybjtcclxuICAgIGZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcclxuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8v6I635Y+W6YCJ5LitXHJcbiAgcHJpdmF0ZSBnZXRHcm91cENoZWNrRmllbGRzKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgbGV0IGNoZWNrZWRGaWVsZDogSUNoZWNrZWRGaWVsZFtdID0gW107XHJcbiAgICBpZiAoXHJcbiAgICAgICFmaWVsZCB8fFxyXG4gICAgICAhZmllbGQuZmllbGRBcnJheSB8fFxyXG4gICAgICAhZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwIHx8XHJcbiAgICAgICFmaWVsZC5maWVsZEdyb3VwIHx8XHJcbiAgICAgIGZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoIDwgMVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBjaGVja2VkRmllbGQ7XHJcbiAgICB9XHJcbiAgICBfLmdldChmaWVsZCwgXCJmaWVsZEdyb3VwWzBdLmZpZWxkR3JvdXBcIikuZm9yRWFjaChcclxuICAgICAgKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgICAgIGNoZWNrZWRGaWVsZC5wdXNoKHsgaW5kZXg6IGluZGV4LCBmaWVsZDogaXRlbSB9KTtcclxuICAgICAgICAgIF8uZ2V0KGZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKVtpbmRleF0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRGaWVsZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFibGVGaWxlZExpc3QoYnVzaW5lc3NUYWJsZTogSUJ1c2luZXNzVGFibGUpIHtcclxuICAgIGxldCB0YWJsZUZpZWxkczogVlhUYWJsZUZpZWxkQ29uZmlnW10gPSBbXTtcclxuICAgIGlmIChidXNpbmVzc1RhYmxlKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBidXNpbmVzc1RhYmxlLnByaW1hcnkgJiZcclxuICAgICAgICBidXNpbmVzc1RhYmxlLnByaW1hcnkgIT0gbnVsbCAmJlxyXG4gICAgICAgIGJ1c2luZXNzVGFibGUucHJpbWFyeS50YWJsZWZpZWxkcyAmJlxyXG4gICAgICAgIGJ1c2luZXNzVGFibGUucHJpbWFyeS50YWJsZWZpZWxkcyAhPSBudWxsICYmXHJcbiAgICAgICAgYnVzaW5lc3NUYWJsZS5wcmltYXJ5LnRhYmxlZmllbGRzLmxlbmd0aCA+IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGJ1c2luZXNzVGFibGUucHJpbWFyeS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgICAgdGFibGVGaWVsZHMgPSB0YWJsZUZpZWxkcy5jb25jYXQoYnVzaW5lc3NUYWJsZS5wcmltYXJ5LnRhYmxlZmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJ1c2luZXNzVGFibGUuY2hpbGQgJiYgYnVzaW5lc3NUYWJsZS5jaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5zaW5nbGUgJiZcclxuICAgICAgICAgIGJ1c2luZXNzVGFibGUuY2hpbGQuc2luZ2xlICE9IG51bGwgJiZcclxuICAgICAgICAgIGJ1c2luZXNzVGFibGUuY2hpbGQuc2luZ2xlLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGJ1c2luZXNzVGFibGUuY2hpbGQuc2luZ2xlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgICAgICAgIHRhYmxlRmllbGRzID0gdGFibGVGaWVsZHMuY29uY2F0KGl0ZW0udGFibGVmaWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5tdWx0aXBsZSAmJlxyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5tdWx0aXBsZSAhPSBudWxsICYmXHJcbiAgICAgICAgICBidXNpbmVzc1RhYmxlLmNoaWxkLm11bHRpcGxlLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGJ1c2luZXNzVGFibGUuY2hpbGQubXVsdGlwbGUuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnRhYmxlZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgdGFibGVGaWVsZHMgPSB0YWJsZUZpZWxkcy5jb25jYXQoaXRlbS50YWJsZWZpZWxkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhYmxlRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYWJsZUZpbGVkSW5mbyhrZXk6IHN0cmluZywgdGFibGVGaWVsZHM6IFZYVGFibGVGaWVsZENvbmZpZ1tdKSB7XHJcbiAgICBsZXQgcmVzVmFsdWU6IFZYVGFibGVGaWVsZENvbmZpZyA9IHt9O1xyXG4gICAgaWYgKGtleSAmJiB0YWJsZUZpZWxkcyAmJiB0YWJsZUZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBmaWx0ZXJGaWxlZCA9IHRhYmxlRmllbGRzLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1bXCJmaWVsZGNvZGVcIl0gPT09IGtleTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmaWx0ZXJGaWxlZCAmJiBmaWx0ZXJGaWxlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlckZpbGVkWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNWYWx1ZTtcclxuICB9XHJcbn1cclxuIl19