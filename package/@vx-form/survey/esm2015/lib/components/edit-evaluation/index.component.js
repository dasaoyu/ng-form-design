/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import * as _ from "lodash";
export class VXSurveyEditEvaluation {
    constructor() {
        this.start = 1;
        this.optionSelectedIndex = 0;
        this.currentSelected = {};
        this.editevaluationData = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fieldConfig(value) {
        console.log(JSON.stringify(value));
        if (value != undefined && value != null && value.templateOptions != undefined && value.templateOptions != null && value.templateOptions.options != undefined && value.templateOptions.options != null) {
            if (Array.isArray(value.templateOptions.options)) {
                this.editevaluationData = _.cloneDeep(value.templateOptions.options);
                this.currentSelected = this.editevaluationData[0];
            }
            else {
                this.editevaluationData = [];
            }
        }
        else {
            this.editevaluationData = [];
        }
    }
    ;
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
     * @param {?} event
     * @return {?}
     */
    optionClick(event) {
        this.start = event + 1;
        this.currentSelected = this.editevaluationData[event];
    }
    /**
     * @return {?}
     */
    getOptionTag() {
        return this.currentSelected.tag.split(/[\s\n]/);
    }
}
VXSurveyEditEvaluation.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-editevaluation",
                template: "<div class=\"edit_evaluation\">\r\n    <nz-rate [(ngModel)]=\"start\" [nzCount]=\"5\"></nz-rate>\r\n    <div class=\"label\">\"{{currentSelected.label}}\"</div>\r\n    <div class=\"tag\">\r\n        <ng-container *ngFor=\"let item of getOptionTag()\">\r\n            <span *ngIf=\"item!=''\">{{item}}</span>\r\n        </ng-container>\r\n    </div>\r\n    <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"optionSelectedIndex\" (nzSelectedIndexChange)=\"optionClick($event)\">\r\n\r\n        <ng-container *ngFor=\"let option of editevaluationData;let index=index;\">\r\n            <nz-tab [nzTitle]=\"titleTemplate\">\r\n                <ng-template #titleTemplate>\r\n                    <div>\r\n                        {{ option.value }}\u5206\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template nz-tab>\r\n                    <div class=\"option-label\">\r\n                        \u5206\u503C\u8BF4\u660E\uFF08\u6700\u591A\u53EF\u8F93\u516510\u4E2A\u5B57\uFF09\r\n                    </div>\r\n                    <div>\r\n                        <input nz-input [(ngModel)]=\"option.label\" />\r\n                    </div>\r\n                    <div class=\"option-tag\">\r\n                        \u6807\u7B7E\u8BBE\u7F6E\uFF08\u6BCF\u884C\u5BF9\u5E941\u4E2A\u6807\u7B7E\uFF0C\u6700\u591A10\u4E2A\u6807\u7B7E\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u6700\u591A10\u4E2A\u5B57\uFF0C\u53EF\u590D\u5236\u5176\u4ED6\u9009\u9879\u6807\u7B7E\uFF09\r\n                    </div>\r\n                    <div>\r\n                        <textarea rows=\"8\" nz-input [(ngModel)]=\"option.tag\"></textarea>\r\n                    </div>\r\n                </ng-template>\r\n            </nz-tab>\r\n        </ng-container>\r\n    </nz-tabset>\r\n\r\n</div>",
                styles: [":host ::ng-deep{width:100%;height:100%;display:flex;background-color:#fff;padding:20px 0 0 10px}:host ::ng-deep .edit_evaluation{text-align:center;padding:0 20px;width:100%}:host ::ng-deep .edit_evaluation .ant-rate-star{font-size:30px}:host ::ng-deep .edit_evaluation .label{margin:20px 0 0;text-align:center;color:#fadb14;font-size:12px}:host ::ng-deep .edit_evaluation .tag{margin:20px 0;text-align:center}:host ::ng-deep .edit_evaluation .tag span{display:inline-block;font-size:12px;color:#aaa;padding:3px 10px;background:#fff;border:1px solid #eaeaea;border-radius:2px;margin-right:5px}:host ::ng-deep .edit_evaluation nz-tabset{text-align:left}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-bar{margin:0}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-top-content{border-left:1px solid #eee;border-right:1px solid #eee;border-bottom:1px solid #eee;padding:20px;font-size:12px}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-nav-container{height:30px!important}:host ::ng-deep .edit_evaluation nz-tabset .ant-tabs-tab{height:30px!important;line-height:30px!important;padding:0 20px!important;font-size:13px}:host ::ng-deep .edit_evaluation nz-tabset .ant-input{font-size:12px}:host ::ng-deep .edit_evaluation nz-tabset .option-label{margin:0 0 5px}:host ::ng-deep .edit_evaluation nz-tabset .option-tag{margin:15px 0 5px}"]
            }] }
];
/** @nocollapse */
VXSurveyEditEvaluation.ctorParameters = () => [];
VXSurveyEditEvaluation.propDecorators = {
    fieldConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveyEditEvaluation.prototype.start;
    /** @type {?} */
    VXSurveyEditEvaluation.prototype.optionSelectedIndex;
    /** @type {?} */
    VXSurveyEditEvaluation.prototype.currentSelected;
    /** @type {?} */
    VXSurveyEditEvaluation.prototype.editevaluationData;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZWRpdC1ldmFsdWF0aW9uL2luZGV4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFPNUIsTUFBTSxPQUFPLHNCQUFzQjtJQXVCakM7UUFyQkEsVUFBSyxHQUFDLENBQUMsQ0FBQztRQUNSLHdCQUFtQixHQUFDLENBQUMsQ0FBQztRQUN0QixvQkFBZSxHQUFLLEVBQUUsQ0FBQztRQUV2Qix1QkFBa0IsR0FBVSxFQUFFLENBQUM7SUFtQi9CLENBQUM7Ozs7O0lBakJELElBQWEsV0FBVyxDQUFDLEtBQXVCO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLElBQUcsS0FBSyxJQUFFLFNBQVMsSUFBSSxLQUFLLElBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxlQUFlLElBQUcsU0FBUyxJQUFJLEtBQUssQ0FBQyxlQUFlLElBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFFLFNBQVMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRSxJQUFJLEVBQUM7WUFDeEwsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUM7Z0JBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2xEO2lCQUFJO2dCQUNILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7YUFDOUI7U0FDRjthQUFJO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFFLEVBQUUsQ0FBQztTQUM3QjtJQUVILENBQUM7SUFBQSxDQUFDOzs7O0lBTUYsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQVM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyw2d0RBQXFDOzthQUV0Qzs7Ozs7MEJBU0UsS0FBSzs7OztJQU5OLHVDQUFROztJQUNSLHFEQUFzQjs7SUFDdEIsaURBQXVCOztJQUV2QixvREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1lZGl0ZXZhbHVhdGlvblwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5RWRpdEV2YWx1YXRpb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgXHJcbiAgc3RhcnQ9MTtcclxuICBvcHRpb25TZWxlY3RlZEluZGV4PTA7XHJcbiAgY3VycmVudFNlbGVjdGVkOmFueT17fTtcclxuIFxyXG4gIGVkaXRldmFsdWF0aW9uRGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgQElucHV0KCkgc2V0IGZpZWxkQ29uZmlnKHZhbHVlOlZYRm9ybUZpZWxkQ29uZmlnKXtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcclxuICAgIGlmKHZhbHVlIT11bmRlZmluZWQgJiYgdmFsdWUhPW51bGwgJiYgdmFsdWUudGVtcGxhdGVPcHRpb25zICE9dW5kZWZpbmVkICYmIHZhbHVlLnRlbXBsYXRlT3B0aW9ucyE9bnVsbCAmJiB2YWx1ZS50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyE9dW5kZWZpbmVkICYmIHZhbHVlLnRlbXBsYXRlT3B0aW9ucy5vcHRpb25zIT1udWxsKXtcclxuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZS50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucykpe1xyXG4gICAgICAgIHRoaXMuZWRpdGV2YWx1YXRpb25EYXRhID0gXy5jbG9uZURlZXAodmFsdWUudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkID0gdGhpcy5lZGl0ZXZhbHVhdGlvbkRhdGFbMF1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5lZGl0ZXZhbHVhdGlvbkRhdGEgPSBbXTsgXHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmVkaXRldmFsdWF0aW9uRGF0YSA9W107XHJcbiAgICB9XHJcblxyXG4gIH07IFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICB9IFxyXG5cclxuICBvcHRpb25DbGljayhldmVudDphbnkpe1xyXG4gICAgdGhpcy5zdGFydCA9IGV2ZW50KzE7XHJcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZCA9IHRoaXMuZWRpdGV2YWx1YXRpb25EYXRhW2V2ZW50XVxyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uVGFnKCl7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0ZWQudGFnLnNwbGl0KC9bXFxzXFxuXS8pO1xyXG4gIH1cclxufSJdfQ==