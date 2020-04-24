/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingTime = /** @class */ (function () {
    function VXSurveySettingTime() {
        this.questionField = {
            key: "",
            type: "time",
            templateOptions: {
                label: "",
                required: false
            }
        };
    }
    Object.defineProperty(VXSurveySettingTime.prototype, "field", {
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
    VXSurveySettingTime.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingTime.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingTime.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-time",
                    template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n    </div>  \n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>  \n  </div> \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingTime.ctorParameters = function () { return []; };
    VXSurveySettingTime.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingTime;
}());
export { VXSurveySettingTime };
if (false) {
    /** @type {?} */
    VXSurveySettingTime.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ190aW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ190aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQW1DRTtRQWJBLGtCQUFhLEdBQUs7WUFDaEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUMsTUFBTTtZQUNYLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUMsS0FBSzthQUNmO1NBQ0YsQ0FBQztJQU1hLENBQUM7SUFMaEIsc0JBQWEsc0NBQUs7Ozs7O1FBQWxCLFVBQW1CLEtBQXdCO1lBQ3pDLElBQUcsS0FBSyxJQUFFLElBQUksSUFBSSxLQUFLLElBQUUsU0FBUyxFQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBOzs7O0lBR0Qsc0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7SUFFYix5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0IsSUFBRyxDQUFDOztnQkF2Q3ZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsZ2hCQWVUO2lCQUVGOzs7Ozt3QkFXRSxLQUFLOztJQVVSLDBCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQlksbUJBQW1COzs7SUFFOUIsNENBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy10aW1lXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgPC9kaXY+IFxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgPC9kaXY+ICBcclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHNwYW4+6YC76L6R6K6+572uPC9zcGFuPlxyXG4gICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPlxyXG4gICAgPC9kaXY+ICBcclxuICA8L2Rpdj4gXHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ1RpbWUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgXHJcbiAgcXVlc3Rpb25GaWVsZDphbnk9e1xyXG4gICAga2V5OiBcIlwiLFxyXG4gICAgdHlwZTpcInRpbWVcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIixcclxuICAgICAgcmVxdWlyZWQ6ZmFsc2UgXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7ICBcclxuICAgIGlmKHZhbHVlIT1udWxsICYmIHZhbHVlIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTsgXHJcbiAgICB9XHJcbiAgfSBcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge31cclxufVxyXG4iXX0=