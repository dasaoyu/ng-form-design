import { CurrencyPipe } from '@angular/common';
/**
 * @see https://ng-vx.com/theme/currency
 */
export declare class CNCurrencyPipe extends CurrencyPipe {
    transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digits?: string): string | null;
}
