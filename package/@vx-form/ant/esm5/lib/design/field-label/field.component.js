/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
var VXFormDesignFieldLabel = /** @class */ (function () {
    function VXFormDesignFieldLabel() {
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
    Object.defineProperty(VXFormDesignFieldLabel.prototype, "field", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formField = tslib_1.__assign({}, this.formField, value);
            console.log(this.formField);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXFormDesignFieldLabel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VXFormDesignFieldLabel.prototype.submitForm = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    VXFormDesignFieldLabel.prototype.checkSave = /**
     * @return {?}
     */
    function () {
        return true;
    };
    VXFormDesignFieldLabel.decorators = [
        { type: Component, args: [{
                    selector: "vxform-design-fieldlabel",
                    template: "<textarea nz-input [nzAutosize]=\"{ minRows: 20, maxRows: 6 }\"\r\n    [(ngModel)]=\"formField.templateOptions['description']\"></textarea>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    VXFormDesignFieldLabel.ctorParameters = function () { return []; };
    VXFormDesignFieldLabel.propDecorators = {
        field: [{ type: Input }]
    };
    return VXFormDesignFieldLabel;
}());
export { VXFormDesignFieldLabel };
if (false) {
    /** @type {?} */
    VXFormDesignFieldLabel.prototype.formField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2Rlc2lnbi9maWVsZC1sYWJlbC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWNqRTtJQW1DRTtRQTdCQSxjQUFTLEdBQVE7WUFDZixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBQyxNQUFNO1lBQ1gsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFdBQVcsRUFBRSxFQUFFO2dCQUNmLFdBQVcsRUFBRSxFQUFFO2dCQUNmLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLElBQUksRUFBRSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRCxNQUFNLEVBQUU7Z0JBQ04saUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsUUFBUSxFQUFFLEVBQUU7YUFDYjtTQUNGLENBQUM7SUFNYSxDQUFDO0lBTGhCLHNCQUFhLHlDQUFLOzs7OztRQUFsQixVQUFtQixLQUF3QjtZQUN6QyxJQUFJLENBQUMsU0FBUyx3QkFBUSxJQUFJLENBQUMsU0FBUyxFQUFLLEtBQUssQ0FBRSxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBSUQseUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7OztJQUViLDJDQUFVOzs7SUFBVixjQUFjLENBQUM7Ozs7SUFFZiwwQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsdUpBQXFDOztpQkFFdEM7Ozs7O3dCQTBCRSxLQUFLOztJQWNSLDZCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F2Q1ksc0JBQXNCOzs7SUFDakMsMkNBdUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtQnVpbGRlcixcclxuICBWYWxpZGF0b3JzLFxyXG4gIEFic3RyYWN0Q29udHJvbFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIEZpZWxkV3JhcHBlcixcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgY2xvbmVcclxufSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLWRlc2lnbi1maWVsZGxhYmVsXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWVsZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9maWVsZC5jb21wb25lbnQubGVzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRGVzaWduRmllbGRMYWJlbCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybUZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwiaHRtbFwiLFxyXG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgcGFyYW1ldGVyaWQ6IFwiXCIsXHJcbiAgICAgIHRyZWVpZDogXCJcIixcclxuICAgICAgY29udHJvbGlkOiBcIlwiLFxyXG4gICAgICBtYXhMZW5ndGg6IDUwLFxyXG4gICAgICBtaW5MZW5ndGg6IDAsXHJcbiAgICAgIG1heDogMCxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBwcmVjaXNpb246IDAsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHRpcHM6IFwiXCIsXHJcbiAgICAgIHBhdHRlcm46IFwiXCJcclxuICAgIH0sXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiXCIsXHJcbiAgICAgIGRhdGF0eXBlOiBcIlwiXHJcbiAgICB9XHJcbiAgfTsgXHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5mb3JtRmllbGQgPSB7IC4uLnRoaXMuZm9ybUZpZWxkLCAuLi52YWx1ZSB9OyBcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUZpZWxkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBzdWJtaXRGb3JtKCkge31cclxuXHJcbiAgY2hlY2tTYXZlKCl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19