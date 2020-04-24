(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('moment'), require('@angular/common'), require('@angular/http'), require('@angular/common/http'), require('rxjs'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@vx-form/core', ['exports', 'rxjs/operators', 'moment', '@angular/common', '@angular/http', '@angular/common/http', 'rxjs', '@angular/forms', '@angular/core'], factory) :
    (factory((global['vx-form'] = global['vx-form'] || {}, global['vx-form'].core = {}),global.rxjs.operators,global.moment_,global.ng.common,global.ng.http,global.ng.common.http,global.rxjs,global.ng.forms,global.ng.core));
}(this, (function (exports,operators,moment_,common,http,http$1,rxjs,forms,i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
        var type = field.type;
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
    var VXFORM_VALIDATORS = [
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
    function getFieldValue(field) {
        var e_1, _a;
        /** @type {?} */
        var model = field.parent.model;
        try {
            for (var _b = __values(getKeyPath(field)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var path = _c.value;
                if (!model) {
                    return model;
                }
                model = model[path];
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return))
                    _a.call(_b);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        return model;
    }
    /**
     * @param {?} dest
     * @param {...?} args
     * @return {?}
     */
    function reverseDeepMerge(dest) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        args.forEach(( /**
         * @param {?} src
         * @return {?}
         */function (src) {
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
            rxjs.isObservable(value) ||
            value.changingThisBreaksApplicationSecurity ||
            ["RegExp", "FileList", "File", "Blob"].indexOf(value.constructor.name) !==
                -1) {
            return value;
        }
        if (value._isAMomentObject && isFunction(value.clone)) {
            return value.clone();
        }
        if (value instanceof forms.AbstractControl) {
            return null;
        }
        if (value instanceof Date) {
            return new Date(value.getTime());
        }
        if (Array.isArray(value)) {
            return value.slice(0).map(( /**
             * @param {?} v
             * @return {?}
             */function (v) { return clone(v); }));
        }
        /** @type {?} */
        var proto = Object.getPrototypeOf(value);
        /** @type {?} */
        var c = Object.create(proto);
        c = Object.setPrototypeOf(c, proto);
        return Object.keys(value).reduce(( /**
         * @param {?} newVal
         * @param {?} prop
         * @return {?}
         */function (newVal, prop) {
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
        defineHiddenProp(field, "___$" + prop, field[prop]);
        setFn({ currentValue: field[prop], firstChange: true });
        Object.defineProperty(field, prop, {
            configurable: true,
            get: ( /**
             * @return {?}
             */function () { return field["___$" + prop]; }),
            set: ( /**
             * @param {?} currentValue
             * @return {?}
             */function (currentValue) {
                if (currentValue !== field["___$" + prop]) {
                    /** @type {?} */
                    var previousValue = field["___$" + prop];
                    field["___$" + prop] = currentValue;
                    setFn({ previousValue: previousValue, currentValue: currentValue, firstChange: false });
                }
            })
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VXFORM_CONFIG = new i0.InjectionToken("VXFORM_CONFIG");
    var VXFormConfig = /** @class */ (function () {
        function VXFormConfig() {
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
                showError: ( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
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
        VXFormConfig.prototype.addConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                var _this = this;
                if (config.types) {
                    config.types.forEach(( /**
                     * @param {?} type
                     * @return {?}
                     */function (type) { return _this.setType(type); }));
                }
                if (config.validators) {
                    config.validators.forEach(( /**
                     * @param {?} validator
                     * @return {?}
                     */function (validator) { return _this.setValidator(validator); }));
                }
                if (config.wrappers) {
                    config.wrappers.forEach(( /**
                     * @param {?} wrapper
                     * @return {?}
                     */function (wrapper) { return _this.setWrapper(wrapper); }));
                }
                if (config.manipulators) {
                    config.manipulators.forEach(( /**
                     * @param {?} manipulator
                     * @return {?}
                     */function (manipulator) {
                        return _this.setManipulator(manipulator);
                    }));
                }
                if (config.validationMessages) {
                    config.validationMessages.forEach(( /**
                     * @param {?} validation
                     * @return {?}
                     */function (validation) {
                        return _this.addValidatorMessage(validation.name, validation.message);
                    }));
                }
                if (config.extensions) {
                    config.extensions.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (_this.extensions[c.name] = c.extension); }));
                }
                if (config.extras) {
                    this.extras = __assign({}, this.extras, config.extras);
                }
            };
        /**
         * @param {?} options
         * @return {?}
         */
        VXFormConfig.prototype.setType = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                if (Array.isArray(options)) {
                    options.forEach(( /**
                     * @param {?} option
                     * @return {?}
                     */function (option) { return _this.setType(option); }));
                }
                else {
                    if (!this.types[options.name]) {
                        this.types[options.name] = ( /** @type {?} */({ name: options.name }));
                    }
                    ["component", "extends", "defaultOptions"].forEach(( /**
                     * @param {?} prop
                     * @return {?}
                     */function (prop) {
                        if (options.hasOwnProperty(prop)) {
                            _this.types[options.name][prop] = options[prop];
                        }
                    }));
                    if (options.wrappers) {
                        options.wrappers.forEach(( /**
                         * @param {?} wrapper
                         * @return {?}
                         */function (wrapper) {
                            return _this.setTypeWrapper(options.name, wrapper);
                        }));
                    }
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        VXFormConfig.prototype.getType = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!this.types[name]) ;
                this.mergeExtendedType(name);
                return this.types[name];
            };
        /**
         * @param {?=} field
         * @return {?}
         */
        VXFormConfig.prototype.getMergedField = /**
         * @param {?=} field
         * @return {?}
         */
            function (field) {
                var _this = this;
                if (field === void 0) {
                    field = {};
                }
                /** @type {?} */
                var type = this.getType(field.type);
                if (type.defaultOptions) {
                    reverseDeepMerge(field, type.defaultOptions);
                }
                /** @type {?} */
                var extendDefaults = type.extends && this.getType(type.extends).defaultOptions;
                if (extendDefaults) {
                    reverseDeepMerge(field, extendDefaults);
                }
                if (field && field.optionsTypes) {
                    field.optionsTypes.forEach(( /**
                     * @param {?} option
                     * @return {?}
                     */function (option) {
                        /** @type {?} */
                        var defaultOptions = _this.getType(option).defaultOptions;
                        if (defaultOptions) {
                            reverseDeepMerge(field, defaultOptions);
                        }
                    }));
                }
                /** @type {?} */
                var componentRef = this.createComponent(field);
                if (componentRef &&
                    componentRef.instance &&
                    componentRef.instance.defaultOptions) {
                    reverseDeepMerge(field, componentRef.instance.defaultOptions);
                }
                if (!field.wrappers && type.wrappers) {
                    field.wrappers = __spread(type.wrappers);
                }
            };
        /**
         * @param {?=} field
         * @param {?=} resolver
         * @param {?=} injector
         * @return {?}
         */
        VXFormConfig.prototype.createComponent = /**
         * @param {?=} field
         * @param {?=} resolver
         * @param {?=} injector
         * @return {?}
         */
            function (field, resolver, injector) {
                if (field === void 0) {
                    field = {};
                }
                if (!field.type) {
                    return;
                }
                /** @type {?} */
                var cf = field._componentFactory;
                if (cf &&
                    field.type === cf.type &&
                    cf.componentRef &&
                    cf.componentRef.hostView &&
                    !cf.componentRef.hostView.destroyed) {
                    return field._componentFactory.componentRef;
                }
                /** @type {?} */
                var type = this.getType(field.type);
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
            };
        /**
         * @param {?} options
         * @return {?}
         */
        VXFormConfig.prototype.setWrapper = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                this.wrappers[options.name] = options;
                if (options.types) {
                    options.types.forEach(( /**
                     * @param {?} type
                     * @return {?}
                     */function (type) {
                        _this.setTypeWrapper(type, options.name);
                    }));
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        VXFormConfig.prototype.getWrapper = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!this.wrappers[name]) ;
                return this.wrappers[name];
            };
        /**
         * @param {?} type
         * @param {?} name
         * @return {?}
         */
        VXFormConfig.prototype.setTypeWrapper = /**
         * @param {?} type
         * @param {?} name
         * @return {?}
         */
            function (type, name) {
                if (!this.types[type]) {
                    this.types[type] = ( /** @type {?} */({}));
                }
                if (!this.types[type].wrappers) {
                    this.types[type].wrappers = [];
                }
                if (this.types[type].wrappers.indexOf(name) === -1) {
                    this.types[type].wrappers.push(name);
                }
            };
        /**
         * @param {?} options
         * @return {?}
         */
        VXFormConfig.prototype.setValidator = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.validators[options.name] = options;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        VXFormConfig.prototype.getValidator = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!this.validators[name]) ;
                return this.validators[name];
            };
        /**
         * @param {?} name
         * @param {?} message
         * @return {?}
         */
        VXFormConfig.prototype.addValidatorMessage = /**
         * @param {?} name
         * @param {?} message
         * @return {?}
         */
            function (name, message) {
                this.messages[name] = message;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        VXFormConfig.prototype.getValidatorMessage = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.messages[name];
            };
        /**
         * @param {?} manipulator
         * @return {?}
         */
        VXFormConfig.prototype.setManipulator = /**
         * @param {?} manipulator
         * @return {?}
         */
            function (manipulator) {
                new manipulator.class()[manipulator.method](this);
            };
        /**
         * @param {?} config
         * @return {?}
         */
        VXFormConfig.prototype.setAPPConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.appConfig = config;
            };
        /**
         * @private
         * @param {?} name
         * @return {?}
         */
        VXFormConfig.prototype.mergeExtendedType = /**
         * @private
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!this.types[name].extends) {
                    return;
                }
                /** @type {?} */
                var extendedType = this.getType(this.types[name].extends);
                if (!this.types[name].component) {
                    this.types[name].component = extendedType.component;
                }
                if (!this.types[name].wrappers) {
                    this.types[name].wrappers = extendedType.wrappers;
                }
            };
        /**
         * @private
         * @param {?=} field
         * @return {?}
         */
        VXFormConfig.prototype.getFieldInjector = /**
         * @private
         * @param {?=} field
         * @return {?}
         */
            function (field) {
                if (field === void 0) {
                    field = {};
                }
                /** @type {?} */
                var parent = field.parent;
                if (parent._componentFactory && parent._componentFactory.componentRef) {
                    return parent._componentFactory.componentRef.injector;
                }
                return parent.options._injector;
            };
        VXFormConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: "root" },] }
        ];
        /** @nocollapse */ VXFormConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormConfig_Factory() { return new VXFormConfig(); }, token: VXFormConfig, providedIn: "root" });
        return VXFormConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormBuilder = /** @class */ (function () {
        function VXFormBuilder(vxFormConfig, componentFactoryResolver, injector) {
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
        VXFormBuilder.prototype.buildForm = /**
         * @param {?} formControl
         * @param {?=} fieldGroup
         * @param {?=} model
         * @param {?=} options
         * @return {?}
         */
            function (formControl, fieldGroup, model, options) {
                if (fieldGroup === void 0) {
                    fieldGroup = [];
                }
                if (!this.vxFormConfig.extensions.core) ;
                this._buildForm({
                    fieldGroup: fieldGroup,
                    model: model,
                    formControl: formControl,
                    options: this._setOptions(options)
                });
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        VXFormBuilder.prototype._buildForm = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                var _this = this;
                this.getExtensions().forEach(( /**
                 * @param {?} extension
                 * @return {?}
                 */function (extension) { return extension.prePopulate && extension.prePopulate(field); }));
                this.getExtensions().forEach(( /**
                 * @param {?} extension
                 * @return {?}
                 */function (extension) { return extension.onPopulate && extension.onPopulate(field); }));
                if (field.fieldGroup) {
                    field.fieldGroup.forEach(( /**
                     * @param {?} f
                     * @return {?}
                     */function (f) { return _this._buildForm(f); }));
                }
                this.getExtensions().forEach(( /**
                 * @param {?} extension
                 * @return {?}
                 */function (extension) { return extension.postPopulate && extension.postPopulate(field); }));
            };
        /**
         * @private
         * @return {?}
         */
        VXFormBuilder.prototype.getExtensions = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                return Object.keys(this.vxFormConfig.extensions).map(( /**
                 * @param {?} name
                 * @return {?}
                 */function (name) { return _this.vxFormConfig.extensions[name]; }));
            };
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        VXFormBuilder.prototype._setOptions = /**
         * @private
         * @param {?} options
         * @return {?}
         */
            function (options) {
                options = options || {};
                options.formState = options.formState || {};
                if (!options.showError) {
                    options.showError = this.vxFormConfig.extras.showError;
                }
                if (!options.fieldChanges) {
                    defineHiddenProp(options, "fieldChanges", new rxjs.Subject());
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
                    options._markForCheck = ( /**
                     * @param {?} field
                     * @return {?}
                     */function (field) {
                        if (field._componentRefs) {
                            field._componentRefs.forEach(( /**
                             * @param {?} ref
                             * @return {?}
                             */function (ref) {
                                return ref.changeDetectorRef.markForCheck();
                            }));
                        }
                        if (field.fieldGroup) {
                            field.fieldGroup.forEach(( /**
                             * @param {?} f
                             * @return {?}
                             */function (f) { return options._markForCheck(f); }));
                        }
                    });
                }
                return options;
            };
        VXFormBuilder.decorators = [
            { type: i0.Injectable, args: [{ providedIn: "root" },] }
        ];
        /** @nocollapse */
        VXFormBuilder.ctorParameters = function () {
            return [
                { type: VXFormConfig },
                { type: i0.ComponentFactoryResolver },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ VXFormBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormBuilder_Factory() { return new VXFormBuilder(i0.ɵɵinject(VXFormConfig), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR)); }, token: VXFormBuilder, providedIn: "root" });
        return VXFormBuilder;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;
    var TestBaseUtils = /** @class */ (function () {
        function TestBaseUtils() {
            this.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/!";
            this.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        }
        /**
         * @param {?} str
         * @return {?}
         */
        TestBaseUtils.prototype.baseEncode = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
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
            };
        /**
         * @param {?} str
         * @return {?}
         */
        TestBaseUtils.prototype.baseDecode = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
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
            };
        /**
         * @param {?} str
         * @return {?}
         */
        TestBaseUtils.prototype.t1 = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var result = false;
                debugger;
                try {
                    str = this.baseDecode(str);
                    if (str != undefined && str != null && str != "") {
                        /** @type {?} */
                        var arr = str.split(";");
                        if (arr != null && arr.length == 2) {
                            /** @type {?} */
                            var str1 = arr[0];
                            /** @type {?} */
                            var str2 = arr[1];
                            if (str1.length == parseInt(str2)) {
                                /** @type {?} */
                                var begintime = moment().toDate();
                                /** @type {?} */
                                var endtime = moment(str1).toDate();
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
            };
        TestBaseUtils.decorators = [
            { type: i0.Injectable, args: [{ providedIn: "root" },] }
        ];
        /** @nocollapse */ TestBaseUtils.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TestBaseUtils_Factory() { return new TestBaseUtils(); }, token: TestBaseUtils, providedIn: "root" });
        return TestBaseUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXForm = /** @class */ (function () {
        function VXForm(vxFormBuilder, vxFormConfig, test, immutable, parentFormGroup) {
            var _this = this;
            this.vxFormBuilder = vxFormBuilder;
            this.vxFormConfig = vxFormConfig;
            this.test = test;
            this.parentFormGroup = parentFormGroup;
            this.modelChange = new i0.EventEmitter();
            this.status = 0;
            this.immutable = false;
            this.modelChangeSubs = [];
            this.gogo = true;
            this.enableCheckExprDebounce = false;
            this.checkExpressionChange$ = this.modelChange
                .pipe(operators.debounceTime(this.enableCheckExprDebounce ? 100 : 0))
                .subscribe(( /**
         * @return {?}
         */function () {
                _this.enableCheckExprDebounce = true;
                _this.checkExpressionChange();
                _this.enableCheckExprDebounce = false;
            }));
            this.immutable = immutable !== null || !!vxFormConfig.extras.immutable;
            // let linces = localStorage.getItem("VX_FORM_LINCES")
            // if(linces!=undefined && linces!=null && linces!=""){
            //   this.gogo = this.test.t1(linces);
            // } 
        }
        Object.defineProperty(VXForm.prototype, "model", {
            get: /**
             * @return {?}
             */ function () {
                return this._model || {};
            },
            set: /**
             * @param {?} model
             * @return {?}
             */ function (model) {
                this._model = this.immutable ? clone(model) : model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXForm.prototype, "fields", {
            get: /**
             * @return {?}
             */ function () {
                return this._fields || [];
            },
            set: /**
             * @param {?} fields
             * @return {?}
             */ function (fields) {
                this._fields = this.immutable ? clone(fields) : fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXForm.prototype, "options", {
            get: /**
             * @return {?}
             */ function () {
                return this._options;
            },
            set: /**
             * @param {?} options
             * @return {?}
             */ function (options) {
                this._options = this.immutable ? clone(options) : options;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXForm.prototype, "content", {
            set: /**
             * @param {?} content
             * @return {?}
             */ function (content) {
                if (content && content.nativeElement.nextSibling) ;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXForm.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this.vxFormConfig.extras.checkExpressionOn === "changeDetectionCheck") {
                    this.checkExpressionChange();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXForm.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.fields || changes.form || changes.model) {
                    this.form = this.form || new forms.FormGroup({});
                    this.setOptions();
                    this.clearModelSubscriptions();
                    this.vxFormBuilder.buildForm(this.form, this.fields, this.model, this.options);
                    this.trackModelChanges(this.fields);
                    this.options.updateInitialValue();
                }
            };
        /**
         * @return {?}
         */
        VXForm.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.clearModelSubscriptions();
                this.checkExpressionChange$.unsubscribe();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        VXForm.prototype.changeModel = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                assignModelValue(this.model, event.key.split("."), event.value);
                this.modelChange.emit(clone(this.model));
            };
        /**
         * @return {?}
         */
        VXForm.prototype.setOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.options) {
                    this.options = {};
                }
                if (!this.options.resetModel) {
                    this.options.resetModel = ( /**
                     * @param {?=} model
                     * @return {?}
                     */function (model) {
                        model = clone(isNullOrUndefined(model) ? _this.initialModel : model);
                        if (_this.model) {
                            Object.keys(_this.model).forEach(( /**
                             * @param {?} k
                             * @return {?}
                             */function (k) { return delete _this.model[k]; }));
                            Object.assign(_this.model, model || {});
                        }
                        (( /** @type {?} */(_this.options)))._buildForm();
                        if (_this.options.parentForm &&
                            _this.options.parentForm.control === _this.form) {
                            _this.options.parentForm.resetForm(model);
                        }
                        else {
                            _this.form.reset(model);
                        }
                    });
                }
                if (!this.options.parentForm && this.parentFormGroup) {
                    defineHiddenProp(this.options, "parentForm", this.parentFormGroup);
                    wrapProperty(this.options.parentForm, "submitted", ( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var firstChange = _a.firstChange;
                        if (!firstChange) {
                            (( /** @type {?} */(_this.options)))._markForCheck({
                                fieldGroup: _this.fields,
                                model: _this.model,
                                formControl: _this.form,
                                options: _this.options
                            });
                        }
                    }));
                }
                if (!this.options.updateInitialValue) {
                    this.options.updateInitialValue = ( /**
                     * @return {?}
                     */function () {
                        return (_this.initialModel = clone(_this.model));
                    });
                }
                if (!(( /** @type {?} */(this.options)))._buildForm) {
                    (( /** @type {?} */(this.options)))._buildForm = ( /**
                     * @param {?=} emitModelChange
                     * @return {?}
                     */function (emitModelChange) {
                        if (emitModelChange === void 0) {
                            emitModelChange = false;
                        }
                        _this.clearModelSubscriptions();
                        _this.vxFormBuilder.buildForm(_this.form, _this.fields, _this.model, _this.options);
                        _this.trackModelChanges(_this.fields);
                        if (emitModelChange) {
                            _this.modelChange.emit(clone(_this.model));
                        }
                    });
                }
            };
        /**
         * @private
         * @return {?}
         */
        VXForm.prototype.checkExpressionChange = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.options && (( /** @type {?} */(this.options)))._checkField) {
                    (( /** @type {?} */(this.options)))._checkField({
                        fieldGroup: this.fields,
                        model: this.model,
                        formControl: this.form,
                        options: this.options
                    });
                }
            };
        /**
         * @private
         * @param {?} fields
         * @param {?=} rootKey
         * @return {?}
         */
        VXForm.prototype.trackModelChanges = /**
         * @private
         * @param {?} fields
         * @param {?=} rootKey
         * @return {?}
         */
            function (fields, rootKey) {
                var _this = this;
                if (rootKey === void 0) {
                    rootKey = [];
                }
                fields.forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
                    field.status = _this.status;
                    if (field.key && !field.fieldGroup) {
                        /** @type {?} */
                        var control_1 = field.formControl;
                        /** @type {?} */
                        var valueChanges = control_1.valueChanges;
                        var _a = field.modelOptions, updateOn = _a.updateOn, debounce = _a.debounce;
                        if ((!updateOn || updateOn === "change") &&
                            debounce &&
                            debounce.default > 0) {
                            valueChanges = control_1.valueChanges.pipe(operators.debounceTime(debounce.default));
                        }
                        _this.modelChangeSubs.push(valueChanges.subscribe(( /**
                         * @param {?} value
                         * @return {?}
                         */function (value) {
                            if ((( /** @type {?} */(control_1)))._onChange.length > 1) {
                                control_1.patchValue(value, { emitEvent: false });
                            }
                            if (field.parsers && field.parsers.length > 0) {
                                field.parsers.forEach(( /**
                                 * @param {?} parserFn
                                 * @return {?}
                                 */function (parserFn) { return (value = parserFn(value)); }));
                            }
                            _this.changeModel({
                                key: __spread(rootKey, getKeyPath(field)).join("."),
                                value: value
                            });
                        })));
                    }
                    if (field.fieldGroup && field.fieldGroup.length > 0) {
                        _this.trackModelChanges(field.fieldGroup, field.key ? __spread(rootKey, getKeyPath(field)) : rootKey);
                    }
                }));
            };
        /**
         * @private
         * @return {?}
         */
        VXForm.prototype.clearModelSubscriptions = /**
         * @private
         * @return {?}
         */
            function () {
                this.modelChangeSubs.forEach(( /**
                 * @param {?} sub
                 * @return {?}
                 */function (sub) { return sub.unsubscribe(); }));
                this.modelChangeSubs = [];
            };
        /**
         * @param {?} field
         * @return {?}
         */
        VXForm.prototype.checkFieldShow = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                /** @type {?} */
                var result = true;
                if (field && field.hasOwnProperty("show")) {
                    result = field.show;
                }
                return result;
            };
        Object.defineProperty(VXForm.prototype, "checkTest", {
            get: /**
             * @return {?}
             */ function () {
                return this.gogo;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.gogo = value;
            },
            enumerable: true,
            configurable: true
        });
        VXForm.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform",
                        template: "\n    <ng-container *ngIf=\"checkTest\">\n    <ng-container *ngFor=\"let field of fields\">\n      <vxform-field\n        *ngIf=\"checkFieldShow(field)\"\n        hide-deprecation\n        [form]=\"field.form\"\n        [options]=\"field.options\"\n        [model]=\"field.model\"\n        [field]=\"field\"\n      >\n      </vxform-field>\n    </ng-container>\n    <ng-container #content>\n      <ng-content></ng-content>\n    </ng-container>\n    </ng-container>\n  ",
                        host: {
                            "[class]": "class"
                        },
                        providers: [VXFormBuilder, TestBaseUtils]
                    }] }
        ];
        /** @nocollapse */
        VXForm.ctorParameters = function () {
            return [
                { type: VXFormBuilder },
                { type: VXFormConfig },
                { type: TestBaseUtils },
                { type: undefined, decorators: [{ type: i0.Attribute, args: ["immutable",] }] },
                { type: forms.FormGroupDirective, decorators: [{ type: i0.Optional }] }
            ];
        };
        VXForm.propDecorators = {
            form: [{ type: i0.Input }],
            model: [{ type: i0.Input }],
            fields: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            class: [{ type: i0.Input }],
            modelChange: [{ type: i0.Output }],
            content: [{ type: i0.ViewChild, args: ["content", { static: true },] }],
            status: [{ type: i0.Input }]
        };
        return VXForm;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormField = /** @class */ (function () {
        function VXFormField(vxFormConfig, componentFactoryResolver, injector, hideDeprecation) {
            this.vxFormConfig = vxFormConfig;
            this.componentFactoryResolver = componentFactoryResolver;
            this.injector = injector;
            this.className = "";
            this.warnDeprecation = false;
            this.modelChange = new i0.EventEmitter();
            this.warnDeprecation = hideDeprecation === null;
        }
        Object.defineProperty(VXFormField.prototype, "model", {
            set: /**
             * @param {?} m
             * @return {?}
             */ function (m) {
                this.warnDeprecation && console.warn(":" + this.constructor.name);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormField.prototype, "form", {
            set: /**
             * @param {?} form
             * @return {?}
             */ function (form) {
                this.warnDeprecation && console.warn(":" + this.constructor.name);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormField.prototype, "options", {
            set: /**
             * @param {?} options
             * @return {?}
             */ function (options) {
                this.warnDeprecation && console.warn(":" + this.constructor.name);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormField.prototype, "rownumber", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value != undefined && value != null && value > -1) {
                    this.field.rownumber = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VXFormField.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.triggerHook("afterContentInit");
            };
        /**
         * @return {?}
         */
        VXFormField.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                this.triggerHook("afterContentChecked");
            };
        /**
         * @return {?}
         */
        VXFormField.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.triggerHook("afterViewInit");
            };
        /**
         * @return {?}
         */
        VXFormField.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                this.triggerHook("afterViewChecked");
            };
        /**
         * @return {?}
         */
        VXFormField.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                this.triggerHook("doCheck");
            };
        /**
         * @return {?}
         */
        VXFormField.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.triggerHook("onInit");
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormField.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.triggerHook("onChanges", changes);
            };
        /**
         * @return {?}
         */
        VXFormField.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.field && defineHiddenProp(this.field, "_componentRefs", []);
                this.triggerHook("onDestroy");
            };
        /**
         * @private
         * @param {?} containerRef
         * @param {?} f
         * @param {?} wrappers
         * @return {?}
         */
        VXFormField.prototype.renderField = /**
         * @private
         * @param {?} containerRef
         * @param {?} f
         * @param {?} wrappers
         * @return {?}
         */
            function (containerRef, f, wrappers) {
                var _this = this;
                if (this.containerRef === containerRef) {
                    defineHiddenProp(this.field, "_componentRefs", []);
                    this.containerRef.clear();
                }
                if (wrappers && wrappers.length > 0) {
                    var _a = __read(wrappers), wrapper = _a[0], wps_1 = _a.slice(1);
                    var component = this.vxFormConfig.getWrapper(wrapper).component;
                    /** @type {?} */
                    var cfr = f.options && f.options._componentFactoryResolver
                        ? f.options._componentFactoryResolver
                        : this.componentFactoryResolver;
                    /** @type {?} */
                    var ref_1 = containerRef.createComponent(cfr.resolveComponentFactory(component));
                    this.attachComponentRef(ref_1, f);
                    wrapProperty(ref_1.instance, "fieldComponent", ( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var currentValue = _a.currentValue, firstChange = _a.firstChange;
                        if (currentValue) {
                            _this.renderField(( /** @type {?} */(currentValue)), f, wps_1);
                            !firstChange && ref_1.changeDetectorRef.detectChanges();
                        }
                    }));
                }
                else {
                    /** @type {?} */
                    var ref = this.vxFormConfig.createComponent(f, this.componentFactoryResolver, this.injector);
                    if (ref) {
                        this.attachComponentRef(ref, f);
                        containerRef.insert(ref.hostView);
                    }
                }
            };
        /**
         * @private
         * @param {?} name
         * @param {?=} changes
         * @return {?}
         */
        VXFormField.prototype.triggerHook = /**
         * @private
         * @param {?} name
         * @param {?=} changes
         * @return {?}
         */
            function (name, changes) {
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
            };
        /**
         * @private
         * @template T
         * @param {?} ref
         * @param {?} field
         * @return {?}
         */
        VXFormField.prototype.attachComponentRef = /**
         * @private
         * @template T
         * @param {?} ref
         * @param {?} field
         * @return {?}
         */
            function (ref, field) {
                field._componentRefs.push(ref);
                Object.assign(ref.instance, { field: field });
            };
        VXFormField.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-field",
                        template: "\n    <ng-template #container></ng-template>\n  ",
                        host: {
                            "[style.display]": 'field.hide ? "none":""',
                            //"[class]": "field.className? field.className : className"
                            "[class]": "field.type=='text'?'panel-'+field.type+' panel-'+field.typeold: 'panel-'+field.type"
                        }
                    }] }
        ];
        /** @nocollapse */
        VXFormField.ctorParameters = function () {
            return [
                { type: VXFormConfig },
                { type: i0.ComponentFactoryResolver },
                { type: i0.Injector },
                { type: undefined, decorators: [{ type: i0.Attribute, args: ["hide-deprecation",] }] }
            ];
        };
        VXFormField.propDecorators = {
            field: [{ type: i0.Input }],
            className: [{ type: i0.Input, args: ["class",] }],
            model: [{ type: i0.Input }],
            form: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            rownumber: [{ type: i0.Input }],
            modelChange: [{ type: i0.Output }],
            containerRef: [{ type: i0.ViewChild, args: ["container", ( /** @type {?} */({ read: i0.ViewContainerRef, static: true })),] }]
        };
        return VXFormField;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormAttributes = /** @class */ (function () {
        function VXFormAttributes(renderer, elementRef, _document) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.uiAttributesCache = {};
            this.uiAttributes = __spread(VXFORM_VALIDATORS, [
                "tabindex",
                "placeholder",
                "readonly",
                "disabled",
                "step"
            ]);
            this.document = _document;
        }
        Object.defineProperty(VXFormAttributes.prototype, "to", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.templateOptions || {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VXFormAttributes.prototype, "fieldAttrElements", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return (this.field && this.field["_attrElements"]) || [];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        VXFormAttributes.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                if (changes.field) {
                    ["id", "name"].forEach(( /**
                     * @param {?} attr
                     * @return {?}
                     */function (attr) {
                        _this.field[attr] && _this.setAttribute(attr, _this.field[attr]);
                    }));
                    if (this.to && this.to.attributes) {
                        wrapProperty(this.to, "attributes", ( /**
                         * @param {?} __0
                         * @return {?}
                         */function (_a) {
                            var currentValue = _a.currentValue, previousValue = _a.previousValue;
                            if (previousValue) {
                                Object.keys(previousValue).forEach(( /**
                                 * @param {?} attr
                                 * @return {?}
                                 */function (attr) {
                                    return _this.removeAttribute(attr);
                                }));
                            }
                            if (currentValue) {
                                Object.keys(currentValue).forEach(( /**
                                 * @param {?} attr
                                 * @return {?}
                                 */function (attr) {
                                    return _this.setAttribute(attr, currentValue[attr]);
                                }));
                            }
                        }));
                    }
                    this.attachAttrElement();
                    if (this.fieldAttrElements.length === 1) {
                        wrapProperty(this.field, "focus", ( /**
                         * @param {?} __0
                         * @return {?}
                         */function (_a) {
                            var currentValue = _a.currentValue;
                            /** @type {?} */
                            var element = _this.fieldAttrElements
                                ? _this.fieldAttrElements[0]
                                : null;
                            if (!element) {
                                return;
                            }
                            _this.focusElement(element, currentValue);
                        }));
                    }
                }
            };
        /**
         * @return {?}
         */
        VXFormAttributes.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.uiAttributes.forEach(( /**
                 * @param {?} attr
                 * @return {?}
                 */function (attr) {
                    /** @type {?} */
                    var value = _this.to[attr];
                    if (_this.uiAttributesCache[attr] !== value) {
                        _this.uiAttributesCache[attr] = value;
                        if (value || value === 0) {
                            _this.setAttribute(attr, value === true ? attr : "" + value);
                        }
                        else {
                            _this.removeAttribute(attr);
                        }
                    }
                }));
            };
        /**
         * @return {?}
         */
        VXFormAttributes.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.detachAttrElement();
            };
        /**
         * @param {?} element
         * @param {?} value
         * @return {?}
         */
        VXFormAttributes.prototype.focusElement = /**
         * @param {?} element
         * @param {?} value
         * @return {?}
         */
            function (element, value) {
                var _this = this;
                if (!element.focus) {
                    return;
                }
                /** @type {?} */
                var isFocused = !!this.document.activeElement &&
                    this.fieldAttrElements.some(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        return _this.document.activeElement === element ||
                            element.contains(_this.document.activeElement);
                    }));
                if (value && !isFocused) {
                    element.focus();
                }
                else if (!value && isFocused) {
                    element.blur();
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        VXFormAttributes.prototype.onFocus = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.field["___$focus"] = true;
                if (this.to.focus) {
                    this.to.focus(this.field, $event);
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        VXFormAttributes.prototype.onBlur = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.field["___$focus"] = false;
                if (this.to.blur) {
                    this.to.blur(this.field, $event);
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        VXFormAttributes.prototype.onChange = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.to.change) {
                    this.to.change(this.field, $event);
                }
                if (this.field.formControl) {
                    this.field.formControl.markAsDirty();
                }
            };
        /**
         * @private
         * @return {?}
         */
        VXFormAttributes.prototype.attachAttrElement = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.field["_attrElements"]) {
                    this.field["_attrElements"].push(this.elementRef.nativeElement);
                }
                else {
                    defineHiddenProp(this.field, "_attrElements", [
                        this.elementRef.nativeElement
                    ]);
                }
            };
        /**
         * @private
         * @return {?}
         */
        VXFormAttributes.prototype.detachAttrElement = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var index = this.fieldAttrElements.findIndex(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) { return element !== _this.elementRef.nativeElement; }));
                if (index !== -1) {
                    this.field["_attrElements"].splice(index, 1);
                }
            };
        /**
         * @private
         * @param {?} attr
         * @param {?} value
         * @return {?}
         */
        VXFormAttributes.prototype.setAttribute = /**
         * @private
         * @param {?} attr
         * @param {?} value
         * @return {?}
         */
            function (attr, value) {
                this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
            };
        /**
         * @private
         * @param {?} attr
         * @return {?}
         */
        VXFormAttributes.prototype.removeAttribute = /**
         * @private
         * @param {?} attr
         * @return {?}
         */
            function (attr) {
                this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
            };
        VXFormAttributes.decorators = [
            { type: i0.Directive, args: [{
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
        VXFormAttributes.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        VXFormAttributes.propDecorators = {
            field: [{ type: i0.Input, args: ["vxFormAttributes",] }]
        };
        return VXFormAttributes;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
             */ function () {
                return this.field.model;
            },
            set: /**
             * @param {?} m
             * @return {?}
             */ function (m) { },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "form", {
            get: /**
             * @return {?}
             */ function () {
                return ( /** @type {?} */(this.field.parent.formControl));
            },
            set: /**
             * @param {?} form
             * @return {?}
             */ function (form) { },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "options", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.options;
            },
            set: /**
             * @param {?} options
             * @return {?}
             */ function (options) { },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "key", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "formControl", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.formControl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "to", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.templateOptions || {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "showError", {
            get: /**
             * @return {?}
             */ function () {
                return this.options.showError(this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "id", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "formState", {
            get: /**
             * @return {?}
             */ function () {
                return this.options.formState || {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "formStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this.field.status || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldType.prototype, "editor", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
                /** @type {?} */
                var result = "";
                if (this.model.hasOwnProperty(this.field.key)) {
                    /** @type {?} */
                    var value_1 = this.model[this.field.key];
                    if (value_1 != null && value_1 != "") {
                        if (this.field.templateOptions &&
                            this.field.templateOptions.options &&
                            this.field.templateOptions.options != null) {
                            this.field.templateOptions.options.forEach(( /**
                             * @param {?} item
                             * @return {?}
                             */function (item) {
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
             */ function () {
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
                            values.forEach(( /**
                             * @param {?} element
                             * @return {?}
                             */function (element) {
                                _this.to.options.forEach(( /**
                                 * @param {?} item
                                 * @return {?}
                                 */function (item) {
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
             */ function () {
                /** @type {?} */
                var result = [];
                if (this.model.hasOwnProperty(this.key)) {
                    if (this.model[this.key] != undefined && this.model[this.key] != null) {
                        result = this.model[this.key].map(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) {
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
             */ function () {
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
             */ function () {
                /** @type {?} */
                var result = [];
                if (this.model.hasOwnProperty(this.field.key)) {
                    if (this.model[this.field.key] != null &&
                        (( /** @type {?} */(this.model[this.field.key])))) {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
            field: [{ type: i0.Input }],
            model: [{ type: i0.Input }],
            form: [{ type: i0.Input }],
            options: [{ type: i0.Input }]
        };
        return FieldType;
    }());
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ Field = /** @class */ (function (_super) {
        __extends(Field, _super);
        function Field() {
            return _super.call(this) || this;
        }
        return Field;
    }(FieldType));

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
        var form = ( /** @type {?} */(field.formControl.parent));
        if (form instanceof forms.FormArray) {
            /** @type {?} */
            var key = form.controls.findIndex(( /**
             * @param {?} c
             * @return {?}
             */function (c) { return c === field.formControl; }));
            if (key !== -1) {
                form.removeAt(key);
                field.formControl.setParent(null);
            }
        }
        else if (form instanceof forms.FormGroup) {
            /** @type {?} */
            var paths = getKeyPath(field);
            /** @type {?} */
            var key = paths[paths.length - 1];
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
            wrapProperty(field.templateOptions, "disabled", ( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                var firstChange = _a.firstChange, currentValue = _a.currentValue;
                if (!firstChange) {
                    currentValue
                        ? field.formControl.disable()
                        : field.formControl.enable();
                }
            }));
            if (control.registerOnDisabledChange) {
                control.registerOnDisabledChange(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return (field.templateOptions["___$disabled"] = value); }));
            }
        }
        /** @type {?} */
        var parent = ( /** @type {?} */(field.parent.formControl));
        if (!parent) {
            return;
        }
        /** @type {?} */
        var paths = getKeyPath(field);
        for (var i = 0; i < paths.length - 1; i++) {
            /** @type {?} */
            var path = paths[i];
            if (!parent.get([path])) {
                registerControl({
                    key: path,
                    formControl: new forms.FormGroup({}),
                    parent: { formControl: parent }
                });
            }
            parent = ( /** @type {?} */(parent.get([path])));
        }
        /** @type {?} */
        var value = getFieldValue(field);
        if (!(isNullOrUndefined(control.value) && isNullOrUndefined(value)) &&
            control.value !== value &&
            control instanceof forms.FormControl) {
            control.patchValue(value);
        }
        /** @type {?} */
        var key = paths[paths.length - 1];
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
    var FieldArrayType = /** @class */ (function (_super) {
        __extends(FieldArrayType, _super);
        function FieldArrayType(builder) {
            var _this = _super.call(this) || this;
            _this.defaultOptions = {
                defaultValue: []
            };
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
                    registerControl(field, new forms.FormArray([], { updateOn: field.modelOptions.updateOn }));
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
                    var f = __assign({}, clone(field.fieldArray), { key: "" + i });
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
                (( /** @type {?} */(this.options)))._buildForm(true);
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
                this.field.fieldGroup.forEach(( /**
                 * @param {?} f
                 * @param {?} key
                 * @return {?}
                 */function (f, key) { return (f.key = "" + key); }));
                (( /** @type {?} */(this.options)))._buildForm(true);
                this.formControl.markAsDirty();
            };
        /** @nocollapse */
        FieldArrayType.ctorParameters = function () {
            return [
                { type: VXFormBuilder, decorators: [{ type: i0.Inject, args: [VXFORM_CONFIG,] }, { type: i0.Optional }] }
            ];
        };
        return FieldArrayType;
    }(FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template F
     */
    var FieldWrapper = /** @class */ (function (_super) {
        __extends(FieldWrapper, _super);
        function FieldWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FieldWrapper.propDecorators = {
            fieldComponent: [{ type: i0.ViewChild, args: ["fieldComponent", ( /** @type {?} */({ read: i0.ViewContainerRef, static: false })),] }]
        };
        return FieldWrapper;
    }(FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormGroup = /** @class */ (function (_super) {
        __extends(VXFormGroup, _super);
        function VXFormGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultOptions = {
                defaultValue: {}
            };
            return _this;
        }
        VXFormGroup.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-group",
                        template: "\n    <vxform-field *ngFor=\"let f of field.fieldGroup\" [field]=\"f\"></vxform-field>\n    <ng-content></ng-content>\n  ",
                        host: {
                            "[class]": 'field.fieldGroupClassName || ""'
                        }
                    }] }
        ];
        return VXFormGroup;
    }(FieldType));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormValidationMessage = /** @class */ (function () {
        function VXFormValidationMessage(vxFormConfig) {
            this.vxFormConfig = vxFormConfig;
        }
        Object.defineProperty(VXFormValidationMessage.prototype, "errorMessage", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var fieldForm = this.field.formControl;
                for (var error in fieldForm.errors) {
                    if (fieldForm.errors.hasOwnProperty(error)) {
                        /** @type {?} */
                        var message = this.vxFormConfig.getValidatorMessage(error);
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
            },
            enumerable: true,
            configurable: true
        });
        VXFormValidationMessage.decorators = [
            { type: i0.Component, args: [{
                        selector: "vxform-validation-message",
                        template: "\n    {{ errorMessage }}\n  "
                    }] }
        ];
        /** @nocollapse */
        VXFormValidationMessage.ctorParameters = function () {
            return [
                { type: VXFormConfig }
            ];
        };
        VXFormValidationMessage.propDecorators = {
            field: [{ type: i0.Input }]
        };
        return VXFormValidationMessage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormTemplateType = /** @class */ (function (_super) {
        __extends(VXFormTemplateType, _super);
        function VXFormTemplateType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VXFormTemplateType.decorators = [
            { type: i0.Component, args: [{
                        selector: "template",
                        template: "\n    <div [innerHtml]=\"field.template\"></div>\n  "
                    }] }
        ];
        return VXFormTemplateType;
    }(FieldType));

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
            return ( /** @type {?} */(Function.apply(void 0, __spread(argNames, ["return " + expression + ";"]))));
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
            return ( /** @type {?} */(Function.apply(void 0, __spread(argNames, [expression + " = expressionValue;"]))));
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
    var FieldExpressionExtension = /** @class */ (function () {
        function FieldExpressionExtension() {
        }
        /**
         * @param {?} field
         * @return {?}
         */
        FieldExpressionExtension.prototype.prePopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                var _this = this;
                if (field.parent || field.options._checkField) {
                    return;
                }
                field.options._checkField = ( /**
                 * @param {?} f
                 * @param {?} ignoreCache
                 * @return {?}
                 */function (f, ignoreCache) {
                    return _this._checkField(f, ignoreCache);
                });
            };
        /**
         * @param {?} field
         * @return {?}
         */
        FieldExpressionExtension.prototype.onPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                if (!field.parent || field._expressionProperties) {
                    return;
                }
                defineHiddenProp(field, "_expressionProperties", {});
                if (field.expressionProperties) {
                    var _loop_1 = function (key) {
                        /** @type {?} */
                        var expressionProperty = field.expressionProperties[key];
                        /** @type {?} */
                        var expressionValueSetter = evalExpressionValueSetter("field." + key, [
                            "expressionValue",
                            "model",
                            "field"
                        ]);
                        if (typeof expressionProperty === "string" ||
                            isFunction(expressionProperty)) {
                            field._expressionProperties[key] = {
                                expression: this_1._evalExpression(expressionProperty, field.parent.expressionProperties &&
                                    field.parent.expressionProperties.hasOwnProperty("templateOptions.disabled")
                                    ? ( /**
                                     * @return {?}
                                     */function () { return field.parent.templateOptions.disabled; })
                                    : undefined),
                                expressionValueSetter: expressionValueSetter
                            };
                            if (key === "templateOptions.disabled") {
                                Object.defineProperty(field._expressionProperties[key], "expressionValue", {
                                    get: ( /**
                                     * @return {?}
                                     */function () { return field.templateOptions.disabled; }),
                                    set: ( /**
                                     * @return {?}
                                     */function () { }),
                                    enumerable: true,
                                    configurable: true
                                });
                            }
                        }
                        else if (expressionProperty instanceof rxjs.Observable) {
                            /** @type {?} */
                            var subscription_1 = (( /** @type {?} */(expressionProperty))).subscribe(( /**
                             * @param {?} v
                             * @return {?}
                             */function (v) {
                                return evalExpression(expressionValueSetter, { field: field }, [
                                    v,
                                    field.model,
                                    field
                                ]);
                            }));
                            /** @type {?} */
                            var onDestroy_1 = field.hooks.onDestroy;
                            field.hooks.onDestroy = ( /**
                             * @param {?} field
                             * @return {?}
                             */function (field) {
                                onDestroy_1 && onDestroy_1(field);
                                subscription_1.unsubscribe();
                            });
                        }
                    };
                    var this_1 = this;
                    for (var key in field.expressionProperties) {
                        _loop_1(key);
                    }
                }
                if (field.hideExpression) {
                    delete field.hide;
                    /** @type {?} */
                    var parent_1 = field.parent;
                    while (parent_1 && !parent_1.hideExpression) {
                        parent_1 = parent_1.parent;
                    }
                    field.hideExpression = this._evalExpression(field.hideExpression, parent_1 && parent_1.hideExpression ? ( /**
                     * @return {?}
                     */function () { return parent_1.hide; }) : undefined);
                }
                else {
                    wrapProperty(field, "hide", ( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var currentValue = _a.currentValue, firstChange = _a.firstChange;
                        if (!firstChange || (firstChange && currentValue === true)) {
                            field.options._hiddenFieldsForCheck.push(field);
                        }
                    }));
                }
            };
        /**
         * @param {?} field
         * @return {?}
         */
        FieldExpressionExtension.prototype.postPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                if (field.parent) {
                    return;
                }
                field.options._checkField(field, true);
            };
        /**
         * @private
         * @param {?} expression
         * @param {?=} parentExpression
         * @return {?}
         */
        FieldExpressionExtension.prototype._evalExpression = /**
         * @private
         * @param {?} expression
         * @param {?=} parentExpression
         * @return {?}
         */
            function (expression, parentExpression) {
                expression = expression || (( /**
                 * @return {?}
                 */function () { return false; }));
                if (typeof expression === "string") {
                    expression = evalStringExpression(expression, [
                        "model",
                        "formState",
                        "field"
                    ]);
                }
                return parentExpression
                    ? ( /**
                     * @param {?} model
                     * @param {?} formState
                     * @param {?} field
                     * @return {?}
                     */function (model, formState, field) {
                        return parentExpression() || expression(model, formState, field);
                    })
                    : expression;
            };
        /**
         * @private
         * @param {?} field
         * @param {?=} ignoreCache
         * @return {?}
         */
        FieldExpressionExtension.prototype._checkField = /**
         * @private
         * @param {?} field
         * @param {?=} ignoreCache
         * @return {?}
         */
            function (field, ignoreCache) {
                var _this = this;
                if (ignoreCache === void 0) {
                    ignoreCache = false;
                }
                /** @type {?} */
                var options = ( /** @type {?} */(field.options));
                /** @type {?} */
                var markForCheck = false;
                field.fieldGroup.forEach(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) {
                    _this.checkFieldExpressionChange(f, ignoreCache) && (markForCheck = true);
                    if (_this.checkFieldVisibilityChange(f, ignoreCache)) {
                        options._hiddenFieldsForCheck.push(f);
                        markForCheck = true;
                    }
                    if (f.fieldGroup && f.fieldGroup.length > 0) {
                        _this._checkField(f, ignoreCache);
                    }
                }));
                if (markForCheck && field.options && field.options._markForCheck) {
                    field.options._markForCheck(field);
                }
                if (!field.parent) {
                    options._hiddenFieldsForCheck
                        .sort(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return (f.hide ? -1 : 1); }))
                        .forEach(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return _this.toggleFormControl(f, f.hide); }));
                    options._hiddenFieldsForCheck = [];
                }
            };
        /**
         * @private
         * @param {?} field
         * @param {?} ignoreCache
         * @return {?}
         */
        FieldExpressionExtension.prototype.checkFieldExpressionChange = /**
         * @private
         * @param {?} field
         * @param {?} ignoreCache
         * @return {?}
         */
            function (field, ignoreCache) {
                if (!field || !field._expressionProperties) {
                    return false;
                }
                /** @type {?} */
                var markForCheck = false;
                /** @type {?} */
                var expressionProperties = field._expressionProperties;
                for (var key in expressionProperties) {
                    /** @type {?} */
                    var expressionValue = evalExpression(expressionProperties[key].expression, { field: field }, [field.model, field.options.formState, field]);
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
                        evalExpression(expressionProperties[key].expressionValueSetter, { field: field }, [expressionValue, field.model, field]);
                        if (key === "templateOptions.disabled" && field.key) {
                            this.setDisabledState(field, expressionValue);
                        }
                        if (key.indexOf("model.") === 0) {
                            /** @type {?} */
                            var path = key.replace(/^model\./, "");
                            /** @type {?} */
                            var control = field.key && key === path
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
            };
        /**
         * @private
         * @param {?} field
         * @param {?} ignoreCache
         * @return {?}
         */
        FieldExpressionExtension.prototype.checkFieldVisibilityChange = /**
         * @private
         * @param {?} field
         * @param {?} ignoreCache
         * @return {?}
         */
            function (field, ignoreCache) {
                if (!field || isNullOrUndefined(field.hideExpression)) {
                    return false;
                }
                /** @type {?} */
                var hideExpressionResult = !!evalExpression(field.hideExpression, { field: field }, [field.model, field.options.formState, field]);
                /** @type {?} */
                var markForCheck = false;
                if (hideExpressionResult !== field.hide || ignoreCache) {
                    markForCheck = true;
                    field.hide = hideExpressionResult;
                    field.templateOptions.hidden = hideExpressionResult;
                }
                return markForCheck;
            };
        /**
         * @private
         * @param {?} field
         * @param {?} value
         * @return {?}
         */
        FieldExpressionExtension.prototype.setDisabledState = /**
         * @private
         * @param {?} field
         * @param {?} value
         * @return {?}
         */
            function (field, value) {
                var _this = this;
                if (field.fieldGroup) {
                    field.fieldGroup
                        .filter(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) {
                        return !f.expressionProperties ||
                            !f.expressionProperties.hasOwnProperty("templateOptions.disabled");
                    }))
                        .forEach(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return _this.setDisabledState(f, value); }));
                }
                if (field.key && field.templateOptions.disabled !== value) {
                    field.templateOptions.disabled = value;
                }
            };
        /**
         * @private
         * @param {?} field
         * @param {?} hide
         * @return {?}
         */
        FieldExpressionExtension.prototype.toggleFormControl = /**
         * @private
         * @param {?} field
         * @param {?} hide
         * @return {?}
         */
            function (field, hide) {
                var _this = this;
                if (field.fieldGroup) {
                    field.fieldGroup
                        .filter(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return !f.hideExpression; }))
                        .forEach(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return _this.toggleFormControl(f, hide); }));
                }
                if (field.formControl && field.key) {
                    hide === true ? unregisterControl(field) : registerControl(field);
                }
                if (field.options.fieldChanges) {
                    field.options.fieldChanges.next(( /** @type {?} */({
                        field: field,
                        type: "hidden",
                        value: hide
                    })));
                }
            };
        return FieldExpressionExtension;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldValidationExtension = /** @class */ (function () {
        function FieldValidationExtension(vxFormConfig) {
            this.vxFormConfig = vxFormConfig;
        }
        /**
         * @param {?} field
         * @return {?}
         */
        FieldValidationExtension.prototype.onPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                if (!field.parent || !field.key) {
                    return;
                }
                this.initFieldValidation(field, "validators");
                this.initFieldValidation(field, "asyncValidators");
            };
        /**
         * @private
         * @param {?} field
         * @param {?} type
         * @return {?}
         */
        FieldValidationExtension.prototype.initFieldValidation = /**
         * @private
         * @param {?} field
         * @param {?} type
         * @return {?}
         */
            function (field, type) {
                var _this = this;
                if (!isUndefined(field["_" + type])) {
                    if (field.formControl) {
                        /** @type {?} */
                        var validator = type === "validators"
                            ? field.formControl.validator
                            : field.formControl.asyncValidator;
                        if (field["_" + type] !== validator) {
                            field["_" + type] = validator;
                        }
                    }
                    return;
                }
                /** @type {?} */
                var validators = type === "validators" ? [this.getPredefinedFieldValidation(field)] : [];
                if (field[type]) {
                    for (var validatorName in field[type]) {
                        if (validatorName === "validation" &&
                            !Array.isArray(field[type].validation)) {
                            field[type].validation = [field[type].validation];
                        }
                        validatorName === "validation"
                            ? validators.push.apply(validators, __spread(field[type].validation.map(( /**
                             * @param {?} v
                             * @return {?}
                             */function (v) {
                                return _this.wrapNgValidatorFn(field, v);
                            })))) : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
                    }
                }
                defineHiddenProp(field, "_" + type, type === "validators"
                    ? forms.Validators.compose(validators)
                    : forms.Validators.composeAsync(( /** @type {?} */(validators))));
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        FieldValidationExtension.prototype.getPredefinedFieldValidation = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                /** @type {?} */
                var VALIDATORS = [];
                VXFORM_VALIDATORS.forEach(( /**
                 * @param {?} opt
                 * @return {?}
                 */function (opt) {
                    return wrapProperty(field.templateOptions, opt, ( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var currentValue = _a.currentValue, firstChange = _a.firstChange;
                        VALIDATORS = VALIDATORS.filter(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) { return o !== opt; }));
                        if (currentValue != null && currentValue !== false) {
                            VALIDATORS.push(opt);
                        }
                        if (!firstChange && field.formControl) {
                            field.formControl.updateValueAndValidity({ emitEvent: false });
                        }
                    }));
                }));
                return ( /**
                 * @param {?} control
                 * @return {?}
                 */function (control) {
                    if (VALIDATORS.length === 0) {
                        return null;
                    }
                    return forms.Validators.compose(VALIDATORS.map(( /**
                     * @param {?} opt
                     * @return {?}
                     */function (opt) {
                        return ( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var value = field.templateOptions[opt];
                            switch (opt) {
                                case "required":
                                    return forms.Validators.required(control);
                                case "pattern":
                                    return forms.Validators.pattern(value)(control);
                                case "minLength":
                                    return forms.Validators.minLength(value)(control);
                                case "maxLength":
                                    return forms.Validators.maxLength(value)(control);
                                case "min":
                                    return forms.Validators.min(value)(control);
                                case "max":
                                    return forms.Validators.max(value)(control);
                            }
                        });
                    })))(control);
                });
            };
        /**
         * @private
         * @param {?} field
         * @param {?} validator
         * @param {?=} validatorName
         * @return {?}
         */
        FieldValidationExtension.prototype.wrapNgValidatorFn = /**
         * @private
         * @param {?} field
         * @param {?} validator
         * @param {?=} validatorName
         * @return {?}
         */
            function (field, validator, validatorName) {
                var _this = this;
                return ( /**
                 * @param {?} control
                 * @return {?}
                 */function (control) {
                    /** @type {?} */
                    var validatorFn = ( /** @type {?} */(validator));
                    if (typeof validator === "string") {
                        validatorFn = _this.vxFormConfig.getValidator(validator).validation;
                    }
                    if (isObject(validator)) {
                        validatorFn = (( /** @type {?} */(validator))).expression;
                    }
                    /** @type {?} */
                    var isValid = validatorFn(control, field);
                    if (validatorName) {
                        if (isPromise(isValid)) {
                            return isValid.then(( /**
                             * @param {?} result
                             * @return {?}
                             */function (result) {
                                if (field.options && field.options._markForCheck) {
                                    field.options._markForCheck(field);
                                }
                                return _this.handleResult(field, result, {
                                    validatorName: validatorName,
                                    validator: validator
                                });
                            }));
                        }
                        return _this.handleResult(field, isValid, { validatorName: validatorName, validator: validator });
                    }
                    return isValid;
                });
            };
        /**
         * @private
         * @param {?} field
         * @param {?} isValid
         * @param {?} __2
         * @return {?}
         */
        FieldValidationExtension.prototype.handleResult = /**
         * @private
         * @param {?} field
         * @param {?} isValid
         * @param {?} __2
         * @return {?}
         */
            function (field, isValid, _a) {
                var _b, _c, _d;
                var validatorName = _a.validatorName, validator = _a.validator;
                if (isObject(validator) && field.formControl && validator.errorPath) {
                    /** @type {?} */
                    var control = field.formControl.get(validator.errorPath);
                    if (control) {
                        /** @type {?} */
                        var controlErrors = control.errors || {};
                        if (!isValid) {
                            control.setErrors(__assign({}, controlErrors, (_b = {}, _b[validatorName] = { message: validator.message }, _b)));
                        }
                        else {
                            delete controlErrors[validatorName];
                            control.setErrors(Object.keys(controlErrors).length === 0 ? null : controlErrors);
                        }
                    }
                    return isValid
                        ? null
                        : (_c = {}, _c[validatorName] = { errorPath: validator.errorPath }, _c);
                }
                return isValid ? null : (_d = {}, _d[validatorName] = true, _d);
            };
        return FieldValidationExtension;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldFormExtension = /** @class */ (function () {
        function FieldFormExtension() {
        }
        /**
         * @param {?} field
         * @return {?}
         */
        FieldFormExtension.prototype.onPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                if (field.key) {
                    this.addFormControl(field);
                }
                if (field.parent && field.fieldGroup && !field.key) {
                    defineHiddenProp(field, "formControl", field.parent.formControl);
                }
            };
        /**
         * @param {?} field
         * @return {?}
         */
        FieldFormExtension.prototype.postPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                if (field.parent) {
                    return;
                }
                /** @type {?} */
                var updateValidity = this.setValidators(field);
                updateValidity &&
                    (( /** @type {?} */(field.formControl)))._updateTreeValidity({ emitEvent: false });
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        FieldFormExtension.prototype.addFormControl = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                /** @type {?} */
                var controlOptions = {
                    updateOn: field.modelOptions.updateOn
                };
                /** @type {?} */
                var control;
                /** @type {?} */
                var form = ( /** @type {?} */(field.parent.formControl));
                /** @type {?} */
                var value = getFieldValue(field);
                /** @type {?} */
                var paths = getKeyPath(field);
                if (field.formControl instanceof forms.AbstractControl ||
                    (form && form.get(paths))) {
                    control = field.formControl || form.get(paths);
                }
                else if (field._componentFactory &&
                    field._componentFactory.component &&
                    field._componentFactory.component.createControl) {
                    /** @type {?} */
                    var component = field._componentFactory.component;
                    control = component.createControl(value, field);
                }
                else if (field.fieldGroup) {
                    control = new forms.FormGroup({}, controlOptions);
                }
                else {
                    control = new forms.FormControl(value, controlOptions);
                }
                registerControl(field, control);
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        FieldFormExtension.prototype.setValidators = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                var _this = this;
                /** @type {?} */
                var updateValidity = false;
                if (field.key) {
                    var validators = field._validators, asyncValidators = field._asyncValidators, control = field.formControl, disabled = field.templateOptions.disabled;
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
                (field.fieldGroup || []).forEach(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) { return _this.setValidators(f) && (updateValidity = true); }));
                return updateValidity;
            };
        return FieldFormExtension;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Guid = /** @class */ (function () {
        function Guid(guid) {
            this.value = Guid.EMPTY;
            if (guid && Guid.isGuid(guid)) {
                this.value = guid;
            }
        }
        /**
         * @param {?} guid
         * @return {?}
         */
        Guid.isGuid = /**
         * @param {?} guid
         * @return {?}
         */
            function (guid) {
                /** @type {?} */
                var value = guid.toString();
                return guid && (guid instanceof Guid || Guid.validator.test(value));
            };
        /**
         * @return {?}
         */
        Guid.create = /**
         * @return {?}
         */
            function () {
                return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));
            };
        /**
         * @return {?}
         */
        Guid.createEmpty = /**
         * @return {?}
         */
            function () {
                return new Guid('emptyguid');
            };
        /**
         * @param {?} guid
         * @return {?}
         */
        Guid.parse = /**
         * @param {?} guid
         * @return {?}
         */
            function (guid) {
                return new Guid(guid);
            };
        /**
         * @return {?}
         */
        Guid.raw = /**
         * @return {?}
         */
            function () {
                return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
            };
        /**
         * @private
         * @param {?} count
         * @return {?}
         */
        Guid.gen = /**
         * @private
         * @param {?} count
         * @return {?}
         */
            function (count) {
                /** @type {?} */
                var out = '';
                for (var i = 0; i < count; i++) {
                    out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                }
                return out;
            };
        /**
         * @param {?} other
         * @return {?}
         */
        Guid.prototype.equals = /**
         * @param {?} other
         * @return {?}
         */
            function (other) {
                return Guid.isGuid(other) && this.value === other.toString();
            };
        /**
         * @return {?}
         */
        Guid.prototype.isEmpty = /**
         * @return {?}
         */
            function () {
                return this.value === Guid.EMPTY;
            };
        /**
         * @return {?}
         */
        Guid.prototype.toString = /**
         * @return {?}
         */
            function () {
                return this.value;
            };
        /**
         * @return {?}
         */
        Guid.prototype.toJSON = /**
         * @return {?}
         */
            function () {
                return {
                    value: this.value,
                };
            };
        Guid.validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
        Guid.EMPTY = '00000000-0000-0000-0000-000000000000';
        return Guid;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreExtension = /** @class */ (function () {
        function CoreExtension(vxFormConfig) {
            this.vxFormConfig = vxFormConfig;
            this.formId = 0;
        }
        /**
         * @param {?} field
         * @return {?}
         */
        CoreExtension.prototype.prePopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                this.getFieldComponentInstance(field).prePopulate();
                if (field.parent) {
                    return;
                }
                /** @type {?} */
                var fieldTransforms = (field.options && field.options.fieldTransform) ||
                    this.vxFormConfig.extras.fieldTransform;
                (Array.isArray(fieldTransforms)
                    ? fieldTransforms
                    : [fieldTransforms]).forEach(( /**
             * @param {?} fieldTransform
             * @return {?}
             */function (fieldTransform) {
                    if (fieldTransform) {
                        /** @type {?} */
                        var fieldGroup = fieldTransform(field.fieldGroup, field.model, ( /** @type {?} */(field.formControl)), field.options);
                    }
                }));
            };
        /**
         * @param {?} field
         * @return {?}
         */
        CoreExtension.prototype.onPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                var _this = this;
                this.initFieldOptions(field);
                this.getFieldComponentInstance(field).onPopulate();
                if (field.fieldGroup) {
                    field.fieldGroup.forEach(( /**
                     * @param {?} f
                     * @param {?} index
                     * @return {?}
                     */function (f, index) {
                        Object.defineProperty(f, "parent", {
                            get: ( /**
                             * @return {?}
                             */function () { return field; }),
                            configurable: true
                        });
                        Object.defineProperty(f, "index", {
                            get: ( /**
                             * @return {?}
                             */function () { return index; }),
                            configurable: true
                        });
                        _this.formId++;
                    }));
                }
            };
        /**
         * @param {?} field
         * @return {?}
         */
        CoreExtension.prototype.postPopulate = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                this.getFieldComponentInstance(field).postPopulate();
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        CoreExtension.prototype.initFieldOptions = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                /** @type {?} */
                var root = ( /** @type {?} */(field.parent));
                if (!root) {
                    return;
                }
                Object.defineProperty(field, "form", {
                    get: ( /**
                     * @return {?}
                     */function () { return root.formControl; }),
                    configurable: true
                });
                Object.defineProperty(field, "options", {
                    get: ( /**
                     * @return {?}
                     */function () { return root.options; }),
                    configurable: true
                });
                Object.defineProperty(field, "model", {
                    get: ( /**
                     * @return {?}
                     */function () {
                        return field.key && field.fieldGroup ? getFieldValue(field) : root.model;
                    }),
                    configurable: true
                });
                reverseDeepMerge(field, {
                    id: getFieldId("vxform_" + this.formId, field, field["index"]),
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
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        CoreExtension.prototype.initFieldWrappers = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                field.wrappers = field.wrappers || [];
                /** @type {?} */
                var fieldTemplateManipulators = __assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
                field.wrappers = __spread(this.vxFormConfig.templateManipulators.preWrapper.map(( /**
                 * @param {?} m
                 * @return {?}
                 */function (m) { return m(field); })), fieldTemplateManipulators.preWrapper.map(( /**
                 * @param {?} m
                 * @return {?}
                 */function (m) { return m(field); })), field.wrappers, this.vxFormConfig.templateManipulators.postWrapper.map(( /**
                 * @param {?} m
                 * @return {?}
                 */function (m) { return m(field); })), fieldTemplateManipulators.postWrapper.map(( /**
                 * @param {?} m
                 * @return {?}
                 */function (m) { return m(field); }))).filter(( /**
                 * @param {?} el
                 * @param {?} i
                 * @param {?} a
                 * @return {?}
                 */function (el, i, a) { return el && i === a.indexOf(el); }));
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        CoreExtension.prototype.getFieldComponentInstance = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                /** @type {?} */
                var componentRef = this.vxFormConfig.createComponent(field);
                /** @type {?} */
                var instance = componentRef
                    ? (( /** @type {?} */(componentRef.instance)))
                    : {};
                return {
                    prePopulate: ( /**
                     * @return {?}
                     */function () { return instance.prePopulate && instance.prePopulate(field); }),
                    onPopulate: ( /**
                     * @return {?}
                     */function () { return instance.onPopulate && instance.onPopulate(field); }),
                    postPopulate: ( /**
                     * @return {?}
                     */function () { return instance.postPopulate && instance.postPopulate(field); })
                };
            };
        return CoreExtension;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VXFormCommonService = /** @class */ (function () {
        function VXFormCommonService() {
        }
        /**
         * @param {?} fields
         * @return {?}
         */
        VXFormCommonService.prototype.initFormFieldProperty = /**
         * @param {?} fields
         * @return {?}
         */
            function (fields) {
                var _this = this;
                fields.forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
                    _this.deleteFieldProperty(field);
                }));
            };
        //初始化表单JSON对象
        //初始化表单JSON对象
        /**
         * @param {?} fields
         * @param {?} fieldPropertys
         * @return {?}
         */
        VXFormCommonService.prototype.initFormFieldConfig =
            //初始化表单JSON对象
            /**
             * @param {?} fields
             * @param {?} fieldPropertys
             * @return {?}
             */
            function (fields, fieldPropertys) {
                var _this = this;
                fields.forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
                    _this.setFieldProperty(field, fieldPropertys);
                }));
            };
        /**
         * @param {?} fields
         * @param {?} model
         * @return {?}
         */
        VXFormCommonService.prototype.initFormFieldModel = /**
         * @param {?} fields
         * @param {?} model
         * @return {?}
         */
            function (fields, model) {
                var _this = this;
                fields.forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
                    if (field.hasOwnProperty("editor")) {
                        field.typeold = field.type;
                        field.type = "text";
                        if (_this.checkFieldDefaultValue(field)) {
                            model[field.key] = field.defaultValue;
                        }
                    }
                    if (field.hasOwnProperty("fieldArray")) {
                        if (field.fieldArray.hasOwnProperty("fieldGroup")) {
                            model[field.key] = [{}];
                            field.fieldArray.fieldGroup.forEach(( /**
                             * @param {?} fieldGroup
                             * @return {?}
                             */function (fieldGroup) {
                                if (fieldGroup.hasOwnProperty("editor")) {
                                    fieldGroup.typeold = field.type;
                                    fieldGroup.type = "text";
                                }
                            }));
                        }
                    }
                    if (field.hasOwnProperty("fieldGroup")) {
                        //初始化值
                        if (!_this.checkFieldDefaultValue(field)) {
                            model[field.key] = {};
                        }
                        field.fieldGroup.forEach(( /**
                         * @param {?} fieldGroup
                         * @return {?}
                         */function (fieldGroup) {
                            if (fieldGroup.hasOwnProperty("editor")) {
                                fieldGroup.typeold = fieldGroup.type;
                                fieldGroup.type = "text";
                                if (_this.checkFieldDefaultValue(model[field.key][fieldGroup.key])) {
                                    model[field.key][fieldGroup.key] = fieldGroup.defaultValue;
                                }
                            }
                        }));
                    }
                }));
            };
        //初始化表单序号
        //初始化表单序号
        /**
         * @param {?} surveyInfo
         * @return {?}
         */
        VXFormCommonService.prototype.initSurveyFormFieldConfig =
            //初始化表单序号
            /**
             * @param {?} surveyInfo
             * @return {?}
             */
            function (surveyInfo) {
                var _this = this;
                surveyInfo.queTotal = 0;
                if (surveyInfo.pages) {
                    surveyInfo.pages.forEach(( /**
                     * @param {?} page
                     * @return {?}
                     */function (page) {
                        _this.setFieldNumber(surveyInfo, page.questions);
                    }));
                }
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        VXFormCommonService.prototype.checkFieldDefaultValue = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
                /** @type {?} */
                var result = false;
                if (field != undefined &&
                    field != null &&
                    field.defaultValue != undefined &&
                    field.defaultValue != null) {
                    return true;
                }
                return result;
            };
        /**
         * @private
         * @param {?} field
         * @return {?}
         */
        VXFormCommonService.prototype.deleteFieldProperty = /**
         * @private
         * @param {?} field
         * @return {?}
         */
            function (field) {
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
            };
        /**
         * @private
         * @param {?} field
         * @param {?} fieldPropertys
         * @return {?}
         */
        VXFormCommonService.prototype.setFieldProperty = /**
         * @private
         * @param {?} field
         * @param {?} fieldPropertys
         * @return {?}
         */
            function (field, fieldPropertys) {
                /** @type {?} */
                var items = fieldPropertys.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    return item.key === field.key;
                }));
                if (items != undefined && items != null && items.length > 0) {
                    /** @type {?} */
                    var item = items[0];
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
            };
        /**
         * @private
         * @param {?} surveyInfo
         * @param {?} fields
         * @return {?}
         */
        VXFormCommonService.prototype.setFieldNumber = /**
         * @private
         * @param {?} surveyInfo
         * @param {?} fields
         * @return {?}
         */
            function (surveyInfo, fields) {
                fields.forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
                    if (field.type != "line" && field.type != "remark") {
                        surveyInfo.queTotal = surveyInfo.queTotal + 1;
                        field.templateOptions.queno = "Q" + surveyInfo.queTotal;
                    }
                }));
            };
        VXFormCommonService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: "root" },] }
        ];
        /** @nocollapse */
        VXFormCommonService.ctorParameters = function () { return []; };
        /** @nocollapse */ VXFormCommonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormCommonService_Factory() { return new VXFormCommonService(); }, token: VXFormCommonService, providedIn: "root" });
        return VXFormCommonService;
    }());

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
    var VXFormModule = /** @class */ (function () {
        function VXFormModule(configService, configs) {
            if (configs === void 0) {
                configs = [];
            }
            if (!configs) {
                return;
            }
            configs.forEach(( /**
             * @param {?} config
             * @return {?}
             */function (config) { return configService.addConfig(config); }));
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        VXFormModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                if (config === void 0) {
                    config = {};
                }
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
                            provide: i0.ANALYZE_FOR_ENTRY_COMPONENTS,
                            useValue: config,
                            multi: true
                        },
                        VXFormConfig,
                        VXFormBuilder
                    ]
                };
            };
        /**
         * @param {?=} config
         * @return {?}
         */
        VXFormModule.forChild = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                if (config === void 0) {
                    config = {};
                }
                return {
                    ngModule: VXFormModule,
                    providers: [
                        { provide: VXFORM_CONFIG, useValue: config, multi: true },
                        {
                            provide: i0.ANALYZE_FOR_ENTRY_COMPONENTS,
                            useValue: config,
                            multi: true
                        },
                        VXFormBuilder
                    ]
                };
            };
        /**
         * @param {?} config
         * @return {?}
         */
        VXFormModule.forConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                if (localStorage.getItem("VX_FORM_LINCES") != null && localStorage.getItem("VX_FORM_LINCES") != "") {
                    localStorage.removeItem("VX_FORM_LINCES");
                }
                localStorage.setItem("VX_FORM_LINCES", config);
                return {
                    ngModule: VXFormModule,
                    providers: [VXFormBuilder]
                };
            };
        VXFormModule.decorators = [
            { type: i0.NgModule, args: [{
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
                        imports: [http.HttpModule, http$1.HttpClientModule, common.CommonModule],
                        providers: [VXFormCommonService]
                    },] }
        ];
        /** @nocollapse */
        VXFormModule.ctorParameters = function () {
            return [
                { type: VXFormConfig },
                { type: Array, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [VXFORM_CONFIG,] }] }
            ];
        };
        return VXFormModule;
    }());

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

    exports.VXForm = VXForm;
    exports.VXFormField = VXFormField;
    exports.VXFormAttributes = VXFormAttributes;
    exports.VXFORM_CONFIG = VXFORM_CONFIG;
    exports.VXFormConfig = VXFormConfig;
    exports.VXFormBuilder = VXFormBuilder;
    exports.FieldType = FieldType;
    exports.Field = Field;
    exports.FieldArrayType = FieldArrayType;
    exports.FieldWrapper = FieldWrapper;
    exports.VXFormModule = VXFormModule;
    exports.ɵdefineHiddenProp = defineHiddenProp;
    exports.ɵreverseDeepMerge = reverseDeepMerge;
    exports.clone = clone;
    exports.isObject = isObject;
    exports.Guid = Guid;
    exports.VXFormCommonService = VXFormCommonService;
    exports.TestBaseUtils = TestBaseUtils;
    exports.ɵa = defaultVXFormConfig;
    exports.ɵe = CoreExtension;
    exports.ɵh = FieldExpressionExtension;
    exports.ɵg = FieldFormExtension;
    exports.ɵf = FieldValidationExtension;
    exports.ɵd = VXFormTemplateType;
    exports.ɵb = VXFormGroup;
    exports.ɵc = VXFormValidationMessage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=vx-form-core.umd.js.map