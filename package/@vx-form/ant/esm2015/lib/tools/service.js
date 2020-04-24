/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from "@angular/core";
export class VXFormAntService {
    constructor() {
        this.btnEvent = new EventEmitter();
        this.fieldEvent = new EventEmitter();
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
    VXFormAntService.prototype.workList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxNQUFNLE9BQU8sZ0JBQWdCO0lBTTNCO1FBTEEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVDLENBQUM7Ozs7OztJQUVoQixnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsS0FBd0I7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUF3QjtRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBckJGLFVBQVU7Ozs7OztJQUVULG9DQUE4Qjs7SUFDOUIsc0NBQWdDOztJQUVoQyxvQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUFudFNlcnZpY2Uge1xyXG4gIGJ0bkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGZpZWxkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHdvcmtMaXN0ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZmllbGRPcGVyYXRpb25hbChzaWduOiBzdHJpbmcsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5maWVsZEV2ZW50LmVtaXQoe1xyXG4gICAgICBzaWduOiBzaWduLFxyXG4gICAgICBmaWVsZDogZmllbGRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ3JvdXBPcGVyYXRpb25hbCh0eXBlOiBzdHJpbmcsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgdGhpcy5idG5FdmVudC5lbWl0KHtcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgZmllbGQ6IGZpZWxkXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19