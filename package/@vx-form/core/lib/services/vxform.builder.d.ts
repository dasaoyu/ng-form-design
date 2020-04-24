import { ComponentFactoryResolver, Injector } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";
import { VXFormConfig } from "./vxform.config";
import { VXFormFieldConfig, VXFormOptions } from "../components/vxform.field.config";
export declare class VXFormBuilder {
    private vxFormConfig;
    private componentFactoryResolver;
    private injector;
    constructor(vxFormConfig: VXFormConfig, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    buildForm(formControl: FormGroup | FormArray, fieldGroup: VXFormFieldConfig[], model: any, options: VXFormOptions): void;
    private _buildForm;
    private getExtensions;
    private _setOptions;
}
