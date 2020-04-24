/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, ViewChild } from "@angular/core";
import { DataService } from "../../service/data.service";
var VXFormArea = /** @class */ (function () {
    function VXFormArea(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.nodes = [];
    }
    /**
     * @return {?}
     */
    VXFormArea.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataService.getTreeData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.nodes = res;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormArea.prototype.nzEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @return {?}
     */
    VXFormArea.prototype.submitForm = /**
     * @return {?}
     */
    function () { };
    VXFormArea.decorators = [
        { type: Component, args: [{
                    selector: "vxform-area",
                    template: "\u53C2\u6570\uFF1A{{fieldConfig|json}}",
                    providers: [DataService],
                    styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    VXFormArea.ctorParameters = function () { return [
        { type: DataService }
    ]; };
    VXFormArea.propDecorators = {
        fieldConfig: [{ type: Output }],
        nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
    };
    return VXFormArea;
}());
export { VXFormArea };
if (false) {
    /** @type {?} */
    VXFormArea.prototype.fieldConfig;
    /** @type {?} */
    VXFormArea.prototype.nzTreeComponent;
    /** @type {?} */
    VXFormArea.prototype.nodes;
    /** @type {?} */
    VXFormArea.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXJlYS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpEO0lBWUUsb0JBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGpDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUk5QyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ21DLENBQUM7Ozs7SUFFL0MsNkJBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQVE7WUFDaEQsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUNELDRCQUFPOzs7O0lBQVAsVUFBUSxLQUF3QixJQUFTLENBQUM7Ozs7SUFDMUMsK0JBQVU7OztJQUFWLGNBQWMsQ0FBQzs7Z0JBcEJoQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGtEQUFxQztvQkFFckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOztpQkFDekI7Ozs7Z0JBUFEsV0FBVzs7OzhCQVNqQixNQUFNO2tDQUNOLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBYWpELGlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSxVQUFVOzs7SUFDckIsaUNBQThDOztJQUM5QyxxQ0FDNkM7O0lBRTdDLDJCQUFXOztJQUNDLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtQnVpbGRlcixcclxuICBWYWxpZGF0b3JzLFxyXG4gIEFic3RyYWN0Q29udHJvbFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tIFwibmctem9ycm8tYW50ZC90cmVlXCI7XHJcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50LCBOelRyZWVOb2RlT3B0aW9ucyB9IGZyb20gXCJuZy16b3Jyby1hbnRkL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBGaWVsZFdyYXBwZXIsXHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhUYWJsZUZpZWxkQ29uZmlnXHJcbn0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4Zm9ybS1hcmVhXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUFyZWEgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKSBmaWVsZENvbmZpZzogVlhGb3JtRmllbGRDb25maWcgPSB7fTtcclxuICBAVmlld0NoaWxkKFwibnpUcmVlQ29tcG9uZW50XCIsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIG56VHJlZUNvbXBvbmVudDogTnpUcmVlQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xyXG5cclxuICBub2RlcyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRUcmVlRGF0YSgpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5ub2RlcyA9IHJlcztcclxuICAgIH0pO1xyXG4gIH1cclxuICBuekV2ZW50KGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge31cclxuICBzdWJtaXRGb3JtKCkge31cclxufVxyXG4iXX0=