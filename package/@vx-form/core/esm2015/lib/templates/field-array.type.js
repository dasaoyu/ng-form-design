/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class FieldArrayType extends FieldType {
    /**
     * @param {?=} builder
     */
    constructor(builder) {
        super();
        this.defaultOptions = {
            defaultValue: []
        };
        if (builder instanceof VXFormBuilder) {
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.formControl) {
            registerControl(field, new FormArray([], { updateOn: field.modelOptions.updateOn }));
        }
        field.fieldGroup = field.fieldGroup || [];
        /** @type {?} */
        const length = field.model ? field.model.length : 0;
        if (field.fieldGroup.length > length) {
            for (let i = field.fieldGroup.length - 1; i >= length; --i) {
                unregisterControl(field.fieldGroup[i]);
                field.fieldGroup.splice(i, 1);
            }
        }
        for (let i = field.fieldGroup.length; i < length; i++) {
            /** @type {?} */
            const f = Object.assign({}, clone(field.fieldArray), { key: `${i}` });
            field.fieldGroup.push(f);
        }
    }
    /**
     * @param {?=} i
     * @param {?=} initialModel
     * @return {?}
     */
    add(i, initialModel) {
        i = isNullOrUndefined(i) ? this.field.fieldGroup.length : i;
        if (!this.model) {
            assignModelValue(this.field.parent.model, getKeyPath(this.field), []);
        }
        this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);
        ((/** @type {?} */ (this.options)))._buildForm(true);
        this.formControl.markAsDirty();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    remove(i) {
        this.model.splice(i, 1);
        unregisterControl(this.field.fieldGroup[i]);
        this.field.fieldGroup.splice(i, 1);
        this.field.fieldGroup.forEach((/**
         * @param {?} f
         * @param {?} key
         * @return {?}
         */
        (f, key) => (f.key = `${key}`)));
        ((/** @type {?} */ (this.options)))._buildForm(true);
        this.formControl.markAsDirty();
    }
}
/** @nocollapse */
FieldArrayType.ctorParameters = () => [
    { type: VXFormBuilder, decorators: [{ type: Inject, args: [VXFORM_CONFIG,] }, { type: Optional }] }
];
if (false) {
    /** @type {?} */
    FieldArrayType.prototype.formControl;
    /** @type {?} */
    FieldArrayType.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYXJyYXkudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2ZpZWxkLWFycmF5LnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixVQUFVLEVBQ1gsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSxhQUFhLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixpQkFBaUIsRUFDbEIsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFFeEMsTUFBTSxPQUFnQixjQUVwQixTQUFRLFNBQVk7Ozs7SUFNcEIsWUFBK0MsT0FBdUI7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFMVixtQkFBYyxHQUFRO1lBQ3BCLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7UUFLQSxJQUFJLE9BQU8sWUFBWSxhQUFhLEVBQUU7U0FDckM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUF3QjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN0QixlQUFlLENBQ2IsS0FBSyxFQUNMLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQzdELENBQUM7U0FDSDtRQUVELEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7O2NBRXBDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUMxRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNGO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDL0MsQ0FBQyxxQkFBUSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFFO1lBQ3JELEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLENBQVUsRUFBRSxZQUFrQjtRQUNoQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4RSxDQUFDLG1CQUFLLElBQUksQ0FBQyxPQUFPLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLENBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFFOUQsQ0FBQyxtQkFBSyxJQUFJLENBQUMsT0FBTyxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O1lBbkVNLGFBQWEsdUJBZ0JQLE1BQU0sU0FBQyxhQUFhLGNBQUcsUUFBUTs7OztJQUw1QyxxQ0FBdUI7O0lBQ3ZCLHdDQUVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi9maWVsZC50eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgY2xvbmUsXHJcbiAgaXNOdWxsT3JVbmRlZmluZWQsXHJcbiAgYXNzaWduTW9kZWxWYWx1ZSxcclxuICBnZXRLZXlQYXRoXHJcbn0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IFZYRm9ybUJ1aWxkZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvdnhmb3JtLmJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFZYRk9STV9DT05GSUcsIFZYRm9ybUV4dGVuc2lvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy92eGZvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVnaXN0ZXJDb250cm9sLFxyXG4gIHVucmVnaXN0ZXJDb250cm9sXHJcbn0gZnJvbSBcIi4uL2V4dGVuc2lvbnMvZmllbGQtZm9ybS91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkQXJyYXlUeXBlPFxyXG4gIEYgZXh0ZW5kcyBWWEZvcm1GaWVsZENvbmZpZyA9IFZYRm9ybUZpZWxkQ29uZmlnXHJcbj4gZXh0ZW5kcyBGaWVsZFR5cGU8Rj4gaW1wbGVtZW50cyBWWEZvcm1FeHRlbnNpb24ge1xyXG4gIGZvcm1Db250cm9sOiBGb3JtQXJyYXk7XHJcbiAgZGVmYXVsdE9wdGlvbnM6IGFueSA9IHtcclxuICAgIGRlZmF1bHRWYWx1ZTogW11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFZYRk9STV9DT05GSUcpIEBPcHRpb25hbCgpIGJ1aWxkZXI/OiBWWEZvcm1CdWlsZGVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGlmIChidWlsZGVyIGluc3RhbmNlb2YgVlhGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3B1bGF0ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmICghZmllbGQuZm9ybUNvbnRyb2wpIHtcclxuICAgICAgcmVnaXN0ZXJDb250cm9sKFxyXG4gICAgICAgIGZpZWxkLFxyXG4gICAgICAgIG5ldyBGb3JtQXJyYXkoW10sIHsgdXBkYXRlT246IGZpZWxkLm1vZGVsT3B0aW9ucy51cGRhdGVPbiB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkLmZpZWxkR3JvdXAgPSBmaWVsZC5maWVsZEdyb3VwIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IGxlbmd0aCA9IGZpZWxkLm1vZGVsID8gZmllbGQubW9kZWwubGVuZ3RoIDogMDtcclxuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwLmxlbmd0aCA+IGxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gZmllbGQuZmllbGRHcm91cC5sZW5ndGggLSAxOyBpID49IGxlbmd0aDsgLS1pKSB7XHJcbiAgICAgICAgdW5yZWdpc3RlckNvbnRyb2woZmllbGQuZmllbGRHcm91cFtpXSk7XHJcbiAgICAgICAgZmllbGQuZmllbGRHcm91cC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gZmllbGQuZmllbGRHcm91cC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBmID0geyAuLi5jbG9uZShmaWVsZC5maWVsZEFycmF5KSwga2V5OiBgJHtpfWAgfTtcclxuICAgICAgZmllbGQuZmllbGRHcm91cC5wdXNoKGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkKGk/OiBudW1iZXIsIGluaXRpYWxNb2RlbD86IGFueSkge1xyXG4gICAgaSA9IGlzTnVsbE9yVW5kZWZpbmVkKGkpID8gdGhpcy5maWVsZC5maWVsZEdyb3VwLmxlbmd0aCA6IGk7XHJcbiAgICBpZiAoIXRoaXMubW9kZWwpIHtcclxuICAgICAgYXNzaWduTW9kZWxWYWx1ZSh0aGlzLmZpZWxkLnBhcmVudC5tb2RlbCwgZ2V0S2V5UGF0aCh0aGlzLmZpZWxkKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGksIDAsIGluaXRpYWxNb2RlbCA/IGNsb25lKGluaXRpYWxNb2RlbCkgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICg8YW55PnRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSh0cnVlKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpOiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kZWwuc3BsaWNlKGksIDEpO1xyXG4gICAgdW5yZWdpc3RlckNvbnRyb2wodGhpcy5maWVsZC5maWVsZEdyb3VwW2ldKTtcclxuICAgIHRoaXMuZmllbGQuZmllbGRHcm91cC5zcGxpY2UoaSwgMSk7XHJcbiAgICB0aGlzLmZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaCgoZiwga2V5KSA9PiAoZi5rZXkgPSBgJHtrZXl9YCkpO1xyXG5cclxuICAgICg8YW55PnRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSh0cnVlKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICB9XHJcbn1cclxuIl19