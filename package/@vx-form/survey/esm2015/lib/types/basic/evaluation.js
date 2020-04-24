/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { VXDialogService } from "../../service/dialog.service";
import { VXSurveyEditEvaluation } from "../../components/edit-evaluation/index.component";
export class VXSurveyEvaluation extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} vxDialogService
     */
    constructor(dyService, vxDialogService) {
        super();
        this.vxDialogService = vxDialogService;
        this.guid = Guid.create()["value"];
        this.start = 0;
        this._startContent = {
            label: "",
            tags: []
        };
        this.service = dyService;
        this.start = 1;
    }
    /**
     * @return {?}
     */
    get startContent() {
        if (this._startContent.label == "" && this.to.options != undefined) {
            this.to.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.value == this.start) {
                    this._startContent.label = item.label;
                    this._startContent.tags = item.tag.split(/[\s\n]/);
                }
            }));
        }
        return this._startContent;
    }
    /**
     * @return {?}
     */
    numberChange() {
        if (this.to.options != undefined) {
            this.to.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.value == this.start) {
                    this._startContent.label = item.label;
                    this._startContent.tags = item.tag.split(/[\s\n]/);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    editStart() {
        /** @type {?} */
        let para = {
            fieldConfig: this.field
        };
        this.vxDialogService.CreateModelDialog({
            nzTitle: "选项编辑",
            size: "large",
            nzContent: VXSurveyEditEvaluation
        }, para, (/**
         * @param {?} instance
         * @param {?} modal
         * @return {?}
         */
        (instance, modal) => {
            this.to.options = instance.editevaluationData;
            this.numberChange();
            modal.destroy();
        }));
    }
}
VXSurveyEvaluation.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-evaluation",
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
          <div class="option_wrap basic_evaluation">
            <nz-rate [(ngModel)]="start" [nzCount]="5"	(ngModelChange)="numberChange()"></nz-rate>
            <div class="label">"{{startContent.label}}"</div>
            <div class="tag">
              <ng-container *ngFor="let item of startContent.tags">
                <span>{{item}}</span>
              </ng-container>
              <label (click)="editStart()">
                编辑
              </label>
            </div>
          </div>
        </div> 
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-rate [nzCount]="5" [(ngModel)]="start" 	(ngModelChange)="numberChange()" 
        [formControl]="formControl"
        [vxFormAttributes]="field">
      </nz-rate>
      <div class="label">"{{startContent.label}}"</div>
      <div class="tag">
        <ng-container *ngFor="let item of startContent.tags">
          <span>{{item}}</span>
        </ng-container> 
      </div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXSurveyEvaluation.ctorParameters = () => [
    { type: VXFormAntService },
    { type: VXDialogService }
];
if (false) {
    /** @type {?} */
    VXSurveyEvaluation.prototype.service;
    /** @type {?} */
    VXSurveyEvaluation.prototype.guid;
    /** @type {?} */
    VXSurveyEvaluation.prototype.start;
    /** @type {?} */
    VXSurveyEvaluation.prototype._startContent;
    /** @type {?} */
    VXSurveyEvaluation.prototype.vxDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbHVhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy9ldmFsdWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQTJDMUYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7Ozs7O0lBc0IvQyxZQUFZLFNBQTJCLEVBQzlCLGVBQWdDO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBREQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBckJ6QyxTQUFJLEdBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQWEsR0FBUTtZQUNuQixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQTtRQWtCQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7O0lBbEJELElBQUksWUFBWTtRQUNkLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRTtZQUNsRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRDtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQVNELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRDtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsU0FBUzs7WUFDSCxJQUFJLEdBQUc7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDeEI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUNwQztZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLEVBQ0QsSUFBSTs7Ozs7UUFDSixDQUFDLFFBQWEsRUFBRSxLQUFVLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNUO2FBQ0Y7Ozs7WUE5Q1EsZ0JBQWdCO1lBR2hCLGVBQWU7Ozs7SUE2Q3RCLHFDQUFhOztJQUNiLGtDQUFtQzs7SUFDbkMsbUNBQWtCOztJQUNsQiwyQ0FHQzs7SUFnQkMsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgeyBWWERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kaWFsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleUVkaXRFdmFsdWF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZWRpdC1ldmFsdWF0aW9uL2luZGV4LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZXZhbHVhdGlvblwiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCJcclxuICAgICAgICAgID48L2lubGluZS1lZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2V2YWx1YXRpb25cIj5cclxuICAgICAgICAgICAgPG56LXJhdGUgWyhuZ01vZGVsKV09XCJzdGFydFwiIFtuekNvdW50XT1cIjVcIlx0KG5nTW9kZWxDaGFuZ2UpPVwibnVtYmVyQ2hhbmdlKClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlwie3tzdGFydENvbnRlbnQubGFiZWx9fVwiPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0YXJ0Q29udGVudC50YWdzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW19fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bGFiZWwgKGNsaWNrKT1cImVkaXRTdGFydCgpXCI+XHJcbiAgICAgICAgICAgICAgICDnvJbovpFcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuei1yYXRlIFtuekNvdW50XT1cIjVcIiBbKG5nTW9kZWwpXT1cInN0YXJ0XCIgXHQobmdNb2RlbENoYW5nZSk9XCJudW1iZXJDaGFuZ2UoKVwiIFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cclxuICAgICAgPC9uei1yYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cInt7c3RhcnRDb250ZW50LmxhYmVsfX1cIjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFnXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGFydENvbnRlbnQudGFnc1wiPlxyXG4gICAgICAgICAgPHNwYW4+e3tpdGVtfX08L3NwYW4+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5RXZhbHVhdGlvbiBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBzdGFydDogbnVtYmVyID0gMDtcclxuICBfc3RhcnRDb250ZW50OiBhbnkgPSB7XHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHRhZ3M6IFtdXHJcbiAgfVxyXG5cclxuICBnZXQgc3RhcnRDb250ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuX3N0YXJ0Q29udGVudC5sYWJlbCA9PSBcIlwiICYmIHRoaXMudG8ub3B0aW9ucyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50by5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnZhbHVlID09IHRoaXMuc3RhcnQpIHtcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Q29udGVudC5sYWJlbCA9IGl0ZW0ubGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5fc3RhcnRDb250ZW50LnRhZ3MgPSBpdGVtLnRhZy5zcGxpdCgvW1xcc1xcbl0vKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0Q29udGVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSxcclxuICAgIHB1YmxpYyB2eERpYWxvZ1NlcnZpY2U6IFZYRGlhbG9nU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICAgIHRoaXMuc3RhcnQgPSAxO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMudG8ub3B0aW9ucyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50by5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnZhbHVlID09IHRoaXMuc3RhcnQpIHtcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Q29udGVudC5sYWJlbCA9IGl0ZW0ubGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5fc3RhcnRDb250ZW50LnRhZ3MgPSBpdGVtLnRhZy5zcGxpdCgvW1xcc1xcbl0vKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZWRpdFN0YXJ0KCkge1xyXG4gICAgbGV0IHBhcmEgPSB7XHJcbiAgICAgIGZpZWxkQ29uZmlnOiB0aGlzLmZpZWxkXHJcbiAgICB9O1xyXG4gICAgdGhpcy52eERpYWxvZ1NlcnZpY2UuQ3JlYXRlTW9kZWxEaWFsb2coXHJcbiAgICAgIHtcclxuICAgICAgICBuelRpdGxlOiBcIumAiemhuee8lui+kVwiLFxyXG4gICAgICAgIHNpemU6IFwibGFyZ2VcIixcclxuICAgICAgICBuekNvbnRlbnQ6IFZYU3VydmV5RWRpdEV2YWx1YXRpb25cclxuICAgICAgfSxcclxuICAgICAgcGFyYSxcclxuICAgICAgKGluc3RhbmNlOiBhbnksIG1vZGFsOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnRvLm9wdGlvbnMgPSBpbnN0YW5jZS5lZGl0ZXZhbHVhdGlvbkRhdGE7XHJcbiAgICAgICAgdGhpcy5udW1iZXJDaGFuZ2UoKTtcclxuICAgICAgICBtb2RhbC5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==