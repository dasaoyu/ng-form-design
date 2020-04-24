/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MenuIcon() { }
if (false) {
    /**
     * Type for icon
     * @type {?}
     */
    MenuIcon.prototype.type;
    /**
     * Value for the icon, can be set Class Name, nz-icon of `nzType`, image
     * @type {?|undefined}
     */
    MenuIcon.prototype.value;
    /**
     * Type of the ant design icon, default: `outline`
     * @type {?|undefined}
     */
    MenuIcon.prototype.theme;
    /**
     * Rotate icon with animation, default: `false`
     * @type {?|undefined}
     */
    MenuIcon.prototype.spin;
    /**
     * Only support the two-tone icon. Specific the primary color
     * @type {?|undefined}
     */
    MenuIcon.prototype.twoToneColor;
    /**
     * Type of the icon from iconfont
     * @type {?|undefined}
     */
    MenuIcon.prototype.iconfont;
}
/**
 * @record
 */
export function Menu() { }
if (false) {
    /**
     * Text of menu item, can be choose one of  `text` or `i18n` (Support HTML)
     * @type {?|undefined}
     */
    Menu.prototype.text;
    /**
     * I18n key of menu item, can be choose one of  `text` or `i18n` (Support HTML)
     * @type {?|undefined}
     */
    Menu.prototype.i18n;
    /**
     * Whether to display the group name, default: `true`
     * @type {?|undefined}
     */
    Menu.prototype.group;
    /**
     * Routing for the menu item, can be choose one of `link` or `externalLink`
     * @type {?|undefined}
     */
    Menu.prototype.link;
    /**
     * External link for the menu item, can be choose one of `link` or `externalLink`
     * @type {?|undefined}
     */
    Menu.prototype.externalLink;
    /**
     * Specifies `externalLink` where to display the linked URL
     * @type {?|undefined}
     */
    Menu.prototype.target;
    /**
     * Icon for the menu item, only valid for the first level menu
     * @type {?|undefined}
     */
    Menu.prototype.icon;
    /**
     * Badget for the menu item when `group` is `true`
     * @type {?|undefined}
     */
    Menu.prototype.badge;
    /**
     * Whether to display a red dot instead of `badge` value
     * @type {?|undefined}
     */
    Menu.prototype.badgeDot;
    /**
     * Badge [color](https://ng.ant.design/components/badge/en#nz-badge)
     * @type {?|undefined}
     */
    Menu.prototype.badgeStatus;
    /**
     * Whether disable for the menu item
     * @type {?|undefined}
     */
    Menu.prototype.disabled;
    /**
     * Whether hidden for the menu item
     * @type {?|undefined}
     */
    Menu.prototype.hide;
    /**
     * Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs
     * @type {?|undefined}
     */
    Menu.prototype.hideInBreadcrumb;
    /**
     * ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value
     * @type {?|undefined}
     */
    Menu.prototype.acl;
    /**
     * Whether shortcut menu item
     * @type {?|undefined}
     */
    Menu.prototype.shortcut;
    /**
     * Wheter shortcut menu root node
     * @type {?|undefined}
     */
    Menu.prototype.shortcutRoot;
    /**
     * Whether to allow reuse, need to cooperate with the `reuse-tab` component
     * @type {?|undefined}
     */
    Menu.prototype.reuse;
    /**
     * Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component
     * @type {?|undefined}
     */
    Menu.prototype.open;
    /**
     * Unique identifier of the menu item, can be used in `getItem`,` setItem` to update a menu
     * @type {?|undefined}
     */
    Menu.prototype.key;
    /**
     * Children menu of menu item
     * @type {?|undefined}
     */
    Menu.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZ4L3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21lbnUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOEJBYUM7Ozs7OztJQVhDLHdCQUE0Qzs7Ozs7SUFFNUMseUJBQWU7Ozs7O0lBRWYseUJBQXVDOzs7OztJQUV2Qyx3QkFBZTs7Ozs7SUFFZixnQ0FBc0I7Ozs7O0lBRXRCLDRCQUFrQjs7Ozs7QUFHcEIsMEJBMENDOzs7Ozs7SUF2Q0Msb0JBQWM7Ozs7O0lBRWQsb0JBQWM7Ozs7O0lBRWQscUJBQWdCOzs7OztJQUVoQixvQkFBYzs7Ozs7SUFFZCw0QkFBc0I7Ozs7O0lBRXRCLHNCQUFpRDs7Ozs7SUFFakQsb0JBQWdDOzs7OztJQUVoQyxxQkFBZTs7Ozs7SUFFZix3QkFBbUI7Ozs7O0lBRW5CLDJCQUFxQjs7Ozs7SUFFckIsd0JBQW1COzs7OztJQUVuQixvQkFBZTs7Ozs7SUFFZixnQ0FBMkI7Ozs7O0lBRTNCLG1CQUFVOzs7OztJQUVWLHdCQUFtQjs7Ozs7SUFFbkIsNEJBQXVCOzs7OztJQUV2QixxQkFBZ0I7Ozs7O0lBRWhCLG9CQUFlOzs7OztJQUVmLG1CQUFhOzs7OztJQUViLHdCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTWVudUljb24ge1xyXG4gIC8qKiBUeXBlIGZvciBpY29uICovXHJcbiAgdHlwZTogJ2NsYXNzJyB8ICdpY29uJyB8ICdpY29uZm9udCcgfCAnaW1nJztcclxuICAvKiogVmFsdWUgZm9yIHRoZSBpY29uLCBjYW4gYmUgc2V0IENsYXNzIE5hbWUsIG56LWljb24gb2YgYG56VHlwZWAsIGltYWdlICovXHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgLyoqIFR5cGUgb2YgdGhlIGFudCBkZXNpZ24gaWNvbiwgZGVmYXVsdDogYG91dGxpbmVgICovXHJcbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XHJcbiAgLyoqIFJvdGF0ZSBpY29uIHdpdGggYW5pbWF0aW9uLCBkZWZhdWx0OiBgZmFsc2VgICovXHJcbiAgc3Bpbj86IGJvb2xlYW47XHJcbiAgLyoqIE9ubHkgc3VwcG9ydCB0aGUgdHdvLXRvbmUgaWNvbi4gU3BlY2lmaWMgdGhlIHByaW1hcnkgY29sb3IgKi9cclxuICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XHJcbiAgLyoqIFR5cGUgb2YgdGhlIGljb24gZnJvbSBpY29uZm9udCAqL1xyXG4gIGljb25mb250Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lbnUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAvKiogVGV4dCBvZiBtZW51IGl0ZW0sIGNhbiBiZSBjaG9vc2Ugb25lIG9mICBgdGV4dGAgb3IgYGkxOG5gIChTdXBwb3J0IEhUTUwpICovXHJcbiAgdGV4dD86IHN0cmluZztcclxuICAvKiogSTE4biBrZXkgb2YgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiAgYHRleHRgIG9yIGBpMThuYCAoU3VwcG9ydCBIVE1MKSAqL1xyXG4gIGkxOG4/OiBzdHJpbmc7XHJcbiAgLyoqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgZ3JvdXAgbmFtZSwgZGVmYXVsdDogYHRydWVgICovXHJcbiAgZ3JvdXA/OiBib29sZWFuO1xyXG4gIC8qKiBSb3V0aW5nIGZvciB0aGUgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgbGlua2Agb3IgYGV4dGVybmFsTGlua2AgKi9cclxuICBsaW5rPzogc3RyaW5nO1xyXG4gIC8qKiBFeHRlcm5hbCBsaW5rIGZvciB0aGUgbWVudSBpdGVtLCBjYW4gYmUgY2hvb3NlIG9uZSBvZiBgbGlua2Agb3IgYGV4dGVybmFsTGlua2AgKi9cclxuICBleHRlcm5hbExpbms/OiBzdHJpbmc7XHJcbiAgLyoqIFNwZWNpZmllcyBgZXh0ZXJuYWxMaW5rYCB3aGVyZSB0byBkaXNwbGF5IHRoZSBsaW5rZWQgVVJMICovXHJcbiAgdGFyZ2V0PzogJ19ibGFuaycgfCAnX3NlbGYnIHwgJ19wYXJlbnQnIHwgJ190b3AnO1xyXG4gIC8qKiBJY29uIGZvciB0aGUgbWVudSBpdGVtLCBvbmx5IHZhbGlkIGZvciB0aGUgZmlyc3QgbGV2ZWwgbWVudSAqL1xyXG4gIGljb24/OiBzdHJpbmcgfCBNZW51SWNvbiB8IG51bGw7XHJcbiAgLyoqIEJhZGdldCBmb3IgdGhlIG1lbnUgaXRlbSB3aGVuIGBncm91cGAgaXMgYHRydWVgICovXHJcbiAgYmFkZ2U/OiBudW1iZXI7XHJcbiAgLyoqIFdoZXRoZXIgdG8gZGlzcGxheSBhIHJlZCBkb3QgaW5zdGVhZCBvZiBgYmFkZ2VgIHZhbHVlICovXHJcbiAgYmFkZ2VEb3Q/OiBib29sZWFuO1xyXG4gIC8qKiBCYWRnZSBbY29sb3JdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL2VuI256LWJhZGdlKSAqL1xyXG4gIGJhZGdlU3RhdHVzPzogc3RyaW5nO1xyXG4gIC8qKiBXaGV0aGVyIGRpc2FibGUgZm9yIHRoZSBtZW51IGl0ZW0gKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqIFdoZXRoZXIgaGlkZGVuIGZvciB0aGUgbWVudSBpdGVtICovXHJcbiAgaGlkZT86IGJvb2xlYW47XHJcbiAgLyoqIFdoZXRoZXIgaGlkZSBpbiBicmVhZGNydW1icywgd2hpY2ggYXJlIHZhbGlkIHdoZW4gdGhlIGBwYWdlLWhlYWRlcmAgY29tcG9uZW50IGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGJyZWFkY3J1bWJzICovXHJcbiAgaGlkZUluQnJlYWRjcnVtYj86IGJvb2xlYW47XHJcbiAgLyoqIEFDTCBjb25maWd1cmF0aW9uLCBpdCdzIGVxdWl2YWxlbnQgdG8gYEFDTFNlcnZpY2UuY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpYCBwYXJhbWV0ZXIgdmFsdWUgKi9cclxuICBhY2w/OiBhbnk7XHJcbiAgLyoqIFdoZXRoZXIgc2hvcnRjdXQgbWVudSBpdGVtICovXHJcbiAgc2hvcnRjdXQ/OiBib29sZWFuO1xyXG4gIC8qKiBXaGV0ZXIgc2hvcnRjdXQgbWVudSByb290IG5vZGUgKi9cclxuICBzaG9ydGN1dFJvb3Q/OiBib29sZWFuO1xyXG4gIC8qKiBXaGV0aGVyIHRvIGFsbG93IHJldXNlLCBuZWVkIHRvIGNvb3BlcmF0ZSB3aXRoIHRoZSBgcmV1c2UtdGFiYCBjb21wb25lbnQgKi9cclxuICByZXVzZT86IGJvb2xlYW47XHJcbiAgLyoqIFdoZXRoZXIgdG8gZXhwYW5kLCB3aGVuIGBjaGVja1N0cmljdGx5YCBpcyB2YWxpZCBpbiBgc2lkZWJhci1uYXZgIGNvbXBvbmVudCAqL1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG4gIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgbWVudSBpdGVtLCBjYW4gYmUgdXNlZCBpbiBgZ2V0SXRlbWAsYCBzZXRJdGVtYCB0byB1cGRhdGUgYSBtZW51ICovXHJcbiAga2V5Pzogc3RyaW5nO1xyXG4gIC8qKiBDaGlsZHJlbiBtZW51IG9mIG1lbnUgaXRlbSAqL1xyXG4gIGNoaWxkcmVuPzogTWVudVtdO1xyXG59XHJcbiJdfQ==