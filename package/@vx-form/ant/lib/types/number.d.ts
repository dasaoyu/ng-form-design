import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldNumber extends FieldType {
    service: any;
    readonly precision: number;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
}
