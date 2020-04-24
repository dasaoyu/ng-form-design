import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldCheckboxGroup extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
    onChange(values: string[]): void;
    getCheckStatus(option: any): void;
    getControlChecked(values: any, option: any): boolean;
}
export interface ICheckValues {
    value: any;
}
