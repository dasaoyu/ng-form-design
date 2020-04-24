/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Guid } from "@vx-form/core";
var VXOtherService = /** @class */ (function () {
    function VXOtherService() {
    }
    //分割线
    //分割线
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_line = 
    //分割线
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
            status: 1,
            key: Guid.create()["value"],
            type: "line",
            templateOptions: {
                label: "分割线"
            }
        };
        return question;
    };
    //备注说明
    //备注说明
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_remark = 
    //备注说明
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
            status: 1,
            key: Guid.create()["value"],
            type: "remark",
            templateOptions: {
                label: "请阅读本项说明，然后回答问题"
            }
        };
        return question;
    };
    //日期
    //日期
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_date = 
    //日期
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
            status: 1,
            key: Guid.create()["value"],
            type: "date",
            templateOptions: {
                label: "日期",
                required: false
            }
        };
        return question;
    };
    //时间
    //时间
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_time = 
    //时间
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
            status: 1,
            key: Guid.create()["value"],
            type: "time",
            templateOptions: {
                label: "时间",
                required: false
            }
        };
        return question;
    };
    //打分题
    //打分题
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_score = 
    //打分题
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
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
    };
    //下拉题
    //下拉题
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_dropdown = 
    //下拉题
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
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
    };
    //NPS题
    //NPS题
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_nps = 
    //NPS题
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
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
    };
    //比重题
    //比重题
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_proportion = 
    //比重题
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
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
    };
    //评价题
    //评价题
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_evaluation = 
    //评价题
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
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
    };
    //多项填空
    //多项填空
    /**
     * @return {?}
     */
    VXOtherService.prototype.create_inputGroup = 
    //多项填空
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var question = {
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
    };
    VXOtherService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXOtherService.ctorParameters = function () { return []; };
    return VXOtherService;
}());
export { VXOtherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RoZXJfU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9vdGhlcl9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXlDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RTtJQUVFO0lBQWdCLENBQUM7SUFHaEIsS0FBSzs7Ozs7SUFDTCxvQ0FBVzs7Ozs7SUFBWDs7WUFDSyxRQUFRLEdBQXNCO1lBQ2hDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxFQUFFLE1BQU07WUFDWixlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU07Ozs7O0lBQ04sc0NBQWE7Ozs7O0lBQWI7O1lBQ00sUUFBUSxHQUFzQjtZQUNoQyxNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksRUFBRSxRQUFRO1lBQ2QsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7YUFDeEI7U0FDRjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFQSxJQUFJOzs7OztJQUNKLG9DQUFXOzs7OztJQUFYOztZQUNLLFFBQVEsR0FBc0I7WUFDaEMsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLEVBQUUsTUFBTTtZQUNaLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsS0FBSzthQUNoQjtT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RXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhUYWJsZUZpZWxkQ29uZmlnLCBWWEZvcm1GaWVsZENvbmZpZywgR3VpZCB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWE90aGVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgXHJcbiAgIC8v5YiG5Ymy57q/XHJcbiAgIGNyZWF0ZV9saW5lKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBcIuWIhuWJsue6v1wiXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+Wkh+azqOivtOaYjlxyXG4gIGNyZWF0ZV9yZW1hcmsoKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcInJlbWFya1wiLFxyXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICBsYWJlbDogXCLor7fpmIXor7vmnKzpobnor7TmmI7vvIznhLblkI7lm57nrZTpl67pophcIiBcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcbiBcclxuICAgLy/ml6XmnJ9cclxuICAgY3JlYXRlX2RhdGUoKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgbGFiZWw6IFwi5pel5pyfXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+aXtumXtFxyXG4gIGNyZWF0ZV90aW1lKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJ0aW1lXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsOiBcIuaXtumXtFwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/miZPliIbpophcclxuICBjcmVhdGVfc2NvcmUoKSB7XHJcbiAgICBsZXQgcXVlc3Rpb246IFZYRm9ybUZpZWxkQ29uZmlnID0ge1xyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGtleTogR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdLFxyXG4gICAgICB0eXBlOiBcInNjb3JlXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgIHR5cGU6XCJzdGFydFwiLFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+e7meacrOmhueaJk+WIhlwiLFxyXG4gICAgICAgIHNldHRpbmc6e1xyXG4gICAgICAgICAgbGFiZWw6XCJcIiwgXHJcbiAgICAgICAgICBzY29yZTogMCwgICBcclxuICAgICAgICAgIG1pbjogMCwgXHJcbiAgICAgICAgICBtYXg6IDVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+S4i+aLiemimFxyXG4gIGNyZWF0ZV9kcm9wZG93bigpIHtcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwiZHJvcGRvd25cIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+mAieaLqeS4gOS4qumAiVwiLFxyXG4gICAgICAgIHNldHRpbmc6e1xyXG4gICAgICAgICAgc2NvcmU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogXCLpgInpobkxXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIxXCIsXHJcbiAgICAgICAgICBzY29yZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi6YCJ6aG5MlwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMlwiLFxyXG4gICAgICAgICAgc2NvcmU6IDBcclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy9OUFPpophcclxuICBjcmVhdGVfbnBzKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJucHNcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IFxyXG4gICAgICAgIGxhYmVsOiBcIuaCqOWQkeaci+WPi+aIluWQjOS6i+aOqOiNkOaIkeS7rOeahOWPr+iDveaAp+acieWkmuWkp++8n1wiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6IFwiMFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCIxXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjJcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiM1wiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCI0XCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjVcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiNlwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCI3XCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI3XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIjhcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiOVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCIxMFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMTBcIlxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+avlOmHjemimFxyXG4gIGNyZWF0ZV9wcm9wb3J0aW9uKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJwcm9wb3J0aW9uXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczogeyBcclxuICAgICAgICBsYWJlbDogXCLor7fpgInmi6nkuIDkuKrpgIlcIixcclxuICAgICAgICBsYXlvdXQ6IFwicm93MVwiLFxyXG4gICAgICAgIG9yZGVyOiBmYWxzZSxcclxuICAgICAgICBzY29yZTogMCxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgIGxhYmVsOiBcIumAiemhuTFcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgaW5wdXQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLpgInpobkyXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgIGlucHV0OiBmYWxzZVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gcXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICAvL+ivhOS7t+mimFxyXG4gIGNyZWF0ZV9ldmFsdWF0aW9uKCkge1xyXG4gICAgbGV0IHF1ZXN0aW9uOiBWWEZvcm1GaWVsZENvbmZpZyA9IHtcclxuICAgICAgc3RhdHVzOiAxLFxyXG4gICAgICBrZXk6IEd1aWQuY3JlYXRlKClbXCJ2YWx1ZVwiXSxcclxuICAgICAgdHlwZTogXCJldmFsdWF0aW9uXCIsXHJcbiAgICAgIHRlbXBsYXRlT3B0aW9uczogeyBcclxuICAgICAgICBsYWJlbDogXCLor7fpgInmi6nkuIDkuKrpgIlcIixcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgc2V0dGluZzp7IFxyXG4gICAgICAgICAgc2NvcmU6IDAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgbGFiZWw6IFwi6Z2e5bi45LiN5ruh5oSPXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIxXCIsXHJcbiAgICAgICAgICB0YWc6XCLmgIHluqblhrfmt6FcXG7mjqjplIDlpJpcXG7mioDmnK/lt65cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5q+U6L6D5LiN5ruh5oSPXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgICB0YWc6XCLpgJ/luqbmhaJcXG7ku6rooajkubFcXG7kuI3kuJPkuJpcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5LiA6IisXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCIzXCIsXHJcbiAgICAgICAgICB0YWc6XCLml6DkupLliqhcXG7kuI3np6/mnoFcXG7kuJrliqHkuI3nsr5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5q+U6L6D5ruh5oSPXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI0XCIsXHJcbiAgICAgICAgICB0YWc6XCLmlofmmI7npLzosoxcXG7pgJ/luqblv6tcXG7ovoPkuJPkuJpcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi6Z2e5bi45ruh5oSPXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCI1XCIsXHJcbiAgICAgICAgICB0YWc6XCLng63mg4Xlpb3lrqJcXG7mlazkuJrnsr7npZ5cXG7mioDog73kuJPkuJpcIlxyXG4gICAgICAgIH0sXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy/lpJrpobnloavnqbpcclxuICBjcmVhdGVfaW5wdXRHcm91cCgpIHtcclxuICAgIGxldCBxdWVzdGlvbjogVlhGb3JtRmllbGRDb25maWcgPSB7XHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgICAga2V5OiBHdWlkLmNyZWF0ZSgpW1widmFsdWVcIl0sXHJcbiAgICAgIHR5cGU6IFwiaW5wdXRfZ3JvdXBcIixcclxuICAgICAgdGVtcGxhdGVPcHRpb25zOiB7IFxyXG4gICAgICAgIGxhYmVsOiBcIuivt+Whq+WGmeS7peS4i+WGheWuuVwiLCBcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgIGxhYmVsOiBcIuWhq+epujFcIixcclxuICAgICAgICAgIHZhbHVlOiBcIjFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5aGr56m6MlwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiMlwiXHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBxdWVzdGlvbjtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19