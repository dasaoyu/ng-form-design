import { AfterViewChecked } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldSelect extends FieldType implements AfterViewChecked {
    service: any;
    defaultValue: string;
    defaultValues: string[];
    selecttype: string;
    constructor(dyService: VXFormAntService);
    ngAfterViewChecked(): void;
    fieldOperational(sign: string): void;
    getSelectText(): string;
}
