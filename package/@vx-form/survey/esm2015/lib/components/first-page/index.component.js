/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class VXSurveyFirstPage {
    constructor() {
        this.firstpage = {
            title: "问卷标题",
            text: "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！"
        };
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
}
VXSurveyFirstPage.decorators = [
    { type: Component, args: [{
                selector: "vxsurvey-first-page",
                template: "<div class=\"first-content\">\r\n    <div class=\"title\">\r\n        <textarea rows=\"1\" nz-input [(ngModel)]=\"firstpage.title\"></textarea>\r\n    </div>\r\n    <div class=\"body\">\r\n        <textarea nz-input [(ngModel)]=\"firstpage.text\"></textarea>\r\n    </div>\r\n</div>",
                styles: [":host{width:100%;height:100%}:host .first-content{display:inline-block;width:100%;height:100%;padding:20px 0}:host .first-content .title{margin:0 auto}:host .first-content .title textarea{text-align:center;border:0;resize:none}:host .first-content .title textarea:hover{background:#ececec}:host .first-content .body{margin:40px 0}:host .first-content .body textarea{border:0;resize:none}:host .first-content .body textarea:hover{background:#ececec}"]
            }] }
];
/** @nocollapse */
VXSurveyFirstPage.ctorParameters = () => [];
VXSurveyFirstPage.propDecorators = {
    firstpage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VXSurveyFirstPage.prototype.firstpage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vc3VydmV5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlyc3QtcGFnZS9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLE1BQU0sT0FBTyxpQkFBaUI7SUFPNUI7UUFMUyxjQUFTLEdBQUs7WUFDckIsS0FBSyxFQUFDLE1BQU07WUFDWixJQUFJLEVBQUMseUVBQXlFO1NBQy9FLENBQUE7SUFJRCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isc1NBQXFDOzthQUV0Qzs7Ozs7d0JBR0UsS0FBSzs7OztJQUFOLHNDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZyB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhzdXJ2ZXktZmlyc3QtcGFnZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5kZXguY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5kZXguY29tcG9uZW50Lmxlc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5Rmlyc3RQYWdlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIFxyXG4gIEBJbnB1dCgpIGZpcnN0cGFnZTphbnk9e1xyXG4gICAgdGl0bGU6XCLpl67ljbfmoIfpophcIixcclxuICAgIHRleHQ6XCLkuLrkuobnu5nmgqjmj5Dkvpvmm7Tlpb3nmoTmnI3liqHvvIzluIzmnJvmgqjog73mir3lh7rlh6DliIbpkp/ml7bpl7TvvIzlsIbmgqjnmoTmhJ/lj5flkozlu7rorq7lkYror4nmiJHku6zvvIzmiJHku6zpnZ7luLjph43op4bmr4/kvY3nlKjmiLfnmoTlrp3otLXmhI/op4HvvIzmnJ/lvoXmgqjnmoTlj4LkuI7vvIHnjrDlnKjmiJHku6zlsLHpqazkuIrlvIDlp4vlkKfvvIFcIlxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgfSAgXHJcbn0iXX0=