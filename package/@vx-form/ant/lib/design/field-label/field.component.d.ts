import { OnInit } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXFormDesignFieldLabel implements OnInit {
    formField: any;
    field: VXFormFieldConfig;
    constructor();
    ngOnInit(): void;
    submitForm(): void;
    checkSave(): boolean;
}
