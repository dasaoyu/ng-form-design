import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';  
 
const routes: Routes = [
  // 登录相关
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        loadChildren:()=> import('./design-form/design-form.module').then(m=>m.DesignFormModule)
      },  
      {
        path: 'form',
        loadChildren:()=> import('./design-form/design-form.module').then(m=>m.DesignFormModule)
      },
      {
        path: 'survey',
        loadChildren:()=> import('./design-survey/design-survey.module').then(m=>m.DesignSurveyModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
