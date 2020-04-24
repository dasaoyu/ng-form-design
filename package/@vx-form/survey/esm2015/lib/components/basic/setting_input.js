/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingInput {
    constructor() {
        this.questionField = {
            key: "",
            type: "input",
            templateOptions: {
                label: "",
                type: "default",
                setting: {
                    minLength: 0,
                    maxLength: 0,
                }
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
VXSurveySettingInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-input",
                template: `
    <div class="setting_wrap_title">
      <span>题目设置</span>
    </div> 
    <div class="setting_wrap_block">
      <div class="title">整题设置</div>
      <div class="item">
          <span>输入框大小</span>
          <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['setting']['size']">
              <label nz-radio-button nzValue="large">大</label>
              <label nz-radio-button nzValue="default">中</label>
              <label nz-radio-button nzValue="small">小</label>
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
      <div class="item q_sore">
          <span>内容限制</span> 
          <nz-select [nzSize]="'small'" [(ngModel)]="questionField['templateOptions']['type']">
            <nz-option nzValue="default" nzLabel="不限"></nz-option>
            <nz-option nzValue="number" nzLabel="数字"></nz-option>
            <nz-option nzValue="alphabet" nzLabel="字母"></nz-option> 
            <nz-option nzValue="chinese" nzLabel="中文"></nz-option> 
            <nz-option nzValue="email" nzLabel="邮箱"></nz-option> 
            <nz-option nzValue="mobile" nzLabel="手机"></nz-option> 
          </nz-select>
      </div>
      <div class="item q_sore">
          <span>最少填写</span>
          <span>字</span>
          <nz-input-number [nzMin]="0"  [nzMax]="9999999" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['minLength']"></nz-input-number>
      </div>  
      <div class="item q_sore">
          <span>最多填写</span>
          <span>字</span>
          <nz-input-number [nzMin]="0" [nzMax]="9999999" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField['templateOptions']['setting']['maxLength']"></nz-input-number>
      </div> 
    </div>  
  `
            }] }
];
/** @nocollapse */
VXSurveySettingInput.ctorParameters = () => [];
VXSurveySettingInput.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingInput.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBcUR2QixNQUFNLE9BQU8sb0JBQW9CO0lBbUIvQjtRQWpCQSxrQkFBYSxHQUFLO1lBQ2hCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFDLE9BQU87WUFDWixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFDLFNBQVM7Z0JBQ2QsT0FBTyxFQUFDO29CQUNOLFNBQVMsRUFBRSxDQUFDO29CQUNaLFNBQVMsRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRixDQUFDO0lBTWEsQ0FBQzs7Ozs7SUFMaEIsSUFBYSxLQUFLLENBQUMsS0FBd0I7UUFDekMsSUFBRyxLQUFLLElBQUUsSUFBSSxJQUFJLEtBQUssSUFBRSxTQUFTLEVBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsV0FBVyxDQUFDLE9BQXNCLElBQUcsQ0FBQzs7O1lBeEV2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDVDthQUVGOzs7OztvQkFlRSxLQUFLOzs7O0lBWk4sNkNBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1pbnB1dFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICAgIDxzcGFuPumimOebruiuvue9rjwvc3Bhbj5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pW06aKY6K6+572uPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICA8c3Bhbj7ovpPlhaXmoYblpKflsI88L3NwYW4+XHJcbiAgICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnc2V0dGluZyddWydzaXplJ11cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJsYXJnZVwiPuWkpzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiZGVmYXVsdFwiPuS4rTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwic21hbGxcIj7lsI88L2xhYmVsPlxyXG4gICAgICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgIDxzcGFuPumAu+i+keiuvue9rjwvc3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD7orr7nva48L2xhYmVsPnt7ZmllbGR8anNvbn19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBxX3NvcmVcIj5cclxuICAgICAgICAgIDxzcGFuPuWGheWuuemZkOWItjwvc3Bhbj4gXHJcbiAgICAgICAgICA8bnotc2VsZWN0IFtuelNpemVdPVwiJ3NtYWxsJ1wiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3R5cGUnXVwiPlxyXG4gICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJkZWZhdWx0XCIgbnpMYWJlbD1cIuS4jemZkFwiPjwvbnotb3B0aW9uPlxyXG4gICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJudW1iZXJcIiBuekxhYmVsPVwi5pWw5a2XXCI+PC9uei1vcHRpb24+XHJcbiAgICAgICAgICAgIDxuei1vcHRpb24gbnpWYWx1ZT1cImFscGhhYmV0XCIgbnpMYWJlbD1cIuWtl+avjVwiPjwvbnotb3B0aW9uPiBcclxuICAgICAgICAgICAgPG56LW9wdGlvbiBuelZhbHVlPVwiY2hpbmVzZVwiIG56TGFiZWw9XCLkuK3mlodcIj48L256LW9wdGlvbj4gXHJcbiAgICAgICAgICAgIDxuei1vcHRpb24gbnpWYWx1ZT1cImVtYWlsXCIgbnpMYWJlbD1cIumCrueusVwiPjwvbnotb3B0aW9uPiBcclxuICAgICAgICAgICAgPG56LW9wdGlvbiBuelZhbHVlPVwibW9iaWxlXCIgbnpMYWJlbD1cIuaJi+aculwiPjwvbnotb3B0aW9uPiBcclxuICAgICAgICAgIDwvbnotc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gcV9zb3JlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7mnIDlsJHloavlhpk8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7lrZc8L3NwYW4+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgIFtuek1heF09XCI5OTk5OTk5XCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkWyd0ZW1wbGF0ZU9wdGlvbnMnXVsnc2V0dGluZyddWydtaW5MZW5ndGgnXVwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBxX3NvcmVcIj5cclxuICAgICAgICAgIDxzcGFuPuacgOWkmuWhq+WGmTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPuWtlzwvc3Bhbj5cclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiOTk5OTk5OVwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZFsndGVtcGxhdGVPcHRpb25zJ11bJ3NldHRpbmcnXVsnbWF4TGVuZ3RoJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgPC9kaXY+ICBcclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nSW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgXHJcbiAgcXVlc3Rpb25GaWVsZDphbnk9e1xyXG4gICAga2V5OiBcIlwiLFxyXG4gICAgdHlwZTpcImlucHV0XCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgIHR5cGU6XCJkZWZhdWx0XCIsIFxyXG4gICAgICBzZXR0aW5nOnsgICAgXHJcbiAgICAgICAgbWluTGVuZ3RoOiAwLCBcclxuICAgICAgICBtYXhMZW5ndGg6IDAsIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBASW5wdXQoKSBzZXQgZmllbGQodmFsdWU6IFZYRm9ybUZpZWxkQ29uZmlnKSB7ICBcclxuICAgIGlmKHZhbHVlIT1udWxsICYmIHZhbHVlIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLnF1ZXN0aW9uRmllbGQgPSB2YWx1ZTsgXHJcbiAgICB9XHJcbiAgfSBcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge31cclxufVxyXG4iXX0=