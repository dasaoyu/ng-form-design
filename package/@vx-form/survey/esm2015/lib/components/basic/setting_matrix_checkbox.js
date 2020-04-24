/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingMatrixCheckBox {
    constructor() {
        this.questionField = {
            key: "",
            type: "matrix_checkbox",
            templateOptions: {
                label: "",
                required: false,
                options: [],
                subtitle: []
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
VXSurveySettingMatrixCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-matrix_checkbox",
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
          <label>设置</label>
      </div>  
    </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingMatrixCheckBox.ctorParameters = () => [];
VXSurveySettingMatrixCheckBox.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingMatrixCheckBox.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19tYXRyaXhfY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX21hdHJpeF9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUF3QnZCLE1BQU0sT0FBTyw2QkFBNkI7SUFpQnhDO1FBZkEsa0JBQWEsR0FBUTtZQUNuQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBQyxFQUFFO2FBQ1o7U0FDRixDQUFDO0lBTWMsQ0FBQzs7Ozs7SUFMakIsSUFBYSxLQUFLLENBQUMsS0FBd0I7UUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWQsV0FBVyxDQUFDLE9BQXNCLElBQUksQ0FBQzs7O1lBekN4QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDthQUVGOzs7OztvQkFhRSxLQUFLOzs7O0lBVk4sc0RBU0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLW1hdHJpeF9jaGVja2JveFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3JlcXVpcmVkJ11cIj48L256LXN3aXRjaD4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6YC76L6R6K6+572uPC9zcGFuPlxyXG4gICAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj4gXHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ01hdHJpeENoZWNrQm94IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gXHJcbiAgcXVlc3Rpb25GaWVsZDogYW55ID0ge1xyXG4gICAga2V5OiBcIlwiLFxyXG4gICAgdHlwZTogXCJtYXRyaXhfY2hlY2tib3hcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSwgXHJcbiAgICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgICBzdWJ0aXRsZTpbXVxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IH1cclxufVxyXG4iXX0=