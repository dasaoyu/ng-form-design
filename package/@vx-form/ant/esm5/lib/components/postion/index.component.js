/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
var VXFormPostion = /** @class */ (function () {
    function VXFormPostion(dataService) {
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
    Object.defineProperty(VXFormPostion.prototype, "selectedNode", {
        //选择节点
        get: 
        //选择节点
        /**
         * @return {?}
         */
        function () {
            return _.cloneDeep(this.selectData);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXFormPostion.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormPostion.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.defaultNode) {
        }
    };
    //获取Org数据集
    //获取Org数据集
    /**
     * @return {?}
     */
    VXFormPostion.prototype.getOrgData = 
    //获取Org数据集
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getTreeData({ id: this.controlid }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.treeData = res;
            _this.getSelectData();
        }));
    };
    Object.defineProperty(VXFormPostion.prototype, "selectType", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var res = "";
            if (this.fieldConfig != undefined &&
                this.fieldConfig != null &&
                this.fieldConfig.templateOptions != undefined &&
                this.fieldConfig.templateOptions != null &&
                this.fieldConfig.templateOptions.selectType != undefined) {
                res = this.fieldConfig.templateOptions.selectType;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXFormPostion.prototype.getSelectData = /**
     * @return {?}
     */
    function () {
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
            function (item) {
                return {
                    "id": item.value,
                    "name": item.label
                };
            }));
        }
        else {
            this.checkid = [];
        }
    };
    /**
     * @return {?}
     */
    VXFormPostion.prototype.getPostionData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getSysCtrPostionTable({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.query.pageIndex = res.index;
            _this.query.total = res.total;
            _this.body = res.data;
        }));
        this.getSelectData();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormPostion.prototype.pageIndexChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.dataService.getSysCtrPostionTable({
            keyWord: this.query.keyWord,
            pageIndex: this.query.pageIndex,
            pageSize: this.query.pageSize
        }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.query.pageIndex = event.pageIndex;
            _this.query.total = res.total;
            _this.body = res.data;
        }));
    };
    /**
     * @param {?} list
     * @return {?}
     */
    VXFormPostion.prototype.checkChange = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        if (list != null && list.length > 0) {
            this.selectData = list.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return {
                    "label": item.name, "value": item.id
                };
            }));
        }
        else {
            this.selectData = [];
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormPostion.prototype.orgChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event != null && event != undefined && event.checkData != undefined && event.checkData.length > 0) {
            this.orgid = event.checkData[0].value;
            this.getPostionData();
        }
    };
    VXFormPostion.decorators = [
        { type: Component, args: [{
                    selector: "vxform-postion",
                    template: "\r\n<div class=\"postion-org\">\r\n    <!-- <vx-org [data]=\"orgData\" [dimension]=\"true\" [tag]=\"false\" (treeChangeEvent)=\"orgChange($event)\">\r\n    </vx-org> -->\r\n    \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"'single'\" [tag]=\"false\" [expandAll]=\"false\"  (treeChangeEvent)=\"orgChange($event)\"></vxform-private-tree>\r\n</div>\r\n<div class=\"postion-list\"> \r\n    <vxform-private-table\r\n        [tableIndex]=\"query.pageIndex\"\r\n        [tableSize]=\"query.pageSize\"\r\n        [tableTotal]=\"query.total\"\r\n        [header]=\"header\"\r\n        [body]=\"body\"\r\n        [check]=\"check\"\r\n        [action]=\"action\"\r\n        [checkid]=\"checkid\" \r\n        (checkChangeEvent)=\"checkChange($event)\"\r\n        (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n    </vxform-private-table>\r\n</div>\r\n",
                    providers: [DataService],
                    styles: [":host ::ng-deep{display:flex;flex-direction:row;width:100%;height:100%}:host ::ng-deep .postion-org{width:240px;border-right:1px solid #e8e8e8}:host ::ng-deep .postion-org .component-tree .tree-item{padding:8px 5px 5px 8px!important}:host ::ng-deep .postion-org .ant-tree li ul{padding:0 0 0 15px}:host ::ng-deep .postion-list{flex:1}"]
                }] }
    ];
    /** @nocollapse */
    VXFormPostion.ctorParameters = function () { return [
        { type: DataService }
    ]; };
    VXFormPostion.propDecorators = {
        fieldConfig: [{ type: Input }],
        tag: [{ type: Input }],
        treeChangeEvent: [{ type: Output }]
    };
    return VXFormPostion;
}());
export { VXFormPostion };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcG9zdGlvbi9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXpEO0lBd0JFLHVCQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWpCbEMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBELGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFTLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQW1CLEVBQUUsQ0FBQzs7O1FBeUNoQyxVQUFLLEdBQUcsS0FBSyxDQUFDOztRQUdkLFdBQU0sR0FBRyxDQUFDLENBQUM7O1FBR1gsV0FBTSxHQUFVO1lBQ2QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUM1QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQy9DLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDL0MsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFF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QUFTOzs7O0lBQVQsVUFBVSxLQUFTO1FBQ2pCLElBQUcsS0FBSyxJQUFFLElBQUksSUFBSSxLQUFLLElBQUUsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUUsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQztZQUMzRixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQS9LRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdzJCQUFxQztvQkFFckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOztpQkFDekI7Ozs7Z0JBVFEsV0FBVzs7OzhCQVdqQixLQUFLO3NCQUNMLEtBQUs7a0NBQ0wsTUFBTTs7SUF1S1Qsb0JBQUM7Q0FBQSxBQWhMRCxJQWdMQztTQTFLWSxhQUFhOzs7SUFDeEIsb0NBQTZDOztJQUM3Qyw0QkFBOEI7O0lBQzlCLHdDQUFvRDs7SUFFcEQsaUNBQTJCOztJQUUzQixrQ0FBdUI7O0lBQ3ZCLDhCQUFpQjs7SUFFakIsbUNBQWdDOztJQXlDaEMsOEJBQWM7O0lBR2QsK0JBQVc7O0lBR1gsK0JBTUU7O0lBR0YsNkJBQWlCOztJQUVqQixtQ0FBdUI7O0lBRXZCLGdDQUFvQjs7SUFFcEIsOEJBT0M7O0lBN0RXLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IElUcmVlRGF0YSwgSUNoZWNrZWRUcmVlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3V0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1wb3N0aW9uXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybVBvc3Rpb24gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gIEBJbnB1dCgpIHRhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSB0cmVlQ2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgdHJlZURhdGE6IElUcmVlRGF0YVtdID0gW107XHJcblxyXG4gIGNvbnRyb2xpZDogc3RyaW5nID0gXCJcIjtcclxuICBvcmdpZDpzdHJpbmcgPVwiXCI7XHJcblxyXG4gIHNlbGVjdERhdGE6IElDaGVja2VkVHJlZVtdID0gW107XHJcbiAgIFxyXG4gIC8v6YCJ5oup6IqC54K5XHJcbiAgZ2V0IHNlbGVjdGVkTm9kZSgpIHtcclxuICAgIHJldHVybiBfLmNsb25lRGVlcCh0aGlzLnNlbGVjdERhdGEpO1xyXG4gIH1cclxuIFxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmdldE9yZ0RhdGEoKTsgXHJcbiAgICB0aGlzLmFjdGlvbiA9IDI7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUeXBlID09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICB0aGlzLmNoZWNrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VHlwZSA9PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgIHRoaXMuY2hlY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSAyO1xyXG4gICAgICB0aGlzLmhlYWRlci5wdXNoKFxyXG4gICAgICAgIHsgXCJrZXlcIjogXCJhY3Rpb25cIiwgXCJuYW1lXCI6IFwi5pON5L2cXCIsIFwiaGlkZW5cIjogdHJ1ZSwgXCJhY3Rpb25cIjogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kZWZhdWx0Tm9kZSkge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/ojrflj5ZPcmfmlbDmja7pm4ZcclxuICBnZXRPcmdEYXRhKCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRUcmVlRGF0YSh7IGlkOiB0aGlzLmNvbnRyb2xpZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy50cmVlRGF0YSA9IHJlczsgIFxyXG4gICAgICB0aGlzLmdldFNlbGVjdERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0gXHJcblxyXG4gIC8vLy9cclxuICAvL+aYr+WQpuimgeWkmumAiVxyXG4gIGNoZWNrID0gZmFsc2U7XHJcblxyXG4gIC8v5piv5ZCm5pyJ5pON5L2c5YiXMCDmsqHmnInmk43kvZzliJfvvJsxIOWkmuS4quaTjeS9nOaMiemSriAyIOmAieaLqVxyXG4gIGFjdGlvbiA9IDA7XHJcblxyXG4gIC8vdGFibGUg5aS06YOo5L+h5oGvXHJcbiAgaGVhZGVyOiBhbnlbXSA9IFtcclxuICAgIHsgXCJrZXlcIjogXCJpZFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcImhpZGVuXCI6IHRydWUgfSxcclxuICAgIHsgXCJrZXlcIjogXCJjb2RlXCIsIFwibmFtZVwiOiBcIuiBjOS9jee8lueggVwiLCBcIndpZHRoXCI6IDEwMCB9LFxyXG4gICAgeyBcImtleVwiOiBcIm5hbWVcIiwgXCJuYW1lXCI6IFwi6IGM5L2N5ZCN56ewXCIsIFwid2lkdGhcIjogMTUwIH0sXHJcbiAgICB7IFwia2V5XCI6IFwibnVtYmVyXCIsIFwibmFtZVwiOiBcIuWcqOiBjOS6uuaVsFwiLCBcIndpZHRoXCI6IDgwICB9LFxyXG4gICAgeyBcImtleVwiOiBcInBhcmVudFwiLCBcIm5hbWVcIjogXCLkuIrnuqfogYzkvY1cIiB9XHJcbiAgXTtcclxuXHJcbiAgLy90YWJsZSDooYzmlbDmja5cclxuICBib2R5OiBhbnlbXSA9IFtdO1xyXG5cclxuICBidXR0b25saXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICBjaGVja2lkOiBhbnlbXSA9IFtdO1xyXG5cclxuICBxdWVyeSA9IHtcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgcGFnZUluZGV4OiAxLFxyXG4gICAgcGFnZVNpemU6IDE1LFxyXG4gICAgc29ydE5hbWU6IFwiXCIsXHJcbiAgICBzb3J0VmFsdWU6IFwiXCIsXHJcbiAgICBrZXlXb3JkOiBcIlwiXHJcbiAgfVxyXG4gXHJcbiAgZ2V0IHNlbGVjdFR5cGUoKSB7XHJcbiAgICBsZXQgcmVzID0gXCJcIjtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGUgIT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgcmVzID0gdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMuc2VsZWN0VHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3REYXRhKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLmtleSAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XSAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRhID0gXy5jbG9uZURlZXAoXHJcbiAgICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV1cclxuICAgICAgKTtcclxuICAgIH1cclxuIFxyXG4gICAgaWYodGhpcy5zZWxlY3REYXRhIT1udWxsICYmIHRoaXMuc2VsZWN0RGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgIHRoaXMuY2hlY2tpZCA9dGhpcy5zZWxlY3REYXRhLm1hcChpdGVtPT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFwiaWRcIjppdGVtLnZhbHVlLFxyXG4gICAgICAgICAgXCJuYW1lXCI6aXRlbS5sYWJlbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5jaGVja2lkPVtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBcclxuICBnZXRQb3N0aW9uRGF0YSgpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyUG9zdGlvblRhYmxlKFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5V29yZDogdGhpcy5xdWVyeS5rZXlXb3JkLFxyXG4gICAgICAgIHBhZ2VJbmRleDogdGhpcy5xdWVyeS5wYWdlSW5kZXgsXHJcbiAgICAgICAgcGFnZVNpemU6IHRoaXMucXVlcnkucGFnZVNpemVcclxuICAgICAgfVxyXG4gICAgKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMucXVlcnkucGFnZUluZGV4ID0gcmVzLmluZGV4O1xyXG4gICAgICB0aGlzLnF1ZXJ5LnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICB0aGlzLmJvZHkgPSByZXMuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0U2VsZWN0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZUluZGV4Q2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyUG9zdGlvblRhYmxlKFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5V29yZDogdGhpcy5xdWVyeS5rZXlXb3JkLFxyXG4gICAgICAgIHBhZ2VJbmRleDogdGhpcy5xdWVyeS5wYWdlSW5kZXgsXHJcbiAgICAgICAgcGFnZVNpemU6IHRoaXMucXVlcnkucGFnZVNpemVcclxuICAgICAgfSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4geyBcclxuICAgICAgICB0aGlzLnF1ZXJ5LnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLnF1ZXJ5LnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHJlcy5kYXRhO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ2hhbmdlKGxpc3Q6IGFueVtdKSB7XHJcbiAgICBpZiAobGlzdCAhPSBudWxsICYmIGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBsaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgXCJsYWJlbFwiOiBpdGVtLm5hbWUsIFwidmFsdWVcIjogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9yZ0NoYW5nZShldmVudDphbnkpeyBcclxuICAgIGlmKGV2ZW50IT1udWxsICYmIGV2ZW50IT11bmRlZmluZWQgJiYgZXZlbnQuY2hlY2tEYXRhIT11bmRlZmluZWQgJiYgZXZlbnQuY2hlY2tEYXRhLmxlbmd0aD4wKXtcclxuICAgICAgdGhpcy5vcmdpZCA9IGV2ZW50LmNoZWNrRGF0YVswXS52YWx1ZTtcclxuICAgICAgdGhpcy5nZXRQb3N0aW9uRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=