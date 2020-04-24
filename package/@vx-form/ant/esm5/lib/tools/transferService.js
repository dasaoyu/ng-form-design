/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Guid, clone } from "@vx-form/core";
import { VXToFormFieldService } from "./formFieldService";
import * as _ from "lodash";
var VXTransferService = /** @class */ (function () {
    function VXTransferService(toFormField) {
        this.toFormField = toFormField;
    }
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @return {?}
     */
    VXTransferService.prototype.transferLineToForm = /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @return {?}
     */
    function (form_fields, checkedFields) {
        /** @type {?} */
        var obj = this.getFieldLineInfo();
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
            form_fields.splice(checkedField.index + 1, 0, obj);
        }
        else {
            form_fields.push(obj);
        }
    };
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @return {?}
     */
    VXTransferService.prototype.transferLabelToForm = /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @return {?}
     */
    function (form_fields, checkedFields) {
        /** @type {?} */
        var obj = this.getFieldRemarkInfo();
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
            form_fields.splice(checkedField.index + 1, 0, obj);
        }
        else {
            form_fields.push(obj);
        }
    };
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @param {?} tableCode
     * @return {?}
     */
    VXTransferService.prototype.transferGroupToForm = /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @param {?} tableCode
     * @return {?}
     */
    function (form_fields, checkedFields, tableCode) {
        /** @type {?} */
        var obj = this.getFieldGroupInfo();
        obj.tablecode = tableCode;
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
            form_fields.splice(checkedField.index + 1, 0, obj);
        }
        else {
            form_fields.push(obj);
        }
    };
    /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @param {?} businessTable
     * @param {?} obj
     * @return {?}
     */
    VXTransferService.prototype.transferSelectFieldToForm = /**
     * @param {?} form_fields
     * @param {?} checkedFields
     * @param {?} businessTable
     * @param {?} obj
     * @return {?}
     */
    function (form_fields, checkedFields, businessTable, obj) {
        var _this = this;
        /** @type {?} */
        var selectFields = [];
        /** @type {?} */
        var tableFields = [];
        /** @type {?} */
        var addFields = [];
        /** @type {?} */
        var beginIndex = 0;
        Object.getOwnPropertyNames(obj).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
        function (key) {
            /** @type {?} */
            var tableField = _this.getTableFiledInfo(key, tableFields);
            if (tableField != null) {
                /** @type {?} */
                var formField = _this.toFormField.getVXFiledFunction(tableField);
                if (formField && formField != null) {
                    addFields.push(formField);
                }
            }
        }));
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
            beginIndex = checkedField.index + 1;
        }
        addFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (item, index, object) {
            form_fields.splice(beginIndex + index, 0, item);
        }));
    };
    /**
     * @param {?} form_fields
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    VXTransferService.prototype.groupFieldMoveUpOrDown = /**
     * @param {?} form_fields
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (form_fields, field, type) {
        this.clearGroupChecked(field);
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var cloneField = clone(field);
        /** @type {?} */
        var checkedFields = this.getGroupCheckFields(cloneField);
        if (checkedFields) {
            if (type === "up") {
                checkedFields.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
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
                function (item) {
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
        function (item, index, object) {
            if (item.guid === cloneField.guid) {
                item.fieldArray = cloneField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    };
    /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    VXTransferService.prototype.groupTransferLineToForm = /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    function (form_fields, field) {
        this.clearGroupChecked(field);
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var cloneField = clone(field);
        /** @type {?} */
        var obj = this.getFieldLineInfo();
        /** @type {?} */
        var checkedFields = this.getGroupCheckFields(cloneField);
        if (!cloneField)
            return null;
        if (!cloneField.fieldArray ||
            !cloneField.fieldArray.fieldGroup ||
            cloneField.fieldArray.fieldGroup.length < 1) {
            _.get(cloneField, "fieldArray.fieldGroup", []);
        }
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
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
        function (item, index, object) {
            if (item.guid === cloneField.guid) {
                item.fieldArray = cloneField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    };
    /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    VXTransferService.prototype.groupTransferRemarkToForm = /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    function (form_fields, field) {
        this.clearGroupChecked(field);
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var cloneField = clone(field);
        /** @type {?} */
        var obj = this.getFieldRemarkInfo();
        /** @type {?} */
        var checkedFields = this.getGroupCheckFields(cloneField);
        if (!cloneField)
            return null;
        if (!cloneField.fieldArray ||
            !cloneField.fieldArray.fieldGroup ||
            cloneField.fieldArray.fieldGroup.length < 1) {
            _.get(cloneField, "fieldArray.fieldGroup", []);
        }
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
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
        function (item, index, object) {
            if (item.guid === cloneField.guid) {
                item.fieldArray = cloneField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    };
    /**
     * @param {?} form_fields
     * @param {?} groupField
     * @param {?} checkedFields
     * @param {?} businessTable
     * @param {?} obj
     * @return {?}
     */
    VXTransferService.prototype.groupTransferSelectFieldToForm = /**
     * @param {?} form_fields
     * @param {?} groupField
     * @param {?} checkedFields
     * @param {?} businessTable
     * @param {?} obj
     * @return {?}
     */
    function (form_fields, groupField, checkedFields, businessTable, obj) {
        var _this = this;
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var cloneGroupField = clone(groupField);
        /** @type {?} */
        var selectFields = [];
        /** @type {?} */
        var tableFields = [];
        /** @type {?} */
        var addFields = [];
        /** @type {?} */
        var beginIndex = 0;
        Object.getOwnPropertyNames(obj).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
        function (key) {
            /** @type {?} */
            var tableField = _this.getTableFiledInfo(key, tableFields);
            if (tableField != null) {
                /** @type {?} */
                var formField = _this.toFormField.getVXFiledFunction(tableField);
                if (formField && formField != null) {
                    addFields.push(formField);
                }
            }
        }));
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            var checkedField = checkedFields[checkedFields.length - 1];
            beginIndex = checkedField.index + 1;
        }
        addFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (item, index, object) {
            _.get(cloneGroupField, "fieldArray.fieldGroup").splice(beginIndex + index, 0, item);
        }));
        cloneFields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (item, index, object) {
            if (item.guid === cloneGroupField.guid) {
                item.fieldArray = cloneGroupField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    };
    /**
     * @param {?} form_fields
     * @param {?} groupField
     * @return {?}
     */
    VXTransferService.prototype.groupTransferDeleteForm = /**
     * @param {?} form_fields
     * @param {?} groupField
     * @return {?}
     */
    function (form_fields, groupField) {
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var cloneGroupField = clone(groupField);
        /** @type {?} */
        var checkedFields = this.getGroupCheckFields(cloneGroupField);
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
        function (item) {
            _.get(cloneGroupField, "fieldArray.fieldGroup").forEach((/**
             * @param {?} field
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            function (field, index, object) {
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
        function (item, index, object) {
            if (item.guid === cloneGroupField.guid) {
                item.fieldArray = cloneGroupField.fieldArray;
            }
            if (item.hasOwnProperty("fieldGroup")) {
                delete item.fieldGroup;
            }
        }));
        return cloneFields;
    };
    /**
     * @param {?} form_fields
     * @param {?} new_field
     * @return {?}
     */
    VXTransferService.prototype.editFormFieldInfo = /**
     * @param {?} form_fields
     * @param {?} new_field
     * @return {?}
     */
    function (form_fields, new_field) {
        if (!form_fields)
            return;
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var groupKey = "";
        cloneFields.forEach((/**
         * @param {?} field
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (field, index, object) {
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
                    function (groupField, groupIndex, groupObject) {
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
            function (item, index, object) {
                if (item.hasOwnProperty("fieldGroup")) {
                    delete item.fieldGroup;
                }
            }));
        }
        return {
            groupKey: groupKey,
            formFileds: cloneFields
        };
    };
    /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    VXTransferService.prototype.deleteFormFieldInfo = /**
     * @param {?} form_fields
     * @param {?} field
     * @return {?}
     */
    function (form_fields, field) {
        var _this = this;
        /** @type {?} */
        var cloneFields = clone(form_fields);
        /** @type {?} */
        var cloneField = clone(field);
        /** @type {?} */
        var groupKey;
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
                function (item, index, object) {
                    if (item.key === cloneField.key) {
                        object.splice(index, 1);
                    }
                    if (item.fieldArray != undefined &&
                        item.fieldArray != null &&
                        item.fieldArray.fieldGroup != undefined &&
                        item.fieldArray.fieldGroup != null) {
                        /** @type {?} */
                        var res = _this.deleteGroupFormFieldInfo(item, field);
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
    };
    /**
     * @private
     * @param {?} fields
     * @param {?} field
     * @return {?}
     */
    VXTransferService.prototype.deleteGroupFormFieldInfo = /**
     * @private
     * @param {?} fields
     * @param {?} field
     * @return {?}
     */
    function (fields, field) {
        /** @type {?} */
        var form_fields = [];
        /** @type {?} */
        var groupKey = "";
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
                    function (item, index, object) {
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
    };
    /**
     * @private
     * @return {?}
     */
    VXTransferService.prototype.getFieldLineInfo = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var obj = {
            key: Guid.create()["value"],
            guid: Guid.create()["value"],
            type: "line",
            status: 1
        };
        return obj;
    };
    /**
     * @private
     * @return {?}
     */
    VXTransferService.prototype.getFieldRemarkInfo = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var obj = {
            key: Guid.create()["value"],
            guid: Guid.create()["value"],
            type: "html",
            templateOptions: {
                description: "片段文本描述"
            },
            status: 1
        };
        return obj;
    };
    /**
     * @private
     * @return {?}
     */
    VXTransferService.prototype.getFieldGroupInfo = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var obj = {
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
    };
    //清空选中
    //清空选中
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    VXTransferService.prototype.clearGroupChecked = 
    //清空选中
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
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
        function (item, index) {
            item.checked = false;
        }));
    };
    //获取选中
    //获取选中
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    VXTransferService.prototype.getGroupCheckFields = 
    //获取选中
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var checkedField = [];
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
        function (item, index) {
            if (item.checked) {
                checkedField.push({ index: index, field: item });
                _.get(field, "fieldArray.fieldGroup")[index].checked = true;
            }
        }));
        return checkedField;
    };
    /**
     * @private
     * @param {?} businessTable
     * @return {?}
     */
    VXTransferService.prototype.getTableFiledList = /**
     * @private
     * @param {?} businessTable
     * @return {?}
     */
    function (businessTable) {
        /** @type {?} */
        var tableFields = [];
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
                    function (item) {
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
                    function (item) {
                        if (item.tablefields) {
                            tableFields = tableFields.concat(item.tablefields);
                        }
                    }));
                }
            }
        }
        return tableFields;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} tableFields
     * @return {?}
     */
    VXTransferService.prototype.getTableFiledInfo = /**
     * @private
     * @param {?} key
     * @param {?} tableFields
     * @return {?}
     */
    function (key, tableFields) {
        /** @type {?} */
        var resValue = {};
        if (key && tableFields && tableFields.length > 0) {
            /** @type {?} */
            var filterFiled = tableFields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item["fieldcode"] === key;
            }));
            if (filterFiled && filterFiled.length > 0) {
                return filterFiled[0];
            }
            return resValue;
        }
        return resValue;
    };
    VXTransferService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXTransferService.ctorParameters = function () { return [
        { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
    ]; };
    return VXTransferService;
}());
export { VXTransferService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.toFormField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3Rvb2xzL3RyYW5zZmVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUdMLElBQUksRUFDSixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFMUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUI7SUFFRSwyQkFFVSxXQUFpQztRQUFqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFDeEMsQ0FBQzs7Ozs7O0lBRUosOENBQWtCOzs7OztJQUFsQixVQUNFLFdBQWdDLEVBQ2hDLGFBQThCOztZQUUxQixHQUFHLEdBQXNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtRQUNwRCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3pDLFlBQVksR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDMUQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7Ozs7SUFFRCwrQ0FBbUI7Ozs7O0lBQW5CLFVBQ0UsV0FBZ0MsRUFDaEMsYUFBOEI7O1lBRTFCLEdBQUcsR0FBc0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1FBQ3RELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDekMsWUFBWSxHQUFHLGFBQWEs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QVEsR0FBdUIsRUFBRTtRQUNyQyxJQUFJLEdBQUcsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUM1QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLElBQVM7Z0JBQzdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNuQyxDQUFDLEVBQUM7WUFDRixJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekMsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7WUFDRCxPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQXRsQkYsVUFBVTs7OztnQkFKRixvQkFBb0IsdUJBT3hCLE1BQU0sU0FBQyxvQkFBb0I7O0lBb2xCaEMsd0JBQUM7Q0FBQSxBQXZsQkQsSUF1bEJDO1NBdGxCWSxpQkFBaUI7Ozs7OztJQUUxQix3Q0FDeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIFZYVGFibGVGaWVsZENvbmZpZyxcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBHdWlkLFxyXG4gIGNsb25lXHJcbn0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUxheW91dCwgSUNoZWNrZWRGaWVsZCwgSUJ1c2luZXNzVGFibGUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IFZYVG9Gb3JtRmllbGRTZXJ2aWNlIH0gZnJvbSBcIi4vZm9ybUZpZWxkU2VydmljZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWFRyYW5zZmVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KFZYVG9Gb3JtRmllbGRTZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSB0b0Zvcm1GaWVsZDogVlhUb0Zvcm1GaWVsZFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHRyYW5zZmVyTGluZVRvRm9ybShcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdXHJcbiAgKSB7XHJcbiAgICBsZXQgb2JqOiBWWEZvcm1GaWVsZENvbmZpZyA9IHRoaXMuZ2V0RmllbGRMaW5lSW5mbygpO1xyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMgJiYgY2hlY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGVja2VkRmllbGQgPSBjaGVja2VkRmllbGRzW2NoZWNrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGZvcm1fZmllbGRzLnNwbGljZShjaGVja2VkRmllbGQuaW5kZXggKyAxLCAwLCBvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybV9maWVsZHMucHVzaChvYmopO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmZXJMYWJlbFRvRm9ybShcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdXHJcbiAgKSB7XHJcbiAgICBsZXQgb2JqOiBWWEZvcm1GaWVsZENvbmZpZyA9IHRoaXMuZ2V0RmllbGRSZW1hcmtJbmZvKCk7XHJcbiAgICBpZiAoY2hlY2tlZEZpZWxkcyAmJiBjaGVja2VkRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGNoZWNrZWRGaWVsZCA9IGNoZWNrZWRGaWVsZHNbY2hlY2tlZEZpZWxkcy5sZW5ndGggLSAxXTtcclxuICAgICAgZm9ybV9maWVsZHMuc3BsaWNlKGNoZWNrZWRGaWVsZC5pbmRleCArIDEsIDAsIG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtX2ZpZWxkcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zlckdyb3VwVG9Gb3JtKFxyXG4gICAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBjaGVja2VkRmllbGRzOiBJQ2hlY2tlZEZpZWxkW10sXHJcbiAgICB0YWJsZUNvZGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgbGV0IG9iajogVlhGb3JtRmllbGRDb25maWcgPSB0aGlzLmdldEZpZWxkR3JvdXBJbmZvKCk7XHJcbiAgICBvYmoudGFibGVjb2RlID0gdGFibGVDb2RlO1xyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMgJiYgY2hlY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGVja2VkRmllbGQgPSBjaGVja2VkRmllbGRzW2NoZWNrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGZvcm1fZmllbGRzLnNwbGljZShjaGVja2VkRmllbGQuaW5kZXggKyAxLCAwLCBvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybV9maWVsZHMucHVzaChvYmopO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmZXJTZWxlY3RGaWVsZFRvRm9ybShcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdLFxyXG4gICAgYnVzaW5lc3NUYWJsZTogSUJ1c2luZXNzVGFibGUsXHJcbiAgICBvYmo6IGFueVxyXG4gICkge1xyXG4gICAgbGV0IHNlbGVjdEZpZWxkczogYW55ID0gW107XHJcbiAgICBsZXQgdGFibGVGaWVsZHM6IFZYVGFibGVGaWVsZENvbmZpZ1tdID0gW107XHJcbiAgICBsZXQgYWRkRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gW107XHJcbiAgICBsZXQgYmVnaW5JbmRleDogbnVtYmVyID0gMDtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKG9ialtpdGVtXSkge1xyXG4gICAgICAgIHNlbGVjdEZpZWxkcy5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghc2VsZWN0RmllbGRzIHx8IHNlbGVjdEZpZWxkcy5sZW5ndGggPCAxKSByZXR1cm47IFxyXG4gICAgdGFibGVGaWVsZHMgPSB0aGlzLmdldFRhYmxlRmlsZWRMaXN0KGJ1c2luZXNzVGFibGUpO1xyXG5cclxuICAgIGlmICghdGFibGVGaWVsZHMgfHwgdGFibGVGaWVsZHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChmb3JtX2ZpZWxkcyAmJiBmb3JtX2ZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGJlZ2luSW5kZXggPSBmb3JtX2ZpZWxkcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmllbGRzLmZvckVhY2goKGtleTogYW55KSA9PiB7XHJcbiAgICAgIGxldCB0YWJsZUZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcgPSB0aGlzLmdldFRhYmxlRmlsZWRJbmZvKFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICB0YWJsZUZpZWxkc1xyXG4gICAgICApO1xyXG4gICAgICBpZiAodGFibGVGaWVsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGZvcm1GaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSB0aGlzLnRvRm9ybUZpZWxkLmdldFZYRmlsZWRGdW5jdGlvbihcclxuICAgICAgICAgIHRhYmxlRmllbGRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChmb3JtRmllbGQgJiYgZm9ybUZpZWxkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFkZEZpZWxkcy5wdXNoKGZvcm1GaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2hlY2tlZEZpZWxkcyAmJiBjaGVja2VkRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGNoZWNrZWRGaWVsZCA9IGNoZWNrZWRGaWVsZHNbY2hlY2tlZEZpZWxkcy5sZW5ndGggLSAxXTtcclxuICAgICAgYmVnaW5JbmRleCA9IGNoZWNrZWRGaWVsZC5pbmRleCArIDE7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICBmb3JtX2ZpZWxkcy5zcGxpY2UoYmVnaW5JbmRleCArIGluZGV4LCAwLCBpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBGaWVsZE1vdmVVcE9yRG93bihcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gICAgdHlwZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNsZWFyR3JvdXBDaGVja2VkKGZpZWxkKTtcclxuICAgIGxldCBjbG9uZUZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IGNsb25lKGZvcm1fZmllbGRzKTtcclxuICAgIGxldCBjbG9uZUZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IGNsb25lKGZpZWxkKTtcclxuXHJcbiAgICBsZXQgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdID0gdGhpcy5nZXRHcm91cENoZWNrRmllbGRzKGNsb25lRmllbGQpO1xyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMpIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwidXBcIikge1xyXG4gICAgICAgIGNoZWNrZWRGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuc3BsaWNlKGl0ZW0uaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBfLmdldChjbG9uZUZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgaXRlbS5pbmRleCAtIDEsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICBpdGVtLmZpZWxkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICBjaGVja2VkRmllbGRzLnJldmVyc2UoKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgaXRlbS5pbmRleCA8XHJcbiAgICAgICAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBfLmdldChjbG9uZUZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5zcGxpY2UoaXRlbS5pbmRleCwgMSk7XHJcbiAgICAgICAgICAgIF8uZ2V0KGNsb25lRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLnNwbGljZShcclxuICAgICAgICAgICAgICBpdGVtLmluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIGl0ZW0uZmllbGRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb25lRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZ3VpZCA9PT0gY2xvbmVGaWVsZC5ndWlkKSB7XHJcbiAgICAgICAgaXRlbS5maWVsZEFycmF5ID0gY2xvbmVGaWVsZC5maWVsZEFycmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgIGRlbGV0ZSBpdGVtLmZpZWxkR3JvdXA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lRmllbGRzO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBUcmFuc2ZlckxpbmVUb0Zvcm0oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jbGVhckdyb3VwQ2hlY2tlZChmaWVsZCk7XHJcbiAgICBsZXQgY2xvbmVGaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBjbG9uZShmb3JtX2ZpZWxkcyk7XHJcbiAgICBsZXQgY2xvbmVGaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSBjbG9uZShmaWVsZCk7XHJcblxyXG4gICAgbGV0IG9iaiA9IHRoaXMuZ2V0RmllbGRMaW5lSW5mbygpO1xyXG5cclxuICAgIGxldCBjaGVja2VkRmllbGRzOiBJQ2hlY2tlZEZpZWxkW10gPSB0aGlzLmdldEdyb3VwQ2hlY2tGaWVsZHMoY2xvbmVGaWVsZCk7XHJcbiAgICBpZiAoIWNsb25lRmllbGQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKFxyXG4gICAgICAhY2xvbmVGaWVsZC5maWVsZEFycmF5IHx8XHJcbiAgICAgICFjbG9uZUZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCB8fFxyXG4gICAgICBjbG9uZUZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5sZW5ndGggPCAxXHJcbiAgICApIHtcclxuICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIiwgW10pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMgJiYgY2hlY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGVja2VkRmllbGQgPSBjaGVja2VkRmllbGRzW2NoZWNrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIF8uZ2V0KGNoZWNrZWRGaWVsZCwgXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICBfLmdldChjbG9uZUZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5zcGxpY2UoXHJcbiAgICAgICAgY2hlY2tlZEZpZWxkLmluZGV4ICsgMSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIG9ialxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikucHVzaChvYmopO1xyXG4gICAgfVxyXG4gICAgY2xvbmVGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5ndWlkID09PSBjbG9uZUZpZWxkLmd1aWQpIHtcclxuICAgICAgICBpdGVtLmZpZWxkQXJyYXkgPSBjbG9uZUZpZWxkLmZpZWxkQXJyYXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJmaWVsZEdyb3VwXCIpKSB7XHJcbiAgICAgICAgZGVsZXRlIGl0ZW0uZmllbGRHcm91cDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVGaWVsZHM7XHJcbiAgfVxyXG5cclxuICBncm91cFRyYW5zZmVyUmVtYXJrVG9Gb3JtKFxyXG4gICAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdcclxuICApIHtcclxuICAgIHRoaXMuY2xlYXJHcm91cENoZWNrZWQoZmllbGQpO1xyXG4gICAgbGV0IGNsb25lRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gY2xvbmUoZm9ybV9maWVsZHMpO1xyXG4gICAgbGV0IGNsb25lRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gY2xvbmUoZmllbGQpO1xyXG5cclxuICAgIGxldCBvYmogPSB0aGlzLmdldEZpZWxkUmVtYXJrSW5mbygpO1xyXG5cclxuICAgIGxldCBjaGVja2VkRmllbGRzOiBJQ2hlY2tlZEZpZWxkW10gPSB0aGlzLmdldEdyb3VwQ2hlY2tGaWVsZHMoY2xvbmVGaWVsZCk7XHJcbiAgICBpZiAoIWNsb25lRmllbGQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKFxyXG4gICAgICAhY2xvbmVGaWVsZC5maWVsZEFycmF5IHx8XHJcbiAgICAgICFjbG9uZUZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCB8fFxyXG4gICAgICBjbG9uZUZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5sZW5ndGggPCAxXHJcbiAgICApIHtcclxuICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIiwgW10pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrZWRGaWVsZHMgJiYgY2hlY2tlZEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGVja2VkRmllbGQgPSBjaGVja2VkRmllbGRzW2NoZWNrZWRGaWVsZHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIF8uZ2V0KGNoZWNrZWRGaWVsZCwgXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICBfLmdldChjbG9uZUZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5zcGxpY2UoXHJcbiAgICAgICAgY2hlY2tlZEZpZWxkLmluZGV4ICsgMSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIG9ialxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgXy5nZXQoY2xvbmVGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikucHVzaChvYmopO1xyXG4gICAgfVxyXG4gICAgY2xvbmVGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5ndWlkID09PSBjbG9uZUZpZWxkLmd1aWQpIHtcclxuICAgICAgICBpdGVtLmZpZWxkQXJyYXkgPSBjbG9uZUZpZWxkLmZpZWxkQXJyYXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJmaWVsZEdyb3VwXCIpKSB7XHJcbiAgICAgICAgZGVsZXRlIGl0ZW0uZmllbGRHcm91cDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVGaWVsZHM7XHJcbiAgfVxyXG5cclxuICBncm91cFRyYW5zZmVyU2VsZWN0RmllbGRUb0Zvcm0oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGdyb3VwRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gICAgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdLFxyXG4gICAgYnVzaW5lc3NUYWJsZTogSUJ1c2luZXNzVGFibGUsXHJcbiAgICBvYmo6IGFueVxyXG4gICkge1xyXG4gICAgbGV0IGNsb25lRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gY2xvbmUoZm9ybV9maWVsZHMpO1xyXG4gICAgbGV0IGNsb25lR3JvdXBGaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSBjbG9uZShncm91cEZpZWxkKTtcclxuICAgIGxldCBzZWxlY3RGaWVsZHM6IGFueSA9IFtdO1xyXG4gICAgbGV0IHRhYmxlRmllbGRzOiBWWFRhYmxlRmllbGRDb25maWdbXSA9IFtdO1xyXG4gICAgbGV0IGFkZEZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IFtdO1xyXG4gICAgbGV0IGJlZ2luSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICBpZiAob2JqW2l0ZW1dKSB7XHJcbiAgICAgICAgc2VsZWN0RmllbGRzLnB1c2goaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCFzZWxlY3RGaWVsZHMgfHwgc2VsZWN0RmllbGRzLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICB0YWJsZUZpZWxkcyA9IHRoaXMuZ2V0VGFibGVGaWxlZExpc3QoYnVzaW5lc3NUYWJsZSk7XHJcblxyXG4gICAgaWYgKCF0YWJsZUZpZWxkcyB8fCB0YWJsZUZpZWxkcy5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGNsb25lRmllbGRzICYmIGNsb25lRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgYmVnaW5JbmRleCA9IGNsb25lRmllbGRzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICFjbG9uZUdyb3VwRmllbGQuZmllbGRBcnJheSB8fFxyXG4gICAgICAhY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCB8fFxyXG4gICAgICBjbG9uZUdyb3VwRmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwLmxlbmd0aCA8IDFcclxuICAgICkge1xyXG4gICAgICBfLmdldChjbG9uZUdyb3VwRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIsIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RGaWVsZHMuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcclxuICAgICAgbGV0IHRhYmxlRmllbGQ6IFZYVGFibGVGaWVsZENvbmZpZyA9IHRoaXMuZ2V0VGFibGVGaWxlZEluZm8oXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHRhYmxlRmllbGRzXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0YWJsZUZpZWxkICE9IG51bGwpIHtcclxuICAgICAgICBsZXQgZm9ybUZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IHRoaXMudG9Gb3JtRmllbGQuZ2V0VlhGaWxlZEZ1bmN0aW9uKFxyXG4gICAgICAgICAgdGFibGVGaWVsZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGZvcm1GaWVsZCAmJiBmb3JtRmllbGQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWRkRmllbGRzLnB1c2goZm9ybUZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjaGVja2VkRmllbGRzICYmIGNoZWNrZWRGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgY2hlY2tlZEZpZWxkID0gY2hlY2tlZEZpZWxkc1tjaGVja2VkRmllbGRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBiZWdpbkluZGV4ID0gY2hlY2tlZEZpZWxkLmluZGV4ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICBfLmdldChjbG9uZUdyb3VwRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLnNwbGljZShcclxuICAgICAgICBiZWdpbkluZGV4ICsgaW5kZXgsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBpdGVtXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGNsb25lRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uZ3VpZCA9PT0gY2xvbmVHcm91cEZpZWxkLmd1aWQpIHtcclxuICAgICAgICBpdGVtLmZpZWxkQXJyYXkgPSBjbG9uZUdyb3VwRmllbGQuZmllbGRBcnJheTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkR3JvdXBcIikpIHtcclxuICAgICAgICBkZWxldGUgaXRlbS5maWVsZEdyb3VwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbG9uZUZpZWxkcztcclxuICB9XHJcblxyXG4gIGdyb3VwVHJhbnNmZXJEZWxldGVGb3JtKFxyXG4gICAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10sXHJcbiAgICBncm91cEZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ1xyXG4gICkge1xyXG4gICAgbGV0IGNsb25lRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gY2xvbmUoZm9ybV9maWVsZHMpO1xyXG4gICAgbGV0IGNsb25lR3JvdXBGaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSBjbG9uZShncm91cEZpZWxkKTtcclxuXHJcbiAgICBsZXQgY2hlY2tlZEZpZWxkczogSUNoZWNrZWRGaWVsZFtdID0gdGhpcy5nZXRHcm91cENoZWNrRmllbGRzKFxyXG4gICAgICBjbG9uZUdyb3VwRmllbGRcclxuICAgICk7XHJcbiAgICBpZiAoIWNoZWNrZWRGaWVsZHMgfHwgY2hlY2tlZEZpZWxkcyA9PSBudWxsIHx8IGNoZWNrZWRGaWVsZHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICFjbG9uZUdyb3VwRmllbGQuZmllbGRBcnJheSB8fFxyXG4gICAgICAhY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCB8fFxyXG4gICAgICBjbG9uZUdyb3VwRmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwLmxlbmd0aCA8IDFcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tlZEZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgXy5nZXQoY2xvbmVHcm91cEZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5mb3JFYWNoKFxyXG4gICAgICAgIChmaWVsZDogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBmaWVsZC5rZXkgPT09IGl0ZW0uZmllbGQua2V5ICYmXHJcbiAgICAgICAgICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5pc2J1dGludGluICE9IHRydWVcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9uZUZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmd1aWQgPT09IGNsb25lR3JvdXBGaWVsZC5ndWlkKSB7XHJcbiAgICAgICAgaXRlbS5maWVsZEFycmF5ID0gY2xvbmVHcm91cEZpZWxkLmZpZWxkQXJyYXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJmaWVsZEdyb3VwXCIpKSB7XHJcbiAgICAgICAgZGVsZXRlIGl0ZW0uZmllbGRHcm91cDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVGaWVsZHM7XHJcbiAgfVxyXG5cclxuICBlZGl0Rm9ybUZpZWxkSW5mbyhcclxuICAgIGZvcm1fZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdLFxyXG4gICAgbmV3X2ZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ1xyXG4gICkge1xyXG4gICAgaWYgKCFmb3JtX2ZpZWxkcykgcmV0dXJuO1xyXG4gICAgbGV0IGNsb25lRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gY2xvbmUoZm9ybV9maWVsZHMpO1xyXG4gICAgbGV0IGdyb3VwS2V5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY2xvbmVGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJyZXBlYXRcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGZpZWxkLmZpZWxkQXJyYXkgJiZcclxuICAgICAgICAgIGZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCAmJlxyXG4gICAgICAgICAgZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIF8uZ2V0KGZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAoZ3JvdXBGaWVsZDogYW55LCBncm91cEluZGV4OiBhbnksIGdyb3VwT2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZ3JvdXBGaWVsZC5rZXkgPT09IG5ld19maWVsZC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwS2V5ID0gZmllbGQua2V5O1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBPYmplY3Quc3BsaWNlKGdyb3VwSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBPYmplY3Quc3BsaWNlKGdyb3VwSW5kZXgsIDAsIG5ld19maWVsZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZmllbGQua2V5ID09PSBuZXdfZmllbGQua2V5KSB7XHJcbiAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDAsIG5ld19maWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChncm91cEtleSAhPSBudWxsICYmIGdyb3VwS2V5ICE9IFwiXCIpIHtcclxuICAgICAgY2xvbmVGaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiZmllbGRHcm91cFwiKSkge1xyXG4gICAgICAgICAgZGVsZXRlIGl0ZW0uZmllbGRHcm91cDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JvdXBLZXk6IGdyb3VwS2V5LFxyXG4gICAgICBmb3JtRmlsZWRzOiBjbG9uZUZpZWxkc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZvcm1GaWVsZEluZm8oXHJcbiAgICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSxcclxuICAgIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ1xyXG4gICkge1xyXG4gICAgbGV0IGNsb25lRmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdID0gY2xvbmUoZm9ybV9maWVsZHMpO1xyXG4gICAgbGV0IGNsb25lRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gY2xvbmUoZmllbGQpO1xyXG4gICAgbGV0IGdyb3VwS2V5OiBhbnk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBjbG9uZUZpZWxkcyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgY2xvbmVGaWVsZHMgIT0gbnVsbCAmJlxyXG4gICAgICBjbG9uZUZpZWxkICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBjbG9uZUZpZWxkICE9IG51bGwgJiZcclxuICAgICAgY2xvbmVGaWVsZHMubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChjbG9uZUZpZWxkLmtleSAhPSB1bmRlZmluZWQgJiYgY2xvbmVGaWVsZC5rZXkgIT0gbnVsbCkge1xyXG4gICAgICAgIGNsb25lRmllbGRzLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmtleSA9PT0gY2xvbmVGaWVsZC5rZXkpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgaXRlbS5maWVsZEFycmF5ICE9IG51bGwgJiZcclxuICAgICAgICAgICAgaXRlbS5maWVsZEFycmF5LmZpZWxkR3JvdXAgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRBcnJheS5maWVsZEdyb3VwICE9IG51bGxcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5kZWxldGVHcm91cEZvcm1GaWVsZEluZm8oaXRlbSwgZmllbGQpO1xyXG4gICAgICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICBncm91cEtleSA9IHJlcztcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkR3JvdXBcIikpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLmZpZWxkR3JvdXA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBncm91cEtleTogZ3JvdXBLZXksXHJcbiAgICAgIGZvcm1GaWxlZHM6IGNsb25lRmllbGRzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxldGVHcm91cEZvcm1GaWVsZEluZm8oXHJcbiAgICBmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gICAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBsZXQgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBbXTtcclxuICAgIGxldCBncm91cEtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlmIChcclxuICAgICAgZmllbGRzLmZpZWxkQXJyYXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGZpZWxkcy5maWVsZEFycmF5ICE9IG51bGwgJiZcclxuICAgICAgZmllbGRzLmZpZWxkQXJyYXkuZmllbGRHcm91cCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgZmllbGRzLmZpZWxkQXJyYXkuZmllbGRHcm91cCAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgZm9ybV9maWVsZHMgPSBmaWVsZHMuZmllbGRBcnJheS5maWVsZEdyb3VwO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGZvcm1fZmllbGRzICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGZvcm1fZmllbGRzICE9IG51bGwgJiZcclxuICAgICAgICBmaWVsZCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICBmaWVsZCAhPSBudWxsICYmXHJcbiAgICAgICAgZm9ybV9maWVsZHMubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoZmllbGQua2V5ICE9IHVuZGVmaW5lZCAmJiBmaWVsZC5rZXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgZm9ybV9maWVsZHMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5rZXkgPT09IGZpZWxkLmtleSkge1xyXG4gICAgICAgICAgICAgIGlmIChmaWVsZHMua2V5ICE9IHVuZGVmaW5lZCAmJiBmaWVsZHMua2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwS2V5ID0gZmllbGRzLmtleTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JvdXBLZXk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkTGluZUluZm8oKSB7XHJcbiAgICBsZXQgb2JqOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIGd1aWQ6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIHN0YXR1czogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkUmVtYXJrSW5mbygpIHtcclxuICAgIGxldCBvYmo6IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgZ3VpZDogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImh0bWxcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwi54mH5q615paH5pys5o+P6L+wXCJcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmllbGRHcm91cEluZm8oKSB7XHJcbiAgICBsZXQgb2JqOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIGd1aWQ6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJyZXBlYXRcIixcclxuICAgICAgZmllbGRBcnJheToge1xyXG4gICAgICAgIGZpZWxkR3JvdXA6IFtdXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYmxlY29kZTogXCJcIixcclxuICAgICAgc3RhdHVzOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIC8v5riF56m66YCJ5LitXHJcbiAgcHJpdmF0ZSBjbGVhckdyb3VwQ2hlY2tlZChmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmIChcclxuICAgICAgIWZpZWxkIHx8XHJcbiAgICAgICFmaWVsZC5maWVsZEFycmF5IHx8XHJcbiAgICAgICFmaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgfHxcclxuICAgICAgIWZpZWxkLmZpZWxkR3JvdXBcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgZmllbGQuZmllbGRBcnJheS5maWVsZEdyb3VwLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/ojrflj5bpgInkuK1cclxuICBwcml2YXRlIGdldEdyb3VwQ2hlY2tGaWVsZHMoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY2hlY2tlZEZpZWxkOiBJQ2hlY2tlZEZpZWxkW10gPSBbXTtcclxuICAgIGlmIChcclxuICAgICAgIWZpZWxkIHx8XHJcbiAgICAgICFmaWVsZC5maWVsZEFycmF5IHx8XHJcbiAgICAgICFmaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgfHxcclxuICAgICAgIWZpZWxkLmZpZWxkR3JvdXAgfHxcclxuICAgICAgZmllbGQuZmllbGRHcm91cC5sZW5ndGggPCAxXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGNoZWNrZWRGaWVsZDtcclxuICAgIH1cclxuICAgIF8uZ2V0KGZpZWxkLCBcImZpZWxkR3JvdXBbMF0uZmllbGRHcm91cFwiKS5mb3JFYWNoKFxyXG4gICAgICAoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgY2hlY2tlZEZpZWxkLnB1c2goeyBpbmRleDogaW5kZXgsIGZpZWxkOiBpdGVtIH0pO1xyXG4gICAgICAgICAgXy5nZXQoZmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gY2hlY2tlZEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUYWJsZUZpbGVkTGlzdChidXNpbmVzc1RhYmxlOiBJQnVzaW5lc3NUYWJsZSkge1xyXG4gICAgbGV0IHRhYmxlRmllbGRzOiBWWFRhYmxlRmllbGRDb25maWdbXSA9IFtdO1xyXG4gICAgaWYgKGJ1c2luZXNzVGFibGUpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJ1c2luZXNzVGFibGUucHJpbWFyeSAmJlxyXG4gICAgICAgIGJ1c2luZXNzVGFibGUucHJpbWFyeSAhPSBudWxsICYmXHJcbiAgICAgICAgYnVzaW5lc3NUYWJsZS5wcmltYXJ5LnRhYmxlZmllbGRzICYmXHJcbiAgICAgICAgYnVzaW5lc3NUYWJsZS5wcmltYXJ5LnRhYmxlZmllbGRzICE9IG51bGwgJiZcclxuICAgICAgICBidXNpbmVzc1RhYmxlLnByaW1hcnkudGFibGVmaWVsZHMubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoYnVzaW5lc3NUYWJsZS5wcmltYXJ5LnRhYmxlZmllbGRzKSB7XHJcbiAgICAgICAgICB0YWJsZUZpZWxkcyA9IHRhYmxlRmllbGRzLmNvbmNhdChidXNpbmVzc1RhYmxlLnByaW1hcnkudGFibGVmaWVsZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYnVzaW5lc3NUYWJsZS5jaGlsZCAmJiBidXNpbmVzc1RhYmxlLmNoaWxkICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBidXNpbmVzc1RhYmxlLmNoaWxkLnNpbmdsZSAmJlxyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5zaW5nbGUgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5zaW5nbGUubGVuZ3RoID4gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5zaW5nbGUuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnRhYmxlZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgdGFibGVGaWVsZHMgPSB0YWJsZUZpZWxkcy5jb25jYXQoaXRlbS50YWJsZWZpZWxkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBidXNpbmVzc1RhYmxlLmNoaWxkLm11bHRpcGxlICYmXHJcbiAgICAgICAgICBidXNpbmVzc1RhYmxlLmNoaWxkLm11bHRpcGxlICE9IG51bGwgJiZcclxuICAgICAgICAgIGJ1c2luZXNzVGFibGUuY2hpbGQubXVsdGlwbGUubGVuZ3RoID4gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYnVzaW5lc3NUYWJsZS5jaGlsZC5tdWx0aXBsZS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udGFibGVmaWVsZHMpIHtcclxuICAgICAgICAgICAgICB0YWJsZUZpZWxkcyA9IHRhYmxlRmllbGRzLmNvbmNhdChpdGVtLnRhYmxlZmllbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFibGVGaWVsZHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhYmxlRmlsZWRJbmZvKGtleTogc3RyaW5nLCB0YWJsZUZpZWxkczogVlhUYWJsZUZpZWxkQ29uZmlnW10pIHtcclxuICAgIGxldCByZXNWYWx1ZTogVlhUYWJsZUZpZWxkQ29uZmlnID0ge307XHJcbiAgICBpZiAoa2V5ICYmIHRhYmxlRmllbGRzICYmIHRhYmxlRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlckZpbGVkID0gdGFibGVGaWVsZHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbVtcImZpZWxkY29kZVwiXSA9PT0ga2V5O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZpbHRlckZpbGVkICYmIGZpbHRlckZpbGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gZmlsdGVyRmlsZWRbMF07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc1ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc1ZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=