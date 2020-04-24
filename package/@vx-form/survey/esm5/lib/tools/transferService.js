/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { VXRadioService } from './radio_Service';
import { VXCheckboxService } from './checkbox_Service';
import { VXInputService } from './input_Service';
import { VXCascaderService } from './cascader_Service';
import { VXOtherService } from './other_Service';
import { VXMatrixService } from './matrix_Service';
var VXTransferService = /** @class */ (function () {
    function VXTransferService(vxRadioService, vxCheckboxService, vxInputService, vxCascaderService, vxOtherService, vxMatrixService) {
        this.vxRadioService = vxRadioService;
        this.vxCheckboxService = vxCheckboxService;
        this.vxInputService = vxInputService;
        this.vxCascaderService = vxCascaderService;
        this.vxOtherService = vxOtherService;
        this.vxMatrixService = vxMatrixService;
    }
    /**
     * @param {?} questionType
     * @param {?} form_fields
     * @param {?} currentIndex
     * @return {?}
     */
    VXTransferService.prototype.transferQuestionByType = /**
     * @param {?} questionType
     * @param {?} form_fields
     * @param {?} currentIndex
     * @return {?}
     */
    function (questionType, form_fields, currentIndex) {
        if (questionType != undefined && questionType != null && questionType.type != undefined && questionType.type != null) {
            /** @type {?} */
            var obj = this.initQuestion(questionType);
            if (currentIndex > -1) {
                form_fields.splice(currentIndex, 0, obj);
            }
            else {
                form_fields.push(obj);
            }
        }
    };
    /**
     * @private
     * @param {?} questionType
     * @return {?}
     */
    VXTransferService.prototype.initQuestion = /**
     * @private
     * @param {?} questionType
     * @return {?}
     */
    function (questionType) {
        /** @type {?} */
        var question = {};
        switch (questionType.type) {
            case "radio":
                question = this.vxRadioService.create_radio(questionType);
                break;
            case "checkbox":
                question = this.vxCheckboxService.create_checkbox(questionType);
                break;
            case "cascader":
                question = this.vxCascaderService.create_cascader(questionType);
                break;
            case "input":
                question = this.vxInputService.create_input(questionType);
                break;
            case "line":
                question = this.vxOtherService.create_line();
                break;
            case "remark":
                question = this.vxOtherService.create_remark();
                break;
            case "date":
                question = this.vxOtherService.create_date();
                break;
            case "time":
                question = this.vxOtherService.create_time();
                break;
            case "dropdown":
                question = this.vxOtherService.create_dropdown();
                break;
            case "score":
                question = this.vxOtherService.create_score();
                break;
            case "nps":
                question = this.vxOtherService.create_nps();
                break;
            case "proportion":
                question = this.vxOtherService.create_proportion();
                break;
            case "evaluation":
                question = this.vxOtherService.create_evaluation();
                break;
            case "matrix_radio":
            case "matrix_checkbox":
            case "matrix_score":
            case "matrix_input":
                question = this.vxMatrixService.create_matrix(questionType);
                break;
            case "input_group":
                question = this.vxOtherService.create_inputGroup();
                break;
        }
        return question;
    };
    VXTransferService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXTransferService.ctorParameters = function () { return [
        { type: VXRadioService },
        { type: VXCheckboxService },
        { type: VXInputService },
        { type: VXCascaderService },
        { type: VXOtherService },
        { type: VXMatrixService }
    ]; };
    return VXTransferService;
}());
export { VXTransferService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.vxRadioService;
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.vxCheckboxService;
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.vxInputService;
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.vxCascaderService;
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.vxOtherService;
    /**
     * @type {?}
     * @private
     */
    VXTransferService.prototype.vxMatrixService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL3Rvb2xzL3RyYW5zZmVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVFuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbkQ7SUFFRSwyQkFDVSxjQUE4QixFQUM5QixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGVBQWdDO1FBTGhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDdEMsQ0FBQzs7Ozs7OztJQUVMLGtEQUFzQjs7Ozs7O0lBQXRCLFVBQXVCLFlBQWlCLEVBQUUsV0FBZ0MsRUFBRSxZQUFvQjtRQUU5RixJQUFJLFlBQVksSUFBSSxTQUFTLElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTs7Z0JB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Qyw4Q0FBNEM7Ozs7O0lBQzVDLDJDQUFzQzs7Ozs7SUFDdEMsOENBQTRDOzs7OztJQUM1QywyQ0FBc0M7Ozs7O0lBQ3RDLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgVlhUYWJsZUZpZWxkQ29uZmlnLFxyXG4gIFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIEd1aWQsXHJcbiAgY2xvbmVcclxufSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgVlhSYWRpb1NlcnZpY2UgfSBmcm9tICcuL3JhZGlvX1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBWWENoZWNrYm94U2VydmljZSB9IGZyb20gJy4vY2hlY2tib3hfU2VydmljZSc7XHJcbmltcG9ydCB7IFZYSW5wdXRTZXJ2aWNlIH0gZnJvbSAnLi9pbnB1dF9TZXJ2aWNlJztcclxuaW1wb3J0IHsgVlhDYXNjYWRlclNlcnZpY2UgfSBmcm9tICcuL2Nhc2NhZGVyX1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBWWE90aGVyU2VydmljZSB9IGZyb20gJy4vb3RoZXJfU2VydmljZSc7XHJcbmltcG9ydCB7IFZYTWF0cml4U2VydmljZSB9IGZyb20gJy4vbWF0cml4X1NlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhUcmFuc2ZlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB2eFJhZGlvU2VydmljZTogVlhSYWRpb1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZ4Q2hlY2tib3hTZXJ2aWNlOiBWWENoZWNrYm94U2VydmljZSxcclxuICAgIHByaXZhdGUgdnhJbnB1dFNlcnZpY2U6IFZYSW5wdXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2eENhc2NhZGVyU2VydmljZTogVlhDYXNjYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZ4T3RoZXJTZXJ2aWNlOiBWWE90aGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgdnhNYXRyaXhTZXJ2aWNlOiBWWE1hdHJpeFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICB0cmFuc2ZlclF1ZXN0aW9uQnlUeXBlKHF1ZXN0aW9uVHlwZTogYW55LCBmb3JtX2ZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSwgY3VycmVudEluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICBpZiAocXVlc3Rpb25UeXBlICE9IHVuZGVmaW5lZCAmJiBxdWVzdGlvblR5cGUgIT0gbnVsbCAmJiBxdWVzdGlvblR5cGUudHlwZSAhPSB1bmRlZmluZWQgJiYgcXVlc3Rpb25UeXBlLnR5cGUgIT0gbnVsbCkge1xyXG4gICAgICBsZXQgb2JqOiBWWEZvcm1GaWVsZENvbmZpZyA9IHRoaXMuaW5pdFF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSk7XHJcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPiAtMSkge1xyXG4gICAgICAgIGZvcm1fZmllbGRzLnNwbGljZShjdXJyZW50SW5kZXgsIDAsIG9iaik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybV9maWVsZHMucHVzaChvYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRRdWVzdGlvbihxdWVzdGlvblR5cGU6IGFueSkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9O1xyXG4gICAgc3dpdGNoIChxdWVzdGlvblR5cGUudHlwZSkge1xyXG4gICAgICBjYXNlIFwicmFkaW9cIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhSYWRpb1NlcnZpY2UuY3JlYXRlX3JhZGlvKHF1ZXN0aW9uVHlwZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhDaGVja2JveFNlcnZpY2UuY3JlYXRlX2NoZWNrYm94KHF1ZXN0aW9uVHlwZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiY2FzY2FkZXJcIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhDYXNjYWRlclNlcnZpY2UuY3JlYXRlX2Nhc2NhZGVyKHF1ZXN0aW9uVHlwZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiaW5wdXRcIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhJbnB1dFNlcnZpY2UuY3JlYXRlX2lucHV0KHF1ZXN0aW9uVHlwZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibGluZVwiOlxyXG4gICAgICAgIHF1ZXN0aW9uID0gdGhpcy52eE90aGVyU2VydmljZS5jcmVhdGVfbGluZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcInJlbWFya1wiOlxyXG4gICAgICAgIHF1ZXN0aW9uID0gdGhpcy52eE90aGVyU2VydmljZS5jcmVhdGVfcmVtYXJrKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgIHF1ZXN0aW9uID0gdGhpcy52eE90aGVyU2VydmljZS5jcmVhdGVfZGF0ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhPdGhlclNlcnZpY2UuY3JlYXRlX3RpbWUoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJkcm9wZG93blwiOlxyXG4gICAgICAgIHF1ZXN0aW9uID0gdGhpcy52eE90aGVyU2VydmljZS5jcmVhdGVfZHJvcGRvd24oKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJzY29yZVwiOlxyXG4gICAgICAgIHF1ZXN0aW9uID0gdGhpcy52eE90aGVyU2VydmljZS5jcmVhdGVfc2NvcmUoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJucHNcIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhPdGhlclNlcnZpY2UuY3JlYXRlX25wcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcInByb3BvcnRpb25cIjpcclxuICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhPdGhlclNlcnZpY2UuY3JlYXRlX3Byb3BvcnRpb24oKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJldmFsdWF0aW9uXCI6XHJcbiAgICAgICAgcXVlc3Rpb24gPSB0aGlzLnZ4T3RoZXJTZXJ2aWNlLmNyZWF0ZV9ldmFsdWF0aW9uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibWF0cml4X3JhZGlvXCI6IFxyXG4gICAgICBjYXNlIFwibWF0cml4X2NoZWNrYm94XCI6XHJcbiAgICAgIGNhc2UgXCJtYXRyaXhfc2NvcmVcIjpcclxuICAgICAgY2FzZSBcIm1hdHJpeF9pbnB1dFwiOlxyXG4gICAgICAgIHF1ZXN0aW9uID0gdGhpcy52eE1hdHJpeFNlcnZpY2UuY3JlYXRlX21hdHJpeChxdWVzdGlvblR5cGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcImlucHV0X2dyb3VwXCI6XHJcbiAgICAgICAgICBxdWVzdGlvbiA9IHRoaXMudnhPdGhlclNlcnZpY2UuY3JlYXRlX2lucHV0R3JvdXAoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==