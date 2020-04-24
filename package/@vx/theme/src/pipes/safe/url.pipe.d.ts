import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
export declare class URLPipe implements PipeTransform {
    private dom;
    constructor(dom: DomSanitizer);
    transform(url: string): string | SafeUrl;
}
