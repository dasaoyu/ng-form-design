/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
/**
 * @record
 */
export function ITableQuery() { }
if (false) {
    /** @type {?} */
    ITableQuery.prototype.total;
    /** @type {?} */
    ITableQuery.prototype.pageIndex;
    /** @type {?} */
    ITableQuery.prototype.pageSize;
    /** @type {?|undefined} */
    ITableQuery.prototype.sortName;
    /** @type {?|undefined} */
    ITableQuery.prototype.sortValue;
    /** @type {?|undefined} */
    ITableQuery.prototype.parameter;
    /** @type {?} */
    ITableQuery.prototype.keyWord;
}
/**
 * @record
 */
export function ITableHeader() { }
if (false) {
    /** @type {?|undefined} */
    ITableHeader.prototype.key;
    /** @type {?|undefined} */
    ITableHeader.prototype.name;
    /** @type {?|undefined} */
    ITableHeader.prototype.width;
    /** @type {?|undefined} */
    ITableHeader.prototype.minWidth;
    /** @type {?|undefined} */
    ITableHeader.prototype.filterList;
    /** @type {?|undefined} */
    ITableHeader.prototype.checkboxable;
    /** @type {?} */
    ITableHeader.prototype.sortable;
    /** @type {?|undefined} */
    ITableHeader.prototype.hiden;
    /** @type {?|undefined} */
    ITableHeader.prototype.action;
    /* Skipping unhandled member: [additionalProperties: string]: any;*/
}
/**
 * @record
 */
export function ITableButton() { }
if (false) {
    /** @type {?|undefined} */
    ITableButton.prototype.type;
    /** @type {?|undefined} */
    ITableButton.prototype.text;
}
export class VXFormPrivateTable {
    constructor() {
        //tableId
        this.id = "";
        //是否要多选
        this.check = false;
        //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
        this.action = 0;
        //按钮列表
        this.buttonlist = [];
        //选中事件
        this.checkChangeEvent = new EventEmitter();
        //翻页事件
        this.pageIndexEvent = new EventEmitter();
        //排序事件
        this.orderChangeEvent = new EventEmitter();
        //过滤事件
        this.filterChangeEvent = new EventEmitter();
        //操作事件
        this.buttonAction = new EventEmitter();
        this.checkIds = [];
        this._headerData = [];
        this.isAllChecked = false;
        this.isIndeterminate = false;
        this.listData = [];
        this.listDataCheckedId = {};
        this.listDataSelectedList = [];
        this.query = {
            total: 0,
            pageIndex: 1,
            pageSize: 15,
            sortName: "",
            sortValue: "",
            keyWord: ""
        };
        this.tableScroll = {
            y: '332px'
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tableIndex(value) {
        this.query.pageIndex = value;
    }
    /**
     * @return {?}
     */
    get tableIndex() {
        return this.query.pageIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tableSize(value) {
        this.query.pageSize = value;
    }
    /**
     * @return {?}
     */
    get tableSize() {
        return this.query.pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tableTotal(value) {
        this.query.total = value;
    }
    /**
     * @return {?}
     */
    get tableTotal() {
        return this.query.total;
    }
    //table 头部信息
    /**
     * @param {?} value
     * @return {?}
     */
    set header(value) {
        if (value != null && value.length > 0) {
            value.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.prop = item.key;
                if (item.checkboxable) {
                    item.name = "";
                    item.width = 50;
                    item.canAutoResize = false;
                    item.resizeable = false;
                    item.frozenLeft = true;
                    item.checkboxable = true;
                    item.headerCheckboxable = true;
                }
                if (item.action) {
                    item.frozenRight = true;
                    item.canAutoResize = false;
                    item.resizeable = false;
                }
                this._headerData.push(item);
            }));
        }
    }
    /**
     * @return {?}
     */
    get header() {
        return this._headerData;
    }
    //table 行数据
    /**
     * @param {?} value
     * @return {?}
     */
    set body(value) {
        this.listData = value;
        if (this.listData == null || this.listData.length == 0) {
            this.tableScroll.y = "0px";
        }
        else {
            this.tableScroll.y = "332px";
        }
    }
    //默认选中Id
    /**
     * @param {?} value
     * @return {?}
     */
    set checkid(value) {
        this.listDataSelectedList = [];
        if (value != null && value.length > 0) {
            value.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.listDataCheckedId[item.id] = true;
                this.listDataSelectedList.push(item);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    //全选|全不选
    /**
     * @param {?} value
     * @return {?}
     */
    setCheckAll(value) {
        this.listData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (this.listDataCheckedId[item.id] = value)));
        this.setCheckStatus();
    }
    //设置某个选择|取消选中
    /**
     * @return {?}
     */
    setCheckStatus() {
        this.isAllChecked = this.listData.every((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listDataCheckedId[item.id]));
        this.isIndeterminate = this.listData.some((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listDataCheckedId[item.id])) && !this.isAllChecked;
        this.saveSelected();
    }
    //点击查询
    /**
     * @return {?}
     */
    queryChange() {
        this.pageIndexEvent.emit(this.query);
    }
    //点击翻页
    /**
     * @param {?} e
     * @return {?}
     */
    pageIndexChange(e) {
        this.query.pageIndex = e;
        this.pageIndexEvent.emit(this.query);
    }
    //点击排序
    /**
     * @param {?} sort
     * @return {?}
     */
    tableSort(sort) {
        this.query.sortName = sort.key;
        this.query.sortValue = sort.value;
        this.orderChangeEvent.emit(this.query);
    }
    //单击选中
    /**
     * @param {?} event
     * @return {?}
     */
    itemSelectChange(event) {
        this.listDataSelectedList.shift();
        this.listDataSelectedList.push({
            "id": event.id,
            "name": event.name
        });
        this.checkChangeEvent.emit(this.listDataSelectedList);
    }
    //保存选中
    /**
     * @return {?}
     */
    saveSelected() {
        Object.keys(this.listDataCheckedId).forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            /** @type {?} */
            let value = this.listDataCheckedId[id];
            if (value) {
                if (!this.listDataSelectedList.some((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => { return item.id == id; }))) {
                    this.listData.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */
                    (item, index, object) => {
                        if (item.id == id) {
                            this.listDataSelectedList.push({
                                id: item.id,
                                name: item.name
                            });
                        }
                    }));
                }
            }
            else {
                this.listDataSelectedList.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                (item, index, object) => {
                    if (item.id == id) {
                        object.splice(index, 1);
                    }
                }));
            }
        }));
        this.checkChangeEvent.emit(this.listDataSelectedList);
    }
    /**
     * @return {?}
     */
    selectAllClear() {
        this.isAllChecked = false;
        this.isIndeterminate = false;
        this.listDataCheckedId = {};
        this.listDataSelectedList = [];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    selectClearById(id) {
        this.listDataCheckedId[id] = false;
        this.setCheckStatus();
    }
}
VXFormPrivateTable.decorators = [
    { type: Component, args: [{
                selector: "vxform-private-table",
                template: "<div class=\"vx-form-table\">\r\n    <div class=\"vx-form-table-header\">\r\n        <div class=\"header-button\">\r\n            <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                <input type=\"text\" nz-input placeholder=\"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\" maxlength=\"50\" [(ngModel)]=\"query.keyWord\" />\r\n            </nz-input-group>\r\n            <ng-template #suffixIconButton>\r\n                <button nz-button nzType=\"primary\" nzSearch (click)=\"queryChange()\"><i nz-icon nzType=\"search\"></i></button>\r\n            </ng-template>\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"header-pagination\">\r\n            <nz-pagination [nzTotal]=\"query.total\" [nzPageIndex]=\"query.pageIndex\" [nzPageSize]=\"query.pageSize\" [nzSize]=\"'small'\" (nzPageIndexChange)=\"pageIndexChange($event)\"></nz-pagination>\r\n        </div>\r\n    </div>\r\n    <div class=\"vx-form-table-content\">\r\n        <nz-table [nzFrontPagination]=\"false\" nzShowPagination nzShowSizeChanger #rowSelectionTable [nzData]=\"listData\" [nzScroll]=\"tableScroll\">\r\n            <thead>\r\n                <tr>\r\n                    <ng-container *ngIf=\"check\">\r\n                        <th nzWidth=\"50px\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"isAllChecked\" [nzIndeterminate]=\"isIndeterminate\" (nzCheckedChange)=\"setCheckAll($event)\"></th>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <th [nzWidth]=\"item.width+'px'\">{{item.name}}</th>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action!=0\">\r\n                        <th nzRight=\"0px\" [nzWidth]=\"'100px'\">\u64CD\u4F5C</th>\r\n                    </ng-container>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n                    <ng-container *ngIf=\"check\">\r\n                        <td nzShowCheckbox [(nzChecked)]=\"listDataCheckedId[data.id]\" (nzCheckedChange)=\"setCheckStatus()\"></td>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <td>{{data[item.key]}}</td>\r\n                        </ng-container> \r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action==2\">\r\n                        <td><span class=\"itemSelect\" (click)=\"itemSelectChange(data)\">\u9009\u62E9</span></td>\r\n                    </ng-container>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n    <div class=\"vx-form-table-footer\">\r\n        <div class=\"tag-header\">\r\n            <label>\u5DF2\u9009<span>{{listDataSelectedList.length}}</span></label>\r\n            <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n        </div>\r\n        <div class=\"tag-content vxform-scrollbar \"> \r\n            <ng-container *ngFor=\"let item of listDataSelectedList\">\r\n                <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.id)\">{{item.name}}</nz-tag>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [":host ::ng-deep{width:100%}:host ::ng-deep .vx-form-table{background:#fff;display:flex;flex:1;flex-direction:column}:host ::ng-deep .vx-form-table-header{display:flex;flex-direction:row;padding:10px}:host ::ng-deep .vx-form-table-header .header-button{flex:1}:host ::ng-deep .vx-form-table-header .header-button nz-input-group{width:260px;margin-right:10px}:host ::ng-deep .vx-form-table-header .header-button .ant-input{font-size:12px}:host ::ng-deep .vx-form-table-header .hader-pagination{width:300px}:host ::ng-deep .vx-form-table-content{display:flex;flex-direction:row;flex:1;padding:0 10px}:host ::ng-deep .vx-form-table-content nz-table{flex:1}:host ::ng-deep .vx-form-table-content .ant-table{font-size:12px}:host ::ng-deep .vx-form-table-content .ant-table .ant-table-placeholder{border-bottom:0}:host ::ng-deep .vx-form-table-content .ant-table .ant-empty-normal{margin:115px 0}:host ::ng-deep .vx-form-table-content .ant-table-body{height:332px}:host ::ng-deep .vx-form-table-content .itemSelect{cursor:pointer}:host ::ng-deep .vx-form-table-footer{height:78px;margin:0 10px;padding:10px;background-color:#f6f7fb;display:flex;flex-direction:row}:host ::ng-deep .vx-form-table-footer .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .vx-form-table-footer .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(1){display:inline-block;width:100%}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(2){display:inline-block;width:100%;font-weight:400;color:#6375da;cursor:pointer;margin-top:5px}:host ::ng-deep .vx-form-table-footer .tag-content{flex:1}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag i{color:#6375da;font-weight:700}:host ::ng-deep .vx-form-table .ant-table-wrapper{border:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th{padding:6px 10px;background-color:#fff;border-right:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th:nth-last-child(1){border-right:0!important}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background:#fff}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr td{border:0;padding:6px 10px}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr:nth-child(odd){background-color:#f6f8fd}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:transparent!important;overflow-y:overlay!important}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#999;border-radius:6px;outline:#333 solid 1px}:host ::ng-deep .vx-form-table .ant-table-header{background:#fff;margin-bottom:0!important;overflow:hidden!important}:host ::ng-deep .vx-form-table .table-action{background:red;padding:3px 8px;border-radius:12px;color:#fff;font-size:12px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
VXFormPrivateTable.ctorParameters = () => [];
VXFormPrivateTable.propDecorators = {
    tableIndex: [{ type: Input }],
    tableSize: [{ type: Input }],
    tableTotal: [{ type: Input }],
    id: [{ type: Input }],
    check: [{ type: Input }],
    action: [{ type: Input }],
    header: [{ type: Input }],
    body: [{ type: Input }],
    buttonlist: [{ type: Input }],
    checkid: [{ type: Input }],
    checkChangeEvent: [{ type: Output }],
    pageIndexEvent: [{ type: Output }],
    orderChangeEvent: [{ type: Output }],
    filterChangeEvent: [{ type: Output }],
    buttonAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VXFormPrivateTable.prototype.id;
    /** @type {?} */
    VXFormPrivateTable.prototype.check;
    /** @type {?} */
    VXFormPrivateTable.prototype.action;
    /** @type {?} */
    VXFormPrivateTable.prototype.buttonlist;
    /** @type {?} */
    VXFormPrivateTable.prototype.checkChangeEvent;
    /** @type {?} */
    VXFormPrivateTable.prototype.pageIndexEvent;
    /** @type {?} */
    VXFormPrivateTable.prototype.orderChangeEvent;
    /** @type {?} */
    VXFormPrivateTable.prototype.filterChangeEvent;
    /** @type {?} */
    VXFormPrivateTable.prototype.buttonAction;
    /** @type {?} */
    VXFormPrivateTable.prototype.checkIds;
    /** @type {?} */
    VXFormPrivateTable.prototype._headerData;
    /** @type {?} */
    VXFormPrivateTable.prototype.isAllChecked;
    /** @type {?} */
    VXFormPrivateTable.prototype.isIndeterminate;
    /** @type {?} */
    VXFormPrivateTable.prototype.listData;
    /** @type {?} */
    VXFormPrivateTable.prototype.listDataCheckedId;
    /** @type {?} */
    VXFormPrivateTable.prototype.listDataSelectedList;
    /** @type {?} */
    VXFormPrivateTable.prototype.query;
    /** @type {?} */
    VXFormPrivateTable.prototype.tableScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJpdmF0ZS90YWJsZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBTWIsTUFBTSxlQUFlLENBQUM7Ozs7QUFFdkIsaUNBUUM7OztJQVBDLDRCQUFjOztJQUNkLGdDQUFrQjs7SUFDbEIsK0JBQWlCOztJQUNqQiwrQkFBa0I7O0lBQ2xCLGdDQUFtQjs7SUFDbkIsZ0NBQWdCOztJQUNoQiw4QkFBZTs7Ozs7QUFFakIsa0NBWUM7OztJQVhDLDJCQUFVOztJQUNWLDRCQUFjOztJQUVkLDZCQUFlOztJQUNmLGdDQUFrQjs7SUFDbEIsa0NBQWlCOztJQUNqQixvQ0FBdUI7O0lBQ3ZCLGdDQUFrQjs7SUFDbEIsNkJBQWdCOztJQUNoQiw4QkFBaUI7Ozs7OztBQUluQixrQ0FHQzs7O0lBRkMsNEJBQWM7O0lBQ2QsNEJBQWM7O0FBVWhCLE1BQU0sT0FBTyxrQkFBa0I7SUF3SDdCOztRQWhHUyxPQUFFLEdBQVMsRUFBRSxDQUFDOztRQUdkLFVBQUssR0FBRyxLQUFLLENBQUM7O1FBR2QsV0FBTSxHQUFHLENBQUMsQ0FBQzs7UUEwQ1gsZUFBVSxHQUFtQixFQUFFLENBQUM7O1FBZS9CLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUV6RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUV2RCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFekQsc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRTFELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0QsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFT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QUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUMsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQU07UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBNU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw4OUdBQXFDOzthQUV0Qzs7Ozs7eUJBR0UsS0FBSzt3QkFPTCxLQUFLO3lCQU9MLEtBQUs7aUJBUUwsS0FBSztvQkFHTCxLQUFLO3FCQUdMLEtBQUs7cUJBR0wsS0FBSzttQkE0QkwsS0FBSzt5QkFXTCxLQUFLO3NCQUdMLEtBQUs7K0JBWUwsTUFBTTs2QkFFTixNQUFNOytCQUVOLE1BQU07Z0NBRU4sTUFBTTsyQkFFTixNQUFNOzs7O0lBdkVQLGdDQUF1Qjs7SUFHdkIsbUNBQXVCOztJQUd2QixvQ0FBb0I7O0lBMENwQix3Q0FBeUM7O0lBZXpDLDhDQUFtRTs7SUFFbkUsNENBQWlFOztJQUVqRSw4Q0FBbUU7O0lBRW5FLCtDQUFvRTs7SUFFcEUsMENBQStEOztJQUcvRCxzQ0FBd0I7O0lBQ3hCLHlDQUF1Qjs7SUFFdkIsMENBQXFCOztJQUNyQiw2Q0FBd0I7O0lBRXhCLHNDQUFxQjs7SUFDckIsK0NBQW1EOztJQUNuRCxrREFBaUM7O0lBRWpDLG1DQU9DOztJQUNELHlDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVF1ZXJ5IHtcclxuICB0b3RhbDogbnVtYmVyO1xyXG4gIHBhZ2VJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc29ydE5hbWU/OiBzdHJpbmc7XHJcbiAgc29ydFZhbHVlPzogc3RyaW5nO1xyXG4gIHBhcmFtZXRlcj86IGFueTtcclxuICBrZXlXb3JkOnN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUhlYWRlciB7XHJcbiAga2V5PzogYW55O1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgLy9wb3A/OiBzdHJpbmc7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgZmlsdGVyTGlzdD86IGFueTtcclxuICBjaGVja2JveGFibGU/OiBib29sZWFuO1xyXG4gIHNvcnRhYmxlOiBib29sZWFuO1xyXG4gIGhpZGVuPzogYm9vbGVhbixcclxuICBhY3Rpb24/OiBib29sZWFuO1xyXG4gIFthZGRpdGlvbmFsUHJvcGVydGllczogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUJ1dHRvbiB7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICB0ZXh0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1wcml2YXRlLXRhYmxlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtUHJpdmF0ZVRhYmxlICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICBcclxuICBASW5wdXQoKSBzZXQgdGFibGVJbmRleCh2YWx1ZTpudW1iZXIpe1xyXG4gICAgdGhpcy5xdWVyeS5wYWdlSW5kZXg9dmFsdWU7XHJcbiAgfVxyXG4gIGdldCB0YWJsZUluZGV4KCl7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5wYWdlSW5kZXg7XHJcbiAgfVxyXG4gIFxyXG4gIEBJbnB1dCgpIHNldCB0YWJsZVNpemUodmFsdWU6bnVtYmVyKXtcclxuICAgIHRoaXMucXVlcnkucGFnZVNpemU9dmFsdWU7XHJcbiAgfVxyXG4gIGdldCB0YWJsZVNpemUoKXtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LnBhZ2VTaXplO1xyXG4gIH1cclxuICBcclxuICBASW5wdXQoKSBzZXQgdGFibGVUb3RhbCh2YWx1ZTpudW1iZXIpe1xyXG4gICAgdGhpcy5xdWVyeS50b3RhbD12YWx1ZTtcclxuICB9XHJcbiAgZ2V0IHRhYmxlVG90YWwoKXtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LnRvdGFsO1xyXG4gIH1cclxuXHJcbiAgLy90YWJsZUlkXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZz1cIlwiO1xyXG5cclxuICAvL+aYr+WQpuimgeWkmumAiVxyXG4gIEBJbnB1dCgpIGNoZWNrID0gZmFsc2U7XHJcblxyXG4gIC8v5piv5ZCm5pyJ5pON5L2c5YiXMCDmsqHmnInmk43kvZzliJfvvJsxIOWkmuS4quaTjeS9nOaMiemSriAyIOmAieaLqVxyXG4gIEBJbnB1dCgpIGFjdGlvbiA9IDA7XHJcblxyXG4gIC8vdGFibGUg5aS06YOo5L+h5oGvXHJcbiAgQElucHV0KClcclxuICBzZXQgaGVhZGVyKHZhbHVlOiBJVGFibGVIZWFkZXJbXSkge1xyXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0ucHJvcCA9IGl0ZW0ua2V5O1xyXG4gICAgICAgIGlmIChpdGVtLmNoZWNrYm94YWJsZSkge1xyXG4gICAgICAgICAgaXRlbS5uYW1lPVwiXCI7XHJcbiAgICAgICAgICBpdGVtLndpZHRoPTUwO1xyXG4gICAgICAgICAgaXRlbS5jYW5BdXRvUmVzaXplID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLnJlc2l6ZWFibGUgPSBmYWxzZTtcclxuICAgICAgICAgIGl0ZW0uZnJvemVuTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICBpdGVtLmNoZWNrYm94YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICBpdGVtLmhlYWRlckNoZWNrYm94YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGl0ZW0uYWN0aW9uKXsgXHJcbiAgICAgICAgICBpdGVtLmZyb3plblJpZ2h0PXRydWU7XHJcbiAgICAgICAgICBpdGVtLmNhbkF1dG9SZXNpemU9ZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLnJlc2l6ZWFibGU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlYWRlckRhdGEucHVzaChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBoZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyRGF0YTtcclxuICB9XHJcblxyXG4gIC8vdGFibGUg6KGM5pWw5o2uXHJcbiAgQElucHV0KClcclxuICBzZXQgYm9keSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMubGlzdERhdGEgPSB2YWx1ZTtcclxuICAgIGlmKHRoaXMubGlzdERhdGE9PW51bGwgfHwgdGhpcy5saXN0RGF0YS5sZW5ndGg9PTApe1xyXG4gICAgICB0aGlzLnRhYmxlU2Nyb2xsLnk9XCIwcHhcIjtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnRhYmxlU2Nyb2xsLnk9XCIzMzJweFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/mjInpkq7liJfooahcclxuICBASW5wdXQoKSBidXR0b25saXN0OiBJVGFibGVCdXR0b25bXSA9IFtdO1xyXG5cclxuICAvL+m7mOiupOmAieS4rUlkXHJcbiAgQElucHV0KClcclxuICBzZXQgY2hlY2tpZCh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMubGlzdERhdGFTZWxlY3RlZExpc3Q9W107XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YUNoZWNrZWRJZFtpdGVtLmlkXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v6YCJ5Lit5LqL5Lu2XHJcbiAgQE91dHB1dCgpIGNoZWNrQ2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8v57+76aG15LqL5Lu2XHJcbiAgQE91dHB1dCgpIHBhZ2VJbmRleEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvL+aOkuW6j+S6i+S7tlxyXG4gIEBPdXRwdXQoKSBvcmRlckNoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvL+i/h+a7pOS6i+S7tlxyXG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy/mk43kvZzkuovku7ZcclxuICBAT3V0cHV0KCkgYnV0dG9uQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIGNoZWNrSWRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIF9oZWFkZXJEYXRhOmFueVtdID0gW107XHJcblxyXG4gIGlzQWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlOyBcclxuXHJcbiAgbGlzdERhdGE6IGFueVtdID0gW107XHJcbiAgbGlzdERhdGFDaGVja2VkSWQ6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgbGlzdERhdGFTZWxlY3RlZExpc3Q6IGFueVtdID0gW107XHJcblxyXG4gIHF1ZXJ5OiBJVGFibGVRdWVyeSA9IHtcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgcGFnZUluZGV4OjEsXHJcbiAgICBwYWdlU2l6ZTogMTUsXHJcbiAgICBzb3J0TmFtZTogXCJcIixcclxuICAgIHNvcnRWYWx1ZTogXCJcIixcclxuICAgIGtleVdvcmQ6XCJcIlxyXG4gIH1cclxuICB0YWJsZVNjcm9sbCA9IHtcclxuICAgIHk6ICczMzJweCdcclxuICB9O1xyXG4gXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt9XHJcbiBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy/lhajpgIl85YWo5LiN6YCJXHJcbiAgc2V0Q2hlY2tBbGwodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdERhdGEuZm9yRWFjaChpdGVtID0+ICh0aGlzLmxpc3REYXRhQ2hlY2tlZElkW2l0ZW0uaWRdID0gdmFsdWUpKTtcclxuICAgIHRoaXMuc2V0Q2hlY2tTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIC8v6K6+572u5p+Q5Liq6YCJ5oupfOWPlua2iOmAieS4rVxyXG4gIHNldENoZWNrU3RhdHVzKCk6IHZvaWQgeyBcclxuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gdGhpcy5saXN0RGF0YS5ldmVyeShpdGVtID0+IHRoaXMubGlzdERhdGFDaGVja2VkSWRbaXRlbS5pZF0pO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSB0aGlzLmxpc3REYXRhLnNvbWUoaXRlbSA9PiB0aGlzLmxpc3REYXRhQ2hlY2tlZElkW2l0ZW0uaWRdKSAmJiAhdGhpcy5pc0FsbENoZWNrZWQ7XHJcbiAgICB0aGlzLnNhdmVTZWxlY3RlZCgpO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIC8v54K55Ye75p+l6K+iXHJcbiAgcXVlcnlDaGFuZ2UoKVxyXG4gIHtcclxuICAgIHRoaXMucGFnZUluZGV4RXZlbnQuZW1pdCh0aGlzLnF1ZXJ5KTsgIFxyXG4gIH1cclxuXHJcbiAgLy/ngrnlh7vnv7vpobVcclxuICBwYWdlSW5kZXhDaGFuZ2UoZTpudW1iZXIpIHtcclxuICAgIHRoaXMucXVlcnkucGFnZUluZGV4ID0gZTtcclxuICAgIHRoaXMucGFnZUluZGV4RXZlbnQuZW1pdCh0aGlzLnF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIC8v54K55Ye75o6S5bqPXHJcbiAgdGFibGVTb3J0KHNvcnQ6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgdGhpcy5xdWVyeS5zb3J0TmFtZSA9IHNvcnQua2V5O1xyXG4gICAgdGhpcy5xdWVyeS5zb3J0VmFsdWUgPSBzb3J0LnZhbHVlO1xyXG4gICAgdGhpcy5vcmRlckNoYW5nZUV2ZW50LmVtaXQodGhpcy5xdWVyeSk7XHJcbiAgfSBcclxuXHJcbiAgLy/ljZXlh7vpgInkuK1cclxuICBpdGVtU2VsZWN0Q2hhbmdlKGV2ZW50OmFueSl7XHJcbiAgICB0aGlzLmxpc3REYXRhU2VsZWN0ZWRMaXN0LnNoaWZ0KCk7XHJcbiAgICB0aGlzLmxpc3REYXRhU2VsZWN0ZWRMaXN0LnB1c2goe1xyXG4gICAgICBcImlkXCI6ZXZlbnQuaWQsXHJcbiAgICAgIFwibmFtZVwiOmV2ZW50Lm5hbWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja0NoYW5nZUV2ZW50LmVtaXQodGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdCk7XHJcbiAgfVxyXG4gXHJcbiAgLy/kv53lrZjpgInkuK1cclxuICBzYXZlU2VsZWN0ZWQoKXsgXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmxpc3REYXRhQ2hlY2tlZElkKS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5saXN0RGF0YUNoZWNrZWRJZFtpZF07XHJcbiAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICBpZighdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdC5zb21lKGl0ZW09PntyZXR1cm4gaXRlbS5pZD09aWR9KSl7XHJcbiAgICAgICAgICB0aGlzLmxpc3REYXRhLmZvckVhY2goKGl0ZW0saW5kZXgsb2JqZWN0KT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtLmlkPT1pZCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOml0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOml0ZW0ubmFtZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdC5mb3JFYWNoKChpdGVtLGluZGV4LG9iamVjdCk9PntcclxuICAgICAgICAgICAgaWYoaXRlbS5pZD09aWQpe1xyXG4gICAgICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLmNoZWNrQ2hhbmdlRXZlbnQuZW1pdCh0aGlzLmxpc3REYXRhU2VsZWN0ZWRMaXN0KTsgXHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdEFsbENsZWFyKCl7XHJcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTsgXHJcbiAgICB0aGlzLmxpc3REYXRhQ2hlY2tlZElkPXt9O1xyXG4gICAgdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdD1bXTsgXHJcbiAgfVxyXG5cclxuICBzZWxlY3RDbGVhckJ5SWQoaWQ6YW55KXtcclxuICAgIHRoaXMubGlzdERhdGFDaGVja2VkSWRbaWRdPWZhbHNlO1xyXG4gICAgdGhpcy5zZXRDaGVja1N0YXR1cygpO1xyXG4gIH1cclxufVxyXG4iXX0=