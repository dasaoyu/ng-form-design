/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
export class VXFormTree {
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
        this.selectData = [];
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
    ngOnInit() {
        /** @type {?} */
        let id = _.get(this.fieldConfig, "templateOptions.treeid");
        if (id != undefined && id != null && id != "") {
            this.controlid = _.get(this.fieldConfig, "templateOptions.treeid");
        }
        this.getTreeData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.defaultNode) {
        }
    }
    //获取Tree数据集
    /**
     * @return {?}
     */
    getTreeData() {
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
    }
}
VXFormTree.decorators = [
    { type: Component, args: [{
                selector: "vxform-tree",
                template: "<vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\"></vxform-private-tree>",
                providers: [DataService],
                styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
            }] }
];
/** @nocollapse */
VXFormTree.ctorParameters = () => [
    { type: DataService }
];
VXFormTree.propDecorators = {
    fieldConfig: [{ type: Input }],
    tag: [{ type: Input }],
    treeChangeEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdHJlZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVXpELE1BQU0sT0FBTyxVQUFVOzs7O0lBNEJyQixZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTNCbEMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBELGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFtQixFQUFFLENBQUM7SUFxQmMsQ0FBQzs7Ozs7SUFsQi9DLElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELElBQUksVUFBVTs7WUFDUixHQUFHLEdBQUcsRUFBRTtRQUNaLElBQ0UsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTO1lBQzdCLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsSUFBSSxTQUFTO1lBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFDeEQ7WUFDQSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O0lBSUQsUUFBUTs7WUFDRixFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDO1FBQzFELElBQUksRUFBRSxJQUFJLFNBQVMsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUdELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFFcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUNFLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxTQUFTO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksU0FBUztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxJQUFJO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUztZQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFDcEQ7WUFDQSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQzdDLENBQUM7U0FDSDtJQUNILENBQUM7OztZQXhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGlKQUFxQztnQkFFckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOzthQUN6Qjs7OztZQVRRLFdBQVc7OzswQkFXakIsS0FBSztrQkFDTCxLQUFLOzhCQUNMLE1BQU07Ozs7SUFGUCxpQ0FBNkM7O0lBQzdDLHlCQUE4Qjs7SUFDOUIscUNBQW9EOztJQUVwRCw4QkFBMkI7O0lBQzNCLCtCQUF1Qjs7SUFDdkIsZ0NBQWdDOztJQXFCcEIsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgSVRyZWVEYXRhLCBJQ2hlY2tlZFRyZWUgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLXRyZWVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2luZGV4LmNvbXBvbmVudC5sZXNzXCJdLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtVHJlZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBmaWVsZENvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7fTtcclxuICBASW5wdXQoKSB0YWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgdHJlZUNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHRyZWVEYXRhOiBJVHJlZURhdGFbXSA9IFtdO1xyXG4gIGNvbnRyb2xpZDogc3RyaW5nID0gXCJcIjtcclxuICBzZWxlY3REYXRhOiBJQ2hlY2tlZFRyZWVbXSA9IFtdO1xyXG5cclxuICAvL+mAieaLqeiKgueCuVxyXG4gIGdldCBzZWxlY3RlZE5vZGUoKSB7XHJcbiAgICByZXR1cm4gXy5jbG9uZURlZXAodGhpcy5zZWxlY3REYXRhKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RUeXBlKCkge1xyXG4gICAgbGV0IHJlcyA9IFwiXCI7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucy5zZWxlY3RUeXBlICE9IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJlcyA9IHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgaWQgPSBfLmdldCh0aGlzLmZpZWxkQ29uZmlnLCBcInRlbXBsYXRlT3B0aW9ucy50cmVlaWRcIik7XHJcbiAgICBpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9IG51bGwgJiYgaWQgIT0gXCJcIikge1xyXG4gICAgICB0aGlzLmNvbnRyb2xpZCA9IF8uZ2V0KHRoaXMuZmllbGRDb25maWcsIFwidGVtcGxhdGVPcHRpb25zLnRyZWVpZFwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0VHJlZURhdGEoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHROb2RlKSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+iOt+WPllRyZWXmlbDmja7pm4ZcclxuICBnZXRUcmVlRGF0YSgpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0VHJlZURhdGEoeyBpZDogdGhpcy5jb250cm9saWQgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMudHJlZURhdGEgPSByZXM7XHJcblxyXG4gICAgICB0aGlzLmdldFNlbGVjdERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0RGF0YSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWwgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWwgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLmtleSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV0gIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGF0YSA9IF8uY2xvbmVEZWVwKFxyXG4gICAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==