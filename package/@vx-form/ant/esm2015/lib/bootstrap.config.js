/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { VXFormFieldText, VXFormFieldTextI18n, VXFormFieldTextArea, VXFormFieldNumber, VXFormFieldPassWord, VXFormFieldRadio, VXFormFieldRadioGroup, VXFormFieldCheckbox, VXFormFieldCheckboxGroup, VXFormFieldSelect, VXFormFieldDateTime, VXFormFieldImage, VXFormFieldUpload, VXFormFieldLookUp, VXFormFieldHTML, VXFormFieldLine } from "./types/types";
import { VXFormWrapperFormField } from "./wrappers/wrappers";
import { VXFormFieldGroup } from "./templates/group";
import { VXFormFieldRepeat } from "./templates/repeat";
/** @type {?} */
export const FIELD_TYPE_COMPONENTS = [
    // types
    VXFormFieldText,
    VXFormFieldTextI18n,
    VXFormFieldTextArea,
    VXFormFieldNumber,
    VXFormFieldPassWord,
    VXFormFieldRadio,
    VXFormFieldRadioGroup,
    VXFormFieldCheckbox,
    VXFormFieldCheckboxGroup,
    VXFormFieldSelect,
    VXFormFieldDateTime,
    VXFormFieldImage,
    VXFormFieldUpload,
    VXFormFieldLookUp,
    VXFormFieldHTML,
    VXFormFieldLine,
    //templates
    VXFormFieldGroup,
    VXFormFieldRepeat,
    // wrappers
    VXFormWrapperFormField
];
/** @type {?} */
export const BOOTSTRAP_VXFORM_CONFIG = {
    types: [
        {
            name: "text",
            component: VXFormFieldText,
            wrappers: ["form-field"]
        },
        {
            name: "texti18n",
            component: VXFormFieldTextI18n,
            wrappers: ["form-field"]
        },
        {
            name: "textarea",
            component: VXFormFieldTextArea,
            wrappers: ["form-field"]
        },
        {
            name: "number",
            component: VXFormFieldNumber,
            wrappers: ["form-field"]
        },
        {
            name: "password",
            component: VXFormFieldPassWord,
            wrappers: ["form-field"]
        },
        {
            name: "radio",
            component: VXFormFieldRadio,
            wrappers: ["form-field"]
        },
        {
            name: "radiogroup",
            component: VXFormFieldRadioGroup,
            wrappers: ["form-field"]
        },
        {
            name: "checkbox",
            component: VXFormFieldCheckbox,
            wrappers: ["form-field"]
        },
        {
            name: "checkboxgroup",
            component: VXFormFieldCheckboxGroup,
            wrappers: ["form-field"]
        },
        {
            name: "select",
            component: VXFormFieldSelect,
            wrappers: ["form-field"]
        },
        {
            name: "datetime",
            component: VXFormFieldDateTime,
            wrappers: ["form-field"]
        },
        {
            name: "image",
            component: VXFormFieldImage,
            wrappers: ["form-field"]
        },
        {
            name: "upload",
            component: VXFormFieldUpload,
            wrappers: ["form-field"]
        },
        {
            name: "lookup",
            component: VXFormFieldLookUp,
            wrappers: ["form-field"]
        },
        {
            name: "html",
            component: VXFormFieldHTML,
            wrappers: ["form-field"]
        },
        {
            name: "line",
            component: VXFormFieldLine,
            wrappers: ["form-field"]
        },
        { name: "group", component: VXFormFieldGroup },
        { name: "repeat", component: VXFormFieldRepeat }
    ],
    wrappers: [{ name: "form-field", component: VXFormWrapperFormField }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQix3QkFBd0IsRUFDeEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsZUFBZSxFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLHFCQUFxQixHQUFHO0lBQ25DLFFBQVE7SUFDUixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBRWYsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFFakIsV0FBVztJQUNYLHNCQUFzQjtDQUN2Qjs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQWlCO0lBQ25ELEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsZUFBZTtZQUMxQixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDekI7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVO1lBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN6QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN6QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDekI7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDekI7UUFDRDtZQUNFLElBQUksRUFBRSxZQUFZO1lBQ2xCLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN6QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLHdCQUF3QjtZQUNuQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDekI7UUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxFQUFFLGlCQUFpQjtZQUM1QixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDekI7UUFDRDtZQUNFLElBQUksRUFBRSxVQUFVO1lBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7WUFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsRUFBRSxpQkFBaUI7WUFDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsRUFBRSxpQkFBaUI7WUFDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxlQUFlO1lBQzFCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN6QjtRQUNEO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsZUFBZTtZQUMxQixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDekI7UUFDRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO1FBQzlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7S0FDakQ7SUFDRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLENBQUM7Q0FDdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdPcHRpb24gfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBcclxuICBWWEZvcm1GaWVsZFRleHQsXHJcbiAgVlhGb3JtRmllbGRUZXh0STE4bixcclxuICBWWEZvcm1GaWVsZFRleHRBcmVhLFxyXG4gIFZYRm9ybUZpZWxkTnVtYmVyLFxyXG4gIFZYRm9ybUZpZWxkUGFzc1dvcmQsXHJcbiAgVlhGb3JtRmllbGRSYWRpbyxcclxuICBWWEZvcm1GaWVsZFJhZGlvR3JvdXAsXHJcbiAgVlhGb3JtRmllbGRDaGVja2JveCxcclxuICBWWEZvcm1GaWVsZENoZWNrYm94R3JvdXAsXHJcbiAgVlhGb3JtRmllbGRTZWxlY3QsXHJcbiAgVlhGb3JtRmllbGREYXRlVGltZSxcclxuICBWWEZvcm1GaWVsZEltYWdlLFxyXG4gIFZYRm9ybUZpZWxkVXBsb2FkLFxyXG4gIFZYRm9ybUZpZWxkTG9va1VwLFxyXG4gIFZYRm9ybUZpZWxkSFRNTCxcclxuICBWWEZvcm1GaWVsZExpbmVcclxuXHJcbn0gZnJvbSBcIi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHsgVlhGb3JtV3JhcHBlckZvcm1GaWVsZCB9IGZyb20gXCIuL3dyYXBwZXJzL3dyYXBwZXJzXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkR3JvdXAgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvZ3JvdXBcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRSZXBlYXQgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvcmVwZWF0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRklFTERfVFlQRV9DT01QT05FTlRTID0gW1xyXG4gIC8vIHR5cGVzXHJcbiAgVlhGb3JtRmllbGRUZXh0LFxyXG4gIFZYRm9ybUZpZWxkVGV4dEkxOG4sXHJcbiAgVlhGb3JtRmllbGRUZXh0QXJlYSxcclxuICBWWEZvcm1GaWVsZE51bWJlcixcclxuICBWWEZvcm1GaWVsZFBhc3NXb3JkLFxyXG4gIFZYRm9ybUZpZWxkUmFkaW8sXHJcbiAgVlhGb3JtRmllbGRSYWRpb0dyb3VwLFxyXG4gIFZYRm9ybUZpZWxkQ2hlY2tib3gsXHJcbiAgVlhGb3JtRmllbGRDaGVja2JveEdyb3VwLFxyXG4gIFZYRm9ybUZpZWxkU2VsZWN0LFxyXG4gIFZYRm9ybUZpZWxkRGF0ZVRpbWUsXHJcbiAgVlhGb3JtRmllbGRJbWFnZSxcclxuICBWWEZvcm1GaWVsZFVwbG9hZCxcclxuICBWWEZvcm1GaWVsZExvb2tVcCxcclxuICBWWEZvcm1GaWVsZEhUTUwsXHJcbiAgVlhGb3JtRmllbGRMaW5lLFxyXG5cclxuICAvL3RlbXBsYXRlc1xyXG4gIFZYRm9ybUZpZWxkR3JvdXAsXHJcbiAgVlhGb3JtRmllbGRSZXBlYXQsXHJcblxyXG4gIC8vIHdyYXBwZXJzXHJcbiAgVlhGb3JtV3JhcHBlckZvcm1GaWVsZFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJPT1RTVFJBUF9WWEZPUk1fQ09ORklHOiBDb25maWdPcHRpb24gPSB7XHJcbiAgdHlwZXM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJ0ZXh0XCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGRUZXh0LFxyXG4gICAgICB3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJ0ZXh0aTE4blwiLFxyXG4gICAgICBjb21wb25lbnQ6IFZYRm9ybUZpZWxkVGV4dEkxOG4sXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInRleHRhcmVhXCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGRUZXh0QXJlYSxcclxuICAgICAgd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibnVtYmVyXCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGROdW1iZXIsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGRQYXNzV29yZCxcclxuICAgICAgd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFkaW9cIixcclxuICAgICAgY29tcG9uZW50OiBWWEZvcm1GaWVsZFJhZGlvLFxyXG4gICAgICB3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYWRpb2dyb3VwXCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGRSYWRpb0dyb3VwLFxyXG4gICAgICB3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjaGVja2JveFwiLFxyXG4gICAgICBjb21wb25lbnQ6IFZYRm9ybUZpZWxkQ2hlY2tib3gsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNoZWNrYm94Z3JvdXBcIixcclxuICAgICAgY29tcG9uZW50OiBWWEZvcm1GaWVsZENoZWNrYm94R3JvdXAsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNlbGVjdFwiLFxyXG4gICAgICBjb21wb25lbnQ6IFZYRm9ybUZpZWxkU2VsZWN0LFxyXG4gICAgICB3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJkYXRldGltZVwiLFxyXG4gICAgICBjb21wb25lbnQ6IFZYRm9ybUZpZWxkRGF0ZVRpbWUsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImltYWdlXCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGRJbWFnZSxcclxuICAgICAgd3JhcHBlcnM6IFtcImZvcm0tZmllbGRcIl1cclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInVwbG9hZFwiLFxyXG4gICAgICBjb21wb25lbnQ6IFZYRm9ybUZpZWxkVXBsb2FkLFxyXG4gICAgICB3cmFwcGVyczogW1wiZm9ybS1maWVsZFwiXVxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibG9va3VwXCIsXHJcbiAgICAgIGNvbXBvbmVudDogVlhGb3JtRmllbGRMb29rVXAsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImh0bWxcIixcclxuICAgICAgY29tcG9uZW50OiBWWEZvcm1GaWVsZEhUTUwsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImxpbmVcIixcclxuICAgICAgY29tcG9uZW50OiBWWEZvcm1GaWVsZExpbmUsXHJcbiAgICAgIHdyYXBwZXJzOiBbXCJmb3JtLWZpZWxkXCJdXHJcbiAgICB9LFxyXG4gICAgeyBuYW1lOiBcImdyb3VwXCIsIGNvbXBvbmVudDogVlhGb3JtRmllbGRHcm91cCB9LFxyXG4gICAgeyBuYW1lOiBcInJlcGVhdFwiLCBjb21wb25lbnQ6IFZYRm9ybUZpZWxkUmVwZWF0IH1cclxuICBdLFxyXG4gIHdyYXBwZXJzOiBbeyBuYW1lOiBcImZvcm0tZmllbGRcIiwgY29tcG9uZW50OiBWWEZvcm1XcmFwcGVyRm9ybUZpZWxkIH1dXHJcbn07XHJcbiJdfQ==