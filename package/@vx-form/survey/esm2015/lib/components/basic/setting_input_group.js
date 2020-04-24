/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingInputGroup {
    constructor() {
        this.questionField = {
            key: "",
            type: "input_group",
            templateOptions: {
                label: "",
                required: false,
                options: []
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
VXSurveySettingInputGroup.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-input_group",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>{{field|json}}
      </div>  
    </div> 
     
  `
            }] }
];
/** @nocollapse */
VXSurveySettingInputGroup.ctorParameters = () => [];
VXSurveySettingInputGroup.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingInputGroup.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19pbnB1dF9ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfaW5wdXRfZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBeUJ2QixNQUFNLE9BQU8seUJBQXlCO0lBZ0JwQztRQWRBLGtCQUFhLEdBQUs7WUFDaEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUMsYUFBYTtZQUNsQixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFDLEVBQUU7YUFDWDtTQUNGLENBQUM7SUFNYSxDQUFDOzs7OztJQUxoQixJQUFhLEtBQUssQ0FBQyxLQUF3QjtRQUN6QyxJQUFHLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLFNBQVMsRUFBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFHRCxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixXQUFXLENBQUMsT0FBc0IsSUFBRyxDQUFDOzs7WUF6Q3ZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7YUFFRjs7Ozs7b0JBWUUsS0FBSzs7OztJQVROLGtEQVFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctaW5wdXRfZ3JvdXBcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPnt7ZmllbGR8anNvbn19XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj4gXHJcbiAgICAgXHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ0lucHV0R3JvdXAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgXHJcbiAgcXVlc3Rpb25GaWVsZDphbnk9e1xyXG4gICAga2V5OiBcIlwiLFxyXG4gICAgdHlwZTpcImlucHV0X2dyb3VwXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsIFxyXG4gICAgICBvcHRpb25zOltdIFxyXG4gICAgfSBcclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgIFxyXG4gICAgaWYodmFsdWUhPW51bGwgJiYgdmFsdWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlOyBcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG59XHJcbiJdfQ==