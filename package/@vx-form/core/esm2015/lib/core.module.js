/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, Inject, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { VXForm } from "./components/vxform";
import { VXFormField } from "./components/vxform.field";
import { VXFormAttributes } from "./components/vxform.attributes";
import { VXFormConfig, VXFORM_CONFIG } from "./services/vxform.config";
import { VXFormBuilder } from "./services/vxform.builder";
import { VXFormGroup } from "./templates/vxform.group";
import { VXFormValidationMessage } from "./templates/vxform.validation-message";
import { VXFormTemplateType } from "./templates/field-template.type";
import { FieldExpressionExtension } from "./extensions/field-expression/field-expression";
import { FieldValidationExtension } from "./extensions/field-validation/field-validation";
import { FieldFormExtension } from "./extensions/field-form/field-form";
import { CoreExtension } from "./extensions/core/core";
import { VXFormCommonService } from "./tools/common";
/**
 * @param {?} vxFormConfig
 * @return {?}
 */
export function defaultVXFormConfig(vxFormConfig) {
    return {
        types: [
            { name: "vxform-group", component: VXFormGroup },
            { name: "template", component: VXFormTemplateType }
        ],
        extensions: [
            { name: "core", extension: new CoreExtension(vxFormConfig) },
            {
                name: "field-validation",
                extension: new FieldValidationExtension(vxFormConfig)
            },
            { name: "field-form", extension: new FieldFormExtension() },
            { name: "field-expression", extension: new FieldExpressionExtension() }
        ]
    };
}
export class VXFormModule {
    /**
     * @param {?} configService
     * @param {?=} configs
     */
    constructor(configService, configs = []) {
        if (!configs) {
            return;
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => configService.addConfig(config)));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: VXFormModule,
            providers: [
                {
                    provide: VXFORM_CONFIG,
                    multi: true,
                    useFactory: defaultVXFormConfig,
                    deps: [VXFormConfig]
                },
                { provide: VXFORM_CONFIG, useValue: config, multi: true },
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: config,
                    multi: true
                },
                VXFormConfig,
                VXFormBuilder
            ]
        };
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: VXFormModule,
            providers: [
                { provide: VXFORM_CONFIG, useValue: config, multi: true },
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: config,
                    multi: true
                },
                VXFormBuilder
            ]
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forConfig(config) {
        if (localStorage.getItem("VX_FORM_LINCES") != null && localStorage.getItem("VX_FORM_LINCES") != "") {
            localStorage.removeItem("VX_FORM_LINCES");
        }
        localStorage.setItem("VX_FORM_LINCES", config);
        return {
            ngModule: VXFormModule,
            providers: [VXFormBuilder]
        };
    }
}
VXFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    VXForm,
                    VXFormField,
                    VXFormAttributes,
                    VXFormGroup,
                    VXFormValidationMessage,
                    VXFormTemplateType
                ],
                entryComponents: [VXFormGroup, VXFormTemplateType],
                exports: [
                    VXForm,
                    VXFormField,
                    VXFormAttributes,
                    VXFormGroup,
                    VXFormValidationMessage
                ],
                imports: [HttpModule, HttpClientModule, CommonModule],
                providers: [VXFormCommonService]
            },] }
];
/** @nocollapse */
VXFormModule.ctorParameters = () => [
    { type: VXFormConfig },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [VXFORM_CONFIG,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUVSLDRCQUE0QixFQUM1QixNQUFNLEVBQ04sUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFDTCxZQUFZLEVBRVosYUFBYSxFQUVkLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFF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QixrQkFBa0I7aUJBQ25CO2dCQUNELGVBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztnQkFDbEQsT0FBTyxFQUFFO29CQUNQLE1BQU07b0JBQ04sV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7OztZQXJEQyxZQUFZO3dDQTJHVCxRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIE5nTW9kdWxlLFxyXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXHJcbiAgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyxcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gIEh0dHBDbGllbnRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgVlhGb3JtIH0gZnJvbSBcIi4vY29tcG9uZW50cy92eGZvcm1cIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZFwiO1xyXG5pbXBvcnQgeyBWWEZvcm1BdHRyaWJ1dGVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy92eGZvcm0uYXR0cmlidXRlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFZYRm9ybUNvbmZpZyxcclxuICBDb25maWdPcHRpb24sXHJcbiAgVlhGT1JNX0NPTkZJRyxcclxuICBBUFBDb25maWdcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRm9ybUJ1aWxkZXIgfSBmcm9tIFwiLi9zZXJ2aWNlcy92eGZvcm0uYnVpbGRlclwiO1xyXG5pbXBvcnQgeyBWWEZvcm1Hcm91cCB9IGZyb20gXCIuL3RlbXBsYXRlcy92eGZvcm0uZ3JvdXBcIjtcclxuaW1wb3J0IHsgVlhGb3JtVmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvdnhmb3JtLnZhbGlkYXRpb24tbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1UZW1wbGF0ZVR5cGUgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvZmllbGQtdGVtcGxhdGUudHlwZVwiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRFeHByZXNzaW9uRXh0ZW5zaW9uIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy9maWVsZC1leHByZXNzaW9uL2ZpZWxkLWV4cHJlc3Npb25cIjtcclxuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uRXh0ZW5zaW9uIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy9maWVsZC12YWxpZGF0aW9uL2ZpZWxkLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgRmllbGRGb3JtRXh0ZW5zaW9uIH0gZnJvbSBcIi4vZXh0ZW5zaW9ucy9maWVsZC1mb3JtL2ZpZWxkLWZvcm1cIjtcclxuaW1wb3J0IHsgQ29yZUV4dGVuc2lvbiB9IGZyb20gXCIuL2V4dGVuc2lvbnMvY29yZS9jb3JlXCI7XHJcbmltcG9ydCB7IFZYRm9ybUNvbW1vblNlcnZpY2UgfSBmcm9tIFwiLi90b29scy9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VlhGb3JtQ29uZmlnKHZ4Rm9ybUNvbmZpZzogVlhGb3JtQ29uZmlnKTogQ29uZmlnT3B0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZXM6IFtcclxuICAgICAgeyBuYW1lOiBcInZ4Zm9ybS1ncm91cFwiLCBjb21wb25lbnQ6IFZYRm9ybUdyb3VwIH0sXHJcbiAgICAgIHsgbmFtZTogXCJ0ZW1wbGF0ZVwiLCBjb21wb25lbnQ6IFZYRm9ybVRlbXBsYXRlVHlwZSB9XHJcbiAgICBdLFxyXG4gICAgZXh0ZW5zaW9uczogW1xyXG4gICAgICB7IG5hbWU6IFwiY29yZVwiLCBleHRlbnNpb246IG5ldyBDb3JlRXh0ZW5zaW9uKHZ4Rm9ybUNvbmZpZykgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZmllbGQtdmFsaWRhdGlvblwiLFxyXG4gICAgICAgIGV4dGVuc2lvbjogbmV3IEZpZWxkVmFsaWRhdGlvbkV4dGVuc2lvbih2eEZvcm1Db25maWcpXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJmaWVsZC1mb3JtXCIsIGV4dGVuc2lvbjogbmV3IEZpZWxkRm9ybUV4dGVuc2lvbigpIH0sXHJcbiAgICAgIHsgbmFtZTogXCJmaWVsZC1leHByZXNzaW9uXCIsIGV4dGVuc2lvbjogbmV3IEZpZWxkRXhwcmVzc2lvbkV4dGVuc2lvbigpIH1cclxuICAgIF1cclxuICB9O1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVlhGb3JtLFxyXG4gICAgVlhGb3JtRmllbGQsXHJcbiAgICBWWEZvcm1BdHRyaWJ1dGVzLFxyXG4gICAgVlhGb3JtR3JvdXAsXHJcbiAgICBWWEZvcm1WYWxpZGF0aW9uTWVzc2FnZSxcclxuICAgIFZYRm9ybVRlbXBsYXRlVHlwZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVlhGb3JtR3JvdXAsIFZYRm9ybVRlbXBsYXRlVHlwZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVlhGb3JtLFxyXG4gICAgVlhGb3JtRmllbGQsXHJcbiAgICBWWEZvcm1BdHRyaWJ1dGVzLFxyXG4gICAgVlhGb3JtR3JvdXAsXHJcbiAgICBWWEZvcm1WYWxpZGF0aW9uTWVzc2FnZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW0h0dHBNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIENvbW1vbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbVlhGb3JtQ29tbW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdPcHRpb24gPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VlhGb3JtTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVlhGb3JtTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBWWEZPUk1fQ09ORklHLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBkZWZhdWx0VlhGb3JtQ29uZmlnLFxyXG4gICAgICAgICAgZGVwczogW1ZYRm9ybUNvbmZpZ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogVlhGT1JNX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyxcclxuICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBWWEZvcm1Db25maWcsXHJcbiAgICAgICAgVlhGb3JtQnVpbGRlclxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckNoaWxkKFxyXG4gICAgY29uZmlnOiBDb25maWdPcHRpb24gPSB7fVxyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VlhGb3JtTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVlhGb3JtTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFZYRk9STV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVlhGb3JtQnVpbGRlclxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckNvbmZpZyhjb25maWc6c3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVyczxWWEZvcm1Nb2R1bGU+e1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWWF9GT1JNX0xJTkNFU1wiKSE9bnVsbCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlZYX0ZPUk1fTElOQ0VTXCIpIT1cIlwiKXtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJWWF9GT1JNX0xJTkNFU1wiKTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVlhfRk9STV9MSU5DRVNcIixjb25maWcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgIG5nTW9kdWxlOiBWWEZvcm1Nb2R1bGUsXHJcbiAgICAgICBwcm92aWRlcnM6IFtWWEZvcm1CdWlsZGVyXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnU2VydmljZTogVlhGb3JtQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChWWEZPUk1fQ09ORklHKSBjb25maWdzOiBDb25maWdPcHRpb25bXSA9IFtdXHJcbiAgKSB7XHJcbiAgICBpZiAoIWNvbmZpZ3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3MuZm9yRWFjaChjb25maWcgPT4gY29uZmlnU2VydmljZS5hZGRDb25maWcoY29uZmlnKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==