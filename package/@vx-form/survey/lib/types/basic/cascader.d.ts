import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { NzModalService } from "ng-zorro-antd/modal";
import { VXDialogService } from "../../service/dialog.service";
export declare class VXSurveyCascader extends FieldType {
    private modal;
    vxDialogService: VXDialogService;
    service: any;
    guid: any;
    values: string[] | null;
    constructor(dyService: VXFormAntService, modal: NzModalService, vxDialogService: VXDialogService);
    addOption(): void;
}
