import { OnInit, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
import { DataService } from "../../service/data.service";
import { ICheckedTree } from "../../tools/util";
export declare class VXFormEmployee implements OnInit {
    dataService: DataService;
    fieldConfig: VXFormFieldConfig;
    constructor(dataService: DataService);
    selectData: ICheckedTree[];
    readonly selectedNode: ICheckedTree[];
    tag: boolean;
    check: boolean;
    action: number;
    header: any[];
    body: any[];
    buttonlist: any[];
    checkid: any[];
    query: {
        total: number;
        pageIndex: number;
        pageSize: number;
        sortName: string;
        sortValue: string;
        keyWord: string;
    };
    readonly selectType: string;
    getSelectData(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getEmployeeData(): void;
    pageIndexChange(event: any): void;
    checkChange(list: any[]): void;
}
