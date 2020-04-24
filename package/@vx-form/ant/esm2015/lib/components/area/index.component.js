/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, ViewChild } from "@angular/core";
import { DataService } from "../../service/data.service";
export class VXFormArea {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.fieldConfig = {};
        this.nodes = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataService.getTreeData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.nodes = res;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nzEvent(event) { }
    /**
     * @return {?}
     */
    submitForm() { }
}
VXFormArea.decorators = [
    { type: Component, args: [{
                selector: "vxform-area",
                template: "\u53C2\u6570\uFF1A{{fieldConfig|json}}",
                providers: [DataService],
                styles: [":host ::ng-deep .builder-content{width:100%;padding:0 0 0 12px}:host ::ng-deep .builder-content .content{width:50%;float:left;margin:0 0 15px;min-height:45px}:host ::ng-deep .builder-content .content .label{width:100%}:host ::ng-deep .builder-content .content .control{width:100%;padding:0 15px 0 0}:host ::ng-deep .builder-content .content .control .ant-input-number{width:100%!important}:host ::ng-deep .builder-content .textarea{width:100%}"]
            }] }
];
/** @nocollapse */
VXFormArea.ctorParameters = () => [
    { type: DataService }
];
VXFormArea.propDecorators = {
    fieldConfig: [{ type: Output }],
    nzTreeComponent: [{ type: ViewChild, args: ["nzTreeComponent", { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXJlYS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUXpELE1BQU0sT0FBTyxVQUFVOzs7O0lBTXJCLFlBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTGpDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUk5QyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ21DLENBQUM7Ozs7SUFFL0MsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxLQUF3QixJQUFTLENBQUM7Ozs7SUFDMUMsVUFBVSxLQUFJLENBQUM7OztZQXBCaEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixrREFBcUM7Z0JBRXJDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7YUFDekI7Ozs7WUFQUSxXQUFXOzs7MEJBU2pCLE1BQU07OEJBQ04sU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUQvQyxpQ0FBOEM7O0lBQzlDLHFDQUM2Qzs7SUFFN0MsMkJBQVc7O0lBQ0MsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIFZhbGlkYXRvcnMsXHJcbiAgQWJzdHJhY3RDb250cm9sXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE56VHJlZUNvbXBvbmVudCB9IGZyb20gXCJuZy16b3Jyby1hbnRkL3RyZWVcIjtcclxuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGVPcHRpb25zIH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEZpZWxkV3JhcHBlcixcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWFRhYmxlRmllbGRDb25maWdcclxufSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLWFyZWFcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2luZGV4LmNvbXBvbmVudC5sZXNzXCJdLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtQXJlYSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQE91dHB1dCgpIGZpZWxkQ29uZmlnOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gIEBWaWV3Q2hpbGQoXCJuelRyZWVDb21wb25lbnRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgbnpUcmVlQ29tcG9uZW50OiBOelRyZWVDb21wb25lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIG5vZGVzID0gW107XHJcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFRyZWVEYXRhKCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGVzID0gcmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG56RXZlbnQoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7fVxyXG4gIHN1Ym1pdEZvcm0oKSB7fVxyXG59XHJcbiJdfQ==