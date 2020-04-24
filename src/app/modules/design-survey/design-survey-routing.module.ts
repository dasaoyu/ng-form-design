import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './index.component';

const routes: Routes = [ 
  { path: '', component: SurveyComponent ,
  data: { title: '问卷表单' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignSurveyRoutingModule {}
