import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyDate extends FieldType {
    service: any;
    guid: any;
    readonly format: string;
    constructor(dyService: VXFormAntService);
}
