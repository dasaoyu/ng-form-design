import { NgZone, OnChanges, ElementRef, EventEmitter } from '@angular/core';
export declare class ContenteditableModel implements OnChanges {
    private elRef;
    zone: NgZone;
    model: any;
    hasI18n: boolean;
    change: EventEmitter<any>;
    blur: EventEmitter<any>;
    focus: EventEmitter<any>;
    debounce: string;
    placeholder: string;
    brMode: boolean;
    constructor(elRef: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    /**
     * On component destroy
     */
    ngOnDestroy(): void;
}
