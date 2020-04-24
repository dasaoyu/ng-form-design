import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyMatrixCheckBox extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    getMatrixOption(subtitle: any, option: any): {
        groupid: any;
        optionid: any;
    };
    onChange(values: any[]): void;
    getControlChecked(subtitle: any, option: any): boolean;
    addOption(): void;
    addSubTitle(): void;
    addOptions(): void;
    deleteOption(option: any): void;
}
