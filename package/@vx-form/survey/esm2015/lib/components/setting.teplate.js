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
export class VXSurveySettingTemplate {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} changeDetectorRef
     */
    constructor(componentFactoryResolver, changeDetectorRef) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set field(value) {
        if (value != null && value != undefined) {
            this.questionField = value;
        }
        if (this.componentHost) {
            this.componentHost.clear();
            if (this.questionField != undefined && this.questionField != null && this.questionField.type != undefined && this.questionField.type != null) {
                /** @type {?} */
                const compFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponents[this.questionField.type]);
                this.component = this.componentHost.createComponent(compFactory);
                this.component.instance.field = this.questionField;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingTemplate.decorators = [
    { type: Component, args: [{
                selector: "setting-template",
                template: `
    
  
  <ng-container #componentHost></ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingTemplate.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef }
];
VXSurveySettingTemplate.propDecorators = {
    componentHost: [{ type: ViewChild, args: ['componentHost', { read: ViewContainerRef, static: true },] }],
    field: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy50ZXBsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2V0dGluZy50ZXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUdULGlCQUFpQixFQUNqQix3QkFBd0IsRUFDekIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBC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ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdDYXNjYWRlciB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfY2FzY2FkZXJcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nQ2hlY2tCb3ggfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0Ryb3Bkb3duIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19kcm9wZG93blwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdJbnB1dCB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfaW5wdXRcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nTGluZSB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfbGluZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdSYWRpbyB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfcmFkaW9cIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nUmVtYXJrIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19yZW1hcmtcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nU2NhbGVyIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19zY2FsZXJcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nU2NvcmUgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX3Njb3JlXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0RhdGUgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX2RhdGVcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nVGltZSB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfdGltZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdOUFMgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX25wc1wiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdQcm9wb3J0aW9uIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19wcm9wb3J0aW9uXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0V2YWx1YXRpb24gfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX2V2YWx1YXRpb25cIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nTWF0cml4UmFkaW8gfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX21hdHJpeF9yYWRpb1wiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdNYXRyaXhDaGVja0JveCB9IGZyb20gXCIuL2Jhc2ljL3NldHRpbmdfbWF0cml4X2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ01hdHJpeFNjb3JlIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19tYXRyaXhfc2NvcmVcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nTWF0cml4SW5wdXQgfSBmcm9tIFwiLi9iYXNpYy9zZXR0aW5nX21hdHJpeF9pbnB1dFwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdJbnB1dEdyb3VwIH0gZnJvbSBcIi4vYmFzaWMvc2V0dGluZ19pbnB1dF9ncm91cFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwic2V0dGluZy10ZW1wbGF0ZVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICBcclxuICBcclxuICA8bmctY29udGFpbmVyICNjb21wb25lbnRIb3N0PjwvbmctY29udGFpbmVyPlxyXG4gIGBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNldHRpbmdUZW1wbGF0ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgZHluYW1pY0NvbXBvbmVudHM6IGFueSA9IHtcclxuICAgIFwicmFkaW9cIjogVlhTdXJ2ZXlTZXR0aW5nUmFkaW8sXHJcbiAgICBcImNoZWNrYm94XCI6IFZYU3VydmV5U2V0dGluZ0NoZWNrQm94LFxyXG4gICAgXCJkcm9wZG93blwiOiBWWFN1cnZleVNldHRpbmdEcm9wZG93bixcclxuICAgIFwiaW5wdXRcIjogVlhTdXJ2ZXlTZXR0aW5nSW5wdXQsXHJcbiAgICBcImxpbmVcIjogVlhTdXJ2ZXlTZXR0aW5nTGluZSxcclxuICAgIFwicmVtYXJrXCI6IFZYU3VydmV5U2V0dGluZ1JlbWFyayxcclxuICAgIFwiY2FzY2FkZXJcIjogVlhTdXJ2ZXlTZXR0aW5nQ2FzY2FkZXIsXHJcbiAgICBcInNjYWxlclwiOiBWWFN1cnZleVNldHRpbmdTY2FsZXIsXHJcbiAgICBcInNjb3JlXCI6IFZYU3VydmV5U2V0dGluZ1Njb3JlLFxyXG4gICAgXCJkYXRlXCI6IFZYU3VydmV5U2V0dGluZ0RhdGUsXHJcbiAgICBcInRpbWVcIjogVlhTdXJ2ZXlTZXR0aW5nVGltZSxcclxuICAgIFwibnBzXCI6IFZYU3VydmV5U2V0dGluZ05QUyxcclxuICAgIFwicHJvcG9ydGlvblwiOiBWWFN1cnZleVNldHRpbmdQcm9wb3J0aW9uLFxyXG4gICAgXCJldmFsdWF0aW9uXCI6IFZYU3VydmV5U2V0dGluZ0V2YWx1YXRpb24sXHJcbiAgICBcIm1hdHJpeF9yYWRpb1wiOiBWWFN1cnZleVNldHRpbmdNYXRyaXhSYWRpbyxcclxuICAgIFwibWF0cml4X2NoZWNrYm94XCI6IFZYU3VydmV5U2V0dGluZ01hdHJpeENoZWNrQm94LFxyXG4gICAgXCJtYXRyaXhfc2NvcmVcIjogVlhTdXJ2ZXlTZXR0aW5nTWF0cml4U2NvcmUsXHJcbiAgICBcIm1hdHJpeF9pbnB1dFwiOiBWWFN1cnZleVNldHRpbmdNYXRyaXhJbnB1dCxcclxuICAgIFwiaW5wdXRfZ3JvdXBcIjogVlhTdXJ2ZXlTZXR0aW5nSW5wdXRHcm91cFxyXG4gICAgLy8gXCJzZWxlY3Rfc2luZ2xlXCI6IFZYU2V0dGluZ1NlbGVjdFNpbmdsZSxcclxuICAgIC8vIFwic2VsZWN0X211bHRpcGxlXCI6IFZYU2V0dGluZ1NlbGVjdE11bHRpcGxlLFxyXG4gICAgLy8gXCJzZWxlY3RfaW1hZ2VcIjogVlhTZXR0aW5nU2VsZWN0SW1hZ2UsXHJcbiAgICAvLyBcInNlbGVjdF92b3RlaW1hZ2VcIjogVlhTZXR0aW5nU2VsZWN0Vm90ZUltYWdlLFxyXG4gICAgLy8gXCJzZWxlY3Rfdm90ZWZvbnRcIjogVlhTZXR0aW5nU2VsZWN0Vm90ZUZvbnQsXHJcbiAgICAvLyBcInNlbGVjdF9kcm9wZG93blwiOiBWWFNldHRpbmdTZWxlY3REcm9wZG93bixcclxuICAgIC8vIFwic2VsZWN0X2Nhc2NhZGVyXCI6IFZYU2V0dGluZ1NlbGVjdENhc2NhZGVyLFxyXG4gICAgLy8gXCJzZWxlY3Rfc2NhbGVyXCI6IFZYU2V0dGluZ1NlbGVjdFNjYWxlcixcclxuICAgIC8vIFwic2VsZWN0X2NsYXNzaWZpY2F0aW9uXCI6IFZYU2V0dGluZ1NlbGVjdENsYXNzaWZpY2F0aW9uLFxyXG5cclxuICAgIC8vIFwiYmxhbmtcIjogVlhTZXR0aW5nQmxhbmssXHJcbiAgICAvLyBcImJsYW5rX211bHRpcGxlXCI6IFZYU2V0dGluZ0JsYW5rTXVsdGlwbGUsXHJcbiAgICAvLyBcImJsYW5rX2hvcml6b250YWxcIjogVlhTZXR0aW5nQmxhbmtIb3Jpem9udGFsLFxyXG4gICAgLy8gXCJibGFua190YWJsZVwiOiBWWFNldHRpbmdCbGFua1RhYmxlLFxyXG4gICAgLy8gLy9cInNjb3JlXCI6IFZYU2V0dGluZ1Njb3JlLFxyXG4gICAgLy8gXCJzY29yZV9zb3J0XCI6IFZYU2V0dGluZ1Njb3JlU29ydCxcclxuICAgIC8vIFwic2NvcmVfbnBzXCI6IFZYU2V0dGluZ1Njb3JlTlBTLFxyXG4gICAgLy8gXCJzY29yZV9wcm9wb3J0aW9uXCI6IFZYU2V0dGluZ1Njb3JlUHJvcG9ydGlvbixcclxuICAgIC8vIFwic2NvcmVfZXZhbHVhdGlvblwiOiBWWFNldHRpbmdTY29yZUV2YWx1YXRpb24sXHJcbiAgICAvLyBcIm90aGVyX3BhZ2VcIjogVlhTZXR0aW5nT3RoZXJQYWdlLFxyXG4gICAgLy8gXCJvdGhlcl9saW5lXCI6IFZYU2V0dGluZ090aGVyTGluZSxcclxuICAgIC8vIFwib3RoZXJfdXBsb2FkXCI6IFZYU2V0dGluZ090aGVyVXBsb2FkLFxyXG4gICAgLy8gXCJvdGhlcl9yZW1hcmtcIjogVlhTZXR0aW5nT3RoZXJSZW1hcmssXHJcbiAgICAvLyBcImVtcF9uYW1lXCI6IFZYU2V0dGluZ0VtcE5hbWUsXHJcbiAgICAvLyBcImVtcF9tb2JpbGVcIjogVlhTZXR0aW5nRW1wTW9iaWxlLFxyXG4gICAgLy8gXCJlbXBfZW1haWxcIjogVlhTZXR0aW5nRW1wRW1haWwsXHJcbiAgICAvLyBcImVtcF9nZW5kZXJcIjogVlhTZXR0aW5nRW1wR2VuZGVyLFxyXG4gICAgLy8gXCJlbXBfZGF0ZVwiOiBWWFNldHRpbmdFbXBEYXRlLFxyXG4gICAgLy8gXCJlbXBfdGltZVwiOiBWWFNldHRpbmdFbXBUaW1lLFxyXG4gICAgLy8gXCJlbXBfYWdlXCI6IFZYU2V0dGluZ0VtcEFnZSxcclxuICAgIC8vIFwiZW1wX2VkdWNhdGlvblwiOiBWWFNldHRpbmdFbXBFZHVjYXRpb24sXHJcbiAgICAvLyBcImVtcF9tYWpvclwiOiBWWFNldHRpbmdFbXBtYWpvcixcclxuICAgIC8vIFwiZW1wX3VuaXZlcnNpdHlcIjogVlhTZXR0aW5nRW1wVW5pdmVyc2l0eSxcclxuICAgIC8vIFwiZW1wX2luZHVzdHJ5XCI6IFZYU2V0dGluZ0luZHVzdHJ5LFxyXG4gICAgLy8gXCJlbXBfb2NjdXBhdGlvblwiOiBWWFNldHRpbmdFbXBPY2N1cGF0aW9uLFxyXG4gICAgLy8gXCJlbXBfYWRkcmVzc1wiOiBWWFNldHRpbmdFbXBBZGRyZXNzLFxyXG4gICAgLy8gXCJlbXBfZ2VvZ3JhcGh5XCI6IFZYU2V0dGluZ0VtcEdlb2dyYXBoeSxcclxuICAgIC8vIFwibWF0cml4X3NlbGVjdFwiOiBWWFNldHRpbmdNYXRyaXhTZWxlY3QsXHJcbiAgICAvLyBcIm1hdHJpeF9zY29yZVwiOiBWWFNldHRpbmdNYXRyaXhTY29yZSxcclxuICAgIC8vIFwibWF0cml4X2JsYW5rXCI6IFZYU2V0dGluZ01hdHJpeEJsYW5rLFxyXG4gICAgLy8gXCJtYXRyaXhfc2NhbGVcIjogVlhTZXR0aW5nTWF0cml4U2NhbGVcclxuICB9O1xyXG5cclxuICBjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb21wb25lbnRIb3N0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSkgY29tcG9uZW50SG9zdDogVmlld0NvbnRhaW5lclJlZiB8IHVuZGVmaW5lZDtcclxuICBxdWVzdGlvbkZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcInJhZGlvXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBtYXhMZW5ndGg6IDUwMCxcclxuICAgICAgbWluTGVuZ3RoOiAwLFxyXG4gICAgICBtYXg6IDAsXHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgcHJlY2lzaW9uOiAwLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB0aXBzOiBcIlwiLFxyXG4gICAgICBwYXR0ZXJuOiBcIlwiLFxyXG4gICAgICBvcHRpb25zOiBbXVxyXG4gICAgfSxcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICByZWZkYXRhc291cmNldHlwZTogXCJcIixcclxuICAgICAgZGF0YXR5cGU6IFwiXCJcclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHtcclxuXHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRIb3N0KSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50SG9zdC5jbGVhcigpO1xyXG4gICAgICBpZiAodGhpcy5xdWVzdGlvbkZpZWxkICE9IHVuZGVmaW5lZCAmJiB0aGlzLnF1ZXN0aW9uRmllbGQgIT0gbnVsbCAmJiB0aGlzLnF1ZXN0aW9uRmllbGQudHlwZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5xdWVzdGlvbkZpZWxkLnR5cGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PGFueT4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcclxuICAgICAgICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudHNbdGhpcy5xdWVzdGlvbkZpZWxkLnR5cGVdLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEhvc3QuY3JlYXRlQ29tcG9uZW50KGNvbXBGYWN0b3J5KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5maWVsZCA9IHRoaXMucXVlc3Rpb25GaWVsZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IH1cclxufVxyXG4iXX0=