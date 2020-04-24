import { OnInit, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { NzTreeComponent } from "ng-zorro-antd/tree";
import { NzFormatEmitEvent } from "ng-zorro-antd/core";
import { ISelectedNode, ITreeData, ICheckedTree, ITreeEvent } from "../../../tools/util";
export declare class VXFormPrivateTree implements OnInit, OnChanges {
    tag: boolean;
    selectType: "single" | "multiple";
    expandAll: boolean;
    selectData: ICheckedTree[];
    data: ITreeData[];
    treeChangeEvent: EventEmitter<ITreeEvent>;
    nzTreeComponent: NzTreeComponent | undefined;
    selectedKey: any[];
    selectedNode: ISelectedNode[];
    skeletonStatus: number;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    nzClick(event: NzFormatEmitEvent): void;
    nzCheck(event: NzFormatEmitEvent): void;
    treeChecked(items: any): void;
    selectClearById(node: any): void;
    selectAllClear(): void;
}
