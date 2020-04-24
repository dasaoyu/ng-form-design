import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ACLService } from '@vx/acl';
import { VXI18NService } from '../i18n/i18n';
import { Menu } from './interface';
/**
 * 菜单服务，
 */
export declare class MenuService implements OnDestroy {
    private i18nSrv;
    private aclService;
    private _change$;
    private i18n$;
    private data;
    constructor(i18nSrv: VXI18NService, aclService: ACLService);
    readonly change: Observable<Menu[]>;
    visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
    add(items: Menu[]): void;
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    private loadShortcut;
    readonly menus: Menu[];
    /**
     * 清空菜单
     */
    clear(): void;
    getHit(data: Menu[], url: string, recursive?: boolean, cb?: ((i: Menu) => void) | null): Menu | null;
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    openedByUrl(url: string | null, recursive?: boolean): void;
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    getPathByUrl(url: string, recursive?: boolean): Menu[];
    /**
     * Get menu based on `key`
     */
    getItem(key: string): Menu | null;
    /**
     * Set menu based on `key`
     */
    setItem(key: string, value: Menu): void;
    ngOnDestroy(): void;
}
