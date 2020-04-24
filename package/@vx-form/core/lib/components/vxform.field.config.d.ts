import { FormGroup, AbstractControl, FormGroupDirective, FormArray, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { Subject, Observable } from "rxjs";
import { FieldType } from "../templates/field.type";
import { TemplateManipulators } from "../services/vxform.config";
import { ComponentFactoryResolver, ComponentRef, Injector } from "@angular/core";
export interface VXFormInfo {
    code?: string;
    name?: string;
    type?: string;
    layout?: string;
    column?: string;
    row?: string;
    fields?: VXFormFieldConfig[];
}
export interface VXSurveyInfo {
    code?: string;
    name?: string;
    type?: string;
    first?: any;
    last?: any;
    pages?: VXSurveyPage[];
}
export interface VXSurveyPage {
    code?: string;
    name?: string;
    questions?: VXFormFieldConfig[];
}
export interface VXParameterData {
    label?: string;
    value?: string;
}
export interface VXTableConfig {
    tablecode?: string;
    tablename?: string;
    tablefields?: VXTableFieldConfig[];
    tablequote?: boolean;
}
export interface VXTableFieldConfig {
    tablecode?: string;
    fieldcode?: string;
    fieldname?: string;
    refdatasourcetype?: "" | "directinput" | "refparameters" | "treeparameters" | "systemcontrol" | "referencedata" | "switch";
    datatype?: string;
    selecttype?: "" | "single" | "multiple";
    showtype?: "" | "select" | "radio" | "checkbox";
    allownull?: boolean;
    placeholder?: string;
    maxlength?: number;
    minlength?: number;
    max?: number;
    min?: number;
    precision?: number;
    isdisable?: boolean;
    readonly?: boolean;
    defaultvalue?: any;
    defaulttext?: any;
    parameterid?: string;
    parameterdata?: VXParameterData[];
    treeid?: string;
    controlid?: "" | "employee" | "organizational" | "position" | "area";
    hidden?: boolean;
    fieldquote?: boolean;
    tips?: string;
    isbutintin?: boolean;
    pattern?: string | RegExp;
    attachmentsize?: number;
    attachmentlimit?: number;
    attachmenttype?: string;
    format?: string;
}
export interface VXFormFieldProperty {
    key: string;
    label?: string;
    placeholder?: string;
    tips?: string;
    options?: any[] | Observable<any[]>;
    show?: boolean;
    editor?: boolean;
}
export interface VXAttachment {
    size?: number;
    limit?: number;
    type?: string;
}
export interface VXAttachmentFile {
    uid?: string;
    name?: string;
    url?: string;
}
export interface VXFormFieldConfig {
    readonly model?: any;
    readonly parent?: VXFormFieldConfig;
    readonly options?: VXFormOptions;
    readonly form?: FormGroup;
    tablecode?: string;
    key?: string;
    id?: string;
    name?: string;
    templateOptions?: VXFormTemplateOptions;
    optionsTypes?: string[];
    validation?: {
        messages?: {
            [messageProperties: string]: string | ((error: any, field: VXFormFieldConfig) => string);
        };
        show?: boolean;
        [additionalProperties: string]: any;
    };
    validators?: any;
    asyncValidators?: any;
    template?: string;
    wrappers?: string[];
    hide?: boolean;
    hideExpression?: boolean | string | ((model: any, formState: any, field?: VXFormFieldConfig) => boolean);
    expressionProperties?: {
        [property: string]: string | ((model: any, formState: any, field?: VXFormFieldConfig) => any) | Observable<any>;
    };
    formControl?: AbstractControl;
    className?: string;
    fieldGroupClassName?: string;
    fieldGroup?: VXFormFieldConfig[];
    fieldArray?: VXFormFieldConfig;
    type?: string;
    focus?: boolean;
    modelOptions?: {
        debounce?: {
            default: number;
        };
        updateOn?: "change" | "blur" | "submit";
    };
    hooks?: VXFormLifeCycleOptions<VXFormHookFn>;
    lifecycle?: VXFormLifeCycleOptions;
    defaultValue?: any;
    parsers?: ((value: any) => {})[];
    guid?: string;
    origin?: {
        refdatasourcetype?: string;
        datatype?: string;
    };
    defaultText?: any;
    status?: number;
    checked?: boolean;
    show?: boolean;
    editor?: boolean;
    typeold?: string;
    active?: boolean;
    rownumber?: number;
    setting?: any;
}
export interface ExpressionPropertyCache {
    expression: (model: any, formState: any, field: VXFormFieldConfigCache) => boolean;
    expressionValueSetter: (value: any) => void;
    expressionValue?: any;
}
export interface VXFormFieldConfigCache extends VXFormFieldConfig {
    parent?: VXFormFieldConfigCache;
    options?: VXFormOptionsCache;
    _expressionProperties?: {
        [property: string]: ExpressionPropertyCache;
    };
    _validators?: ValidatorFn;
    _asyncValidators?: AsyncValidatorFn;
    _componentRefs?: ComponentRef<FieldType>[];
    _componentFactory?: {
        type: string;
        component: any;
        componentRef?: ComponentRef<FieldType>;
    };
    _keyPath?: {
        key: string;
        path: string[];
    };
}
export declare type VXFormAttributeEvent = (field: VXFormFieldConfig, event?: any) => void;
export interface VXFormTemplateOptions {
    type?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    options?: any[] | Observable<any[]>;
    rows?: number;
    cols?: number;
    description?: string;
    hidden?: boolean;
    max?: number;
    min?: number;
    minLength?: number;
    maxLength?: number;
    precision?: number;
    pattern?: string | RegExp;
    required?: boolean;
    tabindex?: number;
    readonly?: boolean;
    attributes?: {
        [key: string]: string | number;
    };
    step?: number;
    switchOption?: {
        checked?: string;
        unchecked?: string;
    };
    focus?: VXFormAttributeEvent;
    blur?: VXFormAttributeEvent;
    keyup?: VXFormAttributeEvent;
    keydown?: VXFormAttributeEvent;
    click?: VXFormAttributeEvent;
    change?: VXFormAttributeEvent;
    keypress?: VXFormAttributeEvent;
    templateManipulators?: TemplateManipulators;
    [additionalProperties: string]: any;
    selecttype?: "" | "single" | "multiple";
    parameterid?: string;
    treeid?: string;
    controlid?: string;
    filetype?: string;
    filesize?: string;
    fileaction?: string;
    tips?: string;
    isbutintin?: boolean;
    attachment?: VXAttachment;
    attachmentfile?: VXAttachmentFile[];
    langTips?: any[];
    langPlaceholder?: [];
    format?: string;
}
export interface VXFormLifeCycleFn {
    (form?: FormGroup, field?: VXFormFieldConfig, model?: any, options?: VXFormOptions): void;
}
export interface VXFormHookFn {
    (field?: VXFormFieldConfig): void;
}
export interface VXFormLifeCycleOptions<T = VXFormLifeCycleFn> {
    onInit?: T;
    onChanges?: T;
    doCheck?: T;
    afterContentInit?: T;
    afterContentChecked?: T;
    afterViewInit?: T;
    afterViewChecked?: T;
    onDestroy?: T;
    [additionalProperties: string]: any;
}
export interface VXFormOptionsCache extends VXFormOptions {
    _checkField?: (field: VXFormFieldConfigCache, ignoreCache?: boolean) => void;
    _markForCheck?: (field: VXFormFieldConfigCache) => void;
    _buildForm?: () => void;
    _componentFactoryResolver?: ComponentFactoryResolver;
    _injector?: Injector;
    _hiddenFieldsForCheck?: VXFormFieldConfigCache[];
}
export interface VXFormOptions {
    updateInitialValue?: () => void;
    resetModel?: (model?: any) => void;
    formState?: any;
    fieldChanges?: Subject<VXFormValueChangeEvent>;
    fieldTransform?: (fields: VXFormFieldConfig[], model: any, form: FormGroup | FormArray, options: VXFormOptions) => VXFormFieldConfig[];
    showError?: (field: FieldType) => boolean;
    parentForm?: FormGroupDirective | null;
}
export interface VXFormValueChangeEvent {
    field: VXFormFieldConfig;
    type: string;
    value: any;
}
