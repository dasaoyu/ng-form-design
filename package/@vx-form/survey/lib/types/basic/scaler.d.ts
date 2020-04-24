import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export declare class VXSurveyScaler extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    readonly scalerData: any[];
}
