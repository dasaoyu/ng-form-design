import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { LayoutDefaultComponent } from './default/default.component'; 
import { HeaderComponent } from './default/header/header.component';

const SETTINGDRAWER = []
const COMPONENTS = [
  LayoutDefaultComponent, 
  HeaderComponent, 
  ...SETTINGDRAWER,
];

const HEADERCOMPONENTS = [ 
];

// passport 
const PASSPORT = [];

@NgModule({
  imports: [SharedModule],
  entryComponents: SETTINGDRAWER,
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
