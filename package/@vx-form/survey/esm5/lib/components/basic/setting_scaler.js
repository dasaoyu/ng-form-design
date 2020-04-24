/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingScaler = /** @class */ (function () {
    function VXSurveySettingScaler() {
        this.questionField = {
            key: "",
            type: "scaler",
            templateOptions: {
                label: "",
                description: "",
                maxLength: 500,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: "",
                options: []
            },
            origin: {
                refdatasourcetype: "",
                datatype: ""
            }
        };
    }
    Object.defineProperty(VXSurveySettingScaler.prototype, "field", {
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
    VXSurveySettingScaler.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingScaler.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingScaler.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-scaler",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div>\n      <div class=\"item\">\n          <span>\u9898\u578B</span>\n          <nz-radio-group [nzSize]=\"'small'\">\n              <label nz-radio-button nzValue=\"A\">\u5355\u9009</label>\n              <label nz-radio-button nzValue=\"B\">\u591A\u9009</label>\n            </nz-radio-group>\n      </div>\n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>  \n    </div>\n    <div class=\"setting_wrap_model\"> \n      <div class=\"title\">\u9009\u9879\u8BBE\u7F6E</div>\n      <div  class=\"item\">\n          <span>\u5E03\u5C40</span>\n          <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField['templateOptions']['layout']\">\n              <label nz-radio-button nzValue=\"row1\">\u5355\u5217</label>\n              <label nz-radio-button nzValue=\"row2\">2\u5217</label>\n              <label nz-radio-button nzValue=\"row3\">3\u5217</label>\n            </nz-radio-group>\n      </div>\n      <div  class=\"item\">\n          <span>\u968F\u673A\u6392\u5217</span> \n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['order']\"></nz-switch>\n      </div>\n    </div>\n    <div class=\"setting_wrap_option\"> \n      <div class=\"title\">\u9009\u9879\u5217\u8868</div>\n      <ng-container *ngFor=\"let item of questionField.templateOptions['options']\">\n      <div class=\"item q_title\">\n          <span>{{item.label}}</span>\n      </div>\n      <div class=\"item q_sore\">\n          <span>\u9009\u9879\u5206\u6570</span>\n          <span>\u5206</span>\n          <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" style=\"width: 40px;\"  [(ngModel)]=\"item['score']\"></nz-input-number>\n      </div>\n      <div class=\"item q_other\">\n          <span>\u6DFB\u52A0\u8F93\u5165\u6846</span>\n          <nz-switch nzSize=\"small\"  [(ngModel)]=\"item['input']\"></nz-switch>\n      </div>\n      </ng-container>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingScaler.ctorParameters = function () { return []; };
    VXSurveySettingScaler.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingScaler;
}());
export { VXSurveySettingScaler };
if (false) {
    /** @type {?} */
    VXSurveySettingScaler.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19zY2FsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX3NjYWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFJdkI7SUF3RkU7UUEzQkEsa0JBQWEsR0FBSztZQUNoQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBQyxRQUFRO1lBQ2IsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFdBQVcsRUFBRSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLElBQUksRUFBRSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBQyxFQUFFO2FBQ1g7WUFDRCxNQUFNLEVBQUU7Z0JBQ04saUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDYjtTQUNGLENBQUM7SUFNYSxDQUFDO0lBTGhCLHNCQUFhLHdDQUFLOzs7OztRQUFsQixVQUFtQixLQUF3QjtZQUN6QyxJQUFHLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLFNBQVMsRUFBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUdELHdDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLElBQUcsQ0FBQzs7Z0JBNUZ2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLCsyRUFzRFQ7aUJBRUY7Ozs7O3dCQXlCRSxLQUFLOztJQVVSLDRCQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0FsQ1kscUJBQXFCOzs7SUFFaEMsOENBcUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctc2NhbGVyXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumimOWeizwvc3Bhbj5cclxuICAgICAgICAgIDxuei1yYWRpby1ncm91cCBbbnpTaXplXT1cIidzbWFsbCdcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJBXCI+5Y2V6YCJPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJCXCI+5aSa6YCJPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uei1yYWRpby1ncm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD57e2ZpZWxkfGpzb259fVxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX21vZGVsXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnorr7nva48L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7luIPlsYA8L3NwYW4+XHJcbiAgICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnbGF5b3V0J11cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJyb3cxXCI+5Y2V5YiXPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJyb3cyXCI+MuWIlzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwicm93M1wiPjPliJc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pmo/mnLrmjpLliJc8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ29yZGVyJ11cIj48L256LXN3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfb3B0aW9uXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnliJfooag8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snb3B0aW9ucyddXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9zb3JlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgInpobnliIbmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIHN0eWxlPVwid2lkdGg6IDQwcHg7XCIgIFsobmdNb2RlbCldPVwiaXRlbVsnc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9vdGhlclwiPlxyXG4gICAgICAgICAgPHNwYW4+5re75Yqg6L6T5YWl5qGGPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiICBbKG5nTW9kZWwpXT1cIml0ZW1bJ2lucHV0J11cIj48L256LXN3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ1NjYWxlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBxdWVzdGlvbkZpZWxkOmFueT17XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwic2NhbGVyXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLCBcclxuICAgICAgbWF4TGVuZ3RoOiA1MDAsXHJcbiAgICAgIG1pbkxlbmd0aDogMCxcclxuICAgICAgbWF4OiAwLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIHByZWNpc2lvbjogMCxcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgdGlwczogXCJcIixcclxuICAgICAgcGF0dGVybjogXCJcIixcclxuICAgICAgb3B0aW9uczpbXSBcclxuICAgIH0sXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiXCIsXHJcbiAgICAgIGRhdGF0eXBlOiBcIlwiXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7ICBcclxuICAgIGlmKHZhbHVlIT1udWxsICYmIHZhbHVlIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTsgXHJcbiAgICB9XHJcbiAgfSBcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge31cclxufVxyXG4iXX0=