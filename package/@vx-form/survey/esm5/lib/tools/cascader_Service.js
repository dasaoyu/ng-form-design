/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
var VXCascaderService = /** @class */ (function () {
    function VXCascaderService() {
    }
    /*
      级联选择
      cascader  级联 、专业、院校、行业
  
    */
    /*
        级联选择
        cascader  级联 、专业、院校、行业
    
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    VXCascaderService.prototype.create_cascader = /*
        级联选择
        cascader  级联 、专业、院校、行业
    
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
    };
    //级联
    //级联
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXCascaderService.prototype.createCascader_default = 
    //级联
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    //专业
    //专业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXCascaderService.prototype.createCascader_major = 
    //专业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    //行业
    //行业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXCascaderService.prototype.createCascader_industry = 
    //行业
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    //院校
    //院校
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    VXCascaderService.prototype.createCascader_university = 
    //院校
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    function (question) {
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
    };
    VXCascaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXCascaderService.ctorParameters = function () { return []; };
    return VXCascaderService;
}());
export { VXCascaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXJfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9jYXNjYWRlcl9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RTtJQUVFO0lBQWdCLENBQUM7SUFFakI7Ozs7TUFJRTs7Ozs7Ozs7OztJQUNGLDJDQUFlOzs7Ozs7Ozs7SUFBZixVQUFnQixZQUFpQjs7WUFDM0IsUUFBUSxHQUFzQjtZQUNoQyxNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksRUFBRSxVQUFVO1NBQ2pCO1FBQ0QsUUFBUSxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ3hCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJOzs7Ozs7O0lBQ0ksa0RBQXNCOzs7Ozs7O0lBQTlCLFVBQStCLFFBQTJCO1FBQ3hELFFBQVEsQ0FBQyxlQUFlLEdBQUc7WUFDekIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBQyxLQUFLO29CQUNYLEtBQUssRUFBQyxJQUFJO2lCQUNYO2dCQUNEO29CQUNFLEtBQUssRUFBQyxLQUFLO29CQUNYLEtBQUssRUFBQyxHQUFHO29CQUNULFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxLQUFLLEVBQUMsT0FBTzs0QkFDYixLQUFLLEVBQUMsS0FBSzt5QkFDWjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsR0FBRztvQkFDVCxRQUFRLEVBQUM7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFDLE9BQU87NEJBQ2IsS0FBSyxFQUFDLEtBQUs7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSTs7Ozs7OztJQUNJLGdEQUFvQjs7Ozs7OztJQUE1QixVQUE2QixRQUEyQjtRQUN0RCxRQUFRLENBQUMsZUFBZSxHQUFDO1lBQ3JCLEtBQUssRUFBRSxXQUFXO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsR0FBRztvQkFDVCxRQUFRLEVBQUM7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFDLE9BQU87NEJBQ2IsS0FBSyxFQUFDLEtBQUs7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFDLEtBQUs7b0JBQ1gsS0FBSyxFQUFDLEdBQUc7b0JBQ1QsUUFBUSxFQUFDO3dCQUNQOzRCQUNFLEtBQUssRUFBQyxPQUFPOzRCQUNiLEtBQUssRUFBQyxLQUFLO3lCQUNaO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDSixDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUk7Ozs7Ozs7SUFDSSxtREFBdUI7Ozs7Ozs7SUFBL0IsVUFBZ0MsUUFBMkI7UUFDekQsUUFBUSxDQUFDLGVBQWUsR0FBRztZQUN2QixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFDLEtBQUs7b0JBQ1gsS0FBSyxFQUFDLEdBQUc7b0JBQ1QsUUFBUSxFQUFDO3dCQUNQOzRCQUNFLEtBQUssRUFBQyxPQUFPOzRCQUNiLEtBQUssRUFBQyxLQUFLO3lCQUNaO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBQyxLQUFLO29CQUNYLEtBQUssRUFBQyxHQUFHO29CQUNULFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxLQUFLLEVBQUMsT0FBTzs0QkFDYixLQUFLLEVBQUMsS0FBSzt5QkFDWjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJOzs7Ozs7O0lBQ0kscURBQXlCOzs7Ozs7O0lBQWpDLFVBQWtDLFFBQTJCO1FBQzNELFFBQVEsQ0FBQyxlQUFlLEdBQUc7WUFDdkIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEtBQUssRUFBQyxLQUFLO29CQUNYLEtBQUssRUFBQyxHQUFHO29CQUNULFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxLQUFLLEVBQUMsT0FBTzs0QkFDYixLQUFLLEVBQUMsS0FBSzt5QkFDWjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxLQUFLLEVBQUMsS0FBSztvQkFDWCxLQUFLLEVBQUMsR0FBRztvQkFDVCxRQUFRLEVBQUM7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFDLE9BQU87NEJBQ2IsS0FBSyxFQUFDLEtBQUs7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUE7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkE1SkYsVUFBVTs7OztJQTZKWCx3QkFBQztDQUFBLEFBN0pELElBNkpDO1NBNUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYVGFibGVGaWVsZENvbmZpZywgVlhGb3JtRmllbGRDb25maWcsIEd1aWQgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVlhDYXNjYWRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qXHJcbiAgICDnuqfogZTpgInmi6lcclxuICAgIGNhc2NhZGVyICDnuqfogZQg44CB5LiT5Lia44CB6Zmi5qCh44CB6KGM5LiaXHJcblxyXG4gICovIFxyXG4gIGNyZWF0ZV9jYXNjYWRlcihxdWVzdGlvblR5cGU6IGFueSkgeyBcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwiY2FzY2FkZXJcIlxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChxdWVzdGlvblR5cGUudGFnKSB7XHJcbiAgICAgIGNhc2UgXCJkZWZhdWx0XCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYXNjYWRlcl9kZWZhdWx0KHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1ham9yXCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYXNjYWRlcl9tYWpvcihxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpbmR1c3RyeVwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FzY2FkZXJfaW5kdXN0cnkocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidW5pdmVyc2l0eVwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FzY2FkZXJfdW5pdmVyc2l0eShxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7IFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FzY2FkZXJfZGVmYXVsdChxdWVzdGlvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+e6p+iBlFxyXG4gIHByaXZhdGUgY3JlYXRlQ2FzY2FkZXJfZGVmYXVsdChxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgbGFiZWw6IFwi6K+36YCJ5oup5Lul5LiL6YCJ6aG5XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDpcIuivt+mAieaLqVwiLFxyXG4gICAgICAgICAgdmFsdWU6XCItMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDpcIumAiemhuTFcIixcclxuICAgICAgICAgIHZhbHVlOlwiMVwiLFxyXG4gICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6XCLpgInpobkxLTFcIixcclxuICAgICAgICAgICAgICB2YWx1ZTpcIjEtMVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MlwiLFxyXG4gICAgICAgICAgdmFsdWU6XCIyXCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDpcIumAiemhuTItMVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOlwiMi0xXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH0gXHJcblxyXG4gIC8v5LiT5LiaXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYXNjYWRlcl9tYWpvcihxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucz17XHJcbiAgICAgICAgbGFiZWw6IFwi5oKo5aSn5a2m5omA5a2m5LiT5Lia5piv77yfXCIsXHJcbiAgICAgICAgb3B0aW9uczogWyBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCLpgInpobkxXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiMVwiLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6XCLpgInpobkxLTFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiMS0xXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIjJcIixcclxuICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5Mi0xXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIjItMVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSBcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v6KGM5LiaXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYXNjYWRlcl9pbmR1c3RyeShxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBsYWJlbDogXCLmgqjnm67liY3miYDlpITooYzkuJrmmK/vvJ9cIixcclxuICAgICAgICBvcHRpb25zOiBbIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIumAiemhuTFcIixcclxuICAgICAgICAgICAgdmFsdWU6XCIxXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDpcIumAiemhuTEtMVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCIxLTFcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6XCLpgInpobkyXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlwiMlwiLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6XCLpgInpobkyLTFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOlwiMi0xXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gXHJcbiAgICByZXR1cm4gcXVlc3Rpb247IFxyXG4gIH0gXHJcblxyXG4gIC8v6Zmi5qChXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYXNjYWRlcl91bml2ZXJzaXR5KHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIuaCqOaJgOWwseivu+eahOWtpuagoeaYr++8n1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFsgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcIjFcIixcclxuICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOlwi6YCJ6aG5MS0xXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcIjEtMVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDpcIumAiemhuTJcIixcclxuICAgICAgICAgICAgdmFsdWU6XCIyXCIsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDpcIumAiemhuTItMVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6XCIyLTFcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSBcclxuICAgIHJldHVybiBxdWVzdGlvbjsgXHJcbiAgfVxyXG59XHJcbiJdfQ==