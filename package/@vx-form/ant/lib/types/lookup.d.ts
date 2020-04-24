import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
import { NzModalService } from "ng-zorro-antd/modal";
import { VXDialogService } from "../service/dialog.service";
export declare class VXFormFieldLookUp extends FieldType {
    private modal;
    vxDialogService: VXDialogService;
    service: any;
    constructor(dyService: VXFormAntService, modal: NzModalService, vxDialogService: VXDialogService);
    fieldOperational(sign: string): void;
    lookup(): void;
    removeValue(): void;
}
