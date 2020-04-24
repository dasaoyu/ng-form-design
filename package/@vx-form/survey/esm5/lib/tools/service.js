/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from "@angular/core";
var VXFormAntService = /** @class */ (function () {
    function VXFormAntService() {
        this.btnEvent = new EventEmitter();
        this.fieldEvent = new EventEmitter();
        this.questionEvent = new EventEmitter();
        this.optionEvent = new EventEmitter();
        this.dragDropEvent = new EventEmitter();
        this.workList = [];
    }
    /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    VXFormAntService.prototype.fieldOperational = /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    function (sign, field) {
        this.fieldEvent.emit({
            sign: sign,
            field: field
        });
    };
    /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    VXFormAntService.prototype.groupOperational = /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    function (type, field) {
        this.btnEvent.emit({
            type: type,
            field: field
        });
    };
    /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    VXFormAntService.prototype.questionOperational = /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    function (sign, field) {
        this.questionEvent.emit({
            sign: sign,
            field: field
        });
    };
    /**
     * @param {?} sign
     * @param {?} option
     * @param {?} field
     * @return {?}
     */
    VXFormAntService.prototype.optionOperational = /**
     * @param {?} sign
     * @param {?} option
     * @param {?} field
     * @return {?}
     */
    function (sign, option, field) {
        this.optionEvent.emit({
            sign: sign,
            option: option,
            field: field
        });
    };
    /**
     * @param {?} previousData
     * @param {?} previousIndex
     * @param {?} currentIndex
     * @return {?}
     */
    VXFormAntService.prototype.dragDropOperational = /**
     * @param {?} previousData
     * @param {?} previousIndex
     * @param {?} currentIndex
     * @return {?}
     */
    function (previousData, previousIndex, currentIndex) {
        this.dragDropEvent.emit({
            previousData: previousData,
            previousIndex: previousIndex,
            currentIndex: currentIndex
        });
    };
    VXFormAntService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXFormAntService.ctorParameters = function () { return []; };
    return VXFormAntService;
}());
export { VXFormAntService };
if (false) {
    /** @type {?} */
    VXFormAntService.prototype.btnEvent;
    /** @type {?} */
    VXFormAntService.prototype.fieldEvent;
    /** @type {?} */
    VXFormAntService.prototype.questionEvent;
    /** @type {?} */
    VXFormAntService.prototype.optionEvent;
    /** @type {?} */
    VXFormAntService.prototype.dragDropEvent;
    /** @type {?} */
    VXFormAntService.prototype.workList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQVVFO1FBUkEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVDLENBQUM7Ozs7OztJQUVoQiwyQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLElBQVksRUFBRSxLQUF3QjtRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBQ0QsMkNBQWdCOzs7OztJQUFoQixVQUFpQixJQUFZLEVBQUUsS0FBd0I7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUlELDhDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsSUFBWSxFQUFFLEtBQXdCO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsNENBQWlCOzs7Ozs7SUFBakIsVUFBa0IsSUFBWSxFQUFDLE1BQVUsRUFBRSxLQUF3QjtRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBQyxNQUFNO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsWUFBZ0IsRUFBQyxhQUFpQixFQUFDLFlBQWdCO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLFlBQVksRUFBRSxZQUFZO1lBQzFCLGFBQWEsRUFBQyxhQUFhO1lBQzNCLFlBQVksRUFBRSxZQUFZO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWhERixVQUFVOzs7O0lBbURYLHVCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FsRFksZ0JBQWdCOzs7SUFDM0Isb0NBQThCOztJQUM5QixzQ0FBZ0M7O0lBQ2hDLHlDQUFtQzs7SUFDbkMsdUNBQWlDOztJQUNqQyx5Q0FBbUM7O0lBRW5DLG9DQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtQW50U2VydmljZSB7XHJcbiAgYnRuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZmllbGRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBxdWVzdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIG9wdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpOyBcclxuICBkcmFnRHJvcEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB3b3JrTGlzdCA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nLCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHRoaXMuZmllbGRFdmVudC5lbWl0KHtcclxuICAgICAgc2lnbjogc2lnbixcclxuICAgICAgZmllbGQ6IGZpZWxkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ3JvdXBPcGVyYXRpb25hbCh0eXBlOiBzdHJpbmcsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5idG5FdmVudC5lbWl0KHtcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgZmllbGQ6IGZpZWxkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIHF1ZXN0aW9uT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nLCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHRoaXMucXVlc3Rpb25FdmVudC5lbWl0KHtcclxuICAgICAgc2lnbjogc2lnbixcclxuICAgICAgZmllbGQ6IGZpZWxkXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgb3B0aW9uT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nLG9wdGlvbjphbnksIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5vcHRpb25FdmVudC5lbWl0KHtcclxuICAgICAgc2lnbjogc2lnbixcclxuICAgICAgb3B0aW9uOm9wdGlvbixcclxuICAgICAgZmllbGQ6IGZpZWxkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRyYWdEcm9wT3BlcmF0aW9uYWwocHJldmlvdXNEYXRhOmFueSxwcmV2aW91c0luZGV4OmFueSxjdXJyZW50SW5kZXg6YW55KSB7XHJcbiAgICB0aGlzLmRyYWdEcm9wRXZlbnQuZW1pdCh7XHJcbiAgICAgIHByZXZpb3VzRGF0YTogcHJldmlvdXNEYXRhLFxyXG4gICAgICBwcmV2aW91c0luZGV4OnByZXZpb3VzSW5kZXgsXHJcbiAgICAgIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG59XHJcbiJdfQ==