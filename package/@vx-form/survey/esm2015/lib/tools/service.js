/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from "@angular/core";
export class VXFormAntService {
    constructor() {
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
    fieldOperational(sign, field) {
        this.fieldEvent.emit({
            sign: sign,
            field: field
        });
    }
    /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    groupOperational(type, field) {
        this.btnEvent.emit({
            type: type,
            field: field
        });
    }
    /**
     * @param {?} sign
     * @param {?} field
     * @return {?}
     */
    questionOperational(sign, field) {
        this.questionEvent.emit({
            sign: sign,
            field: field
        });
    }
    /**
     * @param {?} sign
     * @param {?} option
     * @param {?} field
     * @return {?}
     */
    optionOperational(sign, option, field) {
        this.optionEvent.emit({
            sign: sign,
            option: option,
            field: field
        });
    }
    /**
     * @param {?} previousData
     * @param {?} previousIndex
     * @param {?} currentIndex
     * @return {?}
     */
    dragDropOperational(previousData, previousIndex, currentIndex) {
        this.dragDropEvent.emit({
            previousData: previousData,
            previousIndex: previousIndex,
            currentIndex: currentIndex
        });
    }
}
VXFormAntService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXFormAntService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCO1FBUkEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVDLENBQUM7Ozs7OztJQUVoQixnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsS0FBd0I7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUNELGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUF3QjtRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBSUQsbUJBQW1CLENBQUMsSUFBWSxFQUFFLEtBQXdCO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsSUFBWSxFQUFDLE1BQVUsRUFBRSxLQUF3QjtRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBQyxNQUFNO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsWUFBZ0IsRUFBQyxhQUFpQixFQUFDLFlBQWdCO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLFlBQVksRUFBRSxZQUFZO1lBQzFCLGFBQWEsRUFBQyxhQUFhO1lBQzNCLFlBQVksRUFBRSxZQUFZO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhERixVQUFVOzs7Ozs7SUFFVCxvQ0FBOEI7O0lBQzlCLHNDQUFnQzs7SUFDaEMseUNBQW1DOztJQUNuQyx1Q0FBaUM7O0lBQ2pDLHlDQUFtQzs7SUFFbkMsb0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1BbnRTZXJ2aWNlIHtcclxuICBidG5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBmaWVsZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHF1ZXN0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb3B0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IFxyXG4gIGRyYWdEcm9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHdvcmtMaXN0ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5maWVsZEV2ZW50LmVtaXQoe1xyXG4gICAgICBzaWduOiBzaWduLFxyXG4gICAgICBmaWVsZDogZmllbGRcclxuICAgIH0pO1xyXG4gIH1cclxuICBncm91cE9wZXJhdGlvbmFsKHR5cGU6IHN0cmluZywgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICB0aGlzLmJ0bkV2ZW50LmVtaXQoe1xyXG4gICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICBmaWVsZDogZmllbGRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgcXVlc3Rpb25PcGVyYXRpb25hbChzaWduOiBzdHJpbmcsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5xdWVzdGlvbkV2ZW50LmVtaXQoe1xyXG4gICAgICBzaWduOiBzaWduLFxyXG4gICAgICBmaWVsZDogZmllbGRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBvcHRpb25PcGVyYXRpb25hbChzaWduOiBzdHJpbmcsb3B0aW9uOmFueSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICB0aGlzLm9wdGlvbkV2ZW50LmVtaXQoe1xyXG4gICAgICBzaWduOiBzaWduLFxyXG4gICAgICBvcHRpb246b3B0aW9uLFxyXG4gICAgICBmaWVsZDogZmllbGRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0Ryb3BPcGVyYXRpb25hbChwcmV2aW91c0RhdGE6YW55LHByZXZpb3VzSW5kZXg6YW55LGN1cnJlbnRJbmRleDphbnkpIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BFdmVudC5lbWl0KHtcclxuICAgICAgcHJldmlvdXNEYXRhOiBwcmV2aW91c0RhdGEsXHJcbiAgICAgIHByZXZpb3VzSW5kZXg6cHJldmlvdXNJbmRleCxcclxuICAgICAgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXhcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuXHJcbn1cclxuIl19