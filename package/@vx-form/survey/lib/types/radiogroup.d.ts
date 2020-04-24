import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class VXSurveyRadioGroup extends FieldType {
    service: any;
    guid: any;
    constructor(dyService: VXFormAntService);
    dropOption(event: CdkDragDrop<string[]>): void;
    logicQuestion(): void;
    copyQuestion(): void;
    delQuestion(): void;
    activeQuestion(): void;
    addOption(): void;
    addOptions(): void;
    deleteOption(option: any): void;
}
