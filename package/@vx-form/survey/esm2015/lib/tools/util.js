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
    /** @type {?|undefined} */
    IDesignFormAPI.prototype.tables;
    /** @type {?} */
    IDesignFormAPI.prototype.form;
}
/** @type {?} */
const QUESTIONTYPE = {
    //选择
    select_single: "select_single",
    //单选
    select_multiple: "select_multiple",
    //多选
    select_image: "select_image",
    //图片选择
    select_voteimage: "select_voteimage",
    //图片投票
    select_votefont: "select_votefont",
    //文字投票
    select_dropdown: "select_dropdown",
    //下拉选择
    select_cascader: "select_cascader",
    //级联选择
    select_scaler: "select_scaler",
    //量表
    select_classification: "classification",
    //分类
    //填空
    blank: "blank",
    //填空
    blank_multiple: "blank_multiple",
    //多项填空
    blank_horizontal: "blank_horizontal",
    //横向填空
    blank_table: "blank_table",
    //自动表格 
    //打分
    score: "score",
    //打分题 
    score_sort: "score_sort",
    //排序题 
    score_nps: "score_nps",
    //nps题 
    score_proportion: "proportion",
    //比重题
    score_evaluation: "score_evaluation",
    //评价题目 
    //其他
    other_page: "other_page",
    //分页
    other_line: "other_line",
    //分割线
    other_upload: "other_upload",
    //文件上传
    other_remark: "other_remark",
    //备注说明 
    //人员
    emp_name: "emp_name",
    //姓名
    emp_mobile: "emp_mobile",
    //手机
    emp_email: "emp_email",
    //邮箱
    emp_gender: "emp_gender",
    //性别
    emp_date: "emp_date",
    //日期
    emp_time: "emp_time",
    //时间
    emp_age: "emp_age",
    //年龄
    emp_education: "emp_education",
    //学历
    emp_major: "emp_major",
    //专业
    emp_university: "emp_university",
    //学校
    emp_industry: "emp_industry",
    //行业
    emp_occupation: "emp_occupation",
    //职业
    emp_address: "emp_address",
    //城市地址
    emp_geography: "emp_geography",
    //地理位置 
    //矩阵
    matrix_select: "matrix_select",
    //矩阵选择
    matrix_score: "matrix_score",
    //矩阵打分
    matrix_blank: "matrix_blank",
    //矩阵填空
    matrix_scale: "matrix_scale" //矩阵量表
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsTUFBTSxPQUFPLFdBQVcsR0FBaUI7SUFDdkM7UUFDRSxJQUFJLEVBQUUsV0FBVztRQUNqQixLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsUUFBUTtLQUNoQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGVBQWU7UUFDckIsS0FBSyxFQUFFLFFBQVE7S0FDaEI7SUFDRDs7O1NBR0s7SUFDTDtRQUNFLElBQUksRUFBRSxlQUFlO1FBQ3JCLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQ0Y7O0FBQ0QsTUFBTSxPQUFPLFlBQVksR0FBaUI7SUFDeEM7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsTUFBTTtLQUNkO0NBQ0Y7Ozs7QUFFRCxnQ0FXQzs7O0lBVkMsMEJBUWM7O0lBQ2QsMkJBQWU7Ozs7O0FBR2pCLHFDQUlDOzs7SUFIQyxvQ0FBa0I7O0lBQ2xCLG9DQUFrQjs7SUFDbEIsaUNBQThCOzs7OztBQUdoQyxtQ0FHQzs7O0lBRkMsNEJBQVk7O0lBQ1osNkJBQWE7Ozs7O0FBR2YsOEJBSUM7OztJQUhDLHlCQUFjOztJQUNkLHVCQUFZOztJQUNaLDRCQUF1Qjs7Ozs7QUFHekIsK0JBSUM7OztJQUhDLDBCQUFjOztJQUNkLHdCQUFZOztJQUNaLDZCQUF1Qjs7Ozs7QUFFekIsZ0NBR0M7OztJQUZDLCtCQUEwQjs7Ozs7O0FBRzVCLGtDQUlDOzs7SUFIQyw2QkFBYzs7SUFDZCw2QkFBYzs7Ozs7O0FBS2hCLG1DQUdDOzs7SUFGQyw4QkFBYzs7SUFDZCw4QkFBeUI7Ozs7O0FBSTNCLG9DQU1DOzs7SUFMQyxpQ0FBdUI7O0lBQ3ZCLCtCQUdFOzs7OztBQUdKLDRCQU1DOzs7SUFMQywyQkFBbUI7O0lBQ25CLDRCQUFvQjs7SUFDcEIsMkJBQW1COztJQUNuQiwyQkFBbUI7O0lBQ25CLDZCQUFrQjs7Ozs7QUFJcEIsZ0NBR0M7OztJQUZDLHlCQUFXOztJQUNYLDBCQUFTOzs7OztBQUdYLG9DQUdDOzs7SUFGQyxnQ0FBbUI7O0lBQ25CLDhCQUFlOzs7TUFHWCxZQUFZLEdBQUM7O0lBR2YsYUFBYSxFQUFDLGVBQWU7O0lBQzdCLGVBQWUsRUFBQyxpQkFBaUI7O0lBQ2pDLFlBQVksRUFBQyxjQUFjOztJQUMzQixnQkFBZ0IsRUFBQyxrQkFBa0I7O0lBQ25DLGVBQWUsRUFBQyxpQkFBaUI7O0lBQ2pDLGVBQWUsRUFBQyxpQkFBaUI7O0lBQ2pDLGVBQWUsRUFBQyxpQkFBaUI7O0lBQ2pDLGFBQWEsRUFBQyxlQUFlOztJQUM3QixxQkFBcUIsRUFBQyxnQkFBZ0I7OztJQUd0QyxLQUFLLEVBQUMsT0FBTzs7SUFDYixjQUFjLEVBQUMsZ0JBQWdCOztJQUMvQixnQkFBZ0IsRUFBQyxrQkFBa0I7O0lBQ25DLFdBQVcsRUFBQyxhQUFhOzs7SUFHekIsS0FBSyxFQUFDLE9BQU87O0lBQ2IsVUFBVSxFQUFDLFlBQVk7O0lBQ3ZCLFNBQVMsRUFBQyxXQUFXOztJQUNyQixnQkFBZ0IsRUFBQyxZQUFZOztJQUM3QixnQkFBZ0IsRUFBQyxrQkFBa0I7OztJQUduQyxVQUFVLEVBQUMsWUFBWTs7SUFDdkIsVUFBVSxFQUFDLFlBQVk7O0lBQ3ZCLFlBQVksRUFBQyxjQUFjOztJQUMzQixZQUFZLEVBQUMsY0FBYzs7O0lBRzNCLFFBQVEsRUFBQyxVQUFVOztJQUNuQixVQUFVLEVBQUMsWUFBWTs7SUFDdkIsU0FBUyxFQUFDLFdBQVc7O0lBQ3JCLFVBQVUsRUFBQyxZQUFZOztJQUN2QixRQUFRLEVBQUMsVUFBVTs7SUFDbkIsUUFBUSxFQUFDLFVBQVU7O0lBQ25CLE9BQU8sRUFBQyxTQUFTOztJQUNqQixhQUFhLEVBQUMsZUFBZTs7SUFDN0IsU0FBUyxFQUFDLFdBQVc7O0lBQ3JCLGNBQWMsRUFBQyxnQkFBZ0I7O0lBQy9CLFlBQVksRUFBQyxjQUFjOztJQUMzQixjQUFjLEVBQUMsZ0JBQWdCOztJQUMvQixXQUFXLEVBQUMsYUFBYTs7SUFDekIsYUFBYSxFQUFDLGVBQWU7OztJQUc3QixhQUFhLEVBQUMsZUFBZTs7SUFDN0IsWUFBWSxFQUFDLGNBQWM7O0lBQzNCLFlBQVksRUFBQyxjQUFjOztJQUMzQixZQUFZLEVBQUMsY0FBYyxDQUFBLE1BQU07Q0FFcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYVGFibGVGaWVsZENvbmZpZyxcclxuICBWWFRhYmxlQ29uZmlnXHJcbn0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXRQYW5lbDogRm9ybUxheW91dFtdID0gW1xyXG4gIHtcclxuICAgIHR5cGU6IFwicGFuZWxMaW5lXCIsXHJcbiAgICB0aXRsZTogXCLmt7vliqDliIblibLnur9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJwYW5lbFJlbWFya1wiLFxyXG4gICAgdGl0bGU6IFwi5re75Yqg5paH5pys5o+P6L+wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwicGFuZWxFbXBsb3llZVwiLFxyXG4gICAgdGl0bGU6IFwi5re75Yqg5ZGY5bel5Yy65Z+fXCJcclxuICB9LFxyXG4gIC8qIHtcclxuICAgIHR5cGU6IFwicGFuZWxTaW5nbGVcIixcclxuICAgIHRpdGxlOiBcIua3u+WKoOWNleiusOW9leWMuuWfn1wiXHJcbiAgfSwgKi9cclxuICB7XHJcbiAgICB0eXBlOiBcInBhbmVsTXVsdGlwbGVcIixcclxuICAgIHRpdGxlOiBcIua3u+WKoOWkmuiusOW9leWMuuWfn1wiXHJcbiAgfVxyXG5dO1xyXG5leHBvcnQgY29uc3QgTGF5b3V0Q29sdW1uOiBGb3JtTGF5b3V0W10gPSBbXHJcbiAge1xyXG4gICAgdHlwZTogXCJjb2x1bW4xXCIsXHJcbiAgICB0aXRsZTogXCLkuIDooYzkuIDliJdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJjb2x1bW4yXCIsXHJcbiAgICB0aXRsZTogXCLkuIDooYzkuozliJdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJjb2x1bW4zXCIsXHJcbiAgICB0aXRsZTogXCLkuIDooYzkuInliJdcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUxheW91dCB7XHJcbiAgdHlwZTpcclxuICAgIHwgXCJwYW5lbFJlbWFya1wiXHJcbiAgICB8IFwicGFuZWxMaW5lXCJcclxuICAgIHwgXCJwYW5lbEVtcGxveWVlXCJcclxuICAgIHwgXCJwYW5lbFNpbmdsZVwiXHJcbiAgICB8IFwicGFuZWxNdWx0aXBsZVwiXHJcbiAgICB8IFwiY29sdW1uMVwiXHJcbiAgICB8IFwiY29sdW1uMlwiXHJcbiAgICB8IFwiY29sdW1uM1wiO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZYVGFibGVCdXNpbmVzcyB7XHJcbiAgdGFibGVjb2RlOiBzdHJpbmc7XHJcbiAgdGFibGVuYW1lOiBzdHJpbmc7XHJcbiAgZmllbGRzPzogVlhUYWJsZUZpZWxkQ29uZmlnW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdGVkTm9kZSB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPcmdEYXRhIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuPzogSVRyZWVEYXRhW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVEYXRhIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuPzogSVRyZWVEYXRhW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVHJlZUV2ZW50IHtcclxuICBjaGVja0RhdGE6IElDaGVja2VkVHJlZVtdO1xyXG4gIFthZGRpdGlvbmFsUHJvcGVydGllczogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrZWRUcmVlIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgW2FkZGl0aW9uYWxQcm9wZXJ0aWVzOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbi8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrZWRGaWVsZCB7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBmaWVsZDogVlhGb3JtRmllbGRDb25maWc7XHJcbn1cclxuXHJcbi8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1c2luZXNzVGFibGUge1xyXG4gIHByaW1hcnk6IFZYVGFibGVDb25maWc7XHJcbiAgY2hpbGQ6IHtcclxuICAgIHNpbmdsZTogVlhUYWJsZUNvbmZpZ1tdO1xyXG4gICAgbXVsdGlwbGU6IFZYVGFibGVDb25maWdbXTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0YWJsZSB7XHJcbiAgdGFibGV0eXBlPzogc3RyaW5nO1xyXG4gIHRhYmxlbGFiZWw/OiBzdHJpbmc7XHJcbiAgdGFibGVjb2RlPzogc3RyaW5nO1xyXG4gIHRhYmxlbmFtZT86IHN0cmluZztcclxuICB0YWJsZWZpZWxkcz86IGFueTtcclxufVxyXG5cclxuIFxyXG5leHBvcnQgaW50ZXJmYWNlIElBUElQYXJhbXN7XHJcbiAgdXJsOnN0cmluZyxcclxuICBwYXJhPzphbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVzaWduRm9ybUFQSXtcclxuICB0YWJsZXM/OklBUElQYXJhbXMsLy/ojrflj5bnm7jlhbPooajkv6Hmga9cclxuICBmb3JtOklBUElQYXJhbXMgLy/ooajljZVcclxufVxyXG5cclxuY29uc3QgUVVFU1RJT05UWVBFPXtcclxuICAgIFxyXG4gICAgLy/pgInmi6lcclxuICAgIHNlbGVjdF9zaW5nbGU6XCJzZWxlY3Rfc2luZ2xlXCIsLy/ljZXpgIlcclxuICAgIHNlbGVjdF9tdWx0aXBsZTpcInNlbGVjdF9tdWx0aXBsZVwiLC8v5aSa6YCJXHJcbiAgICBzZWxlY3RfaW1hZ2U6XCJzZWxlY3RfaW1hZ2VcIiwvL+WbvueJh+mAieaLqVxyXG4gICAgc2VsZWN0X3ZvdGVpbWFnZTpcInNlbGVjdF92b3RlaW1hZ2VcIiwvL+WbvueJh+aKleelqFxyXG4gICAgc2VsZWN0X3ZvdGVmb250Olwic2VsZWN0X3ZvdGVmb250XCIsLy/mloflrZfmipXnpahcclxuICAgIHNlbGVjdF9kcm9wZG93bjpcInNlbGVjdF9kcm9wZG93blwiLC8v5LiL5ouJ6YCJ5oupXHJcbiAgICBzZWxlY3RfY2FzY2FkZXI6XCJzZWxlY3RfY2FzY2FkZXJcIiwvL+e6p+iBlOmAieaLqVxyXG4gICAgc2VsZWN0X3NjYWxlcjpcInNlbGVjdF9zY2FsZXJcIiwvL+mHj+ihqFxyXG4gICAgc2VsZWN0X2NsYXNzaWZpY2F0aW9uOlwiY2xhc3NpZmljYXRpb25cIiwvL+WIhuexu1xyXG5cclxuICAgIC8v5aGr56m6XHJcbiAgICBibGFuazpcImJsYW5rXCIsLy/loavnqbpcclxuICAgIGJsYW5rX211bHRpcGxlOlwiYmxhbmtfbXVsdGlwbGVcIiwvL+WkmumhueWhq+epulxyXG4gICAgYmxhbmtfaG9yaXpvbnRhbDpcImJsYW5rX2hvcml6b250YWxcIiwvL+aoquWQkeWhq+epulxyXG4gICAgYmxhbmtfdGFibGU6XCJibGFua190YWJsZVwiLCAvL+iHquWKqOihqOagvCBcclxuICAgIFxyXG4gICAgLy/miZPliIZcclxuICAgIHNjb3JlOlwic2NvcmVcIiwvL+aJk+WIhumimCBcclxuICAgIHNjb3JlX3NvcnQ6XCJzY29yZV9zb3J0XCIsLy/mjpLluo/popggXHJcbiAgICBzY29yZV9ucHM6XCJzY29yZV9ucHNcIiwvL25wc+mimCBcclxuICAgIHNjb3JlX3Byb3BvcnRpb246XCJwcm9wb3J0aW9uXCIsLy/mr5Tph43pophcclxuICAgIHNjb3JlX2V2YWx1YXRpb246XCJzY29yZV9ldmFsdWF0aW9uXCIsLy/or4Tku7fpopjnm64gXHJcbiAgICBcclxuICAgIC8v5YW25LuWXHJcbiAgICBvdGhlcl9wYWdlOlwib3RoZXJfcGFnZVwiLC8v5YiG6aG1XHJcbiAgICBvdGhlcl9saW5lOlwib3RoZXJfbGluZVwiLC8v5YiG5Ymy57q/XHJcbiAgICBvdGhlcl91cGxvYWQ6XCJvdGhlcl91cGxvYWRcIiwvL+aWh+S7tuS4iuS8oFxyXG4gICAgb3RoZXJfcmVtYXJrOlwib3RoZXJfcmVtYXJrXCIsLy/lpIfms6jor7TmmI4gXHJcblxyXG4gICAgLy/kurrlkZhcclxuICAgIGVtcF9uYW1lOlwiZW1wX25hbWVcIiwvL+Wnk+WQjVxyXG4gICAgZW1wX21vYmlsZTpcImVtcF9tb2JpbGVcIiwvL+aJi+aculxyXG4gICAgZW1wX2VtYWlsOlwiZW1wX2VtYWlsXCIsLy/pgq7nrrFcclxuICAgIGVtcF9nZW5kZXI6XCJlbXBfZ2VuZGVyXCIsLy/mgKfliKtcclxuICAgIGVtcF9kYXRlOlwiZW1wX2RhdGVcIiwvL+aXpeacn1xyXG4gICAgZW1wX3RpbWU6XCJlbXBfdGltZVwiLC8v5pe26Ze0XHJcbiAgICBlbXBfYWdlOlwiZW1wX2FnZVwiLC8v5bm06b6EXHJcbiAgICBlbXBfZWR1Y2F0aW9uOlwiZW1wX2VkdWNhdGlvblwiLC8v5a2m5Y6GXHJcbiAgICBlbXBfbWFqb3I6XCJlbXBfbWFqb3JcIiwvL+S4k+S4mlxyXG4gICAgZW1wX3VuaXZlcnNpdHk6XCJlbXBfdW5pdmVyc2l0eVwiLC8v5a2m5qChXHJcbiAgICBlbXBfaW5kdXN0cnk6XCJlbXBfaW5kdXN0cnlcIiwvL+ihjOS4mlxyXG4gICAgZW1wX29jY3VwYXRpb246XCJlbXBfb2NjdXBhdGlvblwiLC8v6IGM5LiaXHJcbiAgICBlbXBfYWRkcmVzczpcImVtcF9hZGRyZXNzXCIsLy/ln47luILlnLDlnYBcclxuICAgIGVtcF9nZW9ncmFwaHk6XCJlbXBfZ2VvZ3JhcGh5XCIsLy/lnLDnkIbkvY3nva4gXHJcblxyXG4gICAgLy/nn6npmLVcclxuICAgIG1hdHJpeF9zZWxlY3Q6XCJtYXRyaXhfc2VsZWN0XCIsLy/nn6npmLXpgInmi6lcclxuICAgIG1hdHJpeF9zY29yZTpcIm1hdHJpeF9zY29yZVwiLC8v55+p6Zi15omT5YiGXHJcbiAgICBtYXRyaXhfYmxhbms6XCJtYXRyaXhfYmxhbmtcIiwvL+efqemYteWhq+epulxyXG4gICAgbWF0cml4X3NjYWxlOlwibWF0cml4X3NjYWxlXCIvL+efqemYtemHj+ihqFxyXG5cclxufSJdfQ==