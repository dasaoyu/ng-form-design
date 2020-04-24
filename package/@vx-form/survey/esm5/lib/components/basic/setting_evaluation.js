/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingEvaluation = /** @class */ (function () {
    function VXSurveySettingEvaluation() {
        this.questionField = {
            key: "",
            type: "evaluation",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                },
                options: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingEvaluation.prototype, "field", {
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
    VXSurveySettingEvaluation.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingEvaluation.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingEvaluation.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-evaluation",
                    template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n    </div> \n    <div  class=\"item\">\n        <span>\u9898\u76EE\u603B\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['setting']['score']\"></nz-input-number>\n    </div>\n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>  \n  </div> \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingEvaluation.ctorParameters = function () { return []; };
    VXSurveySettingEvaluation.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingEvaluation;
}());
export { VXSurveySettingEvaluation };
if (false) {
    /** @type {?} */
    VXSurveySettingEvaluation.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19ldmFsdWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19ldmFsdWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQTJDRTtRQWpCQSxrQkFBYSxHQUFLO1lBQ2hCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFDLFlBQVk7WUFDakIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBQztvQkFDTixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxPQUFPLEVBQUMsRUFBRTthQUNYO1NBQ0YsQ0FBQztJQU1hLENBQUM7SUFMaEIsc0JBQWEsNENBQUs7Ozs7O1FBQWxCLFVBQW1CLEtBQXdCO1lBQ3pDLElBQUcsS0FBSyxJQUFFLElBQUksSUFBSSxLQUFLLElBQUUsU0FBUyxFQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBOzs7O0lBR0QsNENBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYiwrQ0FBVzs7OztJQUFYLFVBQVksT0FBc0IsSUFBRyxDQUFDOztnQkEvQ3ZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsMHhCQW1CVDtpQkFFRjs7Ozs7d0JBZUUsS0FBSzs7SUFVUixnQ0FBQztDQUFBLEFBaERELElBZ0RDO1NBeEJZLHlCQUF5Qjs7O0lBRXBDLGtEQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctZXZhbHVhdGlvblwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gIDwvZGl2PiBcclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPumimOebruaAu+WIhuaVsDwvc3Bhbj4gXHJcbiAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zWydzZXR0aW5nJ11bJ3Njb3JlJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiBcclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nRXZhbHVhdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBxdWVzdGlvbkZpZWxkOmFueT17XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwiZXZhbHVhdGlvblwiLFxyXG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgIGxhYmVsOiBcIlwiLCBcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICBzZXR0aW5nOntcclxuICAgICAgICBzY29yZTogMCxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczpbXSBcclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgIFxyXG4gICAgaWYodmFsdWUhPW51bGwgJiYgdmFsdWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlOyBcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG59XHJcbiJdfQ==