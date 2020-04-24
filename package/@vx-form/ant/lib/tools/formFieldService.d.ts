import { VXTableFieldConfig, VXFormFieldConfig } from "@vx-form/core";
export declare class VXToFormFieldService {
    constructor();
    getVXFiledFunction(tableField: VXTableFieldConfig): VXFormFieldConfig;
    text(field: VXTableFieldConfig): VXFormFieldConfig;
    textI18N(field: VXTableFieldConfig): VXFormFieldConfig;
    textArea(field: VXTableFieldConfig): VXFormFieldConfig;
    number(field: VXTableFieldConfig): VXFormFieldConfig;
    passWord(field: VXTableFieldConfig): VXFormFieldConfig;
    radio(field: VXTableFieldConfig): VXFormFieldConfig;
    checkbox(field: VXTableFieldConfig): VXFormFieldConfig;
    select(field: VXTableFieldConfig): VXFormFieldConfig;
    datetime(field: VXTableFieldConfig): VXFormFieldConfig;
    image(field: VXTableFieldConfig): VXFormFieldConfig;
    upload(field: VXTableFieldConfig): VXFormFieldConfig;
    lookup(field: VXTableFieldConfig): VXFormFieldConfig;
    html(field: VXTableFieldConfig): VXFormFieldConfig;
}
