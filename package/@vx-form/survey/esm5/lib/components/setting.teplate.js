/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewContainerRef, ViewChild, ChangeDetectorRef, ComponentFactoryResolver } from "@angular/core";
import { VXSurveySettingCascader } from "./basic/setting_cascader";
import { VXSurveySettingCheckBox } from "./basic/setting_checkbox";
import { VXSurveySettingDropdown } from "./basic/setting_dropdown";
import { VXSurveySettingInput } from "./basic/setting_input";
import { VXSurveySettingLine } from "./basic/setting_line";
import { VXSurveySettingRadio } from "./basic/setting_radio";
import { VXSurveySettingRemark } from "./basic/setting_remark";
import { VXSurveySettingScaler } from "./basic/setting_scaler";
import { VXSurveySettingScore } from "./basic/setting_score";
import { VXSurveySettingDate } from "./basic/setting_date";
import { VXSurveySettingTime } from "./basic/setting_time";
import { VXSurveySettingNPS } from "./basic/setting_nps";
import { VXSurveySettingProportion } from "./basic/setting_proportion";
import { VXSurveySettingEvaluation } from "./basic/setting_evaluation";
import { VXSurveySettingMatrixRadio } from "./basic/setting_matrix_radio";
import { VXSurveySettingMatrixCheckBox } from "./basic/setting_matrix_checkbox";
import { VXSurveySettingMatrixScore } from "./basic/setting_matrix_score";
import { VXSurveySettingMatrixInput } from "./basic/setting_matrix_input";
import { VXSurveySettingInputGroup } from "./basic/setting_input_group";
var VXSurveySettingTemplate = /** @class */ (function () {
    function VXSurveySettingTemplate(componentFactoryResolver, changeDetectorRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.dynamicComponents = {
            "radio": VXSurveySettingRadio,
            "checkbox": VXSurveySettingCheckBox,
            "dropdown": VXSurveySettingDropdown,
            "input": VXSurveySettingInput,
            "line": VXSurveySettingLine,
            "remark": VXSurveySettingRemark,
            "cascader": VXSurveySettingCascader,
            "scaler": VXSurveySettingScaler,
            "score": VXSurveySettingScore,
            "date": VXSurveySettingDate,
            "time": VXSurveySettingTime,
            "nps": VXSurveySettingNPS,
            "proportion": VXSurveySettingProportion,
            "evaluation": VXSurveySettingEvaluation,
            "matrix_radio": VXSurveySettingMatrixRadio,
            "matrix_checkbox": VXSurveySettingMatrixCheckBox,
            "matrix_score": VXSurveySettingMatrixScore,
            "matrix_input": VXSurveySettingMatrixInput,
            "input_group": VXSurveySettingInputGroup
            // "select_single": VXSettingSelectSingle,
            // "select_multiple": VXSettingSelectMultiple,
            // "select_image": VXSettingSelectImage,
            // "select_voteimage": VXSettingSelectVoteImage,
            // "select_votefont": VXSettingSelectVoteFont,
            // "select_dropdown": VXSettingSelectDropdown,
            // "select_cascader": VXSettingSelectCascader,
            // "select_scaler": VXSettingSelectScaler,
            // "select_classification": VXSettingSelectClassification,
            // "blank": VXSettingBlank,
            // "blank_multiple": VXSettingBlankMultiple,
            // "blank_horizontal": VXSettingBlankHorizontal,
            // "blank_table": VXSettingBlankTable,
            // //"score": VXSettingScore,
            // "score_sort": VXSettingScoreSort,
            // "score_nps": VXSettingScoreNPS,
            // "score_proportion": VXSettingScoreProportion,
            // "score_evaluation": VXSettingScoreEvaluation,
            // "other_page": VXSettingOtherPage,
            // "other_line": VXSettingOtherLine,
            // "other_upload": VXSettingOtherUpload,
            // "other_remark": VXSettingOtherRemark,
            // "emp_name": VXSettingEmpName,
            // "emp_mobile": VXSettingEmpMobile,
            // "emp_email": VXSettingEmpEmail,
            // "emp_gender": VXSettingEmpGender,
            // "emp_date": VXSettingEmpDate,
            // "emp_time": VXSettingEmpTime,
            // "emp_age": VXSettingEmpAge,
            // "emp_education": VXSettingEmpEducation,
            // "emp_major": VXSettingEmpmajor,
            // "emp_university": VXSettingEmpUniversity,
            // "emp_industry": VXSettingIndustry,
            // "emp_occupation": VXSettingEmpOccupation,
            // "emp_address": VXSettingEmpAddress,
            // "emp_geography": VXSettingEmpGeography,
            // "matrix_select": VXSettingMatrixSelect,
            // "matrix_score": VXSettingMatrixScore,
            // "matrix_blank": VXSettingMatrixBlank,
            // "matrix_scale": VXSettingMatrixScale
        };
        this.questionField = {
            key: "",
            type: "radio",
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
    Object.defineProperty(VXSurveySettingTemplate.prototype, "field", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != null && value != undefined) {
                this.questionField = value;
            }
            if (this.componentHost) {
                this.componentHost.clear();
                if (this.questionField != undefined && this.questionField != null && this.questionField.type != undefined && this.questionField.type != null) {
                    /** @type {?} */
                    var compFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponents[this.questionField.type]);
                    this.component = this.componentHost.createComponent(compFactory);
                    this.component.instance.field = this.questionField;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXSurveySettingTemplate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXSurveySettingTemplate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    VXSurveySettingTemplate.decorators = [
        { type: Component, args: [{
                    selector: "setting-template",
                    template: "\n    \n  \n  <ng-container #componentHost></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveySettingTemplate.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    VXSurveySettingTemplate.propDecorators = {
        componentHost: [{ type: ViewChild, args: ['componentHost', { read: ViewContainerRef, static: true },] }],
        field: [{ type: Input }]
    };
    return VXSurveySettingTemplate;
}());
export { VXSurveySettingTemplate };
if (false) {
    /** @type {?} */
    VXSurveySettingTemplate.prototype.dynamicComponents;
    /** @type {?} */
    VXSurveySettingTemplate.prototype.component;
    /** @type {?} */
    VXSurveySettingTemplate.prototype.componentHost;
    /** @type {?} */
    VXSurveySettingTemplate.prototype.questionField;
    /** @type {?} */
    VXSurveySettingTemplate.prototype.componentFactoryResolver;
    /** @type {?} */
    VXSurveySettingTemplate.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy50ZXBsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2V0dGluZy50ZXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUdULGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBC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QWtIOztJQUNsSCxnREFxQkU7O0lBa0JBLDJEQUF5RDs7SUFDekQsb0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0Nhc2NhZGVyIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19jYXNjYWRlclwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdDaGVja0JveCB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nRHJvcGRvd24gfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX2Ryb3Bkb3duXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0lucHV0IH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19pbnB1dFwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdMaW5lIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19saW5lXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ1JhZGlvIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19yYWRpb1wiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdSZW1hcmsgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX3JlbWFya1wiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdTY2FsZXIgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX3NjYWxlclwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdTY29yZSB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfc2NvcmVcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nRGF0ZSB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfZGF0ZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdUaW1lIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ190aW1lXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ05QUyB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfbnBzXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ1Byb3BvcnRpb24gfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX3Byb3BvcnRpb25cIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nRXZhbHVhdGlvbiB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfZXZhbHVhdGlvblwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdNYXRyaXhSYWRpbyB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfbWF0cml4X3JhZGlvXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ01hdHJpeENoZWNrQm94IH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19tYXRyaXhfY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nTWF0cml4U2NvcmUgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX21hdHJpeF9zY29yZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdNYXRyaXhJbnB1dCB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfbWF0cml4X2lucHV0XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0lucHV0R3JvdXAgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX2lucHV0X2dyb3VwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJzZXR0aW5nLXRlbXBsYXRlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG4gIFxyXG4gIDxuZy1jb250YWluZXIgI2NvbXBvbmVudEhvc3Q+PC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ1RlbXBsYXRlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBkeW5hbWljQ29tcG9uZW50czogYW55ID0ge1xyXG4gICAgXCJyYWRpb1wiOiBWWFN1cnZleVNldHRpbmdSYWRpbyxcclxuICAgIFwiY2hlY2tib3hcIjogVlhTdXJ2ZXlTZXR0aW5nQ2hlY2tCb3gsXHJcbiAgICBcImRyb3Bkb3duXCI6IFZYU3VydmV5U2V0dGluZ0Ryb3Bkb3duLFxyXG4gICAgXCJpbnB1dFwiOiBWWFN1cnZleVNldHRpbmdJbnB1dCxcclxuICAgIFwibGluZVwiOiBWWFN1cnZleVNldHRpbmdMaW5lLFxyXG4gICAgXCJyZW1hcmtcIjogVlhTdXJ2ZXlTZXR0aW5nUmVtYXJrLFxyXG4gICAgXCJjYXNjYWRlclwiOiBWWFN1cnZleVNldHRpbmdDYXNjYWRlcixcclxuICAgIFwic2NhbGVyXCI6IFZYU3VydmV5U2V0dGluZ1NjYWxlcixcclxuICAgIFwic2NvcmVcIjogVlhTdXJ2ZXlTZXR0aW5nU2NvcmUsXHJcbiAgICBcImRhdGVcIjogVlhTdXJ2ZXlTZXR0aW5nRGF0ZSxcclxuICAgIFwidGltZVwiOiBWWFN1cnZleVNldHRpbmdUaW1lLFxyXG4gICAgXCJucHNcIjogVlhTdXJ2ZXlTZXR0aW5nTlBTLFxyXG4gICAgXCJwcm9wb3J0aW9uXCI6IFZYU3VydmV5U2V0dGluZ1Byb3BvcnRpb24sXHJcbiAgICBcImV2YWx1YXRpb25cIjogVlhTdXJ2ZXlTZXR0aW5nRXZhbHVhdGlvbixcclxuICAgIFwibWF0cml4X3JhZGlvXCI6IFZYU3VydmV5U2V0dGluZ01hdHJpeFJhZGlvLFxyXG4gICAgXCJtYXRyaXhfY2hlY2tib3hcIjogVlhTdXJ2ZXlTZXR0aW5nTWF0cml4Q2hlY2tCb3gsXHJcbiAgICBcIm1hdHJpeF9zY29yZVwiOiBWWFN1cnZleVNldHRpbmdNYXRyaXhTY29yZSxcclxuICAgIFwibWF0cml4X2lucHV0XCI6IFZYU3VydmV5U2V0dGluZ01hdHJpeElucHV0LFxyXG4gICAgXCJpbnB1dF9ncm91cFwiOiBWWFN1cnZleVNldHRpbmdJbnB1dEdyb3VwXHJcbiAgICAvLyBcInNlbGVjdF9zaW5nbGVcIjogVlhTZXR0aW5nU2VsZWN0U2luZ2xlLFxyXG4gICAgLy8gXCJzZWxlY3RfbXVsdGlwbGVcIjogVlhTZXR0aW5nU2VsZWN0TXVsdGlwbGUsXHJcbiAgICAvLyBcInNlbGVjdF9pbWFnZVwiOiBWWFNldHRpbmdTZWxlY3RJbWFnZSxcclxuICAgIC8vIFwic2VsZWN0X3ZvdGVpbWFnZVwiOiBWWFNldHRpbmdTZWxlY3RWb3RlSW1hZ2UsXHJcbiAgICAvLyBcInNlbGVjdF92b3RlZm9udFwiOiBWWFNldHRpbmdTZWxlY3RWb3RlRm9udCxcclxuICAgIC8vIFwic2VsZWN0X2Ryb3Bkb3duXCI6IFZYU2V0dGluZ1NlbGVjdERyb3Bkb3duLFxyXG4gICAgLy8gXCJzZWxlY3RfY2FzY2FkZXJcIjogVlhTZXR0aW5nU2VsZWN0Q2FzY2FkZXIsXHJcbiAgICAvLyBcInNlbGVjdF9zY2FsZXJcIjogVlhTZXR0aW5nU2VsZWN0U2NhbGVyLFxyXG4gICAgLy8gXCJzZWxlY3RfY2xhc3NpZmljYXRpb25cIjogVlhTZXR0aW5nU2VsZWN0Q2xhc3NpZmljYXRpb24sXHJcblxyXG4gICAgLy8gXCJibGFua1wiOiBWWFNldHRpbmdCbGFuayxcclxuICAgIC8vIFwiYmxhbmtfbXVsdGlwbGVcIjogVlhTZXR0aW5nQmxhbmtNdWx0aXBsZSxcclxuICAgIC8vIFwiYmxhbmtfaG9yaXpvbnRhbFwiOiBWWFNldHRpbmdCbGFua0hvcml6b250YWwsXHJcbiAgICAvLyBcImJsYW5rX3RhYmxlXCI6IFZYU2V0dGluZ0JsYW5rVGFibGUsXHJcbiAgICAvLyAvL1wic2NvcmVcIjogVlhTZXR0aW5nU2NvcmUsXHJcbiAgICAvLyBcInNjb3JlX3NvcnRcIjogVlhTZXR0aW5nU2NvcmVTb3J0LFxyXG4gICAgLy8gXCJzY29yZV9ucHNcIjogVlhTZXR0aW5nU2NvcmVOUFMsXHJcbiAgICAvLyBcInNjb3JlX3Byb3BvcnRpb25cIjogVlhTZXR0aW5nU2NvcmVQcm9wb3J0aW9uLFxyXG4gICAgLy8gXCJzY29yZV9ldmFsdWF0aW9uXCI6IFZYU2V0dGluZ1Njb3JlRXZhbHVhdGlvbixcclxuICAgIC8vIFwib3RoZXJfcGFnZVwiOiBWWFNldHRpbmdPdGhlclBhZ2UsXHJcbiAgICAvLyBcIm90aGVyX2xpbmVcIjogVlhTZXR0aW5nT3RoZXJMaW5lLFxyXG4gICAgLy8gXCJvdGhlcl91cGxvYWRcIjogVlhTZXR0aW5nT3RoZXJVcGxvYWQsXHJcbiAgICAvLyBcIm90aGVyX3JlbWFya1wiOiBWWFNldHRpbmdPdGhlclJlbWFyayxcclxuICAgIC8vIFwiZW1wX25hbWVcIjogVlhTZXR0aW5nRW1wTmFtZSxcclxuICAgIC8vIFwiZW1wX21vYmlsZVwiOiBWWFNldHRpbmdFbXBNb2JpbGUsXHJcbiAgICAvLyBcImVtcF9lbWFpbFwiOiBWWFNldHRpbmdFbXBFbWFpbCxcclxuICAgIC8vIFwiZW1wX2dlbmRlclwiOiBWWFNldHRpbmdFbXBHZW5kZXIsXHJcbiAgICAvLyBcImVtcF9kYXRlXCI6IFZYU2V0dGluZ0VtcERhdGUsXHJcbiAgICAvLyBcImVtcF90aW1lXCI6IFZYU2V0dGluZ0VtcFRpbWUsXHJcbiAgICAvLyBcImVtcF9hZ2VcIjogVlhTZXR0aW5nRW1wQWdlLFxyXG4gICAgLy8gXCJlbXBfZWR1Y2F0aW9uXCI6IFZYU2V0dGluZ0VtcEVkdWNhdGlvbixcclxuICAgIC8vIFwiZW1wX21ham9yXCI6IFZYU2V0dGluZ0VtcG1ham9yLFxyXG4gICAgLy8gXCJlbXBfdW5pdmVyc2l0eVwiOiBWWFNldHRpbmdFbXBVbml2ZXJzaXR5LFxyXG4gICAgLy8gXCJlbXBfaW5kdXN0cnlcIjogVlhTZXR0aW5nSW5kdXN0cnksXHJcbiAgICAvLyBcImVtcF9vY2N1cGF0aW9uXCI6IFZYU2V0dGluZ0VtcE9jY3VwYXRpb24sXHJcbiAgICAvLyBcImVtcF9hZGRyZXNzXCI6IFZYU2V0dGluZ0VtcEFkZHJlc3MsXHJcbiAgICAvLyBcImVtcF9nZW9ncmFwaHlcIjogVlhTZXR0aW5nRW1wR2VvZ3JhcGh5LFxyXG4gICAgLy8gXCJtYXRyaXhfc2VsZWN0XCI6IFZYU2V0dGluZ01hdHJpeFNlbGVjdCxcclxuICAgIC8vIFwibWF0cml4X3Njb3JlXCI6IFZYU2V0dGluZ01hdHJpeFNjb3JlLFxyXG4gICAgLy8gXCJtYXRyaXhfYmxhbmtcIjogVlhTZXR0aW5nTWF0cml4QmxhbmssXHJcbiAgICAvLyBcIm1hdHJpeF9zY2FsZVwiOiBWWFNldHRpbmdNYXRyaXhTY2FsZVxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbXBvbmVudEhvc3QnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBjb21wb25lbnRIb3N0OiBWaWV3Q29udGFpbmVyUmVmIHwgdW5kZWZpbmVkO1xyXG4gIHF1ZXN0aW9uRmllbGQ6IGFueSA9IHtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwicmFkaW9cIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIG1heExlbmd0aDogNTAwLFxyXG4gICAgICBtaW5MZW5ndGg6IDAsXHJcbiAgICAgIG1heDogMCxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBwcmVjaXNpb246IDAsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHRpcHM6IFwiXCIsXHJcbiAgICAgIHBhdHRlcm46IFwiXCIsXHJcbiAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICB9LFxyXG4gICAgb3JpZ2luOiB7XHJcbiAgICAgIHJlZmRhdGFzb3VyY2V0eXBlOiBcIlwiLFxyXG4gICAgICBkYXRhdHlwZTogXCJcIlxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbXBvbmVudEhvc3QpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnRIb3N0LmNsZWFyKCk7XHJcbiAgICAgIGlmICh0aGlzLnF1ZXN0aW9uRmllbGQgIT0gdW5kZWZpbmVkICYmIHRoaXMucXVlc3Rpb25GaWVsZCAhPSBudWxsICYmIHRoaXMucXVlc3Rpb25GaWVsZC50eXBlICE9IHVuZGVmaW5lZCAmJiB0aGlzLnF1ZXN0aW9uRmllbGQudHlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgY29tcEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICAgICAgdGhpcy5keW5hbWljQ29tcG9uZW50c1t0aGlzLnF1ZXN0aW9uRmllbGQudHlwZV0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50SG9zdC5jcmVhdGVDb21wb25lbnQoY29tcEZhY3RvcnkpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmZpZWxkID0gdGhpcy5xdWVzdGlvbkZpZWxkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHVibGljIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG59XHJcbiJdfQ==