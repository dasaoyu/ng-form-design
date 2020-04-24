import { VXFormExtension } from "../../services/vxform.config";
import { VXFormFieldConfigCache } from "../../components/vxform.field.config";
export declare class FieldFormExtension implements VXFormExtension {
    onPopulate(field: VXFormFieldConfigCache): void;
    postPopulate(field: VXFormFieldConfigCache): void;
    private addFormControl;
    private setValidators;
}
