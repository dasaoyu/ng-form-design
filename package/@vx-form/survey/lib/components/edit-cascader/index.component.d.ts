import { OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXSurveyEditCascader implements OnInit, OnChanges {
    cascaderData: any[];
    fieldConfig: VXFormFieldConfig;
    data: any[];
    row1: any;
    row2: any;
    row3: any;
    row4: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    cascaderItem(item: any, type: number): void;
    addOption(e: number): void;
    delOption(e: any, type: number): void;
}
