/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
var VXCheckboxService = /** @class */ (function () {
    function VXCheckboxService() {
    }
    /**
     * @param {?} questionType
     * @return {?}
     */
    VXCheckboxService.prototype.create_checkbox = /**
     * @param {?} questionType
     * @return {?}
     */
    function (questionType) {
        /** @type {?} */
        var question = {
            status: 1,
            key: Guid.create()["value"],
            type: "checkbox"
        };
        switch (questionType.tag) {
            case "default":
                this.createCheckbox_default(question);
                break;
            default:
                this.createCheckbox_default(question);
                break;
        }
        return question;
    };
    //多选题
    //多选题
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXCheckboxService.prototype.createCheckbox_default = 
    //多选题
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
        question.templateOptions = {
            label: "请选择以下选项 (多选)",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1",
                max: 2,
                min: 0
            },
            options: [{
                    label: "选项1",
                    value: "1",
                    score: 0
                },
                {
                    label: "选项2",
                    value: "2",
                    score: 0
                }]
        };
    };
    VXCheckboxService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXCheckboxService.ctorParameters = function () { return []; };
    return VXCheckboxService;
}());
export { VXCheckboxService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jaGVja2JveF9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RTtJQUVFO0lBQWdCLENBQUM7Ozs7O0lBR2pCLDJDQUFlOzs7O0lBQWYsVUFBZ0IsWUFBaUI7O1lBQzNCLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsVUFBVTtTQUNqQjtRQUNELFFBQVEsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUN4QixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1NBQ1Q7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSzs7Ozs7OztJQUNHLGtEQUFzQjs7Ozs7OztJQUE5QixVQUErQixRQUEyQjtRQUN4RCxRQUFRLENBQUMsZUFBZSxHQUFHO1lBQ3pCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sRUFBQyxHQUFHO2dCQUNWLEdBQUcsRUFBQyxDQUFDO2dCQUNMLEdBQUcsRUFBQyxDQUFDO2FBQ047WUFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO1NBQ0gsQ0FBQTtJQUNILENBQUM7O2dCQTdDRixVQUFVOzs7O0lBZ0RYLHdCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhUYWJsZUZpZWxkQ29uZmlnLCBWWEZvcm1GaWVsZENvbmZpZywgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWENoZWNrYm94U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiBcclxuICBjcmVhdGVfY2hlY2tib3gocXVlc3Rpb25UeXBlOiBhbnkpIHsgXHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImNoZWNrYm94XCJcclxuICAgIH1cclxuICAgIHN3aXRjaCAocXVlc3Rpb25UeXBlLnRhZykge1xyXG4gICAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hlY2tib3hfZGVmYXVsdChxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7IFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hlY2tib3hfZGVmYXVsdChxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9ICBcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcbiAgXHJcbiAgLy/lpJrpgInpophcclxuICBwcml2YXRlIGNyZWF0ZUNoZWNrYm94X2RlZmF1bHQocXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGxhYmVsOiBcIuivt+mAieaLqeS7peS4i+mAiemhuSAo5aSa6YCJKVwiLCBcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICBzZXR0aW5nOiB7IFxyXG4gICAgICAgIHNjb3JlOiAwLCBcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGxheW91dDpcIjFcIixcclxuICAgICAgICBtYXg6MixcclxuICAgICAgICBtaW46MFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIumAiemhuTFcIixcclxuICAgICAgICB2YWx1ZTogXCIxXCIsXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumAiemhuTJcIixcclxuICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICBcclxufVxyXG4iXX0=