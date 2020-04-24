/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingDropdown = /** @class */ (function () {
    function VXSurveySettingDropdown() {
        this.questionField = {
            key: "",
            type: "dropdown",
            templateOptions: {
                label: "",
                setting: {
                    score: 0
                },
                options: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingDropdown.prototype, "field", {
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
    VXSurveySettingDropdown.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingDropdown.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingDropdown.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-dropdown",
                    template: "\n  <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>\n      <div  class=\"item\">\n          <span>\u9898\u76EE\u603B\u5206\u6570</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n      </div>  \n    </div> \n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" style=\"width: 40px;\"  [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div> \n      </ng-container>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingDropdown.ctorParameters = function () { return []; };
    VXSurveySettingDropdown.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingDropdown;
}());
export { VXSurveySettingDropdown };
if (false) {
    /** @type {?} */
    VXSurveySettingDropdown.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBc0RFO1FBaEJBLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsVUFBVTtZQUNoQixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFDO29CQUNOLEtBQUssRUFBRSxDQUFDO2lCQUNUO2dCQUNELE9BQU8sRUFBRSxFQUFFO2FBQ1o7U0FDRixDQUFDO0lBTWMsQ0FBQztJQUxqQixzQkFBYSwwQ0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBd0I7WUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFHRCwwQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7OztJQUVkLDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQixJQUFJLENBQUM7O2dCQTFEeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSx3NUNBZ0NUO2lCQUVGOzs7Ozt3QkFhRSxLQUFLOztJQVVSLDhCQUFDO0NBQUEsQUEzREQsSUEyREM7U0F0QlksdUJBQXVCOzs7SUFDbEMsZ0RBVUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLWRyb3Bkb3duXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3JlcXVpcmVkJ11cIj48L256LXN3aXRjaD4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6YC76L6R6K6+572uPC9zcGFuPlxyXG4gICAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumimOebruaAu+WIhuaVsDwvc3Bhbj4gXHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZC50ZW1wbGF0ZU9wdGlvbnNbJ3NldHRpbmcnXVsnc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9vcHRpb25cIj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPumAiemhueiuvue9rjwvZGl2PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zWydvcHRpb25zJ11cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV90aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4+e3tpdGVtLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBxX3NvcmVcIj5cclxuICAgICAgICAgIDxzcGFuPumAiemhueWIhuaVsDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuWIhjwvc3Bhbj5cclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgc3R5bGU9XCJ3aWR0aDogNDBweDtcIiAgWyhuZ01vZGVsKV09XCJpdGVtWydzY29yZSddXCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nRHJvcGRvd24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7IFxyXG4gIHF1ZXN0aW9uRmllbGQ6IGFueSA9IHtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwiZHJvcGRvd25cIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIiwgIFxyXG4gICAgICBzZXR0aW5nOnsgXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfSwgXHJcbiAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG59Il19