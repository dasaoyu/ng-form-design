import { PipeTransform } from '@angular/core';
export declare class DatePipe implements PipeTransform {
    transform(value: Date | string | number, formatString?: string): string;
}
