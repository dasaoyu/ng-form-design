import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { KreFormModule } from "@kre-form/core";
import { KreFormAntModule } from "@kre-form/ant";
import { DesignFormRoutingModule } from './design-form-routing.module';

import { FormComponent } from './index.component';

const COMPONENTS = [
  FormComponent
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, DesignFormRoutingModule, KreFormModule.forRoot(),
    KreFormAntModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DesignFormModule { }
