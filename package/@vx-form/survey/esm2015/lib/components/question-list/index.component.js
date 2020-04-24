/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as _ from "lodash";
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataService } from "../../service/data.service";
export class VXQuestionList {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.vxSurveyInfo = {};
        this.questionTypeEvent = new EventEmitter();
        this.addPageEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropQuestion(event) {
        if (_.get(event, "container.data.questions")) {
            if (event.previousContainer === event.container) {
                moveItemInArray(_.get(event, "container.data.questions"), event.previousIndex, event.currentIndex);
            }
            else {
                if (_.get(event, "previousContainer.data.questions")) {
                    transferArrayItem(_.get(event, "previousContainer.data.questions"), _.get(event, "container.data.questions"), event.previousIndex, event.currentIndex);
                }
            }
        }
    }
}
VXQuestionList.decorators = [
    { type: Component, args: [{
                selector: "vx-question-list",
                template: "<div cdkDropListGroup>\r\n    <ng-container *ngFor=\"let page of vxSurveyInfo.pages;let index=index\">\r\n        <div class=\"page\" cdkDropList [cdkDropListData]=\"page\" (cdkDropListDropped)=\"dropQuestion($event)\">\r\n            <label class=\"page_title\">{{page.name}}</label>\r\n            <ng-container *ngFor=\"let quetion of page.questions\">\r\n                <div class=\"page_question\" cdkDrag>\r\n                    <i class=\"icon-other-WenBen\"></i>\r\n                    <label>{{quetion.templateOptions.label}}</label>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n</div>",
                styles: [":host .page_title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host .page_question{width:100%;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;background-color:#fff;border-radius:2px;margin:0 8px 3px 0;cursor:move;vertical-align:middle}:host .page_question i{cursor:move;margin:0 5px}:host .page_question label{cursor:move}"]
            }] }
];
/** @nocollapse */
VXQuestionList.ctorParameters = () => [
    { type: DataService }
];
VXQuestionList.propDecorators = {
    vxSurveyInfo: [{ type: Input }],
    questionTypeEvent: [{ type: Output }],
    addPageEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    VXQuestionList.prototype.vxSurveyInfo;
    /** @type {?} */
    VXQuestionList.prototype.questionTypeEvent;
    /** @type {?} */
    VXQuestionList.prototype.addPageEvent;
    /** @type {?} */
    VXQuestionList.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFlLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVN6RCxNQUFNLE9BQU8sY0FBYzs7OztJQU96QixZQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5sQyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDL0Isc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFJRixDQUFDOzs7O0lBRWhELFFBQVE7SUFFUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUE0QjtRQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDL0MsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDcEc7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxrQ0FBa0MsQ0FBQyxFQUFFO29CQUNwRCxpQkFBaUIsQ0FDZixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxrQ0FBa0MsQ0FBQyxFQUNoRCxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxFQUN4QyxLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdXBCQUFxQzs7YUFFdEM7Ozs7WUFSUSxXQUFXOzs7MkJBVWpCLEtBQUs7Z0NBQ0wsTUFBTTsyQkFDTixNQUFNOzs7O0lBRlAsc0NBQXlDOztJQUN6QywyQ0FBc0Q7O0lBQ3RELHNDQUFpRDs7SUFJckMscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZywgVlhTdXJ2ZXlJbmZvIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBJVHJlZURhdGEsIElDaGVja2VkVHJlZSB9IGZyb20gXCIuLi8uLi90b29scy91dGlsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eC1xdWVzdGlvbi1saXN0XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhRdWVzdGlvbkxpc3QgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgdnhTdXJ2ZXlJbmZvOiBWWFN1cnZleUluZm8gPSB7fTtcclxuICBAT3V0cHV0KCkgcXVlc3Rpb25UeXBlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgYWRkUGFnZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuXHJcbiAgfVxyXG5cclxuICBkcm9wUXVlc3Rpb24oZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikgeyBcclxuICAgIGlmIChfLmdldChldmVudCwgXCJjb250YWluZXIuZGF0YS5xdWVzdGlvbnNcIikpIHtcclxuICAgICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcclxuICAgICAgICBtb3ZlSXRlbUluQXJyYXkoXy5nZXQoZXZlbnQsIFwiY29udGFpbmVyLmRhdGEucXVlc3Rpb25zXCIpLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChfLmdldChldmVudCwgXCJwcmV2aW91c0NvbnRhaW5lci5kYXRhLnF1ZXN0aW9uc1wiKSkge1xyXG4gICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oIFxyXG4gICAgICAgICAgICBfLmdldChldmVudCwgXCJwcmV2aW91c0NvbnRhaW5lci5kYXRhLnF1ZXN0aW9uc1wiKSxcclxuICAgICAgICAgICAgXy5nZXQoZXZlbnQsIFwiY29udGFpbmVyLmRhdGEucXVlc3Rpb25zXCIpLFxyXG4gICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICAgICAgICBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbn1cclxuIl19