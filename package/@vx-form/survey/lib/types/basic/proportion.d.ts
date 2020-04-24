import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyProportion extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    marks: any;
    addOption(): void;
    addOptions(): void;
    deleteOption(option: any): void;
}
