import { VXFormExtension, VXFormConfig } from "../../services/vxform.config";
import { VXFormFieldConfigCache } from "../../components/vxform.field.config";
export declare class CoreExtension implements VXFormExtension {
    private vxFormConfig;
    private formId;
    constructor(vxFormConfig: VXFormConfig);
    prePopulate(field: VXFormFieldConfigCache): void;
    onPopulate(field: VXFormFieldConfigCache): void;
    postPopulate(field: VXFormFieldConfigCache): void;
    private initFieldOptions;
    private initFieldWrappers;
    private getFieldComponentInstance;
}
