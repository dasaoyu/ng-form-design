/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { clone, VXFormCommonService } from "@vx-form/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzMessageService } from "ng-zorro-antd/message";
import * as _ from "lodash";
import { VXFormAntService } from "../../tools/service";
import { VXDialogService } from "../../service/dialog.service";
import { DataService } from "../../service/data.service";
import { VXAntCommonService } from "../../tools/commonService";
import { VXTransferService } from "../../tools/transferService";
import { VXDesginToFormService } from "../../tools/tableFieldService";
import { VXFormDesignField } from "../field/field.component";
import { VXFormDesignFieldLabel } from "../field-label/field.component";
import { VXFormDesignTable } from "../table/table.component";
import { VXFormDesignTables } from "../tables/table.component";
var VXFormDesignDetail = /** @class */ (function () {
    function VXFormDesignDetail(message, modalService, vxFormAntService, vxDialogService, dataService, vxAntCommonService, vxTransferService, vxDesginToFormService, vxFormCommonService) {
        this.message = message;
        this.modalService = modalService;
        this.vxFormAntService = vxFormAntService;
        this.vxDialogService = vxDialogService;
        this.dataService = dataService;
        this.vxAntCommonService = vxAntCommonService;
        this.vxTransferService = vxTransferService;
        this.vxDesginToFormService = vxDesginToFormService;
        this.vxFormCommonService = vxFormCommonService;
        this.formCode = "";
        this.api = {
            tables: { url: "assets/mockData/business.json" },
            form: { url: "assets/mockData/formInfo.json" }
        };
        this.saveEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
        this.previewEvent = new EventEmitter();
        this.pageStatus = 1;
        this.form_model = {};
        this.form_group = new FormGroup({});
        this.form_fields = [];
        this.vxFormInfo = {};
        this.business_tables = {
            primary: {},
            child: { single: [], multiple: [] }
        };
        this.layout_column = "layout-column-3";
        this.layout_row = "layout-row-1";
        this.table_Data = [];
    }
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.vxFormAntService.btnEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            switch (res["type"]) {
                case "delete":
                    _this.modalService.confirm({
                        nzTitle: "提示",
                        nzContent: "您确定要删除选中的字段？",
                        nzOnOk: (/**
                         * @return {?}
                         */
                        function () {
                            _this.groupBtnDeleteFields(res["field"]);
                        })
                    });
                    break;
                case "up":
                case "down":
                    _this.groupBtnMoveUpOrDown(res["field"], res["type"]);
                    break;
                case "item":
                    _this.groupBtnTableFields(res["field"]);
                    break;
                case "remark":
                case "line":
                    _this.groupBtnAddLineRemark(res["field"], res["type"]);
                    break;
                default:
                    break;
            }
        }));
        this.vxFormAntService.fieldEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var sign = res["sign"];
            if (sign == "edit") {
                _this.editFormFieldConfig(res["field"]);
            }
            else if (sign == "delete") {
                _this.modalService.confirm({
                    nzTitle: "提示",
                    nzContent: "您确定要删除该字段？",
                    nzOnOk: (/**
                     * @return {?}
                     */
                    function () {
                        _this.deleteFormFieldConfig(res["field"]);
                    })
                });
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormDesignDetail.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.formCode) {
            this.initTablesInfo();
        }
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /*按钮区域---begin*/
    /*按钮区域---begin*/
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnSave = /*按钮区域---begin*/
    /**
     * @return {?}
     */
    function () {
        this.vxFormInfo.fields = clone(this.form_fields);
        if (this.vxFormInfo.fields !== null &&
            this.vxFormInfo.fields !== undefined) {
            this.vxFormCommonService.initFormFieldProperty(this.vxFormInfo.fields);
        }
        console.log(JSON.stringify(this.vxFormInfo));
        this.saveEvent.emit(JSON.stringify(this.vxFormInfo));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnCancel = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnPreview = /**
     * @return {?}
     */
    function () {
        this.vxFormInfo.fields = clone(this.form_fields);
        if (this.vxFormInfo.fields !== null &&
            this.vxFormInfo.fields !== undefined) {
            this.vxFormCommonService.initFormFieldProperty(this.vxFormInfo.fields);
        }
        this.previewEvent.emit(JSON.stringify(this.vxFormInfo));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnDelete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalService.confirm({
            nzTitle: "提示",
            nzContent: "您确定要删除选中的字段？",
            nzOnOk: (/**
             * @return {?}
             */
            function () {
                _this.getCheckFields().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    _this.form_fields.forEach((/**
                     * @param {?} field
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */
                    function (field, index, object) {
                        if (field.key === item.field.key &&
                            _.get(field, "templateOptions.isbutintin") != true) {
                            object.splice(index, 1);
                        }
                    }));
                }));
                _this.initTableFieldStatus();
            })
        });
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnMoveUp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.getCheckFields().forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.index > 0) {
                _this.form_fields.splice(item.index, 1);
                _this.form_fields.splice(item.index - 1, 0, item.field);
            }
        }));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnMoveDown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.getCheckFields()
            .reverse()
            .forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.index < _this.form_fields.length - 1) {
                _this.form_fields.splice(item.index, 1);
                _this.form_fields.splice(item.index + 1, 0, item.field);
            }
        }));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnAddFields = /**
     * @return {?}
     */
    function () {
        this.selectTableFields();
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnAddRemark = /**
     * @return {?}
     */
    function () {
        this.vxTransferService.transferLabelToForm(this.form_fields, this.getCheckFields());
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnAddLine = /**
     * @return {?}
     */
    function () {
        this.vxTransferService.transferLineToForm(this.form_fields, this.getCheckFields());
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnAddGroup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var tablecode = this.getTableMultipleCode();
        if (tablecode == null || tablecode == "") {
            this.message.warning("当前业务表没有相关联的多表单记录，故不能添加多记录区域！");
            return;
        }
        if (this.business_tables &&
            this.business_tables.child &&
            this.business_tables.child.multiple &&
            this.business_tables.child.multiple.length > 0) {
            if (this.business_tables.child.multiple.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.tablequote !== true;
            }))) {
                this.vxDialogService.CreateModelDialog({
                    nzTitle: "编辑",
                    size: "large",
                    nzContent: VXFormDesignTables
                }, { businessTable: this.business_tables, tableType: "single" }, (/**
                 * @param {?} instance
                 * @param {?} modal
                 * @return {?}
                 */
                function (instance, modal) {
                    modal.destroy();
                    _this.vxTransferService.transferGroupToForm(_this.form_fields, _this.getCheckFields(), instance.radioValue);
                    _this.initTableFieldStatus();
                }));
            }
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnColumn = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.vxFormInfo.column = "layout-column-" + type;
        this.layout_column = this.vxFormInfo.column;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    VXFormDesignDetail.prototype.btnRow = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.vxFormInfo.row = "layout-row-" + type;
        this.layout_row = this.vxFormInfo.row;
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.getCheckFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedField = [];
        this.form_fields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            if (item.checked) {
                checkedField.push({ index: index, field: item });
            }
        }));
        return checkedField;
    };
    /*按钮区域---end*/
    /*按钮区域---end*/
    /**
     * @param {?} groupField
     * @param {?} type
     * @return {?}
     */
    VXFormDesignDetail.prototype.groupBtnMoveUpOrDown = /*按钮区域---end*/
    /**
     * @param {?} groupField
     * @param {?} type
     * @return {?}
     */
    function (groupField, type) {
        if (!_.get(groupField, "fieldArray.fieldGroup") ||
            _.get(groupField, "fieldArray.fieldGroup").length < 1) {
            groupField.fieldArray = {
                fieldGroup: []
            };
        }
        /** @type {?} */
        var res = this.vxTransferService.groupFieldMoveUpOrDown(this.form_fields, groupField, type);
        if (res != null) {
            this.form_fields = res;
            if (groupField.key !== null && groupField.key !== undefined) {
                this.form_model[groupField.key] = [{}];
            }
        }
    };
    /**
     * @param {?} groupField
     * @param {?} type
     * @return {?}
     */
    VXFormDesignDetail.prototype.groupBtnAddLineRemark = /**
     * @param {?} groupField
     * @param {?} type
     * @return {?}
     */
    function (groupField, type) {
        if (!_.get(groupField, "fieldArray.fieldGroup") ||
            _.get(groupField, "fieldArray.fieldGroup").length < 1) {
            groupField.fieldArray = {
                fieldGroup: []
            };
        }
        /** @type {?} */
        var res = null;
        if (type === "line") {
            res = this.vxTransferService.groupTransferLineToForm(this.form_fields, groupField);
        }
        else if (type === "remark") {
            res = this.vxTransferService.groupTransferRemarkToForm(this.form_fields, groupField);
        }
        if (res != null) {
            this.form_fields = res;
            if (groupField.key !== null && groupField.key !== undefined) {
                this.form_model[groupField.key] = [{}];
            }
        }
    };
    /**
     * @param {?} groupField
     * @return {?}
     */
    VXFormDesignDetail.prototype.groupBtnTableFields = /**
     * @param {?} groupField
     * @return {?}
     */
    function (groupField) {
        var _this = this;
        this.vxDialogService.CreateModelDialog({
            nzTitle: "编辑",
            size: "large",
            nzContent: VXFormDesignTable
        }, {
            businessTable: this.business_tables,
            tableType: "multiple",
            fieldConfig: groupField
        }, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        function (instance, modal) {
            modal.destroy();
            /** @type {?} */
            var res = _this.vxTransferService.groupTransferSelectFieldToForm(_this.form_fields, groupField, _this.getCheckFields(), _this.business_tables, instance.mapOfCheckedId);
            if (res != null) {
                _this.form_fields = res;
                if (groupField.key !== null && groupField.key !== undefined) {
                    _this.form_model[groupField.key] = [{}];
                }
            }
            _this.initTableFieldStatus();
        }));
    };
    /**
     * @param {?} groupField
     * @return {?}
     */
    VXFormDesignDetail.prototype.groupBtnDeleteFields = /**
     * @param {?} groupField
     * @return {?}
     */
    function (groupField) {
        if (!_.get(groupField, "fieldArray.fieldGroup") ||
            _.get(groupField, "fieldArray.fieldGroup").length < 1) {
            return;
        }
        /** @type {?} */
        var res = this.vxTransferService.groupTransferDeleteForm(this.form_fields, groupField);
        if (res != null) {
            this.form_fields = res;
            if (groupField.key !== null && groupField.key !== undefined) {
                this.form_model[groupField.key] = [{}];
            }
        }
        this.initTableFieldStatus();
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.initTablesInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.business_tables;
        this.dataService
            .getBusinessTables(this.api.tables.url, { formcode: this.formCode })
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res != null) {
                _this.business_tables = res;
                _this.initFormInfo();
            }
        }));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.initFormInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getFormInfo(this.api.form.url, { formcode: this.formCode }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.vxFormInfo = {
                code: res.code,
                name: res.name,
                type: res.type,
                fields: res.fields
            };
            if (_this.vxFormInfo.fields !== null &&
                _this.vxFormInfo.fields !== undefined) {
                _this.vxFormCommonService.initFormFieldModel(_this.vxFormInfo.fields, _this.form_model);
                _this.form_fields = _this.vxFormInfo.fields;
            }
            if (res.column != undefined && res.column != null && res.column != "") {
                _this.vxFormInfo.column = res.column;
            }
            else {
                _this.vxFormInfo.column = "layout-column-3";
            }
            if (res.row != undefined && res.row != null && res.row != "") {
                _this.vxFormInfo.row = res.row;
            }
            else {
                _this.vxFormInfo.row = "layout-row-1";
            }
            if (_this.vxFormInfo.column != undefined &&
                _this.vxFormInfo.column != null &&
                _this.vxFormInfo.row != undefined &&
                _this.vxFormInfo.row != null) {
                _this.layout_column = _this.vxFormInfo.column;
                _this.layout_row = _this.vxFormInfo.row;
                //debugger
                _this.vxDesginToFormService.initFormFieldByTables(_this.business_tables, _this.form_fields);
                _this.initTableFieldStatus();
            }
        }));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.initTableFieldStatus = /**
     * @return {?}
     */
    function () {
        this.vxDesginToFormService.initTableStatus(this.business_tables, this.form_fields);
        this.initTablesData();
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.initTablesData = /**
     * @return {?}
     */
    function () {
        this.table_Data = [];
        /** @type {?} */
        var business = clone(this.business_tables);
        /** @type {?} */
        var tables = [];
        if (!business)
            return;
        if (business.primary && business.primary != null) {
            tables = [
                {
                    tabletype: "primary",
                    tablelabel: "主表",
                    tablecode: business.primary["tablecode"],
                    tablename: business.primary["tablename"],
                    tablefields: business.primary["tablefields"]
                }
            ];
        }
        if (business.child &&
            business.child != null &&
            business.child.single &&
            business.child.single != null &&
            business.child.single.length > 0) {
            if (Array.isArray(business.child.single)) {
                business.child.single.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    tables.push({
                        tabletype: "single",
                        tablelabel: "单记录子表",
                        tablecode: item["tablecode"],
                        tablename: item["tablename"],
                        tablefields: item["tablefields"]
                    });
                }));
            }
        }
        if (business.child &&
            business.child != null &&
            business.child.multiple &&
            business.child.multiple != null &&
            business.child.multiple.length > 0) {
            if (Array.isArray(business.child.multiple)) {
                business.child.multiple.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    tables.push({
                        tabletype: "multiple",
                        tablelabel: "多记录子表",
                        tablecode: item["tablecode"],
                        tablename: item["tablename"],
                        tablefields: item["tablefields"]
                    });
                }));
            }
        }
        this.table_Data = tables;
    };
    //表单选择
    //表单选择
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.selectTableFields = 
    //表单选择
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.vxDialogService.CreateModelDialog({
            nzTitle: "编辑",
            size: "large",
            nzContent: VXFormDesignTable
        }, { businessTable: this.business_tables, tableType: "single" }, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        function (instance, modal) {
            modal.destroy();
            _this.vxTransferService.transferSelectFieldToForm(_this.form_fields, _this.getCheckFields(), _this.business_tables, instance.mapOfCheckedId);
            console.log(JSON.stringify(_this.form_fields));
            _this.initTableFieldStatus();
        }));
    };
    /**
     * @return {?}
     */
    VXFormDesignDetail.prototype.getTableMultipleCode = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var resTableCode = "";
        if (this.business_tables &&
            this.business_tables.child &&
            this.business_tables.child.multiple &&
            this.business_tables.child.multiple.length > 0) {
            this.business_tables.child.multiple.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.tablequote !== true && resTableCode == "") {
                    resTableCode = item.tablecode;
                }
            }));
        }
        return resTableCode;
    };
    //修改Field
    //修改Field
    /**
     * @param {?} field
     * @return {?}
     */
    VXFormDesignDetail.prototype.editFormFieldConfig = 
    //修改Field
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        /** @type {?} */
        var content;
        /** @type {?} */
        var title = "";
        if (field.type === "html") {
            title = "编辑片段文本描述";
            content = VXFormDesignFieldLabel;
        }
        else {
            title = "编辑字段 - " + _.get(field, "templateOptions.label");
            content = VXFormDesignField;
        }
        this.vxDialogService.CreateModelDialog({
            nzTitle: title,
            size: "large",
            nzContent: content
        }, { field: clone(field) }, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        function (instance, modal) {
            if (instance.checkSave()) {
                /** @type {?} */
                var result = _this.vxTransferService.editFormFieldInfo(_this.form_fields, instance.formField);
                if (result != null) {
                    _this.form_fields = result.formFileds;
                    if (result.groupKey != null && result.groupKey != "") {
                        _this.form_model[result.groupKey] = [{}];
                    }
                }
                modal.destroy();
            }
        }));
    };
    //删除Field
    //删除Field
    /**
     * @param {?} field
     * @return {?}
     */
    VXFormDesignDetail.prototype.deleteFormFieldConfig = 
    //删除Field
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var result = this.vxTransferService.deleteFormFieldInfo(this.form_fields, field);
        if (result != null) {
            this.form_fields = result.formFileds;
            if (result.groupKey != null && result.groupKey != "") {
                this.form_model[result.groupKey] = [{}];
            }
            this.initTableFieldStatus();
        }
    };
    VXFormDesignDetail.decorators = [
        { type: Component, args: [{
                    selector: "vxform-design-detail",
                    template: "<div class=\"design\">\r\n    <div class=\"layout\">\r\n        <div class=\"layout-column\">\r\n            <div class=\"title\">\r\n                \u9009\u62E9\u5E03\u5C40\u6837\u5F0F\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnColumn(3)\">\r\n                    <div [class]=\"layout_column==='layout-column-3'?'select':''\"><i class=\" icon-threeL\">\r\n                        </i></div>\r\n                    <span>\u4E09\u5217</span>\r\n                </li>\r\n                <li (click)=\"btnColumn(2)\">\r\n                    <div [class]=\"layout_column==='layout-column-2'?'select':''\"><i class=\" icon-towL\"></i>\r\n                    </div>\r\n                    <span>\u4FE9\u5217</span>\r\n                </li>\r\n                <li (click)=\"btnColumn(1)\">\r\n                    <div [class]=\"layout_column==='layout-column-1'?'select':''\">\r\n                        <i class=\"icon-oneL\"></i></div>\r\n                    <span>\u4E00\u5217</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"layout-row\">\r\n            <div class=\"title\">\r\n                \u9009\u62E9\u8868\u5355\u6837\u5F0F\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnRow(1)\">\r\n                    <div [class]=\"layout_row==='layout-row-1'?'select':''\"></div>\r\n                    <span>\u6C34\u5E73</span>\r\n                </li>\r\n                <li (click)=\"btnRow(2)\">\r\n                    <div [class]=\"layout_row==='layout-row-2'?'select':''\"></div>\r\n                    <span>\u5782\u76F4</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"layout-el\">\r\n            <div class=\"title\">\r\n                \u8868\u5355\u7F16\u8F91\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnAddFields()\"><i class=\"icon-TianJiaZiDuan\"></i>\u6DFB\u52A0\u5B57\u6BB5</li>\r\n                <li (click)=\"btnAddRemark()\"><i class=\"icon-other-WenBen\"></i>\u6DFB\u52A0\u6587\u672C</li>\r\n                <li (click)=\"btnAddLine()\"><i class=\"icon-FenGeXian\"></i>\u6DFB\u52A0\u5206\u5272\u7EBF</li>\r\n                <li (click)=\"btnAddGroup()\"><i class=\"icon-DuoJiLuQu\"></i>\u6DFB\u52A0\u591A\u8BB0\u5F55\u533A</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"panel\">\r\n        <div class=\"vxbutton\">\r\n            <div> \r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"btnSave()\">\u4FDD\u5B58</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"btnPreview()\"><i\r\n                    class=\"icon-fwb-yulan\"></i>\u9884\u89C8</button>\r\n            </div>\r\n            <div>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnDelete()\"><i\r\n                        class=\"icon-N_delete2\"></i>\u5220\u9664</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnMoveUp()\"><i\r\n                        class=\"icon-ShangYi\"></i>\u4E0A\u79FB</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnMoveDown()\"><i\r\n                        class=\"icon-XiaYi\"></i>\u4E0B\u79FB</button>\r\n                </div>\r\n        </div>\r\n        <div class=\"vxform scrollbar\">\r\n            <form [formGroup]=\"form_group\" [class]=\"vxFormInfo?.column +' '+ vxFormInfo?.row\" nz-form>\r\n                <vxform [fields]=\"form_fields\" [status]=\"1\" [form]=\"form_group\" [model]=\"form_model\">\r\n                </vxform>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <vxform-drawer [(ngModel)]=\"table_Data\"></vxform-drawer> -->",
                    providers: [DataService, VXAntCommonService, VXTransferService],
                    styles: [":host ::ng-deep{width:100%;display:flex;height:100%;background-color:#f3f3f3}:host ::ng-deep .ant-input[disabled]{color:rgba(0,0,0,.25);background-color:#f3f3f3;cursor:not-allowed;opacity:1;border:0}:host ::ng-deep .design{display:flex;flex:1}:host ::ng-deep .design .layout{float:left;width:240px;background-color:#fff;padding:15px 20px 0}:host ::ng-deep .design .layout .title{font-size:14px;color:#9b9b9b;margin-bottom:10px}:host ::ng-deep .design .layout ul{list-style:none;margin:0;padding:0}:host ::ng-deep .design .layout ul li{margin:0;padding:0;cursor:pointer}:host ::ng-deep .design .layout-column ul{display:inline-block;width:100%}:host ::ng-deep .design .layout-column ul li{float:left;text-align:center}:host ::ng-deep .design .layout-column ul li div{width:56px;height:56px;line-height:63px;border-radius:4px;background-color:#ececec;margin-bottom:5px}:host ::ng-deep .design .layout-column ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .design .layout-column ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .design .layout-column ul li:nth-child(1),:host ::ng-deep .design .layout-column ul li:nth-child(2){margin:0 15px 0 0}:host ::ng-deep .design .layout-row ul{display:inline-block;width:100%}:host ::ng-deep .design .layout-row ul li{float:left;text-align:center}:host ::ng-deep .design .layout-row ul li div{width:90px;height:32px;line-height:32px;border-radius:4px;background-color:#ececec;margin-bottom:5px;cursor:pointer}:host ::ng-deep .design .layout-row ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .design .layout-row ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .design .layout-row ul li:nth-child(1){margin:0 15px 0 0}:host ::ng-deep .design .layout-el li{width:200px;height:33px;line-height:33px;border-radius:4px;border:1px solid #dcdce0;background-color:#fff;margin:0 0 10px!important;font-size:13px;color:#323232}:host ::ng-deep .design .layout-el li i{margin:0 8px;font-size:14px;color:#bfbfbf}:host ::ng-deep .design .layout-el li:hover{background-color:#71a9ff;cursor:pointer;color:#fff}:host ::ng-deep .design .layout-el li:hover i{color:#fff}:host ::ng-deep .design .panel{flex:1;float:left;margin:0 0 0 20px;padding:0;display:flex;flex-direction:column;border-radius:4px;border:1px solid #dcdce0;background-color:#fff}:host ::ng-deep .design .panel .vxbutton{padding:10px;width:100%;text-align:right;border-bottom:1px solid #d9d9d9;font-size:13px;display:flex}:host ::ng-deep .design .panel .vxbutton button{margin:0 6px 0 0;font-size:12px}:host ::ng-deep .design .panel .vxbutton button i{margin:0 5px 0 0;font-size:14px}:host ::ng-deep .design .panel .vxbutton div{flex:1;float:left}:host ::ng-deep .design .panel .vxbutton div:nth-child(1){text-align:left}:host ::ng-deep .design .panel .vxbutton div:nth-child(2){text-align:right}:host ::ng-deep .design .panel .vxform{width:100%;height:100%;display:inline-block;margin:0;padding:20px;overflow-y:auto}:host ::ng-deep .design .panel .vxform vxfield-checkbox,:host ::ng-deep .design .panel .vxform vxfield-datetime,:host ::ng-deep .design .panel .vxform vxfield-html,:host ::ng-deep .design .panel .vxform vxfield-image,:host ::ng-deep .design .panel .vxform vxfield-line,:host ::ng-deep .design .panel .vxform vxfield-lookup,:host ::ng-deep .design .panel .vxform vxfield-number,:host ::ng-deep .design .panel .vxform vxfield-password,:host ::ng-deep .design .panel .vxform vxfield-radio,:host ::ng-deep .design .panel .vxform vxfield-select,:host ::ng-deep .design .panel .vxform vxfield-text,:host ::ng-deep .design .panel .vxform vxfield-textarea,:host ::ng-deep .design .panel .vxform vxfield-texti18n,:host ::ng-deep .design .panel .vxform vxfield-upload,:host ::ng-deep .design .panel .vxform vxfield-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat{display:flex;width:100%}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational{display:flex;width:560px;margin:0 0 10px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldcheckbox{width:50px;font-size:13px;line-height:17px;color:#323232;text-align:right;vertical-align:middle;float:left;box-sizing:border-box;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-grid-row-align:center;align-self:center;margin:0 10px 0 0}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl{flex:1;display:flex;align-self:center;position:relative}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label{width:120px;font-size:13px;line-height:17px;color:#323232;text-align:right;vertical-align:middle;float:left;box-sizing:border-box;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-grid-row-align:center;align-self:center}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label span{color:red;margin-right:3px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label::after{content:\"\uFF1A\"}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control{flex:1;padding:10px 10px 10px 0}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-radio-wrapper{height:32px;line-height:32px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton{display:none;border-radius:2px;border:1px solid #ffca5e;background-color:rgba(255,202,94,.2);background-size:cover;width:100%;position:absolute;height:100%;text-align:right}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton button:active{border:0!important;--antd-wave-shadow-color:none!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit{background-color:#ffb15e!important;font-size:13px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;margin-right:-12px;height:26px;line-height:26px;padding:1px 15px;position:relative;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit i{font-size:14px;margin-right:5px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnDel{background-color:#fc8e8c!important;font-size:13px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;height:26px;line-height:25px;width:26px;margin-right:-2px;position:relative;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnDel:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl:hover .fieldButton{display:block}:host ::ng-deep .design .panel .vxform vxfield-html .fieldControl .control{padding:15px 10px!important}:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform vxform-repeat{display:flex;flex:1;flex-direction:column;margin:0 0 20px}:host ::ng-deep .design .panel .vxform vxform-repeat>.fieldOperational{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat vxfield{display:flex;width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-checkbox,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-datetime,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-html,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-image,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-lookup,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-number,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-password,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-radio,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-select,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-text,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-textarea,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-texti18n,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-upload,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-wrapper{display:flex;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .fieldcheckbox{width:30px!important}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl{border-radius:2px;border:1px solid #ffca5e;background-color:#fff;flex-direction:column;width:100%;margin-left:20px}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header{border-bottom:1px solid #ffca5e;display:flex}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul{list-style:none;margin:0;padding:0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul li{float:left;margin:0 15px 0 0;font-size:12px;color:#323232;cursor:pointer;display:inline-block;line-height:36px;height:38px}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul li i{color:#ffca5e;margin:0 5px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left{float:left;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left ul{float:left}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left ul li:nth-child(1){width:30px;text-align:right}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right{float:left;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul{float:right}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1){margin:0;width:35px;padding:1px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1) .btnDel{display:none;background-color:#fc8e8c!important;font-size:13px;height:26px;line-height:25px;width:26px;margin-right:-10px;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1) .btnDel:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body{min-height:50px;padding:20px 20px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body .panel-vxform-group{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body vxform-group{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body vxform-group .fieldOperational{width:560px}:host ::ng-deep .design .panel .vxform vxform-repeat:hover .report-header .btnDel{display:block!important;margin-top:5px}:host ::ng-deep .design .panel .vxform hr{border:0;border-top:1px solid #d9d9d9;margin:16px}:host ::ng-deep .design .panel .vxform .panel-html,:host ::ng-deep .design .panel .vxform .panel-line,:host ::ng-deep .design .panel .vxform .panel-repeat,:host ::ng-deep .design .panel .vxform .panel-textarea,:host ::ng-deep .design .panel .vxform .panel-upload{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-1 .fieldOperational{width:560px!important}:host ::ng-deep .design .panel .vxform .layout-column-1 vxform-repeat>.fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-label .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-template .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-upload .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-2 vxform-field{float:left;width:50%}:host ::ng-deep .design .panel .vxform .layout-column-2 vxform-repeat vxform-field{float:left;width:50%}:host ::ng-deep .design .panel .vxform .layout-column-2 .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-3 vxform-field{float:left;width:33.33333%}:host ::ng-deep .design .panel .vxform .layout-column-3 vxform-repeat vxform-field{float:left;width:33.33333%}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl{flex-direction:column!important;-ms-grid-row-align:none!important;align-self:none!important}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .label{float:left!important;text-align:left!important;flex:1!important;width:100%!important;padding:10px 10px 0}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .control{padding:15px 10px!important}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .control hr{margin:20px 0 15px!important}:host ::ng-deep .design .panel .vxform .layout-row-2 vxfield-label .control{padding:15px 10px!important}:host ::ng-deep .design .scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .design .scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .design .scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .design .scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}"]
                }] }
    ];
    /** @nocollapse */
    VXFormDesignDetail.ctorParameters = function () { return [
        { type: NzMessageService },
        { type: NzModalService },
        { type: VXFormAntService },
        { type: VXDialogService },
        { type: DataService },
        { type: VXAntCommonService },
        { type: VXTransferService },
        { type: VXDesginToFormService },
        { type: VXFormCommonService }
    ]; };
    VXFormDesignDetail.propDecorators = {
        formCode: [{ type: Input }],
        api: [{ type: Input }],
        saveEvent: [{ type: Output }],
        cancelEvent: [{ type: Output }],
        previewEvent: [{ type: Output }]
    };
    return VXFormDesignDetail;
}());
export { VXFormDesignDetail };
if (false) {
    /** @type {?} */
    VXFormDesignDetail.prototype.formCode;
    /** @type {?} */
    VXFormDesignDetail.prototype.api;
    /** @type {?} */
    VXFormDesignDetail.prototype.saveEvent;
    /** @type {?} */
    VXFormDesignDetail.prototype.cancelEvent;
    /** @type {?} */
    VXFormDesignDetail.prototype.previewEvent;
    /** @type {?} */
    VXFormDesignDetail.prototype.pageStatus;
    /** @type {?} */
    VXFormDesignDetail.prototype.form_model;
    /** @type {?} */
    VXFormDesignDetail.prototype.form_group;
    /** @type {?} */
    VXFormDesignDetail.prototype.form_fields;
    /** @type {?} */
    VXFormDesignDetail.prototype.vxFormInfo;
    /** @type {?} */
    VXFormDesignDetail.prototype.business_tables;
    /** @type {?} */
    VXFormDesignDetail.prototype.layout_column;
    /** @type {?} */
    VXFormDesignDetail.prototype.layout_row;
    /** @type {?} */
    VXFormDesignDetail.prototype.table_Data;
    /**
     * @type {?}
     * @private
     */
    VXFormDesignDetail.prototype.message;
    /**
     * @type {?}
     * @private
     */
    VXFormDesignDetail.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    VXFormDesignDetail.prototype.vxFormAntService;
    /** @type {?} */
    VXFormDesignDetail.prototype.vxDialogService;
    /** @type {?} */
    VXFormDesignDetail.prototype.dataService;
    /** @type {?} */
    VXFormDesignDetail.prototype.vxAntCommonService;
    /** @type {?} */
    VXFormDesignDetail.prototype.vxTransferService;
    /** @type {?} */
    VXFormDesignDetail.prototype.vxDesginToFormService;
    /** @type {?} */
    VXFormDesignDetail.prototype.vxFormCommonService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi9kZXNpZ24vZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFJTCxLQUFLLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdCdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUsvRDtJ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eUNBQStCOztJQUMvQixnREFBNkM7O0lBQzdDLCtDQUEyQzs7SUFDM0MsbURBQW1EOztJQUNuRCxpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgVlhGb3JtSW5mbyxcclxuICBjbG9uZSxcclxuICBWWFRhYmxlQ29uZmlnLFxyXG4gIFZYRm9ybUNvbW1vblNlcnZpY2VcclxufSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL21vZGFsXCI7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwibmctem9ycm8tYW50ZC9tZXNzYWdlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtTGF5b3V0LFxyXG4gIExheW91dFBhbmVsLFxyXG4gIExheW91dENvbHVtbixcclxuICBWWFRhYmxlQnVzaW5lc3MsXHJcbiAgSUNoZWNrZWRGaWVsZCxcclxuICBJQnVzaW5lc3NUYWJsZSxcclxuICBJdGFibGUsXHJcbiAgSURlc2lnbkZvcm1BUElcclxufSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5pbXBvcnQge1xyXG4gIENka0RyYWdEcm9wLFxyXG4gIG1vdmVJdGVtSW5BcnJheSxcclxuICB0cmFuc2ZlckFycmF5SXRlbVxyXG59IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IFZYRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RpYWxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZYQW50Q29tbW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9jb21tb25TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZYVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3RyYW5zZmVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWERlc2dpblRvRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdGFibGVGaWVsZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVlhGb3JtRGVzaWduRmllbGQgfSBmcm9tIFwiLi4vZmllbGQvZmllbGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybURlc2lnbkZpZWxkTGFiZWwgfSBmcm9tIFwiLi4vZmllbGQtbGFiZWwvZmllbGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybURlc2lnblRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1EZXNpZ25UYWJsZXMgfSBmcm9tIFwiLi4vdGFibGVzL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBncm91cCB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1kZXNpZ24tZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlsLmNvbXBvbmVudC5sZXNzXCJdLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlLCBWWEFudENvbW1vblNlcnZpY2UsIFZYVHJhbnNmZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRGVzaWduRGV0YWlsIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZm9ybUNvZGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgQElucHV0KCkgYXBpOiBJRGVzaWduRm9ybUFQSSA9IHtcclxuICAgIHRhYmxlczogeyB1cmw6IFwiYXNzZXRzL21vY2tEYXRhL2J1c2luZXNzLmpzb25cIiB9LFxyXG4gICAgZm9ybTogeyB1cmw6IFwiYXNzZXRzL21vY2tEYXRhL2Zvcm1JbmZvLmpzb25cIiB9XHJcbiAgfTtcclxuICBAT3V0cHV0KCkgc2F2ZUV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcHJldmlld0V2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwYWdlU3RhdHVzOiBudW1iZXIgPSAxO1xyXG5cclxuICBmb3JtX21vZGVsOiBhbnkgPSB7fTtcclxuICBmb3JtX2dyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcbiAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBbXTtcclxuXHJcbiAgdnhGb3JtSW5mbzogVlhGb3JtSW5mbyA9IHt9O1xyXG5cclxuICBidXNpbmVzc190YWJsZXM6IElCdXNpbmVzc1RhYmxlID0ge1xyXG4gICAgcHJpbWFyeToge30sXHJcbiAgICBjaGlsZDogeyBzaW5nbGU6IFtdLCBtdWx0aXBsZTogW10gfVxyXG4gIH07XHJcblxyXG4gIGxheW91dF9jb2x1bW46IHN0cmluZyA9IFwibGF5b3V0LWNvbHVtbi0zXCI7XHJcbiAgbGF5b3V0X3Jvdzogc3RyaW5nID0gXCJsYXlvdXQtcm93LTFcIjtcclxuXHJcbiAgdGFibGVfRGF0YTogSXRhYmxlW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1lc3NhZ2U6IE56TWVzc2FnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTnpNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZ4Rm9ybUFudFNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgdnhEaWFsb2dTZXJ2aWNlOiBWWERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHVibGljIHZ4QW50Q29tbW9uU2VydmljZTogVlhBbnRDb21tb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIHZ4VHJhbnNmZXJTZXJ2aWNlOiBWWFRyYW5zZmVyU2VydmljZSxcclxuICAgIHB1YmxpYyB2eERlc2dpblRvRm9ybVNlcnZpY2U6IFZYRGVzZ2luVG9Gb3JtU2VydmljZSxcclxuICAgIHB1YmxpYyB2eEZvcm1Db21tb25TZXJ2aWNlOiBWWEZvcm1Db21tb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy52eEZvcm1BbnRTZXJ2aWNlLmJ0bkV2ZW50LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgc3dpdGNoIChyZXNbXCJ0eXBlXCJdKSB7XHJcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuY29uZmlybSh7XHJcbiAgICAgICAgICAgIG56VGl0bGU6IFwi5o+Q56S6XCIsXHJcbiAgICAgICAgICAgIG56Q29udGVudDogXCLmgqjnoa7lrpropoHliKDpmaTpgInkuK3nmoTlrZfmrrXvvJ9cIixcclxuICAgICAgICAgICAgbnpPbk9rOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5ncm91cEJ0bkRlbGV0ZUZpZWxkcyhyZXNbXCJmaWVsZFwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgIHRoaXMuZ3JvdXBCdG5Nb3ZlVXBPckRvd24ocmVzW1wiZmllbGRcIl0sIHJlc1tcInR5cGVcIl0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIml0ZW1cIjpcclxuICAgICAgICAgIHRoaXMuZ3JvdXBCdG5UYWJsZUZpZWxkcyhyZXNbXCJmaWVsZFwiXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmVtYXJrXCI6XHJcbiAgICAgICAgY2FzZSBcImxpbmVcIjpcclxuICAgICAgICAgIHRoaXMuZ3JvdXBCdG5BZGRMaW5lUmVtYXJrKHJlc1tcImZpZWxkXCJdLCByZXNbXCJ0eXBlXCJdKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52eEZvcm1BbnRTZXJ2aWNlLmZpZWxkRXZlbnQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgc2lnbiA9IHJlc1tcInNpZ25cIl07XHJcbiAgICAgIGlmIChzaWduID09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Rm9ybUZpZWxkQ29uZmlnKHJlc1tcImZpZWxkXCJdKTtcclxuICAgICAgfSBlbHNlIGlmIChzaWduID09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5jb25maXJtKHtcclxuICAgICAgICAgIG56VGl0bGU6IFwi5o+Q56S6XCIsXHJcbiAgICAgICAgICBuekNvbnRlbnQ6IFwi5oKo56Gu5a6a6KaB5Yig6Zmk6K+l5a2X5q6177yfXCIsXHJcbiAgICAgICAgICBuek9uT2s6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVGb3JtRmllbGRDb25maWcocmVzW1wiZmllbGRcIl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmZvcm1Db2RlKSB7XHJcbiAgICAgIHRoaXMuaW5pdFRhYmxlc0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkgeyB9XHJcblxyXG4gIC8q5oyJ6ZKu5Yy65Z+fLS0tYmVnaW4qL1xyXG5cclxuICBidG5TYXZlKCkge1xyXG4gICAgdGhpcy52eEZvcm1JbmZvLmZpZWxkcyA9IGNsb25lKHRoaXMuZm9ybV9maWVsZHMpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnZ4Rm9ybUluZm8uZmllbGRzICE9PSBudWxsICYmXHJcbiAgICAgIHRoaXMudnhGb3JtSW5mby5maWVsZHMgIT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMudnhGb3JtQ29tbW9uU2VydmljZS5pbml0Rm9ybUZpZWxkUHJvcGVydHkodGhpcy52eEZvcm1JbmZvLmZpZWxkcyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnZ4Rm9ybUluZm8pKTtcclxuICAgIHRoaXMuc2F2ZUV2ZW50LmVtaXQoSlNPTi5zdHJpbmdpZnkodGhpcy52eEZvcm1JbmZvKSk7XHJcbiAgfVxyXG5cclxuICBidG5DYW5jZWwoKSB7IH1cclxuXHJcbiAgYnRuUHJldmlldygpIHtcclxuICAgIHRoaXMudnhGb3JtSW5mby5maWVsZHMgPSBjbG9uZSh0aGlzLmZvcm1fZmllbGRzKTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy52eEZvcm1JbmZvLmZpZWxkcyAhPT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLnZ4Rm9ybUluZm8uZmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLnZ4Rm9ybUNvbW1vblNlcnZpY2UuaW5pdEZvcm1GaWVsZFByb3BlcnR5KHRoaXMudnhGb3JtSW5mby5maWVsZHMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aWV3RXZlbnQuZW1pdChKU09OLnN0cmluZ2lmeSh0aGlzLnZ4Rm9ybUluZm8pKTtcclxuICB9XHJcblxyXG4gIGJ0bkRlbGV0ZSgpIHtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNvbmZpcm0oe1xyXG4gICAgICBuelRpdGxlOiBcIuaPkOekulwiLFxyXG4gICAgICBuekNvbnRlbnQ6IFwi5oKo56Gu5a6a6KaB5Yig6Zmk6YCJ5Lit55qE5a2X5q6177yfXCIsXHJcbiAgICAgIG56T25PazogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Q2hlY2tGaWVsZHMoKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuZm9ybV9maWVsZHMuZm9yRWFjaCgoZmllbGQsIGluZGV4LCBvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGZpZWxkLmtleSA9PT0gaXRlbS5maWVsZC5rZXkgJiZcclxuICAgICAgICAgICAgICBfLmdldChmaWVsZCwgXCJ0ZW1wbGF0ZU9wdGlvbnMuaXNidXRpbnRpblwiKSAhPSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0VGFibGVGaWVsZFN0YXR1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ0bk1vdmVVcCgpIHtcclxuICAgIHRoaXMuZ2V0Q2hlY2tGaWVsZHMoKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaW5kZXggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtX2ZpZWxkcy5zcGxpY2UoaXRlbS5pbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5mb3JtX2ZpZWxkcy5zcGxpY2UoaXRlbS5pbmRleCAtIDEsIDAsIGl0ZW0uZmllbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ0bk1vdmVEb3duKCkge1xyXG4gICAgdGhpcy5nZXRDaGVja0ZpZWxkcygpXHJcbiAgICAgIC5yZXZlcnNlKClcclxuICAgICAgLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaW5kZXggPCB0aGlzLmZvcm1fZmllbGRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybV9maWVsZHMuc3BsaWNlKGl0ZW0uaW5kZXgsIDEpO1xyXG4gICAgICAgICAgdGhpcy5mb3JtX2ZpZWxkcy5zcGxpY2UoaXRlbS5pbmRleCArIDEsIDAsIGl0ZW0uZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBidG5BZGRGaWVsZHMoKSB7XHJcbiAgICB0aGlzLnNlbGVjdFRhYmxlRmllbGRzKCk7XHJcbiAgfVxyXG5cclxuICBidG5BZGRSZW1hcmsoKSB7XHJcbiAgICB0aGlzLnZ4VHJhbnNmZXJTZXJ2aWNlLnRyYW5zZmVyTGFiZWxUb0Zvcm0oXHJcbiAgICAgIHRoaXMuZm9ybV9maWVsZHMsXHJcbiAgICAgIHRoaXMuZ2V0Q2hlY2tGaWVsZHMoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGJ0bkFkZExpbmUoKSB7XHJcbiAgICB0aGlzLnZ4VHJhbnNmZXJTZXJ2aWNlLnRyYW5zZmVyTGluZVRvRm9ybShcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkcyxcclxuICAgICAgdGhpcy5nZXRDaGVja0ZpZWxkcygpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYnRuQWRkR3JvdXAoKSB7XHJcbiAgICBsZXQgdGFibGVjb2RlID0gdGhpcy5nZXRUYWJsZU11bHRpcGxlQ29kZSgpO1xyXG4gICAgaWYgKHRhYmxlY29kZSA9PSBudWxsIHx8IHRhYmxlY29kZSA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZS53YXJuaW5nKFxyXG4gICAgICAgIFwi5b2T5YmN5Lia5Yqh6KGo5rKh5pyJ55u45YWz6IGU55qE5aSa6KGo5Y2V6K6w5b2V77yM5pWF5LiN6IO95re75Yqg5aSa6K6w5b2V5Yy65Z+f77yBXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmJ1c2luZXNzX3RhYmxlcyAmJlxyXG4gICAgICB0aGlzLmJ1c2luZXNzX3RhYmxlcy5jaGlsZCAmJlxyXG4gICAgICB0aGlzLmJ1c2luZXNzX3RhYmxlcy5jaGlsZC5tdWx0aXBsZSAmJlxyXG4gICAgICB0aGlzLmJ1c2luZXNzX3RhYmxlcy5jaGlsZC5tdWx0aXBsZS5sZW5ndGggPiAwXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuYnVzaW5lc3NfdGFibGVzLmNoaWxkLm11bHRpcGxlLnNvbWUoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0udGFibGVxdW90ZSAhPT0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnZ4RGlhbG9nU2VydmljZS5DcmVhdGVNb2RlbERpYWxvZyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbnpUaXRsZTogXCLnvJbovpFcIixcclxuICAgICAgICAgICAgc2l6ZTogXCJsYXJnZVwiLFxyXG4gICAgICAgICAgICBuekNvbnRlbnQ6IFZYRm9ybURlc2lnblRhYmxlc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgYnVzaW5lc3NUYWJsZTogdGhpcy5idXNpbmVzc190YWJsZXMsIHRhYmxlVHlwZTogXCJzaW5nbGVcIiB9LFxyXG4gICAgICAgICAgKGluc3RhbmNlOiBhbnksIG1vZGFsOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52eFRyYW5zZmVyU2VydmljZS50cmFuc2Zlckdyb3VwVG9Gb3JtKFxyXG4gICAgICAgICAgICAgIHRoaXMuZm9ybV9maWVsZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRDaGVja0ZpZWxkcygpLFxyXG4gICAgICAgICAgICAgIGluc3RhbmNlLnJhZGlvVmFsdWVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFRhYmxlRmllbGRTdGF0dXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidG5Db2x1bW4odHlwZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnZ4Rm9ybUluZm8uY29sdW1uID0gYGxheW91dC1jb2x1bW4tJHt0eXBlfWA7XHJcbiAgICB0aGlzLmxheW91dF9jb2x1bW4gPSB0aGlzLnZ4Rm9ybUluZm8uY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgYnRuUm93KHR5cGU6IG51bWJlcikge1xyXG4gICAgdGhpcy52eEZvcm1JbmZvLnJvdyA9IGBsYXlvdXQtcm93LSR7dHlwZX1gO1xyXG4gICAgdGhpcy5sYXlvdXRfcm93ID0gdGhpcy52eEZvcm1JbmZvLnJvdztcclxuICB9XHJcblxyXG4gIGdldENoZWNrRmllbGRzKCkge1xyXG4gICAgbGV0IGNoZWNrZWRGaWVsZDogSUNoZWNrZWRGaWVsZFtdID0gW107XHJcbiAgICB0aGlzLmZvcm1fZmllbGRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgICBjaGVja2VkRmllbGQucHVzaCh7IGluZGV4OiBpbmRleCwgZmllbGQ6IGl0ZW0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNoZWNrZWRGaWVsZDtcclxuICB9XHJcblxyXG4gIC8q5oyJ6ZKu5Yy65Z+fLS0tZW5kKi9cclxuXHJcbiAgZ3JvdXBCdG5Nb3ZlVXBPckRvd24oZ3JvdXBGaWVsZDogVlhGb3JtRmllbGRDb25maWcsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKFxyXG4gICAgICAhXy5nZXQoZ3JvdXBGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikgfHxcclxuICAgICAgXy5nZXQoZ3JvdXBGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikubGVuZ3RoIDwgMVxyXG4gICAgKSB7XHJcbiAgICAgIGdyb3VwRmllbGQuZmllbGRBcnJheSA9IHtcclxuICAgICAgICBmaWVsZEdyb3VwOiBbXVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgbGV0IHJlcyA9IHRoaXMudnhUcmFuc2ZlclNlcnZpY2UuZ3JvdXBGaWVsZE1vdmVVcE9yRG93bihcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkcyxcclxuICAgICAgZ3JvdXBGaWVsZCxcclxuICAgICAgdHlwZVxyXG4gICAgKTtcclxuICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmZvcm1fZmllbGRzID0gcmVzO1xyXG4gICAgICBpZiAoZ3JvdXBGaWVsZC5rZXkgIT09IG51bGwgJiYgZ3JvdXBGaWVsZC5rZXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZm9ybV9tb2RlbFtncm91cEZpZWxkLmtleV0gPSBbe31dO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncm91cEJ0bkFkZExpbmVSZW1hcmsoZ3JvdXBGaWVsZDogVlhGb3JtRmllbGRDb25maWcsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKFxyXG4gICAgICAhXy5nZXQoZ3JvdXBGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikgfHxcclxuICAgICAgXy5nZXQoZ3JvdXBGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikubGVuZ3RoIDwgMVxyXG4gICAgKSB7XHJcbiAgICAgIGdyb3VwRmllbGQuZmllbGRBcnJheSA9IHtcclxuICAgICAgICBmaWVsZEdyb3VwOiBbXVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgbGV0IHJlcyA9IG51bGw7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJsaW5lXCIpIHtcclxuICAgICAgcmVzID0gdGhpcy52eFRyYW5zZmVyU2VydmljZS5ncm91cFRyYW5zZmVyTGluZVRvRm9ybShcclxuICAgICAgICB0aGlzLmZvcm1fZmllbGRzLFxyXG4gICAgICAgIGdyb3VwRmllbGRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJyZW1hcmtcIikge1xyXG4gICAgICByZXMgPSB0aGlzLnZ4VHJhbnNmZXJTZXJ2aWNlLmdyb3VwVHJhbnNmZXJSZW1hcmtUb0Zvcm0oXHJcbiAgICAgICAgdGhpcy5mb3JtX2ZpZWxkcyxcclxuICAgICAgICBncm91cEZpZWxkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkcyA9IHJlcztcclxuICAgICAgaWYgKGdyb3VwRmllbGQua2V5ICE9PSBudWxsICYmIGdyb3VwRmllbGQua2V5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmZvcm1fbW9kZWxbZ3JvdXBGaWVsZC5rZXldID0gW3t9XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3JvdXBCdG5UYWJsZUZpZWxkcyhncm91cEZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy52eERpYWxvZ1NlcnZpY2UuQ3JlYXRlTW9kZWxEaWFsb2coXHJcbiAgICAgIHtcclxuICAgICAgICBuelRpdGxlOiBcIue8lui+kVwiLFxyXG4gICAgICAgIHNpemU6IFwibGFyZ2VcIixcclxuICAgICAgICBuekNvbnRlbnQ6IFZYRm9ybURlc2lnblRhYmxlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBidXNpbmVzc1RhYmxlOiB0aGlzLmJ1c2luZXNzX3RhYmxlcyxcclxuICAgICAgICB0YWJsZVR5cGU6IFwibXVsdGlwbGVcIixcclxuICAgICAgICBmaWVsZENvbmZpZzogZ3JvdXBGaWVsZFxyXG4gICAgICB9LFxyXG4gICAgICAoaW5zdGFuY2U6IGFueSwgbW9kYWw6IGFueSkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy52eFRyYW5zZmVyU2VydmljZS5ncm91cFRyYW5zZmVyU2VsZWN0RmllbGRUb0Zvcm0oXHJcbiAgICAgICAgICB0aGlzLmZvcm1fZmllbGRzLFxyXG4gICAgICAgICAgZ3JvdXBGaWVsZCxcclxuICAgICAgICAgIHRoaXMuZ2V0Q2hlY2tGaWVsZHMoKSxcclxuICAgICAgICAgIHRoaXMuYnVzaW5lc3NfdGFibGVzLFxyXG4gICAgICAgICAgaW5zdGFuY2UubWFwT2ZDaGVja2VkSWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtX2ZpZWxkcyA9IHJlcztcclxuICAgICAgICAgIGlmIChncm91cEZpZWxkLmtleSAhPT0gbnVsbCAmJiBncm91cEZpZWxkLmtleSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybV9tb2RlbFtncm91cEZpZWxkLmtleV0gPSBbe31dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0VGFibGVGaWVsZFN0YXR1cygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBCdG5EZWxldGVGaWVsZHMoZ3JvdXBGaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmIChcclxuICAgICAgIV8uZ2V0KGdyb3VwRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpIHx8XHJcbiAgICAgIF8uZ2V0KGdyb3VwRmllbGQsIFwiZmllbGRBcnJheS5maWVsZEdyb3VwXCIpLmxlbmd0aCA8IDFcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzID0gdGhpcy52eFRyYW5zZmVyU2VydmljZS5ncm91cFRyYW5zZmVyRGVsZXRlRm9ybShcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkcyxcclxuICAgICAgZ3JvdXBGaWVsZFxyXG4gICAgKTtcclxuICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmZvcm1fZmllbGRzID0gcmVzO1xyXG4gICAgICBpZiAoZ3JvdXBGaWVsZC5rZXkgIT09IG51bGwgJiYgZ3JvdXBGaWVsZC5rZXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZm9ybV9tb2RlbFtncm91cEZpZWxkLmtleV0gPSBbe31dO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRUYWJsZUZpZWxkU3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0VGFibGVzSW5mbygpIHtcclxuICAgIHRoaXMuYnVzaW5lc3NfdGFibGVzO1xyXG4gICAgdGhpcy5kYXRhU2VydmljZVxyXG4gICAgICAuZ2V0QnVzaW5lc3NUYWJsZXModGhpcy5hcGkudGFibGVzLnVybCwgeyBmb3JtY29kZTogdGhpcy5mb3JtQ29kZSB9KVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1c2luZXNzX3RhYmxlcyA9IHJlcztcclxuICAgICAgICAgIHRoaXMuaW5pdEZvcm1JbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRGb3JtSW5mbygpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0Rm9ybUluZm8odGhpcy5hcGkuZm9ybS51cmwsIHsgZm9ybWNvZGU6IHRoaXMuZm9ybUNvZGUgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMudnhGb3JtSW5mbyA9IHtcclxuICAgICAgICBjb2RlOiByZXMuY29kZSxcclxuICAgICAgICBuYW1lOiByZXMubmFtZSxcclxuICAgICAgICB0eXBlOiByZXMudHlwZSxcclxuICAgICAgICBmaWVsZHM6IHJlcy5maWVsZHNcclxuICAgICAgfTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMudnhGb3JtSW5mby5maWVsZHMgIT09IG51bGwgJiZcclxuICAgICAgICB0aGlzLnZ4Rm9ybUluZm8uZmllbGRzICE9PSB1bmRlZmluZWRcclxuICAgICAgKSB7XHJcblxyXG4gICAgICB0aGlzLnZ4Rm9ybUNvbW1vblNlcnZpY2UuaW5pdEZvcm1GaWVsZE1vZGVsKHRoaXMudnhGb3JtSW5mby5maWVsZHMsIHRoaXMuZm9ybV9tb2RlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybV9maWVsZHMgPSB0aGlzLnZ4Rm9ybUluZm8uZmllbGRzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMuY29sdW1uICE9IHVuZGVmaW5lZCAmJiByZXMuY29sdW1uICE9IG51bGwgJiYgcmVzLmNvbHVtbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy52eEZvcm1JbmZvLmNvbHVtbiA9IHJlcy5jb2x1bW47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy52eEZvcm1JbmZvLmNvbHVtbiA9IFwibGF5b3V0LWNvbHVtbi0zXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlcy5yb3cgIT0gdW5kZWZpbmVkICYmIHJlcy5yb3cgIT0gbnVsbCAmJiByZXMucm93ICE9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLnZ4Rm9ybUluZm8ucm93ID0gcmVzLnJvdztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZ4Rm9ybUluZm8ucm93ID0gXCJsYXlvdXQtcm93LTFcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy52eEZvcm1JbmZvLmNvbHVtbiAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICB0aGlzLnZ4Rm9ybUluZm8uY29sdW1uICE9IG51bGwgJiZcclxuICAgICAgICB0aGlzLnZ4Rm9ybUluZm8ucm93ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHRoaXMudnhGb3JtSW5mby5yb3cgIT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmxheW91dF9jb2x1bW4gPSB0aGlzLnZ4Rm9ybUluZm8uY29sdW1uO1xyXG4gICAgICAgIHRoaXMubGF5b3V0X3JvdyA9IHRoaXMudnhGb3JtSW5mby5yb3c7XHJcbiAgICAgICAgLy9kZWJ1Z2dlclxyXG4gICAgICAgIHRoaXMudnhEZXNnaW5Ub0Zvcm1TZXJ2aWNlLmluaXRGb3JtRmllbGRCeVRhYmxlcyhcclxuICAgICAgICAgIHRoaXMuYnVzaW5lc3NfdGFibGVzLFxyXG4gICAgICAgICAgdGhpcy5mb3JtX2ZpZWxkc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5pbml0VGFibGVGaWVsZFN0YXR1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRUYWJsZUZpZWxkU3RhdHVzKCkge1xyXG4gICAgdGhpcy52eERlc2dpblRvRm9ybVNlcnZpY2UuaW5pdFRhYmxlU3RhdHVzKFxyXG4gICAgICB0aGlzLmJ1c2luZXNzX3RhYmxlcyxcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkc1xyXG4gICAgKTtcclxuICAgIHRoaXMuaW5pdFRhYmxlc0RhdGEoKTtcclxuICB9XHJcblxyXG4gIGluaXRUYWJsZXNEYXRhKCkge1xyXG4gICAgdGhpcy50YWJsZV9EYXRhID0gW107XHJcbiAgICBsZXQgYnVzaW5lc3MgPSBjbG9uZSh0aGlzLmJ1c2luZXNzX3RhYmxlcyk7XHJcbiAgICBsZXQgdGFibGVzOiBhbnkgPSBbXTtcclxuICAgIGlmICghYnVzaW5lc3MpIHJldHVybjtcclxuXHJcbiAgICBpZiAoYnVzaW5lc3MucHJpbWFyeSAmJiBidXNpbmVzcy5wcmltYXJ5ICE9IG51bGwpIHtcclxuICAgICAgdGFibGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhYmxldHlwZTogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICB0YWJsZWxhYmVsOiBcIuS4u+ihqFwiLFxyXG4gICAgICAgICAgdGFibGVjb2RlOiBidXNpbmVzcy5wcmltYXJ5W1widGFibGVjb2RlXCJdLFxyXG4gICAgICAgICAgdGFibGVuYW1lOiBidXNpbmVzcy5wcmltYXJ5W1widGFibGVuYW1lXCJdLFxyXG4gICAgICAgICAgdGFibGVmaWVsZHM6IGJ1c2luZXNzLnByaW1hcnlbXCJ0YWJsZWZpZWxkc1wiXVxyXG4gICAgICAgIH1cclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgYnVzaW5lc3MuY2hpbGQgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQgIT0gbnVsbCAmJlxyXG4gICAgICBidXNpbmVzcy5jaGlsZC5zaW5nbGUgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQuc2luZ2xlICE9IG51bGwgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQuc2luZ2xlLmxlbmd0aCA+IDBcclxuICAgICkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShidXNpbmVzcy5jaGlsZC5zaW5nbGUpKSB7XHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQuc2luZ2xlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGFibGVzLnB1c2goe1xyXG4gICAgICAgICAgICB0YWJsZXR5cGU6IFwic2luZ2xlXCIsXHJcbiAgICAgICAgICAgIHRhYmxlbGFiZWw6IFwi5Y2V6K6w5b2V5a2Q6KGoXCIsXHJcbiAgICAgICAgICAgIHRhYmxlY29kZTogaXRlbVtcInRhYmxlY29kZVwiXSxcclxuICAgICAgICAgICAgdGFibGVuYW1lOiBpdGVtW1widGFibGVuYW1lXCJdLFxyXG4gICAgICAgICAgICB0YWJsZWZpZWxkczogaXRlbVtcInRhYmxlZmllbGRzXCJdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBidXNpbmVzcy5jaGlsZCAmJlxyXG4gICAgICBidXNpbmVzcy5jaGlsZCAhPSBudWxsICYmXHJcbiAgICAgIGJ1c2luZXNzLmNoaWxkLm11bHRpcGxlICYmXHJcbiAgICAgIGJ1c2luZXNzLmNoaWxkLm11bHRpcGxlICE9IG51bGwgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGJ1c2luZXNzLmNoaWxkLm11bHRpcGxlKSkge1xyXG4gICAgICAgIGJ1c2luZXNzLmNoaWxkLm11bHRpcGxlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGFibGVzLnB1c2goe1xyXG4gICAgICAgICAgICB0YWJsZXR5cGU6IFwibXVsdGlwbGVcIixcclxuICAgICAgICAgICAgdGFibGVsYWJlbDogXCLlpJrorrDlvZXlrZDooahcIixcclxuICAgICAgICAgICAgdGFibGVjb2RlOiBpdGVtW1widGFibGVjb2RlXCJdLFxyXG4gICAgICAgICAgICB0YWJsZW5hbWU6IGl0ZW1bXCJ0YWJsZW5hbWVcIl0sXHJcbiAgICAgICAgICAgIHRhYmxlZmllbGRzOiBpdGVtW1widGFibGVmaWVsZHNcIl1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlX0RhdGEgPSB0YWJsZXM7XHJcbiAgfVxyXG5cclxuICAvL+ihqOWNlemAieaLqVxyXG4gIHNlbGVjdFRhYmxlRmllbGRzKCkge1xyXG4gICAgdGhpcy52eERpYWxvZ1NlcnZpY2UuQ3JlYXRlTW9kZWxEaWFsb2coXHJcbiAgICAgIHtcclxuICAgICAgICBuelRpdGxlOiBcIue8lui+kVwiLFxyXG4gICAgICAgIHNpemU6IFwibGFyZ2VcIixcclxuICAgICAgICBuekNvbnRlbnQ6IFZYRm9ybURlc2lnblRhYmxlXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgYnVzaW5lc3NUYWJsZTogdGhpcy5idXNpbmVzc190YWJsZXMsIHRhYmxlVHlwZTogXCJzaW5nbGVcIiB9LFxyXG4gICAgICAoaW5zdGFuY2U6IGFueSwgbW9kYWw6IGFueSkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnZ4VHJhbnNmZXJTZXJ2aWNlLnRyYW5zZmVyU2VsZWN0RmllbGRUb0Zvcm0oXHJcbiAgICAgICAgICB0aGlzLmZvcm1fZmllbGRzLFxyXG4gICAgICAgICAgdGhpcy5nZXRDaGVja0ZpZWxkcygpLFxyXG4gICAgICAgICAgdGhpcy5idXNpbmVzc190YWJsZXMsXHJcbiAgICAgICAgICBpbnN0YW5jZS5tYXBPZkNoZWNrZWRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtX2ZpZWxkcykpXHJcbiAgICAgICAgdGhpcy5pbml0VGFibGVGaWVsZFN0YXR1cygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVNdWx0aXBsZUNvZGUoKSB7XHJcbiAgICBsZXQgcmVzVGFibGVDb2RlID0gXCJcIjtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5idXNpbmVzc190YWJsZXMgJiZcclxuICAgICAgdGhpcy5idXNpbmVzc190YWJsZXMuY2hpbGQgJiZcclxuICAgICAgdGhpcy5idXNpbmVzc190YWJsZXMuY2hpbGQubXVsdGlwbGUgJiZcclxuICAgICAgdGhpcy5idXNpbmVzc190YWJsZXMuY2hpbGQubXVsdGlwbGUubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnVzaW5lc3NfdGFibGVzLmNoaWxkLm11bHRpcGxlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnRhYmxlcXVvdGUgIT09IHRydWUgJiYgcmVzVGFibGVDb2RlID09IFwiXCIpIHtcclxuICAgICAgICAgIHJlc1RhYmxlQ29kZSA9IGl0ZW0udGFibGVjb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzVGFibGVDb2RlO1xyXG4gIH1cclxuXHJcbiAgLy/kv67mlLlGaWVsZFxyXG4gIGVkaXRGb3JtRmllbGRDb25maWcoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBsZXQgY29udGVudDogYW55O1xyXG4gICAgbGV0IHRpdGxlID0gXCJcIjtcclxuICAgIGlmIChmaWVsZC50eXBlID09PSBcImh0bWxcIikge1xyXG4gICAgICB0aXRsZSA9IFwi57yW6L6R54mH5q615paH5pys5o+P6L+wXCI7XHJcbiAgICAgIGNvbnRlbnQgPSBWWEZvcm1EZXNpZ25GaWVsZExhYmVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGl0bGUgPSBcIue8lui+keWtl+autSAtIFwiICsgXy5nZXQoZmllbGQsIFwidGVtcGxhdGVPcHRpb25zLmxhYmVsXCIpO1xyXG4gICAgICBjb250ZW50ID0gVlhGb3JtRGVzaWduRmllbGQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZ4RGlhbG9nU2VydmljZS5DcmVhdGVNb2RlbERpYWxvZyhcclxuICAgICAge1xyXG4gICAgICAgIG56VGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIHNpemU6IFwibGFyZ2VcIixcclxuICAgICAgICBuekNvbnRlbnQ6IGNvbnRlbnRcclxuICAgICAgfSxcclxuICAgICAgeyBmaWVsZDogY2xvbmUoZmllbGQpIH0sXHJcbiAgICAgIChpbnN0YW5jZTogYW55LCBtb2RhbDogYW55KSA9PiB7IFxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5jaGVja1NhdmUoKSkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMudnhUcmFuc2ZlclNlcnZpY2UuZWRpdEZvcm1GaWVsZEluZm8oXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybV9maWVsZHMsXHJcbiAgICAgICAgICAgIGluc3RhbmNlLmZvcm1GaWVsZFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtX2ZpZWxkcyA9IHJlc3VsdC5mb3JtRmlsZWRzO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmdyb3VwS2V5ICE9IG51bGwgJiYgcmVzdWx0Lmdyb3VwS2V5ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm1fbW9kZWxbcmVzdWx0Lmdyb3VwS2V5XSA9IFt7fV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1vZGFsLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL+WIoOmZpEZpZWxkXHJcbiAgZGVsZXRlRm9ybUZpZWxkQ29uZmlnKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMudnhUcmFuc2ZlclNlcnZpY2UuZGVsZXRlRm9ybUZpZWxkSW5mbyhcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkcyxcclxuICAgICAgZmllbGRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZm9ybV9maWVsZHMgPSByZXN1bHQuZm9ybUZpbGVkcztcclxuICAgICAgaWYgKHJlc3VsdC5ncm91cEtleSAhPSBudWxsICYmIHJlc3VsdC5ncm91cEtleSAhPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtX21vZGVsW3Jlc3VsdC5ncm91cEtleV0gPSBbe31dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmluaXRUYWJsZUZpZWxkU3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==