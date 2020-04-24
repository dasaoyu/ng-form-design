import { OnInit, OnChanges, SimpleChanges, ViewContainerRef, ComponentRef, ChangeDetectorRef, ComponentFactoryResolver } from "@angular/core";
import { VXFormFieldConfig } from "@vx-form/core";
export declare class VXSurveySettingTemplate implements OnInit, OnChanges {
    componentFactoryResolver: ComponentFactoryResolver;
    changeDetectorRef: ChangeDetectorRef;
    dynamicComponents: any;
    component: ComponentRef<any> | undefined;
    componentHost: ViewContainerRef | undefined;
    questionField: any;
    field: VXFormFieldConfig;
    constructor(componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
