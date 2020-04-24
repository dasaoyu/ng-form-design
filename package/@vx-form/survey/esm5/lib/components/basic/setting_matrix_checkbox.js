/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingMatrixCheckBox = /** @class */ (function () {
    function VXSurveySettingMatrixCheckBox() {
        this.questionField = {
            key: "",
            type: "matrix_checkbox",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingMatrixCheckBox.prototype, "field", {
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
    VXSurveySettingMatrixCheckBox.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingMatrixCheckBox.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingMatrixCheckBox.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-matrix_checkbox",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingMatrixCheckBox.ctorParameters = function () { return []; };
    VXSurveySettingMatrixCheckBox.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingMatrixCheckBox;
}());
export { VXSurveySettingMatrixCheckBox };
if (false) {
    /** @type {?} */
    VXSurveySettingMatrixCheckBox.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19tYXRyaXhfY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX21hdHJpeF9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFJdkI7SUFxQ0U7UUFmQSxrQkFBYSxHQUFRO1lBQ25CLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsUUFBUSxFQUFDLEVBQUU7YUFDWjtTQUNGLENBQUM7SUFNYyxDQUFDO0lBTGpCLHNCQUFhLGdEQUFLOzs7OztRQUFsQixVQUFtQixLQUF3QjtZQUN6QyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUdELGdEQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWQsbURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLElBQUksQ0FBQzs7Z0JBekN4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsUUFBUSxFQUFFLDBpQkFlVDtpQkFFRjs7Ozs7d0JBYUUsS0FBSzs7SUFVUixvQ0FBQztDQUFBLEFBMUNELElBMENDO1NBdEJZLDZCQUE2Qjs7O0lBRXhDLHNEQVNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1tYXRyaXhfY2hlY2tib3hcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+IFxyXG4gIGBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNldHRpbmdNYXRyaXhDaGVja0JveCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuIFxyXG4gIHF1ZXN0aW9uRmllbGQ6IGFueSA9IHtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwibWF0cml4X2NoZWNrYm94XCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsIFxyXG4gICAgICBvcHRpb25zOiBbXSxcclxuICAgICAgc3VidGl0bGU6W11cclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XHJcbn1cclxuIl19