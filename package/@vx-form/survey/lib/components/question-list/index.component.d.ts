import { OnInit, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { VXSurveyInfo } from "@vx-form/core";
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataService } from "../../service/data.service";
export declare class VXQuestionList implements OnInit, OnChanges {
    dataService: DataService;
    vxSurveyInfo: VXSurveyInfo;
    questionTypeEvent: EventEmitter<any>;
    addPageEvent: EventEmitter<any>;
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    dropQuestion(event: CdkDragDrop<string[]>): void;
}
