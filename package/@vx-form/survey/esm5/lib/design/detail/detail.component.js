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
import { VXTransferService } from "../../tools/transferService";
import { Guid } from "@vx-form/core";
var VXSurveyDesignDetail = /** @class */ (function () {
    function VXSurveyDesignDetail(message, modalService, vxFormAntService, vxDialogService, dataService, vxTransferService, vxFormCommonService) {
        this.message = message;
        this.modalService = modalService;
        this.vxFormAntService = vxFormAntService;
        this.vxDialogService = vxDialogService;
        this.dataService = dataService;
        this.vxTransferService = vxTransferService;
        this.vxFormCommonService = vxFormCommonService;
        this.formCode = "";
        this.api = {
            form: { url: "assets/mockData/survey.json" }
        };
        this.saveEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
        this.previewEvent = new EventEmitter();
        this.pageStatus = 1;
        this.form_model = {};
        this.form_group = new FormGroup({});
        this.form_fields = [];
        this.vxSurveyInfo = {
            code: "",
            name: "",
            first: {
                title: "",
                text: ""
            },
            last: {
                title: "",
                text: ""
            },
            pages: [
                {
                    code: "page1",
                    name: "第1页",
                    questions: []
                }
            ]
        };
        this.show_setting = false;
        this.questionField = {};
        this.pageSelectedIndex = 0;
    }
    /**
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.vxFormAntService.questionEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.questionOperational(res);
        }));
        this.vxFormAntService.optionEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.optionOperational(res);
        }));
        this.vxFormAntService.dragDropEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.addQuestionDragDrop(res);
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.formCode) {
            this.initFormInfo();
        }
    };
    /**
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /*按钮区域---begin*/
    /*按钮区域---begin*/
    /**
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.saveSurvey = /*按钮区域---begin*/
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var objSurvey = clone(this.vxSurveyInfo);
        objSurvey.pages.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.vxFormCommonService.initFormFieldProperty(item.questions);
        }));
        this.saveEvent.emit(JSON.stringify(objSurvey));
    };
    /**
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.initFormInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getFormInfo(this.api.form.url, { formcode: this.formCode }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.vxSurveyInfo = {
                code: res.code,
                name: res.name,
                type: res.type,
                first: res.first,
                last: res.last,
                pages: res.pages
            };
            if (_this.vxSurveyInfo.pages != undefined && (_this.vxSurveyInfo.pages == null || _this.vxSurveyInfo.pages.length == 0)) {
                _this.vxSurveyInfo.pages.push({
                    "code": "pageCode1",
                    "name": "第1页",
                    "questions": []
                });
            }
            _this.getQuestionListByPageIndex(0);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.pageClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // if (this.vxSurveyInfo.pages != undefined) {
        //   if (e == 0 || this.vxSurveyInfo.pages.length == e - 1) {
        //     this.show_setting = false;
        //   }
        //   else {
        //     if (e > 0) {
        //       this.getQuestionListByPageIndex(e - 1);
        //     }
        //   }
        // }
        this.getQuestionListByPageIndex(e);
    };
    /**
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.addPage = /**
     * @return {?}
     */
    function () {
        if (this.vxSurveyInfo.pages != undefined) {
            /** @type {?} */
            var newPage = {
                code: "pagecode_" + (this.vxSurveyInfo.pages.length + 1),
                name: "\u7B2C" + (this.vxSurveyInfo.pages.length + 1) + "\u9875",
                questions: []
            };
            this.vxSurveyInfo.pages.push(newPage);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.deletePage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.vxSurveyInfo.pages != undefined) {
            this.vxSurveyInfo.pages.splice(index, 1);
        }
    };
    /**
     * @param {?} pageIndex
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.getQuestionListByPageIndex = /**
     * @param {?} pageIndex
     * @return {?}
     */
    function (pageIndex) {
        if (this.vxSurveyInfo.pages != undefined && this.vxSurveyInfo.pages.length > 0 && this.vxSurveyInfo.pages[pageIndex].questions != undefined) {
            this.form_fields = [{
                    "type": "drag-drop",
                    "key": "drag-droplist",
                    "fieldGroup": this.vxSurveyInfo.pages[pageIndex].questions
                }];
        }
    };
    //题目
    //题目
    /**
     * @param {?} res
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.questionOperational = 
    //题目
    /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        /** @type {?} */
        var resType = res["sign"];
        /** @type {?} */
        var resField = res["field"];
        /** @type {?} */
        var rQuestion;
        /** @type {?} */
        var rIndex;
        this.formFieldGroup.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (item, index, object) {
            item.active = false;
            if (item.key == resField.key) {
                item.active = true;
                rQuestion = item;
                rIndex = index;
            }
        }));
        switch (resType) {
            case "active":
                this.questionField = rQuestion;
                this.show_setting = true;
                break;
            case "logic":
                this.message.success("逻辑设置");
                break;
            case "copy":
                /** @type {?} */
                var copyQuestion = _.cloneDeep(rQuestion);
                copyQuestion.key = Guid.create()["value"];
                copyQuestion.active = false;
                this.formFieldGroup.splice(rIndex + 1, 0, copyQuestion);
                this.message.success("拷贝题目");
                break;
            case "delete":
                this.formFieldGroup.splice(rIndex, 1);
                this.message.success("删除题目");
                this.questionField = {};
                this.show_setting = false;
                break;
        }
    };
    //题目选项
    //题目选项
    /**
     * @param {?} res
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.optionOperational = 
    //题目选项
    /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        /** @type {?} */
        var resType = res["sign"];
        /** @type {?} */
        var resOption = res["option"];
        /** @type {?} */
        var resField = res["field"];
        /** @type {?} */
        var rQuestion;
        /** @type {?} */
        var rIndex;
        this.formFieldGroup.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (item, index, object) {
            item.active = false;
            rIndex = index;
            if (item.key == resField.key) {
                item.active = true;
                rQuestion = item;
            }
        }));
        switch (resType) {
            case "add":
                resField.templateOptions.options.push({
                    "label": "选项",
                    "value": Guid.create()["value"],
                    "score": 0,
                    "input": false
                });
                this.message.success("添加选项");
                break;
            case "adds":
                this.message.success("批量添加");
                break;
            case "delete":
                resField.templateOptions.options.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                function (item, index, object) {
                    if (item.value == resOption.value) {
                        object.splice(index, 1);
                    }
                }));
                this.message.success("删除选项");
                break;
            case "subtitle":
                resField.templateOptions.subtitle.push({
                    "label": "矩阵行",
                    "value": Guid.create()["value"]
                });
                this.message.success("添加矩阵行");
                break;
        }
    };
    //添加题目
    //添加题目
    /**
     * @param {?} data
     * @param {?=} index
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.addQuestionType = 
    //添加题目
    /**
     * @param {?} data
     * @param {?=} index
     * @return {?}
     */
    function (data, index) {
        if (index === void 0) { index = -1; }
        this.vxTransferService.transferQuestionByType(data, this.formFieldGroup, index);
    };
    //拖拽添加题目
    //拖拽添加题目
    /**
     * @param {?} res
     * @return {?}
     */
    VXSurveyDesignDetail.prototype.addQuestionDragDrop = 
    //拖拽添加题目
    /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        /** @type {?} */
        var data = res["previousData"][res["previousIndex"]];
        this.vxTransferService.transferQuestionByType(data, this.formFieldGroup, res["currentIndex"]);
    };
    Object.defineProperty(VXSurveyDesignDetail.prototype, "formFieldGroup", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = [];
            if (this.form_fields != null && this.form_fields.length > 0 && this.form_fields[0].fieldGroup != undefined) {
                result = this.form_fields[0].fieldGroup;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    VXSurveyDesignDetail.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-design-detail",
                    template: "<div class=\"survey-design\" cdkDropListGroup>\r\n    <div class=\"layout\">\r\n        <nz-tabset>\r\n            <nz-tab nzTitle=\"\u9898\u76EE\u7C7B\u578B\">\r\n                <div class=\"question-list vxsurvey-scrollbar\">\r\n                    <vx-question-type (questionTypeEvent)=\"addQuestionType($event)\" (addPageEvent)=\"addPage()\" (saveSurveyEvent)=\"saveSurvey()\">\r\n                    </vx-question-type>\r\n                </div>\r\n            </nz-tab>\r\n            <nz-tab nzTitle=\"\u9898\u76EE\u5927\u7EB2\">\r\n                <div class=\"question-list vxsurvey-scrollbar\">\r\n                    <vx-question-list *ngIf=\"vxSurveyInfo\" [vxSurveyInfo]=\"vxSurveyInfo\"></vx-question-list>\r\n                </div>\r\n            </nz-tab>\r\n        </nz-tabset>\r\n    </div>\r\n    <div class=\"panel\">\r\n        <div class=\"buttonlist\"> \r\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"saveSurvey()\">\u4FDD\u5B58\u6570\u636E</button>\r\n        </div>\r\n        <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"pageSelectedIndex\" (nzSelectedIndexChange)=\"pageClick($event)\">\r\n            <!-- <nz-tab [nzTitle]=\"firstPageTemplate\">\r\n                <ng-template #firstPageTemplate>\r\n                    <div>\u5F00\u59CB\u9875</div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"vxsurvey-firstform vxsurvey-scrollbar\">\r\n                        <vxsurvey-first-page></vxsurvey-first-page>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab> -->\r\n            <ng-container *ngIf=\"vxSurveyInfo!=null && vxSurveyInfo.pages\">\r\n                <ng-container *ngFor=\"let page of vxSurveyInfo.pages;let index=index;\">\r\n                    <nz-tab [nzTitle]=\"titleTemplate\">\r\n                        <ng-template #titleTemplate>\r\n                            <div>\r\n                                \u7B2C{{ index+1 }}\u9875\r\n                                <i *ngIf=\"index>0\" nz-icon nzType=\"close\" (click)=\"deletePage(index)\" class=\"ant-tabs-close-x\"></i>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template nz-tab>\r\n                            <div class=\"vxsurvey-form vxsurvey-scrollbar\">\r\n                                <form [formGroup]=\"form_group\" class=\"layout-column-1\" nz-form>\r\n                                    <vxform [fields]=\"form_fields\" [status]=\"1\" [form]=\"form_group\" [model]=\"form_model\">\r\n                                    </vxform>\r\n                                </form>\r\n                            </div>\r\n                        </ng-template>\r\n                    </nz-tab>\r\n                </ng-container>\r\n            </ng-container>\r\n            <!-- <nz-tab [nzTitle]=\"lastPageTemplate\">\r\n                <ng-template #lastPageTemplate>\r\n                    <div>\u7ED3\u675F\u9875</div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"vxsurvey-lastform vxsurvey-scrollbar\">\r\n                        <vxsurvey-last-page></vxsurvey-last-page>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab> -->\r\n        </nz-tabset>\r\n    </div>\r\n    <div class=\"setting\">\r\n        <div class=\"setting_wrap\" *ngIf=\"show_setting\">\r\n            <setting-template [field]=\"questionField\"></setting-template>\r\n        </div>\r\n    </div>\r\n</div>",
                    providers: [DataService, VXTransferService],
                    styles: ["::ng-deep .formly-drag-drop_wrap.cdk-drag-preview{border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;cursor:move}:host ::ng-deep{display:flex;width:100%;height:100%;background-color:#f3f3f3}:host ::ng-deep .survey-design{position:relative;width:100%;height:100%;overflow:hidden;padding:0 260px 0 250px}:host ::ng-deep .survey-design :focus{outline:0;box-shadow:none}:host ::ng-deep .survey-design .cke_focus{background-color:#f4f4f4;border:0}:host ::ng-deep .survey-design .inline_editor_hidden{display:none}:host ::ng-deep .survey-design .inline_editor_show{padding:8px 10px}:host ::ng-deep .survey-design nz-tabset{height:100%;position:inherit}:host ::ng-deep .survey-design .layout{float:left;width:250px;background-color:#fff;padding:15px 5px 0 25px;position:absolute;left:0;height:100%;top:0}:host ::ng-deep .survey-design .layout button{font-size:12px}:host ::ng-deep .survey-design .layout .question-list{height:calc(100% - 80px);overflow-y:auto;position:absolute;width:100%;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .survey-design .layout .title{font-size:14px;color:#9b9b9b;margin-bottom:10px}:host ::ng-deep .survey-design .layout-column ul{display:inline-block;width:100%}:host ::ng-deep .survey-design .layout-column ul li{float:left;text-align:center}:host ::ng-deep .survey-design .layout-column ul li div{width:56px;height:56px;line-height:63px;border-radius:4px;background-color:#ececec;margin-bottom:5px}:host ::ng-deep .survey-design .layout-column ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .survey-design .layout-column ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .survey-design .layout-column ul li:nth-child(1),:host ::ng-deep .survey-design .layout-column ul li:nth-child(2){margin:0 15px 0 0}:host ::ng-deep .survey-design .layout-row ul{display:inline-block;width:100%}:host ::ng-deep .survey-design .layout-row ul li{float:left;text-align:center}:host ::ng-deep .survey-design .layout-row ul li div{width:90px;height:32px;line-height:32px;border-radius:4px;background-color:#ececec;margin-bottom:5px;cursor:pointer}:host ::ng-deep .survey-design .layout-row ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .survey-design .layout-row ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .survey-design .layout-row ul li:nth-child(1){margin:0 15px 0 0}:host ::ng-deep .survey-design .layout-el li{width:200px;height:33px;line-height:33px;border-radius:4px;border:1px solid #dcdce0;background-color:#fff;margin:0 0 10px!important;font-size:13px;color:#323232}:host ::ng-deep .survey-design .layout-el li i{margin:0 8px;font-size:14px;color:#bfbfbf}:host ::ng-deep .survey-design .layout-el li:hover{background-color:#71a9ff;cursor:pointer;color:#fff}:host ::ng-deep .survey-design .layout-el li:hover i{color:#fff}:host ::ng-deep .survey-design .panel{position:relative;height:100%;width:100%;padding:0 15px}:host ::ng-deep .survey-design .panel .buttonlist{padding:10px 20px;margin:0 0 10px;background-color:#fff}:host ::ng-deep .survey-design .panel .required{display:inline-block;padding:8px 0;color:red;width:5px}:host ::ng-deep .survey-design .panel inline-editor{flex:1;width:100%}:host ::ng-deep .survey-design .panel inline-editor .cke_editable_inline{border-radius:2px;padding:8px 10px;font-size:14px;border:0 solid #f4f4f4}:host ::ng-deep .survey-design .panel .ant-tabs-bar{border:0;margin:0}:host ::ng-deep .survey-design .panel .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{border:0!important}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap{position:relative;width:100%;font-size:12px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-operate{display:none;position:absolute;right:20px;top:12px;width:100%;text-align:right}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-operate span{cursor:pointer;margin:0 0 0 10px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content{background-color:#fff;border-radius:4px;margin:0 0 20px;padding:15px 20px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_title{padding:0 180px 5px 0;display:flex;flex-direction:row;font-size:14px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_content{padding:0 180px 0 15px;width:100%;font-size:13px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_operate{color:#2672ff;display:none;padding:15px 0 0}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_operate span{margin:0 20px 0 0;cursor:pointer;font-size:13px}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .field-content{box-shadow:0 10px 15px 0 rgba(0,0,0,.1);border:2px solid #2672ff;border-radius:4px}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .field-operate{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .option_vertical{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .question-wrap_operate{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .option_wrap:hover .operate i{display:block}:host ::ng-deep .survey-design .panel .formly_empty{background-color:#fff}:host ::ng-deep .survey-design .panel .formly_empty .formly-drag-drop{padding:50px}:host ::ng-deep .survey-design .setting{float:left;width:260px;margin:0 0 0 8px;padding:0 0 10px;position:absolute;height:100%;right:0;top:0}:host ::ng-deep .survey-design .setting_wrap{scrollbar-color:transparent;overflow-y:overlay;padding:15px 0 0 20px;height:100%;background-color:#fff}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .survey-design .setting_wrap nz-select{width:65px;float:right;margin:3px;font-size:12px}:host ::ng-deep .survey-design .setting_wrap .title{color:#484848;font-size:16px;padding:8px 0 5px;border-bottom:1px solid #dde5ed}:host ::ng-deep .survey-design .setting_wrap .item{font-size:12px;padding:8px 10px 8px 0;line-height:30px;border-bottom:1px dotted #dde5ed}:host ::ng-deep .survey-design .setting_wrap .item nz-input-number,:host ::ng-deep .survey-design .setting_wrap .item nz-radio-group,:host ::ng-deep .survey-design .setting_wrap .item nz-switch{float:right;font-size:12px}:host ::ng-deep .survey-design .setting_wrap .item nz-input-number{width:50px;margin:3px 0 0}:host ::ng-deep .survey-design .setting_wrap .item>label{color:#2672ff;text-align:right;float:right;margin-right:5px;cursor:pointer}:host ::ng-deep .survey-design .setting_wrap_title{display:inline-block;color:#fff;font-size:12px;padding:5px 20px;border-radius:2px;background-color:#495165;margin:0 0 20px}:host ::ng-deep .survey-design .setting_wrap_model .title{margin:20px 0 0}:host ::ng-deep .survey-design .setting_wrap_option .title{margin:20px 0 0}:host ::ng-deep .survey-design .setting_wrap_option .item span:nth-child(2){float:right}:host ::ng-deep .survey-design .setting_wrap_option .item nz-input-number{float:right;margin:3px 5px 0 0}:host ::ng-deep .vxsurvey-firstform,:host ::ng-deep .vxsurvey-lastform{position:absolute;width:100%;height:calc(100% - 50px);display:inline-block;margin:0;padding:20px;overflow-y:auto;background-color:#fff;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar-track,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar-thumb,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .vxsurvey-form{position:absolute;width:100%;min-width:730px;height:calc(100% - 50px);display:inline-block;margin:0;padding:0 10px 20px 0;overflow-y:auto;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .vxsurvey-form .ant-input,:host ::ng-deep .vxsurvey-form input{border:0}:host ::ng-deep .vxsurvey-form .ant-calendar-picker,:host ::ng-deep .vxsurvey-form .ant-time-picker,:host ::ng-deep .vxsurvey-form .emp_name,:host ::ng-deep .vxsurvey-form .select_cascader{width:350px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap{width:100%;display:flex;flex-direction:row;padding:0 0 5px;cursor:pointer}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option{flex:1;display:flex;flex-direction:row}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-radio-wrapper{padding:7px 0}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-radio-wrapper span:nth-last-child(1){padding:0}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-checkbox-wrapper{padding:8px 0;margin-right:7px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option inline-editor .cke_editable_inline{font-size:13px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .operate{width:30px;line-height:35px;padding:8px 0 0;margin-left:8px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .operate i{display:none;width:20px;height:20px;background-color:#f4f4f4;border-radius:50%;padding:4px;color:rgba(0,0,0,.65);font-size:12px;font-weight:700}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap:nth-last-child(1){padding:0}:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option{flex-direction:column!important}:host ::ng-deep .vxsurvey-form vxsurvey-nps{display:flex;flex-direction:column}:host ::ng-deep .vxsurvey-form vxsurvey-nps .question-wrap_content{padding:0 0 0 15px!important}:host ::ng-deep .vxsurvey-form vxsurvey-nps .basic_nps{padding:0 0 0 8px}:host ::ng-deep .vxsurvey-form vxsurvey-nps .basic_nps .option{width:35px;height:35px;border-radius:50%;border:1px solid #d8d8d8;line-height:35px;margin:5px 12px 10px 0;float:left;text-align:center;font-size:14px;color:#9b9b9b}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text{padding:0;width:520px;font-size:13px}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text span:nth-child(1){float:left}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text span:nth-child(2){float:right}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .question-wrap_content{display:flex}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table{float:left}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table table{width:auto;border-top:1px solid #d8d8d8;border-right:1px solid #d8d8d8}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table table tr td{height:32px;border-left:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;padding:2px 15px}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_vertical{float:left;padding:0 0 0 10px;color:#2672ff;cursor:pointer;display:none}:host ::ng-deep .vxsurvey-form inline-editor .ant-input:focus{background-color:#ececec}:host ::ng-deep .vxsurvey-form .basic_line .line{height:0;width:100%;border-top:1px dashed #aaa;margin:10px 0 8px}:host ::ng-deep .vxsurvey-form .basic_remark{font-size:14px}:host ::ng-deep .vxsurvey-form .basic_evaluation .label{color:#fadb14;font-size:12px;padding:10px 0}:host ::ng-deep .vxsurvey-form .basic_evaluation .tag span{display:inline-block;font-size:12px;color:#aaa;padding:3px 10px;background:#fff;border:1px solid #eaeaea;border-radius:2px;margin-right:5px}:host ::ng-deep .vxsurvey-form .basic_evaluation .tag label{color:#6090df;font-size:13px;margin-left:5px;cursor:pointer}:host ::ng-deep .vxsurvey-form .quesiton-sortable-placeholder{width:100%;height:6px;background:#7b8bed}:host ::ng-deep .page_question{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1}"]
                }] }
    ];
    /** @nocollapse */
    VXSurveyDesignDetail.ctorParameters = function () { return [
        { type: NzMessageService },
        { type: NzModalService },
        { type: VXFormAntService },
        { type: VXDialogService },
        { type: DataService },
        { type: VXTransferService },
        { type: VXFormCommonService }
    ]; };
    VXSurveyDesignDetail.propDecorators = {
        formCode: [{ type: Input }],
        api: [{ type: Input }],
        saveEvent: [{ type: Output }],
        cancelEvent: [{ type: Output }],
        previewEvent: [{ type: Output }]
    };
    return VXSurveyDesignDetail;
}());
export { VXSurveyDesignDetail };
if (false) {
    /** @type {?} */
    VXSurveyDesignDetail.prototype.formCode;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.api;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.saveEvent;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.cancelEvent;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.previewEvent;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.pageStatus;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.form_model;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.form_group;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.form_fields;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.vxSurveyInfo;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.show_setting;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.questionField;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.pageSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    VXSurveyDesignDetail.prototype.message;
    /**
     * @type {?}
     * @private
     */
    VXSurveyDesignDetail.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    VXSurveyDesignDetail.prototype.vxFormAntService;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.vxDialogService;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.dataService;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.vxTransferService;
    /** @type {?} */
    VXSurveyDesignDetail.prototype.vxFormCommonService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9kZXNpZ24vZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFLTCxLQUFLLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdCdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JDO0lBMkNFLDhCQUNVLE9BQXlCLEVBQ3pCLFlBQTRCLEVBQzVCLGdCQUFrQyxFQUNuQyxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixpQkFBb0MsRUFDcEMsbUJBQXdDO1FBTnZDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ25DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdB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Q2pDLDRDQUFvQzs7Ozs7SUFDcEMsZ0RBQTBDOztJQUMxQywrQ0FBdUM7O0lBQ3ZDLDJDQUErQjs7SUFDL0IsaURBQTJDOztJQUMzQyxtREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgVlhTdXJ2ZXlJbmZvLFxyXG4gIFZYU3VydmV5UGFnZSxcclxuICBjbG9uZSxcclxuICBWWFRhYmxlQ29uZmlnLFxyXG4gIFZYRm9ybUNvbW1vblNlcnZpY2VcclxufSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL21vZGFsXCI7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwibmctem9ycm8tYW50ZC9tZXNzYWdlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtTGF5b3V0LFxyXG4gIExheW91dFBhbmVsLFxyXG4gIExheW91dENvbHVtbixcclxuICBWWFRhYmxlQnVzaW5lc3MsXHJcbiAgSUNoZWNrZWRGaWVsZCxcclxuICBJQnVzaW5lc3NUYWJsZSxcclxuICBJdGFibGUsXHJcbiAgSURlc2lnbkZvcm1BUElcclxufSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5pbXBvcnQge1xyXG4gIENka0RyYWdEcm9wLFxyXG4gIG1vdmVJdGVtSW5BcnJheSxcclxuICB0cmFuc2ZlckFycmF5SXRlbVxyXG59IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7IFZYRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RpYWxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZYVHJhbnNmZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3RyYW5zZmVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBncm91cCB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZGVzaWduLWRldGFpbFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2RldGFpbC5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZSwgVlhUcmFuc2ZlclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleURlc2lnbkRldGFpbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZvcm1Db2RlOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBJbnB1dCgpIGFwaTogSURlc2lnbkZvcm1BUEkgPSB7XHJcbiAgICBmb3JtOiB7IHVybDogXCJhc3NldHMvbW9ja0RhdGEvc3VydmV5Lmpzb25cIiB9XHJcbiAgfTtcclxuICBAT3V0cHV0KCkgc2F2ZUV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcHJldmlld0V2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwYWdlU3RhdHVzOiBudW1iZXIgPSAxO1xyXG5cclxuICBmb3JtX21vZGVsOiBhbnkgPSB7fTtcclxuICBmb3JtX2dyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcbiAgZm9ybV9maWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10gPSBbXTtcclxuXHJcbiAgdnhTdXJ2ZXlJbmZvOiBWWFN1cnZleUluZm8gPSB7XHJcbiAgICBjb2RlOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGZpcnN0OiB7XHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICB0ZXh0OiBcIlwiXHJcbiAgICB9LFxyXG4gICAgbGFzdDoge1xyXG4gICAgICB0aXRsZTogXCJcIixcclxuICAgICAgdGV4dDogXCJcIlxyXG4gICAgfSxcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2RlOiBcInBhZ2UxXCIsXHJcbiAgICAgICAgbmFtZTogXCLnrKwx6aG1XCIsXHJcbiAgICAgICAgcXVlc3Rpb25zOiBbXVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICBzaG93X3NldHRpbmcgPSBmYWxzZTtcclxuICBxdWVzdGlvbkZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gIHBhZ2VTZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtZXNzYWdlOiBOek1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE56TW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2eEZvcm1BbnRTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlLFxyXG4gICAgcHVibGljIHZ4RGlhbG9nU2VydmljZTogVlhEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHB1YmxpYyB2eFRyYW5zZmVyU2VydmljZTogVlhUcmFuc2ZlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgdnhGb3JtQ29tbW9uU2VydmljZTogVlhGb3JtQ29tbW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudnhGb3JtQW50U2VydmljZS5xdWVzdGlvbkV2ZW50LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5xdWVzdGlvbk9wZXJhdGlvbmFsKHJlcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZ4Rm9ybUFudFNlcnZpY2Uub3B0aW9uRXZlbnQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm9wdGlvbk9wZXJhdGlvbmFsKHJlcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZ4Rm9ybUFudFNlcnZpY2UuZHJhZ0Ryb3BFdmVudC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkUXVlc3Rpb25EcmFnRHJvcChyZXMpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZm9ybUNvZGUpIHtcclxuICAgICAgdGhpcy5pbml0Rm9ybUluZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkgeyB9XHJcblxyXG4gIC8q5oyJ6ZKu5Yy65Z+fLS0tYmVnaW4qL1xyXG5cclxuICBzYXZlU3VydmV5KCkge1xyXG4gICAgbGV0IG9ialN1cnZleSA9IGNsb25lKHRoaXMudnhTdXJ2ZXlJbmZvKTtcclxuICAgIG9ialN1cnZleS5wYWdlcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy52eEZvcm1Db21tb25TZXJ2aWNlLmluaXRGb3JtRmllbGRQcm9wZXJ0eShpdGVtLnF1ZXN0aW9ucyk7XHJcbiAgICB9KVxyXG4gICAgdGhpcy5zYXZlRXZlbnQuZW1pdChKU09OLnN0cmluZ2lmeShvYmpTdXJ2ZXkpKTtcclxuICB9XHJcblxyXG5cclxuICBpbml0Rm9ybUluZm8oKSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldEZvcm1JbmZvKHRoaXMuYXBpLmZvcm0udXJsLCB7IGZvcm1jb2RlOiB0aGlzLmZvcm1Db2RlIH0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLnZ4U3VydmV5SW5mbyA9IHtcclxuICAgICAgICBjb2RlOiByZXMuY29kZSxcclxuICAgICAgICBuYW1lOiByZXMubmFtZSxcclxuICAgICAgICB0eXBlOiByZXMudHlwZSxcclxuICAgICAgICBmaXJzdDogcmVzLmZpcnN0LFxyXG4gICAgICAgIGxhc3Q6IHJlcy5sYXN0LFxyXG4gICAgICAgIHBhZ2VzOiByZXMucGFnZXNcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzICE9IHVuZGVmaW5lZCAmJiAodGhpcy52eFN1cnZleUluZm8ucGFnZXMgPT0gbnVsbCB8fCB0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICB0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5wdXNoKHtcclxuICAgICAgICAgIFwiY29kZVwiOiBcInBhZ2VDb2RlMVwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwi56ysMemhtVwiLFxyXG4gICAgICAgICAgXCJxdWVzdGlvbnNcIjogW11cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb25MaXN0QnlQYWdlSW5kZXgoMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2VDbGljayhlOiBudW1iZXIpIHtcclxuICAgIC8vIGlmICh0aGlzLnZ4U3VydmV5SW5mby5wYWdlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgaWYgKGUgPT0gMCB8fCB0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5sZW5ndGggPT0gZSAtIDEpIHtcclxuICAgIC8vICAgICB0aGlzLnNob3dfc2V0dGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGVsc2Uge1xyXG4gICAgLy8gICAgIGlmIChlID4gMCkge1xyXG4gICAgLy8gICAgICAgdGhpcy5nZXRRdWVzdGlvbkxpc3RCeVBhZ2VJbmRleChlIC0gMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLmdldFF1ZXN0aW9uTGlzdEJ5UGFnZUluZGV4KGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFnZSgpIHtcclxuICAgIGlmICh0aGlzLnZ4U3VydmV5SW5mby5wYWdlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IG5ld1BhZ2UgPSB7XHJcbiAgICAgICAgY29kZTogYHBhZ2Vjb2RlXyR7dGhpcy52eFN1cnZleUluZm8ucGFnZXMubGVuZ3RoICsgMX1gLFxyXG4gICAgICAgIG5hbWU6IGDnrKwke3RoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzLmxlbmd0aCArIDF96aG1YCxcclxuICAgICAgICBxdWVzdGlvbnM6IFtdXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52eFN1cnZleUluZm8ucGFnZXMucHVzaChuZXdQYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVBhZ2UoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UXVlc3Rpb25MaXN0QnlQYWdlSW5kZXgocGFnZUluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnZ4U3VydmV5SW5mby5wYWdlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy52eFN1cnZleUluZm8ucGFnZXMubGVuZ3RoID4gMCAmJiB0aGlzLnZ4U3VydmV5SW5mby5wYWdlc1twYWdlSW5kZXhdLnF1ZXN0aW9ucyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5mb3JtX2ZpZWxkcyA9IFt7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiZHJhZy1kcm9wXCIsXHJcbiAgICAgICAgXCJrZXlcIjogXCJkcmFnLWRyb3BsaXN0XCIsXHJcbiAgICAgICAgXCJmaWVsZEdyb3VwXCI6IHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzW3BhZ2VJbmRleF0ucXVlc3Rpb25zXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8v6aKY55uuXHJcbiAgcXVlc3Rpb25PcGVyYXRpb25hbChyZXM6IGFueSkge1xyXG4gICAgbGV0IHJlc1R5cGU6IGFueSA9IHJlc1tcInNpZ25cIl07XHJcbiAgICBsZXQgcmVzRmllbGQ6IGFueSA9IHJlc1tcImZpZWxkXCJdO1xyXG4gICAgbGV0IHJRdWVzdGlvbjogYW55O1xyXG4gICAgbGV0IHJJbmRleDogYW55O1xyXG4gICAgdGhpcy5mb3JtRmllbGRHcm91cC5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGlmIChpdGVtLmtleSA9PSByZXNGaWVsZC5rZXkpIHtcclxuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgclF1ZXN0aW9uID0gaXRlbTtcclxuICAgICAgICBySW5kZXggPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3dpdGNoIChyZXNUeXBlKSB7XHJcbiAgICAgIGNhc2UgXCJhY3RpdmVcIjpcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSByUXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5zaG93X3NldHRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibG9naWNcIjpcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3VjY2VzcyhcIumAu+i+keiuvue9rlwiKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY29weVwiOlxyXG4gICAgICAgIGxldCBjb3B5UXVlc3Rpb24gPSBfLmNsb25lRGVlcChyUXVlc3Rpb24pO1xyXG4gICAgICAgIGNvcHlRdWVzdGlvbi5rZXkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgICAgICAgY29weVF1ZXN0aW9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkR3JvdXAuc3BsaWNlKHJJbmRleCArIDEsIDAsIGNvcHlRdWVzdGlvbik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN1Y2Nlc3MoXCLmi7fotJ3popjnm65cIilcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkR3JvdXAuc3BsaWNlKHJJbmRleCwgMSlcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3VjY2VzcyhcIuWIoOmZpOmimOebrlwiKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB7fTtcclxuICAgICAgICB0aGlzLnNob3dfc2V0dGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/popjnm67pgInpoblcclxuICBvcHRpb25PcGVyYXRpb25hbChyZXM6IGFueSkge1xyXG4gICAgbGV0IHJlc1R5cGU6IGFueSA9IHJlc1tcInNpZ25cIl07XHJcbiAgICBsZXQgcmVzT3B0aW9uOiBhbnkgPSByZXNbXCJvcHRpb25cIl07XHJcbiAgICBsZXQgcmVzRmllbGQ6IGFueSA9IHJlc1tcImZpZWxkXCJdO1xyXG4gICAgbGV0IHJRdWVzdGlvbjogYW55O1xyXG4gICAgbGV0IHJJbmRleDogYW55O1xyXG4gICAgdGhpcy5mb3JtRmllbGRHcm91cC5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHJJbmRleCA9IGluZGV4O1xyXG4gICAgICBpZiAoaXRlbS5rZXkgPT0gcmVzRmllbGQua2V5KSB7XHJcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHJRdWVzdGlvbiA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc3dpdGNoIChyZXNUeXBlKSB7XHJcbiAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICByZXNGaWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgIFwibGFiZWxcIjogXCLpgInpoblcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICAgICAgXCJzY29yZVwiOiAwLFxyXG4gICAgICAgICAgXCJpbnB1dFwiOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdWNjZXNzKFwi5re75Yqg6YCJ6aG5XCIpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJhZGRzXCI6XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN1Y2Nlc3MoXCLmibnph4/mt7vliqBcIilcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgIHJlc0ZpZWxkLnRlbXBsYXRlT3B0aW9ucy5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09IHJlc09wdGlvbi52YWx1ZSkge1xyXG4gICAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3VjY2VzcyhcIuWIoOmZpOmAiemhuVwiKVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcInN1YnRpdGxlXCI6XHJcbiAgICAgICAgcmVzRmllbGQudGVtcGxhdGVPcHRpb25zLnN1YnRpdGxlLnB1c2goe1xyXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIuefqemYteihjFwiLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3VjY2VzcyhcIua3u+WKoOefqemYteihjFwiKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/mt7vliqDpopjnm65cclxuICBhZGRRdWVzdGlvblR5cGUoZGF0YTogYW55LCBpbmRleDogYW55ID0gLTEpIHtcclxuICAgIHRoaXMudnhUcmFuc2ZlclNlcnZpY2UudHJhbnNmZXJRdWVzdGlvbkJ5VHlwZShkYXRhLCB0aGlzLmZvcm1GaWVsZEdyb3VwLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvL+aLluaLvea3u+WKoOmimOebrlxyXG4gIGFkZFF1ZXN0aW9uRHJhZ0Ryb3AocmVzOiBhbnkpIHtcclxuICAgIGxldCBkYXRhID0gcmVzW1wicHJldmlvdXNEYXRhXCJdW3Jlc1tcInByZXZpb3VzSW5kZXhcIl1dO1xyXG4gICAgdGhpcy52eFRyYW5zZmVyU2VydmljZS50cmFuc2ZlclF1ZXN0aW9uQnlUeXBlKGRhdGEsIHRoaXMuZm9ybUZpZWxkR3JvdXAsIHJlc1tcImN1cnJlbnRJbmRleFwiXSlcclxuICB9XHJcblxyXG4gIGdldCBmb3JtRmllbGRHcm91cCgpIHtcclxuICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBpZiAodGhpcy5mb3JtX2ZpZWxkcyAhPSBudWxsICYmIHRoaXMuZm9ybV9maWVsZHMubGVuZ3RoID4gMCAmJiB0aGlzLmZvcm1fZmllbGRzWzBdLmZpZWxkR3JvdXAgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuZm9ybV9maWVsZHNbMF0uZmllbGRHcm91cDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==