/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
export class VXFormOrg {
    /**
     * @param {?} dataService
     * @param {?} cd
     */
    constructor(dataService, cd) {
        this.dataService = dataService;
        this.cd = cd;
        this.fieldConfig = {};
        this.tag = true;
        this.treeChangeEvent = new EventEmitter();
        //组织数据
        this.data = [];
        this.dimension = true;
        this.selectData = [];
        this.curOrgId = "";
        this.orgData = [];
        this.treeData = [];
        this.controlid = "";
        this.treeid = "";
        this.selectedKey = [];
        this.skeletonStatus = 0;
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
        let orgControl = _.get(this.fieldConfig, "templateOptions.controlid");
        if (orgControl != undefined && orgControl != null && orgControl != "") {
            this.controlid = _.get(this.fieldConfig, "templateOptions.controlid");
        }
        this.getOrgData();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    //获取组织数据集
    /**
     * @return {?}
     */
    getOrgData() {
        this.dataService.getSysCtrOrgTree().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.data = res;
            if (this.data != null && this.data.length > 0) {
                if (this.data[0].children != undefined) {
                    this.curOrgId = this.data[0].key;
                    this.treeData = this.data[0].children;
                }
            }
            this.getTreeSelectData();
        }));
    }
    /**
     * @return {?}
     */
    getTreeSelectData() {
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
    /**
     * @param {?} event
     * @return {?}
     */
    orgChange(event) {
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.key === event) {
                this.treeData = item.children;
            }
        }));
        this.selectData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.setTreeChecked(this.data, item.value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    treeChange(event) {
        if (this.dimension) {
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.setTreeUnChecked(item.children, event.delete);
            }));
        }
        this.treeChangeEvent.emit(this.selectData);
    }
    /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    setTreeUnChecked(tree, key) {
        if (tree && tree.length > 0) {
            tree.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.key === key) {
                    item.checked = false;
                }
                else {
                    if (item.children && item.children.length > 0) {
                        this.setTreeUnChecked(item.children, key);
                    }
                }
            }));
        }
        return;
    }
    /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    setTreeChecked(tree, key) {
        if (tree && tree.length > 0) {
            tree.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.key === key) {
                    item.checked = true;
                }
                else {
                    if (item.children && item.children.length > 0) {
                        this.setTreeChecked(item.children, key);
                    }
                }
            }));
        }
        return;
    }
}
VXFormOrg.decorators = [
    { type: Component, args: [{
                selector: "vxform-org",
                template: "<div class=\"org-select\" *ngIf=\"dimension==true\">\r\n    <span>\u7EF4\u5EA6\uFF1A</span>\r\n    <nz-select [(ngModel)]=\"curOrgId\" (ngModelChange)=\"orgChange($event)\">\r\n        <ng-container *ngFor=\"let item of data;\">\r\n            <nz-option [nzValue]=\"item.key\" [nzLabel]=\"item.title\"></nz-option>\r\n        </ng-container>\r\n    </nz-select>\r\n</div>\r\n<div class=\"org-tree\"> \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\" (treeChangeEvent)=\"treeChange($event)\"></vxform-private-tree>\r\n</div>",
                providers: [DataService],
                styles: [":host ::ng-deep .org-select{min-width:500px;padding:15px 0 0 15px;font-size:12px}:host ::ng-deep .org-select nz-select{min-width:250px}:host ::ng-deep .org-select .ant-select{font-size:12px}:host ::ng-deep .org-select .ant-select-dropdown{font-size:12px}:host ::ng-deep .org-tree{height:calc(100% - 47px);padding:0 0 0 10px}:host ::ng-deep .org-tree .tree-item{padding-left:0!important}:host ::ng-deep .org-tree .tree-tag{margin-top:-47px}"]
            }] }
];
/** @nocollapse */
VXFormOrg.ctorParameters = () => [
    { type: DataService },
    { type: ChangeDetectorRef }
];
VXFormOrg.propDecorators = {
    fieldConfig: [{ type: Input }],
    tag: [{ type: Input }],
    treeChangeEvent: [{ type: Output }],
    nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
};
if (false) {
    /** @type {?} */
    VXFormOrg.prototype.fieldConfig;
    /** @type {?} */
    VXFormOrg.prototype.tag;
    /** @type {?} */
    VXFormOrg.prototype.treeChangeEvent;
    /** @type {?} */
    VXFormOrg.prototype.data;
    /** @type {?} */
    VXFormOrg.prototype.dimension;
    /** @type {?} */
    VXFormOrg.prototype.selectData;
    /** @type {?} */
    VXFormOrg.prototype.curOrgId;
    /** @type {?} */
    VXFormOrg.prototype.orgData;
    /** @type {?} */
    VXFormOrg.prototype.treeData;
    /** @type {?} */
    VXFormOrg.prototype.controlid;
    /** @type {?} */
    VXFormOrg.prototype.treeid;
    /** @type {?} */
    VXFormOrg.prototype.nzTreeComponent;
    /** @type {?} */
    VXFormOrg.prototype.selectedKey;
    /** @type {?} */
    VXFormOrg.prototype.skeletonStatus;
    /** @type {?} */
    VXFormOrg.prototype.dataService;
    /**
     * @type {?}
     * @private
     */
    VXFormOrg.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb3JnL2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBSVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBUTVCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVF6RCxNQUFNLE9BQU8sU0FBUzs7Ozs7SUE0Q3BCLFlBQW1CLFdBQXdCLEVBQVUsRUFBcUI7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTNDakUsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLFFBQUcsR0FBWSxJQUFJLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOztRQUdwRCxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFxQnRCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBTXBCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO0lBR21ELENBQUM7Ozs7O0lBaEMvRSxJQUFJLFlBQVk7UUFDZCxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJ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O0lBR2YsZ0NBQStCOzs7OztJQUFFLHVCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE56VHJlZUNvbXBvbmVudCB9IGZyb20gXCJuZy16b3Jyby1hbnRkL3RyZWVcIjtcclxuaW1wb3J0IHtcclxuICBGaWVsZFdyYXBwZXIsXHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhUYWJsZUZpZWxkQ29uZmlnXHJcbn0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIElTZWxlY3RlZE5vZGUsXHJcbiAgSU9yZ0RhdGEsXHJcbiAgSVRyZWVEYXRhLFxyXG4gIElDaGVja2VkVHJlZVxyXG59IGZyb20gXCIuLi8uLi90b29scy91dGlsXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tb3JnXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybU9yZyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGRDb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge307XHJcbiAgQElucHV0KCkgdGFnOiBib29sZWFuID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgdHJlZUNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8v57uE57uH5pWw5o2uXHJcbiAgZGF0YTogSVRyZWVEYXRhW10gPSBbXTtcclxuICBkaW1lbnNpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHNlbGVjdERhdGE6IElDaGVja2VkVHJlZVtdID0gW107XHJcbiAgY3VyT3JnSWQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIC8v6YCJ5oup6IqC54K5XHJcbiAgZ2V0IHNlbGVjdGVkTm9kZSgpIHtcclxuICAgIHJldHVybiBfLmNsb25lRGVlcCh0aGlzLnNlbGVjdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdFR5cGUoKSB7XHJcbiAgICBsZXQgcmVzID0gXCJcIjtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGUgIT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgcmVzID0gdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMuc2VsZWN0VHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBvcmdEYXRhOiBJT3JnRGF0YVtdID0gW107XHJcbiAgdHJlZURhdGE6IElUcmVlRGF0YVtdID0gW107XHJcblxyXG4gIGNvbnRyb2xpZDogc3RyaW5nID0gXCJcIjtcclxuICB0cmVlaWQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cclxuICBAVmlld0NoaWxkKFwibnpUcmVlQ29tcG9uZW50XCIsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIG56VHJlZUNvbXBvbmVudDogTnpUcmVlQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICBzZWxlY3RlZEtleTogYW55W10gPSBbXTtcclxuICBza2VsZXRvblN0YXR1czogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgb3JnQ29udHJvbCA9IF8uZ2V0KHRoaXMuZmllbGRDb25maWcsIFwidGVtcGxhdGVPcHRpb25zLmNvbnRyb2xpZFwiKTtcclxuICAgIGlmIChvcmdDb250cm9sICE9IHVuZGVmaW5lZCAmJiBvcmdDb250cm9sICE9IG51bGwgJiYgb3JnQ29udHJvbCAhPSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbGlkID0gXy5nZXQodGhpcy5maWVsZENvbmZpZywgXCJ0ZW1wbGF0ZU9wdGlvbnMuY29udHJvbGlkXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRPcmdEYXRhKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XHJcblxyXG4gIC8v6I635Y+W57uE57uH5pWw5o2u6ZuGXHJcbiAgZ2V0T3JnRGF0YSgpIHtcclxuICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0U3lzQ3RyT3JnVHJlZSgpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gcmVzO1xyXG4gICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwgJiYgdGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGlmKHRoaXMuZGF0YVswXS5jaGlsZHJlbiE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgIHRoaXMuY3VyT3JnSWQgPSB0aGlzLmRhdGFbMF0ua2V5O1xyXG4gICAgICAgICAgdGhpcy50cmVlRGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZXRUcmVlU2VsZWN0RGF0YSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRUcmVlU2VsZWN0RGF0YSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZENvbmZpZyAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWwgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWwgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLmtleSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV0gIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGF0YSA9IF8uY2xvbmVEZWVwKFxyXG4gICAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcmdDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5rZXkgPT09IGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50cmVlRGF0YSA9IGl0ZW0uY2hpbGRyZW47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3REYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFRyZWVDaGVja2VkKHRoaXMuZGF0YSwgaXRlbS52YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyZWVDaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuZGltZW5zaW9uKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnNldFRyZWVVbkNoZWNrZWQoaXRlbS5jaGlsZHJlbiwgZXZlbnQuZGVsZXRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyZWVDaGFuZ2VFdmVudC5lbWl0KHRoaXMuc2VsZWN0RGF0YSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmVlVW5DaGVja2VkKHRyZWU6IElUcmVlRGF0YVtdLCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKHRyZWUgJiYgdHJlZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRyZWUuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmVlVW5DaGVja2VkKGl0ZW0uY2hpbGRyZW4sIGtleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHNldFRyZWVDaGVja2VkKHRyZWU6IElUcmVlRGF0YVtdLCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKHRyZWUgJiYgdHJlZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRyZWUuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRyZWVDaGVja2VkKGl0ZW0uY2hpbGRyZW4sIGtleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==