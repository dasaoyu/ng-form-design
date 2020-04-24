import { VXFormFieldConfig } from "@vx-form/core";
export declare function getFieldPro(field: VXFormFieldConfig, key: string): any;
export declare function requiredValidationMessage(err: any, field: VXFormFieldConfig): string;
export declare function minlengthValidationMessage(err: any, field: VXFormFieldConfig): string;
export declare function maxlengthValidationMessage(err: any, field: VXFormFieldConfig): string;
export declare function minValidationMessage(err: any, field: VXFormFieldConfig): string;
export declare function maxValidationMessage(err: any, field: VXFormFieldConfig): string;
export declare let validationConfig: {
    validationMessages: ({
        name: string;
        message: typeof requiredValidationMessage;
    } | {
        name: string;
        message: string;
    })[];
    types: {
        name: string;
        extends: string;
    }[];
};
