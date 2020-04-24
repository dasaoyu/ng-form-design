import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { NzModalService, NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICONS } from 'ng-zorro-antd';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline, MinusSquareFill, MinusSquareOutline, MinusSquareTwoTone, MinusOutline, InboxOutline } from '@ant-design/icons-angular/icons';
import zh from '@angular/common/locales/zh';
import { NzModalService as NzModalService$1 } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { FieldType, Guid, FieldWrapper, FieldArrayType, clone, VXFormCommonService, VXFormModule } from '@vx-form/core';
import { get, cloneDeep } from 'lodash';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { FormGroup, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injectable, EventEmitter, Component, Input, ViewContainerRef, ViewChild, ChangeDetectorRef, ComponentFactoryResolver, Output, forwardRef, Pipe, NgZone, ElementRef, Directive, NgModule, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormAntService {
    constructor() {
        this.btnEvent = new EventEmitter();
        this.fieldEvent = new EventEmitter();
        this.questionEvent = new EventEmitter();
        this.optionEvent = new EventEmitter();
        this.dragDropEvent = new EventEmitter();
        this.workList = [];
    }
    /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    fieldOperational(sign, field) {
        this.fieldEvent.emit({
            sign: sign,
            field: field
        });
    }
    /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    groupOperational(type, field) {
        this.btnEvent.emit({
            type: type,
            field: field
        });
    }
    /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    questionOperational(sign, field) {
        this.questionEvent.emit({
            sign: sign,
            field: field
        });
    }
    /**
     * @param {?} sign
     * @param {?} option
     * @param {?} field
     * @return {?}
     */
    optionOperational(sign, option, field) {
        this.optionEvent.emit({
            sign: sign,
            option: option,
            field: field
        });
    }
    /**
     * @param {?} previousData
     * @param {?} previousIndex
     * @param {?} currentIndex
     * @return {?}
     */
    dragDropOperational(previousData, previousIndex, currentIndex) {
        this.dragDropEvent.emit({
            previousData: previousData,
            previousIndex: previousIndex,
            currentIndex: currentIndex
        });
    }
}
VXFormAntService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXFormAntService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyRadioGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropOption(event) {
    }
    //设置逻辑
    /**
     * @return {?}
     */
    logicQuestion() {
        this.service.questionOperational("logic", this.field);
    }
    //拷贝题目
    /**
     * @return {?}
     */
    copyQuestion() {
        this.service.questionOperational("copy", this.field);
    }
    //删除题目
    /**
     * @return {?}
     */
    delQuestion() {
        this.service.questionOperational("delete", this.field);
    }
    //点击题目
    /**
     * @return {?}
     */
    activeQuestion() {
        if (!this.active) {
            this.service.questionOperational("active", this.field);
        }
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyRadioGroup.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-radiogroup",
                template: `
    <ng-container *ngIf="formStatus !== 0">
        
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyRadioGroup.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyDragDrop extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    get insertQuestionIndex() {
        /** @type {?} */
        let result = -1;
        if (this.to.index) {
            result = this.to.index;
        }
        return result;
    }
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            this.service.dragDropOperational(event.previousContainer.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    //设置逻辑
    /**
     * @param {?} field
     * @return {?}
     */
    logicQuestion(field) {
        this.service.questionOperational("logic", field);
    }
    //拷贝题目
    /**
     * @param {?} field
     * @return {?}
     */
    copyQuestion(field) {
        this.service.questionOperational("copy", field);
    }
    //删除题目
    /**
     * @param {?} field
     * @return {?}
     */
    delQuestion(field) {
        this.service.questionOperational("delete", field);
    }
    //点击题目
    /**
     * @param {?} field
     * @return {?}
     */
    activeQuestion(field) {
        if (!this.field.active) {
            this.service.questionOperational("active", field);
        }
    }
}
VXSurveyDragDrop.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-drag-drop",
                template: `
  <div class="formly-drag-drop"  (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListData]="field.fieldGroup">
  <div class="formly-drag-drop">
    <ng-container *ngFor="let field of field.fieldGroup;let index=index;" > 
      <div  (click)="activeQuestion(field)" *ngIf="field.active==true" class="formly-drag-drop_wrap active"> 
        <div class="field-operate" >  
          <span (click)="logicQuestion(field)" nzTooltipTitle="逻辑设置" nzTooltipPlacement="top" nz-tooltip>设置</span>
          <span (click)="copyQuestion(field)" nzTooltipTitle="复制题目" nzTooltipPlacement="top" nz-tooltip>复制</span>
          <span (click)="delQuestion(field)"  nzTooltipTitle="删除题目" nzTooltipPlacement="top" nz-tooltip>删除</span>
        </div>
        <div class="field-content">
        <vxform-field [field]="field" [rownumber]="index+1"></vxform-field>
        </div>
      </div>
      
      <div  (click)="activeQuestion(field)" *ngIf="field.active!=true " class="formly-drag-drop_wrap" cdkDrag> 
         
        <div class="field-content">
        <vxform-field [field]="field" [rownumber]="index+1"></vxform-field>
        </div>
      </div>
    </ng-container> 
  </div>
  
  <ng-container *ngIf="field.fieldGroup==null || field.fieldGroup.length==0" >
  <div class="formly_empty">
    <div class="formly-drag-drop"  (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListData]="field.fieldGroup">
      请把题型拖入此区域
    </div>
  </div>
</ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyDragDrop.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyRadio extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
VXSurveyRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-radio",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content"  (cdkDropListDropped)="drop($event)" cdkDropList  [cdkDropListData]="to.options">
          <div class="option_wrap basic_radio" *ngFor="let item of to.options" cdkDrag>
            <div class="option">
              <label nz-radio nzDisabled="true"></label> 
              <inline-editor  [(ngModel)]="item.label" [active]="active"></inline-editor>  
            </div>
            <div class="operate"  (click)="deleteOption(item)" *ngIf="active==true">
              <i class="icon-KT-Close"></i>
            </div>
          </div>
        </div>  
        <div class="question-wrap_operate">
          <span (click)="addOption()">添加单个选项</span> 
          <span (click)="addOptions()">批量添加选项</span>
        </div> 
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-radio-group
        [nzName]="'radiogroup-' + guid"
        [formControl]="formControl"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError"
      >
        <ng-container *ngFor="let item of to.options">
          <label nz-radio [nzValue]="item.value">{{ item.label }}</label>
        </ng-container>
      </nz-radio-group>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyRadio.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyCheckBox extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    onChange(values) {
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                if (this.to.options !== undefined && this.to.options !== null) {
                    this.to.options.forEach((/**
                     * @param {?} option
                     * @return {?}
                     */
                    (option) => {
                        if (option["value"] === value) ;
                    }));
                }
            }));
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getCheckStatus(option) {
        this.formControl.value;
    }
    /**
     * @param {?} values
     * @param {?} option
     * @return {?}
     */
    getControlChecked(values, option) {
        /** @type {?} */
        let result = false;
        if (option && values) {
            result = values.some((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                return value == option.value;
            }));
        }
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
VXSurveyCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-checkbox",
                template: `
    <ng-container *ngIf="formStatus !== 0"> 
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>  
      </div>
      <div class="question-wrap_content"  (cdkDropListDropped)="drop($event)" cdkDropList  [cdkDropListData]="to.options">
        <div class="option_wrap basic_checkbox" *ngFor="let item of to.options" cdkDrag>
          <div class="option">
            <label nz-checkbox nzDisabled="true"></label> 
            <inline-editor [(ngModel)]="item.label" [active]="active"></inline-editor>  
          </div>
          <div class="operate" (click)="deleteOption(item)" *ngIf="active==true">
            <i class="icon-KT-Close"></i>
          </div>  
        </div>
      </div> 
      <div class="question-wrap_operate">
        <span (click)="addOption()">添加单个选项</span> 
        <span (click)="addOptions()">批量添加选项</span>
      </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-checkbox-wrapper
        style="width: 100%;"
        (nzOnChange)="onChange($event)"
        [class.is-invalid]="showError"
      >
        <ng-container *ngFor="let option of to.options; let i = index">
          <label
            nz-checkbox
            [nzValue]="option.value"
            [ngModel]="getControlChecked(formControl.value, option)"
            [vxFormAttributes]="field"
            >{{ option.label }}</label>
        </ng-container>
      </nz-checkbox-wrapper> 
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyCheckBox.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyDropdown extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
VXSurveyDropdown.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-dropdown",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>  
      </div>
      <div class="question-wrap_content"  (cdkDropListDropped)="drop($event)" cdkDropList  [cdkDropListData]="to.options">
        <div class="option_wrap basic_dropdown" *ngFor="let item of to.options" cdkDrag>
          <div class="option">
          <span class="handle"></span>
            <inline-editor [(ngModel)]="item.label"></inline-editor>  
          </div>
          <div class="operate"  (click)="deleteOption(item)">
            <i class="icon-KT-Close"></i>
          </div>
        </div>
      </div> 
      <div class="question-wrap_operate">
        <span (click)="addOption()">添加单个选项</span> 
        <span (click)="addOptions()">批量添加选项</span>
      </div> 
    </ng-container> 

    <ng-container *ngIf="formStatus === 0">
      <nz-select 
        nzAllowClear 
        [formControl]="formControl"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError"
        nzPlaceHolder="请选择" 
      >
        <ng-container *ngFor="let item of to.options">
          <nz-option
            [nzLabel]="item.label"
            [nzValue]="item.value"
          ></nz-option>
        </ng-container>
      </nz-select>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyDropdown.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXDialogService {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    switchSize(size) {
        /** @type {?} */
        const obj = {
            width: 700,
            height: 500
        };
        switch (size) {
            case "small":
                obj.width = 530;
                obj.height = 400;
                break;
            case "medium":
                obj.width = 700;
                obj.height = 500;
                break;
            case "large":
                obj.width = 950;
                obj.height = 600;
                break;
            default:
                obj.width = 700;
                obj.height = 500;
                break;
        }
        return obj;
    }
    /**
     * @param {?} modalOptions
     * @param {?} params
     * @param {?} callback
     * @return {?}
     */
    CreateModelDialog(modalOptions, params, callback) {
        /** @type {?} */
        const width = this.switchSize(modalOptions.size).width;
        /** @type {?} */
        const height = this.switchSize(modalOptions.size).height;
        /** @type {?} */
        const modal = this.modalService.create({
            nzTitle: modalOptions.nzTitle ? modalOptions.nzTitle : "提示",
            nzWidth: width + "px",
            nzClosable: true,
            nzMaskClosable: false,
            nzWrapClassName: modalOptions["vertical"] ? "vertical-center-modal" : "",
            nzBodyStyle: {
                padding: "0",
                height: !modalOptions["hideBtn"]
                    ? height - 107 + "px"
                    : height - 54 + "px"
            },
            nzContent: modalOptions.nzContent,
            nzFooter: !modalOptions["hideBtn"]
                ? [
                    {
                        show: true,
                        label: "取消",
                        type: "default",
                        onClick: (/**
                         * @param {?} componentInstance
                         * @return {?}
                         */
                        componentInstance => {
                            modal.destroy();
                        })
                    },
                    {
                        show: modalOptions["showResetBtn"],
                        label: "重置",
                        type: "default",
                        onClick: (/**
                         * @param {?} componentInstance
                         * @return {?}
                         */
                        componentInstance => callback(componentInstance, modal))
                    },
                    {
                        show: true,
                        label: modalOptions["primaryLabel"]
                            ? modalOptions["primaryLabel"]
                            : "确定",
                        type: "primary",
                        onClick: (/**
                         * @param {?} componentInstance
                         * @return {?}
                         */
                        componentInstance => callback(componentInstance, modal))
                    }
                ]
                : null,
            nzOnOk: (/**
             * @param {?} data
             * @return {?}
             */
            data => { }),
            nzOnCancel: (/**
             * @param {?} data
             * @return {?}
             */
            data => { }),
            nzComponentParams: params
        });
        modal.afterClose.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (result) {
                callback(result);
            }
        }));
    }
}
VXDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
VXDialogService.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ VXDialogService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VXDialogService_Factory() { return new VXDialogService(ɵɵinject(NzModalService$1)); }, token: VXDialogService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyEditCascader {
    constructor() {
        this.cascaderData = [];
        this.row1 = {
            cascader: 1,
            current: "",
            showadd: true,
            data: []
        };
        this.row2 = {
            cascader: 2,
            current: "",
            showadd: false,
            data: []
        };
        this.row3 = {
            cascader: 3,
            current: "",
            showadd: false,
            data: []
        };
        this.row4 = {
            cascader: 4,
            current: "",
            showadd: false,
            data: []
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fieldConfig(value) {
        if (value != undefined && value != null && value.templateOptions != undefined && value.templateOptions != null && value.templateOptions.options != undefined && value.templateOptions.options != null) {
            if (Array.isArray(value.templateOptions.options)) {
                this.cascaderData = cloneDeep(value.templateOptions.options);
            }
            else {
                this.cascaderData = [];
            }
        }
        this.row1.data = this.cascaderData;
    }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
    }
    /**
     * @return {?}
     */
    get data() {
        return this.cascaderData;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} item
     * @param {?} type
     * @return {?}
     */
    cascaderItem(item, type) {
        /** @type {?} */
        let showadd = true;
        switch (type) {
            case 1:
                this.row1.current = item.value;
                this.row2.cascader = 2;
                this.row2.showadd = showadd;
                this.row2.data = item.children ? item.children : [];
                this.row3.current = "";
                this.row3.showadd = false;
                this.row3.data = [];
                this.row4.current = "";
                this.row4.showadd = false;
                this.row4.data = [];
                break;
            case 2:
                this.row2.current = item.value;
                this.row3.cascader = 3;
                this.row3.showadd = showadd;
                this.row3.data = item.children ? item.children : [];
                this.row4.current = "";
                this.row4.showadd = false;
                this.row4.data = [];
                break;
            case 3:
                this.row3.current = item.value;
                this.row4.cascader = 4;
                this.row4.showadd = showadd;
                this.row4.data = item.children ? item.children : [];
                break;
            case 4:
                this.row4.current = item.value;
                break;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    addOption(e) {
    }
    /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    delOption(e, type) {
        if (e) {
            switch (type) {
                case 1:
                    this.row1.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    this.row2 = [];
                    this.row3 = [];
                    this.row4 = [];
                    break;
                case 2:
                    this.row2.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    this.row3 = [];
                    this.row4 = [];
                    break;
                case 3:
                    this.row3.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    this.row4 = [];
                    break;
                case 4:
                    this.row4.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    break;
            }
        }
    }
}
VXSurveyEditCascader.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-editcascader",
                template: "<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E00\u7EA7\u9009\u9879\" [(row)]=\"row1\" (itemEvent)=\"cascaderItem($event,1)\" (addOptionEvent)=\"addOption(1)\" (delOptionEvent)=\"delOption($event,1)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E8C\u7EA7\u9009\u9879\" [(row)]=\"row2\" (itemEvent)=\"cascaderItem($event,2)\" (addOptionEvent)=\"addOption(2)\" (delOptionEvent)=\"delOption($event,2)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E09\u7EA7\u9009\u9879\" [(row)]=\"row3\" (itemEvent)=\"cascaderItem($event,3)\" (addOptionEvent)=\"addOption(3)\" (delOptionEvent)=\"delOption($event,3)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u56DB\u7EA7\u9009\u9879\" [(row)]=\"row4\" (itemEvent)=\"cascaderItem($event,4)\" (addOptionEvent)=\"addOption(4)\" (delOptionEvent)=\"delOption($event,4)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>",
                styles: [":host ::ng-deep{width:100%;height:100%;display:flex;background-color:#fff;padding:20px 0 0 10px}:host ::ng-deep .cascader_col{flex:1;padding:0 0 0 20px;border-right:1px solid #dde5ed}:host ::ng-deep .cascader_col:nth-last-child(1){flex:1;border-right:0}:host ::ng-deep vxsurvey-editcascader-item .wrap_active{border-color:#2672ff;background:#e7efff;box-shadow:0 2px 4px 0 rgba(38,114,255,.2)}:host ::ng-deep vxsurvey-editcascader-item .wrap_active .cascader_col_wrap_delete{display:block}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_title{padding:0 0 12px;font-size:14px;line-height:1;color:#707070;text-align:left}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_item{padding:0 20px 0 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap{display:flex;border:1px solid #dde5ed;position:relative;margin:0 0 10px;cursor:pointer;padding:0 0 0 10px}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_order{float:left;height:34px;line-height:34px;font-size:12px;color:#aaa;text-align:center}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_input{flex:1;float:left;padding:5px;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_input input{border:0;height:24px;line-height:24px;width:100%;font-size:12px;color:#aaa;outline:0;border:none;background:0 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_limit{float:left;top:0;right:0;height:34px;padding:0 6px 0 0;line-height:34px;font-size:12px;color:#2672ff;text-align:left}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete{position:absolute;right:-5px;top:-10px;display:none}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete span{background:red;border-radius:50%;display:inline-block;height:14px;width:14px;cursor:pointer}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete span i{color:#fff;font-size:2px;height:2px;width:6px;position:absolute;margin:3px 2px 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_add{font-size:12px;cursor:pointer}:host ::ng-deep .vxsurvey-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}"]
            }] }
];
/** @nocollapse */
VXSurveyEditCascader.ctorParameters = () => [];
VXSurveyEditCascader.propDecorators = {
    fieldConfig: [{ type: Input }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyCascader extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} modal
     * @param {?} vxDialogService
     */
    constructor(dyService, modal, vxDialogService) {
        super();
        this.modal = modal;
        this.vxDialogService = vxDialogService;
        this.guid = Guid.create()["value"];
        this.values = null;
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        /** @type {?} */
        let para = {
            fieldConfig: this.field
        };
        this.vxDialogService.CreateModelDialog({
            nzTitle: "选项编辑",
            size: "large",
            nzContent: VXSurveyEditCascader
        }, para, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        (instance, modal) => {
            /** @type {?} */
            let optionlist = instance.cascaderData;
            this.to.options = optionlist;
            modal.destroy();
        }));
    }
}
VXSurveyCascader.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-cascader",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>   
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap select_cascader">
            <nz-cascader [nzOptions]="to.options" [nzShowSearch]="true" [nzDisabled]="true">
            </nz-cascader>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addOption()">编辑选项</span>  
        </div> 
    </ng-container>


    <ng-container *ngIf="formStatus === 0">
      <nz-cascader nzChangeOnSelect [nzOptions]="to.options" nzPlaceHolder="请选择"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-cascader>
       
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyCascader.ctorParameters = () => [
    { type: VXFormAntService },
    { type: NzModalService$1 },
    { type: VXDialogService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyScaler extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    get scalerData() {
        /** @type {?} */
        let result = [];
        if (this.to != undefined && this.to != null && this.to.beginNumber != undefined && this.to.beginNumber != null && this.to.max != undefined && this.to.max != null) {
            /** @type {?} */
            let begin = this.to.beginNumber;
            for (let i = 0; i < this.to.max; i++) {
                result.push({
                    value: begin,
                    label: begin
                });
                begin = begin + 1;
            }
        }
        console.log(result);
        return result;
    }
}
VXSurveyScaler.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-scaler",
                template: `
    
  `
            }] }
];
/** @nocollapse */
VXSurveyScaler.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyScore extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
}
VXSurveyScore.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-score",
                template: `
    
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>  
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_score">
            
            <nz-rate *ngIf="to.type=='start'" nzAllowHalf [nzCount]="to.setting.max"></nz-rate>
            <nz-rate *ngIf="to.type=='heart'" nzAllowHalf [nzCharacter]="characterIconHeart" [nzCount]="to.setting.max"></nz-rate>
            <nz-rate *ngIf="to.type=='good'" nzAllowHalf [nzCharacter]="characterIconGood" [nzCount]="to.setting.max"></nz-rate>
            <nz-rate *ngIf="to.type=='other'" nzAllowHalf [nzCharacter]="characterIconOther" [nzCount]="to.setting.max"></nz-rate> 
            <ng-template #characterIconHeart> 
              心 
            </ng-template>
            <ng-template #characterIconGood>
              赞  
            </ng-template>
            <ng-template #characterIconOther>
              {{to.setting.label}}  
            </ng-template>  
          </div>
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-rate *ngIf="to.type=='start'" nzAllowHalf [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <nz-rate *ngIf="to.type=='heart'" nzAllowHalf [nzCharacter]="characterIconHeart" [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <nz-rate *ngIf="to.type=='good'" nzAllowHalf [nzCharacter]="characterIconGood" [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <nz-rate *ngIf="to.type=='other'" nzAllowHalf [nzCharacter]="characterIconOther" [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate> 
      <ng-template #characterIconHeart> 
        心 
      </ng-template>
      <ng-template #characterIconGood>
        赞  
      </ng-template>
      <ng-template #characterIconOther>
        {{to.setting.label}}  
      </ng-template>  
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyScore.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyLine extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyLine.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-line",
                template: `
  <ng-container *ngIf="formStatus !== 0">
    <div class="question-wrap_content">
      <div class="option_wrap basic_line" >
        <div class="line"></div>
      </div>
    </div>   
  </ng-container>

  <ng-container *ngIf="formStatus === 0">
    <div class="line"></div>
  </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyLine.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyRemark extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyRemark.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-remark",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_content">
        <div class="option_wrap basic_remark" > 
            <inline-editor [(ngModel)]="to.label"  [active]="active"></inline-editor> 
        </div>
      </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0"> 
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyRemark.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyInput extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-input",
                template: `  
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>   
      </div>
      <div class="question-wrap_content">
        <div class="option_wrap basic_input" >
          <ng-container *ngIf="to.setting.size=='small'">
            <input nz-input placeholder="" [disabled]="true" />
          </ng-container>
          <ng-container *ngIf="to.setting.size=='default'">
            <textarea rows="2" nz-input [disabled]="true" ></textarea>
          </ng-container>
          <ng-container *ngIf="to.setting.size=='large'">
            <textarea rows="4" nz-input [disabled]="true" ></textarea>
          </ng-container>
        </div>
      </div>   
  </ng-container>


    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="to.setting.size=='small'">
        <input nz-input  
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError" />
      </ng-container>
      <ng-container *ngIf="to.setting.size=='default'">
        <textarea rows="2" nz-input  
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"  ></textarea>
      </ng-container>
      <ng-container *ngIf="to.setting.size=='large'">
        <textarea rows="4" nz-input  
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"></textarea>
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyInput.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyDate extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    get format() {
        /** @type {?} */
        let result = "yyyy-MM-dd";
        if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
            result = this.to["format"];
        }
        return result;
    }
}
VXSurveyDate.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-date",
                template: ` 
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label"></inline-editor>  
      </div>
      <div class="question-wrap_content">
        <div class="option_wrap date" > 
          <nz-date-picker nzDisabled></nz-date-picker>
        </div>
      </div>   
    </ng-container>


    <ng-container *ngIf="formStatus === 0">
      <nz-date-picker 
        nzShowTime
        [nzFormat]="format"
        [formControl]="formControl"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError"
      ></nz-date-picker>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyDate.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyTime extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
}
VXSurveyTime.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-time",
                template: `
    
    
    <ng-container *ngIf="formStatus !== 0">
      <div class="question-wrap_title">
        <div class="required">
          <span *ngIf="to.required">*</span>
        </div>
        <inline-editor [(ngModel)]="to.label"></inline-editor>  
      </div>
      <div class="question-wrap_content">
        <div class="option_wrap time" > 
          <nz-time-picker nzFormat="HH:mm" [nzDisabled]="true"></nz-time-picker>
        </div>
      </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0"> 
      <nz-time-picker nzFormat="HH:mm"
        [formControl]="formControl"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError">
      </nz-time-picker> 
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyTime.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyNPS extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyNPS.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-nps",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_nps">
            <div class="option" *ngFor="let item of to.options"> 
               {{item.label}} 
            </div> 
          </div>
          
          <div class="option_wrap_text">
            <span class="fl">不可能</span>
            <span class="fr">极有可能</span>
          </div>
        </div>  
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <div class="option_wrap">
        <nz-radio-group
          [nzName]="'radiogroup-' + guid"
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        >
          <ng-container *ngFor="let item of to.options"> 
            <label nz-radio-button [nzValue]="item.value">{{ item.label }}</label>
          </ng-container>
        </nz-radio-group> 
      </div> 
      <div class="option_wrap_text">
        <span>不可能</span>
        <span>极有可能</span>
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyNPS.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyProportion extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.marks = {
            0: '0',
            20: '20',
            40: '40',
            60: '60',
            80: '80',
            100: '100'
        };
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyProportion.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-proportion",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_radio"  *ngFor="let item of to.options">
            <div class="option">
            
            </div>
            <div class="operate"  (click)="deleteOption(item)" *ngIf="active==true">
              <i class="icon-KT-Close"></i>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addOption()">添加单个选项</span> 
          <span (click)="addOptions()">批量添加选项</span>
        </div> 
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <nz-radio-group
          [nzName]="'radiogroup-' + guid"
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        >
          <ng-container *ngFor="let item of to.options">
            <label nz-radio [nzValue]="item.value">{{ item.label }}</label>
          </ng-container>
        </nz-radio-group>
        <div class="tips">
          <i
            class="icon-bangzhu"
            [nzTooltipTitle]="tips"
            nzTooltipPlacement="top"
            nz-tooltip
            *ngIf="tips != ''"
          ></i>
        </div>
      </ng-container>

      <div class="fieldtext" *ngIf="editor === false">{{ textSingle }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyProportion.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyEditEvaluation {
    constructor() {
        this.start = 1;
        this.optionSelectedIndex = 0;
        this.currentSelected = {};
        this.editevaluationData = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fieldConfig(value) {
        console.log(JSON.stringify(value));
        if (value != undefined && value != null && value.templateOptions != undefined && value.templateOptions != null && value.templateOptions.options != undefined && value.templateOptions.options != null) {
            if (Array.isArray(value.templateOptions.options)) {
                this.editevaluationData = cloneDeep(value.templateOptions.options);
                this.currentSelected = this.editevaluationData[0];
            }
            else {
                this.editevaluationData = [];
            }
        }
        else {
            this.editevaluationData = [];
        }
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    optionClick(event) {
        this.start = event + 1;
        this.currentSelected = this.editevaluationData[event];
    }
    /**
     * @return {?}
     */
    getOptionTag() {
        return this.currentSelected.tag.split(/[\s\n]/);
    }
}
VXSurveyEditEvaluation.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-editevaluation",
                template: "<div class=\"edit_evaluation\">\r\n    <nz-rate [(ngModel)]=\"start\" [nzCount]=\"5\"></nz-rate>\r\n    <div class=\"label\">\"{{currentSelected.label}}\"</div>\r\n    <div class=\"tag\">\r\n        <ng-container *ngFor=\"let item of getOptionTag()\">\r\n            <span *ngIf=\"item!=''\">{{item}}</span>\r\n        </ng-container>\r\n    </div>\r\n    <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"optionSelectedIndex\" (nzSelectedIndexChange)=\"optionClick($event)\">\r\n\r\n        <ng-container *ngFor=\"let option of editevaluationData;let index=index;\">\r\n            <nz-tab [nzTitle]=\"titleTemplate\">\r\n                <ng-template #titleTemplate>\r\n                    <div>\r\n                        {{ option.value }}\u5206\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"option-label\">\r\n                        \u5206\u503C\u8BF4\u660E\uFF08\u6700\u591A\u53EF\u8F93\u516510\u4E2A\u5B57\uFF09\r\n                    </div>\r\n                    <div>\r\n                        <input nz-input [(ngModel)]=\"option.label\" />\r\n                    </div>\r\n                    <div class=\"option-tag\">\r\n                        \u6807\u7B7E\u8BBE\u7F6E\uFF08\u6BCF\u884C\u5BF9\u5E941\u4E2A\u6807\u7B7E\uFF0C\u6700\u591A10\u4E2A\u6807\u7B7E\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u6700\u591A10\u4E2A\u5B57\uFF0C\u53EF\u590D\u5236\u5176\u4ED6\u9009\u9879\u6807\u7B7E\uFF09\r\n                    </div>\r\n                    <div>\r\n                        <textarea rows=\"8\" nz-input [(ngModel)]=\"option.tag\"></textarea>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab>\r\n        </ng-container>\r\n    </nz-tabset>\r\n\r\n</div>",
                styles: [":host ::ng-deep{width:100%;height:100%;display:flex;background-color:#fff;padding:20px 0 0 10px}:host ::ng-deep .edit_evaluation{text-align:center;padding:0 20px;width:100%}:host ::ng-deep .edit_evaluation .ant-rate-star{font-size:30px}:host ::ng-deep .edit_evaluation .label{margin:20px 0 0;text-align:center;color:#fadb14;font-size:12px}:host ::ng-deep .edit_evaluation .tag{margin:20px 0;text-align:center}:host ::ng-deep .edit_evaluation .tag span{display:inline-block;font-size:12px;color:#aaa;padding:3px 10px;background:#fff;border:1px solid #eaeaea;border-radius:2px;margin-right:5px}:host ::ng-deep .edit_evaluation nz-tabset{text-align:left}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-bar{margin:0}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-top-content{border-left:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #eee;padding:20px;font-size:12px}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-nav-container{height:30px!important}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-tab{height:30px!important;line-height:30px!important;padding:0 20px!important;font-size:13px}:host ::ng-deep .edit_evaluation nz-tabset .ant-input{font-size:12px}:host ::ng-deep .edit_evaluation nz-tabset .option-label{margin:0 0 5px}:host ::ng-deep .edit_evaluation nz-tabset .option-tag{margin:15px 0 5px}"]
            }] }
];
/** @nocollapse */
VXSurveyEditEvaluation.ctorParameters = () => [];
VXSurveyEditEvaluation.propDecorators = {
    fieldConfig: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyEvaluation extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} vxDialogService
     */
    constructor(dyService, vxDialogService) {
        super();
        this.vxDialogService = vxDialogService;
        this.guid = Guid.create()["value"];
        this.start = 0;
        this._startContent = {
            label: "",
            tags: []
        };
        this.service = dyService;
        this.start = 1;
    }
    /**
     * @return {?}
     */
    get startContent() {
        if (this._startContent.label == "" && this.to.options != undefined) {
            this.to.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.value == this.start) {
                    this._startContent.label = item.label;
                    this._startContent.tags = item.tag.split(/[\s\n]/);
                }
            }));
        }
        return this._startContent;
    }
    /**
     * @return {?}
     */
    numberChange() {
        if (this.to.options != undefined) {
            this.to.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.value == this.start) {
                    this._startContent.label = item.label;
                    this._startContent.tags = item.tag.split(/[\s\n]/);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    editStart() {
        /** @type {?} */
        let para = {
            fieldConfig: this.field
        };
        this.vxDialogService.CreateModelDialog({
            nzTitle: "选项编辑",
            size: "large",
            nzContent: VXSurveyEditEvaluation
        }, para, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        (instance, modal) => {
            this.to.options = instance.editevaluationData;
            this.numberChange();
            modal.destroy();
        }));
    }
}
VXSurveyEvaluation.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-evaluation",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_evaluation">
            <nz-rate [(ngModel)]="start" [nzCount]="5"	(ngModelChange)="numberChange()"></nz-rate>
            <div class="label">"{{startContent.label}}"</div>
            <div class="tag">
              <ng-container *ngFor="let item of startContent.tags">
                <span>{{item}}</span>
              </ng-container>
              <label (click)="editStart()">
                编辑
              </label>
            </div>
          </div>
        </div> 
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-rate [nzCount]="5" [(ngModel)]="start" 	(ngModelChange)="numberChange()" 
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <div class="label">"{{startContent.label}}"</div>
      <div class="tag">
        <ng-container *ngFor="let item of startContent.tags">
          <span>{{item}}</span>
        </ng-container> 
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyEvaluation.ctorParameters = () => [
    { type: VXFormAntService },
    { type: VXDialogService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyMatrixRadio extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} value
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    controlModelChange(value, subtitle, option) {
        /** @type {?} */
        let values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { return item.groupid == subtitle.value; }))) {
                values.push({
                    groupid: subtitle.value,
                    options: [{
                            optionid: option.value,
                            optionvalue: true
                        }]
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.groupid == subtitle.value) {
                        item.options = [{
                                optionid: option.value,
                                optionvalue: true
                            }];
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: true
                    }]
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getControlChecked(subtitle, option) {
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.groupid == subtitle.value) {
                    result = value.options[0].optionid;
                }
            }));
        }
        return result;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //添加行
    /**
     * @return {?}
     */
    addSubTitle() {
        this.service.optionOperational("subtitle", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyMatrixRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_radio",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap matrix_radio">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                  <label nz-radio nzDisabled="true"></label> 
                  </td>
                </tr>
              </table>
            </div>
            <div class="option_vertical">
              <span (click)="addOption()">添加单个选项</span>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addSubTitle()">添加单矩阵行</span>  
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <table class="option_wrap">
        <tr>
          <td></td>
          <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
        </tr>
        <tr *ngFor="let itemTR of to.subtitle">
          <td>{{itemTR.label}}</td>
          <td *ngFor="let itemTD of to.options"> 
            <input [id]="itemTR.value+'-'+itemTD.value" type="radio" [value]="itemTD.value" [name]="itemTR.value" [ngModel]="getControlChecked(itemTR,itemTD)"  (ngModelChange)="controlModelChange($event,itemTR,itemTD)">
          </td>
        </tr>
      </table>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixRadio.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyMatrixCheckBox extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getMatrixOption(subtitle, option) {
        return {
            groupid: subtitle.value,
            optionid: option.value
        };
    }
    /**
     * @param {?} values
     * @return {?}
     */
    onChange(values) {
        /** @type {?} */
        let res = [];
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (!res.some((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => { return item.groupid == value.groupid; }))) {
                    res.push({
                        groupid: value.groupid,
                        options: [{
                                optionid: value.optionid,
                                optionvalue: true
                            }]
                    });
                }
                else {
                    res.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.groupid == value.groupid) {
                            item.options.push({
                                optionid: value.optionid,
                                optionvalue: true
                            });
                        }
                    }));
                }
            }));
        }
        this.formControl.patchValue(res);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getControlChecked(subtitle, option) {
        /** @type {?} */
        let result = false;
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.groupid == subtitle.value) {
                    value.options.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.optionid == option.value) {
                            result = item.optionvalue;
                        }
                    }));
                }
            }));
        }
        return result;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //添加行
    /**
     * @return {?}
     */
    addSubTitle() {
        this.service.optionOperational("subtitle", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyMatrixCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_checkbox",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap matrix_checkbox">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                  <label nz-checkbox nzDisabled="true"></label> 
                  </td>
                </tr>
              </table>
            </div>
            <div class="option_vertical">
              <span (click)="addOption()">添加单个选项</span>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addSubTitle()">添加单矩阵行</span>  
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
    <nz-checkbox-wrapper
      style="width: 100%;"
      (nzOnChange)="onChange($event)"
      [class.is-invalid]="showError">
      <table class="option_wrap">
        <tr>
          <td></td>
          <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
        </tr>
        <tr *ngFor="let itemTR of to.subtitle">
          <td>{{itemTR.label}}</td>
          <td *ngFor="let itemTD of to.options">
          <label nz-checkbox
            [nzValue]="getMatrixOption(itemTR,itemTD)"
            [ngModel]="getControlChecked(itemTR,itemTD)">
          </label> 
          </td>
        </tr> 
      </table>
      </nz-checkbox-wrapper>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixCheckBox.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyMatrixScore extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} value
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    controlModelChange(value, subtitle, option) {
        /** @type {?} */
        let values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { return item.groupid == subtitle.value; }))) {
                values.push({
                    groupid: subtitle.value,
                    options: [{
                            optionid: option.value,
                            optionvalue: value
                        }]
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.groupid == subtitle.value) {
                        if (!item.options.some((/**
                         * @param {?} op
                         * @return {?}
                         */
                        (op) => { return op.optionid == option.value; }))) {
                            item.options.push({
                                optionid: option.value,
                                optionvalue: value
                            });
                        }
                        else {
                            item.options.forEach((/**
                             * @param {?} op
                             * @return {?}
                             */
                            (op) => {
                                if (op.optionid == option.value) {
                                    op.optionvalue = value;
                                }
                            }));
                        }
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: value
                    }]
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getControlChecked(subtitle, option) {
        /** @type {?} */
        let result = 0;
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.groupid == subtitle.value) {
                    value.options.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.optionid == option.value) {
                            result = item.optionvalue;
                        }
                    }));
                }
            }));
        }
        return result;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //添加行
    /**
     * @return {?}
     */
    addSubTitle() {
        this.service.optionOperational("subtitle", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyMatrixScore.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_score",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap matrix_score">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                    <nz-rate [nzCount]="5"></nz-rate>
                  </td>
                </tr>
              </table>
            </div>
            <div class="option_vertical">
              <span (click)="addOption()">添加单个选项</span>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addSubTitle()">添加单矩阵行</span>  
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <table class="option_wrap">
        <tr>
          <td></td>
          <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
        </tr>
        <tr *ngFor="let itemTR of to.subtitle">
          <td>{{itemTR.label}}</td>
          <td *ngFor="let itemTD of to.options">
            <nz-rate [nzCount]="5" [ngModel]="getControlChecked(itemTR,itemTD)" (ngModelChange)="controlModelChange($event,itemTR,itemTD)"></nz-rate>
          </td>
        </tr>
      </table>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixScore.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyMatrixInput extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} value
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    controlModelChange(value, subtitle, option) {
        /** @type {?} */
        let values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { return item.groupid == subtitle.value; }))) {
                values.push({
                    groupid: subtitle.value,
                    options: [{
                            optionid: option.value,
                            optionvalue: value
                        }]
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.groupid == subtitle.value) {
                        if (!item.options.some((/**
                         * @param {?} op
                         * @return {?}
                         */
                        (op) => { return op.optionid == option.value; }))) {
                            item.options.push({
                                optionid: option.value,
                                optionvalue: value
                            });
                        }
                        else {
                            item.options.forEach((/**
                             * @param {?} op
                             * @return {?}
                             */
                            (op) => {
                                if (op.optionid == option.value) {
                                    op.optionvalue = value;
                                }
                            }));
                        }
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: value
                    }]
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getControlChecked(subtitle, option) {
        /** @type {?} */
        let result = null;
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.groupid == subtitle.value) {
                    value.options.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.optionid == option.value) {
                            result = item.optionvalue;
                        }
                    }));
                }
            }));
        }
        return result;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //添加行
    /**
     * @return {?}
     */
    addSubTitle() {
        this.service.optionOperational("subtitle", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyMatrixInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_input",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap matrix_input">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                    <input nz-input placeholder="" [disabled]="true" />
                  </td>
                </tr>
              </table>
            </div>
            <div class="option_vertical">
              <span (click)="addOption()">添加单个选项</span>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addSubTitle()">添加单矩阵行</span>  
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <table class="option_wrap">
        <tr>
          <td></td>
          <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
        </tr>
        <tr *ngFor="let itemTR of to.subtitle">
          <td>{{itemTR.label}}</td>
          <td *ngFor="let itemTD of to.options">
            <input nz-input [ngModel]="getControlChecked(itemTR,itemTD)"  (ngModelChange)="controlModelChange($event,itemTR,itemTD)"/>
          </td>
        </tr>
      </table>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixInput.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyInputGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} value
     * @param {?} option
     * @return {?}
     */
    controlModelChange(value, option) {
        /** @type {?} */
        let values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { return item.optionid == option.value; }))) {
                values.push({
                    optionid: option.value,
                    optionvalue: value
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.optionid == option.value) {
                        item.optionvalue = value;
                    }
                }));
            }
        }
        else {
            values.push({
                optionid: option.value,
                optionvalue: value
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getControlChecked(option) {
        /** @type {?} */
        let result = null;
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.optionid == option.value) {
                    result = value.optionvalue;
                }
            }));
        }
        return result;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyInputGroup.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-input_group",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_input_group"  *ngFor="let item of to.options">
            <div class="option">
              <inline-editor  [(ngModel)]="item.label" [active]="active"></inline-editor> 
              <input nz-input placeholder="" [disabled]="true" /> 
            </div>
            <div class="operate"  (click)="deleteOption(item)" *ngIf="active==true">
              <i class="icon-KT-Close"></i>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addOption()">添加单个选项</span> 
          <span (click)="addOptions()">批量添加选项</span>
        </div> 
    </ng-container>
    <ng-container *ngIf="formStatus === 0">
      <div class="inputlist"  *ngFor="let item of to.options">
        <div class="title">
          {{item.label}} 
        </div> 
        <input nz-input [ngModel]="getControlChecked(item)"  (ngModelChange)="controlModelChange($event,item)"/>
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyInputGroup.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormWrapperFormField extends FieldWrapper {
}
VXFormWrapperFormField.decorators = [
    { type: Component, args: [{
                selector: "vxfield-wrapper",
                template: `
    <ng-container
      *ngIf="formStatus !== 0 || field.type == 'line' || field.type == 'html'"
    >
      <ng-template #fieldComponent></ng-template>
    </ng-container>
    <ng-container
      *ngIf="formStatus === 0 && field.type != 'line' && field.type != 'html'"
    >
      <div class="fieldlabel">
        <span class="required" *ngIf="to.required">*</span>
        <span class="question_no" *ngIf="to.queno">{{to.queno}}.&nbsp;</span>
        {{ to.label }}
      </div>
      <div class="fieldcontrol" [class.has-error]="showError">
        <ng-template #fieldComponent></ng-template>
        <div class="invalid-feedback" [style.display]="'block'">
          <vxform-validation-message
            *ngIf="showError"
            style="color:red"
            [field]="field"
          ></vxform-validation-message>
        </div>
      </div>
    </ng-container>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldGroup extends FieldType {
}
VXFormFieldGroup.decorators = [
    { type: Component, args: [{
                selector: "group",
                template: `
    <vxform-field *ngFor="let f of field.fieldGroup" [field]="f"></vxform-field>
    <ng-content></ng-content>
  `,
                host: {
                    "[class]": 'field.className || ""',
                    cdkDrag: ""
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldRepeat extends FieldArrayType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.service = dyService;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    groupOperational(type) {
        this.service.groupOperational(type, this.field);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    delete(i) {
        if (this.field.fieldGroup && this.field.fieldGroup.length > 1) {
            this.remove(i);
        }
    }
}
VXFormFieldRepeat.decorators = [
    { type: Component, args: [{
                selector: "vxform-repeat",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <!--
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        -->
        <div class="reportControl">
          <div class="report-header">
            <div class="left">
              <ul>
                <li><label nz-checkbox [(ngModel)]="field.checked"></label></li>
                <li (click)="groupOperational('item')">
                  <i class="icon-TianJiaZiDuan"></i>添加字段
                </li>
                <li (click)="groupOperational('remark')">
                  <i class="icon-other-WenBen"></i>添加文本
                </li>
                <li (click)="groupOperational('line')">
                  <i class="icon-FenGeXian"></i>添加分割线
                </li>
              </ul>
            </div>
            <div class="right">
              <ul>
                <li (click)="groupOperational('delete')">
                  <i class="icon-N_delete2"></i>删除
                </li>
                <li (click)="groupOperational('up')">
                  <i class="icon-ShangYi"></i>上移
                </li>
                <li (click)="groupOperational('down')">
                  <i class="icon-XiaYi"></i>下移
                </li>
                <li (click)="fieldOperational('delete')">
                  <button class="btnDel">
                    <i class="icon-KT-Close"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="report-body">
            <ng-container *ngFor="let field of field.fieldGroup; let i = index">
              <vxform-field class="col" [field]="field"></vxform-field>
            </ng-container>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <div *ngFor="let field of field.fieldGroup; let i = index" class="row">
        <vxform-field class="col" [field]="field"></vxform-field>

        <span (click)="delete(i)" class="del">删除</span>

        <div class="tips"></div>
      </div>
      <div class="add">
        <span (click)="add()">新增</span>
      </div>
    </ng-container>
  `,
                host: {
                    "[class]": 'field.className || ""',
                    cdkDrag: ""
                }
            }] }
];
/** @nocollapse */
VXFormFieldRepeat.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FIELD_TYPE_COMPONENTS = [
    VXSurveyRadio,
    VXSurveyCheckBox,
    VXSurveyDropdown,
    VXSurveyCascader,
    VXSurveyScaler,
    VXSurveyScore,
    VXSurveyLine,
    VXSurveyRemark,
    VXSurveyInput,
    VXSurveyDate,
    VXSurveyTime,
    VXSurveyNPS,
    VXSurveyProportion,
    VXSurveyEvaluation,
    VXSurveyMatrixRadio,
    VXSurveyMatrixCheckBox,
    VXSurveyMatrixScore,
    VXSurveyMatrixInput,
    VXSurveyInputGroup,
    // types 
    VXSurveyRadioGroup,
    //templates
    VXSurveyDragDrop,
    VXFormFieldGroup,
    VXFormFieldRepeat,
    // wrappers
    VXFormWrapperFormField
];
/** @type {?} */
const BOOTSTRAP_VXFORM_CONFIG = {
    types: [
        {
            name: "radio", component: VXSurveyRadio, wrappers: ["form-field"]
        },
        {
            name: "checkbox", component: VXSurveyCheckBox, wrappers: ["form-field"]
        },
        {
            name: "dropdown", component: VXSurveyDropdown, wrappers: ["form-field"]
        },
        {
            name: "cascader", component: VXSurveyCascader, wrappers: ["form-field"]
        },
        {
            name: "scaler", component: VXSurveyScaler, wrappers: ["form-field"]
        },
        {
            name: "score", component: VXSurveyScore, wrappers: ["form-field"]
        },
        {
            name: "line", component: VXSurveyLine, wrappers: ["form-field"]
        },
        {
            name: "remark", component: VXSurveyRemark, wrappers: ["form-field"]
        },
        {
            name: "input", component: VXSurveyInput, wrappers: ["form-field"]
        },
        {
            name: "date", component: VXSurveyDate, wrappers: ["form-field"]
        },
        {
            name: "time", component: VXSurveyTime, wrappers: ["form-field"]
        },
        {
            name: "nps", component: VXSurveyNPS, wrappers: ["form-field"]
        },
        {
            name: "proportion", component: VXSurveyProportion, wrappers: ["form-field"]
        },
        {
            name: "evaluation", component: VXSurveyEvaluation, wrappers: ["form-field"]
        },
        {
            name: "matrix_radio", component: VXSurveyMatrixRadio, wrappers: ["form-field"]
        },
        {
            name: "matrix_checkbox", component: VXSurveyMatrixCheckBox, wrappers: ["form-field"]
        },
        {
            name: "matrix_score", component: VXSurveyMatrixScore, wrappers: ["form-field"]
        },
        {
            name: "matrix_input", component: VXSurveyMatrixInput, wrappers: ["form-field"]
        },
        {
            name: "input_group", component: VXSurveyInputGroup, wrappers: ["form-field"]
        },
        {
            name: "drag-drop", component: VXSurveyDragDrop
        },
        { name: "group", component: VXFormFieldGroup },
        { name: "repeat", component: VXFormFieldRepeat },
        {
            name: "radiogroup",
            component: VXSurveyRadioGroup,
            wrappers: ["form-field"]
        }
    ],
    wrappers: [{ name: "form-field", component: VXFormWrapperFormField }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} field
 * @param {?} key
 * @return {?}
 */
function getFieldPro(field, key) {
    return get(field, "templateOptions." + key + "");
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function requiredValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}不能为空`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function minlengthValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最小长度为${getFieldPro(field, "minLength")}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function maxlengthValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最大长度为${getFieldPro(field, "maxLength")}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function minValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最小值为${getFieldPro(field, "min")}`;
}
/**
 * @param {?} err
 * @param {?} field
 * @return {?}
 */
function maxValidationMessage(err, field) {
    return `${getFieldPro(field, "label")}最大值为${getFieldPro(field, "max")}`;
}
/** @type {?} */
let validationConfig = {
    validationMessages: [
        { name: "required", message: requiredValidationMessage },
        { name: "null", message: "不能为NULL" },
        { name: "minlength", message: minlengthValidationMessage },
        { name: "maxlength", message: maxlengthValidationMessage },
        { name: "min", message: minValidationMessage },
        { name: "max", message: maxValidationMessage },
        { name: "multipleOf", message: "ssss" },
        { name: "exclusiveMinimum", message: "ssss" },
        { name: "exclusiveMaximum", message: "ssss" },
        { name: "minItems", message: "ssss" },
        { name: "maxItems", message: "ssss" },
        { name: "uniqueItems", message: "should NOT have duplicate items" },
        { name: "const", message: "ssss" },
        { name: "pattern", message: "不满足这则表达式" }
    ],
    types: [
        // { name: "string", extends: "input" },
        // {
        //   name: "number",
        //   extends: "input",
        //   defaultOptions: {
        //     templateOptions: {
        //       type: "number"
        //     }
        //   }
        // },
        // {
        //   name: "integer",
        //   extends: "input",
        //   defaultOptions: {
        //     templateOptions: {
        //       type: "number"
        //     }
        //   }
        // },
        // { name: "boolean", extends: "checkbox" },
        // { name: "enum", extends: "select" },
        { name: "array", extends: "array" },
        { name: "object", extends: "object" }
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class _HttpClient {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this._loading = false;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParams(params) {
        /*const newParams = {};
        Object.keys(params).forEach(key => {
          let _data = params[key];
    
          newParams[key] = _data;
        });*/
        if (params === undefined || params === null) {
            params = {};
        }
        return new HttpParams({ fromObject: params });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    formEncode(obj) {
        /** @type {?} */
        var encodedString = "";
        for (var key in obj) {
            if (encodedString.length !== 0) {
                encodedString += "&";
            }
            encodedString += key + "=" + encodeURIComponent(obj[key]);
        }
        return encodedString;
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    appliedUrl(url, params) {
        if (!params)
            return url;
        url += ~url.indexOf("?") ? "" : "?";
        /** @type {?} */
        const arr = [];
        for (const key in params) {
            arr.push(`${key}=${params[key]}`);
        }
        return url + arr.join("&");
    }
    /**
     * @return {?}
     */
    begin() {
        setTimeout((/**
         * @return {?}
         */
        () => (this._loading = true)));
    }
    /**
     * @return {?}
     */
    end() {
        setTimeout((/**
         * @return {?}
         */
        () => (this._loading = false)));
    }
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    get(url, params, options) {
        return this.request("GET", url, Object.assign({
            params
        }, options));
    }
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    post(url, body, params, options) {
        return this.request("POST", url, Object.assign({
            body,
            params
        }, options));
    }
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    delete(url, params, options) {
        return this.request("DELETE", url, Object.assign({
            params
        }, options));
    }
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    jsonp(url, params, callbackParam = "JSONP_CALLBACK") {
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.end();
        })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.end();
            return throwError(res);
        })));
    }
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    patch(url, body, params, options) {
        return this.request("PATCH", url, Object.assign({
            body,
            params
        }, options));
    }
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    put(url, body, params, options) {
        return this.request("PUT", url, Object.assign({
            body,
            params
        }, options));
    }
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    request(method, url, options) {
        this.begin();
        if (options) {
            if (options.params)
                options.params = this.parseParams(options.params);
            if (options.body) ;
        }
        return this.http.request(method, url, options).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.end();
        })), catchError((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.end();
            return throwError(res);
        })));
    }
}
_HttpClient.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */
_HttpClient.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ _HttpClient.ngInjectableDef = ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(ɵɵinject(HttpClient)); }, token: _HttpClient, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    //根据Id|其他 获取相关表信息
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    getBusinessTables(url, params = {}) {
        return this._http.get(url, params);
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    getFormInfo(url, params = {}) {
        return this._http.get(url, params);
    }
    //系统控件-人员
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrEmployee(params = {}) {
        //let url = "emptable.json";
        /** @type {?} */
        let url = this.getWebAPIName("employee");
        /** @type {?} */
        let result = this._http.get(url, params);
        return result;
    }
    //系统控件-组织
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrOrgTree(params = {}) {
        //let url = "org-tree.json";
        /** @type {?} */
        let url = this.getWebAPIName("organization");
        return this._http.get(url, params);
    }
    //系统控件-职位
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrPostionTable(params = {}) {
        //let url = "postiontable.json";
        /** @type {?} */
        let url = this.getWebAPIName("postion");
        return this._http.get(url, params);
    }
    //系统控件-地区
    /**
     * @param {?=} params
     * @return {?}
     */
    getSysCtrArea(params = {}) {
        /** @type {?} */
        let url = "tables.json";
        return this._http.get(url, params);
    }
    //树形数据
    /**
     * @param {?=} params
     * @return {?}
     */
    getTreeData(params = {}) {
        //let url = "tree.json";
        /** @type {?} */
        let url = this.getWebAPIName("tree");
        return this._http.get(url, params);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getWebAPIName(type) {
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let res = localStorage.getItem("VXFORM:WEBAPI");
        if (res != undefined && res != null && res != "") {
            /** @type {?} */
            let webapi = JSON.parse(res);
            result = webapi[type];
        }
        if (result == undefined || result == null) {
            result = "";
        }
        return result;
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: _HttpClient }
];
/** @nocollapse */ DataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(ɵɵinject(_HttpClient)); }, token: DataService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXRadioService {
    constructor() { }
    /*
        单选题
        radio  单选题、性别、年龄、学历、职业
    
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_radio(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "radio"
        };
        switch (questionType.tag) {
            case "default":
                this.createRadio_default(question);
                break;
            case "gender":
                this.createRadio_gender(question);
                break;
            case "age":
                this.createRadio_age(question);
                break;
            case "education":
                this.createRadio_education(question);
                break;
            case "occupation":
                this.createRadio_occupation(question);
                break;
            case "votefont":
                this.createRadio_votefont(question);
                break;
            default:
                this.createRadio_default(question);
                break;
        }
        return question;
    }
    //单选题
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_default(question) {
        question.templateOptions = {
            label: "请选择一个选项",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "选项1",
                    value: "1",
                    score: 0
                },
                {
                    label: "选项2",
                    value: "2",
                    score: 0
                }]
        };
    }
    //性别
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_gender(question) {
        question.templateOptions = {
            label: "性别",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "男",
                    value: "1",
                    score: 0
                },
                {
                    label: "女",
                    value: "2",
                    score: 0
                }]
        };
    }
    //年龄
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_age(question) {
        question.templateOptions = {
            label: "您的年龄是？",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "18~24岁",
                    value: "1",
                    score: 0
                },
                {
                    label: "25~30岁",
                    value: "2",
                    score: 0
                },
                {
                    label: "31~40岁",
                    value: "3",
                    score: 0
                },
                {
                    label: "41~50岁",
                    value: "4",
                    score: 0
                },
                {
                    label: "51~60岁",
                    value: "5",
                    score: 0
                },
                {
                    label: "61岁及以上",
                    value: "6",
                    score: 0
                }]
        };
    }
    //学历
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_education(question) {
        question.templateOptions = {
            label: "学历",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "小学级以下",
                    value: "1",
                    score: 0
                },
                {
                    label: "初中",
                    value: "2",
                    score: 0
                },
                {
                    label: "高中/中专/技校",
                    value: "3",
                    score: 0
                },
                {
                    label: "大学专科",
                    value: "4",
                    score: 0
                },
                {
                    label: "大学本科",
                    value: "5",
                    score: 0
                },
                {
                    label: "硕士研究生及以上",
                    value: "6",
                    score: 0
                }]
        };
    }
    //职业 
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_occupation(question) {
        question.templateOptions = {
            label: "您目前所处行业是？",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [
                {
                    label: "在校学生",
                    value: "1",
                    score: 0
                },
                {
                    label: "政府/机关干部/公务员",
                    value: "2",
                    score: 0
                },
                {
                    label: "企业管理者（包括基层及中高层管理者）",
                    value: "3",
                    score: 0
                },
                {
                    label: "普通职员（办公室/写字楼工作人员）",
                    value: "4",
                    score: 0
                },
                {
                    label: "专业人员（如医生/律师/文体/记者/老师等）",
                    value: "5",
                    score: 0
                },
                {
                    label: "普通工人（如工厂工人/体力劳动者等）",
                    value: "6",
                    score: 0
                },
                {
                    label: "商业服务业职工（如销售人员/商店职员/服务员等）",
                    value: "7",
                    score: 0
                },
                {
                    label: "个体经营者/承包商",
                    value: "8",
                    score: 0
                },
                {
                    label: "自由职业者",
                    value: "9",
                    score: 0
                },
                {
                    label: "农林牧渔劳动者",
                    value: "10",
                    score: 0
                },
                {
                    label: "退休",
                    value: "11",
                    score: 0
                },
                {
                    label: "暂无职业",
                    value: "12",
                    score: 0
                },
                {
                    label: "其他职业人员（请注明）",
                    value: "13",
                    score: 0
                }
            ]
        };
    }
    //文字投票
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_votefont(question) {
        question.templateOptions = {
            label: "请给以下选项投票",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "选项1",
                    value: "1",
                    score: 0
                },
                {
                    label: "选项2",
                    value: "2",
                    score: 0
                }]
        };
    }
}
VXRadioService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXRadioService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXCheckboxService {
    constructor() { }
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_checkbox(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "checkbox"
        };
        switch (questionType.tag) {
            case "default":
                this.createCheckbox_default(question);
                break;
            default:
                this.createCheckbox_default(question);
                break;
        }
        return question;
    }
    //多选题
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCheckbox_default(question) {
        question.templateOptions = {
            label: "请选择以下选项 (多选)",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1",
                max: 2,
                min: 0
            },
            options: [{
                    label: "选项1",
                    value: "1",
                    score: 0
                },
                {
                    label: "选项2",
                    value: "2",
                    score: 0
                }]
        };
    }
}
VXCheckboxService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXCheckboxService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXInputService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXCascaderService {
    constructor() { }
    /*
        级联选择
        cascader  级联 、专业、院校、行业
    
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_cascader(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "cascader"
        };
        switch (questionType.tag) {
            case "default":
                this.createCascader_default(question);
                break;
            case "major":
                this.createCascader_major(question);
                break;
            case "industry":
                this.createCascader_industry(question);
                break;
            case "university":
                this.createCascader_university(question);
                break;
            default:
                this.createCascader_default(question);
                break;
        }
        return question;
    }
    //级联
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_default(question) {
        question.templateOptions = {
            label: "请选择以下选项",
            options: [
                {
                    label: "请选择",
                    value: "-1"
                },
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
    }
    //专业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_major(question) {
        question.templateOptions = {
            label: "您大学所学专业是？",
            options: [
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
        return question;
    }
    //行业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_industry(question) {
        question.templateOptions = {
            label: "您目前所处行业是？",
            options: [
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
        return question;
    }
    //院校
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_university(question) {
        question.templateOptions = {
            label: "您所就读的学校是？",
            options: [
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
        return question;
    }
}
VXCascaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXCascaderService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXOtherService {
    constructor() { }
    //分割线
    /**
     * @return {?}
     */
    create_line() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "line",
            templateOptions: {
                label: "分割线"
            }
        };
        return question;
    }
    //备注说明
    /**
     * @return {?}
     */
    create_remark() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "remark",
            templateOptions: {
                label: "请阅读本项说明，然后回答问题"
            }
        };
        return question;
    }
    //日期
    /**
     * @return {?}
     */
    create_date() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "date",
            templateOptions: {
                label: "日期",
                required: false
            }
        };
        return question;
    }
    //时间
    /**
     * @return {?}
     */
    create_time() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "time",
            templateOptions: {
                label: "时间",
                required: false
            }
        };
        return question;
    }
    //打分题
    /**
     * @return {?}
     */
    create_score() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "score",
            templateOptions: {
                type: "start",
                label: "请给本项打分",
                setting: {
                    label: "",
                    score: 0,
                    min: 0,
                    max: 5
                }
            }
        };
        return question;
    }
    //下拉题
    /**
     * @return {?}
     */
    create_dropdown() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "dropdown",
            templateOptions: {
                label: "请选择一个选",
                setting: {
                    score: 0
                },
                options: [{
                        label: "选项1",
                        value: "1",
                        score: 0
                    },
                    {
                        label: "选项2",
                        value: "2",
                        score: 0
                    }]
            }
        };
        return question;
    }
    //NPS题
    /**
     * @return {?}
     */
    create_nps() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "nps",
            templateOptions: {
                label: "您向朋友或同事推荐我们的可能性有多大？",
                required: false,
                options: [{
                        label: "0",
                        value: "0"
                    },
                    {
                        label: "1",
                        value: "1"
                    },
                    {
                        label: "2",
                        value: "2"
                    },
                    {
                        label: "3",
                        value: "3"
                    },
                    {
                        label: "4",
                        value: "4"
                    },
                    {
                        label: "5",
                        value: "5"
                    },
                    {
                        label: "6",
                        value: "6"
                    },
                    {
                        label: "7",
                        value: "7"
                    },
                    {
                        label: "8",
                        value: "8"
                    },
                    {
                        label: "9",
                        value: "9"
                    },
                    {
                        label: "10",
                        value: "10"
                    }]
            }
        };
        return question;
    }
    //比重题
    /**
     * @return {?}
     */
    create_proportion() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "proportion",
            templateOptions: {
                label: "请选择一个选",
                layout: "row1",
                order: false,
                score: 0,
                required: false,
                options: [{
                        label: "选项1",
                        value: "1",
                        score: 0,
                        input: false
                    },
                    {
                        label: "选项2",
                        value: "2",
                        score: 0,
                        input: false
                    }]
            }
        };
        return question;
    }
    //评价题
    /**
     * @return {?}
     */
    create_evaluation() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "evaluation",
            templateOptions: {
                label: "请选择一个选",
                required: false,
                setting: {
                    score: 0
                },
                options: [{
                        label: "非常不满意",
                        value: "1",
                        tag: "态度冷淡\n推销多\n技术差"
                    },
                    {
                        label: "比较不满意",
                        value: "2",
                        tag: "速度慢\n仪表乱\n不专业"
                    },
                    {
                        label: "一般",
                        value: "3",
                        tag: "无互动\n不积极\n业务不精"
                    },
                    {
                        label: "比较满意",
                        value: "4",
                        tag: "文明礼貌\n速度快\n较专业"
                    },
                    {
                        label: "非常满意",
                        value: "5",
                        tag: "热情好客\n敬业精神\n技能专业"
                    },]
            }
        };
        return question;
    }
    //多项填空
    /**
     * @return {?}
     */
    create_inputGroup() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "input_group",
            templateOptions: {
                label: "请填写以下内容",
                required: false,
                options: [{
                        label: "填空1",
                        value: "1"
                    },
                    {
                        label: "填空2",
                        value: "2"
                    }]
            }
        };
        return question;
    }
}
VXOtherService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXOtherService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXMatrixService {
    constructor() { }
    /*
         矩阵
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_matrix(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: questionType.type
        };
        switch (questionType.type) {
            case "matrix_radio":
                this.createMatrix_radio(question);
                break;
            case "matrix_checkbox":
                this.createMatrix_radio(question);
                break;
            case "matrix_score":
                this.createMatrix_score(question);
                break;
            case "matrix_input":
                this.createMatrix_input(question);
                break;
            default:
                question.type = "matrix_radio";
                this.createMatrix_radio(question);
                break;
        }
        return question;
    }
    //矩阵单选
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createMatrix_radio(question) {
        question.templateOptions = {
            label: "请选择以下选项",
            required: false,
            subtitle: [{
                    label: "矩阵行1",
                    value: "1"
                },
                {
                    label: "矩阵行2",
                    value: "2",
                }],
            options: [{
                    label: "选项1",
                    value: "1"
                },
                {
                    label: "选项2",
                    value: "2"
                }]
        };
        return question;
    }
    //矩阵打分
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createMatrix_score(question) {
        question.templateOptions = {
            label: "请给以下各项打分",
            required: false,
            subtitle: [{
                    label: "矩阵行1",
                    value: "1"
                },
                {
                    label: "矩阵行2",
                    value: "2",
                }],
            options: [{
                    label: "打分1",
                    value: "1"
                },
                {
                    label: "打分1",
                    value: "2"
                }]
        };
        return question;
    }
    //矩阵填空
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createMatrix_input(question) {
        question.templateOptions = {
            label: "请填写以下内容",
            required: false,
            subtitle: [{
                    label: "矩阵行1",
                    value: "1"
                },
                {
                    label: "矩阵行2",
                    value: "2",
                }],
            options: [{
                    label: "填空1",
                    value: "1"
                },
                {
                    label: "填空1",
                    value: "2"
                }]
        };
        return question;
    }
}
VXMatrixService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXMatrixService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXTransferService {
    /**
     * @param {?} vxRadioService
     * @param {?} vxCheckboxService
     * @param {?} vxInputService
     * @param {?} vxCascaderService
     * @param {?} vxOtherService
     * @param {?} vxMatrixService
     */
    constructor(vxRadioService, vxCheckboxService, vxInputService, vxCascaderService, vxOtherService, vxMatrixService) {
        this.vxRadioService = vxRadioService;
        this.vxCheckboxService = vxCheckboxService;
        this.vxInputService = vxInputService;
        this.vxCascaderService = vxCascaderService;
        this.vxOtherService = vxOtherService;
        this.vxMatrixService = vxMatrixService;
    }
    /**
     * @param {?} questionType
     * @param {?} form_fields
     * @param {?} currentIndex
     * @return {?}
     */
    transferQuestionByType(questionType, form_fields, currentIndex) {
        if (questionType != undefined && questionType != null && questionType.type != undefined && questionType.type != null) {
            /** @type {?} */
            let obj = this.initQuestion(questionType);
            if (currentIndex > -1) {
                form_fields.splice(currentIndex, 0, obj);
            }
            else {
                form_fields.push(obj);
            }
        }
    }
    /**
     * @private
     * @param {?} questionType
     * @return {?}
     */
    initQuestion(questionType) {
        /** @type {?} */
        let question = {};
        switch (questionType.type) {
            case "radio":
                question = this.vxRadioService.create_radio(questionType);
                break;
            case "checkbox":
                question = this.vxCheckboxService.create_checkbox(questionType);
                break;
            case "cascader":
                question = this.vxCascaderService.create_cascader(questionType);
                break;
            case "input":
                question = this.vxInputService.create_input(questionType);
                break;
            case "line":
                question = this.vxOtherService.create_line();
                break;
            case "remark":
                question = this.vxOtherService.create_remark();
                break;
            case "date":
                question = this.vxOtherService.create_date();
                break;
            case "time":
                question = this.vxOtherService.create_time();
                break;
            case "dropdown":
                question = this.vxOtherService.create_dropdown();
                break;
            case "score":
                question = this.vxOtherService.create_score();
                break;
            case "nps":
                question = this.vxOtherService.create_nps();
                break;
            case "proportion":
                question = this.vxOtherService.create_proportion();
                break;
            case "evaluation":
                question = this.vxOtherService.create_evaluation();
                break;
            case "matrix_radio":
            case "matrix_checkbox":
            case "matrix_score":
            case "matrix_input":
                question = this.vxMatrixService.create_matrix(questionType);
                break;
            case "input_group":
                question = this.vxOtherService.create_inputGroup();
                break;
        }
        return question;
    }
}
VXTransferService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXTransferService.ctorParameters = () => [
    { type: VXRadioService },
    { type: VXCheckboxService },
    { type: VXInputService },
    { type: VXCascaderService },
    { type: VXOtherService },
    { type: VXMatrixService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyDesignDetail {
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
                let copyQuestion = cloneDeep(rQuestion);
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
    { type: NzModalService$1 },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXQuestionType {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.questionTypeEvent = new EventEmitter();
        this.addPageEvent = new EventEmitter();
        this.saveSurveyEvent = new EventEmitter();
        this.questionTypeList = [
            {
                label: "选择题",
                child: [
                    {
                        type: "radio",
                        label: "单 选 题",
                        tag: "default",
                        show: true
                    },
                    {
                        type: "checkbox",
                        label: "多 选 题",
                        show: true
                    },
                    // {
                    //   type:"select_image",
                    //   label:"图片选择"
                    // },
                    // {
                    //   type:"select_voteimage",
                    //   label:"图片投票"
                    // },
                    {
                        type: "radio",
                        label: "文字投票",
                        tag: "votefont",
                        show: true
                    },
                    {
                        type: "dropdown",
                        label: "下 拉 题",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "级 联 题",
                        tag: "default",
                        show: true
                    },
                    {
                        type: "scaler",
                        label: "量 表 题",
                        tag: "default"
                    },
                ]
            },
            {
                label: "填空题",
                child: [
                    {
                        type: "input",
                        label: "填 空 题",
                        tag: "default",
                        show: true
                    },
                    {
                        type: "input_group",
                        label: "多项填空",
                        show: true
                    },
                    {
                        type: "input",
                        label: "多行文本",
                        tag: "remark",
                        show: true
                    },
                    {
                        type: "blank_horizontal",
                        label: "横向填空"
                    },
                    {
                        type: "blank_table",
                        label: "自动表格"
                    }
                ]
            },
            {
                label: "打分排序",
                child: [
                    {
                        type: "score",
                        label: "打 分 题",
                        show: true
                    },
                    {
                        type: "evaluation",
                        label: "评 价 题",
                        show: true
                    },
                    {
                        type: "score_sort",
                        label: "排 序 题"
                    },
                    {
                        type: "nps",
                        label: "NPS 题",
                        show: true
                    },
                    {
                        type: "proportion",
                        label: "比 重 题",
                        show: false
                    }
                ]
            },
            {
                label: "备注说明",
                child: [
                    {
                        type: "line",
                        label: "分 割 线",
                        show: true
                    },
                    {
                        type: "remark",
                        label: "备注说明",
                        show: true
                    },
                    {
                        type: "other_upload",
                        label: "文件上传"
                    }
                ]
            },
            {
                label: "个人信息",
                child: [
                    {
                        type: "input",
                        label: "姓 名",
                        tag: "name",
                        show: true
                    },
                    {
                        type: "input",
                        label: "手 机",
                        tag: "mobile",
                        show: true
                    },
                    {
                        type: "input",
                        label: "邮 箱",
                        tag: "email",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "性 别",
                        tag: "gender",
                        show: true
                    },
                    {
                        type: "date",
                        label: "日 期",
                        show: true
                    },
                    {
                        type: "time",
                        label: "时 间",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "年 龄",
                        tag: "age",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "学 历",
                        tag: "education",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "专 业",
                        tag: "major",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "院 校",
                        tag: "university",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "行 业",
                        tag: "industry",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "职 业",
                        tag: "occupation",
                        show: true
                    },
                    {
                        type: "emp_address",
                        label: "城市地址"
                    },
                    {
                        type: "emp_geography",
                        label: "地理位置"
                    }
                ]
            },
            {
                label: "其他题型",
                child: [
                    {
                        type: "matrix_radio",
                        label: "矩阵单选",
                        show: true
                    },
                    {
                        type: "matrix_checkbox",
                        label: "矩阵多选",
                        show: true
                    },
                    {
                        type: "matrix_score",
                        label: "矩阵打分",
                        show: true
                    },
                    {
                        type: "matrix_input",
                        label: "矩阵填空",
                        show: true
                    },
                    {
                        type: "matrix_scale",
                        label: "矩阵量表"
                    }
                ]
            }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    addQuestionType(type) {
        this.questionTypeEvent.emit(type);
    }
    /**
     * @return {?}
     */
    addPage() {
        this.addPageEvent.emit();
    }
    /**
     * @return {?}
     */
    saveSurvey() {
        this.saveSurveyEvent.emit();
    }
}
VXQuestionType.decorators = [
    { type: Component, args: [{
                selector: "vx-question-type",
                template: "<div class=\"buttonList\">\r\n    <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"addPage()\">\u6DFB\u52A0\u5206\u9875</button> \r\n</div>\r\n<div *ngFor=\"let item of questionTypeList;let index=index\">\r\n    <label class=\"title\">{{item.label}}</label>\r\n    <ul cdkDropList  [cdkDropListData]=\"item.child\"> \r\n        <ng-container *ngFor=\"let qtype of item.child\">\r\n            <li class=\"question_type\" *ngIf=\"qtype.show==true\" (click)=\"addQuestionType(qtype)\" cdkDrag >\r\n                <i class=\"icon-other-WenBen\"></i>\r\n                <label>{{qtype.label}}</label>\r\n            </li> \r\n        </ng-container>\r\n    </ul>\r\n</div>",
                styles: ["::ng-deep .question_type.cdk-drag-preview{text-align:center;line-height:30px;width:200px;height:34px;font-size:12px;border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;color:#7b8bed;position:fixed!important;margin:0!important;z-index:9999!important;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;list-style:none}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder{height:6px;width:100%;margin:10px 0;background-color:#7b8bed}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder i,::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder label{opacity:0}:host .buttonList button:nth-last-child(1){margin:0}:host .title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host ul{padding:0;margin:0;list-style:none}:host ul li{float:left;width:96px;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;border:1px solid #d8d8d8;background-color:#fff;border-radius:2px;margin:0 8px 8px 0;cursor:move;vertical-align:middle}:host ul li i{cursor:move;margin:0 5px}:host ul li label{cursor:move}:host ul li:hover{color:#fff;opacity:.95;border-radius:1.4px;background-image:linear-gradient(to right,#6373da,#7f8ff3)}"]
            }] }
];
/** @nocollapse */
VXQuestionType.ctorParameters = () => [
    { type: DataService }
];
VXQuestionType.propDecorators = {
    questionTypeEvent: [{ type: Output }],
    addPageEvent: [{ type: Output }],
    saveSurveyEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXQuestionList {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.vxSurveyInfo = {};
        this.questionTypeEvent = new EventEmitter();
        this.addPageEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropQuestion(event) {
        if (get(event, "container.data.questions")) {
            if (event.previousContainer === event.container) {
                moveItemInArray(get(event, "container.data.questions"), event.previousIndex, event.currentIndex);
            }
            else {
                if (get(event, "previousContainer.data.questions")) {
                    transferArrayItem(get(event, "previousContainer.data.questions"), get(event, "container.data.questions"), event.previousIndex, event.currentIndex);
                }
            }
        }
    }
}
VXQuestionList.decorators = [
    { type: Component, args: [{
                selector: "vx-question-list",
                template: "<div cdkDropListGroup>\r\n    <ng-container *ngFor=\"let page of vxSurveyInfo.pages;let index=index\">\r\n        <div class=\"page\" cdkDropList [cdkDropListData]=\"page\" (cdkDropListDropped)=\"dropQuestion($event)\">\r\n            <label class=\"page_title\">{{page.name}}</label>\r\n            <ng-container *ngFor=\"let quetion of page.questions\">\r\n                <div class=\"page_question\" cdkDrag>\r\n                    <i class=\"icon-other-WenBen\"></i>\r\n                    <label>{{quetion.templateOptions.label}}</label>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n</div>",
                styles: [":host .page_title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host .page_question{width:100%;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;background-color:#fff;border-radius:2px;margin:0 8px 3px 0;cursor:move;vertical-align:middle}:host .page_question i{cursor:move;margin:0 5px}:host .page_question label{cursor:move}"]
            }] }
];
/** @nocollapse */
VXQuestionList.ctorParameters = () => [
    { type: DataService }
];
VXQuestionList.propDecorators = {
    vxSurveyInfo: [{ type: Input }],
    questionTypeEvent: [{ type: Output }],
    addPageEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingCascader {
    constructor() {
        this.questionField = {
            key: "",
            type: "cascader",
            templateOptions: {
                label: "",
                required: false
            }
        };
        this.questionField = {
            key: "",
            type: "cascader",
            templateOptions: {
                label: "",
                required: false
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingCascader.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-cascader",
                template: ` 
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField.templateOptions['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>{{field|json}}
      </div>    
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingCascader.ctorParameters = () => [];
VXSurveySettingCascader.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingCheckBox {
    constructor() {
        this.questionField = {
            key: "",
            type: "checkbox",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                    random: false,
                    layout: "1",
                    min: 0,
                    //最少选N项
                    max: 0,
                },
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-checkbox",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div  class="item">
          <span>布局</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['setting']['layout']">
              <label nz-radio-button nzValue="1">单列</label>
              <label nz-radio-button nzValue="2">2列</label>
              <label nz-radio-button nzValue="3">3列</label>
            </nz-radio-group>
      </div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div  class="item">
          <span>随机排列</span> 
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['random']"></nz-switch>
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div> 
      <div class="item">
          <span>题目总分数</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['score']"></nz-input-number>
      </div>
      <div  class="item">
          <span>最少可选</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['min']"></nz-input-number>
      </div>
      <div  class="item">
          <span>最多可选</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small"  [(ngModel)]="questionField.templateOptions['setting']['max']"></nz-input-number>
      </div>  
    </div> 
    <div class="setting_wrap_option"> 
      <div class="title">选项设置</div>
      <ng-container *ngFor="let item of questionField.templateOptions['options']">
      <div class="item q_title">
          <span>{{item.label}}</span>
      </div>
      <div class="item q_sore">
          <span>选项分数</span>
          <span>分</span>
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="item['score']"></nz-input-number>
      </div> 
      </ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingCheckBox.ctorParameters = () => [];
VXSurveySettingCheckBox.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingDropdown {
    constructor() {
        this.questionField = {
            key: "",
            type: "dropdown",
            templateOptions: {
                label: "",
                setting: {
                    score: 0
                },
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingDropdown.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-dropdown",
                template: `
  <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>
      <div  class="item">
          <span>题目总分数</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['score']"></nz-input-number>
      </div>  
    </div> 
    <div class="setting_wrap_option"> 
      <div class="title">选项设置</div>
      <ng-container *ngFor="let item of questionField.templateOptions['options']">
      <div class="item q_title">
          <span>{{item.label}}</span>
      </div>
      <div class="item q_sore">
          <span>选项分数</span>
          <span>分</span>
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" style="width: 40px;"  [(ngModel)]="item['score']"></nz-input-number>
      </div> 
      </ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingDropdown.ctorParameters = () => [];
VXSurveySettingDropdown.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingInput {
    constructor() {
        this.questionField = {
            key: "",
            type: "input",
            templateOptions: {
                label: "",
                type: "default",
                setting: {
                    minLength: 0,
                    maxLength: 0,
                }
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-input",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div>
      <div class="item">
          <span>输入框大小</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['setting']['size']">
              <label nz-radio-button nzValue="large">大</label>
              <label nz-radio-button nzValue="default">中</label>
              <label nz-radio-button nzValue="small">小</label>
            </nz-radio-group>
      </div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>{{field|json}}
      </div>
      <div class="item q_sore">
          <span>内容限制</span> 
          <nz-select [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['type']">
            <nz-option nzValue="default" nzLabel="不限"></nz-option>
            <nz-option nzValue="number" nzLabel="数字"></nz-option>
            <nz-option nzValue="alphabet" nzLabel="字母"></nz-option> 
            <nz-option nzValue="chinese" nzLabel="中文"></nz-option> 
            <nz-option nzValue="email" nzLabel="邮箱"></nz-option> 
            <nz-option nzValue="mobile" nzLabel="手机"></nz-option> 
          </nz-select>
      </div>
      <div class="item q_sore">
          <span>最少填写</span>
          <span>字</span>
          <nz-input-number [nzMin]="0"  [nzMax]="9999999" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['minLength']"></nz-input-number>
      </div>  
      <div class="item q_sore">
          <span>最多填写</span>
          <span>字</span>
          <nz-input-number [nzMin]="0" [nzMax]="9999999" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['maxLength']"></nz-input-number>
      </div> 
    </div>  
  `
            }] }
];
/** @nocollapse */
VXSurveySettingInput.ctorParameters = () => [];
VXSurveySettingInput.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingLine {
    constructor() {
        this.questionField = {
            key: "",
            type: "line"
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingLine.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-line",
                template: `
    <div class="setting_wrap_title">
    <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
      <div class="item">
          <span>暂无</span> 
      </div> 
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingLine.ctorParameters = () => [];
VXSurveySettingLine.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingRadio {
    constructor() {
        this.questionField = {
            key: "",
            type: "radio",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                    random: false,
                    layout: "1"
                },
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-radio",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div  class="item">
          <span>布局</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['setting']['layout']">
              <label nz-radio-button nzValue="1">单列</label>
              <label nz-radio-button nzValue="2">2列</label>
              <label nz-radio-button nzValue="3">3列</label>
            </nz-radio-group>
      </div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div  class="item">
          <span>随机排列</span> 
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['random']"></nz-switch>
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div> 
      <div  class="item">
          <span>题目总分数</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['score']"></nz-input-number>
      </div>  
    </div> 
    <div class="setting_wrap_option"> 
      <div class="title">选项设置</div>
      <ng-container *ngFor="let item of questionField.templateOptions['options']">
      <div class="item q_title">
          <span>{{item.label}}</span>
      </div>
      <div class="item q_sore">
          <span>选项分数</span>
          <span>分</span>
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" style="width: 40px;"  [(ngModel)]="item['score']"></nz-input-number>
      </div> 
      </ng-container> 
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingRadio.ctorParameters = () => [];
VXSurveySettingRadio.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingRemark {
    constructor() {
        this.questionField = {
            key: "",
            type: "remark",
            templateOptions: {
                label: ""
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingRemark.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-remark",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingRemark.ctorParameters = () => [];
VXSurveySettingRemark.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingScaler {
    constructor() {
        this.questionField = {
            key: "",
            type: "scaler",
            templateOptions: {
                label: "",
                description: "",
                maxLength: 500,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: "",
                options: []
            },
            origin: {
                refdatasourcetype: "",
                datatype: ""
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingScaler.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-scaler",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div>
      <div class="item">
          <span>题型</span>
          <nz-radio-group [nzSize]="'small'">
              <label nz-radio-button nzValue="A">单选</label>
              <label nz-radio-button nzValue="B">多选</label>
            </nz-radio-group>
      </div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>{{field|json}}
      </div>  
    </div>
    <div class="setting_wrap_model"> 
      <div class="title">选项设置</div>
      <div  class="item">
          <span>布局</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['layout']">
              <label nz-radio-button nzValue="row1">单列</label>
              <label nz-radio-button nzValue="row2">2列</label>
              <label nz-radio-button nzValue="row3">3列</label>
            </nz-radio-group>
      </div>
      <div  class="item">
          <span>随机排列</span> 
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['order']"></nz-switch>
      </div>
    </div>
    <div class="setting_wrap_option"> 
      <div class="title">选项列表</div>
      <ng-container *ngFor="let item of questionField.templateOptions['options']">
      <div class="item q_title">
          <span>{{item.label}}</span>
      </div>
      <div class="item q_sore">
          <span>选项分数</span>
          <span>分</span>
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" style="width: 40px;"  [(ngModel)]="item['score']"></nz-input-number>
      </div>
      <div class="item q_other">
          <span>添加输入框</span>
          <nz-switch nzSize="small"  [(ngModel)]="item['input']"></nz-switch>
      </div>
      </ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingScaler.ctorParameters = () => [];
VXSurveySettingScaler.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingScore {
    constructor() {
        this.questionField = {
            key: "",
            type: "score",
            templateOptions: {
                type: "start",
                label: "",
                required: false,
                setting: {
                    label: "",
                    score: 0,
                    min: 0,
                    max: 5
                },
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingScore.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-score",
                template: `
  <div class="setting_wrap_title">
    <span>题目设置</span>
  </div> 
  <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
    <div class="item">
        <span>此题必填</span>
        <nz-switch nzSize="small" [(ngModel)]="questionField.templateOptions.required"></nz-switch> 
    </div>
    <div class="item">
        <span>逻辑设置</span>
        <label>设置</label>
    </div>
    <div  class="item">
        <span>题目总分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions.setting.score"></nz-input-number>
    </div>
    <div  class="item">
        <span>最低分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="10" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions.setting.min"></nz-input-number>
    </div>
    <div  class="item">
        <span>最高分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="10" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions.setting.max"></nz-input-number>
    </div>
    <div class="item">
      <span>图标</span>
        <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField.templateOptions.type">
            <label nz-radio-button nzValue="start">星</label>
            <label nz-radio-button nzValue="heart">心</label>
            <label nz-radio-button nzValue="good">赞</label> 
            <label nz-radio-button nzValue="other">其</label>
          </nz-radio-group>
    </div>
    <div class="item" *ngIf="questionField.templateOptions.type=='other'">
      <span>自定义文字</span>  
      <input nz-input [(ngModel)]="questionField.templateOptions.setting.label" maxlength="1" nzSize="small" />
    </div> 
  </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingScore.ctorParameters = () => [];
VXSurveySettingScore.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingDate {
    constructor() {
        this.questionField = {
            key: "",
            type: "date",
            templateOptions: {
                label: "",
                required: false
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingDate.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-date",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div> 
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingDate.ctorParameters = () => [];
VXSurveySettingDate.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingTime {
    constructor() {
        this.questionField = {
            key: "",
            type: "time",
            templateOptions: {
                label: "",
                required: false
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingTime.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-time",
                template: `
  <div class="setting_wrap_title">
    <span>题目设置</span>
  </div> 
  <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
    <div class="item">
        <span>此题必填</span>
        <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
    </div>  
    <div class="item">
        <span>逻辑设置</span>
        <label>设置</label>
    </div>  
  </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingTime.ctorParameters = () => [];
VXSurveySettingTime.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingNPS {
    constructor() {
        this.questionField = {
            key: "",
            type: "nps",
            templateOptions: {
                label: "",
                required: false,
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingNPS.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-nps",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>  
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingNPS.ctorParameters = () => [];
VXSurveySettingNPS.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingProportion {
    constructor() {
        this.questionField = {
            key: "",
            type: "proportion",
            templateOptions: {
                label: "",
                description: "",
                maxLength: 500,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: "",
                score: 0,
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingProportion.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-proportion",
                template: `
  <div class="setting_wrap_title">
    <span>题目设置</span>
  </div> 
  <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
    <div class="item">
        <span>此题必填</span>
        <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
    </div> 
    <div  class="item">
        <span>题目总分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['score']"></nz-input-number>
    </div>
    <div class="item">
        <span>逻辑设置</span>
        <label>设置</label>
    </div>  
  </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingProportion.ctorParameters = () => [];
VXSurveySettingProportion.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingEvaluation {
    constructor() {
        this.questionField = {
            key: "",
            type: "evaluation",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                },
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingEvaluation.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-evaluation",
                template: `
  <div class="setting_wrap_title">
    <span>题目设置</span>
  </div> 
  <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
    <div class="item">
        <span>此题必填</span>
        <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
    </div> 
    <div  class="item">
        <span>题目总分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['score']"></nz-input-number>
    </div>
    <div class="item">
        <span>逻辑设置</span>
        <label>设置</label>
    </div>  
  </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingEvaluation.ctorParameters = () => [];
VXSurveySettingEvaluation.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingMatrixRadio {
    constructor() {
        this.questionField = {
            key: "",
            type: "matrix_radio",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingMatrixRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-matrix_radio",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingMatrixRadio.ctorParameters = () => [];
VXSurveySettingMatrixRadio.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingMatrixCheckBox {
    constructor() {
        this.questionField = {
            key: "",
            type: "matrix_checkbox",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingMatrixCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-matrix_checkbox",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingMatrixCheckBox.ctorParameters = () => [];
VXSurveySettingMatrixCheckBox.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingMatrixScore {
    constructor() {
        this.questionField = {
            key: "",
            type: "matrix_score",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingMatrixScore.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-matrix_score",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingMatrixScore.ctorParameters = () => [];
VXSurveySettingMatrixScore.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingMatrixInput {
    constructor() {
        this.questionField = {
            key: "",
            type: "matrix_input",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingMatrixInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-matrix_input",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingMatrixInput.ctorParameters = () => [];
VXSurveySettingMatrixInput.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingInputGroup {
    constructor() {
        this.questionField = {
            key: "",
            type: "input_group",
            templateOptions: {
                label: "",
                required: false,
                options: []
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingInputGroup.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-input_group",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>{{field|json}}
      </div>  
    </div> 
     
  `
            }] }
];
/** @nocollapse */
VXSurveySettingInputGroup.ctorParameters = () => [];
VXSurveySettingInputGroup.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveySettingTemplate {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     */
    constructor(componentFactoryResolver, changeDetectorRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.dynamicComponents = {
            "radio": VXSurveySettingRadio,
            "checkbox": VXSurveySettingCheckBox,
            "dropdown": VXSurveySettingDropdown,
            "input": VXSurveySettingInput,
            "line": VXSurveySettingLine,
            "remark": VXSurveySettingRemark,
            "cascader": VXSurveySettingCascader,
            "scaler": VXSurveySettingScaler,
            "score": VXSurveySettingScore,
            "date": VXSurveySettingDate,
            "time": VXSurveySettingTime,
            "nps": VXSurveySettingNPS,
            "proportion": VXSurveySettingProportion,
            "evaluation": VXSurveySettingEvaluation,
            "matrix_radio": VXSurveySettingMatrixRadio,
            "matrix_checkbox": VXSurveySettingMatrixCheckBox,
            "matrix_score": VXSurveySettingMatrixScore,
            "matrix_input": VXSurveySettingMatrixInput,
            "input_group": VXSurveySettingInputGroup
            // "select_single": VXSettingSelectSingle,
            // "select_multiple": VXSettingSelectMultiple,
            // "select_image": VXSettingSelectImage,
            // "select_voteimage": VXSettingSelectVoteImage,
            // "select_votefont": VXSettingSelectVoteFont,
            // "select_dropdown": VXSettingSelectDropdown,
            // "select_cascader": VXSettingSelectCascader,
            // "select_scaler": VXSettingSelectScaler,
            // "select_classification": VXSettingSelectClassification,
            // "blank": VXSettingBlank,
            // "blank_multiple": VXSettingBlankMultiple,
            // "blank_horizontal": VXSettingBlankHorizontal,
            // "blank_table": VXSettingBlankTable,
            // //"score": VXSettingScore,
            // "score_sort": VXSettingScoreSort,
            // "score_nps": VXSettingScoreNPS,
            // "score_proportion": VXSettingScoreProportion,
            // "score_evaluation": VXSettingScoreEvaluation,
            // "other_page": VXSettingOtherPage,
            // "other_line": VXSettingOtherLine,
            // "other_upload": VXSettingOtherUpload,
            // "other_remark": VXSettingOtherRemark,
            // "emp_name": VXSettingEmpName,
            // "emp_mobile": VXSettingEmpMobile,
            // "emp_email": VXSettingEmpEmail,
            // "emp_gender": VXSettingEmpGender,
            // "emp_date": VXSettingEmpDate,
            // "emp_time": VXSettingEmpTime,
            // "emp_age": VXSettingEmpAge,
            // "emp_education": VXSettingEmpEducation,
            // "emp_major": VXSettingEmpmajor,
            // "emp_university": VXSettingEmpUniversity,
            // "emp_industry": VXSettingIndustry,
            // "emp_occupation": VXSettingEmpOccupation,
            // "emp_address": VXSettingEmpAddress,
            // "emp_geography": VXSettingEmpGeography,
            // "matrix_select": VXSettingMatrixSelect,
            // "matrix_score": VXSettingMatrixScore,
            // "matrix_blank": VXSettingMatrixBlank,
            // "matrix_scale": VXSettingMatrixScale
        };
        this.questionField = {
            key: "",
            type: "radio",
            templateOptions: {
                label: "",
                description: "",
                maxLength: 500,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: "",
                options: []
            },
            origin: {
                refdatasourcetype: "",
                datatype: ""
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
        if (this.componentHost) {
            this.componentHost.clear();
            if (this.questionField != undefined && this.questionField != null && this.questionField.type != undefined && this.questionField.type != null) {
                /** @type {?} */
                const compFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponents[this.questionField.type]);
                this.component = this.componentHost.createComponent(compFactory);
                this.component.instance.field = this.questionField;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingTemplate.decorators = [
    { type: Component, args: [{
                selector: "setting-template",
                template: `
    
  
  <ng-container #componentHost></ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingTemplate.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef }
];
VXSurveySettingTemplate.propDecorators = {
    componentHost: [{ type: ViewChild, args: ['componentHost', { read: ViewContainerRef, static: true },] }],
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyEditCascaderItem {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.row = {
            cascader: 1,
            current: "",
            showadd: false,
            data: []
        };
        this.title = "";
        this.itemEvent = new EventEmitter();
        this.addOptionEvent = new EventEmitter();
        this.delOptionEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    itemClick(e) {
        this.row.current = e.value;
        this.itemEvent.emit(e);
    }
    /**
     * @return {?}
     */
    addOption() {
        /** @type {?} */
        let index = 0;
        if (this.row != null && this.row.data != null && this.row.data.length > 0) {
            index = this.row.data.length;
        }
        index++;
        /** @type {?} */
        let cascader = this.row.cascader;
        this.row.data.push({
            value: `${cascader}-${index}`,
            label: `选项${index}`,
            children: []
        });
        this.addOptionEvent.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    delOption(e) {
        this.delOptionEvent.emit(e);
    }
}
VXSurveyEditCascaderItem.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-editcascader-item",
                template: `
    <div class="cascader_col_title">
      {{title}}
    </div>
    <div class="cascader_col_item vxsurvey-scrollbar">
      <ng-container *ngFor="let item of row.data;let index=index;">
        <div class="cascader_col_wrap" [ngClass]="{' wrap_active':item.value == row.current}" (click)="itemClick(item)">
      
                <div class="cascader_col_wrap_order">{{index+1}}.</div>
                <div class="cascader_col_wrap_input">
                    <input type="text" [(ngModel)]="item.label" maxlength="50">
                </div>
                <div class="cascader_col_wrap_limit">
                    {{item.label.length}}/50
                </div>
                <div class="cascader_col_wrap_delete" (click)="delOption(item)">
                    <span><i class="icon-KT-Close"></i></span>
                </div> 
        </div>
      </ng-container>
    </div>
    <div class="cascader_col_add" *ngIf="row?.showadd==true"(click)="addOption()">
      <span></span>添加选项
    </div>  
  `
            }] }
];
/** @nocollapse */
VXSurveyEditCascaderItem.ctorParameters = () => [
    { type: DataService }
];
VXSurveyEditCascaderItem.propDecorators = {
    row: [{ type: Input }],
    title: [{ type: Input }],
    itemEvent: [{ type: Output }],
    addOptionEvent: [{ type: Output }],
    delOptionEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContenteditableModel {
    // changeBySelf = false;
    // instance: any;
    // cursor: any;
    // splitIndex;
    // debounceTimeout: any;
    // lastRange: any;
    // editableEle: any;
    // priousV: string;
    // languagetype = 1;
    // private lastViewModel: any;
    /**
     * @param {?} elRef
     * @param {?} zone
     */
    constructor(elRef, zone) {
        this.elRef = elRef;
        this.zone = zone;
        this.model = {};
        this.hasI18n = false;
        this.change = new EventEmitter();
        // @Output() limetValue: EventEmitter<any> = new EventEmitter<any>();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.debounce = "";
        this.placeholder = '';
        this.brMode = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //this.initEditor();
    }
    // initEditor() {
    //   let config = {
    //     startupFocus: false,
    //     toolbar: 'Basic',
    //     allowedContent: true,
    //     placeholder: this.placeholder,
    //     extraPlugins: '',
    //     toolbar_Basic: [
    //       [
    //         'Font',
    //         'FontSize',
    //         'Bold',
    //         'Underline',
    //         'Italic',
    //         '-',
    //         'JustifyLeft',
    //         'JustifyCenter',
    //         'JustifyRight',
    //         'TextColor',
    //         'BGColor',
    //       ],
    //     ]
    //   };
    //   if (this.hasI18n) {
    //     const pluginName = (config.extraPlugins ? ',' : '') + 'i18n';
    //     config.extraPlugins = config.extraPlugins + pluginName;
    //     config.toolbar_Basic[0].unshift('Chinese', '-', 'English');
    //   }
    //   // console.log('config==', config);
    //   if (this.brMode) {
    //     config['enterMode'] = CKEDITOR.ENTER_BR;
    //     config['shiftEnterMode'] = CKEDITOR.ENTER_BR;
    //   }
    //   this.instance = CKEDITOR.inline(this.elRef.nativeElement, config);
    //   // console.log('this.instance==', this.instance);
    //   // 设置国际化语言及侦听
    //   // this.languagetype = this.instance.element.getAttribute('data-i18n') || this.languagetype;
    //   // this.instance.on('i18n', (evt: any) => {
    //   //   // console.log('i18n change= ', evt);
    //   //   if (evt.data != this.languagetype) {
    //   //     this.languagetype = evt.data;
    //   //     this.updateEditorValue();
    //   //   }
    //   // });
    //   // 更新表单值
    //   this.updateEditorValue();
    //   // CKEditor blur event
    //   this.instance.on('blur', (evt: any) => {
    //     this.blur.emit(evt);
    //   });
    //   // CKEditor focus event
    //   this.instance.on('focus', (evt: any) => {
    //     this.focus.emit(evt);
    //   });
    //   this.instance.on('change', (evt: any) => {
    //     // console.log('onchange == ', evt);
    //     let value = this.instance.getData();
    //     if (this.model !== value) {
    //       // Debounce update
    //       if (this.debounce) {
    //         if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
    //         this.debounceTimeout = setTimeout(() => {
    //           this.updateValue(this.instance.getData());
    //           this.debounceTimeout = null;
    //         }, parseInt(this.debounce, 10));
    //       } else {
    //         this.updateValue(value);
    //       }
    //     }
    //   });
    // }
    // doFocus() {
    //   setTimeout(() => {
    //     this.instance.focus();
    //   }, 0);
    // }
    // insertAfter(newElement, targetElement) {
    //   var parent = targetElement.parentNode;
    //   if (parent.lastChild == targetElement) {
    //     parent.appendChild(newElement);
    //   } else {
    //     parent.insertBefore(newElement, targetElement.nextSibling);
    //   }
    // }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // this.lastViewModel = this.model;
        // this.updateEditorValue();
    }
    // onKeyup() {
    //   var value = this.elRef.nativeElement.innerHTML;
    //   this.lastViewModel = value;
    //   this.change.emit(value);
    // }
    // updateValue(value: any) {
    //   // this.zone.run(() => {
    //   //   this.lastViewModel = value;
    //   //   this.changeBySelf = true;
    //   //   if (_.isArray(this.model)) {
    //   //     const found = this.model.find(item => {
    //   //       return item.languagetype == this.languagetype; //zhcn
    //   //     });
    //   //     if (found) {
    //   //       found.name = value;
    //   //     }
    //   //     this.change.emit(this.model);
    //   //   } else {
    //   //     this.change.emit(value);
    //   //   }
    //   // });
    // }
    // refreshView() {
    //   if (this.instance) this.instance.setData(this.lastViewModel);
    //   // this.elRef.nativeElement.innerHTML = this.lastViewModel
    // }
    // updateEditorValue() {
    //   // if (this.instance) {
    //   //   let model = this.model;
    //   //   // console.log('this.model==', this.model);
    //   //   if (_.isArray(this.model)) {
    //   //     let foundItem = this.model.find(item => {
    //   //       return item.languagetype == this.languagetype; //zhcn
    //   //     });
    //   //     if (!foundItem) {
    //   //       foundItem = { languagetype: this.languagetype, id: 0, name: '' };
    //   //       this.model.push(foundItem);
    //   //     }
    //   //     model = foundItem.name;
    //   //   }
    //   //   this.instance.setData(model);
    //   // }
    // }
    // empty() {
    //   this.model = '';
    //   this.lastViewModel = '';
    //   this.instance.setData('');
    // }
    /**
     * On component destroy
     * @return {?}
     */
    ngOnDestroy() {
        // if (this.debounceTimeout) {
        //   clearTimeout(this.debounceTimeout);
        //   this.debounceTimeout = null;
        // }
        // if (this.instance) {
        //   setTimeout(() => {
        //     this.instance.removeAllListeners();
        //     let dom = document.querySelector('#cke_' + this.instance.name);
        //     if (dom) {
        //       dom.parentNode.removeChild(dom);
        //     }
        //     CKEDITOR.instances[this.instance.name].destroy(true);
        //     this.instance.destroy(true);
        //     this.instance = null;
        //   });
        // }
    }
}
ContenteditableModel.decorators = [
    { type: Directive, args: [{
                selector: '[contenteditableModel]',
            },] }
];
/** @nocollapse */
ContenteditableModel.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
ContenteditableModel.propDecorators = {
    model: [{ type: Input, args: ['contenteditableModel',] }],
    hasI18n: [{ type: Input }],
    change: [{ type: Output, args: ['contenteditableModelChange',] }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    debounce: [{ type: Input }],
    placeholder: [{ type: Input }],
    brMode: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EDITOR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => InlineEditorComponent)),
    multi: true,
};
// <div
//       [(contenteditableModel)]="value"
//       [ngClass]="active==true?'inline_editor':'inline_editor_hidden'"
//       role="textbox"
//       [attr.contenteditable]="disabled ? 'false' : 'true'"
//       [class.disabled]="disabled"
//       (blur)="handleBlur($event)"
//       (focus)="handleFocus($event)"
//       [brMode]="brMode"
//       [placeholder]="placeholder"
//       [debounce]="debounce"
//       (contenteditableModelChange)="onContenteditableModelChange($event)"
//     ></div>
class InlineEditorComponent {
    //@ViewChild(ContenteditableModel,{static:true}) contenteditableModel: ContenteditableModel|undefined;
    constructor() {
        this._value = "";
        this._classList = {};
        this.debounce = '100';
        this.placeholder = '';
        this.className = 'inline_editor';
        this.brMode = true;
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.disabled = false;
        this.data = "";
        this.active = false;
    }
    //   focus() {
    //     this.contenteditableModel.doFocus();
    //   }
    /**
     * @return {?}
     */
    ngOnInit() {
        // if (this.className) {
        //   var splits = this.className.split(' ');
        //   for (var i = 0; i < splits.length; i++) {
        //     this._classList[splits[i]] = true;
        //   }
        // }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    handleFocus(evt) {
        this.focus.emit(evt);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    handleBlur(evt) {
        this.blur.emit(evt);
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onContenteditableModelChange(evt) {
        this.onTouched();
        this.onChange(evt);
    }
    /**
     * Implements ControlValueAccessor
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        //if (this.contenteditableModel && this.contenteditableModel.instance) {
        //this.contenteditableModel.instance.setData(value);
        //}
    }
    /**
     * @param {?} _
     * @return {?}
     */
    onChange(_) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
InlineEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'inline-editor',
                providers: [EDITOR_VALUE_ACCESSOR],
                template: `
    <input *ngIf="active==true"  nz-input [(ngModel)]="value" /> 
    <div *ngIf="active==false" 
      class="inline_editor_show"
      [innerHTML]="value | safeHtml">
    </div>
  `,
                styles: [`
      :host ::ng-deep {
      }
    `]
            }] }
];
/** @nocollapse */
InlineEditorComponent.ctorParameters = () => [];
InlineEditorComponent.propDecorators = {
    debounce: [{ type: Input }],
    placeholder: [{ type: Input }],
    className: [{ type: Input }],
    brMode: [{ type: Input }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    disabled: [{ type: Input }],
    data: [{ type: Input }],
    active: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyFirstPage {
    constructor() {
        this.firstpage = {
            title: "问卷标题",
            text: "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！"
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
VXSurveyFirstPage.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-first-page",
                template: "<div class=\"first-content\">\r\n    <div class=\"title\">\r\n        <textarea rows=\"1\" nz-input [(ngModel)]=\"firstpage.title\"></textarea>\r\n    </div>\r\n    <div class=\"body\">\r\n        <textarea nz-input [(ngModel)]=\"firstpage.text\"></textarea>\r\n    </div>\r\n</div>",
                styles: [":host{width:100%;height:100%}:host .first-content{display:inline-block;width:100%;height:100%;padding:20px 0}:host .first-content .title{margin:0 auto}:host .first-content .title textarea{text-align:center;border:0;resize:none}:host .first-content .title textarea:hover{background:#ececec}:host .first-content .body{margin:40px 0}:host .first-content .body textarea{border:0;resize:none}:host .first-content .body textarea:hover{background:#ececec}"]
            }] }
];
/** @nocollapse */
VXSurveyFirstPage.ctorParameters = () => [];
VXSurveyFirstPage.propDecorators = {
    firstpage: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXSurveyLastPage {
    constructor() {
        this.lastpage = {
            title: "",
            text: ""
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
VXSurveyLastPage.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-last-page",
                template: "<div class=\"last-content\">\r\n    <div class=\"image\">\r\n        <img src=\"/assets/image/survey-end.png\" />\r\n    </div>\r\n    <div class=\"body\">\r\n        \u95EE\u5377\u5230\u6B64\u7ED3\u675F\uFF0C\u611F\u8C22\u60A8\u7684\u53C2\u4E0E\uFF01\r\n    </div>\r\n</div>",
                styles: [":host{width:100%;height:100%}:host .last-content{display:inline-block;width:100%;height:100%;padding:120px 0}:host .last-content .image{margin:0 auto;text-align:center}:host .last-content .body{margin:40px 0;text-align:center}"]
            }] }
];
/** @nocollapse */
VXSurveyLastPage.ctorParameters = () => [];
VXSurveyLastPage.propDecorators = {
    lastpage: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReplaceLinePipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.replace(/\n/g, "<br/>");
    }
}
ReplaceLinePipe.decorators = [
    { type: Pipe, args: [{ name: "replaceLine" },] }
];
/** @nocollapse */
ReplaceLinePipe.ctorParameters = () => [
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafeHtmlPipe {
    /**
     * @param {?} sanitized
     */
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'safeHtml' },] }
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const icons = [
    MenuFoldOutline,
    MenuUnfoldOutline,
    FormOutline,
    DashboardOutline,
    MinusSquareFill,
    MinusSquareOutline,
    MinusSquareTwoTone,
    MinusOutline,
    InboxOutline
];
registerLocaleData(zh);
//私有的
/** @type {?} */
const entryComponent = [
    VXQuestionType,
    VXQuestionList,
    VXSurveySettingTemplate,
    VXSurveySettingCascader,
    VXSurveySettingCheckBox,
    VXSurveySettingDropdown,
    VXSurveySettingInput,
    VXSurveySettingLine,
    VXSurveySettingRadio,
    VXSurveySettingRemark,
    VXSurveySettingScaler,
    VXSurveySettingScore,
    VXSurveySettingDate,
    VXSurveySettingTime,
    VXSurveySettingNPS,
    VXSurveySettingProportion,
    VXSurveySettingEvaluation,
    VXSurveySettingMatrixRadio,
    VXSurveySettingMatrixCheckBox,
    VXSurveySettingMatrixScore,
    VXSurveySettingMatrixInput,
    VXSurveySettingInputGroup,
    VXSurveyEditEvaluation,
    VXSurveyEditCascader,
    VXSurveyEditCascaderItem,
    VXSurveyFirstPage,
    VXSurveyLastPage
];
//公开的
/** @type {?} */
const publicComponent = [
    VXSurveyDesignDetail,
    VXSurveyEditEvaluation
];
/** @type {?} */
const PIPES = [
    SafeHtmlPipe
];
/** @type {?} */
const PROVIDES = [
    VXRadioService,
    VXCheckboxService,
    VXInputService,
    VXOtherService,
    VXCascaderService,
    VXMatrixService
];
const ɵ0 = zh_CN, ɵ1 = icons;
class VXSurveyModule {
}
VXSurveyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FIELD_TYPE_COMPONENTS,
                    entryComponent,
                    publicComponent,
                    ReplaceLinePipe,
                    ContenteditableModel,
                    InlineEditorComponent,
                    ...PIPES,
                ],
                imports: [
                    HttpModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    DragDropModule,
                    OverlayModule,
                    NgZorroAntdModule,
                    VXFormModule.forChild(BOOTSTRAP_VXFORM_CONFIG),
                    VXFormModule.forRoot(validationConfig)
                ],
                entryComponents: [entryComponent],
                exports: [TranslateModule, publicComponent, ContenteditableModel, InlineEditorComponent,
                    ...PIPES],
                providers: [
                    { provide: NZ_I18N, useValue: ɵ0 },
                    { provide: NZ_ICONS, useValue: ɵ1 },
                    _HttpClient,
                    VXFormAntService,
                    VXDialogService,
                    ...PROVIDES
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VXSurveyModule, VXSurveyRadioGroup, VXSurveyDragDrop, VXSurveyRadio, VXSurveyCheckBox, VXSurveyDropdown, VXSurveyCascader, VXSurveyScaler, VXSurveyScore, VXSurveyLine, VXSurveyRemark, VXSurveyInput, VXSurveyDate, VXSurveyTime, VXSurveyNPS, VXSurveyProportion, VXSurveyEvaluation, VXSurveyMatrixRadio, VXSurveyMatrixCheckBox, VXSurveyMatrixScore, VXSurveyMatrixInput, VXSurveyInputGroup, VXFormWrapperFormField, BOOTSTRAP_VXFORM_CONFIG as ɵd, FIELD_TYPE_COMPONENTS as ɵc, VXSurveySettingCascader as ɵl, VXSurveySettingCheckBox as ɵm, VXSurveySettingDate as ɵu, VXSurveySettingDropdown as ɵn, VXSurveySettingEvaluation as ɵy, VXSurveySettingInput as ɵo, VXSurveySettingInputGroup as ɵbd, VXSurveySettingLine as ɵp, VXSurveySettingMatrixCheckBox as ɵba, VXSurveySettingMatrixInput as ɵbc, VXSurveySettingMatrixRadio as ɵz, VXSurveySettingMatrixScore as ɵbb, VXSurveySettingNPS as ɵw, VXSurveySettingProportion as ɵx, VXSurveySettingRadio as ɵq, VXSurveySettingRemark as ɵr, VXSurveySettingScaler as ɵs, VXSurveySettingScore as ɵt, VXSurveySettingTime as ɵv, VXSurveyEditCascaderItem as ɵbg, VXSurveyEditCascader as ɵbf, VXSurveyEditEvaluation as ɵbe, VXSurveyFirstPage as ɵbh, ContenteditableModel as ɵbs, InlineEditorComponent as ɵbt, VXSurveyLastPage as ɵbi, VXQuestionList as ɵj, VXQuestionType as ɵg, VXSurveySettingTemplate as ɵk, VXSurveyDesignDetail as ɵbj, _HttpClient as ɵi, SafeHtmlPipe as ɵbu, DataService as ɵh, VXDialogService as ɵb, VXFormFieldGroup as ɵe, VXFormFieldRepeat as ɵf, VXCascaderService as ɵbo, VXCheckboxService as ɵbm, VXInputService as ɵbn, VXMatrixService as ɵbq, VXOtherService as ɵbp, VXRadioService as ɵbl, ReplaceLinePipe as ɵbr, VXFormAntService as ɵa, VXTransferService as ɵbk, getFieldPro as ɵbv, maxValidationMessage as ɵca, maxlengthValidationMessage as ɵby, minValidationMessage as ɵbz, minlengthValidationMessage as ɵbx, requiredValidationMessage as ɵbw, validationConfig as ɵcb };

//# sourceMappingURL=vx-form-survey.js.map