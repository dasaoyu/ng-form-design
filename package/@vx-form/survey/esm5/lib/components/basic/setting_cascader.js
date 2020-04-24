/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingCascader = /** @class */ (function () {
    function VXSurveySettingCascader() {
        this.questionField = {
            key: "",
            type: "cascader",
            templateOptions: {
                label: "",
                required: false
            }
        };
        this.questionField = {
            key: "",
            type: "cascader",
            templateOptions: {
                label: "",
                required: false
            }
        };
    }
    Object.defineProperty(VXSurveySettingCascader.prototype, "field", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != null && value != undefined) {
                this.questionField = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXSurveySettingCascader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingCascader.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingCascader.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-cascader",
                    template: " \n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>    \n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingCascader.ctorParameters = function () { return []; };
    VXSurveySettingCascader.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingCascader;
}());
export { VXSurveySettingCascader };
if (false) {
    /** @type {?} */
    VXSurveySettingCascader.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19jYXNjYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfY2FzY2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBbUNFO1FBYkEsa0JBQWEsR0FBTztZQUNsQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxVQUFVO1lBQ2hCLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFPRCxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztJQUNILENBQUM7SUFkRixzQkFBYSwwQ0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBd0I7WUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFZRCwwQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7OztJQUVkLDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQixJQUFJLENBQUM7O2dCQWhEeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxzakJBZVQ7aUJBRUY7Ozs7O3dCQVdFLEtBQUs7O0lBbUJSLDhCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E3QlksdUJBQXVCOzs7SUFFbEMsZ0RBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLWNhc2NhZGVyXCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1sncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD57e2ZpZWxkfGpzb259fVxyXG4gICAgICA8L2Rpdj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nQ2FzY2FkZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55ID0geyBcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwiY2FzY2FkZXJcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB7IFxyXG4gICAgICBrZXk6IFwiXCIsXHJcbiAgICAgIHR5cGU6IFwiY2FzY2FkZXJcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XHJcbn1cclxuIl19