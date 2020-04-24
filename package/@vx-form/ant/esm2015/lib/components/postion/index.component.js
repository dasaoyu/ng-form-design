/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
export class VXFormPostion {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.tag = false;
        this.treeChangeEvent = new EventEmitter();
        this.treeData = [];
        this.controlid = "";
        this.orgid = "";
        this.selectData = [];
        ////
        //是否要多选
        this.check = false;
        //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
        this.action = 0;
        //table 头部信息
        this.header = [
            { "key": "id", "name": "id", "hiden": true },
            { "key": "code", "name": "职位编码", "width": 100 },
            { "key": "name", "name": "职位名称", "width": 150 },
            { "key": "number", "name": "在职人数", "width": 80 },
            { "key": "parent", "name": "上级职位" }
        ];
        //table 行数据
        this.body = [];
        this.buttonlist = [];
        this.checkid = [];
        this.query = {
            total: 0,
            pageIndex: 1,
            pageSize: 15,
            sortName: "",
            sortValue: "",
            keyWord: ""
        };
    }
    //选择节点
    /**
     * @return {?}
     */
    get selectedNode() {
        return _.cloneDeep(this.selectData);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getOrgData();
        this.action = 2;
        if (this.selectType == "multiple") {
            this.check = true;
            this.action = 0;
        }
        if (this.selectType == "single") {
            this.check = false;
            this.action = 2;
            this.header.push({ "key": "action", "name": "操作", "hiden": true, "action": true });
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.defaultNode) {
        }
    }
    //获取Org数据集
    /**
     * @return {?}
     */
    getOrgData() {
        this.dataService.getTreeData({ id: this.controlid }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.treeData = res;
            this.getSelectData();
        }));
    }
    /**
     * @return {?}
     */
    get selectType() {
        /** @type {?} */
        let res = "";
        if (this.fieldConfig != undefined &&
            this.fieldConfig != null &&
            this.fieldConfig.templateOptions != undefined &&
            this.fieldConfig.templateOptions != null &&
            this.fieldConfig.templateOptions.selectType != undefined) {
            res = this.fieldConfig.templateOptions.selectType;
        }
        return res;
    }
    /**
     * @return {?}
     */
    getSelectData() {
        if (this.fieldConfig != null &&
            this.fieldConfig.model != undefined &&
            this.fieldConfig.model != null &&
            this.fieldConfig.key != undefined &&
            this.fieldConfig.key != null &&
            this.fieldConfig.model[this.fieldConfig.key] != undefined &&
            this.fieldConfig.model[this.fieldConfig.key] != null) {
            this.selectData = _.cloneDeep(this.fieldConfig.model[this.fieldConfig.key]);
        }
        if (this.selectData != null && this.selectData.length > 0) {
            this.checkid = this.selectData.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    "id": item.value,
                    "name": item.label
                };
            }));
        }
        else {
            this.checkid = [];
        }
    }
    /**
     * @return {?}
     */
    getPostionData() {
        this.dataService.getSysCtrPostionTable({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.query.pageIndex = res.index;
            this.query.total = res.total;
            this.body = res.data;
        }));
        this.getSelectData();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pageIndexChange(event) {
        this.dataService.getSysCtrPostionTable({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.query.pageIndex = event.pageIndex;
            this.query.total = res.total;
            this.body = res.data;
        }));
    }
    /**
     * @param {?} list
     * @return {?}
     */
    checkChange(list) {
        if (list != null && list.length > 0) {
            this.selectData = list.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    "label": item.name, "value": item.id
                };
            }));
        }
        else {
            this.selectData = [];
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    orgChange(event) {
        if (event != null && event != undefined && event.checkData != undefined && event.checkData.length > 0) {
            this.orgid = event.checkData[0].value;
            this.getPostionData();
        }
    }
}
VXFormPostion.decorators = [
    { type: Component, args: [{
                selector: "vxform-postion",
                template: "\r\n<div class=\"postion-org\">\r\n    <!-- <vx-org [data]=\"orgData\" [dimension]=\"true\" [tag]=\"false\" (treeChangeEvent)=\"orgChange($event)\">\r\n    </vx-org> -->\r\n    \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"'single'\" [tag]=\"false\" [expandAll]=\"false\"  (treeChangeEvent)=\"orgChange($event)\"></vxform-private-tree>\r\n</div>\r\n<div class=\"postion-list\"> \r\n    <vxform-private-table\r\n        [tableIndex]=\"query.pageIndex\"\r\n        [tableSize]=\"query.pageSize\"\r\n        [tableTotal]=\"query.total\"\r\n        [header]=\"header\"\r\n        [body]=\"body\"\r\n        [check]=\"check\"\r\n        [action]=\"action\"\r\n        [checkid]=\"checkid\" \r\n        (checkChangeEvent)=\"checkChange($event)\"\r\n        (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n    </vxform-private-table>\r\n</div>\r\n",
                providers: [DataService],
                styles: [":host ::ng-deep{display:flex;flex-direction:row;width:100%;height:100%}:host ::ng-deep .postion-org{width:240px;border-right:1px solid #e8e8e8}:host ::ng-deep .postion-org .component-tree .tree-item{padding:8px 5px 5px 8px!important}:host ::ng-deep .postion-org .ant-tree li ul{padding:0 0 0 15px}:host ::ng-deep .postion-list{flex:1}"]
            }] }
];
/** @nocollapse */
VXFormPostion.ctorParameters = () => [
    { type: DataService }
];
VXFormPostion.propDecorators = {
    fieldConfig: [{ type: Input }],
    tag: [{ type: Input }],
    treeChangeEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VXFormPostion.prototype.fieldConfig;
    /** @type {?} */
    VXFormPostion.prototype.tag;
    /** @type {?} */
    VXFormPostion.prototype.treeChangeEvent;
    /** @type {?} */
    VXFormPostion.prototype.treeData;
    /** @type {?} */
    VXFormPostion.prototype.controlid;
    /** @type {?} */
    VXFormPostion.prototype.orgid;
    /** @type {?} */
    VXFormPostion.prototype.selectData;
    /** @type {?} */
    VXFormPostion.prototype.check;
    /** @type {?} */
    VXFormPostion.prototype.action;
    /** @type {?} */
    VXFormPostion.prototype.header;
    /** @type {?} */
    VXFormPostion.prototype.body;
    /** @type {?} */
    VXFormPostion.prototype.buttonlist;
    /** @type {?} */
    VXFormPostion.prototype.checkid;
    /** @type {?} */
    VXFormPostion.prototype.query;
    /** @type {?} */
    VXFormPostion.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcG9zdGlvbi9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVXpELE1BQU0sT0FBTyxhQUFhOzs7O0lBa0J4QixZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWpCbEMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBELGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFTLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQW1CLEVBQUUsQ0FBQzs7O1FBeUNoQyxVQUFLLEdBQUcsS0FBSyxDQUFDOztRQUdkLFdBQU0sR0FBRyxDQUFDLENBQUM7O1FBR1gsV0FBTSxHQUFVO1lBQ2QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUM1QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQy9DLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDL0MsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxN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LENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDM0YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUEvS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHcyQkFBcUM7Z0JBRXJDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7YUFDekI7Ozs7WUFUUSxXQUFXOzs7MEJBV2pCLEtBQUs7a0JBQ0wsS0FBSzs4QkFDTCxNQUFNOzs7O0lBRlAsb0NBQTZDOztJQUM3Qyw0QkFBOEI7O0lBQzlCLHdDQUFvRDs7SUFFcEQsaUNBQTJCOztJQUUzQixrQ0FBdUI7O0lBQ3ZCLDhCQUFpQjs7SUFFakIsbUNBQWdDOztJQXlDaEMsOEJBQWM7O0lBR2QsK0JBQVc7O0lBR1gsK0JBTUU7O0lBR0YsNkJBQWlCOztJQUVqQixtQ0FBdUI7O0lBRXZCLGdDQUFvQjs7SUFFcEIsOEJBT0M7O0lBN0RXLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IElUcmVlRGF0YSwgSUNoZWNrZWRUcmVlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3V0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1wb3N0aW9uXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybVBvc3Rpb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gIEBJbnB1dCgpIHRhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSB0cmVlQ2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgdHJlZURhdGE6IElUcmVlRGF0YVtdID0gW107XHJcblxyXG4gIGNvbnRyb2xpZDogc3RyaW5nID0gXCJcIjtcclxuICBvcmdpZDpzdHJpbmcgPVwiXCI7XHJcblxyXG4gIHNlbGVjdERhdGE6IElDaGVja2VkVHJlZVtdID0gW107XHJcbiAgIFxyXG4gIC8v6YCJ5oup6IqC54K5XHJcbiAgZ2V0IHNlbGVjdGVkTm9kZSgpIHtcclxuICAgIHJldHVybiBfLmNsb25lRGVlcCh0aGlzLnNlbGVjdERhdGEpO1xyXG4gIH1cclxuIFxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmdldE9yZ0RhdGEoKTsgXHJcbiAgICB0aGlzLmFjdGlvbiA9IDI7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUeXBlID09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICB0aGlzLmNoZWNrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VHlwZSA9PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgIHRoaXMuY2hlY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSAyO1xyXG4gICAgICB0aGlzLmhlYWRlci5wdXNoKFxyXG4gICAgICAgIHsgXCJrZXlcIjogXCJhY3Rpb25cIiwgXCJuYW1lXCI6IFwi5pON5L2cXCIsIFwiaGlkZW5cIjogdHJ1ZSwgXCJhY3Rpb25cIjogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kZWZhdWx0Tm9kZSkge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/ojrflj5ZPcmfmlbDmja7pm4ZcclxuICBnZXRPcmdEYXRhKCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRUcmVlRGF0YSh7IGlkOiB0aGlzLmNvbnRyb2xpZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy50cmVlRGF0YSA9IHJlczsgIFxyXG4gICAgICB0aGlzLmdldFNlbGVjdERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0gXHJcblxyXG4gIC8vLy9cclxuICAvL+aYr+WQpuimgeWkmumAiVxyXG4gIGNoZWNrID0gZmFsc2U7XHJcblxyXG4gIC8v5piv5ZCm5pyJ5pON5L2c5YiXMCDmsqHmnInmk43kvZzliJfvvJsxIOWkmuS4quaTjeS9nOaMiemSriAyIOmAieaLqVxyXG4gIGFjdGlvbiA9IDA7XHJcblxyXG4gIC8vdGFibGUg5aS06YOo5L+h5oGvXHJcbiAgaGVhZGVyOiBhbnlbXSA9IFtcclxuICAgIHsgXCJrZXlcIjogXCJpZFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcImhpZGVuXCI6IHRydWUgfSxcclxuICAgIHsgXCJrZXlcIjogXCJjb2RlXCIsIFwibmFtZVwiOiBcIuiBjOS9jee8lueggVwiLCBcIndpZHRoXCI6IDEwMCB9LFxyXG4gICAgeyBcImtleVwiOiBcIm5hbWVcIiwgXCJuYW1lXCI6IFwi6IGM5L2N5ZCN56ewXCIsIFwid2lkdGhcIjogMTUwIH0sXHJcbiAgICB7IFwia2V5XCI6IFwibnVtYmVyXCIsIFwibmFtZVwiOiBcIuWcqOiBjOS6uuaVsFwiLCBcIndpZHRoXCI6IDgwICB9LFxyXG4gICAgeyBcImtleVwiOiBcInBhcmVudFwiLCBcIm5hbWVcIjogXCLkuIrnuqfogYzkvY1cIiB9XHJcbiAgXTtcclxuXHJcbiAgLy90YWJsZSDooYzmlbDmja5cclxuICBib2R5OiBhbnlbXSA9IFtdO1xyXG5cclxuICBidXR0b25saXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICBjaGVja2lkOiBhbnlbXSA9IFtdO1xyXG5cclxuICBxdWVyeSA9IHtcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgcGFnZUluZGV4OiAxLFxyXG4gICAgcGFnZVNpemU6IDE1LFxyXG4gICAgc29ydE5hbWU6IFwiXCIsXHJcbiAgICBzb3J0VmFsdWU6IFwiXCIsXHJcbiAgICBrZXlXb3JkOiBcIlwiXHJcbiAgfVxyXG4gXHJcbiAgZ2V0IHNlbGVjdFR5cGUoKSB7XHJcbiAgICBsZXQgcmVzID0gXCJcIjtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGUgIT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgcmVzID0gdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMuc2VsZWN0VHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3REYXRhKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLmtleSAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XSAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRhID0gXy5jbG9uZURlZXAoXHJcbiAgICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV1cclxuICAgICAgKTtcclxuICAgIH1cclxuIFxyXG4gICAgaWYodGhpcy5zZWxlY3REYXRhIT1udWxsICYmIHRoaXMuc2VsZWN0RGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgIHRoaXMuY2hlY2tpZCA9dGhpcy5zZWxlY3REYXRhLm1hcChpdGVtPT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFwiaWRcIjppdGVtLnZhbHVlLFxyXG4gICAgICAgICAgXCJuYW1lXCI6aXRlbS5sYWJlbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5jaGVja2lkPVtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBcclxuICBnZXRQb3N0aW9uRGF0YSgpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyUG9zdGlvblRhYmxlKFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5V29yZDogdGhpcy5xdWVyeS5rZXlXb3JkLFxyXG4gICAgICAgIHBhZ2VJbmRleDogdGhpcy5xdWVyeS5wYWdlSW5kZXgsXHJcbiAgICAgICAgcGFnZVNpemU6IHRoaXMucXVlcnkucGFnZVNpemVcclxuICAgICAgfVxyXG4gICAgKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMucXVlcnkucGFnZUluZGV4ID0gcmVzLmluZGV4O1xyXG4gICAgICB0aGlzLnF1ZXJ5LnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICB0aGlzLmJvZHkgPSByZXMuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0U2VsZWN0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZUluZGV4Q2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyUG9zdGlvblRhYmxlKFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5V29yZDogdGhpcy5xdWVyeS5rZXlXb3JkLFxyXG4gICAgICAgIHBhZ2VJbmRleDogdGhpcy5xdWVyeS5wYWdlSW5kZXgsXHJcbiAgICAgICAgcGFnZVNpemU6IHRoaXMucXVlcnkucGFnZVNpemVcclxuICAgICAgfSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4geyBcclxuICAgICAgICB0aGlzLnF1ZXJ5LnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLnF1ZXJ5LnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHJlcy5kYXRhO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ2hhbmdlKGxpc3Q6IGFueVtdKSB7XHJcbiAgICBpZiAobGlzdCAhPSBudWxsICYmIGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBsaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgXCJsYWJlbFwiOiBpdGVtLm5hbWUsIFwidmFsdWVcIjogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9yZ0NoYW5nZShldmVudDphbnkpeyBcclxuICAgIGlmKGV2ZW50IT1udWxsICYmIGV2ZW50IT11bmRlZmluZWQgJiYgZXZlbnQuY2hlY2tEYXRhIT11bmRlZmluZWQgJiYgZXZlbnQuY2hlY2tEYXRhLmxlbmd0aD4wKXtcclxuICAgICAgdGhpcy5vcmdpZCA9IGV2ZW50LmNoZWNrRGF0YVswXS52YWx1ZTtcclxuICAgICAgdGhpcy5nZXRQb3N0aW9uRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=