/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingCheckBox = /** @class */ (function () {
    function VXSurveySettingCheckBox() {
        this.questionField = {
            key: "",
            type: "checkbox",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                    random: false,
                    layout: "1",
                    min: 0,
                    //最少选N项
                    max: 0,
                },
                options: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingCheckBox.prototype, "field", {
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
    VXSurveySettingCheckBox.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingCheckBox.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingCheckBox.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-checkbox",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div  class=\"item\">\n          <span>\u5E03\u5C40</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['setting']['layout']\">\n              <label nz-radio-button nzValue=\"1\">\u5355\u5217</label>\n              <label nz-radio-button nzValue=\"2\">2\u5217</label>\n              <label nz-radio-button nzValue=\"3\">3\u5217</label>\n            </nz-radio-group>\n      </div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div  class=\"item\">\n          <span>\u968F\u673A\u6392\u5217</span> \n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['random']\"></nz-switch>\n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div> \n      <div class=\"item\">\n          <span>\u9898\u76EE\u603B\u5206\u6570</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n      </div>\n      <div  class=\"item\">\n          <span>\u6700\u5C11\u53EF\u9009</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['min']\"></nz-input-number>\n      </div>\n      <div  class=\"item\">\n          <span>\u6700\u591A\u53EF\u9009</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\"  [(ngModel)]=\"questionField.templateOptions['setting']['max']\"></nz-input-number>\n      </div>  \n    </div> \n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div> \n      </ng-container>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingCheckBox.ctorParameters = function () { return []; };
    VXSurveySettingCheckBox.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingCheckBox;
}());
export { VXSurveySettingCheckBox };
if (false) {
    /** @type {?} */
    VXSurveySettingCheckBox.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19jaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBK0VFO1FBckJBLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsVUFBVTtZQUNoQixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFDO29CQUNOLEtBQUssRUFBRSxDQUFDO29CQUNSLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBQyxHQUFHO29CQUNWLEdBQUcsRUFBRSxDQUFDOztvQkFDTixHQUFHLEVBQUUsQ0FBQztpQkFDUDtnQkFDRCxPQUFPLEVBQUUsRUFBRTthQUNaO1NBQ0YsQ0FBQztJQU1jLENBQUM7SUFMakIsc0JBQWEsMENBQUs7Ozs7O1FBQWxCLFVBQW1CLEtBQXdCO1lBQ3pDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBOzs7O0lBR0QsMENBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Ozs7SUFFZCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0IsSUFBSSxDQUFDOztnQkFuRnhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsdWlGQW9EVDtpQkFFRjs7Ozs7d0JBa0JFLEtBQUs7O0lBVVIsOEJBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQTNCWSx1QkFBdUI7OztJQUNsQyxnREFlRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctY2hlY2tib3hcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7luIPlsYA8L3NwYW4+XHJcbiAgICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnc2V0dGluZyddWydsYXlvdXQnXVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cIjFcIj7ljZXliJc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cIjJcIj4y5YiXPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCIzXCI+M+WIlzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3JlcXVpcmVkJ11cIj48L256LXN3aXRjaD4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumaj+acuuaOkuWIlzwvc3Bhbj4gXHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnc2V0dGluZyddWydyYW5kb20nXVwiPjwvbnotc3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7popjnm67mgLvliIbmlbA8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zWydzZXR0aW5nJ11bJ3Njb3JlJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5pyA5bCR5Y+v6YCJPC9zcGFuPiBcclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snc2V0dGluZyddWydtaW4nXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mnIDlpJrlj6/pgIk8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiAgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snc2V0dGluZyddWydtYXgnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9vcHRpb25cIj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPumAiemhueiuvue9rjwvZGl2PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zWydvcHRpb25zJ11cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV90aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4+e3tpdGVtLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBxX3NvcmVcIj5cclxuICAgICAgICAgIDxzcGFuPumAiemhueWIhuaVsDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuWIhjwvc3Bhbj5cclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJpdGVtWydzY29yZSddXCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nQ2hlY2tCb3ggaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7IFxyXG4gIHF1ZXN0aW9uRmllbGQ6IGFueSA9IHtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwiY2hlY2tib3hcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgc2V0dGluZzp7IFxyXG4gICAgICAgIHNjb3JlOiAwLCBcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGxheW91dDpcIjFcIiwgXHJcbiAgICAgICAgbWluOiAwLCAvL+acgOWwkemAiU7poblcclxuICAgICAgICBtYXg6IDAsIC8v5pyA5aSa6YCJTumhuSBcclxuICAgICAgfSwgXHJcbiAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG59XHJcbiJdfQ==