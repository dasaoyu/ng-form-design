import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldRadioGroup extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
}
