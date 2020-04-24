/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { clone } from "@vx-form/core";
import { DataService } from "../../service/data.service";
export class VXFormDesignTable {
    constructor() {
        this.tableType = "";
        this.businessTable = {
            primary: {},
            child: {
                single: [],
                multiple: []
            }
        };
        this.fieldConfig = {};
        this.tableData = [];
        this.mapOfCheckedId = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTableData();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    initTableData() {
        this.tableData = [];
        this.mapOfCheckedId = {};
        /** @type {?} */
        let business = clone(this.businessTable);
        /** @type {?} */
        let tables = [];
        if (!business)
            return;
        if (this.tableType === "single") {
            if (business.primary && business.primary != null) {
                tables = [...tables, business.primary];
            }
            if (business.child &&
                business.child != null &&
                business.child.single &&
                business.child.single != null &&
                business.child.single.length > 0) {
                tables = tables.concat(business.child.single);
            }
        }
        else if (this.tableType === "multiple") {
            if (business.child &&
                business.child != null &&
                business.child.multiple &&
                business.child.multiple != null &&
                business.child.multiple.length > 0) {
                business.child.multiple.forEach((/**
                 * @param {?} table
                 * @return {?}
                 */
                (table) => {
                    if (table.tablecode === this.fieldConfig.tablecode) {
                        tables = [table];
                    }
                }));
            }
        }
        this.tableData = tables;
    }
}
VXFormDesignTable.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-table",
                template: "<nz-tabset>\r\n    <ng-container *ngFor=\"let table of tableData;let index=index;\">\r\n        <nz-tab [nzTitle]=\"table.tablename\">\r\n\r\n            <nz-table>\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>\u5B57\u6BB5Code</th>\r\n                        <th>\u5B57\u6BB5\u540D\u79F0</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of table.tablefields\">\r\n                        <ng-container *ngIf=\"data?.isbutintin==true || data?.fieldquote==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [nzChecked]=\"true\"></td>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"data?.isbutintin!==true && data?.fieldquote!==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [(nzChecked)]=\"mapOfCheckedId[data.fieldcode]\"></td>\r\n                        </ng-container>\r\n                        <td>{{ data.fieldcode }}</td>\r\n                        <td>{{ data.fieldname }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-tab>\r\n    </ng-container>\r\n</nz-tabset>",
                providers: [DataService],
                styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}"]
            }] }
];
/** @nocollapse */
VXFormDesignTable.ctorParameters = () => [];
VXFormDesignTable.propDecorators = {
    tableType: [{ type: Input }],
    businessTable: [{ type: Input }],
    fieldConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXFormDesignTable.prototype.tableType;
    /** @type {?} */
    VXFormDesignTable.prototype.businessTable;
    /** @type {?} */
    VXFormDesignTable.prototype.fieldConfig;
    /** @type {?} */
    VXFormDesignTable.prototype.tableData;
    /** @type {?} */
    VXFormDesignTable.prototype.mapOfCheckedId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVN6RCxNQUFNLE9BQU8saUJBQWlCO0lBYzVCO1FBYlMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFtQjtZQUN2QyxPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsRUFBRTtnQkFDVixRQUFRLEVBQUUsRUFBRTthQUNiO1NBQ0YsQ0FBQztRQUNPLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUU3QyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsbUJBQWMsR0FBK0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQixJQUFHLENBQUM7Ozs7SUFFdEMsV0FBVyxLQUFJLENBQUM7Ozs7SUFFaEIsYUFBYTtRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDOztZQUNyQixRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O1lBQ3BDLE1BQU0sR0FBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDaEQsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFDRSxRQUFRLENBQUMsS0FBSztnQkFDZCxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTTtnQkFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSTtnQkFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDaEM7Z0JBQ0EsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQztTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUN4QyxJQUNFLFFBQVEsQ0FBQyxLQUFLO2dCQUNkLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJO2dCQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNsQztnQkFDQSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQzdDLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTt3QkFDbEQsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2xCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsKzdDQUFxQztnQkFFckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOzthQUN6Qjs7Ozs7d0JBRUUsS0FBSzs0QkFDTCxLQUFLOzBCQU9MLEtBQUs7Ozs7SUFSTixzQ0FBZ0M7O0lBQ2hDLDBDQU1FOztJQUNGLHdDQUE2Qzs7SUFFN0Msc0NBQWU7O0lBRWYsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY2xvbmUsIFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgSUJ1c2luZXNzVGFibGUgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1kZXNpZ24tdGFibGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYmxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RhYmxlLmNvbXBvbmVudC5sZXNzXCJdLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRGVzaWduVGFibGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSB0YWJsZVR5cGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgQElucHV0KCkgYnVzaW5lc3NUYWJsZTogSUJ1c2luZXNzVGFibGUgPSB7XHJcbiAgICBwcmltYXJ5OiB7fSxcclxuICAgIGNoaWxkOiB7XHJcbiAgICAgIHNpbmdsZTogW10sXHJcbiAgICAgIG11bHRpcGxlOiBbXVxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgZmllbGRDb25maWc6IFZYRm9ybUZpZWxkQ29uZmlnID0ge307XHJcblxyXG4gIHRhYmxlRGF0YSA9IFtdO1xyXG5cclxuICBtYXBPZkNoZWNrZWRJZDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0VGFibGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIGluaXRUYWJsZURhdGEoKSB7XHJcbiAgICB0aGlzLnRhYmxlRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5tYXBPZkNoZWNrZWRJZCA9IHt9O1xyXG4gICAgbGV0IGJ1c2luZXNzID0gY2xvbmUodGhpcy5idXNpbmVzc1RhYmxlKTtcclxuICAgIGxldCB0YWJsZXM6IGFueSA9IFtdO1xyXG4gICAgaWYgKCFidXNpbmVzcykgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMudGFibGVUeXBlID09PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgIGlmIChidXNpbmVzcy5wcmltYXJ5ICYmIGJ1c2luZXNzLnByaW1hcnkgIT0gbnVsbCkge1xyXG4gICAgICAgIHRhYmxlcyA9IFsuLi50YWJsZXMsIGJ1c2luZXNzLnByaW1hcnldO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBidXNpbmVzcy5jaGlsZCAmJlxyXG4gICAgICAgIGJ1c2luZXNzLmNoaWxkICE9IG51bGwgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5zaW5nbGUgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5zaW5nbGUgIT0gbnVsbCAmJlxyXG4gICAgICAgIGJ1c2luZXNzLmNoaWxkLnNpbmdsZS5sZW5ndGggPiAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhYmxlcyA9IHRhYmxlcy5jb25jYXQoYnVzaW5lc3MuY2hpbGQuc2luZ2xlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlVHlwZSA9PT0gXCJtdWx0aXBsZVwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBidXNpbmVzcy5jaGlsZCAmJlxyXG4gICAgICAgIGJ1c2luZXNzLmNoaWxkICE9IG51bGwgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZSAmJlxyXG4gICAgICAgIGJ1c2luZXNzLmNoaWxkLm11bHRpcGxlICE9IG51bGwgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZS5sZW5ndGggPiAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGJ1c2luZXNzLmNoaWxkLm11bHRpcGxlLmZvckVhY2goKHRhYmxlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICh0YWJsZS50YWJsZWNvZGUgPT09IHRoaXMuZmllbGRDb25maWcudGFibGVjb2RlKSB7XHJcbiAgICAgICAgICAgIHRhYmxlcyA9IFt0YWJsZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudGFibGVEYXRhID0gdGFibGVzO1xyXG4gIH1cclxufVxyXG4iXX0=