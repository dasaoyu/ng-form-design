import { VXFormFieldConfig, VXFormFieldProperty } from "../components/vxform.field.config";
export declare class VXFormCommonService {
    constructor();
    initFormFieldProperty(fields: VXFormFieldConfig[]): void;
    initFormFieldConfig(fields: VXFormFieldConfig[], fieldPropertys: VXFormFieldProperty[]): void;
    initFormFieldModel(fields: VXFormFieldConfig[], model: any): void;
    initSurveyFormFieldConfig(surveyInfo: any): void;
    private checkFieldDefaultValue;
    private deleteFieldProperty;
    private setFieldProperty;
    private setFieldNumber;
}
