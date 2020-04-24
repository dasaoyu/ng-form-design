/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
export class VXCascaderService {
    constructor() { }
    /*
        级联选择
        cascader  级联 、专业、院校、行业
    
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_cascader(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "cascader"
        };
        switch (questionType.tag) {
            case "default":
                this.createCascader_default(question);
                break;
            case "major":
                this.createCascader_major(question);
                break;
            case "industry":
                this.createCascader_industry(question);
                break;
            case "university":
                this.createCascader_university(question);
                break;
            default:
                this.createCascader_default(question);
                break;
        }
        return question;
    }
    //级联
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_default(question) {
        question.templateOptions = {
            label: "请选择以下选项",
            options: [
                {
                    label: "请选择",
                    value: "-1"
                },
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
    }
    //专业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_major(question) {
        question.templateOptions = {
            label: "您大学所学专业是？",
            options: [
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
        return question;
    }
    //行业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_industry(question) {
        question.templateOptions = {
            label: "您目前所处行业是？",
            options: [
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
        return question;
    }
    //院校
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createCascader_university(question) {
        question.templateOptions = {
            label: "您所就读的学校是？",
            options: [
                {
                    label: "选项1",
                    value: "1",
                    children: [
                        {
                            label: "选项1-1",
                            value: "1-1"
                        }
                    ]
                },
                {
                    label: "选项2",
                    value: "2",
                    children: [
                        {
                            label: "选项2-1",
                            value: "2-1"
                        }
                    ]
                }
            ]
        };
        return question;
    }
}
VXCascaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXCascaderService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXJfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jYXNjYWRlcl9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0lBT2pCLGVBQWUsQ0FBQyxZQUFpQjs7WUFDM0IsUUFBUSxHQUFzQjtZQUNoQyxNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksRUFBRSxVQUFVO1NBQ2pCO1FBQ0QsUUFBUSxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ3hCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFHTyxzQkFBc0IsQ0FBQyxRQUEyQjtRQUN4RCxRQUFRLENBQUMsZUFBZSxHQUFHO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsR0FBRztvQkFDVCxRQUFRLEVBQUM7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFDLE9BQU87NEJBQ2IsS0FBSyxFQUFDLEtBQUs7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFDLEtBQUs7b0JBQ1gsS0FBSyxFQUFDLEdBQUc7b0JBQ1QsUUFBUSxFQUFDO3dCQUNQOzRCQUNFLEtBQUssRUFBQyxPQUFPOzRCQUNiLEtBQUssRUFBQyxLQUFLO3lCQUNaO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUdPLG9CQUFvQixDQUFDLFFBQTJCO1FBQ3RELFFBQVEsQ0FBQyxlQUFlLEdBQUM7WUFDckIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBQyxLQUFLO29CQUNYLEtBQUssRUFBQyxHQUFHO29CQUNULFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxLQUFLLEVBQUMsT0FBTzs0QkFDYixLQUFLLEVBQUMsS0FBSzt5QkFDWjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsR0FBRztvQkFDVCxRQUFRLEVBQUM7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFDLE9BQU87NEJBQ2IsS0FBSyxFQUFDLEtBQUs7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNKLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBR08sdUJBQXVCLENBQUMsUUFBMkI7UUFDekQsUUFBUSxDQUFDLGVBQWUsR0FBRztZQUN2QixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFDLEtBQUs7b0JBQ1gsS0FBSyxFQUFDLEdBQUc7b0JBQ1QsUUFBUSxFQUFDO3dCQUNQOzRCQUNFLEtBQUssRUFBQyxPQUFPOzRCQUNiLEtBQUssRUFBQyxLQUFLO3lCQUNaO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBQyxLQUFLO29CQUNYLEtBQUssRUFBQyxHQUFHO29CQUNULFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxLQUFLLEVBQUMsT0FBTzs0QkFDYixLQUFLLEVBQUMsS0FBSzt5QkFDWjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFHTyx5QkFBeUIsQ0FBQyxRQUEyQjtRQUMzRCxRQUFRLENBQUMsZUFBZSxHQUFHO1lBQ3ZCLEtBQUssRUFBRSxXQUFXO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsR0FBRztvQkFDVCxRQUFRLEVBQUM7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFDLE9BQU87NEJBQ2IsS0FBSyxFQUFDLEtBQUs7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFDLEtBQUs7b0JBQ1gsS0FBSyxFQUFDLEdBQUc7b0JBQ1QsUUFBUSxFQUFDO3dCQUNQOzRCQUNFLEtBQUssRUFBQyxPQUFPOzRCQUNiLEtBQUssRUFBQyxLQUFLO3lCQUNaO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFBO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBNUpGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWFRhYmxlRmllbGRDb25maWcsIFZYRm9ybUZpZWxkQ29uZmlnLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZYQ2FzY2FkZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKlxyXG4gICAg57qn6IGU6YCJ5oupXHJcbiAgICBjYXNjYWRlciAg57qn6IGUIOOAgeS4k+S4muOAgemZouagoeOAgeihjOS4mlxyXG5cclxuICAqLyBcclxuICBjcmVhdGVfY2FzY2FkZXIocXVlc3Rpb25UeXBlOiBhbnkpIHsgXHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImNhc2NhZGVyXCJcclxuICAgIH1cclxuICAgIHN3aXRjaCAocXVlc3Rpb25UeXBlLnRhZykge1xyXG4gICAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FzY2FkZXJfZGVmYXVsdChxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtYWpvclwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FzY2FkZXJfbWFqb3IocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW5kdXN0cnlcIjpcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhc2NhZGVyX2luZHVzdHJ5KHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInVuaXZlcnNpdHlcIjpcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhc2NhZGVyX3VuaXZlcnNpdHkocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrOyBcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhc2NhZGVyX2RlZmF1bHQocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/nuqfogZRcclxuICBwcml2YXRlIGNyZWF0ZUNhc2NhZGVyX2RlZmF1bHQocXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGxhYmVsOiBcIuivt+mAieaLqeS7peS4i+mAiemhuVwiLFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6XCLor7fpgInmi6lcIixcclxuICAgICAgICAgIHZhbHVlOlwiLTFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6XCLpgInpobkxXCIsXHJcbiAgICAgICAgICB2YWx1ZTpcIjFcIixcclxuICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MS0xXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6XCIxLTFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDpcIumAiemhuTJcIixcclxuICAgICAgICAgIHZhbHVlOlwiMlwiLFxyXG4gICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6XCLpgInpobkyLTFcIixcclxuICAgICAgICAgICAgICB2YWx1ZTpcIjItMVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9IFxyXG5cclxuICAvL+S4k+S4mlxyXG4gIHByaXZhdGUgY3JlYXRlQ2FzY2FkZXJfbWFqb3IocXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnM9e1xyXG4gICAgICAgIGxhYmVsOiBcIuaCqOWkp+WtpuaJgOWtpuS4k+S4muaYr++8n1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFsgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIjFcIixcclxuICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MS0xXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIjEtMVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIumAiemhuTJcIixcclxuICAgICAgICAgICAgdmFsdWU6XCIyXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDpcIumAiemhuTItMVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCIyLTFcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0gXHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+ihjOS4mlxyXG4gIHByaXZhdGUgY3JlYXRlQ2FzY2FkZXJfaW5kdXN0cnkocXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFwi5oKo55uu5YmN5omA5aSE6KGM5Lia5piv77yfXCIsXHJcbiAgICAgICAgb3B0aW9uczogWyBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCLpgInpobkxXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiMVwiLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6XCLpgInpobkxLTFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiMS0xXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIjJcIixcclxuICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5Mi0xXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIjItMVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9IFxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uOyBcclxuICB9IFxyXG5cclxuICAvL+mZouagoVxyXG4gIHByaXZhdGUgY3JlYXRlQ2FzY2FkZXJfdW5pdmVyc2l0eShxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBsYWJlbDogXCLmgqjmiYDlsLHor7vnmoTlrabmoKHmmK/vvJ9cIixcclxuICAgICAgICBvcHRpb25zOiBbIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIumAiemhuTFcIixcclxuICAgICAgICAgICAgdmFsdWU6XCIxXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDpcIumAiemhuTEtMVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCIxLTFcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCLpgInpobkyXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiMlwiLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6XCLpgInpobkyLTFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiMi0xXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gXHJcbiAgICByZXR1cm4gcXVlc3Rpb247IFxyXG4gIH1cclxufVxyXG4iXX0=