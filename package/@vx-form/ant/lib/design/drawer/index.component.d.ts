import { OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
export declare class VXFormDrawerComponent implements OnInit, OnChanges, OnDestroy {
    visible: boolean;
    tableData: never[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    close(): void;
    toggle(): void;
    writeValue(value: any): void;
    onChange(_: any): void;
    onTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
