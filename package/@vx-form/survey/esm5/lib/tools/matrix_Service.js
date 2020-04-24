/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
var VXMatrixService = /** @class */ (function () {
    function VXMatrixService() {
    }
    /*
       矩阵
    */
    /*
         矩阵
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    VXMatrixService.prototype.create_matrix = /*
         矩阵
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    function (questionType) {
        /** @type {?} */
        var question = {
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
    };
    //矩阵单选
    //矩阵单选
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXMatrixService.prototype.createMatrix_radio = 
    //矩阵单选
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    //矩阵打分
    //矩阵打分
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXMatrixService.prototype.createMatrix_score = 
    //矩阵打分
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    //矩阵填空
    //矩阵填空
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXMatrixService.prototype.createMatrix_input = 
    //矩阵填空
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    VXMatrixService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXMatrixService.ctorParameters = function () { return []; };
    return VXMatrixService;
}());
export { VXMatrixService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4X1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9zdXJ2ZXkvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvbWF0cml4X1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBeUMsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVFO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQjs7TUFFRTs7Ozs7Ozs7SUFDRix1Q0FBYTs7Ozs7OztJQUFiLFVBQWMsWUFBaUI7O1lBQ3pCLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7U0FDeEI7UUFDRCxRQUFRLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDekIsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDUixLQUFLLGlCQUFpQjtnQkFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1IsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNSO2dCQUNFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO2dCQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNOzs7Ozs7O0lBQ0UsNENBQWtCOzs7Ozs7O0lBQTFCLFVBQTJCLFFBQTJCO1FBQ3BELFFBQVEsQ0FBQyxlQUFlLEdBQUc7WUFDekIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsR0FBRztpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsR0FBRztpQkFDWCxDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEdBQUc7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQztTQUNILENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTTs7Ozs7OztJQUNFLDRDQUFrQjs7Ozs7OztJQUExQixVQUEyQixRQUEyQjtRQUNwRCxRQUFRLENBQUMsZUFBZSxHQUFHO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxLQUFLO29CQUNaLEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBRSxLQUFLO29CQUNaLEtBQUssRUFBRSxHQUFHO2lCQUNYLENBQUM7U0FDSCxDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU07Ozs7Ozs7SUFDRSw0Q0FBa0I7Ozs7Ozs7SUFBMUIsVUFBMkIsUUFBMkI7UUFDcEQsUUFBUSxDQUFDLGVBQWUsR0FBRztZQUN6QixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxHQUFHO2lCQUNYLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsR0FBRztpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsR0FBRztpQkFDWCxDQUFDO1NBQ0gsQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQTNHRixVQUFVOzs7O0lBNEdYLHNCQUFDO0NBQUEsQUE1R0QsSUE0R0M7U0EzR1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVGaWVsZENvbmZpZywgVlhGb3JtRmllbGRDb25maWcsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhNYXRyaXhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKlxyXG4gICAgIOefqemYtVxyXG4gICovXHJcbiAgY3JlYXRlX21hdHJpeChxdWVzdGlvblR5cGU6IGFueSkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogcXVlc3Rpb25UeXBlLnR5cGVcclxuICAgIH1cclxuICAgIHN3aXRjaCAocXVlc3Rpb25UeXBlLnR5cGUpIHtcclxuICAgICAgY2FzZSBcIm1hdHJpeF9yYWRpb1wiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4X3JhZGlvKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1hdHJpeF9jaGVja2JveFwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4X3JhZGlvKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1hdHJpeF9zY29yZVwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4X3Njb3JlKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1hdHJpeF9pbnB1dFwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlTWF0cml4X2lucHV0KHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBxdWVzdGlvbi50eXBlID0gXCJtYXRyaXhfcmFkaW9cIjtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1hdHJpeF9yYWRpbyhxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/nn6npmLXljZXpgIlcclxuICBwcml2YXRlIGNyZWF0ZU1hdHJpeF9yYWRpbyhxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgbGFiZWw6IFwi6K+36YCJ5oup5Lul5LiL6YCJ6aG5XCIsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgc3VidGl0bGU6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi55+p6Zi16KGMMVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi55+p6Zi16KGMMlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjJcIixcclxuICAgICAgfV0sXHJcbiAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi6YCJ6aG5MVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YCJ6aG5MlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjJcIlxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/nn6npmLXmiZPliIZcclxuICBwcml2YXRlIGNyZWF0ZU1hdHJpeF9zY29yZShxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgbGFiZWw6IFwi6K+357uZ5Lul5LiL5ZCE6aG55omT5YiGXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHN1YnRpdGxlOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIuefqemYteihjDFcIixcclxuICAgICAgICB2YWx1ZTogXCIxXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuefqemYteihjDJcIixcclxuICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgIH1dLFxyXG4gICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIuaJk+WIhjFcIixcclxuICAgICAgICB2YWx1ZTogXCIxXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuaJk+WIhjFcIixcclxuICAgICAgICB2YWx1ZTogXCIyXCJcclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v55+p6Zi15aGr56m6XHJcbiAgcHJpdmF0ZSBjcmVhdGVNYXRyaXhfaW5wdXQocXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGxhYmVsOiBcIuivt+Whq+WGmeS7peS4i+WGheWuuVwiLCBcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICBzdWJ0aXRsZTogW3tcclxuICAgICAgICBsYWJlbDogXCLnn6npmLXooYwxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLnn6npmLXooYwyXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICB9XSwgXHJcbiAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi5aGr56m6MVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5aGr56m6MVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjJcIlxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=