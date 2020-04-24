/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
var VXFormTree = /** @class */ (function () {
    function VXFormTree(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.tag = false;
        this.treeChangeEvent = new EventEmitter();
        this.treeData = [];
        this.controlid = "";
        this.selectData = [];
    }
    Object.defineProperty(VXFormTree.prototype, "selectedNode", {
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
    Object.defineProperty(VXFormTree.prototype, "selectType", {
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
    VXFormTree.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var id = _.get(this.fieldConfig, "templateOptions.treeid");
        if (id != undefined && id != null && id != "") {
            this.controlid = _.get(this.fieldConfig, "templateOptions.treeid");
        }
        this.getTreeData();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormTree.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.defaultNode) {
        }
    };
    //获取Tree数据集
    //获取Tree数据集
    /**
     * @return {?}
     */
    VXFormTree.prototype.getTreeData = 
    //获取Tree数据集
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
    /**
     * @return {?}
     */
    VXFormTree.prototype.getSelectData = /**
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
    };
    VXFormTree.decorators = [
        { type: Component, args: [{
                    selector: "vxform-tree",
                    template: "<vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\"></vxform-private-tree>",
                    providers: [DataService],
                    styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    VXFormTree.ctorParameters = function () { return [
        { type: DataService }
    ]; };
    VXFormTree.propDecorators = {
        fieldConfig: [{ type: Input }],
        tag: [{ type: Input }],
        treeChangeEvent: [{ type: Output }]
    };
    return VXFormTree;
}());
export { VXFormTree };
if (false) {
    /** @type {?} */
    VXFormTree.prototype.fieldConfig;
    /** @type {?} */
    VXFormTree.prototype.tag;
    /** @type {?} */
    VXFormTree.prototype.treeChangeEvent;
    /** @type {?} */
    VXFormTree.prototype.treeData;
    /** @type {?} */
    VXFormTree.prototype.controlid;
    /** @type {?} */
    VXFormTree.prototype.selectData;
    /** @type {?} */
    VXFormTree.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXpEO0lBa0NFLG9CQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTNCbEMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBELGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFtQixFQUFFLENBQUM7SUFxQmMsQ0FBQztJQWxCL0Msc0JBQUksb0NBQVk7UUFEaEIsTUFBTTs7Ozs7O1FBQ047WUFDRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVU7Ozs7UUFBZDs7Z0JBQ00sR0FBRyxHQUFHLEVBQUU7WUFDWixJQUNFLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUztnQkFDN0IsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsSUFBSSxTQUFTO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsSUFBSSxJQUFJO2dCQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLElBQUksU0FBUyxFQUN4RDtnQkFDQSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO2FBQ25EO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDOzs7T0FBQTs7OztJQUlELDZCQUFROzs7SUFBUjs7WUFDTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDO1FBQzFELElBQUksRUFBRSxJQUFJLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7U0FDeEI7SUFDSCxDQUFDO0lBRUQsV0FBVzs7Ozs7SUFDWCxnQ0FBVzs7Ozs7SUFBWDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUNoRSxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUVwQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0NBQWE7OztJQUFiO1FBQ0UsSUFDRSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUk7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksU0FBUztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLFNBQVM7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksSUFBSTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVM7WUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQ3BEO1lBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUM3QyxDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixpSkFBcUM7b0JBRXJDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7aUJBQ3pCOzs7O2dCQVRRLFdBQVc7Ozs4QkFXakIsS0FBSztzQkFDTCxLQUFLO2tDQUNMLE1BQU07O0lBZ0VULGlCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FuRVksVUFBVTs7O0lBQ3JCLGlDQUE2Qzs7SUFDN0MseUJBQThCOztJQUM5QixxQ0FBb0Q7O0lBRXBELDhCQUEyQjs7SUFDM0IsK0JBQXVCOztJQUN2QixnQ0FBZ0M7O0lBcUJwQixpQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBJVHJlZURhdGEsIElDaGVja2VkVHJlZSB9IGZyb20gXCIuLi8uLi90b29scy91dGlsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tdHJlZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1UcmVlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gIEBJbnB1dCgpIHRhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSB0cmVlQ2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgdHJlZURhdGE6IElUcmVlRGF0YVtdID0gW107XHJcbiAgY29udHJvbGlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHNlbGVjdERhdGE6IElDaGVja2VkVHJlZVtdID0gW107XHJcblxyXG4gIC8v6YCJ5oup6IqC54K5XHJcbiAgZ2V0IHNlbGVjdGVkTm9kZSgpIHtcclxuICAgIHJldHVybiBfLmNsb25lRGVlcCh0aGlzLnNlbGVjdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdFR5cGUoKSB7XHJcbiAgICBsZXQgcmVzID0gXCJcIjtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGUgIT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgcmVzID0gdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMuc2VsZWN0VHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBpZCA9IF8uZ2V0KHRoaXMuZmllbGRDb25maWcsIFwidGVtcGxhdGVPcHRpb25zLnRyZWVpZFwiKTtcclxuICAgIGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT0gbnVsbCAmJiBpZCAhPSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbGlkID0gXy5nZXQodGhpcy5maWVsZENvbmZpZywgXCJ0ZW1wbGF0ZU9wdGlvbnMudHJlZWlkXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRUcmVlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdE5vZGUpIHtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v6I635Y+WVHJlZeaVsOaNrumbhlxyXG4gIGdldFRyZWVEYXRhKCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRUcmVlRGF0YSh7IGlkOiB0aGlzLmNvbnRyb2xpZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy50cmVlRGF0YSA9IHJlcztcclxuXHJcbiAgICAgIHRoaXMuZ2V0U2VsZWN0RGF0YSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3REYXRhKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLmtleSAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XSAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRhID0gXy5jbG9uZURlZXAoXHJcbiAgICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19