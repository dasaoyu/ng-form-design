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
var VXFormModule = /** @class */ (function () {
    function VXFormModule(configService, configs) {
        if (configs === void 0) { configs = []; }
        if (!configs) {
            return;
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return configService.addConfig(config); }));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    VXFormModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
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
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    VXFormModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
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
    };
    /**
     * @param {?} config
     * @return {?}
     */
    VXFormModule.forConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (localStorage.getItem("VX_FORM_LINCES") != null && localStorage.getItem("VX_FORM_LINCES") != "") {
            localStorage.removeItem("VX_FORM_LINCES");
        }
        localStorage.setItem("VX_FORM_LINCES", config);
        return {
            ngModule: VXFormModule,
            providers: [VXFormBuilder]
        };
    };
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
    VXFormModule.ctorParameters = function () { return [
        { type: VXFormConfig },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [VXFORM_CONFIG,] }] }
    ]; };
    return VXFormModule;
}());
export { VXFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUVSLDRCQUE0QixFQUM1QixNQUFNLEVBQ04sUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFDTCxZQUFZLEVBRVosYUFBYSxFQUVkLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXJELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxZQUEwQjtJQUM1RCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtTQUNwRDtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDNUQ7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLElBQUksd0JBQXdCLENBQUMsWUFBWSxDQUFDO2FBQ3REO1lBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLGtCQUFrQixFQUFFLEVBQUU7WUFDM0QsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLElBQUksd0JBQXdCLEVBQUUsRUFBRTtTQUN4RTtLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQ7SUF1RUUsc0JBQ0UsYUFBMkIsRUFDUSxPQUE0QjtRQUEvRCx3QkFBQSxFQUFBLFlBQStEO1FBRS9ELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBM0RNLG9CQUFPOzs7O0lBQWQsVUFBZSxNQUF5QjtRQUF6Qix1QkFBQSxFQUFBLFdBQXlCO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSxtQkFBbUI7b0JBQy9CLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDckI7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDekQ7b0JBQ0UsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELFlBQVk7Z0JBQ1osYUFBYTthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0scUJBQVE7Ozs7SUFBZixVQUNFLE1BQXlCO1FBQXpCLHVCQUFBLEVBQUEsV0FBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUN6RDtvQkFDRSxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0QsYUFBYTthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sc0JBQVM7Ozs7SUFBaEIsVUFBaUIsTUFBYTtRQUM1QixJQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBRSxJQUFJLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFFLEVBQUUsRUFBQztZQUM1RixZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDM0M7UUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE9BQU87WUFDSixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDNUIsQ0FBQztJQUNKLENBQUM7O2dCQXJFRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLE1BQU07d0JBQ04sV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsdUJBQXVCO3dCQUN2QixrQkFBa0I7cUJBQ25CO29CQUNELGVBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztvQkFDbEQsT0FBTyxFQUFFO3dCQUNQLE1BQU07d0JBQ04sV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDO29CQUNyRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7Ozs7Z0JBckRDLFlBQVk7NENBMkdULFFBQVEsWUFBSSxNQUFNLFNBQUMsYUFBYTs7SUFRckMsbUJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQTdEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBOZ01vZHVsZSxcclxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxyXG4gIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsXHJcbiAgSW5qZWN0LFxyXG4gIE9wdGlvbmFsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICBIdHRwQ2xpZW50TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IFZYRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdnhmb3JtXCI7XHJcbmltcG9ydCB7IFZYRm9ybUZpZWxkIH0gZnJvbSBcIi4vY29tcG9uZW50cy92eGZvcm0uZmllbGRcIjtcclxuaW1wb3J0IHsgVlhGb3JtQXR0cmlidXRlcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdnhmb3JtLmF0dHJpYnV0ZXNcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1Db25maWcsXHJcbiAgQ29uZmlnT3B0aW9uLFxyXG4gIFZYRk9STV9DT05GSUcsXHJcbiAgQVBQQ29uZmlnXHJcbn0gZnJvbSBcIi4vc2VydmljZXMvdnhmb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1CdWlsZGVyIH0gZnJvbSBcIi4vc2VydmljZXMvdnhmb3JtLmJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgVlhGb3JtR3JvdXAgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvdnhmb3JtLmdyb3VwXCI7XHJcbmltcG9ydCB7IFZYRm9ybVZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSBcIi4vdGVtcGxhdGVzL3Z4Zm9ybS52YWxpZGF0aW9uLW1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgVlhGb3JtVGVtcGxhdGVUeXBlIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2ZpZWxkLXRlbXBsYXRlLnR5cGVcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkRXhwcmVzc2lvbkV4dGVuc2lvbiB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZmllbGQtZXhwcmVzc2lvbi9maWVsZC1leHByZXNzaW9uXCI7XHJcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbkV4dGVuc2lvbiB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZmllbGQtdmFsaWRhdGlvbi9maWVsZC12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IEZpZWxkRm9ybUV4dGVuc2lvbiB9IGZyb20gXCIuL2V4dGVuc2lvbnMvZmllbGQtZm9ybS9maWVsZC1mb3JtXCI7XHJcbmltcG9ydCB7IENvcmVFeHRlbnNpb24gfSBmcm9tIFwiLi9leHRlbnNpb25zL2NvcmUvY29yZVwiO1xyXG5pbXBvcnQgeyBWWEZvcm1Db21tb25TZXJ2aWNlIH0gZnJvbSBcIi4vdG9vbHMvY29tbW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFZYRm9ybUNvbmZpZyh2eEZvcm1Db25maWc6IFZYRm9ybUNvbmZpZyk6IENvbmZpZ09wdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGVzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJ2eGZvcm0tZ3JvdXBcIiwgY29tcG9uZW50OiBWWEZvcm1Hcm91cCB9LFxyXG4gICAgICB7IG5hbWU6IFwidGVtcGxhdGVcIiwgY29tcG9uZW50OiBWWEZvcm1UZW1wbGF0ZVR5cGUgfVxyXG4gICAgXSxcclxuICAgIGV4dGVuc2lvbnM6IFtcclxuICAgICAgeyBuYW1lOiBcImNvcmVcIiwgZXh0ZW5zaW9uOiBuZXcgQ29yZUV4dGVuc2lvbih2eEZvcm1Db25maWcpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImZpZWxkLXZhbGlkYXRpb25cIixcclxuICAgICAgICBleHRlbnNpb246IG5ldyBGaWVsZFZhbGlkYXRpb25FeHRlbnNpb24odnhGb3JtQ29uZmlnKVxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwiZmllbGQtZm9ybVwiLCBleHRlbnNpb246IG5ldyBGaWVsZEZvcm1FeHRlbnNpb24oKSB9LFxyXG4gICAgICB7IG5hbWU6IFwiZmllbGQtZXhwcmVzc2lvblwiLCBleHRlbnNpb246IG5ldyBGaWVsZEV4cHJlc3Npb25FeHRlbnNpb24oKSB9XHJcbiAgICBdXHJcbiAgfTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFZYRm9ybSxcclxuICAgIFZYRm9ybUZpZWxkLFxyXG4gICAgVlhGb3JtQXR0cmlidXRlcyxcclxuICAgIFZYRm9ybUdyb3VwLFxyXG4gICAgVlhGb3JtVmFsaWRhdGlvbk1lc3NhZ2UsXHJcbiAgICBWWEZvcm1UZW1wbGF0ZVR5cGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1ZYRm9ybUdyb3VwLCBWWEZvcm1UZW1wbGF0ZVR5cGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFZYRm9ybSxcclxuICAgIFZYRm9ybUZpZWxkLFxyXG4gICAgVlhGb3JtQXR0cmlidXRlcyxcclxuICAgIFZYRm9ybUdyb3VwLFxyXG4gICAgVlhGb3JtVmFsaWRhdGlvbk1lc3NhZ2VcclxuICBdLFxyXG4gIGltcG9ydHM6IFtIdHRwTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBDb21tb25Nb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1ZYRm9ybUNvbW1vblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnT3B0aW9uID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFZYRm9ybU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFZYRm9ybU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogVlhGT1JNX0NPTkZJRyxcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogZGVmYXVsdFZYRm9ybUNvbmZpZyxcclxuICAgICAgICAgIGRlcHM6IFtWWEZvcm1Db25maWddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IFZYRk9STV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVlhGb3JtQ29uZmlnLFxyXG4gICAgICAgIFZYRm9ybUJ1aWxkZXJcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JDaGlsZChcclxuICAgIGNvbmZpZzogQ29uZmlnT3B0aW9uID0ge31cclxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFZYRm9ybU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFZYRm9ybU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBWWEZPUk1fQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnLCBtdWx0aTogdHJ1ZSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFZYRm9ybUJ1aWxkZXJcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JDb25maWcoY29uZmlnOnN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VlhGb3JtTW9kdWxlPntcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVlhfRk9STV9MSU5DRVNcIikhPW51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJWWF9GT1JNX0xJTkNFU1wiKSE9XCJcIil7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiVlhfRk9STV9MSU5DRVNcIik7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlZYX0ZPUk1fTElOQ0VTXCIsY29uZmlnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICBuZ01vZHVsZTogVlhGb3JtTW9kdWxlLFxyXG4gICAgICAgcHJvdmlkZXJzOiBbVlhGb3JtQnVpbGRlcl1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbmZpZ1NlcnZpY2U6IFZYRm9ybUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVlhGT1JNX0NPTkZJRykgY29uZmlnczogQ29uZmlnT3B0aW9uW10gPSBbXVxyXG4gICkge1xyXG4gICAgaWYgKCFjb25maWdzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWdzLmZvckVhY2goY29uZmlnID0+IGNvbmZpZ1NlcnZpY2UuYWRkQ29uZmlnKGNvbmZpZykpO1xyXG4gIH1cclxufVxyXG4iXX0=