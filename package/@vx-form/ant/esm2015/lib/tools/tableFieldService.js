/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import * as _ from "lodash";
import { VXToFormFieldService } from "./formFieldService";
export class VXDesginToFormService {
    /**
     * @param {?} toFormField
     */
    constructor(toFormField) {
        this.toFormField = toFormField;
    }
    /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    initTableStatus(tables, fields) {
        this.initTableFields(tables);
        if (fields && fields != null && fields.length > 0) {
            fields.forEach((/**
             * @param {?} field
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            (field, index, object) => {
                this.setTableStatus(tables, field);
            }));
        }
    }
    /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    initFormFieldByTables(tables, fields) {
        if (tables != undefined &&
            tables != null &&
            tables.primary != undefined &&
            tables.primary != null &&
            tables.primary.tablefields != undefined &&
            tables.primary.tablefields != null) {
            /** @type {?} */
            let tableFileds = tables.primary.tablefields.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.isbutintin === true;
            }));
            if (tableFileds != null) {
                tableFileds.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (!this.checkVXFormFieldConfig(item.fieldcode, fields)) {
                        this.addVXFormFieldConfig(item, fields);
                    }
                }));
            }
        }
    }
    /**
     * @private
     * @param {?} tables
     * @return {?}
     */
    initTableFields(tables) {
        if (!tables) {
            return;
        }
        if (tables.primary) {
            tables.primary.tablequote = false;
            if (tables.primary.tablefields) {
                tables.primary.tablefields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                (field) => {
                    field.fieldquote = false;
                }));
            }
        }
        if (tables.child) {
            if (tables.child.single) {
                tables.child.single.forEach((/**
                 * @param {?} table
                 * @return {?}
                 */
                (table) => {
                    table.tablequote = false;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} field
                         * @return {?}
                         */
                        (field) => {
                            field.fieldquote = false;
                        }));
                    }
                }));
            }
            if (tables.child.multiple) {
                tables.child.multiple.forEach((/**
                 * @param {?} table
                 * @return {?}
                 */
                (table) => {
                    table.tablequote = false;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} field
                         * @return {?}
                         */
                        (field) => {
                            field.fieldquote = false;
                        }));
                    }
                }));
            }
        }
    }
    /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    setTableStatus(tables, field) {
        if (tables) {
            if (tables.primary) {
                this.setTablePrimary(tables.primary, field);
            }
            if (tables.child) {
                if (tables.child.single) {
                    this.setTableSingle(tables.child.single, field);
                }
                if (tables.child.multiple) {
                    this.setTableMultiple(tables.child.multiple, field);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} table
     * @param {?} field
     * @return {?}
     */
    setTablePrimary(table, field) {
        if (field.tablecode === table.tablecode) {
            table.tablequote = true;
            if (table.tablefields) {
                table.tablefields.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    if (item.fieldcode === field.key) {
                        item.fieldquote = true;
                    }
                }));
            }
        }
    }
    /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    setTableSingle(tables, field) {
        if (tables && tables != null && tables.length > 0) {
            tables.forEach((/**
             * @param {?} table
             * @return {?}
             */
            table => {
                if (table.tablecode === field.tablecode) {
                    table.tablequote = true;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        (item) => {
                            if (item.fieldcode === field.key) {
                                item.fieldquote = true;
                            }
                        }));
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} tables
     * @param {?} groupField
     * @return {?}
     */
    setTableMultiple(tables, groupField) {
        if (tables && tables != null && tables.length > 0) {
            tables.forEach((/**
             * @param {?} table
             * @return {?}
             */
            table => {
                if (table.tablecode === groupField.tablecode) {
                    table.tablequote = true;
                    if (groupField.fieldArray &&
                        groupField.fieldArray.fieldGroup &&
                        groupField.fieldArray.fieldGroup.length > 0) {
                        if (table.tablefields) {
                            table.tablefields.forEach((/**
                             * @param {?} item
                             * @return {?}
                             */
                            (item) => {
                                _.get(groupField, "fieldArray.fieldGroup").forEach((/**
                                 * @param {?} field
                                 * @return {?}
                                 */
                                (field) => {
                                    if (item.fieldcode === field.key) {
                                        item.fieldquote = true;
                                    }
                                }));
                            }));
                        }
                    }
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} code
     * @param {?} fields
     * @return {?}
     */
    checkVXFormFieldConfig(code, fields) {
        /** @type {?} */
        let result = false;
        if (fields != undefined && fields != null && fields != []) {
            result = fields.some((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.key === code;
            }));
        }
        return result;
    }
    /**
     * @private
     * @param {?} tableField
     * @param {?} fields
     * @return {?}
     */
    addVXFormFieldConfig(tableField, fields) {
        /** @type {?} */
        let field = this.toFormField.getVXFiledFunction(tableField);
        if (fields == undefined || fields == null) {
            fields = [];
        }
        fields.push(field);
    }
}
VXDesginToFormService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VXDesginToFormService.ctorParameters = () => [
    { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXDesginToFormService.prototype.toFormField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVGaWVsZFNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvdGFibGVGaWVsZFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBQ2hDLFlBRVUsV0FBaUM7UUFBakMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO0lBQ3hDLENBQUM7Ozs7OztJQUVKLGVBQWUsQ0FBQyxNQUFzQixFQUFFLE1BQTJCO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqRCxNQUFNLENBQUMsT0FBTzs7Ozs7O1lBQUMsQ0FBQyxLQUFVLEVBQUUsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUJBQXFCLENBQUMsTUFBc0IsRUFBRSxNQUEyQjtRQUN2RSxJQUNFLE1BQU0sSUFBSSxTQUFTO1lBQ25CLE1BQU0sSUFBSSxJQUFJO1lBQ2QsTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTO1lBQzNCLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtZQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxTQUFTO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUks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RUFBRTtZQUN6RCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNqQyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDO1lBQzNCLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBQ08sb0JBQW9CLENBQzFCLFVBQThCLEVBQzlCLE1BQTJCOztZQUV2QixLQUFLLEdBQXNCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQ2hFLFVBQVUsQ0FDWDtRQUNELElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3pDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDYjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7O1lBL0tGLFVBQVU7Ozs7WUFGRixvQkFBb0IsdUJBS3hCLE1BQU0sU0FBQyxvQkFBb0I7Ozs7Ozs7SUFBNUIsNENBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIFZYVGFibGVGaWVsZENvbmZpZyxcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWFRhYmxlQ29uZmlnLFxyXG4gIGNsb25lXHJcbn0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgSUJ1c2luZXNzVGFibGUgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyBWWFRvRm9ybUZpZWxkU2VydmljZSB9IGZyb20gXCIuL2Zvcm1GaWVsZFNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZYRGVzZ2luVG9Gb3JtU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KFZYVG9Gb3JtRmllbGRTZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSB0b0Zvcm1GaWVsZDogVlhUb0Zvcm1GaWVsZFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGluaXRUYWJsZVN0YXR1cyh0YWJsZXM6IElCdXNpbmVzc1RhYmxlLCBmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10pIHtcclxuICAgIHRoaXMuaW5pdFRhYmxlRmllbGRzKHRhYmxlcyk7XHJcbiAgICBpZiAoZmllbGRzICYmIGZpZWxkcyAhPSBudWxsICYmIGZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZDogYW55LCBpbmRleDogYW55LCBvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0VGFibGVTdGF0dXModGFibGVzLCBmaWVsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdEZvcm1GaWVsZEJ5VGFibGVzKHRhYmxlczogSUJ1c2luZXNzVGFibGUsIGZpZWxkczogVlhGb3JtRmllbGRDb25maWdbXSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0YWJsZXMgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRhYmxlcyAhPSBudWxsICYmXHJcbiAgICAgIHRhYmxlcy5wcmltYXJ5ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0YWJsZXMucHJpbWFyeSAhPSBudWxsICYmXHJcbiAgICAgIHRhYmxlcy5wcmltYXJ5LnRhYmxlZmllbGRzICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0YWJsZXMucHJpbWFyeS50YWJsZWZpZWxkcyAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgbGV0IHRhYmxlRmlsZWRzOiBWWFRhYmxlRmllbGRDb25maWdbXSA9IHRhYmxlcy5wcmltYXJ5LnRhYmxlZmllbGRzLmZpbHRlcihcclxuICAgICAgICAoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5pc2J1dGludGluID09PSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHRhYmxlRmlsZWRzICE9IG51bGwpIHtcclxuICAgICAgICB0YWJsZUZpbGVkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5jaGVja1ZYRm9ybUZpZWxkQ29uZmlnKGl0ZW0uZmllbGRjb2RlLCBmaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVlhGb3JtRmllbGRDb25maWcoaXRlbSwgZmllbGRzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0VGFibGVGaWVsZHModGFibGVzOiBJQnVzaW5lc3NUYWJsZSkge1xyXG4gICAgaWYgKCF0YWJsZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWJsZXMucHJpbWFyeSkge1xyXG4gICAgICB0YWJsZXMucHJpbWFyeS50YWJsZXF1b3RlID0gZmFsc2U7XHJcbiAgICAgIGlmICh0YWJsZXMucHJpbWFyeS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgIHRhYmxlcy5wcmltYXJ5LnRhYmxlZmllbGRzLmZvckVhY2goKGZpZWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgIGZpZWxkLmZpZWxkcXVvdGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWJsZXMuY2hpbGQpIHtcclxuICAgICAgaWYgKHRhYmxlcy5jaGlsZC5zaW5nbGUpIHtcclxuICAgICAgICB0YWJsZXMuY2hpbGQuc2luZ2xlLmZvckVhY2goKHRhYmxlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRhYmxlLnRhYmxlcXVvdGUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0YWJsZS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgICAgICB0YWJsZS50YWJsZWZpZWxkcy5mb3JFYWNoKChmaWVsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgZmllbGQuZmllbGRxdW90ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGFibGVzLmNoaWxkLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGFibGVzLmNoaWxkLm11bHRpcGxlLmZvckVhY2goKHRhYmxlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRhYmxlLnRhYmxlcXVvdGUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0YWJsZS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgICAgICB0YWJsZS50YWJsZWZpZWxkcy5mb3JFYWNoKChmaWVsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgZmllbGQuZmllbGRxdW90ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYWJsZVN0YXR1cyh0YWJsZXM6IElCdXNpbmVzc1RhYmxlLCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmICh0YWJsZXMpIHtcclxuICAgICAgaWYgKHRhYmxlcy5wcmltYXJ5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRUYWJsZVByaW1hcnkodGFibGVzLnByaW1hcnksIGZpZWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhYmxlcy5jaGlsZCkge1xyXG4gICAgICAgIGlmICh0YWJsZXMuY2hpbGQuc2luZ2xlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFRhYmxlU2luZ2xlKHRhYmxlcy5jaGlsZC5zaW5nbGUsIGZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhYmxlcy5jaGlsZC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRUYWJsZU11bHRpcGxlKHRhYmxlcy5jaGlsZC5tdWx0aXBsZSwgZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYWJsZVByaW1hcnkodGFibGU6IFZYVGFibGVDb25maWcsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgaWYgKGZpZWxkLnRhYmxlY29kZSA9PT0gdGFibGUudGFibGVjb2RlKSB7XHJcbiAgICAgIHRhYmxlLnRhYmxlcXVvdGUgPSB0cnVlO1xyXG4gICAgICBpZiAodGFibGUudGFibGVmaWVsZHMpIHtcclxuICAgICAgICB0YWJsZS50YWJsZWZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmZpZWxkY29kZSA9PT0gZmllbGQua2V5KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZmllbGRxdW90ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFibGVTaW5nbGUodGFibGVzOiBWWFRhYmxlQ29uZmlnW10sIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykge1xyXG4gICAgaWYgKHRhYmxlcyAmJiB0YWJsZXMgIT0gbnVsbCAmJiB0YWJsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKHRhYmxlLnRhYmxlY29kZSA9PT0gZmllbGQudGFibGVjb2RlKSB7XHJcbiAgICAgICAgICB0YWJsZS50YWJsZXF1b3RlID0gdHJ1ZTtcclxuICAgICAgICAgIGlmICh0YWJsZS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgICAgICB0YWJsZS50YWJsZWZpZWxkcy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5maWVsZGNvZGUgPT09IGZpZWxkLmtleSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5maWVsZHF1b3RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRhYmxlTXVsdGlwbGUoXHJcbiAgICB0YWJsZXM6IFZYVGFibGVDb25maWdbXSxcclxuICAgIGdyb3VwRmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBpZiAodGFibGVzICYmIHRhYmxlcyAhPSBudWxsICYmIHRhYmxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHtcclxuICAgICAgICBpZiAodGFibGUudGFibGVjb2RlID09PSBncm91cEZpZWxkLnRhYmxlY29kZSkge1xyXG4gICAgICAgICAgdGFibGUudGFibGVxdW90ZSA9IHRydWU7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGdyb3VwRmllbGQuZmllbGRBcnJheSAmJlxyXG4gICAgICAgICAgICBncm91cEZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cCAmJlxyXG4gICAgICAgICAgICBncm91cEZpZWxkLmZpZWxkQXJyYXkuZmllbGRHcm91cC5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRhYmxlLnRhYmxlZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgdGFibGUudGFibGVmaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfLmdldChncm91cEZpZWxkLCBcImZpZWxkQXJyYXkuZmllbGRHcm91cFwiKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAoZmllbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmZpZWxkY29kZSA9PT0gZmllbGQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZpZWxkcXVvdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrVlhGb3JtRmllbGRDb25maWcoY29kZTogc3RyaW5nLCBmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10pIHtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIGlmIChmaWVsZHMgIT0gdW5kZWZpbmVkICYmIGZpZWxkcyAhPSBudWxsICYmIGZpZWxkcyAhPSBbXSkge1xyXG4gICAgICByZXN1bHQgPSBmaWVsZHMuc29tZSgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ua2V5ID09PSBjb2RlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgYWRkVlhGb3JtRmllbGRDb25maWcoXHJcbiAgICB0YWJsZUZpZWxkOiBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgICBmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW11cclxuICApIHtcclxuICAgIGxldCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcgPSB0aGlzLnRvRm9ybUZpZWxkLmdldFZYRmlsZWRGdW5jdGlvbihcclxuICAgICAgdGFibGVGaWVsZFxyXG4gICAgKTtcclxuICAgIGlmIChmaWVsZHMgPT0gdW5kZWZpbmVkIHx8IGZpZWxkcyA9PSBudWxsKSB7XHJcbiAgICAgIGZpZWxkcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZmllbGRzLnB1c2goZmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=