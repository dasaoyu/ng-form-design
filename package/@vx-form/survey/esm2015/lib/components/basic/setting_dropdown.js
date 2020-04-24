/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingDropdown {
    constructor() {
        this.questionField = {
            key: "",
            type: "dropdown",
            templateOptions: {
                label: "",
                setting: {
                    score: 0
                },
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
VXSurveySettingDropdown.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-dropdown",
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
      <div  class="item">
          <span>题目总分数</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['score']"></nz-input-number>
      </div>  
    </div> 
    <div class="setting_wrap_option"> 
      <div class="title">选项设置</div>
      <ng-container *ngFor="let item of questionField.templateOptions['options']">
      <div class="item q_title">
          <span>{{item.label}}</span>
      </div>
      <div class="item q_sore">
          <span>选项分数</span>
          <span>分</span>
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" style="width: 40px;"  [(ngModel)]="item['score']"></nz-input-number>
      </div> 
      </ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingDropdown.ctorParameters = () => [];
VXSurveySettingDropdown.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingDropdown.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19kcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBeUN2QixNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQztRQWhCQSxrQkFBYSxHQUFRO1lBQ25CLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULE9BQU8sRUFBQztvQkFDTixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxPQUFPLEVBQUUsRUFBRTthQUNaO1NBQ0YsQ0FBQztJQU1jLENBQUM7Ozs7O0lBTGpCLElBQWEsS0FBSyxDQUFDLEtBQXdCO1FBQ3pDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUdELFFBQVEsS0FBSyxDQUFDOzs7OztJQUVkLFdBQVcsQ0FBQyxPQUFzQixJQUFJLENBQUM7OztZQTFEeEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Q7YUFFRjs7Ozs7b0JBYUUsS0FBSzs7OztJQVhOLGdEQVVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1kcm9wZG93blwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7popjnm67mgLvliIbmlbA8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zWydzZXR0aW5nJ11bJ3Njb3JlJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfb3B0aW9uXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnorr7nva48L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snb3B0aW9ucyddXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9zb3JlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgInpobnliIbmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIHN0eWxlPVwid2lkdGg6IDQwcHg7XCIgIFsobmdNb2RlbCldPVwiaXRlbVsnc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ0Ryb3Bkb3duIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgeyBcclxuICBxdWVzdGlvbkZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcImRyb3Bkb3duXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsICBcclxuICAgICAgc2V0dGluZzp7IFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sIFxyXG4gICAgICBvcHRpb25zOiBbXVxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IH1cclxufSJdfQ==