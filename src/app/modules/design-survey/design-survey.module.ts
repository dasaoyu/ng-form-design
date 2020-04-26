import { NgModule } from '@angular/core';

import { KreFormModule } from "@kre-form/core";
import { KreSurveyModule } from "@kre-form/survey";   
import { DesignSurveyRoutingModule } from './design-survey-routing.module';
 
import { SurveyComponent } from './index.component';
 
const COMPONENTS = [ 
  SurveyComponent
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [ DesignSurveyRoutingModule,
    KreFormModule.forRoot(),
    KreSurveyModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DesignSurveyModule {}
