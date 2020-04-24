/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
export class VXFormEmployee {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.selectData = [];
        this.tag = true;
        //是否要多选
        this.check = false;
        //是否有操作列0 没有操作列；1 多个操作按钮 2 选择
        this.action = 0;
        //table 头部信息
        this.header = [
            { "key": "id", "name": "id", "hiden": true },
            { "key": "code", "name": "工号", "width": 150 },
            { "key": "name", "name": "姓名", "width": 150 },
            { "key": "organization", "name": "部门" }
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
    /**
     * @return {?}
     */
    get selectedNode() {
        return _.cloneDeep(this.selectData);
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
        console.log('[]', this.selectData);
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
    ngOnInit() {
        if (this.selectType == "multiple") {
            this.check = true;
            this.action = 0;
        }
        if (this.selectType == "single") {
            this.check = false;
            this.action = 2;
            this.header.push({ "key": "action", "name": "操作", "hiden": true, "action": true });
        }
        this.getEmployeeData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    getEmployeeData() {
        this.dataService.getSysCtrEmployee({
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
        this.dataService.getSysCtrEmployee({
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
}
VXFormEmployee.decorators = [
    { type: Component, args: [{
                selector: "vxform-employee",
                template: "<vxform-private-table\r\n [tableIndex]=\"query.pageIndex\"\r\n [tableSize]=\"query.pageSize\"\r\n [tableTotal]=\"query.total\"\r\n [header]=\"header\"\r\n [body]=\"body\"\r\n [check]=\"check\"\r\n [action]=\"action\"\r\n [checkid]=\"checkid\" \r\n (checkChangeEvent)=\"checkChange($event)\"\r\n (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n</vxform-private-table>",
                providers: [DataService],
                styles: [":host ::ng-deep{display:flex;width:100%;height:100%}:host ::ng-deep .content-left{display:flex;flex-direction:column;width:300px;padding:0 10px}:host ::ng-deep .content-left nz-select{width:100%}:host ::ng-deep .content-left .tree{flex:1;overflow-y:auto;display:in}:host ::ng-deep .content-right{flex:1}"]
            }] }
];
/** @nocollapse */
VXFormEmployee.ctorParameters = () => [
    { type: DataService }
];
VXFormEmployee.propDecorators = {
    fieldConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXFormEmployee.prototype.fieldConfig;
    /** @type {?} */
    VXFormEmployee.prototype.selectData;
    /** @type {?} */
    VXFormEmployee.prototype.tag;
    /** @type {?} */
    VXFormEmployee.prototype.check;
    /** @type {?} */
    VXFormEmployee.prototype.action;
    /** @type {?} */
    VXFormEmployee.prototype.header;
    /** @type {?} */
    VXFormEmployee.prototype.body;
    /** @type {?} */
    VXFormEmployee.prototype.buttonlist;
    /** @type {?} */
    VXFormEmployee.prototype.checkid;
    /** @type {?} */
    VXFormEmployee.prototype.query;
    /** @type {?} */
    VXFormEmployee.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1wbG95ZWUvaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFRTixNQUFNLGVBQWUsQ0FBQztBQWV2QixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFVekQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFHekIsWUFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGbEMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBSTdDLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBS2hDLFFBQUcsR0FBWSxJQUFJLENBQUM7O1FBR3BCLFVBQUssR0FBRyxLQUFLLENBQUM7O1FBR2QsV0FBTSxHQUFHLENBQUMsQ0FBQzs7UUFHWCxXQUFNLEdBQVU7WUFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQzVDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDN0MsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUM3QyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUN4QyxDQUFDOztRQUdGLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUV2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLFVBQUssR0FBRztZQUNOLEtBQUssRUFBRSxDQUFDO1lBQ1Is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QUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFXO1FBQ3JCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU87b0JBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO2lCQUNyQyxDQUFBO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUFuSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDRYQUFxQztnQkFFckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOzthQUN6Qjs7OztZQVRRLFdBQVc7OzswQkFXakIsS0FBSzs7OztJQUFOLHFDQUE2Qzs7SUFJN0Msb0NBQWdDOztJQUtoQyw2QkFBb0I7O0lBR3BCLCtCQUFjOztJQUdkLGdDQUFXOztJQUdYLGdDQUtFOztJQUdGLDhCQUFpQjs7SUFFakIsb0NBQXVCOztJQUV2QixpQ0FBb0I7O0lBRXBCLCtCQU9DOztJQXJDVyxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtR3JvdXAsXHJcbiAgRm9ybUJ1aWxkZXIsXHJcbiAgVmFsaWRhdG9ycyxcclxuICBBYnN0cmFjdENvbnRyb2xcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvdHJlZVwiO1xyXG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tIFwibmctem9ycm8tYW50ZC9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmllbGRXcmFwcGVyLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYVGFibGVGaWVsZENvbmZpZ1xyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IElTZWxlY3RlZE5vZGUsIElPcmdEYXRhLCBJVHJlZURhdGEsIElDaGVja2VkVHJlZSB9IGZyb20gXCIuLi8uLi90b29scy91dGlsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZW1wbG95ZWVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2luZGV4LmNvbXBvbmVudC5sZXNzXCJdLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRW1wbG95ZWUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuXHJcbiAgc2VsZWN0RGF0YTogSUNoZWNrZWRUcmVlW10gPSBbXTtcclxuICBnZXQgc2VsZWN0ZWROb2RlKCkge1xyXG4gICAgcmV0dXJuIF8uY2xvbmVEZWVwKHRoaXMuc2VsZWN0RGF0YSk7XHJcbiAgfVxyXG5cclxuICB0YWc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvL+aYr+WQpuimgeWkmumAiVxyXG4gIGNoZWNrID0gZmFsc2U7XHJcblxyXG4gIC8v5piv5ZCm5pyJ5pON5L2c5YiXMCDmsqHmnInmk43kvZzliJfvvJsxIOWkmuS4quaTjeS9nOaMiemSriAyIOmAieaLqVxyXG4gIGFjdGlvbiA9IDA7XHJcblxyXG4gIC8vdGFibGUg5aS06YOo5L+h5oGvXHJcbiAgaGVhZGVyOiBhbnlbXSA9IFtcclxuICAgIHsgXCJrZXlcIjogXCJpZFwiLCBcIm5hbWVcIjogXCJpZFwiLCBcImhpZGVuXCI6IHRydWUgfSxcclxuICAgIHsgXCJrZXlcIjogXCJjb2RlXCIsIFwibmFtZVwiOiBcIuW3peWPt1wiLCBcIndpZHRoXCI6IDE1MCB9LFxyXG4gICAgeyBcImtleVwiOiBcIm5hbWVcIiwgXCJuYW1lXCI6IFwi5aeT5ZCNXCIsIFwid2lkdGhcIjogMTUwIH0sXHJcbiAgICB7IFwia2V5XCI6IFwib3JnYW5pemF0aW9uXCIsIFwibmFtZVwiOiBcIumDqOmXqFwiIH1cclxuICBdO1xyXG5cclxuICAvL3RhYmxlIOihjOaVsOaNrlxyXG4gIGJvZHk6IGFueVtdID0gW107XHJcblxyXG4gIGJ1dHRvbmxpc3Q6IGFueVtdID0gW107XHJcblxyXG4gIGNoZWNraWQ6IGFueVtdID0gW107XHJcblxyXG4gIHF1ZXJ5ID0ge1xyXG4gICAgdG90YWw6IDAsXHJcbiAgICBwYWdlSW5kZXg6IDEsXHJcbiAgICBwYWdlU2l6ZTogMTUsXHJcbiAgICBzb3J0TmFtZTogXCJcIixcclxuICAgIHNvcnRWYWx1ZTogXCJcIixcclxuICAgIGtleVdvcmQ6IFwiXCJcclxuICB9XHJcbiBcclxuICBnZXQgc2VsZWN0VHlwZSgpIHtcclxuICAgIGxldCByZXMgPSBcIlwiO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMuc2VsZWN0VHlwZSAhPSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICByZXMgPSB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucy5zZWxlY3RUeXBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdERhdGEoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcua2V5ICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV0gIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldICE9IG51bGxcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBfLmNsb25lRGVlcChcclxuICAgICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbXScsdGhpcy5zZWxlY3REYXRhKVxyXG4gICAgaWYodGhpcy5zZWxlY3REYXRhIT1udWxsICYmIHRoaXMuc2VsZWN0RGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgIHRoaXMuY2hlY2tpZCA9dGhpcy5zZWxlY3REYXRhLm1hcChpdGVtPT57XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFwiaWRcIjppdGVtLnZhbHVlLFxyXG4gICAgICAgICAgXCJuYW1lXCI6aXRlbS5sYWJlbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5jaGVja2lkPVtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VHlwZSA9PSBcIm11bHRpcGxlXCIpIHtcclxuICAgICAgdGhpcy5jaGVjayA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdFR5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICB0aGlzLmNoZWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gMjtcclxuICAgICAgdGhpcy5oZWFkZXIucHVzaChcclxuICAgICAgICB7IFwia2V5XCI6IFwiYWN0aW9uXCIsIFwibmFtZVwiOiBcIuaTjeS9nFwiLCBcImhpZGVuXCI6IHRydWUsIFwiYWN0aW9uXCI6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRFbXBsb3llZURhdGEoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG5cclxuICBnZXRFbXBsb3llZURhdGEoKSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFN5c0N0ckVtcGxveWVlKFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5V29yZDogdGhpcy5xdWVyeS5rZXlXb3JkLFxyXG4gICAgICAgIHBhZ2VJbmRleDogdGhpcy5xdWVyeS5wYWdlSW5kZXgsXHJcbiAgICAgICAgcGFnZVNpemU6IHRoaXMucXVlcnkucGFnZVNpemVcclxuICAgICAgfVxyXG4gICAgKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMucXVlcnkucGFnZUluZGV4ID0gcmVzLmluZGV4O1xyXG4gICAgICB0aGlzLnF1ZXJ5LnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICB0aGlzLmJvZHkgPSByZXMuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0U2VsZWN0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZUluZGV4Q2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyRW1wbG95ZWUoXHJcbiAgICAgIHtcclxuICAgICAgICBrZXlXb3JkOiB0aGlzLnF1ZXJ5LmtleVdvcmQsXHJcbiAgICAgICAgcGFnZUluZGV4OiB0aGlzLnF1ZXJ5LnBhZ2VJbmRleCxcclxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5xdWVyeS5wYWdlU2l6ZVxyXG4gICAgICB9KS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWVyeS5wYWdlSW5kZXggPSBldmVudC5wYWdlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5xdWVyeS50b3RhbCA9IHJlcy50b3RhbDtcclxuICAgICAgICB0aGlzLmJvZHkgPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0NoYW5nZShsaXN0OiBhbnlbXSkge1xyXG4gICAgaWYgKGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRhID0gbGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFwibGFiZWxcIjogaXRlbS5uYW1lLCBcInZhbHVlXCI6IGl0ZW0uaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRhID0gW107XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbn1cclxuIl19