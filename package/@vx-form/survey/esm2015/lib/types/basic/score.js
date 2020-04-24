/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyScore extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
}
VXSurveyScore.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-score",
                template: `
    
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"></inline-editor>  
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap basic_score">
            
            <nz-rate *ngIf="to.type=='start'" nzAllowHalf [nzCount]="to.setting.max"></nz-rate>
            <nz-rate *ngIf="to.type=='heart'" nzAllowHalf [nzCharacter]="characterIconHeart" [nzCount]="to.setting.max"></nz-rate>
            <nz-rate *ngIf="to.type=='good'" nzAllowHalf [nzCharacter]="characterIconGood" [nzCount]="to.setting.max"></nz-rate>
            <nz-rate *ngIf="to.type=='other'" nzAllowHalf [nzCharacter]="characterIconOther" [nzCount]="to.setting.max"></nz-rate> 
            <ng-template #characterIconHeart> 
              心 
            </ng-template>
            <ng-template #characterIconGood>
              赞  
            </ng-template>
            <ng-template #characterIconOther>
              {{to.setting.label}}  
            </ng-template>  
          </div>
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-rate *ngIf="to.type=='start'" nzAllowHalf [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <nz-rate *ngIf="to.type=='heart'" nzAllowHalf [nzCharacter]="characterIconHeart" [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <nz-rate *ngIf="to.type=='good'" nzAllowHalf [nzCharacter]="characterIconGood" [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <nz-rate *ngIf="to.type=='other'" nzAllowHalf [nzCharacter]="characterIconOther" [nzCount]="to.setting.max"
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate> 
      <ng-template #characterIconHeart> 
        心 
      </ng-template>
      <ng-template #characterIconGood>
        赞  
      </ng-template>
      <ng-template #characterIconOther>
        {{to.setting.label}}  
      </ng-template>  
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyScore.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyScore.prototype.service;
    /** @type {?} */
    VXSurveyScore.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvYmFzaWMvc2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUErRHZELE1BQU0sT0FBTyxhQUFjLFNBQVEsU0FBUzs7OztJQUcxQyxZQUFZLFNBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRlYsU0FBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0RUO2FBQ0Y7Ozs7WUE5RFEsZ0JBQWdCOzs7O0lBZ0V2QixnQ0FBYTs7SUFDYiw2QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXNjb3JlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCI+PC9pbmxpbmUtZWRpdG9yPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX3Njb3JlXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bnotcmF0ZSAqbmdJZj1cInRvLnR5cGU9PSdzdGFydCdcIiBuekFsbG93SGFsZiBbbnpDb3VudF09XCJ0by5zZXR0aW5nLm1heFwiPjwvbnotcmF0ZT5cclxuICAgICAgICAgICAgPG56LXJhdGUgKm5nSWY9XCJ0by50eXBlPT0naGVhcnQnXCIgbnpBbGxvd0hhbGYgW256Q2hhcmFjdGVyXT1cImNoYXJhY3Rlckljb25IZWFydFwiIFtuekNvdW50XT1cInRvLnNldHRpbmcubWF4XCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICA8bnotcmF0ZSAqbmdJZj1cInRvLnR5cGU9PSdnb29kJ1wiIG56QWxsb3dIYWxmIFtuekNoYXJhY3Rlcl09XCJjaGFyYWN0ZXJJY29uR29vZFwiIFtuekNvdW50XT1cInRvLnNldHRpbmcubWF4XCI+PC9uei1yYXRlPlxyXG4gICAgICAgICAgICA8bnotcmF0ZSAqbmdJZj1cInRvLnR5cGU9PSdvdGhlcidcIiBuekFsbG93SGFsZiBbbnpDaGFyYWN0ZXJdPVwiY2hhcmFjdGVySWNvbk90aGVyXCIgW256Q291bnRdPVwidG8uc2V0dGluZy5tYXhcIj48L256LXJhdGU+IFxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NoYXJhY3Rlckljb25IZWFydD4gXHJcbiAgICAgICAgICAgICAg5b+DIFxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NoYXJhY3Rlckljb25Hb29kPlxyXG4gICAgICAgICAgICAgIOi1niAgXHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2hhcmFjdGVySWNvbk90aGVyPlxyXG4gICAgICAgICAgICAgIHt7dG8uc2V0dGluZy5sYWJlbH19ICBcclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotcmF0ZSAqbmdJZj1cInRvLnR5cGU9PSdzdGFydCdcIiBuekFsbG93SGFsZiBbbnpDb3VudF09XCJ0by5zZXR0aW5nLm1heFwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiPlxyXG4gICAgICA8L256LXJhdGU+XHJcbiAgICAgIDxuei1yYXRlICpuZ0lmPVwidG8udHlwZT09J2hlYXJ0J1wiIG56QWxsb3dIYWxmIFtuekNoYXJhY3Rlcl09XCJjaGFyYWN0ZXJJY29uSGVhcnRcIiBbbnpDb3VudF09XCJ0by5zZXR0aW5nLm1heFwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiPlxyXG4gICAgICA8L256LXJhdGU+XHJcbiAgICAgIDxuei1yYXRlICpuZ0lmPVwidG8udHlwZT09J2dvb2QnXCIgbnpBbGxvd0hhbGYgW256Q2hhcmFjdGVyXT1cImNoYXJhY3Rlckljb25Hb29kXCIgW256Q291bnRdPVwidG8uc2V0dGluZy5tYXhcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cclxuICAgICAgPC9uei1yYXRlPlxyXG4gICAgICA8bnotcmF0ZSAqbmdJZj1cInRvLnR5cGU9PSdvdGhlcidcIiBuekFsbG93SGFsZiBbbnpDaGFyYWN0ZXJdPVwiY2hhcmFjdGVySWNvbk90aGVyXCIgW256Q291bnRdPVwidG8uc2V0dGluZy5tYXhcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cclxuICAgICAgPC9uei1yYXRlPiBcclxuICAgICAgPG5nLXRlbXBsYXRlICNjaGFyYWN0ZXJJY29uSGVhcnQ+IFxyXG4gICAgICAgIOW/gyBcclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNjaGFyYWN0ZXJJY29uR29vZD5cclxuICAgICAgICDotZ4gIFxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2NoYXJhY3Rlckljb25PdGhlcj5cclxuICAgICAgICB7e3RvLnNldHRpbmcubGFiZWx9fSAgXHJcbiAgICAgIDwvbmctdGVtcGxhdGU+ICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5U2NvcmUgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBndWlkOiBhbnkgPSBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl07XHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuIFxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCl7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRcIixcIlwiLHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aJuemHj+a3u+WKoFxyXG4gIGFkZE9wdGlvbnMoKXtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIixcIlwiLHRoaXMuZmllbGQpO1xyXG4gIH0gIFxyXG59XHJcbiJdfQ==