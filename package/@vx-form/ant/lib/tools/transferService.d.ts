import { VXFormFieldConfig } from "@vx-form/core";
import { ICheckedField, IBusinessTable } from "./util";
import { VXToFormFieldService } from "./formFieldService";
export declare class VXTransferService {
    private toFormField;
    constructor(toFormField: VXToFormFieldService);
    transferLineToForm(form_fields: VXFormFieldConfig[], checkedFields: ICheckedField[]): void;
    transferLabelToForm(form_fields: VXFormFieldConfig[], checkedFields: ICheckedField[]): void;
    transferGroupToForm(form_fields: VXFormFieldConfig[], checkedFields: ICheckedField[], tableCode: string): void;
    transferSelectFieldToForm(form_fields: VXFormFieldConfig[], checkedFields: ICheckedField[], businessTable: IBusinessTable, obj: any): void;
    groupFieldMoveUpOrDown(form_fields: VXFormFieldConfig[], field: VXFormFieldConfig, type: string): VXFormFieldConfig[];
    groupTransferLineToForm(form_fields: VXFormFieldConfig[], field: VXFormFieldConfig): VXFormFieldConfig[] | null;
    groupTransferRemarkToForm(form_fields: VXFormFieldConfig[], field: VXFormFieldConfig): VXFormFieldConfig[] | null;
    groupTransferSelectFieldToForm(form_fields: VXFormFieldConfig[], groupField: VXFormFieldConfig, checkedFields: ICheckedField[], businessTable: IBusinessTable, obj: any): VXFormFieldConfig[] | undefined;
    groupTransferDeleteForm(form_fields: VXFormFieldConfig[], groupField: VXFormFieldConfig): VXFormFieldConfig[] | undefined;
    editFormFieldInfo(form_fields: VXFormFieldConfig[], new_field: VXFormFieldConfig): {
        groupKey: string;
        formFileds: VXFormFieldConfig[];
    } | undefined;
    deleteFormFieldInfo(form_fields: VXFormFieldConfig[], field: VXFormFieldConfig): {
        groupKey: any;
        formFileds: VXFormFieldConfig[];
    };
    private deleteGroupFormFieldInfo;
    private getFieldLineInfo;
    private getFieldRemarkInfo;
    private getFieldGroupInfo;
    private clearGroupChecked;
    private getGroupCheckFields;
    private getTableFiledList;
    private getTableFiledInfo;
}
