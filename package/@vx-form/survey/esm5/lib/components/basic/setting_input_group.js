/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingInputGroup = /** @class */ (function () {
    function VXSurveySettingInputGroup() {
        this.questionField = {
            key: "",
            type: "input_group",
            templateOptions: {
                label: "",
                required: false,
                options: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingInputGroup.prototype, "field", {
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
    VXSurveySettingInputGroup.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingInputGroup.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingInputGroup.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-input_group",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>{{field|json}}\n      </div>  \n    </div> \n     \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingInputGroup.ctorParameters = function () { return []; };
    VXSurveySettingInputGroup.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingInputGroup;
}());
export { VXSurveySettingInputGroup };
if (false) {
    /** @type {?} */
    VXSurveySettingInputGroup.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19pbnB1dF9ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfaW5wdXRfZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBcUNFO1FBZEEsa0JBQWEsR0FBSztZQUNoQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBQyxhQUFhO1lBQ2xCLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsS0FBSztnQkFDZixPQUFPLEVBQUMsRUFBRTthQUNYO1NBQ0YsQ0FBQztJQU1hLENBQUM7SUFMaEIsc0JBQWEsNENBQUs7Ozs7O1FBQWxCLFVBQW1CLEtBQXdCO1lBQ3pDLElBQUcsS0FBSyxJQUFFLElBQUksSUFBSSxLQUFLLElBQUUsU0FBUyxFQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBOzs7O0lBR0QsNENBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYiwrQ0FBVzs7OztJQUFYLFVBQVksT0FBc0IsSUFBRyxDQUFDOztnQkF6Q3ZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsK2pCQWdCVDtpQkFFRjs7Ozs7d0JBWUUsS0FBSzs7SUFVUixnQ0FBQztDQUFBLEFBMUNELElBMENDO1NBckJZLHlCQUF5Qjs7O0lBRXBDLGtEQVFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctaW5wdXRfZ3JvdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPnt7ZmllbGR8anNvbn19XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj4gXHJcbiAgICAgXHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ0lucHV0R3JvdXAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgXHJcbiAgcXVlc3Rpb25GaWVsZDphbnk9e1xyXG4gICAga2V5OiBcIlwiLFxyXG4gICAgdHlwZTpcImlucHV0X2dyb3VwXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsIFxyXG4gICAgICBvcHRpb25zOltdIFxyXG4gICAgfSBcclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgIFxyXG4gICAgaWYodmFsdWUhPW51bGwgJiYgdmFsdWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlOyBcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG59XHJcbiJdfQ==