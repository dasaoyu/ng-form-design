import { ModuleWithProviders } from "@angular/core";
import { VXFormConfig, ConfigOption } from "./services/vxform.config";
export declare function defaultVXFormConfig(vxFormConfig: VXFormConfig): ConfigOption;
export declare class VXFormModule {
    static forRoot(config?: ConfigOption): ModuleWithProviders<VXFormModule>;
    static forChild(config?: ConfigOption): ModuleWithProviders<VXFormModule>;
    static forConfig(config: string): ModuleWithProviders<VXFormModule>;
    constructor(configService: VXFormConfig, configs?: ConfigOption[]);
}
