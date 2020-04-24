/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingScore = /** @class */ (function () {
    function VXSurveySettingScore() {
        this.questionField = {
            key: "",
            type: "score",
            templateOptions: {
                type: "start",
                label: "",
                required: false,
                setting: {
                    label: "",
                    score: 0,
                    min: 0,
                    max: 5
                },
            }
        };
    }
    Object.defineProperty(VXSurveySettingScore.prototype, "field", {
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
    VXSurveySettingScore.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingScore.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingScore.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-score",
                    template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.required\"></nz-switch> \n    </div>\n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>\n    <div  class=\"item\">\n        <span>\u9898\u76EE\u603B\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.setting.score\"></nz-input-number>\n    </div>\n    <div  class=\"item\">\n        <span>\u6700\u4F4E\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"10\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.setting.min\"></nz-input-number>\n    </div>\n    <div  class=\"item\">\n        <span>\u6700\u9AD8\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"10\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions.setting.max\"></nz-input-number>\n    </div>\n    <div class=\"item\">\n      <span>\u56FE\u6807</span>\n        <nz-radio-group [nzSize]=\"'small'\" [(ngModel)]=\"questionField.templateOptions.type\">\n            <label nz-radio-button nzValue=\"start\">\u661F</label>\n            <label nz-radio-button nzValue=\"heart\">\u5FC3</label>\n            <label nz-radio-button nzValue=\"good\">\u8D5E</label> \n            <label nz-radio-button nzValue=\"other\">\u5176</label>\n          </nz-radio-group>\n    </div>\n    <div class=\"item\" *ngIf=\"questionField.templateOptions.type=='other'\">\n      <span>\u81EA\u5B9A\u4E49\u6587\u5B57</span>  \n      <input nz-input [(ngModel)]=\"questionField.templateOptions.setting.label\" maxlength=\"1\" nzSize=\"small\" />\n    </div> \n  </div> \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingScore.ctorParameters = function () { return []; };
    VXSurveySettingScore.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingScore;
}());
export { VXSurveySettingScore };
if (false) {
    /** @type {?} */
    VXSurveySettingScore.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19zY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfc2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBbUVFO1FBcEJBLGtCQUFhLEdBQUs7WUFDaEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsT0FBTztZQUNiLGVBQWUsRUFBRTtnQkFDZixJQUFJLEVBQUMsT0FBTztnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsS0FBSztnQkFDZixPQUFPLEVBQUM7b0JBQ04sS0FBSyxFQUFDLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLENBQUM7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sR0FBRyxFQUFFLENBQUM7aUJBQ1A7YUFDRjtTQUNGLENBQUM7SUFNYSxDQUFDO0lBTGhCLHNCQUFhLHVDQUFLOzs7OztRQUFsQixVQUFtQixLQUF3QjtZQUN6QyxJQUFHLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLFNBQVMsRUFBQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUdELHVDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLElBQUcsQ0FBQzs7Z0JBdkV2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHMrREF3Q1Q7aUJBRUY7Ozs7O3dCQWtCRSxLQUFLOztJQVVSLDJCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0EzQlksb0JBQW9COzs7SUFFL0IsNkNBY0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1zY29yZVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gIDwvZGl2PiBcclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy5yZXF1aXJlZFwiPjwvbnotc3dpdGNoPiBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPumimOebruaAu+WIhuaVsDwvc3Bhbj4gXHJcbiAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zLnNldHRpbmcuc2NvcmVcIj48L256LWlucHV0LW51bWJlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHNwYW4+5pyA5L2O5YiG5pWwPC9zcGFuPiBcclxuICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy5zZXR0aW5nLm1pblwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7mnIDpq5jliIbmlbA8L3NwYW4+IFxyXG4gICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zLnNldHRpbmcubWF4XCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgIDxzcGFuPuWbvuaghzwvc3Bhbj5cclxuICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy50eXBlXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cInN0YXJ0XCI+5pifPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiaGVhcnRcIj7lv4M8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJnb29kXCI+6LWePC9sYWJlbD4gXHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cIm90aGVyXCI+5YW2PC9sYWJlbD5cclxuICAgICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgKm5nSWY9XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy50eXBlPT0nb3RoZXInXCI+XHJcbiAgICAgIDxzcGFuPuiHquWumuS5ieaWh+Wtlzwvc3Bhbj4gIFxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy5zZXR0aW5nLmxhYmVsXCIgbWF4bGVuZ3RoPVwiMVwiIG56U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgIDwvZGl2PiBcclxuICA8L2Rpdj4gXHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ1Njb3JlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55PXsgXHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcInNjb3JlXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgdHlwZTpcInN0YXJ0XCIsXHJcbiAgICAgIGxhYmVsOiBcIlwiLCBcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICBzZXR0aW5nOntcclxuICAgICAgICBsYWJlbDpcIlwiLCBcclxuICAgICAgICBzY29yZTogMCwgICBcclxuICAgICAgICBtaW46IDAsIFxyXG4gICAgICAgIG1heDogNVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykgeyAgXHJcbiAgICBpZih2YWx1ZSE9bnVsbCAmJiB2YWx1ZSE9dW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7IFxyXG4gICAgfVxyXG4gIH0gXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt9XHJcbn1cclxuIl19