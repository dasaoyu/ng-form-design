/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from "@angular/core";
import * as _ from "lodash";
import { DataService } from "../../service/data.service";
var VXFormOrg = /** @class */ (function () {
    function VXFormOrg(dataService, cd) {
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
    Object.defineProperty(VXFormOrg.prototype, "selectedNode", {
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
    Object.defineProperty(VXFormOrg.prototype, "selectType", {
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
    VXFormOrg.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orgControl = _.get(this.fieldConfig, "templateOptions.controlid");
        if (orgControl != undefined && orgControl != null && orgControl != "") {
            this.controlid = _.get(this.fieldConfig, "templateOptions.controlid");
        }
        this.getOrgData();
    };
    /**
     * @return {?}
     */
    VXFormOrg.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.cd.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormOrg.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    //获取组织数据集
    //获取组织数据集
    /**
     * @return {?}
     */
    VXFormOrg.prototype.getOrgData = 
    //获取组织数据集
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getSysCtrOrgTree().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.data = res;
            if (_this.data != null && _this.data.length > 0) {
                if (_this.data[0].children != undefined) {
                    _this.curOrgId = _this.data[0].key;
                    _this.treeData = _this.data[0].children;
                }
            }
            _this.getTreeSelectData();
        }));
    };
    /**
     * @return {?}
     */
    VXFormOrg.prototype.getTreeSelectData = /**
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
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormOrg.prototype.orgChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.key === event) {
                _this.treeData = item.children;
            }
        }));
        this.selectData.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.setTreeChecked(_this.data, item.value);
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormOrg.prototype.treeChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.dimension) {
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.setTreeUnChecked(item.children, event.delete);
            }));
        }
        this.treeChangeEvent.emit(this.selectData);
    };
    /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    VXFormOrg.prototype.setTreeUnChecked = /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    function (tree, key) {
        var _this = this;
        if (tree && tree.length > 0) {
            tree.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.key === key) {
                    item.checked = false;
                }
                else {
                    if (item.children && item.children.length > 0) {
                        _this.setTreeUnChecked(item.children, key);
                    }
                }
            }));
        }
        return;
    };
    /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    VXFormOrg.prototype.setTreeChecked = /**
     * @param {?} tree
     * @param {?} key
     * @return {?}
     */
    function (tree, key) {
        var _this = this;
        if (tree && tree.length > 0) {
            tree.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.key === key) {
                    item.checked = true;
                }
                else {
                    if (item.children && item.children.length > 0) {
                        _this.setTreeChecked(item.children, key);
                    }
                }
            }));
        }
        return;
    };
    VXFormOrg.decorators = [
        { type: Component, args: [{
                    selector: "vxform-org",
                    template: "<div class=\"org-select\" *ngIf=\"dimension==true\">\r\n    <span>\u7EF4\u5EA6\uFF1A</span>\r\n    <nz-select [(ngModel)]=\"curOrgId\" (ngModelChange)=\"orgChange($event)\">\r\n        <ng-container *ngFor=\"let item of data;\">\r\n            <nz-option [nzValue]=\"item.key\" [nzLabel]=\"item.title\"></nz-option>\r\n        </ng-container>\r\n    </nz-select>\r\n</div>\r\n<div class=\"org-tree\"> \r\n    <vxform-private-tree [data]=\"treeData\" [selectType]=\"selectType\" [selectData]=\"selectData\" [tag]=\"tag\" (treeChangeEvent)=\"treeChange($event)\"></vxform-private-tree>\r\n</div>",
                    providers: [DataService],
                    styles: [":host ::ng-deep .org-select{min-width:500px;padding:15px 0 0 15px;font-size:12px}:host ::ng-deep .org-select nz-select{min-width:250px}:host ::ng-deep .org-select .ant-select{font-size:12px}:host ::ng-deep .org-select .ant-select-dropdown{font-size:12px}:host ::ng-deep .org-tree{height:calc(100% - 47px);padding:0 0 0 10px}:host ::ng-deep .org-tree .tree-item{padding-left:0!important}:host ::ng-deep .org-tree .tree-tag{margin-top:-47px}"]
                }] }
    ];
    /** @nocollapse */
    VXFormOrg.ctorParameters = function () { return [
        { type: DataService },
        { type: ChangeDetectorRef }
    ]; };
    VXFormOrg.propDecorators = {
        fieldConfig: [{ type: Input }],
        tag: [{ type: Input }],
        treeChangeEvent: [{ type: Output }],
        nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
    };
    return VXFormOrg;
}());
export { VXFormOrg };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvb3JnL2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBSVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBUTVCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV6RDtJQWtERSxtQkFBbUIsV0FBd0IsRUFBVSxFQUFxQjtRQUF2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBM0NqRSxnQkFBVyxHQUFzQixFQUFFLENBQUM7UUFDcEMsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNuQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7O1FBR3BELFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFtQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQXFCdEIsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUUzQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFNcEIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBVyxDQUFDLENBQUM7SUFHbUQsQ0FBQztJQWhDL0Usc0JBQUksbUNBQVk7UUFEaEIsTUFBTTs7Ozs7O1FBQ047WUFDRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lB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RDs7SUFHcEQseUJBQXVCOztJQUN2Qiw4QkFBMEI7O0lBQzFCLCtCQUFnQzs7SUFDaEMsNkJBQXNCOztJQXFCdEIsNEJBQXlCOztJQUN6Qiw2QkFBMkI7O0lBRTNCLDhCQUF1Qjs7SUFDdkIsMkJBQW9COztJQUdwQixvQ0FDNkM7O0lBRTdDLGdDQUF3Qjs7SUFDeEIsbUNBQTJCOztJQUdmLGdDQUErQjs7Ozs7SUFBRSx1QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tIFwibmctem9ycm8tYW50ZC90cmVlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmllbGRXcmFwcGVyLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYVGFibGVGaWVsZENvbmZpZ1xyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBJU2VsZWN0ZWROb2RlLFxyXG4gIElPcmdEYXRhLFxyXG4gIElUcmVlRGF0YSxcclxuICBJQ2hlY2tlZFRyZWVcclxufSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLW9yZ1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1PcmcgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gIEBJbnB1dCgpIHRhZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgQE91dHB1dCgpIHRyZWVDaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvL+e7hOe7h+aVsOaNrlxyXG4gIGRhdGE6IElUcmVlRGF0YVtdID0gW107XHJcbiAgZGltZW5zaW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICBzZWxlY3REYXRhOiBJQ2hlY2tlZFRyZWVbXSA9IFtdO1xyXG4gIGN1ck9yZ0lkOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAvL+mAieaLqeiKgueCuVxyXG4gIGdldCBzZWxlY3RlZE5vZGUoKSB7XHJcbiAgICByZXR1cm4gXy5jbG9uZURlZXAodGhpcy5zZWxlY3REYXRhKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RUeXBlKCkge1xyXG4gICAgbGV0IHJlcyA9IFwiXCI7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy50ZW1wbGF0ZU9wdGlvbnMgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLnRlbXBsYXRlT3B0aW9ucy5zZWxlY3RUeXBlICE9IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJlcyA9IHRoaXMuZmllbGRDb25maWcudGVtcGxhdGVPcHRpb25zLnNlbGVjdFR5cGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgb3JnRGF0YTogSU9yZ0RhdGFbXSA9IFtdO1xyXG4gIHRyZWVEYXRhOiBJVHJlZURhdGFbXSA9IFtdO1xyXG5cclxuICBjb250cm9saWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgdHJlZWlkOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHJcbiAgQFZpZXdDaGlsZChcIm56VHJlZUNvbXBvbmVudFwiLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBuelRyZWVDb21wb25lbnQ6IE56VHJlZUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgc2VsZWN0ZWRLZXk6IGFueVtdID0gW107XHJcbiAgc2tlbGV0b25TdGF0dXM6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IG9yZ0NvbnRyb2wgPSBfLmdldCh0aGlzLmZpZWxkQ29uZmlnLCBcInRlbXBsYXRlT3B0aW9ucy5jb250cm9saWRcIik7XHJcbiAgICBpZiAob3JnQ29udHJvbCAhPSB1bmRlZmluZWQgJiYgb3JnQ29udHJvbCAhPSBudWxsICYmIG9yZ0NvbnRyb2wgIT0gXCJcIikge1xyXG4gICAgICB0aGlzLmNvbnRyb2xpZCA9IF8uZ2V0KHRoaXMuZmllbGRDb25maWcsIFwidGVtcGxhdGVPcHRpb25zLmNvbnRyb2xpZFwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0T3JnRGF0YSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG5cclxuICAvL+iOt+WPlue7hOe7h+aVsOaNrumbhlxyXG4gIGdldE9yZ0RhdGEoKSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFN5c0N0ck9yZ1RyZWUoKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHJlcztcclxuICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsICYmIHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRhdGFbMF0uY2hpbGRyZW4hPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICB0aGlzLmN1ck9yZ0lkID0gdGhpcy5kYXRhWzBdLmtleTtcclxuICAgICAgICAgIHRoaXMudHJlZURhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0VHJlZVNlbGVjdERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJlZVNlbGVjdERhdGEoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcua2V5ICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5maWVsZENvbmZpZy5tb2RlbFt0aGlzLmZpZWxkQ29uZmlnLmtleV0gIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMuZmllbGRDb25maWcubW9kZWxbdGhpcy5maWVsZENvbmZpZy5rZXldICE9IG51bGxcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEgPSBfLmNsb25lRGVlcChcclxuICAgICAgICB0aGlzLmZpZWxkQ29uZmlnLm1vZGVsW3RoaXMuZmllbGRDb25maWcua2V5XVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3JnQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0ua2V5ID09PSBldmVudCkge1xyXG4gICAgICAgIHRoaXMudHJlZURhdGEgPSBpdGVtLmNoaWxkcmVuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VsZWN0RGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXRUcmVlQ2hlY2tlZCh0aGlzLmRhdGEsIGl0ZW0udmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmVlQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmRpbWVuc2lvbikge1xyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmVlVW5DaGVja2VkKGl0ZW0uY2hpbGRyZW4sIGV2ZW50LmRlbGV0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmVlQ2hhbmdlRXZlbnQuZW1pdCh0aGlzLnNlbGVjdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2V0VHJlZVVuQ2hlY2tlZCh0cmVlOiBJVHJlZURhdGFbXSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0cmVlICYmIHRyZWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0cmVlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHJlZVVuQ2hlY2tlZChpdGVtLmNoaWxkcmVuLCBrZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzZXRUcmVlQ2hlY2tlZCh0cmVlOiBJVHJlZURhdGFbXSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0cmVlICYmIHRyZWUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0cmVlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmVlQ2hlY2tlZChpdGVtLmNoaWxkcmVuLCBrZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=