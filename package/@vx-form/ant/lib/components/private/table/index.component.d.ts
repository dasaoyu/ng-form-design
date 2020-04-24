import { OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
export interface ITableQuery {
    total: number;
    pageIndex: number;
    pageSize: number;
    sortName?: string;
    sortValue?: string;
    parameter?: any;
    keyWord: string;
}
export interface ITableHeader {
    key?: any;
    name?: string;
    width?: number;
    minWidth?: number;
    filterList?: any;
    checkboxable?: boolean;
    sortable: boolean;
    hiden?: boolean;
    action?: boolean;
    [additionalProperties: string]: any;
}
export interface ITableButton {
    type?: string;
    text?: string;
}
export declare class VXFormPrivateTable implements OnInit, OnChanges, OnDestroy {
    tableIndex: number;
    tableSize: number;
    tableTotal: number;
    id: string;
    check: boolean;
    action: number;
    header: ITableHeader[];
    body: any[];
    buttonlist: ITableButton[];
    checkid: any[];
    checkChangeEvent: EventEmitter<any>;
    pageIndexEvent: EventEmitter<any>;
    orderChangeEvent: EventEmitter<any>;
    filterChangeEvent: EventEmitter<any>;
    buttonAction: EventEmitter<any>;
    checkIds: string[];
    _headerData: any[];
    isAllChecked: boolean;
    isIndeterminate: boolean;
    listData: any[];
    listDataCheckedId: {
        [key: string]: boolean;
    };
    listDataSelectedList: any[];
    query: ITableQuery;
    tableScroll: {
        y: string;
    };
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setCheckAll(value: boolean): void;
    setCheckStatus(): void;
    queryChange(): void;
    pageIndexChange(e: number): void;
    tableSort(sort: {
        key: string;
        value: string;
    }): void;
    itemSelectChange(event: any): void;
    saveSelected(): void;
    selectAllClear(): void;
    selectClearById(id: any): void;
}
