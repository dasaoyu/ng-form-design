import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyInputGroup extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    controlModelChange(value: any, option: any): void;
    getControlChecked(option: any): null;
    addOption(): void;
    addOptions(): void;
    deleteOption(option: any): void;
}
