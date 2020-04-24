/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXFormDesignFieldLabel {
    constructor() {
        this.formField = {
            key: "",
            type: "html",
            templateOptions: {
                label: "",
                description: "",
                parameterid: "",
                treeid: "",
                controlid: "",
                maxLength: 50,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: ""
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
        this.formField = Object.assign({}, this.formField, value);
        console.log(this.formField);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    submitForm() { }
    /**
     * @return {?}
     */
    checkSave() {
        return true;
    }
}
VXFormDesignFieldLabel.decorators = [
    { type: Component, args: [{
                selector: "vxform-design-fieldlabel",
                template: "<textarea nz-input [nzAutosize]=\"{ minRows: 20, maxRows: 6 }\"\r\n    [(ngModel)]=\"formField.templateOptions['description']\"></textarea>",
                styles: [""]
            }] }
];
/** @nocollapse */
VXFormDesignFieldLabel.ctorParameters = () => [];
VXFormDesignFieldLabel.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXFormDesignFieldLabel.prototype.formField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi9maWVsZC1sYWJlbC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBbUJqRSxNQUFNLE9BQU8sc0JBQXNCO0lBOEJqQztRQTdCQSxjQUFTLEdBQVE7WUFDZixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBQyxNQUFNO1lBQ1gsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFdBQVcsRUFBRSxFQUFFO2dCQUNmLFdBQVcsRUFBRSxFQUFFO2dCQUNmLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLElBQUksRUFBRSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRCxNQUFNLEVBQUU7Z0JBQ04saUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDYjtTQUNGLENBQUM7SUFNYSxDQUFDOzs7OztJQUxoQixJQUFhLEtBQUssQ0FBQyxLQUF3QjtRQUN6QyxJQUFJLENBQUMsU0FBUyxxQkFBUSxJQUFJLENBQUMsU0FBUyxFQUFLLEtBQUssQ0FBRSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxRQUFRLEtBQUksQ0FBQzs7OztJQUViLFVBQVUsS0FBSSxDQUFDOzs7O0lBRWYsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyx1SkFBcUM7O2FBRXRDOzs7OztvQkEwQkUsS0FBSzs7OztJQXhCTiwyQ0F1QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIFZhbGlkYXRvcnMsXHJcbiAgQWJzdHJhY3RDb250cm9sXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgRmllbGRXcmFwcGVyLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZYVGFibGVGaWVsZENvbmZpZyxcclxuICBjbG9uZVxyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZGVzaWduLWZpZWxkbGFiZWxcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2ZpZWxkLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2ZpZWxkLmNvbXBvbmVudC5sZXNzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1EZXNpZ25GaWVsZExhYmVsIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtRmllbGQ6IGFueSA9IHtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6XCJodG1sXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBwYXJhbWV0ZXJpZDogXCJcIixcclxuICAgICAgdHJlZWlkOiBcIlwiLFxyXG4gICAgICBjb250cm9saWQ6IFwiXCIsXHJcbiAgICAgIG1heExlbmd0aDogNTAsXHJcbiAgICAgIG1pbkxlbmd0aDogMCxcclxuICAgICAgbWF4OiAwLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIHByZWNpc2lvbjogMCxcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgdGlwczogXCJcIixcclxuICAgICAgcGF0dGVybjogXCJcIlxyXG4gICAgfSxcclxuICAgIG9yaWdpbjoge1xyXG4gICAgICByZWZkYXRhc291cmNldHlwZTogXCJcIixcclxuICAgICAgZGF0YXR5cGU6IFwiXCJcclxuICAgIH1cclxuICB9OyBcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICB0aGlzLmZvcm1GaWVsZCA9IHsgLi4udGhpcy5mb3JtRmllbGQsIC4uLnZhbHVlIH07IFxyXG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtRmllbGQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHN1Ym1pdEZvcm0oKSB7fVxyXG5cclxuICBjaGVja1NhdmUoKXtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=