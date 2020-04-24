/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
import { VXDialogService } from "../../service/dialog.service";
import { VXSurveyEditEvaluation } from "../../components/edit-evaluation/index.component";
var VXSurveyEvaluation = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyEvaluation, _super);
    function VXSurveyEvaluation(dyService, vxDialogService) {
        var _this = _super.call(this) || this;
        _this.vxDialogService = vxDialogService;
        _this.guid = Guid.create()["value"];
        _this.start = 0;
        _this._startContent = {
            label: "",
            tags: []
        };
        _this.service = dyService;
        _this.start = 1;
        return _this;
    }
    Object.defineProperty(VXSurveyEvaluation.prototype, "startContent", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._startContent.label == "" && this.to.options != undefined) {
                this.to.options.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.value == _this.start) {
                        _this._startContent.label = item.label;
                        _this._startContent.tags = item.tag.split(/[\s\n]/);
                    }
                }));
            }
            return this._startContent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VXSurveyEvaluation.prototype.numberChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.to.options != undefined) {
            this.to.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.value == _this.start) {
                    _this._startContent.label = item.label;
                    _this._startContent.tags = item.tag.split(/[\s\n]/);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    VXSurveyEvaluation.prototype.editStart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var para = {
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
        function (instance, modal) {
            _this.to.options = instance.editevaluationData;
            _this.numberChange();
            modal.destroy();
        }));
    };
    VXSurveyEvaluation.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-evaluation",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_evaluation\">\n            <nz-rate [(ngModel)]=\"start\" [nzCount]=\"5\"\t(ngModelChange)=\"numberChange()\"></nz-rate>\n            <div class=\"label\">\"{{startContent.label}}\"</div>\n            <div class=\"tag\">\n              <ng-container *ngFor=\"let item of startContent.tags\">\n                <span>{{item}}</span>\n              </ng-container>\n              <label (click)=\"editStart()\">\n                \u7F16\u8F91\n              </label>\n            </div>\n          </div>\n        </div> \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-rate [nzCount]=\"5\" [(ngModel)]=\"start\" \t(ngModelChange)=\"numberChange()\" \n        [formControl]=\"formControl\"\n        [vxFormAttributes]=\"field\">\n      </nz-rate>\n      <div class=\"label\">\"{{startContent.label}}\"</div>\n      <div class=\"tag\">\n        <ng-container *ngFor=\"let item of startContent.tags\">\n          <span>{{item}}</span>\n        </ng-container> \n      </div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyEvaluation.ctorParameters = function () { return [
        { type: VXFormAntService },
        { type: VXDialogService }
    ]; };
    return VXSurveyEvaluation;
}(FieldType));
export { VXSurveyEvaluation };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbHVhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy9ldmFsdWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUY7SUF5Q3dDLDhDQUFTO0lBc0IvQyw0QkFBWSxTQUEyQixFQUM5QixlQUFnQztRQUR6QyxZQUVFLGlCQUFPLFNBR1I7UUFKUSxxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFyQnpDLFVBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFRO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFBO1FBa0JDLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBbEJELHNCQUFJLDRDQUFZOzs7O1FBQWhCO1lBQUEsaUJBV0M7WUFWQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxJQUFTO29CQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTt3QkFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFFdEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3BEO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFTRCx5Q0FBWTs7O0lBQVo7UUFBQSxpQkFVQztRQVRDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLElBQVM7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsS0FBSyxFQUFFO29CQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUV0QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUFBLGlCQWlCQzs7WUFoQkssSUFBSSxHQUFHO1lBQ1QsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FDcEM7WUFDRSxPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLHNCQUFzQjtTQUNsQyxFQUNELElBQUk7Ozs7O1FBQ0osVUFBQyxRQUFhLEVBQUUsS0FBVTtZQUN4QixLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFDOUMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQW5HRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLHc1Q0FxQ1Q7aUJBQ0Y7Ozs7Z0JBOUNRLGdCQUFnQjtnQkFHaEIsZUFBZTs7SUF1R3hCLHlCQUFDO0NBQUEsQUFwR0QsQ0F5Q3dDLFNBQVMsR0EyRGhEO1NBM0RZLGtCQUFrQjs7O0lBQzdCLHFDQUFhOztJQUNiLGtDQUFtQzs7SUFDbkMsbUNBQWtCOztJQUNsQiwyQ0FHQzs7SUFnQkMsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgeyBWWERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9kaWFsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleUVkaXRFdmFsdWF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZWRpdC1ldmFsdWF0aW9uL2luZGV4LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZXZhbHVhdGlvblwiLFxyXG4gIHRlbXBsYXRlOiBgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlubGluZS1lZGl0b3IgWyhuZ01vZGVsKV09XCJ0by5sYWJlbFwiIFthY3RpdmVdPVwiYWN0aXZlXCJcclxuICAgICAgICAgID48L2lubGluZS1lZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXdyYXBfY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbl93cmFwIGJhc2ljX2V2YWx1YXRpb25cIj5cclxuICAgICAgICAgICAgPG56LXJhdGUgWyhuZ01vZGVsKV09XCJzdGFydFwiIFtuekNvdW50XT1cIjVcIlx0KG5nTW9kZWxDaGFuZ2UpPVwibnVtYmVyQ2hhbmdlKClcIj48L256LXJhdGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlwie3tzdGFydENvbnRlbnQubGFiZWx9fVwiPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0YXJ0Q29udGVudC50YWdzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW19fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bGFiZWwgKGNsaWNrKT1cImVkaXRTdGFydCgpXCI+XHJcbiAgICAgICAgICAgICAgICDnvJbovpFcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuei1yYXRlIFtuekNvdW50XT1cIjVcIiBbKG5nTW9kZWwpXT1cInN0YXJ0XCIgXHQobmdNb2RlbENoYW5nZSk9XCJudW1iZXJDaGFuZ2UoKVwiIFxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXHJcbiAgICAgICAgW3Z4Rm9ybUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cclxuICAgICAgPC9uei1yYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cInt7c3RhcnRDb250ZW50LmxhYmVsfX1cIjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFnXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGFydENvbnRlbnQudGFnc1wiPlxyXG4gICAgICAgICAgPHNwYW4+e3tpdGVtfX08L3NwYW4+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5RXZhbHVhdGlvbiBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGd1aWQ6IGFueSA9IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXTtcclxuICBzdGFydDogbnVtYmVyID0gMDtcclxuICBfc3RhcnRDb250ZW50OiBhbnkgPSB7XHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHRhZ3M6IFtdXHJcbiAgfVxyXG5cclxuICBnZXQgc3RhcnRDb250ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuX3N0YXJ0Q29udGVudC5sYWJlbCA9PSBcIlwiICYmIHRoaXMudG8ub3B0aW9ucyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50by5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnZhbHVlID09IHRoaXMuc3RhcnQpIHtcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Q29udGVudC5sYWJlbCA9IGl0ZW0ubGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5fc3RhcnRDb250ZW50LnRhZ3MgPSBpdGVtLnRhZy5zcGxpdCgvW1xcc1xcbl0vKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0Q29udGVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSxcclxuICAgIHB1YmxpYyB2eERpYWxvZ1NlcnZpY2U6IFZYRGlhbG9nU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICAgIHRoaXMuc3RhcnQgPSAxO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMudG8ub3B0aW9ucyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50by5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnZhbHVlID09IHRoaXMuc3RhcnQpIHtcclxuICAgICAgICAgIHRoaXMuX3N0YXJ0Q29udGVudC5sYWJlbCA9IGl0ZW0ubGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5fc3RhcnRDb250ZW50LnRhZ3MgPSBpdGVtLnRhZy5zcGxpdCgvW1xcc1xcbl0vKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZWRpdFN0YXJ0KCkge1xyXG4gICAgbGV0IHBhcmEgPSB7XHJcbiAgICAgIGZpZWxkQ29uZmlnOiB0aGlzLmZpZWxkXHJcbiAgICB9O1xyXG4gICAgdGhpcy52eERpYWxvZ1NlcnZpY2UuQ3JlYXRlTW9kZWxEaWFsb2coXHJcbiAgICAgIHtcclxuICAgICAgICBuelRpdGxlOiBcIumAiemhuee8lui+kVwiLFxyXG4gICAgICAgIHNpemU6IFwibGFyZ2VcIixcclxuICAgICAgICBuekNvbnRlbnQ6IFZYU3VydmV5RWRpdEV2YWx1YXRpb25cclxuICAgICAgfSxcclxuICAgICAgcGFyYSxcclxuICAgICAgKGluc3RhbmNlOiBhbnksIG1vZGFsOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnRvLm9wdGlvbnMgPSBpbnN0YW5jZS5lZGl0ZXZhbHVhdGlvbkRhdGE7XHJcbiAgICAgICAgdGhpcy5udW1iZXJDaGFuZ2UoKTtcclxuICAgICAgICBtb2RhbC5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==