import { OnInit, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { DataService } from "../../service/data.service";
export declare class VXQuestionType implements OnInit, OnChanges {
    dataService: DataService;
    questionTypeEvent: EventEmitter<any>;
    addPageEvent: EventEmitter<any>;
    saveSurveyEvent: EventEmitter<any>;
    questionTypeList: any;
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    addQuestionType(type: any): void;
    addPage(): void;
    saveSurvey(): void;
}
