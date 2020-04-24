import { VXFormFieldConfig, VXTableFieldConfig, VXTableConfig } from "@vx-form/core";
export declare const LayoutPanel: FormLayout[];
export declare const LayoutColumn: FormLayout[];
export interface FormLayout {
    type: "panelRemark" | "panelLine" | "panelEmployee" | "panelSingle" | "panelMultiple" | "column1" | "column2" | "column3";
    title?: string;
}
export interface VXTableBusiness {
    tablecode: string;
    tablename: string;
    fields?: VXTableFieldConfig[];
}
export interface ISelectedNode {
    key: string;
    name: string;
}
export interface IOrgData {
    title: string;
    key: string;
    children?: ITreeData[];
}
export interface ITreeData {
    title: string;
    key: string;
    children?: ITreeData[];
}
export interface ITreeEvent {
    checkData: ICheckedTree[];
    [additionalProperties: string]: any;
}
export interface ICheckedTree {
    label: string;
    value: string;
    [additionalProperties: string]: any;
}
export interface ICheckedField {
    index: number;
    field: VXFormFieldConfig;
}
export interface IBusinessTable {
    primary: VXTableConfig;
    child: {
        single: VXTableConfig[];
        multiple: VXTableConfig[];
    };
}
export interface Itable {
    tabletype?: string;
    tablelabel?: string;
    tablecode?: string;
    tablename?: string;
    tablefields?: any;
}
export interface IAPIParams {
    url: string;
    para?: any;
}
export interface IDesignFormAPI {
    tables: IAPIParams;
    form: IAPIParams;
}
