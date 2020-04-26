 
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core';
import { KNZThemeModule } from '@knz/theme'; 
import { KNZRoleModule } from '@knz/role'; 
const MOCK_MODULES = [];
 
const REUSETAB_PROVIDES = [
  
]; 


const GLOBAL_CONFIG_PROVIDES = [

]; 

@NgModule({
  imports: [KNZThemeModule.forRoot(),KNZRoleModule.forRoot(), ...MOCK_MODULES],
})
export class VXModule {
  constructor(@Optional() @SkipSelf() parentModule: VXModule) {
    throwIfAlreadyLoaded(parentModule, 'VXModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VXModule,
      providers: [...REUSETAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
    };
  }
}
