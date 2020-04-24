/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, HostListener } from "@angular/core";
import { CdkOverlayOrigin } from "@angular/cdk/overlay";
import { FieldType } from "@vx-form/core";
var VXFormFieldTextI18n = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldTextI18n, _super);
    function VXFormFieldTextI18n() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.triggerWidth = "260px";
        _this.languageList = [
            { languagetype: "chinese", resvalue: "" },
            { languagetype: "english", resvalue: "" },
            { languagetype: "english2", resvalue: "" }
        ];
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormFieldTextI18n.prototype.resize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.visibleChange(event);
    };
    Object.defineProperty(VXFormFieldTextI18n.prototype, "language", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    VXFormFieldTextI18n.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.to.required) {
            /** @type {?} */
            var empty = this.languageList.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VXFormFieldTextI18n.prototype.visibleChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            if (this.cdkOverlayOrigin !== undefined) {
                this.triggerWidth =
                    this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect()
                        .width -
                        24 +
                        "px";
            }
        }
    };
    Object.defineProperty(VXFormFieldTextI18n.prototype, "langText", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.model != undefined &&
                this.model != null &&
                this.key != undefined &&
                this.key != null &&
                this.model[this.key] != undefined) {
                /** @type {?} */
                var lang = this.model[this.key];
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
        },
        enumerable: true,
        configurable: true
    });
    VXFormFieldTextI18n.decorators = [
        { type: Component, args: [{
                    selector: "vxform-field-inputi18n",
                    template: "\n    <ng-container *ngIf=\"editor === true\">\n      <div class=\"inputi18n\" cdkOverlayOrigin>\n        <input\n          nz-input\n          [(ngModel)]=\"language[0].resvalue\"\n          [vxFormAttributes]=\"field\"\n          (ngModelChange)=\"onChange(language[0].resvalue)\"\n          nz-popover\n          nzPopoverTrigger=\"click\"\n          [nzPopoverContent]=\"contentTemplate\"\n          nzOverlayClassName=\"inputi18n-template\"\n          nzPopoverPlacement=\"bottom\"\n          [nzOverlayStyle]=\"{ width: triggerWidth }\"\n          (nzVisibleChange)=\"visibleChange($event)\"\n        />\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </div>\n      <ng-template #contentTemplate>\n        <ul>\n          <ng-container *ngFor=\"let item of language; let i = index\">\n            <li *ngIf=\"i > 0\">\n              <label>{{ item.languagetype }}</label>\n              <input\n                nz-input\n                [(ngModel)]=\"item.resvalue\"\n                [vxFormAttributes]=\"field\"\n                (ngModelChange)=\"onChange(item.resvalue)\"\n              />\n            </li>\n          </ng-container>\n        </ul>\n      </ng-template>\n    </ng-container>\n    <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ langText }}</div>\n  "
                }] }
    ];
    VXFormFieldTextI18n.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: false },] }],
        resize: [{ type: HostListener, args: ["window:resize", ["$event"],] }]
    };
    return VXFormFieldTextI18n;
}(FieldType));
export { VXFormFieldTextI18n };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGkxOG4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdHlwZXMvdGV4dGkxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFNBQVMsRUFNVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUM7SUErQ3lDLCtDQUFTO0lBL0NsRDtRQUFBLHFFQTJJQztRQTFGQyxrQkFBWSxHQUFHLE9BQU8sQ0FBQztRQVF2QixrQkFBWSxHQUFlO1lBQ3pCLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1NBQzNDLENBQUM7O0lBOEVKLENBQUM7Ozs7O0lBckZDLG9DQUFNOzs7O0lBRE4sVUFDTyxLQUFVO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBT0Qsc0JBQUkseUNBQVE7Ozs7UUFBWjtZQUNFLElBQ0UsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUztnQkFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ25DO2dCQUNBLElBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksU0FBUztvQkFDbkMsSUFBSSxD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QztDQUFBLEFBM0lELENBK0N5QyxTQUFTLEdBNEZqRDtTQTVGWSxtQkFBbUI7OztJQUM5QixzQ0FBYTs7SUFDYiwyQ0FBdUI7O0lBRXZCLCtDQUMrQzs7SUFLL0MsMkNBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgRG9DaGVjayxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEhvc3RMaXN0ZW5lclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4gfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmb3JtLWZpZWxkLWlucHV0aTE4blwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWRpdG9yID09PSB0cnVlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dGkxOG5cIiBjZGtPdmVybGF5T3JpZ2luPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbnotaW5wdXRcclxuICAgICAgICAgIFsobmdNb2RlbCldPVwibGFuZ3VhZ2VbMF0ucmVzdmFsdWVcIlxyXG4gICAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UobGFuZ3VhZ2VbMF0ucmVzdmFsdWUpXCJcclxuICAgICAgICAgIG56LXBvcG92ZXJcclxuICAgICAgICAgIG56UG9wb3ZlclRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICBbbnpQb3BvdmVyQ29udGVudF09XCJjb250ZW50VGVtcGxhdGVcIlxyXG4gICAgICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lPVwiaW5wdXRpMThuLXRlbXBsYXRlXCJcclxuICAgICAgICAgIG56UG9wb3ZlclBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICBbbnpPdmVybGF5U3R5bGVdPVwieyB3aWR0aDogdHJpZ2dlcldpZHRoIH1cIlxyXG4gICAgICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJ2aXNpYmxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1iYW5nemh1XCJcclxuICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRpcHNcIlxyXG4gICAgICAgICAgICBuelRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICBuei10b29sdGlwXHJcbiAgICAgICAgICAgICpuZ0lmPVwidGlwcyAhPSAnJ1wiXHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsYW5ndWFnZTsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8bGkgKm5nSWY9XCJpID4gMFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD57eyBpdGVtLmxhbmd1YWdldHlwZSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuei1pbnB1dFxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtLnJlc3ZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKGl0ZW0ucmVzdmFsdWUpXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkdGV4dFwiICpuZ0lmPVwiZWRpdG9yID09PSBmYWxzZVwiPnt7IGxhbmdUZXh0IH19PC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRUZXh0STE4biBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIHRyaWdnZXJXaWR0aCA9IFwiMjYwcHhcIjtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luIHwgdW5kZWZpbmVkO1xyXG4gIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6cmVzaXplXCIsIFtcIiRldmVudFwiXSlcclxuICByZXNpemUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlKGV2ZW50KTtcclxuICB9XHJcbiAgbGFuZ3VhZ2VMaXN0OiBBcnJheTxhbnk+ID0gW1xyXG4gICAgeyBsYW5ndWFnZXR5cGU6IFwiY2hpbmVzZVwiLCByZXN2YWx1ZTogXCJcIiB9LFxyXG4gICAgeyBsYW5ndWFnZXR5cGU6IFwiZW5nbGlzaFwiLCByZXN2YWx1ZTogXCJcIiB9LFxyXG4gICAgeyBsYW5ndWFnZXR5cGU6IFwiZW5nbGlzaDJcIiwgcmVzdmFsdWU6IFwiXCIgfVxyXG4gIF07XHJcblxyXG4gIGdldCBsYW5ndWFnZSgpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5tb2RlbCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5tb2RlbCAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMua2V5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLmtleSAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMubW9kZWwuaGFzT3duUHJvcGVydHkodGhpcy5rZXkpXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPSBudWxsICYmXHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPSBbXSAmJlxyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPSB0aGlzLmxhbmd1YWdlTGlzdCkge1xyXG4gICAgICAgICAgdGhpcy5sYW5ndWFnZUxpc3QgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VMaXN0O1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMudG8ucmVxdWlyZWQpIHtcclxuICAgICAgbGV0IGVtcHR5ID0gdGhpcy5sYW5ndWFnZUxpc3Quc29tZSgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIGl0ZW0ucmVzdmFsdWUgPT09IG51bGwgfHxcclxuICAgICAgICAgIGl0ZW0ucmVzdmFsdWUgPT09IFwiXCIgfHxcclxuICAgICAgICAgIGl0ZW0ucmVzdmFsdWUgPT09IFwiIFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChlbXB0eSkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoW10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5sYW5ndWFnZUxpc3QpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMubGFuZ3VhZ2VMaXN0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgdmlzaWJsZUNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMuY2RrT3ZlcmxheU9yaWdpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPVxyXG4gICAgICAgICAgdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAud2lkdGggLVxyXG4gICAgICAgICAgMjQgK1xyXG4gICAgICAgICAgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbGFuZ1RleHQoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMubW9kZWwgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMubW9kZWwgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLmtleSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy5rZXkgIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLm1vZGVsW3RoaXMua2V5XSAhPSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICBsZXQgbGFuZyA9IHRoaXMubW9kZWxbdGhpcy5rZXldO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbGFuZyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICBsYW5nICE9IG51bGwgJiZcclxuICAgICAgICBsYW5nICE9IFwiXCIgJiZcclxuICAgICAgICBsYW5nIGluc3RhbmNlb2YgQXJyYXkgJiZcclxuICAgICAgICBsYW5nLmxlbmd0aCA+IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhbmdbMF1bXCJyZXN2YWx1ZVwiXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG4iXX0=