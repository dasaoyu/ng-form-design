import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyMatrixScore extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    controlModelChange(value: any, subtitle: any, option: any): void;
    getControlChecked(subtitle: any, option: any): number;
    addOption(): void;
    addSubTitle(): void;
    addOptions(): void;
    deleteOption(option: any): void;
}
