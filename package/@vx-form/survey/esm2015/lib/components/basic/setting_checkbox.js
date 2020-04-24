/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingCheckBox {
    constructor() {
        this.questionField = {
            key: "",
            type: "checkbox",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                    random: false,
                    layout: "1",
                    min: 0,
                    //最少选N项
                    max: 0,
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
VXSurveySettingCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-checkbox",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div> 
      <div  class="item">
          <span>布局</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['setting']['layout']">
              <label nz-radio-button nzValue="1">单列</label>
              <label nz-radio-button nzValue="2">2列</label>
              <label nz-radio-button nzValue="3">3列</label>
            </nz-radio-group>
      </div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div  class="item">
          <span>随机排列</span> 
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['random']"></nz-switch>
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>
      </div> 
      <div class="item">
          <span>题目总分数</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['score']"></nz-input-number>
      </div>
      <div  class="item">
          <span>最少可选</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['setting']['min']"></nz-input-number>
      </div>
      <div  class="item">
          <span>最多可选</span> 
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small"  [(ngModel)]="questionField.templateOptions['setting']['max']"></nz-input-number>
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
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="item['score']"></nz-input-number>
      </div> 
      </ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingCheckBox.ctorParameters = () => [];
VXSurveySettingCheckBox.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingCheckBox.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19jaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBNkR2QixNQUFNLE9BQU8sdUJBQXVCO0lBc0JsQztRQXJCQSxrQkFBYSxHQUFRO1lBQ25CLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBQztvQkFDTixLQUFLLEVBQUUsQ0FBQztvQkFDUixNQUFNLEVBQUUsS0FBSztvQkFDYixNQUFNLEVBQUMsR0FBRztvQkFDVixHQUFHLEVBQUUsQ0FBQzs7b0JBQ04sR0FBRyxFQUFFLENBQUM7aUJBQ1A7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7YUFDWjtTQUNGLENBQUM7SUFNYyxDQUFDOzs7OztJQUxqQixJQUFhLEtBQUssQ0FBQyxLQUF3QjtRQUN6QyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFHRCxRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZCxXQUFXLENBQUMsT0FBc0IsSUFBSSxDQUFDOzs7WUFuRnhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRFQ7YUFFRjs7Ozs7b0JBa0JFLEtBQUs7Ozs7SUFoQk4sZ0RBZUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eHN1cnZleS1zZXR0aW5nLWNoZWNrYm94XCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5biD5bGAPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXJhZGlvLWdyb3VwIFtuelNpemVdPVwiJ3NtYWxsJ1wiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3NldHRpbmcnXVsnbGF5b3V0J11cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCIxXCI+5Y2V5YiXPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCIyXCI+MuWIlzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiM1wiPjPliJc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pmo/mnLrmjpLliJc8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3NldHRpbmcnXVsncmFuZG9tJ11cIj48L256LXN3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6aKY55uu5oC75YiG5pWwPC9zcGFuPiBcclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snc2V0dGluZyddWydzY29yZSddXCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuacgOWwkeWPr+mAiTwvc3Bhbj4gXHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZC50ZW1wbGF0ZU9wdGlvbnNbJ3NldHRpbmcnXVsnbWluJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5pyA5aSa5Y+v6YCJPC9zcGFuPiBcclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZC50ZW1wbGF0ZU9wdGlvbnNbJ3NldHRpbmcnXVsnbWF4J11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfb3B0aW9uXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnorr7nva48L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snb3B0aW9ucyddXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9zb3JlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgInpobnliIbmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwiaXRlbVsnc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ0NoZWNrQm94IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgeyBcclxuICBxdWVzdGlvbkZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcImNoZWNrYm94XCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHNldHRpbmc6eyBcclxuICAgICAgICBzY29yZTogMCwgXHJcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICBsYXlvdXQ6XCIxXCIsIFxyXG4gICAgICAgIG1pbjogMCwgLy/mnIDlsJHpgIlO6aG5XHJcbiAgICAgICAgbWF4OiAwLCAvL+acgOWkmumAiU7pobkgXHJcbiAgICAgIH0sIFxyXG4gICAgICBvcHRpb25zOiBbXVxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25GaWVsZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IH1cclxufVxyXG4iXX0=