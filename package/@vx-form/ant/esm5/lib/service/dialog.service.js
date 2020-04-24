/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { NzModalService } from "ng-zorro-antd";
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
/**
 * @record
 */
export function ModalOptions() { }
if (false) {
    /** @type {?} */
    ModalOptions.prototype.nzContent;
    /** @type {?} */
    ModalOptions.prototype.size;
    /** @type {?|undefined} */
    ModalOptions.prototype.nzTitle;
    /** @type {?|undefined} */
    ModalOptions.prototype.primaryLabel;
    /** @type {?|undefined} */
    ModalOptions.prototype.vertical;
    /** @type {?|undefined} */
    ModalOptions.prototype.hideBtn;
    /** @type {?|undefined} */
    ModalOptions.prototype.showResetBtn;
}
var VXDialogService = /** @class */ (function () {
    function VXDialogService(modalService) {
        this.modalService = modalService;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    VXDialogService.prototype.switchSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var obj = {
            width: 700,
            height: 500
        };
        switch (size) {
            case "small":
                obj.width = 530;
                obj.height = 400;
                break;
            case "medium":
                obj.width = 700;
                obj.height = 500;
                break;
            case "large":
                obj.width = 950;
                obj.height = 600;
                break;
            default:
                obj.width = 700;
                obj.height = 500;
                break;
        }
        return obj;
    };
    /**
     * @param {?} modalOptions
     * @param {?} params
     * @param {?} callback
     * @return {?}
     */
    VXDialogService.prototype.CreateModelDialog = /**
     * @param {?} modalOptions
     * @param {?} params
     * @param {?} callback
     * @return {?}
     */
    function (modalOptions, params, callback) {
        /** @type {?} */
        var width = this.switchSize(modalOptions.size).width;
        /** @type {?} */
        var height = this.switchSize(modalOptions.size).height;
        /** @type {?} */
        var modal = this.modalService.create({
            nzTitle: modalOptions.nzTitle ? modalOptions.nzTitle : "提示",
            nzWidth: width + "px",
            nzClosable: true,
            nzMaskClosable: false,
            nzWrapClassName: modalOptions["vertical"] ? "vertical-center-modal" : "",
            nzBodyStyle: {
                padding: "0",
                height: !modalOptions["hideBtn"]
                    ? height - 107 + "px"
                    : height - 54 + "px"
            },
            nzContent: modalOptions.nzContent,
            nzFooter: !modalOptions["hideBtn"]
                ? [
                    {
                        show: true,
                        label: "取消",
                        type: "default",
                        onClick: (/**
                         * @param {?} componentInstance
                         * @return {?}
                         */
                        function (componentInstance) {
                            modal.destroy();
                        })
                    },
                    {
                        show: modalOptions["showResetBtn"],
                        label: "重置",
                        type: "default",
                        onClick: (/**
                         * @param {?} componentInstance
                         * @return {?}
                         */
                        function (componentInstance) { return callback(componentInstance, modal); })
                    },
                    {
                        show: true,
                        label: modalOptions["primaryLabel"]
                            ? modalOptions["primaryLabel"]
                            : "确定",
                        type: "primary",
                        onClick: (/**
                         * @param {?} componentInstance
                         * @return {?}
                         */
                        function (componentInstance) { return callback(componentInstance, modal); })
                    }
                ]
                : null,
            nzOnOk: (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { }),
            nzOnCancel: (/**
             * @param {?} data
             * @return {?}
             */
            function (data) { }),
            nzComponentParams: params
        });
        modal.afterClose.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                callback(result);
            }
        }));
    };
    VXDialogService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    VXDialogService.ctorParameters = function () { return [
        { type: NzModalService }
    ]; };
    /** @nocollapse */ VXDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXDialogService_Factory() { return new VXDialogService(i0.ɵɵinject(i1.NzModalService)); }, token: VXDialogService, providedIn: "root" });
    return VXDialogService;
}());
export { VXDialogService };
if (false) {
    /** @type {?} */
    VXDialogService.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFHM0Qsa0NBUUM7OztJQVBDLGlDQUFlOztJQUNmLDRCQUFvQjs7SUFDcEIsK0JBQWlCOztJQUNqQixvQ0FBc0I7O0lBQ3RCLGdDQUFtQjs7SUFDbkIsK0JBQWtCOztJQUNsQixvQ0FBdUI7O0FBRXpCO0lBSUUseUJBQW1CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7Ozs7O0lBQ25ELG9DQUFVOzs7O0lBQVYsVUFBVyxJQUFTOztZQUNaLEdBQUcsR0FBRztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7U0FDWjtRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxPQUFPO2dCQUNWLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1lBQ1I7Z0JBQ0UsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNq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dWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBVcGxvYWRGaWxlIH0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuXHJcbnR5cGUgTW9kYWxTaXplVHlwZSA9IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxPcHRpb25zIHtcclxuICBuekNvbnRlbnQ6IGFueTsgLy/nu4Tku7ZcclxuICBzaXplOiBNb2RhbFNpemVUeXBlOyAvL+Wwjy/kuK0v5aSnXHJcbiAgbnpUaXRsZT86IHN0cmluZzsgLy/moIfpophcclxuICBwcmltYXJ5TGFiZWw/OiBzdHJpbmc7IC8v5oyJ6ZKu4oCYbGFiZWzigJks5LiN5Lyg6buY6K6k5Li64oCY56Gu5a6a4oCZXHJcbiAgdmVydGljYWw/OiBib29sZWFuOyAvL+W8ueahhuaYr+WQpuS4uuWeguebtOWxheS4re+8jOm7mOiupOS4jeWeguebtOWxheS4rVxyXG4gIGhpZGVCdG4/OiBib29sZWFuOyAvL+aYr+WQpumakOiXj2Zvb3RlcuaMiemSrlxyXG4gIHNob3dSZXNldEJ0bj86IGJvb2xlYW47IC8v5piv5ZCm5pi+56S66YeN572u5oyJ6ZKuXHJcbn1cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWERpYWxvZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbFNlcnZpY2U6IE56TW9kYWxTZXJ2aWNlKSB7fVxyXG4gIHN3aXRjaFNpemUoc2l6ZTogYW55KSB7XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgIHdpZHRoOiA3MDAsXHJcbiAgICAgIGhlaWdodDogNTAwXHJcbiAgICB9O1xyXG4gICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgIGNhc2UgXCJzbWFsbFwiOlxyXG4gICAgICAgIG9iai53aWR0aCA9IDUzMDtcclxuICAgICAgICBvYmouaGVpZ2h0ID0gNDAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWVkaXVtXCI6XHJcbiAgICAgICAgb2JqLndpZHRoID0gNzAwO1xyXG4gICAgICAgIG9iai5oZWlnaHQgPSA1MDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsYXJnZVwiOlxyXG4gICAgICAgIG9iai53aWR0aCA9IDk1MDtcclxuICAgICAgICBvYmouaGVpZ2h0ID0gNjAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIG9iai53aWR0aCA9IDcwMDtcclxuICAgICAgICBvYmouaGVpZ2h0ID0gNTAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcbiAgcHVibGljIENyZWF0ZU1vZGVsRGlhbG9nKFxyXG4gICAgbW9kYWxPcHRpb25zOiBNb2RhbE9wdGlvbnMsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIGNhbGxiYWNrOiBhbnlcclxuICApIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zd2l0Y2hTaXplKG1vZGFsT3B0aW9ucy5zaXplKS53aWR0aDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc3dpdGNoU2l6ZShtb2RhbE9wdGlvbnMuc2l6ZSkuaGVpZ2h0O1xyXG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxTZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICAgIG56VGl0bGU6IG1vZGFsT3B0aW9ucy5uelRpdGxlID8gbW9kYWxPcHRpb25zLm56VGl0bGUgOiBcIuaPkOekulwiLFxyXG4gICAgICBueldpZHRoOiB3aWR0aCArIFwicHhcIixcclxuICAgICAgbnpDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxyXG4gICAgICBueldyYXBDbGFzc05hbWU6IG1vZGFsT3B0aW9uc1tcInZlcnRpY2FsXCJdID8gXCJ2ZXJ0aWNhbC1jZW50ZXItbW9kYWxcIiA6IFwiXCIsXHJcbiAgICAgIG56Qm9keVN0eWxlOiB7XHJcbiAgICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgICAgaGVpZ2h0OiAhbW9kYWxPcHRpb25zW1wiaGlkZUJ0blwiXVxyXG4gICAgICAgICAgPyBoZWlnaHQgLSAxMDcgKyBcInB4XCJcclxuICAgICAgICAgIDogaGVpZ2h0IC0gNTQgKyBcInB4XCJcclxuICAgICAgfSxcclxuICAgICAgbnpDb250ZW50OiBtb2RhbE9wdGlvbnMubnpDb250ZW50LFxyXG4gICAgICBuekZvb3RlcjogIW1vZGFsT3B0aW9uc1tcImhpZGVCdG5cIl1cclxuICAgICAgICA/IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5Y+W5raIXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgb25DbGljazogY29tcG9uZW50SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNob3c6IG1vZGFsT3B0aW9uc1tcInNob3dSZXNldEJ0blwiXSxcclxuICAgICAgICAgICAgICBsYWJlbDogXCLph43nva5cIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgICBvbkNsaWNrOiBjb21wb25lbnRJbnN0YW5jZSA9PiBjYWxsYmFjayhjb21wb25lbnRJbnN0YW5jZSwgbW9kYWwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBtb2RhbE9wdGlvbnNbXCJwcmltYXJ5TGFiZWxcIl1cclxuICAgICAgICAgICAgICAgID8gbW9kYWxPcHRpb25zW1wicHJpbWFyeUxhYmVsXCJdXHJcbiAgICAgICAgICAgICAgICA6IFwi56Gu5a6aXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgb25DbGljazogY29tcG9uZW50SW5zdGFuY2UgPT4gY2FsbGJhY2soY29tcG9uZW50SW5zdGFuY2UsIG1vZGFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgOiBudWxsLFxyXG4gICAgICBuek9uT2s6IGRhdGEgPT4ge30sXHJcbiAgICAgIG56T25DYW5jZWw6IGRhdGEgPT4ge30sXHJcbiAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXNcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==