import { EventEmitter } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXFormAntService {
    btnEvent: EventEmitter<any>;
    fieldEvent: EventEmitter<any>;
    workList: never[];
    constructor();
    fieldOperational(sign: string, field: VXFormFieldConfig): void;
    groupOperational(type: string, field: VXFormFieldConfig): void;
}
