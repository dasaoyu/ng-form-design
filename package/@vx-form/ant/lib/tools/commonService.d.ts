import { VXFormFieldConfig } from "@vx-form/core";
import { VXToFormFieldService } from "./formFieldService";
export declare class VXAntCommonService {
    private toFormField;
    constructor(toFormField: VXToFormFieldService);
    private findFieldConfig;
    getFormFieldByGuid(formFieldConfig: VXFormFieldConfig[], guid: string): any;
}
