/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyMatrixCheckBox extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getMatrixOption(subtitle, option) {
        return {
            groupid: subtitle.value,
            optionid: option.value
        };
    }
    /**
     * @param {?} values
     * @return {?}
     */
    onChange(values) {
        /** @type {?} */
        let res = [];
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (!res.some((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => { return item.groupid == value.groupid; }))) {
                    res.push({
                        groupid: value.groupid,
                        options: [{
                                optionid: value.optionid,
                                optionvalue: true
                            }]
                    });
                }
                else {
                    res.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.groupid == value.groupid) {
                            item.options.push({
                                optionid: value.optionid,
                                optionvalue: true
                            });
                        }
                    }));
                }
            }));
        }
        this.formControl.patchValue(res);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getControlChecked(subtitle, option) {
        /** @type {?} */
        let result = false;
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.groupid == subtitle.value) {
                    value.options.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.optionid == option.value) {
                            result = item.optionvalue;
                        }
                    }));
                }
            }));
        }
        return result;
    }
    //添加选项
    /**
     * @return {?}
     */
    addOption() {
        this.service.optionOperational("add", "", this.field);
    }
    //添加行
    /**
     * @return {?}
     */
    addSubTitle() {
        this.service.optionOperational("subtitle", "", this.field);
    }
    //批量添加
    /**
     * @return {?}
     */
    addOptions() {
        this.service.optionOperational("adds", "", this.field);
    }
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    deleteOption(option) {
        this.service.optionOperational("delete", option, this.field);
    }
}
VXSurveyMatrixCheckBox.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_checkbox",
                template: ` 
    <ng-container *ngIf="formStatus !== 0"> 
        <div class="question-wrap_title">
          <div class="required">
            <span *ngIf="to.required">*</span>
          </div>
          <inline-editor [(ngModel)]="to.label" [active]="active"
          ></inline-editor>
        </div>
        <div class="question-wrap_content">
          <div class="option_wrap matrix_checkbox">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                  <label nz-checkbox nzDisabled="true"></label> 
                  </td>
                </tr>
              </table>
            </div>
            <div class="option_vertical">
              <span (click)="addOption()">添加单个选项</span>
            </div>
          </div>
        </div> 
        <div class="question-wrap_operate">
          <span (click)="addSubTitle()">添加单矩阵行</span>  
        </div>   
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
    <nz-checkbox-wrapper
      style="width: 100%;"
      (nzOnChange)="onChange($event)"
      [class.is-invalid]="showError">
      <table class="option_wrap">
        <tr>
          <td></td>
          <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
        </tr>
        <tr *ngFor="let itemTR of to.subtitle">
          <td>{{itemTR.label}}</td>
          <td *ngFor="let itemTD of to.options">
          <label nz-checkbox
            [nzValue]="getMatrixOption(itemTR,itemTD)"
            [ngModel]="getControlChecked(itemTR,itemTD)">
          </label> 
          </td>
        </tr> 
      </table>
      </nz-checkbox-wrapper>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixCheckBox.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyMatrixCheckBox.prototype.service;
    /** @type {?} */
    VXSurveyMatrixCheckBox.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X2NoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL21hdHJpeF9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdFdkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFNBQVM7Ozs7SUFJbkQsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUhWLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFJakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFFBQVksRUFBQyxNQUFVO1FBQ3JDLE9BQU87WUFDTCxPQUFPLEVBQUMsUUFBUSxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUE7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFhOztZQUNoQixHQUFHLEdBQVEsRUFBRTtRQUNqQixJQUFJLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5RCxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBUyxFQUFDLEVBQUU7Z0JBQzFCLElBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSTs7OztnQkFBQyxDQUFDLElBQVEsRUFBQyxFQUFFLEdBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFFLEtBQUssQ0FBQyxPQUFPLENBQUEsQ0FBQSxDQUFDLEVBQUMsRUFBQztvQkFDN0QsR0FBRyxDQUFDLElBQUksQ0FDTjt3QkFDRSxPQUFPLEVBQUMsS0FBSyxDQUFDLE9BQU87d0JBQ3JCLE9BQU8sRUFBQyxDQUFDO2dDQUNQLFFBQVEsRUFBQyxLQUFLLENBQUMsUUFBUTtnQ0FDdkIsV0FBVyxFQUFDLElBQUk7NkJBQ2pCLENBQUM7cUJBQ0gsQ0FDRixDQUFBO2lCQUNGO3FCQUFJO29CQUNILEdBQUcsQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsSUFBUSxFQUFDLEVBQUU7d0JBQ3RCLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBRSxLQUFLLENBQUMsT0FBTyxFQUFDOzRCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQ0FDaEIsUUFBUSxFQUFDLEtBQUssQ0FBQyxRQUFRO2dDQUN2QixXQUFXLEVBQUMsSUFBSTs2QkFDakIsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUMsRUFBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQyxFQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsUUFBYSxFQUFFLE1BQVc7O1lBRXRDLE1BQU0sR0FBRyxLQUFLOztZQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7UUFDbkMsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQVMsRUFBQyxFQUFFO2dCQUMxQixJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUUsUUFBUSxDQUFDLEtBQUssRUFBQztvQkFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsSUFBUSxFQUFDLEVBQUU7d0JBQ2hDLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBRSxNQUFNLENBQUMsS0FBSyxFQUFDOzRCQUM3QixNQUFNLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDekI7b0JBQ0gsQ0FBQyxFQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQVc7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUE1SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURUO2FBQ0Y7Ozs7WUEvRFEsZ0JBQWdCOzs7O0lBaUV2Qix5Q0FBYTs7SUFDYixzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktbWF0cml4X2NoZWNrYm94XCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIlxyXG4gICAgICAgICAgPjwvaW5saW5lLWVkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXAgbWF0cml4X2NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fdGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+e3tpdGVtVEQubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtVFIgb2YgdG8uc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7aXRlbVRSLmxhYmVsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBuekRpc2FibGVkPVwidHJ1ZVwiPjwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl92ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPua3u+WKoOWNleS4qumAiemhuTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfb3BlcmF0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZFN1YlRpdGxlKClcIj7mt7vliqDljZXnn6npmLXooYw8L3NwYW4+ICBcclxuICAgICAgICA8L2Rpdj4gICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICA8bnotY2hlY2tib3gtd3JhcHBlclxyXG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgIChuek9uQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwib3B0aW9uX3dyYXBcIj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbVREIG9mIHRvLm9wdGlvbnNcIj57e2l0ZW1URC5sYWJlbH19PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbVRSIG9mIHRvLnN1YnRpdGxlXCI+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtVFIubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgW256VmFsdWVdPVwiZ2V0TWF0cml4T3B0aW9uKGl0ZW1UUixpdGVtVEQpXCJcclxuICAgICAgICAgICAgW25nTW9kZWxdPVwiZ2V0Q29udHJvbENoZWNrZWQoaXRlbVRSLGl0ZW1URClcIj5cclxuICAgICAgICAgIDwvbGFiZWw+IFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPiBcclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlNYXRyaXhDaGVja0JveCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF0cml4T3B0aW9uKHN1YnRpdGxlOmFueSxvcHRpb246YW55KXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwaWQ6c3VidGl0bGUudmFsdWUsXHJcbiAgICAgIG9wdGlvbmlkOm9wdGlvbi52YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UodmFsdWVzOiBhbnlbXSl7XHJcbiAgICBsZXQgcmVzOiBhbnkgPSBbXTtcclxuICAgIGlmICh2YWx1ZXMgIT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTphbnkpPT57XHJcbiAgICAgICAgaWYoIXJlcy5zb21lKChpdGVtOmFueSk9PntyZXR1cm4gaXRlbS5ncm91cGlkPT12YWx1ZS5ncm91cGlkfSkpe1xyXG4gICAgICAgICAgcmVzLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBncm91cGlkOnZhbHVlLmdyb3VwaWQsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczpbe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uaWQ6dmFsdWUub3B0aW9uaWQsXHJcbiAgICAgICAgICAgICAgICBvcHRpb252YWx1ZTp0cnVlXHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgcmVzLmZvckVhY2goKGl0ZW06YW55KT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtLmdyb3VwaWQ9PXZhbHVlLmdyb3VwaWQpe1xyXG4gICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmlkOnZhbHVlLm9wdGlvbmlkLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9udmFsdWU6dHJ1ZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybUNvbnRyb2wucGF0Y2hWYWx1ZShyZXMpO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvbnRyb2xDaGVja2VkKHN1YnRpdGxlOiBhbnksIG9wdGlvbjogYW55KSB7XHJcbiAgXHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTsgXHJcbiAgICBpZiAodmFsdWVzICE9IHVuZGVmaW5lZCAmJiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWU6YW55KT0+e1xyXG4gICAgICAgIGlmKHZhbHVlLmdyb3VwaWQ9PXN1YnRpdGxlLnZhbHVlKXtcclxuICAgICAgICAgIHZhbHVlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0ub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgcmVzdWx0PWl0ZW0ub3B0aW9udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+a3u+WKoOihjFxyXG4gIGFkZFN1YlRpdGxlKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwic3VidGl0bGVcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIiwgb3B0aW9uLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19