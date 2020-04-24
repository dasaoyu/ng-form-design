import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class VXSurveyCheckBox extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    addOption(): void;
    addOptions(): void;
    deleteOption(option: any): void;
    onChange(values: string[]): void;
    getCheckStatus(option: any): void;
    getControlChecked(values: any, option: any): boolean;
    drop(event: CdkDragDrop<string[]>): void;
}
