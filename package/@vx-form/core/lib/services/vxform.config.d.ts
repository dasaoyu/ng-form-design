import { InjectionToken, ComponentRef, ComponentFactoryResolver, Injector } from "@angular/core";
import { ValidationErrors, AbstractControl } from "@angular/forms";
import { FieldType } from "./../templates/field.type";
import { VXFormFieldConfig, VXFormFieldConfigCache } from "../components/vxform.field.config";
export declare const VXFORM_CONFIG: InjectionToken<VXFormConfig>;
export interface VXFormExtension {
    prePopulate?(field: VXFormFieldConfig): void;
    onPopulate?(field: VXFormFieldConfig): void;
    postPopulate?(field: VXFormFieldConfig): void;
}
export declare class VXFormConfig {
    types: {
        [name: string]: TypeOption;
    };
    validators: {
        [name: string]: ValidatorOption;
    };
    wrappers: {
        [name: string]: WrapperOption;
    };
    messages: {
        [name: string]: string | ((error: any, field: VXFormFieldConfig) => string);
    };
    templateManipulators: {
        preWrapper: ManipulatorWrapper[];
        postWrapper: ManipulatorWrapper[];
    };
    extras: ConfigOption["extras"];
    extensions: {
        [name: string]: VXFormExtension;
    };
    appConfig: {
        url?: string;
        token?: string;
    };
    addConfig(config: ConfigOption): void;
    setType(options: TypeOption | TypeOption[]): void;
    getType(name: string): TypeOption;
    getMergedField(field?: VXFormFieldConfig): any;
    createComponent(field?: VXFormFieldConfigCache, resolver?: ComponentFactoryResolver, injector?: Injector): ComponentRef<FieldType>;
    setWrapper(options: WrapperOption): void;
    getWrapper(name: string): WrapperOption;
    setTypeWrapper(type: string, name: string): void;
    setValidator(options: ValidatorOption): void;
    getValidator(name: string): ValidatorOption;
    addValidatorMessage(name: string, message: string | ((error: any, field: VXFormFieldConfig) => string)): void;
    getValidatorMessage(name: string): string | ((error: any, field: VXFormFieldConfig) => string);
    setManipulator(manipulator: ManipulatorOption): void;
    setAPPConfig(config: APPConfig): void;
    private mergeExtendedType;
    private getFieldInjector;
}
export interface TypeOption {
    name: string;
    component?: any;
    wrappers?: string[];
    extends?: string;
    defaultOptions?: VXFormFieldConfig;
}
export interface WrapperOption {
    name: string;
    component: any;
    types?: string[];
}
export interface FieldValidatorFn {
    (c: AbstractControl, field: VXFormFieldConfig): ValidationErrors | null;
}
export interface ValidatorOption {
    name: string;
    validation: FieldValidatorFn;
}
export interface ExtensionOption {
    name: string;
    extension: VXFormExtension;
}
export interface ValidationMessageOption {
    name: string;
    message: string | ((error: any, field: VXFormFieldConfig) => string);
}
export interface ManipulatorOption {
    class?: {
        new (): any;
    };
    method?: string;
}
export interface ManipulatorWrapper {
    (f: VXFormFieldConfig): string;
}
export interface TemplateManipulators {
    preWrapper?: ManipulatorWrapper[];
    postWrapper?: ManipulatorWrapper[];
}
export interface ConfigOption {
    types?: TypeOption[];
    wrappers?: WrapperOption[];
    validators?: ValidatorOption[];
    extensions?: ExtensionOption[];
    validationMessages?: ValidationMessageOption[];
    manipulators?: ManipulatorOption[];
    extras?: {
        fieldTransform?: any;
        immutable?: boolean;
        showError?: (field: FieldType) => boolean;
        checkExpressionOn?: "modelChange" | "changeDetectionCheck";
    };
}
export interface APPConfig {
    url?: string;
    token?: string;
}
