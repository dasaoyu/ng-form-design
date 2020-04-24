import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class InlineEditorComponent implements ControlValueAccessor {
    _value: string;
    _classList: {};
    debounce: string;
    placeholder: string;
    className: string;
    brMode: boolean;
    blur: EventEmitter<any>;
    focus: EventEmitter<any>;
    disabled: boolean;
    data: any;
    active: boolean;
    constructor();
    ngOnInit(): void;
    handleFocus(evt: any): void;
    handleBlur(evt: any): void;
    value: any;
    onContenteditableModelChange(evt: any): void;
    /**
     * Implements ControlValueAccessor
     */
    writeValue(value: any): void;
    onChange(_: any): void;
    onTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
