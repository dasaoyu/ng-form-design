/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from "@angular/core";
var VXFormAntService = /** @class */ (function () {
    function VXFormAntService() {
        this.btnEvent = new EventEmitter();
        this.fieldEvent = new EventEmitter();
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
    VXFormAntService.prototype.workList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi90b29scy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQU9FO1FBTEEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVDLENBQUM7Ozs7OztJQUVoQiwyQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLElBQVksRUFBRSxLQUF3QjtRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsMkNBQWdCOzs7OztJQUFoQixVQUFpQixJQUFZLEVBQUUsS0FBd0I7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJCRixVQUFVOzs7O0lBc0JYLHVCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksZ0JBQWdCOzs7SUFDM0Isb0NBQThCOztJQUM5QixzQ0FBZ0M7O0lBRWhDLG9DQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtQW50U2VydmljZSB7XHJcbiAgYnRuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZmllbGRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgd29ya0xpc3QgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZywgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICB0aGlzLmZpZWxkRXZlbnQuZW1pdCh7XHJcbiAgICAgIHNpZ246IHNpZ24sXHJcbiAgICAgIGZpZWxkOiBmaWVsZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBncm91cE9wZXJhdGlvbmFsKHR5cGU6IHN0cmluZywgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICB0aGlzLmJ0bkV2ZW50LmVtaXQoe1xyXG4gICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICBmaWVsZDogZmllbGRcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=