/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
//cdkDrag
import { moveItemInArray } from '@angular/cdk/drag-drop';
var VXSurveyDragDrop = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyDragDrop, _super);
    function VXSurveyDragDrop(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    Object.defineProperty(VXSurveyDragDrop.prototype, "insertQuestionIndex", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = -1;
            if (this.to.index) {
                result = this.to.index;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} event
     * @return {?}
     */
    VXSurveyDragDrop.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            this.service.dragDropOperational(event.previousContainer.data, event.previousIndex, event.currentIndex);
        }
    };
    /**
     * @param {?} sign
     * @return {?}
     */
    VXSurveyDragDrop.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    //设置逻辑
    //设置逻辑
    /**
     * @param {?} field
     * @return {?}
     */
    VXSurveyDragDrop.prototype.logicQuestion = 
    //设置逻辑
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.service.questionOperational("logic", field);
    };
    //拷贝题目
    //拷贝题目
    /**
     * @param {?} field
     * @return {?}
     */
    VXSurveyDragDrop.prototype.copyQuestion = 
    //拷贝题目
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.service.questionOperational("copy", field);
    };
    //删除题目
    //删除题目
    /**
     * @param {?} field
     * @return {?}
     */
    VXSurveyDragDrop.prototype.delQuestion = 
    //删除题目
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.service.questionOperational("delete", field);
    };
    //点击题目
    //点击题目
    /**
     * @param {?} field
     * @return {?}
     */
    VXSurveyDragDrop.prototype.activeQuestion = 
    //点击题目
    /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!this.field.active) {
            this.service.questionOperational("active", field);
        }
    };
    VXSurveyDragDrop.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-drag-drop",
                    template: "\n  <div class=\"formly-drag-drop\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList [cdkDropListData]=\"field.fieldGroup\">\n  <div class=\"formly-drag-drop\">\n    <ng-container *ngFor=\"let field of field.fieldGroup;let index=index;\" > \n      <div  (click)=\"activeQuestion(field)\" *ngIf=\"field.active==true\" class=\"formly-drag-drop_wrap active\"> \n        <div class=\"field-operate\" >  \n          <span (click)=\"logicQuestion(field)\" nzTooltipTitle=\"\u903B\u8F91\u8BBE\u7F6E\" nzTooltipPlacement=\"top\" nz-tooltip>\u8BBE\u7F6E</span>\n          <span (click)=\"copyQuestion(field)\" nzTooltipTitle=\"\u590D\u5236\u9898\u76EE\" nzTooltipPlacement=\"top\" nz-tooltip>\u590D\u5236</span>\n          <span (click)=\"delQuestion(field)\"  nzTooltipTitle=\"\u5220\u9664\u9898\u76EE\" nzTooltipPlacement=\"top\" nz-tooltip>\u5220\u9664</span>\n        </div>\n        <div class=\"field-content\">\n        <vxform-field [field]=\"field\" [rownumber]=\"index+1\"></vxform-field>\n        </div>\n      </div>\n      \n      <div  (click)=\"activeQuestion(field)\" *ngIf=\"field.active!=true \" class=\"formly-drag-drop_wrap\" cdkDrag> \n         \n        <div class=\"field-content\">\n        <vxform-field [field]=\"field\" [rownumber]=\"index+1\"></vxform-field>\n        </div>\n      </div>\n    </ng-container> \n  </div>\n  \n  <ng-container *ngIf=\"field.fieldGroup==null || field.fieldGroup.length==0\" >\n  <div class=\"formly_empty\">\n    <div class=\"formly-drag-drop\"  (cdkDropListDropped)=\"drop($event)\" cdkDropList [cdkDropListData]=\"field.fieldGroup\">\n      \u8BF7\u628A\u9898\u578B\u62D6\u5165\u6B64\u533A\u57DF\n    </div>\n  </div>\n</ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyDragDrop.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyDragDrop;
}(FieldType));
export { VXSurveyDragDrop };
if (false) {
    /** @type {?} */
    VXSurveyDragDrop.prototype.service;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2RyYWctZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFcEQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFO0lBbUNzQyw0Q0FBUztJQVU3QywwQkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQztJQVZELHNCQUFJLGlEQUFtQjs7OztRQUF2Qjs7Z0JBQ00sTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUM7Z0JBQ2YsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOzs7OztJQU9GLCtCQUFJOzs7O0lBQUosVUFBSyxLQUE0QjtRQUUvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDOUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFDRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELE1BQU07Ozs7OztJQUNOLHdDQUFhOzs7Ozs7SUFBYixVQUFjLEtBQVM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELE1BQU07Ozs7OztJQUNOLHVDQUFZOzs7Ozs7SUFBWixVQUFhLEtBQVM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE1BQU07Ozs7OztJQUNOLHNDQUFXOzs7Ozs7SUFBWCxVQUFZLEtBQVM7UUFFbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELE1BQU07Ozs7OztJQUNOLHlDQUFjOzs7Ozs7SUFBZCxVQUFlLEtBQVM7UUFDdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7Z0JBckZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsOHBEQStCVDtpQkFDRjs7OztnQkFyQ1EsZ0JBQWdCOztJQTBGekIsdUJBQUM7Q0FBQSxBQXZGRCxDQW1Dc0MsU0FBUyxHQW9EOUM7U0FwRFksZ0JBQWdCOzs7SUFDM0IsbUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzL3NlcnZpY2VcIjtcclxuLy9jZGtEcmFnXHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZHJhZy1kcm9wXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiZm9ybWx5LWRyYWctZHJvcFwiICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiIGNka0Ryb3BMaXN0IFtjZGtEcm9wTGlzdERhdGFdPVwiZmllbGQuZmllbGRHcm91cFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtbHktZHJhZy1kcm9wXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZC5maWVsZEdyb3VwO2xldCBpbmRleD1pbmRleDtcIiA+IFxyXG4gICAgICA8ZGl2ICAoY2xpY2spPVwiYWN0aXZlUXVlc3Rpb24oZmllbGQpXCIgKm5nSWY9XCJmaWVsZC5hY3RpdmU9PXRydWVcIiBjbGFzcz1cImZvcm1seS1kcmFnLWRyb3Bfd3JhcCBhY3RpdmVcIj4gXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLW9wZXJhdGVcIiA+ICBcclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJsb2dpY1F1ZXN0aW9uKGZpZWxkKVwiIG56VG9vbHRpcFRpdGxlPVwi6YC76L6R6K6+572uXCIgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCIgbnotdG9vbHRpcD7orr7nva48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiY29weVF1ZXN0aW9uKGZpZWxkKVwiIG56VG9vbHRpcFRpdGxlPVwi5aSN5Yi26aKY55uuXCIgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCIgbnotdG9vbHRpcD7lpI3liLY8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiZGVsUXVlc3Rpb24oZmllbGQpXCIgIG56VG9vbHRpcFRpdGxlPVwi5Yig6Zmk6aKY55uuXCIgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCIgbnotdG9vbHRpcD7liKDpmaQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWNvbnRlbnRcIj5cclxuICAgICAgICA8dnhmb3JtLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtyb3dudW1iZXJdPVwiaW5kZXgrMVwiPjwvdnhmb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgIChjbGljayk9XCJhY3RpdmVRdWVzdGlvbihmaWVsZClcIiAqbmdJZj1cImZpZWxkLmFjdGl2ZSE9dHJ1ZSBcIiBjbGFzcz1cImZvcm1seS1kcmFnLWRyb3Bfd3JhcFwiIGNka0RyYWc+IFxyXG4gICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGVudFwiPlxyXG4gICAgICAgIDx2eGZvcm0tZmllbGQgW2ZpZWxkXT1cImZpZWxkXCIgW3Jvd251bWJlcl09XCJpbmRleCsxXCI+PC92eGZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+IFxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5maWVsZEdyb3VwPT1udWxsIHx8IGZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoPT0wXCIgPlxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtbHlfZW1wdHlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtbHktZHJhZy1kcm9wXCIgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCIgY2RrRHJvcExpc3QgW2Nka0Ryb3BMaXN0RGF0YV09XCJmaWVsZC5maWVsZEdyb3VwXCI+XHJcbiAgICAgIOivt+aKiumimOWei+aLluWFpeatpOWMuuWfn1xyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5RHJhZ0Ryb3AgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuXHJcbiAgZ2V0IGluc2VydFF1ZXN0aW9uSW5kZXgoKXtcclxuICAgIGxldCByZXN1bHQgPSAtMTtcclxuICAgIGlmKHRoaXMudG8uaW5kZXgpe1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnRvLmluZGV4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcbiAgXHJcbiBcclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgXHJcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xyXG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlcnZpY2UuZHJhZ0Ryb3BPcGVyYXRpb25hbChcclxuICAgICAgICBldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxyXG4gICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICB9XHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy/orr7nva7pgLvovpFcclxuICBsb2dpY1F1ZXN0aW9uKGZpZWxkOmFueSl7XHJcbiAgICB0aGlzLnNlcnZpY2UucXVlc3Rpb25PcGVyYXRpb25hbChcImxvZ2ljXCIsZmllbGQpO1xyXG4gIH1cclxuICAvL+aLt+i0nemimOebrlxyXG4gIGNvcHlRdWVzdGlvbihmaWVsZDphbnkpeyBcclxuICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiY29weVwiLGZpZWxkKTtcclxuICB9XHJcbiAgLy/liKDpmaTpopjnm65cclxuICBkZWxRdWVzdGlvbihmaWVsZDphbnkpXHJcbiAgeyAgXHJcbiAgICB0aGlzLnNlcnZpY2UucXVlc3Rpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLGZpZWxkKTtcclxuICB9XHJcbiAgLy/ngrnlh7vpopjnm65cclxuICBhY3RpdmVRdWVzdGlvbihmaWVsZDphbnkpe1xyXG4gICAgaWYoIXRoaXMuZmllbGQuYWN0aXZlKXsgXHJcbiAgICAgIHRoaXMuc2VydmljZS5xdWVzdGlvbk9wZXJhdGlvbmFsKFwiYWN0aXZlXCIsZmllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19