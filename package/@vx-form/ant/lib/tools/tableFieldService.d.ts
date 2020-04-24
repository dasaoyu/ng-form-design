import { VXFormFieldConfig } from "@vx-form/core";
import { IBusinessTable } from "./util";
import { VXToFormFieldService } from "./formFieldService";
export declare class VXDesginToFormService {
    private toFormField;
    constructor(toFormField: VXToFormFieldService);
    initTableStatus(tables: IBusinessTable, fields: VXFormFieldConfig[]): void;
    initFormFieldByTables(tables: IBusinessTable, fields: VXFormFieldConfig[]): void;
    private initTableFields;
    private setTableStatus;
    private setTablePrimary;
    private setTableSingle;
    private setTableMultiple;
    private checkVXFormFieldConfig;
    private addVXFormFieldConfig;
}
