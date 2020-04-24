import { OnInit } from "@angular/core";
import { NzTreeComponent } from "ng-zorro-antd/tree";
import { NzFormatEmitEvent } from "ng-zorro-antd/core";
import { VXFormFieldConfig } from "@vx-form/core";
import { DataService } from "../../service/data.service";
export declare class VXFormArea implements OnInit {
    dataService: DataService;
    fieldConfig: VXFormFieldConfig;
    nzTreeComponent: NzTreeComponent | undefined;
    nodes: never[];
    constructor(dataService: DataService);
    ngOnInit(): void;
    nzEvent(event: NzFormatEmitEvent): void;
    submitForm(): void;
}
