import { debounceTime } from 'rxjs/operators';
import * as moment_ from 'moment';
import { DOCUMENT, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { isObservable, Subject, Observable } from 'rxjs';
import { AbstractControl, FormGroup, FormGroupDirective, FormArray, FormControl, Validators } from '@angular/forms';
import { Injectable, InjectionToken, NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, Inject, Optional, Component, Input, EventEmitter, Output, Attribute, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, Injector, Directive, Renderer2, ɵɵdefineInjectable, ɵɵinject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} formId
 * @param {?} field
 * @param {?} index
 * @return {?}
 */
function getFieldId(formId, field, index) {
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
function getKeyPath(field) {
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
const VXFORM_VALIDATORS = [
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
function assignModelValue(model, paths, value) {
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
function getFieldValue(field) {
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
function reverseDeepMerge(dest, ...args) {
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
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isUndefined(value) {
    return value === undefined;
}
/**
 * @param {?} value
 * @return {?}
 */
function isBlankString(value) {
    return value === "";
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === "function";
}
/**
 * @param {?} obj1
 * @param {?} obj2
 * @return {?}
 */
function objAndSameType(obj1, obj2) {
    return (isObject(obj1) &&
        isObject(obj2) &&
        Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2) &&
        !(Array.isArray(obj1) || Array.isArray(obj2)));
}
/**
 * @param {?} x
 * @return {?}
 */
function isObject(x) {
    return x != null && typeof x === "object";
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && typeof obj.then === "function";
}
/**
 * @param {?} value
 * @return {?}
 */
function clone(value) {
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
function defineHiddenProp(field, prop, defaultValue) {
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
function wrapProperty(field, prop, setFn) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VXFORM_CONFIG = new InjectionToken("VXFORM_CONFIG");
class VXFormConfig {
    constructor() {
        this.types = {};
        this.validators = {};
        this.wrappers = {};
        this.messages = {};
        this.templateManipulators = {
            preWrapper: [],
            postWrapper: []
        };
        this.extras = {
            checkExpressionOn: "changeDetectionCheck",
            showError: (/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                return (field.formControl &&
                    field.formControl.invalid &&
                    (field.formControl.touched ||
                        (field.options.parentForm && field.options.parentForm.submitted) ||
                        (field.field.validation && field.field.validation.show)));
            })
        };
        this.extensions = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    addConfig(config) {
        if (config.types) {
            config.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            type => this.setType(type)));
        }
        if (config.validators) {
            config.validators.forEach((/**
             * @param {?} validator
             * @return {?}
             */
            validator => this.setValidator(validator)));
        }
        if (config.wrappers) {
            config.wrappers.forEach((/**
             * @param {?} wrapper
             * @return {?}
             */
            wrapper => this.setWrapper(wrapper)));
        }
        if (config.manipulators) {
            config.manipulators.forEach((/**
             * @param {?} manipulator
             * @return {?}
             */
            manipulator => this.setManipulator(manipulator)));
        }
        if (config.validationMessages) {
            config.validationMessages.forEach((/**
             * @param {?} validation
             * @return {?}
             */
            validation => this.addValidatorMessage(validation.name, validation.message)));
        }
        if (config.extensions) {
            config.extensions.forEach((/**
             * @param {?} c
             * @return {?}
             */
            c => (this.extensions[c.name] = c.extension)));
        }
        if (config.extras) {
            this.extras = Object.assign({}, this.extras, config.extras);
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setType(options) {
        if (Array.isArray(options)) {
            options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => this.setType(option)));
        }
        else {
            if (!this.types[options.name]) {
                this.types[options.name] = (/** @type {?} */ ({ name: options.name }));
            }
            ["component", "extends", "defaultOptions"].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (options.hasOwnProperty(prop)) {
                    this.types[options.name][prop] = options[prop];
                }
            }));
            if (options.wrappers) {
                options.wrappers.forEach((/**
                 * @param {?} wrapper
                 * @return {?}
                 */
                wrapper => this.setTypeWrapper(options.name, wrapper)));
            }
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getType(name) {
        if (!this.types[name]) ;
        this.mergeExtendedType(name);
        return this.types[name];
    }
    /**
     * @param {?=} field
     * @return {?}
     */
    getMergedField(field = {}) {
        /** @type {?} */
        const type = this.getType(field.type);
        if (type.defaultOptions) {
            reverseDeepMerge(field, type.defaultOptions);
        }
        /** @type {?} */
        const extendDefaults = type.extends && this.getType(type.extends).defaultOptions;
        if (extendDefaults) {
            reverseDeepMerge(field, extendDefaults);
        }
        if (field && field.optionsTypes) {
            field.optionsTypes.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const defaultOptions = this.getType(option).defaultOptions;
                if (defaultOptions) {
                    reverseDeepMerge(field, defaultOptions);
                }
            }));
        }
        /** @type {?} */
        const componentRef = this.createComponent(field);
        if (componentRef &&
            componentRef.instance &&
            componentRef.instance.defaultOptions) {
            reverseDeepMerge(field, componentRef.instance.defaultOptions);
        }
        if (!field.wrappers && type.wrappers) {
            field.wrappers = [...type.wrappers];
        }
    }
    /**
     * @param {?=} field
     * @param {?=} resolver
     * @param {?=} injector
     * @return {?}
     */
    createComponent(field = {}, resolver, injector) {
        if (!field.type) {
            return;
        }
        /** @type {?} */
        const cf = field._componentFactory;
        if (cf &&
            field.type === cf.type &&
            cf.componentRef &&
            cf.componentRef.hostView &&
            !cf.componentRef.hostView.destroyed) {
            return field._componentFactory.componentRef;
        }
        /** @type {?} */
        const type = this.getType(field.type);
        if (!resolver) {
            resolver = field.parent.options._componentFactoryResolver;
        }
        if (!injector) {
            injector = this.getFieldInjector(field);
        }
        defineHiddenProp(field, "_componentFactory", {
            type: field.type,
            component: type.component,
            componentRef: resolver
                ? resolver.resolveComponentFactory(type.component).create(injector)
                : null
        });
        return field._componentFactory.componentRef;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setWrapper(options) {
        this.wrappers[options.name] = options;
        if (options.types) {
            options.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            type => {
                this.setTypeWrapper(type, options.name);
            }));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getWrapper(name) {
        if (!this.wrappers[name]) ;
        return this.wrappers[name];
    }
    /**
     * @param {?} type
     * @param {?} name
     * @return {?}
     */
    setTypeWrapper(type, name) {
        if (!this.types[type]) {
            this.types[type] = (/** @type {?} */ ({}));
        }
        if (!this.types[type].wrappers) {
            this.types[type].wrappers = [];
        }
        if (this.types[type].wrappers.indexOf(name) === -1) {
            this.types[type].wrappers.push(name);
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setValidator(options) {
        this.validators[options.name] = options;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getValidator(name) {
        if (!this.validators[name]) ;
        return this.validators[name];
    }
    /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    addValidatorMessage(name, message) {
        this.messages[name] = message;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getValidatorMessage(name) {
        return this.messages[name];
    }
    /**
     * @param {?} manipulator
     * @return {?}
     */
    setManipulator(manipulator) {
        new manipulator.class()[manipulator.method](this);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setAPPConfig(config) {
        this.appConfig = config;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    mergeExtendedType(name) {
        if (!this.types[name].extends) {
            return;
        }
        /** @type {?} */
        const extendedType = this.getType(this.types[name].extends);
        if (!this.types[name].component) {
            this.types[name].component = extendedType.component;
        }
        if (!this.types[name].wrappers) {
            this.types[name].wrappers = extendedType.wrappers;
        }
    }
    /**
     * @private
     * @param {?=} field
     * @return {?}
     */
    getFieldInjector(field = {}) {
        /** @type {?} */
        const parent = field.parent;
        if (parent._componentFactory && parent._componentFactory.componentRef) {
            return parent._componentFactory.componentRef.injector;
        }
        return parent.options._injector;
    }
}
VXFormConfig.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */ VXFormConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function VXFormConfig_Factory() { return new VXFormConfig(); }, token: VXFormConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormBuilder {
    /**
     * @param {?} vxFormConfig
     * @param {?} componentFactoryResolver
     * @param {?} injector
     */
    constructor(vxFormConfig, componentFactoryResolver, injector) {
        this.vxFormConfig = vxFormConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * @param {?} formControl
     * @param {?=} fieldGroup
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    buildForm(formControl, fieldGroup = [], model, options) {
        if (!this.vxFormConfig.extensions.core) ;
        this._buildForm({
            fieldGroup,
            model,
            formControl,
            options: this._setOptions(options)
        });
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    _buildForm(field) {
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.prePopulate && extension.prePopulate(field)));
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.onPopulate && extension.onPopulate(field)));
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this._buildForm(f)));
        }
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.postPopulate && extension.postPopulate(field)));
    }
    /**
     * @private
     * @return {?}
     */
    getExtensions() {
        return Object.keys(this.vxFormConfig.extensions).map((/**
         * @param {?} name
         * @return {?}
         */
        name => this.vxFormConfig.extensions[name]));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _setOptions(options) {
        options = options || {};
        options.formState = options.formState || {};
        if (!options.showError) {
            options.showError = this.vxFormConfig.extras.showError;
        }
        if (!options.fieldChanges) {
            defineHiddenProp(options, "fieldChanges", new Subject());
        }
        if (!options._componentFactoryResolver) {
            defineHiddenProp(options, "_componentFactoryResolver", this.componentFactoryResolver);
        }
        if (!options._injector) {
            defineHiddenProp(options, "_injector", this.injector);
        }
        if (!options._hiddenFieldsForCheck) {
            options._hiddenFieldsForCheck = [];
        }
        if (!options._markForCheck) {
            options._markForCheck = (/**
             * @param {?} field
             * @return {?}
             */
            field => {
                if (field._componentRefs) {
                    field._componentRefs.forEach((/**
                     * @param {?} ref
                     * @return {?}
                     */
                    ref => ref.changeDetectorRef.markForCheck()));
                }
                if (field.fieldGroup) {
                    field.fieldGroup.forEach((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => options._markForCheck(f)));
                }
            });
        }
        return options;
    }
}
VXFormBuilder.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */
VXFormBuilder.ctorParameters = () => [
    { type: VXFormConfig },
    { type: ComponentFactoryResolver },
    { type: Injector }
];
/** @nocollapse */ VXFormBuilder.ngInjectableDef = ɵɵdefineInjectable({ factory: function VXFormBuilder_Factory() { return new VXFormBuilder(ɵɵinject(VXFormConfig), ɵɵinject(ComponentFactoryResolver), ɵɵinject(INJECTOR)); }, token: VXFormBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment_;
class TestBaseUtils {
    constructor() {
        this.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/!";
        this.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    baseEncode(str) {
        /** @type {?} */
        var out;
        /** @type {?} */
        var i;
        /** @type {?} */
        var len;
        /** @type {?} */
        var c1;
        /** @type {?} */
        var c2;
        /** @type {?} */
        var c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += this.base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += this.base64EncodeChars.charAt(c1 >> 2);
            out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += this.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += this.base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    baseDecode(str) {
        /** @type {?} */
        var c1;
        /** @type {?} */
        var c2;
        /** @type {?} */
        var c3;
        /** @type {?} */
        var c4;
        /** @type {?} */
        var i;
        /** @type {?} */
        var len;
        /** @type {?} */
        var out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            /* c2 */
            do {
                c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = this.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = this.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    t1(str) {
        /** @type {?} */
        let result = false;
        debugger;
        try {
            str = this.baseDecode(str);
            if (str != undefined && str != null && str != "") {
                /** @type {?} */
                let arr = str.split(";");
                if (arr != null && arr.length == 2) {
                    /** @type {?} */
                    let str1 = arr[0];
                    /** @type {?} */
                    let str2 = arr[1];
                    if (str1.length == parseInt(str2)) {
                        /** @type {?} */
                        let begintime = moment().toDate();
                        /** @type {?} */
                        let endtime = moment(str1).toDate();
                        console.log('[][][]');
                        console.log(moment(endtime).diff(begintime, 'day'));
                        if (moment(endtime).diff(begintime, 'day') > 0) {
                            result = true;
                        }
                    }
                }
            }
        }
        catch (ex) {
        }
        return result;
    }
}
TestBaseUtils.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */ TestBaseUtils.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestBaseUtils_Factory() { return new TestBaseUtils(); }, token: TestBaseUtils, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXForm {
    /**
     * @param {?} vxFormBuilder
     * @param {?} vxFormConfig
     * @param {?} test
     * @param {?} immutable
     * @param {?} parentFormGroup
     */
    constructor(vxFormBuilder, vxFormConfig, test, immutable, parentFormGroup) {
        this.vxFormBuilder = vxFormBuilder;
        this.vxFormConfig = vxFormConfig;
        this.test = test;
        this.parentFormGroup = parentFormGroup;
        this.modelChange = new EventEmitter();
        this.status = 0;
        this.immutable = false;
        this.modelChangeSubs = [];
        this.gogo = true;
        this.enableCheckExprDebounce = false;
        this.checkExpressionChange$ = this.modelChange
            .pipe(debounceTime(this.enableCheckExprDebounce ? 100 : 0))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.enableCheckExprDebounce = true;
            this.checkExpressionChange();
            this.enableCheckExprDebounce = false;
        }));
        this.immutable = immutable !== null || !!vxFormConfig.extras.immutable;
        // let linces = localStorage.getItem("VX_FORM_LINCES")
        // if(linces!=undefined && linces!=null && linces!=""){
        //   this.gogo = this.test.t1(linces);
        // } 
    }
    /**
     * @param {?} model
     * @return {?}
     */
    set model(model) {
        this._model = this.immutable ? clone(model) : model;
    }
    /**
     * @return {?}
     */
    get model() {
        return this._model || {};
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    set fields(fields) {
        this._fields = this.immutable ? clone(fields) : fields;
    }
    /**
     * @return {?}
     */
    get fields() {
        return this._fields || [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = this.immutable ? clone(options) : options;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        if (content && content.nativeElement.nextSibling) ;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.vxFormConfig.extras.checkExpressionOn === "changeDetectionCheck") {
            this.checkExpressionChange();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.fields || changes.form || changes.model) {
            this.form = this.form || new FormGroup({});
            this.setOptions();
            this.clearModelSubscriptions();
            this.vxFormBuilder.buildForm(this.form, this.fields, this.model, this.options);
            this.trackModelChanges(this.fields);
            this.options.updateInitialValue();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearModelSubscriptions();
        this.checkExpressionChange$.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeModel(event) {
        assignModelValue(this.model, event.key.split("."), event.value);
        this.modelChange.emit(clone(this.model));
    }
    /**
     * @return {?}
     */
    setOptions() {
        if (!this.options) {
            this.options = {};
        }
        if (!this.options.resetModel) {
            this.options.resetModel = (/**
             * @param {?=} model
             * @return {?}
             */
            (model) => {
                model = clone(isNullOrUndefined(model) ? this.initialModel : model);
                if (this.model) {
                    Object.keys(this.model).forEach((/**
                     * @param {?} k
                     * @return {?}
                     */
                    k => delete this.model[k]));
                    Object.assign(this.model, model || {});
                }
                ((/** @type {?} */ (this.options)))._buildForm();
                if (this.options.parentForm &&
                    this.options.parentForm.control === this.form) {
                    this.options.parentForm.resetForm(model);
                }
                else {
                    this.form.reset(model);
                }
            });
        }
        if (!this.options.parentForm && this.parentFormGroup) {
            defineHiddenProp(this.options, "parentForm", this.parentFormGroup);
            wrapProperty(this.options.parentForm, "submitted", (/**
             * @param {?} __0
             * @return {?}
             */
            ({ firstChange }) => {
                if (!firstChange) {
                    ((/** @type {?} */ (this.options)))._markForCheck({
                        fieldGroup: this.fields,
                        model: this.model,
                        formControl: this.form,
                        options: this.options
                    });
                }
            }));
        }
        if (!this.options.updateInitialValue) {
            this.options.updateInitialValue = (/**
             * @return {?}
             */
            () => (this.initialModel = clone(this.model)));
        }
        if (!((/** @type {?} */ (this.options)))._buildForm) {
            ((/** @type {?} */ (this.options)))._buildForm = (/**
             * @param {?=} emitModelChange
             * @return {?}
             */
            (emitModelChange = false) => {
                this.clearModelSubscriptions();
                this.vxFormBuilder.buildForm(this.form, this.fields, this.model, this.options);
                this.trackModelChanges(this.fields);
                if (emitModelChange) {
                    this.modelChange.emit(clone(this.model));
                }
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkExpressionChange() {
        if (this.options && ((/** @type {?} */ (this.options)))._checkField) {
            ((/** @type {?} */ (this.options)))._checkField({
                fieldGroup: this.fields,
                model: this.model,
                formControl: this.form,
                options: this.options
            });
        }
    }
    /**
     * @private
     * @param {?} fields
     * @param {?=} rootKey
     * @return {?}
     */
    trackModelChanges(fields, rootKey = []) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            field.status = this.status;
            if (field.key && !field.fieldGroup) {
                /** @type {?} */
                const control = field.formControl;
                /** @type {?} */
                let valueChanges = control.valueChanges;
                const { updateOn, debounce } = field.modelOptions;
                if ((!updateOn || updateOn === "change") &&
                    debounce &&
                    debounce.default > 0) {
                    valueChanges = control.valueChanges.pipe(debounceTime(debounce.default));
                }
                this.modelChangeSubs.push(valueChanges.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    if (((/** @type {?} */ (control)))._onChange.length > 1) {
                        control.patchValue(value, { emitEvent: false });
                    }
                    if (field.parsers && field.parsers.length > 0) {
                        field.parsers.forEach((/**
                         * @param {?} parserFn
                         * @return {?}
                         */
                        parserFn => (value = parserFn(value))));
                    }
                    this.changeModel({
                        key: [...rootKey, ...getKeyPath(field)].join("."),
                        value
                    });
                })));
            }
            if (field.fieldGroup && field.fieldGroup.length > 0) {
                this.trackModelChanges(field.fieldGroup, field.key ? [...rootKey, ...getKeyPath(field)] : rootKey);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearModelSubscriptions() {
        this.modelChangeSubs.forEach((/**
         * @param {?} sub
         * @return {?}
         */
        sub => sub.unsubscribe()));
        this.modelChangeSubs = [];
    }
    /**
     * @param {?} field
     * @return {?}
     */
    checkFieldShow(field) {
        /** @type {?} */
        let result = true;
        if (field && field.hasOwnProperty("show")) {
            result = field.show;
        }
        return result;
    }
    /**
     * @return {?}
     */
    get checkTest() {
        return this.gogo;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkTest(value) {
        this.gogo = value;
    }
}
VXForm.decorators = [
    { type: Component, args: [{
                selector: "vxform",
                template: `
    <ng-container *ngIf="checkTest">
    <ng-container *ngFor="let field of fields">
      <vxform-field
        *ngIf="checkFieldShow(field)"
        hide-deprecation
        [form]="field.form"
        [options]="field.options"
        [model]="field.model"
        [field]="field"
      >
      </vxform-field>
    </ng-container>
    <ng-container #content>
      <ng-content></ng-content>
    </ng-container>
    </ng-container>
  `,
                host: {
                    "[class]": "class"
                },
                providers: [VXFormBuilder, TestBaseUtils]
            }] }
];
/** @nocollapse */
VXForm.ctorParameters = () => [
    { type: VXFormBuilder },
    { type: VXFormConfig },
    { type: TestBaseUtils },
    { type: undefined, decorators: [{ type: Attribute, args: ["immutable",] }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
VXForm.propDecorators = {
    form: [{ type: Input }],
    model: [{ type: Input }],
    fields: [{ type: Input }],
    options: [{ type: Input }],
    class: [{ type: Input }],
    modelChange: [{ type: Output }],
    content: [{ type: ViewChild, args: ["content", { static: true },] }],
    status: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormField {
    /**
     * @param {?} vxFormConfig
     * @param {?} componentFactoryResolver
     * @param {?} injector
     * @param {?} hideDeprecation
     */
    constructor(vxFormConfig, componentFactoryResolver, injector, hideDeprecation) {
        this.vxFormConfig = vxFormConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.className = "";
        this.warnDeprecation = false;
        this.modelChange = new EventEmitter();
        this.warnDeprecation = hideDeprecation === null;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    set model(m) {
        this.warnDeprecation && console.warn(`:${this.constructor.name}`);
    }
    /**
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this.warnDeprecation && console.warn(`:${this.constructor.name}`);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this.warnDeprecation && console.warn(`:${this.constructor.name}`);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rownumber(value) {
        if (value != undefined && value != null && value > -1) {
            this.field.rownumber = value;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.triggerHook("afterContentInit");
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.triggerHook("afterContentChecked");
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.triggerHook("afterViewInit");
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.triggerHook("afterViewChecked");
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.triggerHook("doCheck");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.triggerHook("onInit");
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.triggerHook("onChanges", changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.field && defineHiddenProp(this.field, "_componentRefs", []);
        this.triggerHook("onDestroy");
    }
    /**
     * @private
     * @param {?} containerRef
     * @param {?} f
     * @param {?} wrappers
     * @return {?}
     */
    renderField(containerRef, f, wrappers) {
        if (this.containerRef === containerRef) {
            defineHiddenProp(this.field, "_componentRefs", []);
            this.containerRef.clear();
        }
        if (wrappers && wrappers.length > 0) {
            const [wrapper, ...wps] = wrappers;
            const { component } = this.vxFormConfig.getWrapper(wrapper);
            /** @type {?} */
            const cfr = f.options && f.options._componentFactoryResolver
                ? f.options._componentFactoryResolver
                : this.componentFactoryResolver;
            /** @type {?} */
            const ref = containerRef.createComponent(cfr.resolveComponentFactory(component));
            this.attachComponentRef(ref, f);
            wrapProperty(ref.instance, "fieldComponent", (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, firstChange }) => {
                if (currentValue) {
                    this.renderField((/** @type {?} */ (currentValue)), f, wps);
                    !firstChange && ref.changeDetectorRef.detectChanges();
                }
            }));
        }
        else {
            /** @type {?} */
            const ref = this.vxFormConfig.createComponent(f, this.componentFactoryResolver, this.injector);
            if (ref) {
                this.attachComponentRef(ref, f);
                containerRef.insert(ref.hostView);
            }
        }
    }
    /**
     * @private
     * @param {?} name
     * @param {?=} changes
     * @return {?}
     */
    triggerHook(name, changes) {
        if (this.field.hooks && this.field.hooks[name]) {
            if (!changes || changes.field) {
                this.field.hooks[name](this.field);
            }
        }
        if (this.field.lifecycle && this.field.lifecycle[name]) {
            this.field.lifecycle[name](this.field.form, this.field, this.field.model, this.field.options);
        }
        if (name === "onChanges" && changes.field) {
            this.renderField(this.containerRef, this.field, this.field.wrappers);
        }
    }
    /**
     * @private
     * @template T
     * @param {?} ref
     * @param {?} field
     * @return {?}
     */
    attachComponentRef(ref, field) {
        field._componentRefs.push(ref);
        Object.assign(ref.instance, { field });
    }
}
VXFormField.decorators = [
    { type: Component, args: [{
                selector: "vxform-field",
                template: `
    <ng-template #container></ng-template>
  `,
                host: {
                    "[style.display]": 'field.hide ? "none":""',
                    //"[class]": "field.className? field.className : className"
                    "[class]": "field.type=='text'?'panel-'+field.type+' panel-'+field.typeold: 'panel-'+field.type"
                }
            }] }
];
/** @nocollapse */
VXFormField.ctorParameters = () => [
    { type: VXFormConfig },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: undefined, decorators: [{ type: Attribute, args: ["hide-deprecation",] }] }
];
VXFormField.propDecorators = {
    field: [{ type: Input }],
    className: [{ type: Input, args: ["class",] }],
    model: [{ type: Input }],
    form: [{ type: Input }],
    options: [{ type: Input }],
    rownumber: [{ type: Input }],
    modelChange: [{ type: Output }],
    containerRef: [{ type: ViewChild, args: ["container", (/** @type {?} */ ({ read: ViewContainerRef, static: true })),] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormAttributes {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _document
     */
    constructor(renderer, elementRef, _document) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.uiAttributesCache = {};
        this.uiAttributes = [
            ...VXFORM_VALIDATORS,
            "tabindex",
            "placeholder",
            "readonly",
            "disabled",
            "step"
        ];
        this.document = _document;
    }
    /**
     * @return {?}
     */
    get to() {
        return this.field.templateOptions || {};
    }
    /**
     * @private
     * @return {?}
     */
    get fieldAttrElements() {
        return (this.field && this.field["_attrElements"]) || [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.field) {
            ["id", "name"].forEach((/**
             * @param {?} attr
             * @return {?}
             */
            attr => {
                this.field[attr] && this.setAttribute(attr, this.field[attr]);
            }));
            if (this.to && this.to.attributes) {
                wrapProperty(this.to, "attributes", (/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ currentValue, previousValue }) => {
                    if (previousValue) {
                        Object.keys(previousValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        attr => this.removeAttribute(attr)));
                    }
                    if (currentValue) {
                        Object.keys(currentValue).forEach((/**
                         * @param {?} attr
                         * @return {?}
                         */
                        attr => this.setAttribute(attr, currentValue[attr])));
                    }
                }));
            }
            this.attachAttrElement();
            if (this.fieldAttrElements.length === 1) {
                wrapProperty(this.field, "focus", (/**
                 * @param {?} __0
                 * @return {?}
                 */
                ({ currentValue }) => {
                    /** @type {?} */
                    const element = this.fieldAttrElements
                        ? this.fieldAttrElements[0]
                        : null;
                    if (!element) {
                        return;
                    }
                    this.focusElement(element, currentValue);
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.uiAttributes.forEach((/**
         * @param {?} attr
         * @return {?}
         */
        attr => {
            /** @type {?} */
            const value = this.to[attr];
            if (this.uiAttributesCache[attr] !== value) {
                this.uiAttributesCache[attr] = value;
                if (value || value === 0) {
                    this.setAttribute(attr, value === true ? attr : `${value}`);
                }
                else {
                    this.removeAttribute(attr);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detachAttrElement();
    }
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    focusElement(element, value) {
        if (!element.focus) {
            return;
        }
        /** @type {?} */
        const isFocused = !!this.document.activeElement &&
            this.fieldAttrElements.some((/**
             * @param {?} element
             * @return {?}
             */
            element => this.document.activeElement === element ||
                element.contains(this.document.activeElement)));
        if (value && !isFocused) {
            element.focus();
        }
        else if (!value && isFocused) {
            element.blur();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        this.field["___$focus"] = true;
        if (this.to.focus) {
            this.to.focus(this.field, $event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        this.field["___$focus"] = false;
        if (this.to.blur) {
            this.to.blur(this.field, $event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onChange($event) {
        if (this.to.change) {
            this.to.change(this.field, $event);
        }
        if (this.field.formControl) {
            this.field.formControl.markAsDirty();
        }
    }
    /**
     * @private
     * @return {?}
     */
    attachAttrElement() {
        if (this.field["_attrElements"]) {
            this.field["_attrElements"].push(this.elementRef.nativeElement);
        }
        else {
            defineHiddenProp(this.field, "_attrElements", [
                this.elementRef.nativeElement
            ]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    detachAttrElement() {
        /** @type {?} */
        const index = this.fieldAttrElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        element => element !== this.elementRef.nativeElement));
        if (index !== -1) {
            this.field["_attrElements"].splice(index, 1);
        }
    }
    /**
     * @private
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    setAttribute(attr, value) {
        this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
    }
    /**
     * @private
     * @param {?} attr
     * @return {?}
     */
    removeAttribute(attr) {
        this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
    }
}
VXFormAttributes.decorators = [
    { type: Directive, args: [{
                selector: "[vxFormAttributes]",
                host: {
                    "(focus)": "onFocus($event)",
                    "(blur)": "onBlur($event)",
                    "(keyup)": "to.keyup && to.keyup(field, $event)",
                    "(keydown)": "to.keydown && to.keydown(field, $event)",
                    "(click)": "to.click && to.click(field, $event)",
                    "(change)": "onChange($event)",
                    "(keypress)": "to.keypress && to.keypress(field, $event)"
                }
            },] }
];
/** @nocollapse */
VXFormAttributes.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
VXFormAttributes.propDecorators = {
    field: [{ type: Input, args: ["vxFormAttributes",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template F
 */
class FieldType {
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
/**
 * @abstract
 */
class Field extends FieldType {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} field
 * @return {?}
 */
function unregisterControl(field) {
    /** @type {?} */
    const form = (/** @type {?} */ (field.formControl.parent));
    if (form instanceof FormArray) {
        /** @type {?} */
        const key = form.controls.findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c === field.formControl));
        if (key !== -1) {
            form.removeAt(key);
            field.formControl.setParent(null);
        }
    }
    else if (form instanceof FormGroup) {
        /** @type {?} */
        const paths = getKeyPath(field);
        /** @type {?} */
        const key = paths[paths.length - 1];
        if (form.get([key]) === field.formControl) {
            form.removeControl(key);
        }
        field.formControl.setParent(null);
    }
}
/**
 * @param {?} field
 * @param {?=} control
 * @return {?}
 */
function registerControl(field, control) {
    control = control || field.formControl;
    if (!field.formControl && control) {
        defineHiddenProp(field, "formControl", control);
        field.templateOptions.disabled = !!field.templateOptions.disabled;
        wrapProperty(field.templateOptions, "disabled", (/**
         * @param {?} __0
         * @return {?}
         */
        ({ firstChange, currentValue }) => {
            if (!firstChange) {
                currentValue
                    ? field.formControl.disable()
                    : field.formControl.enable();
            }
        }));
        if (control.registerOnDisabledChange) {
            control.registerOnDisabledChange((/**
             * @param {?} value
             * @return {?}
             */
            (value) => (field.templateOptions["___$disabled"] = value)));
        }
    }
    /** @type {?} */
    let parent = (/** @type {?} */ (field.parent.formControl));
    if (!parent) {
        return;
    }
    /** @type {?} */
    const paths = getKeyPath(field);
    for (let i = 0; i < paths.length - 1; i++) {
        /** @type {?} */
        const path = paths[i];
        if (!parent.get([path])) {
            registerControl({
                key: path,
                formControl: new FormGroup({}),
                parent: { formControl: parent }
            });
        }
        parent = (/** @type {?} */ (parent.get([path])));
    }
    /** @type {?} */
    const value = getFieldValue(field);
    if (!(isNullOrUndefined(control.value) && isNullOrUndefined(value)) &&
        control.value !== value &&
        control instanceof FormControl) {
        control.patchValue(value);
    }
    /** @type {?} */
    const key = paths[paths.length - 1];
    if (parent.get([key]) !== control) {
        parent.setControl(key, control);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template F
 */
class FieldArrayType extends FieldType {
    /**
     * @param {?=} builder
     */
    constructor(builder) {
        super();
        this.defaultOptions = {
            defaultValue: []
        };
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template F
 */
class FieldWrapper extends FieldType {
}
FieldWrapper.propDecorators = {
    fieldComponent: [{ type: ViewChild, args: ["fieldComponent", (/** @type {?} */ ({ read: ViewContainerRef, static: false })),] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormGroup extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            defaultValue: {}
        };
    }
}
VXFormGroup.decorators = [
    { type: Component, args: [{
                selector: "vxform-group",
                template: `
    <vxform-field *ngFor="let f of field.fieldGroup" [field]="f"></vxform-field>
    <ng-content></ng-content>
  `,
                host: {
                    "[class]": 'field.fieldGroupClassName || ""'
                }
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormValidationMessage {
    /**
     * @param {?} vxFormConfig
     */
    constructor(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
    }
    /**
     * @return {?}
     */
    get errorMessage() {
        /** @type {?} */
        const fieldForm = this.field.formControl;
        for (let error in fieldForm.errors) {
            if (fieldForm.errors.hasOwnProperty(error)) {
                /** @type {?} */
                let message = this.vxFormConfig.getValidatorMessage(error);
                if (isObject(fieldForm.errors[error])) {
                    if (fieldForm.errors[error].errorPath) {
                        return;
                    }
                    if (fieldForm.errors[error].message) {
                        message = fieldForm.errors[error].message;
                    }
                }
                if (this.field.validation &&
                    this.field.validation.messages &&
                    this.field.validation.messages[error]) {
                    message = this.field.validation.messages[error];
                }
                if (this.field.validators &&
                    this.field.validators[error] &&
                    this.field.validators[error].message) {
                    message = this.field.validators[error].message;
                }
                if (this.field.asyncValidators &&
                    this.field.asyncValidators[error] &&
                    this.field.asyncValidators[error].message) {
                    message = this.field.asyncValidators[error].message;
                }
                if (typeof message === "function") {
                    return message(fieldForm.errors[error], this.field);
                }
                return message;
            }
        }
    }
}
VXFormValidationMessage.decorators = [
    { type: Component, args: [{
                selector: "vxform-validation-message",
                template: `
    {{ errorMessage }}
  `
            }] }
];
/** @nocollapse */
VXFormValidationMessage.ctorParameters = () => [
    { type: VXFormConfig }
];
VXFormValidationMessage.propDecorators = {
    field: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormTemplateType extends FieldType {
}
VXFormTemplateType.decorators = [
    { type: Component, args: [{
                selector: "template",
                template: `
    <div [innerHtml]="field.template"></div>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} expression
 * @param {?} argNames
 * @return {?}
 */
function evalStringExpression(expression, argNames) {
    try {
        if (expression.indexOf("this.field") !== -1) ;
        return (/** @type {?} */ (Function(...argNames, `return ${expression};`)));
    }
    catch (error) {
        console.error(error);
    }
}
/**
 * @param {?} expression
 * @param {?} argNames
 * @return {?}
 */
function evalExpressionValueSetter(expression, argNames) {
    try {
        return (/** @type {?} */ (Function(...argNames, `${expression} = expressionValue;`)));
    }
    catch (error) {
        console.error(error);
    }
}
/**
 * @param {?} expression
 * @param {?} thisArg
 * @param {?} argVal
 * @return {?}
 */
function evalExpression(expression, thisArg, argVal) {
    if (expression instanceof Function) {
        return expression.apply(thisArg, argVal);
    }
    else {
        return expression ? true : false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldExpressionExtension {
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        if (field.parent || field.options._checkField) {
            return;
        }
        field.options._checkField = (/**
         * @param {?} f
         * @param {?} ignoreCache
         * @return {?}
         */
        (f, ignoreCache) => this._checkField(f, ignoreCache));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.parent || field._expressionProperties) {
            return;
        }
        defineHiddenProp(field, "_expressionProperties", {});
        if (field.expressionProperties) {
            for (const key in field.expressionProperties) {
                /** @type {?} */
                const expressionProperty = field.expressionProperties[key];
                /** @type {?} */
                const expressionValueSetter = evalExpressionValueSetter(`field.${key}`, [
                    "expressionValue",
                    "model",
                    "field"
                ]);
                if (typeof expressionProperty === "string" ||
                    isFunction(expressionProperty)) {
                    field._expressionProperties[key] = {
                        expression: this._evalExpression(expressionProperty, field.parent.expressionProperties &&
                            field.parent.expressionProperties.hasOwnProperty("templateOptions.disabled")
                            ? (/**
                             * @return {?}
                             */
                            () => field.parent.templateOptions.disabled)
                            : undefined),
                        expressionValueSetter
                    };
                    if (key === "templateOptions.disabled") {
                        Object.defineProperty(field._expressionProperties[key], "expressionValue", {
                            get: (/**
                             * @return {?}
                             */
                            () => field.templateOptions.disabled),
                            set: (/**
                             * @return {?}
                             */
                            () => { }),
                            enumerable: true,
                            configurable: true
                        });
                    }
                }
                else if (expressionProperty instanceof Observable) {
                    /** @type {?} */
                    const subscription = ((/** @type {?} */ (expressionProperty))).subscribe((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => evalExpression(expressionValueSetter, { field }, [
                        v,
                        field.model,
                        field
                    ])));
                    /** @type {?} */
                    const onDestroy = field.hooks.onDestroy;
                    field.hooks.onDestroy = (/**
                     * @param {?} field
                     * @return {?}
                     */
                    field => {
                        onDestroy && onDestroy(field);
                        subscription.unsubscribe();
                    });
                }
            }
        }
        if (field.hideExpression) {
            delete field.hide;
            /** @type {?} */
            let parent = field.parent;
            while (parent && !parent.hideExpression) {
                parent = parent.parent;
            }
            field.hideExpression = this._evalExpression(field.hideExpression, parent && parent.hideExpression ? (/**
             * @return {?}
             */
            () => parent.hide) : undefined);
        }
        else {
            wrapProperty(field, "hide", (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, firstChange }) => {
                if (!firstChange || (firstChange && currentValue === true)) {
                    field.options._hiddenFieldsForCheck.push(field);
                }
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        if (field.parent) {
            return;
        }
        field.options._checkField(field, true);
    }
    /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    _evalExpression(expression, parentExpression) {
        expression = expression || ((/**
         * @return {?}
         */
        () => false));
        if (typeof expression === "string") {
            expression = evalStringExpression(expression, [
                "model",
                "formState",
                "field"
            ]);
        }
        return parentExpression
            ? (/**
             * @param {?} model
             * @param {?} formState
             * @param {?} field
             * @return {?}
             */
            (model, formState, field) => parentExpression() || expression(model, formState, field))
            : expression;
    }
    /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    _checkField(field, ignoreCache = false) {
        /** @type {?} */
        const options = (/** @type {?} */ (field.options));
        /** @type {?} */
        let markForCheck = false;
        field.fieldGroup.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            this.checkFieldExpressionChange(f, ignoreCache) && (markForCheck = true);
            if (this.checkFieldVisibilityChange(f, ignoreCache)) {
                options._hiddenFieldsForCheck.push(f);
                markForCheck = true;
            }
            if (f.fieldGroup && f.fieldGroup.length > 0) {
                this._checkField(f, ignoreCache);
            }
        }));
        if (markForCheck && field.options && field.options._markForCheck) {
            field.options._markForCheck(field);
        }
        if (!field.parent) {
            options._hiddenFieldsForCheck
                .sort((/**
             * @param {?} f
             * @return {?}
             */
            f => (f.hide ? -1 : 1)))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.toggleFormControl(f, f.hide)));
            options._hiddenFieldsForCheck = [];
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldExpressionChange(field, ignoreCache) {
        if (!field || !field._expressionProperties) {
            return false;
        }
        /** @type {?} */
        let markForCheck = false;
        /** @type {?} */
        const expressionProperties = field._expressionProperties;
        for (const key in expressionProperties) {
            /** @type {?} */
            let expressionValue = evalExpression(expressionProperties[key].expression, { field }, [field.model, field.options.formState, field]);
            if (key === "templateOptions.disabled") {
                expressionValue = !!expressionValue;
            }
            if (ignoreCache ||
                (expressionProperties[key].expressionValue !== expressionValue &&
                    (!isObject(expressionValue) ||
                        JSON.stringify(expressionValue) !==
                            JSON.stringify(expressionProperties[key].expressionValue)))) {
                markForCheck = true;
                expressionProperties[key].expressionValue = expressionValue;
                evalExpression(expressionProperties[key].expressionValueSetter, { field }, [expressionValue, field.model, field]);
                if (key === "templateOptions.disabled" && field.key) {
                    this.setDisabledState(field, expressionValue);
                }
                if (key.indexOf("model.") === 0) {
                    /** @type {?} */
                    const path = key.replace(/^model\./, "");
                    /** @type {?} */
                    const control = field.key && key === path
                        ? field.formControl
                        : field.parent.formControl.get(path);
                    if (control &&
                        !(isNullOrUndefined(control.value) &&
                            isNullOrUndefined(expressionValue)) &&
                        control.value !== expressionValue) {
                        control.patchValue(expressionValue);
                    }
                }
            }
        }
        return markForCheck;
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldVisibilityChange(field, ignoreCache) {
        if (!field || isNullOrUndefined(field.hideExpression)) {
            return false;
        }
        /** @type {?} */
        const hideExpressionResult = !!evalExpression(field.hideExpression, { field }, [field.model, field.options.formState, field]);
        /** @type {?} */
        let markForCheck = false;
        if (hideExpressionResult !== field.hide || ignoreCache) {
            markForCheck = true;
            field.hide = hideExpressionResult;
            field.templateOptions.hidden = hideExpressionResult;
        }
        return markForCheck;
    }
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    setDisabledState(field, value) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.expressionProperties ||
                !f.expressionProperties.hasOwnProperty("templateOptions.disabled")))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.setDisabledState(f, value)));
        }
        if (field.key && field.templateOptions.disabled !== value) {
            field.templateOptions.disabled = value;
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    toggleFormControl(field, hide) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.hideExpression))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.toggleFormControl(f, hide)));
        }
        if (field.formControl && field.key) {
            hide === true ? unregisterControl(field) : registerControl(field);
        }
        if (field.options.fieldChanges) {
            field.options.fieldChanges.next((/** @type {?} */ ({
                field: field,
                type: "hidden",
                value: hide
            })));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldValidationExtension {
    /**
     * @param {?} vxFormConfig
     */
    constructor(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.parent || !field.key) {
            return;
        }
        this.initFieldValidation(field, "validators");
        this.initFieldValidation(field, "asyncValidators");
    }
    /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    initFieldValidation(field, type) {
        if (!isUndefined(field["_" + type])) {
            if (field.formControl) {
                /** @type {?} */
                const validator = type === "validators"
                    ? field.formControl.validator
                    : field.formControl.asyncValidator;
                if (field["_" + type] !== validator) {
                    field["_" + type] = validator;
                }
            }
            return;
        }
        /** @type {?} */
        const validators = type === "validators" ? [this.getPredefinedFieldValidation(field)] : [];
        if (field[type]) {
            for (const validatorName in field[type]) {
                if (validatorName === "validation" &&
                    !Array.isArray(field[type].validation)) {
                    field[type].validation = [field[type].validation];
                }
                validatorName === "validation"
                    ? validators.push(...field[type].validation.map((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.wrapNgValidatorFn(field, v))))
                    : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
            }
        }
        defineHiddenProp(field, "_" + type, type === "validators"
            ? Validators.compose(validators)
            : Validators.composeAsync((/** @type {?} */ (validators))));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getPredefinedFieldValidation(field) {
        /** @type {?} */
        let VALIDATORS = [];
        VXFORM_VALIDATORS.forEach((/**
         * @param {?} opt
         * @return {?}
         */
        opt => wrapProperty(field.templateOptions, opt, (/**
         * @param {?} __0
         * @return {?}
         */
        ({ currentValue, firstChange }) => {
            VALIDATORS = VALIDATORS.filter((/**
             * @param {?} o
             * @return {?}
             */
            o => o !== opt));
            if (currentValue != null && currentValue !== false) {
                VALIDATORS.push(opt);
            }
            if (!firstChange && field.formControl) {
                field.formControl.updateValueAndValidity({ emitEvent: false });
            }
        }))));
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (VALIDATORS.length === 0) {
                return null;
            }
            return Validators.compose(VALIDATORS.map((/**
             * @param {?} opt
             * @return {?}
             */
            opt => (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const value = field.templateOptions[opt];
                switch (opt) {
                    case "required":
                        return Validators.required(control);
                    case "pattern":
                        return Validators.pattern(value)(control);
                    case "minLength":
                        return Validators.minLength(value)(control);
                    case "maxLength":
                        return Validators.maxLength(value)(control);
                    case "min":
                        return Validators.min(value)(control);
                    case "max":
                        return Validators.max(value)(control);
                }
            }))))(control);
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    wrapNgValidatorFn(field, validator, validatorName) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            let validatorFn = (/** @type {?} */ (validator));
            if (typeof validator === "string") {
                validatorFn = this.vxFormConfig.getValidator(validator).validation;
            }
            if (isObject(validator)) {
                validatorFn = ((/** @type {?} */ (validator))).expression;
            }
            /** @type {?} */
            const isValid = validatorFn(control, field);
            if (validatorName) {
                if (isPromise(isValid)) {
                    return isValid.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    (result) => {
                        if (field.options && field.options._markForCheck) {
                            field.options._markForCheck(field);
                        }
                        return this.handleResult(field, result, {
                            validatorName,
                            validator
                        });
                    }));
                }
                return this.handleResult(field, isValid, { validatorName, validator });
            }
            return isValid;
        });
    }
    /**
     * @private
     * @param {?} field
     * @param {?} isValid
     * @param {?} __2
     * @return {?}
     */
    handleResult(field, isValid, { validatorName, validator }) {
        if (isObject(validator) && field.formControl && validator.errorPath) {
            /** @type {?} */
            const control = field.formControl.get(validator.errorPath);
            if (control) {
                /** @type {?} */
                const controlErrors = control.errors || {};
                if (!isValid) {
                    control.setErrors(Object.assign({}, controlErrors, { [validatorName]: { message: validator.message } }));
                }
                else {
                    delete controlErrors[validatorName];
                    control.setErrors(Object.keys(controlErrors).length === 0 ? null : controlErrors);
                }
            }
            return isValid
                ? null
                : { [validatorName]: { errorPath: validator.errorPath } };
        }
        return isValid ? null : { [validatorName]: true };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldFormExtension {
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (field.key) {
            this.addFormControl(field);
        }
        if (field.parent && field.fieldGroup && !field.key) {
            defineHiddenProp(field, "formControl", field.parent.formControl);
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        if (field.parent) {
            return;
        }
        /** @type {?} */
        const updateValidity = this.setValidators(field);
        updateValidity &&
            ((/** @type {?} */ (field.formControl)))._updateTreeValidity({ emitEvent: false });
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    addFormControl(field) {
        /** @type {?} */
        const controlOptions = {
            updateOn: field.modelOptions.updateOn
        };
        /** @type {?} */
        let control;
        /** @type {?} */
        const form = (/** @type {?} */ (field.parent.formControl));
        /** @type {?} */
        const value = getFieldValue(field);
        /** @type {?} */
        const paths = getKeyPath(field);
        if (field.formControl instanceof AbstractControl ||
            (form && form.get(paths))) {
            control = field.formControl || form.get(paths);
        }
        else if (field._componentFactory &&
            field._componentFactory.component &&
            field._componentFactory.component.createControl) {
            /** @type {?} */
            const component = field._componentFactory.component;
            control = component.createControl(value, field);
        }
        else if (field.fieldGroup) {
            control = new FormGroup({}, controlOptions);
        }
        else {
            control = new FormControl(value, controlOptions);
        }
        registerControl(field, control);
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    setValidators(field) {
        /** @type {?} */
        let updateValidity = false;
        if (field.key) {
            const { _validators: validators, _asyncValidators: asyncValidators, formControl: control, templateOptions: { disabled } } = field;
            if (disabled && control.enabled) {
                control.disable({ emitEvent: false, onlySelf: true });
                updateValidity = true;
            }
            if (validators !== control.validator) {
                control.setValidators(validators);
                updateValidity = true;
            }
            if (asyncValidators !== control.asyncValidator) {
                control.setAsyncValidators(asyncValidators);
                updateValidity = true;
            }
        }
        (field.fieldGroup || []).forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => this.setValidators(f) && (updateValidity = true)));
        return updateValidity;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Guid {
    /**
     * @private
     * @param {?} guid
     */
    constructor(guid) {
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    static isGuid(guid) {
        /** @type {?} */
        const value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    }
    /**
     * @return {?}
     */
    static create() {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));
    }
    /**
     * @return {?}
     */
    static createEmpty() {
        return new Guid('emptyguid');
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    static parse(guid) {
        return new Guid(guid);
    }
    /**
     * @return {?}
     */
    static raw() {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
    }
    /**
     * @private
     * @param {?} count
     * @return {?}
     */
    static gen(count) {
        /** @type {?} */
        let out = '';
        for (let i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        return Guid.isGuid(other) && this.value === other.toString();
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return this.value === Guid.EMPTY;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.value;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            value: this.value,
        };
    }
}
Guid.validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
Guid.EMPTY = '00000000-0000-0000-0000-000000000000';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreExtension {
    /**
     * @param {?} vxFormConfig
     */
    constructor(vxFormConfig) {
        this.vxFormConfig = vxFormConfig;
        this.formId = 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        this.getFieldComponentInstance(field).prePopulate();
        if (field.parent) {
            return;
        }
        /** @type {?} */
        const fieldTransforms = (field.options && field.options.fieldTransform) ||
            this.vxFormConfig.extras.fieldTransform;
        (Array.isArray(fieldTransforms)
            ? fieldTransforms
            : [fieldTransforms]).forEach((/**
         * @param {?} fieldTransform
         * @return {?}
         */
        fieldTransform => {
            if (fieldTransform) {
                /** @type {?} */
                const fieldGroup = fieldTransform(field.fieldGroup, field.model, (/** @type {?} */ (field.formControl)), field.options);
            }
        }));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        this.initFieldOptions(field);
        this.getFieldComponentInstance(field).onPopulate();
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            (f, index) => {
                Object.defineProperty(f, "parent", {
                    get: (/**
                     * @return {?}
                     */
                    () => field),
                    configurable: true
                });
                Object.defineProperty(f, "index", {
                    get: (/**
                     * @return {?}
                     */
                    () => index),
                    configurable: true
                });
                this.formId++;
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        this.getFieldComponentInstance(field).postPopulate();
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldOptions(field) {
        /** @type {?} */
        const root = (/** @type {?} */ (field.parent));
        if (!root) {
            return;
        }
        Object.defineProperty(field, "form", {
            get: (/**
             * @return {?}
             */
            () => root.formControl),
            configurable: true
        });
        Object.defineProperty(field, "options", {
            get: (/**
             * @return {?}
             */
            () => root.options),
            configurable: true
        });
        Object.defineProperty(field, "model", {
            get: (/**
             * @return {?}
             */
            () => field.key && field.fieldGroup ? getFieldValue(field) : root.model),
            configurable: true
        });
        reverseDeepMerge(field, {
            id: getFieldId(`vxform_${this.formId}`, field, field["index"]),
            guid: Guid.create()["value"],
            hooks: {},
            modelOptions: {},
            templateOptions: !field.type || !field.key
                ? {}
                : {
                    label: "",
                    placeholder: "",
                    focus: false,
                    disabled: false
                }
        });
        if (field.lifecycle) ;
        if (field.template && field.type !== "template") {
            if (field.type) ;
            field.type = "template";
        }
        if (!field.type && field.fieldGroup) {
            field.type = "vxform-group";
        }
        if (field.type) {
            this.vxFormConfig.getMergedField(field);
        }
        if (!isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
            assignModelValue(root.model, getKeyPath(field), field.defaultValue);
        }
        this.initFieldWrappers(field);
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldWrappers(field) {
        field.wrappers = field.wrappers || [];
        /** @type {?} */
        const fieldTemplateManipulators = Object.assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
        field.wrappers = [
            ...this.vxFormConfig.templateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...field.wrappers,
            ...this.vxFormConfig.templateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field)))
        ].filter((/**
         * @param {?} el
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        (el, i, a) => el && i === a.indexOf(el)));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getFieldComponentInstance(field) {
        /** @type {?} */
        const componentRef = this.vxFormConfig.createComponent(field);
        /** @type {?} */
        const instance = componentRef
            ? ((/** @type {?} */ (componentRef.instance)))
            : {};
        return {
            prePopulate: (/**
             * @return {?}
             */
            () => instance.prePopulate && instance.prePopulate(field)),
            onPopulate: (/**
             * @return {?}
             */
            () => instance.onPopulate && instance.onPopulate(field)),
            postPopulate: (/**
             * @return {?}
             */
            () => instance.postPopulate && instance.postPopulate(field))
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VXFormCommonService {
    constructor() { }
    /**
     * @param {?} fields
     * @return {?}
     */
    initFormFieldProperty(fields) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            this.deleteFieldProperty(field);
        }));
    }
    //初始化表单JSON对象
    /**
     * @param {?} fields
     * @param {?} fieldPropertys
     * @return {?}
     */
    initFormFieldConfig(fields, fieldPropertys) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            this.setFieldProperty(field, fieldPropertys);
        }));
    }
    /**
     * @param {?} fields
     * @param {?} model
     * @return {?}
     */
    initFormFieldModel(fields, model) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            if (field.hasOwnProperty("editor")) {
                field.typeold = field.type;
                field.type = "text";
                if (this.checkFieldDefaultValue(field)) {
                    model[field.key] = field.defaultValue;
                }
            }
            if (field.hasOwnProperty("fieldArray")) {
                if (field.fieldArray.hasOwnProperty("fieldGroup")) {
                    model[field.key] = [{}];
                    field.fieldArray.fieldGroup.forEach((/**
                     * @param {?} fieldGroup
                     * @return {?}
                     */
                    fieldGroup => {
                        if (fieldGroup.hasOwnProperty("editor")) {
                            fieldGroup.typeold = field.type;
                            fieldGroup.type = "text";
                        }
                    }));
                }
            }
            if (field.hasOwnProperty("fieldGroup")) {
                //初始化值
                if (!this.checkFieldDefaultValue(field)) {
                    model[field.key] = {};
                }
                field.fieldGroup.forEach((/**
                 * @param {?} fieldGroup
                 * @return {?}
                 */
                fieldGroup => {
                    if (fieldGroup.hasOwnProperty("editor")) {
                        fieldGroup.typeold = fieldGroup.type;
                        fieldGroup.type = "text";
                        if (this.checkFieldDefaultValue(model[field.key][fieldGroup.key])) {
                            model[field.key][fieldGroup.key] = fieldGroup.defaultValue;
                        }
                    }
                }));
            }
        }));
    }
    //初始化表单序号
    /**
     * @param {?} surveyInfo
     * @return {?}
     */
    initSurveyFormFieldConfig(surveyInfo) {
        surveyInfo.queTotal = 0;
        if (surveyInfo.pages) {
            surveyInfo.pages.forEach((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.setFieldNumber(surveyInfo, page.questions);
            }));
        }
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    checkFieldDefaultValue(field) {
        /** @type {?} */
        let result = false;
        if (field != undefined &&
            field != null &&
            field.defaultValue != undefined &&
            field.defaultValue != null) {
            return true;
        }
        return result;
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    deleteFieldProperty(field) {
        if (field.hasOwnProperty("status")) {
            delete field.status;
        }
        if (field.hasOwnProperty("guid")) {
            delete field.guid;
        }
        if (field.hasOwnProperty("id")) {
            delete field.id;
        }
        if (field.hasOwnProperty("wrappers")) {
            delete field["wrappers"];
        }
        if (field.hasOwnProperty("_keyPath")) {
            delete field["_keyPath"];
        }
        if (field.hasOwnProperty("modelOptions")) {
            delete field["modelOptions"];
        }
        if (field.hasOwnProperty("checked")) {
            delete field["checked"];
        }
        if (field.hasOwnProperty("rownumber")) {
            delete field["rownumber"];
        }
        if (field.hasOwnProperty("templateOptions")) {
            if (field.templateOptions.hasOwnProperty("focus")) {
                delete field.templateOptions.focus;
            }
            if (field.templateOptions.hasOwnProperty("disabled")) {
                delete field.templateOptions.disabled;
            }
            if (field.templateOptions.hasOwnProperty("readonly")) {
                delete field.templateOptions.readonly;
            }
        }
        if (field.fieldArray) {
            if (field.fieldArray.fieldGroup) {
                if (field.fieldGroup) {
                    delete field.fieldGroup;
                }
                this.initFormFieldProperty(field.fieldArray.fieldGroup);
            }
        }
        if (field.fieldGroup) {
            this.initFormFieldProperty(field.fieldGroup);
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} fieldPropertys
     * @return {?}
     */
    setFieldProperty(field, fieldPropertys) {
        /** @type {?} */
        let items = fieldPropertys.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.key === field.key;
        }));
        if (items != undefined && items != null && items.length > 0) {
            /** @type {?} */
            let item = items[0];
            if (item.hasOwnProperty("show")) {
                field.show = item.show;
            }
            if (item.hasOwnProperty("editor")) {
                field.editor = item.editor;
            }
            if (item.hasOwnProperty("label")) {
                if (item.label != null) {
                    field.templateOptions.label = item.label;
                }
            }
            if (item.hasOwnProperty("placeholder")) {
                if (item.placeholder != null) {
                    field.templateOptions.placeholder = item.placeholder;
                }
            }
            if (item.hasOwnProperty("options")) {
                if (item.options != null) {
                    field.templateOptions.options = item.options;
                }
            }
            if (item.hasOwnProperty("tips")) {
                if (item.tips != null && item.tips != "") {
                    field.templateOptions.tips = item.tips;
                }
            }
        }
        if (field.fieldArray) {
            if (field.fieldArray.fieldGroup) {
                this.initFormFieldConfig(field.fieldArray.fieldGroup, fieldPropertys);
            }
        }
        if (field.fieldGroup) {
            this.initFormFieldConfig(field.fieldGroup, fieldPropertys);
        }
    }
    /**
     * @private
     * @param {?} surveyInfo
     * @param {?} fields
     * @return {?}
     */
    setFieldNumber(surveyInfo, fields) {
        fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            if (field.type != "line" && field.type != "remark") {
                surveyInfo.queTotal = surveyInfo.queTotal + 1;
                field.templateOptions.queno = "Q" + surveyInfo.queTotal;
            }
        }));
    }
}
VXFormCommonService.decorators = [
    { type: Injectable, args: [{ providedIn: "root" },] }
];
/** @nocollapse */
VXFormCommonService.ctorParameters = () => [];
/** @nocollapse */ VXFormCommonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VXFormCommonService_Factory() { return new VXFormCommonService(); }, token: VXFormCommonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} vxFormConfig
 * @return {?}
 */
function defaultVXFormConfig(vxFormConfig) {
    return {
        types: [
            { name: "vxform-group", component: VXFormGroup },
            { name: "template", component: VXFormTemplateType }
        ],
        extensions: [
            { name: "core", extension: new CoreExtension(vxFormConfig) },
            {
                name: "field-validation",
                extension: new FieldValidationExtension(vxFormConfig)
            },
            { name: "field-form", extension: new FieldFormExtension() },
            { name: "field-expression", extension: new FieldExpressionExtension() }
        ]
    };
}
class VXFormModule {
    /**
     * @param {?} configService
     * @param {?=} configs
     */
    constructor(configService, configs = []) {
        if (!configs) {
            return;
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => configService.addConfig(config)));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: VXFormModule,
            providers: [
                {
                    provide: VXFORM_CONFIG,
                    multi: true,
                    useFactory: defaultVXFormConfig,
                    deps: [VXFormConfig]
                },
                { provide: VXFORM_CONFIG, useValue: config, multi: true },
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: config,
                    multi: true
                },
                VXFormConfig,
                VXFormBuilder
            ]
        };
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: VXFormModule,
            providers: [
                { provide: VXFORM_CONFIG, useValue: config, multi: true },
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: config,
                    multi: true
                },
                VXFormBuilder
            ]
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forConfig(config) {
        if (localStorage.getItem("VX_FORM_LINCES") != null && localStorage.getItem("VX_FORM_LINCES") != "") {
            localStorage.removeItem("VX_FORM_LINCES");
        }
        localStorage.setItem("VX_FORM_LINCES", config);
        return {
            ngModule: VXFormModule,
            providers: [VXFormBuilder]
        };
    }
}
VXFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    VXForm,
                    VXFormField,
                    VXFormAttributes,
                    VXFormGroup,
                    VXFormValidationMessage,
                    VXFormTemplateType
                ],
                entryComponents: [VXFormGroup, VXFormTemplateType],
                exports: [
                    VXForm,
                    VXFormField,
                    VXFormAttributes,
                    VXFormGroup,
                    VXFormValidationMessage
                ],
                imports: [HttpModule, HttpClientModule, CommonModule],
                providers: [VXFormCommonService]
            },] }
];
/** @nocollapse */
VXFormModule.ctorParameters = () => [
    { type: VXFormConfig },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [VXFORM_CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VXForm, VXFormField, VXFormAttributes, VXFORM_CONFIG, VXFormConfig, VXFormBuilder, FieldType, Field, FieldArrayType, FieldWrapper, VXFormModule, defineHiddenProp as ɵdefineHiddenProp, reverseDeepMerge as ɵreverseDeepMerge, clone, isObject, Guid, VXFormCommonService, TestBaseUtils, defaultVXFormConfig as ɵa, CoreExtension as ɵe, FieldExpressionExtension as ɵh, FieldFormExtension as ɵg, FieldValidationExtension as ɵf, VXFormTemplateType as ɵd, VXFormGroup as ɵb, VXFormValidationMessage as ɵc };

//# sourceMappingURL=vx-form-core.js.map