import { VXFormFieldConfigCache } from "../../components/vxform.field.config";
import { VXFormExtension } from "../../services/vxform.config";
export declare class FieldExpressionExtension implements VXFormExtension {
    prePopulate(field: VXFormFieldConfigCache): void;
    onPopulate(field: VXFormFieldConfigCache): void;
    postPopulate(field: VXFormFieldConfigCache): void;
    private _evalExpression;
    private _checkField;
    private checkFieldExpressionChange;
    private checkFieldVisibilityChange;
    private setDisabledState;
    private toggleFormControl;
}
