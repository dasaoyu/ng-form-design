/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input } from "@angular/core";
/**
 * @abstract
 * @template F
 */
var FieldType = /** @class */ (function () {
    function FieldType() {
    }
    Object.defineProperty(FieldType.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.model;
        },
        set: /**
         * @param {?} m
         * @return {?}
         */
        function (m) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "form", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.field.parent.formControl));
        },
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "key", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "formControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.formControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "to", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.templateOptions || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "showError", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.showError(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "formState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.formState || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "formStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.field.status || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "editor", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.field.hasOwnProperty("editor")) {
                return this.field.editor;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "text", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.model.hasOwnProperty(this.field.key)) {
                return this.model[this.field.key];
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "placeHolder", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.to != undefined &&
                this.to != null &&
                this.to.placeholder != undefined &&
                this.to.placeholder != null) {
                return this.to.placeholder;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "textSingle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = "";
            if (this.model.hasOwnProperty(this.field.key)) {
                /** @type {?} */
                var value_1 = this.model[this.field.key];
                if (value_1 != null && value_1 != "") {
                    if (this.field.templateOptions &&
                        this.field.templateOptions.options &&
                        this.field.templateOptions.options != null) {
                        this.field.templateOptions.options.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            if (item.value == value_1) {
                                result = item.label;
                            }
                        }));
                    }
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "textMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var result = [];
            if (this.model.hasOwnProperty(this.field.key)) {
                /** @type {?} */
                var values = this.model[this.field.key];
                if (values != null && values instanceof Array) {
                    if (this.field.templateOptions &&
                        this.field.templateOptions.options &&
                        this.field.templateOptions.options != null) {
                        values.forEach((/**
                         * @param {?} element
                         * @return {?}
                         */
                        function (element) {
                            _this.to.options.forEach((/**
                             * @param {?} item
                             * @return {?}
                             */
                            function (item) {
                                if (item.value === element) {
                                    result.push(item.label);
                                }
                            }));
                        }));
                    }
                }
            }
            return result.join("、");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "textLookUp", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = [];
            if (this.model.hasOwnProperty(this.key)) {
                if (this.model[this.key] != undefined && this.model[this.key] != null) {
                    result = this.model[this.key].map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.label;
                    }));
                }
            }
            return result.join("、");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "tips", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.to != undefined &&
                this.to != null &&
                this.to.tips != undefined &&
                this.to.tips != null) {
                return this.to.tips;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "attachment", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = [];
            if (this.model.hasOwnProperty(this.field.key)) {
                if (this.model[this.field.key] != null &&
                    ((/** @type {?} */ (this.model[this.field.key])))) {
                    result = this.model[this.field.key];
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "attachmentDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = false;
            if (this.to.hasOwnProperty("attachment")) {
                if (this.to.attachment.hasOwnProperty("limit")) {
                    /** @type {?} */
                    var limit = this.to.attachment.limit;
                    if (limit != null) {
                        /** @type {?} */
                        var attachment = this.attachment;
                        if (attachment != null) {
                            result = this.attachment.length >= limit;
                        }
                    }
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = false;
            if (this.field["active"] != undefined && this.field["active"] != null && this.field["active"] == true) {
                result = true;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldType.prototype, "rownumber", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = 0;
            if (this.field["active"] != undefined && this.field["active"] != null) {
                result = this.field.rownumber;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    FieldType.propDecorators = {
        field: [{ type: Input }],
        model: [{ type: Input }],
        form: [{ type: Input }],
        options: [{ type: Input }]
    };
    return FieldType;
}());
export { FieldType };
if (false) {
    /** @type {?} */
    FieldType.prototype.field;
    /** @type {?} */
    FieldType.prototype.defaultOptions;
}
/**
 * @abstract
 */
var /**
 * @abstract
 */
Field = /** @class */ (function (_super) {
    tslib_1.__extends(Field, _super);
    function Field() {
        return _super.call(this) || this;
    }
    return Field;
}(FieldType));
/**
 * @abstract
 */
export { Field };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2ZpZWxkLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU90QztJQUFBO0lBOExBLENBQUM7SUF4TEMsc0JBQ0ksNEJBQUs7Ozs7UUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFVLENBQU0sSUFBRyxDQUFDOzs7T0FEbkI7SUFHRCxzQkFDSSwyQkFBSTs7OztRQURSO1lBRUUsT0FBTyxtQkFBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUEsQ0FBQztRQUNsRCxDQUFDOzs7OztRQUNELFVBQVMsSUFBSSxJQUFHLENBQUM7OztPQURoQjtJQUdELHNCQUNJLDhCQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBWSxPQUFxQixJQUFHLENBQUM7OztPQURwQztJQUdELHNCQUFJLDBCQUFHOzs7O1FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5QkFBRTs7OztRQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENB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RCxDQUFDLEFBSkQsQ0FBb0MsU0FBUyxHQUk1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgVlhGb3JtRmllbGRDb25maWcsXHJcbiAgVlhBdHRhY2htZW50RmlsZVxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3Z4Zm9ybS5maWVsZC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZFR5cGU8XHJcbiAgRiBleHRlbmRzIFZYRm9ybUZpZWxkQ29uZmlnID0gVlhGb3JtRmllbGRDb25maWdcclxuPiB7XHJcbiAgQElucHV0KCkgZmllbGQ6IEY7XHJcbiAgZGVmYXVsdE9wdGlvbnM/OiBGO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBtb2RlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLm1vZGVsO1xyXG4gIH1cclxuICBzZXQgbW9kZWwobTogYW55KSB7fVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBmb3JtKCkge1xyXG4gICAgcmV0dXJuIDxGb3JtR3JvdXA+dGhpcy5maWVsZC5wYXJlbnQuZm9ybUNvbnRyb2w7XHJcbiAgfVxyXG4gIHNldCBmb3JtKGZvcm0pIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5vcHRpb25zO1xyXG4gIH1cclxuICBzZXQgb3B0aW9ucyhvcHRpb25zOiBGW1wib3B0aW9uc1wiXSkge31cclxuXHJcbiAgZ2V0IGtleSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmtleTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtQ29udHJvbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmZvcm1Db250cm9sO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dFcnJvcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvd0Vycm9yKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5pZDtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtU3RhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm1TdGF0ZSB8fCB7fTtcclxuICB9XHJcblxyXG4gIGdldCBmb3JtU3RhdHVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuc3RhdHVzIHx8IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgZWRpdG9yKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuaGFzT3duUHJvcGVydHkoXCJlZGl0b3JcIikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZWRpdG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dCgpIHtcclxuICAgIGlmICh0aGlzLm1vZGVsLmhhc093blByb3BlcnR5KHRoaXMuZmllbGQua2V5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZUhvbGRlcigpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy50byAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy50byAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMudG8ucGxhY2Vob2xkZXIgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMudG8ucGxhY2Vob2xkZXIgIT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvLnBsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dFNpbmdsZSgpIHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMubW9kZWwuaGFzT3duUHJvcGVydHkodGhpcy5maWVsZC5rZXkpKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldO1xyXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMgJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMgJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMgIT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtLmxhYmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dE11bHRpcGxlKCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgaWYgKHRoaXMubW9kZWwuaGFzT3duUHJvcGVydHkodGhpcy5maWVsZC5rZXkpKSB7XHJcbiAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XTtcclxuICAgICAgaWYgKHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMgJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMgJiZcclxuICAgICAgICAgIHRoaXMuZmllbGQudGVtcGxhdGVPcHRpb25zLm9wdGlvbnMgIT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvLm9wdGlvbnMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0ubGFiZWwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQuam9pbihcIuOAgVwiKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0TG9va1VwKCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgaWYgKHRoaXMubW9kZWwuaGFzT3duUHJvcGVydHkodGhpcy5rZXkpKSB7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsW3RoaXMua2V5XSAhPSB1bmRlZmluZWQgJiYgdGhpcy5tb2RlbFt0aGlzLmtleV0gIT0gbnVsbCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWxbdGhpcy5rZXldLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwi44CBXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpcHMoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMudG8gIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMudG8gIT0gbnVsbCAmJlxyXG4gICAgICB0aGlzLnRvLnRpcHMgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHRoaXMudG8udGlwcyAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG8udGlwcztcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF0dGFjaG1lbnQoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBpZiAodGhpcy5tb2RlbC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmZpZWxkLmtleSkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldICE9IG51bGwgJiZcclxuICAgICAgICAodGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV0gYXMgVlhBdHRhY2htZW50RmlsZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYXR0YWNobWVudERpc2FibGVkKCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudG8uaGFzT3duUHJvcGVydHkoXCJhdHRhY2htZW50XCIpKSB7XHJcbiAgICAgIGlmICh0aGlzLnRvLmF0dGFjaG1lbnQuaGFzT3duUHJvcGVydHkoXCJsaW1pdFwiKSkge1xyXG4gICAgICAgIGxldCBsaW1pdCA9IHRoaXMudG8uYXR0YWNobWVudC5saW1pdDtcclxuICAgICAgICBpZiAobGltaXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgbGV0IGF0dGFjaG1lbnQ6IGFueSA9IHRoaXMuYXR0YWNobWVudDtcclxuICAgICAgICAgIGlmIChhdHRhY2htZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hdHRhY2htZW50Lmxlbmd0aCA+PSBsaW1pdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlKCl7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBpZih0aGlzLmZpZWxkW1wiYWN0aXZlXCJdIT11bmRlZmluZWQgJiYgdGhpcy5maWVsZFtcImFjdGl2ZVwiXSE9bnVsbCAmJiB0aGlzLmZpZWxkW1wiYWN0aXZlXCJdPT10cnVlKXtcclxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcm93bnVtYmVyKCl7XHJcbiAgICBsZXQgcmVzdWx0ID0wO1xyXG4gICAgaWYodGhpcy5maWVsZFtcImFjdGl2ZVwiXSE9dW5kZWZpbmVkICYmIHRoaXMuZmllbGRbXCJhY3RpdmVcIl0hPW51bGwpe1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmZpZWxkLnJvd251bWJlcjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmllbGQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIl19