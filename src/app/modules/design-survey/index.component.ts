import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { zip } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@knz/theme';
import {
  KreFormOptions,
  KreFormFieldConfig,
  KreTableFieldConfig,
  KreFormInfo
} from "@kre-form/core";
import {IDesignFormAPI} from "@kre-form/survey" ;
@Component({
  selector: 'app-survey',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class SurveyComponent implements OnInit {
  formCode ="formCode001"
  formAPI:IDesignFormAPI={
    form: { url: "assets/mockData/surveyInfo.json" }
  }
  form = new FormGroup({});
  model: any = {};
  options: KreFormOptions = {};
  fields: KreFormFieldConfig[] = [
  ];

  constructor(private http: _HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    
  }

  openPreview(event: any) { 
     
  }
}
