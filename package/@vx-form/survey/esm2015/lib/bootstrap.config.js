/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { VXSurveyRadioGroup, VXSurveyDragDrop, VXSurveyRadio, VXSurveyCheckBox, VXSurveyDropdown, VXSurveyCascader, VXSurveyScaler, VXSurveyScore, VXSurveyLine, VXSurveyRemark, VXSurveyInput, VXSurveyDate, VXSurveyTime, VXSurveyNPS, VXSurveyProportion, VXSurveyEvaluation, VXSurveyMatrixRadio, VXSurveyMatrixCheckBox, VXSurveyMatrixScore, VXSurveyMatrixInput, VXSurveyInputGroup } from "./types/types";
import { VXFormWrapperFormField } from "./wrappers/wrappers";
import { VXFormFieldGroup } from "./templates/group";
import { VXFormFieldRepeat } from "./templates/repeat";
/** @type {?} */
export const FIELD_TYPE_COMPONENTS = [
    VXSurveyRadio,
    VXSurveyCheckBox,
    VXSurveyDropdown,
    VXSurveyCascader,
    VXSurveyScaler,
    VXSurveyScore,
    VXSurveyLine,
    VXSurveyRemark,
    VXSurveyInput,
    VXSurveyDate,
    VXSurveyTime,
    VXSurveyNPS,
    VXSurveyProportion,
    VXSurveyEvaluation,
    VXSurveyMatrixRadio,
    VXSurveyMatrixCheckBox,
    VXSurveyMatrixScore,
    VXSurveyMatrixInput,
    VXSurveyInputGroup,
    // types 
    VXSurveyRadioGroup,
    //templates
    VXSurveyDragDrop,
    VXFormFieldGroup,
    VXFormFieldRepeat,
    // wrappers
    VXFormWrapperFormField
];
/** @type {?} */
export const BOOTSTRAP_VXFORM_CONFIG = {
    types: [
        {
            name: "radio", component: VXSurveyRadio, wrappers: ["form-field"]
        },
        {
            name: "checkbox", component: VXSurveyCheckBox, wrappers: ["form-field"]
        },
        {
            name: "dropdown", component: VXSurveyDropdown, wrappers: ["form-field"]
        },
        {
            name: "cascader", component: VXSurveyCascader, wrappers: ["form-field"]
        },
        {
            name: "scaler", component: VXSurveyScaler, wrappers: ["form-field"]
        },
        {
            name: "score", component: VXSurveyScore, wrappers: ["form-field"]
        },
        {
            name: "line", component: VXSurveyLine, wrappers: ["form-field"]
        },
        {
            name: "remark", component: VXSurveyRemark, wrappers: ["form-field"]
        },
        {
            name: "input", component: VXSurveyInput, wrappers: ["form-field"]
        },
        {
            name: "date", component: VXSurveyDate, wrappers: ["form-field"]
        },
        {
            name: "time", component: VXSurveyTime, wrappers: ["form-field"]
        },
        {
            name: "nps", component: VXSurveyNPS, wrappers: ["form-field"]
        },
        {
            name: "proportion", component: VXSurveyProportion, wrappers: ["form-field"]
        },
        {
            name: "evaluation", component: VXSurveyEvaluation, wrappers: ["form-field"]
        },
        {
            name: "matrix_radio", component: VXSurveyMatrixRadio, wrappers: ["form-field"]
        },
        {
            name: "matrix_checkbox", component: VXSurveyMatrixCheckBox, wrappers: ["form-field"]
        },
        {
            name: "matrix_score", component: VXSurveyMatrixScore, wrappers: ["form-field"]
        },
        {
            name: "matrix_input", component: VXSurveyMatrixInput, wrappers: ["form-field"]
        },
        {
            name: "input_group", component: VXSurveyInputGroup, wrappers: ["form-field"]
        },
        {
            name: "drag-drop", component: VXSurveyDragDrop
        },
        { name: "group", component: VXFormFieldGroup },
        { name: "repeat", component: VXFormFieldRepeat },
        {
            name: "radiogroup",
            component: VXSurveyRadioGroup,
            wrappers: ["form-field"]
        }
    ],
    wrappers: [{ name: "form-field", component: VXFormWrapperFormField }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUVoQixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixrQkFBa0IsRUFFbkIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZELE1BQU0sT0FBTyxxQkFBcUIsR0FBRztJQUVuQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFFbEIsU0FBUztJQUNULGtCQUFrQjtJQUVsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFFakIsV0FBVztJQUNYLHNCQUFzQjtD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LFNBQVMsRUFBRSxrQkFBa0I7WUFDN0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLENBQUM7Q0FDdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdPcHRpb24gfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIFZYU3VydmV5UmFkaW9Hcm91cCxcclxuICBWWFN1cnZleURyYWdEcm9wLFxyXG5cclxuICBWWFN1cnZleVJhZGlvLFxyXG4gIFZYU3VydmV5Q2hlY2tCb3gsXHJcbiAgVlhTdXJ2ZXlEcm9wZG93bixcclxuICBWWFN1cnZleUNhc2NhZGVyLFxyXG4gIFZYU3VydmV5U2NhbGVyLFxyXG4gIFZYU3VydmV5U2NvcmUsXHJcbiAgVlhTdXJ2ZXlMaW5lLFxyXG4gIFZYU3VydmV5UmVtYXJrLFxyXG4gIFZYU3VydmV5SW5wdXQsXHJcbiAgVlhTdXJ2ZXlEYXRlLFxyXG4gIFZYU3VydmV5VGltZSxcclxuICBWWFN1cnZleU5QUyxcclxuICBWWFN1cnZleVByb3BvcnRpb24sXHJcbiAgVlhTdXJ2ZXlFdmFsdWF0aW9uLFxyXG4gIFZYU3VydmV5TWF0cml4UmFkaW8sXHJcbiAgVlhTdXJ2ZXlNYXRyaXhDaGVja0JveCxcclxuICBWWFN1cnZleU1hdHJpeFNjb3JlLFxyXG4gIFZYU3VydmV5TWF0cml4SW5wdXQsXHJcbiAgVlhTdXJ2ZXlJbnB1dEdyb3VwXHJcblxyXG59IGZyb20gXCIuL3R5cGVzL3R5cGVzXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFZYRm9ybVdyYXBwZXJGb3JtRmllbGQgfSBmcm9tIFwiLi93cmFwcGVycy93cmFwcGVyc1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZEdyb3VwIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2dyb3VwXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkUmVwZWF0IH0gZnJvbSBcIi4vdGVtcGxhdGVzL3JlcGVhdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVfQ09NUE9ORU5UUyA9IFtcclxuXHJcbiAgVlhTdXJ2ZXlSYWRpbyxcclxuICBWWFN1cnZleUNoZWNrQm94LFxyXG4gIFZYU3VydmV5RHJvcGRvd24sXHJcbiAgVlhTdXJ2ZXlDYXNjYWRlcixcclxuICBWWFN1cnZleVNjYWxlcixcclxuICBWWFN1cnZleVNjb3JlLFxyXG4gIFZYU3VydmV5TGluZSxcclxuICBWWFN1cnZleVJlbWFyayxcclxuICBWWFN1cnZleUlucHV0LFxyXG4gIFZYU3VydmV5RGF0ZSxcclxuICBWWFN1cnZleVRpbWUsXHJcbiAgVlhTdXJ2ZXlOUFMsXHJcbiAgVlhTdXJ2ZXlQcm9wb3J0aW9uLFxyXG4gIFZYU3VydmV5RXZhbHVhdGlvbixcclxuICBWWFN1cnZleU1hdHJpeFJhZGlvLFxyXG4gIFZYU3VydmV5TWF0cml4Q2hlY2tCb3gsXHJcbiAgVlhTdXJ2ZXlNYXRyaXhTY29yZSxcclxuICBWWFN1cnZleU1hdHJpeElucHV0LFxyXG4gIFZYU3VydmV5SW5wdXRHcm91cCxcclxuXHJcbiAgLy8gdHlwZXMgXHJcbiAgVlhTdXJ2ZXlSYWRpb0dyb3VwLCBcclxuXHJcbiAgLy90ZW1wbGF0ZXNcclxuICBWWFN1cnZleURyYWdEcm9wLFxyXG4gIFZYRm9ybUZpZWxkR3JvdXAsXHJcbiAgVlhGb3JtRmllbGRSZXBlYXQsXHJcblxyXG4gIC8vIHdyYXBwZXJzXHJcbiAgVlhGb3JtV3JhcHBlckZvcm1GaWVsZFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJPT1RTVFJBUF9WWEZPUk1fQ09ORklHOiBDb25maWdPcHRpb24gPSB7XHJcbiAgdHlwZXM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYWRpb1wiLCBjb21wb25lbnQ6IFZYU3VydmV5UmFkaW8sd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY2hlY2tib3hcIiwgY29tcG9uZW50OiBWWFN1cnZleUNoZWNrQm94LHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImRyb3Bkb3duXCIsIGNvbXBvbmVudDogVlhTdXJ2ZXlEcm9wZG93bix3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjYXNjYWRlclwiLCBjb21wb25lbnQ6IFZYU3VydmV5Q2FzY2FkZXIsd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2NhbGVyXCIsIGNvbXBvbmVudDogVlhTdXJ2ZXlTY2FsZXIsd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2NvcmVcIiwgY29tcG9uZW50OiBWWFN1cnZleVNjb3JlLHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImxpbmVcIiwgY29tcG9uZW50OiBWWFN1cnZleUxpbmUsd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmVtYXJrXCIsIGNvbXBvbmVudDogVlhTdXJ2ZXlSZW1hcmssd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaW5wdXRcIiwgY29tcG9uZW50OiBWWFN1cnZleUlucHV0LHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImRhdGVcIiwgY29tcG9uZW50OiBWWFN1cnZleURhdGUsd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwidGltZVwiLCBjb21wb25lbnQ6IFZYU3VydmV5VGltZSx3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJucHNcIiwgY29tcG9uZW50OiBWWFN1cnZleU5QUyx3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJwcm9wb3J0aW9uXCIsIGNvbXBvbmVudDogVlhTdXJ2ZXlQcm9wb3J0aW9uLHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LCAgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZXZhbHVhdGlvblwiLCBjb21wb25lbnQ6IFZYU3VydmV5RXZhbHVhdGlvbix3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibWF0cml4X3JhZGlvXCIsIGNvbXBvbmVudDogVlhTdXJ2ZXlNYXRyaXhSYWRpbyx3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibWF0cml4X2NoZWNrYm94XCIsIGNvbXBvbmVudDogVlhTdXJ2ZXlNYXRyaXhDaGVja0JveCx3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJtYXRyaXhfc2NvcmVcIiwgY29tcG9uZW50OiBWWFN1cnZleU1hdHJpeFNjb3JlLHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LCBcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJtYXRyaXhfaW5wdXRcIiwgY29tcG9uZW50OiBWWFN1cnZleU1hdHJpeElucHV0LHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LCAgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiaW5wdXRfZ3JvdXBcIiwgY29tcG9uZW50OiBWWFN1cnZleUlucHV0R3JvdXAsd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sICBcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJkcmFnLWRyb3BcIiwgY29tcG9uZW50OiBWWFN1cnZleURyYWdEcm9wXHJcbiAgICB9LFxyXG4gICAgeyBuYW1lOiBcImdyb3VwXCIsIGNvbXBvbmVudDogVlhGb3JtRmllbGRHcm91cCB9LFxyXG4gICAgeyBuYW1lOiBcInJlcGVhdFwiLCBjb21wb25lbnQ6IFZYRm9ybUZpZWxkUmVwZWF0IH0sXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInJhZGlvZ3JvdXBcIixcclxuICAgICAgY29tcG9uZW50OiBWWFN1cnZleVJhZGlvR3JvdXAsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9IFxyXG4gIF0sXHJcbiAgd3JhcHBlcnM6IFt7IG5hbWU6IFwiZm9ybS1maWVsZFwiLCBjb21wb25lbnQ6IFZYRm9ybVdyYXBwZXJGb3JtRmllbGQgfV1cclxufTtcclxuIl19