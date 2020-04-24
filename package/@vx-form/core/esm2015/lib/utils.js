/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    let type = field.type;
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
        const key = field.key.indexOf("[") === -1
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
export const VXFORM_VALIDATORS = [
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
    for (let i = 0; i < paths.length - 1; i++) {
        /** @type {?} */
        const path = paths[i];
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
    /** @type {?} */
    let model = field.parent.model;
    for (const path of getKeyPath(field)) {
        if (!model) {
            return model;
        }
        model = model[path];
    }
    return model;
}
/**
 * @param {?} dest
 * @param {...?} args
 * @return {?}
 */
export function reverseDeepMerge(dest, ...args) {
    args.forEach((/**
     * @param {?} src
     * @return {?}
     */
    src => {
        for (let srcArg in src) {
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
        v => clone(v)));
    }
    /** @type {?} */
    const proto = Object.getPrototypeOf(value);
    /** @type {?} */
    let c = Object.create(proto);
    c = Object.setPrototypeOf(c, proto);
    return Object.keys(value).reduce((/**
     * @param {?} newVal
     * @param {?} prop
     * @return {?}
     */
    (newVal, prop) => {
        /** @type {?} */
        const propDesc = Object.getOwnPropertyDescriptor(value, prop);
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
    defineHiddenProp(field, `___$${prop}`, field[prop]);
    setFn({ currentValue: field[prop], firstChange: true });
    Object.defineProperty(field, prop, {
        configurable: true,
        get: (/**
         * @return {?}
         */
        () => field[`___$${prop}`]),
        set: (/**
         * @param {?} currentValue
         * @return {?}
         */
        currentValue => {
            if (currentValue !== field[`___$${prop}`]) {
                /** @type {?} */
                const previousValue = field[`___$${prop}`];
                field[`___$${prop}`] = currentValue;
                setFn({ previousValue, currentValue, firstChange: false });
            }
        })
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdngtZm9ybS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUdqRCxNQUFNLFVBQVUsVUFBVSxDQUN4QixNQUFjLEVBQ2QsS0FBd0IsRUFDeEIsS0FBc0I7SUFFdEIsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQzs7UUFDMUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJO0lBQ3JCLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVE7UUFBRSxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUE2QjtJQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFOztjQUNqRCxHQUFHLEdBQ1AsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztZQUNYLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBRTVDLEtBQUssQ0FBQyxRQUFRLEdBQUc7WUFDZixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDdkQsQ0FBQztLQUNIO0lBRUQsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8saUJBQWlCLEdBQUc7SUFDL0IsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLEtBQUs7SUFDTCxLQUFLO0NBQ047Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLEtBQWUsRUFBRSxLQUFVO0lBQ3RFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDbkMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ3BEO1FBRUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQjtJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBd0I7O1FBQ2hELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFDOUIsS0FBSyxNQUFNLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBUyxFQUFFLEdBQUcsSUFBVztJQUN4RCxJQUFJLENBQUMsT0FBTzs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ3RCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO2dCQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ25DO2lCQUFNLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtnQkFDcEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBVTtJQUMxQyxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUMvQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVTtJQUNwQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDN0IsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQVU7SUFDdEMsT0FBTyxLQUFLLEtBQUssRUFBRSxDQUFDO0FBQ3RCLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFVO0lBQ25DLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3JDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDakQsT0FBTyxDQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUMzRCxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzlDLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsQ0FBTTtJQUM3QixPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQzVDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFRO0lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ2pELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFVO0lBQzlCLElBQ0UsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ2hCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkIsS0FBSyxDQUFDLHFDQUFxQztRQUMzQyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwRSxDQUFDLENBQUMsRUFDSjtRQUNBLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JELE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3RCO0lBRUQsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDekIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNsQztJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7S0FDMUM7O1VBRUssS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDOztRQUN0QyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNOzs7OztJQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFOztjQUMxQyxRQUFRLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7UUFDN0QsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLElBQVksRUFBRSxZQUFpQjtJQUMxRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDakMsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUk7UUFDZCxZQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO0FBQzdCLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsS0FBVSxFQUNWLElBQVksRUFDWixLQUlVO0lBRVYsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEQsS0FBSyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUV4RCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDakMsWUFBWSxFQUFFLElBQUk7UUFDbEIsR0FBRzs7O1FBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMvQixHQUFHOzs7O1FBQUUsWUFBWSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxZQUFZLEtBQUssS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRTs7c0JBQ25DLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDMUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDLENBQUE7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVlhGb3JtRmllbGRDb25maWcgfSBmcm9tIFwiLi9jb3JlXCI7XHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlIH0gZnJvbSBcIi4vY29tcG9uZW50cy92eGZvcm0uZmllbGQuY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRJZChcclxuICBmb3JtSWQ6IHN0cmluZyxcclxuICBmaWVsZDogVlhGb3JtRmllbGRDb25maWcsXHJcbiAgaW5kZXg6IHN0cmluZyB8IG51bWJlclxyXG4pIHtcclxuICBpZiAoZmllbGQuaWQpIHJldHVybiBmaWVsZC5pZDtcclxuICBsZXQgdHlwZSA9IGZpZWxkLnR5cGU7XHJcbiAgaWYgKCF0eXBlICYmIGZpZWxkLnRlbXBsYXRlKSB0eXBlID0gXCJ0ZW1wbGF0ZVwiO1xyXG4gIHJldHVybiBbZm9ybUlkLCB0eXBlLCBmaWVsZC5rZXksIGluZGV4XS5qb2luKFwiX1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleVBhdGgoZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnQ2FjaGUpOiBzdHJpbmdbXSB7XHJcbiAgaWYgKCFmaWVsZC5rZXkpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGlmICghZmllbGQuX2tleVBhdGggfHwgZmllbGQuX2tleVBhdGgua2V5ICE9PSBmaWVsZC5rZXkpIHtcclxuICAgIGNvbnN0IGtleSA9XHJcbiAgICAgIGZpZWxkLmtleS5pbmRleE9mKFwiW1wiKSA9PT0gLTFcclxuICAgICAgICA/IGZpZWxkLmtleVxyXG4gICAgICAgIDogZmllbGQua2V5LnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCBcIi4kMVwiKTtcclxuXHJcbiAgICBmaWVsZC5fa2V5UGF0aCA9IHtcclxuICAgICAga2V5OiBmaWVsZC5rZXksXHJcbiAgICAgIHBhdGg6IGtleS5pbmRleE9mKFwiLlwiKSAhPT0gLTEgPyBrZXkuc3BsaXQoXCIuXCIpIDogW2tleV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmllbGQuX2tleVBhdGgucGF0aC5zbGljZSgwKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZYRk9STV9WQUxJREFUT1JTID0gW1xyXG4gIFwicmVxdWlyZWRcIixcclxuICBcInBhdHRlcm5cIixcclxuICBcIm1pbkxlbmd0aFwiLFxyXG4gIFwibWF4TGVuZ3RoXCIsXHJcbiAgXCJtaW5cIixcclxuICBcIm1heFwiXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduTW9kZWxWYWx1ZShtb2RlbDogYW55LCBwYXRoczogc3RyaW5nW10sIHZhbHVlOiBhbnkpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgaWYgKCFtb2RlbFtwYXRoXSB8fCAhaXNPYmplY3QobW9kZWxbcGF0aF0pKSB7XHJcbiAgICAgIG1vZGVsW3BhdGhdID0gL15cXGQrJC8udGVzdChwYXRoc1tpICsgMV0pID8gW10gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBtb2RlbCA9IG1vZGVsW3BhdGhdO1xyXG4gIH1cclxuXHJcbiAgbW9kZWxbcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV1dID0gY2xvbmUodmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZShmaWVsZDogVlhGb3JtRmllbGRDb25maWcpOiBhbnkge1xyXG4gIGxldCBtb2RlbCA9IGZpZWxkLnBhcmVudC5tb2RlbDtcclxuICBmb3IgKGNvbnN0IHBhdGggb2YgZ2V0S2V5UGF0aChmaWVsZCkpIHtcclxuICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfVxyXG4gICAgbW9kZWwgPSBtb2RlbFtwYXRoXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VEZWVwTWVyZ2UoZGVzdDogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gIGFyZ3MuZm9yRWFjaChzcmMgPT4ge1xyXG4gICAgZm9yIChsZXQgc3JjQXJnIGluIHNyYykge1xyXG4gICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoZGVzdFtzcmNBcmddKSB8fCBpc0JsYW5rU3RyaW5nKGRlc3Rbc3JjQXJnXSkpIHtcclxuICAgICAgICBkZXN0W3NyY0FyZ10gPSBjbG9uZShzcmNbc3JjQXJnXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqQW5kU2FtZVR5cGUoZGVzdFtzcmNBcmddLCBzcmNbc3JjQXJnXSkpIHtcclxuICAgICAgICByZXZlcnNlRGVlcE1lcmdlKGRlc3Rbc3JjQXJnXSwgc3JjW3NyY0FyZ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGRlc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZTogYW55KSB7XHJcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KSB7XHJcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rU3RyaW5nKHZhbHVlOiBhbnkpIHtcclxuICByZXR1cm4gdmFsdWUgPT09IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmpBbmRTYW1lVHlwZShvYmoxOiBhbnksIG9iajI6IGFueSkge1xyXG4gIHJldHVybiAoXHJcbiAgICBpc09iamVjdChvYmoxKSAmJlxyXG4gICAgaXNPYmplY3Qob2JqMikgJiZcclxuICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iajIpICYmXHJcbiAgICAhKEFycmF5LmlzQXJyYXkob2JqMSkgfHwgQXJyYXkuaXNBcnJheShvYmoyKSlcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoeDogYW55KSB7XHJcbiAgcmV0dXJuIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZShvYmo6IGFueSk6IG9iaiBpcyBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gIGlmIChcclxuICAgICFpc09iamVjdCh2YWx1ZSkgfHxcclxuICAgIGlzT2JzZXJ2YWJsZSh2YWx1ZSkgfHxcclxuICAgIHZhbHVlLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHkgfHxcclxuICAgIFtcIlJlZ0V4cFwiLCBcIkZpbGVMaXN0XCIsIFwiRmlsZVwiLCBcIkJsb2JcIl0uaW5kZXhPZih2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSAhPT1cclxuICAgICAgLTFcclxuICApIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZS5faXNBTW9tZW50T2JqZWN0ICYmIGlzRnVuY3Rpb24odmFsdWUuY2xvbmUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUuY2xvbmUoKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpKTtcclxuICB9XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDApLm1hcCh2ID0+IGNsb25lKHYpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxuICBsZXQgYyA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xyXG4gIGMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YoYywgcHJvdG8pO1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkucmVkdWNlKChuZXdWYWwsIHByb3ApID0+IHtcclxuICAgIGNvbnN0IHByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwgcHJvcCk7XHJcbiAgICBpZiAocHJvcERlc2MuZ2V0KSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdWYWwsIHByb3AsIHByb3BEZXNjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1ZhbFtwcm9wXSA9IGNsb25lKHZhbHVlW3Byb3BdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3VmFsO1xyXG4gIH0sIGMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lSGlkZGVuUHJvcChmaWVsZDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSB7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCBwcm9wLCB7XHJcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgfSk7XHJcbiAgZmllbGRbcHJvcF0gPSBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvcGVydHk8VCA9IGFueT4oXHJcbiAgZmllbGQ6IGFueSxcclxuICBwcm9wOiBzdHJpbmcsXHJcbiAgc2V0Rm46IChjaGFuZ2U6IHtcclxuICAgIGN1cnJlbnRWYWx1ZTogVDtcclxuICAgIHByZXZpb3VzVmFsdWU/OiBUO1xyXG4gICAgZmlyc3RDaGFuZ2U6IGJvb2xlYW47XHJcbiAgfSkgPT4gdm9pZFxyXG4pIHtcclxuICBkZWZpbmVIaWRkZW5Qcm9wKGZpZWxkLCBgX19fJCR7cHJvcH1gLCBmaWVsZFtwcm9wXSk7XHJcbiAgc2V0Rm4oeyBjdXJyZW50VmFsdWU6IGZpZWxkW3Byb3BdLCBmaXJzdENoYW5nZTogdHJ1ZSB9KTtcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCBwcm9wLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6ICgpID0+IGZpZWxkW2BfX18kJHtwcm9wfWBdLFxyXG4gICAgc2V0OiBjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSBmaWVsZFtgX19fJCR7cHJvcH1gXSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBmaWVsZFtgX19fJCR7cHJvcH1gXTtcclxuICAgICAgICBmaWVsZFtgX19fJCR7cHJvcH1gXSA9IGN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBzZXRGbih7IHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2U6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl19