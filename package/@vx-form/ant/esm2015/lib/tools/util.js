/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LayoutPanel = [
    {
        type: "panelLine",
        title: "添加分割线"
    },
    {
        type: "panelRemark",
        title: "添加文本描述"
    },
    {
        type: "panelEmployee",
        title: "添加员工区域"
    },
    /* {
      type: "panelSingle",
      title: "添加单记录区域"
    }, */
    {
        type: "panelMultiple",
        title: "添加多记录区域"
    }
];
/** @type {?} */
export const LayoutColumn = [
    {
        type: "column1",
        title: "一行一列"
    },
    {
        type: "column2",
        title: "一行二列"
    },
    {
        type: "column3",
        title: "一行三列"
    }
];
/**
 * @record
 */
export function FormLayout() { }
if (false) {
    /** @type {?} */
    FormLayout.prototype.type;
    /** @type {?|undefined} */
    FormLayout.prototype.title;
}
/**
 * @record
 */
export function VXTableBusiness() { }
if (false) {
    /** @type {?} */
    VXTableBusiness.prototype.tablecode;
    /** @type {?} */
    VXTableBusiness.prototype.tablename;
    /** @type {?|undefined} */
    VXTableBusiness.prototype.fields;
}
/**
 * @record
 */
export function ISelectedNode() { }
if (false) {
    /** @type {?} */
    ISelectedNode.prototype.key;
    /** @type {?} */
    ISelectedNode.prototype.name;
}
/**
 * @record
 */
export function IOrgData() { }
if (false) {
    /** @type {?} */
    IOrgData.prototype.title;
    /** @type {?} */
    IOrgData.prototype.key;
    /** @type {?|undefined} */
    IOrgData.prototype.children;
}
/**
 * @record
 */
export function ITreeData() { }
if (false) {
    /** @type {?} */
    ITreeData.prototype.title;
    /** @type {?} */
    ITreeData.prototype.key;
    /** @type {?|undefined} */
    ITreeData.prototype.children;
}
/**
 * @record
 */
export function ITreeEvent() { }
if (false) {
    /** @type {?} */
    ITreeEvent.prototype.checkData;
    /* Skipping unhandled member: [additionalProperties: string]: any;*/
}
/**
 * @record
 */
export function ICheckedTree() { }
if (false) {
    /** @type {?} */
    ICheckedTree.prototype.label;
    /** @type {?} */
    ICheckedTree.prototype.value;
    /* Skipping unhandled member: [additionalProperties: string]: any;*/
}
/**
 * @record
 */
export function ICheckedField() { }
if (false) {
    /** @type {?} */
    ICheckedField.prototype.index;
    /** @type {?} */
    ICheckedField.prototype.field;
}
/**
 * @record
 */
export function IBusinessTable() { }
if (false) {
    /** @type {?} */
    IBusinessTable.prototype.primary;
    /** @type {?} */
    IBusinessTable.prototype.child;
}
/**
 * @record
 */
export function Itable() { }
if (false) {
    /** @type {?|undefined} */
    Itable.prototype.tabletype;
    /** @type {?|undefined} */
    Itable.prototype.tablelabel;
    /** @type {?|undefined} */
    Itable.prototype.tablecode;
    /** @type {?|undefined} */
    Itable.prototype.tablename;
    /** @type {?|undefined} */
    Itable.prototype.tablefields;
}
/**
 * @record
 */
export function IAPIParams() { }
if (false) {
    /** @type {?} */
    IAPIParams.prototype.url;
    /** @type {?|undefined} */
    IAPIParams.prototype.para;
}
/**
 * @record
 */
export function IDesignFormAPI() { }
if (false) {
    /** @type {?} */
    IDesignFormAPI.prototype.tables;
    /** @type {?} */
    IDesignFormAPI.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsTUFBTSxPQUFPLFdBQVcsR0FBaUI7SUFDdkM7UUFDRSxJQUFJLEVBQUUsV0FBVztRQUNqQixLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsUUFBUTtLQUNoQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGVBQWU7UUFDckIsS0FBSyxFQUFFLFFBQVE7S0FDaEI7SUFDRDs7O1NBR0s7SUFDTDtRQUNFLElBQUksRUFBRSxlQUFlO1FBQ3JCLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0Y7O0FBQ0QsTUFBTSxPQUFPLFlBQVksR0FBaUI7SUFDeEM7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsTUFBTTtLQUNkO0NBQ0Y7Ozs7QUFFRCxnQ0FXQzs7O0lBVkMsMEJBUWM7O0lBQ2QsMkJBQWU7Ozs7O0FBR2pCLHFDQUlDOzs7SUFIQyxvQ0FBa0I7O0lBQ2xCLG9DQUFrQjs7SUFDbEIsaUNBQThCOzs7OztBQUdoQyxtQ0FHQzs7O0lBRkMsNEJBQVk7O0lBQ1osNkJBQWE7Ozs7O0FBR2YsOEJBSUM7OztJQUhDLHlCQUFjOztJQUNkLHVCQUFZOztJQUNaLDRCQUF1Qjs7Ozs7QUFHekIsK0JBSUM7OztJQUhDLDBCQUFjOztJQUNkLHdCQUFZOztJQUNaLDZCQUF1Qjs7Ozs7QUFFekIsZ0NBR0M7OztJQUZDLCtCQUEwQjs7Ozs7O0FBRzVCLGtDQUlDOzs7SUFIQyw2QkFBYzs7SUFDZCw2QkFBYzs7Ozs7O0FBS2hCLG1DQUdDOzs7SUFGQyw4QkFBYzs7SUFDZCw4QkFBeUI7Ozs7O0FBSTNCLG9DQU1DOzs7SUFMQyxpQ0FBdUI7O0lBQ3ZCLCtCQUdFOzs7OztBQUdKLDRCQU1DOzs7SUFMQywyQkFBbUI7O0lBQ25CLDRCQUFvQjs7SUFDcEIsMkJBQW1COztJQUNuQiwyQkFBbUI7O0lBQ25CLDZCQUFrQjs7Ozs7QUFJcEIsZ0NBR0M7OztJQUZDLHlCQUFXOztJQUNYLDBCQUFTOzs7OztBQUdYLG9DQUdDOzs7SUFGQyxnQ0FBa0I7O0lBQ2xCLDhCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgVlhUYWJsZUNvbmZpZ1xyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0UGFuZWw6IEZvcm1MYXlvdXRbXSA9IFtcclxuICB7XHJcbiAgICB0eXBlOiBcInBhbmVsTGluZVwiLFxyXG4gICAgdGl0bGU6IFwi5re75Yqg5YiG5Ymy57q/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwicGFuZWxSZW1hcmtcIixcclxuICAgIHRpdGxlOiBcIua3u+WKoOaWh+acrOaPj+i/sFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcInBhbmVsRW1wbG95ZWVcIixcclxuICAgIHRpdGxlOiBcIua3u+WKoOWRmOW3peWMuuWfn1wiXHJcbiAgfSxcclxuICAvKiB7XHJcbiAgICB0eXBlOiBcInBhbmVsU2luZ2xlXCIsXHJcbiAgICB0aXRsZTogXCLmt7vliqDljZXorrDlvZXljLrln59cIlxyXG4gIH0sICovXHJcbiAge1xyXG4gICAgdHlwZTogXCJwYW5lbE11bHRpcGxlXCIsXHJcbiAgICB0aXRsZTogXCLmt7vliqDlpJrorrDlvZXljLrln59cIlxyXG4gIH1cclxuXTtcclxuZXhwb3J0IGNvbnN0IExheW91dENvbHVtbjogRm9ybUxheW91dFtdID0gW1xyXG4gIHtcclxuICAgIHR5cGU6IFwiY29sdW1uMVwiLFxyXG4gICAgdGl0bGU6IFwi5LiA6KGM5LiA5YiXXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiY29sdW1uMlwiLFxyXG4gICAgdGl0bGU6IFwi5LiA6KGM5LqM5YiXXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiY29sdW1uM1wiLFxyXG4gICAgdGl0bGU6IFwi5LiA6KGM5LiJ5YiXXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1MYXlvdXQge1xyXG4gIHR5cGU6XHJcbiAgICB8IFwicGFuZWxSZW1hcmtcIlxyXG4gICAgfCBcInBhbmVsTGluZVwiXHJcbiAgICB8IFwicGFuZWxFbXBsb3llZVwiXHJcbiAgICB8IFwicGFuZWxTaW5nbGVcIlxyXG4gICAgfCBcInBhbmVsTXVsdGlwbGVcIlxyXG4gICAgfCBcImNvbHVtbjFcIlxyXG4gICAgfCBcImNvbHVtbjJcIlxyXG4gICAgfCBcImNvbHVtbjNcIjtcclxuICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWWFRhYmxlQnVzaW5lc3Mge1xyXG4gIHRhYmxlY29kZTogc3RyaW5nO1xyXG4gIHRhYmxlbmFtZTogc3RyaW5nO1xyXG4gIGZpZWxkcz86IFZYVGFibGVGaWVsZENvbmZpZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RlZE5vZGUge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3JnRGF0YSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICBjaGlsZHJlbj86IElUcmVlRGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlRGF0YSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICBjaGlsZHJlbj86IElUcmVlRGF0YVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVFdmVudCB7XHJcbiAgY2hlY2tEYXRhOiBJQ2hlY2tlZFRyZWVbXTtcclxuICBbYWRkaXRpb25hbFByb3BlcnRpZXM6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2VkVHJlZSB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIFthZGRpdGlvbmFsUHJvcGVydGllczogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2VkRmllbGQge1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnO1xyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCdXNpbmVzc1RhYmxlIHtcclxuICBwcmltYXJ5OiBWWFRhYmxlQ29uZmlnO1xyXG4gIGNoaWxkOiB7XHJcbiAgICBzaW5nbGU6IFZYVGFibGVDb25maWdbXTtcclxuICAgIG11bHRpcGxlOiBWWFRhYmxlQ29uZmlnW107XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGFibGUge1xyXG4gIHRhYmxldHlwZT86IHN0cmluZztcclxuICB0YWJsZWxhYmVsPzogc3RyaW5nO1xyXG4gIHRhYmxlY29kZT86IHN0cmluZztcclxuICB0YWJsZW5hbWU/OiBzdHJpbmc7XHJcbiAgdGFibGVmaWVsZHM/OiBhbnk7XHJcbn1cclxuXHJcbiBcclxuZXhwb3J0IGludGVyZmFjZSBJQVBJUGFyYW1ze1xyXG4gIHVybDpzdHJpbmcsXHJcbiAgcGFyYT86YW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlc2lnbkZvcm1BUEl7XHJcbiAgdGFibGVzOklBUElQYXJhbXMsLy/ojrflj5bnm7jlhbPooajkv6Hmga9cclxuICBmb3JtOklBUElQYXJhbXMgLy/ooajljZVcclxufSJdfQ==