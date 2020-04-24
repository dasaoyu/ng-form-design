import { VXFormExtension, VXFormConfig } from "../../services/vxform.config";
import { VXFormFieldConfigCache } from "../../components/vxform.field.config";
export declare class FieldValidationExtension implements VXFormExtension {
    private vxFormConfig;
    constructor(vxFormConfig: VXFormConfig);
    onPopulate(field: VXFormFieldConfigCache): void;
    private initFieldValidation;
    private getPredefinedFieldValidation;
    private wrapNgValidatorFn;
    private handleResult;
}
