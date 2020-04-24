import { CdkOverlayOrigin } from "@angular/cdk/overlay";
import { FieldType } from "@vx-form/core";
export declare class VXFormFieldTextI18n extends FieldType {
    service: any;
    triggerWidth: string;
    cdkOverlayOrigin: CdkOverlayOrigin | undefined;
    resize(event: any): void;
    languageList: Array<any>;
    readonly language: any[];
    onChange(value: any): void;
    visibleChange(event: any): void;
    readonly langText: any;
}
