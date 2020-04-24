/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import * as _ from "lodash";
import { VXToFormFieldService } from "./formFieldService";
var VXDesginToFormService = /** @class */ (function () {
    function VXDesginToFormService(toFormField) {
        this.toFormField = toFormField;
    }
    /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    VXDesginToFormService.prototype.initTableStatus = /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    function (tables, fields) {
        var _this = this;
        this.initTableFields(tables);
        if (fields && fields != null && fields.length > 0) {
            fields.forEach((/**
             * @param {?} field
             * @param {?} index
             * @param {?} object
             * @return {?}
             */
            function (field, index, object) {
                _this.setTableStatus(tables, field);
            }));
        }
    };
    /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    VXDesginToFormService.prototype.initFormFieldByTables = /**
     * @param {?} tables
     * @param {?} fields
     * @return {?}
     */
    function (tables, fields) {
        var _this = this;
        if (tables != undefined &&
            tables != null &&
            tables.primary != undefined &&
            tables.primary != null &&
            tables.primary.tablefields != undefined &&
            tables.primary.tablefields != null) {
            /** @type {?} */
            var tableFileds = tables.primary.tablefields.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.isbutintin === true;
            }));
            if (tableFileds != null) {
                tableFileds.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (!_this.checkVXFormFieldConfig(item.fieldcode, fields)) {
                        _this.addVXFormFieldConfig(item, fields);
                    }
                }));
            }
        }
    };
    /**
     * @private
     * @param {?} tables
     * @return {?}
     */
    VXDesginToFormService.prototype.initTableFields = /**
     * @private
     * @param {?} tables
     * @return {?}
     */
    function (tables) {
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
                function (field) {
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
                function (table) {
                    table.tablequote = false;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} field
                         * @return {?}
                         */
                        function (field) {
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
                function (table) {
                    table.tablequote = false;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} field
                         * @return {?}
                         */
                        function (field) {
                            field.fieldquote = false;
                        }));
                    }
                }));
            }
        }
    };
    /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    VXDesginToFormService.prototype.setTableStatus = /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    function (tables, field) {
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
    };
    /**
     * @private
     * @param {?} table
     * @param {?} field
     * @return {?}
     */
    VXDesginToFormService.prototype.setTablePrimary = /**
     * @private
     * @param {?} table
     * @param {?} field
     * @return {?}
     */
    function (table, field) {
        if (field.tablecode === table.tablecode) {
            table.tablequote = true;
            if (table.tablefields) {
                table.tablefields.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (item.fieldcode === field.key) {
                        item.fieldquote = true;
                    }
                }));
            }
        }
    };
    /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    VXDesginToFormService.prototype.setTableSingle = /**
     * @private
     * @param {?} tables
     * @param {?} field
     * @return {?}
     */
    function (tables, field) {
        if (tables && tables != null && tables.length > 0) {
            tables.forEach((/**
             * @param {?} table
             * @return {?}
             */
            function (table) {
                if (table.tablecode === field.tablecode) {
                    table.tablequote = true;
                    if (table.tablefields) {
                        table.tablefields.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            if (item.fieldcode === field.key) {
                                item.fieldquote = true;
                            }
                        }));
                    }
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} tables
     * @param {?} groupField
     * @return {?}
     */
    VXDesginToFormService.prototype.setTableMultiple = /**
     * @private
     * @param {?} tables
     * @param {?} groupField
     * @return {?}
     */
    function (tables, groupField) {
        if (tables && tables != null && tables.length > 0) {
            tables.forEach((/**
             * @param {?} table
             * @return {?}
             */
            function (table) {
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
                            function (item) {
                                _.get(groupField, "fieldArray.fieldGroup").forEach((/**
                                 * @param {?} field
                                 * @return {?}
                                 */
                                function (field) {
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
    };
    /**
     * @private
     * @param {?} code
     * @param {?} fields
     * @return {?}
     */
    VXDesginToFormService.prototype.checkVXFormFieldConfig = /**
     * @private
     * @param {?} code
     * @param {?} fields
     * @return {?}
     */
    function (code, fields) {
        /** @type {?} */
        var result = false;
        if (fields != undefined && fields != null && fields != []) {
            result = fields.some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.key === code;
            }));
        }
        return result;
    };
    /**
     * @private
     * @param {?} tableField
     * @param {?} fields
     * @return {?}
     */
    VXDesginToFormService.prototype.addVXFormFieldConfig = /**
     * @private
     * @param {?} tableField
     * @param {?} fields
     * @return {?}
     */
    function (tableField, fields) {
        /** @type {?} */
        var field = this.toFormField.getVXFiledFunction(tableField);
        if (fields == undefined || fields == null) {
            fields = [];
        }
        fields.push(field);
    };
    VXDesginToFormService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VXDesginToFormService.ctorParameters = function () { return [
        { type: VXToFormFieldService, decorators: [{ type: Inject, args: [VXToFormFieldService,] }] }
    ]; };
    return VXDesginToFormService;
}());
export { VXDesginToFormService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VXDesginToFormService.prototype.toFormField;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVGaWVsZFNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9hbnQvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvdGFibGVGaWVsZFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRDtJQUVFLCtCQUVVLFdBQWlDO1FBQWpDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJQUN4QyxDQUFDOzs7Ozs7SUFFSiwrQ0FBZTs7Ozs7SUFBZixVQUFnQixNQUFzQixFQUFFLE1BQTJCO1FBQW5FLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELE1BQU0sQ0FBQyxPQUFPOzs7Ozs7WUFBQyxVQUFDLEtBQVUsRUFBRSxLQUFVLEVBQUUsTUFBVztnQkFDakQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVELHFEQUFxQjs7Ozs7SUFBckIsVUFBc0IsTUFBc0IsRUFBRSxNQUEyQjtRQUF6RSxpQkFzQkM7UUFyQkMsSUFDRSxNQUFNLElBQUksU0FBUztZQUNuQixNQUFNLElBQUksSUFBSTtZQUNkLE1BQU0sQ0FBQyxPQUFPLElBQUksU0FBUztZQUMzQixNQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7WUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksU0FBUztZQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFD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SUFBSTs7OztZQUFDLFVBQUMsSUFBUztnQkFDN0IsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQztZQUMzQixDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUNPLG9EQUFvQjs7Ozs7O0lBQTVCLFVBQ0UsVUFBOEIsRUFDOUIsTUFBMkI7O1lBRXZCLEtBQUssR0FBc0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FDaEUsVUFBVSxDQUNYO1FBQ0QsSUFBSSxNQUFNLElBQUksU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNiO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDOztnQkEvS0YsVUFBVTs7OztnQkFGRixvQkFBb0IsdUJBS3hCLE1BQU0sU0FBQyxvQkFBb0I7O0lBNktoQyw0QkFBQztDQUFBLEFBaExELElBZ0xDO1NBL0tZLHFCQUFxQjs7Ozs7O0lBRTlCLDRDQUN5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBWWFRhYmxlRmllbGRDb25maWcsXHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhUYWJsZUNvbmZpZyxcclxuICBjbG9uZVxyXG59IGZyb20gXCJAdngtZm9ybS9jb3JlXCI7XHJcbmltcG9ydCB7IElCdXNpbmVzc1RhYmxlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgVlhUb0Zvcm1GaWVsZFNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtRmllbGRTZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWWERlc2dpblRvRm9ybVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChWWFRvRm9ybUZpZWxkU2VydmljZSlcclxuICAgIHByaXZhdGUgdG9Gb3JtRmllbGQ6IFZYVG9Gb3JtRmllbGRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBpbml0VGFibGVTdGF0dXModGFibGVzOiBJQnVzaW5lc3NUYWJsZSwgZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdKSB7XHJcbiAgICB0aGlzLmluaXRUYWJsZUZpZWxkcyh0YWJsZXMpO1xyXG4gICAgaWYgKGZpZWxkcyAmJiBmaWVsZHMgIT0gbnVsbCAmJiBmaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQ6IGFueSwgaW5kZXg6IGFueSwgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnNldFRhYmxlU3RhdHVzKHRhYmxlcywgZmllbGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRGb3JtRmllbGRCeVRhYmxlcyh0YWJsZXM6IElCdXNpbmVzc1RhYmxlLCBmaWVsZHM6IFZYRm9ybUZpZWxkQ29uZmlnW10pIHtcclxuICAgIGlmIChcclxuICAgICAgdGFibGVzICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0YWJsZXMgIT0gbnVsbCAmJlxyXG4gICAgICB0YWJsZXMucHJpbWFyeSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGFibGVzLnByaW1hcnkgIT0gbnVsbCAmJlxyXG4gICAgICB0YWJsZXMucHJpbWFyeS50YWJsZWZpZWxkcyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGFibGVzLnByaW1hcnkudGFibGVmaWVsZHMgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIGxldCB0YWJsZUZpbGVkczogVlhUYWJsZUZpZWxkQ29uZmlnW10gPSB0YWJsZXMucHJpbWFyeS50YWJsZWZpZWxkcy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaXNidXRpbnRpbiA9PT0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0YWJsZUZpbGVkcyAhPSBudWxsKSB7XHJcbiAgICAgICAgdGFibGVGaWxlZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tWWEZvcm1GaWVsZENvbmZpZyhpdGVtLmZpZWxkY29kZSwgZmllbGRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFZYRm9ybUZpZWxkQ29uZmlnKGl0ZW0sIGZpZWxkcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhYmxlRmllbGRzKHRhYmxlczogSUJ1c2luZXNzVGFibGUpIHtcclxuICAgIGlmICghdGFibGVzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVzLnByaW1hcnkpIHtcclxuICAgICAgdGFibGVzLnByaW1hcnkudGFibGVxdW90ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAodGFibGVzLnByaW1hcnkudGFibGVmaWVsZHMpIHtcclxuICAgICAgICB0YWJsZXMucHJpbWFyeS50YWJsZWZpZWxkcy5mb3JFYWNoKChmaWVsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICBmaWVsZC5maWVsZHF1b3RlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVzLmNoaWxkKSB7XHJcbiAgICAgIGlmICh0YWJsZXMuY2hpbGQuc2luZ2xlKSB7XHJcbiAgICAgICAgdGFibGVzLmNoaWxkLnNpbmdsZS5mb3JFYWNoKCh0YWJsZTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0YWJsZS50YWJsZXF1b3RlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGFibGUudGFibGVmaWVsZHMpIHtcclxuICAgICAgICAgICAgdGFibGUudGFibGVmaWVsZHMuZm9yRWFjaCgoZmllbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGZpZWxkLmZpZWxkcXVvdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhYmxlcy5jaGlsZC5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRhYmxlcy5jaGlsZC5tdWx0aXBsZS5mb3JFYWNoKCh0YWJsZTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0YWJsZS50YWJsZXF1b3RlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGFibGUudGFibGVmaWVsZHMpIHtcclxuICAgICAgICAgICAgdGFibGUudGFibGVmaWVsZHMuZm9yRWFjaCgoZmllbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGZpZWxkLmZpZWxkcXVvdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFibGVTdGF0dXModGFibGVzOiBJQnVzaW5lc3NUYWJsZSwgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAodGFibGVzKSB7XHJcbiAgICAgIGlmICh0YWJsZXMucHJpbWFyeSkge1xyXG4gICAgICAgIHRoaXMuc2V0VGFibGVQcmltYXJ5KHRhYmxlcy5wcmltYXJ5LCBmaWVsZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YWJsZXMuY2hpbGQpIHtcclxuICAgICAgICBpZiAodGFibGVzLmNoaWxkLnNpbmdsZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRUYWJsZVNpbmdsZSh0YWJsZXMuY2hpbGQuc2luZ2xlLCBmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWJsZXMuY2hpbGQubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0VGFibGVNdWx0aXBsZSh0YWJsZXMuY2hpbGQubXVsdGlwbGUsIGZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFibGVQcmltYXJ5KHRhYmxlOiBWWFRhYmxlQ29uZmlnLCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmIChmaWVsZC50YWJsZWNvZGUgPT09IHRhYmxlLnRhYmxlY29kZSkge1xyXG4gICAgICB0YWJsZS50YWJsZXF1b3RlID0gdHJ1ZTtcclxuICAgICAgaWYgKHRhYmxlLnRhYmxlZmllbGRzKSB7XHJcbiAgICAgICAgdGFibGUudGFibGVmaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5maWVsZGNvZGUgPT09IGZpZWxkLmtleSkge1xyXG4gICAgICAgICAgICBpdGVtLmZpZWxkcXVvdGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRhYmxlU2luZ2xlKHRhYmxlczogVlhUYWJsZUNvbmZpZ1tdLCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpIHtcclxuICAgIGlmICh0YWJsZXMgJiYgdGFibGVzICE9IG51bGwgJiYgdGFibGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGFibGVzLmZvckVhY2godGFibGUgPT4ge1xyXG4gICAgICAgIGlmICh0YWJsZS50YWJsZWNvZGUgPT09IGZpZWxkLnRhYmxlY29kZSkge1xyXG4gICAgICAgICAgdGFibGUudGFibGVxdW90ZSA9IHRydWU7XHJcbiAgICAgICAgICBpZiAodGFibGUudGFibGVmaWVsZHMpIHtcclxuICAgICAgICAgICAgdGFibGUudGFibGVmaWVsZHMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uZmllbGRjb2RlID09PSBmaWVsZC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZmllbGRxdW90ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYWJsZU11bHRpcGxlKFxyXG4gICAgdGFibGVzOiBWWFRhYmxlQ29uZmlnW10sXHJcbiAgICBncm91cEZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ1xyXG4gICkge1xyXG4gICAgaWYgKHRhYmxlcyAmJiB0YWJsZXMgIT0gbnVsbCAmJiB0YWJsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB7XHJcbiAgICAgICAgaWYgKHRhYmxlLnRhYmxlY29kZSA9PT0gZ3JvdXBGaWVsZC50YWJsZWNvZGUpIHtcclxuICAgICAgICAgIHRhYmxlLnRhYmxlcXVvdGUgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBncm91cEZpZWxkLmZpZWxkQXJyYXkgJiZcclxuICAgICAgICAgICAgZ3JvdXBGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAgJiZcclxuICAgICAgICAgICAgZ3JvdXBGaWVsZC5maWVsZEFycmF5LmZpZWxkR3JvdXAubGVuZ3RoID4gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWJsZS50YWJsZWZpZWxkcykge1xyXG4gICAgICAgICAgICAgIHRhYmxlLnRhYmxlZmllbGRzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXy5nZXQoZ3JvdXBGaWVsZCwgXCJmaWVsZEFycmF5LmZpZWxkR3JvdXBcIikuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgKGZpZWxkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5maWVsZGNvZGUgPT09IGZpZWxkLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5maWVsZHF1b3RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1ZYRm9ybUZpZWxkQ29uZmlnKGNvZGU6IHN0cmluZywgZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBpZiAoZmllbGRzICE9IHVuZGVmaW5lZCAmJiBmaWVsZHMgIT0gbnVsbCAmJiBmaWVsZHMgIT0gW10pIHtcclxuICAgICAgcmVzdWx0ID0gZmllbGRzLnNvbWUoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmtleSA9PT0gY29kZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBwcml2YXRlIGFkZFZYRm9ybUZpZWxkQ29uZmlnKFxyXG4gICAgdGFibGVGaWVsZDogVlhUYWJsZUZpZWxkQ29uZmlnLFxyXG4gICAgZmllbGRzOiBWWEZvcm1GaWVsZENvbmZpZ1tdXHJcbiAgKSB7XHJcbiAgICBsZXQgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnID0gdGhpcy50b0Zvcm1GaWVsZC5nZXRWWEZpbGVkRnVuY3Rpb24oXHJcbiAgICAgIHRhYmxlRmllbGRcclxuICAgICk7XHJcbiAgICBpZiAoZmllbGRzID09IHVuZGVmaW5lZCB8fCBmaWVsZHMgPT0gbnVsbCkge1xyXG4gICAgICBmaWVsZHMgPSBbXTtcclxuICAgIH1cclxuICAgIGZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICB9XHJcbn1cclxuIl19