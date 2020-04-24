/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
export class VXRadioService {
    constructor() { }
    /*
        单选题
        radio  单选题、性别、年龄、学历、职业
    
      */
    /**
     * @param {?} questionType
     * @return {?}
     */
    create_radio(questionType) {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "radio"
        };
        switch (questionType.tag) {
            case "default":
                this.createRadio_default(question);
                break;
            case "gender":
                this.createRadio_gender(question);
                break;
            case "age":
                this.createRadio_age(question);
                break;
            case "education":
                this.createRadio_education(question);
                break;
            case "occupation":
                this.createRadio_occupation(question);
                break;
            case "votefont":
                this.createRadio_votefont(question);
                break;
            default:
                this.createRadio_default(question);
                break;
        }
        return question;
    }
    //单选题
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_default(question) {
        question.templateOptions = {
            label: "请选择一个选项",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
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
    //性别
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_gender(question) {
        question.templateOptions = {
            label: "性别",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "男",
                    value: "1",
                    score: 0
                },
                {
                    label: "女",
                    value: "2",
                    score: 0
                }]
        };
    }
    //年龄
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_age(question) {
        question.templateOptions = {
            label: "您的年龄是？",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "18~24岁",
                    value: "1",
                    score: 0
                },
                {
                    label: "25~30岁",
                    value: "2",
                    score: 0
                },
                {
                    label: "31~40岁",
                    value: "3",
                    score: 0
                },
                {
                    label: "41~50岁",
                    value: "4",
                    score: 0
                },
                {
                    label: "51~60岁",
                    value: "5",
                    score: 0
                },
                {
                    label: "61岁及以上",
                    value: "6",
                    score: 0
                }]
        };
    }
    //学历
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_education(question) {
        question.templateOptions = {
            label: "学历",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [{
                    label: "小学级以下",
                    value: "1",
                    score: 0
                },
                {
                    label: "初中",
                    value: "2",
                    score: 0
                },
                {
                    label: "高中/中专/技校",
                    value: "3",
                    score: 0
                },
                {
                    label: "大学专科",
                    value: "4",
                    score: 0
                },
                {
                    label: "大学本科",
                    value: "5",
                    score: 0
                },
                {
                    label: "硕士研究生及以上",
                    value: "6",
                    score: 0
                }]
        };
    }
    //职业 
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_occupation(question) {
        question.templateOptions = {
            label: "您目前所处行业是？",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
            },
            options: [
                {
                    label: "在校学生",
                    value: "1",
                    score: 0
                },
                {
                    label: "政府/机关干部/公务员",
                    value: "2",
                    score: 0
                },
                {
                    label: "企业管理者（包括基层及中高层管理者）",
                    value: "3",
                    score: 0
                },
                {
                    label: "普通职员（办公室/写字楼工作人员）",
                    value: "4",
                    score: 0
                },
                {
                    label: "专业人员（如医生/律师/文体/记者/老师等）",
                    value: "5",
                    score: 0
                },
                {
                    label: "普通工人（如工厂工人/体力劳动者等）",
                    value: "6",
                    score: 0
                },
                {
                    label: "商业服务业职工（如销售人员/商店职员/服务员等）",
                    value: "7",
                    score: 0
                },
                {
                    label: "个体经营者/承包商",
                    value: "8",
                    score: 0
                },
                {
                    label: "自由职业者",
                    value: "9",
                    score: 0
                },
                {
                    label: "农林牧渔劳动者",
                    value: "10",
                    score: 0
                },
                {
                    label: "退休",
                    value: "11",
                    score: 0
                },
                {
                    label: "暂无职业",
                    value: "12",
                    score: 0
                },
                {
                    label: "其他职业人员（请注明）",
                    value: "13",
                    score: 0
                }
            ]
        };
    }
    //文字投票
    /**
     * @private
     * @param {?} question
     * @return {?}
     */
    createRadio_votefont(question) {
        question.templateOptions = {
            label: "请给以下选项投票",
            required: false,
            setting: {
                score: 0,
                random: false,
                layout: "1"
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
VXRadioService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXRadioService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9fU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9yYWRpb19TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQU9qQixZQUFZLENBQUMsWUFBaUI7O1lBQ3hCLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0QsUUFBUSxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ3hCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxD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RSxDQUFDO2lCQUNUO2dCQUNEO29CQUNFLEtBQUssRUFBRSxLQUFLO29CQUNaLEtBQUssRUFBRSxHQUFHO29CQUNWLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7U0FDSCxDQUFBO0lBQ0gsQ0FBQzs7O1lBbFJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWFRhYmxlRmllbGRDb25maWcsIFZYRm9ybUZpZWxkQ29uZmlnLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZYUmFkaW9TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKlxyXG4gICAg5Y2V6YCJ6aKYXHJcbiAgICByYWRpbyAg5Y2V6YCJ6aKY44CB5oCn5Yir44CB5bm06b6E44CB5a2m5Y6G44CB6IGM5LiaXHJcblxyXG4gICovIFxyXG4gIGNyZWF0ZV9yYWRpbyhxdWVzdGlvblR5cGU6IGFueSkgeyBcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwicmFkaW9cIlxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChxdWVzdGlvblR5cGUudGFnKSB7XHJcbiAgICAgIGNhc2UgXCJkZWZhdWx0XCI6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSYWRpb19kZWZhdWx0KHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImdlbmRlclwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmFkaW9fZ2VuZGVyKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImFnZVwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmFkaW9fYWdlKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImVkdWNhdGlvblwiOlxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmFkaW9fZWR1Y2F0aW9uKHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm9jY3VwYXRpb25cIjpcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhZGlvX29jY3VwYXRpb24ocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidm90ZWZvbnRcIjpcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhZGlvX3ZvdGVmb250KHF1ZXN0aW9uKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhZGlvX2RlZmF1bHQocXVlc3Rpb24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfSBcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v5Y2V6YCJ6aKYXHJcbiAgcHJpdmF0ZSBjcmVhdGVSYWRpb19kZWZhdWx0KHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICBsYWJlbDogXCLor7fpgInmi6nkuIDkuKrpgInpoblcIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSwgXHJcbiAgICAgIHNldHRpbmc6IHsgXHJcbiAgICAgICAgc2NvcmU6IDAsIFxyXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgbGF5b3V0OlwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi6YCJ6aG5MVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICBzY29yZTogMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi6YCJ6aG5MlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjJcIixcclxuICAgICAgICBzY29yZTogMFxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/mgKfliKtcclxuICBwcml2YXRlIGNyZWF0ZVJhZGlvX2dlbmRlcihxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgbGFiZWw6IFwi5oCn5YirXCIsIFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsIFxyXG4gICAgICBzZXR0aW5nOiB7IFxyXG4gICAgICAgIHNjb3JlOiAwLCBcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGxheW91dDpcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIueUt1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICBzY29yZTogMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi5aWzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+W5tOm+hFxyXG4gIHByaXZhdGUgY3JlYXRlUmFkaW9fYWdlKHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICBsYWJlbDogXCLmgqjnmoTlubTpvoTmmK/vvJ9cIiwgXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSwgXHJcbiAgICAgIHNldHRpbmc6IHsgXHJcbiAgICAgICAgc2NvcmU6IDAsIFxyXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgbGF5b3V0OlwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwiMTh+MjTlsoFcIixcclxuICAgICAgICB2YWx1ZTogXCIxXCIsXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIjI1fjMw5bKBXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCIzMX40MOWygVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjNcIixcclxuICAgICAgICBzY29yZTogMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiNDF+NTDlsoFcIixcclxuICAgICAgICB2YWx1ZTogXCI0XCIsXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIjUxfjYw5bKBXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiNVwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCI2MeWygeWPiuS7peS4ilwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjZcIixcclxuICAgICAgICBzY29yZTogMFxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/lrabljoZcclxuICBwcml2YXRlIGNyZWF0ZVJhZGlvX2VkdWNhdGlvbihxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIHF1ZXN0aW9uLnRlbXBsYXRlT3B0aW9ucyA9IHtcclxuICAgICAgbGFiZWw6IFwi5a2m5Y6GXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSwgXHJcbiAgICAgIHNldHRpbmc6IHsgXHJcbiAgICAgICAgc2NvcmU6IDAsIFxyXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgbGF5b3V0OlwiMVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwi5bCP5a2m57qn5Lul5LiLXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLliJ3kuK1cIixcclxuICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIumrmOS4rS/kuK3kuJMv5oqA5qChXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiM1wiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLlpKflrabkuJPnp5FcIixcclxuICAgICAgICB2YWx1ZTogXCI0XCIsXHJcbiAgICAgICAgc2NvcmU6IDBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIuWkp+WtpuacrOenkVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIjVcIixcclxuICAgICAgICBzY29yZTogMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwi56GV5aOr56CU56m255Sf5Y+K5Lul5LiKXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiNlwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+iBjOS4miBcclxuICBwcml2YXRlIGNyZWF0ZVJhZGlvX29jY3VwYXRpb24ocXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBxdWVzdGlvbi50ZW1wbGF0ZU9wdGlvbnMgPSB7XHJcbiAgICAgIGxhYmVsOiBcIuaCqOebruWJjeaJgOWkhOihjOS4muaYr++8n1wiLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsIFxyXG4gICAgICBzZXR0aW5nOiB7IFxyXG4gICAgICAgIHNjb3JlOiAwLCBcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGxheW91dDpcIjFcIlxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5Zyo5qCh5a2m55SfXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIxXCIsXHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5pS/5bqcL+acuuWFs+W5sumDqC/lhazliqHlkZhcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjJcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLkvIHkuJrnrqHnkIbogIXvvIjljIXmi6zln7rlsYLlj4rkuK3pq5jlsYLnrqHnkIbogIXvvIlcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjNcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLmma7pgJrogYzlkZjvvIjlip7lhazlrqQv5YaZ5a2X5qW85bel5L2c5Lq65ZGY77yJXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI0XCIsXHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5LiT5Lia5Lq65ZGY77yI5aaC5Yy755SfL+W+i+W4iC/mlofkvZMv6K6w6ICFL+iAgeW4iOetie+8iVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiNVwiLFxyXG4gICAgICAgICAgc2NvcmU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIuaZrumAmuW3peS6uu+8iOWmguW3peWOguW3peS6ui/kvZPlipvlirPliqjogIXnrYnvvIlcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjZcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLllYbkuJrmnI3liqHkuJrogYzlt6XvvIjlpoLplIDllK7kurrlkZgv5ZWG5bqX6IGM5ZGYL+acjeWKoeWRmOetie+8iVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiN1wiLFxyXG4gICAgICAgICAgc2NvcmU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIuS4quS9k+e7j+iQpeiAhS/mib/ljIXllYZcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjhcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLoh6rnlLHogYzkuJrogIVcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjlcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLlhpzmnpfniafmuJTlirPliqjogIVcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjEwXCIsXHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi6YCA5LyRXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIxMVwiLFxyXG4gICAgICAgICAgc2NvcmU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIuaaguaXoOiBjOS4mlwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMTJcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLlhbbku5bogYzkuJrkurrlkZjvvIjor7fms6jmmI7vvIlcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjEzXCIsXHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/mloflrZfmipXnpahcclxuICBwcml2YXRlIGNyZWF0ZVJhZGlvX3ZvdGVmb250KHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgcXVlc3Rpb24udGVtcGxhdGVPcHRpb25zID0ge1xyXG4gICAgICBsYWJlbDogXCLor7fnu5nku6XkuIvpgInpobnmipXnpahcIixcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLCBcclxuICAgICAgc2V0dGluZzogeyBcclxuICAgICAgICBzY29yZTogMCwgXHJcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICBsYXlvdXQ6XCIxXCJcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICBsYWJlbDogXCLpgInpobkxXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMVwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCLpgInpobkyXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgIHNjb3JlOiAwXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==