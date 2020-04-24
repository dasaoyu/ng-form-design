import { ElementRef, OnChanges, SimpleChanges, Renderer2, DoCheck, OnDestroy } from "@angular/core";
import { VXFormFieldConfig, VXFormTemplateOptions } from "./vxform.field.config";
export declare class VXFormAttributes implements OnChanges, DoCheck, OnDestroy {
    private renderer;
    private elementRef;
    field: VXFormFieldConfig;
    private document;
    private uiAttributesCache;
    private uiAttributes;
    readonly to: VXFormTemplateOptions;
    private readonly fieldAttrElements;
    constructor(renderer: Renderer2, elementRef: ElementRef, _document: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    focusElement(element: any, value: boolean): void;
    onFocus($event: any): void;
    onBlur($event: any): void;
    onChange($event: any): void;
    private attachAttrElement;
    private detachAttrElement;
    private setAttribute;
    private removeAttribute;
}
