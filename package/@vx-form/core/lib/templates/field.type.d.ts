import { FormGroup } from "@angular/forms";
import { VXFormFieldConfig } from "../components/vxform.field.config";
export declare abstract class FieldType<F extends VXFormFieldConfig = VXFormFieldConfig> {
    field: F;
    defaultOptions?: F;
    model: any;
    form: FormGroup;
    options: F["options"];
    readonly key: string;
    readonly formControl: import("@angular/forms").AbstractControl;
    readonly to: import("../components/vxform.field.config").VXFormTemplateOptions;
    readonly showError: boolean;
    readonly id: string;
    readonly formState: any;
    readonly formStatus: number;
    readonly editor: boolean;
    readonly text: any;
    readonly placeHolder: string;
    readonly textSingle: string;
    readonly textMultiple: string;
    readonly textLookUp: string;
    readonly tips: string;
    readonly attachment: any[];
    readonly attachmentDisabled: boolean;
    readonly active: boolean;
    readonly rownumber: number;
}
export declare abstract class Field extends FieldType {
    constructor();
}
