import { OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { IBusinessTable } from "../../tools/util";
export declare class VXFormDesignTables implements OnInit, OnChanges, OnDestroy {
    businessTable: IBusinessTable;
    radioValue: string;
    tableData: never[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    initTableData(): void;
    selectOK(table: any): void;
}
