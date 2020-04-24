/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
export class VXMatrixService {
    constructor() { }
    /*
         矩阵
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_matrix(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: questionType.type
        };
        switch (questionType.type) {
            case "matrix_radio":
                this.createMatrix_radio(question);
                break;
            case "matrix_checkbox":
                this.createMatrix_radio(question);
                break;
            case "matrix_score":
                this.createMatrix_score(question);
                break;
            case "matrix_input":
                this.createMatrix_input(question);
                break;
            default:
                question.type = "matrix_radio";
                this.createMatrix_radio(question);
                break;
        }
        return question;
    }
    //矩阵单选
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createMatrix_radio(question) {
        question.templateOptions = {
            label: "请选择以下选项",
            required: false,
            subtitle: [{
                    label: "矩阵行1",
                    value: "1"
                },
                {
                    label: "矩阵行2",
                    value: "2",
                }],
            options: [{
                    label: "选项1",
                    value: "1"
                },
                {
                    label: "选项2",
                    value: "2"
                }]
        };
        return question;
    }
    //矩阵打分
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createMatrix_score(question) {
        question.templateOptions = {
            label: "请给以下各项打分",
            required: false,
            subtitle: [{
                    label: "矩阵行1",
                    value: "1"
                },
                {
                    label: "矩阵行2",
                    value: "2",
                }],
            options: [{
                    label: "打分1",
                    value: "1"
                },
                {
                    label: "打分1",
                    value: "2"
                }]
        };
        return question;
    }
    //矩阵填空
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createMatrix_input(question) {
        question.templateOptions = {
            label: "请填写以下内容",
            required: false,
            subtitle: [{
                    label: "矩阵行1",
                    value: "1"
                },
                {
                    label: "矩阵行2",
                    value: "2",
                }],
            options: [{
                    label: "填空1",
                    value: "1"
                },
                {
                    label: "填空1",
                    value: "2"
                }]
        };
        return question;
    }
}
VXMatrixService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXMatrixService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvbWF0cml4X1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBeUMsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVFLE1BQU0sT0FBTyxlQUFlO0lBQzFCLGdCQUFnQixDQUFDOzs7Ozs7OztJQUtqQixhQUFhLENBQUMsWUFBaUI7O1lBQ3pCLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7U0FDeEI7UUFDRCxRQUFRLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDekIsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDUixLQUFLLGlCQUFpQjtnQkFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1IsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSO2dCQUNFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO2dCQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFHTyxrQkFBa0IsQ0FBQyxRQUEyQjtRQUNwRCxRQUFRLENBQUMsZUFBZSxHQUFHO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxLQUFLO29CQUNaLEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBRSxLQUFLO29CQUNaLEtBQUssRUFBRSxHQUFHO2lCQUNYLENBQUM7U0FDSCxDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUdPLGtCQUFrQixDQUFDLFFBQTJCO1FBQ3BELFFBQVEsQ0FBQyxlQUFlLEdBQUc7WUFDekIsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsR0FBRztpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsR0FBRztpQkFDWCxDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEdBQUc7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQztTQUNILENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBR08sa0JBQWtCLENBQUMsUUFBMkI7UUFDcEQsUUFBUSxDQUFDLGVBQWUsR0FBRztZQUN6QixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxHQUFHO2lCQUNYLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsR0FBRztpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsR0FBRztpQkFDWCxDQUFDO1NBQ0gsQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQTNHRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhUYWJsZUZpZWxkQ29uZmlnLCBWWEZvcm1GaWVsZENvbmZpZywgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWE1hdHJpeFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qXHJcbiAgICAg55+p6Zi1XHJcbiAgKi9cclxuICBjcmVhdGVfbWF0cml4KHF1ZXN0aW9uVHlwZTogYW55KSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBxdWVzdGlvblR5cGUudHlwZVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChxdWVzdGlvblR5cGUudHlwZSkge1xyXG4gICAgICBjYXNlIFwibWF0cml4X3JhZGlvXCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRyaXhfcmFkaW8ocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWF0cml4X2NoZWNrYm94XCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRyaXhfcmFkaW8ocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWF0cml4X3Njb3JlXCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRyaXhfc2NvcmUocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWF0cml4X2lucHV0XCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXRyaXhfaW5wdXQocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHF1ZXN0aW9uLnR5cGUgPSBcIm1hdHJpeF9yYWRpb1wiO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4X3JhZGlvKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH0gXHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+efqemYteWNlemAiVxyXG4gIHByaXZhdGUgY3JlYXRlTWF0cml4X3JhZGlvKHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICBsYWJlbDogXCLor7fpgInmi6nku6XkuIvpgInpoblcIixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICBzdWJ0aXRsZTogW3tcclxuICAgICAgICBsYWJlbDogXCLnn6npmLXooYwxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnn6npmLXooYwyXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICB9XSxcclxuICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICBsYWJlbDogXCLpgInpobkxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLpgInpobkyXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+efqemYteaJk+WIhlxyXG4gIHByaXZhdGUgY3JlYXRlTWF0cml4X3Njb3JlKHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICBsYWJlbDogXCLor7fnu5nku6XkuIvlkITpobnmiZPliIZcIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgc3VidGl0bGU6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi55+p6Zi16KGMMVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55+p6Zi16KGMMlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjJcIixcclxuICAgICAgfV0sXHJcbiAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi5omT5YiGMVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5omT5YiGMVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjJcIlxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/nn6npmLXloavnqbpcclxuICBwcml2YXRlIGNyZWF0ZU1hdHJpeF9pbnB1dChxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgbGFiZWw6IFwi6K+35aGr5YaZ5Lul5LiL5YaF5a65XCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHN1YnRpdGxlOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIuefqemYteihjDFcIixcclxuICAgICAgICB2YWx1ZTogXCIxXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuefqemYteihjDJcIixcclxuICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgIH1dLCBcclxuICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICBsYWJlbDogXCLloavnqboxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLloavnqboxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==