/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingInput = /** @class */ (function () {
    function VXSurveySettingInput() {
        this.questionField = {
            key: "",
            type: "input",
            templateOptions: {
                label: "",
                type: "default",
                setting: {
                    minLength: 0,
                    maxLength: 0,
                }
            }
        };
    }
    Object.defineProperty(VXSurveySettingInput.prototype, "field", {
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
    VXSurveySettingInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingInput.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingInput.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-input",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div>\n      <div class=\"item\">\n          <span>\u8F93\u5165\u6846\u5927\u5C0F</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['setting']['size']\">\n              <label nz-radio-button nzValue=\"large\">\u5927</label>\n              <label nz-radio-button nzValue=\"default\">\u4E2D</label>\n              <label nz-radio-button nzValue=\"small\">\u5C0F</label>\n            </nz-radio-group>\n      </div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u5185\u5BB9\u9650\u5236</span> \n          <nz-select [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['type']\">\n            <nz-option nzValue=\"default\" nzLabel=\"\u4E0D\u9650\"></nz-option>\n            <nz-option nzValue=\"number\" nzLabel=\"\u6570\u5B57\"></nz-option>\n            <nz-option nzValue=\"alphabet\" nzLabel=\"\u5B57\u6BCD\"></nz-option> \n            <nz-option nzValue=\"chinese\" nzLabel=\"\u4E2D\u6587\"></nz-option> \n            <nz-option nzValue=\"email\" nzLabel=\"\u90AE\u7BB1\"></nz-option> \n            <nz-option nzValue=\"mobile\" nzLabel=\"\u624B\u673A\"></nz-option> \n          </nz-select>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u6700\u5C11\u586B\u5199</span>\n          <span>\u5B57</span>\n          <nz-input-number [nzMin]=\"0\"  [nzMax]=\"9999999\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['minLength']\"></nz-input-number>\n      </div>  \n      <div class=\"item q_sore\">\n          <span>\u6700\u591A\u586B\u5199</span>\n          <span>\u5B57</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"9999999\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['maxLength']\"></nz-input-number>\n      </div> \n    </div>  \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingInput.ctorParameters = function () { return []; };
    VXSurveySettingInput.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingInput;
}());
export { VXSurveySettingInput };
if (false) {
    /** @type {?} */
    VXSurveySettingInput.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBb0VFO1FBakJBLGtCQUFhLEdBQUs7WUFDaEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUMsT0FBTztZQUNaLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUMsU0FBUztnQkFDZCxPQUFPLEVBQUM7b0JBQ04sU0FBUyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUM7aUJBQ2I7YUFDRjtTQUNGLENBQUM7SUFNYSxDQUFDO0lBTGhCLHNCQUFhLHVDQUFLOzs7OztRQUFsQixVQUFtQixLQUF3QjtZQUN6QyxJQUFHLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLFNBQVMsRUFBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUdELHVDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLElBQUcsQ0FBQzs7Z0JBeEV2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDIwRUE0Q1Q7aUJBRUY7Ozs7O3dCQWVFLEtBQUs7O0lBVVIsMkJBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXhCWSxvQkFBb0I7OztJQUUvQiw2Q0FXRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLWlucHV0XCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPui+k+WFpeahhuWkp+Wwjzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1yYWRpby1ncm91cCBbbnpTaXplXT1cIidzbWFsbCdcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydzZXR0aW5nJ11bJ3NpemUnXVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cImxhcmdlXCI+5aSnPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJkZWZhdWx0XCI+5LitPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJzbWFsbFwiPuWwjzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3JlcXVpcmVkJ11cIj48L256LXN3aXRjaD4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6YC76L6R6K6+572uPC9zcGFuPlxyXG4gICAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+e3tmaWVsZHxqc29ufX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfc29yZVwiPlxyXG4gICAgICAgICAgPHNwYW4+5YaF5a656ZmQ5Yi2PC9zcGFuPiBcclxuICAgICAgICAgIDxuei1zZWxlY3QgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsndHlwZSddXCI+XHJcbiAgICAgICAgICAgIDxuei1vcHRpb24gbnpWYWx1ZT1cImRlZmF1bHRcIiBuekxhYmVsPVwi5LiN6ZmQXCI+PC9uei1vcHRpb24+XHJcbiAgICAgICAgICAgIDxuei1vcHRpb24gbnpWYWx1ZT1cIm51bWJlclwiIG56TGFiZWw9XCLmlbDlrZdcIj48L256LW9wdGlvbj5cclxuICAgICAgICAgICAgPG56LW9wdGlvbiBuelZhbHVlPVwiYWxwaGFiZXRcIiBuekxhYmVsPVwi5a2X5q+NXCI+PC9uei1vcHRpb24+IFxyXG4gICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJjaGluZXNlXCIgbnpMYWJlbD1cIuS4reaWh1wiPjwvbnotb3B0aW9uPiBcclxuICAgICAgICAgICAgPG56LW9wdGlvbiBuelZhbHVlPVwiZW1haWxcIiBuekxhYmVsPVwi6YKu566xXCI+PC9uei1vcHRpb24+IFxyXG4gICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJtb2JpbGVcIiBuekxhYmVsPVwi5omL5py6XCI+PC9uei1vcHRpb24+IFxyXG4gICAgICAgICAgPC9uei1zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBxX3NvcmVcIj5cclxuICAgICAgICAgIDxzcGFuPuacgOWwkeWhq+WGmTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuWtlzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiAgW256TWF4XT1cIjk5OTk5OTlcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydzZXR0aW5nJ11bJ21pbkxlbmd0aCddXCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfc29yZVwiPlxyXG4gICAgICAgICAgPHNwYW4+5pyA5aSa5aGr5YaZPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+5a2XPC9zcGFuPlxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCI5OTk5OTk5XCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnc2V0dGluZyddWydtYXhMZW5ndGgnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICA8L2Rpdj4gIFxyXG4gIGBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNldHRpbmdJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBxdWVzdGlvbkZpZWxkOmFueT17XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwiaW5wdXRcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIixcclxuICAgICAgdHlwZTpcImRlZmF1bHRcIiwgXHJcbiAgICAgIHNldHRpbmc6eyAgICBcclxuICAgICAgICBtaW5MZW5ndGg6IDAsIFxyXG4gICAgICAgIG1heExlbmd0aDogMCwgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgIFxyXG4gICAgaWYodmFsdWUhPW51bGwgJiYgdmFsdWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlOyBcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG59XHJcbiJdfQ==