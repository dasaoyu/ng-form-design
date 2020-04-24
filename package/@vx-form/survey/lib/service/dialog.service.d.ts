import { NzModalService } from "ng-zorro-antd";
declare type ModalSizeType = "small" | "medium" | "large";
export interface ModalOptions {
    nzContent: any;
    size: ModalSizeType;
    nzTitle?: string;
    primaryLabel?: string;
    vertical?: boolean;
    hideBtn?: boolean;
    showResetBtn?: boolean;
}
export declare class VXDialogService {
    modalService: NzModalService;
    constructor(modalService: NzModalService);
    switchSize(size: any): {
        width: number;
        height: number;
    };
    CreateModelDialog(modalOptions: ModalOptions, params: any, callback: any): void;
}
export {};
