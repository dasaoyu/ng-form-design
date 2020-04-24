/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isObservable } from "rxjs";
import { AbstractControl } from "@angular/forms";
/**
 * @param {?} formId
 * @param {?} field
 * @param {?} index
 * @return {?}
 */
export function getFieldId(formId, field, index) {
    if (field.id)
        return field.id;
    /** @type {?} */
    var type = field.type;
    if (!type && field.template)
        type = "template";
    return [formId, type, field.key, index].join("_");
}
/**
 * @param {?} field
 * @return {?}
 */
export function getKeyPath(field) {
    if (!field.key) {
        return [];
    }
    if (!field._keyPath || field._keyPath.key !== field.key) {
        /** @type {?} */
        var key = field.key.indexOf("[") === -1
            ? field.key
            : field.key.replace(/\[(\w+)\]/g, ".$1");
        field._keyPath = {
            key: field.key,
            path: key.indexOf(".") !== -1 ? key.split(".") : [key]
        };
    }
    return field._keyPath.path.slice(0);
}
/** @type {?} */
export var VXFORM_VALIDATORS = [
    "required",
    "pattern",
    "minLength",
    "maxLength",
    "min",
    "max"
];
/**
 * @param {?} model
 * @param {?} paths
 * @param {?} value
 * @return {?}
 */
export function assignModelValue(model, paths, value) {
    for (var i = 0; i < paths.length - 1; i++) {
        /** @type {?} */
        var path = paths[i];
        if (!model[path] || !isObject(model[path])) {
            model[path] = /^\d+$/.test(paths[i + 1]) ? [] : {};
        }
        model = model[path];
    }
    model[paths[paths.length - 1]] = clone(value);
}
/**
 * @param {?} field
 * @return {?}
 */
export function getFieldValue(field) {
    var e_1, _a;
    /** @type {?} */
    var model = field.parent.model;
    try {
        for (var _b = tslib_1.__values(getKeyPath(field)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var path = _c.value;
            if (!model) {
                return model;
            }
            model = model[path];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return model;
}
/**
 * @param {?} dest
 * @param {...?} args
 * @return {?}
 */
export function reverseDeepMerge(dest) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args.forEach((/**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        for (var srcArg in src) {
            if (isNullOrUndefined(dest[srcArg]) || isBlankString(dest[srcArg])) {
                dest[srcArg] = clone(src[srcArg]);
            }
            else if (objAndSameType(dest[srcArg], src[srcArg])) {
                reverseDeepMerge(dest[srcArg], src[srcArg]);
            }
        }
    }));
    return dest;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isUndefined(value) {
    return value === undefined;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isBlankString(value) {
    return value === "";
}
/**
 * @param {?} value
 * @return {?}
 */
export function isFunction(value) {
    return typeof value === "function";
}
/**
 * @param {?} obj1
 * @param {?} obj2
 * @return {?}
 */
export function objAndSameType(obj1, obj2) {
    return (isObject(obj1) &&
        isObject(obj2) &&
        Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2) &&
        !(Array.isArray(obj1) || Array.isArray(obj2)));
}
/**
 * @param {?} x
 * @return {?}
 */
export function isObject(x) {
    return x != null && typeof x === "object";
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isPromise(obj) {
    return !!obj && typeof obj.then === "function";
}
/**
 * @param {?} value
 * @return {?}
 */
export function clone(value) {
    if (!isObject(value) ||
        isObservable(value) ||
        value.changingThisBreaksApplicationSecurity ||
        ["RegExp", "FileList", "File", "Blob"].indexOf(value.constructor.name) !==
            -1) {
        return value;
    }
    if (value._isAMomentObject && isFunction(value.clone)) {
        return value.clone();
    }
    if (value instanceof AbstractControl) {
        return null;
    }
    if (value instanceof Date) {
        return new Date(value.getTime());
    }
    if (Array.isArray(value)) {
        return value.slice(0).map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return clone(v); }));
    }
    /** @type {?} */
    var proto = Object.getPrototypeOf(value);
    /** @type {?} */
    var c = Object.create(proto);
    c = Object.setPrototypeOf(c, proto);
    return Object.keys(value).reduce((/**
     * @param {?} newVal
     * @param {?} prop
     * @return {?}
     */
    function (newVal, prop) {
        /** @type {?} */
        var propDesc = Object.getOwnPropertyDescriptor(value, prop);
        if (propDesc.get) {
            Object.defineProperty(newVal, prop, propDesc);
        }
        else {
            newVal[prop] = clone(value[prop]);
        }
        return newVal;
    }), c);
}
/**
 * @param {?} field
 * @param {?} prop
 * @param {?} defaultValue
 * @return {?}
 */
export function defineHiddenProp(field, prop, defaultValue) {
    Object.defineProperty(field, prop, {
        enumerable: false,
        writable: true,
        configurable: true
    });
    field[prop] = defaultValue;
}
/**
 * @template T
 * @param {?} field
 * @param {?} prop
 * @param {?} setFn
 * @return {?}
 */
export function wrapProperty(field, prop, setFn) {
    defineHiddenProp(field, "___$" + prop, field[prop]);
    setFn({ currentValue: field[prop], firstChange: true });
    Object.defineProperty(field, prop, {
        configurable: true,
        get: (/**
         * @return {?}
         */
        function () { return field["___$" + prop]; }),
        set: (/**
         * @param {?} currentValue
         * @return {?}
         */
        function (currentValue) {
            if (currentValue !== field["___$" + prop]) {
                /** @type {?} */
                var previousValue = field["___$" + prop];
                field["___$" + prop] = currentValue;
                setFn({ previousValue: previousValue, currentValue: currentValue, firstChange: false });
            }
        })
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFHakQsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsTUFBYyxFQUNkLEtBQXdCLEVBQ3hCLEtBQXNCO0lBRXRCLElBQUksS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7O1FBQzFCLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTtJQUNyQixJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRO1FBQUUsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUMvQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBNkI7SUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRTs7WUFDakQsR0FBRyxHQUNQLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztRQUU1QyxLQUFLLENBQUMsUUFBUSxHQUFH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SUFBTSxDQUFDO2dCQUMxQyxLQUFLLENBQUMsU0FBTyxJQUFNLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzVEO1FBQ0gsQ0FBQyxDQUFBO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZYRm9ybUZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgeyBpc09ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWdDYWNoZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkSWQoXHJcbiAgZm9ybUlkOiBzdHJpbmcsXHJcbiAgZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnLFxyXG4gIGluZGV4OiBzdHJpbmcgfCBudW1iZXJcclxuKSB7XHJcbiAgaWYgKGZpZWxkLmlkKSByZXR1cm4gZmllbGQuaWQ7XHJcbiAgbGV0IHR5cGUgPSBmaWVsZC50eXBlO1xyXG4gIGlmICghdHlwZSAmJiBmaWVsZC50ZW1wbGF0ZSkgdHlwZSA9IFwidGVtcGxhdGVcIjtcclxuICByZXR1cm4gW2Zvcm1JZCwgdHlwZSwgZmllbGQua2V5LCBpbmRleF0uam9pbihcIl9cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlQYXRoKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlKTogc3RyaW5nW10ge1xyXG4gIGlmICghZmllbGQua2V5KSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBpZiAoIWZpZWxkLl9rZXlQYXRoIHx8IGZpZWxkLl9rZXlQYXRoLmtleSAhPT0gZmllbGQua2V5KSB7XHJcbiAgICBjb25zdCBrZXkgPVxyXG4gICAgICBmaWVsZC5rZXkuaW5kZXhPZihcIltcIikgPT09IC0xXHJcbiAgICAgICAgPyBmaWVsZC5rZXlcclxuICAgICAgICA6IGZpZWxkLmtleS5yZXBsYWNlKC9cXFsoXFx3KylcXF0vZywgXCIuJDFcIik7XHJcblxyXG4gICAgZmllbGQuX2tleVBhdGggPSB7XHJcbiAgICAgIGtleTogZmllbGQua2V5LFxyXG4gICAgICBwYXRoOiBrZXkuaW5kZXhPZihcIi5cIikgIT09IC0xID8ga2V5LnNwbGl0KFwiLlwiKSA6IFtrZXldXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpZWxkLl9rZXlQYXRoLnBhdGguc2xpY2UoMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWWEZPUk1fVkFMSURBVE9SUyA9IFtcclxuICBcInJlcXVpcmVkXCIsXHJcbiAgXCJwYXR0ZXJuXCIsXHJcbiAgXCJtaW5MZW5ndGhcIixcclxuICBcIm1heExlbmd0aFwiLFxyXG4gIFwibWluXCIsXHJcbiAgXCJtYXhcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbk1vZGVsVmFsdWUobW9kZWw6IGFueSwgcGF0aHM6IHN0cmluZ1tdLCB2YWx1ZTogYW55KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIGNvbnN0IHBhdGggPSBwYXRoc1tpXTtcclxuICAgIGlmICghbW9kZWxbcGF0aF0gfHwgIWlzT2JqZWN0KG1vZGVsW3BhdGhdKSkge1xyXG4gICAgICBtb2RlbFtwYXRoXSA9IC9eXFxkKyQvLnRlc3QocGF0aHNbaSArIDFdKSA/IFtdIDoge307XHJcbiAgICB9XHJcblxyXG4gICAgbW9kZWwgPSBtb2RlbFtwYXRoXTtcclxuICB9XHJcblxyXG4gIG1vZGVsW3BhdGhzW3BhdGhzLmxlbmd0aCAtIDFdXSA9IGNsb25lKHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKTogYW55IHtcclxuICBsZXQgbW9kZWwgPSBmaWVsZC5wYXJlbnQubW9kZWw7XHJcbiAgZm9yIChjb25zdCBwYXRoIG9mIGdldEtleVBhdGgoZmllbGQpKSB7XHJcbiAgICBpZiAoIW1vZGVsKSB7XHJcbiAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuICAgIG1vZGVsID0gbW9kZWxbcGF0aF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRGVlcE1lcmdlKGRlc3Q6IGFueSwgLi4uYXJnczogYW55W10pIHtcclxuICBhcmdzLmZvckVhY2goc3JjID0+IHtcclxuICAgIGZvciAobGV0IHNyY0FyZyBpbiBzcmMpIHtcclxuICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGRlc3Rbc3JjQXJnXSkgfHwgaXNCbGFua1N0cmluZyhkZXN0W3NyY0FyZ10pKSB7XHJcbiAgICAgICAgZGVzdFtzcmNBcmddID0gY2xvbmUoc3JjW3NyY0FyZ10pO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iakFuZFNhbWVUeXBlKGRlc3Rbc3JjQXJnXSwgc3JjW3NyY0FyZ10pKSB7XHJcbiAgICAgICAgcmV2ZXJzZURlZXBNZXJnZShkZXN0W3NyY0FyZ10sIHNyY1tzcmNBcmddKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBkZXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWU6IGFueSkge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFua1N0cmluZyh2YWx1ZTogYW55KSB7XHJcbiAgcmV0dXJuIHZhbHVlID09PSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JqQW5kU2FtZVR5cGUob2JqMTogYW55LCBvYmoyOiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgaXNPYmplY3Qob2JqMSkgJiZcclxuICAgIGlzT2JqZWN0KG9iajIpICYmXHJcbiAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmoyKSAmJlxyXG4gICAgIShBcnJheS5pc0FycmF5KG9iajEpIHx8IEFycmF5LmlzQXJyYXkob2JqMikpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHg6IGFueSkge1xyXG4gIHJldHVybiB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09IFwib2JqZWN0XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2Uob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gISFvYmogJiYgdHlwZW9mIG9iai50aGVuID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWx1ZTogYW55KTogYW55IHtcclxuICBpZiAoXHJcbiAgICAhaXNPYmplY3QodmFsdWUpIHx8XHJcbiAgICBpc09ic2VydmFibGUodmFsdWUpIHx8XHJcbiAgICB2YWx1ZS5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5IHx8XHJcbiAgICBbXCJSZWdFeHBcIiwgXCJGaWxlTGlzdFwiLCBcIkZpbGVcIiwgXCJCbG9iXCJdLmluZGV4T2YodmFsdWUuY29uc3RydWN0b3IubmFtZSkgIT09XHJcbiAgICAgIC0xXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUuX2lzQU1vbWVudE9iamVjdCAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNsb25lKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLmNsb25lKCk7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBYnN0cmFjdENvbnRyb2wpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS5zbGljZSgwKS5tYXAodiA9PiBjbG9uZSh2KSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbiAgbGV0IGMgPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcclxuICBjID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKGMsIHByb3RvKTtcclxuICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZSgobmV3VmFsLCBwcm9wKSA9PiB7XHJcbiAgICBjb25zdCBwcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIHByb3ApO1xyXG4gICAgaWYgKHByb3BEZXNjLmdldCkge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3VmFsLCBwcm9wLCBwcm9wRGVzYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdWYWxbcHJvcF0gPSBjbG9uZSh2YWx1ZVtwcm9wXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld1ZhbDtcclxuICB9LCBjKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUhpZGRlblByb3AoZmllbGQ6IGFueSwgcHJvcDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkge1xyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgcHJvcCwge1xyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gIH0pO1xyXG4gIGZpZWxkW3Byb3BdID0gZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFByb3BlcnR5PFQgPSBhbnk+KFxyXG4gIGZpZWxkOiBhbnksXHJcbiAgcHJvcDogc3RyaW5nLFxyXG4gIHNldEZuOiAoY2hhbmdlOiB7XHJcbiAgICBjdXJyZW50VmFsdWU6IFQ7XHJcbiAgICBwcmV2aW91c1ZhbHVlPzogVDtcclxuICAgIGZpcnN0Q2hhbmdlOiBib29sZWFuO1xyXG4gIH0pID0+IHZvaWRcclxuKSB7XHJcbiAgZGVmaW5lSGlkZGVuUHJvcChmaWVsZCwgYF9fXyQke3Byb3B9YCwgZmllbGRbcHJvcF0pO1xyXG4gIHNldEZuKHsgY3VycmVudFZhbHVlOiBmaWVsZFtwcm9wXSwgZmlyc3RDaGFuZ2U6IHRydWUgfSk7XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgcHJvcCwge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiAoKSA9PiBmaWVsZFtgX19fJCR7cHJvcH1gXSxcclxuICAgIHNldDogY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gZmllbGRbYF9fXyQke3Byb3B9YF0pIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gZmllbGRbYF9fXyQke3Byb3B9YF07XHJcbiAgICAgICAgZmllbGRbYF9fXyQke3Byb3B9YF0gPSBjdXJyZW50VmFsdWU7XHJcbiAgICAgICAgc2V0Rm4oeyBwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUsIGZpcnN0Q2hhbmdlOiBmYWxzZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==