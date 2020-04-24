/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import * as _ from "lodash";
export class VXSurveyEditCascader {
    constructor() {
        this.cascaderData = [];
        this.row1 = {
            cascader: 1,
            current: "",
            showadd: true,
            data: []
        };
        this.row2 = {
            cascader: 2,
            current: "",
            showadd: false,
            data: []
        };
        this.row3 = {
            cascader: 3,
            current: "",
            showadd: false,
            data: []
        };
        this.row4 = {
            cascader: 4,
            current: "",
            showadd: false,
            data: []
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fieldConfig(value) {
        if (value != undefined && value != null && value.templateOptions != undefined && value.templateOptions != null && value.templateOptions.options != undefined && value.templateOptions.options != null) {
            if (Array.isArray(value.templateOptions.options)) {
                this.cascaderData = _.cloneDeep(value.templateOptions.options);
            }
            else {
                this.cascaderData = [];
            }
        }
        this.row1.data = this.cascaderData;
    }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
    }
    /**
     * @return {?}
     */
    get data() {
        return this.cascaderData;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} item
     * @param {?} type
     * @return {?}
     */
    cascaderItem(item, type) {
        /** @type {?} */
        let showadd = true;
        switch (type) {
            case 1:
                this.row1.current = item.value;
                this.row2.cascader = 2;
                this.row2.showadd = showadd;
                this.row2.data = item.children ? item.children : [];
                this.row3.current = "";
                this.row3.showadd = false;
                this.row3.data = [];
                this.row4.current = "";
                this.row4.showadd = false;
                this.row4.data = [];
                break;
            case 2:
                this.row2.current = item.value;
                this.row3.cascader = 3;
                this.row3.showadd = showadd;
                this.row3.data = item.children ? item.children : [];
                this.row4.current = "";
                this.row4.showadd = false;
                this.row4.data = [];
                break;
            case 3:
                this.row3.current = item.value;
                this.row4.cascader = 4;
                this.row4.showadd = showadd;
                this.row4.data = item.children ? item.children : [];
                break;
            case 4:
                this.row4.current = item.value;
                break;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    addOption(e) {
    }
    /**
     * @param {?} e
     * @param {?} type
     * @return {?}
     */
    delOption(e, type) {
        if (e) {
            switch (type) {
                case 1:
                    this.row1.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    this.row2 = [];
                    this.row3 = [];
                    this.row4 = [];
                    break;
                case 2:
                    this.row2.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    this.row3 = [];
                    this.row4 = [];
                    break;
                case 3:
                    this.row3.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    this.row4 = [];
                    break;
                case 4:
                    this.row4.data.forEach((/**
                     * @param {?} item
                     * @param {?} index
                     * @param {?} obj
                     * @return {?}
                     */
                    (item, index, obj) => {
                        if (e.value == item.value) {
                            obj.splice(index, 1);
                        }
                    }));
                    break;
            }
        }
    }
}
VXSurveyEditCascader.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-editcascader",
                template: "<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E00\u7EA7\u9009\u9879\" [(row)]=\"row1\" (itemEvent)=\"cascaderItem($event,1)\" (addOptionEvent)=\"addOption(1)\" (delOptionEvent)=\"delOption($event,1)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E8C\u7EA7\u9009\u9879\" [(row)]=\"row2\" (itemEvent)=\"cascaderItem($event,2)\" (addOptionEvent)=\"addOption(2)\" (delOptionEvent)=\"delOption($event,2)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u4E09\u7EA7\u9009\u9879\" [(row)]=\"row3\" (itemEvent)=\"cascaderItem($event,3)\" (addOptionEvent)=\"addOption(3)\" (delOptionEvent)=\"delOption($event,3)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>\r\n<div class=\"cascader_col\">\r\n    <vxsurvey-editcascader-item title=\"\u56DB\u7EA7\u9009\u9879\" [(row)]=\"row4\" (itemEvent)=\"cascaderItem($event,4)\" (addOptionEvent)=\"addOption(4)\" (delOptionEvent)=\"delOption($event,4)\">\r\n    </vxsurvey-editcascader-item>\r\n</div>",
                styles: [":host ::ng-deep{width:100%;height:100%;display:flex;background-color:#fff;padding:20px 0 0 10px}:host ::ng-deep .cascader_col{flex:1;padding:0 0 0 20px;border-right:1px solid #dde5ed}:host ::ng-deep .cascader_col:nth-last-child(1){flex:1;border-right:0}:host ::ng-deep vxsurvey-editcascader-item .wrap_active{border-color:#2672ff;background:#e7efff;box-shadow:0 2px 4px 0 rgba(38,114,255,.2)}:host ::ng-deep vxsurvey-editcascader-item .wrap_active .cascader_col_wrap_delete{display:block}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_title{padding:0 0 12px;font-size:14px;line-height:1;color:#707070;text-align:left}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_item{padding:0 20px 0 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap{display:flex;border:1px solid #dde5ed;position:relative;margin:0 0 10px;cursor:pointer;padding:0 0 0 10px}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_order{float:left;height:34px;line-height:34px;font-size:12px;color:#aaa;text-align:center}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_input{flex:1;float:left;padding:5px;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_input input{border:0;height:24px;line-height:24px;width:100%;font-size:12px;color:#aaa;outline:0;border:none;background:0 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_limit{float:left;top:0;right:0;height:34px;padding:0 6px 0 0;line-height:34px;font-size:12px;color:#2672ff;text-align:left}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete{position:absolute;right:-5px;top:-10px;display:none}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete span{background:red;border-radius:50%;display:inline-block;height:14px;width:14px;cursor:pointer}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_wrap_delete span i{color:#fff;font-size:2px;height:2px;width:6px;position:absolute;margin:3px 2px 0}:host ::ng-deep vxsurvey-editcascader-item .cascader_col_add{font-size:12px;cursor:pointer}:host ::ng-deep .vxsurvey-scrollbar{scrollbar-color:transparent;overflow-y:overlay}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar{width:6px;height:6px}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar-track{box-shadow:inset 0 0 6px transparent}:host ::ng-deep .vxsurvey-scrollbar::-webkit-scrollbar-thumb{background-color:#999;outline:#333 solid 1px;border-radius:6px}"]
            }] }
];
/** @nocollapse */
VXSurveyEditCascader.ctorParameters = () => [];
VXSurveyEditCascader.propDecorators = {
    fieldConfig: [{ type: Input }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveyEditCascader.prototype.cascaderData;
    /** @type {?} */
    VXSurveyEditCascader.prototype.row1;
    /** @type {?} */
    VXSurveyEditCascader.prototype.row2;
    /** @type {?} */
    VXSurveyEditCascader.prototype.row3;
    /** @type {?} */
    VXSurveyEditCascader.prototype.row4;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZWRpdC1jYXNjYWRlci9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBTzVCLE1BQU0sT0FBTyxvQkFBb0I7SUFrRC9CO1FBaERBLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBcUJ6QixTQUFJLEdBQVE7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUE7UUFDRCxTQUFJLEdBQVE7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUE7UUFDRCxTQUFJLEdBQVE7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUE7UUFDRCxTQUFJLEdBQVE7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEtBQUs7WUFDZCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUE7SUFNRCxDQUFDOzs7OztJQWhERCxJQUFhLFdBQVcsQ0FBQyxLQUF1QjtRQUM5QyxJQUFHLEtBQUssSUFBRSxTQUFTLElBQUksS0FBSyxJQUFFLElBQUksSUFBSSxLQUFLLENBQUMsZUFBZSxJQUFHLFNBQVMsSUFBSSxLQUFLLENBQUMsZUFBZSxJQUFFLElBQUksSUFBSSxLQUFLLENBQUMsZUFBZSxD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QUM7b0JBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ2YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7Ozs7O29CQUFDLENBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxHQUFRLEVBQUUsRUFBRTt3QkFDNUQsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7NEJBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUN0QjtvQkFDSCxDQUFDLEVBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDZixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7Ozs7b0JBQUMsQ0FBQyxJQUFTLEVBQUUsS0FBYSxFQUFFLEdBQVEsRUFBRSxFQUFFO3dCQUM1RCxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ3RCO29CQUNILENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU07YUFDVDtTQUVGO0lBQ0gsQ0FBQzs7O1lBcEpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw0bUNBQXFDOzthQUV0Qzs7Ozs7MEJBS0UsS0FBSzttQkFXTCxLQUFLOzs7O0lBYk4sNENBQXlCOztJQXFCekIsb0NBS0M7O0lBQ0Qsb0NBS0M7O0lBQ0Qsb0NBS0M7O0lBQ0Qsb0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1lZGl0Y2FzY2FkZXJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2luZGV4LmNvbXBvbmVudC5sZXNzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleUVkaXRDYXNjYWRlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBjYXNjYWRlckRhdGE6IGFueVtdID0gW107XHJcblxyXG4gIEBJbnB1dCgpIHNldCBmaWVsZENvbmZpZyh2YWx1ZTpWWEZvcm1GaWVsZENvbmZpZyl7XHJcbiAgICBpZih2YWx1ZSE9dW5kZWZpbmVkICYmIHZhbHVlIT1udWxsICYmIHZhbHVlLnRlbXBsYXRlT3B0aW9ucyAhPXVuZGVmaW5lZCAmJiB2YWx1ZS50ZW1wbGF0ZU9wdGlvbnMhPW51bGwgJiYgdmFsdWUudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMhPXVuZGVmaW5lZCAmJiB2YWx1ZS50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyE9bnVsbCl7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMpKXtcclxuICAgICAgICB0aGlzLmNhc2NhZGVyRGF0YSA9IF8uY2xvbmVEZWVwKHZhbHVlLnRlbXBsYXRlT3B0aW9ucy5vcHRpb25zKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5jYXNjYWRlckRhdGEgPSBbXTsgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucm93MS5kYXRhID0gdGhpcy5jYXNjYWRlckRhdGE7XHJcbiAgfTtcclxuXHJcbiAgQElucHV0KCkgc2V0IGRhdGEodmFsdWU6IGFueVtdKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldCBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FzY2FkZXJEYXRhO1xyXG4gIH1cclxuXHJcbiAgcm93MTogYW55ID0ge1xyXG4gICAgY2FzY2FkZXI6IDEsXHJcbiAgICBjdXJyZW50OiBcIlwiLFxyXG4gICAgc2hvd2FkZDogdHJ1ZSxcclxuICAgIGRhdGE6IFtdXHJcbiAgfVxyXG4gIHJvdzI6IGFueSA9IHtcclxuICAgIGNhc2NhZGVyOiAyLFxyXG4gICAgY3VycmVudDogXCJcIixcclxuICAgIHNob3dhZGQ6IGZhbHNlLFxyXG4gICAgZGF0YTogW11cclxuICB9XHJcbiAgcm93MzogYW55ID0ge1xyXG4gICAgY2FzY2FkZXI6IDMsXHJcbiAgICBjdXJyZW50OiBcIlwiLFxyXG4gICAgc2hvd2FkZDogZmFsc2UsXHJcbiAgICBkYXRhOiBbXVxyXG4gIH1cclxuICByb3c0OiBhbnkgPSB7XHJcbiAgICBjYXNjYWRlcjogNCxcclxuICAgIGN1cnJlbnQ6IFwiXCIsXHJcbiAgICBzaG93YWRkOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gIH0gXHJcblxyXG4gIGNhc2NhZGVySXRlbShpdGVtOiBhbnksIHR5cGU6IG51bWJlcikge1xyXG4gICAgbGV0IHNob3dhZGQgPSB0cnVlOyBcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5yb3cxLmN1cnJlbnQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucm93Mi5jYXNjYWRlciA9IDI7XHJcbiAgICAgICAgdGhpcy5yb3cyLnNob3dhZGQgPSBzaG93YWRkO1xyXG4gICAgICAgIHRoaXMucm93Mi5kYXRhID0gaXRlbS5jaGlsZHJlbiA/IGl0ZW0uY2hpbGRyZW4gOiBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3czLmN1cnJlbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucm93My5zaG93YWRkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3czLmRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3c0LmN1cnJlbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucm93NC5zaG93YWRkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3c0LmRhdGEgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMucm93Mi5jdXJyZW50ID0gaXRlbS52YWx1ZTtcclxuICAgICAgICB0aGlzLnJvdzMuY2FzY2FkZXIgPSAzO1xyXG4gICAgICAgIHRoaXMucm93My5zaG93YWRkID0gc2hvd2FkZDtcclxuICAgICAgICB0aGlzLnJvdzMuZGF0YSA9IGl0ZW0uY2hpbGRyZW4gPyBpdGVtLmNoaWxkcmVuIDogW107XHJcblxyXG4gICAgICAgIHRoaXMucm93NC5jdXJyZW50ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJvdzQuc2hvd2FkZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm93NC5kYXRhID0gW107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICB0aGlzLnJvdzMuY3VycmVudCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5yb3c0LmNhc2NhZGVyID0gNDtcclxuICAgICAgICB0aGlzLnJvdzQuc2hvd2FkZCA9IHNob3dhZGQ7XHJcbiAgICAgICAgdGhpcy5yb3c0LmRhdGEgPSBpdGVtLmNoaWxkcmVuID8gaXRlbS5jaGlsZHJlbiA6IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgdGhpcy5yb3c0LmN1cnJlbnQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkT3B0aW9uKGU6IG51bWJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGRlbE9wdGlvbihlOiBhbnksIHR5cGU6IG51bWJlcikge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5yb3cxLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS52YWx1ZSA9PSBpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgb2JqLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5yb3cyID0gW107XHJcbiAgICAgICAgICB0aGlzLnJvdzMgPSBbXTtcclxuICAgICAgICAgIHRoaXMucm93NCA9IFtdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5yb3cyLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS52YWx1ZSA9PSBpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgb2JqLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5yb3czID0gW107XHJcbiAgICAgICAgICB0aGlzLnJvdzQgPSBbXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMucm93My5kYXRhLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgb2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudmFsdWUgPT0gaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgIG9iai5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucm93NCA9IFtdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgdGhpcy5yb3c0LmRhdGEuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS52YWx1ZSA9PSBpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgb2JqLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59Il19