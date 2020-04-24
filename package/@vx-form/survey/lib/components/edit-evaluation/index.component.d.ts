import { OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXSurveyEditEvaluation implements OnInit, OnChanges {
    start: number;
    optionSelectedIndex: number;
    currentSelected: any;
    editevaluationData: any[];
    fieldConfig: VXFormFieldConfig;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    optionClick(event: any): void;
    getOptionTag(): any;
}
