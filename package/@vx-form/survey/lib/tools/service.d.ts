import { EventEmitter } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXFormAntService {
    btnEvent: EventEmitter<any>;
    fieldEvent: EventEmitter<any>;
    questionEvent: EventEmitter<any>;
    optionEvent: EventEmitter<any>;
    dragDropEvent: EventEmitter<any>;
    workList: never[];
    constructor();
    fieldOperational(sign: string, field: VXFormFieldConfig): void;
    groupOperational(type: string, field: VXFormFieldConfig): void;
    questionOperational(sign: string, field: VXFormFieldConfig): void;
    optionOperational(sign: string, option: any, field: VXFormFieldConfig): void;
    dragDropOperational(previousData: any, previousIndex: any, currentIndex: any): void;
}
