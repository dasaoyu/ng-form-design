/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import * as _ from "lodash";
export class VXFormPrivateTree {
    constructor() {
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
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.selectData) {
            this.treeChecked(this.selectData);
        }
        if (changes.data) {
            //setTimeout(() => {
            this.skeletonStatus = 1;
            //}, 100);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzClick(event) {
        if (this.selectType != "multiple") {
            this.selectData.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
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
    }
    //点击复选框触发
    /**
     * @param {?} event
     * @return {?}
     */
    nzCheck(event) {
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
            let isAdd = event.keys.some((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
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
                (item, index, object) => {
                    if (item.value === _.get(event, "node.key")) {
                        object.splice(index, 1);
                    }
                }));
            }
        }
        this.treeChecked(this.selectData);
        this.treeChangeEvent.emit({ checkData: this.selectData });
    }
    //重置选中节点
    /**
     * @param {?} items
     * @return {?}
     */
    treeChecked(items) {
        if (items != null && items.length > 0) {
            this.selectedKey = items.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.value;
            }));
        }
        else {
            this.selectedKey = [];
        }
    }
    //删除选中节点
    /**
     * @param {?} node
     * @return {?}
     */
    selectClearById(node) {
        this.selectData.forEach((/**
         * @param {?} item
         * @param {?} index
         * @param {?} object
         * @return {?}
         */
        (item, index, object) => {
            if (item.value === node) {
                object.splice(index, 1);
            }
        }));
        this.treeChecked(this.selectData);
        this.treeChangeEvent.emit({ checkData: this.selectData, delete: node });
    }
    /**
     * @return {?}
     */
    selectAllClear() {
        //this.selectData =[];
    }
}
VXFormPrivateTree.decorators = [
    { type: Component, args: [{
                selector: "vxform-private-tree",
                template: " \r\n    <ul class=\"component-tree\">\r\n        <li class=\"tree-item vxform-scrollbar \">\r\n \r\n            <nz-tree #nzTreeComponent [nzData]=\"data\" (nzClick)=\"nzClick($event)\" (nzCheckBoxChange)=\"nzCheck($event)\" [nzCheckable]=\"selectType==='multiple'\" [nzSelectedKeys]=\"selectedKey\" [nzCheckedKeys]=\"selectedKey\" [nzExpandAll]=\"expandAll\" [nzCheckStrictly]=\"true\">\r\n            </nz-tree>\r\n        </li>\r\n        <li class=\"tree-tag vxform-scrollbar \" *ngIf=\"tag\">\r\n            <div class=\"tag-header\">\r\n                <label>\u5DF2\u9009<span>{{selectData.length}}</span>\u4EBA</label>\r\n                <label (click)=\"selectAllClear()\">\u6E05\u7A7A</label>\r\n            </div>\r\n            <div class=\"tag-content\">\r\n                <ng-container *ngFor=\"let item of selectData\">\r\n                    <nz-tag nzMode=\"closeable\" (nzOnClose)=\"selectClearById(item.value)\">{{item.label}}</nz-tag>\r\n                </ng-container>\r\n            </div>\r\n        </li>\r\n    </ul> ",
                styles: [":host ::ng-deep .vxform-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxform-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}:host ::ng-deep vx-skeleton{height:100%}:host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}:host ::ng-deep .component-tree{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;height:100%}:host ::ng-deep .component-tree .ant-tree-node-content-wrapper{font-size:12px!important;display:inline-block!important;padding:0 5px 0 0!important;min-width:200px!important}:host ::ng-deep .component-tree .ant-tree-node-selected{background-color:#f6f7fb!important}:host ::ng-deep .component-tree .tree-item{flex:1;border:0 solid #f6f7fb;padding:8px 5px 5px 10px;overflow-y:auto}:host ::ng-deep .component-tree .tree-tag{overflow-y:auto;width:330px;background-color:#f6f7fb;padding:15px}:host ::ng-deep .component-tree .tree-tag .tag-header{font-size:12px;font-weight:700;color:#777d93;padding:0 0 20px}:host ::ng-deep .component-tree .tree-tag .tag-header span{display:inline-block;padding:0 3px;color:#ff986b;font-weight:400}:host ::ng-deep .component-tree .tree-tag .tag-header label:nth-last-child(1){float:right;font-weight:400;color:#6375da;cursor:pointer}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag{color:#6375da;border:0;padding:3px 8px;margin:0 10px 10px 0;background:#fff}:host ::ng-deep .component-tree .tree-tag .tag-content .ant-tag i{color:#6375da;font-weight:700}"]
            }] }
];
/** @nocollapse */
VXFormPrivateTree.ctorParameters = () => [];
VXFormPrivateTree.propDecorators = {
    tag: [{ type: Input }],
    selectType: [{ type: Input }],
    expandAll: [{ type: Input }],
    selectData: [{ type: Input }],
    data: [{ type: Input }],
    treeChangeEvent: [{ type: Output }],
    nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJpdmF0ZS90cmVlL2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFjNUIsTUFBTSxPQUFPLGlCQUFpQjtJQTBCNUI7O1FBeEJTLFFBQUcsR0FBWSxJQUFJLENBQUM7O1FBR3BCLGVBQVUsR0FBMEIsUUFBUSxDQUFDO1FBRTdDLGNBQVMsR0FBVyxJQUFJLENBQUM7O1FBR3pCLGVBQVUsR0FBbUIsRUFBRSxDQUFDOztRQUdoQyxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV0QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFLM0QsZ0JBQVcsR0FBVSxFQUFFLENBQUM7O1FBR3hCLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVuQyxtQkFBYyxHQUFXLENBQUMsQ0FBQztJQUNaLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDeEIsVUFBVTtTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBd0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMs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S0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osc0JBQXNCO0lBQ3hCLENBQUM7OztZQW5KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZ2lDQUFxQzs7YUFFdEM7Ozs7O2tCQUdFLEtBQUs7eUJBR0wsS0FBSzt3QkFFTCxLQUFLO3lCQUdMLEtBQUs7bUJBR0wsS0FBSzs4QkFFTCxNQUFNOzhCQUVOLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFmL0MsZ0NBQTZCOztJQUc3Qix1Q0FBc0Q7O0lBRXRELHNDQUFrQzs7SUFHbEMsdUNBQXlDOztJQUd6QyxpQ0FBZ0M7O0lBRWhDLDRDQUEyRDs7SUFFM0QsNENBQzZDOztJQUU3Qyx3Q0FBd0I7O0lBR3hCLHlDQUFtQzs7SUFFbkMsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvdHJlZVwiO1xyXG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gXCJuZy16b3Jyby1hbnRkL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIElTZWxlY3RlZE5vZGUsXHJcbiAgSVRyZWVEYXRhLFxyXG4gIElDaGVja2VkVHJlZSxcclxuICBJVHJlZUV2ZW50XHJcbn0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3V0aWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1wcml2YXRlLXRyZWVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2luZGV4LmNvbXBvbmVudC5sZXNzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1Qcml2YXRlVHJlZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvL+aYr+WQpuaYvuekulRhZ1xyXG4gIEBJbnB1dCgpIHRhZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8v5Y2V6YCJ77yf5aSa6YCJXHJcbiAgQElucHV0KCkgc2VsZWN0VHlwZTogXCJzaW5nbGVcIiB8IFwibXVsdGlwbGVcIiA9IFwic2luZ2xlXCI7XHJcblxyXG4gIEBJbnB1dCgpIGV4cGFuZEFsbDpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLy/pgInkuK3oioLngrlcclxuICBASW5wdXQoKSBzZWxlY3REYXRhOiBJQ2hlY2tlZFRyZWVbXSA9IFtdO1xyXG5cclxuICAvL+agkeaVsOaNrlxyXG4gIEBJbnB1dCgpIGRhdGE6IElUcmVlRGF0YVtdID0gW107XHJcblxyXG4gIEBPdXRwdXQoKSB0cmVlQ2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPElUcmVlRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuelRyZWVDb21wb25lbnRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgbnpUcmVlQ29tcG9uZW50OiBOelRyZWVDb21wb25lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHNlbGVjdGVkS2V5OiBhbnlbXSA9IFtdO1xyXG5cclxuICAvL+mAieaLqeiKgueCuVxyXG4gIHNlbGVjdGVkTm9kZTogSVNlbGVjdGVkTm9kZVtdID0gW107XHJcblxyXG4gIHNrZWxldG9uU3RhdHVzOiBudW1iZXIgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5zZWxlY3REYXRhKSB7XHJcbiAgICAgIHRoaXMudHJlZUNoZWNrZWQodGhpcy5zZWxlY3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcclxuICAgICAgLy9zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5za2VsZXRvblN0YXR1cyA9IDE7XHJcbiAgICAgIC8vfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG56Q2xpY2soZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUeXBlICE9IFwibXVsdGlwbGVcIikge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGEuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleCwgb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXRlbSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGl0ZW0gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgaXRlbS52YWx1ZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGl0ZW0udmFsdWUgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgZXZlbnQgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBldmVudCAhPSBudWxsICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZSAhPSBudWxsICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlLmtleSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUua2V5ICE9IG51bGwgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUudGl0bGUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlLnRpdGxlICE9IG51bGwgJiZcclxuICAgICAgICAgIGl0ZW0udmFsdWUgIT09IGV2ZW50Lm5vZGUua2V5XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3REYXRhLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBldmVudCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGV2ZW50ICE9IG51bGwgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBldmVudC5ub2RlICE9IG51bGwgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZS5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgZXZlbnQubm9kZS50aXRsZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIGV2ZW50Lm5vZGUudGl0bGUgIT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgICBsYWJlbDogZXZlbnQubm9kZS50aXRsZSxcclxuICAgICAgICAgICAgdmFsdWU6IGV2ZW50Lm5vZGUua2V5XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmVlQ2hhbmdlRXZlbnQuZW1pdCh7IGNoZWNrRGF0YTogdGhpcy5zZWxlY3REYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/ngrnlh7vlpI3pgInmoYbop6blj5FcclxuICBuekNoZWNrKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBldmVudCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgZXZlbnQgIT0gbnVsbCAmJlxyXG4gICAgICBldmVudC5rZXlzICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBldmVudC5rZXlzICE9IG51bGwgJiZcclxuICAgICAgZXZlbnQubm9kZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgZXZlbnQubm9kZSAhPSBudWxsICYmXHJcbiAgICAgIGV2ZW50Lm5vZGUua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICBldmVudC5ub2RlLmtleSAhPSBudWxsICYmXHJcbiAgICAgIGV2ZW50Lm5vZGUudGl0bGUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGV2ZW50Lm5vZGUudGl0bGUgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBpc0FkZDogYm9vbGVhbiA9IGV2ZW50LmtleXMuc29tZSgoa2V5OiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4ga2V5ID09PSBfLmdldChldmVudCwgXCJub2RlLmtleVwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChpc0FkZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IGV2ZW50Lm5vZGUudGl0bGUsXHJcbiAgICAgICAgICB2YWx1ZTogZXZlbnQubm9kZS5rZXlcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IF8uZ2V0KGV2ZW50LCBcIm5vZGUua2V5XCIpKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyZWVDaGVja2VkKHRoaXMuc2VsZWN0RGF0YSk7XHJcblxyXG4gICAgdGhpcy50cmVlQ2hhbmdlRXZlbnQuZW1pdCh7IGNoZWNrRGF0YTogdGhpcy5zZWxlY3REYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/ph43nva7pgInkuK3oioLngrlcclxuICB0cmVlQ2hlY2tlZChpdGVtczogYW55KSB7XHJcbiAgICBpZiAoaXRlbXMgIT0gbnVsbCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRLZXkgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRLZXkgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v5Yig6Zmk6YCJ5Lit6IqC54K5XHJcbiAgc2VsZWN0Q2xlYXJCeUlkKG5vZGU6IGFueSkge1xyXG4gICAgdGhpcy5zZWxlY3REYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4LCBvYmplY3QpID0+IHtcclxuICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG5vZGUpIHtcclxuICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRyZWVDaGVja2VkKHRoaXMuc2VsZWN0RGF0YSk7XHJcbiAgICB0aGlzLnRyZWVDaGFuZ2VFdmVudC5lbWl0KHsgY2hlY2tEYXRhOiB0aGlzLnNlbGVjdERhdGEsIGRlbGV0ZTogbm9kZSB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEFsbENsZWFyKCl7ICBcclxuICAgIC8vdGhpcy5zZWxlY3REYXRhID1bXTtcclxuICB9XHJcbn1cclxuIl19