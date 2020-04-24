/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveySettingProportion {
    constructor() {
        this.questionField = {
            key: "",
            type: "proportion",
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
                score: 0,
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
VXSurveySettingProportion.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-setting-proportion",
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
    <div  class="item">
        <span>题目总分数</span> 
        <nz-input-number [nzMin]="0" [nzMax]="100" [nzStep]="1"  nzSize="small" [(ngModel)]="questionField.templateOptions['score']"></nz-input-number>
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
VXSurveySettingProportion.ctorParameters = () => [];
VXSurveySettingProportion.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveySettingProportion.prototype.questionField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19wcm9wb3J0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19wcm9wb3J0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQTRCdkIsTUFBTSxPQUFPLHlCQUF5QjtJQTBCcEM7UUF4QkEsa0JBQWEsR0FBSztZQUNoQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBQyxZQUFZO1lBQ2pCLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsRUFBRTtnQkFDVCxXQUFXLEVBQUUsRUFBRTtnQkFDZixTQUFTLEVBQUUsR0FBRztnQkFDZCxTQUFTLEVBQUUsQ0FBQztnQkFDWixHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsQ0FBQztnQkFDWixXQUFXLEVBQUUsRUFBRTtnQkFDZixRQUFRLEVBQUUsS0FBSztnQkFDZixJQUFJLEVBQUUsRUFBRTtnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUMsRUFBRTthQUNYO1NBQ0YsQ0FBQztJQU1hLENBQUM7Ozs7O0lBTGhCLElBQWEsS0FBSyxDQUFDLEtBQXdCO1FBQ3pDLElBQUcsS0FBSyxJQUFFLElBQUksSUFBSSxLQUFLLElBQUUsU0FBUyxFQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUdELFFBQVEsS0FBSSxDQUFDOzs7OztJQUViLFdBQVcsQ0FBQyxPQUFzQixJQUFHLENBQUM7OztZQXREdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDthQUVGOzs7OztvQkFzQkUsS0FBSzs7OztJQW5CTixrREFrQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktc2V0dGluZy1wcm9wb3J0aW9uXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ193cmFwX3RpdGxlXCI+XHJcbiAgICA8c3Bhbj7popjnm67orr7nva48L3NwYW4+XHJcbiAgPC9kaXY+IFxyXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5nX3dyYXBfYmxvY2tcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaVtOmimOiuvue9rjwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHNwYW4+5q2k6aKY5b+F5aGrPC9zcGFuPlxyXG4gICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cInF1ZXN0aW9uRmllbGRbJ3RlbXBsYXRlT3B0aW9ucyddWydyZXF1aXJlZCddXCI+PC9uei1zd2l0Y2g+IFxyXG4gICAgPC9kaXY+IFxyXG4gICAgPGRpdiAgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHNwYW4+6aKY55uu5oC75YiG5pWwPC9zcGFuPiBcclxuICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjEwMFwiIFtuelN0ZXBdPVwiMVwiICBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwicXVlc3Rpb25GaWVsZC50ZW1wbGF0ZU9wdGlvbnNbJ3Njb3JlJ11cIj48L256LWlucHV0LW51bWJlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICA8c3Bhbj7pgLvovpHorr7nva48L3NwYW4+XHJcbiAgICAgICAgPGxhYmVsPuiuvue9rjwvbGFiZWw+XHJcbiAgICA8L2Rpdj4gIFxyXG4gIDwvZGl2PiBcclxuICBgXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlTZXR0aW5nUHJvcG9ydGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBxdWVzdGlvbkZpZWxkOmFueT17XHJcbiAgICBrZXk6IFwiXCIsXHJcbiAgICB0eXBlOlwicHJvcG9ydGlvblwiLFxyXG4gICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIiwgXHJcbiAgICAgIG1heExlbmd0aDogNTAwLFxyXG4gICAgICBtaW5MZW5ndGg6IDAsXHJcbiAgICAgIG1heDogMCxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBwcmVjaXNpb246IDAsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHRpcHM6IFwiXCIsXHJcbiAgICAgIHBhdHRlcm46IFwiXCIsXHJcbiAgICAgIHNjb3JlOiAwLFxyXG4gICAgICBvcHRpb25zOltdIFxyXG4gICAgfVxyXG4gIH07XHJcbiAgQElucHV0KCkgc2V0IGZpZWxkKHZhbHVlOiBWWEZvcm1GaWVsZENvbmZpZykgeyAgXHJcbiAgICBpZih2YWx1ZSE9bnVsbCAmJiB2YWx1ZSE9dW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5xdWVzdGlvbkZpZWxkID0gdmFsdWU7IFxyXG4gICAgfVxyXG4gIH0gXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt9XHJcbn1cclxuIl19