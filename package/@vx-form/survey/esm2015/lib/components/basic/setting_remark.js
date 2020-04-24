/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingRemark {
    constructor() {
        this.questionField = {
            key: "",
            type: "remark",
            templateOptions: {
                label: ""
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
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
}
VXSurveySettingRemark.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-remark",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingRemark.ctorParameters = () => [];
VXSurveySettingRemark.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingRemark.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19yZW1hcmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX3JlbWFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFvQnZCLE1BQU0sT0FBTyxxQkFBcUI7SUFjaEM7UUFaQSxrQkFBYSxHQUFLO1lBQ2hCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFDLFFBQVE7WUFDYixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7YUFDVjtTQUNGLENBQUM7SUFNYSxDQUFDOzs7OztJQUxoQixJQUFhLEtBQUssQ0FBQyxLQUF3QjtRQUN6QyxJQUFHLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLFNBQVMsRUFBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFHRCxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixXQUFXLENBQUMsT0FBc0IsSUFBRyxDQUFDOzs7WUFsQ3ZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7YUFFRjs7Ozs7b0JBVUUsS0FBSzs7OztJQVBOLDhDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctcmVtYXJrXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PiBcclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nUmVtYXJrIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55PXtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6XCJyZW1hcmtcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIiBcclxuICAgIH1cclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgIFxyXG4gICAgaWYodmFsdWUhPW51bGwgJiYgdmFsdWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlOyBcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG59XHJcbiJdfQ==