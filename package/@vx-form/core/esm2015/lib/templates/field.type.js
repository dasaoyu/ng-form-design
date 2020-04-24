/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from "@angular/core";
/**
 * @abstract
 * @template F
 */
export class FieldType {
    /**
     * @return {?}
     */
    get model() {
        return this.field.model;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    set model(m) { }
    /**
     * @return {?}
     */
    get form() {
        return (/** @type {?} */ (this.field.parent.formControl));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) { }
    /**
     * @return {?}
     */
    get options() {
        return this.field.options;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) { }
    /**
     * @return {?}
     */
    get key() {
        return this.field.key;
    }
    /**
     * @return {?}
     */
    get formControl() {
        return this.field.formControl;
    }
    /**
     * @return {?}
     */
    get to() {
        return this.field.templateOptions || {};
    }
    /**
     * @return {?}
     */
    get showError() {
        return this.options.showError(this);
    }
    /**
     * @return {?}
     */
    get id() {
        return this.field.id;
    }
    /**
     * @return {?}
     */
    get formState() {
        return this.options.formState || {};
    }
    /**
     * @return {?}
     */
    get formStatus() {
        return this.field.status || 0;
    }
    /**
     * @return {?}
     */
    get editor() {
        if (this.field.hasOwnProperty("editor")) {
            return this.field.editor;
        }
        return true;
    }
    /**
     * @return {?}
     */
    get text() {
        if (this.model.hasOwnProperty(this.field.key)) {
            return this.model[this.field.key];
        }
        return "";
    }
    /**
     * @return {?}
     */
    get placeHolder() {
        if (this.to != undefined &&
            this.to != null &&
            this.to.placeholder != undefined &&
            this.to.placeholder != null) {
            return this.to.placeholder;
        }
        return "";
    }
    /**
     * @return {?}
     */
    get textSingle() {
        /** @type {?} */
        let result = "";
        if (this.model.hasOwnProperty(this.field.key)) {
            /** @type {?} */
            let value = this.model[this.field.key];
            if (value != null && value != "") {
                if (this.field.templateOptions &&
                    this.field.templateOptions.options &&
                    this.field.templateOptions.options != null) {
                    this.field.templateOptions.options.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        if (item.value == value) {
                            result = item.label;
                        }
                    }));
                }
            }
        }
        return result;
    }
    /**
     * @return {?}
     */
    get textMultiple() {
        /** @type {?} */
        let result = [];
        if (this.model.hasOwnProperty(this.field.key)) {
            /** @type {?} */
            let values = this.model[this.field.key];
            if (values != null && values instanceof Array) {
                if (this.field.templateOptions &&
                    this.field.templateOptions.options &&
                    this.field.templateOptions.options != null) {
                    values.forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    (element) => {
                        this.to.options.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        (item) => {
                            if (item.value === element) {
                                result.push(item.label);
                            }
                        }));
                    }));
                }
            }
        }
        return result.join("、");
    }
    /**
     * @return {?}
     */
    get textLookUp() {
        /** @type {?} */
        let result = [];
        if (this.model.hasOwnProperty(this.key)) {
            if (this.model[this.key] != undefined && this.model[this.key] != null) {
                result = this.model[this.key].map((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    return item.label;
                }));
            }
        }
        return result.join("、");
    }
    /**
     * @return {?}
     */
    get tips() {
        if (this.to != undefined &&
            this.to != null &&
            this.to.tips != undefined &&
            this.to.tips != null) {
            return this.to.tips;
        }
        return "";
    }
    /**
     * @return {?}
     */
    get attachment() {
        /** @type {?} */
        let result = [];
        if (this.model.hasOwnProperty(this.field.key)) {
            if (this.model[this.field.key] != null &&
                ((/** @type {?} */ (this.model[this.field.key])))) {
                result = this.model[this.field.key];
            }
        }
        return result;
    }
    /**
     * @return {?}
     */
    get attachmentDisabled() {
        /** @type {?} */
        let result = false;
        if (this.to.hasOwnProperty("attachment")) {
            if (this.to.attachment.hasOwnProperty("limit")) {
                /** @type {?} */
                let limit = this.to.attachment.limit;
                if (limit != null) {
                    /** @type {?} */
                    let attachment = this.attachment;
                    if (attachment != null) {
                        result = this.attachment.length >= limit;
                    }
                }
            }
        }
        return result;
    }
    /**
     * @return {?}
     */
    get active() {
        /** @type {?} */
        let result = false;
        if (this.field["active"] != undefined && this.field["active"] != null && this.field["active"] == true) {
            result = true;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get rownumber() {
        /** @type {?} */
        let result = 0;
        if (this.field["active"] != undefined && this.field["active"] != null) {
            result = this.field.rownumber;
        }
        return result;
    }
}
FieldType.propDecorators = {
    field: [{ type: Input }],
    model: [{ type: Input }],
    form: [{ type: Input }],
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FieldType.prototype.field;
    /** @type {?} */
    FieldType.prototype.defaultOptions;
}
/**
 * @abstract
 */
export class Field extends FieldType {
    constructor() {
        super();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2ZpZWxkLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3RDLE1BQU0sT0FBZ0IsU0FBUzs7OztJQU03QixJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBTSxJQUFHLENBQUM7Ozs7SUFFcEIsSUFDSSxJQUFJO1FBQ04sT0FBTyxtQkFBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUEsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUNELElBQUksSUFBSSxDQUFDLElBQUksSUFBRyxDQUFDOzs7O0lBRWpCLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFxQixJQUFHLENBQUM7Ozs7SUFFckMsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUss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WUFDSixNQUFNLEdBQUcsS0FBSztRQUNsQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUUsSUFBSSxFQUFDO1lBQzdGLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7O1lBQ1AsTUFBTSxHQUFFLENBQUM7UUFDYixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUUsSUFBSSxFQUFDO1lBQy9ELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUMvQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztvQkExTEEsS0FBSztvQkFHTCxLQUFLO21CQU1MLEtBQUs7c0JBTUwsS0FBSzs7OztJQWZOLDBCQUFrQjs7SUFDbEIsbUNBQW1COzs7OztBQTRMckIsTUFBTSxPQUFnQixLQUFNLFNBQVEsU0FBUztJQUMzQztRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWEF0dGFjaG1lbnRGaWxlXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkVHlwZTxcclxuICBGIGV4dGVuZHMgVlhGb3JtRmllbGRDb25maWcgPSBWWEZvcm1GaWVsZENvbmZpZ1xyXG4+IHtcclxuICBASW5wdXQoKSBmaWVsZDogRjtcclxuICBkZWZhdWx0T3B0aW9ucz86IEY7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1vZGVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQubW9kZWw7XHJcbiAgfVxyXG4gIHNldCBtb2RlbChtOiBhbnkpIHt9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGZvcm0oKSB7XHJcbiAgICByZXR1cm4gPEZvcm1Hcm91cD50aGlzLmZpZWxkLnBhcmVudC5mb3JtQ29udHJvbDtcclxuICB9XHJcbiAgc2V0IGZvcm0oZm9ybSkge31cclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgb3B0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLm9wdGlvbnM7XHJcbiAgfVxyXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IEZbXCJvcHRpb25zXCJdKSB7fVxyXG5cclxuICBnZXQga2V5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQua2V5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1Db250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZm9ybUNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBnZXQgdG8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMgfHwge307XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0Vycm9yKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG93RXJyb3IodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1TdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybVN0YXRlIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcm1TdGF0dXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5zdGF0dXMgfHwgMDtcclxuICB9XHJcblxyXG4gIGdldCBlZGl0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5oYXNPd25Qcm9wZXJ0eShcImVkaXRvclwiKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZC5lZGl0b3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgaWYgKHRoaXMubW9kZWwuaGFzT3duUHJvcGVydHkodGhpcy5maWVsZC5rZXkpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnRvICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICB0aGlzLnRvICE9IG51bGwgJiZcclxuICAgICAgdGhpcy50by5wbGFjZWhvbGRlciAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy50by5wbGFjZWhvbGRlciAhPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG8ucGxhY2Vob2xkZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0U2luZ2xlKCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5tb2RlbC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmZpZWxkLmtleSkpIHtcclxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV07XHJcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucyAmJlxyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyAmJlxyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyAhPSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucy5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW0ubGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0TXVsdGlwbGUoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBpZiAodGhpcy5tb2RlbC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmZpZWxkLmtleSkpIHtcclxuICAgICAgbGV0IHZhbHVlcyA9IHRoaXMubW9kZWxbdGhpcy5maWVsZC5rZXldO1xyXG4gICAgICBpZiAodmFsdWVzICE9IG51bGwgJiYgdmFsdWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnRlbXBsYXRlT3B0aW9ucyAmJlxyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyAmJlxyXG4gICAgICAgICAgdGhpcy5maWVsZC50ZW1wbGF0ZU9wdGlvbnMub3B0aW9ucyAhPSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG8ub3B0aW9ucy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS5sYWJlbCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKFwi44CBXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRMb29rVXAoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBpZiAodGhpcy5tb2RlbC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmtleSkpIHtcclxuICAgICAgaWYgKHRoaXMubW9kZWxbdGhpcy5rZXldICE9IHVuZGVmaW5lZCAmJiB0aGlzLm1vZGVsW3RoaXMua2V5XSAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbFt0aGlzLmtleV0ubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCLjgIFcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdGlwcygpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy50byAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy50byAhPSBudWxsICYmXHJcbiAgICAgIHRoaXMudG8udGlwcyAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgdGhpcy50by50aXBzICE9IG51bGxcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdGhpcy50by50aXBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICBnZXQgYXR0YWNobWVudCgpIHtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGlmICh0aGlzLm1vZGVsLmhhc093blByb3BlcnR5KHRoaXMuZmllbGQua2V5KSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5tb2RlbFt0aGlzLmZpZWxkLmtleV0gIT0gbnVsbCAmJlxyXG4gICAgICAgICh0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XSBhcyBWWEF0dGFjaG1lbnRGaWxlKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsW3RoaXMuZmllbGQua2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldCBhdHRhY2htZW50RGlzYWJsZWQoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy50by5oYXNPd25Qcm9wZXJ0eShcImF0dGFjaG1lbnRcIikpIHtcclxuICAgICAgaWYgKHRoaXMudG8uYXR0YWNobWVudC5oYXNPd25Qcm9wZXJ0eShcImxpbWl0XCIpKSB7XHJcbiAgICAgICAgbGV0IGxpbWl0ID0gdGhpcy50by5hdHRhY2htZW50LmxpbWl0O1xyXG4gICAgICAgIGlmIChsaW1pdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBsZXQgYXR0YWNobWVudDogYW55ID0gdGhpcy5hdHRhY2htZW50O1xyXG4gICAgICAgICAgaWYgKGF0dGFjaG1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmF0dGFjaG1lbnQubGVuZ3RoID49IGxpbWl0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldCBhY3RpdmUoKXtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIGlmKHRoaXMuZmllbGRbXCJhY3RpdmVcIl0hPXVuZGVmaW5lZCAmJiB0aGlzLmZpZWxkW1wiYWN0aXZlXCJdIT1udWxsICYmIHRoaXMuZmllbGRbXCJhY3RpdmVcIl09PXRydWUpe1xyXG4gICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldCByb3dudW1iZXIoKXtcclxuICAgIGxldCByZXN1bHQgPTA7XHJcbiAgICBpZih0aGlzLmZpZWxkW1wiYWN0aXZlXCJdIT11bmRlZmluZWQgJiYgdGhpcy5maWVsZFtcImFjdGl2ZVwiXSE9bnVsbCl7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuZmllbGQucm93bnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWVsZCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxufVxyXG4iXX0=