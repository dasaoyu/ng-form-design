import { FormArray } from "@angular/forms";
import { FieldType } from "./field.type";
import { VXFormBuilder } from "../services/vxform.builder";
import { VXFormFieldConfig } from "../components/vxform.field.config";
import { VXFormExtension } from "../services/vxform.config";
export declare abstract class FieldArrayType<F extends VXFormFieldConfig = VXFormFieldConfig> extends FieldType<F> implements VXFormExtension {
    formControl: FormArray;
    defaultOptions: any;
    constructor(builder?: VXFormBuilder);
    onPopulate(field: VXFormFieldConfig): void;
    add(i?: number, initialModel?: any): void;
    remove(i: number): void;
}
