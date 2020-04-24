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
var VXFormPrivateTable = /** @class */ (function () {
    function VXFormPrivateTable() {
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
    Object.defineProperty(VXFormPrivateTable.prototype, "tableIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.query.pageIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.query.pageIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormPrivateTable.prototype, "tableSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.query.pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.query.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormPrivateTable.prototype, "tableTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.query.total;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.query.total = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormPrivateTable.prototype, "header", {
        get: /**
         * @return {?}
         */
        function () {
            return this._headerData;
        },
        //table 头部信息
        set: 
        //table 头部信息
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value != null && value.length > 0) {
                value.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
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
                    _this._headerData.push(item);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormPrivateTable.prototype, "body", {
        //table 行数据
        set: 
        //table 行数据
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.listData = value;
            if (this.listData == null || this.listData.length == 0) {
                this.tableScroll.y = "0px";
            }
            else {
                this.tableScroll.y = "332px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormPrivateTable.prototype, "checkid", {
        //默认选中Id
        set: 
        //默认选中Id
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this.listDataSelectedList = [];
            if (value != null && value.length > 0) {
                value.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    _this.listDataCheckedId[item.id] = true;
                    _this.listDataSelectedList.push(item);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormPrivateTable.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    VXFormPrivateTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    VXFormPrivateTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    //全选|全不选
    //全选|全不选
    /**
     * @param {?} value
     * @return {?}
     */
    VXFormPrivateTable.prototype.setCheckAll = 
    //全选|全不选
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.listData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (_this.listDataCheckedId[item.id] = value); }));
        this.setCheckStatus();
    };
    //设置某个选择|取消选中
    //设置某个选择|取消选中
    /**
     * @return {?}
     */
    VXFormPrivateTable.prototype.setCheckStatus = 
    //设置某个选择|取消选中
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllChecked = this.listData.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.listDataCheckedId[item.id]; }));
        this.isIndeterminate = this.listData.some((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.listDataCheckedId[item.id]; })) && !this.isAllChecked;
        this.saveSelected();
    };
    //点击查询
    //点击查询
    /**
     * @return {?}
     */
    VXFormPrivateTable.prototype.queryChange = 
    //点击查询
    /**
     * @return {?}
     */
    function () {
        this.pageIndexEvent.emit(this.query);
    };
    //点击翻页
    //点击翻页
    /**
     * @param {?} e
     * @return {?}
     */
    VXFormPrivateTable.prototype.pageIndexChange = 
    //点击翻页
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.query.pageIndex = e;
        this.pageIndexEvent.emit(this.query);
    };
    //点击排序
    //点击排序
    /**
     * @param {?} sort
     * @return {?}
     */
    VXFormPrivateTable.prototype.tableSort = 
    //点击排序
    /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        this.query.sortName = sort.key;
        this.query.sortValue = sort.value;
        this.orderChangeEvent.emit(this.query);
    };
    //单击选中
    //单击选中
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormPrivateTable.prototype.itemSelectChange = 
    //单击选中
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.listDataSelectedList.shift();
        this.listDataSelectedList.push({
            "id": event.id,
            "name": event.name
        });
        this.checkChangeEvent.emit(this.listDataSelectedList);
    };
    //保存选中
    //保存选中
    /**
     * @return {?}
     */
    VXFormPrivateTable.prototype.saveSelected = 
    //保存选中
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.listDataCheckedId).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var value = _this.listDataCheckedId[id];
            if (value) {
                if (!_this.listDataSelectedList.some((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.id == id; }))) {
                    _this.listData.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} object
                     * @return {?}
                     */
                    function (item, index, object) {
                        if (item.id == id) {
                            _this.listDataSelectedList.push({
                                id: item.id,
                                name: item.name
                            });
                        }
                    }));
                }
            }
            else {
                _this.listDataSelectedList.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                function (item, index, object) {
                    if (item.id == id) {
                        object.splice(index, 1);
                    }
                }));
            }
        }));
        this.checkChangeEvent.emit(this.listDataSelectedList);
    };
    /**
     * @return {?}
     */
    VXFormPrivateTable.prototype.selectAllClear = /**
     * @return {?}
     */
    function () {
        this.isAllChecked = false;
        this.isIndeterminate = false;
        this.listDataCheckedId = {};
        this.listDataSelectedList = [];
    };
    /**
     * @param {?} id
     * @return {?}
     */
    VXFormPrivateTable.prototype.selectClearById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.listDataCheckedId[id] = false;
        this.setCheckStatus();
    };
    VXFormPrivateTable.decorators = [
        { type: Component, args: [{
                    selector: "vxform-private-table",
                    template: "<div class=\"vx-form-table\">\r\n    <div class=\"vx-form-table-header\">\r\n        <div class=\"header-button\">\r\n            <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\">\r\n                <input type=\"text\" nz-input placeholder=\"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\" maxlength=\"50\" [(ngModel)]=\"query.keyWord\" />\r\n            </nz-input-group>\r\n            <ng-template #suffixIconButton>\r\n                <button nz-button nzType=\"primary\" nzSearch (click)=\"queryChange()\"><i nz-icon nzType=\"search\"></i></button>\r\n            </ng-template>\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"header-pagination\">\r\n            <nz-pagination [nzTotal]=\"query.total\" [nzPageIndex]=\"query.pageIndex\" [nzPageSize]=\"query.pageSize\" [nzSize]=\"'small'\" (nzPageIndexChange)=\"pageIndexChange($event)\"></nz-pagination>\r\n        </div>\r\n    </div>\r\n    <div class=\"vx-form-table-content\">\r\n        <nz-table [nzFrontPagination]=\"false\" nzShowPagination nzShowSizeChanger #rowSelectionTable [nzData]=\"listData\" [nzScroll]=\"tableScroll\">\r\n            <thead>\r\n                <tr>\r\n                    <ng-container *ngIf=\"check\">\r\n                        <th nzWidth=\"50px\" nzLeft=\"0px\" nzShowCheckbox [(nzChecked)]=\"isAllChecked\" [nzIndeterminate]=\"isIndeterminate\" (nzCheckedChange)=\"setCheckAll($event)\"></th>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <th [nzWidth]=\"item.width+'px'\">{{item.name}}</th>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action!=0\">\r\n                        <th nzRight=\"0px\" [nzWidth]=\"'100px'\">\u64CD\u4F5C</th>\r\n                    </ng-container>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n                    <ng-container *ngIf=\"check\">\r\n                        <td nzShowCheckbox [(nzChecked)]=\"listDataCheckedId[data.id]\" (nzCheckedChange)=\"setCheckStatus()\"></td>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let item of header\">\r\n                        <ng-container *ngIf=\"item.hiden!=true && item.action!=true\">\r\n                            <td>{{data[item.key]}}</td>\r\n                        </ng-container> \r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"action==2\">\r\n                        <td><span class=\"itemSelect\" (click)=\"itemSelectChange(data)\">\u9009\u62E9</span></td>\r\n                    </ng-container>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n    <div class=\"vx-form-table-footer\">\r\n        <div class=\"tag-header\">\r\n            <label>\u5DF2\u9009<span>{{listDataSelectedList.length}}</span></label>\r\n            <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n        </div>\r\n        <div class=\"tag-content vxform-scrollbar \"> \r\n            <ng-container *ngFor=\"let item of listDataSelectedList\">\r\n                <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.id)\">{{item.name}}</nz-tag>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>",
                    styles: [":host ::ng-deep{width:100%}:host ::ng-deep .vx-form-table{background:#fff;display:flex;flex:1;flex-direction:column}:host ::ng-deep .vx-form-table-header{display:flex;flex-direction:row;padding:10px}:host ::ng-deep .vx-form-table-header .header-button{flex:1}:host ::ng-deep .vx-form-table-header .header-button nz-input-group{width:260px;margin-right:10px}:host ::ng-deep .vx-form-table-header .header-button .ant-input{font-size:12px}:host ::ng-deep .vx-form-table-header .hader-pagination{width:300px}:host ::ng-deep .vx-form-table-content{display:flex;flex-direction:row;flex:1;padding:0 10px}:host ::ng-deep .vx-form-table-content nz-table{flex:1}:host ::ng-deep .vx-form-table-content .ant-table{font-size:12px}:host ::ng-deep .vx-form-table-content .ant-table .ant-table-placeholder{border-bottom:0}:host ::ng-deep .vx-form-table-content .ant-table .ant-empty-normal{margin:115px 0}:host ::ng-deep .vx-form-table-content .ant-table-body{height:332px}:host ::ng-deep .vx-form-table-content .itemSelect{cursor:pointer}:host ::ng-deep .vx-form-table-footer{height:78px;margin:0 10px;padding:10px;background-color:#f6f7fb;display:flex;flex-direction:row}:host ::ng-deep .vx-form-table-footer .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .vx-form-table-footer .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(1){display:inline-block;width:100%}:host ::ng-deep .vx-form-table-footer .tag-header label:nth-child(2){display:inline-block;width:100%;font-weight:400;color:#6375da;cursor:pointer;margin-top:5px}:host ::ng-deep .vx-form-table-footer .tag-content{flex:1}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .vx-form-table-footer .tag-content .ant-tag i{color:#6375da;font-weight:700}:host ::ng-deep .vx-form-table .ant-table-wrapper{border:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th{padding:6px 10px;background-color:#fff;border-right:1px solid #e8e8e8}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th:nth-last-child(1){border-right:0!important}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-thead tr th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{background:#fff}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr td{border:0;padding:6px 10px}:host ::ng-deep .vx-form-table .ant-table-wrapper .ant-table-tbody tr:nth-child(odd){background-color:#f6f8fd}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body{scrollbar-color:transparent!important;overflow-y:overlay!important}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vx-form-table .ant-table-fixed-header>.ant-table-content>.ant-table-scroll>.ant-table-body::-webkit-scrollbar-thumb{background-color:#999;border-radius:6px;outline:#333 solid 1px}:host ::ng-deep .vx-form-table .ant-table-header{background:#fff;margin-bottom:0!important;overflow:hidden!important}:host ::ng-deep .vx-form-table .table-action{background:red;padding:3px 8px;border-radius:12px;color:#fff;font-size:12px;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    VXFormPrivateTable.ctorParameters = function () { return []; };
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
    return VXFormPrivateTable;
}());
export { VXFormPrivateTable };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJpdmF0ZS90YWJsZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBTWIsTUFBTSxlQUFlLENBQUM7Ozs7QUFFdkIsaUNBUUM7OztJQVBDLDRCQUFjOztJQUNkLGdDQUFrQjs7SUFDbEIsK0JBQWlCOztJQUNqQiwrQkFBa0I7O0lBQ2xCLGdDQUFtQjs7SUFDbkIsZ0NBQWdCOztJQUNoQiw4QkFBZTs7Ozs7QUFFakIsa0NBWUM7OztJQVhDLDJCQUFVOztJQUNWLDRCQUFjOztJQUVkLDZCQUFlOztJQUNmLGdDQUFrQjs7SUFDbEIsa0NBQWlCOztJQUNqQixvQ0FBdUI7O0lBQ3ZCLGdDQUFrQjs7SUFDbEIsNkJBQWdCOztJQUNoQiw4QkFBaUI7Ozs7OztBQUluQixrQ0FHQzs7O0lBRkMsNEJBQWM7O0lBQ2QsNEJBQWM7O0FBS2hCO0lBNkhFOztRQWhHUyxPQUFFLEdBQVMsRUFBRSxDQUFDOztRQUdkLFVBQUssR0FBRyxLQUFLLENBQUM7O1FBR2QsV0FBTSxHQUFHLENBQUMsQ0FBQzs7UUEwQ1gsZUFBVSxHQUFtQixFQUFFLENBQUM7O1FBZS9CLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUV6RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUV2RCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFekQsc0JBQWlCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRTFELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0QsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFTLEVBQUUsQ0FBQztRQUV2Qixp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LDBDQUErRDs7SUFHL0Qsc0NBQXdCOztJQUN4Qix5Q0FBdUI7O0lBRXZCLDBDQUFxQjs7SUFDckIsNkNBQXdCOztJQUV4QixzQ0FBcUI7O0lBQ3JCLCtDQUFtRDs7SUFDbkQsa0RBQWlDOztJQUVqQyxtQ0FPQzs7SUFDRCx5Q0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVRdWVyeSB7XHJcbiAgdG90YWw6IG51bWJlcjtcclxuICBwYWdlSW5kZXg6IG51bWJlcjtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIHNvcnROYW1lPzogc3RyaW5nO1xyXG4gIHNvcnRWYWx1ZT86IHN0cmluZztcclxuICBwYXJhbWV0ZXI/OiBhbnk7XHJcbiAga2V5V29yZDpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVIZWFkZXIge1xyXG4gIGtleT86IGFueTtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIC8vcG9wPzogc3RyaW5nO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gIGZpbHRlckxpc3Q/OiBhbnk7XHJcbiAgY2hlY2tib3hhYmxlPzogYm9vbGVhbjtcclxuICBzb3J0YWJsZTogYm9vbGVhbjtcclxuICBoaWRlbj86IGJvb2xlYW4sXHJcbiAgYWN0aW9uPzogYm9vbGVhbjtcclxuICBbYWRkaXRpb25hbFByb3BlcnRpZXM6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVCdXR0b24ge1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgdGV4dD86IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tcHJpdmF0ZS10YWJsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybVByaXZhdGVUYWJsZSAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgXHJcbiAgQElucHV0KCkgc2V0IHRhYmxlSW5kZXgodmFsdWU6bnVtYmVyKXtcclxuICAgIHRoaXMucXVlcnkucGFnZUluZGV4PXZhbHVlO1xyXG4gIH1cclxuICBnZXQgdGFibGVJbmRleCgpe1xyXG4gICAgcmV0dXJuIHRoaXMucXVlcnkucGFnZUluZGV4O1xyXG4gIH1cclxuICBcclxuICBASW5wdXQoKSBzZXQgdGFibGVTaXplKHZhbHVlOm51bWJlcil7XHJcbiAgICB0aGlzLnF1ZXJ5LnBhZ2VTaXplPXZhbHVlO1xyXG4gIH1cclxuICBnZXQgdGFibGVTaXplKCl7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5wYWdlU2l6ZTtcclxuICB9XHJcbiAgXHJcbiAgQElucHV0KCkgc2V0IHRhYmxlVG90YWwodmFsdWU6bnVtYmVyKXtcclxuICAgIHRoaXMucXVlcnkudG90YWw9dmFsdWU7XHJcbiAgfVxyXG4gIGdldCB0YWJsZVRvdGFsKCl7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeS50b3RhbDtcclxuICB9XHJcblxyXG4gIC8vdGFibGVJZFxyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc9XCJcIjtcclxuXHJcbiAgLy/mmK/lkKbopoHlpJrpgIlcclxuICBASW5wdXQoKSBjaGVjayA9IGZhbHNlO1xyXG5cclxuICAvL+aYr+WQpuacieaTjeS9nOWIlzAg5rKh5pyJ5pON5L2c5YiX77ybMSDlpJrkuKrmk43kvZzmjInpkq4gMiDpgInmi6lcclxuICBASW5wdXQoKSBhY3Rpb24gPSAwO1xyXG5cclxuICAvL3RhYmxlIOWktOmDqOS/oeaBr1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhlYWRlcih2YWx1ZTogSVRhYmxlSGVhZGVyW10pIHtcclxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLnByb3AgPSBpdGVtLmtleTtcclxuICAgICAgICBpZiAoaXRlbS5jaGVja2JveGFibGUpIHtcclxuICAgICAgICAgIGl0ZW0ubmFtZT1cIlwiO1xyXG4gICAgICAgICAgaXRlbS53aWR0aD01MDtcclxuICAgICAgICAgIGl0ZW0uY2FuQXV0b1Jlc2l6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaXRlbS5yZXNpemVhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLmZyb3plbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgaXRlbS5jaGVja2JveGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgaXRlbS5oZWFkZXJDaGVja2JveGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpdGVtLmFjdGlvbil7IFxyXG4gICAgICAgICAgaXRlbS5mcm96ZW5SaWdodD10cnVlO1xyXG4gICAgICAgICAgaXRlbS5jYW5BdXRvUmVzaXplPWZhbHNlO1xyXG4gICAgICAgICAgaXRlbS5yZXNpemVhYmxlPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oZWFkZXJEYXRhLnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgaGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlckRhdGE7XHJcbiAgfVxyXG5cclxuICAvL3RhYmxlIOihjOaVsOaNrlxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJvZHkodmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxpc3REYXRhID0gdmFsdWU7XHJcbiAgICBpZih0aGlzLmxpc3REYXRhPT1udWxsIHx8IHRoaXMubGlzdERhdGEubGVuZ3RoPT0wKXtcclxuICAgICAgdGhpcy50YWJsZVNjcm9sbC55PVwiMHB4XCI7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy50YWJsZVNjcm9sbC55PVwiMzMycHhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v5oyJ6ZKu5YiX6KGoXHJcbiAgQElucHV0KCkgYnV0dG9ubGlzdDogSVRhYmxlQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgLy/pu5jorqTpgInkuK1JZFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNoZWNraWQodmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxpc3REYXRhU2VsZWN0ZWRMaXN0PVtdO1xyXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMubGlzdERhdGFDaGVja2VkSWRbaXRlbS5pZF0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdERhdGFTZWxlY3RlZExpc3QucHVzaChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mAieS4reS6i+S7tlxyXG4gIEBPdXRwdXQoKSBjaGVja0NoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvL+e/u+mhteS6i+S7tlxyXG4gIEBPdXRwdXQoKSBwYWdlSW5kZXhFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy/mjpLluo/kuovku7ZcclxuICBAT3V0cHV0KCkgb3JkZXJDaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy/ov4fmu6Tkuovku7ZcclxuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8v5pON5L2c5LqL5Lu2XHJcbiAgQE91dHB1dCgpIGJ1dHRvbkFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBjaGVja0lkczogc3RyaW5nW10gPSBbXTtcclxuICBfaGVhZGVyRGF0YTphbnlbXSA9IFtdO1xyXG5cclxuICBpc0FsbENoZWNrZWQgPSBmYWxzZTtcclxuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTsgXHJcblxyXG4gIGxpc3REYXRhOiBhbnlbXSA9IFtdO1xyXG4gIGxpc3REYXRhQ2hlY2tlZElkOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gIGxpc3REYXRhU2VsZWN0ZWRMaXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICBxdWVyeTogSVRhYmxlUXVlcnkgPSB7XHJcbiAgICB0b3RhbDogMCxcclxuICAgIHBhZ2VJbmRleDoxLFxyXG4gICAgcGFnZVNpemU6IDE1LFxyXG4gICAgc29ydE5hbWU6IFwiXCIsXHJcbiAgICBzb3J0VmFsdWU6IFwiXCIsXHJcbiAgICBrZXlXb3JkOlwiXCJcclxuICB9XHJcbiAgdGFibGVTY3JvbGwgPSB7XHJcbiAgICB5OiAnMzMycHgnXHJcbiAgfTtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuIFxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG4gXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8v5YWo6YCJfOWFqOS4jemAiVxyXG4gIHNldENoZWNrQWxsKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3REYXRhLmZvckVhY2goaXRlbSA9PiAodGhpcy5saXN0RGF0YUNoZWNrZWRJZFtpdGVtLmlkXSA9IHZhbHVlKSk7XHJcbiAgICB0aGlzLnNldENoZWNrU3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICAvL+iuvue9ruafkOS4qumAieaLqXzlj5bmtojpgInkuK1cclxuICBzZXRDaGVja1N0YXR1cygpOiB2b2lkIHsgXHJcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IHRoaXMubGlzdERhdGEuZXZlcnkoaXRlbSA9PiB0aGlzLmxpc3REYXRhQ2hlY2tlZElkW2l0ZW0uaWRdKTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gdGhpcy5saXN0RGF0YS5zb21lKGl0ZW0gPT4gdGhpcy5saXN0RGF0YUNoZWNrZWRJZFtpdGVtLmlkXSkgJiYgIXRoaXMuaXNBbGxDaGVja2VkO1xyXG4gICAgdGhpcy5zYXZlU2VsZWN0ZWQoKTtcclxuICB9XHJcbiAgXHJcbiBcclxuICAvL+eCueWHu+afpeivolxyXG4gIHF1ZXJ5Q2hhbmdlKClcclxuICB7XHJcbiAgICB0aGlzLnBhZ2VJbmRleEV2ZW50LmVtaXQodGhpcy5xdWVyeSk7ICBcclxuICB9XHJcblxyXG4gIC8v54K55Ye757+76aG1XHJcbiAgcGFnZUluZGV4Q2hhbmdlKGU6bnVtYmVyKSB7XHJcbiAgICB0aGlzLnF1ZXJ5LnBhZ2VJbmRleCA9IGU7XHJcbiAgICB0aGlzLnBhZ2VJbmRleEV2ZW50LmVtaXQodGhpcy5xdWVyeSk7XHJcbiAgfVxyXG5cclxuICAvL+eCueWHu+aOkuW6j1xyXG4gIHRhYmxlU29ydChzb3J0OiB7IGtleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIHRoaXMucXVlcnkuc29ydE5hbWUgPSBzb3J0LmtleTtcclxuICAgIHRoaXMucXVlcnkuc29ydFZhbHVlID0gc29ydC52YWx1ZTtcclxuICAgIHRoaXMub3JkZXJDaGFuZ2VFdmVudC5lbWl0KHRoaXMucXVlcnkpO1xyXG4gIH0gXHJcblxyXG4gIC8v5Y2V5Ye76YCJ5LitXHJcbiAgaXRlbVNlbGVjdENoYW5nZShldmVudDphbnkpe1xyXG4gICAgdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdC5zaGlmdCgpO1xyXG4gICAgdGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdC5wdXNoKHtcclxuICAgICAgXCJpZFwiOmV2ZW50LmlkLFxyXG4gICAgICBcIm5hbWVcIjpldmVudC5uYW1lXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tDaGFuZ2VFdmVudC5lbWl0KHRoaXMubGlzdERhdGFTZWxlY3RlZExpc3QpO1xyXG4gIH1cclxuIFxyXG4gIC8v5L+d5a2Y6YCJ5LitXHJcbiAgc2F2ZVNlbGVjdGVkKCl7IFxyXG4gICAgT2JqZWN0LmtleXModGhpcy5saXN0RGF0YUNoZWNrZWRJZCkuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMubGlzdERhdGFDaGVja2VkSWRbaWRdO1xyXG4gICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgaWYoIXRoaXMubGlzdERhdGFTZWxlY3RlZExpc3Quc29tZShpdGVtPT57cmV0dXJuIGl0ZW0uaWQ9PWlkfSkpe1xyXG4gICAgICAgICAgdGhpcy5saXN0RGF0YS5mb3JFYWNoKChpdGVtLGluZGV4LG9iamVjdCk9PntcclxuICAgICAgICAgICAgaWYoaXRlbS5pZD09aWQpe1xyXG4gICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTZWxlY3RlZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDppdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTppdGVtLm5hbWVcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMubGlzdERhdGFTZWxlY3RlZExpc3QuZm9yRWFjaCgoaXRlbSxpbmRleCxvYmplY3QpPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQ9PWlkKXtcclxuICAgICAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGVja0NoYW5nZUV2ZW50LmVtaXQodGhpcy5saXN0RGF0YVNlbGVjdGVkTGlzdCk7IFxyXG4gIH1cclxuICBcclxuICBzZWxlY3RBbGxDbGVhcigpe1xyXG4gICAgdGhpcy5pc0FsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID0gZmFsc2U7IFxyXG4gICAgdGhpcy5saXN0RGF0YUNoZWNrZWRJZD17fTtcclxuICAgIHRoaXMubGlzdERhdGFTZWxlY3RlZExpc3Q9W107IFxyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2xlYXJCeUlkKGlkOmFueSl7XHJcbiAgICB0aGlzLmxpc3REYXRhQ2hlY2tlZElkW2lkXT1mYWxzZTtcclxuICAgIHRoaXMuc2V0Q2hlY2tTdGF0dXMoKTtcclxuICB9XHJcbn1cclxuIl19