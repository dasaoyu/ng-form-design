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
export class VXDialogService {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    switchSize(size) {
        /** @type {?} */
        const obj = {
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
    }
    /**
     * @param {?} modalOptions
     * @param {?} params
     * @param {?} callback
     * @return {?}
     */
    CreateModelDialog(modalOptions, params, callback) {
        /** @type {?} */
        const width = this.switchSize(modalOptions.size).width;
        /** @type {?} */
        const height = this.switchSize(modalOptions.size).height;
        /** @type {?} */
        const modal = this.modalService.create({
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
                        componentInstance => {
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
                        componentInstance => callback(componentInstance, modal))
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
                        componentInstance => callback(componentInstance, modal))
                    }
                ]
                : null,
            nzOnOk: (/**
             * @param {?} data
             * @return {?}
             */
            data => { }),
            nzOnCancel: (/**
             * @param {?} data
             * @return {?}
             */
            data => { }),
            nzComponentParams: params
        });
        modal.afterClose.subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (result) {
                callback(result);
            }
        }));
    }
}
VXDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
VXDialogService.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ VXDialogService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXDialogService_Factory() { return new VXDialogService(i0.ɵɵinject(i1.NzModalService)); }, token: VXDialogService, providedIn: "root" });
if (false) {
    /** @type {?} */
    VXDialogService.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFHM0Qsa0NBUUM7OztJQVBDLGlDQUFlOztJQUNmLDRCQUFvQjs7SUFDcEIsK0JBQWlCOztJQUNqQixvQ0FBc0I7O0lBQ3RCLGdDQUFtQjs7SUFDbkIsK0JBQWtCOztJQUNsQixvQ0FBdUI7O0FBS3pCLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW1CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7Ozs7O0lBQ25ELFVBQVUsQ0FBQyxJQUFTOztjQUNaLEdBQUcsR0FBRztZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7U0FDWjtRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxPQUFPO2dCQUNWLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1lBQ1I7Z0JBQ0UsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1NBQ1Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFDTSxpQkFBaUIsQ0FDdEIsWUFBMEIsRUFDMUIsTUFBVyxFQUNYLFFBQWE7O2NBRVAsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7O2NBQ2hELE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOztjQUNsRCxLQUFLLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDMUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDM0QsT0FBTyxFQUFFLEtBQUssR0FBRyxJQUFJO1lBQ3JCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLGVBQWUsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsR0FBRztnQkFDWixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO29CQUM5QixDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJO29CQUNyQixDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQztvQkFDRTt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPOzs7O3dCQUFFLGlCQUFpQixDQUFDLEVBQUU7NEJBQzNCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFBO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxZQUFZLENBQUMsY0FBYyxDQUFDO3dCQUNsQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPOzs7O3dCQUFFLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUE7cUJBQ2pFO29CQUNEO3dCQUNFLElBQUksRUFBRSxJQUFJO3dCQUNWLEtBQUssRUFBRSxZQUFZLENBQUMsY0FBYyxDQUFDOzRCQUNqQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLElBQUk7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsT0FBTzs7Ozt3QkFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFBO3FCQUNqRTtpQkFDRjtnQkFDSCxDQUFDLENBQUMsSUFBSTtZQUNSLE1BQU07Ozs7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFFLENBQUMsQ0FBQTtZQUNsQixVQUFVOzs7O1lBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRSxDQUFDLENBQUE7WUFDdEIsaUJBQWlCLEVBQUUsTUFBTTtTQUMxQixDQUFDO1FBRUYsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkUSxjQUFjOzs7OztJQWdCVCx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UsIFVwbG9hZEZpbGUgfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5cclxudHlwZSBNb2RhbFNpemVUeXBlID0gXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIjtcclxuZXhwb3J0IGludGVyZmFjZSBNb2RhbE9wdGlvbnMge1xyXG4gIG56Q29udGVudDogYW55OyAvL+e7hOS7tlxyXG4gIHNpemU6IE1vZGFsU2l6ZVR5cGU7IC8v5bCPL+S4rS/lpKdcclxuICBuelRpdGxlPzogc3RyaW5nOyAvL+agh+mimFxyXG4gIHByaW1hcnlMYWJlbD86IHN0cmluZzsgLy/mjInpkq7igJhsYWJlbOKAmSzkuI3kvKDpu5jorqTkuLrigJjnoa7lrprigJlcclxuICB2ZXJ0aWNhbD86IGJvb2xlYW47IC8v5by55qGG5piv5ZCm5Li65Z6C55u05bGF5Lit77yM6buY6K6k5LiN5Z6C55u05bGF5LitXHJcbiAgaGlkZUJ0bj86IGJvb2xlYW47IC8v5piv5ZCm6ZqQ6JePZm9vdGVy5oyJ6ZKuXHJcbiAgc2hvd1Jlc2V0QnRuPzogYm9vbGVhbjsgLy/mmK/lkKbmmL7npLrph43nva7mjInpkq5cclxufVxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFZYRGlhbG9nU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG1vZGFsU2VydmljZTogTnpNb2RhbFNlcnZpY2UpIHt9XHJcbiAgc3dpdGNoU2l6ZShzaXplOiBhbnkpIHtcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgd2lkdGg6IDcwMCxcclxuICAgICAgaGVpZ2h0OiA1MDBcclxuICAgIH07XHJcbiAgICBzd2l0Y2ggKHNpemUpIHtcclxuICAgICAgY2FzZSBcInNtYWxsXCI6XHJcbiAgICAgICAgb2JqLndpZHRoID0gNTMwO1xyXG4gICAgICAgIG9iai5oZWlnaHQgPSA0MDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtZWRpdW1cIjpcclxuICAgICAgICBvYmoud2lkdGggPSA3MDA7XHJcbiAgICAgICAgb2JqLmhlaWdodCA9IDUwMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImxhcmdlXCI6XHJcbiAgICAgICAgb2JqLndpZHRoID0gOTUwO1xyXG4gICAgICAgIG9iai5oZWlnaHQgPSA2MDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgb2JqLndpZHRoID0gNzAwO1xyXG4gICAgICAgIG9iai5oZWlnaHQgPSA1MDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuICBwdWJsaWMgQ3JlYXRlTW9kZWxEaWFsb2coXHJcbiAgICBtb2RhbE9wdGlvbnM6IE1vZGFsT3B0aW9ucyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgY2FsbGJhY2s6IGFueVxyXG4gICkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnN3aXRjaFNpemUobW9kYWxPcHRpb25zLnNpemUpLndpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zd2l0Y2hTaXplKG1vZGFsT3B0aW9ucy5zaXplKS5oZWlnaHQ7XHJcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbFNlcnZpY2UuY3JlYXRlKHtcclxuICAgICAgbnpUaXRsZTogbW9kYWxPcHRpb25zLm56VGl0bGUgPyBtb2RhbE9wdGlvbnMubnpUaXRsZSA6IFwi5o+Q56S6XCIsXHJcbiAgICAgIG56V2lkdGg6IHdpZHRoICsgXCJweFwiLFxyXG4gICAgICBuekNsb3NhYmxlOiB0cnVlLFxyXG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXHJcbiAgICAgIG56V3JhcENsYXNzTmFtZTogbW9kYWxPcHRpb25zW1widmVydGljYWxcIl0gPyBcInZlcnRpY2FsLWNlbnRlci1tb2RhbFwiIDogXCJcIixcclxuICAgICAgbnpCb2R5U3R5bGU6IHtcclxuICAgICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgICBoZWlnaHQ6ICFtb2RhbE9wdGlvbnNbXCJoaWRlQnRuXCJdXHJcbiAgICAgICAgICA/IGhlaWdodCAtIDEwNyArIFwicHhcIlxyXG4gICAgICAgICAgOiBoZWlnaHQgLSA1NCArIFwicHhcIlxyXG4gICAgICB9LFxyXG4gICAgICBuekNvbnRlbnQ6IG1vZGFsT3B0aW9ucy5uekNvbnRlbnQsXHJcbiAgICAgIG56Rm9vdGVyOiAhbW9kYWxPcHRpb25zW1wiaGlkZUJ0blwiXVxyXG4gICAgICAgID8gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICBsYWJlbDogXCLlj5bmtohcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgICBvbkNsaWNrOiBjb21wb25lbnRJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2hvdzogbW9kYWxPcHRpb25zW1wic2hvd1Jlc2V0QnRuXCJdLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIumHjee9rlwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGNvbXBvbmVudEluc3RhbmNlID0+IGNhbGxiYWNrKGNvbXBvbmVudEluc3RhbmNlLCBtb2RhbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IG1vZGFsT3B0aW9uc1tcInByaW1hcnlMYWJlbFwiXVxyXG4gICAgICAgICAgICAgICAgPyBtb2RhbE9wdGlvbnNbXCJwcmltYXJ5TGFiZWxcIl1cclxuICAgICAgICAgICAgICAgIDogXCLnoa7lrppcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICBvbkNsaWNrOiBjb21wb25lbnRJbnN0YW5jZSA9PiBjYWxsYmFjayhjb21wb25lbnRJbnN0YW5jZSwgbW9kYWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICA6IG51bGwsXHJcbiAgICAgIG56T25PazogZGF0YSA9PiB7fSxcclxuICAgICAgbnpPbkNhbmNlbDogZGF0YSA9PiB7fSxcclxuICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHBhcmFtc1xyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWwuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19