/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingCascader {
    constructor() {
        this.questionField = {
            key: "",
            type: "cascader",
            templateOptions: {
                label: "",
                required: false
            }
        };
        this.questionField = {
            key: "",
            type: "cascader",
            templateOptions: {
                label: "",
                required: false
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
VXSurveySettingCascader.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-cascader",
                template: ` 
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField.templateOptions['required']"></nz-switch> 
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
VXSurveySettingCascader.ctorParameters = () => [];
VXSurveySettingCascader.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingCascader.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19jYXNjYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfY2FzY2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBd0J2QixNQUFNLE9BQU8sdUJBQXVCO0lBZWxDO1FBYkEsa0JBQWEsR0FBTztZQUNsQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxVQUFVO1lBQ2hCLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFPRCxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQztJQUNILENBQUM7Ozs7O0lBZEYsSUFBYSxLQUFLLENBQUMsS0FBd0I7UUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBWUQsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWQsV0FBVyxDQUFDLE9BQXNCLElBQUksQ0FBQzs7O1lBaER4QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDthQUVGOzs7OztvQkFXRSxLQUFLOzs7O0lBUk4sZ0RBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLWNhc2NhZGVyXCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1sncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD57e2ZpZWxkfGpzb259fVxyXG4gICAgICA8L2Rpdj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nQ2FzY2FkZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55ID0geyBcclxuICAgIGtleTogXCJcIixcclxuICAgIHR5cGU6IFwiY2FzY2FkZXJcIixcclxuICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICBsYWJlbDogXCJcIixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB7IFxyXG4gICAgICBrZXk6IFwiXCIsXHJcbiAgICAgIHR5cGU6IFwiY2FzY2FkZXJcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XHJcbn1cclxuIl19