import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class VXSurveyDragDrop extends FieldType {
    service: any;
    readonly insertQuestionIndex: number;
    constructor(dyService: VXFormAntService);
    drop(event: CdkDragDrop<string[]>): void;
    fieldOperational(sign: string): void;
    logicQuestion(field: any): void;
    copyQuestion(field: any): void;
    delQuestion(field: any): void;
    activeQuestion(field: any): void;
}
