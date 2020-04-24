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
var publicComponent = [
    VXFormDesignDetail,
];
var ɵ0 = zh_CN, ɵ1 = icons;
var VXFormAntModule = /** @class */ (function () {
    function VXFormAntModule() {
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
    return VXFormAntModule;
}());
export { VXFormAntModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2FudC8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUdMLGdCQUFnQixFQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixZQUFZLEVBQ2IsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6QyxPQUFPLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQs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OztJQUM2QixzQkFBQztDQUFBLEFBL0IvQixJQStCK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvZHJhZy1kcm9wXCI7XHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICBIdHRwQ2xpZW50TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSwgTlpfSTE4TiwgemhfQ04sIE5aX0lDT05TIH0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0IHtcclxuICBNZW51Rm9sZE91dGxpbmUsXHJcbiAgTWVudVVuZm9sZE91dGxpbmUsXHJcbiAgRm9ybU91dGxpbmUsXHJcbiAgRGFzaGJvYXJkT3V0bGluZSxcclxuICBNaW51c1NxdWFyZUZpbGwsXHJcbiAgTWludXNTcXVhcmVPdXRsaW5lLFxyXG4gIE1pbnVzU3F1YXJlVHdvVG9uZSxcclxuICBNaW51c091dGxpbmUsXHJcbiAgSW5ib3hPdXRsaW5lXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnNcIjtcclxuXHJcbmltcG9ydCB6aCBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvemhcIjsgXHJcblxyXG5pbXBvcnQgeyBWWEZvcm1Nb2R1bGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEJPT1RTVFJBUF9WWEZPUk1fQ09ORklHLFxyXG4gIEZJRUxEX1RZUEVfQ09NUE9ORU5UU1xyXG59IGZyb20gXCIuL2Jvb3RzdHJhcC5jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IHZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi92YWxpZGF0aW9uLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1EZXNpZ25EZXRhaWwgfSBmcm9tIFwiLi9kZXNpZ24vZGV0YWlsL2RldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtRGVzaWduRmllbGQgfSBmcm9tIFwiLi9kZXNpZ24vZmllbGQvZmllbGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybURlc2lnbkZpZWxkTGFiZWwgfSBmcm9tIFwiLi9kZXNpZ24vZmllbGQtbGFiZWwvZmllbGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZYRm9ybURlc2lnblRhYmxlIH0gZnJvbSBcIi4vZGVzaWduL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1EZXNpZ25UYWJsZXMgfSBmcm9tIFwiLi9kZXNpZ24vdGFibGVzL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1EcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kZXNpZ24vZHJhd2VyL2luZGV4LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVlhGb3JtUHJpdmF0ZVRyZWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ByaXZhdGUvdHJlZS9pbmRleC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtUHJpdmF0ZVRhYmxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcml2YXRlL3RhYmxlL2luZGV4LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVlhGb3JtVHJlZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9pbmRleC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtRW1wbG95ZWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL2VtcGxveWVlL2luZGV4LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1PcmcgfSBmcm9tIFwiLi9jb21wb25lbnRzL29yZy9pbmRleC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtUG9zdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9zdGlvbi9pbmRleC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVlhGb3JtQXJlYSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXJlYS9pbmRleC5jb21wb25lbnRcIjtcclxuXHJcbi8vIGltcG9ydCB7IFZYTGFuZ3VhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9sYW5nL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWEZvcm1FbXBsb3llZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHVibGljL2VtcGxveWVlL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWEZvcm1PcmdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9vcmcvaW5kZXguY29tcG9uZW50XCI7XHJcbi8vIGltcG9ydCB7IFZYRm9ybVBvc3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9wb3N0aW9uL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWEZvcm1BcmVhQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJsaWMvYXJlYS9pbmRleC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgVlhDYXJkU2VsZkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHVibGljL2NhcmQvY2FyZC1zZWxmL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWENhcmRTdWJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9jYXJkL2NhcmQtc3ViL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWENhcmRFbXBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3B1YmxpYy9jYXJkL2NhcmQtZW1wL2luZGV4LmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBWWENhcmRMaW1pdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHVibGljL2NhcmQvY2FyZC1saW1pdC9pbmRleC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZYVG9Gb3JtRmllbGRTZXJ2aWNlIH0gZnJvbSBcIi4vdG9vbHMvZm9ybUZpZWxkU2VydmljZVwiO1xyXG5pbXBvcnQgeyBWWERlc2dpblRvRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi90b29scy90YWJsZUZpZWxkU2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgVlhEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9kaWFsb2cuc2VydmljZVwiOyBcclxuaW1wb3J0IHsgUmVwbGFjZUxpbmVQaXBlIH0gZnJvbSBcIi4vdG9vbHMvcmVwbGFjZUxpbmVQaXBlXCI7IFxyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gXCIuL25ldC9odHRwLmNsaWVudFwiO1xyXG5cclxuY29uc3QgaWNvbnMgPSBbXHJcbiAgTWVudUZvbGRPdXRsaW5lLFxyXG4gIE1lbnVVbmZvbGRPdXRsaW5lLFxyXG4gIEZvcm1PdXRsaW5lLFxyXG4gIERhc2hib2FyZE91dGxpbmUsXHJcbiAgTWludXNTcXVhcmVGaWxsLFxyXG4gIE1pbnVzU3F1YXJlT3V0bGluZSxcclxuICBNaW51c1NxdWFyZVR3b1RvbmUsXHJcbiAgTWludXNPdXRsaW5lLFxyXG4gIEluYm94T3V0bGluZVxyXG5dO1xyXG5yZWdpc3RlckxvY2FsZURhdGEoemgpO1xyXG5cclxuLy/np4HmnInnmoRcclxuY29uc3QgZW50cnlDb21wb25lbnQgPSBbXHJcbiAgVlhGb3JtRGVzaWduRmllbGQsXHJcbiAgVlhGb3JtRGVzaWduRmllbGRMYWJlbCxcclxuICBWWEZvcm1EZXNpZ25UYWJsZSxcclxuICBWWEZvcm1EZXNpZ25UYWJsZXMsXHJcbiAgVlhGb3JtRHJhd2VyQ29tcG9uZW50LFxyXG5cclxuICBWWEZvcm1Qcml2YXRlVHJlZSxcclxuICBWWEZvcm1Qcml2YXRlVGFibGUsXHJcbiAgXHJcblxyXG4gIFxyXG4gIFZYRm9ybVRyZWUsXHJcbiAgVlhGb3JtRW1wbG95ZWUsXHJcbiAgVlhGb3JtRW1wbG95ZWUsXHJcbiAgVlhGb3JtT3JnLFxyXG4gIFZYRm9ybVBvc3Rpb24sXHJcbiAgVlhGb3JtQXJlYVxyXG5dO1xyXG5cclxuLy/lhazlvIDnmoRcclxuY29uc3QgcHVibGljQ29tcG9uZW50ID0gW1xyXG4gIFZYRm9ybURlc2lnbkRldGFpbCxcclxuICAvLyBWWExhbmd1YWdlQ29tcG9uZW50LFxyXG4gIC8vIFZYRm9ybUVtcGxveWVlQ29tcG9uZW50LFxyXG4gIC8vIFZYRm9ybU9yZ0NvbXBvbmVudCxcclxuICAvLyBWWEZvcm1Qb3N0aW9uQ29tcG9uZW50LFxyXG4gIC8vIFZYRm9ybUFyZWFDb21wb25lbnQsXHJcbiAgLy8gVlhDYXJkU2VsZkNvbXBvbmVudCxcclxuICAvLyBWWENhcmRTdWJDb21wb25lbnQsXHJcbiAgLy8gVlhDYXJkRW1wQ29tcG9uZW50LFxyXG4gIC8vIFZYQ2FyZExpbWl0Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEZJRUxEX1RZUEVfQ09NUE9ORU5UUyxcclxuICAgIGVudHJ5Q29tcG9uZW50LFxyXG4gICAgcHVibGljQ29tcG9uZW50LFxyXG4gICAgUmVwbGFjZUxpbmVQaXBlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBIdHRwTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIERyYWdEcm9wTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxyXG4gICAgVlhGb3JtTW9kdWxlLmZvckNoaWxkKEJPT1RTVFJBUF9WWEZPUk1fQ09ORklHKSxcclxuICAgIFZYRm9ybU1vZHVsZS5mb3JSb290KHZhbGlkYXRpb25Db25maWcpXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtlbnRyeUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RyYW5zbGF0ZU1vZHVsZSwgcHVibGljQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFsgXHJcbiAgICB7IHByb3ZpZGU6IE5aX0kxOE4sIHVzZVZhbHVlOiB6aF9DTiB9LFxyXG4gICAgeyBwcm92aWRlOiBOWl9JQ09OUywgdXNlVmFsdWU6IGljb25zIH0sIFxyXG4gICAgX0h0dHBDbGllbnQsIFxyXG4gICAgVlhGb3JtQW50U2VydmljZSxcclxuICAgIFZYRGlhbG9nU2VydmljZSxcclxuICAgIFZYVG9Gb3JtRmllbGRTZXJ2aWNlLFxyXG4gICAgVlhEZXNnaW5Ub0Zvcm1TZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtQW50TW9kdWxlIHt9XHJcbiJdfQ==