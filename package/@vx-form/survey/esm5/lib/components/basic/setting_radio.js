/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingRadio = /** @class */ (function () {
    function VXSurveySettingRadio() {
        this.questionField = {
            key: "",
            type: "radio",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                    random: false,
                    layout: "1"
                },
                options: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingRadio.prototype, "field", {
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
    VXSurveySettingRadio.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingRadio.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingRadio.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-radio",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div  class=\"item\">\n          <span>\u5E03\u5C40</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['setting']['layout']\">\n              <label nz-radio-button nzValue=\"1\">\u5355\u5217</label>\n              <label nz-radio-button nzValue=\"2\">2\u5217</label>\n              <label nz-radio-button nzValue=\"3\">3\u5217</label>\n            </nz-radio-group>\n      </div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div  class=\"item\">\n          <span>\u968F\u673A\u6392\u5217</span> \n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['setting']['random']\"></nz-switch>\n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div> \n      <div  class=\"item\">\n          <span>\u9898\u76EE\u603B\u5206\u6570</span> \n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n      </div>  \n    </div> \n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" style=\"width: 40px;\"  [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div> \n      </ng-container> \n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingRadio.ctorParameters = function () { return []; };
    VXSurveySettingRadio.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingRadio;
}());
export { VXSurveySettingRadio };
if (false) {
    /** @type {?} */
    VXSurveySettingRadio.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19yYWRpby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBc0VFO1FBbkJBLGtCQUFhLEdBQVE7WUFDbkIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsT0FBTztZQUNiLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsS0FBSztnQkFDZixPQUFPLEVBQUM7b0JBQ04sS0FBSyxFQUFFLENBQUM7b0JBQ1IsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsTUFBTSxFQUFDLEdBQUc7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7YUFDWjtTQUNGLENBQUM7SUFNYyxDQUFDO0lBTGpCLHNCQUFhLHVDQUFLOzs7OztRQUFsQixVQUFtQixLQUF3QjtZQUN6QyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUdELHVDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLElBQUksQ0FBQzs7Z0JBMUV4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDJpRUE0Q1Q7aUJBRUY7Ozs7O3dCQWlCRSxLQUFLOztJQVVSLDJCQUFDO0NBQUEsQUEzRUQsSUEyRUM7U0ExQlksb0JBQW9COzs7SUFFL0IsNkNBYUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLXJhZGlvXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5biD5bGAPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXJhZGlvLWdyb3VwIFtuelNpemVdPVwiJ3NtYWxsJ1wiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3NldHRpbmcnXVsnbGF5b3V0J11cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCIxXCI+5Y2V5YiXPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCIyXCI+MuWIlzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiM1wiPjPliJc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6ZqP5py65o6S5YiXPC9zcGFuPiBcclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydzZXR0aW5nJ11bJ3JhbmRvbSddXCI+PC9uei1zd2l0Y2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6YC76L6R6K6+572uPC9zcGFuPlxyXG4gICAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7popjnm67mgLvliIbmlbA8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zWydzZXR0aW5nJ11bJ3Njb3JlJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfb3B0aW9uXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnorr7nva48L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snb3B0aW9ucyddXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9zb3JlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgInpobnliIbmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIHN0eWxlPVwid2lkdGg6IDQwcHg7XCIgIFsobmdNb2RlbCldPVwiaXRlbVsnc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvbmctY29udGFpbmVyPiBcclxuICAgIDwvZGl2PlxyXG4gIGBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNldHRpbmdSYWRpbyBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuIFxyXG4gIHF1ZXN0aW9uRmllbGQ6IGFueSA9IHtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwicmFkaW9cIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgc2V0dGluZzp7IFxyXG4gICAgICAgIHNjb3JlOiAwLCBcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGxheW91dDpcIjFcIlxyXG4gICAgICB9LCBcclxuICAgICAgb3B0aW9uczogW11cclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XHJcbn1cclxuIl19