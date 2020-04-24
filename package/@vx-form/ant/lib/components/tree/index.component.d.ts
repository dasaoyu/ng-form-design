import { OnInit, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
import { DataService } from "../../service/data.service";
import { ITreeData, ICheckedTree } from "../../tools/util";
export declare class VXFormTree implements OnInit, OnChanges {
    dataService: DataService;
    fieldConfig: VXFormFieldConfig;
    tag: boolean;
    treeChangeEvent: EventEmitter<any>;
    treeData: ITreeData[];
    controlid: string;
    selectData: ICheckedTree[];
    readonly selectedNode: ICheckedTree[];
    readonly selectType: string;
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getTreeData(): void;
    getSelectData(): void;
}
