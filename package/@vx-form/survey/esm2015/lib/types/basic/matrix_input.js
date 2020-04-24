/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
export class VXSurveyMatrixInput extends FieldType {
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
                            optionvalue: value
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
                        if (!item.options.some((/**
                         * @param {?} op
                         * @return {?}
                         */
                        (op) => { return op.optionid == option.value; }))) {
                            item.options.push({
                                optionid: option.value,
                                optionvalue: value
                            });
                        }
                        else {
                            item.options.forEach((/**
                             * @param {?} op
                             * @return {?}
                             */
                            (op) => {
                                if (op.optionid == option.value) {
                                    op.optionvalue = value;
                                }
                            }));
                        }
                    }
                }));
            }
        }
        else {
            values.push({
                groupid: subtitle.value,
                options: [{
                        optionid: option.value,
                        optionvalue: value
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
        let result = null;
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
VXSurveyMatrixInput.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-matrix_input",
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
          <div class="option_wrap matrix_input">
            <div class="option_table">
              <table>
                <tr>
                  <td></td>
                  <td *ngFor="let itemTD of to.options">{{itemTD.label}}</td>
                </tr>
                <tr *ngFor="let itemTR of to.subtitle">
                  <td>{{itemTR.label}}</td>
                  <td *ngFor="let itemTD of to.options">
                    <input nz-input placeholder="" [disabled]="true" />
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
            <input nz-input [ngModel]="getControlChecked(itemTR,itemTD)"  (ngModelChange)="controlModelChange($event,itemTR,itemTD)"/>
          </td>
        </tr>
      </table>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyMatrixInput.ctorParameters = () => [
    { type: VXFormAntService }
];
if (false) {
    /** @type {?} */
    VXSurveyMatrixInput.prototype.service;
    /** @type {?} */
    VXSurveyMatrixInput.prototype.guid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X2lucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2Jhc2ljL21hdHJpeF9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQXdEdkQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7Ozs7SUFHaEQsWUFBWSxTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUZWLFNBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQUVELGtCQUFrQixDQUFDLEtBQVMsRUFBQyxRQUFZLEVBQUMsTUFBVTs7WUFDOUMsTUFBTSxHQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFFN0MsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFFOUQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFRLEVBQUMsRUFBRSxHQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBRSxRQUFRLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxFQUFDLEVBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1YsT0FBTyxFQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUN0QixPQUFPLEVBQUMsQ0FBQzs0QkFDUCxRQUFRLEVBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ3JCLFdBQVcsRUFBQyxL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QyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUF6SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlEVDthQUNGOzs7O1lBdkRRLGdCQUFnQjs7OztJQXlEdkIsc0NBQWE7O0lBQ2IsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LW1hdHJpeF9pbnB1dFwiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCJcclxuICAgICAgICAgID48L2lubGluZS1lZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIG1hdHJpeF9pbnB1dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBpdGVtVEQgb2YgdG8ub3B0aW9uc1wiPnt7aXRlbVRELmxhYmVsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbVRSIG9mIHRvLnN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW1UUi5sYWJlbH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBpdGVtVEQgb2YgdG8ub3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCBwbGFjZWhvbGRlcj1cIlwiIFtkaXNhYmxlZF09XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj7mt7vliqDljZXkuKrpgInpobk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRTdWJUaXRsZSgpXCI+5re75Yqg5Y2V55+p6Zi16KGMPC9zcGFuPiAgXHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8dGFibGUgY2xhc3M9XCJvcHRpb25fd3JhcFwiPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBpdGVtVEQgb2YgdG8ub3B0aW9uc1wiPnt7aXRlbVRELmxhYmVsfX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtVFIgb2YgdG8uc3VidGl0bGVcIj5cclxuICAgICAgICAgIDx0ZD57e2l0ZW1UUi5sYWJlbH19PC90ZD5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbVREIG9mIHRvLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IFtuZ01vZGVsXT1cImdldENvbnRyb2xDaGVja2VkKGl0ZW1UUixpdGVtVEQpXCIgIChuZ01vZGVsQ2hhbmdlKT1cImNvbnRyb2xNb2RlbENoYW5nZSgkZXZlbnQsaXRlbVRSLGl0ZW1URClcIi8+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWFN1cnZleU1hdHJpeElucHV0IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ3VpZDogYW55ID0gR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9ICBcclxuICBcclxuICBjb250cm9sTW9kZWxDaGFuZ2UodmFsdWU6YW55LHN1YnRpdGxlOmFueSxvcHRpb246YW55KXsgXHJcbiAgICBsZXQgdmFsdWVzOmFueSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgfHwgW107XHJcblxyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgIGlmKCF2YWx1ZXMuc29tZSgoaXRlbTphbnkpPT57cmV0dXJuIGl0ZW0uZ3JvdXBpZD09c3VidGl0bGUudmFsdWV9KSl7XHJcbiAgICAgICAgdmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgZ3JvdXBpZDpzdWJ0aXRsZS52YWx1ZSxcclxuICAgICAgICAgIG9wdGlvbnM6W3tcclxuICAgICAgICAgICAgb3B0aW9uaWQ6b3B0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICBvcHRpb252YWx1ZTp2YWx1ZVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9KVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICBpZihpdGVtLmdyb3VwaWQ9PXN1YnRpdGxlLnZhbHVlKXtcclxuICAgICAgICAgICAgaWYoIWl0ZW0ub3B0aW9ucy5zb21lKChvcDphbnkpPT57cmV0dXJuIG9wLm9wdGlvbmlkPT1vcHRpb24udmFsdWV9KSl7XHJcbiAgICAgICAgICAgICAgaXRlbS5vcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uaWQ6b3B0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9udmFsdWU6dmFsdWVcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMuZm9yRWFjaCgob3A6YW55KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYob3Aub3B0aW9uaWQ9PW9wdGlvbi52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIG9wLm9wdGlvbnZhbHVlPXZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBcclxuICAgIH1lbHNle1xyXG4gICAgICB2YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgZ3JvdXBpZDpzdWJ0aXRsZS52YWx1ZSxcclxuICAgICAgICBvcHRpb25zOlt7XHJcbiAgICAgICAgICBvcHRpb25pZDpvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICBvcHRpb252YWx1ZTp2YWx1ZVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWVzKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJvbENoZWNrZWQoc3VidGl0bGU6IGFueSwgb3B0aW9uOiBhbnkpIHtcclxuICBcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgbGV0IHZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7IFxyXG4gICAgaWYgKHZhbHVlcyAhPSB1bmRlZmluZWQgJiYgdmFsdWVzICE9IG51bGwgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOmFueSk9PntcclxuICAgICAgICBpZih2YWx1ZS5ncm91cGlkPT1zdWJ0aXRsZS52YWx1ZSl7XHJcbiAgICAgICAgICB2YWx1ZS5vcHRpb25zLmZvckVhY2goKGl0ZW06YW55KT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtLm9wdGlvbmlkPT1vcHRpb24udmFsdWUpe1xyXG4gICAgICAgICAgICAgIHJlc3VsdD1pdGVtLm9wdGlvbnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ICBcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIC8v5re75Yqg6YCJ6aG5XHJcbiAgYWRkT3B0aW9uKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkXCIsIFwiXCIsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuICAvL+a3u+WKoOihjFxyXG4gIGFkZFN1YlRpdGxlKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwic3VidGl0bGVcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5om56YeP5re75YqgXHJcbiAgYWRkT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZHNcIiwgXCJcIiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG4gIC8v5Yig6Zmk6YCJ6aG5XHJcbiAgZGVsZXRlT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZpY2Uub3B0aW9uT3BlcmF0aW9uYWwoXCJkZWxldGVcIiwgb3B0aW9uLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19