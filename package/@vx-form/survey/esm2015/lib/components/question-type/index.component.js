/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from "@angular/core";
import { DataService } from "../../service/data.service";
export class VXQuestionType {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
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
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    addQuestionType(type) {
        this.questionTypeEvent.emit(type);
    }
    /**
     * @return {?}
     */
    addPage() {
        this.addPageEvent.emit();
    }
    /**
     * @return {?}
     */
    saveSurvey() {
        this.saveSurveyEvent.emit();
    }
}
VXQuestionType.decorators = [
    { type: Component, args: [{
                selector: "vx-question-type",
                template: "<div class=\"buttonList\">\r\n    <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"addPage()\">\u6DFB\u52A0\u5206\u9875</button> \r\n</div>\r\n<div *ngFor=\"let item of questionTypeList;let index=index\">\r\n    <label class=\"title\">{{item.label}}</label>\r\n    <ul cdkDropList  [cdkDropListData]=\"item.child\"> \r\n        <ng-container *ngFor=\"let qtype of item.child\">\r\n            <li class=\"question_type\" *ngIf=\"qtype.show==true\" (click)=\"addQuestionType(qtype)\" cdkDrag >\r\n                <i class=\"icon-other-WenBen\"></i>\r\n                <label>{{qtype.label}}</label>\r\n            </li> \r\n        </ng-container>\r\n    </ul>\r\n</div>",
                styles: ["::ng-deep .question_type.cdk-drag-preview{text-align:center;line-height:30px;width:200px;height:34px;font-size:12px;border-radius:1px;border:1.4px dotted #7b8bed;background-color:#fff;color:#7b8bed;position:fixed!important;margin:0!important;z-index:9999!important;cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;list-style:none}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder{height:6px;width:100%;margin:10px 0;background-color:#7b8bed}::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder i,::ng-deep .formly-drag-drop .question_type.cdk-drag-placeholder label{opacity:0}:host .buttonList button:nth-last-child(1){margin:0}:host .title{display:inline-block;width:100%;margin:10px 0 5px;color:#4a4a4a}:host ul{padding:0;margin:0;list-style:none}:host ul li{float:left;width:96px;height:30px;line-height:27px;color:#707070;font-size:12px;padding:1px;border:1px solid #d8d8d8;background-color:#fff;border-radius:2px;margin:0 8px 8px 0;cursor:move;vertical-align:middle}:host ul li i{cursor:move;margin:0 5px}:host ul li label{cursor:move}:host ul li:hover{color:#fff;opacity:.95;border-radius:1.4px;background-image:linear-gradient(to right,#6373da,#7f8ff3)}"]
            }] }
];
/** @nocollapse */
VXQuestionType.ctorParameters = () => [
    { type: DataService }
];
VXQuestionType.propDecorators = {
    questionTypeEvent: [{ type: Output }],
    addPageEvent: [{ type: Output }],
    saveSurveyEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcXVlc3Rpb24tdHlwZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTekQsTUFBTSxPQUFPLGNBQWM7Ozs7SUEwUHpCLFlBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBeFBqQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEQscUJBQWdCLEdBQUs7WUFDbkI7Z0JBQ0UsS0FBSyxFQUFDLEtBQUs7Z0JBQ1gsS0FBSyxFQUFDO29CQUNKO3dCQUNFLElBQUksRUFBQyxPQUFPO3dCQUNaLEtBQUssRUFBQyxPQUFPO3dCQUNiLEdBQUcsRUFBQyxTQUFTO3dCQUNiLElBQUksRUFBQyxJQUFJO3FCQUNWO29CQUNEO3dCQUNFLElBQUksRUFBQyxVQUFVO3dCQUNmLEtBQUssRUFBQyxPQUFPO3dCQUNiLElBQUksRUFBQyxJQUFJO3FCQUNWO29CQUNELElBQUk7b0JBQ0oseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLEtBQUs7b0JBQ0wsSUFBSTtvQkFDSiw2QkFBNkI7b0JBQzdCLGlCQUFpQjtvQkFDakIsS0FBSztvQkFDTDt3QkFDRSxJQUFJLEVBQUMsT0FBTzt3QkFDWixLQUFLLEVBQUMsTUFBTTt3QkFDWixHQUFHLEVBQUMsVUFBVTt3QkFDZCxJQUFJLEVBQUMsSUFBSTtxQkFDVjtvQkFDRDt3QkFDRSxJQUFJLEVB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TUFBTTt3QkFDWixJQUFJLEVBQUMsSUFBSTtxQkFDVjtvQkFDRDt3QkFDRSxJQUFJLEVBQUMsaUJBQWlCO3dCQUN0QixLQUFLLEVBQUMsTUFBTTt3QkFDWixJQUFJLEVBQUMsSUFBSTtxQkFDVjtvQkFDRDt3QkFDRSxJQUFJLEVBQUMsY0FBYzt3QkFDbkIsS0FBSyxFQUFDLE1BQU07d0JBQ1osSUFBSSxFQUFDLElBQUk7cUJBQ1Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFDLGNBQWM7d0JBQ25CLEtBQUssRUFBQyxNQUFNO3dCQUNaLElBQUksRUFBQyxJQUFJO3FCQUNWO29CQUNEO3dCQUNFLElBQUksRUFBQyxjQUFjO3dCQUNuQixLQUFLLEVBQUMsTUFBTTtxQkFDYjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtJQUc2QyxDQUFDOzs7O0lBRS9DLFFBQVE7SUFFUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFRO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUFuUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHdyQkFBcUM7O2FBRXRDOzs7O1lBUlEsV0FBVzs7O2dDQVdqQixNQUFNOzJCQUNOLE1BQU07OEJBQ04sTUFBTTs7OztJQUZQLDJDQUFzRDs7SUFDdEQsc0NBQWlEOztJQUNqRCx5Q0FBb0Q7O0lBRXBELDBDQWlQQzs7SUFHVyxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL2RhdGEuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgSVRyZWVEYXRhLCBJQ2hlY2tlZFRyZWUgfSBmcm9tIFwiLi4vLi4vdG9vbHMvdXRpbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidngtcXVlc3Rpb24tdHlwZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYUXVlc3Rpb25UeXBlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBxdWVzdGlvblR5cGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBhZGRQYWdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2F2ZVN1cnZleUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHF1ZXN0aW9uVHlwZUxpc3Q6YW55PVtcclxuICAgIHtcclxuICAgICAgbGFiZWw6XCLpgInmi6npophcIixcclxuICAgICAgY2hpbGQ6WyBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcclxuICAgICAgICAgIGxhYmVsOlwi5Y2VIOmAiSDpophcIixcclxuICAgICAgICAgIHRhZzpcImRlZmF1bHRcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImNoZWNrYm94XCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWkmiDpgIkg6aKYXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgIHR5cGU6XCJzZWxlY3RfaW1hZ2VcIixcclxuICAgICAgICAvLyAgIGxhYmVsOlwi5Zu+54mH6YCJ5oupXCJcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgIHR5cGU6XCJzZWxlY3Rfdm90ZWltYWdlXCIsXHJcbiAgICAgICAgLy8gICBsYWJlbDpcIuWbvueJh+aKleelqFwiXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcclxuICAgICAgICAgIGxhYmVsOlwi5paH5a2X5oqV56WoXCIsXHJcbiAgICAgICAgICB0YWc6XCJ2b3RlZm9udFwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiZHJvcGRvd25cIixcclxuICAgICAgICAgIGxhYmVsOlwi5LiLIOaLiSDpophcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImNhc2NhZGVyXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIue6pyDogZQg6aKYXCIsXHJcbiAgICAgICAgICB0YWc6XCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJzY2FsZXJcIixcclxuICAgICAgICAgIGxhYmVsOlwi6YePIOihqCDpophcIixcclxuICAgICAgICAgIHRhZzpcImRlZmF1bHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgdHlwZTpcInNlbGVjdF9jbGFzc2lmaWNhdGlvblwiLFxyXG4gICAgICAgIC8vICAgbGFiZWw6XCLliIYg57G7IOmimFwiXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDpcIuWhq+epuumimFwiLFxyXG4gICAgICBjaGlsZDpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImlucHV0XCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWhqyDnqbog6aKYXCIsXHJcbiAgICAgICAgICB0YWc6XCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJpbnB1dF9ncm91cFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLlpJrpobnloavnqbpcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImlucHV0XCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuWkmuihjOaWh+acrFwiLFxyXG4gICAgICAgICAgdGFnOlwicmVtYXJrXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJibGFua19ob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuaoquWQkeWhq+epulwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiYmxhbmtfdGFibGVcIixcclxuICAgICAgICAgIGxhYmVsOlwi6Ieq5Yqo6KGo5qC8XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICBsYWJlbDpcIuaJk+WIhuaOkuW6j1wiLFxyXG4gICAgICBjaGlsZDpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInNjb3JlXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuaJkyDliIYg6aKYXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJldmFsdWF0aW9uXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuivhCDku7cg6aKYXCIsXHJcbiAgICAgICAgICBzaG93OnRydWUgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwic2NvcmVfc29ydFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLmjpIg5bqPIOmimFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwibnBzXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIk5QUyDpophcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInByb3BvcnRpb25cIixcclxuICAgICAgICAgIGxhYmVsOlwi5q+UIOmHjSDpophcIixcclxuICAgICAgICAgIHNob3c6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOlwi5aSH5rOo6K+05piOXCIsXHJcbiAgICAgIGNoaWxkOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwibGluZVwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLliIYg5YmyIOe6v1wiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInJlbWFya1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLlpIfms6jor7TmmI5cIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJvdGhlcl91cGxvYWRcIixcclxuICAgICAgICAgIGxhYmVsOlwi5paH5Lu25LiK5LygXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOlwi5Liq5Lq65L+h5oGvXCIsXHJcbiAgICAgIGNoaWxkOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiaW5wdXRcIixcclxuICAgICAgICAgIGxhYmVsOlwi5aeTIOWQjVwiLFxyXG4gICAgICAgICAgdGFnOlwibmFtZVwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwiaW5wdXRcIixcclxuICAgICAgICAgIGxhYmVsOlwi5omLIOaculwiLFxyXG4gICAgICAgICAgdGFnOlwibW9iaWxlXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJpbnB1dFwiLFxyXG4gICAgICAgICAgbGFiZWw6XCLpgq4g566xXCIsXHJcbiAgICAgICAgICB0YWc6XCJlbWFpbFwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcclxuICAgICAgICAgIGxhYmVsOlwi5oCnIOWIq1wiLFxyXG4gICAgICAgICAgdGFnOlwiZ2VuZGVyXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJkYXRlXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuaXpSDmnJ9cIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcInRpbWVcIixcclxuICAgICAgICAgIGxhYmVsOlwi5pe2IOmXtFwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcclxuICAgICAgICAgIGxhYmVsOlwi5bm0IOm+hFwiLFxyXG4gICAgICAgICAgdGFnOlwiYWdlXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJyYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLlraYg5Y6GXCIsXHJcbiAgICAgICAgICB0YWc6XCJlZHVjYXRpb25cIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImNhc2NhZGVyXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuS4kyDkuJpcIiwgXHJcbiAgICAgICAgICB0YWc6XCJtYWpvclwiLFxyXG4gICAgICAgICAgc2hvdzp0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgdHlwZTpcImNhc2NhZGVyXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIumZoiDmoKFcIixcclxuICAgICAgICAgIHRhZzpcInVuaXZlcnNpdHlcIixcclxuICAgICAgICAgIHNob3c6dHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImNhc2NhZGVyXCIsXHJcbiAgICAgICAgICBsYWJlbDpcIuihjCDkuJpcIixcclxuICAgICAgICAgIHRhZzpcImluZHVzdHJ5XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJyYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLogYwg5LiaXCIsXHJcbiAgICAgICAgICB0YWc6XCJvY2N1cGF0aW9uXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJlbXBfYWRkcmVzc1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLln47luILlnLDlnYBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcImVtcF9nZW9ncmFwaHlcIixcclxuICAgICAgICAgIGxhYmVsOlwi5Zyw55CG5L2N572uXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOlwi5YW25LuW6aKY5Z6LXCIsXHJcbiAgICAgIGNoaWxkOlsgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTpcIm1hdHJpeF9yYWRpb1wiLFxyXG4gICAgICAgICAgbGFiZWw6XCLnn6npmLXljZXpgIlcIiwgXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJtYXRyaXhfY2hlY2tib3hcIixcclxuICAgICAgICAgIGxhYmVsOlwi55+p6Zi15aSa6YCJXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJtYXRyaXhfc2NvcmVcIixcclxuICAgICAgICAgIGxhYmVsOlwi55+p6Zi15omT5YiGXCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJtYXRyaXhfaW5wdXRcIixcclxuICAgICAgICAgIGxhYmVsOlwi55+p6Zi15aGr56m6XCIsXHJcbiAgICAgICAgICBzaG93OnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6XCJtYXRyaXhfc2NhbGVcIixcclxuICAgICAgICAgIGxhYmVsOlwi55+p6Zi16YeP6KGoXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgXHJcbiAgfVxyXG4gXHJcbiAgYWRkUXVlc3Rpb25UeXBlKHR5cGU6YW55KXtcclxuICAgIHRoaXMucXVlc3Rpb25UeXBlRXZlbnQuZW1pdCh0eXBlKTtcclxuICB9IFxyXG5cclxuICBhZGRQYWdlKCl7XHJcbiAgICB0aGlzLmFkZFBhZ2VFdmVudC5lbWl0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIHNhdmVTdXJ2ZXkoKXtcclxuICAgIHRoaXMuc2F2ZVN1cnZleUV2ZW50LmVtaXQoKTtcclxuICB9XHJcbn1cclxuIl19