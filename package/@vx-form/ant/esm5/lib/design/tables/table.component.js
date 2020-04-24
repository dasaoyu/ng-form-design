/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { clone } from "@vx-form/core";
import { DataService } from "../../service/data.service";
var VXFormDesignTables = /** @class */ (function () {
    function VXFormDesignTables() {
        this.businessTable = {
            primary: {},
            child: {
                single: [],
                multiple: []
            }
        };
        this.radioValue = "";
        this.tableData = [];
    }
    /**
     * @return {?}
     */
    VXFormDesignTables.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initTableData();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXFormDesignTables.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    VXFormDesignTables.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VXFormDesignTables.prototype.initTableData = /**
     * @return {?}
     */
    function () {
        this.tableData = [];
        /** @type {?} */
        var business = clone(this.businessTable);
        /** @type {?} */
        var tables = [];
        if (!business)
            return;
        if (business.child &&
            business.child != null &&
            business.child.multiple &&
            business.child.multiple != null &&
            business.child.multiple.length > 0) {
            this.tableData = business.child.multiple;
        }
        console.log(this.tableData);
    };
    /**
     * @param {?} table
     * @return {?}
     */
    VXFormDesignTables.prototype.selectOK = /**
     * @param {?} table
     * @return {?}
     */
    function (table) { };
    VXFormDesignTables.decorators = [
        { type: Component, args: [{
                    selector: "vxform-design-tables",
                    template: "<nz-radio-group [(ngModel)]=\"radioValue\" nzName=\"radiogroup\">\r\n    <nz-table>\r\n        <thead>\r\n            <tr>\r\n                <th></th>\r\n                <th>\u8868Code</th>\r\n                <th>\u8868\u540D\u79F0</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableData\">\r\n                <td> <label nz-radio [nzValue]=\"data.tablecode\" [nzDisabled]=\"data.tablequote\"></label>\r\n                </td>\r\n                <td>{{ data.tablecode }}</td>\r\n                <td>{{ data.tablename }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-radio-group>",
                    providers: [DataService],
                    styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}:host ::ng-deep .ant-radio-group{display:block}"]
                }] }
    ];
    /** @nocollapse */
    VXFormDesignTables.ctorParameters = function () { return []; };
    VXFormDesignTables.propDecorators = {
        businessTable: [{ type: Input }]
    };
    return VXFormDesignTables;
}());
export { VXFormDesignTables };
if (false) {
    /** @type {?} */
    VXFormDesignTables.prototype.businessTable;
    /** @type {?} */
    VXFormDesignTables.prototype.radioValue;
    /** @type {?} */
    VXFormDesignTables.prototype.tableData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi90YWJsZXMvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHekQ7SUFnQkU7UUFUUyxrQkFBYSxHQUFtQjtZQUN2QyxPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsRUFBRTtnQkFDVixRQUFRLEVBQUUsRUFBRTthQUNiO1NBQ0YsQ0FBQztRQUNGLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNBLENBQUM7Ozs7SUFFaEIscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLElBQUcsQ0FBQzs7OztJQUV0Qyx3Q0FBVzs7O0lBQVgsY0FBZSxDQUFDOzs7O0lBRWhCLDBDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztZQUNoQixRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O1lBQ3BDLE1BQU0sR0FBUSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN0QixJQUNFLFFBQVEsQ0FBQyxLQUFLO1lBQ2QsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xDO1lBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUMxQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLEtBQVUsSUFBRyxDQUFDOztnQkEzQ3hCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxxcUJBQXFDO29CQUVyQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2lCQUN6Qjs7Ozs7Z0NBRUUsS0FBSzs7SUFxQ1IseUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXRDWSxrQkFBa0I7OztJQUM3QiwyQ0FNRTs7SUFDRix3Q0FBZ0I7O0lBQ2hCLHVDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY2xvbmUsIFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgSUJ1c2luZXNzVGFibGUgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1kZXNpZ24tdGFibGVzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWJsZS5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybURlc2lnblRhYmxlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGJ1c2luZXNzVGFibGU6IElCdXNpbmVzc1RhYmxlID0ge1xyXG4gICAgcHJpbWFyeToge30sXHJcbiAgICBjaGlsZDoge1xyXG4gICAgICBzaW5nbGU6IFtdLFxyXG4gICAgICBtdWx0aXBsZTogW11cclxuICAgIH1cclxuICB9O1xyXG4gIHJhZGlvVmFsdWUgPSBcIlwiO1xyXG4gIHRhYmxlRGF0YSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRUYWJsZURhdGEoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgaW5pdFRhYmxlRGF0YSgpIHtcclxuICAgIHRoaXMudGFibGVEYXRhID0gW107XHJcbiAgICBsZXQgYnVzaW5lc3MgPSBjbG9uZSh0aGlzLmJ1c2luZXNzVGFibGUpO1xyXG4gICAgbGV0IHRhYmxlczogYW55ID0gW107XHJcbiAgICBpZiAoIWJ1c2luZXNzKSByZXR1cm47XHJcbiAgICBpZiAoXHJcbiAgICAgIGJ1c2luZXNzLmNoaWxkICYmXHJcbiAgICAgIGJ1c2luZXNzLmNoaWxkICE9IG51bGwgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUgIT0gbnVsbCAmJlxyXG4gICAgICBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZS5sZW5ndGggPiAwXHJcbiAgICApIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMudGFibGVEYXRhKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE9LKHRhYmxlOiBhbnkpIHt9XHJcbn1cclxuIl19