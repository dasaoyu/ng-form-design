import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef,ViewChild ,TemplateRef} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { zip } from 'rxjs';
import { NzMessageService,NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@knz/theme';
import {
  KreFormOptions,
  KreFormFieldConfig,
  KreTableFieldConfig,
  KreFormInfo, 
  KreFormCommonService,
} from "@kre-form/core";
import {IDesignFormAPI} from "@kre-form/ant" ;
import { Template } from '@angular/compiler/src/render3/r3_ast';
 
@Component({
  selector: 'app-form',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class FormComponent implements OnInit { 
  formCode ="formCode001"
  formAPI:IDesignFormAPI={
    tables:{url:"assets/mockData/business.json"},
    form:{url:"assets/mockData/formInfo.json"}
  }

  form = new FormGroup({});
  model: any = {};
  options: KreFormOptions = {};
  config: KreFormFieldConfig[] = [
  ];
  layout:string = "layout-column-2";
  @ViewChild('tplContent', { static: true }) tplContent;
  constructor(private http: _HttpClient, public msg: NzMessageService,public modalService: NzModalService, private cdr: ChangeDetectorRef,private fb: FormBuilder,
    public vxFormCommonService: KreFormCommonService) {}

  ngOnInit() {
    this.form = this.fb.group({ 
    });
  }

  submit(){

  }

  getModel(){
    this.msg.success("请查看console.log");
    console.log("提交数据："+JSON.stringify(this.model))
  }

  saveForm(event:any)
  {
    this.msg.success("保存成功~")
  }
  openPreview(event: any) { 
    let obj = JSON.parse(event);
    this.model = {};
    let configs = obj.fields;
    this.layout = obj.column;
    this.vxFormCommonService.initFormFieldModel(configs, this.model);

    this.config = configs;

    this.modalService.create({
      nzTitle: "表单预览",
      nzWidth: "1100px",
      nzClosable: true,
      nzMaskClosable: false, 
      nzBodyStyle: {
        padding: "0",
        height: "600px"
      },
      nzContent: this.tplContent,
      nzFooter:null
    });
  }
}
