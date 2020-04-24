import { FieldType } from "@vx-form/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { UploadChangeParam } from "ng-zorro-antd/upload";
import { Observable } from "rxjs";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldUpload extends FieldType {
    msg: NzMessageService;
    service: any;
    defaultFileList: never[];
    constructor(dyService: VXFormAntService, msg: NzMessageService);
    fieldOperational(sign: string): void;
    handleChange({ file, fileList }: UploadChangeParam): void;
    handleRemove: (file: any) => Observable<boolean>;
    beforeUpload: (file: File) => Observable<boolean>;
    checkFileType(file: File): boolean;
    checkFileSize(file: File): boolean;
}
