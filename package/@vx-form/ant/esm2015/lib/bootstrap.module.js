/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import zh from "@angular/common/locales/zh";
import { VXFormModule } from "@vx-form/core";
import { BOOTSTRAP_VXFORM_CONFIG, FIELD_TYPE_COMPONENTS } from "./bootstrap.config";
import { validationConfig } from "./validation.config";
import { VXFormDesignDetail } from "./design/detail/detail.component";
import { VXFormDesignField } from "./design/field/field.component";
import { VXFormDesignFieldLabel } from "./design/field-label/field.component";
import { VXFormDesignTable } from "./design/table/table.component";
import { VXFormDesignTables } from "./design/tables/table.component";
import { VXFormDrawerComponent } from "./design/drawer/index.component";
import { VXFormPrivateTree } from "./components/private/tree/index.component";
import { VXFormPrivateTable } from "./components/private/table/index.component";
import { VXFormTree } from "./components/tree/index.component";
import { VXFormEmployee } from "./components/employee/index.component";
import { VXFormOrg } from "./components/org/index.component";
import { VXFormPostion } from "./components/postion/index.component";
import { VXFormArea } from "./components/area/index.component";
// import { VXLanguageComponent } from "./components/public/lang/index.component";
// import { VXFormEmployeeComponent } from "./components/public/employee/index.component";
// import { VXFormOrgComponent } from "./components/public/org/index.component";
// import { VXFormPostionComponent } from "./components/public/postion/index.component";
// import { VXFormAreaComponent } from "./components/public/area/index.component";
// import { VXCardSelfComponent } from "./components/public/card/card-self/index.component";
// import { VXCardSubComponent } from "./components/public/card/card-sub/index.component";
// import { VXCardEmpComponent } from "./components/public/card/card-emp/index.component";
// import { VXCardLimitComponent } from "./components/public/card/card-limit/index.component";
import { VXFormAntService } from "./tools/service";
import { VXToFormFieldService } from "./tools/formFieldService";
import { VXDesginToFormService } from "./tools/tableFieldService";
import { VXDialogService } from "./service/dialog.service";
import { ReplaceLinePipe } from "./tools/replaceLinePipe";
import { _HttpClient } from "./net/http.client";
/** @type {?} */
const icons = [
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
const entryComponent = [
    VXFormDesignField,
    VXFormDesignFieldLabel,
    VXFormDesignTable,
    VXFormDesignTables,
    VXFormDrawerComponent,
    VXFormPrivateTree,
    VXFormPrivateTable,
    VXFormTree,
    VXFormEmployee,
    VXFormEmployee,
    VXFormOrg,
    VXFormPostion,
    VXFormArea
];
//公开的
/** @type {?} */
const publicComponent = [
    VXFormDesignDetail,
];
const ɵ0 = zh_CN, ɵ1 = icons;
export class VXFormAntModule {
}
VXFormAntModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FIELD_TYPE_COMPONENTS,
                    entryComponent,
                    publicComponent,
                    ReplaceLinePipe
                ],
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
                exports: [TranslateModule, publicComponent],
                providers: [
                    { provide: NZ_I18N, useValue: ɵ0 },
                    { provide: NZ_ICONS, useValue: ɵ1 },
                    _HttpClient,
                    VXFormAntService,
                    VXDialogService,
                    VXToFormFieldService,
                    VXDesginToFormService
                ]
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUdMLGdCQUFnQixFQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixZQUFZLEVBQ2IsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6QyxPQUFPLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQs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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgSHR0cENsaWVudE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUsIE5aX0kxOE4sIHpoX0NOLCBOWl9JQ09OUyB9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTWVudUZvbGRPdXRsaW5lLFxyXG4gIE1lbnVVbmZvbGRPdXRsaW5lLFxyXG4gIEZvcm1PdXRsaW5lLFxyXG4gIERhc2hib2FyZE91dGxpbmUsXHJcbiAgTWludXNTcXVhcmVGaWxsLFxyXG4gIE1pbnVzU3F1YXJlT3V0bGluZSxcclxuICBNaW51c1NxdWFyZVR3b1RvbmUsXHJcbiAgTWludXNPdXRsaW5lLFxyXG4gIEluYm94T3V0bGluZVxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgemggZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3poXCI7IFxyXG5cclxuaW1wb3J0IHsgVlhGb3JtTW9kdWxlIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBCT09UU1RSQVBfVlhGT1JNX0NPTkZJRyxcclxuICBGSUVMRF9UWVBFX0NPTVBPTkVOVFNcclxufSBmcm9tIFwiLi9ib290c3RyYXAuY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyB2YWxpZGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4vdmFsaWRhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgVlhGb3JtRGVzaWduRGV0YWlsIH0gZnJvbSBcIi4vZGVzaWduL2RldGFpbC9kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybURlc2lnbkZpZWxkIH0gZnJvbSBcIi4vZGVzaWduL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1EZXNpZ25GaWVsZExhYmVsIH0gZnJvbSBcIi4vZGVzaWduL2ZpZWxkLWxhYmVsL2ZpZWxkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1EZXNpZ25UYWJsZSB9IGZyb20gXCIuL2Rlc2lnbi90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtRGVzaWduVGFibGVzIH0gZnJvbSBcIi4vZGVzaWduL3RhYmxlcy90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVzaWduL2RyYXdlci9pbmRleC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZYRm9ybVByaXZhdGVUcmVlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcml2YXRlL3RyZWUvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybVByaXZhdGVUYWJsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJpdmF0ZS90YWJsZS9pbmRleC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZYRm9ybVRyZWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybUVtcGxveWVlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9lbXBsb3llZS9pbmRleC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtT3JnIH0gZnJvbSBcIi4vY29tcG9uZW50cy9vcmcvaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybVBvc3Rpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL3Bvc3Rpb24vaW5kZXguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybUFyZWEgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FyZWEvaW5kZXguY29tcG9uZW50XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBWWExhbmd1YWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJsaWMvbGFuZy9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhGb3JtRW1wbG95ZWVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9lbXBsb3llZS9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhGb3JtT3JnQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJsaWMvb3JnL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWEZvcm1Qb3N0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJsaWMvcG9zdGlvbi9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhGb3JtQXJlYUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHVibGljL2FyZWEvaW5kZXguY29tcG9uZW50XCI7XHJcbi8vIGltcG9ydCB7IFZYQ2FyZFNlbGZDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9jYXJkL2NhcmQtc2VsZi9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhDYXJkU3ViQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJsaWMvY2FyZC9jYXJkLXN1Yi9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhDYXJkRW1wQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJsaWMvY2FyZC9jYXJkLWVtcC9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhDYXJkTGltaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9jYXJkL2NhcmQtbGltaXQvaW5kZXguY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWWEZvcm1BbnRTZXJ2aWNlIH0gZnJvbSBcIi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWFRvRm9ybUZpZWxkU2VydmljZSB9IGZyb20gXCIuL3Rvb2xzL2Zvcm1GaWVsZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVlhEZXNnaW5Ub0Zvcm1TZXJ2aWNlIH0gZnJvbSBcIi4vdG9vbHMvdGFibGVGaWVsZFNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFZYRGlhbG9nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZGlhbG9nLnNlcnZpY2VcIjsgXHJcbmltcG9ydCB7IFJlcGxhY2VMaW5lUGlwZSB9IGZyb20gXCIuL3Rvb2xzL3JlcGxhY2VMaW5lUGlwZVwiOyBcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tIFwiLi9uZXQvaHR0cC5jbGllbnRcIjtcclxuXHJcbmNvbnN0IGljb25zID0gW1xyXG4gIE1lbnVGb2xkT3V0bGluZSxcclxuICBNZW51VW5mb2xkT3V0bGluZSxcclxuICBGb3JtT3V0bGluZSxcclxuICBEYXNoYm9hcmRPdXRsaW5lLFxyXG4gIE1pbnVzU3F1YXJlRmlsbCxcclxuICBNaW51c1NxdWFyZU91dGxpbmUsXHJcbiAgTWludXNTcXVhcmVUd29Ub25lLFxyXG4gIE1pbnVzT3V0bGluZSxcclxuICBJbmJveE91dGxpbmVcclxuXTtcclxucmVnaXN0ZXJMb2NhbGVEYXRhKHpoKTtcclxuXHJcbi8v56eB5pyJ55qEXHJcbmNvbnN0IGVudHJ5Q29tcG9uZW50ID0gW1xyXG4gIFZYRm9ybURlc2lnbkZpZWxkLFxyXG4gIFZYRm9ybURlc2lnbkZpZWxkTGFiZWwsXHJcbiAgVlhGb3JtRGVzaWduVGFibGUsXHJcbiAgVlhGb3JtRGVzaWduVGFibGVzLFxyXG4gIFZYRm9ybURyYXdlckNvbXBvbmVudCxcclxuXHJcbiAgVlhGb3JtUHJpdmF0ZVRyZWUsXHJcbiAgVlhGb3JtUHJpdmF0ZVRhYmxlLFxyXG4gIFxyXG5cclxuICBcclxuICBWWEZvcm1UcmVlLFxyXG4gIFZYRm9ybUVtcGxveWVlLFxyXG4gIFZYRm9ybUVtcGxveWVlLFxyXG4gIFZYRm9ybU9yZyxcclxuICBWWEZvcm1Qb3N0aW9uLFxyXG4gIFZYRm9ybUFyZWFcclxuXTtcclxuXHJcbi8v5YWs5byA55qEXHJcbmNvbnN0IHB1YmxpY0NvbXBvbmVudCA9IFtcclxuICBWWEZvcm1EZXNpZ25EZXRhaWwsXHJcbiAgLy8gVlhMYW5ndWFnZUNvbXBvbmVudCxcclxuICAvLyBWWEZvcm1FbXBsb3llZUNvbXBvbmVudCxcclxuICAvLyBWWEZvcm1PcmdDb21wb25lbnQsXHJcbiAgLy8gVlhGb3JtUG9zdGlvbkNvbXBvbmVudCxcclxuICAvLyBWWEZvcm1BcmVhQ29tcG9uZW50LFxyXG4gIC8vIFZYQ2FyZFNlbGZDb21wb25lbnQsXHJcbiAgLy8gVlhDYXJkU3ViQ29tcG9uZW50LFxyXG4gIC8vIFZYQ2FyZEVtcENvbXBvbmVudCxcclxuICAvLyBWWENhcmRMaW1pdENvbXBvbmVudCxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBGSUVMRF9UWVBFX0NPTVBPTkVOVFMsXHJcbiAgICBlbnRyeUNvbXBvbmVudCxcclxuICAgIHB1YmxpY0NvbXBvbmVudCxcclxuICAgIFJlcGxhY2VMaW5lUGlwZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIFZYRm9ybU1vZHVsZS5mb3JDaGlsZChCT09UU1RSQVBfVlhGT1JNX0NPTkZJRyksXHJcbiAgICBWWEZvcm1Nb2R1bGUuZm9yUm9vdCh2YWxpZGF0aW9uQ29uZmlnKVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbZW50cnlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVNb2R1bGUsIHB1YmxpY0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbIFxyXG4gICAgeyBwcm92aWRlOiBOWl9JMThOLCB1c2VWYWx1ZTogemhfQ04gfSxcclxuICAgIHsgcHJvdmlkZTogTlpfSUNPTlMsIHVzZVZhbHVlOiBpY29ucyB9LCBcclxuICAgIF9IdHRwQ2xpZW50LCBcclxuICAgIFZYRm9ybUFudFNlcnZpY2UsXHJcbiAgICBWWERpYWxvZ1NlcnZpY2UsXHJcbiAgICBWWFRvRm9ybUZpZWxkU2VydmljZSxcclxuICAgIFZYRGVzZ2luVG9Gb3JtU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUFudE1vZHVsZSB7fVxyXG4iXX0=