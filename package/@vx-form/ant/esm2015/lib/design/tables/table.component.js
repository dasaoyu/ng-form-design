/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { clone } from "@vx-form/core";
import { DataService } from "../../service/data.service";
export class VXFormDesignTables {
    constructor() {
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
        /** @type {?} */
        let business = clone(this.businessTable);
        /** @type {?} */
        let tables = [];
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
    }
    /**
     * @param {?} table
     * @return {?}
     */
    selectOK(table) { }
}
VXFormDesignTables.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-tables",
                template: "<nz-radio-group [(ngModel)]=\"radioValue\" nzName=\"radiogroup\">\r\n    <nz-table>\r\n        <thead>\r\n            <tr>\r\n                <th></th>\r\n                <th>\u8868Code</th>\r\n                <th>\u8868\u540D\u79F0</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableData\">\r\n                <td> <label nz-radio [nzValue]=\"data.tablecode\" [nzDisabled]=\"data.tablequote\"></label>\r\n                </td>\r\n                <td>{{ data.tablecode }}</td>\r\n                <td>{{ data.tablename }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n</nz-radio-group>",
                providers: [DataService],
                styles: [":host ::ng-deep{height:480px;display:inline-block;width:100%;overflow-y:auto}:host ::ng-deep .ant-table-placeholder{display:none}:host ::ng-deep .ant-radio-group{display:block}"]
            }] }
];
/** @nocollapse */
VXFormDesignTables.ctorParameters = () => [];
VXFormDesignTables.propDecorators = {
    businessTable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXFormDesignTables.prototype.businessTable;
    /** @type {?} */
    VXFormDesignTables.prototype.radioValue;
    /** @type {?} */
    VXFormDesignTables.prototype.tableData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi90YWJsZXMvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTekQsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QjtRQVRTLGtCQUFhLEdBQW1CO1lBQ3ZDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFO2dCQUNMLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FDRixDQUFDO1FBQ0YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ0EsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCLElBQUcsQ0FBQzs7OztJQUV0QyxXQUFXLEtBQUksQ0FBQzs7OztJQUVoQixhQUFhO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O1lBQ2hCLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7WUFDcEMsTUFBTSxHQUFRLEVBQUU7UUFDcEIsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3RCLElBQ0UsUUFBUSxDQUFDLEtBQUs7WUFDZCxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEM7WUFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVSxJQUFHLENBQUM7OztZQTNDeEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHFxQkFBcUM7Z0JBRXJDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7YUFDekI7Ozs7OzRCQUVFLEtBQUs7Ozs7SUFBTiwyQ0FNRTs7SUFDRix3Q0FBZ0I7O0lBQ2hCLHVDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY2xvbmUsIFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgSUJ1c2luZXNzVGFibGUgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1kZXNpZ24tdGFibGVzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWJsZS5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybURlc2lnblRhYmxlcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGJ1c2luZXNzVGFibGU6IElCdXNpbmVzc1RhYmxlID0ge1xyXG4gICAgcHJpbWFyeToge30sXHJcbiAgICBjaGlsZDoge1xyXG4gICAgICBzaW5nbGU6IFtdLFxyXG4gICAgICBtdWx0aXBsZTogW11cclxuICAgIH1cclxuICB9O1xyXG4gIHJhZGlvVmFsdWUgPSBcIlwiO1xyXG4gIHRhYmxlRGF0YSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRUYWJsZURhdGEoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgaW5pdFRhYmxlRGF0YSgpIHtcclxuICAgIHRoaXMudGFibGVEYXRhID0gW107XHJcbiAgICBsZXQgYnVzaW5lc3MgPSBjbG9uZSh0aGlzLmJ1c2luZXNzVGFibGUpO1xyXG4gICAgbGV0IHRhYmxlczogYW55ID0gW107XHJcbiAgICBpZiAoIWJ1c2luZXNzKSByZXR1cm47XHJcbiAgICBpZiAoXHJcbiAgICAgIGJ1c2luZXNzLmNoaWxkICYmXHJcbiAgICAgIGJ1c2luZXNzLmNoaWxkICE9IG51bGwgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUgJiZcclxuICAgICAgYnVzaW5lc3MuY2hpbGQubXVsdGlwbGUgIT0gbnVsbCAmJlxyXG4gICAgICBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZS5sZW5ndGggPiAwXHJcbiAgICApIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSBidXNpbmVzcy5jaGlsZC5tdWx0aXBsZTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMudGFibGVEYXRhKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE9LKHRhYmxlOiBhbnkpIHt9XHJcbn1cclxuIl19