/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICONS } from "ng-zorro-antd";
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline, MinusSquareFill, MinusSquareOutline, MinusSquareTwoTone, MinusOutline, InboxOutline } from "@ant-design/icons-angular/icons";
//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import zh from "@angular/common/locales/zh";
import { VXFormModule } from "@vx-form/core";
import { BOOTSTRAP_VXFORM_CONFIG, FIELD_TYPE_COMPONENTS } from "./bootstrap.config";
import { validationConfig } from "./validation.config";
import { VXSurveyDesignDetail } from "./design/detail/detail.component";
import { VXQuestionType } from "./components/question-type/index.component";
import { VXQuestionList } from "./components/question-list/index.component";
import { VXSurveySettingTemplate } from "./components/setting.teplate";
import { VXSurveySettingCascader } from "./components/basic/setting_cascader";
import { VXSurveySettingCheckBox } from "./components/basic/setting_checkbox";
import { VXSurveySettingDropdown } from "./components/basic/setting_dropdown";
import { VXSurveySettingInput } from "./components/basic/setting_input";
import { VXSurveySettingLine } from "./components/basic/setting_line";
import { VXSurveySettingRadio } from "./components/basic/setting_radio";
import { VXSurveySettingRemark } from "./components/basic/setting_remark";
import { VXSurveySettingScaler } from "./components/basic/setting_scaler";
import { VXSurveySettingScore } from "./components/basic/setting_score";
import { VXSurveySettingDate } from "./components/basic/setting_date";
import { VXSurveySettingTime } from "./components/basic/setting_time";
import { VXSurveySettingNPS } from "./components/basic/setting_nps";
import { VXSurveySettingProportion } from "./components/basic/setting_proportion";
import { VXSurveySettingEvaluation } from "./components/basic/setting_evaluation";
import { VXSurveySettingMatrixRadio } from "./components/basic/setting_matrix_radio";
import { VXSurveySettingMatrixCheckBox } from "./components/basic/setting_matrix_checkbox";
import { VXSurveySettingMatrixScore } from "./components/basic/setting_matrix_score";
import { VXSurveySettingMatrixInput } from "./components/basic/setting_matrix_input";
import { VXSurveySettingInputGroup } from "./components/basic/setting_input_group";
import { VXSurveyEditCascader } from "./components/edit-cascader/index.component";
import { VXSurveyEditEvaluation } from "./components/edit-evaluation/index.component";
import { VXSurveyEditCascaderItem } from "./components/edit-cascader/cascader-item";
import { ContenteditableModel } from "./components/inline-editor/contenteditable";
import { InlineEditorComponent } from "./components/inline-editor/inline-editor.comonent";
import { VXSurveyFirstPage } from "./components/first-page/index.component";
import { VXSurveyLastPage } from "./components/last-page/index.component";
import { VXFormAntService } from "./tools/service";
import { VXRadioService } from "./tools/radio_Service";
import { VXCheckboxService } from './tools/checkbox_Service';
import { VXInputService } from "./tools/input_Service";
import { VXOtherService } from "./tools/other_Service";
import { VXCascaderService } from "./tools/cascader_Service";
import { VXMatrixService } from "./tools/matrix_Service";
import { VXDialogService } from "./service/dialog.service";
import { ReplaceLinePipe } from "./tools/replaceLinePipe";
import { _HttpClient } from "./net/http.client";
import { SafeHtmlPipe } from './pipes/safehtml.pipe';
/** @type {?} */
var icons = [
    MenuFoldOutline,
    MenuUnfoldOutline,
    FormOutline,
    DashboardOutline,
    MinusSquareFill,
    MinusSquareOutline,
    MinusSquareTwoTone,
    MinusOutline,
    InboxOutline
];
registerLocaleData(zh);
//私有的
/** @type {?} */
var entryComponent = [
    VXQuestionType,
    VXQuestionList,
    VXSurveySettingTemplate,
    VXSurveySettingCascader,
    VXSurveySettingCheckBox,
    VXSurveySettingDropdown,
    VXSurveySettingInput,
    VXSurveySettingLine,
    VXSurveySettingRadio,
    VXSurveySettingRemark,
    VXSurveySettingScaler,
    VXSurveySettingScore,
    VXSurveySettingDate,
    VXSurveySettingTime,
    VXSurveySettingNPS,
    VXSurveySettingProportion,
    VXSurveySettingEvaluation,
    VXSurveySettingMatrixRadio,
    VXSurveySettingMatrixCheckBox,
    VXSurveySettingMatrixScore,
    VXSurveySettingMatrixInput,
    VXSurveySettingInputGroup,
    VXSurveyEditEvaluation,
    VXSurveyEditCascader,
    VXSurveyEditCascaderItem,
    VXSurveyFirstPage,
    VXSurveyLastPage
];
//公开的
/** @type {?} */
var publicComponent = [
    VXSurveyDesignDetail,
    VXSurveyEditEvaluation
];
/** @type {?} */
var PIPES = [
    SafeHtmlPipe
];
/** @type {?} */
var PROVIDES = [
    VXRadioService,
    VXCheckboxService,
    VXInputService,
    VXOtherService,
    VXCascaderService,
    VXMatrixService
];
var ɵ0 = zh_CN, ɵ1 = icons;
var VXSurveyModule = /** @class */ (function () {
    function VXSurveyModule() {
    }
    VXSurveyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread([
                        FIELD_TYPE_COMPONENTS,
                        entryComponent,
                        publicComponent,
                        ReplaceLinePipe,
                        ContenteditableModel,
                        InlineEditorComponent
                    ], PIPES),
                    imports: [
                        HttpModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        DragDropModule,
                        OverlayModule,
                        NgZorroAntdModule,
                        VXFormModule.forChild(BOOTSTRAP_VXFORM_CONFIG),
                        VXFormModule.forRoot(validationConfig)
                    ],
                    entryComponents: [entryComponent],
                    exports: tslib_1.__spread([TranslateModule, publicComponent, ContenteditableModel, InlineEditorComponent], PIPES),
                    providers: tslib_1.__spread([
                        { provide: NZ_I18N, useValue: ɵ0 },
                        { provide: NZ_ICONS, useValue: ɵ1 },
                        _HttpClient,
                        VXFormAntService,
                        VXDialogService
                    ], PROVIDES)
                },] }
    ];
    return VXSurveyModule;
}());
export { VXSurveyModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUNMLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osWUFBWSxFQUNiLE1BQU0saUNBQWlDLENBQUM7O0FBR3pDLE9BQU8sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDdEIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztB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d0JBQ1AsVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLFlBQVksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7d0JBQzlDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7cUJBQ3ZDO29CQUNELGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDakMsT0FBTyxvQkFBRyxlQUFlLEVBQUUsZUFBZSxFQUFDLG9CQUFvQixFQUFDLHFCQUFxQixHQUNoRixLQUFLLENBQUM7b0JBQ1gsU0FBUzt3QkFDUCxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxJQUFPLEVBQUU7d0JBQ3JDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLElBQU8sRUFBRTt3QkFDdEMsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGVBQWU7dUJBQ1osUUFBUSxDQUNaO2lCQUNGOztJQUM0QixxQkFBQztDQUFBLEFBbEM5QixJQWtDOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICBIdHRwQ2xpZW50TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSwgTlpfSTE4TiwgemhfQ04sIE5aX0lDT05TIH0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHtcclxuICBNZW51Rm9sZE91dGxpbmUsXHJcbiAgTWVudVVuZm9sZE91dGxpbmUsXHJcbiAgRm9ybU91dGxpbmUsXHJcbiAgRGFzaGJvYXJkT3V0bGluZSxcclxuICBNaW51c1NxdWFyZUZpbGwsXHJcbiAgTWludXNTcXVhcmVPdXRsaW5lLFxyXG4gIE1pbnVzU3F1YXJlVHdvVG9uZSxcclxuICBNaW51c091dGxpbmUsXHJcbiAgSW5ib3hPdXRsaW5lXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnNcIjtcclxuLy9pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgemggZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3poXCI7IFxyXG5cclxuaW1wb3J0IHsgVlhGb3JtTW9kdWxlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBCT09UU1RSQVBfVlhGT1JNX0NPTkZJRyxcclxuICBGSUVMRF9UWVBFX0NPTVBPTkVOVFNcclxufSBmcm9tIFwiLi9ib290c3RyYXAuY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyB2YWxpZGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4vdmFsaWRhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlEZXNpZ25EZXRhaWwgfSBmcm9tIFwiLi9kZXNpZ24vZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjsgXHJcbiBcclxuaW1wb3J0IHsgVlhRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3F1ZXN0aW9uLXR5cGUvaW5kZXguY29tcG9uZW50XCI7IFxyXG5pbXBvcnQgeyBWWFF1ZXN0aW9uTGlzdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC9pbmRleC5jb21wb25lbnRcIjsgXHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ1RlbXBsYXRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZXR0aW5nLnRlcGxhdGVcIjtcclxuXHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0Nhc2NhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX2Nhc2NhZGVyXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0NoZWNrQm94IH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0Ryb3Bkb3duIH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX2Ryb3Bkb3duXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0lucHV0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX2lucHV0XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0xpbmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfbGluZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdSYWRpbyB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19yYWRpb1wiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdSZW1hcmsgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfcmVtYXJrXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ1NjYWxlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19zY2FsZXJcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nU2NvcmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfc2NvcmVcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nRGF0ZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19kYXRlXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ1RpbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfdGltZVwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdOUFMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfbnBzXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ1Byb3BvcnRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfcHJvcG9ydGlvblwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdFdmFsdWF0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX2V2YWx1YXRpb25cIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nTWF0cml4UmFkaW8gfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfbWF0cml4X3JhZGlvXCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ01hdHJpeENoZWNrQm94IH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYXNpYy9zZXR0aW5nX21hdHJpeF9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleVNldHRpbmdNYXRyaXhTY29yZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFzaWMvc2V0dGluZ19tYXRyaXhfc2NvcmVcIjtcclxuaW1wb3J0IHsgVlhTdXJ2ZXlTZXR0aW5nTWF0cml4SW5wdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfbWF0cml4X2lucHV0XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5U2V0dGluZ0lucHV0R3JvdXAgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2ljL3NldHRpbmdfaW5wdXRfZ3JvdXBcIjtcclxuXHJcbmltcG9ydCB7IFZYU3VydmV5RWRpdENhc2NhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0LWNhc2NhZGVyL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleUVkaXRFdmFsdWF0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0LWV2YWx1YXRpb24vaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5RWRpdENhc2NhZGVySXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZWRpdC1jYXNjYWRlci9jYXNjYWRlci1pdGVtXCI7XHJcbiBcclxuaW1wb3J0IHsgQ29udGVudGVkaXRhYmxlTW9kZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lubGluZS1lZGl0b3IvY29udGVudGVkaXRhYmxlXCI7XHJcbmltcG9ydCB7IElubGluZUVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW5saW5lLWVkaXRvci9pbmxpbmUtZWRpdG9yLmNvbW9uZW50XCI7XHJcbmltcG9ydCB7IFZYU3VydmV5Rmlyc3RQYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9maXJzdC1wYWdlL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWFN1cnZleUxhc3RQYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYXN0LXBhZ2UvaW5kZXguY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWFJhZGlvU2VydmljZSB9IGZyb20gXCIuL3Rvb2xzL3JhZGlvX1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgVlhDaGVja2JveFNlcnZpY2UgfSBmcm9tICcuL3Rvb2xzL2NoZWNrYm94X1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBWWElucHV0U2VydmljZSB9IGZyb20gXCIuL3Rvb2xzL2lucHV0X1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgVlhPdGhlclNlcnZpY2UgfSBmcm9tIFwiLi90b29scy9vdGhlcl9TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZYQ2FzY2FkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdG9vbHMvY2FzY2FkZXJfU2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWE1hdHJpeFNlcnZpY2UgfSBmcm9tIFwiLi90b29scy9tYXRyaXhfU2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgVlhEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9kaWFsb2cuc2VydmljZVwiOyBcclxuaW1wb3J0IHsgUmVwbGFjZUxpbmVQaXBlIH0gZnJvbSBcIi4vdG9vbHMvcmVwbGFjZUxpbmVQaXBlXCI7IFxyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gXCIuL25ldC9odHRwLmNsaWVudFwiO1xyXG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmVodG1sLnBpcGUnO1xyXG5jb25zdCBpY29ucyA9IFtcclxuICBNZW51Rm9sZE91dGxpbmUsXHJcbiAgTWVudVVuZm9sZE91dGxpbmUsXHJcbiAgRm9ybU91dGxpbmUsXHJcbiAgRGFzaGJvYXJkT3V0bGluZSxcclxuICBNaW51c1NxdWFyZUZpbGwsXHJcbiAgTWludXNTcXVhcmVPdXRsaW5lLFxyXG4gIE1pbnVzU3F1YXJlVHdvVG9uZSxcclxuICBNaW51c091dGxpbmUsXHJcbiAgSW5ib3hPdXRsaW5lXHJcbl07XHJcbnJlZ2lzdGVyTG9jYWxlRGF0YSh6aCk7XHJcblxyXG4vL+engeacieeahFxyXG5jb25zdCBlbnRyeUNvbXBvbmVudCA9IFsgXHJcbiAgVlhRdWVzdGlvblR5cGUsXHJcbiAgVlhRdWVzdGlvbkxpc3QsXHJcbiAgVlhTdXJ2ZXlTZXR0aW5nVGVtcGxhdGUsIFxyXG4gIFxyXG4gIFZYU3VydmV5U2V0dGluZ0Nhc2NhZGVyLFxyXG4gIFZYU3VydmV5U2V0dGluZ0NoZWNrQm94LFxyXG4gIFZYU3VydmV5U2V0dGluZ0Ryb3Bkb3duLFxyXG4gIFZYU3VydmV5U2V0dGluZ0lucHV0LFxyXG4gIFZYU3VydmV5U2V0dGluZ0xpbmUsXHJcbiAgVlhTdXJ2ZXlTZXR0aW5nUmFkaW8sXHJcbiAgVlhTdXJ2ZXlTZXR0aW5nUmVtYXJrLFxyXG4gIFZYU3VydmV5U2V0dGluZ1NjYWxlcixcclxuICBWWFN1cnZleVNldHRpbmdTY29yZSxcclxuICBWWFN1cnZleVNldHRpbmdEYXRlLFxyXG4gIFZYU3VydmV5U2V0dGluZ1RpbWUsXHJcbiAgVlhTdXJ2ZXlTZXR0aW5nTlBTLFxyXG4gIFZYU3VydmV5U2V0dGluZ1Byb3BvcnRpb24sXHJcbiAgVlhTdXJ2ZXlTZXR0aW5nRXZhbHVhdGlvbixcclxuICBWWFN1cnZleVNldHRpbmdNYXRyaXhSYWRpbyxcclxuICBWWFN1cnZleVNldHRpbmdNYXRyaXhDaGVja0JveCxcclxuICBWWFN1cnZleVNldHRpbmdNYXRyaXhTY29yZSxcclxuICBWWFN1cnZleVNldHRpbmdNYXRyaXhJbnB1dCxcclxuICBWWFN1cnZleVNldHRpbmdJbnB1dEdyb3VwLFxyXG4gIFxyXG4gIFZYU3VydmV5RWRpdEV2YWx1YXRpb24sXHJcbiAgVlhTdXJ2ZXlFZGl0Q2FzY2FkZXIsXHJcblxyXG4gIFZYU3VydmV5RWRpdENhc2NhZGVySXRlbSxcclxuICBcclxuICBWWFN1cnZleUZpcnN0UGFnZSxcclxuICBWWFN1cnZleUxhc3RQYWdlXHJcbl07XHJcblxyXG4vL+WFrOW8gOeahFxyXG5jb25zdCBwdWJsaWNDb21wb25lbnQgPSBbXHJcbiAgVlhTdXJ2ZXlEZXNpZ25EZXRhaWwsXHJcbiAgVlhTdXJ2ZXlFZGl0RXZhbHVhdGlvblxyXG5dO1xyXG5jb25zdCBQSVBFUyA9IFtcclxuICBTYWZlSHRtbFBpcGVcclxuXTtcclxuY29uc3QgUFJPVklERVM9W1xyXG4gIFZYUmFkaW9TZXJ2aWNlLFxyXG4gIFZYQ2hlY2tib3hTZXJ2aWNlLFxyXG4gIFZYSW5wdXRTZXJ2aWNlLFxyXG4gIFZYT3RoZXJTZXJ2aWNlLFxyXG4gIFZYQ2FzY2FkZXJTZXJ2aWNlLFxyXG4gIFZYTWF0cml4U2VydmljZVxyXG5dXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRklFTERfVFlQRV9DT01QT05FTlRTLFxyXG4gICAgZW50cnlDb21wb25lbnQsXHJcbiAgICBwdWJsaWNDb21wb25lbnQsXHJcbiAgICBSZXBsYWNlTGluZVBpcGUsXHJcbiAgICBDb250ZW50ZWRpdGFibGVNb2RlbCxcclxuICAgIElubGluZUVkaXRvckNvbXBvbmVudCxcclxuICAgIC4uLlBJUEVTLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIFZYRm9ybU1vZHVsZS5mb3JDaGlsZChCT09UU1RSQVBfVlhGT1JNX0NPTkZJRyksXHJcbiAgICBWWEZvcm1Nb2R1bGUuZm9yUm9vdCh2YWxpZGF0aW9uQ29uZmlnKVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbZW50cnlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVNb2R1bGUsIHB1YmxpY0NvbXBvbmVudCxDb250ZW50ZWRpdGFibGVNb2RlbCxJbmxpbmVFZGl0b3JDb21wb25lbnQsXHJcbiAgICAuLi5QSVBFU10sXHJcbiAgcHJvdmlkZXJzOiBbIFxyXG4gICAgeyBwcm92aWRlOiBOWl9JMThOLCB1c2VWYWx1ZTogemhfQ04gfSxcclxuICAgIHsgcHJvdmlkZTogTlpfSUNPTlMsIHVzZVZhbHVlOiBpY29ucyB9LCBcclxuICAgIF9IdHRwQ2xpZW50LCBcclxuICAgIFZYRm9ybUFudFNlcnZpY2UsXHJcbiAgICBWWERpYWxvZ1NlcnZpY2UsXHJcbiAgICAuLi5QUk9WSURFU1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYU3VydmV5TW9kdWxlIHt9XHJcbiJdfQ==