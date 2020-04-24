/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldArrayType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
var VXFormFieldRepeat = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldRepeat, _super);
    function VXFormFieldRepeat(dyService) {
        var _this = _super.call(this) || this;
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldRepeat.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    VXFormFieldRepeat.prototype.groupOperational = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.service.groupOperational(type, this.field);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    VXFormFieldRepeat.prototype.delete = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (this.field.fieldGroup && this.field.fieldGroup.length > 1) {
            this.remove(i);
        }
        else {
        }
    };
    VXFormFieldRepeat.decorators = [
        { type: Component, args: [{
                    selector: "vxform-repeat",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <!--\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        -->\n        <div class=\"reportControl\">\n          <div class=\"report-header\">\n            <div class=\"left\">\n              <ul>\n                <li><label nz-checkbox [(ngModel)]=\"field.checked\"></label></li>\n                <li (click)=\"groupOperational('item')\">\n                  <i class=\"icon-TianJiaZiDuan\"></i>\u6DFB\u52A0\u5B57\u6BB5\n                </li>\n                <li (click)=\"groupOperational('remark')\">\n                  <i class=\"icon-other-WenBen\"></i>\u6DFB\u52A0\u6587\u672C\n                </li>\n                <li (click)=\"groupOperational('line')\">\n                  <i class=\"icon-FenGeXian\"></i>\u6DFB\u52A0\u5206\u5272\u7EBF\n                </li>\n              </ul>\n            </div>\n            <div class=\"right\">\n              <ul>\n                <li (click)=\"groupOperational('delete')\">\n                  <i class=\"icon-N_delete2\"></i>\u5220\u9664\n                </li>\n                <li (click)=\"groupOperational('up')\">\n                  <i class=\"icon-ShangYi\"></i>\u4E0A\u79FB\n                </li>\n                <li (click)=\"groupOperational('down')\">\n                  <i class=\"icon-XiaYi\"></i>\u4E0B\u79FB\n                </li>\n                <li (click)=\"fieldOperational('delete')\">\n                  <button class=\"btnDel\">\n                    <i class=\"icon-KT-Close\"></i>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"report-body\">\n            <ng-container *ngFor=\"let field of field.fieldGroup; let i = index\">\n              <vxform-field class=\"col\" [field]=\"field\"></vxform-field>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <div *ngFor=\"let field of field.fieldGroup; let i = index\" class=\"row\">\n        <vxform-field class=\"col\" [field]=\"field\"></vxform-field>\n\n        <span (click)=\"delete(i)\" class=\"del\">\u5220\u9664</span>\n\n        <div class=\"tips\"></div>\n      </div>\n      <div class=\"add\">\n        <span (click)=\"add()\">\u65B0\u589E</span>\n      </div>\n    </ng-container>\n  ",
                    host: {
                        "[class]": 'field.className || ""',
                        cdkDrag: ""
                    }
                }] }
    ];
    /** @nocollapse */
    VXFormFieldRepeat.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXFormFieldRepeat;
}(FieldArrayType));
export { VXFormFieldRepeat };
if (false) {
    /** @type {?} */
    VXFormFieldRepeat.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3RlbXBsYXRlcy9yZXBlYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBEO0lBd0V1Qyw2Q0FBYztJQUduRCwyQkFBWSxTQUEyQjtRQUF2QyxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7SUFDM0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxrQ0FBTTs7OztJQUFOLFVBQU8sQ0FBTTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO2FBQU07U0FDTjtJQUNILENBQUM7O2dCQTdGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwwN0VBZ0VUO29CQUNELElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsdUJBQXVCO3dCQUNsQyxPQUFPLEVBQUUsRUFBRTtxQkFDWjtpQkFDRjs7OztnQkF6RVEsZ0JBQWdCOztJQWdHekIsd0JBQUM7Q0FBQSxBQTlGRCxDQXdFdUMsY0FBYyxHQXNCcEQ7U0F0QlksaUJBQWlCOzs7SUFDNUIsb0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZEFycmF5VHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2RrRHJhZ0Ryb3AsXHJcbiAgbW92ZUl0ZW1JbkFycmF5LFxyXG4gIHRyYW5zZmVyQXJyYXlJdGVtXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eGZvcm0tcmVwZWF0XCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPCEtLVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZGNoZWNrYm94XCI+XHJcbiAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWVsZC5jaGVja2VkXCI+PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0Q29udHJvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlcG9ydC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiZ3JvdXBPcGVyYXRpb25hbCgnaXRlbScpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1UaWFuSmlhWmlEdWFuXCI+PC9pPua3u+WKoOWtl+autVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiZ3JvdXBPcGVyYXRpb25hbCgncmVtYXJrJylcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLW90aGVyLVdlbkJlblwiPjwvaT7mt7vliqDmlofmnKxcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cImdyb3VwT3BlcmF0aW9uYWwoJ2xpbmUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tRmVuR2VYaWFuXCI+PC9pPua3u+WKoOWIhuWJsue6v1xyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJncm91cE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tTl9kZWxldGUyXCI+PC9pPuWIoOmZpFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiZ3JvdXBPcGVyYXRpb25hbCgndXAnKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tU2hhbmdZaVwiPjwvaT7kuIrnp7tcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cImdyb3VwT3BlcmF0aW9uYWwoJ2Rvd24nKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tWGlhWWlcIj48L2k+5LiL56e7XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBvcnQtYm9keVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZC5maWVsZEdyb3VwOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPHZ4Zm9ybS1maWVsZCBjbGFzcz1cImNvbFwiIFtmaWVsZF09XCJmaWVsZFwiPjwvdnhmb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkLmZpZWxkR3JvdXA7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDx2eGZvcm0tZmllbGQgY2xhc3M9XCJjb2xcIiBbZmllbGRdPVwiZmllbGRcIj48L3Z4Zm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cImRlbGV0ZShpKVwiIGNsYXNzPVwiZGVsXCI+5Yig6ZmkPC9zcGFuPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxyXG4gICAgICAgIDxzcGFuIChjbGljayk9XCJhZGQoKVwiPuaWsOWinjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW2NsYXNzXVwiOiAnZmllbGQuY2xhc3NOYW1lIHx8IFwiXCInLFxyXG4gICAgY2RrRHJhZzogXCJcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUZpZWxkUmVwZWF0IGV4dGVuZHMgRmllbGRBcnJheVR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZHlTZXJ2aWNlOiBWWEZvcm1BbnRTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gZHlTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5maWVsZE9wZXJhdGlvbmFsKHNpZ24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBPcGVyYXRpb25hbCh0eXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VydmljZS5ncm91cE9wZXJhdGlvbmFsKHR5cGUsIHRoaXMuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGk6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZmllbGRHcm91cCAmJiB0aGlzLmZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLnJlbW92ZShpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==