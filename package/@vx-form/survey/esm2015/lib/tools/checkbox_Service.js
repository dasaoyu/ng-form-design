/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
export class VXCheckboxService {
    constructor() { }
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_checkbox(questionType) {
        /** @type {?} */
        let question = {
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
    }
    //多选题
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCheckbox_default(question) {
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
    }
}
VXCheckboxService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXCheckboxService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jaGVja2JveF9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFnQixDQUFDOzs7OztJQUdqQixlQUFlLENBQUMsWUFBaUI7O1lBQzNCLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsVUFBVTtTQUNqQjtRQUNELFFBQVEsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUN4QixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1NBQ1Q7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBR08sc0JBQXNCLENBQUMsUUFBMkI7UUFDeEQsUUFBUSxDQUFDLGVBQWUsR0FBRztZQUN6QixLQUFLLEVBQUUsY0FBYztZQUNyQixRQUFRLEVBQUUsS0FBSztZQUNmLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUMsR0FBRztnQkFDVixHQUFHLEVBQUMsQ0FBQztnQkFDTCxHQUFHLEVBQUMsQ0FBQzthQUNOO1lBQ0QsT0FBTyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQztTQUNILENBQUE7SUFDSCxDQUFDOzs7WUE3Q0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVGaWVsZENvbmZpZywgVlhGb3JtRmllbGRDb25maWcsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhDaGVja2JveFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gXHJcbiAgY3JlYXRlX2NoZWNrYm94KHF1ZXN0aW9uVHlwZTogYW55KSB7IFxyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJjaGVja2JveFwiXHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHF1ZXN0aW9uVHlwZS50YWcpIHtcclxuICAgICAgY2FzZSBcImRlZmF1bHRcIjpcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoZWNrYm94X2RlZmF1bHQocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrOyBcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoZWNrYm94X2RlZmF1bHQocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfSAgXHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG4gIFxyXG4gIC8v5aSa6YCJ6aKYXHJcbiAgcHJpdmF0ZSBjcmVhdGVDaGVja2JveF9kZWZhdWx0KHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICBsYWJlbDogXCLor7fpgInmi6nku6XkuIvpgInpobkgKOWkmumAiSlcIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgc2V0dGluZzogeyBcclxuICAgICAgICBzY29yZTogMCwgXHJcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICBsYXlvdXQ6XCIxXCIsXHJcbiAgICAgICAgbWF4OjIsXHJcbiAgICAgICAgbWluOjBcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICBsYWJlbDogXCLpgInpobkxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLpgInpobkyXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgXHJcbn1cclxuIl19