/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import * as _ from "lodash";
var VXFormPrivateTree = /** @class */ (function () {
    function VXFormPrivateTree() {
        //是否显示Tag
        this.tag = true;
        //单选？多选
        this.selectType = "single";
        this.expandAll = true;
        //选中节点
        this.selectData = [];
        //树数据
        this.data = [];
        this.treeChangeEvent = new EventEmitter();
        this.selectedKey = [];
        //选择节点
        this.selectedNode = [];
        this.skeletonStatus = 0;
    }
    /**
     * @return {?}
     */
    VXFormPrivateTree.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormPrivateTree.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.selectData) {
            this.treeChecked(this.selectData);
        }
        if (changes.data) {
            //setTimeout(() => {
            this.skeletonStatus = 1;
            //}, 100);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormPrivateTree.prototype.nzClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.selectType != "multiple") {
            this.selectData.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            function (item, index, object) {
                if (item != undefined &&
                    item != null &&
                    item.value != undefined &&
                    item.value != null &&
                    event != undefined &&
                    event != null &&
                    event.node != undefined &&
                    event.node != null &&
                    event.node.key != undefined &&
                    event.node.key != null &&
                    event.node.title != undefined &&
                    event.node.title != null &&
                    item.value !== event.node.key) {
                    object.splice(index, 1);
                }
            }));
            if (this.selectData.length < 1) {
                if (event != undefined &&
                    event != null &&
                    event.node != undefined &&
                    event.node != null &&
                    event.node.key != undefined &&
                    event.node.key != null &&
                    event.node.title != undefined &&
                    event.node.title != null) {
                    this.selectData.push({
                        label: event.node.title,
                        value: event.node.key
                    });
                }
            }
            this.treeChangeEvent.emit({ checkData: this.selectData });
        }
    };
    //点击复选框触发
    //点击复选框触发
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormPrivateTree.prototype.nzCheck = 
    //点击复选框触发
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event != undefined &&
            event != null &&
            event.keys != undefined &&
            event.keys != null &&
            event.node != undefined &&
            event.node != null &&
            event.node.key != undefined &&
            event.node.key != null &&
            event.node.title != undefined &&
            event.node.title != null) {
            /** @type {?} */
            var isAdd = event.keys.some((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return key === _.get(event, "node.key");
            }));
            if (isAdd == true) {
                this.selectData.push({
                    label: event.node.title,
                    value: event.node.key
                });
            }
            else {
                this.selectData.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @param {?} object
                 * @return {?}
                 */
                function (item, index, object) {
                    if (item.value === _.get(event, "node.key")) {
                        object.splice(index, 1);
                    }
                }));
            }
        }
        this.treeChecked(this.selectData);
        this.treeChangeEvent.emit({ checkData: this.selectData });
    };
    //重置选中节点
    //重置选中节点
    /**
     * @param {?} items
     * @return {?}
     */
    VXFormPrivateTree.prototype.treeChecked = 
    //重置选中节点
    /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        if (items != null && items.length > 0) {
            this.selectedKey = items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.value;
            }));
        }
        else {
            this.selectedKey = [];
        }
    };
    //删除选中节点
    //删除选中节点
    /**
     * @param {?} node
     * @return {?}
     */
    VXFormPrivateTree.prototype.selectClearById = 
    //删除选中节点
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.selectData.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        function (item, index, object) {
            if (item.value === node) {
                object.splice(index, 1);
            }
        }));
        this.treeChecked(this.selectData);
        this.treeChangeEvent.emit({ checkData: this.selectData, delete: node });
    };
    /**
     * @return {?}
     */
    VXFormPrivateTree.prototype.selectAllClear = /**
     * @return {?}
     */
    function () {
        //this.selectData =[];
    };
    VXFormPrivateTree.decorators = [
        { type: Component, args: [{
                    selector: "vxform-private-tree",
                    template: " \r\n    <ul class=\"component-tree\">\r\n        <li class=\"tree-item vxform-scrollbar \">\r\n \r\n            <nz-tree #nzTreeComponent [nzData]=\"data\" (nzClick)=\"nzClick($event)\" (nzCheckBoxChange)=\"nzCheck($event)\" [nzCheckable]=\"selectType==='multiple'\" [nzSelectedKeys]=\"selectedKey\" [nzCheckedKeys]=\"selectedKey\" [nzExpandAll]=\"expandAll\" [nzCheckStrictly]=\"true\">\r\n            </nz-tree>\r\n        </li>\r\n        <li class=\"tree-tag vxform-scrollbar \" *ngIf=\"tag\">\r\n            <div class=\"tag-header\">\r\n                <label>\u5DF2\u9009<span>{{selectData.length}}</span>\u4EBA</label>\r\n                <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n            </div>\r\n            <div class=\"tag-content\">\r\n                <ng-container *ngFor=\"let item of selectData\">\r\n                    <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.value)\">{{item.label}}</nz-tag>\r\n                </ng-container>\r\n            </div>\r\n        </li>\r\n    </ul> ",
                    styles: [":host ::ng-deep .vxform-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep vx-skeleton{height:100%}:host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}:host ::ng-deep .component-tree{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;height:100%}:host ::ng-deep .component-tree .ant-tree-node-content-wrapper{font-size:12px!important;display:inline-block!important;padding:0 5px 0 0!important;min-width:200px!important}:host ::ng-deep .component-tree .ant-tree-node-selected{background-color:#f6f7fb!important}:host ::ng-deep .component-tree .tree-item{flex:1;border:0 solid #f6f7fb;padding:8px 5px 5px 10px;overflow-y:auto}:host ::ng-deep .component-tree .tree-tag{overflow-y:auto;width:330px;background-color:#f6f7fb;padding:15px}:host ::ng-deep .component-tree .tree-tag .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .component-tree .tree-tag .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .component-tree .tree-tag .tag-header label:nth-last-child(1){float:right;font-weight:400;color:#6375da;cursor:pointer}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag i{color:#6375da;font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    VXFormPrivateTree.ctorParameters = function () { return []; };
    VXFormPrivateTree.propDecorators = {
        tag: [{ type: Input }],
        selectType: [{ type: Input }],
        expandAll: [{ type: Input }],
        selectData: [{ type: Input }],
        data: [{ type: Input }],
        treeChangeEvent: [{ type: Output }],
        nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
    };
    return VXFormPrivateTree;
}());
export { VXFormPrivateTree };
if (false) {
    /** @type {?} */
    VXFormPrivateTree.prototype.tag;
    /** @type {?} */
    VXFormPrivateTree.prototype.selectType;
    /** @type {?} */
    VXFormPrivateTree.prototype.expandAll;
    /** @type {?} */
    VXFormPrivateTree.prototype.selectData;
    /** @type {?} */
    VXFormPrivateTree.prototype.data;
    /** @type {?} */
    VXFormPrivateTree.prototype.treeChangeEvent;
    /** @type {?} */
    VXFormPrivateTree.prototype.nzTreeComponent;
    /** @type {?} */
    VXFormPrivateTree.prototype.selectedKey;
    /** @type {?} */
    VXFormPrivateTree.prototype.selectedNode;
    /** @type {?} */
    VXFormPrivateTree.prototype.skeletonStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJpdmF0ZS90cmVlL2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFTNUI7SUErQkU7O1FBeEJTLFFBQUcsR0FBWSxJQUFJLENBQUM7O1FBR3BCLGVBQVUsR0FBMEIsUUFBUSxDQUFDO1FBRTdDLGNBQVMsR0FBVyxJQUFJLENBQUM7O1FBR3pCLGVBQVUsR0FBbUIsRUFBRSxDQUFDOztRQUdoQyxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV0QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFLM0QsZ0JBQVcsR0FBVSxFQUFFLENBQUM7O1FBR3hCLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVuQyxtQkFBYyxHQUFXLENBQUMsQ0FBQztJQUNaLENBQUM7Ozs7SUFFaEIsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYix1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLG9CQUFvQjtZQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUN4QixVQUFVO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxLQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxFQUFFO1lBQ2pDLElB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QixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsMENBQWM7OztJQUFkO1FBQ0Usc0JBQXNCO0lBQ3hCLENBQUM7O2dCQW5KRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsZ2lDQUFxQzs7aUJBRXRDOzs7OztzQkFHRSxLQUFLOzZCQUdMLEtBQUs7NEJBRUwsS0FBSzs2QkFHTCxLQUFLO3VCQUdMLEtBQUs7a0NBRUwsTUFBTTtrQ0FFTixTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQThIakQsd0JBQUM7Q0FBQSxBQXBKRCxJQW9KQztTQS9JWSxpQkFBaUI7OztJQUU1QixnQ0FBNkI7O0lBRzdCLHVDQUFzRDs7SUFFdEQsc0NBQWtDOztJQUdsQyx1Q0FBeUM7O0lBR3pDLGlDQUFnQzs7SUFFaEMsNENBQTJEOztJQUUzRCw0Q0FDNkM7O0lBRTdDLHdDQUF3Qjs7SUFHeEIseUNBQW1DOztJQUVuQywyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tIFwibmctem9ycm8tYW50ZC90cmVlXCI7XHJcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSVNlbGVjdGVkTm9kZSxcclxuICBJVHJlZURhdGEsXHJcbiAgSUNoZWNrZWRUcmVlLFxyXG4gIElUcmVlRXZlbnRcclxufSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLXByaXZhdGUtdHJlZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybVByaXZhdGVUcmVlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8v5piv5ZCm5pi+56S6VGFnXHJcbiAgQElucHV0KCkgdGFnOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLy/ljZXpgInvvJ/lpJrpgIlcclxuICBASW5wdXQoKSBzZWxlY3RUeXBlOiBcInNpbmdsZVwiIHwgXCJtdWx0aXBsZVwiID0gXCJzaW5nbGVcIjtcclxuXHJcbiAgQElucHV0KCkgZXhwYW5kQWxsOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvL+mAieS4reiKgueCuVxyXG4gIEBJbnB1dCgpIHNlbGVjdERhdGE6IElDaGVja2VkVHJlZVtdID0gW107XHJcblxyXG4gIC8v5qCR5pWw5o2uXHJcbiAgQElucHV0KCkgZGF0YTogSVRyZWVEYXRhW10gPSBbXTtcclxuXHJcbiAgQE91dHB1dCgpIHRyZWVDaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8SVRyZWVFdmVudD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm56VHJlZUNvbXBvbmVudFwiLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBuelRyZWVDb21wb25lbnQ6IE56VHJlZUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgc2VsZWN0ZWRLZXk6IGFueVtdID0gW107XHJcblxyXG4gIC8v6YCJ5oup6IqC54K5XHJcbiAgc2VsZWN0ZWROb2RlOiBJU2VsZWN0ZWROb2RlW10gPSBbXTtcclxuXHJcbiAgc2tlbGV0b25TdGF0dXM6IG51bWJlciA9IDA7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnNlbGVjdERhdGEpIHtcclxuICAgICAgdGhpcy50cmVlQ2hlY2tlZCh0aGlzLnNlbGVjdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xyXG4gICAgICAvL3NldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNrZWxldG9uU3RhdHVzID0gMTtcclxuICAgICAgLy99LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbnpDbGljayhldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdFR5cGUgIT0gXCJtdWx0aXBsZVwiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGF0YS5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4LCBvYmplY3QpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpdGVtICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgaXRlbSAhPSBudWxsICYmXHJcbiAgICAgICAgICBpdGVtLnZhbHVlICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgaXRlbS52YWx1ZSAhPSBudWxsICYmXHJcbiAgICAgICAgICBldmVudCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGV2ZW50ICE9IG51bGwgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlICE9IG51bGwgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZS5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZS50aXRsZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUudGl0bGUgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgaXRlbS52YWx1ZSAhPT0gZXZlbnQubm9kZS5rZXlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdERhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGV2ZW50ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgZXZlbnQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZS5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlLmtleSAhPSBudWxsICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlLnRpdGxlICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZS50aXRsZSAhPSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBldmVudC5ub2RlLnRpdGxlLFxyXG4gICAgICAgICAgICB2YWx1ZTogZXZlbnQubm9kZS5rZXlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyZWVDaGFuZ2VFdmVudC5lbWl0KHsgY2hlY2tEYXRhOiB0aGlzLnNlbGVjdERhdGEgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+eCueWHu+WkjemAieahhuinpuWPkVxyXG4gIG56Q2hlY2soZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBldmVudCAhPSBudWxsICYmXHJcbiAgICAgIGV2ZW50LmtleXMgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGV2ZW50LmtleXMgIT0gbnVsbCAmJlxyXG4gICAgICBldmVudC5ub2RlICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBldmVudC5ub2RlICE9IG51bGwgJiZcclxuICAgICAgZXZlbnQubm9kZS5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGV2ZW50Lm5vZGUua2V5ICE9IG51bGwgJiZcclxuICAgICAgZXZlbnQubm9kZS50aXRsZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgZXZlbnQubm9kZS50aXRsZSAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgbGV0IGlzQWRkOiBib29sZWFuID0gZXZlbnQua2V5cy5zb21lKChrZXk6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBrZXkgPT09IF8uZ2V0KGV2ZW50LCBcIm5vZGUua2V5XCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGlzQWRkID09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGEucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogZXZlbnQubm9kZS50aXRsZSxcclxuICAgICAgICAgIHZhbHVlOiBldmVudC5ub2RlLmtleVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCwgb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gXy5nZXQoZXZlbnQsIFwibm9kZS5rZXlcIikpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudHJlZUNoZWNrZWQodGhpcy5zZWxlY3REYXRhKTtcclxuXHJcbiAgICB0aGlzLnRyZWVDaGFuZ2VFdmVudC5lbWl0KHsgY2hlY2tEYXRhOiB0aGlzLnNlbGVjdERhdGEgfSk7XHJcbiAgfVxyXG5cclxuICAvL+mHjee9rumAieS4reiKgueCuVxyXG4gIHRyZWVDaGVja2VkKGl0ZW1zOiBhbnkpIHtcclxuICAgIGlmIChpdGVtcyAhPSBudWxsICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEtleSA9IGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEtleSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/liKDpmaTpgInkuK3oioLngrlcclxuICBzZWxlY3RDbGVhckJ5SWQobm9kZTogYW55KSB7XHJcbiAgICB0aGlzLnNlbGVjdERhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIG9iamVjdCkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbm9kZSkge1xyXG4gICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudHJlZUNoZWNrZWQodGhpcy5zZWxlY3REYXRhKTtcclxuICAgIHRoaXMudHJlZUNoYW5nZUV2ZW50LmVtaXQoeyBjaGVja0RhdGE6IHRoaXMuc2VsZWN0RGF0YSwgZGVsZXRlOiBub2RlIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsQ2xlYXIoKXsgIFxyXG4gICAgLy90aGlzLnNlbGVjdERhdGEgPVtdO1xyXG4gIH1cclxufVxyXG4iXX0=