/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { Observable } from "rxjs";
import { VXFormAntService } from "../tools/service";
var VXFormFieldUpload = /** @class */ (function (_super) {
    tslib_1.__extends(VXFormFieldUpload, _super);
    function VXFormFieldUpload(dyService, msg) {
        var _this = _super.call(this) || this;
        _this.msg = msg;
        _this.defaultFileList = [];
        _this.handleRemove = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                observer.next(true);
                observer.complete();
            }));
        });
        _this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            return new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var isJPG = file.type === "image/jpeg";
                console.log(file);
                if (!_this.checkFileType(file)) {
                    _this.msg.error("您上传的文件类型不符合要求！");
                    observer.complete();
                    return;
                }
                if (!_this.checkFileSize(file)) {
                    _this.msg.error("您上传的文件大小已经超出最大设置");
                    observer.complete();
                    return;
                }
                observer.next(true);
                observer.complete();
            }));
        });
        _this.service = dyService;
        return _this;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    VXFormFieldUpload.prototype.fieldOperational = /**
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        this.service.fieldOperational(sign, this.field);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    VXFormFieldUpload.prototype.handleChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var file = _a.file, fileList = _a.fileList;
        debugger;
        /** @type {?} */
        var status = file.status;
        if (status !== "uploading") {
        }
        if (status === "done") {
            /** @type {?} */
            var values = fileList.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return {
                    uid: item.uid,
                    name: item.name,
                    url: item.url
                };
            }));
            /* this.model[this.field.key] = values;
            this.formControl.markAsTouched(); */
            this.formControl.patchValue(values);
            this.formControl.markAsTouched();
            this.msg.success("\u6587\u4EF6" + file.name + " \u4E0A\u4F20\u6210\u529F\uFF01");
        }
        else if (status === "error") {
            this.msg.error("\u6587\u4EF6" + file.name + " \u4E0A\u4F20\u5931\u8D25\uFF01");
        }
        if (status === "removed") {
            /** @type {?} */
            var values = this.formControl.value;
            values.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            function (item, index, object) {
                if (item.uid === file.uid) {
                    object.splice(index, 1);
                }
            }));
            //this.formControl.patchValue(values);
            //this.formControl.markAsTouched();
            this.msg.success("\u6587\u4EF6" + file.name + " \u5220\u9664\u6210\u529F\uFF01");
        }
    };
    /**
     * @param {?} file
     * @return {?}
     */
    VXFormFieldUpload.prototype.checkFileType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var result = true;
        if (this.field &&
            this.field.templateOptions &&
            this.field.templateOptions.attachment &&
            this.field.templateOptions.attachment.type) {
            /** @type {?} */
            var types = this.field.templateOptions.attachment.type;
            if (types != undefined && types != null && types != "") {
                result = types.split(",").some((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return file.type === item;
                }));
            }
        }
        return result;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    VXFormFieldUpload.prototype.checkFileSize = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var result = true;
        if (this.field &&
            this.field.templateOptions &&
            this.field.templateOptions.attachment &&
            this.field.templateOptions.attachment.size) {
            /** @type {?} */
            var size = this.field.templateOptions.attachment.size;
            if (size != undefined && size != null) {
                result = file.size / 1024 / 1024 <= size;
            }
        }
        return result;
    };
    VXFormFieldUpload.decorators = [
        { type: Component, args: [{
                    selector: "vxfield-upload",
                    template: "\n    <ng-container *ngIf=\"formStatus !== 0\">\n      <div class=\"fieldOperational\">\n        <div class=\"fieldcheckbox\">\n          <label nz-checkbox [(ngModel)]=\"field.checked\"></label>\n        </div>\n        <div class=\"fieldControl\">\n          <div class=\"label\">\n            <span *ngIf=\"to.required\">*</span>{{ to.label }}\n          </div>\n          <div class=\"control\">\n            <nz-upload nzType=\"drag\" [nzDisabled]=\"true\">\n              <p class=\"ant-upload-drag-icon\"></p>\n              <p class=\"ant-upload-text\">\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20</p>\n              <p class=\"ant-upload-hint\">\n                \u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\u4E0A\u4F20\u3002\u4E25\u7981\u4E0A\u4F20\u4E0D\u6CD5\u6587\u4EF6\uFF0C\u8C22\u8C22!\n              </p>\n            </nz-upload>\n          </div>\n          <div class=\"fieldButton\">\n            <button class=\"btnEdit\" (click)=\"fieldOperational('edit')\">\n              <i class=\"icon-Edit03\"></i>\u7F16\u8F91\n            </button>\n            <button class=\"btnDel\" (click)=\"fieldOperational('delete')\">\n              <i class=\"icon-KT-Close\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <nz-upload\n        nzType=\"drag\"\n        nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\n        [nzFileList]=\"defaultFileList\"\n        [nzMultiple]=\"true\"\n        (nzChange)=\"handleChange($event)\"\n        [class.is-invalid]=\"showError\"\n      >\n        <p class=\"ant-upload-drag-icon\"></p>\n        <p class=\"ant-upload-text\">\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20</p>\n        <p class=\"ant-upload-hint\">\n          \u652F\u6301\u5355\u4E2A\u6216\u6279\u91CF\u4E0A\u4F20\u3002\u4E25\u7981\u4E0A\u4F20\u4E0D\u6CD5\u6587\u4EF6\uFF0C\u8C22\u8C22!\n        </p>\n      </nz-upload>\n      <div class=\"tips\"></div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXFormFieldUpload.ctorParameters = function () { return [
        { type: VXFormAntService },
        { type: NzMessageService }
    ]; };
    return VXFormFieldUpload;
}(FieldType));
export { VXFormFieldUpload };
if (false) {
    /** @type {?} */
    VXFormFieldUpload.prototype.service;
    /** @type {?} */
    VXFormFieldUpload.prototype.defaultFileList;
    /** @type {?} */
    VXFormFieldUpload.prototype.handleRemove;
    /** @type {?} */
    VXFormFieldUpload.prototype.beforeUpload;
    /** @type {?} */
    VXFormFieldUpload.prototype.msg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3BEO0lBb0R1Qyw2Q0FBUztJQUc5QywyQkFBWSxTQUEyQixFQUFTLEdBQXFCO1FBQXJFLFlBQ0UsaUJBQU8sU0FFUjtRQUgrQyxTQUFHLEdBQUgsR0FBRyxDQUFrQjtRQURyRSxxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQTZDckIsa0JBQVk7Ozs7UUFBRyxVQUFDLElBQVM7WUFDdkIsT0FBQSxJQUFJLFVBQVU7Ozs7WUFBVSxVQUFBLFFBQVE7Z0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUM7UUFIRixDQUdFLEVBQUM7UUFFTCxrQkFBWTs7OztRQUFHLFVBQUMsSUFBVTtZQUN4QixPQUFPLElBQUksVUFBVTs7OztZQUFDLFVBQUMsUUFBMkI7O29CQUMxQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztv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dGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiQHZ4LWZvcm0vY29yZVwiO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkRmlsZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkL3VwbG9hZFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFZYRm9ybUFudFNlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHMvc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4ZmllbGQtdXBsb2FkXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZE9wZXJhdGlvbmFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkY2hlY2tib3hcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpZWxkLmNoZWNrZWRcIj48L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZENvbnRyb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRvLnJlcXVpcmVkXCI+Kjwvc3Bhbj57eyB0by5sYWJlbCB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8bnotdXBsb2FkIG56VHlwZT1cImRyYWdcIiBbbnpEaXNhYmxlZF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiPuWNleWHu+aIluaLluWKqOaWh+S7tuWIsOatpOWMuuWfn+S4iuS8oDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtaGludFwiPlxyXG4gICAgICAgICAgICAgICAg5pSv5oyB5Y2V5Liq5oiW5om56YeP5LiK5Lyg44CC5Lil56aB5LiK5Lyg5LiN5rOV5paH5Lu277yM6LCi6LCiIVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9uei11cGxvYWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZEJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRWRpdFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdlZGl0JylcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tRWRpdDAzXCI+PC9pPue8lui+kVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bkRlbFwiIChjbGljayk9XCJmaWVsZE9wZXJhdGlvbmFsKCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1LVC1DbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybVN0YXR1cyA9PT0gMFwiPlxyXG4gICAgICA8bnotdXBsb2FkXHJcbiAgICAgICAgbnpUeXBlPVwiZHJhZ1wiXHJcbiAgICAgICAgbnpBY3Rpb249XCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCJcclxuICAgICAgICBbbnpGaWxlTGlzdF09XCJkZWZhdWx0RmlsZUxpc3RcIlxyXG4gICAgICAgIFtuek11bHRpcGxlXT1cInRydWVcIlxyXG4gICAgICAgIChuekNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwic2hvd0Vycm9yXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj48L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLXRleHRcIj7ljZXlh7vmiJbmi5bliqjmlofku7bliLDmraTljLrln5/kuIrkvKA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWhpbnRcIj5cclxuICAgICAgICAgIOaUr+aMgeWNleS4quaIluaJuemHj+S4iuS8oOOAguS4peemgeS4iuS8oOS4jeazleaWh+S7tu+8jOiwouiwoiFcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvbnotdXBsb2FkPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGlwc1wiPjwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhGb3JtRmllbGRVcGxvYWQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIHNlcnZpY2U6IGFueTtcclxuICBkZWZhdWx0RmlsZUxpc3QgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihkeVNlcnZpY2U6IFZYRm9ybUFudFNlcnZpY2UsIHB1YmxpYyBtc2c6IE56TWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBkeVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBmaWVsZE9wZXJhdGlvbmFsKHNpZ246IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmZpZWxkT3BlcmF0aW9uYWwoc2lnbiwgdGhpcy5maWVsZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeyBmaWxlLCBmaWxlTGlzdCB9OiBVcGxvYWRDaGFuZ2VQYXJhbSk6IHZvaWQge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBmaWxlLnN0YXR1cztcclxuICAgIGlmIChzdGF0dXMgIT09IFwidXBsb2FkaW5nXCIpIHtcclxuICAgIH1cclxuICAgIGlmIChzdGF0dXMgPT09IFwiZG9uZVwiKSB7XHJcbiAgICAgIGxldCB2YWx1ZXM6IGFueSA9IGZpbGVMaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVpZDogaXRlbS51aWQsXHJcbiAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICB1cmw6IGl0ZW0udXJsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8qIHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldID0gdmFsdWVzO1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTsgKi9cclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlcyk7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLm1zZy5zdWNjZXNzKGDmlofku7Yke2ZpbGUubmFtZX0g5LiK5Lyg5oiQ5Yqf77yBYCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgIHRoaXMubXNnLmVycm9yKGDmlofku7Yke2ZpbGUubmFtZX0g5LiK5Lyg5aSx6LSl77yBYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdHVzID09PSBcInJlbW92ZWRcIikge1xyXG4gICAgICBsZXQgdmFsdWVzOiBhbnkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnVpZCA9PT0gZmlsZS51aWQpIHtcclxuICAgICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL3RoaXMuZm9ybUNvbnRyb2wucGF0Y2hWYWx1ZSh2YWx1ZXMpO1xyXG4gICAgICAvL3RoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLm1zZy5zdWNjZXNzKGDmlofku7Yke2ZpbGUubmFtZX0g5Yig6Zmk5oiQ5Yqf77yBYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoZmlsZTogYW55KSA9PlxyXG4gICAgbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4ob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xyXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gIGJlZm9yZVVwbG9hZCA9IChmaWxlOiBGaWxlKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxib29sZWFuPikgPT4ge1xyXG4gICAgICBjb25zdCBpc0pQRyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgICBpZiAoIXRoaXMuY2hlY2tGaWxlVHlwZShmaWxlKSkge1xyXG4gICAgICAgIHRoaXMubXNnLmVycm9yKFwi5oKo5LiK5Lyg55qE5paH5Lu257G75Z6L5LiN56ym5ZCI6KaB5rGC77yBXCIpO1xyXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5jaGVja0ZpbGVTaXplKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5tc2cuZXJyb3IoXCLmgqjkuIrkvKDnmoTmlofku7blpKflsI/lt7Lnu4/otoXlh7rmnIDlpKforr7nva5cIik7XHJcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcclxuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNoZWNrRmlsZVR5cGUoZmlsZTogRmlsZSkge1xyXG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZmllbGQgJiZcclxuICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMgJiZcclxuICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMuYXR0YWNobWVudCAmJlxyXG4gICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucy5hdHRhY2htZW50LnR5cGVcclxuICAgICkge1xyXG4gICAgICBsZXQgdHlwZXM6IGFueSA9IHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLmF0dGFjaG1lbnQudHlwZTtcclxuICAgICAgaWYgKHR5cGVzICE9IHVuZGVmaW5lZCAmJiB0eXBlcyAhPSBudWxsICYmIHR5cGVzICE9IFwiXCIpIHtcclxuICAgICAgICByZXN1bHQgPSB0eXBlcy5zcGxpdChcIixcIikuc29tZSgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZmlsZS50eXBlID09PSBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGaWxlU2l6ZShmaWxlOiBGaWxlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucyAmJlxyXG4gICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucy5hdHRhY2htZW50ICYmXHJcbiAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLmF0dGFjaG1lbnQuc2l6ZVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBzaXplOiBhbnkgPSB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucy5hdHRhY2htZW50LnNpemU7XHJcbiAgICAgIGlmIChzaXplICE9IHVuZGVmaW5lZCAmJiBzaXplICE9IG51bGwpIHtcclxuICAgICAgICByZXN1bHQgPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8PSBzaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=