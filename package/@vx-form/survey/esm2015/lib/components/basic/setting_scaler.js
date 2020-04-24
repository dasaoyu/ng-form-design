/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingScaler {
    constructor() {
        this.questionField = {
            key: "",
            type: "scaler",
            templateOptions: {
                label: "",
                description: "",
                maxLength: 500,
                minLength: 0,
                max: 0,
                min: 0,
                precision: 0,
                placeholder: "",
                required: false,
                tips: "",
                pattern: "",
                options: []
            },
            origin: {
                refdatasourcetype: "",
                datatype: ""
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
VXSurveySettingScaler.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-scaler",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div>
      <div class="item">
          <span>题型</span>
          <nz-radio-group [nzSize]="'small'">
              <label nz-radio-button nzValue="A">单选</label>
              <label nz-radio-button nzValue="B">多选</label>
            </nz-radio-group>
      </div>
      <div class="item">
          <span>此题必填</span>
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['required']"></nz-switch> 
      </div>
      <div class="item">
          <span>逻辑设置</span>
          <label>设置</label>{{field|json}}
      </div>  
    </div>
    <div class="setting_wrap_model"> 
      <div class="title">选项设置</div>
      <div  class="item">
          <span>布局</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['layout']">
              <label nz-radio-button nzValue="row1">单列</label>
              <label nz-radio-button nzValue="row2">2列</label>
              <label nz-radio-button nzValue="row3">3列</label>
            </nz-radio-group>
      </div>
      <div  class="item">
          <span>随机排列</span> 
          <nz-switch nzSize="small" [(ngModel)]="questionField['templateOptions']['order']"></nz-switch>
      </div>
    </div>
    <div class="setting_wrap_option"> 
      <div class="title">选项列表</div>
      <ng-container *ngFor="let item of questionField.templateOptions['options']">
      <div class="item q_title">
          <span>{{item.label}}</span>
      </div>
      <div class="item q_sore">
          <span>选项分数</span>
          <span>分</span>
          <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" style="width: 40px;"  [(ngModel)]="item['score']"></nz-input-number>
      </div>
      <div class="item q_other">
          <span>添加输入框</span>
          <nz-switch nzSize="small"  [(ngModel)]="item['input']"></nz-switch>
      </div>
      </ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
VXSurveySettingScaler.ctorParameters = () => [];
VXSurveySettingScaler.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingScaler.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19zY2FsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX3NjYWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUErRHZCLE1BQU0sT0FBTyxxQkFBcUI7SUE2QmhDO1FBM0JBLGtCQUFhLEdBQUs7WUFDaEIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUMsUUFBUTtZQUNiLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxXQUFXLEVBQUUsRUFBRTtnQkFDZixTQUFTLEVBQUUsR0FBRztnQkFDZCxTQUFTLEVBQUUsQ0FBQztnQkFDWixHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsQ0FBQztnQkFDWixXQUFXLEVBQUUsRUFBRTtnQkFDZixRQUFRLEVBQUUsS0FBSztnQkFDZixJQUFJLEVBQUUsRUFBRTtnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUMsRUFBRTthQUNYO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLGlCQUFpQixFQUFFLEVBQUU7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7U0FDRixDQUFDO0lBTWEsQ0FBQzs7Ozs7SUFMaEIsSUFBYSxLQUFLLENBQUMsS0FBd0I7UUFDekMsSUFBRyxLQUFLLElBQUUsSUFBSSxJQUFJLEtBQUssSUFBRSxTQUFTLEVBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsV0FBVyxDQUFDLE9BQXNCLElBQUcsQ0FBQzs7O1lBNUZ2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzRFQ7YUFFRjs7Ozs7b0JBeUJFLEtBQUs7Ozs7SUF0Qk4sOENBcUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNldHRpbmctc2NhbGVyXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfdGl0bGVcIj5cclxuICAgICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF9ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumimOWeizwvc3Bhbj5cclxuICAgICAgICAgIDxuei1yYWRpby1ncm91cCBbbnpTaXplXT1cIidzbWFsbCdcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJBXCI+5Y2V6YCJPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJCXCI+5aSa6YCJPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uei1yYWRpby1ncm91cD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mraTpopjlv4Xloas8L3NwYW4+XHJcbiAgICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsncmVxdWlyZWQnXVwiPjwvbnotc3dpdGNoPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+6K6+572uPC9sYWJlbD57e2ZpZWxkfGpzb259fVxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX21vZGVsXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnorr7nva48L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7luIPlsYA8L3NwYW4+XHJcbiAgICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnbGF5b3V0J11cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJyb3cxXCI+5Y2V5YiXPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJyb3cyXCI+MuWIlzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwicm93M1wiPjPliJc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pmo/mnLrmjpLliJc8L3NwYW4+IFxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ29yZGVyJ11cIj48L256LXN3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfb3B0aW9uXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7pgInpobnliJfooag8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9uc1snb3B0aW9ucyddXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHFfdGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9zb3JlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7pgInpobnliIbmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7liIY8L3NwYW4+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIHN0eWxlPVwid2lkdGg6IDQwcHg7XCIgIFsobmdNb2RlbCldPVwiaXRlbVsnc2NvcmUnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9vdGhlclwiPlxyXG4gICAgICAgICAgPHNwYW4+5re75Yqg6L6T5YWl5qGGPC9zcGFuPlxyXG4gICAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiICBbKG5nTW9kZWwpXT1cIml0ZW1bJ2lucHV0J11cIj48L256LXN3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ1NjYWxlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBxdWVzdGlvbkZpZWxkOmFueT17XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwic2NhbGVyXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLCBcclxuICAgICAgbWF4TGVuZ3RoOiA1MDAsXHJcbiAgICAgIG1pbkxlbmd0aDogMCxcclxuICAgICAgbWF4OiAwLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIHByZWNpc2lvbjogMCxcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgdGlwczogXCJcIixcclxuICAgICAgcGF0dGVybjogXCJcIixcclxuICAgICAgb3B0aW9uczpbXSBcclxuICAgIH0sXHJcbiAgICBvcmlnaW46IHtcclxuICAgICAgcmVmZGF0YXNvdXJjZXR5cGU6IFwiXCIsXHJcbiAgICAgIGRhdGF0eXBlOiBcIlwiXHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7ICBcclxuICAgIGlmKHZhbHVlIT1udWxsICYmIHZhbHVlIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTsgXHJcbiAgICB9XHJcbiAgfSBcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge31cclxufVxyXG4iXX0=