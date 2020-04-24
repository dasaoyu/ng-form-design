import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './index.component'; 


const routes: Routes = [ 
  { path: '', component: FormComponent,
  data: { title: '常规表单' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignFormRoutingModule {}
