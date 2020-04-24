/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var VXSurveySettingProportion = /** @class */ (function () {
    function VXSurveySettingProportion() {
        this.questionField = {
            key: "",
            type: "proportion",
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
                score: 0,
                options: []
            }
        };
    }
    Object.defineProperty(VXSurveySettingProportion.prototype, "field", {
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
    VXSurveySettingProportion.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingProportion.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingProportion.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-setting-proportion",
                    template: "\n  <div class=\"setting_wrap_title\">\n    <span>\u9898\u76EE\u8BBE\u7F6E</span>\n  </div> \n  <div class=\"setting_wrap_block\">\n    <div class=\"title\">\u6574\u9898\u8BBE\u7F6E</div> \n    <div class=\"item\">\n        <span>\u6B64\u9898\u5FC5\u586B</span>\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"questionField['templateOptions']['required']\"></nz-switch> \n    </div> \n    <div  class=\"item\">\n        <span>\u9898\u76EE\u603B\u5206\u6570</span> \n        <nz-input-number [nzMin]=\"0\" [nzMax]=\"100\" [nzStep]=\"1\"  nzSize=\"small\" [(ngModel)]=\"questionField.templateOptions['score']\"></nz-input-number>\n    </div>\n    <div class=\"item\">\n        <span>\u903B\u8F91\u8BBE\u7F6E</span>\n        <label>\u8BBE\u7F6E</label>\n    </div>  \n  </div> \n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingProportion.ctorParameters = function () { return []; };
    VXSurveySettingProportion.propDecorators = {
        field: [{ type: Input }]
    };
    return VXSurveySettingProportion;
}());
export { VXSurveySettingProportion };
if (false) {
    /** @type {?} */
    VXSurveySettingProportion.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19wcm9wb3J0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19wcm9wb3J0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQUl2QjtJQWtERTtRQXhCQSxrQkFBYSxHQUFLO1lBQ2hCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFDLFlBQVk7WUFDakIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFdBQVcsRUFBRSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLElBQUksRUFBRSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBQyxFQUFFO2FBQ1g7U0FDRixDQUFDO0lBTWEsQ0FBQztJQUxoQixzQkFBYSw0Q0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBd0I7WUFDekMsSUFBRyxLQUFLLElBQUUsSUFBSSxJQUFJLEtBQUssSUFBRSxTQUFTLEVBQUM7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFHRCw0Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUViLCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQixJQUFHLENBQUM7O2dCQXREdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRSwrd0JBbUJUO2lCQUVGOzs7Ozt3QkFzQkUsS0FBSzs7SUFVUixnQ0FBQztDQUFBLEFBdkRELElBdURDO1NBL0JZLHlCQUF5Qjs7O0lBRXBDLGtEQWtCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLXByb3BvcnRpb25cIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICA8L2Rpdj4gXHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3JlcXVpcmVkJ11cIj48L256LXN3aXRjaD4gXHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7popjnm67mgLvliIbmlbA8L3NwYW4+IFxyXG4gICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD5cclxuICAgIDwvZGl2PiAgXHJcbiAgPC9kaXY+IFxyXG4gIGBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNldHRpbmdQcm9wb3J0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55PXtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6XCJwcm9wb3J0aW9uXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLCBcclxuICAgICAgbWF4TGVuZ3RoOiA1MDAsXHJcbiAgICAgIG1pbkxlbmd0aDogMCxcclxuICAgICAgbWF4OiAwLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIHByZWNpc2lvbjogMCxcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgdGlwczogXCJcIixcclxuICAgICAgcGF0dGVybjogXCJcIixcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIG9wdGlvbnM6W10gXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7ICBcclxuICAgIGlmKHZhbHVlIT1udWxsICYmIHZhbHVlIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTsgXHJcbiAgICB9XHJcbiAgfSBcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge31cclxufVxyXG4iXX0=