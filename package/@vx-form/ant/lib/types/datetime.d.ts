import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldDateTime extends FieldType {
    service: any;
    readonly format: string;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
    getText(): string;
}
