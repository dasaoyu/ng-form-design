import { OnInit, EventEmitter, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
import { DataService } from "../../service/data.service";
import { ITreeData, ICheckedTree } from "../../tools/util";
export declare class VXFormPostion implements OnInit {
    dataService: DataService;
    fieldConfig: VXFormFieldConfig;
    tag: boolean;
    treeChangeEvent: EventEmitter<any>;
    treeData: ITreeData[];
    controlid: string;
    orgid: string;
    selectData: ICheckedTree[];
    readonly selectedNode: ICheckedTree[];
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getOrgData(): void;
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
    getPostionData(): void;
    pageIndexChange(event: any): void;
    checkChange(list: any[]): void;
    orgChange(event: any): void;
}
