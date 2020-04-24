import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { VXDialogService } from "../../service/dialog.service";
export declare class VXSurveyEvaluation extends FieldType {
    vxDialogService: VXDialogService;
    service: any;
    guid: any;
    start: number;
    _startContent: any;
    readonly startContent: any;
    constructor(dyService: VXFormAntService, vxDialogService: VXDialogService);
    numberChange(): void;
    editStart(): void;
}
