import { OnInit, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { DataService } from "../../service/data.service";
export declare class VXSurveyEditCascaderItem implements OnInit, OnChanges {
    dataService: DataService;
    row: any;
    title: string;
    itemEvent: EventEmitter<any>;
    addOptionEvent: EventEmitter<any>;
    delOptionEvent: EventEmitter<any>;
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    itemClick(e: any): void;
    addOption(): void;
    delOption(e: any): void;
}
