/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingMatrixScore = /** @class */ (function () {
    function VXSurveySettingMatrixScore() {
        this.questionField = {
            key: "",
            type: "matrix_score",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingMatrixScore.prototype, "field", {
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
    VXSurveySettingMatrixScore.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingMatrixScore.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingMatrixScore.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-matrix_score",
                    template: "\n    <div class=\"setting_wrap_title\">\n      <span>\u9898\u76EE\u8BBE\u7F6E</span>\n    </div> \n    <div class=\"setting_wrap_block\">\n      <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n      <div class=\"item\">\n          <span>\u6B64\u9898\u5FC5\u586B</span>\n          <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n      </div>\n      <div class=\"item\">\n          <span>\u903B\u8F91\u8BBE\u7F6E</span>\n          <label>\u8BBE\u7F6E</label>\n      </div>  \n    </div> \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingMatrixScore.ctorParameters = function () { return []; };
    VXSurveySettingMatrixScore.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingMatrixScore;
}());
export { VXSurveySettingMatrixScore };
if (false) {
    /** @type {?} */
    VXSurveySettingMatrixScore.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19tYXRyaXhfc2NvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX21hdHJpeF9zY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFJdkI7SUFxQ0U7UUFmQSxrQkFBYSxHQUFRO1lBQ25CLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLGNBQWM7WUFDcEIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBQyxFQUFFO2FBQ1o7U0FDRixDQUFDO0lBTWMsQ0FBQztJQUxqQixzQkFBYSw2Q0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBd0I7WUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFHRCw2Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7OztJQUVkLGdEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQixJQUFJLENBQUM7O2dCQXpDeEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRSwwaUJBZVQ7aUJBRUY7Ozs7O3dCQWFFLEtBQUs7O0lBVVIsaUNBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXRCWSwwQkFBMEI7OztJQUVyQyxtREFTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctbWF0cml4X3Njb3JlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PiBcclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nTWF0cml4U2NvcmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiBcclxuICBxdWVzdGlvbkZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcIm1hdHJpeF9zY29yZVwiLFxyXG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgIGxhYmVsOiBcIlwiLCBcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLCBcclxuICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgIHN1YnRpdGxlOltdXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG59XHJcbiJdfQ==