/**
 * @fileoverview added by tsickle
 * Generated from: src/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VXLocaleModule } from './locale/locale.module';
// #region import
import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';
/** @type {?} */
var HELPERS = [ModalHelper, DrawerHelper];
// components
/** @type {?} */
var COMPONENTS = [];
// pipes
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { HTMLPipe } from './pipes/safe/html.pipe';
import { URLPipe } from './pipes/safe/url.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
/** @type {?} */
var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
// #endregion
// #region all vx used icons
// - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6
import { BellOutline, DeleteOutline, InboxOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon';
/** @type {?} */
var ICONS = [BellOutline, DeleteOutline, PlusOutline, InboxOutline];
// #endregion
var VXThemeModule = /** @class */ (function () {
    function VXThemeModule(iconSrv) {
        iconSrv.addIcon.apply(iconSrv, tslib_1.__spread(ICONS));
    }
    /**
     * @return {?}
     */
    VXThemeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: VXThemeModule,
            providers: tslib_1.__spread(HELPERS),
        };
    };
    /**
     * @return {?}
     */
    VXThemeModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: VXThemeModule,
            providers: tslib_1.__spread(HELPERS),
        };
    };
    VXThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, OverlayModule],
                    declarations: tslib_1.__spread(COMPONENTS, PIPES),
                    exports: tslib_1.__spread(COMPONENTS, PIPES, [VXLocaleModule]),
                },] }
    ];
    /** @nocollapse */
    VXThemeModule.ctorParameters = function () { return [
        { type: NzIconService }
    ]; };
    return VXThemeModule;
}());
export { VXThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4L3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBSXhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBQ3RELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7OztJQUdyQyxVQUFVLEdBQUcsRUFBRTs7QUFHckIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUMvQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7Ozs7QUFRdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFDN0MsS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDOztBQUlyRTtJQU1FLHVCQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLE9BQWYsT0FBTyxtQkFBWSxLQUFLLEdBQUU7SUFDNUIsQ0FBQzs7OztJQUVNLHFCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLG1CQUFNLE9BQU8sQ0FBQztTQUN4QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHNCQUFROzs7SUFBZjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLG1CQUFNLE9BQU8sQ0FBQztTQUN4QixDQUFDO0lBQ0osQ0FBQzs7Z0JBdEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDcEQsWUFBWSxtQkFBTSxVQUFVLEVBQUssS0FBSyxDQUFDO29CQUN2QyxPQUFPLG1CQUFNLFVBQVUsRUFBSyxLQUFLLEdBQUUsY0FBYyxFQUFDO2lCQUNuRDs7OztnQkFUUSxhQUFhOztJQTRCdEIsb0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWxCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFZYTG9jYWxlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLm1vZHVsZSc7XHJcblxyXG4vLyAjcmVnaW9uIGltcG9ydFxyXG5cclxuaW1wb3J0IHsgRHJhd2VySGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlcic7XHJcbmltcG9ydCB7IE1vZGFsSGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tb2RhbC9tb2RhbC5oZWxwZXInO1xyXG5jb25zdCBIRUxQRVJTID0gW01vZGFsSGVscGVyLCBEcmF3ZXJIZWxwZXJdO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5jb25zdCBDT01QT05FTlRTID0gW107XHJcblxyXG4vLyBwaXBlc1xyXG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XHJcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XHJcbmltcG9ydCB7IEhUTUxQaXBlIH0gZnJvbSAnLi9waXBlcy9zYWZlL2h0bWwucGlwZSc7XHJcbmltcG9ydCB7IFVSTFBpcGUgfSBmcm9tICcuL3BpcGVzL3NhZmUvdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xyXG5pbXBvcnQgeyBJMThuUGlwZSB9IGZyb20gJy4vc2VydmljZXMvaTE4bi9pMThuLnBpcGUnO1xyXG5jb25zdCBQSVBFUyA9IFtEYXRlUGlwZSwgQ05DdXJyZW5jeVBpcGUsIEtleXNQaXBlLCBZTlBpcGUsIEkxOG5QaXBlLCBIVE1MUGlwZSwgVVJMUGlwZV07XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIGFsbCB2eCB1c2VkIGljb25zXHJcblxyXG4vLyAtIHpvcnJvOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL2ljb24vbnotaWNvbi5zZXJ2aWNlLnRzI0w2XHJcblxyXG5pbXBvcnQgeyBCZWxsT3V0bGluZSwgRGVsZXRlT3V0bGluZSwgSW5ib3hPdXRsaW5lLCBQbHVzT3V0bGluZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xyXG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuY29uc3QgSUNPTlMgPSBbQmVsbE91dGxpbmUsIERlbGV0ZU91dGxpbmUsIFBsdXNPdXRsaW5lLCBJbmJveE91dGxpbmVdO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UUywgLi4uUElQRVMsIFZYTG9jYWxlTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYVGhlbWVNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKGljb25TcnY6IE56SWNvblNlcnZpY2UpIHtcclxuICAgIGljb25TcnYuYWRkSWNvbiguLi5JQ09OUyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBWWFRoZW1lTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVlhUaGVtZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbLi4uSEVMUEVSU10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=