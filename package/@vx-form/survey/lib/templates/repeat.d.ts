import { FieldArrayType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldRepeat extends FieldArrayType {
    service: any;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
    groupOperational(type: string): void;
    delete(i: any): void;
}
