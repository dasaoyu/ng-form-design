import { VXFormConfig } from "../services/vxform.config";
import { VXFormFieldConfig } from "../components/vxform.field.config";
export declare class VXFormValidationMessage {
    private vxFormConfig;
    field: VXFormFieldConfig;
    constructor(vxFormConfig: VXFormConfig);
    readonly errorMessage: string;
}
