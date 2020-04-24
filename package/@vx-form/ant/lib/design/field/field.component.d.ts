import { OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
import { NzMessageService } from "ng-zorro-antd/message";
export declare class VXFormDesignField implements OnInit, OnChanges {
    message: NzMessageService;
    formField: any;
    lang: any[];
    field: VXFormFieldConfig;
    constructor(message: NzMessageService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkSave(): boolean;
}
