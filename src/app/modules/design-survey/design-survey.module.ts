import { NgModule } from '@angular/core';

import { VXFormModule } from "@vx-form/core";
import { VXSurveyModule } from "@vx-form/survey";   
import { DesignSurveyRoutingModule } from './design-survey-routing.module';
 
import { SurveyComponent } from './index.component';
 
const COMPONENTS = [ 
  SurveyComponent
];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [ DesignSurveyRoutingModule,
    VXFormModule.forRoot(),
    VXSurveyModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DesignSurveyModule {}
