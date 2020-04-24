/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingScore {
    constructor() {
        this.questionField = {
            key: "",
            type: "score",
            templateOptions: {
                type: "start",
                label: "",
                required: false,
                setting: {
                    label: "",
                    score: 0,
                    min: 0,
                    max: 5
                },
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
VXSurveySettingScore.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-score",
                template: `
  <div class="setting_wrap_title">
    <span>题目设置</span>
  </div> 
  <div class="setting_wrap_block">
    <div class="title">整题设置</div> 
    <div class="item">
        <span>此题必填</span>
        <nz-switch nzSize="small" [(ngModel)]="questionField.templateOptions.required"></nz-switch> 
    </div>
    <div class="item">
        <span>逻辑设置</span>
        <label>设置</label>
    </div>
    <div  class="item">
        <span>题目总分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions.setting.score"></nz-input-number>
    </div>
    <div  class="item">
        <span>最低分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="10" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions.setting.min"></nz-input-number>
    </div>
    <div  class="item">
        <span>最高分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="10" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions.setting.max"></nz-input-number>
    </div>
    <div class="item">
      <span>图标</span>
        <nz-radio-group [nzSize]="'small'" [(ngModel)]="questionField.templateOptions.type">
            <label nz-radio-button nzValue="start">星</label>
            <label nz-radio-button nzValue="heart">心</label>
            <label nz-radio-button nzValue="good">赞</label> 
            <label nz-radio-button nzValue="other">其</label>
          </nz-radio-group>
    </div>
    <div class="item" *ngIf="questionField.templateOptions.type=='other'">
      <span>自定义文字</span>  
      <input nz-input [(ngModel)]="questionField.templateOptions.setting.label" maxlength="1" nzSize="small" />
    </div> 
  </div> 
  `
            }] }
];
/** @nocollapse */
VXSurveySettingScore.ctorParameters = () => [];
VXSurveySettingScore.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingScore.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19zY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfc2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBaUR2QixNQUFNLE9BQU8sb0JBQW9CO0lBc0IvQjtRQXBCQSxrQkFBYSxHQUFLO1lBQ2hCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixlQUFlLEVBQUU7Z0JBQ2YsSUFBSSxFQUFDLE9BQU87Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFDO29CQUNOLEtBQUssRUFBQyxFQUFFO29CQUNSLEtBQUssRUFBRSxDQUFDO29CQUNSLEdBQUcsRUFBRSxDQUFDO29CQUNOLEdBQUcsRUFBRSxDQUFDO2lCQUNQO2FBQ0Y7U0FDRixDQUFDO0lBTWEsQ0FBQzs7Ozs7SUFMaEIsSUFBYSxLQUFLLENBQUMsS0FBd0I7UUFDekMsSUFBRyxLQUFLLElBQUUsSUFBSSxJQUFJLEtBQUssSUFBRSxTQUFTLEVBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsV0FBVyxDQUFDLE9BQXNCLElBQUcsQ0FBQzs7O1lBdkV2QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0NUO2FBRUY7Ozs7O29CQWtCRSxLQUFLOzs7O0lBZk4sNkNBY0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1zY29yZVwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNldHRpbmdfd3JhcF90aXRsZVwiPlxyXG4gICAgPHNwYW4+6aKY55uu6K6+572uPC9zcGFuPlxyXG4gIDwvZGl2PiBcclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX2Jsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7mlbTpopjorr7nva48L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPuatpOmimOW/heWhqzwvc3Bhbj5cclxuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy5yZXF1aXJlZFwiPjwvbnotc3dpdGNoPiBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgIDxzcGFuPumimOebruaAu+WIhuaVsDwvc3Bhbj4gXHJcbiAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxMDBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zLnNldHRpbmcuc2NvcmVcIj48L256LWlucHV0LW51bWJlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHNwYW4+5pyA5L2O5YiG5pWwPC9zcGFuPiBcclxuICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwXCIgW256U3RlcF09XCIxXCIgIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy5zZXR0aW5nLm1pblwiPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7mnIDpq5jliIbmlbA8L3NwYW4+IFxyXG4gICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMTBcIiBbbnpTdGVwXT1cIjFcIiAgbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGQudGVtcGxhdGVPcHRpb25zLnNldHRpbmcubWF4XCI+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgIDxzcGFuPuWbvuaghzwvc3Bhbj5cclxuICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW256U2l6ZV09XCInc21hbGwnXCIgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy50eXBlXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cInN0YXJ0XCI+5pifPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvLWJ1dHRvbiBuelZhbHVlPVwiaGVhcnRcIj7lv4M8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgbnotcmFkaW8tYnV0dG9uIG56VmFsdWU9XCJnb29kXCI+6LWePC9sYWJlbD4gXHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cIm90aGVyXCI+5YW2PC9sYWJlbD5cclxuICAgICAgICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgKm5nSWY9XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy50eXBlPT0nb3RoZXInXCI+XHJcbiAgICAgIDxzcGFuPuiHquWumuS5ieaWh+Wtlzwvc3Bhbj4gIFxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgWyhuZ01vZGVsKV09XCJxdWVzdGlvbkZpZWxkLnRlbXBsYXRlT3B0aW9ucy5zZXR0aW5nLmxhYmVsXCIgbWF4bGVuZ3RoPVwiMVwiIG56U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgIDwvZGl2PiBcclxuICA8L2Rpdj4gXHJcbiAgYFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2V0dGluZ1Njb3JlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIHF1ZXN0aW9uRmllbGQ6YW55PXsgXHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOiBcInNjb3JlXCIsXHJcbiAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgdHlwZTpcInN0YXJ0XCIsXHJcbiAgICAgIGxhYmVsOiBcIlwiLCBcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICBzZXR0aW5nOntcclxuICAgICAgICBsYWJlbDpcIlwiLCBcclxuICAgICAgICBzY29yZTogMCwgICBcclxuICAgICAgICBtaW46IDAsIFxyXG4gICAgICAgIG1heDogNVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykgeyAgXHJcbiAgICBpZih2YWx1ZSE9bnVsbCAmJiB2YWx1ZSE9dW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7IFxyXG4gICAgfVxyXG4gIH0gXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt9XHJcbn1cclxuIl19