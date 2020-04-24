import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class VXSurveyRadio extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    addOption(): void;
    addOptions(): void;
    deleteOption(option: any): void;
    drop(event: CdkDragDrop<string[]>): void;
}
