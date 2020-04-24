import { Injector, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VXI18NService } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';
export declare class TitleService implements OnDestroy {
    private injector;
    private title;
    private menuSrv;
    private i18nSrv;
    private doc;
    private _prefix;
    private _suffix;
    private _separator;
    private _reverse;
    private i18n$;
    readonly DELAY_TIME = 25;
    constructor(injector: Injector, title: Title, menuSrv: MenuService, i18nSrv: VXI18NService, doc: any);
    /** 设置分隔符 */
    separator: string;
    /** 设置前缀 */
    prefix: string;
    /** 设置后缀 */
    suffix: string;
    /** 设置是否反转 */
    reverse: boolean;
    /** 设置默认标题名 */
    default: string;
    private getByElement;
    private getByRoute;
    private getByMenu;
    private _setTitle;
    /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-vx/ng-vx/issues/1261)
     */
    setTitle(title?: string | string[]): void;
    /**
     * Set i18n key of the document title
     */
    setTitleByI18n(key: string, params?: {}): void;
    ngOnDestroy(): void;
}
