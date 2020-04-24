/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingLine {
    constructor() {
        this.questionField = {
            key: "",
            type: "line"
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
VXSurveySettingLine.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-line",
                template: `
    <div class="setting_wrap_title">
    <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
      <div class="item">
          <span>暂无</span> 
      </div> 
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingLine.ctorParameters = () => [];
VXSurveySettingLine.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingLine.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19saW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQW1CdkIsTUFBTSxPQUFPLG1CQUFtQjtJQVc5QjtRQVRBLGtCQUFhLEdBQUs7WUFDaEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUMsTUFBTTtTQUNaLENBQUM7SUFNYSxDQUFDOzs7OztJQUxoQixJQUFhLEtBQUssQ0FBQyxLQUF3QjtRQUN6QyxJQUFHLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLFNBQVMsRUFBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFHRCxRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixXQUFXLENBQUMsT0FBc0IsSUFBRyxDQUFDOzs7WUE5QnZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDthQUVGOzs7OztvQkFPRSxLQUFLOzs7O0lBSk4sNENBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1saW5lXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuaaguaXoDwvc3Bhbj4gXHJcbiAgICAgIDwvZGl2PiBcclxuICAgIDwvZGl2PlxyXG4gIGBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleVNldHRpbmdMaW5lIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55PXtcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6XCJsaW5lXCJcclxuICB9O1xyXG4gIEBJbnB1dCgpIHNldCBmaWVsZCh2YWx1ZTogVlhGb3JtRmllbGRDb25maWcpIHsgIFxyXG4gICAgaWYodmFsdWUhPW51bGwgJiYgdmFsdWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlOyBcclxuICAgIH1cclxuICB9IFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7fVxyXG59XHJcbiJdfQ==