/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
export class VXOtherService {
    constructor() { }
    //分割线
    /**
     * @return {?}
     */
    create_line() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "line",
            templateOptions: {
                label: "分割线"
            }
        };
        return question;
    }
    //备注说明
    /**
     * @return {?}
     */
    create_remark() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "remark",
            templateOptions: {
                label: "请阅读本项说明，然后回答问题"
            }
        };
        return question;
    }
    //日期
    /**
     * @return {?}
     */
    create_date() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "date",
            templateOptions: {
                label: "日期",
                required: false
            }
        };
        return question;
    }
    //时间
    /**
     * @return {?}
     */
    create_time() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "time",
            templateOptions: {
                label: "时间",
                required: false
            }
        };
        return question;
    }
    //打分题
    /**
     * @return {?}
     */
    create_score() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "score",
            templateOptions: {
                type: "start",
                label: "请给本项打分",
                setting: {
                    label: "",
                    score: 0,
                    min: 0,
                    max: 5
                }
            }
        };
        return question;
    }
    //下拉题
    /**
     * @return {?}
     */
    create_dropdown() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "dropdown",
            templateOptions: {
                label: "请选择一个选",
                setting: {
                    score: 0
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
            }
        };
        return question;
    }
    //NPS题
    /**
     * @return {?}
     */
    create_nps() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "nps",
            templateOptions: {
                label: "您向朋友或同事推荐我们的可能性有多大？",
                required: false,
                options: [{
                        label: "0",
                        value: "0"
                    },
                    {
                        label: "1",
                        value: "1"
                    },
                    {
                        label: "2",
                        value: "2"
                    },
                    {
                        label: "3",
                        value: "3"
                    },
                    {
                        label: "4",
                        value: "4"
                    },
                    {
                        label: "5",
                        value: "5"
                    },
                    {
                        label: "6",
                        value: "6"
                    },
                    {
                        label: "7",
                        value: "7"
                    },
                    {
                        label: "8",
                        value: "8"
                    },
                    {
                        label: "9",
                        value: "9"
                    },
                    {
                        label: "10",
                        value: "10"
                    }]
            }
        };
        return question;
    }
    //比重题
    /**
     * @return {?}
     */
    create_proportion() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "proportion",
            templateOptions: {
                label: "请选择一个选",
                layout: "row1",
                order: false,
                score: 0,
                required: false,
                options: [{
                        label: "选项1",
                        value: "1",
                        score: 0,
                        input: false
                    },
                    {
                        label: "选项2",
                        value: "2",
                        score: 0,
                        input: false
                    }]
            }
        };
        return question;
    }
    //评价题
    /**
     * @return {?}
     */
    create_evaluation() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "evaluation",
            templateOptions: {
                label: "请选择一个选",
                required: false,
                setting: {
                    score: 0
                },
                options: [{
                        label: "非常不满意",
                        value: "1",
                        tag: "态度冷淡\n推销多\n技术差"
                    },
                    {
                        label: "比较不满意",
                        value: "2",
                        tag: "速度慢\n仪表乱\n不专业"
                    },
                    {
                        label: "一般",
                        value: "3",
                        tag: "无互动\n不积极\n业务不精"
                    },
                    {
                        label: "比较满意",
                        value: "4",
                        tag: "文明礼貌\n速度快\n较专业"
                    },
                    {
                        label: "非常满意",
                        value: "5",
                        tag: "热情好客\n敬业精神\n技能专业"
                    },]
            }
        };
        return question;
    }
    //多项填空
    /**
     * @return {?}
     */
    create_inputGroup() {
        /** @type {?} */
        let question = {
            status: 1,
            key: Guid.create()["value"],
            type: "input_group",
            templateOptions: {
                label: "请填写以下内容",
                required: false,
                options: [{
                        label: "填空1",
                        value: "1"
                    },
                    {
                        label: "填空2",
                        value: "2"
                    }]
            }
        };
        return question;
    }
}
VXOtherService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXOtherService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXJfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9vdGhlcl9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZ0IsQ0FBQzs7Ozs7SUFJaEIsV0FBVzs7WUFDTixRQUFRLEdBQXNCO1lBQ2hDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxFQUFFLE1BQU07WUFDWixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFHRCxhQUFhOztZQUNQLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsUUFBUTtZQUNkLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsZ0JBQWdCO2FBQ3hCO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUdBLFdBQVc7O1lBQ04sUUFBUSxHQUFzQjtZQUNoQyxNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksRUFBRSxNQUFNO1lBQ1osZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUdE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QUFLLEVBQUUsSUFBSTt3QkFDWCxLQUFLLEVBQUUsR0FBRzt3QkFDVixHQUFHLEVBQUMsZ0JBQWdCO3FCQUNyQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsTUFBTTt3QkFDYixLQUFLLEVBQUUsR0FBRzt3QkFDVixHQUFHLEVBQUMsZ0JBQWdCO3FCQUNyQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsTUFBTTt3QkFDYixLQUFLLEVBQUUsR0FBRzt3QkFDVixHQUFHLEVBQUMsa0JBQWtCO3FCQUN2QixFQUFFO2FBQ0o7U0FDRjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBR0QsaUJBQWlCOztZQUNYLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsYUFBYTtZQUNuQixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLE9BQU8sRUFBRSxDQUFDO3dCQUNSLEtBQUssRUFBRSxLQUFLO3dCQUNaLEtBQUssRUFBRSxHQUFHO3FCQUNYO29CQUNEO3dCQUNFLEtBQUssRUFBRSxLQUFLO3dCQUNaLEtBQUssRUFBRSxHQUFHO3FCQUNYLENBQUM7YUFDSDtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBL1BGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWFRhYmxlRmllbGRDb25maWcsIFZYRm9ybUZpZWxkQ29uZmlnLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZYT3RoZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBcclxuICAgLy/liIblibLnur9cclxuICAgY3JlYXRlX2xpbmUoKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IFwi5YiG5Ymy57q/XCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v5aSH5rOo6K+05piOXHJcbiAgY3JlYXRlX3JlbWFyaygpIHtcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwicmVtYXJrXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBcIuivt+mYheivu+acrOmhueivtOaYju+8jOeEtuWQjuWbnuetlOmXrumimFwiIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuIFxyXG4gICAvL+aXpeacn1xyXG4gICBjcmVhdGVfZGF0ZSgpIHtcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBsYWJlbDogXCLml6XmnJ9cIixcclxuICAgICAgICByZXF1aXJlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v5pe26Ze0XHJcbiAgY3JlYXRlX3RpbWUoKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcInRpbWVcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IFwi5pe26Ze0XCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+aJk+WIhumimFxyXG4gIGNyZWF0ZV9zY29yZSgpIHtcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwic2NvcmVcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgdHlwZTpcInN0YXJ0XCIsXHJcbiAgICAgICAgbGFiZWw6IFwi6K+357uZ5pys6aG55omT5YiGXCIsXHJcbiAgICAgICAgc2V0dGluZzp7XHJcbiAgICAgICAgICBsYWJlbDpcIlwiLCBcclxuICAgICAgICAgIHNjb3JlOiAwLCAgIFxyXG4gICAgICAgICAgbWluOiAwLCBcclxuICAgICAgICAgIG1heDogNVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v5LiL5ouJ6aKYXHJcbiAgY3JlYXRlX2Ryb3Bkb3duKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJkcm9wZG93blwiLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgXHJcbiAgICAgICAgbGFiZWw6IFwi6K+36YCJ5oup5LiA5Liq6YCJXCIsXHJcbiAgICAgICAgc2V0dGluZzp7XHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgIGxhYmVsOiBcIumAiemhuTFcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLpgInpobkyXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICBcclxuICAvL05QU+mimFxyXG4gIGNyZWF0ZV9ucHMoKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcIm5wc1wiLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgXHJcbiAgICAgICAgbGFiZWw6IFwi5oKo5ZCR5pyL5Y+L5oiW5ZCM5LqL5o6o6I2Q5oiR5Lus55qE5Y+v6IO95oCn5pyJ5aSa5aSn77yfXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogXCIwXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjFcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiMlwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCIzXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjRcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiNVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCI2XCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjdcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiOFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiOFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCI5XCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjEwXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIxMFwiXHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v5q+U6YeN6aKYXHJcbiAgY3JlYXRlX3Byb3BvcnRpb24oKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcInByb3BvcnRpb25cIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+mAieaLqeS4gOS4qumAiVwiLFxyXG4gICAgICAgIGxheW91dDogXCJyb3cxXCIsXHJcbiAgICAgICAgb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6IFwi6YCJ6aG5MVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMVwiLFxyXG4gICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICBpbnB1dDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIumAiemhuTJcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjJcIixcclxuICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgaW5wdXQ6IGZhbHNlXHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcblxyXG4gIC8v6K+E5Lu36aKYXHJcbiAgY3JlYXRlX2V2YWx1YXRpb24oKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImV2YWx1YXRpb25cIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+mAieaLqeS4gOS4qumAiVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBzZXR0aW5nOnsgXHJcbiAgICAgICAgICBzY29yZTogMCBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogXCLpnZ7luLjkuI3mu6HmhI9cIixcclxuICAgICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICAgIHRhZzpcIuaAgeW6puWGt+a3oVxcbuaOqOmUgOWkmlxcbuaKgOacr+W3rlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLmr5TovoPkuI3mu6HmhI9cIixcclxuICAgICAgICAgIHZhbHVlOiBcIjJcIixcclxuICAgICAgICAgIHRhZzpcIumAn+W6puaFolxcbuS7quihqOS5sVxcbuS4jeS4k+S4mlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLkuIDoiKxcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjNcIixcclxuICAgICAgICAgIHRhZzpcIuaXoOS6kuWKqFxcbuS4jeenr+aegVxcbuS4muWKoeS4jeeyvlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLmr5TovoPmu6HmhI9cIixcclxuICAgICAgICAgIHZhbHVlOiBcIjRcIixcclxuICAgICAgICAgIHRhZzpcIuaWh+aYjuekvOiyjFxcbumAn+W6puW/q1xcbui+g+S4k+S4mlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLpnZ7luLjmu6HmhI9cIixcclxuICAgICAgICAgIHZhbHVlOiBcIjVcIixcclxuICAgICAgICAgIHRhZzpcIueDreaDheWlveWuolxcbuaVrOS4mueyvuelnlxcbuaKgOiDveS4k+S4mlwiXHJcbiAgICAgICAgfSxdXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+WkmumhueWhq+epulxyXG4gIGNyZWF0ZV9pbnB1dEdyb3VwKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJpbnB1dF9ncm91cFwiLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHsgXHJcbiAgICAgICAgbGFiZWw6IFwi6K+35aGr5YaZ5Lul5LiL5YaF5a65XCIsIFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6IFwi5aGr56m6MVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLloavnqboyXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIyXCJcclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0=