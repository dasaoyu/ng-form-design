/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { clone } from "@vx-form/core";
import { DataService } from "../../service/data.service";
var VXFormDesignTable = /** @class */ (function () {
    function VXFormDesignTable() {
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
    VXFormDesignTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initTableData();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormDesignTable.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    VXFormDesignTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VXFormDesignTable.prototype.initTableData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tableData = [];
        this.mapOfCheckedId = {};
        /** @type {?} */
        var business = clone(this.businessTable);
        /** @type {?} */
        var tables = [];
        if (!business)
            return;
        if (this.tableType === "single") {
            if (business.primary && business.primary != null) {
                tables = tslib_1.__spread(tables, [business.primary]);
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
                function (table) {
                    if (table.tablecode === _this.fieldConfig.tablecode) {
                        tables = [table];
                    }
                }));
            }
        }
        this.tableData = tables;
    };
    VXFormDesignTable.decorators = [
        { type: Component, args: [{
                    selector: "vxform-design-table",
                    template: "<nz-tabset>\r\n    <ng-container *ngFor=\"let table of tableData;let index=index;\">\r\n        <nz-tab [nzTitle]=\"table.tablename\">\r\n\r\n            <nz-table>\r\n                <thead>\r\n                    <tr>\r\n                        <th></th>\r\n                        <th>\u5B57\u6BB5Code</th>\r\n                        <th>\u5B57\u6BB5\u540D\u79F0</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of table.tablefields\">\r\n                        <ng-container *ngIf=\"data?.isbutintin==true || data?.fieldquote==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [nzChecked]=\"true\"></td>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"data?.isbutintin!==true && data?.fieldquote!==true\">\r\n                            <td nzShowCheckbox [nzDisabled]=\"data?.isbutintin==true || data?.fieldquote==true\"\r\n                                [(nzChecked)]=\"mapOfCheckedId[data.fieldcode]\"></td>\r\n                        </ng-container>\r\n                        <td>{{ data.fieldcode }}</td>\r\n                        <td>{{ data.fieldname }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </nz-tab>\r\n    </ng-container>\r\n</nz-tabset>",
                    providers: [DataService],
                    styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}"]
                }] }
    ];
    /** @nocollapse */
    VXFormDesignTable.ctorParameters = function () { return []; };
    VXFormDesignTable.propDecorators = {
        tableType: [{ type: Input }],
        businessTable: [{ type: Input }],
        fieldConfig: [{ type: Input }]
    };
    return VXFormDesignTable;
}());
export { VXFormDesignTable };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHekQ7SUFvQkU7UUFiUyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQW1CO1lBQ3ZDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FDRixDQUFDO1FBQ08sZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRTdDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixtQkFBYyxHQUErQixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVoQixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0IsSUFBRyxDQUFDOzs7O0lBRXRDLHVDQUFXOzs7SUFBWCxjQUFlLENBQUM7Ozs7SUFFaEIseUNBQWE7OztJQUFiO1FBQUEsaUJBbUNDO1FBbENDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDOztZQUNyQixRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O1lBQ3BDLE1BQU0sR0FBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDaEQsTUFBTSxvQkFBTyxNQUFNLEdBQUUsUUFBUSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFDRSxRQUFRLENBQUMsS0FBSztnQkFDZCxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTTtnQkFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSTtnQkFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDaEM7Z0JBQ0EsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQztTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUN4QyxJQUNFLFFBQVEsQ0FBQyxLQUFLO2dCQUNkLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJO2dCQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNsQztnQkFDQSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsS0FBVTtvQkFDekMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO3dCQUNsRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwrN0NBQXFDO29CQUVyQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2lCQUN6Qjs7Ozs7NEJBRUUsS0FBSztnQ0FDTCxLQUFLOzhCQU9MLEtBQUs7O0lBbURSLHdCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E1RFksaUJBQWlCOzs7SUFDNUIsc0NBQWdDOztJQUNoQywwQ0FNRTs7SUFDRix3Q0FBNkM7O0lBRTdDLHNDQUFlOztJQUVmLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGNsb25lLCBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IElCdXNpbmVzc1RhYmxlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3V0aWxcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZGVzaWduLXRhYmxlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWJsZS5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybURlc2lnblRhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgdGFibGVUeXBlOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBJbnB1dCgpIGJ1c2luZXNzVGFibGU6IElCdXNpbmVzc1RhYmxlID0ge1xyXG4gICAgcHJpbWFyeToge30sXHJcbiAgICBjaGlsZDoge1xyXG4gICAgICBzaW5nbGU6IFtdLFxyXG4gICAgICBtdWx0aXBsZTogW11cclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG5cclxuICB0YWJsZURhdGEgPSBbXTtcclxuXHJcbiAgbWFwT2ZDaGVja2VkSWQ6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdFRhYmxlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG5cclxuICBpbml0VGFibGVEYXRhKCkge1xyXG4gICAgdGhpcy50YWJsZURhdGEgPSBbXTtcclxuICAgIHRoaXMubWFwT2ZDaGVja2VkSWQgPSB7fTtcclxuICAgIGxldCBidXNpbmVzcyA9IGNsb25lKHRoaXMuYnVzaW5lc3NUYWJsZSk7XHJcbiAgICBsZXQgdGFibGVzOiBhbnkgPSBbXTtcclxuICAgIGlmICghYnVzaW5lc3MpIHJldHVybjtcclxuICAgIGlmICh0aGlzLnRhYmxlVHlwZSA9PT0gXCJzaW5nbGVcIikge1xyXG4gICAgICBpZiAoYnVzaW5lc3MucHJpbWFyeSAmJiBidXNpbmVzcy5wcmltYXJ5ICE9IG51bGwpIHtcclxuICAgICAgICB0YWJsZXMgPSBbLi4udGFibGVzLCBidXNpbmVzcy5wcmltYXJ5XTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZCAhPSBudWxsICYmXHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQuc2luZ2xlICYmXHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQuc2luZ2xlICE9IG51bGwgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5zaW5nbGUubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0YWJsZXMgPSB0YWJsZXMuY29uY2F0KGJ1c2luZXNzLmNoaWxkLnNpbmdsZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZVR5cGUgPT09IFwibXVsdGlwbGVcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZCAhPSBudWxsICYmXHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUgJiZcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZSAhPSBudWxsICYmXHJcbiAgICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZS5mb3JFYWNoKCh0YWJsZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGFibGUudGFibGVjb2RlID09PSB0aGlzLmZpZWxkQ29uZmlnLnRhYmxlY29kZSkge1xyXG4gICAgICAgICAgICB0YWJsZXMgPSBbdGFibGVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYmxlRGF0YSA9IHRhYmxlcztcclxuICB9XHJcbn1cclxuIl19