import { ViewContainerRef } from "@angular/core";
import { FieldType } from "./field.type";
import { VXFormFieldConfig } from "../components/vxform.field.config";
export declare abstract class FieldWrapper<F extends VXFormFieldConfig = VXFormFieldConfig> extends FieldType<F> {
    fieldComponent: ViewContainerRef;
}
