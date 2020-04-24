/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, InjectionToken } from "@angular/core";
import { reverseDeepMerge, defineHiddenProp } from "./../utils";
import * as i0 from "@angular/core";
/** @type {?} */
export var VXFORM_CONFIG = new InjectionToken("VXFORM_CONFIG");
/**
 * @record
 */
export function VXFormExtension() { }
if (false) {
    /**
     * @param {?} field
     * @return {?}
     */
    VXFormExtension.prototype.prePopulate = function (field) { };
    /**
     * @param {?} field
     * @return {?}
     */
    VXFormExtension.prototype.onPopulate = function (field) { };
    /**
     * @param {?} field
     * @return {?}
     */
    VXFormExtension.prototype.postPopulate = function (field) { };
}
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
    VXFormConfig.prototype.addConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (config.types) {
            config.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return _this.setType(type); }));
        }
        if (config.validators) {
            config.validators.forEach((/**
             * @param {?} validator
             * @return {?}
             */
            function (validator) { return _this.setValidator(validator); }));
        }
        if (config.wrappers) {
            config.wrappers.forEach((/**
             * @param {?} wrapper
             * @return {?}
             */
            function (wrapper) { return _this.setWrapper(wrapper); }));
        }
        if (config.manipulators) {
            config.manipulators.forEach((/**
             * @param {?} manipulator
             * @return {?}
             */
            function (manipulator) {
                return _this.setManipulator(manipulator);
            }));
        }
        if (config.validationMessages) {
            config.validationMessages.forEach((/**
             * @param {?} validation
             * @return {?}
             */
            function (validation) {
                return _this.addValidatorMessage(validation.name, validation.message);
            }));
        }
        if (config.extensions) {
            config.extensions.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return (_this.extensions[c.name] = c.extension); }));
        }
        if (config.extras) {
            this.extras = tslib_1.__assign({}, this.extras, config.extras);
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
            options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return _this.setType(option); }));
        }
        else {
            if (!this.types[options.name]) {
                this.types[options.name] = (/** @type {?} */ ({ name: options.name }));
            }
            ["component", "extends", "defaultOptions"].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            function (prop) {
                if (options.hasOwnProperty(prop)) {
                    _this.types[options.name][prop] = options[prop];
                }
            }));
            if (options.wrappers) {
                options.wrappers.forEach((/**
                 * @param {?} wrapper
                 * @return {?}
                 */
                function (wrapper) {
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
        if (!this.types[name]) {
        }
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
        if (field === void 0) { field = {}; }
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
            field.optionsTypes.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
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
            field.wrappers = tslib_1.__spread(type.wrappers);
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
        if (field === void 0) { field = {}; }
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
            options.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
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
        if (!this.wrappers[name]) {
        }
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
            this.types[type] = (/** @type {?} */ ({}));
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
        if (!this.validators[name]) {
        }
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
        if (field === void 0) { field = {}; }
        /** @type {?} */
        var parent = field.parent;
        if (parent._componentFactory && parent._componentFactory.componentRef) {
            return parent._componentFactory.componentRef.injector;
        }
        return parent.options._injector;
    };
    VXFormConfig.decorators = [
        { type: Injectable, args: [{ providedIn: "root" },] }
    ];
    /** @nocollapse */ VXFormConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VXFormConfig_Factory() { return new VXFormConfig(); }, token: VXFormConfig, providedIn: "root" });
    return VXFormConfig;
}());
export { VXFormConfig };
if (false) {
    /** @type {?} */
    VXFormConfig.prototype.types;
    /** @type {?} */
    VXFormConfig.prototype.validators;
    /** @type {?} */
    VXFormConfig.prototype.wrappers;
    /** @type {?} */
    VXFormConfig.prototype.messages;
    /** @type {?} */
    VXFormConfig.prototype.templateManipulators;
    /** @type {?} */
    VXFormConfig.prototype.extras;
    /** @type {?} */
    VXFormConfig.prototype.extensions;
    /** @type {?} */
    VXFormConfig.prototype.appConfig;
}
/**
 * @record
 */
export function TypeOption() { }
if (false) {
    /** @type {?} */
    TypeOption.prototype.name;
    /** @type {?|undefined} */
    TypeOption.prototype.component;
    /** @type {?|undefined} */
    TypeOption.prototype.wrappers;
    /** @type {?|undefined} */
    TypeOption.prototype.extends;
    /** @type {?|undefined} */
    TypeOption.prototype.defaultOptions;
}
/**
 * @record
 */
export function WrapperOption() { }
if (false) {
    /** @type {?} */
    WrapperOption.prototype.name;
    /** @type {?} */
    WrapperOption.prototype.component;
    /** @type {?|undefined} */
    WrapperOption.prototype.types;
}
/**
 * @record
 */
export function FieldValidatorFn() { }
/**
 * @record
 */
export function ValidatorOption() { }
if (false) {
    /** @type {?} */
    ValidatorOption.prototype.name;
    /** @type {?} */
    ValidatorOption.prototype.validation;
}
/**
 * @record
 */
export function ExtensionOption() { }
if (false) {
    /** @type {?} */
    ExtensionOption.prototype.name;
    /** @type {?} */
    ExtensionOption.prototype.extension;
}
/**
 * @record
 */
export function ValidationMessageOption() { }
if (false) {
    /** @type {?} */
    ValidationMessageOption.prototype.name;
    /** @type {?} */
    ValidationMessageOption.prototype.message;
}
/**
 * @record
 */
export function ManipulatorOption() { }
if (false) {
    /** @type {?|undefined} */
    ManipulatorOption.prototype.class;
    /** @type {?|undefined} */
    ManipulatorOption.prototype.method;
}
/**
 * @record
 */
export function ManipulatorWrapper() { }
/**
 * @record
 */
export function TemplateManipulators() { }
if (false) {
    /** @type {?|undefined} */
    TemplateManipulators.prototype.preWrapper;
    /** @type {?|undefined} */
    TemplateManipulators.prototype.postWrapper;
}
/**
 * @record
 */
export function ConfigOption() { }
if (false) {
    /** @type {?|undefined} */
    ConfigOption.prototype.types;
    /** @type {?|undefined} */
    ConfigOption.prototype.wrappers;
    /** @type {?|undefined} */
    ConfigOption.prototype.validators;
    /** @type {?|undefined} */
    ConfigOption.prototype.extensions;
    /** @type {?|undefined} */
    ConfigOption.prototype.validationMessages;
    /** @type {?|undefined} */
    ConfigOption.prototype.manipulators;
    /** @type {?|undefined} */
    ConfigOption.prototype.extras;
}
/**
 * @record
 */
export function APPConfig() { }
if (false) {
    /** @type {?|undefined} */
    APPConfig.prototype.url;
    /** @type {?|undefined} */
    APPConfig.prototype.token;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnhmb3JtLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdnhmb3JtLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsY0FBYyxFQUlmLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBTWhFLE1BQU0sS0FBTyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQWUsZUFBZSxDQUFDOzs7O0FBRTlFLHFDQUlDOzs7Ozs7SUFIQyw2REFBNkM7Ozs7O0lBQzdDLDREQUE0Qzs7Ozs7SUFDNUMsOERBQThDOztBQUdoRDtJQUFBO1FBRUUsVUFBSyxHQUFtQyxFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUF3QyxFQUFFLENBQUM7UUFDckQsYUFBUSxHQUFzQyxFQUFFLENBQUM7UUFDakQsYUFBUSxHQUVKLEVBQUUsQ0FBQztRQUNQLHlCQUFvQixHQUdoQjtZQUNGLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUNGLFdBQU0sR0FBMkI7WUFDL0IsaUJBQWlCLEVBQUUsc0JBQXNCO1lBQ3pDLFNBQVM7Ozs7WUFBRSxVQUFTLEtBQWdCO2dCQUNsQyxPQUFPLENBQ0wsS0FBSyxDQUFDLFdBQVc7b0JBQ2pCLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTztvQkFDekIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU87d0JBQ3hCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO3dCQUNoRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENB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Q0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQzs7Z0JBdlBGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozt1QkF2QmxDO0NBK1FDLEFBeFBELElBd1BDO1NBdlBZLFlBQVk7OztJQUN2Qiw2QkFBMkM7O0lBQzNDLGtDQUFxRDs7SUFDckQsZ0NBQWlEOztJQUNqRCxnQ0FFTzs7SUFDUCw0Q0FNRTs7SUFDRiw4QkFXRTs7SUFDRixrQ0FBcUQ7O0lBRXJELGlDQUdFOzs7OztBQXlOSixnQ0FNQzs7O0lBTEMsMEJBQWE7O0lBQ2IsK0JBQWdCOztJQUNoQiw4QkFBb0I7O0lBQ3BCLDZCQUFpQjs7SUFDakIsb0NBQW1DOzs7OztBQUdyQyxtQ0FJQzs7O0lBSEMsNkJBQWE7O0lBQ2Isa0NBQWU7O0lBQ2YsOEJBQWlCOzs7OztBQUduQixzQ0FFQzs7OztBQUVELHFDQUdDOzs7SUFGQywrQkFBYTs7SUFDYixxQ0FBNkI7Ozs7O0FBRy9CLHFDQUdDOzs7SUFGQywrQkFBYTs7SUFDYixvQ0FBMkI7Ozs7O0FBRzdCLDZDQUdDOzs7SUFGQyx1Q0FBYTs7SUFDYiwwQ0FBcUU7Ozs7O0FBR3ZFLHVDQUdDOzs7SUFGQyxrQ0FBd0I7O0lBQ3hCLG1DQUFnQjs7Ozs7QUFHbEIsd0NBRUM7Ozs7QUFFRCwwQ0FHQzs7O0lBRkMsMENBQWtDOztJQUNsQywyQ0FBbUM7Ozs7O0FBR3JDLGtDQWNDOzs7SUFiQyw2QkFBcUI7O0lBQ3JCLGdDQUEyQjs7SUFDM0Isa0NBQStCOztJQUMvQixrQ0FBK0I7O0lBQy9CLDBDQUErQzs7SUFFL0Msb0NBQW1DOztJQUNuQyw4QkFLRTs7Ozs7QUFHSiwrQkFHQzs7O0lBRkMsd0JBQWE7O0lBQ2IsMEJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBJbmplY3RvclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi8uLi90ZW1wbGF0ZXMvZmllbGQudHlwZVwiO1xyXG5pbXBvcnQgeyByZXZlcnNlRGVlcE1lcmdlLCBkZWZpbmVIaWRkZW5Qcm9wIH0gZnJvbSBcIi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtcclxuICBWWEZvcm1GaWVsZENvbmZpZyxcclxuICBWWEZvcm1GaWVsZENvbmZpZ0NhY2hlXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdnhmb3JtLmZpZWxkLmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZYRk9STV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VlhGb3JtQ29uZmlnPihcIlZYRk9STV9DT05GSUdcIik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZYRm9ybUV4dGVuc2lvbiB7XHJcbiAgcHJlUG9wdWxhdGU/KGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyk6IHZvaWQ7XHJcbiAgb25Qb3B1bGF0ZT8oZmllbGQ6IFZYRm9ybUZpZWxkQ29uZmlnKTogdm9pZDtcclxuICBwb3N0UG9wdWxhdGU/KGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyk6IHZvaWQ7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogXCJyb290XCIgfSlcclxuZXhwb3J0IGNsYXNzIFZYRm9ybUNvbmZpZyB7XHJcbiAgdHlwZXM6IHsgW25hbWU6IHN0cmluZ106IFR5cGVPcHRpb24gfSA9IHt9O1xyXG4gIHZhbGlkYXRvcnM6IHsgW25hbWU6IHN0cmluZ106IFZhbGlkYXRvck9wdGlvbiB9ID0ge307XHJcbiAgd3JhcHBlcnM6IHsgW25hbWU6IHN0cmluZ106IFdyYXBwZXJPcHRpb24gfSA9IHt9O1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgKChlcnJvcjogYW55LCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpID0+IHN0cmluZyk7XHJcbiAgfSA9IHt9O1xyXG4gIHRlbXBsYXRlTWFuaXB1bGF0b3JzOiB7XHJcbiAgICBwcmVXcmFwcGVyOiBNYW5pcHVsYXRvcldyYXBwZXJbXTtcclxuICAgIHBvc3RXcmFwcGVyOiBNYW5pcHVsYXRvcldyYXBwZXJbXTtcclxuICB9ID0ge1xyXG4gICAgcHJlV3JhcHBlcjogW10sXHJcbiAgICBwb3N0V3JhcHBlcjogW11cclxuICB9O1xyXG4gIGV4dHJhczogQ29uZmlnT3B0aW9uW1wiZXh0cmFzXCJdID0ge1xyXG4gICAgY2hlY2tFeHByZXNzaW9uT246IFwiY2hhbmdlRGV0ZWN0aW9uQ2hlY2tcIixcclxuICAgIHNob3dFcnJvcjogZnVuY3Rpb24oZmllbGQ6IEZpZWxkVHlwZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGZpZWxkLmZvcm1Db250cm9sICYmXHJcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJlxyXG4gICAgICAgIChmaWVsZC5mb3JtQ29udHJvbC50b3VjaGVkIHx8XHJcbiAgICAgICAgICAoZmllbGQub3B0aW9ucy5wYXJlbnRGb3JtICYmIGZpZWxkLm9wdGlvbnMucGFyZW50Rm9ybS5zdWJtaXR0ZWQpIHx8XHJcbiAgICAgICAgICAoZmllbGQuZmllbGQudmFsaWRhdGlvbiAmJiBmaWVsZC5maWVsZC52YWxpZGF0aW9uLnNob3cpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZXh0ZW5zaW9uczogeyBbbmFtZTogc3RyaW5nXTogVlhGb3JtRXh0ZW5zaW9uIH0gPSB7fTtcclxuXHJcbiAgYXBwQ29uZmlnOiB7XHJcbiAgICB1cmw/OiBzdHJpbmc7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICB9O1xyXG5cclxuICBhZGRDb25maWcoY29uZmlnOiBDb25maWdPcHRpb24pIHtcclxuICAgIGlmIChjb25maWcudHlwZXMpIHtcclxuICAgICAgY29uZmlnLnR5cGVzLmZvckVhY2godHlwZSA9PiB0aGlzLnNldFR5cGUodHlwZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy52YWxpZGF0b3JzKSB7XHJcbiAgICAgIGNvbmZpZy52YWxpZGF0b3JzLmZvckVhY2godmFsaWRhdG9yID0+IHRoaXMuc2V0VmFsaWRhdG9yKHZhbGlkYXRvcikpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy53cmFwcGVycykge1xyXG4gICAgICBjb25maWcud3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHRoaXMuc2V0V3JhcHBlcih3cmFwcGVyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLm1hbmlwdWxhdG9ycykge1xyXG4gICAgICBjb25maWcubWFuaXB1bGF0b3JzLmZvckVhY2gobWFuaXB1bGF0b3IgPT5cclxuICAgICAgICB0aGlzLnNldE1hbmlwdWxhdG9yKG1hbmlwdWxhdG9yKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMpIHtcclxuICAgICAgY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcy5mb3JFYWNoKHZhbGlkYXRpb24gPT5cclxuICAgICAgICB0aGlzLmFkZFZhbGlkYXRvck1lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmV4dGVuc2lvbnMpIHtcclxuICAgICAgY29uZmlnLmV4dGVuc2lvbnMuZm9yRWFjaChjID0+ICh0aGlzLmV4dGVuc2lvbnNbYy5uYW1lXSA9IGMuZXh0ZW5zaW9uKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmV4dHJhcykge1xyXG4gICAgICB0aGlzLmV4dHJhcyA9IHsgLi4udGhpcy5leHRyYXMsIC4uLmNvbmZpZy5leHRyYXMgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFR5cGUob3B0aW9uczogVHlwZU9wdGlvbiB8IFR5cGVPcHRpb25bXSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcclxuICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB0aGlzLnNldFR5cGUob3B0aW9uKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMudHlwZXNbb3B0aW9ucy5uYW1lXSkge1xyXG4gICAgICAgIHRoaXMudHlwZXNbb3B0aW9ucy5uYW1lXSA9IDxUeXBlT3B0aW9uPnsgbmFtZTogb3B0aW9ucy5uYW1lIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtcImNvbXBvbmVudFwiLCBcImV4dGVuZHNcIiwgXCJkZWZhdWx0T3B0aW9uc1wiXS5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGVzW29wdGlvbnMubmFtZV1bcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy53cmFwcGVycykge1xyXG4gICAgICAgIG9wdGlvbnMud3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+XHJcbiAgICAgICAgICB0aGlzLnNldFR5cGVXcmFwcGVyKG9wdGlvbnMubmFtZSwgd3JhcHBlcilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlKG5hbWU6IHN0cmluZyk6IFR5cGVPcHRpb24ge1xyXG4gICAgaWYgKCF0aGlzLnR5cGVzW25hbWVdKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZXJnZUV4dGVuZGVkVHlwZShuYW1lKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy50eXBlc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIGdldE1lcmdlZEZpZWxkKGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyA9IHt9KTogYW55IHtcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoZmllbGQudHlwZSk7XHJcbiAgICBpZiAodHlwZS5kZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICByZXZlcnNlRGVlcE1lcmdlKGZpZWxkLCB0eXBlLmRlZmF1bHRPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHRlbmREZWZhdWx0cyA9XHJcbiAgICAgIHR5cGUuZXh0ZW5kcyAmJiB0aGlzLmdldFR5cGUodHlwZS5leHRlbmRzKS5kZWZhdWx0T3B0aW9ucztcclxuICAgIGlmIChleHRlbmREZWZhdWx0cykge1xyXG4gICAgICByZXZlcnNlRGVlcE1lcmdlKGZpZWxkLCBleHRlbmREZWZhdWx0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkICYmIGZpZWxkLm9wdGlvbnNUeXBlcykge1xyXG4gICAgICBmaWVsZC5vcHRpb25zVHlwZXMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gdGhpcy5nZXRUeXBlKG9wdGlvbikuZGVmYXVsdE9wdGlvbnM7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgICByZXZlcnNlRGVlcE1lcmdlKGZpZWxkLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChmaWVsZCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNvbXBvbmVudFJlZiAmJlxyXG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UgJiZcclxuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRlZmF1bHRPcHRpb25zXHJcbiAgICApIHtcclxuICAgICAgcmV2ZXJzZURlZXBNZXJnZShmaWVsZCwgY29tcG9uZW50UmVmLmluc3RhbmNlLmRlZmF1bHRPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZpZWxkLndyYXBwZXJzICYmIHR5cGUud3JhcHBlcnMpIHtcclxuICAgICAgZmllbGQud3JhcHBlcnMgPSBbLi4udHlwZS53cmFwcGVyc107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb21wb25lbnQoXHJcbiAgICBmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSA9IHt9LFxyXG4gICAgcmVzb2x2ZXI/OiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBpbmplY3Rvcj86IEluamVjdG9yXHJcbiAgKTogQ29tcG9uZW50UmVmPEZpZWxkVHlwZT4ge1xyXG4gICAgaWYgKCFmaWVsZC50eXBlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZiA9IGZpZWxkLl9jb21wb25lbnRGYWN0b3J5O1xyXG4gICAgaWYgKFxyXG4gICAgICBjZiAmJlxyXG4gICAgICBmaWVsZC50eXBlID09PSBjZi50eXBlICYmXHJcbiAgICAgIGNmLmNvbXBvbmVudFJlZiAmJlxyXG4gICAgICBjZi5jb21wb25lbnRSZWYuaG9zdFZpZXcgJiZcclxuICAgICAgIWNmLmNvbXBvbmVudFJlZi5ob3N0Vmlldy5kZXN0cm95ZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmllbGQuX2NvbXBvbmVudEZhY3RvcnkuY29tcG9uZW50UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoZmllbGQudHlwZSk7XHJcbiAgICBpZiAoIXJlc29sdmVyKSB7XHJcbiAgICAgIHJlc29sdmVyID0gZmllbGQucGFyZW50Lm9wdGlvbnMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIH1cclxuICAgIGlmICghaW5qZWN0b3IpIHtcclxuICAgICAgaW5qZWN0b3IgPSB0aGlzLmdldEZpZWxkSW5qZWN0b3IoZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsIFwiX2NvbXBvbmVudEZhY3RvcnlcIiwge1xyXG4gICAgICB0eXBlOiBmaWVsZC50eXBlLFxyXG4gICAgICBjb21wb25lbnQ6IHR5cGUuY29tcG9uZW50LFxyXG4gICAgICBjb21wb25lbnRSZWY6IHJlc29sdmVyXHJcbiAgICAgICAgPyByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlLmNvbXBvbmVudCkuY3JlYXRlKGluamVjdG9yKVxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkLl9jb21wb25lbnRGYWN0b3J5LmNvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIHNldFdyYXBwZXIob3B0aW9uczogV3JhcHBlck9wdGlvbikge1xyXG4gICAgdGhpcy53cmFwcGVyc1tvcHRpb25zLm5hbWVdID0gb3B0aW9ucztcclxuICAgIGlmIChvcHRpb25zLnR5cGVzKSB7XHJcbiAgICAgIG9wdGlvbnMudHlwZXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFR5cGVXcmFwcGVyKHR5cGUsIG9wdGlvbnMubmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V3JhcHBlcihuYW1lOiBzdHJpbmcpOiBXcmFwcGVyT3B0aW9uIHtcclxuICAgIGlmICghdGhpcy53cmFwcGVyc1tuYW1lXSkge1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLndyYXBwZXJzW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgc2V0VHlwZVdyYXBwZXIodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy50eXBlc1t0eXBlXSkge1xyXG4gICAgICB0aGlzLnR5cGVzW3R5cGVdID0gPFR5cGVPcHRpb24+e307XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMudHlwZXNbdHlwZV0ud3JhcHBlcnMpIHtcclxuICAgICAgdGhpcy50eXBlc1t0eXBlXS53cmFwcGVycyA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZXNbdHlwZV0ud3JhcHBlcnMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy50eXBlc1t0eXBlXS53cmFwcGVycy5wdXNoKG5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsaWRhdG9yKG9wdGlvbnM6IFZhbGlkYXRvck9wdGlvbikge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzW29wdGlvbnMubmFtZV0gPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRhdG9yKG5hbWU6IHN0cmluZyk6IFZhbGlkYXRvck9wdGlvbiB7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdG9yc1tuYW1lXSkge1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBhZGRWYWxpZGF0b3JNZXNzYWdlKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgKChlcnJvcjogYW55LCBmaWVsZDogVlhGb3JtRmllbGRDb25maWcpID0+IHN0cmluZylcclxuICApIHtcclxuICAgIHRoaXMubWVzc2FnZXNbbmFtZV0gPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRhdG9yTWVzc2FnZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgc2V0TWFuaXB1bGF0b3IobWFuaXB1bGF0b3I6IE1hbmlwdWxhdG9yT3B0aW9uKSB7XHJcbiAgICBuZXcgbWFuaXB1bGF0b3IuY2xhc3MoKVttYW5pcHVsYXRvci5tZXRob2RdKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0QVBQQ29uZmlnKGNvbmZpZzogQVBQQ29uZmlnKSB7XHJcbiAgICB0aGlzLmFwcENvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWVyZ2VFeHRlbmRlZFR5cGUobmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMudHlwZXNbbmFtZV0uZXh0ZW5kcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXh0ZW5kZWRUeXBlID0gdGhpcy5nZXRUeXBlKHRoaXMudHlwZXNbbmFtZV0uZXh0ZW5kcyk7XHJcbiAgICBpZiAoIXRoaXMudHlwZXNbbmFtZV0uY29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMudHlwZXNbbmFtZV0uY29tcG9uZW50ID0gZXh0ZW5kZWRUeXBlLmNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMudHlwZXNbbmFtZV0ud3JhcHBlcnMpIHtcclxuICAgICAgdGhpcy50eXBlc1tuYW1lXS53cmFwcGVycyA9IGV4dGVuZGVkVHlwZS53cmFwcGVycztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RmllbGRJbmplY3RvcihmaWVsZDogVlhGb3JtRmllbGRDb25maWdDYWNoZSA9IHt9KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBmaWVsZC5wYXJlbnQ7XHJcbiAgICBpZiAocGFyZW50Ll9jb21wb25lbnRGYWN0b3J5ICYmIHBhcmVudC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnRSZWYpIHtcclxuICAgICAgcmV0dXJuIHBhcmVudC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnRSZWYuaW5qZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudC5vcHRpb25zLl9pbmplY3RvcjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlT3B0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29tcG9uZW50PzogYW55O1xyXG4gIHdyYXBwZXJzPzogc3RyaW5nW107XHJcbiAgZXh0ZW5kcz86IHN0cmluZztcclxuICBkZWZhdWx0T3B0aW9ucz86IFZYRm9ybUZpZWxkQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdyYXBwZXJPcHRpb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb21wb25lbnQ6IGFueTtcclxuICB0eXBlcz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkVmFsaWRhdG9yRm4ge1xyXG4gIChjOiBBYnN0cmFjdENvbnRyb2wsIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZyk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvck9wdGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbGlkYXRpb246IEZpZWxkVmFsaWRhdG9yRm47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5zaW9uT3B0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uOiBWWEZvcm1FeHRlbnNpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbk1lc3NhZ2VPcHRpb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmcgfCAoKGVycm9yOiBhbnksIGZpZWxkOiBWWEZvcm1GaWVsZENvbmZpZykgPT4gc3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYW5pcHVsYXRvck9wdGlvbiB7XHJcbiAgY2xhc3M/OiB7IG5ldyAoKTogYW55IH07XHJcbiAgbWV0aG9kPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbmlwdWxhdG9yV3JhcHBlciB7XHJcbiAgKGY6IFZYRm9ybUZpZWxkQ29uZmlnKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlTWFuaXB1bGF0b3JzIHtcclxuICBwcmVXcmFwcGVyPzogTWFuaXB1bGF0b3JXcmFwcGVyW107XHJcbiAgcG9zdFdyYXBwZXI/OiBNYW5pcHVsYXRvcldyYXBwZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdPcHRpb24ge1xyXG4gIHR5cGVzPzogVHlwZU9wdGlvbltdO1xyXG4gIHdyYXBwZXJzPzogV3JhcHBlck9wdGlvbltdO1xyXG4gIHZhbGlkYXRvcnM/OiBWYWxpZGF0b3JPcHRpb25bXTtcclxuICBleHRlbnNpb25zPzogRXh0ZW5zaW9uT3B0aW9uW107XHJcbiAgdmFsaWRhdGlvbk1lc3NhZ2VzPzogVmFsaWRhdGlvbk1lc3NhZ2VPcHRpb25bXTtcclxuXHJcbiAgbWFuaXB1bGF0b3JzPzogTWFuaXB1bGF0b3JPcHRpb25bXTtcclxuICBleHRyYXM/OiB7XHJcbiAgICBmaWVsZFRyYW5zZm9ybT86IGFueTtcclxuICAgIGltbXV0YWJsZT86IGJvb2xlYW47XHJcbiAgICBzaG93RXJyb3I/OiAoZmllbGQ6IEZpZWxkVHlwZSkgPT4gYm9vbGVhbjtcclxuICAgIGNoZWNrRXhwcmVzc2lvbk9uPzogXCJtb2RlbENoYW5nZVwiIHwgXCJjaGFuZ2VEZXRlY3Rpb25DaGVja1wiO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVBQQ29uZmlnIHtcclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcbn1cclxuIl19