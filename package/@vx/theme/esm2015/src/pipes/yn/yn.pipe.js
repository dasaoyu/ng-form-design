/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/yn/yn.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/** @type {?} */
const ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
/** @type {?} */
const ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
/** @type {?} */
const CLS_YES = `class="yn__yes"`;
/** @type {?} */
const CLS_NO = `class="yn__no"`;
export class YNPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @param {?} mode
     * @return {?}
     */
    transform(value, yes, no, mode) {
        /** @type {?} */
        let html = '';
        yes = yes || '是';
        no = no || '否';
        switch (mode) {
            case 'full':
                html = value ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>` : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
                break;
            case 'text':
                html = value ? `<i ${CLS_YES}>${yes}</i>` : `<i ${CLS_NO}>${no}</i>`;
                break;
            default:
                html = value ? `<i ${CLS_YES} title="${yes}">${ICON_YES}</i>` : `<i ${CLS_NO} title="${no}">${ICON_NO}</i>`;
                break;
        }
        return this.dom.bypassSecurityTrustHtml(html);
    }
}
YNPipe.decorators = [
    { type: Pipe, args: [{ name: 'yn' },] }
];
/** @nocollapse */
YNPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    YNPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9waXBlcy95bi95bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOztNQUk3RCxRQUFRLEdBQUcsZ1RBQWdUOztNQUMzVCxPQUFPLEdBQUcsaWJBQWliOztNQUMzYixPQUFPLEdBQUcsaUJBQWlCOztNQUMzQixNQUFNLEdBQUcsZ0JBQWdCO0FBRy9CLE1BQU0sT0FBTyxNQUFNOzs7O0lBQ2pCLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7Ozs7OztJQUV6QyxTQUFTLENBQUMsS0FBYyxFQUFFLEdBQVcsRUFBRSxFQUFVLEVBQUUsSUFBWTs7WUFDekQsSUFBSSxHQUFHLEVBQUU7UUFDYixHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNqQixFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNmLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxJQUFJLFFBQVEsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLElBQUksT0FBTyxTQUFTLEVBQUUsYUFBYSxDQUFDO2dCQUNwSCxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxFQUFFLE1BQU0sQ0FBQztnQkFDckUsTUFBTTtZQUNSO2dCQUNFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxXQUFXLEdBQUcsS0FBSyxRQUFRLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLFdBQVcsRUFBRSxLQUFLLE9BQU8sTUFBTSxDQUFDO2dCQUM1RyxNQUFNO1NBQ1Q7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBcEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Ozs7WUFUWCxZQUFZOzs7Ozs7O0lBV1AscUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5leHBvcnQgdHlwZSBZTk1vZGUgPSAnZnVsbCcgfCAnaWNvbicgfCAndGV4dCc7XHJcblxyXG5jb25zdCBJQ09OX1lFUyA9IGA8c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk05MTIgMTkwaC02OS45Yy05LjggMC0xOS4xIDQuNS0yNS4xIDEyLjJMNDA0LjcgNzI0LjUgMjA3IDQ3NGEzMiAzMiAwIDAgMC0yNS4xLTEyLjJIMTEyYy02LjcgMC0xMC40IDcuNy02LjMgMTIuOWwyNzMuOSAzNDdjMTIuOCAxNi4yIDM3LjQgMTYuMiA1MC4zIDBsNDg4LjQtNjE4LjljNC4xLTUuMS40LTEyLjgtNi4zLTEyLjh6XCI+PC9wYXRoPjwvc3ZnPmA7XHJcbmNvbnN0IElDT05fTk8gPSBgPHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNTYzLjggNTEybDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyelwiPjwvcGF0aD48L3N2Zz5gO1xyXG5jb25zdCBDTFNfWUVTID0gYGNsYXNzPVwieW5fX3llc1wiYDtcclxuY29uc3QgQ0xTX05PID0gYGNsYXNzPVwieW5fX25vXCJgO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAneW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBZTlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4sIHllczogc3RyaW5nLCBubzogc3RyaW5nLCBtb2RlOiBZTk1vZGUpOiBTYWZlSHRtbCB7XHJcbiAgICBsZXQgaHRtbCA9ICcnO1xyXG4gICAgeWVzID0geWVzIHx8ICfmmK8nO1xyXG4gICAgbm8gPSBubyB8fCAn5ZCmJztcclxuICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICBjYXNlICdmdWxsJzpcclxuICAgICAgICBodG1sID0gdmFsdWUgPyBgPGkgJHtDTFNfWUVTfT4ke0lDT05fWUVTfTxzcGFuPiR7eWVzfTwvc3Bhbj48L2k+YCA6IGA8aSAke0NMU19OT30+JHtJQ09OX05PfTxzcGFuPiR7bm99PC9zcGFuPjwvaT5gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBodG1sID0gdmFsdWUgPyBgPGkgJHtDTFNfWUVTfT4ke3llc308L2k+YCA6IGA8aSAke0NMU19OT30+JHtub308L2k+YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBodG1sID0gdmFsdWUgPyBgPGkgJHtDTFNfWUVTfSB0aXRsZT1cIiR7eWVzfVwiPiR7SUNPTl9ZRVN9PC9pPmAgOiBgPGkgJHtDTFNfTk99IHRpdGxlPVwiJHtub31cIj4ke0lDT05fTk99PC9pPmA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==