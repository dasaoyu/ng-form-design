import { VXFormFieldConfig } from "@vx-form/core";
import { VXRadioService } from './radio_Service';
import { VXCheckboxService } from './checkbox_Service';
import { VXInputService } from './input_Service';
import { VXCascaderService } from './cascader_Service';
import { VXOtherService } from './other_Service';
import { VXMatrixService } from './matrix_Service';
export declare class VXTransferService {
    private vxRadioService;
    private vxCheckboxService;
    private vxInputService;
    private vxCascaderService;
    private vxOtherService;
    private vxMatrixService;
    constructor(vxRadioService: VXRadioService, vxCheckboxService: VXCheckboxService, vxInputService: VXInputService, vxCascaderService: VXCascaderService, vxOtherService: VXOtherService, vxMatrixService: VXMatrixService);
    transferQuestionByType(questionType: any, form_fields: VXFormFieldConfig[], currentIndex: number): void;
    private initQuestion;
}
