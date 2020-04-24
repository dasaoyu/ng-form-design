import { OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
import { IBusinessTable } from "../../tools/util";
export declare class VXFormDesignTable implements OnInit, OnChanges, OnDestroy {
    tableType: string;
    businessTable: IBusinessTable;
    fieldConfig: VXFormFieldConfig;
    tableData: never[];
    mapOfCheckedId: {
        [key: string]: boolean;
    };
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    initTableData(): void;
}
