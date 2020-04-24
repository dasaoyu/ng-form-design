import * as moment_ from 'moment';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { NzModalService, NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICONS } from 'ng-zorro-antd';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline, MinusSquareFill, MinusSquareOutline, MinusSquareTwoTone, MinusOutline, InboxOutline } from '@ant-design/icons-angular/icons';
import zh from '@angular/common/locales/zh';
import { NzModalService as NzModalService$1 } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FieldType, Guid, FieldWrapper, FieldArrayType, clone, VXFormCommonService, VXFormModule } from '@vx-form/core';
import { FormGroup, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { get, cloneDeep } from 'lodash';
import { Injectable, EventEmitter, Component, ViewChild, HostListener, Inject, Pipe, Output, Input, ChangeDetectorRef, forwardRef, NgModule, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormAntService {
    constructor() {
        this.btnEvent = new EventEmitter();
        this.fieldEvent = new EventEmitter();
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
class VXFormFieldText extends FieldType {
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
}
VXFormFieldText.decorators = [
    { type: Component, args: [{
                selector: "vxfield-text",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <input nz-input disabled />
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <input
          nz-input
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        />
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

      <div class="fieldtext" *ngIf="editor === false">{{ text }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldText.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldTextI18n extends FieldType {
    constructor() {
        super(...arguments);
        this.triggerWidth = "260px";
        this.languageList = [
            { languagetype: "chinese", resvalue: "" },
            { languagetype: "english", resvalue: "" },
            { languagetype: "english2", resvalue: "" }
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resize(event) {
        this.visibleChange(event);
    }
    /**
     * @return {?}
     */
    get language() {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model.hasOwnProperty(this.key)) {
            if (this.formControl.value != undefined &&
                this.formControl.value != null &&
                this.formControl.value != [] &&
                this.formControl.value.length > 0) {
                if (this.formControl.value != this.languageList) {
                    this.languageList = this.formControl.value;
                }
            }
        }
        return this.languageList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        if (this.to.required) {
            /** @type {?} */
            let empty = this.languageList.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return (item.resvalue === null ||
                    item.resvalue === "" ||
                    item.resvalue === " ");
            }));
            if (empty) {
                this.formControl.setValue([]);
            }
            else {
                this.formControl.setValue(this.languageList);
            }
        }
        else {
            this.formControl.setValue(this.languageList);
        }
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    visibleChange(event) {
        if (event) {
            if (this.cdkOverlayOrigin !== undefined) {
                this.triggerWidth =
                    this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect()
                        .width -
                        24 +
                        "px";
            }
        }
    }
    /**
     * @return {?}
     */
    get langText() {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model[this.key] != undefined) {
            /** @type {?} */
            let lang = this.model[this.key];
            if (lang != undefined &&
                lang != null &&
                lang != "" &&
                lang instanceof Array &&
                lang.length > 0) {
                return lang[0]["resvalue"];
            }
            return "";
        }
        return "";
    }
}
VXFormFieldTextI18n.decorators = [
    { type: Component, args: [{
                selector: "vxform-field-inputi18n",
                template: `
    <ng-container *ngIf="editor === true">
      <div class="inputi18n" cdkOverlayOrigin>
        <input
          nz-input
          [(ngModel)]="language[0].resvalue"
          [vxFormAttributes]="field"
          (ngModelChange)="onChange(language[0].resvalue)"
          nz-popover
          nzPopoverTrigger="click"
          [nzPopoverContent]="contentTemplate"
          nzOverlayClassName="inputi18n-template"
          nzPopoverPlacement="bottom"
          [nzOverlayStyle]="{ width: triggerWidth }"
          (nzVisibleChange)="visibleChange($event)"
        />
        <div class="tips">
          <i
            class="icon-bangzhu"
            [nzTooltipTitle]="tips"
            nzTooltipPlacement="top"
            nz-tooltip
            *ngIf="tips != ''"
          ></i>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ul>
          <ng-container *ngFor="let item of language; let i = index">
            <li *ngIf="i > 0">
              <label>{{ item.languagetype }}</label>
              <input
                nz-input
                [(ngModel)]="item.resvalue"
                [vxFormAttributes]="field"
                (ngModelChange)="onChange(item.resvalue)"
              />
            </li>
          </ng-container>
        </ul>
      </ng-template>
    </ng-container>
    <div class="fieldtext" *ngIf="editor === false">{{ langText }}</div>
  `
            }] }
];
VXFormFieldTextI18n.propDecorators = {
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
    resize: [{ type: HostListener, args: ["window:resize", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldTextArea extends FieldType {
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
}
VXFormFieldTextArea.decorators = [
    { type: Component, args: [{
                selector: "vxfield-textarea",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <textarea nz-input disabled rows="4"> </textarea>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <textarea
          nz-input
          [formControl]="formControl"
          class="form-control"
          [class.is-invalid]="showError"
          [vxFormAttributes]="field"
          rows="4"
        >
        </textarea>
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

      <div
        class="fieldtext"
        *ngIf="editor === false"
        [innerHTML]="text | replaceLine"
      ></div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldTextArea.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldNumber extends FieldType {
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
    get precision() {
        /** @type {?} */
        let result = 0;
        if (this.to != undefined && this.to != null && this.to["precision"] != undefined && this.to["precision"] != null) {
            result = this.to["precision"];
        }
        return result;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
}
VXFormFieldNumber.decorators = [
    { type: Component, args: [{
                selector: "vxfield-number",
                template: `
  <ng-container *ngIf="formStatus !== 0">
    <div class="fieldOperational">
      <div class="fieldcheckbox">
        <label nz-checkbox [(ngModel)]="field.checked"></label>
      </div>
      <div class="fieldControl">
        <div class="label">
          <span *ngIf="to.required">*</span>{{ to.label }}
        </div>
        <div class="control">
          <input nz-input disabled />
        </div>
        <div class="fieldButton">
          <button class="btnEdit" (click)="fieldOperational('edit')">
            <i class="icon-Edit03"></i>编辑
          </button>
          <button class="btnDel" (click)="fieldOperational('delete')">
            <i class="icon-KT-Close"></i>
          </button>
        </div>
      </div>
    </div>
  </ng-container>

  <ng-container *ngIf="formStatus === 0">
    <ng-container *ngIf="editor === true">
      <nz-input-number
        [formControl]="formControl"
        class="form-control"
        [vxFormAttributes]="field"
        [class.is-invalid]="showError"
        [nzPlaceHolder]="placeHolder"
        [nzPrecision]="precision"
      ></nz-input-number>
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

    <div class="fieldtext" *ngIf="editor === false">{{ text }}</div>
  </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldNumber.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldPassWord extends FieldType {
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
}
VXFormFieldPassWord.decorators = [
    { type: Component, args: [{
                selector: "vxfield-password",
                template: `
  <ng-container *ngIf="formStatus !== 0">
  <div class="fieldOperational">
    <div class="fieldcheckbox">
      <label nz-checkbox [(ngModel)]="field.checked"></label>
    </div>
    <div class="fieldControl">
      <div class="label">
        <span *ngIf="to.required">*</span>{{ to.label }}
      </div>
      <div class="control">
        <input nz-input disabled />
      </div>
      <div class="fieldButton">
        <button class="btnEdit" (click)="fieldOperational('edit')">
          <i class="icon-Edit03"></i>编辑
        </button>
        <button class="btnDel" (click)="fieldOperational('delete')">
          <i class="icon-KT-Close"></i>
        </button>
      </div>
    </div>
  </div>
</ng-container>

<ng-container *ngIf="formStatus === 0">
  <ng-container *ngIf="editor === true">
    <input
      nz-input
      [formControl]="formControl"
      [vxFormAttributes]="field"
      [class.is-invalid]="showError"
      [type]="'password'"
    />
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

  <div class="fieldtext" *ngIf="editor === false">{{ text }}</div>
</ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldPassWord.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldRadio extends FieldType {
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
}
VXFormFieldRadio.decorators = [
    { type: Component, args: [{
                selector: "vxfield-radio",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <label nz-radio nzDisabled="true"></label>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <label
          nz-radio
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        ></label>
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

      <div class="fieldtext" *ngIf="editor === false">{{ text }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldRadio.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldRadioGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
}
VXFormFieldRadioGroup.decorators = [
    { type: Component, args: [{
                selector: "vxfield-radiogroup",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <nz-radio-group
              [nzName]="'radiogroup-' + guid"
              [formControl]="formControl"
              [vxFormAttributes]="field"
              [class.is-invalid]="showError"
            >
              <ng-container *ngFor="let item of to.options">
                <label nz-radio [nzValue]="item.value" nzDisabled="true">{{
                  item.label
                }}</label>
              </ng-container>
            </nz-radio-group>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
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
VXFormFieldRadioGroup.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldCheckbox extends FieldType {
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
}
VXFormFieldCheckbox.decorators = [
    { type: Component, args: [{
                selector: "vxfield-checkbox",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <label nz-checkbox nzDisabled="true"></label>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <label
          nz-checkbox
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
        ></label>
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

      <div class="fieldtext" *ngIf="editor === false">{{ text }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldCheckbox.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldCheckboxGroup extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
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
}
VXFormFieldCheckboxGroup.decorators = [
    { type: Component, args: [{
                selector: "vxfield-checkboxgroup",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
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
                  disabled
                  >{{ option.label }}</label
                >
              </ng-container>
            </nz-checkbox-wrapper>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
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
              >{{ option.label }}</label
            >
          </ng-container>
        </nz-checkbox-wrapper>
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
      <div class="fieldtext" *ngIf="editor === false">{{ textMultiple }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldCheckboxGroup.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldSelect extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.defaultValue = "";
        this.defaultValues = [];
        this.selecttype = "default";
        this.service = dyService;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.to.selecttype === "multiple") {
            this.selecttype = "multiple";
            if (this.field.defaultValue && this.field.defaultValue != null) {
                this.defaultValues = this.field.defaultValue.split(",");
            }
        }
        else {
            this.defaultValue = this.field.defaultValue;
        }
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    /**
     * @return {?}
     */
    getSelectText() {
        /** @type {?} */
        let result = "";
        if (this.to && this.to.selecttype) {
            if (this.to.selecttype === "single") {
                result = this.textSingle;
            }
            else if (this.to.selecttype === "multiple") {
                result = this.textMultiple;
            }
        }
        return result;
    }
}
VXFormFieldSelect.decorators = [
    { type: Component, args: [{
                selector: "vxfield-select",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <input nz-input disabled />
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <nz-select
          nzShowSearch
          nzAllowClear
          [nzMode]="to.selecttype === 'multiple' ? 'multiple' : 'default'"
          [formControl]="formControl"
          [vxFormAttributes]="field"
          [class.is-invalid]="showError"
          [nzPlaceHolder]="placeHolder"
        >
          <ng-container *ngFor="let item of to.options">
            <nz-option
              [nzLabel]="item.label"
              [nzValue]="item.value"
            ></nz-option>
          </ng-container>
        </nz-select>
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

      <div class="fieldtext" *ngIf="editor === false">
        {{ getSelectText() }}
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldSelect.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
class VXFormFieldDateTime extends FieldType {
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
    get format() {
        /** @type {?} */
        let result = "yyyy-MM-dd HH:mm:ss";
        if (this.to["format"] != undefined && this.to["format"] != null && this.to["format"] != "") {
            result = this.to["format"];
        }
        return result;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    /**
     * @return {?}
     */
    getText() {
        /** @type {?} */
        let result = "";
        if (this.to.type != undefined && this.to.type != null) {
            if (this.model != undefined &&
                this.model != null &&
                this.field != undefined &&
                this.field != null &&
                this.field.key != undefined &&
                this.field.key != null &&
                this.model[this.field.key] != undefined &&
                this.model[this.field.key] != null &&
                this.model[this.field.key] != "") {
                switch (this.to.type) {
                    case "datetime":
                        result = moment(this.model[this.field.key]).format("yyyy-MM-DD HH:mm:ss");
                        break;
                    case "date":
                        result = moment(this.model[this.field.key]).format("YYYY-MM-DD");
                        break;
                    case "year":
                        result = moment(this.model[this.field.key]).format("YYYY");
                        break;
                    case "month":
                        result = moment(this.model[this.field.key]).format("YYYY-MM");
                        break;
                    case "time":
                        result = moment(this.model[this.field.key]).format("HH:mm");
                        break;
                }
            }
        }
        return result;
    }
}
VXFormFieldDateTime.decorators = [
    { type: Component, args: [{
                selector: "vxfield-datetime",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <input nz-input disabled />
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0"
      ><ng-container *ngIf="editor === true"> 
          <nz-date-picker 
            nzShowTime
            [nzFormat]="format"
            [formControl]="formControl"
            [vxFormAttributes]="field"
            [class.is-invalid]="showError"
          ></nz-date-picker>
 
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

      <div class="fieldtext" *ngIf="editor === false">{{ getText() }}</div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldDateTime.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldImage extends FieldType {
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
}
VXFormFieldImage.decorators = [
    { type: Component, args: [{
                selector: "vxfield-image",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <input nz-input disabled />
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="formStatus === 0">
      <nz-avatar
        nzIcon="user"
        nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      ></nz-avatar>
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
  `
            }] }
];
/** @nocollapse */
VXFormFieldImage.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldUpload extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} msg
     */
    constructor(dyService, msg) {
        super();
        this.msg = msg;
        this.defaultFileList = [];
        this.handleRemove = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            observer.next(true);
            observer.complete();
        })));
        this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            return new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const isJPG = file.type === "image/jpeg";
                console.log(file);
                if (!this.checkFileType(file)) {
                    this.msg.error("您上传的文件类型不符合要求！");
                    observer.complete();
                    return;
                }
                if (!this.checkFileSize(file)) {
                    this.msg.error("您上传的文件大小已经超出最大设置");
                    observer.complete();
                    return;
                }
                observer.next(true);
                observer.complete();
            }));
        });
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
     * @param {?} __0
     * @return {?}
     */
    handleChange({ file, fileList }) {
        debugger;
        /** @type {?} */
        const status = file.status;
        if (status === "done") {
            /** @type {?} */
            let values = fileList.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return {
                    uid: item.uid,
                    name: item.name,
                    url: item.url
                };
            }));
            /* this.model[this.field.key] = values;
            this.formControl.markAsTouched(); */
            this.formControl.patchValue(values);
            this.formControl.markAsTouched();
            this.msg.success(`文件${file.name} 上传成功！`);
        }
        else if (status === "error") {
            this.msg.error(`文件${file.name} 上传失败！`);
        }
        if (status === "removed") {
            /** @type {?} */
            let values = this.formControl.value;
            values.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
                if (item.uid === file.uid) {
                    object.splice(index, 1);
                }
            }));
            //this.formControl.patchValue(values);
            //this.formControl.markAsTouched();
            this.msg.success(`文件${file.name} 删除成功！`);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    checkFileType(file) {
        /** @type {?} */
        let result = true;
        if (this.field &&
            this.field.templateOptions &&
            this.field.templateOptions.attachment &&
            this.field.templateOptions.attachment.type) {
            /** @type {?} */
            let types = this.field.templateOptions.attachment.type;
            if (types != undefined && types != null && types != "") {
                result = types.split(",").some((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    return file.type === item;
                }));
            }
        }
        return result;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    checkFileSize(file) {
        /** @type {?} */
        let result = true;
        if (this.field &&
            this.field.templateOptions &&
            this.field.templateOptions.attachment &&
            this.field.templateOptions.attachment.size) {
            /** @type {?} */
            let size = this.field.templateOptions.attachment.size;
            if (size != undefined && size != null) {
                result = file.size / 1024 / 1024 <= size;
            }
        }
        return result;
    }
}
VXFormFieldUpload.decorators = [
    { type: Component, args: [{
                selector: "vxfield-upload",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <nz-upload nzType="drag" [nzDisabled]="true">
              <p class="ant-upload-drag-icon"></p>
              <p class="ant-upload-text">单击或拖动文件到此区域上传</p>
              <p class="ant-upload-hint">
                支持单个或批量上传。严禁上传不法文件，谢谢!
              </p>
            </nz-upload>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-upload
        nzType="drag"
        nzAction="https://jsonplaceholder.typicode.com/posts/"
        [nzFileList]="defaultFileList"
        [nzMultiple]="true"
        (nzChange)="handleChange($event)"
        [class.is-invalid]="showError"
      >
        <p class="ant-upload-drag-icon"></p>
        <p class="ant-upload-text">单击或拖动文件到此区域上传</p>
        <p class="ant-upload-hint">
          支持单个或批量上传。严禁上传不法文件，谢谢!
        </p>
      </nz-upload>
      <div class="tips"></div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldUpload.ctorParameters = () => [
    { type: VXFormAntService },
    { type: NzMessageService }
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
class VXFormTree {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.tag = false;
        this.treeChangeEvent = new EventEmitter();
        this.treeData = [];
        this.controlid = "";
        this.selectData = [];
    }
    //选择节点
    /**
     * @return {?}
     */
    get selectedNode() {
        return cloneDeep(this.selectData);
    }
    /**
     * @return {?}
     */
    get selectType() {
        /** @type {?} */
        let res = "";
        if (this.fieldConfig != undefined &&
            this.fieldConfig != null &&
            this.fieldConfig.templateOptions != undefined &&
            this.fieldConfig.templateOptions != null &&
            this.fieldConfig.templateOptions.selectType != undefined) {
            res = this.fieldConfig.templateOptions.selectType;
        }
        return res;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let id = get(this.fieldConfig, "templateOptions.treeid");
        if (id != undefined && id != null && id != "") {
            this.controlid = get(this.fieldConfig, "templateOptions.treeid");
        }
        this.getTreeData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.defaultNode) ;
    }
    //获取Tree数据集
    /**
     * @return {?}
     */
    getTreeData() {
        this.dataService.getTreeData({ id: this.controlid }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.treeData = res;
            this.getSelectData();
        }));
    }
    /**
     * @return {?}
     */
    getSelectData() {
        if (this.fieldConfig != null &&
            this.fieldConfig.model != undefined &&
            this.fieldConfig.model != null &&
            this.fieldConfig.key != undefined &&
            this.fieldConfig.key != null &&
            this.fieldConfig.model[this.fieldConfig.key] != undefined &&
            this.fieldConfig.model[this.fieldConfig.key] != null) {
            this.selectData = cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
        }
    }
}
VXFormTree.decorators = [
    { type: Component, args: [{
                selector: "vxform-tree",
                template: "<vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\"></vxform-private-tree>",
                providers: [DataService],
                styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
            }] }
];
/** @nocollapse */
VXFormTree.ctorParameters = () => [
    { type: DataService }
];
VXFormTree.propDecorators = {
    fieldConfig: [{ type: Input }],
    tag: [{ type: Input }],
    treeChangeEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormEmployee {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.selectData = [];
        this.tag = true;
        //是否要多选
        this.check = false;
        //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
        this.action = 0;
        //table 头部信息
        this.header = [
            { "key": "id", "name": "id", "hiden": true },
            { "key": "code", "name": "工号", "width": 150 },
            { "key": "name", "name": "姓名", "width": 150 },
            { "key": "organization", "name": "部门" }
        ];
        //table 行数据
        this.body = [];
        this.buttonlist = [];
        this.checkid = [];
        this.query = {
            total: 0,
            pageIndex: 1,
            pageSize: 15,
            sortName: "",
            sortValue: "",
            keyWord: ""
        };
    }
    /**
     * @return {?}
     */
    get selectedNode() {
        return cloneDeep(this.selectData);
    }
    /**
     * @return {?}
     */
    get selectType() {
        /** @type {?} */
        let res = "";
        if (this.fieldConfig != undefined &&
            this.fieldConfig != null &&
            this.fieldConfig.templateOptions != undefined &&
            this.fieldConfig.templateOptions != null &&
            this.fieldConfig.templateOptions.selectType != undefined) {
            res = this.fieldConfig.templateOptions.selectType;
        }
        return res;
    }
    /**
     * @return {?}
     */
    getSelectData() {
        if (this.fieldConfig != null &&
            this.fieldConfig.model != undefined &&
            this.fieldConfig.model != null &&
            this.fieldConfig.key != undefined &&
            this.fieldConfig.key != null &&
            this.fieldConfig.model[this.fieldConfig.key] != undefined &&
            this.fieldConfig.model[this.fieldConfig.key] != null) {
            this.selectData = cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
        }
        console.log('[]', this.selectData);
        if (this.selectData != null && this.selectData.length > 0) {
            this.checkid = this.selectData.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    "id": item.value,
                    "name": item.label
                };
            }));
        }
        else {
            this.checkid = [];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.selectType == "multiple") {
            this.check = true;
            this.action = 0;
        }
        if (this.selectType == "single") {
            this.check = false;
            this.action = 2;
            this.header.push({ "key": "action", "name": "操作", "hiden": true, "action": true });
        }
        this.getEmployeeData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    getEmployeeData() {
        this.dataService.getSysCtrEmployee({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.query.pageIndex = res.index;
            this.query.total = res.total;
            this.body = res.data;
        }));
        this.getSelectData();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pageIndexChange(event) {
        this.dataService.getSysCtrEmployee({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.query.pageIndex = event.pageIndex;
            this.query.total = res.total;
            this.body = res.data;
        }));
    }
    /**
     * @param {?} list
     * @return {?}
     */
    checkChange(list) {
        if (list != null && list.length > 0) {
            this.selectData = list.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    "label": item.name, "value": item.id
                };
            }));
        }
        else {
            this.selectData = [];
        }
    }
}
VXFormEmployee.decorators = [
    { type: Component, args: [{
                selector: "vxform-employee",
                template: "<vxform-private-table\r\n [tableIndex]=\"query.pageIndex\"\r\n [tableSize]=\"query.pageSize\"\r\n [tableTotal]=\"query.total\"\r\n [header]=\"header\"\r\n [body]=\"body\"\r\n [check]=\"check\"\r\n [action]=\"action\"\r\n [checkid]=\"checkid\" \r\n (checkChangeEvent)=\"checkChange($event)\"\r\n (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n</vxform-private-table>",
                providers: [DataService],
                styles: [":host ::ng-deep{display:flex;width:100%;height:100%}:host ::ng-deep .content-left{display:flex;flex-direction:column;width:300px;padding:0 10px}:host ::ng-deep .content-left nz-select{width:100%}:host ::ng-deep .content-left .tree{flex:1;overflow-y:auto;display:in}:host ::ng-deep .content-right{flex:1}"]
            }] }
];
/** @nocollapse */
VXFormEmployee.ctorParameters = () => [
    { type: DataService }
];
VXFormEmployee.propDecorators = {
    fieldConfig: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormOrg {
    /**
     * @param {?} dataService
     * @param {?} cd
     */
    constructor(dataService, cd) {
        this.dataService = dataService;
        this.cd = cd;
        this.fieldConfig = {};
        this.tag = true;
        this.treeChangeEvent = new EventEmitter();
        //组织数据
        this.data = [];
        this.dimension = true;
        this.selectData = [];
        this.curOrgId = "";
        this.orgData = [];
        this.treeData = [];
        this.controlid = "";
        this.treeid = "";
        this.selectedKey = [];
        this.skeletonStatus = 0;
    }
    //选择节点
    /**
     * @return {?}
     */
    get selectedNode() {
        return cloneDeep(this.selectData);
    }
    /**
     * @return {?}
     */
    get selectType() {
        /** @type {?} */
        let res = "";
        if (this.fieldConfig != undefined &&
            this.fieldConfig != null &&
            this.fieldConfig.templateOptions != undefined &&
            this.fieldConfig.templateOptions != null &&
            this.fieldConfig.templateOptions.selectType != undefined) {
            res = this.fieldConfig.templateOptions.selectType;
        }
        return res;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let orgControl = get(this.fieldConfig, "templateOptions.controlid");
        if (orgControl != undefined && orgControl != null && orgControl != "") {
            this.controlid = get(this.fieldConfig, "templateOptions.controlid");
        }
        this.getOrgData();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    //获取组织数据集
    /**
     * @return {?}
     */
    getOrgData() {
        this.dataService.getSysCtrOrgTree().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.data = res;
            if (this.data != null && this.data.length > 0) {
                if (this.data[0].children != undefined) {
                    this.curOrgId = this.data[0].key;
                    this.treeData = this.data[0].children;
                }
            }
            this.getTreeSelectData();
        }));
    }
    /**
     * @return {?}
     */
    getTreeSelectData() {
        if (this.fieldConfig != null &&
            this.fieldConfig.model != undefined &&
            this.fieldConfig.model != null &&
            this.fieldConfig.key != undefined &&
            this.fieldConfig.key != null &&
            this.fieldConfig.model[this.fieldConfig.key] != undefined &&
            this.fieldConfig.model[this.fieldConfig.key] != null) {
            this.selectData = cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    orgChange(event) {
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.key === event) {
                this.treeData = item.children;
            }
        }));
        this.selectData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.setTreeChecked(this.data, item.value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    treeChange(event) {
        if (this.dimension) {
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.setTreeUnChecked(item.children, event.delete);
            }));
        }
        this.treeChangeEvent.emit(this.selectData);
    }
    /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    setTreeUnChecked(tree, key) {
        if (tree && tree.length > 0) {
            tree.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.key === key) {
                    item.checked = false;
                }
                else {
                    if (item.children && item.children.length > 0) {
                        this.setTreeUnChecked(item.children, key);
                    }
                }
            }));
        }
        return;
    }
    /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    setTreeChecked(tree, key) {
        if (tree && tree.length > 0) {
            tree.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.key === key) {
                    item.checked = true;
                }
                else {
                    if (item.children && item.children.length > 0) {
                        this.setTreeChecked(item.children, key);
                    }
                }
            }));
        }
        return;
    }
}
VXFormOrg.decorators = [
    { type: Component, args: [{
                selector: "vxform-org",
                template: "<div class=\"org-select\" *ngIf=\"dimension==true\">\r\n    <span>\u7EF4\u5EA6\uFF1A</span>\r\n    <nz-select [(ngModel)]=\"curOrgId\" (ngModelChange)=\"orgChange($event)\">\r\n        <ng-container *ngFor=\"let item of data;\">\r\n            <nz-option [nzValue]=\"item.key\" [nzLabel]=\"item.title\"></nz-option>\r\n        </ng-container>\r\n    </nz-select>\r\n</div>\r\n<div class=\"org-tree\"> \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\" (treeChangeEvent)=\"treeChange($event)\"></vxform-private-tree>\r\n</div>",
                providers: [DataService],
                styles: [":host ::ng-deep .org-select{min-width:500px;padding:15px 0 0 15px;font-size:12px}:host ::ng-deep .org-select nz-select{min-width:250px}:host ::ng-deep .org-select .ant-select{font-size:12px}:host ::ng-deep .org-select .ant-select-dropdown{font-size:12px}:host ::ng-deep .org-tree{height:calc(100% - 47px);padding:0 0 0 10px}:host ::ng-deep .org-tree .tree-item{padding-left:0!important}:host ::ng-deep .org-tree .tree-tag{margin-top:-47px}"]
            }] }
];
/** @nocollapse */
VXFormOrg.ctorParameters = () => [
    { type: DataService },
    { type: ChangeDetectorRef }
];
VXFormOrg.propDecorators = {
    fieldConfig: [{ type: Input }],
    tag: [{ type: Input }],
    treeChangeEvent: [{ type: Output }],
    nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormPostion {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.tag = false;
        this.treeChangeEvent = new EventEmitter();
        this.treeData = [];
        this.controlid = "";
        this.orgid = "";
        this.selectData = [];
        ////
        //是否要多选
        this.check = false;
        //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
        this.action = 0;
        //table 头部信息
        this.header = [
            { "key": "id", "name": "id", "hiden": true },
            { "key": "code", "name": "职位编码", "width": 100 },
            { "key": "name", "name": "职位名称", "width": 150 },
            { "key": "number", "name": "在职人数", "width": 80 },
            { "key": "parent", "name": "上级职位" }
        ];
        //table 行数据
        this.body = [];
        this.buttonlist = [];
        this.checkid = [];
        this.query = {
            total: 0,
            pageIndex: 1,
            pageSize: 15,
            sortName: "",
            sortValue: "",
            keyWord: ""
        };
    }
    //选择节点
    /**
     * @return {?}
     */
    get selectedNode() {
        return cloneDeep(this.selectData);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getOrgData();
        this.action = 2;
        if (this.selectType == "multiple") {
            this.check = true;
            this.action = 0;
        }
        if (this.selectType == "single") {
            this.check = false;
            this.action = 2;
            this.header.push({ "key": "action", "name": "操作", "hiden": true, "action": true });
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.defaultNode) ;
    }
    //获取Org数据集
    /**
     * @return {?}
     */
    getOrgData() {
        this.dataService.getTreeData({ id: this.controlid }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.treeData = res;
            this.getSelectData();
        }));
    }
    /**
     * @return {?}
     */
    get selectType() {
        /** @type {?} */
        let res = "";
        if (this.fieldConfig != undefined &&
            this.fieldConfig != null &&
            this.fieldConfig.templateOptions != undefined &&
            this.fieldConfig.templateOptions != null &&
            this.fieldConfig.templateOptions.selectType != undefined) {
            res = this.fieldConfig.templateOptions.selectType;
        }
        return res;
    }
    /**
     * @return {?}
     */
    getSelectData() {
        if (this.fieldConfig != null &&
            this.fieldConfig.model != undefined &&
            this.fieldConfig.model != null &&
            this.fieldConfig.key != undefined &&
            this.fieldConfig.key != null &&
            this.fieldConfig.model[this.fieldConfig.key] != undefined &&
            this.fieldConfig.model[this.fieldConfig.key] != null) {
            this.selectData = cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
        }
        if (this.selectData != null && this.selectData.length > 0) {
            this.checkid = this.selectData.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    "id": item.value,
                    "name": item.label
                };
            }));
        }
        else {
            this.checkid = [];
        }
    }
    /**
     * @return {?}
     */
    getPostionData() {
        this.dataService.getSysCtrPostionTable({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.query.pageIndex = res.index;
            this.query.total = res.total;
            this.body = res.data;
        }));
        this.getSelectData();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pageIndexChange(event) {
        this.dataService.getSysCtrPostionTable({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.query.pageIndex = event.pageIndex;
            this.query.total = res.total;
            this.body = res.data;
        }));
    }
    /**
     * @param {?} list
     * @return {?}
     */
    checkChange(list) {
        if (list != null && list.length > 0) {
            this.selectData = list.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    "label": item.name, "value": item.id
                };
            }));
        }
        else {
            this.selectData = [];
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    orgChange(event) {
        if (event != null && event != undefined && event.checkData != undefined && event.checkData.length > 0) {
            this.orgid = event.checkData[0].value;
            this.getPostionData();
        }
    }
}
VXFormPostion.decorators = [
    { type: Component, args: [{
                selector: "vxform-postion",
                template: "\r\n<div class=\"postion-org\">\r\n    <!-- <vx-org [data]=\"orgData\" [dimension]=\"true\" [tag]=\"false\" (treeChangeEvent)=\"orgChange($event)\">\r\n    </vx-org> -->\r\n    \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"'single'\" [tag]=\"false\" [expandAll]=\"false\"  (treeChangeEvent)=\"orgChange($event)\"></vxform-private-tree>\r\n</div>\r\n<div class=\"postion-list\"> \r\n    <vxform-private-table\r\n        [tableIndex]=\"query.pageIndex\"\r\n        [tableSize]=\"query.pageSize\"\r\n        [tableTotal]=\"query.total\"\r\n        [header]=\"header\"\r\n        [body]=\"body\"\r\n        [check]=\"check\"\r\n        [action]=\"action\"\r\n        [checkid]=\"checkid\" \r\n        (checkChangeEvent)=\"checkChange($event)\"\r\n        (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n    </vxform-private-table>\r\n</div>\r\n",
                providers: [DataService],
                styles: [":host ::ng-deep{display:flex;flex-direction:row;width:100%;height:100%}:host ::ng-deep .postion-org{width:240px;border-right:1px solid #e8e8e8}:host ::ng-deep .postion-org .component-tree .tree-item{padding:8px 5px 5px 8px!important}:host ::ng-deep .postion-org .ant-tree li ul{padding:0 0 0 15px}:host ::ng-deep .postion-list{flex:1}"]
            }] }
];
/** @nocollapse */
VXFormPostion.ctorParameters = () => [
    { type: DataService }
];
VXFormPostion.propDecorators = {
    fieldConfig: [{ type: Input }],
    tag: [{ type: Input }],
    treeChangeEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormArea {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.nodes = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataService.getTreeData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.nodes = res;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzEvent(event) { }
    /**
     * @return {?}
     */
    submitForm() { }
}
VXFormArea.decorators = [
    { type: Component, args: [{
                selector: "vxform-area",
                template: "\u53C2\u6570\uFF1A{{fieldConfig|json}}",
                providers: [DataService],
                styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
            }] }
];
/** @nocollapse */
VXFormArea.ctorParameters = () => [
    { type: DataService }
];
VXFormArea.propDecorators = {
    fieldConfig: [{ type: Output }],
    nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldLookUp extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} modal
     * @param {?} vxDialogService
     */
    constructor(dyService, modal, vxDialogService) {
        super();
        this.modal = modal;
        this.vxDialogService = vxDialogService;
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
     * @return {?}
     */
    lookup() {
        /** @type {?} */
        let template;
        /** @type {?} */
        let type = get(this.field, "templateOptions.type");
        /** @type {?} */
        let para = {
            fieldConfig: this.field,
            tag: false
        };
        switch (type) {
            case "tree":
                template = VXFormTree;
                para.tag = true;
                break;
                break;
            case "employee":
                template = VXFormEmployee;
                break;
            case "organizational":
                template = VXFormOrg;
                para.tag = true;
                break;
            case "position":
                template = VXFormPostion;
                break;
            case "area":
                template = VXFormArea;
                break;
            default:
                break;
        }
        if (template) {
            this.vxDialogService.CreateModelDialog({
                nzTitle: "选择 - " + this.to["label"],
                size: "large",
                nzContent: template
            }, para, (/**
             * @param {?} instance
             * @param {?} modal
             * @return {?}
             */
            (instance, modal) => {
                /** @type {?} */
                let res = instance.selectedNode;
                if (this.model != undefined &&
                    this.model != null &&
                    this.key != undefined &&
                    this.key != null) {
                    if (res != null && res.length > 0) {
                        this.model[this.key] = res;
                        this.formControl.markAsTouched();
                    }
                    else {
                        this.model[this.key] = [];
                        this.formControl.markAsTouched();
                    }
                }
                else {
                    this.model[this.key] = res;
                    this.formControl.markAsTouched();
                }
                modal.destroy();
            }));
        }
    }
    /**
     * @return {?}
     */
    removeValue() {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model[this.key] != undefined &&
            this.model[this.key] != null) {
            this.model[this.key] = [];
            this.formControl.markAsTouched();
        }
    }
}
VXFormFieldLookUp.decorators = [
    { type: Component, args: [{
                selector: "vxfield-lookup",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <input nz-input disabled />
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <ng-container *ngIf="editor === true">
        <nz-input-group [nzSuffix]="suffixTemplate">
          <input
            nz-input
            [class.is-invalid]="showError"
            [placeholder]="placeHolder"
            [value]="textLookUp"
            readonly="true"
          />
        </nz-input-group>
        <div class="tips">
          <i
            class="icon-bangzhu"
            [nzTooltipTitle]="tips"
            nzTooltipPlacement="top"
            nz-tooltip
            *ngIf="tips != ''"
          ></i>
        </div>

        <nz-input-group [nzSuffix]="suffixTemplate" style="display:none;">
          <input
            nz-input
            [formControl]="formControl"
            [vxFormAttributes]="field"
            [class.is-invalid]="showError"
            readonly="true"
        /></nz-input-group>
      </ng-container>

      <div class="fieldtext" *ngIf="editor === false">{{ textLookUp }}</div>
    </ng-container>
    <ng-template #suffixTemplate>
      <i (click)="lookup()" class="icon-tianjin"></i>
      <!--<i
        nz-icon
        nzType="close"
        nzTheme="outline"
        (click)="removeValue()"
        *ngIf="textLookUp != null && textLookUp != ''"
      ></i>-->
    </ng-template>
  `
            }] }
];
/** @nocollapse */
VXFormFieldLookUp.ctorParameters = () => [
    { type: VXFormAntService },
    { type: NzModalService$1 },
    { type: VXDialogService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldHTML extends FieldType {
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
}
VXFormFieldHTML.decorators = [
    { type: Component, args: [{
                selector: "vxfield-html",
                template: `
  <ng-container *ngIf="formStatus !== 0">
  <div class="fieldOperational">
    <div class="fieldcheckbox">
      <label nz-checkbox [(ngModel)]="field.checked"></label>
    </div>
    <div class="fieldControl">
      <div class="control">
        {{ to.description }}
      </div>
      <div class="fieldButton">
        <button class="btnEdit" (click)="fieldOperational('edit')">
          <i class="icon-Edit03"></i>编辑
        </button>
        <button class="btnDel" (click)="fieldOperational('delete')">
           <i class="icon-KT-Close"></i>
        </button>
      </div>
    </div>
  </div>
</ng-container>

<ng-container *ngIf="formStatus === 0">
  <div class="fieldcontrol">{{ to.description }}</div>
</ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldHTML.ctorParameters = () => [
    { type: VXFormAntService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormFieldLine extends FieldType {
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
}
VXFormFieldLine.decorators = [
    { type: Component, args: [{
                selector: "vxfield-line",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="control">
            <hr />
          </div>
          <div class="fieldButton">
            <button class="btnDel" (click)="fieldOperational('delete')">
               <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <div class="fieldContent">
        <div class="fieldcontrol">
          <hr />
        </div>
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldLine.ctorParameters = () => [
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
        <span *ngIf="to.required">*</span>{{ to.label }}
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
    // types
    VXFormFieldText,
    VXFormFieldTextI18n,
    VXFormFieldTextArea,
    VXFormFieldNumber,
    VXFormFieldPassWord,
    VXFormFieldRadio,
    VXFormFieldRadioGroup,
    VXFormFieldCheckbox,
    VXFormFieldCheckboxGroup,
    VXFormFieldSelect,
    VXFormFieldDateTime,
    VXFormFieldImage,
    VXFormFieldUpload,
    VXFormFieldLookUp,
    VXFormFieldHTML,
    VXFormFieldLine,
    //templates
    VXFormFieldGroup,
    VXFormFieldRepeat,
    // wrappers
    VXFormWrapperFormField
];
/** @type {?} */
const BOOTSTRAP_VXFORM_CONFIG = {
    types: [
        {
            name: "text",
            component: VXFormFieldText,
            wrappers: ["form-field"]
        },
        {
            name: "texti18n",
            component: VXFormFieldTextI18n,
            wrappers: ["form-field"]
        },
        {
            name: "textarea",
            component: VXFormFieldTextArea,
            wrappers: ["form-field"]
        },
        {
            name: "number",
            component: VXFormFieldNumber,
            wrappers: ["form-field"]
        },
        {
            name: "password",
            component: VXFormFieldPassWord,
            wrappers: ["form-field"]
        },
        {
            name: "radio",
            component: VXFormFieldRadio,
            wrappers: ["form-field"]
        },
        {
            name: "radiogroup",
            component: VXFormFieldRadioGroup,
            wrappers: ["form-field"]
        },
        {
            name: "checkbox",
            component: VXFormFieldCheckbox,
            wrappers: ["form-field"]
        },
        {
            name: "checkboxgroup",
            component: VXFormFieldCheckboxGroup,
            wrappers: ["form-field"]
        },
        {
            name: "select",
            component: VXFormFieldSelect,
            wrappers: ["form-field"]
        },
        {
            name: "datetime",
            component: VXFormFieldDateTime,
            wrappers: ["form-field"]
        },
        {
            name: "image",
            component: VXFormFieldImage,
            wrappers: ["form-field"]
        },
        {
            name: "upload",
            component: VXFormFieldUpload,
            wrappers: ["form-field"]
        },
        {
            name: "lookup",
            component: VXFormFieldLookUp,
            wrappers: ["form-field"]
        },
        {
            name: "html",
            component: VXFormFieldHTML,
            wrappers: ["form-field"]
        },
        {
            name: "line",
            component: VXFormFieldLine,
            wrappers: ["form-field"]
        },
        { name: "group", component: VXFormFieldGroup },
        { name: "repeat", component: VXFormFieldRepeat }
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
class VXToFormFieldService {
    constructor() { }
    /**
     * @param {?} tableField
     * @return {?}
     */
    getVXFiledFunction(tableField) {
        /** @type {?} */
        let field = {};
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXAntCommonService {
    /**
     * @param {?} toFormField
     */
    constructor(toFormField) {
        this.toFormField = toFormField;
        this.findFieldConfig = {};
    }
    //根据Guid获取Field
    /**
     * @param {?} formFieldConfig
     * @param {?} guid
     * @return {?}
     */
    getFormFieldByGuid(formFieldConfig, guid) {
        if (formFieldConfig.length) {
            formFieldConfig.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
                if (item.guid === guid) {
                    this.findFieldConfig = item;
                }
                if (item.type === "repeat") {
                    if (item.fieldArray &&
                        item.fieldArray &&
                        item.fieldArray.fieldGroup &&
                        item.fieldArray.fieldGroup.length > 0) {
                        this.getFormFieldByGuid(item.fieldArray.fieldGroup, guid);
                    }
                }
            }));
        }
        return this.findFieldConfig;
    }
}
VXAntCommonService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXAntCommonService.ctorParameters = () => [
    { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXTransferService {
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
                        get(cloneField, "fieldArray.fieldGroup").splice(item.index, 1);
                        get(cloneField, "fieldArray.fieldGroup").splice(item.index - 1, 0, item.field);
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
                        get(cloneField, "fieldArray.fieldGroup").length - 1) {
                        get(cloneField, "fieldArray.fieldGroup").splice(item.index, 1);
                        get(cloneField, "fieldArray.fieldGroup").splice(item.index + 1, 0, item.field);
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
            get(cloneField, "fieldArray.fieldGroup", []);
        }
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            get(checkedField, "checked", true);
            get(cloneField, "fieldArray.fieldGroup").splice(checkedField.index + 1, 0, obj);
        }
        else {
            get(cloneField, "fieldArray.fieldGroup").push(obj);
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
            get(cloneField, "fieldArray.fieldGroup", []);
        }
        if (checkedFields && checkedFields.length > 0) {
            /** @type {?} */
            let checkedField = checkedFields[checkedFields.length - 1];
            get(checkedField, "checked", true);
            get(cloneField, "fieldArray.fieldGroup").splice(checkedField.index + 1, 0, obj);
        }
        else {
            get(cloneField, "fieldArray.fieldGroup").push(obj);
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
            get(cloneGroupField, "fieldArray.fieldGroup", []);
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
            get(cloneGroupField, "fieldArray.fieldGroup").splice(beginIndex + index, 0, item);
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
            get(cloneGroupField, "fieldArray.fieldGroup").forEach((/**
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
                    get(field, "fieldArray.fieldGroup").forEach((/**
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
        get(field, "fieldGroup[0].fieldGroup").forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            if (item.checked) {
                checkedField.push({ index: index, field: item });
                get(field, "fieldArray.fieldGroup")[index].checked = true;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXDesginToFormService {
    /**
     * @param {?} toFormField
     */
    constructor(toFormField) {
        this.toFormField = toFormField;
    }
    /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    initTableStatus(tables, fields) {
        this.initTableFields(tables);
        if (fields && fields != null && fields.length > 0) {
            fields.forEach((/**
             * @param {?} field
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (field, index, object) => {
                this.setTableStatus(tables, field);
            }));
        }
    }
    /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    initFormFieldByTables(tables, fields) {
        if (tables != undefined &&
            tables != null &&
            tables.primary != undefined &&
            tables.primary != null &&
            tables.primary.tablefields != undefined &&
            tables.primary.tablefields != null) {
            /** @type {?} */
            let tableFileds = tables.primary.tablefields.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.isbutintin === true;
            }));
            if (tableFileds != null) {
                tableFileds.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (!this.checkVXFormFieldConfig(item.fieldcode, fields)) {
                        this.addVXFormFieldConfig(item, fields);
                    }
                }));
            }
        }
    }
    /**
     * @private
     * @param {?} tables
     * @return {?}
     */
    initTableFields(tables) {
        if (!tables) {
            return;
        }
        if (tables.primary) {
            tables.primary.tablequote = false;
            if (tables.primary.tablefields) {
                tables.primary.tablefields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                (field) => {
                    field.fieldquote = false;
                }));
            }
        }
        if (tables.child) {
            if (tables.child.single) {
                tables.child.single.forEach((/**
                 * @param {?} table
                 * @return {?}
                 */
                (table) => {
                    table.tablequote = false;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} field
                         * @return {?}
                         */
                        (field) => {
                            field.fieldquote = false;
                        }));
                    }
                }));
            }
            if (tables.child.multiple) {
                tables.child.multiple.forEach((/**
                 * @param {?} table
                 * @return {?}
                 */
                (table) => {
                    table.tablequote = false;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} field
                         * @return {?}
                         */
                        (field) => {
                            field.fieldquote = false;
                        }));
                    }
                }));
            }
        }
    }
    /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    setTableStatus(tables, field) {
        if (tables) {
            if (tables.primary) {
                this.setTablePrimary(tables.primary, field);
            }
            if (tables.child) {
                if (tables.child.single) {
                    this.setTableSingle(tables.child.single, field);
                }
                if (tables.child.multiple) {
                    this.setTableMultiple(tables.child.multiple, field);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} table
     * @param {?} field
     * @return {?}
     */
    setTablePrimary(table, field) {
        if (field.tablecode === table.tablecode) {
            table.tablequote = true;
            if (table.tablefields) {
                table.tablefields.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.fieldcode === field.key) {
                        item.fieldquote = true;
                    }
                }));
            }
        }
    }
    /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    setTableSingle(tables, field) {
        if (tables && tables != null && tables.length > 0) {
            tables.forEach((/**
             * @param {?} table
             * @return {?}
             */
            table => {
                if (table.tablecode === field.tablecode) {
                    table.tablequote = true;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        (item) => {
                            if (item.fieldcode === field.key) {
                                item.fieldquote = true;
                            }
                        }));
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} tables
     * @param {?} groupField
     * @return {?}
     */
    setTableMultiple(tables, groupField) {
        if (tables && tables != null && tables.length > 0) {
            tables.forEach((/**
             * @param {?} table
             * @return {?}
             */
            table => {
                if (table.tablecode === groupField.tablecode) {
                    table.tablequote = true;
                    if (groupField.fieldArray &&
                        groupField.fieldArray.fieldGroup &&
                        groupField.fieldArray.fieldGroup.length > 0) {
                        if (table.tablefields) {
                            table.tablefields.forEach((/**
                             * @param {?} item
                             * @return {?}
                             */
                            (item) => {
                                get(groupField, "fieldArray.fieldGroup").forEach((/**
                                 * @param {?} field
                                 * @return {?}
                                 */
                                (field) => {
                                    if (item.fieldcode === field.key) {
                                        item.fieldquote = true;
                                    }
                                }));
                            }));
                        }
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} code
     * @param {?} fields
     * @return {?}
     */
    checkVXFormFieldConfig(code, fields) {
        /** @type {?} */
        let result = false;
        if (fields != undefined && fields != null && fields != []) {
            result = fields.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.key === code;
            }));
        }
        return result;
    }
    /**
     * @private
     * @param {?} tableField
     * @param {?} fields
     * @return {?}
     */
    addVXFormFieldConfig(tableField, fields) {
        /** @type {?} */
        let field = this.toFormField.getVXFiledFunction(tableField);
        if (fields == undefined || fields == null) {
            fields = [];
        }
        fields.push(field);
    }
}
VXDesginToFormService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXDesginToFormService.ctorParameters = () => [
    { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormDesignField {
    /**
     * @param {?} message
     */
    constructor(message) {
        this.message = message;
        this.formField = {
            key: "",
            type: "text",
            templateOptions: {
                label: "",
                description: "",
                parameterid: "",
                treeid: "",
                controlid: "",
                maxLength: 50,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: ""
            },
            origin: {
                refdatasourcetype: "",
                datatype: ""
            }
        };
        this.lang = [
            { languagetype: "chinese", resvalue: "chinesechinese" },
            { languagetype: "english", resvalue: "englishenglish" },
            { languagetype: "english2", resvalue: "english2" }
        ];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        this.formField = Object.assign({}, this.formField, value);
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
    /**
     * @return {?}
     */
    checkSave() {
        /** @type {?} */
        let type = this.formField.type;
        if (type == "text" || type == "textarea") {
            if (this.formField.templateOptions.minLength >= this.formField.templateOptions.maxLength) {
                this.message.error("最大长度必须大于最小长度");
                return false;
            }
        }
        if (type == "number") {
            if (this.formField.templateOptions.min >= this.formField.templateOptions.max) {
                this.message.error("最大值必须大于最小值");
                return false;
            }
        }
        return true;
    }
}
VXFormDesignField.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-field",
                template: "<div class=\"builder-content\">\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5B57\u6BB5\u540D\u79F0\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [value]=\"formField.key\" readonly disabled />\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u663E\u793A\u540D\u79F0\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [(ngModel)]=\"formField.templateOptions.label\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5B57\u6BB5\u7C7B\u578B\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [value]=\"formField.type\" readonly disabled />\r\n        </div>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u9ED8\u8BA4\u503C\r\n        </div>\r\n        <div class=\"control\">\r\n            <input nz-input [(ngModel)]=\"formField.defaultValue\" />\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"formField.type==='text'|| formField.type==='textarea'\">\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5927\u957F\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['maxLength']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5C0F\u957F\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['minLength']\"></nz-input-number>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"formField.type==='number'\">\r\n\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5927\u503C\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['max']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\">\r\n            <div class=\"label\">\r\n                \u6700\u5C0F\u503C\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['min']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngIf=\"formField.templateOptions['precision']!=0\">\r\n            <div class=\"label\">\r\n                \u7CBE\u5EA6\r\n            </div>\r\n            <div class=\"control\">\r\n                <nz-input-number [nzMin]=\"0\" [nzStep]=\"1\" [nzPrecision]=\"0\" [(ngModel)]=\"formField.templateOptions['precision']\">\r\n                </nz-input-number>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u662F\u5426\u5FC5\u586B\r\n        </div>\r\n        <div class=\"control\">\r\n            <nz-switch [(ngModel)]=\"formField.templateOptions['required']\" nzCheckedChildren=\"\u662F\" nzUnCheckedChildren=\"\u5426\">\r\n            </nz-switch>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <div class=\"label\">\r\n            \u5360\u4F4D\u7B26\r\n        </div>\r\n        <div class=\"control\">\r\n            \r\n            <input nz-input [(ngModel)]=\"formField.templateOptions['tipsPlaceholder']\"  readonly disabled/>\r\n            <!-- <vx-language [(ngModel)]=\"formField.templateOptions['tipsPlaceholder']\"></vx-language> -->\r\n        </div>\r\n    </div>\r\n    <!-- <ng-container [ngSwitch]=\"formField.origin.refdatasourcetype\">\r\n        <div class=\"content\" *ngSwitchCase=\"'directinput'\">\r\n            <div class=\"label\">\r\n                \u6570\u636E\u7C7B\u578B\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.origin.datatype\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'refparameters'\">\r\n            <div class=\"label\">\r\n                \u5E38\u7528\u53C2\u6570\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.parameterid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'treeparameters'\">\r\n            <div class=\"label\">\r\n                \u6811\u578B\u53C2\u6570\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.treeid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n        <div class=\"content\" *ngSwitchCase=\"'systemcontrol'\">\r\n            <div class=\"label\">\r\n                \u7CFB\u7EDF\u63A7\u4EF6\r\n            </div>\r\n            <div class=\"control\">\r\n                <input nz-input [value]=\"formField.templateOptions.controlid\" readonly disabled />\r\n            </div>\r\n        </div>\r\n    </ng-container> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"content textarea\">\r\n        <div class=\"label\">\r\n            \u63D0\u793A\u4FE1\u606F\r\n        </div>\r\n        <div class=\"control\">\r\n            <textarea nz-input rows=\"3\" [(ngModel)]=\"formField.templateOptions['tips']\"> </textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content textarea\">\r\n        <div class=\"label\">\r\n            \u8FD9\u5219\u8868\u8FBE\u5F0F\r\n        </div>\r\n        <div class=\"control\">\r\n            <textarea nz-input rows=\"3\" [(ngModel)]=\"formField.templateOptions['pattern']\"> </textarea>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [":host ::ng-deep .builder-content{width:100%;padding:18px 0 0 12px;display:inline-block}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px;display:flex}:host ::ng-deep .builder-content .content .label{width:120px;text-align:right;padding:5px 10px 0 0}:host ::ng-deep .builder-content .content .control{flex:1;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
            }] }
];
/** @nocollapse */
VXFormDesignField.ctorParameters = () => [
    { type: NzMessageService }
];
VXFormDesignField.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormDesignFieldLabel {
    constructor() {
        this.formField = {
            key: "",
            type: "html",
            templateOptions: {
                label: "",
                description: "",
                parameterid: "",
                treeid: "",
                controlid: "",
                maxLength: 50,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: ""
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
        this.formField = Object.assign({}, this.formField, value);
        console.log(this.formField);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    submitForm() { }
    /**
     * @return {?}
     */
    checkSave() {
        return true;
    }
}
VXFormDesignFieldLabel.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-fieldlabel",
                template: "<textarea nz-input [nzAutosize]=\"{ minRows: 20, maxRows: 6 }\"\r\n    [(ngModel)]=\"formField.templateOptions['description']\"></textarea>",
                styles: [""]
            }] }
];
/** @nocollapse */
VXFormDesignFieldLabel.ctorParameters = () => [];
VXFormDesignFieldLabel.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormDesignTable {
    constructor() {
        this.tableType = "";
        this.businessTable = {
            primary: {},
            child: {
                single: [],
                multiple: []
            }
        };
        this.fieldConfig = {};
        this.tableData = [];
        this.mapOfCheckedId = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTableData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    initTableData() {
        this.tableData = [];
        this.mapOfCheckedId = {};
        /** @type {?} */
        let business = clone(this.businessTable);
        /** @type {?} */
        let tables = [];
        if (!business)
            return;
        if (this.tableType === "single") {
            if (business.primary && business.primary != null) {
                tables = [...tables, business.primary];
            }
            if (business.child &&
                business.child != null &&
                business.child.single &&
                business.child.single != null &&
                business.child.single.length > 0) {
                tables = tables.concat(business.child.single);
            }
        }
        else if (this.tableType === "multiple") {
            if (business.child &&
                business.child != null &&
                business.child.multiple &&
                business.child.multiple != null &&
                business.child.multiple.length > 0) {
                business.child.multiple.forEach((/**
                 * @param {?} table
                 * @return {?}
                 */
                (table) => {
                    if (table.tablecode === this.fieldConfig.tablecode) {
                        tables = [table];
                    }
                }));
            }
        }
        this.tableData = tables;
    }
}
VXFormDesignTable.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-table",
                template: "<nz-tabset>\r\n    <ng-container *ngFor=\"let table of tableData;let index=index;\">\r\n        <nz-tab [nzTitle]=\"table.tablename\">\r\n\r\n            <nz-table>\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>\u5B57\u6BB5Code</th>\r\n                        <th>\u5B57\u6BB5\u540D\u79F0</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of table.tablefields\">\r\n                        <ng-container *ngIf=\"data?.isbutintin==true || data?.fieldquote==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [nzChecked]=\"true\"></td>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"data?.isbutintin!==true && data?.fieldquote!==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [(nzChecked)]=\"mapOfCheckedId[data.fieldcode]\"></td>\r\n                        </ng-container>\r\n                        <td>{{ data.fieldcode }}</td>\r\n                        <td>{{ data.fieldname }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-tab>\r\n    </ng-container>\r\n</nz-tabset>",
                providers: [DataService],
                styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}"]
            }] }
];
/** @nocollapse */
VXFormDesignTable.ctorParameters = () => [];
VXFormDesignTable.propDecorators = {
    tableType: [{ type: Input }],
    businessTable: [{ type: Input }],
    fieldConfig: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormDesignTables {
    constructor() {
        this.businessTable = {
            primary: {},
            child: {
                single: [],
                multiple: []
            }
        };
        this.radioValue = "";
        this.tableData = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTableData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    initTableData() {
        this.tableData = [];
        /** @type {?} */
        let business = clone(this.businessTable);
        if (!business)
            return;
        if (business.child &&
            business.child != null &&
            business.child.multiple &&
            business.child.multiple != null &&
            business.child.multiple.length > 0) {
            this.tableData = business.child.multiple;
        }
        console.log(this.tableData);
    }
    /**
     * @param {?} table
     * @return {?}
     */
    selectOK(table) { }
}
VXFormDesignTables.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-tables",
                template: "<nz-radio-group [(ngModel)]=\"radioValue\" nzName=\"radiogroup\">\r\n    <nz-table>\r\n        <thead>\r\n            <tr>\r\n                <th></th>\r\n                <th>\u8868Code</th>\r\n                <th>\u8868\u540D\u79F0</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableData\">\r\n                <td> <label nz-radio [nzValue]=\"data.tablecode\" [nzDisabled]=\"data.tablequote\"></label>\r\n                </td>\r\n                <td>{{ data.tablecode }}</td>\r\n                <td>{{ data.tablename }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-radio-group>",
                providers: [DataService],
                styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}:host ::ng-deep .ant-radio-group{display:block}"]
            }] }
];
/** @nocollapse */
VXFormDesignTables.ctorParameters = () => [];
VXFormDesignTables.propDecorators = {
    businessTable: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormDesignDetail {
    /**
     * @param {?} message
     * @param {?} modalService
     * @param {?} vxFormAntService
     * @param {?} vxDialogService
     * @param {?} dataService
     * @param {?} vxAntCommonService
     * @param {?} vxTransferService
     * @param {?} vxDesginToFormService
     * @param {?} vxFormCommonService
     */
    constructor(message, modalService, vxFormAntService, vxDialogService, dataService, vxAntCommonService, vxTransferService, vxDesginToFormService, vxFormCommonService) {
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
    ngOnInit() {
        this.vxFormAntService.btnEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            switch (res["type"]) {
                case "delete":
                    this.modalService.confirm({
                        nzTitle: "提示",
                        nzContent: "您确定要删除选中的字段？",
                        nzOnOk: (/**
                         * @return {?}
                         */
                        () => {
                            this.groupBtnDeleteFields(res["field"]);
                        })
                    });
                    break;
                case "up":
                case "down":
                    this.groupBtnMoveUpOrDown(res["field"], res["type"]);
                    break;
                case "item":
                    this.groupBtnTableFields(res["field"]);
                    break;
                case "remark":
                case "line":
                    this.groupBtnAddLineRemark(res["field"], res["type"]);
                    break;
                default:
                    break;
            }
        }));
        this.vxFormAntService.fieldEvent.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            /** @type {?} */
            let sign = res["sign"];
            if (sign == "edit") {
                this.editFormFieldConfig(res["field"]);
            }
            else if (sign == "delete") {
                this.modalService.confirm({
                    nzTitle: "提示",
                    nzContent: "您确定要删除该字段？",
                    nzOnOk: (/**
                     * @return {?}
                     */
                    () => {
                        this.deleteFormFieldConfig(res["field"]);
                    })
                });
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.formCode) {
            this.initTablesInfo();
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
    btnSave() {
        this.vxFormInfo.fields = clone(this.form_fields);
        if (this.vxFormInfo.fields !== null &&
            this.vxFormInfo.fields !== undefined) {
            this.vxFormCommonService.initFormFieldProperty(this.vxFormInfo.fields);
        }
        console.log(JSON.stringify(this.vxFormInfo));
        this.saveEvent.emit(JSON.stringify(this.vxFormInfo));
    }
    /**
     * @return {?}
     */
    btnCancel() { }
    /**
     * @return {?}
     */
    btnPreview() {
        this.vxFormInfo.fields = clone(this.form_fields);
        if (this.vxFormInfo.fields !== null &&
            this.vxFormInfo.fields !== undefined) {
            this.vxFormCommonService.initFormFieldProperty(this.vxFormInfo.fields);
        }
        this.previewEvent.emit(JSON.stringify(this.vxFormInfo));
    }
    /**
     * @return {?}
     */
    btnDelete() {
        this.modalService.confirm({
            nzTitle: "提示",
            nzContent: "您确定要删除选中的字段？",
            nzOnOk: (/**
             * @return {?}
             */
            () => {
                this.getCheckFields().forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    this.form_fields.forEach((/**
                     * @param {?} field
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */
                    (field, index, object) => {
                        if (field.key === item.field.key &&
                            get(field, "templateOptions.isbutintin") != true) {
                            object.splice(index, 1);
                        }
                    }));
                }));
                this.initTableFieldStatus();
            })
        });
    }
    /**
     * @return {?}
     */
    btnMoveUp() {
        this.getCheckFields().forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.index > 0) {
                this.form_fields.splice(item.index, 1);
                this.form_fields.splice(item.index - 1, 0, item.field);
            }
        }));
    }
    /**
     * @return {?}
     */
    btnMoveDown() {
        this.getCheckFields()
            .reverse()
            .forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.index < this.form_fields.length - 1) {
                this.form_fields.splice(item.index, 1);
                this.form_fields.splice(item.index + 1, 0, item.field);
            }
        }));
    }
    /**
     * @return {?}
     */
    btnAddFields() {
        this.selectTableFields();
    }
    /**
     * @return {?}
     */
    btnAddRemark() {
        this.vxTransferService.transferLabelToForm(this.form_fields, this.getCheckFields());
    }
    /**
     * @return {?}
     */
    btnAddLine() {
        this.vxTransferService.transferLineToForm(this.form_fields, this.getCheckFields());
    }
    /**
     * @return {?}
     */
    btnAddGroup() {
        /** @type {?} */
        let tablecode = this.getTableMultipleCode();
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
            (item) => {
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
                (instance, modal) => {
                    modal.destroy();
                    this.vxTransferService.transferGroupToForm(this.form_fields, this.getCheckFields(), instance.radioValue);
                    this.initTableFieldStatus();
                }));
            }
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    btnColumn(type) {
        this.vxFormInfo.column = `layout-column-${type}`;
        this.layout_column = this.vxFormInfo.column;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    btnRow(type) {
        this.vxFormInfo.row = `layout-row-${type}`;
        this.layout_row = this.vxFormInfo.row;
    }
    /**
     * @return {?}
     */
    getCheckFields() {
        /** @type {?} */
        let checkedField = [];
        this.form_fields.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            if (item.checked) {
                checkedField.push({ index: index, field: item });
            }
        }));
        return checkedField;
    }
    /*按钮区域---end*/
    /**
     * @param {?} groupField
     * @param {?} type
     * @return {?}
     */
    groupBtnMoveUpOrDown(groupField, type) {
        if (!get(groupField, "fieldArray.fieldGroup") ||
            get(groupField, "fieldArray.fieldGroup").length < 1) {
            groupField.fieldArray = {
                fieldGroup: []
            };
        }
        /** @type {?} */
        let res = this.vxTransferService.groupFieldMoveUpOrDown(this.form_fields, groupField, type);
        if (res != null) {
            this.form_fields = res;
            if (groupField.key !== null && groupField.key !== undefined) {
                this.form_model[groupField.key] = [{}];
            }
        }
    }
    /**
     * @param {?} groupField
     * @param {?} type
     * @return {?}
     */
    groupBtnAddLineRemark(groupField, type) {
        if (!get(groupField, "fieldArray.fieldGroup") ||
            get(groupField, "fieldArray.fieldGroup").length < 1) {
            groupField.fieldArray = {
                fieldGroup: []
            };
        }
        /** @type {?} */
        let res = null;
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
    }
    /**
     * @param {?} groupField
     * @return {?}
     */
    groupBtnTableFields(groupField) {
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
        (instance, modal) => {
            modal.destroy();
            /** @type {?} */
            let res = this.vxTransferService.groupTransferSelectFieldToForm(this.form_fields, groupField, this.getCheckFields(), this.business_tables, instance.mapOfCheckedId);
            if (res != null) {
                this.form_fields = res;
                if (groupField.key !== null && groupField.key !== undefined) {
                    this.form_model[groupField.key] = [{}];
                }
            }
            this.initTableFieldStatus();
        }));
    }
    /**
     * @param {?} groupField
     * @return {?}
     */
    groupBtnDeleteFields(groupField) {
        if (!get(groupField, "fieldArray.fieldGroup") ||
            get(groupField, "fieldArray.fieldGroup").length < 1) {
            return;
        }
        /** @type {?} */
        let res = this.vxTransferService.groupTransferDeleteForm(this.form_fields, groupField);
        if (res != null) {
            this.form_fields = res;
            if (groupField.key !== null && groupField.key !== undefined) {
                this.form_model[groupField.key] = [{}];
            }
        }
        this.initTableFieldStatus();
    }
    /**
     * @return {?}
     */
    initTablesInfo() {
        this.business_tables;
        this.dataService
            .getBusinessTables(this.api.tables.url, { formcode: this.formCode })
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res != null) {
                this.business_tables = res;
                this.initFormInfo();
            }
        }));
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
            this.vxFormInfo = {
                code: res.code,
                name: res.name,
                type: res.type,
                fields: res.fields
            };
            if (this.vxFormInfo.fields !== null &&
                this.vxFormInfo.fields !== undefined) {
                this.vxFormCommonService.initFormFieldModel(this.vxFormInfo.fields, this.form_model);
                this.form_fields = this.vxFormInfo.fields;
            }
            if (res.column != undefined && res.column != null && res.column != "") {
                this.vxFormInfo.column = res.column;
            }
            else {
                this.vxFormInfo.column = "layout-column-3";
            }
            if (res.row != undefined && res.row != null && res.row != "") {
                this.vxFormInfo.row = res.row;
            }
            else {
                this.vxFormInfo.row = "layout-row-1";
            }
            if (this.vxFormInfo.column != undefined &&
                this.vxFormInfo.column != null &&
                this.vxFormInfo.row != undefined &&
                this.vxFormInfo.row != null) {
                this.layout_column = this.vxFormInfo.column;
                this.layout_row = this.vxFormInfo.row;
                //debugger
                this.vxDesginToFormService.initFormFieldByTables(this.business_tables, this.form_fields);
                this.initTableFieldStatus();
            }
        }));
    }
    /**
     * @return {?}
     */
    initTableFieldStatus() {
        this.vxDesginToFormService.initTableStatus(this.business_tables, this.form_fields);
        this.initTablesData();
    }
    /**
     * @return {?}
     */
    initTablesData() {
        this.table_Data = [];
        /** @type {?} */
        let business = clone(this.business_tables);
        /** @type {?} */
        let tables = [];
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
                (item) => {
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
                (item) => {
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
    }
    //表单选择
    /**
     * @return {?}
     */
    selectTableFields() {
        this.vxDialogService.CreateModelDialog({
            nzTitle: "编辑",
            size: "large",
            nzContent: VXFormDesignTable
        }, { businessTable: this.business_tables, tableType: "single" }, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        (instance, modal) => {
            modal.destroy();
            this.vxTransferService.transferSelectFieldToForm(this.form_fields, this.getCheckFields(), this.business_tables, instance.mapOfCheckedId);
            console.log(JSON.stringify(this.form_fields));
            this.initTableFieldStatus();
        }));
    }
    /**
     * @return {?}
     */
    getTableMultipleCode() {
        /** @type {?} */
        let resTableCode = "";
        if (this.business_tables &&
            this.business_tables.child &&
            this.business_tables.child.multiple &&
            this.business_tables.child.multiple.length > 0) {
            this.business_tables.child.multiple.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.tablequote !== true && resTableCode == "") {
                    resTableCode = item.tablecode;
                }
            }));
        }
        return resTableCode;
    }
    //修改Field
    /**
     * @param {?} field
     * @return {?}
     */
    editFormFieldConfig(field) {
        /** @type {?} */
        let content;
        /** @type {?} */
        let title = "";
        if (field.type === "html") {
            title = "编辑片段文本描述";
            content = VXFormDesignFieldLabel;
        }
        else {
            title = "编辑字段 - " + get(field, "templateOptions.label");
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
        (instance, modal) => {
            if (instance.checkSave()) {
                /** @type {?} */
                let result = this.vxTransferService.editFormFieldInfo(this.form_fields, instance.formField);
                if (result != null) {
                    this.form_fields = result.formFileds;
                    if (result.groupKey != null && result.groupKey != "") {
                        this.form_model[result.groupKey] = [{}];
                    }
                }
                modal.destroy();
            }
        }));
    }
    //删除Field
    /**
     * @param {?} field
     * @return {?}
     */
    deleteFormFieldConfig(field) {
        /** @type {?} */
        let result = this.vxTransferService.deleteFormFieldInfo(this.form_fields, field);
        if (result != null) {
            this.form_fields = result.formFileds;
            if (result.groupKey != null && result.groupKey != "") {
                this.form_model[result.groupKey] = [{}];
            }
            this.initTableFieldStatus();
        }
    }
}
VXFormDesignDetail.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-detail",
                template: "<div class=\"design\">\r\n    <div class=\"layout\">\r\n        <div class=\"layout-column\">\r\n            <div class=\"title\">\r\n                \u9009\u62E9\u5E03\u5C40\u6837\u5F0F\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnColumn(3)\">\r\n                    <div [class]=\"layout_column==='layout-column-3'?'select':''\"><i class=\" icon-threeL\">\r\n                        </i></div>\r\n                    <span>\u4E09\u5217</span>\r\n                </li>\r\n                <li (click)=\"btnColumn(2)\">\r\n                    <div [class]=\"layout_column==='layout-column-2'?'select':''\"><i class=\" icon-towL\"></i>\r\n                    </div>\r\n                    <span>\u4FE9\u5217</span>\r\n                </li>\r\n                <li (click)=\"btnColumn(1)\">\r\n                    <div [class]=\"layout_column==='layout-column-1'?'select':''\">\r\n                        <i class=\"icon-oneL\"></i></div>\r\n                    <span>\u4E00\u5217</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"layout-row\">\r\n            <div class=\"title\">\r\n                \u9009\u62E9\u8868\u5355\u6837\u5F0F\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnRow(1)\">\r\n                    <div [class]=\"layout_row==='layout-row-1'?'select':''\"></div>\r\n                    <span>\u6C34\u5E73</span>\r\n                </li>\r\n                <li (click)=\"btnRow(2)\">\r\n                    <div [class]=\"layout_row==='layout-row-2'?'select':''\"></div>\r\n                    <span>\u5782\u76F4</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"layout-el\">\r\n            <div class=\"title\">\r\n                \u8868\u5355\u7F16\u8F91\r\n            </div>\r\n            <ul>\r\n                <li (click)=\"btnAddFields()\"><i class=\"icon-TianJiaZiDuan\"></i>\u6DFB\u52A0\u5B57\u6BB5</li>\r\n                <li (click)=\"btnAddRemark()\"><i class=\"icon-other-WenBen\"></i>\u6DFB\u52A0\u6587\u672C</li>\r\n                <li (click)=\"btnAddLine()\"><i class=\"icon-FenGeXian\"></i>\u6DFB\u52A0\u5206\u5272\u7EBF</li>\r\n                <li (click)=\"btnAddGroup()\"><i class=\"icon-DuoJiLuQu\"></i>\u6DFB\u52A0\u591A\u8BB0\u5F55\u533A</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"panel\">\r\n        <div class=\"vxbutton\">\r\n            <div> \r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"btnSave()\">\u4FDD\u5B58</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"btnPreview()\"><i\r\n                    class=\"icon-fwb-yulan\"></i>\u9884\u89C8</button>\r\n            </div>\r\n            <div>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnDelete()\"><i\r\n                        class=\"icon-N_delete2\"></i>\u5220\u9664</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnMoveUp()\"><i\r\n                        class=\"icon-ShangYi\"></i>\u4E0A\u79FB</button>\r\n                <button nz-button nzType=\"primary\" nzSize=\"small\" nzGhost (click)=\"btnMoveDown()\"><i\r\n                        class=\"icon-XiaYi\"></i>\u4E0B\u79FB</button>\r\n                </div>\r\n        </div>\r\n        <div class=\"vxform scrollbar\">\r\n            <form [formGroup]=\"form_group\" [class]=\"vxFormInfo?.column +' '+ vxFormInfo?.row\" nz-form>\r\n                <vxform [fields]=\"form_fields\" [status]=\"1\" [form]=\"form_group\" [model]=\"form_model\">\r\n                </vxform>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <vxform-drawer [(ngModel)]=\"table_Data\"></vxform-drawer> -->",
                providers: [DataService, VXAntCommonService, VXTransferService],
                styles: [":host ::ng-deep{width:100%;display:flex;height:100%;background-color:#f3f3f3}:host ::ng-deep .ant-input[disabled]{color:rgba(0,0,0,.25);background-color:#f3f3f3;cursor:not-allowed;opacity:1;border:0}:host ::ng-deep .design{display:flex;flex:1}:host ::ng-deep .design .layout{float:left;width:240px;background-color:#fff;padding:15px 20px 0}:host ::ng-deep .design .layout .title{font-size:14px;color:#9b9b9b;margin-bottom:10px}:host ::ng-deep .design .layout ul{list-style:none;margin:0;padding:0}:host ::ng-deep .design .layout ul li{margin:0;padding:0;cursor:pointer}:host ::ng-deep .design .layout-column ul{display:inline-block;width:100%}:host ::ng-deep .design .layout-column ul li{float:left;text-align:center}:host ::ng-deep .design .layout-column ul li div{width:56px;height:56px;line-height:63px;border-radius:4px;background-color:#ececec;margin-bottom:5px}:host ::ng-deep .design .layout-column ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .design .layout-column ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .design .layout-column ul li:nth-child(1),:host ::ng-deep .design .layout-column ul li:nth-child(2){margin:0 15px 0 0}:host ::ng-deep .design .layout-row ul{display:inline-block;width:100%}:host ::ng-deep .design .layout-row ul li{float:left;text-align:center}:host ::ng-deep .design .layout-row ul li div{width:90px;height:32px;line-height:32px;border-radius:4px;background-color:#ececec;margin-bottom:5px;cursor:pointer}:host ::ng-deep .design .layout-row ul li div i{color:#bfbfbf;font-size:24px}:host ::ng-deep .design .layout-row ul li div span{width:100%;display:inline-block;color:#323232}:host ::ng-deep .design .layout-row ul li:nth-child(1){margin:0 15px 0 0}:host ::ng-deep .design .layout-el li{width:200px;height:33px;line-height:33px;border-radius:4px;border:1px solid #dcdce0;background-color:#fff;margin:0 0 10px!important;font-size:13px;color:#323232}:host ::ng-deep .design .layout-el li i{margin:0 8px;font-size:14px;color:#bfbfbf}:host ::ng-deep .design .layout-el li:hover{background-color:#71a9ff;cursor:pointer;color:#fff}:host ::ng-deep .design .layout-el li:hover i{color:#fff}:host ::ng-deep .design .panel{flex:1;float:left;margin:0 0 0 20px;padding:0;display:flex;flex-direction:column;border-radius:4px;border:1px solid #dcdce0;background-color:#fff}:host ::ng-deep .design .panel .vxbutton{padding:10px;width:100%;text-align:right;border-bottom:1px solid #d9d9d9;font-size:13px;display:flex}:host ::ng-deep .design .panel .vxbutton button{margin:0 6px 0 0;font-size:12px}:host ::ng-deep .design .panel .vxbutton button i{margin:0 5px 0 0;font-size:14px}:host ::ng-deep .design .panel .vxbutton div{flex:1;float:left}:host ::ng-deep .design .panel .vxbutton div:nth-child(1){text-align:left}:host ::ng-deep .design .panel .vxbutton div:nth-child(2){text-align:right}:host ::ng-deep .design .panel .vxform{width:100%;height:100%;display:inline-block;margin:0;padding:20px;overflow-y:auto}:host ::ng-deep .design .panel .vxform vxfield-checkbox,:host ::ng-deep .design .panel .vxform vxfield-datetime,:host ::ng-deep .design .panel .vxform vxfield-html,:host ::ng-deep .design .panel .vxform vxfield-image,:host ::ng-deep .design .panel .vxform vxfield-line,:host ::ng-deep .design .panel .vxform vxfield-lookup,:host ::ng-deep .design .panel .vxform vxfield-number,:host ::ng-deep .design .panel .vxform vxfield-password,:host ::ng-deep .design .panel .vxform vxfield-radio,:host ::ng-deep .design .panel .vxform vxfield-select,:host ::ng-deep .design .panel .vxform vxfield-text,:host ::ng-deep .design .panel .vxform vxfield-textarea,:host ::ng-deep .design .panel .vxform vxfield-texti18n,:host ::ng-deep .design .panel .vxform vxfield-upload,:host ::ng-deep .design .panel .vxform vxfield-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat{display:flex;width:100%}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational{display:flex;width:560px;margin:0 0 10px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldcheckbox,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldcheckbox{width:50px;font-size:13px;line-height:17px;color:#323232;text-align:right;vertical-align:middle;float:left;box-sizing:border-box;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-grid-row-align:center;align-self:center;margin:0 10px 0 0}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl{flex:1;display:flex;align-self:center;position:relative}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label{width:120px;font-size:13px;line-height:17px;color:#323232;text-align:right;vertical-align:middle;float:left;box-sizing:border-box;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-ms-grid-row-align:center;align-self:center}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label span,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label span{color:red;margin-right:3px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .label::after,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .label::after{content:\"\uFF1A\"}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control{flex:1;padding:10px 10px 10px 0}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .control .ant-radio-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-checkbox-group,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-checkbox-wrapper,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-radio-group,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .control .ant-radio-wrapper{height:32px;line-height:32px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton{display:none;border-radius:2px;border:1px solid #ffca5e;background-color:rgba(255,202,94,.2);background-size:cover;width:100%;position:absolute;height:100%;text-align:right}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton button:active,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton button:active{border:0!important;--antd-wave-shadow-color:none!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit{background-color:#ffb15e!important;font-size:13px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;margin-right:-12px;height:26px;line-height:26px;padding:1px 15px;position:relative;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit i,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit i{font-size:14px;margin-right:5px}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnEdit:hover,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnEdit:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnDel,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnDel{background-color:#fc8e8c!important;font-size:13px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;height:26px;line-height:25px;width:26px;margin-right:-2px;position:relative;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl .fieldButton .btnDel:hover,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl .fieldButton .btnDel:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxfield-checkbox .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-datetime .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-image .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-lookup .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-number .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-password .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-radio .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-select .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-text .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-texti18n .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxfield-wrapper .fieldOperational .fieldControl:hover .fieldButton,:host ::ng-deep .design .panel .vxform vxform-repeat .fieldOperational .fieldControl:hover .fieldButton{display:block}:host ::ng-deep .design .panel .vxform vxfield-html .fieldControl .control{padding:15px 10px!important}:host ::ng-deep .design .panel .vxform vxfield-html .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-line .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform vxfield-upload .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform vxform-repeat{display:flex;flex:1;flex-direction:column;margin:0 0 20px}:host ::ng-deep .design .panel .vxform vxform-repeat>.fieldOperational{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat vxfield{display:flex;width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-checkbox,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-datetime,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-html,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-image,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-lookup,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-number,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-password,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-radio,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-select,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-text,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-textarea,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-texti18n,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-upload,:host ::ng-deep .design .panel .vxform vxform-repeat vxfield vxfield-wrapper{display:flex;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .fieldcheckbox{width:30px!important}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl{border-radius:2px;border:1px solid #ffca5e;background-color:#fff;flex-direction:column;width:100%;margin-left:20px}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header{border-bottom:1px solid #ffca5e;display:flex}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul{list-style:none;margin:0;padding:0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul li{float:left;margin:0 15px 0 0;font-size:12px;color:#323232;cursor:pointer;display:inline-block;line-height:36px;height:38px}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header ul li i{color:#ffca5e;margin:0 5px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left{float:left;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left ul{float:left}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .left ul li:nth-child(1){width:30px;text-align:right}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right{float:left;flex:1}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul{float:right}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1){margin:0;width:35px;padding:1px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1) .btnDel{display:none;background-color:#fc8e8c!important;font-size:13px;height:26px;line-height:25px;width:26px;margin-right:-10px;border:0;border-radius:2px;cursor:pointer;color:#fff}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-header .right ul li:nth-last-child(1) .btnDel:hover{border:0!important;color:#fff!important}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body{min-height:50px;padding:20px 20px 0 0}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body .panel-vxform-group{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body vxform-group{width:100%}:host ::ng-deep .design .panel .vxform vxform-repeat .reportControl .report-body vxform-group .fieldOperational{width:560px}:host ::ng-deep .design .panel .vxform vxform-repeat:hover .report-header .btnDel{display:block!important;margin-top:5px}:host ::ng-deep .design .panel .vxform hr{border:0;border-top:1px solid #d9d9d9;margin:16px}:host ::ng-deep .design .panel .vxform .panel-html,:host ::ng-deep .design .panel .vxform .panel-line,:host ::ng-deep .design .panel .vxform .panel-repeat,:host ::ng-deep .design .panel .vxform .panel-textarea,:host ::ng-deep .design .panel .vxform .panel-upload{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-1 .fieldOperational{width:560px!important}:host ::ng-deep .design .panel .vxform .layout-column-1 vxform-repeat>.fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-label .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-template .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-textarea .fieldOperational,:host ::ng-deep .design .panel .vxform .layout-column-1 vxfield-upload .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-2 vxform-field{float:left;width:50%}:host ::ng-deep .design .panel .vxform .layout-column-2 vxform-repeat vxform-field{float:left;width:50%}:host ::ng-deep .design .panel .vxform .layout-column-2 .fieldOperational{width:100%!important}:host ::ng-deep .design .panel .vxform .layout-column-3 vxform-field{float:left;width:33.33333%}:host ::ng-deep .design .panel .vxform .layout-column-3 vxform-repeat vxform-field{float:left;width:33.33333%}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl{flex-direction:column!important;-ms-grid-row-align:none!important;align-self:none!important}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .label{float:left!important;text-align:left!important;flex:1!important;width:100%!important;padding:10px 10px 0}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .control{padding:15px 10px!important}:host ::ng-deep .design .panel .vxform .layout-row-2 .fieldControl .control hr{margin:20px 0 15px!important}:host ::ng-deep .design .panel .vxform .layout-row-2 vxfield-label .control{padding:15px 10px!important}:host ::ng-deep .design .scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .design .scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .design .scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .design .scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}"]
            }] }
];
/** @nocollapse */
VXFormDesignDetail.ctorParameters = () => [
    { type: NzMessageService },
    { type: NzModalService$1 },
    { type: VXFormAntService },
    { type: VXDialogService },
    { type: DataService },
    { type: VXAntCommonService },
    { type: VXTransferService },
    { type: VXDesginToFormService },
    { type: VXFormCommonService }
];
VXFormDesignDetail.propDecorators = {
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
class VXFormDrawerComponent {
    constructor() {
        this.visible = false;
        this.tableData = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //this.initTableData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    close() {
        this.visible = false;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.visible = !this.visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value != undefined && value != null) {
            this.tableData = value;
        }
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
VXFormDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: "vxform-drawer",
                template: "<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" (nzOnClose)=\"close()\" [nzWidth]=\"300\"\r\n  nzWrapClassName=\"vxformDesign-drawer\">\r\n\r\n  <nz-collapse [nzBordered]=\"false\">\r\n    <ng-container *ngFor=\"let table of tableData;let i=index;\">\r\n      <nz-collapse-panel [nzHeader]=\"table.tablelabel+'-'+table.tablename\" [nzActive]=\"i==0\">\r\n        <ul>\r\n          <li *ngFor=\"let field of table.tablefields\">\r\n            <span><i *ngIf=\"field?.fieldquote\" class=\"icon-KT-Time\"></i></span>\r\n            <span>{{field.fieldname}}</span>\r\n            <span *ngIf=\"field.allownull===false\">*</span>\r\n          </li>\r\n        </ul>\r\n      </nz-collapse-panel>\r\n    </ng-container>\r\n  </nz-collapse>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': visible }\" (click)=\"toggle()\">\r\n\r\n</div>",
                host: {
                    "[class.setting-drawer]": "true"
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => VXFormDrawerComponent)),
                        // replace name as appropriate
                        multi: true
                    }
                ],
                styles: [":host ::ng-deep .setting-drawer__handle{position:fixed;bottom:150px;right:0;z-index:999;display:flex;align-items:center;justify-content:center;font-size:16px;text-align:center;border-radius:4px 0 0 4px;cursor:pointer;transition:right .1s cubic-bezier(.8,0,.5,.4);pointer-events:auto;width:28px;height:48px;background-color:rgba(0,0,0,.5)}:host ::ng-deep .setting-drawer__handle-opened{right:300px;z-index:1001}"]
            }] }
];
/** @nocollapse */
VXFormDrawerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormPrivateTree {
    constructor() {
        //是否显示Tag
        this.tag = true;
        //单选？多选
        this.selectType = "single";
        this.expandAll = true;
        //选中节点
        this.selectData = [];
        //树数据
        this.data = [];
        this.treeChangeEvent = new EventEmitter();
        this.selectedKey = [];
        //选择节点
        this.selectedNode = [];
        this.skeletonStatus = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectData) {
            this.treeChecked(this.selectData);
        }
        if (changes.data) {
            //setTimeout(() => {
            this.skeletonStatus = 1;
            //}, 100);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzClick(event) {
        if (this.selectType != "multiple") {
            this.selectData.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
                if (item != undefined &&
                    item != null &&
                    item.value != undefined &&
                    item.value != null &&
                    event != undefined &&
                    event != null &&
                    event.node != undefined &&
                    event.node != null &&
                    event.node.key != undefined &&
                    event.node.key != null &&
                    event.node.title != undefined &&
                    event.node.title != null &&
                    item.value !== event.node.key) {
                    object.splice(index, 1);
                }
            }));
            if (this.selectData.length < 1) {
                if (event != undefined &&
                    event != null &&
                    event.node != undefined &&
                    event.node != null &&
                    event.node.key != undefined &&
                    event.node.key != null &&
                    event.node.title != undefined &&
                    event.node.title != null) {
                    this.selectData.push({
                        label: event.node.title,
                        value: event.node.key
                    });
                }
            }
            this.treeChangeEvent.emit({ checkData: this.selectData });
        }
    }
    //点击复选框触发
    /**
     * @param {?} event
     * @return {?}
     */
    nzCheck(event) {
        if (event != undefined &&
            event != null &&
            event.keys != undefined &&
            event.keys != null &&
            event.node != undefined &&
            event.node != null &&
            event.node.key != undefined &&
            event.node.key != null &&
            event.node.title != undefined &&
            event.node.title != null) {
            /** @type {?} */
            let isAdd = event.keys.some((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                return key === get(event, "node.key");
            }));
            if (isAdd == true) {
                this.selectData.push({
                    label: event.node.title,
                    value: event.node.key
                });
            }
            else {
                this.selectData.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                (item, index, object) => {
                    if (item.value === get(event, "node.key")) {
                        object.splice(index, 1);
                    }
                }));
            }
        }
        this.treeChecked(this.selectData);
        this.treeChangeEvent.emit({ checkData: this.selectData });
    }
    //重置选中节点
    /**
     * @param {?} items
     * @return {?}
     */
    treeChecked(items) {
        if (items != null && items.length > 0) {
            this.selectedKey = items.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.value;
            }));
        }
        else {
            this.selectedKey = [];
        }
    }
    //删除选中节点
    /**
     * @param {?} node
     * @return {?}
     */
    selectClearById(node) {
        this.selectData.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.value === node) {
                object.splice(index, 1);
            }
        }));
        this.treeChecked(this.selectData);
        this.treeChangeEvent.emit({ checkData: this.selectData, delete: node });
    }
    /**
     * @return {?}
     */
    selectAllClear() {
        //this.selectData =[];
    }
}
VXFormPrivateTree.decorators = [
    { type: Component, args: [{
                selector: "vxform-private-tree",
                template: " \r\n    <ul class=\"component-tree\">\r\n        <li class=\"tree-item vxform-scrollbar \">\r\n \r\n            <nz-tree #nzTreeComponent [nzData]=\"data\" (nzClick)=\"nzClick($event)\" (nzCheckBoxChange)=\"nzCheck($event)\" [nzCheckable]=\"selectType==='multiple'\" [nzSelectedKeys]=\"selectedKey\" [nzCheckedKeys]=\"selectedKey\" [nzExpandAll]=\"expandAll\" [nzCheckStrictly]=\"true\">\r\n            </nz-tree>\r\n        </li>\r\n        <li class=\"tree-tag vxform-scrollbar \" *ngIf=\"tag\">\r\n            <div class=\"tag-header\">\r\n                <label>\u5DF2\u9009<span>{{selectData.length}}</span>\u4EBA</label>\r\n                <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n            </div>\r\n            <div class=\"tag-content\">\r\n                <ng-container *ngFor=\"let item of selectData\">\r\n                    <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.value)\">{{item.label}}</nz-tag>\r\n                </ng-container>\r\n            </div>\r\n        </li>\r\n    </ul> ",
                styles: [":host ::ng-deep .vxform-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep vx-skeleton{height:100%}:host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}:host ::ng-deep .component-tree{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;height:100%}:host ::ng-deep .component-tree .ant-tree-node-content-wrapper{font-size:12px!important;display:inline-block!important;padding:0 5px 0 0!important;min-width:200px!important}:host ::ng-deep .component-tree .ant-tree-node-selected{background-color:#f6f7fb!important}:host ::ng-deep .component-tree .tree-item{flex:1;border:0 solid #f6f7fb;padding:8px 5px 5px 10px;overflow-y:auto}:host ::ng-deep .component-tree .tree-tag{overflow-y:auto;width:330px;background-color:#f6f7fb;padding:15px}:host ::ng-deep .component-tree .tree-tag .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .component-tree .tree-tag .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .component-tree .tree-tag .tag-header label:nth-last-child(1){float:right;font-weight:400;color:#6375da;cursor:pointer}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag i{color:#6375da;font-weight:700}"]
            }] }
];
/** @nocollapse */
VXFormPrivateTree.ctorParameters = () => [];
VXFormPrivateTree.propDecorators = {
    tag: [{ type: Input }],
    selectType: [{ type: Input }],
    expandAll: [{ type: Input }],
    selectData: [{ type: Input }],
    data: [{ type: Input }],
    treeChangeEvent: [{ type: Output }],
    nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormPrivateTable {
    constructor() {
        //tableId
        this.id = "";
        //是否要多选
        this.check = false;
        //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
        this.action = 0;
        //按钮列表
        this.buttonlist = [];
        //选中事件
        this.checkChangeEvent = new EventEmitter();
        //翻页事件
        this.pageIndexEvent = new EventEmitter();
        //排序事件
        this.orderChangeEvent = new EventEmitter();
        //过滤事件
        this.filterChangeEvent = new EventEmitter();
        //操作事件
        this.buttonAction = new EventEmitter();
        this.checkIds = [];
        this._headerData = [];
        this.isAllChecked = false;
        this.isIndeterminate = false;
        this.listData = [];
        this.listDataCheckedId = {};
        this.listDataSelectedList = [];
        this.query = {
            total: 0,
            pageIndex: 1,
            pageSize: 15,
            sortName: "",
            sortValue: "",
            keyWord: ""
        };
        this.tableScroll = {
            y: '332px'
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tableIndex(value) {
        this.query.pageIndex = value;
    }
    /**
     * @return {?}
     */
    get tableIndex() {
        return this.query.pageIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tableSize(value) {
        this.query.pageSize = value;
    }
    /**
     * @return {?}
     */
    get tableSize() {
        return this.query.pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tableTotal(value) {
        this.query.total = value;
    }
    /**
     * @return {?}
     */
    get tableTotal() {
        return this.query.total;
    }
    //table 头部信息
    /**
     * @param {?} value
     * @return {?}
     */
    set header(value) {
        if (value != null && value.length > 0) {
            value.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.prop = item.key;
                if (item.checkboxable) {
                    item.name = "";
                    item.width = 50;
                    item.canAutoResize = false;
                    item.resizeable = false;
                    item.frozenLeft = true;
                    item.checkboxable = true;
                    item.headerCheckboxable = true;
                }
                if (item.action) {
                    item.frozenRight = true;
                    item.canAutoResize = false;
                    item.resizeable = false;
                }
                this._headerData.push(item);
            }));
        }
    }
    /**
     * @return {?}
     */
    get header() {
        return this._headerData;
    }
    //table 行数据
    /**
     * @param {?} value
     * @return {?}
     */
    set body(value) {
        this.listData = value;
        if (this.listData == null || this.listData.length == 0) {
            this.tableScroll.y = "0px";
        }
        else {
            this.tableScroll.y = "332px";
        }
    }
    //默认选中Id
    /**
     * @param {?} value
     * @return {?}
     */
    set checkid(value) {
        this.listDataSelectedList = [];
        if (value != null && value.length > 0) {
            value.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.listDataCheckedId[item.id] = true;
                this.listDataSelectedList.push(item);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    //全选|全不选
    /**
     * @param {?} value
     * @return {?}
     */
    setCheckAll(value) {
        this.listData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (this.listDataCheckedId[item.id] = value)));
        this.setCheckStatus();
    }
    //设置某个选择|取消选中
    /**
     * @return {?}
     */
    setCheckStatus() {
        this.isAllChecked = this.listData.every((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listDataCheckedId[item.id]));
        this.isIndeterminate = this.listData.some((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listDataCheckedId[item.id])) && !this.isAllChecked;
        this.saveSelected();
    }
    //点击查询
    /**
     * @return {?}
     */
    queryChange() {
        this.pageIndexEvent.emit(this.query);
    }
    //点击翻页
    /**
     * @param {?} e
     * @return {?}
     */
    pageIndexChange(e) {
        this.query.pageIndex = e;
        this.pageIndexEvent.emit(this.query);
    }
    //点击排序
    /**
     * @param {?} sort
     * @return {?}
     */
    tableSort(sort) {
        this.query.sortName = sort.key;
        this.query.sortValue = sort.value;
        this.orderChangeEvent.emit(this.query);
    }
    //单击选中
    /**
     * @param {?} event
     * @return {?}
     */
    itemSelectChange(event) {
        this.listDataSelectedList.shift();
        this.listDataSelectedList.push({
            "id": event.id,
            "name": event.name
        });
        this.checkChangeEvent.emit(this.listDataSelectedList);
    }
    //保存选中
    /**
     * @return {?}
     */
    saveSelected() {
        Object.keys(this.listDataCheckedId).forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            /** @type {?} */
            let value = this.listDataCheckedId[id];
            if (value) {
                if (!this.listDataSelectedList.some((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => { return item.id == id; }))) {
                    this.listData.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */
                    (item, index, object) => {
                        if (item.id == id) {
                            this.listDataSelectedList.push({
                                id: item.id,
                                name: item.name
                            });
                        }
                    }));
                }
            }
            else {
                this.listDataSelectedList.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                (item, index, object) => {
                    if (item.id == id) {
                        object.splice(index, 1);
                    }
                }));
            }
        }));
        this.checkChangeEvent.emit(this.listDataSelectedList);
    }
    /**
     * @return {?}
     */
    selectAllClear() {
        this.isAllChecked = false;
        this.isIndeterminate = false;
        this.listDataCheckedId = {};
        this.listDataSelectedList = [];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    selectClearById(id) {
        this.listDataCheckedId[id] = false;
        this.setCheckStatus();
    }
}
VXFormPrivateTable.decorators = [
    { type: Component, args: [{
                selector: "vxform-private-table",
                template: "<div class=\"vx-form-table\">\r\n    <div class=\"vx-form-table-header\">\r\n        <div class=\"header-button\">\r\n            <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                <input type=\"text\" nz-input placeholder=\"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\" maxlength=\"50\" [(ngModel)]=\"query.keyWord\" />\r\n            </nz-input-group>\r\n            <ng-template #suffixIconButton>\r\n                <button nz-button nzType=\"primary\" nzSearch (click)=\"queryChange()\"><i nz-icon nzType=\"search\"></i></button>\r\n            </ng-template>\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"header-pagination\">\r\n            <nz-pagination [nzTotal]=\"query.total\" [nzPageIndex]=\"query.pageIndex\" [nzPageSize]=\"query.pageSize\" [nzSize]=\"'small'\" (nzPageIndexChange)=\"pageIndexChange($event)\"></nz-pagination>\r\n        </div>\r\n    </div>\r\n    <div class=\"vx-form-table-content\">\r\n        <nz-table [nzFrontPagination]=\"false\" nzShowPagination nzShowSizeChanger #rowSelectionTable [nzData]=\"listData\" [nzScroll]=\"tableScroll\">\r\n            <thead>\r\n                <tr>\r\n                    <ng-container *ngIf=\"check\">\r\n                        <th nzWidth=\"50px\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"isAllChecked\" [nzIndeterminate]=\"isIndeterminate\" (nzCheckedChange)=\"setCheckAll($event)\"></th>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <th [nzWidth]=\"item.width+'px'\">{{item.name}}</th>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action!=0\">\r\n                        <th nzRight=\"0px\" [nzWidth]=\"'100px'\">\u64CD\u4F5C</th>\r\n                    </ng-container>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n                    <ng-container *ngIf=\"check\">\r\n                        <td nzShowCheckbox [(nzChecked)]=\"listDataCheckedId[data.id]\" (nzCheckedChange)=\"setCheckStatus()\"></td>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <td>{{data[item.key]}}</td>\r\n                        </ng-container> \r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action==2\">\r\n                        <td><span class=\"itemSelect\" (click)=\"itemSelectChange(data)\">\u9009\u62E9</span></td>\r\n                    </ng-container>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n    <div class=\"vx-form-table-footer\">\r\n        <div class=\"tag-header\">\r\n            <label>\u5DF2\u9009<span>{{listDataSelectedList.length}}</span></label>\r\n            <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n        </div>\r\n        <div class=\"tag-content vxform-scrollbar \"> \r\n            <ng-container *ngFor=\"let item of listDataSelectedList\">\r\n                <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.id)\">{{item.name}}</nz-tag>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [":host ::ng-deep{width:100%}:host ::ng-deep .vx-form-table{background:#fff;display:flex;flex:1;flex-direction:column}:host ::ng-deep .vx-form-table-header{display:flex;flex-direction:row;padding:10px}:host ::ng-deep .vx-form-table-header .header-button{flex:1}:host ::ng-deep .vx-form-table-header .header-button nz-input-group{width:260px;margin-right:10px}:host ::ng-deep .vx-form-table-header .header-button .ant-input{font-size:12px}:host ::ng-deep .vx-form-table-header .hader-pagination{width:300px}:host ::ng-deep .vx-form-table-content{display:flex;flex-direction:row;flex:1;padding:0 10px}:host ::ng-deep .vx-form-table-content nz-table{flex:1}:host ::ng-deep .vx-form-table-content .ant-table{font-size:12px}:host ::ng-deep .vx-form-table-content .ant-table .ant-table-placeholder{border-bottom:0}:host ::ng-deep .vx-form-table-content .ant-table .ant-empty-normal{margin:115px 0}:host ::ng-deep .vx-form-table-content .ant-table-body{height:332px}:host ::ng-deep .vx-form-table-content .itemSelect{cursor:pointer}:host ::ng-deep .vx-form-table-footer{height:78px;margin:0 10px;padding:10px;background-color:#f6f7fb;display:flex;flex-direction:row}:host ::ng-deep .vx-form-table-footer .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .vx-form-table-footer .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(1){display:inline-block;width:100%}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(2){display:inline-block;width:100%;font-weight:400;color:#6375da;cursor:pointer;margin-top:5px}:host ::ng-deep .vx-form-table-footer .tag-content{flex:1}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag i{color:#6375da;font-weight:700}:host ::ng-deep .vx-form-table .ant-table-wrapper{border:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th{padding:6px 10px;background-color:#fff;border-right:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th:nth-last-child(1){border-right:0!important}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background:#fff}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr td{border:0;padding:6px 10px}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr:nth-child(odd){background-color:#f6f8fd}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:transparent!important;overflow-y:overlay!important}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#999;border-radius:6px;outline:#333 solid 1px}:host ::ng-deep .vx-form-table .ant-table-header{background:#fff;margin-bottom:0!important;overflow:hidden!important}:host ::ng-deep .vx-form-table .table-action{background:red;padding:3px 8px;border-radius:12px;color:#fff;font-size:12px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
VXFormPrivateTable.ctorParameters = () => [];
VXFormPrivateTable.propDecorators = {
    tableIndex: [{ type: Input }],
    tableSize: [{ type: Input }],
    tableTotal: [{ type: Input }],
    id: [{ type: Input }],
    check: [{ type: Input }],
    action: [{ type: Input }],
    header: [{ type: Input }],
    body: [{ type: Input }],
    buttonlist: [{ type: Input }],
    checkid: [{ type: Input }],
    checkChangeEvent: [{ type: Output }],
    pageIndexEvent: [{ type: Output }],
    orderChangeEvent: [{ type: Output }],
    filterChangeEvent: [{ type: Output }],
    buttonAction: [{ type: Output }]
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
    VXFormDesignField,
    VXFormDesignFieldLabel,
    VXFormDesignTable,
    VXFormDesignTables,
    VXFormDrawerComponent,
    VXFormPrivateTree,
    VXFormPrivateTable,
    VXFormTree,
    VXFormEmployee,
    VXFormEmployee,
    VXFormOrg,
    VXFormPostion,
    VXFormArea
];
//公开的
/** @type {?} */
const publicComponent = [
    VXFormDesignDetail,
];
const ɵ0 = zh_CN, ɵ1 = icons;
class VXFormAntModule {
}
VXFormAntModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FIELD_TYPE_COMPONENTS,
                    entryComponent,
                    publicComponent,
                    ReplaceLinePipe
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
                exports: [TranslateModule, publicComponent],
                providers: [
                    { provide: NZ_I18N, useValue: ɵ0 },
                    { provide: NZ_ICONS, useValue: ɵ1 },
                    _HttpClient,
                    VXFormAntService,
                    VXDialogService,
                    VXToFormFieldService,
                    VXDesginToFormService
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

export { VXFormAntModule, VXFormFieldText, VXFormFieldTextI18n, VXFormFieldTextArea, VXFormFieldNumber, VXFormFieldPassWord, VXFormFieldRadio, VXFormFieldRadioGroup, VXFormFieldCheckbox, VXFormFieldCheckboxGroup, VXFormFieldSelect, VXFormFieldDateTime, VXFormFieldImage, VXFormFieldUpload, VXFormFieldLookUp, VXFormFieldHTML, VXFormFieldLine, VXFormWrapperFormField, BOOTSTRAP_VXFORM_CONFIG as ɵd, FIELD_TYPE_COMPONENTS as ɵc, VXFormArea as ɵt, VXFormEmployee as ɵq, VXFormOrg as ɵr, VXFormPostion as ɵs, VXFormPrivateTable as ɵo, VXFormPrivateTree as ɵn, VXFormTree as ɵp, VXFormDesignDetail as ɵu, VXFormDrawerComponent as ɵm, VXFormDesignFieldLabel as ɵh, VXFormDesignField as ɵg, VXFormDesignTable as ɵi, VXFormDesignTables as ɵl, _HttpClient as ɵk, DataService as ɵj, VXDialogService as ɵb, VXFormFieldGroup as ɵe, VXFormFieldRepeat as ɵf, VXAntCommonService as ɵv, VXToFormFieldService as ɵw, ReplaceLinePipe as ɵz, VXFormAntService as ɵa, VXDesginToFormService as ɵy, VXTransferService as ɵx, getFieldPro as ɵba, maxValidationMessage as ɵbf, maxlengthValidationMessage as ɵbd, minValidationMessage as ɵbe, minlengthValidationMessage as ɵbc, requiredValidationMessage as ɵbb, validationConfig as ɵbg };

//# sourceMappingURL=vx-form-ant.js.map