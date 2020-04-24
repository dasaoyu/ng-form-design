import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { FullLocaleData, LocaleData } from './locale.types';
export declare class VXLocaleService {
    private _locale;
    private change$;
    constructor(locale: FullLocaleData | null);
    readonly change: Observable<FullLocaleData>;
    setLocale(locale: FullLocaleData): void;
    readonly locale: FullLocaleData;
    getData(path: string): LocaleData;
}
export declare function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist: VXLocaleService, locale: FullLocaleData): VXLocaleService;
export declare const DELON_LOCALE_SERVICE_PROVIDER: Provider;
