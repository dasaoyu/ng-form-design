/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FieldType } from "@vx-form/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { Observable } from "rxjs";
import { VXFormAntService } from "../tools/service";
export class VXFormFieldUpload extends FieldType {
    /**
     * @param {?} dyService
     * @param {?} msg
     */
    constructor(dyService, msg) {
        super();
        this.msg = msg;
        this.defaultFileList = [];
        this.handleRemove = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            observer.next(true);
            observer.complete();
        })));
        this.beforeUpload = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            return new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const isJPG = file.type === "image/jpeg";
                console.log(file);
                if (!this.checkFileType(file)) {
                    this.msg.error("您上传的文件类型不符合要求！");
                    observer.complete();
                    return;
                }
                if (!this.checkFileSize(file)) {
                    this.msg.error("您上传的文件大小已经超出最大设置");
                    observer.complete();
                    return;
                }
                observer.next(true);
                observer.complete();
            }));
        });
        this.service = dyService;
    }
    /**
     * @param {?} sign
     * @return {?}
     */
    fieldOperational(sign) {
        this.service.fieldOperational(sign, this.field);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleChange({ file, fileList }) {
        debugger;
        /** @type {?} */
        const status = file.status;
        if (status !== "uploading") {
        }
        if (status === "done") {
            /** @type {?} */
            let values = fileList.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
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
            this.msg.success(`文件${file.name} 上传成功！`);
        }
        else if (status === "error") {
            this.msg.error(`文件${file.name} 上传失败！`);
        }
        if (status === "removed") {
            /** @type {?} */
            let values = this.formControl.value;
            values.forEach((/**
             * @param {?} item
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (item, index, object) => {
                if (item.uid === file.uid) {
                    object.splice(index, 1);
                }
            }));
            //this.formControl.patchValue(values);
            //this.formControl.markAsTouched();
            this.msg.success(`文件${file.name} 删除成功！`);
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    checkFileType(file) {
        /** @type {?} */
        let result = true;
        if (this.field &&
            this.field.templateOptions &&
            this.field.templateOptions.attachment &&
            this.field.templateOptions.attachment.type) {
            /** @type {?} */
            let types = this.field.templateOptions.attachment.type;
            if (types != undefined && types != null && types != "") {
                result = types.split(",").some((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    return file.type === item;
                }));
            }
        }
        return result;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    checkFileSize(file) {
        /** @type {?} */
        let result = true;
        if (this.field &&
            this.field.templateOptions &&
            this.field.templateOptions.attachment &&
            this.field.templateOptions.attachment.size) {
            /** @type {?} */
            let size = this.field.templateOptions.attachment.size;
            if (size != undefined && size != null) {
                result = file.size / 1024 / 1024 <= size;
            }
        }
        return result;
    }
}
VXFormFieldUpload.decorators = [
    { type: Component, args: [{
                selector: "vxfield-upload",
                template: `
    <ng-container *ngIf="formStatus !== 0">
      <div class="fieldOperational">
        <div class="fieldcheckbox">
          <label nz-checkbox [(ngModel)]="field.checked"></label>
        </div>
        <div class="fieldControl">
          <div class="label">
            <span *ngIf="to.required">*</span>{{ to.label }}
          </div>
          <div class="control">
            <nz-upload nzType="drag" [nzDisabled]="true">
              <p class="ant-upload-drag-icon"></p>
              <p class="ant-upload-text">单击或拖动文件到此区域上传</p>
              <p class="ant-upload-hint">
                支持单个或批量上传。严禁上传不法文件，谢谢!
              </p>
            </nz-upload>
          </div>
          <div class="fieldButton">
            <button class="btnEdit" (click)="fieldOperational('edit')">
              <i class="icon-Edit03"></i>编辑
            </button>
            <button class="btnDel" (click)="fieldOperational('delete')">
              <i class="icon-KT-Close"></i>
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="formStatus === 0">
      <nz-upload
        nzType="drag"
        nzAction="https://jsonplaceholder.typicode.com/posts/"
        [nzFileList]="defaultFileList"
        [nzMultiple]="true"
        (nzChange)="handleChange($event)"
        [class.is-invalid]="showError"
      >
        <p class="ant-upload-drag-icon"></p>
        <p class="ant-upload-text">单击或拖动文件到此区域上传</p>
        <p class="ant-upload-hint">
          支持单个或批量上传。严禁上传不法文件，谢谢!
        </p>
      </nz-upload>
      <div class="tips"></div>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
VXFormFieldUpload.ctorParameters = () => [
    { type: VXFormAntService },
    { type: NzMessageService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4LWZvcm0vYW50LyIsInNvdXJjZXMiOlsibGliL3R5cGVzL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF1RHBELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTOzs7OztJQUc5QyxZQUFZLFNBQTJCLEVBQVMsR0FBcUI7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFEc0MsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFEckUsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUE2Q3JCLGlCQUFZOzs7O1FBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUMzQixJQUFJLFVBQVU7Ozs7UUFBVSxRQUFRLENBQUMsRUFBRTtZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsRUFBQztRQUVMLGlCQUFZOzs7O1FBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUM1QixPQUFPLElBQUksVUFBVTs7OztZQUFDLENBQUMsUUFBMkIsRUFBRSxFQUFFOztzQkFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWTtnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxHQUFH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ZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwibmctem9ycm8tYW50ZC9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IFVwbG9hZENoYW5nZVBhcmFtLCBVcGxvYWRGaWxlIH0gZnJvbSBcIm5nLXpvcnJvLWFudGQvdXBsb2FkXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidnhmaWVsZC11cGxvYWRcIixcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0dXMgIT09IDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkT3BlcmF0aW9uYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRjaGVja2JveFwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmllbGQuY2hlY2tlZFwiPjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG8ucmVxdWlyZWRcIj4qPC9zcGFuPnt7IHRvLmxhYmVsIH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxuei11cGxvYWQgbnpUeXBlPVwiZHJhZ1wiIFtuekRpc2FibGVkXT1cInRydWVcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC10ZXh0XCI+5Y2V5Ye75oiW5ouW5Yqo5paH5Lu25Yiw5q2k5Yy65Z+f5LiK5LygPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiYW50LXVwbG9hZC1oaW50XCI+XHJcbiAgICAgICAgICAgICAgICDmlK/mjIHljZXkuKrmiJbmibnph4/kuIrkvKDjgILkuKXnpoHkuIrkvKDkuI3ms5Xmlofku7bvvIzosKLosKIhXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L256LXVwbG9hZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkQnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5FZGl0XCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2VkaXQnKVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1FZGl0MDNcIj48L2k+57yW6L6RXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuRGVsXCIgKGNsaWNrKT1cImZpZWxkT3BlcmF0aW9uYWwoJ2RlbGV0ZScpXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uLUtULUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuei11cGxvYWRcclxuICAgICAgICBuelR5cGU9XCJkcmFnXCJcclxuICAgICAgICBuekFjdGlvbj1cImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIlxyXG4gICAgICAgIFtuekZpbGVMaXN0XT1cImRlZmF1bHRGaWxlTGlzdFwiXHJcbiAgICAgICAgW256TXVsdGlwbGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgKG56Q2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJzaG93RXJyb3JcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJhbnQtdXBsb2FkLWRyYWctaWNvblwiPjwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtdGV4dFwiPuWNleWHu+aIluaLluWKqOaWh+S7tuWIsOatpOWMuuWfn+S4iuS8oDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImFudC11cGxvYWQtaGludFwiPlxyXG4gICAgICAgICAg5pSv5oyB5Y2V5Liq5oiW5om56YeP5LiK5Lyg44CC5Lil56aB5LiK5Lyg5LiN5rOV5paH5Lu277yM6LCi6LCiIVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9uei11cGxvYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWWEZvcm1GaWVsZFVwbG9hZCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgc2VydmljZTogYW55O1xyXG4gIGRlZmF1bHRGaWxlTGlzdCA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSwgcHVibGljIG1zZzogTnpNZXNzYWdlU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9XHJcblxyXG4gIGZpZWxkT3BlcmF0aW9uYWwoc2lnbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZmllbGRPcGVyYXRpb25hbChzaWduLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh7IGZpbGUsIGZpbGVMaXN0IH06IFVwbG9hZENoYW5nZVBhcmFtKTogdm9pZCB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGNvbnN0IHN0YXR1cyA9IGZpbGUuc3RhdHVzO1xyXG4gICAgaWYgKHN0YXR1cyAhPT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgbGV0IHZhbHVlczogYW55ID0gZmlsZUxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdWlkOiBpdGVtLnVpZCxcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgIHVybDogaXRlbS51cmxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgLyogdGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV0gPSB2YWx1ZXM7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpOyAqL1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWVzKTtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIHRoaXMubXNnLnN1Y2Nlc3MoYOaWh+S7tiR7ZmlsZS5uYW1lfSDkuIrkvKDmiJDlip/vvIFgKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcImVycm9yXCIpIHtcclxuICAgICAgdGhpcy5tc2cuZXJyb3IoYOaWh+S7tiR7ZmlsZS5uYW1lfSDkuIrkvKDlpLHotKXvvIFgKTtcclxuICAgIH1cclxuICAgIGlmIChzdGF0dXMgPT09IFwicmVtb3ZlZFwiKSB7XHJcbiAgICAgIGxldCB2YWx1ZXM6IGFueSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgIHZhbHVlcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnksIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udWlkID09PSBmaWxlLnVpZCkge1xyXG4gICAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vdGhpcy5mb3JtQ29udHJvbC5wYXRjaFZhbHVlKHZhbHVlcyk7XHJcbiAgICAgIC8vdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgIHRoaXMubXNnLnN1Y2Nlc3MoYOaWh+S7tiR7ZmlsZS5uYW1lfSDliKDpmaTmiJDlip/vvIFgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IChmaWxlOiBhbnkpID0+XHJcbiAgICBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPihvYnNlcnZlciA9PiB7XHJcbiAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XHJcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgYmVmb3JlVXBsb2FkID0gKGZpbGU6IEZpbGUpID0+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzSlBHID0gZmlsZS50eXBlID09PSBcImltYWdlL2pwZWdcIjtcclxuICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgIGlmICghdGhpcy5jaGVja0ZpbGVUeXBlKGZpbGUpKSB7XHJcbiAgICAgICAgdGhpcy5tc2cuZXJyb3IoXCLmgqjkuIrkvKDnmoTmlofku7bnsbvlnovkuI3nrKblkIjopoHmsYLvvIFcIik7XHJcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmNoZWNrRmlsZVNpemUoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLm1zZy5lcnJvcihcIuaCqOS4iuS8oOeahOaWh+S7tuWkp+Wwj+W3sue7j+i2heWHuuacgOWkp+iuvue9rlwiKTtcclxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xyXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2hlY2tGaWxlVHlwZShmaWxlOiBGaWxlKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5maWVsZCAmJlxyXG4gICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucyAmJlxyXG4gICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucy5hdHRhY2htZW50ICYmXHJcbiAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLmF0dGFjaG1lbnQudHlwZVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB0eXBlczogYW55ID0gdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMuYXR0YWNobWVudC50eXBlO1xyXG4gICAgICBpZiAodHlwZXMgIT0gdW5kZWZpbmVkICYmIHR5cGVzICE9IG51bGwgJiYgdHlwZXMgIT0gXCJcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHR5cGVzLnNwbGl0KFwiLFwiKS5zb21lKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBmaWxlLnR5cGUgPT09IGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjaGVja0ZpbGVTaXplKGZpbGU6IEZpbGUpIHtcclxuICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmZpZWxkICYmXHJcbiAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zICYmXHJcbiAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLmF0dGFjaG1lbnQgJiZcclxuICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMuYXR0YWNobWVudC5zaXplXHJcbiAgICApIHtcclxuICAgICAgbGV0IHNpemU6IGFueSA9IHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLmF0dGFjaG1lbnQuc2l6ZTtcclxuICAgICAgaWYgKHNpemUgIT0gdW5kZWZpbmVkICYmIHNpemUgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0IDw9IHNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==