/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingRadio {
    constructor() {
        this.questionField = {
            key: "",
            type: "radio",
            templateOptions: {
                label: "",
                required: false,
                setting: {
                    score: 0,
                    random: false,
                    layout: "1"
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
VXSurveySettingRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-radio",
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
VXSurveySettingRadio.ctorParameters = () => [];
VXSurveySettingRadio.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingRadio.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19yYWRpby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBcUR2QixNQUFNLE9BQU8sb0JBQW9CO0lBcUIvQjtRQW5CQSxrQkFBYSxHQUFRO1lBQ25CLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFDO29CQUNOLEtBQUssRUFBRSxDQUFDO29CQUNSLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBQyxHQUFHO2lCQUNYO2dCQUNELE9BQU8sRUFBRSxFQUFFO2FBQ1o7U0FDRixDQUFDO0lBTWMsQ0FBQzs7Ozs7SUFMakIsSUFBYSxLQUFLLENBQUMsS0FBd0I7UUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWQsV0FBVyxDQUFDLE9BQXNCLElBQUksQ0FBQzs7O1lBMUV4QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDVDthQUVGOzs7OztvQkFpQkUsS0FBSzs7OztJQWROLDZDQWFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1yYWRpb1wiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+IFxyXG4gICAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuW4g+WxgDwvc3Bhbj5cclxuICAgICAgICAgIDxuei1yYWRpby1ncm91cCBbbnpTaXplXT1cIidzbWFsbCdcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydzZXR0aW5nJ11bJ2xheW91dCddXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiMVwiPuWNleWIlzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiMlwiPjLliJc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cIjNcIj4z5YiXPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uei1yYWRpby1ncm91cD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3JlcXVpcmVkJ11cIj48L256LXN3aXRjaD4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumaj+acuuaOkuWIlzwvc3Bhbj4gXHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnc2V0dGluZyddWydyYW5kb20nXVwiPjwvbnotc3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4+6aKY55uu5oC75YiG5pWwPC9zcGFuPiBcclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTAwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snc2V0dGluZyddWydzY29yZSddXCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX29wdGlvblwiPiBcclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+6YCJ6aG56K6+572uPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcXVlc3Rpb25GaWVsZC50ZW1wbGF0ZU9wdGlvbnNbJ29wdGlvbnMnXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBxX3RpdGxlXCI+XHJcbiAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfc29yZVwiPlxyXG4gICAgICAgICAgPHNwYW4+6YCJ6aG55YiG5pWwPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+5YiGPC9zcGFuPlxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBzdHlsZT1cIndpZHRoOiA0MHB4O1wiICBbKG5nTW9kZWwpXT1cIml0ZW1bJ3Njb3JlJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICA8L25nLWNvbnRhaW5lcj4gXHJcbiAgICA8L2Rpdj5cclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nUmFkaW8gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiBcclxuICBxdWVzdGlvbkZpZWxkOiBhbnkgPSB7XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcInJhZGlvXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHNldHRpbmc6eyBcclxuICAgICAgICBzY29yZTogMCwgXHJcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICBsYXlvdXQ6XCIxXCJcclxuICAgICAgfSwgXHJcbiAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxyXG59XHJcbiJdfQ==