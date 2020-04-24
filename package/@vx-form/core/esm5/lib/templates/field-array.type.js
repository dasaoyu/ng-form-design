/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Optional } from "@angular/core";
import { FormArray } from "@angular/forms";
import { FieldType } from "./field.type";
import { clone, isNullOrUndefined, assignModelValue, getKeyPath } from "../utils";
import { VXFormBuilder } from "../services/vxform.builder";
import { VXFORM_CONFIG } from "../services/vxform.config";
import { registerControl, unregisterControl } from "../extensions/field-form/utils";
/**
 * @abstract
 * @template F
 */
var FieldArrayType = /** @class */ (function (_super) {
    tslib_1.__extends(FieldArrayType, _super);
    function FieldArrayType(builder) {
        var _this = _super.call(this) || this;
        _this.defaultOptions = {
            defaultValue: []
        };
        if (builder instanceof VXFormBuilder) {
        }
        return _this;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldArrayType.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!field.formControl) {
            registerControl(field, new FormArray([], { updateOn: field.modelOptions.updateOn }));
        }
        field.fieldGroup = field.fieldGroup || [];
        /** @type {?} */
        var length = field.model ? field.model.length : 0;
        if (field.fieldGroup.length > length) {
            for (var i = field.fieldGroup.length - 1; i >= length; --i) {
                unregisterControl(field.fieldGroup[i]);
                field.fieldGroup.splice(i, 1);
            }
        }
        for (var i = field.fieldGroup.length; i < length; i++) {
            /** @type {?} */
            var f = tslib_1.__assign({}, clone(field.fieldArray), { key: "" + i });
            field.fieldGroup.push(f);
        }
    };
    /**
     * @param {?=} i
     * @param {?=} initialModel
     * @return {?}
     */
    FieldArrayType.prototype.add = /**
     * @param {?=} i
     * @param {?=} initialModel
     * @return {?}
     */
    function (i, initialModel) {
        i = isNullOrUndefined(i) ? this.field.fieldGroup.length : i;
        if (!this.model) {
            assignModelValue(this.field.parent.model, getKeyPath(this.field), []);
        }
        this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);
        ((/** @type {?} */ (this.options)))._buildForm(true);
        this.formControl.markAsDirty();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    FieldArrayType.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.model.splice(i, 1);
        unregisterControl(this.field.fieldGroup[i]);
        this.field.fieldGroup.splice(i, 1);
        this.field.fieldGroup.forEach((/**
         * @param {?} f
         * @param {?} key
         * @return {?}
         */
        function (f, key) { return (f.key = "" + key); }));
        ((/** @type {?} */ (this.options)))._buildForm(true);
        this.formControl.markAsDirty();
    };
    /** @nocollapse */
    FieldArrayType.ctorParameters = function () { return [
        { type: VXFormBuilder, decorators: [{ type: Inject, args: [VXFORM_CONFIG,] }, { type: Optional }] }
    ]; };
    return FieldArrayType;
}(FieldType));
export { FieldArrayType };
if (false) {
    /** @type {?} */
    FieldArrayType.prototype.formControl;
    /** @type {?} */
    FieldArrayType.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYXJyYXkudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2ZpZWxkLWFycmF5LnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNYLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFtQixNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2xCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBRXhDO0lBRVUsMENBQVk7SUFNcEIsd0JBQStDLE9BQXVCO1FBQXRFLFlBQ0UsaUJBQU8sU0FJUjtRQVRELG9CQUFjLEdBQVE7WUFDcEIsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQztRQUtBLElBQUksT0FBTyxZQUFZLGFBQWEsRUFBRTtTQUNyQzs7SUFDSCxDQUFDOzs7OztJQUVELG1DQUFVOzs7O0lBQVYsVUFBVyxLQUF3QjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN0QixlQUFlLENBQ2IsS0FBSyxFQUNMLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQzdELENBQUM7U0FDSDtRQUVELEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFF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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi9maWVsZC50eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgY2xvbmUsXHJcbiAgaXNOdWxsT3JVbmRlZmluZWQsXHJcbiAgYXNzaWduTW9kZWxWYWx1ZSxcclxuICBnZXRLZXlQYXRoXHJcbn0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IFZYRm9ybUJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvdnhmb3JtLmJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRk9STV9DT05GSUcsIFZYRm9ybUV4dGVuc2lvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVnaXN0ZXJDb250cm9sLFxyXG4gIHVucmVnaXN0ZXJDb250cm9sXHJcbn0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvZmllbGQtZm9ybS91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkQXJyYXlUeXBlPFxyXG4gIEYgZXh0ZW5kcyBWWEZvcm1GaWVsZENvbmZpZyA9IFZYRm9ybUZpZWxkQ29uZmlnXHJcbj4gZXh0ZW5kcyBGaWVsZFR5cGU8Rj4gaW1wbGVtZW50cyBWWEZvcm1FeHRlbnNpb24ge1xyXG4gIGZvcm1Db250cm9sOiBGb3JtQXJyYXk7XHJcbiAgZGVmYXVsdE9wdGlvbnM6IGFueSA9IHtcclxuICAgIGRlZmF1bHRWYWx1ZTogW11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFZYRk9STV9DT05GSUcpIEBPcHRpb25hbCgpIGJ1aWxkZXI/OiBWWEZvcm1CdWlsZGVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGlmIChidWlsZGVyIGluc3RhbmNlb2YgVlhGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmICghZmllbGQuZm9ybUNvbnRyb2wpIHtcclxuICAgICAgcmVnaXN0ZXJDb250cm9sKFxyXG4gICAgICAgIGZpZWxkLFxyXG4gICAgICAgIG5ldyBGb3JtQXJyYXkoW10sIHsgdXBkYXRlT246IGZpZWxkLm1vZGVsT3B0aW9ucy51cGRhdGVPbiB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkLmZpZWxkR3JvdXAgPSBmaWVsZC5maWVsZEdyb3VwIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IGxlbmd0aCA9IGZpZWxkLm1vZGVsID8gZmllbGQubW9kZWwubGVuZ3RoIDogMDtcclxuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwLmxlbmd0aCA+IGxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gZmllbGQuZmllbGRHcm91cC5sZW5ndGggLSAxOyBpID49IGxlbmd0aDsgLS1pKSB7XHJcbiAgICAgICAgdW5yZWdpc3RlckNvbnRyb2woZmllbGQuZmllbGRHcm91cFtpXSk7XHJcbiAgICAgICAgZmllbGQuZmllbGRHcm91cC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gZmllbGQuZmllbGRHcm91cC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmID0geyAuLi5jbG9uZShmaWVsZC5maWVsZEFycmF5KSwga2V5OiBgJHtpfWAgfTtcclxuICAgICAgZmllbGQuZmllbGRHcm91cC5wdXNoKGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkKGk/OiBudW1iZXIsIGluaXRpYWxNb2RlbD86IGFueSkge1xyXG4gICAgaSA9IGlzTnVsbE9yVW5kZWZpbmVkKGkpID8gdGhpcy5maWVsZC5maWVsZEdyb3VwLmxlbmd0aCA6IGk7XHJcbiAgICBpZiAoIXRoaXMubW9kZWwpIHtcclxuICAgICAgYXNzaWduTW9kZWxWYWx1ZSh0aGlzLmZpZWxkLnBhcmVudC5tb2RlbCwgZ2V0S2V5UGF0aCh0aGlzLmZpZWxkKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGksIDAsIGluaXRpYWxNb2RlbCA/IGNsb25lKGluaXRpYWxNb2RlbCkgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICg8YW55PnRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSh0cnVlKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpOiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGksIDEpO1xyXG4gICAgdW5yZWdpc3RlckNvbnRyb2wodGhpcy5maWVsZC5maWVsZEdyb3VwW2ldKTtcclxuICAgIHRoaXMuZmllbGQuZmllbGRHcm91cC5zcGxpY2UoaSwgMSk7XHJcbiAgICB0aGlzLmZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaCgoZiwga2V5KSA9PiAoZi5rZXkgPSBgJHtrZXl9YCkpO1xyXG5cclxuICAgICg8YW55PnRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSh0cnVlKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICB9XHJcbn1cclxuIl19