/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, HostListener } from "@angular/core";
import { CdkOverlayOrigin } from "@angular/cdk/overlay";
import { FieldType } from "@vx-form/core";
export class VXFormFieldTextI18n extends FieldType {
    constructor() {
        super(...arguments);
        this.triggerWidth = "260px";
        this.languageList = [
            { languagetype: "chinese", resvalue: "" },
            { languagetype: "english", resvalue: "" },
            { languagetype: "english2", resvalue: "" }
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resize(event) {
        this.visibleChange(event);
    }
    /**
     * @return {?}
     */
    get language() {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model.hasOwnProperty(this.key)) {
            if (this.formControl.value != undefined &&
                this.formControl.value != null &&
                this.formControl.value != [] &&
                this.formControl.value.length > 0) {
                if (this.formControl.value != this.languageList) {
                    this.languageList = this.formControl.value;
                }
            }
        }
        return this.languageList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        if (this.to.required) {
            /** @type {?} */
            let empty = this.languageList.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return (item.resvalue === null ||
                    item.resvalue === "" ||
                    item.resvalue === " ");
            }));
            if (empty) {
                this.formControl.setValue([]);
            }
            else {
                this.formControl.setValue(this.languageList);
            }
        }
        else {
            this.formControl.setValue(this.languageList);
        }
        this.formControl.markAsTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    visibleChange(event) {
        if (event) {
            if (this.cdkOverlayOrigin !== undefined) {
                this.triggerWidth =
                    this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect()
                        .width -
                        24 +
                        "px";
            }
        }
    }
    /**
     * @return {?}
     */
    get langText() {
        if (this.model != undefined &&
            this.model != null &&
            this.key != undefined &&
            this.key != null &&
            this.model[this.key] != undefined) {
            /** @type {?} */
            let lang = this.model[this.key];
            if (lang != undefined &&
                lang != null &&
                lang != "" &&
                lang instanceof Array &&
                lang.length > 0) {
                return lang[0]["resvalue"];
            }
            return "";
        }
        return "";
    }
}
VXFormFieldTextI18n.decorators = [
    { type: Component, args: [{
                selector: "vxform-field-inputi18n",
                template: `
    <ng-container *ngIf="editor === true">
      <div class="inputi18n" cdkOverlayOrigin>
        <input
          nz-input
          [(ngModel)]="language[0].resvalue"
          [vxFormAttributes]="field"
          (ngModelChange)="onChange(language[0].resvalue)"
          nz-popover
          nzPopoverTrigger="click"
          [nzPopoverContent]="contentTemplate"
          nzOverlayClassName="inputi18n-template"
          nzPopoverPlacement="bottom"
          [nzOverlayStyle]="{ width: triggerWidth }"
          (nzVisibleChange)="visibleChange($event)"
        />
        <div class="tips">
          <i
            class="icon-bangzhu"
            [nzTooltipTitle]="tips"
            nzTooltipPlacement="top"
            nz-tooltip
            *ngIf="tips != ''"
          ></i>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ul>
          <ng-container *ngFor="let item of language; let i = index">
            <li *ngIf="i > 0">
              <label>{{ item.languagetype }}</label>
              <input
                nz-input
                [(ngModel)]="item.resvalue"
                [vxFormAttributes]="field"
                (ngModelChange)="onChange(item.resvalue)"
              />
            </li>
          </ng-container>
        </ul>
      </ng-template>
    </ng-container>
    <div class="fieldtext" *ngIf="editor === false">{{ langText }}</div>
  `
            }] }
];
VXFormFieldTextI18n.propDecorators = {
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
    resize: [{ type: HostListener, args: ["window:resize", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    VXFormFieldTextI18n.prototype.service;
    /** @type {?} */
    VXFormFieldTextI18n.prototype.triggerWidth;
    /** @type {?} */
    VXFormFieldTextI18n.prototype.cdkOverlayOrigin;
    /** @type {?} */
    VXFormFieldTextI18n.prototype.languageList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGkxOG4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvdGV4dGkxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQU1ULFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1EMUMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7SUEvQ2xEOztRQWlERSxpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQVF2QixpQkFBWSxHQUFlO1lBQ3pCLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1NBQzNDLENBQUM7SUE4RUosQ0FBQzs7Ozs7SUFyRkMsTUFBTSxDQUFDLEtBQVU7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFPRCxJQUFJLFFBQVE7UUFDVixJQUNFLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUztZQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTO1lBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSTtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ25DO1lBQ0EsSUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUss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SUFFdkIsK0NBQytDOztJQUsvQywyQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBEb0NoZWNrLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tZmllbGQtaW5wdXRpMThuXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0aTE4blwiIGNka092ZXJsYXlPcmlnaW4+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuei1pbnB1dFxyXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJsYW5ndWFnZVswXS5yZXN2YWx1ZVwiXHJcbiAgICAgICAgICBbdnhGb3JtQXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZShsYW5ndWFnZVswXS5yZXN2YWx1ZSlcIlxyXG4gICAgICAgICAgbnotcG9wb3ZlclxyXG4gICAgICAgICAgbnpQb3BvdmVyVHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgIFtuelBvcG92ZXJDb250ZW50XT1cImNvbnRlbnRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJpbnB1dGkxOG4tdGVtcGxhdGVcIlxyXG4gICAgICAgICAgbnpQb3BvdmVyUGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgIFtuek92ZXJsYXlTdHlsZV09XCJ7IHdpZHRoOiB0cmlnZ2VyV2lkdGggfVwiXHJcbiAgICAgICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cInZpc2libGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJhbmd6aHVcIlxyXG4gICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwidGlwc1wiXHJcbiAgICAgICAgICAgIG56VG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICAgICAgKm5nSWY9XCJ0aXBzICE9ICcnXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxhbmd1YWdlOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdJZj1cImkgPiAwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPnt7IGl0ZW0ubGFuZ3VhZ2V0eXBlIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG56LWlucHV0XHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0ucmVzdmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoaXRlbS5yZXN2YWx1ZSlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgbGFuZ1RleHQgfX08L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZFRleHRJMThuIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgdHJpZ2dlcldpZHRoID0gXCIyNjBweFwiO1xyXG5cclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW4gfCB1bmRlZmluZWQ7XHJcbiAgQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpyZXNpemVcIiwgW1wiJGV2ZW50XCJdKVxyXG4gIHJlc2l6ZShldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UoZXZlbnQpO1xyXG4gIH1cclxuICBsYW5ndWFnZUxpc3Q6IEFycmF5PGFueT4gPSBbXHJcbiAgICB7IGxhbmd1YWdldHlwZTogXCJjaGluZXNlXCIsIHJlc3ZhbHVlOiBcIlwiIH0sXHJcbiAgICB7IGxhbmd1YWdldHlwZTogXCJlbmdsaXNoXCIsIHJlc3ZhbHVlOiBcIlwiIH0sXHJcbiAgICB7IGxhbmd1YWdldHlwZTogXCJlbmdsaXNoMlwiLCByZXN2YWx1ZTogXCJcIiB9XHJcbiAgXTtcclxuXHJcbiAgZ2V0IGxhbmd1YWdlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm1vZGVsICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLm1vZGVsICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5rZXkgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMua2V5ICE9IG51bGwgJiZcclxuICAgICAgdGhpcy5tb2RlbC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmtleSlcclxuICAgICkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9IG51bGwgJiZcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9IFtdICYmXHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC52YWx1ZS5sZW5ndGggPiAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9IHRoaXMubGFuZ3VhZ2VMaXN0KSB7XHJcbiAgICAgICAgICB0aGlzLmxhbmd1YWdlTGlzdCA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZUxpc3Q7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy50by5yZXF1aXJlZCkge1xyXG4gICAgICBsZXQgZW1wdHkgPSB0aGlzLmxhbmd1YWdlTGlzdC5zb21lKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgaXRlbS5yZXN2YWx1ZSA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgaXRlbS5yZXN2YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgICAgICAgaXRlbS5yZXN2YWx1ZSA9PT0gXCIgXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShbXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmxhbmd1YWdlTGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5sYW5ndWFnZUxpc3QpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICB2aXNpYmxlQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5jZGtPdmVybGF5T3JpZ2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9XHJcbiAgICAgICAgICB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIC53aWR0aCAtXHJcbiAgICAgICAgICAyNCArXHJcbiAgICAgICAgICBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsYW5nVGV4dCgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmtleSAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMubW9kZWxbdGhpcy5rZXldICE9IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBsYW5nID0gdGhpcy5tb2RlbFt0aGlzLmtleV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBsYW5nICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGxhbmcgIT0gbnVsbCAmJlxyXG4gICAgICAgIGxhbmcgIT0gXCJcIiAmJlxyXG4gICAgICAgIGxhbmcgaW5zdGFuY2VvZiBBcnJheSAmJlxyXG4gICAgICAgIGxhbmcubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gbGFuZ1swXVtcInJlc3ZhbHVlXCJdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcbiJdfQ==