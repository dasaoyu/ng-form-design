import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { VXFormModule } from "@vx-form/core";
import { VXFormAntModule } from "@vx-form/ant"; 
import { DesignFormRoutingModule } from './design-form-routing.module';
 
import { FormComponent } from './index.component'; 
 
const COMPONENTS = [ 
  FormComponent
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [ SharedModule,DesignFormRoutingModule,VXFormModule.forRoot(),
    VXFormAntModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DesignFormModule {}
