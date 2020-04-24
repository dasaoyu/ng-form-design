/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyMatrixRadio extends FieldType {
    /**
     * @param {?} dyService
     */
    constructor(dyService) {
        super();
        this.guid = Guid.create()["value"];
        this.service = dyService;
    }
    /**
     * @param {?} value
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    controlModelChange(value, subtitle, option) {
        /** @type {?} */
        let values = this.formControl.value || [];
        if (values != undefined && values != null && values.length > 0) {
            if (!values.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { return item.groupid == subtitle.value; }))) {
                values.push({
                    groupid: subtitle.value,
                    options: [{
                            optionid: option.value,
                            optionvalue: true
                        }]
                });
            }
            else {
                values.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.groupid == subtitle.value) {
                        item.options = [{
                                optionid: option.value,
                                optionvalue: true
                            }];
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: true
                    }]
            });
        }
        this.formControl.patchValue(values);
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} subtitle
     * @param {?} option
     * @return {?}
     */
    getControlChecked(subtitle, option) {
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let values = this.formControl.value;
        if (values != undefined && values != null && values.length > 0) {
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.groupid == subtitle.value) {
                    result = value.options[0].optionid;
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
VXSurveyMatrixRadio.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_radio",
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
          <div class="option_wrap matrix_radio">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                  <label nz-radio nzDisabled="true"></label> 
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
      <table class="option_wrap">
        <tr>
          <td></td>
          <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
        </tr>
        <tr *ngFor="let itemTR of to.subtitle">
          <td>{{itemTR.label}}</td>
          <td *ngFor="let itemTD of to.options"> 
            <input [id]="itemTR.value+'-'+itemTD.value" type="radio" [value]="itemTD.value" [name]="itemTR.value" [ngModel]="getControlChecked(itemTR,itemTD)"  (ngModelChange)="controlModelChange($event,itemTR,itemTD)">
          </td>
        </tr>
      </table>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixRadio.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyMatrixRadio.prototype.service;
    /** @type {?} */
    VXSurveyMatrixRadio.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X3JhZGlvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL21hdHJpeF9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXdEdkQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7Ozs7SUFHaEQsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUZWLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQUlELGtCQUFrQixDQUFDLEtBQVMsRUFBQyxRQUFZLEVBQUMsTUFBVTs7WUFDOUMsTUFBTSxHQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFFN0MsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFFOUQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFRLEVBQUMsRUFBRSxHQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBRSxRQUFRLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxFQUFDLEVBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1YsT0FBTyxFQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUN0QixPQUFPLEVBQUMsQ0FBQzs0QkFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ3JCLFdBQVcsRUFBQyxJQUFJO3lCQUNqQixDQUFDO2lCQUNILENBQUMsQ0FBQTthQUNIO2lCQUFJO2dCQUNILE1BQU0sQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsSUFBUSxFQUFDLEVBQUU7b0JBQ3pCLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBRSxRQUFRLENBQUMsS0FBSyxFQUFDO3dCQUM5QixJQUFJLENBQUMsT0FBTyxHQUFDLENBQUM7Z0NBQ1osUUFBUSxFQUFDLE1BQU0sQ0FBQyxLQUFLO2dDQUNyQixXQUFXLEVBQUMsSUFBSTs2QkFDakIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjthQUFJO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixPQUFPLEVBQUMsUUFBUSxDQUFDLEtBQUs7Z0JBQ3RCLE9BQU8sRUFBQyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxNQUFNLENBQUMsS0FBSzt3QkFDckIsV0FBVyxFQUFDLElBQUk7cUJBQ2pCLENBQUM7YUFDSCxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsUUFBYSxFQUFFLE1BQVc7O1lBRXRDLE1BQU0sR0FBRyxFQUFFOztZQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7UUFDbkMsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQVMsRUFBQyxFQUFFO2dCQUMxQixJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUUsUUFBUSxDQUFDLEtBQUssRUFBQztvQkFDL0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFO2lCQUNyQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUdELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQWhJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaURUO2FBQ0Y7Ozs7WUF2RFEsZ0JBQWdCOzs7O0lBeUR2QixzQ0FBYTs7SUFDYixtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktbWF0cml4X3JhZGlvXCIsXHJcbiAgdGVtcGxhdGU6IGAgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyAhPT0gMFwiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF90aXRsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5saW5lLWVkaXRvciBbKG5nTW9kZWwpXT1cInRvLmxhYmVsXCIgW2FjdGl2ZV09XCJhY3RpdmVcIlxyXG4gICAgICAgICAgPjwvaW5saW5lLWVkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24td3JhcF9jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3dyYXAgbWF0cml4X3JhZGlvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fdGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+e3tpdGVtVEQubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtVFIgb2YgdG8uc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7aXRlbVRSLmxhYmVsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBuekRpc2FibGVkPVwidHJ1ZVwiPjwvbGFiZWw+IFxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl92ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPua3u+WKoOWNleS4qumAiemhuTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfb3BlcmF0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImFkZFN1YlRpdGxlKClcIj7mt7vliqDljZXnn6npmLXooYw8L3NwYW4+ICBcclxuICAgICAgICA8L2Rpdj4gICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cIm9wdGlvbl93cmFwXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW1URCBvZiB0by5vcHRpb25zXCI+e3tpdGVtVEQubGFiZWx9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW1UUiBvZiB0by5zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgPHRkPnt7aXRlbVRSLmxhYmVsfX08L3RkPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBpdGVtVEQgb2YgdG8ub3B0aW9uc1wiPiBcclxuICAgICAgICAgICAgPGlucHV0IFtpZF09XCJpdGVtVFIudmFsdWUrJy0nK2l0ZW1URC52YWx1ZVwiIHR5cGU9XCJyYWRpb1wiIFt2YWx1ZV09XCJpdGVtVEQudmFsdWVcIiBbbmFtZV09XCJpdGVtVFIudmFsdWVcIiBbbmdNb2RlbF09XCJnZXRDb250cm9sQ2hlY2tlZChpdGVtVFIsaXRlbVREKVwiICAobmdNb2RlbENoYW5nZSk9XCJjb250cm9sTW9kZWxDaGFuZ2UoJGV2ZW50LGl0ZW1UUixpdGVtVEQpXCI+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleU1hdHJpeFJhZGlvIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ3VpZDogYW55ID0gR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9IFxyXG5cclxuICBcclxuICBcclxuICBjb250cm9sTW9kZWxDaGFuZ2UodmFsdWU6YW55LHN1YnRpdGxlOmFueSxvcHRpb246YW55KXsgXHJcbiAgICBsZXQgdmFsdWVzOmFueSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgfHwgW107XHJcblxyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgIGlmKCF2YWx1ZXMuc29tZSgoaXRlbTphbnkpPT57cmV0dXJuIGl0ZW0uZ3JvdXBpZD09c3VidGl0bGUudmFsdWV9KSl7XHJcbiAgICAgICAgdmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgZ3JvdXBpZDpzdWJ0aXRsZS52YWx1ZSxcclxuICAgICAgICAgIG9wdGlvbnM6W3tcclxuICAgICAgICAgICAgb3B0aW9uaWQ6b3B0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICBvcHRpb252YWx1ZTp0cnVlXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChpdGVtOmFueSk9PntcclxuICAgICAgICAgIGlmKGl0ZW0uZ3JvdXBpZD09c3VidGl0bGUudmFsdWUpe1xyXG4gICAgICAgICAgICBpdGVtLm9wdGlvbnM9W3tcclxuICAgICAgICAgICAgICBvcHRpb25pZDpvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgICAgb3B0aW9udmFsdWU6dHJ1ZVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhbHVlcy5wdXNoKHtcclxuICAgICAgICBncm91cGlkOnN1YnRpdGxlLnZhbHVlLFxyXG4gICAgICAgIG9wdGlvbnM6W3tcclxuICAgICAgICAgIG9wdGlvbmlkOm9wdGlvbi52YWx1ZSxcclxuICAgICAgICAgIG9wdGlvbnZhbHVlOnRydWVcclxuICAgICAgICB9XVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlcyk7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGdldENvbnRyb2xDaGVja2VkKHN1YnRpdGxlOiBhbnksIG9wdGlvbjogYW55KSB7XHJcbiAgXHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlOyBcclxuICAgIGlmICh2YWx1ZXMgIT0gdW5kZWZpbmVkICYmIHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTphbnkpPT57XHJcbiAgICAgICAgaWYodmFsdWUuZ3JvdXBpZD09c3VidGl0bGUudmFsdWUpe1xyXG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWUub3B0aW9uc1swXS5vcHRpb25pZCA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IFxyXG5cclxuICAvL+a3u+WKoOmAiemhuVxyXG4gIGFkZE9wdGlvbigpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZFwiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/mt7vliqDooYxcclxuICBhZGRTdWJUaXRsZSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcInN1YnRpdGxlXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+aJuemHj+a3u+WKoFxyXG4gIGFkZE9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJhZGRzXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+WIoOmZpOmAiemhuVxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiZGVsZXRlXCIsIG9wdGlvbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==