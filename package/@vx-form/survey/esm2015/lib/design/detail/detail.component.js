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
export class VXSurveyDesignDetail {
    /**
     * @param {?} message
     * @param {?} modalService
     * @param {?} vxFormAntService
     * @param {?} vxDialogService
     * @param {?} dataService
     * @param {?} vxTransferService
     * @param {?} vxFormCommonService
     */
    constructor(message, modalService, vxFormAntService, vxDialogService, dataService, vxTransferService, vxFormCommonService) {
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
    ngOnInit() {
        this.vxFormAntService.questionEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.questionOperational(res);
        }));
        this.vxFormAntService.optionEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.optionOperational(res);
        }));
        this.vxFormAntService.dragDropEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.addQuestionDragDrop(res);
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.formCode) {
            this.initFormInfo();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /*按钮区域---begin*/
    /**
     * @return {?}
     */
    saveSurvey() {
        /** @type {?} */
        let objSurvey = clone(this.vxSurveyInfo);
        objSurvey.pages.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.vxFormCommonService.initFormFieldProperty(item.questions);
        }));
        this.saveEvent.emit(JSON.stringify(objSurvey));
    }
    /**
     * @return {?}
     */
    initFormInfo() {
        this.dataService.getFormInfo(this.api.form.url, { formcode: this.formCode }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.vxSurveyInfo = {
                code: res.code,
                name: res.name,
                type: res.type,
                first: res.first,
                last: res.last,
                pages: res.pages
            };
            if (this.vxSurveyInfo.pages != undefined && (this.vxSurveyInfo.pages == null || this.vxSurveyInfo.pages.length == 0)) {
                this.vxSurveyInfo.pages.push({
                    "code": "pageCode1",
                    "name": "第1页",
                    "questions": []
                });
            }
            this.getQuestionListByPageIndex(0);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    pageClick(e) {
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
    }
    /**
     * @return {?}
     */
    addPage() {
        if (this.vxSurveyInfo.pages != undefined) {
            /** @type {?} */
            let newPage = {
                code: `pagecode_${this.vxSurveyInfo.pages.length + 1}`,
                name: `第${this.vxSurveyInfo.pages.length + 1}页`,
                questions: []
            };
            this.vxSurveyInfo.pages.push(newPage);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    deletePage(index) {
        if (this.vxSurveyInfo.pages != undefined) {
            this.vxSurveyInfo.pages.splice(index, 1);
        }
    }
    /**
     * @param {?} pageIndex
     * @return {?}
     */
    getQuestionListByPageIndex(pageIndex) {
        if (this.vxSurveyInfo.pages != undefined && this.vxSurveyInfo.pages.length > 0 && this.vxSurveyInfo.pages[pageIndex].questions != undefined) {
            this.form_fields = [{
                    "type": "drag-drop",
                    "key": "drag-droplist",
                    "fieldGroup": this.vxSurveyInfo.pages[pageIndex].questions
                }];
        }
    }
    //题目
    /**
     * @param {?} res
     * @return {?}
     */
    questionOperational(res) {
        /** @type {?} */
        let resType = res["sign"];
        /** @type {?} */
        let resField = res["field"];
        /** @type {?} */
        let rQuestion;
        /** @type {?} */
        let rIndex;
        this.formFieldGroup.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
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
                let copyQuestion = _.cloneDeep(rQuestion);
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
    }
    //题目选项
    /**
     * @param {?} res
     * @return {?}
     */
    optionOperational(res) {
        /** @type {?} */
        let resType = res["sign"];
        /** @type {?} */
        let resOption = res["option"];
        /** @type {?} */
        let resField = res["field"];
        /** @type {?} */
        let rQuestion;
        /** @type {?} */
        let rIndex;
        this.formFieldGroup.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
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
                (item, index, object) => {
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
    }
    //添加题目
    /**
     * @param {?} data
     * @param {?=} index
     * @return {?}
     */
    addQuestionType(data, index = -1) {
        this.vxTransferService.transferQuestionByType(data, this.formFieldGroup, index);
    }
    //拖拽添加题目
    /**
     * @param {?} res
     * @return {?}
     */
    addQuestionDragDrop(res) {
        /** @type {?} */
        let data = res["previousData"][res["previousIndex"]];
        this.vxTransferService.transferQuestionByType(data, this.formFieldGroup, res["currentIndex"]);
    }
    /**
     * @return {?}
     */
    get formFieldGroup() {
        /** @type {?} */
        let result = [];
        if (this.form_fields != null && this.form_fields.length > 0 && this.form_fields[0].fieldGroup != undefined) {
            result = this.form_fields[0].fieldGroup;
        }
        return result;
    }
}
VXSurveyDesignDetail.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-design-detail",
                template: "<div class=\"survey-design\" cdkDropListGroup>\r\n    <div class=\"layout\">\r\n        <nz-tabset>\r\n            <nz-tab nzTitle=\"\u9898\u76EE\u7C7B\u578B\">\r\n                <div class=\"question-list vxsurvey-scrollbar\">\r\n                    <vx-question-type (questionTypeEvent)=\"addQuestionType($event)\" (addPageEvent)=\"addPage()\" (saveSurveyEvent)=\"saveSurvey()\">\r\n                    </vx-question-type>\r\n                </div>\r\n            </nz-tab>\r\n            <nz-tab nzTitle=\"\u9898\u76EE\u5927\u7EB2\">\r\n                <div class=\"question-list vxsurvey-scrollbar\">\r\n                    <vx-question-list *ngIf=\"vxSurveyInfo\" [vxSurveyInfo]=\"vxSurveyInfo\"></vx-question-list>\r\n                </div>\r\n            </nz-tab>\r\n        </nz-tabset>\r\n    </div>\r\n    <div class=\"panel\">\r\n        <div class=\"buttonlist\"> \r\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"saveSurvey()\">\u4FDD\u5B58\u6570\u636E</button>\r\n        </div>\r\n        <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"pageSelectedIndex\" (nzSelectedIndexChange)=\"pageClick($event)\">\r\n            <!-- <nz-tab [nzTitle]=\"firstPageTemplate\">\r\n                <ng-template #firstPageTemplate>\r\n                    <div>\u5F00\u59CB\u9875</div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"vxsurvey-firstform vxsurvey-scrollbar\">\r\n                        <vxsurvey-first-page></vxsurvey-first-page>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab> -->\r\n            <ng-container *ngIf=\"vxSurveyInfo!=null && vxSurveyInfo.pages\">\r\n                <ng-container *ngFor=\"let page of vxSurveyInfo.pages;let index=index;\">\r\n                    <nz-tab [nzTitle]=\"titleTemplate\">\r\n                        <ng-template #titleTemplate>\r\n                            <div>\r\n                                \u7B2C{{ index+1 }}\u9875\r\n                                <i *ngIf=\"index>0\" nz-icon nzType=\"close\" (click)=\"deletePage(index)\" class=\"ant-tabs-close-x\"></i>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template nz-tab>\r\n                            <div class=\"vxsurvey-form vxsurvey-scrollbar\">\r\n                                <form [formGroup]=\"form_group\" class=\"layout-column-1\" nz-form>\r\n                                    <vxform [fields]=\"form_fields\" [status]=\"1\" [form]=\"form_group\" [model]=\"form_model\">\r\n                                    </vxform>\r\n                                </form>\r\n                            </div>\r\n                        </ng-template>\r\n                    </nz-tab>\r\n                </ng-container>\r\n            </ng-container>\r\n            <!-- <nz-tab [nzTitle]=\"lastPageTemplate\">\r\n                <ng-template #lastPageTemplate>\r\n                    <div>\u7ED3\u675F\u9875</div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"vxsurvey-lastform vxsurvey-scrollbar\">\r\n                        <vxsurvey-last-page></vxsurvey-last-page>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab> -->\r\n        </nz-tabset>\r\n    </div>\r\n    <div class=\"setting\">\r\n        <div class=\"setting_wrap\" *ngIf=\"show_setting\">\r\n            <setting-template [field]=\"questionField\"></setting-template>\r\n        </div>\r\n    </div>\r\n</div>",
                providers: [DataService, VXTransferService],
                styles: ["::ng-deep .formly-drag-drop_wrap.cdk-drag-preview{border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;cursor:move}:host ::ng-deep{display:flex;width:100%;height:100%;background-color:#f3f3f3}:host ::ng-deep .survey-design{position:relative;width:100%;height:100%;overflow:hidden;padding:0 260px 0 250px}:host ::ng-deep .survey-design :focus{outline:0;box-shadow:none}:host ::ng-deep .survey-design .cke_focus{background-color:#f4f4f4;border:0}:host ::ng-deep .survey-design .inline_editor_hidden{display:none}:host ::ng-deep .survey-design .inline_editor_show{padding:8px 10px}:host ::ng-deep .survey-design nz-tabset{height:100%;position:inherit}:host ::ng-deep .survey-design .layout{float:left;width:250px;background-color:#fff;padding:15px 5px 0 25px;position:absolute;left:0;height:100%;top:0}:host ::ng-deep .survey-design .layout button{font-size:12px}:host ::ng-deep .survey-design .layout .question-list{height:calc(100% - 80px);overflow-y:auto;position:absolute;width:100%;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .survey-design .layout .question-list::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .survey-design .layout .title{font-size:14px;color:#9b9b9b;margin-bottom:10px}:host ::ng-deep .survey-design .layout-column ul{display:inline-block;width:100%}:host ::ng-deep .survey-design .layout-column ul li{float:left;text-align:center}:host ::ng-deep .survey-design .layout-column ul li div{width:56px;height:56px;line-height:63px;border-radius:4px;background-color:#ececec;margin-bottom:5px}:host ::ng-deep .survey-design .layout-column ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .survey-design .layout-column ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .survey-design .layout-column ul li:nth-child(1),:host ::ng-deep .survey-design .layout-column ul li:nth-child(2){margin:0 15px 0 0}:host ::ng-deep .survey-design .layout-row ul{display:inline-block;width:100%}:host ::ng-deep .survey-design .layout-row ul li{float:left;text-align:center}:host ::ng-deep .survey-design .layout-row ul li div{width:90px;height:32px;line-height:32px;border-radius:4px;background-color:#ececec;margin-bottom:5px;cursor:pointer}:host ::ng-deep .survey-design .layout-row ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .survey-design .layout-row ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .survey-design .layout-row ul li:nth-child(1){margin:0 15px 0 0}:host ::ng-deep .survey-design .layout-el li{width:200px;height:33px;line-height:33px;border-radius:4px;border:1px solid #dcdce0;background-color:#fff;margin:0 0 10px!important;font-size:13px;color:#323232}:host ::ng-deep .survey-design .layout-el li i{margin:0 8px;font-size:14px;color:#bfbfbf}:host ::ng-deep .survey-design .layout-el li:hover{background-color:#71a9ff;cursor:pointer;color:#fff}:host ::ng-deep .survey-design .layout-el li:hover i{color:#fff}:host ::ng-deep .survey-design .panel{position:relative;height:100%;width:100%;padding:0 15px}:host ::ng-deep .survey-design .panel .buttonlist{padding:10px 20px;margin:0 0 10px;background-color:#fff}:host ::ng-deep .survey-design .panel .required{display:inline-block;padding:8px 0;color:red;width:5px}:host ::ng-deep .survey-design .panel inline-editor{flex:1;width:100%}:host ::ng-deep .survey-design .panel inline-editor .cke_editable_inline{border-radius:2px;padding:8px 10px;font-size:14px;border:0 solid #f4f4f4}:host ::ng-deep .survey-design .panel .ant-tabs-bar{border:0;margin:0}:host ::ng-deep .survey-design .panel .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab{border:0!important}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap{position:relative;width:100%;font-size:12px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-operate{display:none;position:absolute;right:20px;top:12px;width:100%;text-align:right}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-operate span{cursor:pointer;margin:0 0 0 10px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content{background-color:#fff;border-radius:4px;margin:0 0 20px;padding:15px 20px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_title{padding:0 180px 5px 0;display:flex;flex-direction:row;font-size:14px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_content{padding:0 180px 0 15px;width:100%;font-size:13px}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_operate{color:#2672ff;display:none;padding:15px 0 0}:host ::ng-deep .survey-design .panel .formly-drag-drop_wrap .field-content .question-wrap_operate span{margin:0 20px 0 0;cursor:pointer;font-size:13px}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .field-content{box-shadow:0 10px 15px 0 rgba(0,0,0,.1);border:2px solid #2672ff;border-radius:4px}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .field-operate{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .option_vertical{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .question-wrap_operate{display:block!important}:host ::ng-deep .survey-design .panel .formly-drag-drop .active .option_wrap:hover .operate i{display:block}:host ::ng-deep .survey-design .panel .formly_empty{background-color:#fff}:host ::ng-deep .survey-design .panel .formly_empty .formly-drag-drop{padding:50px}:host ::ng-deep .survey-design .setting{float:left;width:260px;margin:0 0 0 8px;padding:0 0 10px;position:absolute;height:100%;right:0;top:0}:host ::ng-deep .survey-design .setting_wrap{scrollbar-color:transparent;overflow-y:overlay;padding:15px 0 0 20px;height:100%;background-color:#fff}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .survey-design .setting_wrap::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .survey-design .setting_wrap nz-select{width:65px;float:right;margin:3px;font-size:12px}:host ::ng-deep .survey-design .setting_wrap .title{color:#484848;font-size:16px;padding:8px 0 5px;border-bottom:1px solid #dde5ed}:host ::ng-deep .survey-design .setting_wrap .item{font-size:12px;padding:8px 10px 8px 0;line-height:30px;border-bottom:1px dotted #dde5ed}:host ::ng-deep .survey-design .setting_wrap .item nz-input-number,:host ::ng-deep .survey-design .setting_wrap .item nz-radio-group,:host ::ng-deep .survey-design .setting_wrap .item nz-switch{float:right;font-size:12px}:host ::ng-deep .survey-design .setting_wrap .item nz-input-number{width:50px;margin:3px 0 0}:host ::ng-deep .survey-design .setting_wrap .item>label{color:#2672ff;text-align:right;float:right;margin-right:5px;cursor:pointer}:host ::ng-deep .survey-design .setting_wrap_title{display:inline-block;color:#fff;font-size:12px;padding:5px 20px;border-radius:2px;background-color:#495165;margin:0 0 20px}:host ::ng-deep .survey-design .setting_wrap_model .title{margin:20px 0 0}:host ::ng-deep .survey-design .setting_wrap_option .title{margin:20px 0 0}:host ::ng-deep .survey-design .setting_wrap_option .item span:nth-child(2){float:right}:host ::ng-deep .survey-design .setting_wrap_option .item nz-input-number{float:right;margin:3px 5px 0 0}:host ::ng-deep .vxsurvey-firstform,:host ::ng-deep .vxsurvey-lastform{position:absolute;width:100%;height:calc(100% - 50px);display:inline-block;margin:0;padding:20px;overflow-y:auto;background-color:#fff;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar-track,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-firstform::-webkit-scrollbar-thumb,:host ::ng-deep .vxsurvey-lastform::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .vxsurvey-form{position:absolute;width:100%;min-width:730px;height:calc(100% - 50px);display:inline-block;margin:0;padding:0 10px 20px 0;overflow-y:auto;scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-form::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep .vxsurvey-form .ant-input,:host ::ng-deep .vxsurvey-form input{border:0}:host ::ng-deep .vxsurvey-form .ant-calendar-picker,:host ::ng-deep .vxsurvey-form .ant-time-picker,:host ::ng-deep .vxsurvey-form .emp_name,:host ::ng-deep .vxsurvey-form .select_cascader{width:350px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap{width:100%;display:flex;flex-direction:row;padding:0 0 5px;cursor:pointer}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option{flex:1;display:flex;flex-direction:row}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-radio-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-radio-wrapper{padding:7px 0}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-radio-wrapper span:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-radio-wrapper span:nth-last-child(1){padding:0}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option .ant-checkbox-wrapper,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option .ant-checkbox-wrapper{padding:8px 0;margin-right:7px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .option inline-editor .cke_editable_inline,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .option inline-editor .cke_editable_inline{font-size:13px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .operate,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .operate{width:30px;line-height:35px;padding:8px 0 0;margin-left:8px}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap .operate i,:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap .operate i{display:none;width:20px;height:20px;background-color:#f4f4f4;border-radius:50%;padding:4px;color:rgba(0,0,0,.65);font-size:12px;font-weight:700}:host ::ng-deep .vxsurvey-form vxsurvey-checkbox .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-dropdown .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option_wrap:nth-last-child(1),:host ::ng-deep .vxsurvey-form vxsurvey-radio .option_wrap:nth-last-child(1){padding:0}:host ::ng-deep .vxsurvey-form vxsurvey-input_group .option{flex-direction:column!important}:host ::ng-deep .vxsurvey-form vxsurvey-nps{display:flex;flex-direction:column}:host ::ng-deep .vxsurvey-form vxsurvey-nps .question-wrap_content{padding:0 0 0 15px!important}:host ::ng-deep .vxsurvey-form vxsurvey-nps .basic_nps{padding:0 0 0 8px}:host ::ng-deep .vxsurvey-form vxsurvey-nps .basic_nps .option{width:35px;height:35px;border-radius:50%;border:1px solid #d8d8d8;line-height:35px;margin:5px 12px 10px 0;float:left;text-align:center;font-size:14px;color:#9b9b9b}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text{padding:0;width:520px;font-size:13px}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text span:nth-child(1){float:left}:host ::ng-deep .vxsurvey-form vxsurvey-nps .option_wrap_text span:nth-child(2){float:right}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .question-wrap_content,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .question-wrap_content{display:flex}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table{float:left}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table table,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table table{width:auto;border-top:1px solid #d8d8d8;border-right:1px solid #d8d8d8}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_table table tr td,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_table table tr td{height:32px;border-left:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;padding:2px 15px}:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_checkbox .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_input .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_radio .matrix_score .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_checkbox .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_input .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_radio .option_vertical,:host ::ng-deep .vxsurvey-form vxsurvey-matrix_score .matrix_score .option_vertical{float:left;padding:0 0 0 10px;color:#2672ff;cursor:pointer;display:none}:host ::ng-deep .vxsurvey-form inline-editor .ant-input:focus{background-color:#ececec}:host ::ng-deep .vxsurvey-form .basic_line .line{height:0;width:100%;border-top:1px dashed #aaa;margin:10px 0 8px}:host ::ng-deep .vxsurvey-form .basic_remark{font-size:14px}:host ::ng-deep .vxsurvey-form .basic_evaluation .label{color:#fadb14;font-size:12px;padding:10px 0}:host ::ng-deep .vxsurvey-form .basic_evaluation .tag span{display:inline-block;font-size:12px;color:#aaa;padding:3px 10px;background:#fff;border:1px solid #eaeaea;border-radius:2px;margin-right:5px}:host ::ng-deep .vxsurvey-form .basic_evaluation .tag label{color:#6090df;font-size:13px;margin-left:5px;cursor:pointer}:host ::ng-deep .vxsurvey-form .quesiton-sortable-placeholder{width:100%;height:6px;background:#7b8bed}:host ::ng-deep .page_question{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1}"]
            }] }
];
/** @nocollapse */
VXSurveyDesignDetail.ctorParameters = () => [
    { type: NzMessageService },
    { type: NzModalService },
    { type: VXFormAntService },
    { type: VXDialogService },
    { type: DataService },
    { type: VXTransferService },
    { type: VXFormCommonService }
];
VXSurveyDesignDetail.propDecorators = {
    formCode: [{ type: Input }],
    api: [{ type: Input }],
    saveEvent: [{ type: Output }],
    cancelEvent: [{ type: Output }],
    previewEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9kZXNpZ24vZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFLTCxLQUFLLEVBRUwsbUJBQW1CLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdCdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3JDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7Ozs7SUFxQy9CLFlBQ1UsT0FBeUIsRUFDekIsWUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ25DLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLGlCQUFvQyxFQUNwQyxtQkFBd0M7UUFOdkMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbkMsb0JBQWUsR0FBZixlQUFl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LEdBQVUsRUFBRTtRQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7WUFDMUcsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBL1BGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxxaUhBQXNDO2dCQUV0QyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUM7O2FBQzVDOzs7O1lBL0JRLGdCQUFnQjtZQURoQixjQUFjO1lBR2QsZ0JBQWdCO1lBZ0JoQixlQUFlO1lBQ2YsV0FBVztZQUNYLGlCQUFpQjtZQXZCeEIsbUJBQW1COzs7dUJBb0NsQixLQUFLO2tCQUNMLEtBQUs7d0JBR0wsTUFBTTswQkFDTixNQUFNOzJCQUNOLE1BQU07Ozs7SUFOUCx3Q0FBK0I7O0lBQy9CLG1DQUVFOztJQUNGLHlDQUF1RTs7SUFDdkUsMkNBQXlFOztJQUN6RSw0Q0FBMEU7O0lBRTFFLDBDQUF1Qjs7SUFFdkIsMENBQXFCOztJQUNyQiwwQ0FBK0I7O0lBQy9CLDJDQUFzQzs7SUFFdEMsNENBa0JFOztJQUNGLDRDQUFxQjs7SUFDckIsNkNBQXNDOztJQUN0QyxpREFBOEI7Ozs7O0lBRTVCLHVDQUFpQzs7Ozs7SUFDakMsNENBQW9DOzs7OztJQUNwQyxnREFBMEM7O0lBQzFDLCtDQUF1Qzs7SUFDdkMsMkNBQStCOztJQUMvQixpREFBMkM7O0lBQzNDLG1EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYVGFibGVGaWVsZENvbmZpZyxcclxuICBWWFN1cnZleUluZm8sXHJcbiAgVlhTdXJ2ZXlQYWdlLFxyXG4gIGNsb25lLFxyXG4gIFZYVGFibGVDb25maWcsXHJcbiAgVlhGb3JtQ29tbW9uU2VydmljZVxyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlIH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvbW9kYWxcIjtcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL21lc3NhZ2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1MYXlvdXQsXHJcbiAgTGF5b3V0UGFuZWwsXHJcbiAgTGF5b3V0Q29sdW1uLFxyXG4gIFZYVGFibGVCdXNpbmVzcyxcclxuICBJQ2hlY2tlZEZpZWxkLFxyXG4gIElCdXNpbmVzc1RhYmxlLFxyXG4gIEl0YWJsZSxcclxuICBJRGVzaWduRm9ybUFQSVxyXG59IGZyb20gXCIuLi8uLi90b29scy91dGlsXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2RrRHJhZ0Ryb3AsXHJcbiAgbW92ZUl0ZW1JbkFycmF5LFxyXG4gIHRyYW5zZmVyQXJyYXlJdGVtXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgVlhEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGlhbG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVlhUcmFuc2ZlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdHJhbnNmZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbiB9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1kZXNpZ24tZGV0YWlsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlsLmNvbXBvbmVudC5sZXNzXCJdLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlLCBWWFRyYW5zZmVyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5RGVzaWduRGV0YWlsIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZm9ybUNvZGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgQElucHV0KCkgYXBpOiBJRGVzaWduRm9ybUFQSSA9IHtcclxuICAgIGZvcm06IHsgdXJsOiBcImFzc2V0cy9tb2NrRGF0YS9zdXJ2ZXkuanNvblwiIH1cclxuICB9O1xyXG4gIEBPdXRwdXQoKSBzYXZlRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGNhbmNlbEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBwcmV2aWV3RXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHBhZ2VTdGF0dXM6IG51bWJlciA9IDE7XHJcblxyXG4gIGZvcm1fbW9kZWw6IGFueSA9IHt9O1xyXG4gIGZvcm1fZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSA9IFtdO1xyXG5cclxuICB2eFN1cnZleUluZm86IFZYU3VydmV5SW5mbyA9IHtcclxuICAgIGNvZGU6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZmlyc3Q6IHtcclxuICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgIHRleHQ6IFwiXCJcclxuICAgIH0sXHJcbiAgICBsYXN0OiB7XHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICB0ZXh0OiBcIlwiXHJcbiAgICB9LFxyXG4gICAgcGFnZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvZGU6IFwicGFnZTFcIixcclxuICAgICAgICBuYW1lOiBcIuesrDHpobVcIixcclxuICAgICAgICBxdWVzdGlvbnM6IFtdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIHNob3dfc2V0dGluZyA9IGZhbHNlO1xyXG4gIHF1ZXN0aW9uRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0ge307XHJcbiAgcGFnZVNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1lc3NhZ2U6IE56TWVzc2FnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTnpNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZ4Rm9ybUFudFNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgdnhEaWFsb2dTZXJ2aWNlOiBWWERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHVibGljIHZ4VHJhbnNmZXJTZXJ2aWNlOiBWWFRyYW5zZmVyU2VydmljZSxcclxuICAgIHB1YmxpYyB2eEZvcm1Db21tb25TZXJ2aWNlOiBWWEZvcm1Db21tb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy52eEZvcm1BbnRTZXJ2aWNlLnF1ZXN0aW9uRXZlbnQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uT3BlcmF0aW9uYWwocmVzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudnhGb3JtQW50U2VydmljZS5vcHRpb25FdmVudC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMub3B0aW9uT3BlcmF0aW9uYWwocmVzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudnhGb3JtQW50U2VydmljZS5kcmFnRHJvcEV2ZW50LnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5hZGRRdWVzdGlvbkRyYWdEcm9wKHJlcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5mb3JtQ29kZSkge1xyXG4gICAgICB0aGlzLmluaXRGb3JtSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7IH1cclxuXHJcbiAgLyrmjInpkq7ljLrln58tLS1iZWdpbiovXHJcblxyXG4gIHNhdmVTdXJ2ZXkoKSB7XHJcbiAgICBsZXQgb2JqU3VydmV5ID0gY2xvbmUodGhpcy52eFN1cnZleUluZm8pO1xyXG4gICAgb2JqU3VydmV5LnBhZ2VzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnZ4Rm9ybUNvbW1vblNlcnZpY2UuaW5pdEZvcm1GaWVsZFByb3BlcnR5KGl0ZW0ucXVlc3Rpb25zKTtcclxuICAgIH0pXHJcbiAgICB0aGlzLnNhdmVFdmVudC5lbWl0KEpTT04uc3RyaW5naWZ5KG9ialN1cnZleSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGluaXRGb3JtSW5mbygpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0Rm9ybUluZm8odGhpcy5hcGkuZm9ybS51cmwsIHsgZm9ybWNvZGU6IHRoaXMuZm9ybUNvZGUgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMudnhTdXJ2ZXlJbmZvID0ge1xyXG4gICAgICAgIGNvZGU6IHJlcy5jb2RlLFxyXG4gICAgICAgIG5hbWU6IHJlcy5uYW1lLFxyXG4gICAgICAgIHR5cGU6IHJlcy50eXBlLFxyXG4gICAgICAgIGZpcnN0OiByZXMuZmlyc3QsXHJcbiAgICAgICAgbGFzdDogcmVzLmxhc3QsXHJcbiAgICAgICAgcGFnZXM6IHJlcy5wYWdlc1xyXG4gICAgICB9O1xyXG4gICAgICBpZiAodGhpcy52eFN1cnZleUluZm8ucGFnZXMgIT0gdW5kZWZpbmVkICYmICh0aGlzLnZ4U3VydmV5SW5mby5wYWdlcyA9PSBudWxsIHx8IHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzLmxlbmd0aCA9PSAwKSkge1xyXG4gICAgICAgIHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgXCJjb2RlXCI6IFwicGFnZUNvZGUxXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLnrKwx6aG1XCIsXHJcbiAgICAgICAgICBcInF1ZXN0aW9uc1wiOiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZXRRdWVzdGlvbkxpc3RCeVBhZ2VJbmRleCgwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFnZUNsaWNrKGU6IG51bWJlcikge1xyXG4gICAgLy8gaWYgKHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICBpZiAoZSA9PSAwIHx8IHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzLmxlbmd0aCA9PSBlIC0gMSkge1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd19zZXR0aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSB7XHJcbiAgICAvLyAgICAgaWYgKGUgPiAwKSB7XHJcbiAgICAvLyAgICAgICB0aGlzLmdldFF1ZXN0aW9uTGlzdEJ5UGFnZUluZGV4KGUgLSAxKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICAgIHRoaXMuZ2V0UXVlc3Rpb25MaXN0QnlQYWdlSW5kZXgoZSk7XHJcbiAgfVxyXG5cclxuICBhZGRQYWdlKCkge1xyXG4gICAgaWYgKHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgbmV3UGFnZSA9IHtcclxuICAgICAgICBjb2RlOiBgcGFnZWNvZGVfJHt0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5sZW5ndGggKyAxfWAsXHJcbiAgICAgICAgbmFtZTogYOesrCR7dGhpcy52eFN1cnZleUluZm8ucGFnZXMubGVuZ3RoICsgMX3pobVgLFxyXG4gICAgICAgIHF1ZXN0aW9uczogW11cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5wdXNoKG5ld1BhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGFnZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy52eFN1cnZleUluZm8ucGFnZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRRdWVzdGlvbkxpc3RCeVBhZ2VJbmRleChwYWdlSW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzICE9IHVuZGVmaW5lZCAmJiB0aGlzLnZ4U3VydmV5SW5mby5wYWdlcy5sZW5ndGggPiAwICYmIHRoaXMudnhTdXJ2ZXlJbmZvLnBhZ2VzW3BhZ2VJbmRleF0ucXVlc3Rpb25zICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZvcm1fZmllbGRzID0gW3tcclxuICAgICAgICBcInR5cGVcIjogXCJkcmFnLWRyb3BcIixcclxuICAgICAgICBcImtleVwiOiBcImRyYWctZHJvcGxpc3RcIixcclxuICAgICAgICBcImZpZWxkR3JvdXBcIjogdGhpcy52eFN1cnZleUluZm8ucGFnZXNbcGFnZUluZGV4XS5xdWVzdGlvbnNcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy/popjnm65cclxuICBxdWVzdGlvbk9wZXJhdGlvbmFsKHJlczogYW55KSB7XHJcbiAgICBsZXQgcmVzVHlwZTogYW55ID0gcmVzW1wic2lnblwiXTtcclxuICAgIGxldCByZXNGaWVsZDogYW55ID0gcmVzW1wiZmllbGRcIl07XHJcbiAgICBsZXQgclF1ZXN0aW9uOiBhbnk7XHJcbiAgICBsZXQgckluZGV4OiBhbnk7XHJcbiAgICB0aGlzLmZvcm1GaWVsZEdyb3VwLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgaWYgKGl0ZW0ua2V5ID09IHJlc0ZpZWxkLmtleSkge1xyXG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICByUXVlc3Rpb24gPSBpdGVtO1xyXG4gICAgICAgIHJJbmRleCA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzd2l0Y2ggKHJlc1R5cGUpIHtcclxuICAgICAgY2FzZSBcImFjdGl2ZVwiOlxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHJRdWVzdGlvbjtcclxuICAgICAgICB0aGlzLnNob3dfc2V0dGluZyA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsb2dpY1wiOlxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdWNjZXNzKFwi6YC76L6R6K6+572uXCIpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjb3B5XCI6XHJcbiAgICAgICAgbGV0IGNvcHlRdWVzdGlvbiA9IF8uY2xvbmVEZWVwKHJRdWVzdGlvbik7XHJcbiAgICAgICAgY29weVF1ZXN0aW9uLmtleSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICAgICAgICBjb3B5UXVlc3Rpb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JtRmllbGRHcm91cC5zcGxpY2UockluZGV4ICsgMSwgMCwgY29weVF1ZXN0aW9uKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3VjY2VzcyhcIuaLt+i0nemimOebrlwiKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgdGhpcy5mb3JtRmllbGRHcm91cC5zcGxpY2UockluZGV4LCAxKVxyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdWNjZXNzKFwi5Yig6Zmk6aKY55uuXCIpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHt9O1xyXG4gICAgICAgIHRoaXMuc2hvd19zZXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mimOebrumAiemhuVxyXG4gIG9wdGlvbk9wZXJhdGlvbmFsKHJlczogYW55KSB7XHJcbiAgICBsZXQgcmVzVHlwZTogYW55ID0gcmVzW1wic2lnblwiXTtcclxuICAgIGxldCByZXNPcHRpb246IGFueSA9IHJlc1tcIm9wdGlvblwiXTtcclxuICAgIGxldCByZXNGaWVsZDogYW55ID0gcmVzW1wiZmllbGRcIl07XHJcbiAgICBsZXQgclF1ZXN0aW9uOiBhbnk7XHJcbiAgICBsZXQgckluZGV4OiBhbnk7XHJcbiAgICB0aGlzLmZvcm1GaWVsZEdyb3VwLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgckluZGV4ID0gaW5kZXg7XHJcbiAgICAgIGlmIChpdGVtLmtleSA9PSByZXNGaWVsZC5rZXkpIHtcclxuICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgclF1ZXN0aW9uID0gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzd2l0Y2ggKHJlc1R5cGUpIHtcclxuICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgIHJlc0ZpZWxkLnRlbXBsYXRlT3B0aW9ucy5vcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIumAiemhuVwiLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgICAgICBcInNjb3JlXCI6IDAsXHJcbiAgICAgICAgICBcImlucHV0XCI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN1Y2Nlc3MoXCLmt7vliqDpgInpoblcIilcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImFkZHNcIjpcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3VjY2VzcyhcIuaJuemHj+a3u+WKoFwiKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgcmVzRmllbGQudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gcmVzT3B0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdWNjZXNzKFwi5Yig6Zmk6YCJ6aG5XCIpXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwic3VidGl0bGVcIjpcclxuICAgICAgICByZXNGaWVsZC50ZW1wbGF0ZU9wdGlvbnMuc3VidGl0bGUucHVzaCh7XHJcbiAgICAgICAgICBcImxhYmVsXCI6IFwi55+p6Zi16KGMXCIsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdWNjZXNzKFwi5re75Yqg55+p6Zi16KGMXCIpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+a3u+WKoOmimOebrlxyXG4gIGFkZFF1ZXN0aW9uVHlwZShkYXRhOiBhbnksIGluZGV4OiBhbnkgPSAtMSkge1xyXG4gICAgdGhpcy52eFRyYW5zZmVyU2VydmljZS50cmFuc2ZlclF1ZXN0aW9uQnlUeXBlKGRhdGEsIHRoaXMuZm9ybUZpZWxkR3JvdXAsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8v5ouW5ou95re75Yqg6aKY55uuXHJcbiAgYWRkUXVlc3Rpb25EcmFnRHJvcChyZXM6IGFueSkge1xyXG4gICAgbGV0IGRhdGEgPSByZXNbXCJwcmV2aW91c0RhdGFcIl1bcmVzW1wicHJldmlvdXNJbmRleFwiXV07XHJcbiAgICB0aGlzLnZ4VHJhbnNmZXJTZXJ2aWNlLnRyYW5zZmVyUXVlc3Rpb25CeVR5cGUoZGF0YSwgdGhpcy5mb3JtRmllbGRHcm91cCwgcmVzW1wiY3VycmVudEluZGV4XCJdKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1GaWVsZEdyb3VwKCkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIGlmICh0aGlzLmZvcm1fZmllbGRzICE9IG51bGwgJiYgdGhpcy5mb3JtX2ZpZWxkcy5sZW5ndGggPiAwICYmIHRoaXMuZm9ybV9maWVsZHNbMF0uZmllbGRHcm91cCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5mb3JtX2ZpZWxkc1swXS5maWVsZEdyb3VwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19