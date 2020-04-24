/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
var VXFormEmployee = /** @class */ (function () {
    function VXFormEmployee(dataService) {
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
    Object.defineProperty(VXFormEmployee.prototype, "selectedNode", {
        get: /**
         * @return {?}
         */
        function () {
            return _.cloneDeep(this.selectData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VXFormEmployee.prototype, "selectType", {
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
    VXFormEmployee.prototype.getSelectData = /**
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
        console.log('[]', this.selectData);
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
    VXFormEmployee.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormEmployee.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    VXFormEmployee.prototype.getEmployeeData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getSysCtrEmployee({
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
    VXFormEmployee.prototype.pageIndexChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.dataService.getSysCtrEmployee({
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
    VXFormEmployee.prototype.checkChange = /**
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
    VXFormEmployee.decorators = [
        { type: Component, args: [{
                    selector: "vxform-employee",
                    template: "<vxform-private-table\r\n [tableIndex]=\"query.pageIndex\"\r\n [tableSize]=\"query.pageSize\"\r\n [tableTotal]=\"query.total\"\r\n [header]=\"header\"\r\n [body]=\"body\"\r\n [check]=\"check\"\r\n [action]=\"action\"\r\n [checkid]=\"checkid\" \r\n (checkChangeEvent)=\"checkChange($event)\"\r\n (pageIndexEvent)=\"pageIndexChange($event)\" >\r\n</vxform-private-table>",
                    providers: [DataService],
                    styles: [":host ::ng-deep{display:flex;width:100%;height:100%}:host ::ng-deep .content-left{display:flex;flex-direction:column;width:300px;padding:0 10px}:host ::ng-deep .content-left nz-select{width:100%}:host ::ng-deep .content-left .tree{flex:1;overflow-y:auto;display:in}:host ::ng-deep .content-right{flex:1}"]
                }] }
    ];
    /** @nocollapse */
    VXFormEmployee.ctorParameters = function () { return [
        { type: DataService }
    ]; };
    VXFormEmployee.propDecorators = {
        fieldConfig: [{ type: Input }]
    };
    return VXFormEmployee;
}());
export { VXFormEmployee };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1wbG95ZWUvaW5kZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFRTixNQUFNLGVBQWUsQ0FBQztBQWV2QixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJekQ7SUFTRSx3QkFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGbEMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBSTdDLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBS2hDLFFBQUcsR0FBWSxJQUFJLENBQUM7O1FBR3BCLFVBQUssR0FBRyxLQUFLLENBQUM7O1FBR2QsV0FBTSxHQUFHLENBQUMsQ0FBQzs7UUFHWCxXQUFNLEdBQVU7WUFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQzVDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDN0MsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUM3QyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUN4QyxDQUFDOztRQUdGLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUV2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLFVBQUssR0FBRztZQUNOLEtBQUssRUFBRSxDQUFDO1lBQ1IsU0FBUyxFQUFFLENBQUM7WUFD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QUFDLEtBQUssQ0FBQztZQUM3QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxJQUFXO1FBQ3JCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUM3QixPQUFPO29CQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRTtpQkFDckMsQ0FBQTtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Z0JBbkpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0WEFBcUM7b0JBRXJDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7aUJBQ3pCOzs7O2dCQVRRLFdBQVc7Ozs4QkFXakIsS0FBSzs7SUE4SVIscUJBQUM7Q0FBQSxBQXJKRCxJQXFKQztTQS9JWSxjQUFjOzs7SUFDekIscUNBQTZDOztJQUk3QyxvQ0FBZ0M7O0lBS2hDLDZCQUFvQjs7SUFHcEIsK0JBQWM7O0lBR2QsZ0NBQVc7O0lBR1gsZ0NBS0U7O0lBR0YsOEJBQWlCOztJQUVqQixvQ0FBdUI7O0lBRXZCLGlDQUFvQjs7SUFFcEIsK0JBT0M7O0lBckNXLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtQnVpbGRlcixcclxuICBWYWxpZGF0b3JzLFxyXG4gIEFic3RyYWN0Q29udHJvbFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tIFwibmctem9ycm8tYW50ZC90cmVlXCI7XHJcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50LCBOelRyZWVOb2RlT3B0aW9ucyB9IGZyb20gXCJuZy16b3Jyby1hbnRkL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBGaWVsZFdyYXBwZXIsXHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhUYWJsZUZpZWxkQ29uZmlnXHJcbn0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgSVNlbGVjdGVkTm9kZSwgSU9yZ0RhdGEsIElUcmVlRGF0YSwgSUNoZWNrZWRUcmVlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3V0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1lbXBsb3llZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1FbXBsb3llZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGRDb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG5cclxuICBzZWxlY3REYXRhOiBJQ2hlY2tlZFRyZWVbXSA9IFtdO1xyXG4gIGdldCBzZWxlY3RlZE5vZGUoKSB7XHJcbiAgICByZXR1cm4gXy5jbG9uZURlZXAodGhpcy5zZWxlY3REYXRhKTtcclxuICB9XHJcblxyXG4gIHRhZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8v5piv5ZCm6KaB5aSa6YCJXHJcbiAgY2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgLy/mmK/lkKbmnInmk43kvZzliJcwIOayoeacieaTjeS9nOWIl++8mzEg5aSa5Liq5pON5L2c5oyJ6ZKuIDIg6YCJ5oupXHJcbiAgYWN0aW9uID0gMDtcclxuXHJcbiAgLy90YWJsZSDlpLTpg6jkv6Hmga9cclxuICBoZWFkZXI6IGFueVtdID0gW1xyXG4gICAgeyBcImtleVwiOiBcImlkXCIsIFwibmFtZVwiOiBcImlkXCIsIFwiaGlkZW5cIjogdHJ1ZSB9LFxyXG4gICAgeyBcImtleVwiOiBcImNvZGVcIiwgXCJuYW1lXCI6IFwi5bel5Y+3XCIsIFwid2lkdGhcIjogMTUwIH0sXHJcbiAgICB7IFwia2V5XCI6IFwibmFtZVwiLCBcIm5hbWVcIjogXCLlp5PlkI1cIiwgXCJ3aWR0aFwiOiAxNTAgfSxcclxuICAgIHsgXCJrZXlcIjogXCJvcmdhbml6YXRpb25cIiwgXCJuYW1lXCI6IFwi6YOo6ZeoXCIgfVxyXG4gIF07XHJcblxyXG4gIC8vdGFibGUg6KGM5pWw5o2uXHJcbiAgYm9keTogYW55W10gPSBbXTtcclxuXHJcbiAgYnV0dG9ubGlzdDogYW55W10gPSBbXTtcclxuXHJcbiAgY2hlY2tpZDogYW55W10gPSBbXTtcclxuXHJcbiAgcXVlcnkgPSB7XHJcbiAgICB0b3RhbDogMCxcclxuICAgIHBhZ2VJbmRleDogMSxcclxuICAgIHBhZ2VTaXplOiAxNSxcclxuICAgIHNvcnROYW1lOiBcIlwiLFxyXG4gICAgc29ydFZhbHVlOiBcIlwiLFxyXG4gICAga2V5V29yZDogXCJcIlxyXG4gIH1cclxuIFxyXG4gIGdldCBzZWxlY3RUeXBlKCkge1xyXG4gICAgbGV0IHJlcyA9IFwiXCI7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucy5zZWxlY3RUeXBlICE9IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJlcyA9IHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0RGF0YSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWwgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWwgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLmtleSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV0gIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGF0YSA9IF8uY2xvbmVEZWVwKFxyXG4gICAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tdJyx0aGlzLnNlbGVjdERhdGEpXHJcbiAgICBpZih0aGlzLnNlbGVjdERhdGEhPW51bGwgJiYgdGhpcy5zZWxlY3REYXRhLmxlbmd0aD4wKXtcclxuICAgICAgdGhpcy5jaGVja2lkID10aGlzLnNlbGVjdERhdGEubWFwKGl0ZW09PntcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgXCJpZFwiOml0ZW0udmFsdWUsXHJcbiAgICAgICAgICBcIm5hbWVcIjppdGVtLmxhYmVsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmNoZWNraWQ9W107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUeXBlID09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICB0aGlzLmNoZWNrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0VHlwZSA9PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgIHRoaXMuY2hlY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5hY3Rpb24gPSAyO1xyXG4gICAgICB0aGlzLmhlYWRlci5wdXNoKFxyXG4gICAgICAgIHsgXCJrZXlcIjogXCJhY3Rpb25cIiwgXCJuYW1lXCI6IFwi5pON5L2cXCIsIFwiaGlkZW5cIjogdHJ1ZSwgXCJhY3Rpb25cIjogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEVtcGxveWVlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XHJcblxyXG4gIGdldEVtcGxveWVlRGF0YSgpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyRW1wbG95ZWUoXHJcbiAgICAgIHtcclxuICAgICAgICBrZXlXb3JkOiB0aGlzLnF1ZXJ5LmtleVdvcmQsXHJcbiAgICAgICAgcGFnZUluZGV4OiB0aGlzLnF1ZXJ5LnBhZ2VJbmRleCxcclxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5xdWVyeS5wYWdlU2l6ZVxyXG4gICAgICB9XHJcbiAgICApLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5xdWVyeS5wYWdlSW5kZXggPSByZXMuaW5kZXg7XHJcbiAgICAgIHRoaXMucXVlcnkudG90YWwgPSByZXMudG90YWw7XHJcbiAgICAgIHRoaXMuYm9keSA9IHJlcy5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZXRTZWxlY3REYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwYWdlSW5kZXhDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRTeXNDdHJFbXBsb3llZShcclxuICAgICAge1xyXG4gICAgICAgIGtleVdvcmQ6IHRoaXMucXVlcnkua2V5V29yZCxcclxuICAgICAgICBwYWdlSW5kZXg6IHRoaXMucXVlcnkucGFnZUluZGV4LFxyXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLnF1ZXJ5LnBhZ2VTaXplXHJcbiAgICAgIH0pLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnF1ZXJ5LnBhZ2VJbmRleCA9IGV2ZW50LnBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLnF1ZXJ5LnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHJlcy5kYXRhO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ2hhbmdlKGxpc3Q6IGFueVtdKSB7XHJcbiAgICBpZiAobGlzdCAhPSBudWxsICYmIGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBsaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgXCJsYWJlbFwiOiBpdGVtLm5hbWUsIFwidmFsdWVcIjogaXRlbS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBbXTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=