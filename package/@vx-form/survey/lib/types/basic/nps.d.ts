import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyNPS extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    addOption(): void;
    addOptions(): void;
    deleteOption(option: any): void;
}
