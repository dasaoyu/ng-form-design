/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from "@angular/core";
import { DataService } from "../../service/data.service";
var VXQuestionType = /** @class */ (function () {
    function VXQuestionType(dataService) {
        this.dataService = dataService;
        this.questionTypeEvent = new EventEmitter();
        this.addPageEvent = new EventEmitter();
        this.saveSurveyEvent = new EventEmitter();
        this.questionTypeList = [
            {
                label: "选择题",
                child: [
                    {
                        type: "radio",
                        label: "单 选 题",
                        tag: "default",
                        show: true
                    },
                    {
                        type: "checkbox",
                        label: "多 选 题",
                        show: true
                    },
                    // {
                    //   type:"select_image",
                    //   label:"图片选择"
                    // },
                    // {
                    //   type:"select_voteimage",
                    //   label:"图片投票"
                    // },
                    {
                        type: "radio",
                        label: "文字投票",
                        tag: "votefont",
                        show: true
                    },
                    {
                        type: "dropdown",
                        label: "下 拉 题",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "级 联 题",
                        tag: "default",
                        show: true
                    },
                    {
                        type: "scaler",
                        label: "量 表 题",
                        tag: "default"
                    },
                ]
            },
            {
                label: "填空题",
                child: [
                    {
                        type: "input",
                        label: "填 空 题",
                        tag: "default",
                        show: true
                    },
                    {
                        type: "input_group",
                        label: "多项填空",
                        show: true
                    },
                    {
                        type: "input",
                        label: "多行文本",
                        tag: "remark",
                        show: true
                    },
                    {
                        type: "blank_horizontal",
                        label: "横向填空"
                    },
                    {
                        type: "blank_table",
                        label: "自动表格"
                    }
                ]
            },
            {
                label: "打分排序",
                child: [
                    {
                        type: "score",
                        label: "打 分 题",
                        show: true
                    },
                    {
                        type: "evaluation",
                        label: "评 价 题",
                        show: true
                    },
                    {
                        type: "score_sort",
                        label: "排 序 题"
                    },
                    {
                        type: "nps",
                        label: "NPS 题",
                        show: true
                    },
                    {
                        type: "proportion",
                        label: "比 重 题",
                        show: false
                    }
                ]
            },
            {
                label: "备注说明",
                child: [
                    {
                        type: "line",
                        label: "分 割 线",
                        show: true
                    },
                    {
                        type: "remark",
                        label: "备注说明",
                        show: true
                    },
                    {
                        type: "other_upload",
                        label: "文件上传"
                    }
                ]
            },
            {
                label: "个人信息",
                child: [
                    {
                        type: "input",
                        label: "姓 名",
                        tag: "name",
                        show: true
                    },
                    {
                        type: "input",
                        label: "手 机",
                        tag: "mobile",
                        show: true
                    },
                    {
                        type: "input",
                        label: "邮 箱",
                        tag: "email",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "性 别",
                        tag: "gender",
                        show: true
                    },
                    {
                        type: "date",
                        label: "日 期",
                        show: true
                    },
                    {
                        type: "time",
                        label: "时 间",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "年 龄",
                        tag: "age",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "学 历",
                        tag: "education",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "专 业",
                        tag: "major",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "院 校",
                        tag: "university",
                        show: true
                    },
                    {
                        type: "cascader",
                        label: "行 业",
                        tag: "industry",
                        show: true
                    },
                    {
                        type: "radio",
                        label: "职 业",
                        tag: "occupation",
                        show: true
                    },
                    {
                        type: "emp_address",
                        label: "城市地址"
                    },
                    {
                        type: "emp_geography",
                        label: "地理位置"
                    }
                ]
            },
            {
                label: "其他题型",
                child: [
                    {
                        type: "matrix_radio",
                        label: "矩阵单选",
                        show: true
                    },
                    {
                        type: "matrix_checkbox",
                        label: "矩阵多选",
                        show: true
                    },
                    {
                        type: "matrix_score",
                        label: "矩阵打分",
                        show: true
                    },
                    {
                        type: "matrix_input",
                        label: "矩阵填空",
                        show: true
                    },
                    {
                        type: "matrix_scale",
                        label: "矩阵量表"
                    }
                ]
            }
        ];
    }
    /**
     * @return {?}
     */
    VXQuestionType.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VXQuestionType.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @param {?} type
     * @return {?}
     */
    VXQuestionType.prototype.addQuestionType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.questionTypeEvent.emit(type);
    };
    /**
     * @return {?}
     */
    VXQuestionType.prototype.addPage = /**
     * @return {?}
     */
    function () {
        this.addPageEvent.emit();
    };
    /**
     * @return {?}
     */
    VXQuestionType.prototype.saveSurvey = /**
     * @return {?}
     */
    function () {
        this.saveSurveyEvent.emit();
    };
    VXQuestionType.decorators = [
        { type: Component, args: [{
                    selector: "vx-question-type",
                    template: "<div class=\"buttonList\">\r\n    <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"addPage()\">\u6DFB\u52A0\u5206\u9875</button> \r\n</div>\r\n<div *ngFor=\"let item of questionTypeList;let index=index\">\r\n    <label class=\"title\">{{item.label}}</label>\r\n    <ul cdkDropList  [cdkDropListData]=\"item.child\"> \r\n        <ng-container *ngFor=\"let qtype of item.child\">\r\n            <li class=\"question_type\" *ngIf=\"qtype.show==true\" (click)=\"addQuestionType(qtype)\" cdkDrag >\r\n                <i class=\"icon-other-WenBen\"></i>\r\n                <label>{{qtype.label}}</label>\r\n            </li> \r\n        </ng-container>\r\n    </ul>\r\n</div>",
                    styles: ["::ng-deep .question_type.cdk-drag-preview{text-align:center;line-height:30px;width:200px;height:34px;font-size:12px;border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;color:#7b8bed;position:fixed!important;margin:0!important;z-index:9999!important;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;list-style:none}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder{height:6px;width:100%;margin:10px 0;background-color:#7b8bed}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder i,::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder label{opacity:0}:host .buttonList button:nth-last-child(1){margin:0}:host .title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host ul{padding:0;margin:0;list-style:none}:host ul li{float:left;width:96px;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;border:1px solid #d8d8d8;background-color:#fff;border-radius:2px;margin:0 8px 8px 0;cursor:move;vertical-align:middle}:host ul li i{cursor:move;margin:0 5px}:host ul li label{cursor:move}:host ul li:hover{color:#fff;opacity:.95;border-radius:1.4px;background-image:linear-gradient(to right,#6373da,#7f8ff3)}"]
                }] }
    ];
    /** @nocollapse */
    VXQuestionType.ctorParameters = function () { return [
        { type: DataService }
    ]; };
    VXQuestionType.propDecorators = {
        questionTypeEvent: [{ type: Output }],
        addPageEvent: [{ type: Output }],
        saveSurveyEvent: [{ type: Output }]
    };
    return VXQuestionType;
}());
export { VXQuestionType };
if (false) {
    /** @type {?} */
    VXQuestionType.prototype.questionTypeEvent;
    /** @type {?} */
    VXQuestionType.prototype.addPageEvent;
    /** @type {?} */
    VXQuestionType.prototype.saveSurveyEvent;
    /** @type {?} */
    VXQuestionType.prototype.questionTypeList;
    /** @type {?} */
    VXQuestionType.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcXVlc3Rpb24tdHlwZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJekQ7SUErUEUsd0JBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBeFBqQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEQscUJBQWdCLEdBQUs7WUFDbkI7Z0JBQ0UsS0FBSyxFQUFDLEtBQUs7Z0JBQ1gsS0FBSyxFQUFDO29CQUNKO3dCQUNFLElBQUksRUFBQyxPQUFPO3dCQUNaLEtBQUssRUFBQyxPQUFPO3dCQUNiLEdBQUcsRUFBQyxTQUFTO3dCQUNiLElBQUksRUFBQyxJQUFJO3FCQUNWO29CQUNEO3dCQUNFLElBQUksRUFBQyxVQUFVO3dCQUNmLEtBQUssRUFBQyxPQUFPO3dCQUNiLElBQUksRUFBQyxJQUFJO3FCQUNWO29CQUNELElBQUk7b0JBQ0oseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLEtBQUs7b0JBQ0wsSUFBSTtvQkFDSiw2QkFBNkI7b0JBQzdCLGlCQUFpQjtvQkFDakIsS0FBSztvQkFDTDt3QkFDRSxJQUFJLEVBQUMsT0FBTzt3QkFDWixLQUFLLEVBQUMsTUFBTTt3QkFDWixHQUFHLEVBQUMsVUFBVTt3QkFDZCxJQUFJLEVBQUMsSUFBSTtxQkFDVjtvQkFDRDt3QkFDRSxJQUFJLEVBQUMsVUFBVTt3QkFDZixLQUFL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dCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBJVHJlZURhdGEsIElDaGVja2VkVHJlZSB9IGZyb20gXCIuLi8uLi90b29scy91dGlsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ2eC1xdWVzdGlvbi10eXBlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmRleC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9pbmRleC5jb21wb25lbnQubGVzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhRdWVzdGlvblR5cGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgXHJcbiAgQE91dHB1dCgpIHF1ZXN0aW9uVHlwZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGFkZFBhZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzYXZlU3VydmV5RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcXVlc3Rpb25UeXBlTGlzdDphbnk9W1xyXG4gICAge1xyXG4gICAgICBsYWJlbDpcIumAieaLqemimFwiLFxyXG4gICAgICBjaGlsZDpbIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJyYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLljZUg6YCJIOmimFwiLFxyXG4gICAgICAgICAgdGFnOlwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiY2hlY2tib3hcIixcclxuICAgICAgICAgIGxhYmVsOlwi5aSaIOmAiSDpophcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgdHlwZTpcInNlbGVjdF9pbWFnZVwiLFxyXG4gICAgICAgIC8vICAgbGFiZWw6XCLlm77niYfpgInmi6lcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgdHlwZTpcInNlbGVjdF92b3RlaW1hZ2VcIixcclxuICAgICAgICAvLyAgIGxhYmVsOlwi5Zu+54mH5oqV56WoXCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJyYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLmloflrZfmipXnpahcIixcclxuICAgICAgICAgIHRhZzpcInZvdGVmb250XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJkcm9wZG93blwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLkuIsg5ouJIOmimFwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiY2FzY2FkZXJcIixcclxuICAgICAgICAgIGxhYmVsOlwi57qnIOiBlCDpophcIixcclxuICAgICAgICAgIHRhZzpcImRlZmF1bHRcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInNjYWxlclwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLph48g6KGoIOmimFwiLFxyXG4gICAgICAgICAgdGFnOlwiZGVmYXVsdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICB0eXBlOlwic2VsZWN0X2NsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgLy8gICBsYWJlbDpcIuWIhiDnsbsg6aKYXCJcclxuICAgICAgICAvLyB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOlwi5aGr56m66aKYXCIsXHJcbiAgICAgIGNoaWxkOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiaW5wdXRcIixcclxuICAgICAgICAgIGxhYmVsOlwi5aGrIOepuiDpophcIixcclxuICAgICAgICAgIHRhZzpcImRlZmF1bHRcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImlucHV0X2dyb3VwXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWkmumhueWhq+epulwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiaW5wdXRcIixcclxuICAgICAgICAgIGxhYmVsOlwi5aSa6KGM5paH5pysXCIsXHJcbiAgICAgICAgICB0YWc6XCJyZW1hcmtcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImJsYW5rX2hvcml6b250YWxcIixcclxuICAgICAgICAgIGxhYmVsOlwi5qiq5ZCR5aGr56m6XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJibGFua190YWJsZVwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLoh6rliqjooajmoLxcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOlwi5omT5YiG5o6S5bqPXCIsXHJcbiAgICAgIGNoaWxkOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwic2NvcmVcIixcclxuICAgICAgICAgIGxhYmVsOlwi5omTIOWIhiDpophcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImV2YWx1YXRpb25cIixcclxuICAgICAgICAgIGxhYmVsOlwi6K+EIOS7tyDpophcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJzY29yZV9zb3J0XCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuaOkiDluo8g6aKYXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJucHNcIixcclxuICAgICAgICAgIGxhYmVsOlwiTlBTIOmimFwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwicHJvcG9ydGlvblwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLmr5Qg6YeNIOmimFwiLFxyXG4gICAgICAgICAgc2hvdzpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6XCLlpIfms6jor7TmmI5cIixcclxuICAgICAgY2hpbGQ6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJsaW5lXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWIhiDlibIg57q/XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwicmVtYXJrXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWkh+azqOivtOaYjlwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcIm90aGVyX3VwbG9hZFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLmlofku7bkuIrkvKBcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6XCLkuKrkurrkv6Hmga9cIixcclxuICAgICAgY2hpbGQ6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJpbnB1dFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLlp5Mg5ZCNXCIsXHJcbiAgICAgICAgICB0YWc6XCJuYW1lXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJpbnB1dFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLmiYsg5py6XCIsXHJcbiAgICAgICAgICB0YWc6XCJtb2JpbGVcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImlucHV0XCIsXHJcbiAgICAgICAgICBsYWJlbDpcIumCriDnrrFcIixcclxuICAgICAgICAgIHRhZzpcImVtYWlsXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJyYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLmgKcg5YirXCIsXHJcbiAgICAgICAgICB0YWc6XCJnZW5kZXJcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImRhdGVcIixcclxuICAgICAgICAgIGxhYmVsOlwi5pelIOacn1wiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwidGltZVwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLml7Yg6Ze0XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJyYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLlubQg6b6EXCIsXHJcbiAgICAgICAgICB0YWc6XCJhZ2VcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInJhZGlvXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWtpiDljoZcIixcclxuICAgICAgICAgIHRhZzpcImVkdWNhdGlvblwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiY2FzY2FkZXJcIixcclxuICAgICAgICAgIGxhYmVsOlwi5LiTIOS4mlwiLCBcclxuICAgICAgICAgIHRhZzpcIm1ham9yXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICB0eXBlOlwiY2FzY2FkZXJcIixcclxuICAgICAgICAgIGxhYmVsOlwi6ZmiIOagoVwiLFxyXG4gICAgICAgICAgdGFnOlwidW5pdmVyc2l0eVwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiY2FzY2FkZXJcIixcclxuICAgICAgICAgIGxhYmVsOlwi6KGMIOS4mlwiLFxyXG4gICAgICAgICAgdGFnOlwiaW5kdXN0cnlcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInJhZGlvXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuiBjCDkuJpcIixcclxuICAgICAgICAgIHRhZzpcIm9jY3VwYXRpb25cIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImVtcF9hZGRyZXNzXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWfjuW4guWcsOWdgFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiZW1wX2dlb2dyYXBoeVwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLlnLDnkIbkvY3nva5cIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6XCLlhbbku5bpopjlnotcIixcclxuICAgICAgY2hpbGQ6WyBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwibWF0cml4X3JhZGlvXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuefqemYteWNlemAiVwiLCBcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcIm1hdHJpeF9jaGVja2JveFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLnn6npmLXlpJrpgIlcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcIm1hdHJpeF9zY29yZVwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLnn6npmLXmiZPliIZcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcIm1hdHJpeF9pbnB1dFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLnn6npmLXloavnqbpcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcIm1hdHJpeF9zY2FsZVwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLnn6npmLXph4/ooahcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF1cclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICBcclxuICB9XHJcbiBcclxuICBhZGRRdWVzdGlvblR5cGUodHlwZTphbnkpe1xyXG4gICAgdGhpcy5xdWVzdGlvblR5cGVFdmVudC5lbWl0KHR5cGUpO1xyXG4gIH0gXHJcblxyXG4gIGFkZFBhZ2UoKXtcclxuICAgIHRoaXMuYWRkUGFnZUV2ZW50LmVtaXQoKTtcclxuICB9XHJcbiAgXHJcbiAgc2F2ZVN1cnZleSgpe1xyXG4gICAgdGhpcy5zYXZlU3VydmV5RXZlbnQuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=